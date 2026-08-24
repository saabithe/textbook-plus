"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface Curve {
  fn: (x: number) => number;
  from: number;
  to: number;
  color?: string;
  dashed?: boolean;
  ray?: boolean;
}

interface Point {
  x: number;
  y: number;
  filled?: boolean;
}

interface TickOverride {
  at: number;
  label: string;
}

interface FunctionGraphProps {
  curves?: Curve[];
  points?: Point[];
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  xStep?: number;
  yStep?: number;
  xTicks?: TickOverride[];
  yTicks?: TickOverride[];
  vlines?: number[];
  caption?: string;
  className?: string;
}

const W = 340;
const H = 260;
const PAD = 26;
const AXIS_STROKE = 1.4;
const GRID_OPACITY = 0.1;
const CURVE_STROKE = 2.2;

function pickStep(min: number, max: number, override?: number): number {
  if (override && override > 0) return override;
  const range = max - min;
  if (range <= 0) return 1;
  const target = 12;
  const magnitudes = [1, 2, 5, 10, 20, 50, 100];
  let best = 1;
  for (const m of magnitudes) {
    if (range / m <= target) { best = m; break; }
  }
  return best;
}

function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

function pickTicks(min: number, max: number, step: number): number[] {
  const ticks: number[] = [];
  const start = Math.ceil(min / step) * step;
  for (let v = start; v <= max + 1e-9; v += step) {
    ticks.push(Math.abs(v) < 1e-9 ? 0 : Math.round(v * 100) / 100);
  }
  return ticks;
}

