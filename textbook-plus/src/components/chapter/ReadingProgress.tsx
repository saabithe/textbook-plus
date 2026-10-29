"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Thin chapter reading-progress bar pinned just under the sticky navbar,
 * plus a percentage control that doubles as "back to top".
 * Purely visual — no persistence. 2px ink, square ends (§5.3).
 */
export function ReadingProgress({
  color: _color,
  top = 64,
}: {
  color: string;
  /** Offset from the top of the viewport (defaults to the 64px navbar height). */
  top?: number;
}) {
  const [progress, setProgress] = useState(0); // 0..1
  const [chipVisible, setChipVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, el.scrollTop / max)) : 0;
      setProgress(p);
      setChipVisible(el.scrollTop > window.innerHeight * 0.12 && p < 0.999);
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

  const pct = Math.round(progress * 100);

  const backToTop = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 z-40 h-[2px] w-full"
        style={{ top }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full w-full bg-border" />
        <div
          className="absolute inset-y-0 left-0 w-full origin-left bg-foreground will-change-transform transition-transform duration-[120ms] ease-blueprint motion-reduce:transition-none"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        aria-hidden={!chipVisible}
        tabIndex={chipVisible ? 0 : -1}
        className={cn(
          "fixed bottom-5 right-5 z-40 flex items-center gap-1.5 rounded-[3px] border border-border bg-card px-2.5 py-1.5 text-[11px] font-bold tabular-nums text-foreground transition-[opacity,transform,border-color] duration-[180ms] ease-blueprint motion-reduce:transition-none hover:border-rule-strong",
          chipVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        )}
      >
        <ArrowUp className="h-3 w-3" strokeWidth={2} />
        {pct}%
      </button>
    </>
  );
}
