/*
 * Schematic inline-SVG diagrams for the Class 12 mathematics section on
 * direction cosines and direction ratios. Purely presentational: no hooks,
 * no client directive, no external libraries. Strokes inherit light/dark
 * theming via `currentColor`, with the mathematics subject colour reserved
 * for the directed ray, angle arcs, highlighted axis and point markers.
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

/** Faint three-dimensional axes: +X right/down, +Y right/up, +Z straight up. */
function Axes3D({
  ox,
  oy,
  xEnd,
  yEnd,
  zEnd,
  head = 6,
}: {
  ox: number;
  oy: number;
  xEnd: [number, number];
  yEnd: [number, number];
  zEnd: [number, number];
  head?: number;
}) {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.38">
      <line x1={ox} y1={oy} x2={xEnd[0]} y2={xEnd[1]} />
      <polyline points={arrowHeadPoints(xEnd[0], xEnd[1], xEnd[0] - ox, xEnd[1] - oy, head)} />
      <line x1={ox} y1={oy} x2={yEnd[0]} y2={yEnd[1]} />
      <polyline points={arrowHeadPoints(yEnd[0], yEnd[1], yEnd[0] - ox, yEnd[1] - oy, head)} />
      <line x1={ox} y1={oy} x2={zEnd[0]} y2={zEnd[1]} />
      <polyline points={arrowHeadPoints(zEnd[0], zEnd[1], zEnd[0] - ox, zEnd[1] - oy, head)} />
    </g>
  );
}

/** A ray from the origin in the first octant with the three distinct direction angles α, β, γ. */
export function DirectionAnglesDiagram() {
  const ox = 66;
  const oy = 176;
  const xEnd: [number, number] = [166, 196];
  const yEnd: [number, number] = [150, 138];
  const zEnd: [number, number] = [66, 56];
  const ray: [number, number] = [180, 76];
  const foot: [number, number] = [146, 150];

  const alpha = arcPoints(ox, oy, 46, -11.3, 41.3);
  const beta = arcPoints(ox, oy, 25, 24.3, 41.3);
  const gamma = arcPoints(ox, oy, 37, 41.3, 90);
  const aLbl = polarPoint(ox, oy, 52, 15);
  const bLbl = polarPoint(ox, oy, 34, 38);
  const gLbl = polarPoint(ox, oy, 43, 65.7);

  return (
    <svg
      viewBox="0 0 320 220"
      className="w-full h-auto"
      role="img"
      aria-label="Three-dimensional axes X Y Z from an origin O with a directed ray into the first octant; three distinct arcs at the origin mark angle alpha with the X axis, angle beta with the Y axis and angle gamma with the Z axis, and a faint dashed line drops the ray endpoint onto the xy-plane"
    >
      <Axes3D ox={ox} oy={oy} xEnd={xEnd} yEnd={yEnd} zEnd={zEnd} />

      <line
        x1={ray[0]}
        y1={ray[1]}
        x2={foot[0]}
        y2={foot[1]}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeDasharray="4 4"
        strokeLinecap="round"
        strokeOpacity="0.3"
      />

      <g fill="none" stroke={ACCENT} strokeWidth="1.75" strokeLinecap="round">
        <polyline points={alpha} />
        <polyline points={beta} />
        <polyline points={gamma} />
      </g>

      <line
        x1={ox}
        y1={oy}
        x2={ray[0]}
        y2={ray[1]}
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <polyline
        points={arrowHeadPoints(ray[0], ray[1], ray[0] - ox, ray[1] - oy, 9)}
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx={ox} cy={oy} r="3.5" fill={ACCENT} />

      <g fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT} textAnchor="middle">
        <text x={aLbl.x.toFixed(1)} y={aLbl.y.toFixed(1)}>
          α
        </text>
        <text x={bLbl.x.toFixed(1)} y={bLbl.y.toFixed(1)}>
          β
        </text>
        <text x={gLbl.x.toFixed(1)} y={gLbl.y.toFixed(1)}>
          γ
        </text>
      </g>

      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x={xEnd[0] + 4} y={xEnd[1] + 5} textAnchor="start">
          X
        </text>
        <text x={yEnd[0] + 4} y={yEnd[1] - 3} textAnchor="start">
          Y
        </text>
        <text x={zEnd[0]} y={zEnd[1] - 8} textAnchor="middle">
          Z
        </text>
        <text x={ox - 10} y={oy + 18} textAnchor="middle">
          O
        </text>
      </g>
    </svg>
  );
}

