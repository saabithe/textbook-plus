"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className={cn("my-6 rounded-lg border border-border bg-card p-4", !playing && "anim-paused")}>
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
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <span>An oscillating charge produces an electromagnetic wave</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" onClick={playing ? stop : play}>
            <Play className="h-4 w-4" />
            {playing ? "Pause" : "Play"}
          </Button>
          <Button variant="outline" size="sm" onClick={reset}>
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-hidden rounded-lg border border-border bg-card">
        <svg viewBox="0 0 760 250" className="w-full min-w-[560px]" role="img" aria-label="Animation of an oscillating charge emitting an electromagnetic wave">
          {/* propagation axis */}
          <line x1={VISIBLE_FROM} y1="125" x2="745" y2="125" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 5" />
          {/* axis arrow */}
          <path d="M752 125 l-11 -7 v14 z" fill="var(--muted-foreground)" opacity="0.7" />
          <text x="735" y="152" textAnchor="end" fontSize="11" fontWeight="600" fill="var(--muted-foreground)">
            propagation →
          </text>

          {/* source antenna */}
          <line x1="95" y1="40" x2="95" y2="210" stroke="var(--muted-foreground)" strokeOpacity="0.6" strokeWidth="3" opacity={stageOff ? 0.5 : 1} />
          <g style={stageOff ? undefined : { animation: "chargeBob 0.9s ease-in-out infinite alternate" }}>
            <circle cx="95" cy="125" r="24" fill="var(--subject-physics)" fillOpacity="0.14" />
            <circle cx="95" cy="125" r="11" fill="var(--subject-physics)" stroke="var(--card)" strokeWidth="1.5" />
            <text x="95" y="131" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--card)">
              +
            </text>
          </g>
          <text x="95" y="228" textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--foreground)">
            oscillating charge
          </text>

          {/* E wave — oscillates vertically */}
          <g transform={`translate(${VISIBLE_FROM},125)`} opacity={showE ? 1 : 0.12} className="osc-wave-scroll">
            <polyline points={eWave} fill="none" stroke="var(--subject-physics)" strokeWidth="3" strokeLinejoin="round" />
          </g>
          {/* E field tick arrows — ride the wave swill */}
          <g transform={`translate(${VISIBLE_FROM},125)`} opacity={showE ? 1 : 0} className="osc-e-ticks">
            {eTicks.map((t) => (
              <line key={`${t.x}-${t.y}`} x1={t.x} y1="0" x2={t.x} y2={t.y} stroke="var(--subject-physics)" strokeOpacity="0.45" strokeWidth="2.5" />
            ))}
          </g>
          <text x={VISIBLE_FROM + 18} y="38" fontSize="11" fontWeight="700" fill="var(--foreground)" opacity={showE ? 1 : 0.3}>
            E (electric) field
          </text>

          {/* B wave — perpendicular, shown as an oscillating lane */}
          <g transform={`translate(${VISIBLE_FROM},185)`} opacity={showB ? 0.95 : 0.1} className="osc-wave-scroll">
            <polyline points={bWave} fill="none" stroke="var(--foreground)" strokeWidth="3" strokeLinejoin="round" opacity="0.4" />
            <circle cx="0" cy="0" r="5" fill="var(--foreground)" />
          </g>
          {/* B "into / out of page" dots — in phase with E */}
          <g transform={`translate(${VISIBLE_FROM},125)`} opacity={showB ? 1 : 0} className="osc-wave-scroll">
            {bTicks.map((t) => (
              <g key={t.x}>
                <circle cx={t.x} cy="0" r={t.r} fill="none" stroke="var(--foreground)" strokeWidth="2" />
                <circle cx={t.x} cy="0" r={t.r * 0.4} fill="var(--foreground)" />
              </g>
            ))}
          </g>
          <text x={VISIBLE_FROM + 18} y="228" fontSize="11" fontWeight="700" fill="var(--foreground)" opacity={showB ? 1 : 0.3}>
            B (magnetic) field ⊙ — into/out of page
          </text>

          {/* propagating wavefront */}
          {showFront && (
            <g className="osc-front">
              <line x1="0" y1="113" x2="0" y2="137" stroke="var(--foreground)" strokeWidth="2" style={{ animation: "pulseGlow 1s ease-in-out infinite" }} />
              <line x1="0" y1="110" x2="0" y2="140" stroke="var(--muted-foreground)" strokeWidth="1.5" opacity="0.5" />
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
                "relative flex flex-col gap-1 rounded-lg border px-3 py-2.5 text-left transition-colors",
                isActive
                  ? "border-rule-strong bg-[color-mix(in_oklab,var(--foreground)_5%,transparent)]"
                  : "border-border bg-card opacity-60 hover:opacity-100"
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-[3px] text-[0.65rem] font-bold tabular-nums",
                  isActive ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
                )}
              >
                {i + 1}
              </span>
              <p className={cn("text-[0.8rem] font-semibold leading-tight", isActive ? "text-foreground" : "text-muted-foreground")}>
                {stage.label}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-3 min-h-[3.5rem] rounded-lg border border-border bg-muted/40 px-4 py-3">
        <p className="text-[0.95rem] leading-relaxed text-foreground">
          {active === -1 ? (
            <>
              Press <strong>Play</strong> to watch the charge oscillate and emit a self-sustaining wave — E and B{" "}
              regenerate each other in phase. Or click any step to jump straight to that stage.
            </>
          ) : (
            <>
              <strong>{STAGES[active].label}.</strong> {STAGES[active].detail}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
