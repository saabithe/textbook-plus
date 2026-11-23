/*
 * Presentational inline-SVG diagrams for the opening vector concepts: a
 * directed line segment AB (with its magnitude notation rendered by Formula)
 * and a position vector OP in three dimensions with coordinate-coloured
 * projection guides and a matching component legend. No hooks, no client
 * directive, no external libraries; strokes inherit light/dark theming.
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

/** Faint oblique 3-D axes: +x right/down, +y right/up, +z straight up. */
function Axes3D({
  ox,
  oy,
  xEnd,
  yEnd,
  zEnd,
  head = 6,
}: {
  ox: number;
  oy: number;
  xEnd: { x: number; y: number };
  yEnd: { x: number; y: number };
  zEnd: { x: number; y: number };
  head?: number;
}) {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.38">
      <line x1={ox} y1={oy} x2={xEnd.x} y2={xEnd.y} />
      <polyline points={arrowHeadPoints(xEnd.x, xEnd.y, xEnd.x - ox, xEnd.y - oy, head)} />
      <line x1={ox} y1={oy} x2={yEnd.x} y2={yEnd.y} />
      <polyline points={arrowHeadPoints(yEnd.x, yEnd.y, yEnd.x - ox, yEnd.y - oy, head)} />
      <line x1={ox} y1={oy} x2={zEnd.x} y2={zEnd.y} />
      <polyline points={arrowHeadPoints(zEnd.x, zEnd.y, zEnd.x - ox, zEnd.y - oy, head)} />
    </g>
  );
}

/** A horizontal directed segment AB, with A the initial point and B the terminal point. */
export function DirectedLineSegmentDiagram() {
  const a = { x: 52, y: 46 };
  const b = { x: 268, y: 46 };
  const tip = { x: b.x - 4.5, y: b.y };

  return (
    <div>
      <svg
        viewBox="0 0 320 120"
        className="w-full h-auto"
        role="img"
        aria-label="A horizontal directed line segment AB with A on the left as the initial point and B on the right as the terminal point; a single accent arrow runs from A to B showing the direction A to B, a small note reads direction A to B, and the magnitude notation vertical-bar vector AB vertical-bar or vertical-bar vector a vertical-bar is rendered underneath"
      >
        <g fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round">
          <line x1={a.x + 5} y1={a.y} x2={tip.x} y2={tip.y} />
          <polyline points={arrowHeadPoints(tip.x, tip.y, 1, 0, 10)} />
        </g>
        <g fill={ACCENT}>
          <circle cx={a.x} cy={a.y} r="4.5" />
          <circle cx={b.x} cy={b.y} r="4.5" />
        </g>

        <g fontFamily={LABEL_FONT} fontSize={13} fontWeight={600} fill="currentColor" textAnchor="middle">
          <text x={a.x} y={a.y - 16}>
            A
          </text>
          <text x={b.x} y={b.y - 16}>
            B
          </text>
        </g>
        <g
          fontFamily={LABEL_FONT}
          fontSize={11}
          fill="currentColor"
          fillOpacity={0.65}
          textAnchor="middle"
        >
          <text x={a.x} y={a.y + 22}>
            initial point
          </text>
          <text x={b.x} y={b.y + 22}>
            terminal point
          </text>
        </g>
        <text
          x="160"
          y="98"
          textAnchor="middle"
          fontFamily={LABEL_FONT}
          fontSize={11}
          fill={ACCENT}
        >
          direction: A → B
        </text>
      </svg>
      <div className="mt-1 text-center">
        <Formula>{String.raw`|\vec{AB}|\quad\text{or}\quad|\vec a|`}</Formula>
      </div>
    </div>
  );
}

