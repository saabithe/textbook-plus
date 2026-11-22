/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on
 * Maxima and Minima. Purely presentational: no hooks, no client directive, no
 * external libraries. Strokes inherit light/dark theming via `currentColor`,
 * with the mathematics subject colour reserved for interval endpoints,
 * extremal points, tangents and guide lines.
 */

const LABEL_FONT = "var(--font-content), sans-serif";
const ACCENT = "var(--subject-mathematics)";
const BACKGROUND = "var(--background)";

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

/** Open interval (0, 1) with no attained extrema, set against closed [0, 1] with min and max at its endpoints. */
export function OpenClosedIntervalsDiagram() {
  const leftX = 120;
  const rightX = 220;

  return (
    <svg
      viewBox="0 0 320 190"
      className="w-full h-auto"
      role="img"
      aria-label="Two number lines compared: the open interval (0, 1) has hollow endpoint circles and its increasing segment attains no extrema; the closed interval [0, 1] has filled endpoint circles with minimum 0 at the left and maximum 1 at the right"
    >
      {/* open interval (0, 1) */}
      <text x="20" y="40" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"(0, 1)"}
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.45">
        <line x1="70" y1="30" x2="285" y2="30" />
        <polyline points={arrowHeadPoints(285, 30, 1, 0, 7)} />
      </g>
      <g stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6">
        <line x1={leftX} y1="25" x2={leftX} y2="35" />
        <line x1={rightX} y1="25" x2={rightX} y2="35" />
      </g>
      <circle cx={leftX} cy="30" r="5" fill={BACKGROUND} stroke={ACCENT} strokeWidth="2" />
      <circle cx={rightX} cy="30" r="5" fill={BACKGROUND} stroke={ACCENT} strokeWidth="2" />
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x={leftX} y="50">
          0
        </text>
        <text x={rightX} y="50">
          1
        </text>
      </g>
      <line x1={leftX} y1="76" x2={rightX} y2="52" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      <text x="170" y="92" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        no extrema attained
      </text>

      <line x1="16" y1="100" x2="304" y2="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" />

      {/* closed interval [0, 1] */}
      <text x="20" y="130" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"[0, 1]"}
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.45">
        <line x1="70" y1="120" x2="285" y2="120" />
        <polyline points={arrowHeadPoints(285, 120, 1, 0, 7)} />
      </g>
      <g stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.6">
        <line x1={leftX} y1="115" x2={leftX} y2="125" />
        <line x1={rightX} y1="115" x2={rightX} y2="125" />
      </g>
      <circle cx={leftX} cy="120" r="5" fill={ACCENT} />
      <circle cx={rightX} cy="120" r="5" fill={ACCENT} />
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x={leftX} y="140">
          0
        </text>
        <text x={rightX} y="140">
          1
        </text>
      </g>
      <line x1={leftX} y1="166" x2={rightX} y2="142" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={leftX} cy="166" r="3.5" fill={ACCENT} />
      <circle cx={rightX} cy="142" r="3.5" fill={ACCENT} />
      <text x={leftX - 4} y="182" textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"min = 0"}
      </text>
      <text x={rightX + 4} y="138" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"max = 1"}
      </text>
    </svg>
  );
}

/** The line y = x + 1 restricted to the open interval (-1, 1): open ends, no turning point, no extrema. */
export function OpenIntervalLineGraph() {
  const xLeft = 80;
  const xRight = 180;
  const yRight = 50;

  return (
    <svg
      viewBox="0 0 240 170"
      className="w-full h-auto"
      role="img"
      aria-label="Coordinate axes with the straight line y equals x plus 1 drawn only between x equals minus 1 and x equals 1, with hollow endpoint circles at minus 1 zero and 1 two, and the note no turning point no extrema"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="24" y1="130" x2="228" y2="130" />
        <polyline points={arrowHeadPoints(228, 130, 1, 0, 7)} />
        <line x1="130" y1="130" x2="130" y2="16" />
        <polyline points={arrowHeadPoints(130, 16, 0, -1, 7)} />
      </g>

      <line x1={xLeft} y1="130" x2={xRight} y2={yRight} stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />

      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5">
        <line x1={xRight} y1="130" x2={xRight} y2={yRight} />
        <line x1="130" y1={yRight} x2={xRight} y2={yRight} />
      </g>

      <circle cx={xLeft} cy="130" r="5" fill={BACKGROUND} stroke={ACCENT} strokeWidth="2" />
      <circle cx={xRight} cy={yRight} r="5" fill={BACKGROUND} stroke={ACCENT} strokeWidth="2" />

      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x="232" y="145" textAnchor="end">
          x
        </text>
        <text x="122" y="14">
          y
        </text>
        <text x={xLeft} y="148" textAnchor="middle">
          {"−1"}
        </text>
        <text x={xRight} y="148" textAnchor="middle">
          1
        </text>
        <text x="24" y="24">
          {"y = x + 1"}
        </text>
      </g>
      <text x="130" y="164" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT} fillOpacity="0.85">
        {"no turning point · no extrema"}
      </text>
    </svg>
  );
}

