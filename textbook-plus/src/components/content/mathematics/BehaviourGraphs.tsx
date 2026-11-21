/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section
 * "Increasing & Decreasing Functions". Purely presentational: no hooks, no
 * client directive, no external libraries. Strokes inherit light/dark theming
 * via `currentColor`, with the mathematics subject colour reserved for the
 * highlighted quantities (function values, flat stretches, direction arrows
 * and the two result boxes of the decision flow).
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

/** Shared coordinate axes: labelled x/y with arrowheads at the positive ends. */
function Axes({ originX, originY, endX, topY }: { originX: number; originY: number; endX: number; topY: number }) {
  return (
    <g>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1={originX} y1={originY} x2={endX} y2={originY} />
        <polyline points={arrowHeadPoints(endX, originY, 1, 0, 7)} />
        <line x1={originX} y1={originY} x2={originX} y2={topY} />
        <polyline points={arrowHeadPoints(originX, topY, 0, -1, 7)} />
      </g>
      <text x={endX - 2} y={originY + 15} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x
      </text>
      <text x={originX - 7} y={topY + 6} textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y
      </text>
    </g>
  );
}

/** Strictly increasing: x₁ < x₂ gives f(x₁) < f(x₂), shown with dashed projections. */
export function StrictlyIncreasingGraph() {
  const xStart = 42;
  const xEnd = 196;
  const curveY = (x: number) => 132 - 100 * ((x - xStart) / (xEnd - xStart)) ** 1.2;
  const curve = Array.from({ length: 60 }, (_, i) => {
    const x = xStart + (i * (xEnd - xStart)) / 59;
    return `${x.toFixed(1)},${curveY(x).toFixed(1)}`;
  }).join(" ");
  const x1 = 80;
  const x2 = 150;
  const y1 = curveY(x1);
  const y2 = curveY(x2);

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Strictly increasing curve: two points x1 less than x2 project from the x-axis to the curve and across to the y-axis, showing f(x1) less than f(x2)"
    >
      <Axes originX={30} originY={140} endX={206} topY={16} />

      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* dashed projections from the two x-values to the curve and to the y-axis */}
      <g stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={x1} y1="140" x2={x1} y2={y1.toFixed(1)} />
        <line x1={x2} y1="140" x2={x2} y2={y2.toFixed(1)} />
        <line x1="30" y1={y1.toFixed(1)} x2={x1} y2={y1.toFixed(1)} />
        <line x1="30" y1={y2.toFixed(1)} x2={x2} y2={y2.toFixed(1)} />
      </g>

      <circle cx={x1} cy={y1.toFixed(1)} r="3.5" fill={ACCENT} />
      <circle cx={x2} cy={y2.toFixed(1)} r="3.5" fill={ACCENT} />

      <text x={x1} y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x₁
      </text>
      <text x={x2} y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x₂
      </text>
      <text x="26" y={(y1 + 4).toFixed(1)} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        f(x₁)
      </text>
      <text x="26" y={(y2 + 4).toFixed(1)} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        f(x₂)
      </text>
      <text x="206" y="166" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f(x₁) < f(x₂)"}
      </text>
    </svg>
  );
}

/** Increasing (not strictly): the curve rises, flattens where f'(x) = 0, then rises again. */
export function IncreasingGraph() {
  const curve = "M 42 128 C 60 110 74 88 92 84 C 108 84 124 84 140 84 C 158 84 176 62 196 40";

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Increasing curve that rises, runs horizontally for a stretch where the derivative is zero, then rises again"
    >
      <Axes originX={30} originY={140} endX={206} topY={16} />

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* highlighted flat stretch */}
      <line x1="92" y1="84" x2="140" y2="84" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <text x="116" y="74" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(x) = 0"}
      </text>
    </svg>
  );
}

/** Strictly decreasing: x₁ < x₂ gives f(x₁) > f(x₂), shown with dashed projections. */
export function StrictlyDecreasingGraph() {
  const xStart = 42;
  const xEnd = 196;
  const curveY = (x: number) => 40 + 96 * ((x - xStart) / (xEnd - xStart)) ** 1.2;
  const curve = Array.from({ length: 60 }, (_, i) => {
    const x = xStart + (i * (xEnd - xStart)) / 59;
    return `${x.toFixed(1)},${curveY(x).toFixed(1)}`;
  }).join(" ");
  const x1 = 80;
  const x2 = 150;
  const y1 = curveY(x1);
  const y2 = curveY(x2);

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Strictly decreasing curve: two points x1 less than x2 project from the x-axis to the curve and across to the y-axis, showing f(x1) greater than f(x2)"
    >
      <Axes originX={30} originY={140} endX={206} topY={16} />

      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* dashed projections from the two x-values to the curve and to the y-axis */}
      <g stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={x1} y1="140" x2={x1} y2={y1.toFixed(1)} />
        <line x1={x2} y1="140" x2={x2} y2={y2.toFixed(1)} />
        <line x1="30" y1={y1.toFixed(1)} x2={x1} y2={y1.toFixed(1)} />
        <line x1="30" y1={y2.toFixed(1)} x2={x2} y2={y2.toFixed(1)} />
      </g>

      <circle cx={x1} cy={y1.toFixed(1)} r="3.5" fill={ACCENT} />
      <circle cx={x2} cy={y2.toFixed(1)} r="3.5" fill={ACCENT} />

      <text x={x1} y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x₁
      </text>
      <text x={x2} y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x₂
      </text>
      <text x="26" y={(y1 + 4).toFixed(1)} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        f(x₁)
      </text>
      <text x="26" y={(y2 + 4).toFixed(1)} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        f(x₂)
      </text>
      <text x="206" y="166" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f(x₁) > f(x₂)"}
      </text>
    </svg>
  );
}

