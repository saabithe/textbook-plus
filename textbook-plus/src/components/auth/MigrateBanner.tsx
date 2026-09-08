"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/components/auth/AuthProvider";

const DISMISS_KEY = "migrate-banner-dismissed";

export function MigrateBanner() {
  const { isAnonymous, loading } = useAuth();
  const router = useRouter();
  const firedRef = useRef(false);

  useEffect(() => {
    if (loading) return;
    if (!isAnonymous) return;
    if (firedRef.current) return;
    let wasDismissed = false;
    try {
      wasDismissed = localStorage.getItem(DISMISS_KEY) === "true";
    } catch {}
    if (wasDismissed) return;
    firedRef.current = true;
    toast.info("Your progress is saved locally. Create an account to sync across devices.", {
      action: {
        label: "Go to account",
        onClick: () => router.push("/account"),
      },
      onDismiss: () => {
        try {
          localStorage.setItem(DISMISS_KEY, "true");
        } catch {}
      },
    });
  }, [isAnonymous, loading, router]);

  return null;
}
