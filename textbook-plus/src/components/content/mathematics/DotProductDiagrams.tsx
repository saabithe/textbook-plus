/*
 * Two schematics for the scalar product: the angle-and-projection figure that
 * carries the definition of a·b, and the triangle whose vertex angle is found
 * from a dot product. Purely presentational: no hooks, no client directive, no
 * external libraries. Ink inherits light/dark theming via currentColor.
 */

const LABEL_FONT = "var(--font-content), sans-serif";
const COLOR_A = "var(--subject-mathematics)";
const COLOR_B = "var(--ok)";

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

/** The angle between a and b, with the projection of a dropped onto b. */
export function DotProductGeometryDiagram() {
  const o = { x: 40, y: 170 };
  const aTip = { x: 152, y: 54 };
  const bTip = { x: 306, y: 170 };
  const foot = { x: aTip.x, y: o.y };

  const aLen = Math.hypot(aTip.x - o.x, aTip.y - o.y) || 1;
  const aux = (aTip.x - o.x) / aLen;
  const auy = (aTip.y - o.y) / aLen;
  const aEnd = { x: aTip.x - aux * 7, y: aTip.y - auy * 7 };

  const arcR = 44;
  const arcStart = { x: o.x + arcR, y: o.y };
  const arcEnd = { x: o.x + arcR * aux, y: o.y + arcR * auy };

  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 340 210"
        className="w-full h-auto"
        role="img"
        aria-label="Two vectors a and b drawn from a common point O with the angle theta between them. A dashed perpendicular drops from the tip of a onto the line of b, cutting off the projection of a on b, marked in green along the line of b."
      >
        {/* the projection, laid along b before b is drawn over it */}
        <line
          x1={o.x}
          y1={o.y}
          x2={foot.x}
          y2={foot.y}
          stroke={COLOR_B}
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.4"
        />
        {/* end ticks bracketing the projection */}
        <g stroke={COLOR_B} strokeWidth="1.5" strokeOpacity="0.55" strokeLinecap="round">
          <line x1={o.x} y1={o.y + 4} x2={o.x} y2={o.y + 11} />
          <line x1={foot.x} y1={foot.y + 4} x2={foot.x} y2={foot.y + 11} />
        </g>

        {/* b along the horizontal, then a */}
        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1={o.x} y1={o.y} x2={bTip.x - 7} y2={bTip.y} stroke={COLOR_B} />
          <polyline points={arrowHeadPoints(bTip.x, bTip.y, 1, 0, 10)} stroke={COLOR_B} />
          <line x1={o.x} y1={o.y} x2={aEnd.x} y2={aEnd.y} stroke={COLOR_A} />
          <polyline points={arrowHeadPoints(aTip.x, aTip.y, aux, auy, 10)} stroke={COLOR_A} />
        </g>

        {/* perpendicular from the tip of a to the line of b, with a right angle mark */}
        <line
          x1={aTip.x}
          y1={aTip.y}
          x2={foot.x}
          y2={foot.y}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeDasharray="5 4"
          strokeOpacity="0.5"
        />
        <polyline
          points={`${foot.x - 8},${foot.y} ${foot.x - 8},${foot.y - 8} ${foot.x},${foot.y - 8}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.45"
        />

        {/* angle arc at O */}
        <path
          d={`M ${arcStart.x} ${arcStart.y} A ${arcR} ${arcR} 0 0 0 ${arcEnd.x.toFixed(1)} ${arcEnd.y.toFixed(1)}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.55"
        />
        <text
          x={o.x + 58}
          y={o.y - 18}
          fontFamily={LABEL_FONT}
          fontSize={12}
          fontStyle="italic"
          fill="currentColor"
          fillOpacity="0.75"
        >
          θ
        </text>

        <circle cx={o.x} cy={o.y} r="3.5" fill="currentColor" fillOpacity="0.6" />

        {/* vector labels */}
        <g fontFamily={LABEL_FONT} fontSize={13} fontWeight={600} fontStyle="italic">
          <text x={o.x - 12} y={o.y + 14} textAnchor="end" fill="currentColor" fontStyle="normal">
            O
          </text>
          <text x={aTip.x - 22} y={aTip.y - 8} textAnchor="middle" fill={COLOR_A}>
            a
          </text>
          <text x={(o.x + bTip.x) / 2 + 20} y={bTip.y - 12} textAnchor="middle" fill={COLOR_B}>
            b
          </text>
        </g>

        {/* projection label */}
        <text
          x={(o.x + foot.x) / 2}
          y={o.y + 24}
          textAnchor="middle"
          fontFamily={LABEL_FONT}
          fontSize={11}
          fontWeight={600}
          fill={COLOR_B}
        >
          projection of a on b
        </text>
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The two vectors are drawn from one point, so θ is the angle between them. Dropping a
        perpendicular from the tip of <em>a</em> onto the line of <em>b</em> cuts off the green
        segment, which is the projection of <em>a</em> on <em>b</em>.
      </figcaption>
    </figure>
  );
}