export function FunctionGraph({
  curves = [],
  points = [],
  xMin = -5,
  xMax = 5,
  yMin = -5,
  yMax = 5,
  xStep,
  yStep,
  xTicks: xTickOverrides,
  yTicks: yTickOverrides,
  vlines = [],
  caption,
  className,
}: FunctionGraphProps) {
  if (xMin >= xMax || yMin >= yMax) return null;

  const xRange = xMax - xMin;
  const yRange = yMax - yMin;
  const drawW = W - 2 * PAD;
  const drawH = H - 2 * PAD;

  const gx = (x: number) => PAD + ((x - xMin) / (xMax - xMin)) * (W - 2 * PAD);
  const gy = (y: number) => H - PAD - ((y - yMin) / (yMax - yMin)) * (H - 2 * PAD);

  const showXAxis = yMin <= 0 && yMax >= 0;
  const showYAxis = xMin <= 0 && xMax >= 0;

  const axisColor = "currentColor";
  const defaultColor = "var(--subject-mathematics)";

  const computedXStep = pickStep(xMin, xMax, xStep);
  const computedYStep = pickStep(yMin, yMax, yStep);
  const xTicks: number[] = xTickOverrides ? xTickOverrides.map((o) => o.at) : pickTicks(xMin, xMax, computedXStep);
  const yTicks: number[] = yTickOverrides ? yTickOverrides.map((o) => o.at) : pickTicks(yMin, yMax, computedYStep);
  const labelFor = (axis: "x" | "y", t: number): string => {
    const overrides = axis === "x" ? xTickOverrides : yTickOverrides;
    if (overrides) {
      const hit = overrides.find((o) => Math.abs(o.at - t) < 1e-9);
      if (hit) return hit.label;
    }
    return String(t);
  };

  interface Segment {
    pts: [number, number][];
    color: string;
    dashed?: boolean;
    ray?: boolean;
  }
  const segments: { pts: [number, number][]; color: string; dashed?: boolean; ray?: boolean }[] = [];

  const N_SAMPLES = 200;

  for (const c of curves) {
    let current: [number, number][] = [];
    let lastY: number | null = null;

    for (let i = 0; i <= N_SAMPLES; i++) {
      const x = c.from + ((c.to - c.from) * i) / N_SAMPLES;
      let y: number;
      try {
        y = c.fn(x);
      } catch {
        y = NaN;
      }

      const finite = isFinite(y);
      const inRange = finite && y >= yMin && y <= yMax;
      const bigJump = lastY !== null && Math.abs(y - lastY) > yRange * 2;

      if (!inRange || bigJump) {
        if (current.length > 1) {
          segments.push({ pts: current, color: c.color ?? "var(--subject-mathematics)", dashed: c.dashed, ray: c.ray });
        } else if (current.length === 1) {
          segments.push({ pts: current, color: c.color ?? "var(--subject-mathematics)", dashed: c.dashed, ray: c.ray });
        }
        current = [];
        lastY = finite ? y : null;
        continue;
      }

      current.push([gx(x), gy(y)]);
      lastY = y;
    }
    if (current.length >= 1) {
      segments.push({ pts: current, color: c.color ?? "var(--subject-mathematics)", dashed: c.dashed, ray: c.ray });
    }
  }

  return (
    <figure className={cn("my-4", className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto w-full max-w-[280px]"
        role="img"
        aria-label={caption ?? "Function graph"}
        style={{ color: "var(--foreground)" }}
      >
        <defs>
          <marker id={`arrowhead-${useId().replace(/[^a-zA-Z0-9]/g, "")}`} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="var(--subject-mathematics)" />
          </marker>
        </defs>

        <g stroke="currentColor" strokeOpacity={0.1} strokeWidth="1">
          {yTicks.filter(t => t !== 0).map(t => (
            <g key={`gy${t}`}>
              <line x1={PAD} y1={gy(t)} x2={W - PAD} y2={gy(t)} />
              <text x={PAD - 6} y={gy(t) + 4} textAnchor="end" fontSize="10" fill="currentColor" opacity="0.7">
                {labelFor("y", t)}
              </text>
            </g>
          ))}
          {xTicks.filter(t => t !== 0).map(t => (
            <g key={`gx${t}`}>
              <line x1={gx(t)} y1={PAD} x2={gx(t)} y2={H - PAD} />
              <text x={gx(t)} y={H - PAD + 14} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7">
                {labelFor("x", t)}
              </text>
            </g>
          ))}
        </g>

        {vlines.length > 0 && (
          <g>
            {vlines.map((v, i) => (
              <line
                key={`vl${i}`}
                x1={gx(v)}
                y1={PAD}
                x2={gx(v)}
                y2={H - PAD}
                stroke="currentColor"
                strokeOpacity={0.3}
                strokeWidth="1.1"
                strokeDasharray="4 4"
              />
            ))}
          </g>
        )}

        {showXAxis && (
          <>
            <line x1={PAD} y1={gy(0)} x2={W - PAD} y2={gy(0)} stroke="currentColor" strokeWidth={1.4} />
            <polygon points={`${PAD - 10},${gy(0)} ${PAD - 2},${gy(0) - 3.5} ${PAD - 2},${gy(0) + 3.5}`} fill="currentColor" />
            <polygon points={`${W - PAD + 10},${gy(0)} ${W - PAD - 2},${gy(0) - 3.5} ${W - PAD - 2},${gy(0) + 3.5}`} fill="currentColor" />
            <text x={W - PAD + 8} y={gy(0) - 10} fontSize="12" fontStyle="italic" fill="currentColor">x</text>
          </>
        )}

        {showYAxis && (
          <>
            <line x1={gx(0)} y1={PAD} x2={gx(0)} y2={H - PAD} stroke="currentColor" strokeWidth={1.4} />
            <polygon points={`${gx(0)},${PAD - 10} ${gx(0) - 3.5},${PAD - 2} ${gx(0) + 3.5},${PAD - 2}`} fill="currentColor" />
            <polygon points={`${gx(0)},${H - PAD + 10} ${gx(0) - 3.5},${H - PAD + 2} ${gx(0) + 3.5},${H - PAD + 2}`} fill="currentColor" />
            <text x={gx(0) + 12} y={PAD - 2} fontSize="12" fontStyle="italic" fill="currentColor">y</text>
          </>
        )}

        {segments.map((s, i) => {
          const pts = s.pts;
          const d = pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
          let arrowHead = null;
          if (s.ray && pts.length >= 2) {
            const [x2, y2] = pts[pts.length - 1];
            const [x1, y1] = pts[pts.length - 2];
            const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
            return (
              <g key={`c${i}`}>
                <polyline
                  points={s.pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ")}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={s.dashed ? "5 4" : undefined}
                />
                <polygon
                  points="10,0 -2,-4.5 -2,4.5"
                  fill="var(--subject-mathematics)"
                  transform={`translate(${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}) rotate(${((Math.atan2(
                    pts[pts.length - 1][1] - pts[pts.length - 2][1],
                    pts[pts.length - 1][0] - pts[pts.length - 2][0]
                  ) * 180) / Math.PI).toFixed(1)})`}
                />
              </g>
            );
          }
          return (
            <polyline
              key={`c${i}`}
              points={pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ")}
              fill="none"
              stroke={s.color}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.dashed ? "5 4" : undefined}
            />
          );
        })}

        {points.map((pt, i) =>
          pt.filled === false ? (
            <circle key={`p${i}`} cx={gx(pt.x)} cy={gy(pt.y)} r="3.6" fill="var(--background)" stroke="var(--subject-mathematics)" strokeWidth="1.8" />
          ) : (
            <circle key={`p${i}`} cx={gx(pt.x)} cy={gy(pt.y)} r="3.4" fill="var(--subject-mathematics)" />
          )
        )}

        {showXAxis && showYAxis && (
          <g>
            <rect x={gx(0) - 14} y={gy(0) + 3} width="12" height="14" fill="var(--background)" />
            <text x={gx(0) - 4} y={gy(0) + 12} textAnchor="end" fontSize="10" fill="currentColor">O</text>
          </g>
        )}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}