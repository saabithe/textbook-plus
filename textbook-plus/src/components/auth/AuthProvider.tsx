"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

interface AuthContextValue {
  user: User | null;
  isAnonymous: boolean;
  loading: boolean;
  supabase: ReturnType<typeof createClient>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      // Check existing session
      const { data: { user: existing } } = await supabase.auth.getUser();
      if (!cancelled && existing) {
        setUser(existing);
        setLoading(false);
        return;
      }

      // No session — sign in anonymously
      const { data: { user: anon }, error } = await supabase.auth.signInAnonymously();
      if (!cancelled) {
        setUser(anon ?? null);
        setLoading(false);
        if (error) console.error("Anonymous sign-in failed:", error.message);
      }
    }

    init();

    // Listen for auth changes (token refresh, sign-in, sign-out)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!cancelled) {
          setUser(session?.user ?? null);
        }
      }
    );

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const isAnonymous = user?.app_metadata?.provider === "anonymous";

  return (
    <AuthContext.Provider value={{ user, isAnonymous, loading, supabase }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
