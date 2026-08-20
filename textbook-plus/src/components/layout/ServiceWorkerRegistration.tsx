"use client";

import { useEffect } from "react";

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    return () => {
      if ("serviceWorker" in navigator && process.env.NODE_ENV !== "production") {
        navigator.serviceWorker.getRegistrations().then((regs) => {
          for (const reg of regs) reg.unregister();
        });
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      }
    };
  }, []);

  return null;
}
