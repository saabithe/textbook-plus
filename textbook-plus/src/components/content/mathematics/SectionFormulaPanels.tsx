/*
 * Section-formula teaching panels: one two-state line-segment illustration
 * (internal and external division of PQ by R) plus three separate formula
 * cards. Purely presentational: no hooks, no client directive, no external
 * libraries. Inline SVGs use `currentColor` for structure and the mathematics
 * subject colour for the points, the division marks and the ratio labels.
 */

import type { ReactNode } from "react";

import { Formula, FormulaBlock } from "@/components/content/Formula";

const LABEL_FONT = "var(--font-content), sans-serif";
const ACCENT = "var(--subject-mathematics)";

/** Common shell for the three section-formula result cards. */
function FormulaCard({
  title,
  lead,
  children,
}: {
  title: string;
  lead: ReactNode;
  children: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{ backgroundColor: ACCENT }}
      />
      <p className="text-sm font-extrabold tracking-tight text-foreground">{title}</p>
      <p className="mt-2 text-[0.95rem] leading-[1.7] text-foreground/85">{lead}</p>
      {children}
    </article>
  );
}

/** R between P and Q, with the two parts carrying the ratio m : n. */
function InternalDivisionDiagram() {
  const p = { x: 36, y: 52 };
  const r = { x: 132, y: 52 };
  const q = { x: 252, y: 52 };

  return (
    <svg
      viewBox="0 0 300 88"
      className="w-full h-auto"
      role="img"
      aria-label="Internal division: a horizontal line segment from P on the left to Q on the right, with R lying between P and Q. The part P to R is labelled m and the part R to Q is labelled n, giving the ratio m to n."
    >
      <text
        x="12"
        y="16"
        fontFamily={LABEL_FONT}
        fontSize={9}
        letterSpacing="1"
        fill="currentColor"
        fillOpacity={0.6}
      >
        INTERNAL DIVISION
      </text>
      <text
        x="288"
        y="17"
        textAnchor="end"
        fontFamily={LABEL_FONT}
        fontSize={12}
        fontWeight={600}
        fill={ACCENT}
      >
        m : n
      </text>

      <line
        x1={p.x}
        y1={p.y}
        x2={q.x}
        y2={q.y}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeLinecap="round"
      />
      <g fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round">
        <line x1={p.x} y1={p.y} x2={r.x} y2={r.y} />
        <line x1={r.x} y1={r.y} x2={q.x} y2={q.y} strokeOpacity="0.55" />
      </g>
      <g fill={ACCENT}>
        <circle cx={p.x} cy={p.y} r="4" />
        <circle cx={r.x} cy={r.y} r="4.5" />
        <circle cx={q.x} cy={q.y} r="4" />
      </g>

      <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fill={ACCENT} textAnchor="middle">
        <text x="84" y="40">
          m
        </text>
        <text x="192" y="40">
          n
        </text>
      </g>
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x={p.x} y={74}>
          P
        </text>
        <text x={q.x} y={74}>
          Q
        </text>
      </g>
      <text
        x={r.x}
        y={74}
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={12}
        fontWeight={600}
        fill={ACCENT}
      >
        R
      </text>
    </svg>
  );
}

/** R beyond Q, outside the segment PQ, with PR and RQ carrying m : n. */
function ExternalDivisionDiagram() {
  const p = { x: 36, y: 52 };
  const q = { x: 200, y: 52 };
  const r = { x: 264, y: 52 };
  const tip = { x: r.x - 7, y: r.y };

  return (
    <svg
      viewBox="0 0 300 88"
      className="w-full h-auto"
      role="img"
      aria-label="External division: a horizontal line segment from P on the left to Q, extended past Q to R on the right, so R lies outside segment P Q. The reach P to R is labelled m and the extension Q to R is labelled n, giving the ratio m to n."
    >
      <text
        x="12"
        y="16"
        fontFamily={LABEL_FONT}
        fontSize={9}
        letterSpacing="1"
        fill="currentColor"
        fillOpacity={0.6}
      >
        EXTERNAL DIVISION
      </text>
      <text
        x="288"
        y="17"
        textAnchor="end"
        fontFamily={LABEL_FONT}
        fontSize={12}
        fontWeight={600}
        fill={ACCENT}
      >
        m : n
      </text>

      <line
        x1={p.x}
        y1={p.y}
        x2={q.x}
        y2={q.y}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeLinecap="round"
      />
      <g fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round">
        <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} strokeOpacity="0.55" />
        <line x1={q.x} y1={q.y} x2={tip.x} y2={tip.y} />
        <polyline
          points={`${r.x - 7},${r.y - 4} ${r.x},${r.y} ${r.x - 7},${r.y + 4}`}
          strokeLinejoin="round"
        />
      </g>
      <g fill={ACCENT}>
        <circle cx={p.x} cy={p.y} r="4" />
        <circle cx={q.x} cy={q.y} r="4" />
        <circle cx={r.x} cy={r.y} r="4.5" />
      </g>

      <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fill={ACCENT} textAnchor="middle">
        <text x="150" y="40">
          m
        </text>
        <text x="232" y="40">
          n
        </text>
      </g>
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x={p.x} y={74}>
          P
        </text>
        <text x={q.x} y={74}>
          Q
        </text>
      </g>
      <text
        x={r.x}
        y={74}
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={12}
        fontWeight={600}
        fill={ACCENT}
      >
        R
      </text>
    </svg>
  );
}

/** Both division states, stacked, so the two positions of R can be compared. */
export function SectionFormulaIllustration() {
  return (
    <div className="my-6 space-y-3">
      <InternalDivisionDiagram />
      <ExternalDivisionDiagram />
    </div>
  );
}

/** R divides PQ internally in the ratio m : n. */
export function InternalDivisionCard() {
  return (
    <FormulaCard
      title="Internal Division"
      lead="When point R divides the line segment internally in the ratio m:n:"
    >
      <FormulaBlock
        latex={String.raw`\boxed{ \vec r=\frac{m\vec b+n\vec a}{m+n} }`}
        important
      />
    </FormulaCard>
  );
}

/** R divides PQ externally in the ratio m : n. */
export function ExternalDivisionCard() {
  return (
    <FormulaCard
      title="External Division"
      lead="When point R divides the line segment externally in the ratio m:n:"
    >
      <FormulaBlock
        latex={String.raw`\boxed{ \vec r=\frac{m\vec b-n\vec a}{m-n} }`}
        important
      />
    </FormulaCard>
  );
}

/** The equal-ratio special case of internal division. */
export function MidpointCard() {
  return (
    <FormulaCard title="Midpoint" lead="When R is the midpoint of PQ:">
      <div className="mt-2 overflow-x-auto text-center text-[0.95rem]">
        <Formula>{String.raw`m:n=1:1`}</Formula>
      </div>
      <p className="mt-2 text-[0.95rem] leading-[1.7] text-foreground/85">Therefore,</p>
      <FormulaBlock latex={String.raw`\boxed{\vec r=\frac{\vec a+\vec b}{2}}`} important />
    </FormulaCard>
  );
}
