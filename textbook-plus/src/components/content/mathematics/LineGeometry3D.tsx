/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics topic on lines
 * in three dimensions: the angle between two intersecting lines and the
 * shortest distance between two parallel lines. Purely presentational: no
 * hooks, no client directive, no external libraries. Structural strokes use
 * `currentColor`; the mathematics subject colour marks the direction vectors,
 * the marked angle arc and the perpendicular distance.
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

/** Sample an arc about a screen centre between two angles measured counter-clockwise from +x. */
function arcPoints(cx: number, cy: number, r: number, a1: number, a2: number, steps = 24): string {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i += 1) {
    const angle = a1 + ((a2 - a1) * i) / steps;
    const rad = (angle * Math.PI) / 180;
    pts.push(`${(cx + r * Math.cos(rad)).toFixed(1)},${(cy - r * Math.sin(rad)).toFixed(1)}`);
  }
  return pts.join(" ");
}

/** A point at radius r and angle a (degrees, counter-clockwise) about a screen centre. */
function polarPoint(cx: number, cy: number, r: number, a: number): { x: number; y: number } {
  const rad = (a * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };
}

/** A small square right-angle mark at (x, y) between two unit directions. */
function rightAnglePoints(
  x: number,
  y: number,
  along: [number, number],
  perp: [number, number],
  size: number,
): string {
  const p1x = x + along[0] * size;
  const p1y = y + along[1] * size;
  const cx = p1x + perp[0] * size;
  const cy = p1y + perp[1] * size;
  const p2x = x + perp[0] * size;
  const p2y = y + perp[1] * size;
  return `${p1x.toFixed(1)},${p1y.toFixed(1)} ${cx.toFixed(1)},${cy.toFixed(1)} ${p2x.toFixed(1)},${p2y.toFixed(1)}`;
}

/** Two intersecting lines crossing at O, with direction vectors and the smaller angle θ marked. */
export function IntersectingLinesAngleDiagram() {
  const o = { x: 160, y: 100 };

  // Line 1 rises gently to the right; line 2 falls to the right. Their acute angle is ~35°.
  const l1a = { x: 297, y: 72 };
  const l1b = { x: 23, y: 128 };
  const l2a = { x: 279, y: 153 };
  const l2b = { x: 41, y: 47 };

  const arc = arcPoints(o.x, o.y, 30, -24.2, 11.3);
  const theta = polarPoint(o.x, o.y, 42, -6.45);

  // Direction-vector arrows sit on the left rays, clear of the marked right-hand angle.
  const b1Start = { x: 123, y: 108 };
  const b1End = { x: 89, y: 114 };
  const b2Start = { x: 125, y: 84 };
  const b2End = { x: 94, y: 71 };

  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-auto"
      role="img"
      aria-label="Two intersecting lines crossing at a point O, each drawn as a straight arrow-ended stroke; a small accent arrow on each line marks its direction vector b1 and b2 near the crossing, and an accent arc at O marks the smaller angle theta between the lines while the obtuse angle is left unmarked."
    >
      {/* the two full lines, arrow-ended at both ends */}
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7">
        <line x1={l1b.x} y1={l1b.y} x2={l1a.x} y2={l1a.y} />
        <polyline points={arrowHeadPoints(l1a.x, l1a.y, l1a.x - l1b.x, l1a.y - l1b.y, 9)} />
        <polyline points={arrowHeadPoints(l1b.x, l1b.y, l1b.x - l1a.x, l1b.y - l1a.y, 9)} />
        <line x1={l2b.x} y1={l2b.y} x2={l2a.x} y2={l2a.y} />
        <polyline points={arrowHeadPoints(l2a.x, l2a.y, l2a.x - l2b.x, l2a.y - l2b.y, 9)} />
        <polyline points={arrowHeadPoints(l2b.x, l2b.y, l2b.x - l2a.x, l2b.y - l2a.y, 9)} />
      </g>

      {/* direction vectors near the crossing */}
      <g fill="none" stroke={ACCENT} strokeWidth="2.25" strokeLinecap="round">
        <line x1={b1Start.x} y1={b1Start.y} x2={b1End.x} y2={b1End.y} />
        <polyline points={arrowHeadPoints(b1End.x, b1End.y, b1End.x - b1Start.x, b1End.y - b1Start.y, 8)} />
        <line x1={b2Start.x} y1={b2Start.y} x2={b2End.x} y2={b2End.y} />
        <polyline points={arrowHeadPoints(b2End.x, b2End.y, b2End.x - b2Start.x, b2End.y - b2Start.y, 8)} />
      </g>

      {/* the smaller angle only */}
      <polyline points={arc} fill="none" stroke={ACCENT} strokeWidth="1.75" strokeLinecap="round" />
      <circle cx={o.x} cy={o.y} r="3.5" fill={ACCENT} />

      <g fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT} textAnchor="middle">
        <text x={theta.x.toFixed(1)} y={theta.y.toFixed(1)} fontWeight={600}>
          θ
        </text>
        <text x="100" y="127">
          b₁
        </text>
        <text x="108" y="62">
          b₂
        </text>
      </g>
      <text x="215" y="107" textAnchor="start" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT} fillOpacity="0.85">
        acute angle
      </text>
      <text x="149" y="121" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        O
      </text>
    </svg>
  );
}

