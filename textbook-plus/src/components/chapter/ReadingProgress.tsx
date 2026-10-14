"use client";

import { useEffect, useState, useCallback } from "react";
import type { CSSProperties } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Thin chapter reading-progress bar pinned just under the sticky navbar,
 * plus a floating percentage chip that doubles as a "back to top" button.
 * Purely visual — no persistence.
 */
export function ReadingProgress({
  color,
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
        className="pointer-events-none fixed left-0 z-40 h-[3px] w-full"
        style={{ top }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full w-full bg-border/40" />
        <div
          className="absolute inset-y-0 left-0 w-full origin-left will-change-transform transition-transform duration-150 ease-out motion-reduce:transition-none"
          style={
            {
              transform: `scaleX(${progress})`,
              background: `linear-gradient(90deg, ${color}, ${color}AA)`,
              boxShadow: `0 0 10px ${color}66`,
            } as CSSProperties
          }
        />
      </div>

      <button
        type="button"
        onClick={backToTop}
        aria-label="Back to top"
        aria-hidden={!chipVisible}
        tabIndex={chipVisible ? 0 : -1}
        className={cn(
          "fixed bottom-5 right-5 z-40 flex items-center gap-1.5 rounded-full border border-border/70 bg-card/90 px-3 py-2 text-xs font-extrabold tabular-nums text-foreground shadow-lg backdrop-blur transition-all duration-300 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-xl",
          chipVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <ArrowUp className="h-3.5 w-3.5" />
        {pct}%
      </button>
    </>
  );
}
