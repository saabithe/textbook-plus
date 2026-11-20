/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics chapter
 * "Rate of Change of Quantities". Purely presentational: no hooks, no client
 * directive, no external libraries. All strokes use `currentColor` so the
 * figures inherit light/dark theming, with the mathematics subject colour
 * reserved for the quantity that is actually changing.
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

/** Decorative header-band motif: rising curve, tangent and Δx/Δy triangle. */
export function RateVisual() {
  const x0 = 28;
  const x1 = 200;
  const curveY = (x: number) => 96 - 0.0022 * (x - x0) ** 2;

  const curve = Array.from({ length: 60 }, (_, i) => {
    const x = x0 + (i * (x1 - x0)) / 59;
    return `${x.toFixed(1)},${curveY(x).toFixed(1)}`;
  }).join(" ");

  const touchX = 110;
  const touchY = curveY(touchX);
  const slope = -0.0044 * (touchX - x0);
  const tangentX0 = 78;
  const tangentX1 = 150;
  const tangentY0 = touchY + slope * (tangentX0 - touchX);
  const tangentY1 = touchY + slope * (tangentX1 - touchX);

  return (
    <svg viewBox="0 0 220 120" className="h-auto w-full" fill="none" aria-hidden="true">
      {/* axes */}
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.35">
        <line x1="20" y1="102" x2="206" y2="102" />
        <polyline points={arrowHeadPoints(206, 102, 1, 0, 7)} />
        <line x1="20" y1="102" x2="20" y2="10" />
        <polyline points={arrowHeadPoints(20, 10, 0, -1, 7)} />
      </g>

      {/* rising curve */}
      <polyline points={curve} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.55" />

      {/* tangent touching the curve */}
      <line
        x1={tangentX0}
        y1={tangentY0.toFixed(1)}
        x2={tangentX1}
        y2={tangentY1.toFixed(1)}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />

      {/* faint dashed right triangle: Δx (horizontal) and Δy (vertical) */}
      <g stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeOpacity="0.3">
        <line x1={touchX} y1={touchY.toFixed(1)} x2={tangentX1} y2={touchY.toFixed(1)} />
        <line x1={tangentX1} y1={touchY.toFixed(1)} x2={tangentX1} y2={tangentY1.toFixed(1)} />
      </g>
    </svg>
  );
}

/** Circle of radius r, with an optional outward dr/dt arrow at the radius tip. */
export function CircleRadiusDiagram({ showArrow }: { showArrow?: boolean }) {
  const cx = 100;
  const cy = 100;
  const radius = 62;
  const dirX = 0.766;
  const dirY = -0.643;
  const tipX = cx + radius * dirX;
  const tipY = cy + radius * dirY;
  const midX = (cx + tipX) / 2;
  const midY = (cy + tipY) / 2;

  const arrowTipX = tipX + 24 * dirX;
  const arrowTipY = tipY + 24 * dirY;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-auto"
      role="img"
      aria-label={`Circle with centre and radius r${showArrow ? ", expanding at rate dr/dt" : ""}`}
    >
      {/* circle outline */}
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="currentColor" strokeWidth="1.75" strokeOpacity="0.8" />
      <circle cx={cx} cy={cy} r="3.5" fill="currentColor" />

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
      <text x={(midX + 3).toFixed(1)} y={(midY - 4).toFixed(1)} fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        r
      </text>

      {/* optional outward growth arrow */}
      {showArrow ? (
        <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
          <line x1={tipX.toFixed(1)} y1={tipY.toFixed(1)} x2={arrowTipX.toFixed(1)} y2={arrowTipY.toFixed(1)} />
          <polyline points={arrowHeadPoints(arrowTipX, arrowTipY, dirX, dirY, 9)} />
          <text
            x={(arrowTipX + 4).toFixed(1)}
            y={(arrowTipY - 4).toFixed(1)}
            fontFamily={LABEL_FONT}
            fontSize={13}
            fill="currentColor"
            stroke="none"
          >
            dr/dt
          </text>
        </g>
      ) : null}
    </svg>
  );
}