/** Direction cosines of the three coordinate axes, one mini panel per axis. */
export function AxisCosinesDiagrams() {
  const panels = [
    { title: "X-axis", triple: "(1,0,0)", axis: "x" },
    { title: "Y-axis", triple: "(0,1,0)", axis: "y" },
    { title: "Z-axis", triple: "(0,0,1)", axis: "z" },
  ] as const;

  return (
    <svg
      viewBox="0 0 360 130"
      className="w-full h-auto"
      role="img"
      aria-label="Three side-by-side axis panels: the highlighted X axis has direction cosines one zero zero, the highlighted Y axis has direction cosines zero one zero, and the highlighted Z axis has direction cosines zero zero one"
    >
      {panels.map((panel, i) => {
        const left = i * 120;
        const ox = left + 24;
        const oy = 90;
        const xEnd: [number, number] = [left + 64, 100];
        const yEnd: [number, number] = [left + 60, 72];
        const zEnd: [number, number] = [left + 24, 42];
        const chosen = panel.axis === "x" ? xEnd : panel.axis === "y" ? yEnd : zEnd;

        return (
          <g key={panel.axis}>
            <Axes3D ox={ox} oy={oy} xEnd={xEnd} yEnd={yEnd} zEnd={zEnd} head={5} />

            <line
              x1={ox}
              y1={oy}
              x2={chosen[0]}
              y2={chosen[1]}
              stroke={ACCENT}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <polyline
              points={arrowHeadPoints(chosen[0], chosen[1], chosen[0] - ox, chosen[1] - oy, 8)}
              fill="none"
              stroke={ACCENT}
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <g fontFamily={LABEL_FONT} fontSize={10} fill="currentColor" fillOpacity="0.75">
              <text x={xEnd[0] + 4} y={xEnd[1] + 4}>
                X
              </text>
              <text x={yEnd[0] + 4} y={yEnd[1] - 3}>
                Y
              </text>
              <text x={zEnd[0]} y={zEnd[1] - 6} textAnchor="middle">
                Z
              </text>
            </g>

            <text
              x={left + 60}
              y="20"
              textAnchor="middle"
              fontFamily={LABEL_FONT}
              fontSize={12}
              fill="currentColor"
            >
              {panel.title}
            </text>
            <text
              x={left + 60}
              y="122"
              textAnchor="middle"
              fontFamily={LABEL_FONT}
              fontSize={12}
              fill={ACCENT}
            >
              {panel.triple}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** A ray in the first octant making three equal angles with the coordinate axes. */
export function EqualAnglesDiagram() {
  const ox = 56;
  const oy = 140;
  const xEnd: [number, number] = [150, 162];
  const yEnd: [number, number] = [136, 116];
  const zEnd: [number, number] = [56, 44];
  const ray: [number, number] = [168, 62];

  const alpha = arcPoints(ox, oy, 38, -13.2, 34.9);
  const beta = arcPoints(ox, oy, 20, 16.7, 34.9);
  const gamma = arcPoints(ox, oy, 28, 34.9, 90);
  const aLbl = polarPoint(ox, oy, 45, 11);
  const bLbl = polarPoint(ox, oy, 27, 32);
  const gLbl = polarPoint(ox, oy, 35, 63);

  return (
    <svg
      viewBox="0 0 260 180"
      className="w-full h-auto"
      role="img"
      aria-label="Three-dimensional axes with a single directed ray into the first octant; three equal arcs at the origin are each marked theta, showing alpha equals beta equals gamma, with the ray labelled equal angles"
    >
      <Axes3D ox={ox} oy={oy} xEnd={xEnd} yEnd={yEnd} zEnd={zEnd} />

      <g fill="none" stroke={ACCENT} strokeWidth="1.75" strokeLinecap="round">
        <polyline points={alpha} />
        <polyline points={beta} />
        <polyline points={gamma} />
      </g>

      <line
        x1={ox}
        y1={oy}
        x2={ray[0]}
        y2={ray[1]}
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <polyline
        points={arrowHeadPoints(ray[0], ray[1], ray[0] - ox, ray[1] - oy, 9)}
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx={ox} cy={oy} r="3.5" fill={ACCENT} />

      <g fontFamily={LABEL_FONT} fontSize={13} fill={ACCENT} textAnchor="middle">
        <text x={aLbl.x.toFixed(1)} y={aLbl.y.toFixed(1)}>
          θ
        </text>
        <text x={bLbl.x.toFixed(1)} y={bLbl.y.toFixed(1)}>
          θ
        </text>
        <text x={gLbl.x.toFixed(1)} y={gLbl.y.toFixed(1)}>
          θ
        </text>
      </g>

      <text x="172" y="58" textAnchor="start" fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT}>
        equal angles
      </text>
      <text x="150" y="170" textAnchor="middle" fontFamily={LABEL_FONT} fontSize={11} fill="currentColor" fillOpacity="0.75">
        first octant
      </text>

      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor">
        <text x={xEnd[0] + 4} y={xEnd[1] + 5} textAnchor="start">
          X
        </text>
        <text x={yEnd[0] + 4} y={yEnd[1] - 3} textAnchor="start">
          Y
        </text>
        <text x={zEnd[0]} y={zEnd[1] - 8} textAnchor="middle">
          Z
        </text>
        <text x={ox - 10} y={oy + 18} textAnchor="middle">
          O
        </text>
      </g>
    </svg>
  );
}

/** Three collinear points B, A, C with A between B and C and BC = −2 AB. */
export function CollinearPointsDiagram() {
  const lineStart: [number, number] = [40, 87];
  const lineEnd: [number, number] = [260, 60];
  const B: [number, number] = [79.6, 82.1];
  const A: [number, number] = [141.2, 74.6];
  const C: [number, number] = [202.8, 67.0];

  const abStart: [number, number] = [A[0] - 2.2, A[1] - 17.9];
  const abEnd: [number, number] = [B[0] - 2.2, B[1] - 17.9];
  const bcStart: [number, number] = [B[0] + 3.4, B[1] + 27.8];
  const bcEnd: [number, number] = [C[0] + 3.4, C[1] + 27.8];

  return (
    <svg
      viewBox="0 0 300 150"
      className="w-full h-auto"
      role="img"
      aria-label="A single straight line with three collinear points in the order B, A, C so A lies between B and C; a directed arrow from A to B is labelled AB and a longer directed arrow from B to C through A is labelled BC equals minus two AB"
    >
      <line
        x1={lineStart[0]}
        y1={lineStart[1]}
        x2={lineEnd[0]}
        y2={lineEnd[1]}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      <g fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round">
        <line x1={abStart[0]} y1={abStart[1]} x2={abEnd[0]} y2={abEnd[1]} />
        <polyline
          points={arrowHeadPoints(abEnd[0], abEnd[1], abEnd[0] - abStart[0], abEnd[1] - abStart[1], 8)}
        />
        <line x1={bcStart[0]} y1={bcStart[1]} x2={bcEnd[0]} y2={bcEnd[1]} />
        <polyline
          points={arrowHeadPoints(bcEnd[0], bcEnd[1], bcEnd[0] - bcStart[0], bcEnd[1] - bcStart[1], 8)}
        />
      </g>

      <g fill={ACCENT}>
        <circle cx={B[0]} cy={B[1]} r="4.5" />
        <circle cx={A[0]} cy={A[1]} r="4.5" />
        <circle cx={C[0]} cy={C[1]} r="4.5" />
      </g>

      <g fontFamily={LABEL_FONT} fontSize={12} fill="currentColor" textAnchor="middle">
        <text x={B[0]} y={B[1] + 15}>
          B
        </text>
        <text x={A[0]} y={A[1] + 15}>
          A
        </text>
        <text x={C[0]} y={C[1] + 15}>
          C
        </text>
      </g>

      <g fontFamily={LABEL_FONT} fontSize={12} fill={ACCENT} textAnchor="middle">
        <text x="108" y="50">
          AB
        </text>
        <text x="150" y="120">
          {"BC = −2 AB"}
        </text>
      </g>

      <text
        x="150"
        y="142"
        textAnchor="middle"
        fontFamily={LABEL_FONT}
        fontSize={12}
        fill={ACCENT}
        fillOpacity="0.85"
      >
        A, B, C lie on one line
      </text>
    </svg>
  );
}

/** Two points P and Q on three-dimensional axes joined by a segment with coordinate-difference guides. */
export function TwoPointsSegmentDiagram() {
  const ox = 30;
  const oy = 138;
  const xEnd: [number, number] = [96, 152];
  const yEnd: [number, number] = [84, 116];
  const zEnd: [number, number] = [30, 52];

  const P = { x: 78, y: 112 };
  const dxStep = { x: 64.5, y: 13.7 };
  const dyStep = { x: 50.0, y: -20.4 };
  const dzStep = { x: 0, y: -54 };
  const A1 = { x: P.x + dxStep.x, y: P.y + dxStep.y };
  const A2 = { x: A1.x + dyStep.x, y: A1.y + dyStep.y };
  const Q = { x: A2.x + dzStep.x, y: A2.y + dzStep.y };

  return (
    <svg
      viewBox="0 0 300 160"
      className="w-full h-auto"
      role="img"
      aria-label="Three-dimensional axes with two points P and Q in the first octant joined by a highlighted segment; dashed guides along the X, Y and Z directions are labelled delta x equals x2 minus x1, delta y equals y2 minus y1 and delta z equals z2 minus z1"
    >
      <Axes3D ox={ox} oy={oy} xEnd={xEnd} yEnd={yEnd} zEnd={zEnd} />

      <g stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 4" strokeLinecap="round" strokeOpacity="0.5">
        <line x1={P.x} y1={P.y} x2={A1.x.toFixed(1)} y2={A1.y.toFixed(1)} />
        <line x1={A1.x.toFixed(1)} y1={A1.y.toFixed(1)} x2={A2.x.toFixed(1)} y2={A2.y.toFixed(1)} />
        <line x1={A2.x.toFixed(1)} y1={A2.y.toFixed(1)} x2={Q.x.toFixed(1)} y2={Q.y.toFixed(1)} />
      </g>

      <line
        x1={P.x}
        y1={P.y}
        x2={Q.x.toFixed(1)}
        y2={Q.y.toFixed(1)}
        stroke={ACCENT}
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <circle cx={P.x} cy={P.y} r="4.5" fill={ACCENT} />
      <circle cx={Q.x.toFixed(1)} cy={Q.y.toFixed(1)} r="4.5" fill={ACCENT} />

      <g fontFamily={LABEL_FONT} fontSize={11} fill={ACCENT}>
        <text x="84" y="98" textAnchor="start">
          {"P(x₁,y₁,z₁)"}
        </text>
        <text x="198" y="46" textAnchor="start">
          {"Q(x₂,y₂,z₂)"}
        </text>
        <text x="110" y="140" textAnchor="middle">
          {"Δx = x₂ − x₁"}
        </text>
        <text x="198" y="96" textAnchor="start">
          {"Δy = y₂ − y₁"}
        </text>
        <text x="198" y="84" textAnchor="start">
          {"Δz = z₂ − z₁"}
        </text>
      </g>

      <g fontFamily={LABEL_FONT} fontSize={11} fill="currentColor">
        <text x={xEnd[0] + 4} y={xEnd[1] + 4}>
          X
        </text>
        <text x={yEnd[0] + 4} y={yEnd[1] - 3}>
          Y
        </text>
        <text x={zEnd[0]} y={zEnd[1] - 8} textAnchor="middle">
          Z
        </text>
        <text x={ox - 10} y={oy + 16} textAnchor="middle">
          O
        </text>
      </g>
    </svg>
  );
}
