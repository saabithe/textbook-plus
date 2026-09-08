"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function UpdateBanner() {
  const waitingRef = useRef<ServiceWorker | null>(null);
  const toastIdRef = useRef<string | number | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    function applyUpdate() {
      waitingRef.current?.postMessage({ type: "SKIP_WAITING" });
      if (toastIdRef.current !== null) {
        toast.dismiss(toastIdRef.current);
        toastIdRef.current = null;
      }
    }

    function showUpdateToast(worker: ServiceWorker) {
      waitingRef.current = worker;
      if (toastIdRef.current !== null) return;
      toastIdRef.current = toast.warning("Update available", {
        duration: Infinity,
        dismissible: true,
        action: {
          label: "Update",
          onClick: applyUpdate,
        },
      });
    }

    navigator.serviceWorker.ready.then((registration) => {
      if (registration.waiting) {
        showUpdateToast(registration.waiting);
      }

      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (!newWorker) return;
        newWorker.addEventListener("statechange", () => {
          if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
            showUpdateToast(newWorker);
          }
        });
      });
    }).catch(() => {});

    const onControllerChange = () => window.location.reload();
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
  }, []);

  return null;
}
