"use client";

import { useState, useRef, useCallback } from "react";
import { Zap, BookOpen, Library } from "lucide-react";
import { cn } from "@/lib/utils";

interface SummaryLevelsProps {
  defaultLevel?: "quick" | "standard" | "detailed";
  quick: React.ReactNode;
  standard: React.ReactNode;
  detailed: React.ReactNode;
}

const LEVELS = [
  { key: "quick" as const, label: "Quick", icon: Zap },
  { key: "standard" as const, label: "Standard", icon: BookOpen },
  { key: "detailed" as const, label: "Detailed", icon: Library },
];

export function SummaryLevels({ defaultLevel = "standard", quick, standard, detailed }: SummaryLevelsProps) {
  const [level, setLevel] = useState(() => LEVELS.findIndex((l) => l.key === defaultLevel));
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const content = [quick, standard, detailed];

  const calcIndex = useCallback((clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return level;
    const x = clientX - rect.left;
    const pct = x / rect.width;
    return Math.max(0, Math.min(2, Math.round(pct * 2.999)));
  }, [level]);

  const setFromPointer = useCallback((clientX: number) => {
    const idx = calcIndex(clientX);
    setLevel(idx);
  }, [calcIndex]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setFromPointer(e.clientX);
  }, [setFromPointer]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromPointer(e.clientX);
  }, [setFromPointer]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setLevel((i) => Math.min(2, i + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setLevel((i) => Math.max(0, i - 1));
    }
  }, []);

  return (
    <div className="my-6">
      {/* Slider track */}
      <div
        ref={trackRef}
        role="slider"
        aria-label="Summary verbosity"
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={level + 1}
        tabIndex={0}
        className={cn(
          "relative flex h-11 w-full max-w-md rounded-full border border-border/60 bg-muted/70 p-1 cursor-pointer select-none",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
      >
        {/* Sliding thumb */}
        <div
          className="absolute top-1 bottom-1 w-[calc((100%-8px)/3)] rounded-full bg-background shadow-sm border border-border/40 transition-transform duration-200 ease-out pointer-events-none"
          style={{ transform: `translateX(calc(${level} * 100%))` }}
        />

        {/* Segment labels */}
        {LEVELS.map((l, i) => {
          const Icon = l.icon;
          const active = level === i;
          return (
            <button
              key={l.key}
              type="button"
              onClick={() => setLevel(i)}
              className={cn(
                "relative z-10 flex items-center justify-center gap-1.5 flex-1 text-sm font-medium transition-colors duration-200 rounded-full select-none pointer-events-auto",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
              )}
              tabIndex={-1}
              aria-hidden
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{l.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-4 animate-fade-in" key={level}>
        {content[level]}
      </div>
    </div>
  );
}