/** Increasing and decreasing functions on a closed interval [a, b], with the extreme values at the endpoints. */
export function MonotonicEndpointGraphs() {
  return (
    <svg
      viewBox="0 0 340 180"
      className="w-full h-auto"
      role="img"
      aria-label="Two side-by-side panels on a closed interval a to b: the left panel increases so the minimum is at a and the maximum at b; the right panel decreases so the maximum is at a and the minimum at b, with filled endpoint dots"
    >
      <line x1="170" y1="12" x2="170" y2="168" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" />

      {/* increasing on [a, b] */}
      <text x="88" y="22" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        increasing
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="24" y1="140" x2="152" y2="140" />
        <polyline points={arrowHeadPoints(152, 140, 1, 0, 7)} />
      </g>
      <line x1="38" y1="118" x2="140" y2="52" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.5">
        <line x1="38" y1="140" x2="38" y2="118" />
        <line x1="140" y1="140" x2="140" y2="52" />
      </g>
      <circle cx="38" cy="118" r="4" fill={ACCENT} />
      <circle cx="140" cy="52" r="4" fill={ACCENT} />
      <g fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        <text x="44" y="124">
          {"minimum at a"}
        </text>
        <text x="134" y="44" textAnchor="end">
          {"maximum at b"}
        </text>
      </g>
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x="38" y="156">
          a
        </text>
        <text x="140" y="156">
          b
        </text>
      </g>

      {/* decreasing on [a, b] */}
      <text x="252" y="22" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        decreasing
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="188" y1="140" x2="316" y2="140" />
        <polyline points={arrowHeadPoints(316, 140, 1, 0, 7)} />
      </g>
      <line x1="188" y1="52" x2="290" y2="118" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.5">
        <line x1="188" y1="140" x2="188" y2="52" />
        <line x1="290" y1="140" x2="290" y2="118" />
      </g>
      <circle cx="188" cy="52" r="4" fill={ACCENT} />
      <circle cx="290" cy="118" r="4" fill={ACCENT} />
      <g fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        <text x="194" y="44">
          {"maximum at a"}
        </text>
        <text x="284" y="134" textAnchor="end">
          {"minimum at b"}
        </text>
      </g>
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x="188" y="156">
          a
        </text>
        <text x="290" y="156">
          b
        </text>
      </g>
    </svg>
  );
}

/** A continuous wavy curve on the closed interval [a, b], attaining a maximum and a minimum inside it. */
export function ExtremeValueTheoremGraph() {
  const curve =
    "M 80 110 C 95 78 108 55 120 55 C 134 55 152 130 175 130 C 194 130 202 75 215 75 C 230 75 240 95 250 95";

  return (
    <svg
      viewBox="0 0 300 190"
      className="w-full h-auto"
      role="img"
      aria-label="Coordinate axes with a continuous wavy curve bracketed by dashed vertical lines at a and b, its highest point marked maximum and its lowest point marked minimum, titled continuous on a b"
    >
      <text x="165" y="16" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"continuous on [a,b]"}
      </text>

      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="24" y1="158" x2="286" y2="158" />
        <polyline points={arrowHeadPoints(286, 158, 1, 0, 7)} />
        <line x1="40" y1="158" x2="40" y2="26" />
        <polyline points={arrowHeadPoints(40, 26, 0, -1, 7)} />
      </g>

      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5">
        <line x1="80" y1="168" x2="80" y2="38" />
        <line x1="250" y1="168" x2="250" y2="38" />
      </g>

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <circle cx="120" cy="55" r="4" fill={ACCENT} />
      <circle cx="175" cy="130" r="4" fill={ACCENT} />
      <g fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT} textAnchor="middle">
        <text x="120" y="43">
          maximum
        </text>
        <text x="175" y="147">
          minimum
        </text>
      </g>
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x="80" y="174">
          a
        </text>
        <text x="250" y="174">
          b
        </text>
        <text x="292" y="173">
          x
        </text>
      </g>
    </svg>
  );
}

