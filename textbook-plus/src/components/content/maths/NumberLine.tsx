interface Segment {
  from?: number;
  to?: number;
  fromOpen?: boolean;
  toOpen?: boolean;
  color?: string;
  label?: string;
}

interface NumberLineProps {
  min?: number;
  max?: number;
  step?: number;
  segments?: Segment[];
}

const W = 440;
const H = 64;
const PAD = 28;
const AXIS_Y = 34;

export function NumberLine({ min = -5, max = 5, step = 1, segments = [] }: NumberLineProps) {
  const x = (v: number) => PAD + ((v - min) / (max - min)) * (W - 2 * PAD);
  const color = (c?: string) => c ?? "var(--subject-mathematics)";

  const ticks: number[] = [];
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) {
    ticks.push(Math.abs(v) < 1e-9 ? 0 : Math.round(v * 100) / 100);
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="my-1 w-full max-w-md"
      role="img"
      style={{ color: "var(--foreground)" }}
    >
      <line x1={PAD - 14} y1={AXIS_Y} x2={W - PAD + 14} y2={AXIS_Y} stroke="currentColor" strokeWidth="1.5" />
      <polygon points={`${PAD - 22},${AXIS_Y} ${PAD - 12},${AXIS_Y - 4.5} ${PAD - 12},${AXIS_Y + 4.5}`} fill="currentColor" />
      <polygon points={`${W - PAD + 22},${AXIS_Y} ${W - PAD + 12},${AXIS_Y - 4.5} ${W - PAD + 12},${AXIS_Y + 4.5}`} fill="currentColor" />

      {ticks.map((t) => (
        <g key={t}>
          <line x1={x(t)} y1={AXIS_Y - 5} x2={x(t)} y2={AXIS_Y + 5} stroke="currentColor" strokeWidth="1.2" />
          <text x={x(t)} y={AXIS_Y + 20} textAnchor="middle" fontSize="11.5" fill="currentColor">
            {t}
          </text>
        </g>
      ))}

      {segments.map((seg, i) => {
        const c = color(seg.color);
        const x1 = seg.from === undefined ? PAD : x(seg.from);
        const x2 = seg.to === undefined ? W - PAD : x(seg.to);
        return (
          <g key={i}>
            {seg.label && (
              <text x={(x1 + x2) / 2} y={16} textAnchor="middle" fontSize="12" fontWeight="600" fill={c}>
                {seg.label}
              </text>
            )}
            <line x1={x1} y1={AXIS_Y} x2={x2} y2={AXIS_Y} stroke={c} strokeWidth="5" strokeLinecap="butt" />
            {seg.from === undefined && (
              <polygon points={`${PAD - 6},${AXIS_Y} ${PAD + 3},${AXIS_Y - 5} ${PAD + 3},${AXIS_Y + 5}`} fill={c} />
            )}
            {seg.to === undefined && (
              <polygon points={`${W - PAD + 6},${AXIS_Y} ${W - PAD - 3},${AXIS_Y - 5} ${W - PAD - 3},${AXIS_Y + 5}`} fill={c} />
            )}
            {seg.from !== undefined &&
              (seg.fromOpen ? (
                <circle cx={x1} cy={AXIS_Y} r="5" fill="var(--background)" stroke={c} strokeWidth="2" />
              ) : (
                <circle cx={x1} cy={AXIS_Y} r="5" fill={c} />
              ))}
            {seg.to !== undefined &&
              (seg.toOpen ? (
                <circle cx={x2} cy={AXIS_Y} r="5" fill="var(--background)" stroke={c} strokeWidth="2" />
              ) : (
                <circle cx={x2} cy={AXIS_Y} r="5" fill={c} />
              ))}
          </g>
        );
      })}
    </svg>
  );
}
