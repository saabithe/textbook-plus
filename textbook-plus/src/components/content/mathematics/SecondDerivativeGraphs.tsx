/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on the
 * Second Derivative Test. Purely presentational: no hooks, no client directive,
 * no external libraries. Strokes inherit light/dark theming via `currentColor`,
 * with the mathematics subject colour reserved for the stationary tangent, the
 * stationary point and the sign/conclusion labels.
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
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
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

/** Concave-down arch: the horizontal tangent at the top marks a local maximum. */
export function ConcaveDownGraph() {
  const c = 119;
  const peakY = 44;
  const curveY = (x: number) => peakY + 0.0104 * (x - c) ** 2;
  const curve = Array.from({ length: 60 }, (_, i) => {
    const x = 47 + (i * (191 - 47)) / 59;
    return `${x.toFixed(1)},${curveY(x).toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 220 150"
      className="w-full h-auto"
      role="img"
      aria-label="Concave-down arch on coordinate axes with a horizontal tangent at its highest point c, where the second derivative is negative and the curve has a local maximum"
    >
      <Axes originX={30} originY={112} endX={206} topY={14} />

      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* faint projection from the stationary point to the x-axis */}
      <line x1={c} y1={peakY} x2={c} y2="112" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5" />

      {/* horizontal tangent and stationary point */}
      <line x1="96" y1={peakY} x2="142" y2={peakY} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <circle cx={c} cy={peakY} r="4" fill={ACCENT} />

      <text x={c} y="28" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"f''(c) < 0"}
      </text>
      <text x={c} y="125" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        c
      </text>
      <text x={c} y="145" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        local maximum
      </text>
    </svg>
  );
}

/** Concave-up cup: the horizontal tangent at the bottom marks a local minimum. */
export function ConcaveUpGraph() {
  const c = 119;
  const bottomY = 98;
  const curveY = (x: number) => bottomY - 0.0104 * (x - c) ** 2;
  const curve = Array.from({ length: 60 }, (_, i) => {
    const x = 47 + (i * (191 - 47)) / 59;
    return `${x.toFixed(1)},${curveY(x).toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 220 150"
      className="w-full h-auto"
      role="img"
      aria-label="Concave-up cup on coordinate axes with a horizontal tangent at its lowest point c, where the second derivative is positive and the curve has a local minimum"
    >
      <Axes originX={30} originY={112} endX={206} topY={14} />

      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* faint projection from the stationary point to the x-axis */}
      <line x1={c} y1={bottomY} x2={c} y2="112" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5" />

      {/* horizontal tangent and stationary point */}
      <line x1="96" y1={bottomY} x2="142" y2={bottomY} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <circle cx={c} cy={bottomY} r="4" fill={ACCENT} />

      <text x={c} y="28" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"f''(c) > 0"}
      </text>
      <text x={c} y="125" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        c
      </text>
      <text x={c} y="145" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        local minimum
      </text>
    </svg>
  );
}

/** Flat plateau at c: both derivatives vanish, so the first derivative test is needed. */
export function InconclusiveSecondDerivativeGraph() {
  const plateauY = 64;
  const curve = "M 44 96 C 62 82 78 64 98 64 C 112 64 128 64 142 64 C 160 64 178 46 196 30";

  return (
    <svg
      viewBox="0 0 220 150"
      className="w-full h-auto"
      role="img"
      aria-label="Curve that rises, flattens into a horizontal plateau at c and rises again: at c the first and second derivatives are both zero, so the first derivative test must be used"
    >
      <Axes originX={30} originY={112} endX={206} topY={14} />

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* highlighted flat stretch is the tangent at c */}
      <line x1="98" y1={plateauY} x2="142" y2={plateauY} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <circle cx="120" cy={plateauY} r="4" fill={ACCENT} />

      <text x="120" y="46" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(c) = 0"}
      </text>
      <text x="120" y="86" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f''(c) = 0"}
      </text>
      <text x="120" y="145" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        use first derivative test
      </text>
    </svg>
  );
}

/** Monotonic cubic-like curve: a horizontal tangent at c with no peak or valley. */
export function StationaryInflectionGraph() {
  const c = 128;
  const midY = 70;
  const curveY = (x: number) => midY - 0.0001054 * (x - c) ** 3;
  const curve = Array.from({ length: 70 }, (_, i) => {
    const x = 50 + (i * (206 - 50)) / 69;
    return `${x.toFixed(1)},${curveY(x).toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 240 160"
      className="w-full h-auto"
      role="img"
      aria-label="Monotonically rising cubic-like curve that keeps rising through an interior point c where the tangent is horizontal, showing a stationary inflection with no maximum or minimum"
    >
      <Axes originX={30} originY={126} endX={226} topY={14} />

      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      {/* horizontal tangent and stationary point; the curve continues rising through it */}
      <line x1="106" y1={midY} x2="150" y2={midY} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" />
      <circle cx={c} cy={midY} r="4" fill={ACCENT} />

      <text x="137" y="65" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        c
      </text>
      <text x={c} y="32" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        horizontal tangent
      </text>
      <text x="78" y="104" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        no extremum
      </text>
      <text x={c} y="152" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        stationary inflection
      </text>
    </svg>
  );
}
