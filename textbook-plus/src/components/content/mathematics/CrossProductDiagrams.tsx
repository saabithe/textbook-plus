/*
 * Schematics for the vector product: the right-handed direction of a × b, the
 * triangle and parallelogram whose areas the cross product measures, and the
 * rectangle of the position-vector question. Purely presentational: no hooks,
 * no client directive, no external libraries. Ink inherits light/dark theming
 * via currentColor.
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

/** a and b spanning a plane, with a × b rising out of it. */
export function CrossProductDirectionDiagram() {
  const o = { x: 58, y: 188 };
  const aTip = { x: 232, y: 188 };
  const bTip = { x: 146, y: 92 };
  const sum = { x: aTip.x + bTip.x - o.x, y: aTip.y + bTip.y - o.y };
  const nTip = { x: o.x, y: 44 };

  const bLen = Math.hypot(bTip.x - o.x, bTip.y - o.y) || 1;
  const uby = (bTip.y - o.y) / bLen;
  const ubx = (bTip.x - o.x) / bLen;

  const arcR = 52;
  const turn = (t: number) => ({
    x: o.x + arcR * (ubx * Math.cos(t) - uby * Math.sin(t)),
    y: o.y + arcR * (ubx * Math.sin(t) + uby * Math.cos(t)),
  });
  const arcEnd = turn(0.12);
  const arcBefore = turn(0.21);

  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 340 230"
        className="w-full h-auto"
        role="img"
        aria-label="Vectors a and b drawn from a common point and completed into a parallelogram. A third arrow rises perpendicular to their plane and is labelled n-hat. A curved arrow runs from a to b around the common point, showing the right-handed order."
      >
        {/* the plane spanned by a and b */}
        <polygon
          points={`${o.x},${o.y} ${aTip.x},${aTip.y} ${sum.x},${sum.y} ${bTip.x},${bTip.y}`}
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />

        {/* the two vectors */}
        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1={o.x} y1={o.y} x2={aTip.x - 8} y2={aTip.y} stroke={COLOR_A} />
          <polyline points={arrowHeadPoints(aTip.x, aTip.y, 1, 0, 10)} stroke={COLOR_A} />
          <line
            x1={o.x}
            y1={o.y}
            x2={bTip.x - ubx * 8}
            y2={bTip.y - uby * 8}
            stroke={COLOR_B}
          />
          <polyline points={arrowHeadPoints(bTip.x, bTip.y, ubx, uby, 10)} stroke={COLOR_B} />
        </g>

        {/* the normal, out of the plane */}
        <g fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1={o.x} y1={o.y} x2={nTip.x} y2={nTip.y + 9} stroke="currentColor" strokeOpacity="0.75" />
          <polyline
            points={arrowHeadPoints(nTip.x, nTip.y, 0, -1, 9)}
            stroke="currentColor"
            strokeOpacity="0.75"
          />
        </g>

        {/* right-handed turn from a to b */}
        <path
          d={`M ${o.x + arcR} ${o.y} A ${arcR} ${arcR} 0 0 0 ${arcEnd.x.toFixed(1)} ${arcEnd.y.toFixed(1)}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.5"
        />
        <polyline
          points={arrowHeadPoints(arcEnd.x, arcEnd.y, arcEnd.x - arcBefore.x, arcEnd.y - arcBefore.y, 7)}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.5"
        />
        <text
          x={o.x + 30}
          y={o.y - 20}
          fontFamily={LABEL_FONT}
          fontSize={12}
          fontStyle="italic"
          fill="currentColor"
          fillOpacity="0.7"
        >
          θ
        </text>

        <circle cx={o.x} cy={o.y} r="3.5" fill="currentColor" fillOpacity="0.6" />

        <g fontFamily={LABEL_FONT} fontSize={13} fontWeight={600} fontStyle="italic">
          <text x={o.x - 12} y={o.y + 16} textAnchor="end" fill="currentColor" fontStyle="normal">
            O
          </text>
          <text x={aTip.x - 4} y={aTip.y - 12} textAnchor="end" fill={COLOR_A}>
            a
          </text>
          <text x={bTip.x + 12} y={bTip.y - 2} fill={COLOR_B}>
            b
          </text>
          <text x={nTip.x + 12} y={nTip.y + 2} fill="currentColor" fontStyle="normal">
            n̂
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        <em>a</em> and <em>b</em> span a plane. The product <em>a</em> × <em>b</em> is perpendicular
        to that plane, and the turn from <em>a</em> to <em>b</em> fixes its direction, so{" "}
        <em>a</em>, <em>b</em> and <em>n̂</em> form a right-handed system.
      </figcaption>
    </figure>
  );
}

/** Triangle from two adjacent sides a and b, optionally with named vertices. */
export function TriangleAreaDiagram({
  vertices,
  sides = ["a", "b"],
}: {
  vertices?: [string, string, string];
  sides?: [string, string];
}) {
  const a = { x: 58, y: 178 };
  const b = { x: 262, y: 178 };
  const c = { x: 150, y: 54 };

  const bLen = Math.hypot(c.x - a.x, c.y - a.y) || 1;
  const ucx = (c.x - a.x) / bLen;
  const ucy = (c.y - a.y) / bLen;

  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 330 220"
        className="w-full h-auto"
        role="img"
        aria-label={`Triangle built from two vectors ${sides[0]} and ${sides[1]} drawn from a common vertex${vertices ? `, with vertices ${vertices.join(", ")}` : ""}.`}
      >
        <polygon
          points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`}
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.35"
          strokeLinejoin="round"
        />

        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1={a.x} y1={a.y} x2={b.x - 8} y2={b.y} stroke={COLOR_A} />
          <polyline points={arrowHeadPoints(b.x, b.y, 1, 0, 10)} stroke={COLOR_A} />
          <line
            x1={a.x}
            y1={a.y}
            x2={c.x - ucx * 8}
            y2={c.y - ucy * 8}
            stroke={COLOR_B}
          />
          <polyline points={arrowHeadPoints(c.x, c.y, ucx, ucy, 10)} stroke={COLOR_B} />
        </g>

        <circle cx={a.x} cy={a.y} r="3.5" fill="currentColor" fillOpacity="0.6" />

        <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fontStyle="italic">
          <text x={(a.x + b.x) / 2} y={b.y - 12} textAnchor="middle" fill={COLOR_A}>
            {sides[0]}
          </text>
          <text x={(a.x + c.x) / 2 - 20} y={(a.y + c.y) / 2 + 4} textAnchor="end" fill={COLOR_B}>
            {sides[1]}
          </text>
        </g>

        {vertices && (
          <g fontFamily={LABEL_FONT} fontSize={11} fontWeight={600} fill="currentColor" fillOpacity="0.8">
            <text x={a.x} y={a.y + 20} textAnchor="middle">
              {vertices[0]}
            </text>
            <text x={b.x} y={b.y + 20} textAnchor="middle">
              {vertices[1]}
            </text>
            <text x={c.x} y={c.y - 12} textAnchor="middle">
              {vertices[2]}
            </text>
          </g>
        )}
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The two vectors leave one vertex, so the triangle they close is half the parallelogram they
        span.
      </figcaption>
    </figure>
  );
}

