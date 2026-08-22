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

interface FunctionGraphProps {
  curves?: Curve[];
  points?: Point[];
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  caption?: string;
  className?: string;
}

const W = 340;
const H = 260;
const PAD = 26;

export function FunctionGraph({
  curves = [],
  points = [],
  xMin = -5,
  xMax = 5,
  yMin = -5,
  yMax = 5,
  caption,
  className,
}: FunctionGraphProps) {
  const gx = (x: number) => PAD + ((x - xMin) / (xMax - xMin)) * (W - 2 * PAD);
  const gy = (y: number) => H - PAD - ((y - yMin) / (yMax - yMin)) * (H - 2 * PAD);

  const axisColor = "currentColor";
  const defaultColor = "var(--subject-mathematics)";

  interface Seg {
    pts: [number, number][];
    color: string;
    dashed?: boolean;
    ray?: boolean;
  }
  const segments: Seg[] = [];

  for (const c of curves) {
    const N = 160;
    let seg: [number, number][] = [];
    let lastY: number | null = null;
    for (let i = 0; i <= N; i++) {
      const x = c.from + ((c.to - c.from) * i) / N;
      let y: number;
      try {
        y = c.fn(x);
      } catch {
        y = NaN;
      }
      const outOfRange = !isFinite(y) || y < yMin - (yMax - yMin) || y > yMax + (yMax - yMin);
      const bigJump = lastY !== null && Math.abs(y - lastY) > (yMax - yMin) * 0.7;
      if (outOfRange || bigJump) {
        if (seg.length > 1) segments.push({ pts: seg, color: c.color ?? defaultColor, dashed: c.dashed, ray: c.ray });
        seg = [];
        lastY = isFinite(y) ? y : null;
        continue;
      }
      seg.push([gx(x), gy(y)]);
      lastY = y;
    }
    if (seg.length > 1) segments.push({ pts: seg, color: c.color ?? defaultColor, dashed: c.dashed, ray: c.ray });
  }

  const xTicks: number[] = [];
  for (let v = Math.ceil(xMin); v <= Math.floor(xMax); v++) xTicks.push(v);
  const yTicks: number[] = [];
  for (let v = Math.ceil(yMin); v <= Math.floor(yMax); v++) yTicks.push(v);

  const showXAxis = yMin <= 0 && yMax >= 0;
  const showYAxis = xMin <= 0 && xMax >= 0;

  return (
    <figure className={className ?? "my-4"}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto w-full max-w-[280px]"
        role="img"
        style={{ color: "var(--foreground)" }}
      >
        {yTicks.map((t) =>
          t === 0 ? null : (
            <g key={`gy${t}`}>
              <line x1={PAD} y1={gy(t)} x2={W - PAD} y2={gy(t)} stroke={axisColor} strokeOpacity="0.08" strokeWidth="1" />
              <text x={PAD - 6} y={gy(t) + 4} textAnchor="end" fontSize="10" fill={axisColor}>
                {t}
              </text>
            </g>
          )
        )}
        {xTicks.map((t) =>
          t === 0 ? null : (
            <g key={`gx${t}`}>
              <line x1={gx(t)} y1={PAD} x2={gx(t)} y2={H - PAD} stroke={axisColor} strokeOpacity="0.08" strokeWidth="1" />
              <text x={gx(t)} y={H - PAD + 14} textAnchor="middle" fontSize="10" fill={axisColor}>
                {t}
              </text>
            </g>
          )
        )}

        {showXAxis && (
          <>
            <line x1={PAD - 8} y1={gy(0)} x2={W - PAD + 8} y2={gy(0)} stroke={axisColor} strokeWidth="1.4" />
            <polygon points={`${W - PAD + 14},${gy(0)} ${W - PAD + 4},${gy(0) - 3.5} ${W - PAD + 4},${gy(0) + 3.5}`} fill={axisColor} />
            <polygon points={`${PAD - 14},${gy(0)} ${PAD - 4},${gy(0) - 3.5} ${PAD - 4},${gy(0) + 3.5}`} fill={axisColor} />
            <text x={W - PAD + 6} y={gy(0) - 8} fontSize="12" fontStyle="italic" fill={axisColor}>
              x
            </text>
          </>
        )}
        {showYAxis && (
          <>
            <line x1={gx(0)} y1={H - PAD + 8} x2={gx(0)} y2={PAD - 8} stroke={axisColor} strokeWidth="1.4" />
            <polygon points={`${gx(0)},${PAD - 14} ${gx(0) - 3.5},${PAD - 4} ${gx(0) + 3.5},${PAD - 4}`} fill={axisColor} />
            <polygon points={`${gx(0)},${H - PAD + 14} ${gx(0) - 3.5},${H - PAD + 4} ${gx(0) + 3.5},${H - PAD + 4}`} fill={axisColor} />
            <text x={gx(0) + 10} y={PAD - 2} fontSize="12" fontStyle="italic" fill={axisColor}>
              y
            </text>
          </>
        )}
        {segments.map((s, i) => {
          const d = s.pts.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(" ");
          let arrowHead: React.ReactNode = null;
          if (s.ray) {
            const n = s.pts.length;
            const [x2, y2] = s.pts[n - 1];
            const [x1, y1] = s.pts[n - 2];
            const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
            arrowHead = (
              <polygon
                points="10,0 -2,-4.5 -2,4.5"
                fill={s.color}
                transform={`translate(${x2},${y2}) rotate(${ang})`}
              />
            );
          }
          return (
            <g key={`c${i}`}>
              <polyline
                points={d}
                fill="none"
                stroke={s.color}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={s.dashed ? "5 4" : undefined}
              />
              {arrowHead}
            </g>
          );
        }        )}
        {points.map((pt, i) =>
          pt.filled === false ? (
            <circle key={`p${i}`} cx={gx(pt.x)} cy={gy(pt.y)} r="3.6" fill="var(--background)" stroke={defaultColor} strokeWidth="1.8" />
          ) : (
            <circle key={`p${i}`} cx={gx(pt.x)} cy={gy(pt.y)} r="3.4" fill={defaultColor} />
          )
        )}

        {showXAxis && showYAxis && (
          <>
            <rect x={gx(0) - 13} y={gy(0) + 3} width="11" height="12" fill="var(--background)" />
            <text x={gx(0) - 4} y={gy(0) + 12} textAnchor="end" fontSize="10" fill={axisColor}>
              O
            </text>
          </>
        )}
      </svg>
      {caption && (
        <figcaption className="mt-1 text-center text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}
