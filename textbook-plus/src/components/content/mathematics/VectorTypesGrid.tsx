/*
 * Responsive card grid introducing the six types of vectors. Purely
 * presentational: no hooks, no client directive, no external libraries.
 * Inline SVGs inherit light/dark theming via `currentColor`, with the
 * mathematics subject colour reserved for arrows, accents and labels.
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

/** A highlighted straight arrow with a rounded, two-segment head. */
function Arrow({
  x1,
  y1,
  x2,
  y2,
  head = 7,
  width = 2.25,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  head?: number;
  width?: number;
}) {
  return (
    <g fill="none" stroke={ACCENT} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <polyline points={arrowHeadPoints(x2, y2, x2 - x1, y2 - y1, head)} />
    </g>
  );
}

/** Three arrows of different lengths and directions sharing one initial point. */
function CoinitialDiagram() {
  return (
    <svg
      viewBox="0 0 220 92"
      className="w-full h-auto"
      role="img"
      aria-label="Three arrows of different lengths and directions all beginning at one common initial point O"
    >
      <Arrow x1={28} y1={80} x2={126} y2={28} />
      <Arrow x1={28} y1={80} x2={158} y2={74} />
      <Arrow x1={28} y1={80} x2={62} y2={20} head={6} />
      <circle cx={28} cy={80} r="3.2" fill="currentColor" />
      <text x="18" y="90" fontFamily={LABEL_FONT} fontSize={11} fill="currentColor">
        O
      </text>
    </svg>
  );
}

/** Arrows along one straight line: two lengths and one reversed direction. */
function CollinearDiagram() {
  return (
    <svg
      viewBox="0 0 220 84"
      className="w-full h-auto"
      role="img"
      aria-label="Three arrows lying on one straight line: two pointing right with different lengths and one shorter arrow pointing left in the opposite direction"
    >
      <line
        x1="14"
        y1="44"
        x2="206"
        y2="44"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />
      <Arrow x1={18} y1={44} x2={62} y2={44} />
      <Arrow x1={74} y1={44} x2={142} y2={44} />
      <Arrow x1={204} y1={44} x2={152} y2={44} />
    </svg>
  );
}

/** Two spatially separated arrows with identical direction and length. */
function EqualDiagram() {
  return (
    <svg
      viewBox="0 0 220 84"
      className="w-full h-auto"
      role="img"
      aria-label="Two arrows far apart on the page with identical length and the same up-right direction, showing equal vectors"
    >
      <Arrow x1={26} y1={68} x2={84} y2={28} />
      <Arrow x1={134} y1={68} x2={192} y2={28} />
    </svg>
  );
}

/** Two equal-length arrows pointing in opposite directions, labelled a and minus a. */
function NegativeDiagram() {
  return (
    <svg
      viewBox="0 0 220 86"
      className="w-full h-auto"
      role="img"
      aria-label="Two equal-length arrows pointing in opposite directions: the upper arrow points right and is labelled a, the lower arrow points left and is labelled minus a"
    >
      <Arrow x1={32} y1={30} x2={112} y2={30} />
      <Arrow x1={188} y1={60} x2={108} y2={60} />
      <g fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT} textAnchor="middle">
        <text x="72" y="18">
          a
        </text>
        <text x="148" y="80">
          −a
        </text>
      </g>
    </svg>
  );
}

/** One paper card with a 1px top accent in the mathematics subject colour. */
function VectorCard({
  title,
  notation,
  definition,
  bullets,
  diagram,
}: {
  title: string;
  notation?: ReactNode;
  definition?: ReactNode;
  bullets?: ReactNode[];
  diagram?: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{ backgroundColor: ACCENT }}
      />
      <h3 className="text-sm font-extrabold tracking-tight text-foreground">{title}</h3>
      {notation ? (
        <div className="mt-2 text-[0.95rem] leading-[1.7] text-foreground/85">{notation}</div>
      ) : null}
      {definition ? (
        <p className="mt-2 text-[0.95rem] leading-[1.7] text-foreground/85">{definition}</p>
      ) : null}
      {bullets?.length ? (
        <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-[1.7] text-foreground/85">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-[0.62em] h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {diagram ? (
        <div className="mt-3 rounded-xl border border-border/40 bg-muted/20 p-2">{diagram}</div>
      ) : null}
    </article>
  );
}

/** The six vector types as a responsive card grid. */
export function VectorTypesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <VectorCard
        title="Zero or Null Vector"
        notation={<Formula>{String.raw`\vec 0,\qquad |\vec 0|=0`}</Formula>}
        bullets={["Initial and terminal points coincide.", "Direction is arbitrary or undefined."]}
      />
      <VectorCard
        title="Unit Vector"
        notation={<Formula>{String.raw`\hat a,\qquad |\hat a|=1`}</Formula>}
        definition="A vector whose magnitude is exactly one unit."
      />
      <VectorCard
        title="Coinitial Vectors"
        definition="Two or more vectors having the same initial point."
        diagram={<CoinitialDiagram />}
      />
      <VectorCard
        title="Collinear Vectors"
        definition="Two or more vectors parallel to the same straight line, regardless of their magnitudes or directions."
        diagram={<CollinearDiagram />}
      />
      <VectorCard
        title="Equal Vectors"
        definition="Two vectors are equal when they have:"
        bullets={["Same magnitude.", "Same direction.", "Their initial points may be different."]}
        diagram={<EqualDiagram />}
      />
      <VectorCard
        title="Negative of a Vector"
        notation={<Formula>{String.raw`-\vec a`}</Formula>}
        definition="A vector having:"
        bullets={[
          <>
            Same magnitude as <Formula>{String.raw`\vec a`}</Formula>.
          </>,
          <>
            Opposite direction to <Formula>{String.raw`\vec a`}</Formula>.
          </>,
        ]}
        diagram={<NegativeDiagram />}
      />
    </div>
  );
}
