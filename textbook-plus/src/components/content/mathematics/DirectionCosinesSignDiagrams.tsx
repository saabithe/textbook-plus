/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on
 * Direction Cosines. Purely presentational: no hooks, no client directive,
 * no external libraries. Strokes inherit light/dark theming via `currentColor`,
 * with the mathematics subject colour reserved for the highlighted quadrant,
 * the flow arrows and the scaling/caption cues.
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

/** ASTC quadrants on Cartesian axes, with quadrant II highlighted (cosine negative). */
export function AstcQuadrantDiagram() {
  const originX = 110;
  const originY = 96;
  const leftX = 24;
  const rightX = 200;
  const topY = 16;
  const bottomY = 176;

  const quadrants = [
    { numeral: "I", letter: "A", x: 155, y: 46, accent: false },
    { numeral: "II", letter: "S", x: 65, y: 46, accent: true },
    { numeral: "III", letter: "T", x: 65, y: 134, accent: false },
    { numeral: "IV", letter: "C", x: 155, y: 134, accent: false },
  ];

  return (
    <svg
      viewBox="0 0 220 200"
      className="w-full h-auto"
      role="img"
      aria-label="ASTC quadrant diagram on Cartesian axes: A in quadrant one where all are positive, S in quadrant two where only sine is positive, T in quadrant three where only tangent is positive, C in quadrant four where only cosine is positive. Quadrant two is highlighted in accent because cosine is negative there, with the note cos 135 degrees less than zero."
    >
      {/* quadrant II highlight */}
      <rect x="26" y="18" width="82" height="76" rx="6" fill={ACCENT} fillOpacity="0.12" />

      {/* axes with arrowheads at the positive ends */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1={leftX} y1={originY} x2={rightX} y2={originY} />
        <polyline points={arrowHeadPoints(rightX, originY, 1, 0, 7)} />
        <line x1={originX} y1={topY} x2={originX} y2={bottomY} />
        <polyline points={arrowHeadPoints(originX, topY, 0, -1, 7)} />
      </g>
      <text x={rightX - 2} y={originY + 15} textAnchor="end" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        x
      </text>
      <text x={originX + 7} y={topY + 8} textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        y
      </text>

      {quadrants.map((q) => (
        <g key={q.numeral}>
          <text
            x={q.x}
            y={q.y}
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={11}
            fill={q.accent ? ACCENT : "currentColor"}
            fillOpacity={q.accent ? 1 : 0.65}
          >
            {q.numeral}
          </text>
          <text
            x={q.x}
            y={q.y + 22}
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={13}
            fontWeight={600}
            fill={q.accent ? ACCENT : "currentColor"}
          >
            {q.letter}
          </text>
        </g>
      ))}

      <text x="110" y="192" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"cos 135° < 0"}
      </text>
    </svg>
  );
}

/** Two Points → Direction Ratios → Direction Cosines, step by step. */
export function TwoStepFlowDiagram() {
  const boxes = [
    { x: 6, title: "Two Points", detail: ["(x₁,y₁,z₁)", "(x₂,y₂,z₂)"] },
    { x: 130, title: "Direction Ratios", detail: ["(x₂−x₁, y₂−y₁,", "z₂−z₁)"] },
    { x: 254, title: "Direction Cosines", detail: ["(a/d, b/d, c/d)"] },
  ];

  return (
    <svg
      viewBox="0 0 360 120"
      className="w-full h-auto"
      role="img"
      aria-label="Two-step flow: two points with coordinates x1, y1, z1 and x2, y2, z2 give the direction ratios x2 minus x1, y2 minus y1, z2 minus z1; dividing each by d gives the direction cosines a over d, b over d, c over d."
    >
      {boxes.map((box) => (
        <g key={box.title}>
          <rect x={box.x} y="20" width="100" height="80" rx="10" fill={ACCENT} fillOpacity="0.06" stroke={ACCENT} strokeWidth="1.5" />
          <text
            x={box.x + 50}
            y="44"
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={12}
            fontWeight={600}
            fill="currentColor"
          >
            {box.title}
          </text>
          {box.detail.map((line, i) => (
            <text
              key={line}
              x={box.x + 50}
              y={box.detail.length === 1 ? 74 : 64 + i * 18}
              textAnchor="middle"
              fontFamily={LABEL_FONT}
              fontSize={11}
              fill="currentColor"
              fillOpacity="0.8"
            >
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* step arrows, with small step numbers above */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1="110" y1="60" x2="126" y2="60" />
        <polyline points={arrowHeadPoints(126, 60, 1, 0, 6)} />
        <line x1="234" y1="60" x2="250" y2="60" />
        <polyline points={arrowHeadPoints(250, 60, 1, 0, 6)} />
      </g>
      <text x="118" y="50" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        1
      </text>
      <text x="242" y="50" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        2
      </text>
    </svg>
  );
}

/** Scaling a triple by a common non-zero constant leaves the direction unchanged. */
export function ProportionalTriplesDiagram() {
  return (
    <svg
      viewBox="0 0 300 90"
      className="w-full h-auto"
      role="img"
      aria-label="Multiplying the direction ratios 3, 2, 5 by the common non-zero constant k equal to 2 gives 6, 4, 10; both triples point in the same direction."
    >
      <text x="54" y="45" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"(3, 2, 5)"}
      </text>
      <text x="246" y="45" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"(6, 4, 10)"}
      </text>

      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1="94" y1="41" x2="204" y2="41" />
        <polyline points={arrowHeadPoints(204, 41, 1, 0, 7)} />
      </g>
      <text x="150" y="27" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"× k = 2"}
      </text>
      <text x="150" y="68" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        same direction
      </text>
    </svg>
  );
}
