/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on
 * maxima and minima. Purely presentational: no hooks, no client directive,
 * no external libraries. Strokes inherit light/dark theming via `currentColor`,
 * with the mathematics subject colour reserved for extrema points, projections,
 * guide lines and equation labels.
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

/** A smooth hump with its peak at c₁: dashed projections give the point and the maximum value. */
export function MaximumPointPanel() {
  const peakX = 112;
  const peakY = 42;
  const curve = "M 40 124 C 70 60 100 42 112 42 C 124 42 166 88 196 124";

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Smooth hump curve with its peak at c1 on the x-axis; dashed projections mark the point c1 and the maximum value f of c1 on the y-axis"
    >
      <Axes originX={30} originY={140} endX={206} topY={16} />

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      <g stroke={ACCENT} strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={peakX} y1="140" x2={peakX} y2={peakY} />
        <line x1="30" y1={peakY} x2={peakX} y2={peakY} />
      </g>

      <circle cx={peakX} cy={peakY} r="4" fill={ACCENT} />

      <text x={peakX} y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        c₁
      </text>
      <text x="126" y="154" textAnchor="start" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        point
      </text>
      <text x="26" y="46" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        f(c₁)
      </text>
      <text x="26" y="32" textAnchor="end" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        value
      </text>
    </svg>
  );
}

/** A smooth valley with its trough at c₂: dashed projections give the point and the minimum value. */
export function MinimumPointPanel() {
  const troughX = 112;
  const troughY = 112;
  const curve = "M 40 46 C 70 100 100 112 112 112 C 124 112 166 100 196 46";

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Smooth valley curve with its trough at c2 on the x-axis; dashed projections mark the point c2 and the minimum value f of c2 on the y-axis"
    >
      <Axes originX={30} originY={140} endX={206} topY={16} />

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      <g stroke={ACCENT} strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={troughX} y1="140" x2={troughX} y2={troughY} />
        <line x1="30" y1={troughY} x2={troughX} y2={troughY} />
      </g>

      <circle cx={troughX} cy={troughY} r="4" fill={ACCENT} />

      <text x={troughX} y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        c₂
      </text>
      <text x="126" y="154" textAnchor="start" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        point
      </text>
      <text x="26" y="116" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        f(c₂)
      </text>
      <text x="26" y="102" textAnchor="end" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        value
      </text>
    </svg>
  );
}

/** Upward-opening parabola y = x² with vertex at the origin and arrowed branches. */
export function SquareFunctionGraph() {
  const originX = 115;
  const originY = 150;
  const curve = Array.from({ length: 48 }, (_, i) => {
    const u = -7 + (i * 14) / 47;
    return `${(originX + u * 10).toFixed(1)},${(originY - u * u * 1.75).toFixed(1)}`;
  }).join(" ");
  const endY = 150 - 49 * 1.75;

  return (
    <svg
      viewBox="0 0 230 180"
      className="w-full h-auto"
      role="img"
      aria-label="Upward-opening parabola y equals x squared with vertex at the origin; both branches carry arrowheads and the vertex is marked as the minimum value zero"
    >
      <Axes originX={originX} originY={originY} endX={216} topY={16} />

      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8" />

      <g fill="none" stroke={ACCENT} strokeWidth="2.25" strokeLinecap="round">
        <polyline points={arrowHeadPoints(45, endY, -9, -22, 8)} />
        <polyline points={arrowHeadPoints(185, endY, 9, -22, 8)} />
      </g>

      <circle cx={originX} cy={originY} r="4" fill={ACCENT} />

      <text x="150" y="80" textAnchor="start" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"y = x²"}
      </text>
      <text x={originX} y="170" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"minimum = 0"}
      </text>
    </svg>
  );
}

/** V-shaped graph of y = |x| with its minimum at the origin. */
export function ModulusGraph() {
  const originX = 115;
  const originY = 150;

  return (
    <svg
      viewBox="0 0 230 180"
      className="w-full h-auto"
      role="img"
      aria-label="V-shaped graph of y equals absolute value of x with its vertex at the origin marked as the minimum value zero"
    >
      <Axes originX={originX} originY={originY} endX={216} topY={16} />

      <path
        d={`M 55 78 L ${originX} ${originY} L 175 78`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />

      <circle cx={originX} cy={originY} r="4" fill={ACCENT} />

      <text x="150" y="90" textAnchor="start" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"y = |x|"}
      </text>
      <text x={originX} y="170" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"minimum = 0"}
      </text>
    </svg>
  );
}

/** V-shaped graph of y = |x+2| − 1, with the shifted vertex highlighted. */
export function ShiftedModulusGraph() {
  const originX = 140;
  const originY = 110;
  const vertexX = 92;
  const vertexY = 134;

  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-auto"
      role="img"
      aria-label="V-shaped graph of y equals absolute value of x plus 2 minus 1, with dashed guides to the tick marks minus 2 on the x-axis and minus 1 on the y-axis and the vertex highlighted"
    >
      <Axes originX={originX} originY={originY} endX={232} topY={14} />

      <path
        d={`M 37 79 L ${vertexX} ${vertexY} L 212 14`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />

      <g stroke={ACCENT} strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={vertexX} y1={originY} x2={vertexX} y2={vertexY} />
        <line x1={vertexX} y1={vertexY} x2={originX} y2={vertexY} />
      </g>

      <circle cx={vertexX} cy={vertexY} r="4" fill={ACCENT} />

      <text x="80" y="126" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        −2
      </text>
      <text x="134" y="138" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        −1
      </text>

      <text x="24" y="158" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"vertex: (−2, −1)"}
      </text>
      <text x="30" y="26" textAnchor="start" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"y = |x+2| − 1"}
      </text>
    </svg>
  );
}

