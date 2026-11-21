/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on
 * increasing and decreasing functions. Purely presentational: no hooks, no
 * client directive, no external libraries. Strokes inherit light/dark theming
 * via `currentColor`, with the mathematics subject colour reserved for the
 * highlighted curve, point, ray or monotonicity marker.
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

/** Coordinate axes with y = e^x approaching the x-axis on the left and rising steeply on the right. */
export function ExponentialCurveDiagram() {
  const originX = 30;
  const originY = 140;
  const xMin = -3;
  const xMax = 1.8;
  const plotWidth = 168;
  const yScale = 18;

  const curve = Array.from({ length: 80 }, (_, i) => {
    const x = xMin + (i * (xMax - xMin)) / 79;
    const px = originX + ((x - xMin) / (xMax - xMin)) * plotWidth;
    const py = originY - Math.exp(x) * yScale;
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Coordinate axes with the curve y equals e to the x, near zero on the left and steep on the right, always above the x-axis"
    >
      {/* axes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="20" y1={originY} x2="208" y2={originY} />
        <polyline points={arrowHeadPoints(208, originY, 1, 0, 7)} />
        <line x1={originX} y1={originY} x2={originX} y2="16" />
        <polyline points={arrowHeadPoints(originX, 16, 0, -1, 7)} />
      </g>

      {/* the exponential curve */}
      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />

      {/* highlighted label and the above-axis note */}
      <text x="152" y="48" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        y = e^x
      </text>
      <text x="40" y="162" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        always above the x-axis
      </text>
      <text x="212" y="145" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x
      </text>
      <text x="20" y="24" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y
      </text>
    </svg>
  );
}

/** Coordinate axes with y = log x drawn only for x > 0, the y-axis acting as a dashed vertical asymptote. */
export function LogCurveDiagram() {
  const asymptoteX = 62;
  const axisY = 105;
  const xScale = 24;
  const yScale = 26;

  const curve = Array.from({ length: 80 }, (_, i) => {
    const x = 0.12 + (i * (6 - 0.12)) / 79;
    const px = asymptoteX + x * xScale;
    const py = axisY - Math.log(x) * yScale;
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 220 170"
      className="w-full h-auto"
      role="img"
      aria-label="Coordinate axes with the curve y equals log x drawn only for positive x, a dashed vertical asymptote at x equals 0, and an x-intercept at x equals 1"
    >
      {/* vertical asymptote below the x-axis */}
      <line
        x1={asymptoteX}
        y1={axisY}
        x2={asymptoteX}
        y2="164"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        strokeOpacity="0.45"
      />

      {/* axes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="20" y1={axisY} x2="212" y2={axisY} />
        <polyline points={arrowHeadPoints(212, axisY, 1, 0, 7)} />
        <line x1={asymptoteX} y1={axisY} x2={asymptoteX} y2="18" />
        <polyline points={arrowHeadPoints(asymptoteX, 18, 0, -1, 7)} />
      </g>

      {/* the log curve, starting to the right of the asymptote */}
      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />

      {/* x-intercept at x = 1 */}
      <circle cx="86" cy={axisY} r="3.5" fill={ACCENT} />
      <text x="86" y="121" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        1
      </text>

      <text x="68" y="152" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x = 0
      </text>
      <text x="150" y="52" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y = log x
      </text>
      <text x="108" y="32" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        domain x &gt; 0
      </text>
      <text x="216" y="120" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x
      </text>
    </svg>
  );
}

/** Unit circle with the four ASTC quadrants, their sign markers and the radian angle marks. */
export function AstcQuadrantDiagram() {
  const cx = 120;
  const cy = 120;
  const r = 78;
  const diagonal = r * Math.SQRT1_2;
  const radii = [
    { key: "I", x: cx + diagonal, y: cy - diagonal },
    { key: "II", x: cx - diagonal, y: cy - diagonal },
    { key: "III", x: cx - diagonal, y: cy + diagonal },
    { key: "IV", x: cx + diagonal, y: cy + diagonal },
  ];
  const quadrants = [
    { key: "I", numeralX: 188, numeralY: 52, signX: 188, signY: 70, sign: "all +" },
    { key: "II", numeralX: 52, numeralY: 52, signX: 52, signY: 70, sign: "sin +" },
    { key: "III", numeralX: 52, numeralY: 190, signX: 52, signY: 172, sign: "tan +" },
    { key: "IV", numeralX: 188, numeralY: 190, signX: 188, signY: 172, sign: "cos +" },
  ];

  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full h-auto"
      role="img"
      aria-label="Unit circle on coordinate axes showing quadrants one to four with ASTC sign markers: all positive in quadrant one, sine positive in quadrant two, tangent positive in quadrant three, cosine positive in quadrant four, and angle marks at 0, pi over 2, pi, 3 pi over 2 and 2 pi"
    >
      {/* axes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="20" y1={cy} x2="222" y2={cy} />
        <polyline points={arrowHeadPoints(222, cy, 1, 0, 7)} />
        <line x1={cx} y1="220" x2={cx} y2="20" />
        <polyline points={arrowHeadPoints(cx, 20, 0, -1, 7)} />
      </g>

      {/* circle and highlighted quadrant radii */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.8" />
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        {radii.map((radius) => (
          <line key={radius.key} x1={cx} y1={cy} x2={radius.x.toFixed(1)} y2={radius.y.toFixed(1)} />
        ))}
      </g>
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />

      {/* quadrant numerals and positive-sign markers */}
      {quadrants.map((quadrant) => (
        <g key={quadrant.key} textAnchor="middle" fontFamily={LABEL_FONT}>
          <text x={quadrant.numeralX} y={quadrant.numeralY} fontSize={13} fill="currentColor">
            {quadrant.key}
          </text>
          <text x={quadrant.signX} y={quadrant.signY} fontSize={12} fill="currentColor">
            {quadrant.sign}
          </text>
        </g>
      ))}

      {/* radian angle marks around the circle */}
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x="208" y="116">
          0
        </text>
        <text x="120" y="28" textAnchor="middle">
          π/2
        </text>
        <text x="30" y="116" textAnchor="end">
          π
        </text>
        <text x="120" y="222" textAnchor="middle">
          3π/2
        </text>
        <text x="208" y="138">
          2π
        </text>
      </g>
    </svg>
  );
}

/** Sine arch from 0 to π with its peak at π/2, increasing before it and decreasing after it. */
export function SineCurveDiagram() {
  const originX = 34;
  const baselineY = 130;
  const plotWidth = 220;
  const amplitude = 70;

  const curve = Array.from({ length: 100 }, (_, i) => {
    const t = (i * Math.PI) / 99;
    const px = originX + (t / Math.PI) * plotWidth;
    const py = baselineY - Math.sin(t) * amplitude;
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 280 170"
      className="w-full h-auto"
      role="img"
      aria-label="Sine curve from 0 to pi on coordinate axes, rising to a maximum at pi over 2 then falling, with increasing and decreasing arrows"
    >
      {/* axes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="20" y1={baselineY} x2="270" y2={baselineY} />
        <polyline points={arrowHeadPoints(270, baselineY, 1, 0, 7)} />
        <line x1={originX} y1={baselineY} x2={originX} y2="18" />
        <polyline points={arrowHeadPoints(originX, 18, 0, -1, 7)} />
      </g>

      {/* sine arch */}
      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />

      {/* dashed line and accent dot at the maximum */}
      <line x1="144" y1={baselineY} x2="144" y2="60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5" />
      <circle cx="144" cy="60" r="4" fill={ACCENT} />

      {/* increasing arrow before π/2 */}
      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1="90" y1="124" x2="90" y2="104" />
        <polyline points={arrowHeadPoints(90, 104, 0, -1, 8)} />
      </g>
      <text x="90" y="94" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        increasing
      </text>

      {/* decreasing arrow after π/2 */}
      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1="196" y1="104" x2="196" y2="124" />
        <polyline points={arrowHeadPoints(196, 124, 0, 1, 8)} />
      </g>
      <text x="196" y="94" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        decreasing
      </text>

      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x="28" y="149">
          0
        </text>
        <text x="144" y="149" textAnchor="middle" fill={ACCENT}>
          π/2
        </text>
        <text x="254" y="149" textAnchor="middle">
          π
        </text>
      </g>
      <text x="196" y="34" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y = sin x
      </text>
    </svg>
  );
}

/** Cosine curve from 0 to 2π with its minimum at π and the decreasing/increasing regions shaded. */
export function CosineCurveDiagram() {
  const originX = 34;
  const axisY = 100;
  const plotWidth = 240;
  const amplitude = 58;

  const curve = Array.from({ length: 120 }, (_, i) => {
    const t = (i * 2 * Math.PI) / 119;
    const px = originX + (t / (2 * Math.PI)) * plotWidth;
    const py = axisY - Math.cos(t) * amplitude;
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 300 180"
      className="w-full h-auto"
      role="img"
      aria-label="Cosine curve from 0 to 2 pi with a minimum at pi, a shaded decreasing region from 0 to pi and a shaded increasing region from pi to 2 pi"
    >
      {/* lightly shaded monotonicity regions */}
      <rect x="34" y="14" width="120" height="154" fill={ACCENT} fillOpacity="0.06" />
      <rect x="154" y="14" width="120" height="154" fill="currentColor" fillOpacity="0.05" />

      {/* axes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="20" y1={axisY} x2="292" y2={axisY} />
        <polyline points={arrowHeadPoints(292, axisY, 1, 0, 7)} />
        <line x1={originX} y1="168" x2={originX} y2="14" />
        <polyline points={arrowHeadPoints(originX, 14, 0, -1, 7)} />
      </g>

      {/* cosine curve */}
      <polyline points={curve} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />

      {/* dashed line and accent dot at the minimum */}
      <line x1="154" y1={axisY} x2="154" y2="158" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4" strokeOpacity="0.5" />
      <circle cx="154" cy="158" r="4" fill={ACCENT} />

      {/* downward arrow in the decreasing region */}
      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1="84" y1="118" x2="84" y2="138" />
        <polyline points={arrowHeadPoints(84, 138, 0, 1, 8)} />
      </g>
      <text x="84" y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        decreasing
      </text>

      {/* upward arrow in the increasing region */}
      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1="224" y1="138" x2="224" y2="118" />
        <polyline points={arrowHeadPoints(224, 118, 0, -1, 8)} />
      </g>
      <text x="224" y="154" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        increasing
      </text>

      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x="28" y="116">
          0
        </text>
        <text x="154" y="176" textAnchor="middle" fill={ACCENT}>
          π
        </text>
        <text x="274" y="116" textAnchor="middle">
          2π
        </text>
      </g>
      <text x="196" y="34" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y = cos x
      </text>
    </svg>
  );
}

/** Unit circle on axes with the π/4 and 5π/4 rays, their circle points and angle labels. */
export function UnitCircleTanDiagram() {
  const cx = 110;
  const cy = 110;
  const r = 72;
  const diagonal = r * Math.SQRT1_2;
  const first = { x: cx + diagonal, y: cy - diagonal };
  const third = { x: cx - diagonal, y: cy + diagonal };

  return (
    <svg
      viewBox="0 0 220 220"
      className="w-full h-auto"
      role="img"
      aria-label="Unit circle on coordinate axes with highlighted rays at pi over 4 in quadrant one and 5 pi over 4 in quadrant three, with points marked where each ray meets the circle"
    >
      {/* axes */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="22" y1={cy} x2="208" y2={cy} />
        <polyline points={arrowHeadPoints(208, cy, 1, 0, 7)} />
        <line x1={cx} y1="208" x2={cx} y2="12" />
        <polyline points={arrowHeadPoints(cx, 12, 0, -1, 7)} />
      </g>

      {/* unit circle */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />

      {/* highlighted rays and their intersection points */}
      <g stroke={ACCENT} strokeWidth="2.25" strokeLinecap="round">
        <line x1={cx} y1={cy} x2={first.x.toFixed(1)} y2={first.y.toFixed(1)} />
        <line x1={cx} y1={cy} x2={third.x.toFixed(1)} y2={third.y.toFixed(1)} />
      </g>
      <g fill={ACCENT}>
        <circle cx={first.x.toFixed(1)} cy={first.y.toFixed(1)} r="4" />
        <circle cx={third.x.toFixed(1)} cy={third.y.toFixed(1)} r="4" />
      </g>

      {/* angle labels */}
      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x="168" y="56">
          π/4
        </text>
        <text x="52" y="180" textAnchor="end">
          5π/4
        </text>
        <text x="182" y="34" textAnchor="middle">
          I
        </text>
        <text x="34" y="194" textAnchor="middle">
          III
        </text>
      </g>
    </svg>
  );
}
