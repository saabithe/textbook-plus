/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section
 * "Rate of Change of Quantities — Part 2" (rectangle, balloon, sphere and
 * sliding-ladder problems). Purely presentational: no hooks, no client
 * directive, no external libraries. Strokes inherit light/dark theming via
 * `currentColor`, with the mathematics subject colour reserved for the
 * quantity that is changing (length, width, radius, diameter or base).
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

/** Wide rectangle with length x decreasing (left arrow) and width y increasing (up arrow). */
export function RectangleRateDiagram() {
  return (
    <svg
      viewBox="0 0 240 180"
      className="w-full h-auto"
      role="img"
      aria-label="Rectangle of length x and width y, with its length decreasing and its width increasing"
    >
      {/* rectangle outline */}
      <rect
        x="50"
        y="55"
        width="140"
        height="70"
        rx="1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeOpacity="0.85"
      />

      {/* side labels */}
      <text x="120" y="146" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        x
      </text>
      <text x="202" y="94" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        y
      </text>

      {/* decreasing length: arrow pointing left along the bottom edge */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1="170" y1="115" x2="120" y2="115" />
        <polyline points={arrowHeadPoints(120, 115, -1, 0, 8)} />
      </g>

      {/* increasing width: arrow pointing up along the right edge */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1="180" y1="115" x2="180" y2="65" />
        <polyline points={arrowHeadPoints(180, 65, 0, -1, 8)} />
      </g>
    </svg>
  );
}

/** Spherical balloon with a tied neck, radius r, and gas pumped in at rate dV/dt. */
export function BalloonInflationDiagram() {
  const cx = 110;
  const cy = 100;
  const radius = 70;
  const dirX = 0.766;
  const dirY = -0.643;
  const tipX = cx + radius * dirX;
  const tipY = cy + radius * dirY;

  return (
    <svg
      viewBox="0 0 220 240"
      className="w-full h-auto"
      role="img"
      aria-label="Spherical balloon of radius r being inflated as gas is pumped in at rate dV/dt"
    >
      {/* balloon body */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.85" />

      {/* tied neck and knot */}
      <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 101 166 L 106 185 L 114 185 L 119 166" />
        <line x1="104" y1="179" x2="116" y2="179" />
        <path d="M 110 185 L 110 203" strokeOpacity="0.5" />
      </g>

      {/* radius */}
      <line
        x1={cx}
        y1={cy}
        x2={tipX.toFixed(1)}
        y2={tipY.toFixed(1)}
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />
      <text
        x={((cx + tipX) / 2 + 3).toFixed(1)}
        y={((cy + tipY) / 2 - 4).toFixed(1)}
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill="currentColor"
      >
        r
      </text>

      {/* gas pumped inward toward the balloon */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1="16" y1="110" x2="52" y2="110" />
        <polyline points={arrowHeadPoints(52, 110, 1, 0, 8)} />
        <text x="34" y="98" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor" stroke="none">
          dV/dt
        </text>
      </g>
    </svg>
  );
}

/** Sphere with a subtle latitude arc, centre dot and a labelled radius. */
export function SphereRadiusDiagram({ radiusLabel }: { radiusLabel?: string }) {
  const cx = 100;
  const cy = 100;
  const radius = 68;
  const dirX = 0.766;
  const dirY = -0.643;
  const tipX = cx + radius * dirX;
  const tipY = cy + radius * dirY;
  const label = radiusLabel ?? "r";

  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto" role="img" aria-label={`Sphere with centre and radius ${label}`}>
      {/* sphere outline */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.85" />

      {/* subtle latitude arc for depth */}
      <path d="M 42 112 Q 100 134 158 112" fill="none" stroke="currentColor" strokeWidth="1.25" strokeOpacity="0.28" />

      {/* centre and radius */}
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />
      <line
        x1={cx}
        y1={cy}
        x2={tipX.toFixed(1)}
        y2={tipY.toFixed(1)}
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x={((cx + tipX) / 2 + 3).toFixed(1)}
        y={((cy + tipY) / 2 - 4).toFixed(1)}
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill="currentColor"
      >
        {label}
      </text>
    </svg>
  );
}

/** Sphere with a horizontal diameter d and a short dashed radius from the centre. */
export function SphereDiameterDiagram() {
  const cx = 100;
  const cy = 100;
  const radius = 68;

  return (
    <svg viewBox="0 0 200 200" className="w-full h-auto" role="img" aria-label="Sphere with centre, diameter d and a radius">
      {/* sphere outline */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.85" />

      {/* horizontal diameter */}
      <line
        x1={cx - radius}
        y1={cy}
        x2={cx + radius}
        y2={cy}
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x={cx} y="92" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        d
      </text>

      {/* centre, with a short dashed radius */}
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />
      <line
        x1={cx}
        y1={cy}
        x2={(cx + radius * 0.5).toFixed(1)}
        y2={(cy - radius * 0.866).toFixed(1)}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/** Hero figure for the sliding-ladder problem: 3–4–5 triangle, foot moving away at dx/dt. */
export function LadderDiagram() {
  return (
    <svg
      viewBox="0 0 260 220"
      className="w-full h-auto"
      role="img"
      aria-label="A 5 metre ladder leaning against a wall, base x equal to 4 metres on the ground and height y on the wall, with the foot sliding away at rate dx/dt"
    >
      {/* ground and wall */}
      <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <line x1="30" y1="180" x2="250" y2="180" />
        <line x1="60" y1="180" x2="60" y2="30" />
      </g>

      {/* right-angle mark at the corner */}
      <path d="M 60 169 L 71 169 L 71 180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />

      {/* ladder (hypotenuse) */}
      <line
        x1="200"
        y1="180"
        x2="60"
        y2="75"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* height on the wall */}
      <text x="48" y="130" textAnchor="end" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        y
      </text>

      {/* ladder length */}
      <text
        x="136"
        y="119.5"
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill="currentColor"
        transform="rotate(37 136 119.5)"
      >
        5 m
      </text>

      {/* dashed marker for the instantaneous base distance of 4 m */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" strokeOpacity="0.45">
        <line x1="60" y1="190" x2="200" y2="190" />
        <line x1="60" y1="184" x2="60" y2="196" />
        <line x1="200" y1="184" x2="200" y2="196" />
      </g>
      <text x="130" y="210" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT}>
        x = 4 m
      </text>

      {/* foot sliding away from the wall */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1="206" y1="170" x2="246" y2="170" />
        <polyline points={arrowHeadPoints(246, 170, 1, 0, 9)} />
        <text x="226" y="158" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor" stroke="none">
          dx/dt
        </text>
      </g>
    </svg>
  );
}