/** Two parallel lines in perspective, their common direction, a displacement and the shortest distance. */
export function ParallelLinesDistanceDiagram() {
  const l1a = { x: 310, y: 42 };
  const l1b = { x: 30, y: 112 };
  const l2a = { x: 310, y: 102 };
  const l2b = { x: 30, y: 172 };

  // Unit vectors along each line and normal to both (slope -0.25).
  const along: [number, number] = [0.9701, -0.2425];
  const perp: [number, number] = [0.2425, 0.9701];
  const perpUp: [number, number] = [-perp[0], -perp[1]];

  // P on L1 and Q on L2 joined by the perpendicular (shortest) segment.
  const p = { x: 150, y: 82 };
  const q = { x: 164.1, y: 138.5 };

  // An arbitrary point on L1 to one on L2: the dashed displacement, not the shortest path.
  const r = { x: 215, y: 66 };
  const s = { x: 260, y: 115 };

  const bStart = { x: 65, y: 163 };
  const bEnd = { x: 115, y: 151 };

  return (
    <svg
      viewBox="0 0 340 210"
      className="w-full h-auto"
      role="img"
      aria-label="Two parallel lines L1 and L2 in three-dimensional perspective share the same direction arrow b; a dashed arrow from a point on L1 to a point on L2 is labelled displacement a2 minus a1, while a shorter accent perpendicular segment from P to Q with right-angle marks at both ends is labelled d and shows the shortest distance between the lines."
    >
      {/* the two parallel lines, arrow-ended at both ends */}
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.7">
        <line x1={l1b.x} y1={l1b.y} x2={l1a.x} y2={l1a.y} />
        <polyline points={arrowHeadPoints(l1a.x, l1a.y, l1a.x - l1b.x, l1a.y - l1b.y, 9)} />
        <polyline points={arrowHeadPoints(l1b.x, l1b.y, l1b.x - l1a.x, l1b.y - l1a.y, 9)} />
        <line x1={l2b.x} y1={l2b.y} x2={l2a.x} y2={l2a.y} />
        <polyline points={arrowHeadPoints(l2a.x, l2a.y, l2a.x - l2b.x, l2a.y - l2b.y, 9)} />
        <polyline points={arrowHeadPoints(l2b.x, l2b.y, l2b.x - l2a.x, l2b.y - l2a.y, 9)} />
      </g>

      {/* dashed displacement: kept subordinate to the perpendicular distance */}
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6">
        <line x1={r.x} y1={r.y} x2={s.x} y2={s.y} strokeDasharray="5 4" />
        <polyline points={arrowHeadPoints(s.x, s.y, s.x - r.x, s.y - r.y, 8)} />
      </g>

      {/* common direction arrow on L2 */}
      <g fill="none" stroke={ACCENT} strokeWidth="2.25" strokeLinecap="round">
        <line x1={bStart.x} y1={bStart.y} x2={bEnd.x} y2={bEnd.y} />
        <polyline points={arrowHeadPoints(bEnd.x, bEnd.y, bEnd.x - bStart.x, bEnd.y - bStart.y, 8)} />
      </g>

      {/* the shortest distance, with right-angle marks at both ends */}
      <g fill="none" stroke={ACCENT} strokeLinecap="round">
        <line x1={p.x} y1={p.y} x2={q.x} y2={q.y} strokeWidth="2.5" />
        <polyline points={rightAnglePoints(p.x, p.y, along, perp, 7)} strokeWidth="1.5" />
        <polyline points={rightAnglePoints(q.x, q.y, along, perpUp, 7)} strokeWidth="1.5" />
      </g>
      <circle cx={p.x} cy={p.y} r="4" fill={ACCENT} />
      <circle cx={q.x} cy={q.y} r="4" fill={ACCENT} />

      <g fontFamily={LABEL_FONT} fill="currentColor">
        <text x="44" y="102" fontSize={12}>
          L₁
        </text>
        <text x="44" y="162" fontSize={12}>
          L₂
        </text>
      </g>
      <text x="140" y="122" textAnchor="end" fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT} fillOpacity="0.8">
        shortest distance
      </text>
      <text x="246" y="88" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" fillOpacity="0.8">
        a₂ − a₁
      </text>

      <g fontFamily={LABEL_FONT} fill={ACCENT} textAnchor="middle">
        <text x="172" y="110" fontSize={13} fontWeight={600}>
          d
        </text>
        <text x="124" y="144" fontSize={13}>
          b
        </text>
      </g>
    </svg>
  );
}
