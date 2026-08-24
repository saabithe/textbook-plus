"use client";

import { Mafs, Coordinates, Plot, Point, Line, Text, Vector } from "mafs";
import { cn } from "@/lib/utils";

interface Curve {
  fn: (x: number) => number;
  from: number;
  to: number;
  color?: string;
  dashed?: boolean;
  ray?: boolean;
}

interface GraphDot {
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
  points?: GraphDot[];
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

function pickStep(min: number, max: number, override?: number): number {
  if (override && override > 0) return override;
  const range = max - min;
  if (range <= 0) return 1;
  const target = 10;
  const magnitudes = [0.5, 1, 2, 5, 10, 20, 50, 100];
  let best = 1;
  for (const m of magnitudes) {
    if (range / m <= target) { best = m; break; }
  }
  return best;
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

  const yRange = yMax - yMin;
  const xRange = xMax - xMin;
  const defaultColor = "var(--subject-mathematics)";

  const stepX = pickStep(xMin, xMax, xStep);
  const stepY = pickStep(yMin, yMax, yStep);

  const labelFor = (axis: "x" | "y", v: number): string => {
    const overrides = axis === "x" ? xTickOverrides : yTickOverrides;
    if (overrides) {
      const hit = overrides.find((o) => Math.abs(o.at - v) < 1e-9);
      if (hit) return hit.label;
    }
    return String(Math.round(v * 100) / 100);
  };

  interface Seg {
    t0: number;
    t1: number;
    color: string;
    dashed?: boolean;
    ray?: boolean;
    fn: (x: number) => number;
  }
  const segments: Seg[] = [];

  const N_SAMPLES = 240;
  for (const c of curves) {
    let t0: number | null = null;
    let t1: number | null = null;
    let lastY: number | null = null;

    const flush = () => {
      if (t0 !== null && t1 !== null && t1 > t0) {
        segments.push({ t0, t1, color: c.color ?? defaultColor, dashed: c.dashed, ray: c.ray, fn: c.fn });
      }
      t0 = null;
      t1 = null;
    };

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
        flush();
        lastY = finite ? y : null;
        continue;
      }

      if (t0 === null) t0 = x;
      t1 = x;
      lastY = y;
    }
    flush();
  }

  return (
    <figure className={cn("my-4 mx-auto w-full max-w-[320px]", className)}>
      <div role="img" aria-label={caption ?? "Function graph"}>
        <Mafs
          height={260}
          viewBox={{ x: [xMin, xMax], y: [yMin, yMax] }}
          preserveAspectRatio={false}
          pan={false}
          zoom={false}
        >
          <Coordinates.Cartesian
            xAxis={
              xTickOverrides
                ? { lines: false, labels: () => "" }
                : { lines: stepX, labels: (v: number) => labelFor("x", v) }
            }
            yAxis={
              yTickOverrides
                ? { lines: false, labels: () => "" }
                : { lines: stepY, labels: (v: number) => labelFor("y", v) }
            }
          />

          {xTickOverrides?.map((o, i) => (
            <g key={`xo${i}`}>
              <Line.Segment point1={[o.at, yMin]} point2={[o.at, yMax]} color="var(--foreground)" opacity={0.12} weight={1} />
              <Text x={o.at} y={yMin + 0.055 * yRange} attach="s" size={17} color="var(--foreground)" svgTextProps={{ opacity: 0.75 }}>
                {o.label}
              </Text>
            </g>
          ))}
          {yTickOverrides?.map((o, i) => (
            <g key={`yo${i}`}>
              <Line.Segment point1={[xMin, o.at]} point2={[xMax, o.at]} color="var(--foreground)" opacity={0.12} weight={1} />
              <Text x={xMin + 0.045 * xRange} y={o.at} attach="e" size={17} color="var(--foreground)" svgTextProps={{ opacity: 0.75 }}>
                {o.label}
              </Text>
            </g>
          ))}

          {vlines.map((v, i) => (
            <Line.Segment
              key={`vl${i}`}
              point1={[v, yMin]}
              point2={[v, yMax]}
              color="var(--foreground)"
              opacity={0.32}
              weight={1.2}
              style="dashed"
            />
          ))}

          {segments.map((s, i) => (
            <Plot.Parametric
              key={`c${i}`}
              domain={[s.t0, s.t1]}
              xy={(x) => [x, s.fn(x)]}
              color={s.color}
              weight={2.4}
              style={s.dashed ? "dashed" : "solid"}
            />
          ))}

          {curves.map((c, ci) => {
            if (!c.ray) return null;
            const d = (c.to - c.from) / N_SAMPLES / 8 || 0.01;
            const xa = Math.max(c.to - d, c.to - (c.to - c.from) / N_SAMPLES);
            const ya = c.fn(xa);
            const yb = c.fn(c.to);
            if (!isFinite(ya) || !isFinite(yb)) return null;
            const len = Math.hypot(c.to - xa, yb - ya) || 1;
            const k = 0.09 * xRange;
            return (
              <Vector
                key={`ray${ci}`}
                tail={[xa, ya]}
                tip={[xa + ((c.to - xa) / len) * k, ya + ((yb - ya) / len) * k]}
                color={c.color ?? defaultColor}
                weight={2.4}
              />
            );
          })}

          {points.map((pt, i) =>
            pt.filled === false ? (
              <Point
                key={`p${i}`}
                x={pt.x}
                y={pt.y}
                color={defaultColor}
                svgCircleProps={{ fill: "var(--background)", strokeWidth: 1.8 }}
              />
            ) : (
              <Point key={`p${i}`} x={pt.x} y={pt.y} color={defaultColor} />
            )
          )}
        </Mafs>
      </div>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
