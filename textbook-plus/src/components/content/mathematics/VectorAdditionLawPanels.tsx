/*
 * Presentational panels for the two vector-addition laws: the triangle law
 * (two successive arrows closed by an accent resultant) and the parallelogram
 * law (two coinitial arrows with the accent diagonal as resultant). Purely
 * presentational: no hooks, no client directive, no external libraries.
 * Inline SVGs scale with `w-full h-auto` and inherit light/dark theming via
 * `currentColor`; the mathematics subject colour marks only the resultant.
 */

import type { ReactNode } from "react";

import { Formula } from "@/components/content/Formula";

const LABEL_FONT = "var(--font-content), sans-serif";
const ACCENT = "var(--subject-mathematics)";

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

/** A straight arrow with a visible head, stopped just short of its end point. */
function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = "currentColor",
  width = 2.25,
  head = 8,
  gap = 6,
  opacity = 1,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  head?: number;
  gap?: number;
  opacity?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;
  const tipX = x2 - ux * gap;
  const tipY = y2 - uy * gap;

  return (
    <g
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={opacity}
    >
      <line x1={x1} y1={y1} x2={tipX} y2={tipY} />
      <polyline points={arrowHeadPoints(tipX, tipY, ux, uy, head)} />
    </g>
  );
}

/** A faint, unheaded construction side of a parallelogram. */
function ConstructionSide({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeOpacity={0.32}
    />
  );
}

/** Shared card chrome so the two laws line up in a `grid sm:grid-cols-2`. */
function LawPanel({
  label,
  diagram,
  children,
}: {
  label: string;
  diagram: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0 rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <div
        aria-hidden="true"
        className="pointer-events-none mb-3 h-px w-8 rounded-full opacity-70"
        style={{ backgroundColor: ACCENT }}
      />
      <p className="t-micro" style={{ color: ACCENT }}>
        {label}
      </p>
      <div className="mt-3 rounded-xl border border-border/40 bg-muted/20 p-2">{diagram}</div>
      <div className="mt-3 space-y-1 text-sm font-extrabold text-foreground">{children}</div>
    </section>
  );
}

/** Triangle law: AB followed by BC, closed by the accent resultant AC. */
export function TriangleLawPanel() {
  const a = { x: 34, y: 150 };
  const b = { x: 128, y: 36 };
  const c = { x: 262, y: 150 };

  return (
    <LawPanel
      label="TRIANGLE LAW"
      diagram={
        <svg
          viewBox="0 0 300 190"
          className="w-full h-auto"
          role="img"
          aria-label="Triangle law of vector addition: a triangle with vertices A at the lower left, B at the top and C at the lower right. An arrow runs from A to B and another from B to C as the two successive vectors; a third arrow in the mathematics accent colour runs directly from A to C and is the resultant."
        >
          <Arrow x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          <Arrow x1={b.x} y1={b.y} x2={c.x} y2={c.y} />
          <Arrow x1={a.x} y1={a.y} x2={c.x} y2={c.y} color={ACCENT} width={2.75} head={9} />

          <g fill="currentColor">
            <circle cx={a.x} cy={a.y} r="3.2" />
            <circle cx={b.x} cy={b.y} r="3.2" />
            <circle cx={c.x} cy={c.y} r="3.2" />
          </g>

          <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={700} fill="currentColor">
            <text x={a.x - 6} y={a.y + 17} textAnchor="middle">
              A
            </text>
            <text x={b.x} y={b.y - 12} textAnchor="middle">
              B
            </text>
            <text x={c.x + 7} y={c.y + 17} textAnchor="middle">
              C
            </text>
          </g>
          <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fill="currentColor">
            <text x="62" y="84" textAnchor="middle">
              AB
            </text>
            <text x="206" y="84" textAnchor="middle">
              BC
            </text>
            <text x="148" y="174" textAnchor="middle">
              AC
            </text>
          </g>
        </svg>
      }
    >
      <p className="t-micro">Mathematical representation:</p>
      <div className="overflow-x-auto text-center">
        <Formula>{String.raw`\boxed{\vec{AB}+\vec{BC}=\vec{AC}}`}</Formula>
      </div>
      <p className="text-xs text-foreground/65">Alternatively,</p>
      <div className="overflow-x-auto text-center">
        <Formula>{String.raw`\boxed{\vec{AB}+\vec{BC}+\vec{CA}=\vec 0}`}</Formula>
      </div>
    </LawPanel>
  );
}

/** Parallelogram law: coinitial a and b as adjacent sides, diagonal as resultant. */
export function ParallelogramLawPanel() {
  const o = { x: 36, y: 150 };
  const a = { x: 198, y: 150 };
  const b = { x: 104, y: 50 };
  const c = { x: 266, y: 50 };

  return (
    <LawPanel
      label="PARALLELOGRAM LAW"
      diagram={
        <svg
          viewBox="0 0 300 190"
          className="w-full h-auto"
          role="img"
          aria-label="Parallelogram law of vector addition: vectors a and b start together at point O as adjacent sides of a parallelogram, and the diagonal drawn in the mathematics accent colour from O to the opposite corner is their resultant a plus b."
        >
          <ConstructionSide x1={a.x} y1={a.y} x2={c.x} y2={c.y} />
          <ConstructionSide x1={b.x} y1={b.y} x2={c.x} y2={c.y} />

          <Arrow x1={o.x} y1={o.y} x2={a.x} y2={a.y} />
          <Arrow x1={o.x} y1={o.y} x2={b.x} y2={b.y} />
          <Arrow x1={o.x} y1={o.y} x2={c.x} y2={c.y} color={ACCENT} width={2.75} head={9} />

          <g fill="currentColor">
            <circle cx={o.x} cy={o.y} r="3.2" />
            <circle cx={a.x} cy={a.y} r="3.2" />
            <circle cx={b.x} cy={b.y} r="3.2" />
            <circle cx={c.x} cy={c.y} r="3.2" />
          </g>

          <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={700} fill="currentColor">
            <text x={o.x - 7} y={o.y + 17} textAnchor="middle">
              O
            </text>
            <text x={a.x + 2} y={a.y + 17} textAnchor="middle">
              A
            </text>
            <text x={b.x - 5} y={b.y - 10} textAnchor="middle">
              B
            </text>
            <text x={c.x + 5} y={c.y - 10} textAnchor="middle">
              C
            </text>
          </g>
          <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fill="currentColor">
            <text x="117" y="172" textAnchor="middle">
              a
            </text>
            <text x="60" y="94" textAnchor="middle">
              b
            </text>
            <text x="166" y="86" textAnchor="middle">
              a + b
            </text>
          </g>
        </svg>
      }
    >
      <div className="overflow-x-auto text-center">
        <Formula>{String.raw`\boxed{\text{Resultant}=\vec a+\vec b}`}</Formula>
      </div>
    </LawPanel>
  );
}
