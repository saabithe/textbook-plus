"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Progress } from "@/components/ui/progress";

export function ReadingProgress({
  color,
  top = 0,
}: {
  color: string;
  top?: number;
}) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <Progress
      value={pct}
      aria-label="Reading progress"
      className="fixed left-0 w-full gap-0 p-0 pointer-events-none [&_[data-slot=progress-track]]:rounded-none [&_[data-slot=progress-track]]:bg-muted/30 [&_[data-slot=progress-indicator]]:bg-[var(--reading-color)]"
      style={{ top, zIndex: 60, "--reading-color": color } as CSSProperties}
    />
  );
}