/** A 3-D position vector OP with dashed projection guides and a coordinate legend. */
export function PositionVector3DDiagram() {
  const o = { x: 70, y: 182 };
  const xEnd = { x: 196, y: 205 };
  const yEnd = { x: 174, y: 138 };
  const zEnd = { x: 70, y: 58 };

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

  const vLen = Math.hypot(p.x - o.x, p.y - o.y) || 1;
  const ux = (p.x - o.x) / vLen;
  const uy = (p.y - o.y) / vLen;
  const tip = { x: p.x - ux * 5, y: p.y - uy * 5 };

  return (
    <svg
      viewBox="0 0 340 240"
      className="w-full h-auto"
      role="img"
      aria-label="Three-dimensional Cartesian axes x y z from the origin O zero zero zero, with a point P x y z in the first octant and an accent position vector r equals OP running from O to P. Three dashed projection guides run from P towards the axes: the x displacement in the mathematics colour, the y displacement in the green ok colour and the z drop in the orange warning colour; a legend on the right pairs x with x i-hat, y with y j-hat and z with z k-hat in those same colours"
    >
      <Axes3D ox={o.x} oy={o.y} xEnd={xEnd} yEnd={yEnd} zEnd={zEnd} />

      {/* dashed projection guides, coloured to match the legend rows */}
      <g fill="none" strokeWidth="1.5" strokeDasharray="5 4" strokeLinecap="round">
        <line x1={p.x} y1={p.y} x2={foot.x} y2={foot.y} stroke={COLOR_Z} />
        <line x1={foot.x} y1={foot.y} x2={onX.x} y2={onX.y} stroke={COLOR_Y} />
        <line x1={foot.x} y1={foot.y} x2={onY.x} y2={onY.y} stroke={COLOR_X} />
      </g>
      <circle cx={foot.x} cy={foot.y} r="3" fill="none" stroke="currentColor" strokeOpacity="0.45" />

      {/* the position vector OP */}
      <g fill="none" stroke={ACCENT} strokeWidth="2.75" strokeLinecap="round">
        <line x1={o.x} y1={o.y} x2={tip.x} y2={tip.y} />
        <polyline points={arrowHeadPoints(tip.x, tip.y, ux, uy, 10)} />
      </g>
      <circle cx={o.x} cy={o.y} r="4" fill={ACCENT} />
      <circle cx={p.x} cy={p.y} r="4.5" fill={ACCENT} />

      {/* coordinate tags on the guides */}
      <g fontFamily={LABEL_FONT} fontSize={11} fontWeight={600} textAnchor="middle">
        <text x={foot.x + 9} y={(p.y + foot.y) / 2} fill={COLOR_Z}>
          z
        </text>
        <text x={(foot.x + onX.x) / 2} y={(foot.y + onX.y) / 2 - 6} fill={COLOR_Y}>
          y
        </text>
        <text x={(foot.x + onY.x) / 2} y={(foot.y + onY.y) / 2 - 6} fill={COLOR_X}>
          x
        </text>
      </g>

      {/* points and vector label */}
      <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600}>
        <text x={o.x - 2} y={o.y + 20} textAnchor="middle" fill="currentColor">
          O(0,0,0)
        </text>
        <text x={p.x - 8} y={p.y - 10} textAnchor="end" fill={ACCENT}>
          P(x,y,z)
        </text>
        <text x="122" y="136" textAnchor="middle" fill={ACCENT}>
          {"r⃗ = OP⃗"}
        </text>
      </g>

      {/* axis names */}
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x={xEnd.x + 6} y={xEnd.y + 5}>
          x
        </text>
        <text x={yEnd.x + 6} y={yEnd.y - 4}>
          y
        </text>
        <text x={zEnd.x} y={zEnd.y - 8} textAnchor="middle">
          z
        </text>
      </g>

      {/* component legend: each swatch repeats the dash pattern of its guide */}
      <rect
        x="228"
        y="42"
        width="104"
        height="112"
        rx="12"
        fill="currentColor"
        fillOpacity="0.04"
        stroke="currentColor"
        strokeOpacity="0.12"
      />
      <text
        x="236"
        y="60"
        fontFamily={LABEL_FONT}
        fontSize={10}
        letterSpacing="1"
        fill="currentColor"
        fillOpacity="0.6"
      >
        COMPONENTS OF r⃗
      </text>
      <g fontFamily={LABEL_FONT} fontSize={12}>
        <g stroke={COLOR_X} strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round">
          <line x1="236" y1="84" x2="254" y2="84" />
        </g>
        <text x="260" y="88" fill={COLOR_X}>
          x → x î
        </text>
        <g stroke={COLOR_Y} strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round">
          <line x1="236" y1="110" x2="254" y2="110" />
        </g>
        <text x="260" y="114" fill={COLOR_Y}>
          y → y ĵ
        </text>
        <g stroke={COLOR_Z} strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round">
          <line x1="236" y1="136" x2="254" y2="136" />
        </g>
        <text x="260" y="140" fill={COLOR_Z}>
          z → z k̂
        </text>
      </g>
    </svg>
  );
}
