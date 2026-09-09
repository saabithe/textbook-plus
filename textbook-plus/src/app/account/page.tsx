"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, Settings, Shield, Trash2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { useAuth } from "@/components/auth/AuthProvider";
import { useSync } from "@/components/auth/SyncProvider";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

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
            <Card className="mx-auto max-w-md rounded-3xl">
              <CardContent className="flex flex-col items-center gap-4 px-6 py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg shadow-green-500/25">
                  <Settings className="h-7 w-7 text-white" />
                </div>
                <h1 className="text-2xl font-extrabold tracking-tight">Your account</h1>
                <p className="text-muted-foreground">
                  Sign in with an email account to manage your settings and keep your progress.
                </p>
                <Button size="lg" className="w-full" render={<Link href="/signup">Create Account</Link>} />
              </CardContent>
            </Card>
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

          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg shadow-green-500/25">
              <Settings className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Your account</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your sign-in and keep your learning progress safe.
              </p>
            </div>
          </div>

          <div className="max-w-lg space-y-8">
            {/* Email */}
            <Card className="rounded-3xl border-border/60 py-0 ring-0">
              <CardContent className="px-6 py-6">
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card className="rounded-3xl border-border/60 py-0 ring-0">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-lg font-semibold">Change Password</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  {pwError && (
                    <Alert variant="destructive">
                      <AlertDescription>{pwError}</AlertDescription>
                    </Alert>
                  )}
                  {pwSuccess && (
                    <Alert>
                      <AlertDescription>Password updated successfully.</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="At least 6 characters"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPw">Confirm Password</Label>
                    <Input
                      id="confirmPw"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat your password"
                    />
                  </div>

                  <Button type="submit" disabled={pwLoading} size="lg" className="w-full">
                    {pwLoading ? "Updating..." : "Update Password"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Delete Account */}
            <Card className="rounded-3xl border border-red-500/20 bg-red-500/5 py-0 ring-0">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg font-semibold text-red-600 dark:text-red-400">
                    Delete Account
                  </CardTitle>
                </div>
                <CardDescription>
                  Permanently delete your account and all associated data. This cannot be undone.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog open={deleteConfirm} onOpenChange={setDeleteConfirm}>
                  <DialogTrigger
                    render={
                      <Button
                        variant="outline"
                        className="border-red-500/30 text-red-600 hover:bg-red-500/10 hover:text-red-600 dark:text-red-400 dark:hover:text-red-400"
                      >
                        Delete Account
                      </Button>
                    }
                  />
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete account?</DialogTitle>
                      <DialogDescription>
                        This permanently deletes your account and all associated data.
                        This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>

                    {deleteError && (
                      <Alert variant="destructive">
                        <AlertDescription>{deleteError}</AlertDescription>
                      </Alert>
                    )}

                    <DialogFooter>
                      <DialogClose render={<Button variant="outline">Cancel</Button>} />
                      <Button
                        variant="destructive"
                        onClick={handleDeleteAccount}
                        disabled={deleteLoading}
                      >
                        {deleteLoading ? "Deleting..." : "Confirm Delete"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
