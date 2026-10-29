"use client";

import { usePathname } from "next/navigation";

export function CreditFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="w-full border-t border-border px-6 py-6 text-center">
      <p className="t-micro">
        Powered by <span className="text-foreground">Sabith Thirunilath</span>
      </p>
    </footer>
  );
}
