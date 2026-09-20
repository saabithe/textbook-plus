"use client";

import { useEffect, useState } from "react";
import { MoveLeftRight, Ruler } from "lucide-react";
import { cn } from "@/lib/utils";

const CENTER = 260; // equilibrium position in SVG px
const A_PX = 170; // amplitude in SVG px (particle travels 90 → 430)
const AMP_CM = 5; // amplitude in cm for the readout
const CYCLE_S = 2.2; // animation period in seconds

type Mode = "displacement" | "amplitude";

/**
 * Animated displacement axis: a particle sweeps the whole range −A → +A with
 * the arrow x = displacement from equilibrium drawn live. In amplitude mode
 * the particle parks at the extreme so the amplitude A (maximum displacement)
 * is highlighted.
 */
export function ShmDisplacementDiagram() {
  const [mode, setMode] = useState<Mode>("displacement");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      setPhase(((now - start) / 1000) * ((2 * Math.PI) / CYCLE_S));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const cosv = mode === "amplitude" ? 1 : Math.cos(phase);
  const xCm = AMP_CM * cosv;
  const cx = CENTER + A_PX * cosv;
  const right = cx >= CENTER;
  const arrowShort = Math.abs(cx - CENTER) < 4;
  const xDisplay = `${xCm >= 0 ? "+" : ""}${xCm.toFixed(2)} cm`;

  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/30 px-4 py-3">
        <p className="text-center text-sm font-extrabold tracking-tight text-foreground">
          <MoveLeftRight className="mr-1.5 inline h-4 w-4 text-violet-500" />
          Displacement from equilibrium — the particle swept across −A → +A
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 px-4 pt-3">
        <button
          type="button"
          onClick={() => setMode("displacement")}
          aria-pressed={mode === "displacement"}
          className={cn(
            "rounded-xl border px-3.5 py-2 text-sm font-bold transition-shadow",
            mode === "displacement"
              ? "border-violet-500/60 bg-violet-500/10 shadow-sm shadow-violet-500/20"
              : "border-border/60 bg-card text-foreground/70 hover:shadow-sm"
          )}
        >
          Displacement — whole range
        </button>
        <button
          type="button"
          onClick={() => setMode("amplitude")}
          aria-pressed={mode === "amplitude"}
          className={cn(
            "rounded-xl border px-3.5 py-2 text-sm font-bold transition-shadow",
            mode === "amplitude"
              ? "border-amber-500/60 bg-amber-500/10 shadow-sm shadow-amber-500/20"
              : "border-border/60 bg-card text-foreground/70 hover:shadow-sm"
          )}
        >
          Amplitude — at the extremes
        </button>
      </div>

      <p className="mt-3 px-5 text-center text-sm text-foreground/85">
        {mode === "displacement" ? (
          <>
            Particle at <strong className="text-violet-700 dark:text-violet-300">x = {xDisplay}</strong> — the
            displacement arrows to the {right ? "right" : "left"} of equilibrium are{" "}
            <strong>positive / negative</strong>.
          </>
        ) : (
          <>
            At the extreme the displacement reaches its maximum magnitude — the{" "}
            <strong className="text-amber-700 dark:text-amber-300">amplitude A = {AMP_CM} cm</strong>.
          </>
        )}
      </p>

      <div className="overflow-x-auto px-3 pt-1">
        <svg
          viewBox="0 0 520 220"
          className="h-auto w-full min-w-[420px]"
          role="img"
          aria-label="Particle oscillating between extremes minus A and plus A with the displacement from equilibrium highlighted"
        >
          {/* oscillation axis */}
          <line x1="70" y1="130" x2="450" y2="130" stroke="var(--foreground)" strokeOpacity="0.35" strokeWidth="2" />

          {/* current-position displacement arrow */}
          {!arrowShort && (
            <g>
              <line x1={CENTER} y1="130" x2={cx} y2="130" stroke="#8b5cf6" strokeWidth="3.5" />
              <polygon
                points={
                  right
                    ? `${cx},130 ${cx - 11},124.5 ${cx - 11},135.5`
                    : `${cx},130 ${cx + 11},124.5 ${cx + 11},135.5`
                }
                fill="#8b5cf6"
              />
              <text x={(CENTER + cx) / 2} y="118" textAnchor="middle" fontSize="14" fontWeight="800" fill="#8b5cf6">
                x
              </text>
            </g>
          )}

          {/* extremes */}
          <line x1="90" y1="122" x2="90" y2="138" stroke="var(--muted-foreground)" strokeWidth="2" />
          <line x1="430" y1="122" x2="430" y2="138" stroke="var(--muted-foreground)" strokeWidth="2" />
          <text x="90" y="112" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--foreground)">
            −A
          </text>
          <text x="430" y="112" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--foreground)">
            +A
          </text>
          <text x="90" y="150" textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            extreme position
          </text>
          <text x="430" y="150" textAnchor="middle" fontSize="10.5" fill="var(--muted-foreground)">
            extreme position
          </text>

          {/* directions */}
          <text x="430" y="172" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--muted-foreground)">
            → +x
          </text>
          <text x="90" y="172" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--muted-foreground)">
            ← −x
          </text>

          {/* equilibrium */}
          <line x1={CENTER} y1="121" x2={CENTER} y2="139" stroke="var(--foreground)" strokeOpacity="0.6" strokeWidth="2.5" />
          <text x={CENTER} y="158" textAnchor="middle" fontSize="11" fill="var(--muted-foreground)">
            equilibrium (mean position)
          </text>

          {/* amplitude band (extreme highlight) */}
          {mode === "amplitude" && (
            <g>
              <line x1="90" y1="188" x2="430" y2="188" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points={`90,188 100,183 100,193`} fill="#f59e0b" />
              <polygon points={`430,188 420,183 420,193`} fill="#f59e0b" />
              <text x={CENTER} y="207" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#f59e0b">
                A — maximum displacement from equilibrium
              </text>
              <text x={CENTER} y="130" textAnchor="middle" fontSize="11" fontWeight="700" fill="#f59e0b">
                A
              </text>
            </g>
          )}

          {/* particle */}
          <circle
            cx={cx}
            cy="130"
            r="9"
            fill={mode === "amplitude" ? "#f59e0b" : "#8b5cf6"}
            stroke="var(--card)"
            strokeWidth="2.5"
          />
        </svg>
      </div>

      <div className="flex items-center gap-2 border-t border-border/40 bg-muted/20 px-4 py-3">
        <Ruler className="h-4 w-4 shrink-0 text-violet-500" />
        <p className="text-sm text-muted-foreground">
          The arrow <span className="font-extrabold text-violet-700 dark:text-violet-300">x</span> is always drawn from
          the equilibrium to the current position — its maximum length (at the extremes) is the amplitude
          {" "}<strong>A</strong>.
        </p>
      </div>
    </div>
  );
}