/** Decreasing (not strictly): the curve falls, flattens where f'(x) = 0, then falls again. */
export function DecreasingGraph() {
  const curve = "M 42 40 C 60 58 74 76 92 80 C 108 80 124 80 140 80 C 158 80 176 104 196 126";

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Decreasing curve that falls, runs horizontally for a stretch where the derivative is zero, then falls again"
    >
      <Axes originX={30} originY={140} endX={206} topY={16} />

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* highlighted flat stretch */}
      <line x1="92" y1="80" x2="140" y2="80" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <text x="116" y="70" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(x) = 0"}
      </text>
    </svg>
  );
}

/** One continuous curve with three labelled regions: increasing, decreasing, increasing. */
export function WaveCurveDiagram() {
  const curve = "M 46 118 C 66 100 86 62 105 62 C 130 62 166 120 190 120 C 214 120 248 58 278 58";

  return (
    <svg
      viewBox="0 0 300 170"
      className="w-full h-auto"
      role="img"
      aria-label="One continuous curve with three labelled regions in order: increasing, decreasing, increasing, each with an accent direction arrow pointing up, down, up"
    >
      <Axes originX={34} originY={140} endX={290} topY={16} />

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* direction arrows above each region */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1="76" y1="42" x2="76" y2="20" />
        <polyline points={arrowHeadPoints(76, 20, 0, -1, 8)} />
        <line x1="148" y1="20" x2="148" y2="42" />
        <polyline points={arrowHeadPoints(148, 42, 0, 1, 8)} />
        <line x1="234" y1="42" x2="234" y2="20" />
        <polyline points={arrowHeadPoints(234, 20, 0, -1, 8)} />
      </g>

      <text x="76" y="156" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        increasing
      </text>
      <text x="148" y="156" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        decreasing
      </text>
      <text x="234" y="156" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        increasing
      </text>
    </svg>
  );
}

/** Upward-opening parabola y = x², decreasing on the left branch, increasing on the right. */
export function ParabolaDiagram() {
  const parabola = (from: number, to: number) =>
    Array.from({ length: 32 }, (_, i) => {
      const u = from + (i * (to - from)) / 31;
      return `${(110 + u * 9).toFixed(1)},${(150 - u * u * 1.6).toFixed(1)}`;
    }).join(" ");
  const full = parabola(-8, 8);
  const left = parabola(-8, 0);
  const right = parabola(0, 8);

  return (
    <svg
      viewBox="0 0 220 180"
      className="w-full h-auto"
      role="img"
      aria-label="Upward-opening parabola with vertex at the origin: the left branch is decreasing and the right branch is increasing"
    >
      <Axes originX={110} originY={150} endX={204} topY={16} />

      <polyline points={full} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />

      {/* the two monotonic branches, highlighted */}
      <polyline points={left} fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      <polyline points={right} fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="110" cy="150" r="3.5" fill="currentColor" />

      <text x="58" y="78" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        decreasing
      </text>
      <text x="162" y="78" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        increasing
      </text>
    </svg>
  );
}

/** Vertical decision flow: find f'(x), solve for critical points, test intervals, branch to the two results. */
export function DecisionFlowDiagram() {
  return (
    <svg
      viewBox="0 0 320 340"
      className="w-full h-auto"
      role="img"
      aria-label="Decision flow: find f prime of x, solve f prime of x equals zero for critical points, divide the domain into intervals and test the sign of f prime, then branch to increasing when positive or decreasing when negative"
    >
      {/* step boxes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeOpacity="0.85">
        <rect x="60" y="14" width="200" height="36" rx="6" />
        <rect x="40" y="68" width="240" height="36" rx="6" />
        <rect x="24" y="122" width="272" height="52" rx="6" />
      </g>

      {/* downward arrows between the first three boxes */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.85">
        <line x1="160" y1="50" x2="160" y2="66" />
        <polyline points={arrowHeadPoints(160, 66, 0, 1, 8)} />
        <line x1="160" y1="104" x2="160" y2="120" />
        <polyline points={arrowHeadPoints(160, 120, 0, 1, 8)} />
      </g>

      <text x="160" y="37" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"Find f'(x)"}
      </text>
      <text x="160" y="91" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        {"Solve f'(x) = 0 (critical points)"}
      </text>
      <text x="160" y="143" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        Divide domain into intervals;
      </text>
      <text x="160" y="161" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        {"test the sign of f'(x)"}
      </text>

      {/* branch: one stub down, then two arrows to the result boxes */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.85">
        <line x1="160" y1="174" x2="160" y2="206" />
        <circle cx="160" cy="206" r="2.5" fill="currentColor" stroke="none" />
        <line x1="160" y1="206" x2="84" y2="250" />
        <polyline points={arrowHeadPoints(84, 250, -76, 44, 8)} />
        <line x1="160" y1="206" x2="236" y2="250" />
        <polyline points={arrowHeadPoints(236, 250, 76, 44, 8)} />
      </g>

      {/* accent result boxes */}
      <rect x="16" y="254" width="136" height="52" rx="6" fill={ACCENT} fillOpacity="0.08" stroke={ACCENT} strokeWidth="1.75" />
      <rect x="168" y="254" width="136" height="52" rx="6" fill={ACCENT} fillOpacity="0.08" stroke={ACCENT} strokeWidth="1.75" />

      <text x="84" y="275" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(x) > 0"}
      </text>
      <text x="84" y="293" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        → Increasing
      </text>
      <text x="236" y="275" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(x) < 0"}
      </text>
      <text x="236" y="293" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        → Decreasing
      </text>
    </svg>
  );
}
