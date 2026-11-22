/*
 * Schematic inline-SVG sign lines and a derivative graph for the Class 12
 * mathematics section on the First Derivative Test. Purely presentational:
 * no hooks, no client directive, no external libraries. Strokes inherit
 * light/dark theming via `currentColor`; the mathematics subject colour marks
 * positive signs, local extrema and the intercepts of y = f'(x).
 */

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

/** Compact sign line: one critical tick at c, a sign on each side, and a caption. */
function SignLine({
  leftSign,
  rightSign,
  caption,
  captionAccent = false,
  ariaLabel,
}: {
  leftSign: "+" | "−";
  rightSign: "+" | "−";
  caption: string;
  captionAccent?: boolean;
  ariaLabel: string;
}) {
  return (
    <svg viewBox="0 0 220 80" className="w-full h-auto" role="img" aria-label={ariaLabel}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5">
        <line x1="24" y1="36" x2="196" y2="36" />
        <polyline points={arrowHeadPoints(24, 36, -1, 0, 7)} />
        <polyline points={arrowHeadPoints(196, 36, 1, 0, 7)} />
      </g>

      <line x1="110" y1="29" x2="110" y2="43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <text x="110" y="56" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        c
      </text>

      <text
        x="66"
        y="29"
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill={leftSign === "+" ? ACCENT : "currentColor"}
      >
        {leftSign}
      </text>
      <text
        x="154"
        y="29"
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill={rightSign === "+" ? ACCENT : "currentColor"}
      >
        {rightSign}
      </text>

      <text
        x="110"
        y="74"
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill={captionAccent ? ACCENT : "currentColor"}
        fillOpacity={captionAccent ? 1 : 0.65}
      >
        {caption}
      </text>
    </svg>
  );
}

/** Positive to the left of c, negative to the right: local maximum. */
export function PositiveToNegativeSignLine() {
  return (
    <SignLine
      leftSign="+"
      rightSign="−"
      caption="Local maximum"
      captionAccent
      ariaLabel="Sign line with positive to the left of critical point c and negative to the right: local maximum"
    />
  );
}

/** Negative to the left of c, positive to the right: local minimum. */
export function NegativeToPositiveSignLine() {
  return (
    <SignLine
      leftSign="−"
      rightSign="+"
      caption="Local minimum"
      captionAccent
      ariaLabel="Sign line with negative to the left of critical point c and positive to the right: local minimum"
    />
  );
}

/** Positive on both sides of c: neither a local maximum nor a local minimum. */
export function PositiveToPositiveSignLine() {
  return (
    <SignLine
      leftSign="+"
      rightSign="+"
      caption="Neither"
      ariaLabel="Sign line with positive on both sides of critical point c: neither a local maximum nor a local minimum"
    />
  );
}

/** Negative on both sides of c: neither a local maximum nor a local minimum. */
export function NegativeToNegativeSignLine() {
  return (
    <SignLine
      leftSign="−"
      rightSign="−"
      caption="Neither"
      ariaLabel="Sign line with negative on both sides of critical point c: neither a local maximum nor a local minimum"
    />
  );
}

/** Cubic sign chart: ticks at −1 and 1, with + / − / + regions and test values. */
export function CubicSignNumberLine() {
  return (
    <svg
      viewBox="0 0 300 100"
      className="w-full h-auto"
      role="img"
      aria-label="Cubic sign number line with critical points minus one and one; signs positive, negative, positive in order; test values f prime of minus two greater than zero, f prime of zero less than zero, f prime of two greater than zero"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5">
        <line x1="24" y1="64" x2="276" y2="64" />
        <polyline points={arrowHeadPoints(24, 64, -1, 0, 7)} />
        <polyline points={arrowHeadPoints(276, 64, 1, 0, 7)} />
      </g>

      {[
        { x: 100, label: "−1" },
        { x: 200, label: "1" },
      ].map((tick) => (
        <g key={tick.label}>
          <line x1={tick.x} y1="57" x2={tick.x} y2="71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <text x={tick.x} y="86" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
            {tick.label}
          </text>
        </g>
      ))}

      {[
        { x: 62, sign: "+", note: "f'(-2) > 0" },
        { x: 150, sign: "−", note: "f'(0) < 0" },
        { x: 238, sign: "+", note: "f'(2) > 0" },
      ].map((region) => (
        <g key={region.note}>
          <text
            x={region.x}
            y="20"
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={12}
            fill={region.sign === "+" ? ACCENT : "currentColor"}
            fillOpacity={0.85}
          >
            {region.note}
          </text>
          <text
            x={region.x}
            y="53"
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={13}
            fill={region.sign === "+" ? ACCENT : "currentColor"}
          >
            {region.sign}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Graph of y = f'(x): above the axis for x < 1 and x > 5, below between them. */
export function DerivativeGraphRoots() {
  const curve = "M 44 86 C 70 84 92 100 110 112 C 150 140 210 140 250 112 C 268 106 282 88 298 71";

  return (
    <svg
      viewBox="0 0 320 190"
      className="w-full h-auto"
      role="img"
      aria-label="Graph of y equals f prime of x crossing the x axis at x equals 1 and x equals 5: positive for x less than 1, negative between 1 and 5, and positive for x greater than 5, with accent dots at both intercepts"
    >
      <text x="165" y="22" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"graph of y = f'(x)"}
      </text>

      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="26" y1="112" x2="306" y2="112" />
        <polyline points={arrowHeadPoints(306, 112, 1, 0, 7)} />
        <line x1="26" y1="112" x2="26" y2="30" />
        <polyline points={arrowHeadPoints(26, 30, 0, -1, 7)} />
      </g>
      <text x="302" y="127" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x
      </text>
      <text x="18" y="36" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y
      </text>

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        <line x1="110" y1="107" x2="110" y2="117" />
        <line x1="250" y1="107" x2="250" y2="117" />
      </g>
      <circle cx="110" cy="112" r="4" fill={ACCENT} />
      <circle cx="250" cy="112" r="4" fill={ACCENT} />
      <text x="110" y="132" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        1
      </text>
      <text x="250" y="132" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        5
      </text>

      <text x="72" y="100" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        +
      </text>
      <text x="180" y="128" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        −
      </text>
      <text x="284" y="100" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        +
      </text>
    </svg>
  );
}
