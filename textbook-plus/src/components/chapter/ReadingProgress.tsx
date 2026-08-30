"use client";

import { useEffect, useState } from "react";

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
    <div
      className="fixed left-0 w-full h-1 bg-muted/30 pointer-events-none"
      style={{ top, zIndex: 60 }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      aria-label="Reading progress"
    >
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}
