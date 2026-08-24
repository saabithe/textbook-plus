"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Shield, Trash2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { useAuth } from "@/components/auth/AuthProvider";
import { useSync } from "@/components/auth/SyncProvider";
import { cn } from "@/lib/utils";

export default function AccountPage() {
  const { user, supabase, isAnonymous } = useAuth();
  const sync = useSync();
  const router = useRouter();

  // Password change
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwSuccess, setPwSuccess] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);

  // Delete account
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState("");

  if (!user || isAnonymous) {
    return (
      <>
        <Navbar />
        <main className="flex-1">
          <section className="mx-auto max-w-6xl px-6 py-14">
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-bold">Account Settings</h1>
              <p className="text-muted-foreground">
                Sign in with an email account to access settings.
              </p>
              <Link
                href="/signup"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90"
              >
                Create Account
              </Link>
            </div>
          </section>
        </main>
      </>
    );
  }

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setPwError("");
    setPwSuccess(false);

    if (newPassword !== confirmPassword) {
      setPwError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 6) {
      setPwError("Password must be at least 6 characters.");
      return;
    }

    setPwLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) {
        setPwError(error.message);
      } else {
        setPwSuccess(true);
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch {
      setPwError("Something went wrong. Please try again.");
    }
    setPwLoading(false);
  }

  async function handleDeleteAccount() {
    if (!deleteConfirm) {
      setDeleteConfirm(true);
      return;
    }
    if (!user) return;

    setDeleteLoading(true);
    setDeleteError("");

    try {
      // Delete user data first
      const { error: dataErr } = await supabase
        .from("user_progress")
        .delete()
        .eq("user_id", user.id);
      if (dataErr) {
        setDeleteError(dataErr.message);
        setDeleteLoading(false);
        return;
      }

      const { error: pracErr } = await supabase
        .from("user_practice")
        .delete()
        .eq("user_id", user.id);
      if (pracErr) {
        setDeleteError(pracErr.message);
        setDeleteLoading(false);
        return;
      }

      // Sign out — Supabase cascades user deletion via RLS
      sync.clearLocalData();
      await supabase.auth.signOut();
      router.push("/");
    } catch {
      setDeleteError("Something went wrong. Please try again.");
      setDeleteLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
            <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">Account</span>
          </nav>

          <h1 className="text-3xl font-bold tracking-tight mb-8">Account Settings</h1>

          <div className="max-w-lg space-y-8">
            {/* Email */}
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <h2 className="text-lg font-semibold mb-1">Email</h2>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>

            {/* Change Password */}
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">Change Password</h2>
              </div>

              <form onSubmit={handlePasswordChange} className="space-y-4">
                {pwError && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    {pwError}
                  </div>
                )}
                {pwSuccess && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400">
                    Password updated successfully.
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                  <input
                    id="newPassword"
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="flex h-10 w-full rounded-lg border border-border/60 bg-muted/50 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="At least 6 characters"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPw" className="text-sm font-medium">Confirm Password</label>
                  <input
                    id="confirmPw"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="flex h-10 w-full rounded-lg border border-border/60 bg-muted/50 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Repeat your password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={pwLoading}
                  className="flex h-10 items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90 disabled:opacity-50"
                >
                  {pwLoading ? "Updating..." : "Update Password"}
                </button>
              </form>
            </div>

            {/* Delete Account */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Trash2 className="h-5 w-5 text-red-500" />
                <h2 className="text-lg font-semibold text-red-600 dark:text-red-400">Delete Account</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Permanently delete your account and all associated data. This cannot be undone.
              </p>

              {deleteError && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400 mb-4">
                  {deleteError}
                </div>
              )}

              <button
                onClick={handleDeleteAccount}
                disabled={deleteLoading}
                className={cn(
                  "flex h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all disabled:opacity-50",
                  deleteConfirm
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "border border-red-500/30 bg-transparent text-red-600 dark:text-red-400 hover:bg-red-500/10"
                )}
              >
                {deleteLoading
                  ? "Deleting..."
                  : deleteConfirm
                  ? "Confirm Delete — This is permanent"
                  : "Delete Account"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
