/*
 * Schematic inline-SVG diagram for the Class 12 mathematics section
 * "Rate of Change of Quantities — Part 3" (sand cone / related rates).
 * Purely presentational: no hooks, no client directive, no external libraries.
 * Strokes inherit light/dark theming via `currentColor`, with the mathematics
 * subject colour reserved for the sand pouring in at rate dV/dt.
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

/** Cone of sand with height h, base radius r, and sand poured in at rate dV/dt. */
export function SandConeDiagram() {
  const apexX = 120;
  const apexY = 58;
  const baseY = 172;
  const rx = 70;
  const ry = 18;
  const leftX = apexX - rx;
  const rightX = apexX + rx;

  return (
    <svg
      viewBox="0 0 240 220"
      className="w-full h-auto"
      role="img"
      aria-label="Cone of sand with height h and base radius r, sand pouring in through a nozzle at rate dV/dt"
    >
      {/* cone sides */}
      <path
        d={`M ${leftX} ${baseY} L ${apexX} ${apexY} L ${rightX} ${baseY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.85"
      />

      {/* elliptical base: back half subtle, front half solid so the full rim reads as 3D */}
      <path
        d={`M ${leftX} ${baseY} A ${rx} ${ry} 0 0 1 ${rightX} ${baseY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.3"
      />
      <path
        d={`M ${leftX} ${baseY} A ${rx} ${ry} 0 0 0 ${rightX} ${baseY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* height h from apex to the centre of the base */}
      <line
        x1={apexX}
        y1={apexY}
        x2={apexX}
        y2={baseY}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeOpacity="0.5"
      />
      <text
        x={apexX - 9}
        y={(apexY + baseY) / 2 + 4}
        textAnchor="end"
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill="currentColor"
      >
        h
      </text>

      {/* base radius r and centre point */}
      <line x1={apexX} y1={baseY} x2={rightX} y2={baseY} stroke={ACCENT} strokeWidth="2" strokeLinecap="round" />
      <circle cx={apexX} cy={baseY} r="3.5" fill="currentColor" />
      <text
        x={(apexX + rightX) / 2}
        y={baseY - 8}
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill="currentColor"
      >
        r
      </text>

      {/* right-angle mark where the height meets the radius at the base centre */}
      <path
        d={`M ${apexX} ${baseY - 9} L ${apexX + 9} ${baseY - 9} L ${apexX + 9} ${baseY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeOpacity="0.8"
      />

      {/* nozzle above the apex */}
      <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1={apexX - 8} y1="10" x2={apexX - 8} y2="40" />
        <line x1={apexX + 8} y1="10" x2={apexX + 8} y2="40" />
        <path d={`M ${apexX - 8} 10 Q ${apexX} 6 ${apexX + 8} 10`} strokeOpacity="0.6" />
      </g>

      {/* sand pouring inward/downward into the cone */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        <line x1={apexX} y1="14" x2={apexX} y2="50" />
        <polyline points={arrowHeadPoints(apexX, 50, 0, 1, 8)} />
        <text x={apexX + 22} y="30" textAnchor="start" fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT} stroke="none">
          dV/dt
        </text>
      </g>
    </svg>
  );
}
