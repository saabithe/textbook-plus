"use client";

import { useEffect, useState } from "react";
import { RefreshCw, X } from "lucide-react";

export function UpdateBanner() {
  const [show, setShow] = useState(false);
  const [waiting, setWaiting] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    navigator.serviceWorker.ready.then((registration) => {
      if (registration.waiting) {
        setWaiting(registration.waiting);
        setShow(true);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            setWaiting(newWorker);
            setShow(true);
          }
        });
      });
    });
  }, []);

  if (!show || !waiting) return null;

  function handleUpdate() {
    waiting!.postMessage({ type: "SKIP_WAITING" });
    setShow(false);
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 flex items-center justify-between gap-4 border-t border-border/40 bg-background/90 px-6 py-3 backdrop-blur-xl">
      <p className="text-sm font-medium">Update available</p>
      <div className="flex items-center gap-2">
        <button
          onClick={handleUpdate}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Update
        </button>
        <button
          onClick={() => setShow(false)}
          className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