/** Triangle ABC, with the interior angle at B marked. */
export function TriangleAngleDiagram() {
  const b = { x: 62, y: 176 };
  const a = { x: 262, y: 176 };
  const c = { x: 152, y: 46 };

  const bc = { x: c.x - b.x, y: c.y - b.y };
  const bcLen = Math.hypot(bc.x, bc.y) || 1;
  const ubc = { x: bc.x / bcLen, y: bc.y / bcLen };

  const arcR = 40;
  const arcStart = { x: b.x + arcR, y: b.y };
  const arcEnd = { x: b.x + arcR * ubc.x, y: b.y + arcR * ubc.y };

  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 330 210"
        className="w-full h-auto"
        role="img"
        aria-label="Triangle ABC with vertex B at the lower left, A at the lower right and C above. The sides from B to A and from B to C carry arrows, and the interior angle at B is marked theta."
      >
        {/* the triangle itself */}
        <polygon
          points={`${a.x},${a.y} ${c.x},${c.y} ${b.x},${b.y}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          strokeLinejoin="round"
        />

        {/* the two vectors that meet at B */}
        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1={b.x} y1={b.y} x2={a.x - 8} y2={a.y} stroke={COLOR_A} />
          <polyline points={arrowHeadPoints(a.x, a.y, 1, 0, 10)} stroke={COLOR_A} />
          <line
            x1={b.x}
            y1={b.y}
            x2={c.x - ubc.x * 8}
            y2={c.y - ubc.y * 8}
            stroke={COLOR_B}
          />
          <polyline points={arrowHeadPoints(c.x, c.y, ubc.x, ubc.y, 10)} stroke={COLOR_B} />
        </g>

        {/* interior angle at B */}
        <path
          d={`M ${arcStart.x} ${arcStart.y} A ${arcR} ${arcR} 0 0 0 ${arcEnd.x.toFixed(1)} ${arcEnd.y.toFixed(1)}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.55"
        />
        <text
          x={b.x + 52}
          y={b.y - 14}
          fontFamily={LABEL_FONT}
          fontSize={12}
          fontStyle="italic"
          fill="currentColor"
          fillOpacity="0.75"
        >
          θ
        </text>

        <circle cx={b.x} cy={b.y} r="3.5" fill="currentColor" fillOpacity="0.6" />

        {/* vector names */}
        <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fontStyle="italic">
          <text x={(b.x + a.x) / 2} y={a.y - 10} textAnchor="middle" fill={COLOR_A}>
            BA
          </text>
          <text x={(b.x + c.x) / 2 - 22} y={(b.y + c.y) / 2 - 10} textAnchor="end" fill={COLOR_B}>
            BC
          </text>
        </g>

        {/* vertex labels with their coordinates */}
        <g fontFamily={LABEL_FONT} fontSize={11} fontWeight={600} fill="currentColor" fillOpacity="0.8">
          <text x={b.x} y={b.y + 20} textAnchor="middle">
            B(−1, 0, 0)
          </text>
          <text x={a.x} y={a.y + 20} textAnchor="middle">
            A(1, 2, 3)
          </text>
          <text x={c.x} y={c.y - 12} textAnchor="middle">
            C(0, 1, 2)
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The angle at B is the angle between <em>BA</em> and <em>BC</em>, so the dot product of
        those two vectors gives it. The figure is schematic and not drawn to scale.
      </figcaption>
    </figure>
  );
}
