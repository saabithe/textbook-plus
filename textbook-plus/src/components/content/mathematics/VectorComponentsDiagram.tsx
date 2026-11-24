/*
 * A labelled 3-D coordinate diagram resolving a vector along three mutually
 * orthogonal axes, beside its general equation and magnitude formula, with
 * two labelled rows separating scalar from vector components. Purely
 * presentational: no hooks, no client directive, no external libraries. Axis
 * colours match the other vector concept diagrams; all other ink inherits
 * light/dark theming via currentColor.
 */

import { Formula } from "@/components/content/Formula";

const LABEL_FONT = "var(--font-content), sans-serif";
const ACCENT = "var(--subject-mathematics)";
const COLOR_X = "var(--subject-mathematics)";
const COLOR_Y = "var(--ok)";
const COLOR_Z = "var(--warning)";

/** Points for a small two-segment arrowhead at (x, y) pointing along (dx, dy). */
function arrowHeadPoints(x: number, y: number, dx: number, dy: number, size: number): string {
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;
  const px = -uy;
  const py = ux;
  const bx = x - ux * size;
  const by = y - uy * size;
  const wing = size * 0.4;
  return `${(bx + px * wing).toFixed(1)},${(by + py * wing).toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)} ${(bx - px * wing).toFixed(1)},${(by - py * wing).toFixed(1)}`;
}

/** One labelled row: name, mathematics, then its meaning. */
function ComponentRow({
  label,
  math,
  meaning,
}: {
  label: string;
  math: string;
  meaning: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-center">
      <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.1em] text-foreground/70">
        {label}
      </span>
      <div className="overflow-x-auto text-[0.95rem]">
        <Formula>{math}</Formula>
      </div>
      <p className="text-xs text-foreground/65 sm:col-start-2">{meaning}</p>
    </div>
  );
}

