/*
 * Scalar multiplication shown as three side-by-side vector illustrations: the
 * original vector, a longer vector in the same direction, and a vector of that
 * same greater length in the opposite direction. Purely presentational: no
 * hooks, no client directive, no external libraries. SVG ink inherits
 * light/dark theming, with the mathematics subject colour on the arrows.
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

/** A horizontal accent arrow with one marked initial point. */
function StraightArrow({ x1, x2, y }: { x1: number; x2: number; y: number }) {
  return (
    <>
      <line
        x1="20"
        y1={y}
        x2="220"
        y2={y}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.22"
      />
      <g fill="none" stroke={ACCENT} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1={x1} y1={y} x2={x2} y2={y} />
        <polyline points={arrowHeadPoints(x2, y, x2 - x1, 0, 9)} />
      </g>
      <circle cx={x1} cy={y} r="3.5" fill={ACCENT} />
    </>
  );
}

/** One paper card with a 1px top accent in the mathematics subject colour. */
function ComparisonCard({
  title,
  math,
  note,
  children,
}: {
  title: string;
  math?: ReactNode;
  note?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-3 shadow-sm">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{ backgroundColor: ACCENT }}
      />
      <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-foreground/65">
        {title}
      </p>
      {children}
      {math ? (
        <div className="mt-1 text-center text-[0.95rem] leading-[1.7] text-foreground/85">
          {math}
        </div>
      ) : null}
      {note ? <p className="mt-0.5 text-center text-xs text-foreground/65">{note}</p> : null}
    </section>
  );
}

/** Three stacked-on-mobile, side-by-side-from-sm illustrations. */
export function ScalarMultiplicationVisual() {
  return (
    <div
      role="group"
      aria-label="Scalar multiplication compared in three illustrations: original vector, positively scaled vector in the same direction, negatively scaled vector in the opposite direction"
      className="grid grid-cols-1 gap-3 sm:grid-cols-3"
    >
      <ComparisonCard title="Original" math={<Formula>{String.raw`|\vec a|`}</Formula>}>
        <svg
          viewBox="0 0 240 92"
          className="w-full h-auto"
          role="img"
          aria-label="First of three illustrations: the original vector a is a short arrow pointing right along a faint baseline from a marked initial point"
        >
          <StraightArrow x1={32} x2={122} y={60} />
          <text
            x="77"
            y="44"
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={12}
            fontWeight={600}
            fill={ACCENT}
          >
            a
          </text>
        </svg>
      </ComparisonCard>

      <ComparisonCard
        title="Positive scale"
        math={<Formula>{String.raw`|\lambda\vec a|=|\lambda||\vec a|`}</Formula>}
        note="direction unchanged"
      >
        <svg
          viewBox="0 0 240 92"
          className="w-full h-auto"
          role="img"
          aria-label="Second of three illustrations: the positively scaled vector is a longer arrow pointing right in the same direction as the original, with a faint tick at the original tip; direction unchanged"
        >
          <StraightArrow x1={32} x2={202} y={60} />
          <line
            x1="122"
            y1="54"
            x2="122"
            y2="66"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeOpacity="0.35"
          />
          <text
            x="117"
            y="44"
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={12}
            fontWeight={600}
            fill={ACCENT}
          >
            λa
          </text>
        </svg>
      </ComparisonCard>

      <ComparisonCard
        title="Negative scale"
        math={<Formula>{String.raw`\lambda<0`}</Formula>}
        note="direction reverses"
      >
        <svg
          viewBox="0 0 240 92"
          className="w-full h-auto"
          role="img"
          aria-label="Third of three illustrations: the negatively scaled vector has the same greater length as the positive one but points left, opposite to the original direction; direction reverses"
        >
          <StraightArrow x1={208} x2={38} y={60} />
          <line
            x1="118"
            y1="54"
            x2="118"
            y2="66"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeOpacity="0.35"
          />
          <text
            x="123"
            y="44"
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={12}
            fontWeight={600}
            fill={ACCENT}
          >
            λa
          </text>
        </svg>
      </ComparisonCard>
    </div>
  );
}