/** Parallelogram on adjacent sides a and b. */
export function ParallelogramAreaDiagram() {
  const o = { x: 58, y: 180 };
  const aTip = { x: 238, y: 180 };
  const bTip = { x: 128, y: 74 };
  const sum = { x: aTip.x + bTip.x - o.x, y: aTip.y + bTip.y - o.y };

  const bLen = Math.hypot(bTip.x - o.x, bTip.y - o.y) || 1;
  const ubx = (bTip.x - o.x) / bLen;
  const uby = (bTip.y - o.y) / bLen;

  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 330 220"
        className="w-full h-auto"
        role="img"
        aria-label="Parallelogram whose adjacent sides, drawn from the lower-left vertex, are the vectors a along the base and b up the left slant."
      >
        <polygon
          points={`${o.x},${o.y} ${aTip.x},${aTip.y} ${sum.x},${sum.y} ${bTip.x},${bTip.y}`}
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.35"
          strokeLinejoin="round"
        />

        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1={o.x} y1={o.y} x2={aTip.x - 8} y2={aTip.y} stroke={COLOR_A} />
          <polyline points={arrowHeadPoints(aTip.x, aTip.y, 1, 0, 10)} stroke={COLOR_A} />
          <line
            x1={o.x}
            y1={o.y}
            x2={bTip.x - ubx * 8}
            y2={bTip.y - uby * 8}
            stroke={COLOR_B}
          />
          <polyline points={arrowHeadPoints(bTip.x, bTip.y, ubx, uby, 10)} stroke={COLOR_B} />
        </g>

        <circle cx={o.x} cy={o.y} r="3.5" fill="currentColor" fillOpacity="0.6" />

        <g fontFamily={LABEL_FONT} fontSize={12} fontWeight={600} fontStyle="italic">
          <text x={(o.x + aTip.x) / 2} y={aTip.y - 12} textAnchor="middle" fill={COLOR_A}>
            a
          </text>
          <text x={(o.x + bTip.x) / 2 - 14} y={(o.y + bTip.y) / 2} textAnchor="end" fill={COLOR_B}>
            b
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The same two vectors close into a parallelogram, so its area is the magnitude of their cross
        product.
      </figcaption>
    </figure>
  );
}

/** Rectangle whose corners are given by position vectors. */
export function RectangleAreaDiagram({
  labels,
}: {
  labels: [string, string, string, string];
}) {
  const a = { x: 80, y: 62 };
  const b = { x: 272, y: 62 };
  const c = { x: 272, y: 158 };
  const d = { x: 80, y: 158 };

  return (
    <figure className="my-6">
      <svg
        viewBox="0 0 330 220"
        className="w-full h-auto"
        role="img"
        aria-label={`Rectangle with corners ${labels.join(", ")}. The sides AB and AD are drawn as vectors.`}
      >
        <polygon
          points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`}
          fill="currentColor"
          fillOpacity="0.05"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeOpacity="0.35"
          strokeLinejoin="round"
        />

        <g fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <line x1={a.x} y1={a.y} x2={b.x - 8} y2={b.y} stroke={COLOR_A} />
          <polyline points={arrowHeadPoints(b.x, b.y, 1, 0, 10)} stroke={COLOR_A} />
          <line x1={a.x} y1={a.y} x2={d.x} y2={d.y - 8} stroke={COLOR_B} />
          <polyline points={arrowHeadPoints(d.x, d.y, 0, 1, 10)} stroke={COLOR_B} />
        </g>

        <circle cx={a.x} cy={a.y} r="3.5" fill="currentColor" fillOpacity="0.6" />

        <g fontFamily={LABEL_FONT} fontSize={11} fontWeight={600} fill="currentColor" fillOpacity="0.8">
          <text x={a.x} y={a.y - 12} textAnchor="middle">
            {labels[0]}
          </text>
          <text x={b.x} y={b.y - 12} textAnchor="middle">
            {labels[1]}
          </text>
          <text x={c.x} y={c.y + 22} textAnchor="middle">
            {labels[2]}
          </text>
          <text x={d.x} y={d.y + 22} textAnchor="middle">
            {labels[3]}
          </text>
        </g>
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        All four corners lie in one plane, so the area is the product of the two side lengths.
      </figcaption>
    </figure>
  );
}
