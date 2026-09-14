"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stage {
  label: string;
  detail: string;
}

const STAGES: Stage[] = [
  {
    label: "Charge oscillates",
    detail: "An oscillating charge is an accelerating charge — driven at some frequency ν.",
  },
  {
    label: "E oscillates",
    detail: "The charge produces an oscillating electric field in space.",
  },
  {
    label: "B appears",
    detail: "The changing electric field produces an oscillating magnetic field.",
  },
  {
    label: "B regenerates E",
    detail: "The changing magnetic field, in turn, is a source of oscillating electric field.",
  },
  {
    label: "Wave propagates",
    detail: "E and B regenerate each other as the wave travels. The wave frequency equals the charge's oscillation frequency; the energy comes from the source.",
  },
];

const INTERVAL_MS = 1600;

export function OscillationPlayer() {
  const [active, setActive] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const stop = useCallback(() => {
    clearTimer();
    setPlaying(false);
  }, []);

  const reset = useCallback(() => {
    stop();
    setActive(-1);
  }, [stop]);

  const play = useCallback(() => {
    stop();
    setActive(0);
    setPlaying(true);
  }, [stop]);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setActive((a) => {
        if (a >= STAGES.length - 1) {
          clearTimer();
          setPlaying(false);
          return a;
        }
        return a + 1;
      });
    }, INTERVAL_MS);
    return clearTimer;
  }, [playing]);

  useEffect(() => clearTimer, []);

  return (
    <div className="my-6 rounded-2xl border border-blue-500/20 bg-card p-4 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 text-sm font-extrabold tracking-wide text-blue-900 dark:text-blue-100">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span>An oscillating charge produces an electromagnetic wave</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={playing ? stop : play}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-sm font-bold tracking-tight text-white shadow-sm transition-colors",
              playing
                ? "bg-amber-500 hover:bg-amber-600 shadow-amber-500/30"
                : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/30"
            )}
          >
            <Play className="h-4 w-4" />
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border/60 bg-muted/40 px-3 py-1.5 text-sm font-bold tracking-tight text-foreground/70 transition-colors hover:bg-muted/60"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-5">
        {STAGES.map((stage, i) => {
          const isActive = active >= i && active !== -1;
          return (
            <div
              key={stage.label}
              className={cn(
                "relative flex flex-col gap-1 rounded-xl border px-3 py-2.5 transition-all duration-300",
                isActive
                  ? "border-blue-500 bg-blue-500/[0.08] shadow-sm shadow-blue-500/20"
                  : "border-border/50 bg-muted/20 opacity-50"
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-full text-[0.65rem] font-extrabold text-white",
                  isActive
                    ? "bg-gradient-to-br from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/40"
                    : "bg-muted-foreground/30"
                )}
              >
                {i + 1}
              </span>
              <p
                className={cn(
                  "text-[0.8rem] font-bold leading-tight tracking-tight",
                  isActive ? "text-blue-900 dark:text-blue-100" : "text-foreground/70"
                )}
              >
                {stage.label}
              </p>
              {isActive && (
                <p className="text-[0.72rem] leading-snug text-foreground/75">{stage.detail}</p>
              )}
              {i < STAGES.length - 1 && (
                <span
                  className={cn(
                    "absolute -right-2 top-1/2 hidden -translate-y-1/2 text-sm font-black sm:block",
                    active >= i ? "text-blue-400" : "text-muted-foreground/40"
                  )}
                >
                  ›
                </span>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-center text-[0.75rem] text-muted-foreground">
        Everything is shown dimmed by default — press <strong>Play</strong> to walk through the causal chain.
      </p>
    </div>
  );
}