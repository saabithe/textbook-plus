"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ShieldCheck } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

const DISMISS_KEY = "migrate-banner-dismissed";

export function MigrateBanner() {
  const { isAnonymous, loading } = useAuth();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (loading) return;
    if (!isAnonymous) return;
    const wasDismissed = localStorage.getItem(DISMISS_KEY) === "true";
    setDismissed(wasDismissed);
  }, [isAnonymous, loading]);

  if (loading || !isAnonymous || dismissed) return null;

  function handleDismiss() {
    localStorage.setItem(DISMISS_KEY, "true");
    setDismissed(true);
  }

  return (
    <div className="border-b border-border/40 bg-muted/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2.5">
        <div className="flex items-center gap-2 text-sm">
          <ShieldCheck className="h-4 w-4 text-muted-foreground shrink-0" />
          <p className="text-muted-foreground">
            Your progress is saved locally.{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground underline underline-offset-2 hover:opacity-80"
            >
              Create an account
            </Link>{" "}
            to sync across devices.
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
