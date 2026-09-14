"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stage {
  label: string;
  detail: string;
}

const STAGES: Stage[] = [
  {
    label: "Charge oscillates",
    detail: "An oscillating charge is an accelerating charge — driven up and down at some frequency ν.",
  },
  {
    label: "E oscillates",
    detail: "The moving charge emits an oscillating electric field that ripples outward.",
  },
  {
    label: "B appears",
    detail: "The changing electric field produces an oscillating magnetic field, perpendicular to it.",
  },
  {
    label: "B regenerates E",
    detail: "The changing magnetic field, in turn, is a source of a fresh oscillating electric field.",
  },
  {
    label: "Wave propagates",
    detail: "E and B regenerate each other as the wave travels. The wave's frequency equals the charge's oscillation frequency; the energy comes from the source.",
  },
];

const INTERVAL_MS = 1600;
const LAMBDA = 130; // wavelength in SVG px — must match the @keyframes translation
const WAVE_SPAN = 660; // total drawn length = LAMBDA + visible width for seamless scroll
const VISIBLE_FROM = 150; // start of the visible axis (source end)

function sinePoints(amp: number, from: number, to: number, step = 4): string {
  const pts: string[] = [];
  for (let x = from; x <= to; x += step) {
    const y = -amp * Math.sin((2 * Math.PI * x) / LAMBDA);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

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

  const eWave = useMemo(() => sinePoints(30, 0, WAVE_SPAN), []);
  const bWave = useMemo(() => sinePoints(22, 0, WAVE_SPAN), []);

  // B "vertical" ticks ride the same phase as E (in-phase fields)
  const bTicks = useMemo(() => {
    const pts: { x: number; r: number }[] = [];
    for (let x = 0; x <= WAVE_SPAN; x += LAMBDA / 2) {
      const s = Math.abs(Math.sin((2 * Math.PI * x) / LAMBDA));
      if (s > 0.85) pts.push({ x, r: 5 + 4.5 * s });
    }
    return pts;
  }, []);

  // E arrow ticks — show the field oscillating perpendicular to the axis
  const eTicks = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let x = 0; x <= WAVE_SPAN; x += LAMBDA / 2) {
      const s = Math.sin((2 * Math.PI * x) / LAMBDA);
      if (Math.abs(s) > 0.85) pts.push({ x, y: -Math.sign(s) * 30 });
    }
    return pts;
  }, []);

  const stageOff = active === -1;
  const showE = active >= 1 && !stageOff;
  const showB = active >= 2 && !stageOff;
  const showFront = active >= 4 && !stageOff;

  return (
    <div className={cn("my-6 rounded-2xl border border-blue-500/20 bg-card p-4 shadow-sm", !playing && "anim-paused")}>
      <style>{`
        @keyframes chargeBob {
          from { transform: translateY(-34px); }
          to   { transform: translateY(34px); }
        }
        @keyframes waveScroll {
          from { transform: translateX(0px); }
          to   { transform: translateX(${-LAMBDA}px); }
        }
        @keyframes frontSweep {
          from { transform: translateX(${VISIBLE_FROM}px); }
          to   { transform: translateX(${WAVE_SPAN - LAMBDA}px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 1; }
        }
        .osc-wave-scroll { animation: waveScroll 2.4s linear infinite; }
        .osc-e-ticks     { animation: waveScroll 2.4s linear infinite; }
        .osc-front       { animation: frontSweep 2.2s linear infinite; }
        .anim-paused .osc-wave-scroll,
        .anim-paused .osc-e-ticks,
        .anim-paused .osc-front { animation-play-state: paused; }
      `}</style>

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

      <div className="overflow-hidden rounded-xl border border-border/40 bg-gradient-to-b from-muted/40 to-card">
        <svg viewBox="0 0 760 250" className="w-full" role="img" aria-label="Animation of an oscillating charge emitting an electromagnetic wave">
          <defs>
            <radialGradient id="chargeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#34d399" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* propagation axis */}
          <line x1={VISIBLE_FROM} y1="125" x2="745" y2="125" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.5" />
          {/* axis arrow */}
          <path d="M752 125 l-10 -6 v12 z" fill="#94a3b8" opacity="0.6" />
          <text x="735" y="150" textAnchor="end" fontSize="12" fontWeight="700" fill="#94a3b8">
            propagation →
          </text>

          {/* source antenna */}
          <line x1="95" y1="45" x2="95" y2="205" stroke="#64748b" strokeWidth="2.5" opacity={stageOff ? 0.5 : 1} />
          <g style={stageOff ? undefined : { animation: "chargeBob 0.9s ease-in-out infinite alternate" }}>
            <circle cx="95" cy="125" r="20" fill="url(#chargeGlow)" />
            <circle cx="95" cy="125" r="9" fill="#10b981" stroke="#065f46" strokeWidth="1.5" />
            <text x="95" y="129" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">
              +
            </text>
          </g>
          <text x="95" y="222" textAnchor="middle" fontSize="11" fontWeight="700" fill="#10b981">
            oscillating charge
          </text>

          {/* E wave (violet) — oscillates vertically */}
          <g transform={`translate(${VISIBLE_FROM},125)`} opacity={showE ? 1 : 0.12} className="osc-wave-scroll">
            <polyline points={eWave} fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinejoin="round" />
          </g>
          {/* E field tick arrows — ride the wave swill */}
          <g transform={`translate(${VISIBLE_FROM},125)`} opacity={showE ? 0.85 : 0} className="osc-e-ticks">
            {eTicks.map((t) => (
              <line key={`${t.x}-${t.y}`} x1={t.x} y1="0" x2={t.x} y2={t.y} stroke="#c4b5fd" strokeWidth="2" />
            ))}
          </g>
          <text x={VISIBLE_FROM + 14} y="34" fontSize="12" fontWeight="800" fill="#8b5cf6" opacity={showE ? 1 : 0.3}>
            E (electric) field
          </text>

          {/* B wave (amber) — perpendicular, shown as an oscillating lane */}
          <g transform={`translate(${VISIBLE_FROM},185)`} opacity={showB ? 0.95 : 0.1} className="osc-wave-scroll">
            <polyline points={bWave} fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinejoin="round" opacity="0.35" />
            <circle cx="0" cy="0" r="4" fill="#f59e0b" />
          </g>
          {/* B "into / out of page" dots — in phase with E */}
          <g transform={`translate(${VISIBLE_FROM},125)`} opacity={showB ? 1 : 0} className="osc-wave-scroll">
            {bTicks.map((t) => (
              <g key={t.x}>
                <circle cx={t.x} cy="0" r={t.r} fill="none" stroke="#f59e0b" strokeWidth="2" />
                <circle cx={t.x} cy="0" r={t.r * 0.4} fill="#f59e0b" />
              </g>
            ))}
          </g>
          <text x={VISIBLE_FROM + 14} y="225" fontSize="12" fontWeight="800" fill="#f59e0b" opacity={showB ? 1 : 0.3}>
            B (magnetic) field ⊙ — into/out of page
          </text>

          {/* propagating wavefront */}
          {showFront && (
            <g className="osc-front">
              <line x1="0" y1="115" x2="0" y2="135" stroke="#fff" strokeWidth="2.5" style={{ animation: "pulseGlow 1s ease-in-out infinite" }} />
              <line x1="0" y1="112" x2="0" y2="138" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
            </g>
          )}
        </svg>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-5">
        {STAGES.map((stage, i) => {
          const isActive = active >= i && active !== -1;
          return (
            <button
              key={stage.label}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative flex flex-col gap-1 rounded-xl border px-3 py-2.5 text-left transition-all duration-300",
                isActive
                  ? "border-blue-500 bg-blue-500/[0.08] shadow-sm shadow-blue-500/20"
                  : "border-border/50 bg-muted/20 opacity-50 hover:opacity-80"
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
              <p className={cn("text-[0.8rem] font-bold leading-tight tracking-tight", isActive ? "text-blue-900 dark:text-blue-100" : "text-foreground/70")}>
                {stage.label}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-3 min-h-[3.5rem] rounded-xl border border-blue-500/25 bg-blue-500/[0.06] px-4 py-3">
        <p className="text-[0.95rem] leading-relaxed text-foreground/85">
          {active === -1 ? (
            <>
              Press <strong>Play</strong> to watch the charge oscillate and emit a self-sustaining wave — E (violet) and B (amber){" "}
              regenerate each other in phase. Or click any step to jump straight to that stage.
            </>
          ) : (
            <>
              <strong className="text-blue-700 dark:text-blue-300">{STAGES[active].label}.</strong> {STAGES[active].detail}
            </>
          )}
        </p>
      </div>
    </div>
  );
}