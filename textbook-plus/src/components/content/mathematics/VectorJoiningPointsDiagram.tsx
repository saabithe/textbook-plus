/*
 * Coordinate-based illustration of the vector joining P(x1,y1,z1) to
 * Q(x2,y2,z2). A dashed staircase decomposes PQ into the three axis-parallel
 * differences x2-x1, y2-y1 and z2-z1; the solid accent arrow is PQ itself.
 * The magnitude formula appears exactly once, directly below the SVG.
 * Purely presentational: no hooks, no client directive, no external libraries;
 * structural strokes inherit light/dark theming through `currentColor`.
 */

import { Formula, FormulaBlock } from "@/components/content/Formula";

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

/** A lightly tinted, colour-matched chip holding one coordinate difference. */
function DifferenceLabel({
  x,
  y,
  text,
  color,
  anchor = "middle",
}: {
  x: number;
  y: number;
  text: string;
  color: string;
  anchor?: "start" | "middle" | "end";
}) {
  const width = text.length * 7.4 + 12;
  const rectX = anchor === "start" ? x - 6 : anchor === "end" ? x - width + 6 : x - width / 2;
  return (
    <g>
      <rect
        x={rectX}
        y={y - 12}
        width={width}
        height={18}
        rx={9}
        fill={color}
        fillOpacity={0.12}
        stroke={color}
        strokeOpacity={0.35}
      />
      <text
        x={x}
        y={y}
        textAnchor={anchor}
        fontFamily={LABEL_FONT}
        fontSize={11}
        fontWeight={600}
        fill={color}
      >
        {text}
      </text>
    </g>
  );
}

/** P as starting point, Q as terminal point, and the three differences between them. */
export function VectorJoiningPointsDiagram() {
  const o = { x: 48, y: 210 };
  const xEnd = { x: 190, y: 232 };
  const yEnd = { x: 150, y: 160 };
  const zEnd = { x: 48, y: 70 };

  // Screen positions: P -> a is the x-step, a -> b the y-step, b -> Q the z-step.
  const p = { x: 111, y: 167 };
  const a = { x: 165, y: 176 };
  const b = { x: 198, y: 160 };
  const q = { x: 198, y: 95 };

  const dx = q.x - p.x;
  const dy = q.y - p.y;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;
  const tip = { x: q.x - ux * 5, y: q.y - uy * 5 };

  return (
    <div>
      <svg
        viewBox="0 0 300 250"
        className="w-full h-auto"
        role="img"
        aria-label="Oblique three-dimensional coordinate axes x, y, z from origin O. Point P with coordinates x1, y1, z1 is the starting point and point Q with coordinates x2, y2, z2 is the terminal point. A solid accent arrow runs from P to Q and is labelled vector P Q. A dashed staircase from P to Q is split into three highlighted differences: x2 minus x1 along the x direction, y2 minus y1 along the y direction, and z2 minus z1 along the z direction. The boxed magnitude of vector P Q equals the square root of the sum of the squares of these three differences."
      >
        {/* faint coordinate triad */}
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.32">
          <line x1={o.x} y1={o.y} x2={xEnd.x} y2={xEnd.y} />
          <polyline points={arrowHeadPoints(xEnd.x, xEnd.y, xEnd.x - o.x, xEnd.y - o.y, 6)} />
          <line x1={o.x} y1={o.y} x2={yEnd.x} y2={yEnd.y} />
          <polyline points={arrowHeadPoints(yEnd.x, yEnd.y, yEnd.x - o.x, yEnd.y - o.y, 6)} />
          <line x1={o.x} y1={o.y} x2={zEnd.x} y2={zEnd.y} />
          <polyline points={arrowHeadPoints(zEnd.x, zEnd.y, zEnd.x - o.x, zEnd.y - o.y, 6)} />
        </g>
        <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" fillOpacity={0.7}>
          <text x={xEnd.x + 6} y={xEnd.y + 5}>
            x
          </text>
          <text x={yEnd.x + 6} y={yEnd.y - 4}>
            y
          </text>
          <text x={zEnd.x} y={zEnd.y - 8} textAnchor="middle">
            z
          </text>
          <text x={o.x - 5} y={o.y + 15} textAnchor="end">
            O
          </text>
        </g>

        {/* the three coordinate differences, dashed and colour-matched to their chips */}
        <g fill="none" strokeWidth="1.6" strokeDasharray="5 4" strokeLinecap="round">
          <line x1={p.x} y1={p.y} x2={a.x} y2={a.y} stroke={COLOR_X} />
          <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={COLOR_Y} />
          <line x1={b.x} y1={b.y} x2={q.x} y2={q.y} stroke={COLOR_Z} />
        </g>
        <g fill="currentColor" fillOpacity={0.45}>
          <circle cx={a.x} cy={a.y} r="2.5" />
          <circle cx={b.x} cy={b.y} r="2.5" />
        </g>

        {/* the joining vector PQ */}
        <g fill="none" stroke={ACCENT} strokeWidth="2.75" strokeLinecap="round">
          <line x1={p.x} y1={p.y} x2={tip.x} y2={tip.y} />
          <polyline points={arrowHeadPoints(tip.x, tip.y, ux, uy, 10)} />
        </g>
        <circle cx={p.x} cy={p.y} r="4" fill={ACCENT} />
        <circle cx={q.x} cy={q.y} r="4" fill={ACCENT} />

        {/* point names and roles */}
        <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fill={ACCENT}>
          <text x={105} y={154} textAnchor="end">
            P(x₁,y₁,z₁)
          </text>
          <text x={205} y={88} textAnchor="start">
            Q(x₂,y₂,z₂)
          </text>
        </g>
        <g fontFamily={LABEL_FONT} fontSize={10} fill="currentColor" fillOpacity={0.6}>
          <text x={105} y={168} textAnchor="end">
            starting point
          </text>
          <text x={205} y={102} textAnchor="start">
            terminal point
          </text>
        </g>

        {/* highlighted differences */}
        <DifferenceLabel x={138} y={194} text="x₂ − x₁" color={COLOR_X} />
        <DifferenceLabel x={183} y={188} text="y₂ − y₁" color={COLOR_Y} />
        <DifferenceLabel x={206} y={132} text="z₂ − z₁" color={COLOR_Z} anchor="start" />
      </svg>
      <div className="overflow-x-auto text-center text-[0.95rem]">
        <Formula>
          {String.raw`\boxed{ \vec{PQ}= (x_2-x_1)\hat i+ (y_2-y_1)\hat j+ (z_2-z_1)\hat k }`}
        </Formula>
      </div>
      <p className="t-micro mt-4">Magnitude:</p>
      <FormulaBlock
        latex={String.raw`\boxed{ |\vec{PQ}|= \sqrt{ (x_2-x_1)^2+ (y_2-y_1)^2+ (z_2-z_1)^2 } }`}
      />
    </div>
  );
}