/** Inverted V of y = −|x+1| + 3: the highlighted vertex is the maximum. */
export function InvertedModulusGraph() {
  const originX = 120;
  const originY = 108;
  const vertexX = 96;
  const vertexY = 36;

  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-auto"
      role="img"
      aria-label="Inverted V graph of y equals negative absolute value of x plus 1 plus 3, with both branches descending without bound; dashed guides mark the tick minus 1 on the x-axis and 3 on the y-axis and the vertex is highlighted"
    >
      <Axes originX={originX} originY={originY} endX={232} topY={14} />

      <path
        d={`M 16 116 L ${vertexX} ${vertexY} L 216 156`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />

      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <polyline points={arrowHeadPoints(16, 116, -1, 1, 8)} />
        <polyline points={arrowHeadPoints(216, 156, 1, 1, 8)} />
      </g>

      <g stroke={ACCENT} strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={vertexX} y1={vertexY} x2={vertexX} y2={originY} />
        <line x1={vertexX} y1={vertexY} x2={originX} y2={vertexY} />
      </g>

      <circle cx={vertexX} cy={vertexY} r="4" fill={ACCENT} />

      <text x={vertexX} y="122" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        −1
      </text>
      <text x="114" y="40" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        3
      </text>

      <text x="22" y="60" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"vertex: (−1, 3)"}
      </text>
      <text x="146" y="30" textAnchor="start" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"y = −|x+1| + 3"}
      </text>
    </svg>
  );
}

/** V-shaped graph of y = 3 + |x|, with the raised vertex marked by its point and value. */
export function RaisedModulusGraph() {
  const originX = 115;
  const originY = 150;
  const vertexX = 115;
  const vertexY = 78;

  return (
    <svg
      viewBox="0 0 230 180"
      className="w-full h-auto"
      role="img"
      aria-label="V-shaped graph of y equals 3 plus absolute value of x, with the vertex at x equals 0 and value 3 highlighted as the minimum"
    >
      <Axes originX={originX} originY={originY} endX={216} topY={14} />

      <path
        d={`M 55 18 L ${vertexX} ${vertexY} L 175 18`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />

      <circle cx={vertexX} cy={vertexY} r="4" fill={ACCENT} />

      <text x="126" y="96" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"point: x = 0"}
      </text>
      <text x="126" y="112" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"value: 3"}
      </text>
      <text x="28" y="24" textAnchor="start" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"y = 3 + |x|"}
      </text>
    </svg>
  );
}

/** A sine wave between dashed accent guides at y = low and y = high, over `cycles` periods. */
export function SineBandGraph({
  low,
  high,
  cycles,
  title,
}: {
  low: number;
  high: number;
  cycles: number;
  title?: string;
}) {
  const originX = 36;
  const endX = 292;
  const plotWidth = endX - originX;
  const upperY = 44;
  const lowerY = 124;
  const bandHeight = lowerY - upperY;

  const lowerValue = Math.min(low, high);
  const upperValue = Math.max(low, high);
  const span = upperValue - lowerValue || 1;
  const midValue = (lowerValue + upperValue) / 2;
  const ampValue = span / 2;
  const waveCount = cycles > 0 && Number.isFinite(cycles) ? cycles : 1;
  const toY = (value: number) => upperY + ((upperValue - value) / span) * bandHeight;

  const wave = Array.from({ length: 240 }, (_, i) => {
    const t = i / 239;
    const px = originX + t * plotWidth;
    const py = toY(midValue + ampValue * Math.sin(2 * Math.PI * waveCount * t));
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(" ");

  const axisY = low <= 0 && high >= 0 ? toY(0) : 152;
  const peakT = 0.25 / waveCount;
  const troughT = 0.75 / waveCount;
  const peakX = originX + peakT * plotWidth;
  const troughX = originX + troughT * plotWidth;

  return (
    <svg
      viewBox="0 0 300 180"
      className="w-full h-auto"
      role="img"
      aria-label={`Sine wave over ${waveCount} periods oscillating between the dashed guide lines y equals ${low} and y equals ${high}, with peak and trough marked${title ? `; ${title}` : ""}`}
    >
      <Axes originX={originX} originY={axisY} endX={endX} topY={16} />

      <g stroke={ACCENT} strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.55" strokeLinecap="round">
        <line x1={originX} y1={upperY} x2={endX} y2={upperY} />
        <line x1={originX} y1={lowerY} x2={endX} y2={lowerY} />
      </g>

      <polyline points={wave} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.85" />

      {peakT <= 1 && <circle cx={peakX.toFixed(1)} cy={upperY} r="4" fill={ACCENT} />}
      {troughT <= 1 && <circle cx={troughX.toFixed(1)} cy={lowerY} r="4" fill={ACCENT} />}

      <text x={endX - 4} y={upperY - 6} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {String(upperValue)}
      </text>
      <text x={endX - 4} y={lowerY + 15} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {String(lowerValue)}
      </text>

      {title ? (
        <text x="166" y="16" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
          {title}
        </text>
      ) : null}
    </svg>
  );
}