/** Smooth curve with local maxima at c1 and c2 and a local minimum at c3, each projected onto the x-axis. */
export function LocalExtremaGraph() {
  const curve =
    "M 45 110 C 60 80 72 55 85 55 C 100 55 140 125 160 125 C 182 125 225 45 245 45 C 262 45 280 70 295 80";

  return (
    <svg
      viewBox="0 0 320 190"
      className="w-full h-auto"
      role="img"
      aria-label="Smooth curve with two local maxima at c1 and c2 and one local minimum at c3 in that order, all three marked with dots and dashed vertical lines to the x-axis and labelled f of c1, f of c2 and f of c3"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="24" y1="150" x2="306" y2="150" />
        <polyline points={arrowHeadPoints(306, 150, 1, 0, 7)} />
        <line x1="36" y1="150" x2="36" y2="20" />
        <polyline points={arrowHeadPoints(36, 20, 0, -1, 7)} />
      </g>

      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5">
        <line x1="85" y1="55" x2="85" y2="150" />
        <line x1="160" y1="125" x2="160" y2="150" />
        <line x1="245" y1="45" x2="245" y2="150" />
      </g>

      <path d={curve} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <g fill={ACCENT}>
        <circle cx="85" cy="55" r="4" />
        <circle cx="160" cy="125" r="4" />
        <circle cx="245" cy="45" r="4" />
      </g>

      <g fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        <text x="79" y="43" textAnchor="end">
          {"f(c₁)"}
        </text>
        <text x="251" y="33" textAnchor="start">
          {"f(c₂)"}
        </text>
        <text x="166" y="140" textAnchor="start">
          {"f(c₃)"}
        </text>
      </g>
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x="85" y="166">
          {"c₁"}
        </text>
        <text x="160" y="166">
          {"c₃"}
        </text>
        <text x="245" y="166">
          {"c₂"}
        </text>
        <text x="312" y="165">
          x
        </text>
      </g>
    </svg>
  );
}

/** A smooth minimum with a horizontal tangent beside a sharp minimum with no tangent, both critical points. */
export function SmoothSharpMinima() {
  const smooth = "M 45 55 C 45 100 65 118 88 118 C 111 118 132 100 132 55";

  return (
    <svg
      viewBox="0 0 340 180"
      className="w-full h-auto"
      role="img"
      aria-label="Two side-by-side panels: a smooth U-shaped minimum with a short horizontal tangent at the bottom where f prime of c equals zero, and a sharp V-shaped minimum with no tangent where f prime of c does not exist; both vertices are critical points"
    >
      <line x1="170" y1="12" x2="170" y2="168" stroke="currentColor" strokeWidth="1" strokeOpacity="0.18" />

      {/* smooth minimum: tangent exists */}
      <text x="88" y="26" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(c) = 0"}
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="24" y1="145" x2="152" y2="145" />
        <polyline points={arrowHeadPoints(152, 145, 1, 0, 7)} />
      </g>
      <path d={smooth} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
      <line x1="68" y1="118" x2="108" y2="118" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      <line x1="88" y1="145" x2="88" y2="118" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.5" />
      <circle cx="88" cy="118" r="4" fill={ACCENT} />
      <text x="88" y="160" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        c
      </text>

      {/* sharp minimum: no tangent */}
      <text x="252" y="26" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"f'(c) does not exist"}
      </text>
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="188" y1="145" x2="316" y2="145" />
        <polyline points={arrowHeadPoints(316, 145, 1, 0, 7)} />
      </g>
      <path
        d="M 200 55 L 252 118 L 304 55"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
      <line x1="252" y1="145" x2="252" y2="118" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.5" />
      <circle cx="252" cy="118" r="4" fill={ACCENT} />
      <text x="252" y="160" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        c
      </text>
    </svg>
  );
}
