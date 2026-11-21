/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on
 * increasing/decreasing functions and the wavy-curve method. Purely
 * presentational: no hooks, no client directive, no external libraries.
 * Strokes inherit light/dark theming via `currentColor`; the mathematics
 * subject colour marks the positive sign, ray or quantity under discussion.
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

/** Tiny axes with a single straight line of positive slope and its derivative label. */
export function RisingLineDiagram() {
  return (
    <svg
      viewBox="0 0 180 130"
      className="w-full h-auto"
      role="img"
      aria-label="Coordinate axes with a straight line of positive slope rising from left to right, labelled f prime of x equals 7 which is greater than zero"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4">
        <line x1="20" y1="104" x2="166" y2="104" />
        <polyline points={arrowHeadPoints(166, 104, 1, 0, 7)} />
        <line x1="20" y1="104" x2="20" y2="14" />
        <polyline points={arrowHeadPoints(20, 14, 0, -1, 7)} />
      </g>

      <line x1="42" y1="84" x2="146" y2="34" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />

      <text x="94" y="124" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        {"f'(x) = 7 > 0"}
      </text>
    </svg>
  );
}

/** Sign chart: ticks for the critical points, with + / − glyphs in each region. */
export function SignNumberLine({
  points,
  signs,
  note,
}: {
  points: string[];
  signs: string[];
  note?: string;
}) {
  const width = Math.max(240, 90 * signs.length);
  const height = 90;
  const margin = 30;
  const lineY = 46;
  const regionWidth = (width - 2 * margin) / Math.max(1, signs.length);

  const pointX = (index: number) => margin + (index + 1) * regionWidth;
  const regionX = (index: number) => margin + (index + 0.5) * regionWidth;

  const pointsText = points.length ? `critical points ${points.join(", ")}` : "no marked critical points";
  const ariaLabel = `Sign number line with ${pointsText}; interval signs in order ${signs.join(", ")}${note ? `. ${note}` : ""}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label={ariaLabel}>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1={margin} y1={lineY} x2={width - margin} y2={lineY} />
        <polyline points={arrowHeadPoints(margin, lineY, -1, 0, 7)} />
        <polyline points={arrowHeadPoints(width - margin, lineY, 1, 0, 7)} />
      </g>

      {points.map((point, index) => (
        <g key={`${point}-${index}`}>
          <line
            x1={pointX(index)}
            y1={lineY - 7}
            x2={pointX(index)}
            y2={lineY + 7}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <text
            x={pointX(index)}
            y={lineY + 22}
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={13}
            fill="currentColor"
          >
            {point}
          </text>
        </g>
      ))}

      {signs.map((sign, index) => (
        <text
          key={`${sign}-${index}`}
          x={regionX(index)}
          y={lineY - 14}
          textAnchor="middle"
          fontFamily={LABEL_FONT}
          fontSize={13}
          fill={sign.includes("+") ? ACCENT : "currentColor"}
        >
          {sign}
        </text>
      ))}

      {note ? (
        <text
          x={width / 2}
          y={lineY + 38}
          textAnchor="middle"
          fontFamily={LABEL_FONT}
          fontSize={13}
          fill="currentColor"
          fillOpacity={0.65}
        >
          {note}
        </text>
      ) : null}
    </svg>
  );
}

/** Single inequality: open or closed endpoint with a thick accent ray. */
export function InequalityNumberLine({
  value,
  direction,
  closed,
  label,
}: {
  value: string;
  direction: "left" | "right";
  closed?: boolean;
  label?: string;
}) {
  const centreX = 130;
  const lineY = 44;
  const rayStart = centreX + (direction === "right" ? 7 : -7);
  const rayEnd = direction === "right" ? 240 : 20;

  return (
    <svg
      viewBox="0 0 260 90"
      className="w-full h-auto"
      role="img"
      aria-label={`Number line with ${closed ? "an included (closed)" : "an excluded (open)"} endpoint at ${value} and a ray extending to the ${direction}`}
    >
      <line
        x1="20"
        y1={lineY}
        x2="240"
        y2={lineY}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.35"
      />

      <g stroke={ACCENT} strokeWidth="3" strokeLinecap="round" fill="none">
        <line x1={rayStart} y1={lineY} x2={rayEnd} y2={lineY} />
        <polyline points={arrowHeadPoints(rayEnd, lineY, direction === "right" ? 1 : -1, 0, 10)} />
      </g>

      <circle cx={centreX} cy={lineY} r="6" fill={closed ? ACCENT : "none"} stroke={ACCENT} strokeWidth="2" />

      <text x={centreX} y={lineY - 14} textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {value}
      </text>
      {label ? (
        <text
          x={centreX}
          y={lineY + 28}
          textAnchor="middle"
          fontFamily={LABEL_FONT}
          fontSize={13}
          fill="currentColor"
          fillOpacity={0.75}
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}

/** Five-step wavy-curve process strip with numbered badges and connectors. */
export function WavyCurveProcess() {
  const steps = ["Factorise", "Critical points", "Arrange on line", "Determine signs", "Select intervals"];
  const boxWidth = 108;
  const gap = 14;
  const totalWidth = steps.length * boxWidth + (steps.length - 1) * gap;
  const startX = (620 - totalWidth) / 2;
  const boxY = 20;
  const boxHeight = 62;
  const midY = boxY + boxHeight / 2;

  return (
    <svg
      viewBox="0 0 620 110"
      className="w-full h-auto"
      role="img"
      aria-label={`Wavy curve method in five steps: ${steps.map((step, index) => `${index + 1} ${step}`).join(", ")}`}
    >
      {steps.map((step, index) => {
        const x = startX + index * (boxWidth + gap);
        const centreX = x + boxWidth / 2;
        return (
          <g key={step}>
            <rect
              x={x}
              y={boxY}
              width={boxWidth}
              height={boxHeight}
              rx="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeOpacity="0.5"
            />
            <circle cx={centreX} cy={boxY + 19} r="10" fill="none" stroke={ACCENT} strokeWidth="1.5" />
            <text
              x={centreX}
              y={boxY + 23}
              textAnchor="middle"
              fontFamily={LABEL_FONT}
              fontSize={12}
              fill={ACCENT}
            >
              {index + 1}
            </text>
            <text x={centreX} y={boxY + 50} textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
              {step}
            </text>
          </g>
        );
      })}

      {steps.slice(0, -1).map((_, index) => {
        const fromX = startX + index * (boxWidth + gap) + boxWidth + 2;
        const toX = startX + (index + 1) * (boxWidth + gap) - 2;
        return (
          <g
            key={`connector-${index}`}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            strokeOpacity="0.6"
          >
            <line x1={fromX} y1={midY} x2={toX} y2={midY} />
            <polyline points={arrowHeadPoints(toX, midY, 1, 0, 6)} />
          </g>
        );
      })}
    </svg>
  );
}

/** Interval 0 to π/2: cos θ falls from 1 to 0, shown by a descending accent line. */
export function CosDecreasingStrip() {
  const leftX = 52;
  const rightX = 208;
  const leftY = 34;
  const rightY = 58;
  const axisY = 70;

  return (
    <svg
      viewBox="0 0 260 90"
      className="w-full h-auto"
      role="img"
      aria-label="Interval from theta equals 0 to theta equals pi by 2, where cosine of theta decreases from 1 to 0"
    >
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeOpacity="0.4">
        <line x1={leftX - 8} y1={axisY} x2={rightX + 8} y2={axisY} />
        <line x1={leftX} y1={axisY - 5} x2={leftX} y2={axisY + 5} />
        <line x1={rightX} y1={axisY - 5} x2={rightX} y2={axisY + 5} />
      </g>

      <line x1={leftX} y1={leftY} x2={rightX} y2={rightY} stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx={leftX} cy={leftY} r="3.5" fill="currentColor" />
      <circle cx={rightX} cy={rightY} r="3.5" fill="currentColor" />

      <g stroke={ACCENT} strokeWidth="1.75" strokeLinecap="round" fill="none">
        <line x1="130" y1="30" x2="130" y2="46" />
        <polyline points={arrowHeadPoints(130, 46, 0, 1, 7)} />
      </g>

      <text x={leftX} y={leftY - 10} textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"cos = 1"}
      </text>
      <text x={rightX} y={rightY - 10} textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        {"cos = 0"}
      </text>
      <text x={leftX} y={axisY + 15} textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"0"}
      </text>
      <text x={rightX} y={axisY + 15} textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        {"π/2"}
      </text>
    </svg>
  );
}
