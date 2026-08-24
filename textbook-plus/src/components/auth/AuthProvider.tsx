"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

interface AuthContextValue {
  user: User | null;
  isAnonymous: boolean;
  loading: boolean;
  supabase: ReturnType<typeof createClient>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// No-op supabase client used when Supabase isn't configured
const notConfigured = () => new Error("Supabase not configured");
const noopSupabase = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    if (prop === "auth") {
      return {
        getUser: async () => ({ data: { user: null }, error: null }),
        getSession: async () => ({ data: { session: null }, error: null }),
        signInAnonymously: async () => ({ data: { user: null }, error: notConfigured() }),
        signInWithPassword: async () => ({ data: { user: null, session: null }, error: notConfigured() }),
        signUp: async () => ({ data: { user: null, session: null }, error: notConfigured() }),
        resetPasswordForEmail: async () => ({ data: {}, error: notConfigured() }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
        updateUser: async () => ({ data: { user: null }, error: notConfigured() }),
        signOut: async () => ({ error: null }),
      };
    }
    return () => ({ data: null, error: notConfigured() });
  },
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const configured = isSupabaseConfigured();
  const [supabase] = useState(() => (configured ? createClient() : noopSupabase));
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function init() {
      // Only mint a brand-new anonymous user when there is no session at all.
      // If a session exists but getUser() fails (expired/revoked token),
      // do NOT create a fresh anonymous identity — that would orphan the
      // user's existing cloud progress rows.
      const { data: { session } } = await supabase.auth.getSession();

      if (!cancelled && session?.user) {
        const { data: { user: verified }, error } = await supabase.auth.getUser();
        if (!cancelled) {
          setUser(verified ?? session.user ?? null);
          setLoading(false);
          if (error && !verified) {
            console.error("Session verification failed:", error.message);
          }
        }
        return;
      }

      const { data: { user: anon }, error } = await supabase.auth.signInAnonymously();
      if (!cancelled) {
        setUser(anon ?? null);
        setLoading(false);
        if (error) console.error("Anonymous sign-in failed:", error.message);
      }
    }

    init();

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
  }, [supabase, configured]);

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
