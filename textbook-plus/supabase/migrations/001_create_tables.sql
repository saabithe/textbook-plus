-- =============================================
-- Textbook++ Database Schema
-- Run this in Supabase SQL Editor → https://supabase.com/dashboard/project/_/sql/new
-- Safe to re-run (uses IF NOT EXISTS / DROP IF EXISTS)
-- =============================================

-- ─── User Profiles ───────────────────────────
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  display_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── User Progress ───────────────────────────
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  subject_slug TEXT NOT NULL,
  chapter_slug TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, subject_slug, chapter_slug)
);

-- ─── User Practice ───────────────────────────
CREATE TABLE IF NOT EXISTS user_practice (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  subject_slug TEXT NOT NULL,
  chapter_slug TEXT NOT NULL,
  questions_revealed TEXT[] DEFAULT '{}',
  flashcards_known TEXT[] DEFAULT '{}',
  flashcards_unknown TEXT[] DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, chapter_slug)
);

-- ─── Indexes ─────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_progress_user ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_progress_subject ON user_progress(subject_slug);
CREATE INDEX IF NOT EXISTS idx_practice_user ON user_practice(user_id);
CREATE INDEX IF NOT EXISTS idx_practice_chapter ON user_practice(chapter_slug);

-- ─── Row Level Security ──────────────────────
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_practice ENABLE ROW LEVEL SECURITY;

-- Drop and recreate all policies (idempotent)
DROP POLICY IF EXISTS "Users manage own profile" ON user_profiles;
CREATE POLICY "Users manage own profile" ON user_profiles
  FOR ALL USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users manage own progress" ON user_progress;
CREATE POLICY "Users manage own progress" ON user_progress
  FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users manage own practice" ON user_practice;
CREATE POLICY "Users manage own practice" ON user_practice
  FOR ALL USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins read all profiles" ON user_profiles;
CREATE POLICY "Admins read all profiles" ON user_profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin')
  );

DROP POLICY IF EXISTS "Admins read all progress" ON user_progress;
CREATE POLICY "Admins read all progress" ON user_progress
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin')
  );

DROP POLICY IF EXISTS "Admins read all practice" ON user_practice;
CREATE POLICY "Admins read all practice" ON user_practice
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin')
  );

DROP POLICY IF EXISTS "Admins update roles" ON user_profiles;
CREATE POLICY "Admins update roles" ON user_profiles
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin')
  )
  WITH CHECK (role IN ('user', 'admin'));

-- ─── Auto-create profile on signup ───────────
-- This trigger MUST NOT break signup. Wrapped in exception handler.
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, display_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email));
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  RAISE WARNING 'Failed to create profile for user %: %', NEW.id, SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ─── Updated At Trigger ──────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at_progress ON user_progress;
CREATE TRIGGER set_updated_at_progress
  BEFORE UPDATE ON user_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS set_updated_at_practice ON user_practice;
CREATE TRIGGER set_updated_at_practice
  BEFORE UPDATE ON user_practice
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