/** Stone dropped in water: three wave fronts, radius r and outward dr/dt arrows. */
export function CircularWaveDiagram() {
  const cx = 110;
  const cy = 110;
  const outer = 82;

  const radiusDirX = Math.cos(-Math.PI / 6);
  const radiusDirY = Math.sin(-Math.PI / 6);
  const radiusTipX = cx + outer * radiusDirX;
  const radiusTipY = cy + outer * radiusDirY;

  const arrows = [-55, 25].map((degrees) => {
    const angle = (degrees * Math.PI) / 180;
    const dx = Math.cos(angle);
    const dy = Math.sin(angle);
    const startX = cx + outer * dx;
    const startY = cy + outer * dy;
    const tipX = startX + 16 * dx;
    const tipY = startY + 16 * dy;
    return { startX, startY, tipX, tipY, dx, dy };
  });

  return (
    <svg
      viewBox="0 0 220 220"
      className="w-full h-auto"
      role="img"
      aria-label="Concentric circular wave fronts expanding outward at rate dr/dt from a stone, with radius r"
    >
      {/* concentric wave fronts */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx={cx} cy={cy} r="28" strokeOpacity="0.8" />
        <circle cx={cx} cy={cy} r="55" strokeOpacity="0.6" />
        <circle cx={cx} cy={cy} r={outer} strokeOpacity="0.45" />
      </g>

      {/* the stone */}
      <circle cx={cx} cy={cy} r="4" fill="currentColor" />

      {/* radius to the outer wave front */}
      <line
        x1={cx}
        y1={cy}
        x2={radiusTipX.toFixed(1)}
        y2={radiusTipY.toFixed(1)}
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x={((cx + radiusTipX) / 2 - 3).toFixed(1)}
        y={((cy + radiusTipY) / 2 - 5).toFixed(1)}
        fontFamily={LABEL_FONT}
        fontSize={13}
        fill="currentColor"
      >
        r
      </text>

      {/* outward growth arrows */}
      <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
        {arrows.map((arrow, i) => (
          <g key={i}>
            <line
              x1={arrow.startX.toFixed(1)}
              y1={arrow.startY.toFixed(1)}
              x2={arrow.tipX.toFixed(1)}
              y2={arrow.tipY.toFixed(1)}
            />
            <polyline points={arrowHeadPoints(arrow.tipX, arrow.tipY, arrow.dx, arrow.dy, 8)} />
            <text
              x={(arrow.tipX + (arrow.dx >= 0 ? 4 : -4)).toFixed(1)}
              y={(arrow.tipY + (arrow.dy >= 0 ? 15 : -6)).toFixed(1)}
              textAnchor={arrow.dx >= 0 ? "start" : "end"}
              fontFamily={LABEL_FONT}
              fontSize={13}
              fill="currentColor"
              stroke="none"
            >
              dr/dt
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Isometric wireframe cube with the front-bottom edge labelled x, optional dx/dt arrow. */
export function CubeEdgeDiagram({ showArrow }: { showArrow?: boolean }) {
  const frontBottomLeft = { x: 60, y: 150 };
  const frontBottomRight = { x: 140, y: 150 };
  const frontTopRight = { x: 140, y: 70 };

  const backBottomLeft = { x: 100, y: 120 };
  const backBottomRight = { x: 180, y: 120 };
  const backTopLeft = { x: 100, y: 40 };
  const backTopRight = { x: 180, y: 40 };

  const arrowTipX = frontBottomRight.x + 45;
  const arrowTipY = frontBottomRight.y;

  return (
    <svg
      viewBox="0 0 220 200"
      className="w-full h-auto"
      role="img"
      aria-label={`Isometric cube with bottom edge x${showArrow ? ", growing at rate dx/dt" : ""}`}
    >
      {/* wireframe: front square, back square, three connecting edges */}
      <g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.85">
        <rect x="60" y="70" width="80" height="80" rx="1" />
        <rect x={backTopLeft.x} y={backTopLeft.y} width="80" height="80" rx="1" />
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={backBottomLeft.x} y2={backBottomLeft.y} />
        <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={backBottomRight.x} y2={backBottomRight.y} />
        <line x1={frontTopRight.x} y1={frontTopRight.y} x2={backTopRight.x} y2={backTopRight.y} />
      </g>

      {/* the labelled, changing edge */}
      <line
        x1={frontBottomLeft.x}
        y1={frontBottomLeft.y}
        x2={frontBottomRight.x}
        y2={frontBottomRight.y}
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <text x="100" y="170" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={13} fill="currentColor">
        x
      </text>

      {/* optional outward arrow along the edge */}
      {showArrow ? (
        <g stroke={ACCENT} strokeWidth="2" strokeLinecap="round" fill="none">
          <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={arrowTipX} y2={arrowTipY} />
          <polyline points={arrowHeadPoints(arrowTipX, arrowTipY, 1, 0, 9)} />
          <text
            x={(frontBottomRight.x + arrowTipX) / 2}
            y={frontBottomRight.y - 8}
            textAnchor="middle"
            fontFamily={LABEL_FONT}
            fontSize={13}
            fill="currentColor"
            stroke="none"
          >
            dx/dt
          </text>
        </g>
      ) : null}
    </svg>
  );
}
