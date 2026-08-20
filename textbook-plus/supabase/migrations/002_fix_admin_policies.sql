-- =============================================
-- Fix: infinite recursion in admin policies on user_profiles
-- Root cause: admin policies SELECT from user_profiles
-- while RLS is active on that same table → Postgres detects
-- the recursive policy evaluation and returns 500.
--
-- Fix: SECURITY DEFINER helper function bypasses RLS.
-- Safe to re-run (idempotent).
-- =============================================

-- RLS-bypassing helper (runs as function owner — no recursion)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_profiles WHERE id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Drop + recreate all 4 recursive admin policies to use is_admin()

DROP POLICY IF EXISTS "Admins read all profiles" ON user_profiles;
CREATE POLICY "Admins read all profiles" ON user_profiles
  FOR SELECT USING (public.is_admin());

DROP POLICY IF EXISTS "Admins read all progress" ON user_progress;
CREATE POLICY "Admins read all progress" ON user_progress
  FOR SELECT USING (public.is_admin());

DROP POLICY IF EXISTS "Admins read all practice" ON user_practice;
CREATE POLICY "Admins read all practice" ON user_practice
  FOR SELECT USING (public.is_admin());

DROP POLICY IF EXISTS "Admins update roles" ON user_profiles;
CREATE POLICY "Admins update roles" ON user_profiles
  FOR UPDATE USING (public.is_admin())
  WITH CHECK (role IN ('user', 'admin'));
