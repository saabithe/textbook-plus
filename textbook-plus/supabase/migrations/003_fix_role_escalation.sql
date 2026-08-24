-- 003: Fix privilege escalation — users could set their own role='admin'
-- because "Users manage own profile" FOR ALL had no column restriction.

-- Replace the blanket FOR ALL policy with split, scoped policies.
DROP POLICY IF EXISTS "Users manage own profile" ON user_profiles;

CREATE POLICY "Users insert own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users read own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Role changes are only permitted through the admin-only
-- "Admins update roles" policy. This trigger enforces it at the
-- storage level regardless of which UPDATE policy matched.
CREATE OR REPLACE FUNCTION prevent_profile_role_change()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    IF NOT EXISTS (
      SELECT 1 FROM user_profiles WHERE id = auth.uid() AND role = 'admin'
    ) THEN
      RAISE EXCEPTION 'role cannot be changed via a profile update';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP TRIGGER IF EXISTS trg_prevent_profile_role_change ON user_profiles;
CREATE TRIGGER trg_prevent_profile_role_change
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION prevent_profile_role_change();