/** Oblique 3-D axes, a resolved vector and colour-matched component guides. */
export function VectorComponentsDiagram() {
  const o = { x: 58, y: 184 };
  const xEnd = { x: 184, y: 208 };
  const yEnd = { x: 162, y: 138 };
  const zEnd = { x: 58, y: 52 };

  const vx = { x: xEnd.x - o.x, y: xEnd.y - o.y };
  const vy = { x: yEnd.x - o.x, y: yEnd.y - o.y };
  const vz = { x: zEnd.x - o.x, y: zEnd.y - o.y };

  const fx = 0.62;
  const fy = 0.48;
  const fz = 0.52;

  const p = {
    x: o.x + fx * vx.x + fy * vy.x + fz * vz.x,
    y: o.y + fx * vx.y + fy * vy.y + fz * vz.y,
  };
  const foot = { x: p.x, y: p.y - fz * vz.y };
  const onX = { x: foot.x - fy * vy.x, y: foot.y - fy * vy.y };
  const onY = { x: foot.x - fx * vx.x, y: foot.y - fx * vx.y };
  const onZ = { x: o.x, y: o.y + fz * vz.y };

  const vLen = Math.hypot(p.x - o.x, p.y - o.y) || 1;
  const ux = (p.x - o.x) / vLen;
  const uy = (p.y - o.y) / vLen;
  const tip = { x: p.x - ux * 5, y: p.y - uy * 5 };

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-start">
      <svg
        viewBox="0 0 250 240"
        className="w-full h-auto"
        role="img"
        aria-label="Three mutually orthogonal Cartesian axes from origin O: x in the mathematics colour, y in green and z in orange. An accent vector a runs from O to point P and is resolved by dashed colour-matched guides into an x component, a y component and a z component"
      >
        {/* colour-coded axes, each with its own arrowhead */}
        <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65">
          <line x1={o.x} y1={o.y} x2={xEnd.x} y2={xEnd.y} stroke={COLOR_X} />
          <polyline
            points={arrowHeadPoints(xEnd.x, xEnd.y, xEnd.x - o.x, xEnd.y - o.y, 6)}
            stroke={COLOR_X}
          />
          <line x1={o.x} y1={o.y} x2={yEnd.x} y2={yEnd.y} stroke={COLOR_Y} />
          <polyline
            points={arrowHeadPoints(yEnd.x, yEnd.y, yEnd.x - o.x, yEnd.y - o.y, 6)}
            stroke={COLOR_Y}
          />
          <line x1={o.x} y1={o.y} x2={zEnd.x} y2={zEnd.y} stroke={COLOR_Z} />
          <polyline
            points={arrowHeadPoints(zEnd.x, zEnd.y, zEnd.x - o.x, zEnd.y - o.y, 6)}
            stroke={COLOR_Z}
          />
        </g>

        {/* components laid off along the three axes */}
        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeOpacity="0.85">
          <line x1={o.x} y1={o.y} x2={onX.x} y2={onX.y} stroke={COLOR_X} />
          <line x1={o.x} y1={o.y} x2={onY.x} y2={onY.y} stroke={COLOR_Y} />
          <line x1={o.x} y1={o.y} x2={onZ.x} y2={onZ.y} stroke={COLOR_Z} />
        </g>

        {/* dashed guides completing the decomposition from P to the axes */}
        <g fill="none" strokeWidth="1.6" strokeDasharray="5 4" strokeLinecap="round">
          <line x1={p.x} y1={p.y} x2={foot.x} y2={foot.y} stroke={COLOR_Z} />
          <line x1={foot.x} y1={foot.y} x2={onX.x} y2={onX.y} stroke={COLOR_Y} />
          <line x1={foot.x} y1={foot.y} x2={onY.x} y2={onY.y} stroke={COLOR_X} />
        </g>
        <circle cx={foot.x} cy={foot.y} r="3" fill="none" stroke="currentColor" strokeOpacity="0.45" />

        {/* the resolved vector itself */}
        <g fill="none" stroke={ACCENT} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1={o.x} y1={o.y} x2={tip.x} y2={tip.y} />
          <polyline points={arrowHeadPoints(tip.x, tip.y, ux, uy, 10)} />
        </g>
        <circle cx={o.x} cy={o.y} r="4" fill={ACCENT} />
        <circle cx={p.x} cy={p.y} r="4.5" fill={ACCENT} />

        {/* point, vector and guide labels */}
        <g fontFamily={LABEL_FONT} fontSize={11} fontWeight={600}>
          <text x={o.x - 2} y={o.y + 20} textAnchor="middle" fill="currentColor">
            O
          </text>
          <text x={p.x - 7} y={p.y - 10} textAnchor="end" fill={ACCENT}>
            P
          </text>
          <text x={tip.x - 8} y={tip.y + 16} textAnchor="end" fill={ACCENT}>
            a
          </text>
          <text x={foot.x + 8} y={(p.y + foot.y) / 2} fill={COLOR_Z}>
            z
          </text>
          <text x={(foot.x + onX.x) / 2} y={(foot.y + onX.y) / 2 - 6} fill={COLOR_Y}>
            y
          </text>
          <text x={(foot.x + onY.x) / 2} y={(foot.y + onY.y) / 2 - 6} fill={COLOR_X}>
            x
          </text>
        </g>

        {/* axis names */}
        <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600}>
          <text x={xEnd.x + 6} y={xEnd.y + 5} fill={COLOR_X}>
            x
          </text>
          <text x={yEnd.x + 6} y={yEnd.y - 4} fill={COLOR_Y}>
            y
          </text>
          <text x={zEnd.x} y={zEnd.y - 8} textAnchor="middle" fill={COLOR_Z}>
            z
          </text>
        </g>
      </svg>

      <div className="min-w-0">
        <div className="overflow-x-auto py-1 text-[0.95rem]">
          <Formula>{String.raw`\boxed{\vec a=a_1\hat i+a_2\hat j+a_3\hat k}`}</Formula>
        </div>
        <p className="t-micro mt-3">Components:</p>
        <div className="mt-2 divide-y divide-border/50 overflow-hidden rounded-xl border border-border/60 bg-muted/20">
          <ComponentRow
            label="Scalar components"
            math={String.raw`a_1,a_2,a_3`}
            meaning="Scalar values along the three axes"
          />
          <ComponentRow
            label="Vector components"
            math={String.raw`a_1\hat i,a_2\hat j,a_3\hat k`}
            meaning="Vector components along the coordinate axes"
          />
        </div>
        <p className="t-micro mt-4">Magnitude:</p>
        <div className="overflow-x-auto py-1 text-[0.95rem]">
          <Formula>{String.raw`\boxed{|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2}}`}</Formula>
        </div>
      </div>
    </div>
  );
}
