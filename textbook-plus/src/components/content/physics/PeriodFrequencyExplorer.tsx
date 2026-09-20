"use client";

import { useEffect, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

const CENTER = 260; // centre of the oscillation axis in SVG px
const A_PX = 150; // amplitude in SVG px (dot travels 110 → 410)

/**
 * Interactive reciprocal ν = 1/T: dragging the period slider sweeps the
 * frequency readout and speeds up/slows down an oscillating particle so the
 * reciprocal relationship is felt, not just read.
 */
export function PeriodFrequencyExplorer() {
  const [T, setT] = useState(1.0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      setPhase(((now - start) / 1000) * ((2 * Math.PI) / T));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [T]);

  const nu = 1 / T;
  const omega = (2 * Math.PI) / T;
  const cx = CENTER + A_PX * Math.cos(phase);

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-3">
        <p className="text-center text-sm font-extrabold tracking-tight text-foreground">
          <ArrowLeftRight className="mr-1.5 inline h-4 w-4 text-violet-500" />
          Period ↔ Frequency — the reciprocal relationship
        </p>
      </div>

      <div className="px-4 pt-3">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-violet-500/25 bg-violet-500/[0.06] px-3 py-2.5 text-center">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
              Period T
            </p>
            <p className="text-lg font-extrabold text-violet-700 dark:text-violet-300">{T.toFixed(2)} s</p>
          </div>
          <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.06] px-3 py-2.5 text-center">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
              Frequency ν = 1/T
            </p>
            <p className="text-lg font-extrabold text-amber-700 dark:text-amber-300">{nu.toFixed(2)} Hz</p>
          </div>
          <div className="rounded-xl border border-blue-500/25 bg-blue-500/[0.06] px-3 py-2.5 text-center">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
              Angular frequency ω = 2π/T
            </p>
            <p className="text-lg font-extrabold text-blue-700 dark:text-blue-300">{omega.toFixed(2)} rad s⁻¹</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
            <span>shorter cycle · faster</span>
            <span>longer cycle · slower</span>
          </div>
          <input
            type="range"
            min={0.25}
            max={4}
            step={0.05}
            value={T}
            onChange={(e) => setT(Number(e.target.value))}
            className="mt-1 w-full accent-violet-600"
            aria-label="Time period T in seconds"
          />
          <div className="flex justify-between text-[0.65rem] font-semibold text-muted-foreground">
            <span>0.25 s</span>
            <span>1 s</span>
            <span>2 s</span>
            <span>3 s</span>
            <span>4 s</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto px-3 pt-2">
        <svg
          viewBox="0 0 520 150"
          className="h-auto w-full min-w-[420px]"
          role="img"
          aria-label="Oscillating particle whose speed mirrors the period and frequency sliders"
        >
          <text x={CENTER} y="26" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--foreground)">
            one back-and-forth sweep = one cycle = T seconds
          </text>

          <line x1="95" y1="112" x2="425" y2="112" stroke="var(--foreground)" strokeOpacity="0.35" strokeWidth="2" />
          <text x="95" y="97" textAnchor="end" fontSize="12" fontWeight="700" fill="var(--muted-foreground)">
            −A
          </text>
          <text x="425" y="97" textAnchor="end" fontSize="12" fontWeight="700" fill="var(--muted-foreground)">
            +A
          </text>

          <line x1={CENTER} y1="104" x2={CENTER} y2="120" stroke="var(--muted-foreground)" strokeWidth="2" />
          <text x={CENTER} y="134" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
            equilibrium
          </text>

          <circle cx={cx} cy="112" r="9" fill="#8b5cf6" stroke="var(--card)" strokeWidth="2" />
        </svg>
      </div>

      <div className="border-t border-border/40 bg-muted/20 px-4 py-3 text-center text-sm text-muted-foreground">
        Drag the slider — when T shrinks, ν grows (and the particle swings faster). Halving the period{" "}
        <strong>doubles</strong> the frequency.
      </div>
    </div>
  );
}