/**
 * figures.ts — chapter 9 figures for the 9.1–9.2 rebuild.
 *
 * Every drawing here is a `FigureSpec`: the mirror is an arc sampled from its
 * centre, every ray is bounced by `reflect()` (never traced by eye), and each
 * spec carries the law checks the validator re-derives. The specs live in this
 * chapter file and are appended to `FIGURES` in `diagram/examples.ts`, so
 * `npm run verify:figures` and `/dev/figures` cover them with the rest.
 */
import {
  add,
  angleBetween,
  angleOf,
  arcPoints,
  dir,
  dist,
  dot,
  intersectLines,
  mul,
  polar,
  sub,
  unit,
  vec,
  type Vec,
} from "../../../components/content/physics/diagram/geometry.ts";
import {
  apparentDepth as apparentDepthOf,
  criticalAngleDeg,
  minimumDeviation,
  minimumDeviationIncidence,
  prismDeviation,
  reflect,
  refract,
  slabLateralShift,
  traceRay,
  type RefractingBody,
} from "../../../components/content/physics/diagram/optics.ts";
import {
  AXIS,
  EMERGENT,
  GUIDE,
  INCIDENT,
  INK,
  RAY,
  REFLECTED,
  THIN,
  VIRTUAL,
  angleMark,
  arrow,
  body,
  circle,
  dot as point,
  label,
  lensOutline,
  line,
  normal,
  rightAngle,
  s,
  tick,
  type Element,
  type FigureSpec,
} from "../../../components/content/physics/diagram/scene.ts";

/* ── mirror helpers ──────────────────────────────────────────────────── */

/** Where a ray from `from` along `d` meets the circle (C, R). */
function hitCircle(from: Vec, d: Vec, C: Vec, R: number, side: "near" | "far"): Vec {
  const u = unit(d);
  const oc = sub(from, C);
  const b = dot(oc, u);
  const c = dot(oc, oc) - R * R;
  const t = side === "far" ? -b + Math.sqrt(Math.max(0, b * b - c)) : -b - Math.sqrt(Math.max(0, b * b - c));
  return add(from, mul(u, t));
}

/** The reflected ray and the two angles it must satisfy. */
function bounce(at: Vec, C: Vec, inbound: Vec): { out: Vec; iDeg: number; rDeg: number } {
  const back = mul(unit(inbound), -1);
  const radial = unit(sub(at, C));
  const nAir = dot(radial, back) > 0 ? radial : mul(radial, -1);
  const out = reflect(unit(inbound), nAir);
  return { out, iDeg: angleBetween(back, nAir), rDeg: angleBetween(out, nAir) };
}

/** Crossing of a reflected ray with the principal axis. */
const axisCrossX = (at: Vec, d: Vec, axisY: number): number => at.x + ((axisY - at.y) / d.y) * d.x;

/** Mirror surface: the arc plus its hatched back. `hatch` +1 = outside the circle. */
function mirrorArc(C: Vec, R: number, fromDeg: number, toDeg: number, hatch: 1 | -1 = 1): Element[] {
  const out: Element[] = [{ kind: "poly", points: arcPoints(C, R, fromDeg, toDeg), stroke: s("ink", 1.5) }];
  for (let a = fromDeg; a <= toDeg + 1e-9; a += 7) {
    out.push(line(polar(C, a, R), polar(C, a, R + hatch * 2.6), s("ink", 0.3)));
  }
  return out;
}

/* ────────────────────────────────────────────────────────────────────────
 * 1. Reflection at a plane surface: i, r, δ = 180° − 2i
 * ──────────────────────────────────────────────────────────────────────── */

const O = { x: 60, y: 44 };
const INC = 45;
const incidentStart = polar(O, 90 + INC, 34);
const incidentDir = sub(O, incidentStart);
const reflectedDir = reflect(unit(incidentDir), { x: 0, y: 1 });
const reflectedEnd = add(O, mul(unit(reflectedDir), 34));
const incidentProlonged = add(O, mul(unit(incidentDir), 26));

export const planeReflection: FigureSpec = {
  id: "reflection-plane-angles",
  title: "Reflection at a plane surface: i, r and the deviation δ",
  alt: "A ray strikes a horizontal mirror at 45 degrees to the normal and leaves at 45 degrees on the other side; the dashed continuation of the incident ray and the reflected ray enclose the deviation δ, which is 90 degrees.",
  caption:
    "i = r = 45°. The angle between the prolonged incident ray and the reflected ray is the deviation, δ = 180° − 2i = 90°. The incident ray, the reflected ray and the normal N lie in the plane of the page.",
  frame: { width: 130, height: 96 },
  source: "Fig. 9.1",
  elements: [
    line({ x: 4, y: 44 }, { x: 126, y: 44 }, s("ink", 1.2)),
    ...Array.from({ length: 17 }, (_, i) => i * 7 + 8).map((x) =>
      line({ x, y: 44 }, { x: x - 3.2, y: 40.4 }, s("ink", 0.3)),
    ),
    line(O, polar(O, 90, 30), GUIDE),
    arrow(incidentStart, O, INCIDENT),
    arrow(O, reflectedEnd, RAY),
    line(O, incidentProlonged, GUIDE),
    ...angleMark(O, 90, 135, { r: 11, label: "i", labelR: 15 }),
    ...angleMark(O, 45, 90, { r: 11, label: "r", labelR: 15 }),
    ...angleMark(O, -45, 45, { r: 15 }),
    label(polar(O, 21, 19.5), "δ", { math: true, size: 3.2 }),
    label({ x: 60, y: 78 }, "N", { math: true, size: 3.2 }),
    label({ x: 20, y: 76 }, "incident ray", { anchor: "start", size: 2.9, color: "hot" }),
    label({ x: 92, y: 76 }, "reflected ray", { anchor: "start", size: 2.9, color: "ray" }),
    label({ x: 10, y: 88 }, "air", { anchor: "start", size: 3.2, color: "muted" }),
    label({ x: 10, y: 34 }, "mirror", { anchor: "start", size: 2.9, color: "muted" }),
  ],
  checks: [
    { kind: "value", label: "r = i", actual: angleBetween(reflectedDir, dir(90)), expected: INC, tol: 1e-6 },
    {
      kind: "value",
      label: "δ = 180° − 2i",
      actual: angleBetween(sub(incidentProlonged, O), sub(reflectedEnd, O)),
      expected: 180 - 2 * INC,
      tol: 1e-6,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 2. A spherical mirror with C, P, F, R and f marked (one figure per type)
 * ──────────────────────────────────────────────────────────────────────── */

const Y = 58;

type TermsInput = {
  id: string;
  title: string;
  heading: string;
  alt: string;
  caption: string;
  kind: "concave" | "convex";
  C: Vec;
  R: number;
  P: Vec;
  F: Vec;
  /** x where the incident rays begin. */
  rayStart: number;
};

/** Dimension line with a head at each end and its label underneath. */
function dimension(x1: number, x2: number, y: number, text: string, labelY: number): Element[] {
  const mid = { x: (x1 + x2) / 2, y };
  return [
    arrow(mid, { x: x1, y }, s("muted", 0.4)),
    arrow(mid, { x: x2, y }, s("muted", 0.4)),
    label({ x: (x1 + x2) / 2, y: labelY }, text, { math: true, size: 3.1 }),
  ];
}

function termsFigure({ id, title, heading, alt, caption, kind, C, R, P, F, rayStart }: TermsInput): FigureSpec {
  const concave = kind === "concave";
  const hitTop = hitCircle({ x: rayStart, y: Y + 10 }, { x: 1, y: 0 }, C, R, concave ? "far" : "near");
  const hitBottom = hitCircle({ x: rayStart, y: Y - 10 }, { x: 1, y: 0 }, C, R, concave ? "far" : "near");
  const topB = bounce(hitTop, C, { x: 1, y: 0 });
  const bottomB = bounce(hitBottom, C, { x: 1, y: 0 });
  const rayLen = 30;

  return {
    id,
    title,
    alt,
    caption,
    frame: { width: 140, height: 90 },
    source: "Fig. 9.3",
    elements: [
      line({ x: 6, y: Y }, { x: 132, y: Y }, AXIS),
      ...mirrorArc(C, R, concave ? -40 : 140, concave ? 40 : 220, concave ? 1 : -1),
      arrow({ x: rayStart, y: Y + 10 }, hitTop, INCIDENT),
      arrow({ x: rayStart, y: Y - 10 }, hitBottom, INCIDENT),
      arrow(hitTop, add(hitTop, mul(topB.out, rayLen)), RAY),
      arrow(hitBottom, add(hitBottom, mul(bottomB.out, rayLen)), RAY),
      ...(concave
        ? []
        : [
            line(hitTop, add(hitTop, mul(mul(topB.out, -1), 28)), GUIDE),
            line(hitBottom, add(hitBottom, mul(mul(bottomB.out, -1), 28)), GUIDE),
          ]),
      point(C),
      point(F),
      point(P),
      label({ x: C.x, y: 52.5 }, "C", { math: true, size: 3.2 }),
      label({ x: F.x, y: 52.5 }, "F", { math: true, size: 3.2 }),
      label({ x: P.x + (concave ? 4 : -4), y: 52.5 }, "P", { math: true, size: 3.2, anchor: concave ? "start" : "end" }),
      ...dimension(C.x, P.x, 24, "R", 18.5),
      ...dimension(F.x, P.x, 12, "f", 6.5),
      label({ x: concave ? 8 : 132, y: 84 }, heading, { anchor: concave ? "start" : "end", size: 3.6 }),
    ],
    checks: [
      {
        kind: "value",
        label: concave ? "reflected rays cross at F" : "reflected rays appear to come from F",
        actual: Math.abs(axisCrossX(hitTop, topB.out, Y) - F.x),
        expected: 0,
        tol: 1.2,
      },
    ],
  };
}

export const concaveMirrorTerms = termsFigure({
  id: "concave-mirror-terms",
  title: "Concave mirror: C, P, F, R and f",
  heading: "Concave mirror",
  alt: "A concave mirror seen from its hollow side. Parallel rays from the left reflect and cross at the focus F, which lies between the centre of curvature C and the pole P. R is the distance CP, f the distance FP.",
  caption:
    "A concave mirror has a real focus: parallel paraxial rays actually meet at F after reflection. C lies R from the pole and F lies f = R/2 from it.",
  kind: "concave",
  C: { x: 34, y: Y },
  R: 44,
  P: { x: 78, y: Y },
  F: { x: 56, y: Y },
  rayStart: 8,
});

export const convexMirrorTerms = termsFigure({
  id: "convex-mirror-terms",
  title: "Convex mirror: C, P, F, R and f",
  heading: "Convex mirror",
  alt: "A convex mirror seen from its bulging side. Parallel rays from the left reflect outwards, and their backward extensions meet at the virtual focus F behind the mirror; the centre of curvature C is also behind it.",
  caption:
    "A convex mirror has a virtual focus: the reflected rays never meet, but they appear to diverge from F behind the mirror. R and f are measured behind the surface, from the pole.",
  kind: "convex",
  C: { x: 102, y: Y },
  R: 44,
  P: { x: 58, y: Y },
  F: { x: 80, y: Y },
  rayStart: 6,
});

/* ────────────────────────────────────────────────────────────────────────
 * 3–6. The four construction rays, all on one concave mirror
 * ──────────────────────────────────────────────────────────────────────── */

const M_C = { x: 46, y: 45 };
const M_R = 52;
const M_P = { x: 98, y: 45 };
const M_F = { x: 72, y: 45 };
const M_APERTURE = 40;

function mirrorBase(): Element[] {
  return [
    line({ x: 8, y: 45 }, { x: 134, y: 45 }, AXIS),
    ...mirrorArc(M_C, M_R, -M_APERTURE, M_APERTURE, 1),
    point(M_C),
    point(M_F),
    point(M_P),
    label({ x: M_C.x, y: 39.5 }, "C", { math: true, size: 3.2 }),
    label({ x: M_F.x, y: 39.5 }, "F", { math: true, size: 3.2 }),
    label({ x: 104.4, y: 39.5 }, "P", { math: true, size: 3.2, anchor: "start" }),
  ];
}

/* 3. Parallel to the axis → through F */
const r1Top = hitCircle({ x: 8, y: 55 }, { x: 1, y: 0 }, M_C, M_R, "far");
const r1Bottom = hitCircle({ x: 8, y: 35 }, { x: 1, y: 0 }, M_C, M_R, "far");
const r1TopB = bounce(r1Top, M_C, { x: 1, y: 0 });
const r1BottomB = bounce(r1Bottom, M_C, { x: 1, y: 0 });

export const ruleParallel: FigureSpec = {
  id: "mirror-rule-parallel-ray",
  title: "Rule 1 — a ray parallel to the axis reflects through F",
  alt: "Two rays parallel to the principal axis strike a concave mirror above and below the axis and, after reflection, cross at the focus F.",
  caption:
    "A ray parallel to the principal axis passes through the principal focus after reflection. The mirror is drawn to scale: both reflected rays cross the axis within a unit of F.",
  frame: { width: 140, height: 90 },
  source: "Fig. 9.5",
  elements: [
    ...mirrorBase(),
    arrow({ x: 8, y: 55 }, r1Top, INCIDENT),
    arrow({ x: 8, y: 35 }, r1Bottom, INCIDENT),
    arrow(r1Top, add(r1Top, mul(r1TopB.out, 36)), RAY),
    arrow(r1Bottom, add(r1Bottom, mul(r1BottomB.out, 36)), RAY),
  ],
  checks: [
    { kind: "reflect", i: r1TopB.iDeg, r: r1TopB.rDeg, tolDeg: 1e-6 },
    { kind: "reflect", i: r1BottomB.iDeg, r: r1BottomB.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "reflected ray crosses the axis at F",
      actual: axisCrossX(r1Top, r1TopB.out, 45),
      expected: M_F.x,
      tol: 1,
    },
  ],
};

/* 4. Through F → parallel to the axis */
const r2Hit = add(M_C, mul(dir(15), M_R));
const r2Start = add(M_F, mul(unit(sub(M_F, r2Hit)), 34));
const r2B = bounce(r2Hit, M_C, sub(r2Hit, r2Start));

export const ruleFocus: FigureSpec = {
  id: "mirror-rule-focus-ray",
  title: "Rule 2 — a ray through F reflects parallel to the axis",
  alt: "A ray from below the axis passes through the focus F, strikes a concave mirror above the axis and leaves parallel to the principal axis.",
  caption:
    "A ray passing through the principal focus is reflected parallel to the principal axis. Exact for a parabola, it holds for a spherical mirror to the paraxial approximation.",
  frame: { width: 140, height: 90 },
  source: "Fig. 9.5",
  elements: [
    ...mirrorBase(),
    arrow(r2Start, r2Hit, INCIDENT),
    arrow(r2Hit, add(r2Hit, mul(r2B.out, 60)), RAY),
  ],
  checks: [
    { kind: "reflect", i: r2B.iDeg, r: r2B.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "reflected ray ∥ axis (degrees off)",
      actual: angleBetween(r2B.out, { x: -1, y: 0 }),
      expected: 0,
      tol: 1.5,
    },
  ],
};

/* 5. Through C → retraces its path */
const r3Start = add(M_C, mul(dir(150), 46));
const r3Hit = hitCircle(r3Start, sub(M_C, r3Start), M_C, M_R, "far");
const r3B = bounce(r3Hit, M_C, sub(r3Hit, r3Start));
const r3Dir = unit(sub(r3Hit, r3Start));
const r3Perp = { x: -r3Dir.y, y: r3Dir.x };

export const ruleCentre: FigureSpec = {
  id: "mirror-rule-centre-ray",
  title: "Rule 3 — a ray through C reflects back along itself",
  alt: "A ray aimed at the centre of curvature C strikes the mirror along the radius and returns along exactly the same line.",
  caption:
    "Along the radius the ray meets the surface at normal incidence, so i = r = 0 and the reflected ray retraces the incident path.",
  frame: { width: 140, height: 90 },
  source: "Fig. 9.5",
  elements: [
    ...mirrorBase(),
    arrow(r3Start, r3Hit, INCIDENT),
    arrow(add(r3Hit, mul(r3Perp, 1.8)), add(r3Start, mul(r3Perp, 1.8)), s("ok", 0.55, "dash")),
  ],
  checks: [
    { kind: "reflect", i: r3B.iDeg, r: r3B.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "reflected ray reverses the incident ray",
      actual: Math.abs(angleBetween(r3B.out, sub(r3Start, r3Hit))),
      expected: 0,
      tol: 1e-6,
    },
  ],
};

/* 6. At the pole → equal angles with the principal axis
 *
 * The mirror faces left, so the normal at P is the axis itself and the
 * reflected ray must stay on the left of the surface. Its end point is taken
 * from the solved direction `r4B.out` — never typed in — so the drawn ray and
 * the checked law cannot drift apart. */
const r4Start = add(M_P, mul(dir(150), 40));
const r4B = bounce(M_P, M_C, sub(M_P, r4Start));
const r4End = add(M_P, mul(r4B.out, 36));

export const rulePole: FigureSpec = {
  id: "mirror-rule-pole-ray",
  title: "Rule 4 — a ray at the pole reflects symmetrically",
  alt: "A ray striking the pole P at 30 degrees to the principal axis is reflected back into the same half-plane at 30 degrees on the other side of the axis, obeying i = r. The reflected ray stays in front of the mirror.",
  caption:
    "At the pole the principal axis is the normal, so the ray is reflected to the other side of the axis with the same angle — and stays on the object side of the surface. Tangent to the mirror at P, the axis doubles as the normal line.",
  frame: { width: 140, height: 90 },
  source: "Fig. 9.5",
  elements: [
    ...mirrorBase(),
    arrow(r4Start, M_P, INCIDENT),
    arrow(M_P, r4End, RAY),
    ...angleMark(M_P, 150, 180, { r: 9, label: "i", labelR: 12.5 }),
    ...angleMark(M_P, 180, 210, { r: 9, label: "r", labelR: 12.5 }),
  ],
  checks: [
    { kind: "reflect", i: r4B.iDeg, r: r4B.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "the drawn reflected ray follows the solved direction",
      actual: angleBetween(r4B.out, sub(r4End, M_P)),
      expected: 0,
      tol: 1e-6,
    },
    {
      kind: "value",
      label: "the reflected ray stays in front of the mirror (x < P)",
      actual: Math.sign(M_P.x - r4End.x),
      expected: 1,
      tol: 0,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 7–8. Cartesian sign convention, one figure per mirror
 *
 * Same scene as the construction figures: P at the origin of the frame, +x is
 * the direction of the incident light, +y is up. Numbers on the drawings are
 * chosen so that 1/f = 1/u + 1/v holds in distances (checked below).
 * ──────────────────────────────────────────────────────────────────────── */

type SignConventionInput = {
  id: string;
  title: string;
  heading: string;
  alt: string;
  caption: string;
  kind: "concave" | "convex";
  C: Vec;
  R: number;
  P: Vec;
  F: Vec;
  /** Base of the object arrow. */
  O: Vec;
  /** Base of the image arrow. */
  I: Vec;
  ho: number;
  hi: number;
};

/** Double-headed dimension line with its label, as used in the terms figures. */
function signFigure({ id, title, heading, alt, caption, kind, C, R, P, F, O, I, ho, hi }: SignConventionInput): FigureSpec {
  const concave = kind === "concave";
  const axisY = P.y;
  const B = { x: O.x, y: axisY + ho };
  const M = { x: I.x, y: axisY + hi };
  const u = Math.abs(P.x - O.x);
  const v = Math.abs(I.x - P.x);
  const f = Math.abs(P.x - F.x);

  return {
    id,
    title,
    alt,
    caption,
    frame: { width: 140, height: 96 },
    elements: [
      line({ x: 6, y: axisY }, { x: 136, y: axisY }, AXIS),
      ...mirrorArc(C, R, concave ? -18 : 162, concave ? 18 : 198, concave ? 1 : -1),
      arrow({ x: 16, y: axisY }, { x: 7, y: axisY }, s("ink", 0.45)),
      arrow({ x: 124, y: axisY }, { x: 133, y: axisY }, s("ink", 0.45)),
      label({ x: 7, y: axisY - 4.6 }, "−x", { math: true, size: 3, anchor: "start" }),
      label({ x: 133, y: axisY - 4.6 }, "+x", { math: true, size: 3, anchor: "end" }),
      arrow({ x: 124, y: axisY }, { x: 124, y: axisY + 10 }, s("ink", 0.45)),
      label({ x: 126.5, y: axisY + 9 }, "+y", { math: true, size: 3, anchor: "start" }),
      arrow(O, B, s("ink", 0.7)),
      arrow(I, M, s("ink", 0.7)),
      point(C),
      point(F),
      point(P),
      label({ x: C.x, y: axisY - 5.6 }, "C", { math: true, size: 3.2 }),
      label({ x: F.x, y: axisY - 5.6 }, "F", { math: true, size: 3.2 }),
      label({ x: concave ? P.x + 4 : P.x - 4, y: axisY - 9.6 }, "P", {
        math: true,
        size: 3.2,
        anchor: concave ? "start" : "end",
      }),
      label({ x: O.x - 2.5, y: axisY + ho - 2.5 }, "h_o (+)", { anchor: "end", size: 3 }),
      ...(concave
        ? [label({ x: I.x - 2.5, y: axisY + hi + 2.5 }, "h_i (−)", { anchor: "end", size: 3 })]
        : [label({ x: I.x + 3, y: axisY + 6 }, "h_i (+)", { anchor: "start", size: 3 })]),
      ...dimension(Math.min(I.x, P.x), Math.max(I.x, P.x), 44, `v (${concave ? "−" : "+"})`, 41.4),
      ...dimension(Math.min(O.x, P.x), Math.max(O.x, P.x), 34, "u (−)", 31.4),
      ...dimension(Math.min(F.x, P.x), Math.max(F.x, P.x), 24, `f (${concave ? "−" : "+"})`, 21.4),
      ...dimension(Math.min(C.x, P.x), Math.max(C.x, P.x), 14, `R (${concave ? "−" : "+"})`, 11.4),
      label({ x: concave ? 8 : 132, y: 88 }, heading, { anchor: concave ? "start" : "end", size: 3.6 }),
    ],
    checks: [
      {
        kind: "value",
        // concave: object and real image on the −x side, so both distances add
        // convex: the virtual image sits on the +x side, so v is measured the other way
        label: concave ? "1/f = 1/u + 1/v (distances)" : "1/f = 1/v − 1/u (distances)",
        actual: concave ? 1 / u + 1 / v : 1 / v - 1 / u,
        expected: 1 / f,
        tol: 1e-9,
      },
      {
        kind: "value",
        label: "|h_i/h_o| = v/u",
        actual: Math.abs(hi / ho),
        expected: v / u,
        tol: 1e-9,
      },
    ],
  };
}

export const signConventionConcave = signFigure({
  id: "sign-convention-concave",
  title: "Sign convention for a concave mirror",
  heading: "Concave mirror",
  alt: "A concave mirror with its pole P at the origin: the axis carries −x to the left and +x to the right, heights upward are +y. The object stands left of the pole with its height marked positive; the real inverted image lies further left, its height negative. u and f are negative, v is negative.",
  caption:
    "Light travels from left to right, so the object side is −x. The object, the centre of curvature and the focus all lie on that side: u, R and f are negative, and so is v for this real image. Heights above the axis are positive, so h_o is positive and the inverted h_i is negative.",
  kind: "concave",
  C: { x: 58, y: 62 },
  R: 44,
  P: { x: 102, y: 62 },
  F: { x: 80, y: 62 },
  O: { x: 69, y: 62 },
  I: { x: 36, y: 62 },
  ho: 7,
  hi: -14,
});

export const signConventionConvex = signFigure({
  id: "sign-convention-convex",
  title: "Sign convention for a convex mirror",
  heading: "Convex mirror",
  alt: "A convex mirror with its pole P at the origin. The centre of curvature and the focus sit behind the mirror, on the +x side, so R and f are positive. The object is on the −x side, and the small erect virtual image is behind the mirror, on the +x side, with a positive height.",
  caption:
    "A convex mirror puts C and F behind the surface — the +x side — so R and f are positive. Its image is virtual and erect: v and h_i are positive too, while the object keeps u negative.",
  kind: "convex",
  C: { x: 92, y: 62 },
  R: 44,
  P: { x: 48, y: 62 },
  F: { x: 70, y: 62 },
  O: { x: 18, y: 62 },
  I: { x: 60.6923076923077, y: 62 },
  ho: 14,
  hi: 5.92307692307692,
});

/* ────────────────────────────────────────────────────────────────────────
 * 9. A real image from a concave mirror (object between F and C)
 * ──────────────────────────────────────────────────────────────────────── */

const OBJ = {
  axisY: 50,
  C: { x: 58, y: 50 },
  R: 44,
  P: { x: 102, y: 50 },
  F: { x: 80, y: 50 },
  O: { x: 69, y: 50 },
  I: { x: 36, y: 50 },
  ho: 5,
  hi: -10,
};

const objB: Vec = { x: OBJ.O.x, y: OBJ.axisY + OBJ.ho };
const imgM: Vec = { x: OBJ.I.x, y: OBJ.axisY + OBJ.hi };

/** Parallel ray: leaves B horizontally, bounces at N, crosses F, meets the image tip. */
const parHit = hitCircle(objB, { x: 1, y: 0 }, OBJ.C, OBJ.R, "far");
const parB = bounce(parHit, OBJ.C, { x: 1, y: 0 });

/** Focus ray: from B through F, hits the lower half, leaves parallel to the axis. */
const focHit = hitCircle(objB, sub(OBJ.F, objB), OBJ.C, OBJ.R, "far");
const focB = bounce(focHit, OBJ.C, sub(focHit, objB));

const endAtX = (from: Vec, d: Vec, x: number): Vec => ({ x, y: from.y + ((x - from.x) / d.x) * d.y });

/** Perpendicular distance from p to the line through a along d. */
const distToLine = (p: Vec, a: Vec, d: Vec): number => {
  const u = unit(d);
  return Math.abs((p.x - a.x) * u.y - (p.y - a.y) * u.x);
};

export const concaveRealImage: FigureSpec = {
  id: "concave-real-image",
  title: "A concave mirror forms a real, inverted image",
  alt: "An object between the focus F and the centre of curvature C of a concave mirror. The ray from its tip drawn parallel to the axis reflects through F, and the ray through F reflects parallel to the axis; both reflected rays cross beyond C, where the inverted image stands.",
  caption:
    "Object between F and C, so the image falls beyond C: real, inverted and magnified. Both reflected rays were solved from the mirror surface, and they meet within a unit of the tip of the image.",
  frame: { width: 140, height: 80 },
  source: "Fig. 9.5",
  elements: [
    line({ x: 6, y: OBJ.axisY }, { x: 136, y: OBJ.axisY }, AXIS),
    ...mirrorArc(OBJ.C, OBJ.R, -18, 18, 1),
    arrow(OBJ.O, objB, s("ink", 0.7)),
    arrow(OBJ.I, imgM, s("ink", 0.7)),
    arrow(objB, parHit, INCIDENT),
    arrow(parHit, endAtX(parHit, parB.out, 10), RAY),
    arrow(objB, focHit, INCIDENT),
    arrow(focHit, { x: 26, y: focHit.y }, RAY),
    point(OBJ.C),
    point(OBJ.F),
    point(OBJ.P),
    label({ x: OBJ.C.x, y: OBJ.axisY - 5.6 }, "C", { math: true, size: 3.2 }),
    label({ x: OBJ.F.x, y: OBJ.axisY - 5.6 }, "F", { math: true, size: 3.2 }),
    label({ x: OBJ.P.x + 3, y: OBJ.axisY - 5.6 }, "P", { math: true, size: 3.2, anchor: "start" }),
    label({ x: OBJ.O.x - 2.5, y: OBJ.axisY + OBJ.ho - 2.5 }, "h_o (+)", { anchor: "end", size: 3 }),
    label({ x: OBJ.I.x - 2.5, y: OBJ.axisY + OBJ.hi + 2.5 }, "h_i (−)", { anchor: "end", size: 3 }),
    ...dimension(OBJ.I.x, OBJ.P.x, 30, "v", 27.4),
    ...dimension(OBJ.O.x, OBJ.P.x, 20, "u", 17.4),
    label({ x: 104, y: 72 }, "object between F and C", { anchor: "end", size: 2.9, color: "muted" }),
  ],
  checks: [
    { kind: "reflect", i: parB.iDeg, r: parB.rDeg, tolDeg: 1e-6 },
    { kind: "reflect", i: focB.iDeg, r: focB.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "the parallel ray crosses the axis at F",
      actual: axisCrossX(parHit, parB.out, OBJ.axisY),
      expected: OBJ.F.x,
      tol: 1,
    },
    {
      kind: "value",
      label: "the parallel ray passes through the image tip",
      actual: distToLine(imgM, parHit, parB.out),
      expected: 0,
      tol: 1,
    },
    {
      kind: "value",
      label: "the focus ray passes through the image tip",
      actual: distToLine(imgM, focHit, focB.out),
      expected: 0,
      tol: 1.5,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 10. The mirror-equation proof, drawn from the same solved scene
 *
 * Two construction rays leave B: one parallel to the axis (reflects through F
 * to M) and one at the pole (reflects to M at equal angles). The two pairs of
 * similar triangles are tinted, and every vertex carries its letter, so the
 * ladder on the page can be followed on the drawing.
 * ──────────────────────────────────────────────────────────────────────── */

/** Same object/image geometry as `OBJ`, shifted into a compact frame. */
const ME = {
  axisY: 44,
  C: { x: 64, y: 44 },
  R: 44,
  P: { x: 108, y: 44 },
  F: { x: 86, y: 44 },
  O: { x: 75, y: 44 },
  I: { x: 42, y: 44 },
  ho: 5,
  hi: -10,
};

const meB: Vec = { x: ME.O.x, y: ME.axisY + ME.ho };
const meM: Vec = { x: ME.I.x, y: ME.axisY + ME.hi };
const meHit = hitCircle(meB, { x: 1, y: 0 }, ME.C, ME.R, "far");
const meBounce = bounce(meHit, ME.C, { x: 1, y: 0 });

const poleB = bounce(ME.P, ME.C, sub(ME.P, meB));

export const mirrorEquationGeometry: FigureSpec = {
  id: "mirror-equation-geometry",
  title: "Geometry of the mirror equation",
  alt: "The mirror-equation figure. Object OB stands on the axis at O with tip B, and the inverted image IM stands at I with tip M. Two construction rays leave B: one parallel to the axis strikes the mirror at N and reflects through the focus F to M; one goes to the pole P and reflects to M at equal angles. The triangles OBP and IMP are shaded, and so are FPN and FIM.",
  caption:
    "Two construction rays from B meet again at M, so both pairs of triangles are similar: ΔOBP and ΔIMP about the pole, ΔFPN and ΔFIM about the focus. The drop from N lands on the pole (paraxial rays), which makes PN = OB.",
  frame: { width: 140, height: 64 },
  source: "Fig. 9.5",
  elements: [
    // tinted pairs first, so every line sits on top
    { kind: "poly", points: [ME.O, meB, ME.P], closed: true, stroke: null, fill: "ray" },
    { kind: "poly", points: [ME.I, meM, ME.P], closed: true, stroke: null, fill: "ray" },
    line({ x: 4, y: ME.axisY }, { x: 136, y: ME.axisY }, AXIS),
    ...mirrorArc(ME.C, ME.R, -18, 18, 1),
    arrow(ME.O, meB, s("ink", 0.8)),
    arrow(ME.I, meM, s("ink", 0.8)),
    // ray 1: parallel to the axis, then through F to the image tip
    arrow(meB, meHit, INCIDENT),
    arrow(meHit, endAtX(meHit, meBounce.out, 28), RAY),
    // ray 2: to the pole, then back to the same image tip
    arrow(meB, ME.P, s("hot", 0.55)),
    arrow(ME.P, meM, s("ray", 0.55)),
    // the drop from N to the axis, which the paraxial approximation lands on P
    line(meHit, ME.P, s("muted", 0.4, "dash")),
    point(ME.O),
    point(ME.I),
    point(ME.C),
    point(ME.F),
    point(ME.P),
    label({ x: meHit.x - 2.2, y: meHit.y + 3.2 }, "N", { math: true, size: 3.2, anchor: "end" }),
    label({ x: meB.x + 2.4, y: meB.y + 3 }, "B", { math: true, size: 3.2, anchor: "start" }),
    label({ x: ME.O.x + 2.4, y: ME.axisY - 3.2 }, "O", { math: true, size: 3.2, anchor: "start" }),
    label({ x: ME.I.x - 3.2, y: ME.axisY + 2.4 }, "I", { math: true, size: 3.2, anchor: "end" }),
    label({ x: ME.I.x - 3.2, y: meM.y + 2.4 }, "M", { math: true, size: 3.2, anchor: "end" }),
    label({ x: ME.C.x, y: ME.axisY + 3.6 }, "C", { math: true, size: 3.2 }),
    label({ x: ME.F.x, y: ME.axisY - 5.6 }, "F", { math: true, size: 3.2 }),
    label({ x: ME.P.x + 2.4, y: ME.axisY - 2.8 }, "P", { math: true, size: 3.2, anchor: "start" }),
    label({ x: 5, y: 60 }, "ΔOBP ~ ΔIMP    ·    ΔFPN ~ ΔFIM", { anchor: "start", size: 3.4 }),
    label({ x: 5, y: 24 }, "OP = u    IP = v    FP = f", { anchor: "start", size: 2.9, color: "muted" }),
    label({ x: 5, y: 17 }, "PN = OB (paraxial)", { anchor: "start", size: 2.9, color: "muted" }),
  ],
  checks: [
    { kind: "reflect", i: meBounce.iDeg, r: meBounce.rDeg, tolDeg: 1e-6 },
    { kind: "reflect", i: poleB.iDeg, r: poleB.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "the drop from N meets the axis at P",
      actual: Math.abs(meHit.x - ME.P.x),
      expected: 0,
      tol: 0.5,
    },
    {
      kind: "value",
      label: "PN = OB (heights equal)",
      actual: Math.abs(meHit.y - ME.P.y),
      expected: ME.ho,
      tol: 0.4,
    },
    {
      kind: "value",
      label: "the parallel ray passes through the image tip",
      actual: distToLine(meM, meHit, meBounce.out),
      expected: 0,
      tol: 1,
    },
    {
      kind: "value",
      label: "the pole ray passes through the image tip",
      actual: distToLine(meM, ME.P, poleB.out),
      expected: 0,
      tol: 0.6,
    },
    {
      kind: "value",
      label: "OB/IM = OP/IP (the pole pair)",
      actual: ME.ho / Math.abs(ME.hi),
      expected: (ME.P.x - ME.O.x) / (ME.P.x - ME.I.x),
      tol: 0.01,
    },
    {
      kind: "value",
      label: "IM/PN = IF/FP (the focus pair)",
      actual: Math.abs(ME.hi) / Math.abs(meHit.y - ME.P.y),
      expected: Math.abs(ME.F.x - ME.I.x) / Math.abs(ME.F.x - ME.P.x),
      tol: 0.06,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0. A ray against a beam (9.1: the ray picture)
 * ──────────────────────────────────────────────────────────────────────── */

const RB_RAY_FROM: Vec = { x: 8, y: 26 };
const RB_RAY_TO: Vec = { x: 58, y: 26 };
const RB_SRC: Vec = { x: 82, y: 26 };
const RB_FAN = [-28, -14, 0, 14, 28] as const;
const RB_LEN = 40;
const RB_TIPS: Vec[] = RB_FAN.map((a) => polar(RB_SRC, a, RB_LEN));

export const rayAndBeam: FigureSpec = {
  id: "ray-and-beam",
  title: "A ray is one path; a beam is a bundle of rays",
  alt:
    "Left: a single straight arrow labelled 'a ray'. Right: a point source S sending five straight arrows fanning out to the right, labelled 'a beam' — a bundle of such rays.",
  caption:
    "A ray is the straight-line path a light wave is treated as taking. A beam is a bundle of rays: five are drawn from the source S, and every one of them is a straight line.",
  frame: { width: 132, height: 68 },
  elements: [
    arrow(RB_RAY_FROM, RB_RAY_TO, RAY),
    label({ x: 8, y: 38 }, "a ray", { anchor: "start", size: 3, color: "muted" }),
    label({ x: 33, y: 14 }, "one straight path", { size: 2.7, color: "muted" }),
    line({ x: 68, y: 6 }, { x: 68, y: 62 }, GUIDE),
    ...RB_TIPS.map((tip, i) => arrow(RB_SRC, tip, i === 2 ? RAY : s("ray", 0.4))),
    point(RB_SRC, 1.3, "ink"),
    label({ x: 77, y: 26 }, "S", { anchor: "end", math: true, size: 3.2 }),
    label({ x: 98, y: 58 }, "a beam", { size: 3, color: "muted" }),
    label({ x: 98, y: 50 }, "a bundle of rays", { size: 2.7, color: "muted" }),
  ],
  checks: [
    {
      kind: "value",
      label: "adjacent rays in the fan are 14° apart",
      actual: angleBetween(sub(RB_TIPS[3], RB_SRC), sub(RB_TIPS[2], RB_SRC)),
      expected: 14,
      tol: 1e-6,
    },
    {
      kind: "value",
      label: "the middle ray is horizontal",
      actual: angleBetween(sub(RB_TIPS[2], RB_SRC), { x: 1, y: 0 }),
      expected: 0,
      tol: 1e-6,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0b. Refraction at a plane surface (9.3: the direction changes)
 * ──────────────────────────────────────────────────────────────────────── */

const RS_DEG = Math.PI / 180;
const RS_P: Vec = { x: 70, y: 34 };
const RS_I = 45;
const RS_N2 = 1.5;
const RS_R = (Math.asin(Math.sin(RS_I * RS_DEG) / RS_N2) / RS_DEG) as number;
const RS_IN: Vec = { x: RS_P.x - 30 * Math.sin(RS_I * RS_DEG), y: RS_P.y + 30 * Math.cos(RS_I * RS_DEG) };
const RS_OUT: Vec = { x: RS_P.x + 30 * Math.sin(RS_R * RS_DEG), y: RS_P.y - 30 * Math.cos(RS_R * RS_DEG) };
const RS_BACK: Vec = { x: RS_P.x + 22 * Math.sin(RS_I * RS_DEG), y: RS_P.y + 22 * Math.cos(RS_I * RS_DEG) };

export const refractionAtSurface: FigureSpec = {
  id: "refraction-plane-direction",
  title: "Refraction at a plane surface: the ray bends towards the normal",
  alt:
    "A ray arriving from the upper left at 45 degrees to the normal bends at the interface to 28 degrees from the normal inside the denser medium, while a weak reflected ray leaves at 45 degrees.",
  caption:
    "The refracted ray bends towards the normal because the lower medium is optically denser. The weak ray reflected back into the first medium leaves at the same angle it arrived with, i = r.",
  frame: { width: 132, height: 70 },
  elements: [
    body([{ x: 0, y: 0 }, { x: 132, y: 0 }, { x: 132, y: RS_P.y }, { x: 0, y: RS_P.y }], "glass"),
    line({ x: 0, y: RS_P.y }, { x: 132, y: RS_P.y }, s("ink", 1.2)),
    ...normal(RS_P, 90, 24, { text: "normal" }),
    arrow(RS_IN, RS_P, INCIDENT),
    arrow(RS_P, RS_BACK, REFLECTED),
    arrow(RS_P, RS_OUT, EMERGENT),
    ...angleMark(RS_P, 90, 135, { r: 10, label: "i", labelR: 14 }),
    ...angleMark(RS_P, 270, 270 + RS_R, { r: 10, label: "r", labelR: 14, color: "ok" }),
    label({ x: 6, y: 62 }, "medium 1", { anchor: "start", size: 3, color: "muted" }),
    label({ x: 6, y: 14 }, "medium 2", { anchor: "start", size: 3, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: RS_I, r: RS_R, n1: 1, n2: RS_N2 },
    { kind: "reflect", i: RS_I, r: RS_I },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0c. Apparent depth (9.3: the bottom of a tank looks raised)
 * ──────────────────────────────────────────────────────────────────────── */

const AD_SURFACE = 46;
const AD_O: Vec = { x: 78, y: 10 };
const AD_I = 22;
const AD_N = 4 / 3;
const AD_R = (Math.asin(AD_N * Math.sin(AD_I * RS_DEG)) / RS_DEG) as number;
const AD_P: Vec = {
  x: AD_O.x + (AD_SURFACE - AD_O.y) * Math.tan(AD_I * RS_DEG),
  y: AD_SURFACE,
};
const AD_OUT: Vec = { x: AD_P.x + 24 * Math.sin(AD_R * RS_DEG), y: AD_P.y + 24 * Math.cos(AD_R * RS_DEG) };
const AD_IMAGE: Vec = {
  x: AD_O.x,
  y: AD_P.y - (AD_P.x - AD_O.x) / Math.tan(AD_R * RS_DEG),
};

export const apparentDepth: FigureSpec = {
  id: "apparent-depth-water",
  title: "Apparent depth: the bottom of the tank is seen higher than it is",
  alt:
    "A point O at the bottom of a tank sends a ray to the surface, where it bends away from the normal into the air; produced backwards, that ray meets the vertical through O at O′, above O.",
  caption:
    "The ray from O leaves the water and bends away from the normal. The eye traces it backwards and places the bottom at O′, shallower than O. For viewing near the normal, apparent depth is real depth divided by the refractive index.",
  frame: { width: 132, height: 78 },
  source: "Fig. 9.10",
  elements: [
    body([{ x: 44, y: 0 }, { x: 132, y: 0 }, { x: 132, y: AD_SURFACE }, { x: 44, y: AD_SURFACE }], "glass"),
    line({ x: 44, y: AD_SURFACE }, { x: 132, y: AD_SURFACE }, s("ink", 1.2)),
    ...normal(AD_P, 90, 26),
    arrow(AD_O, AD_P, RAY),
    arrow(AD_P, AD_OUT, EMERGENT),
    line(AD_P, AD_IMAGE, VIRTUAL),
    point(AD_O, 1.2, "ink"),
    point(AD_IMAGE, 1.2, "warn"),
    label({ x: 72, y: 10 }, "O", { anchor: "end", math: true, size: 3 }),
    label({ x: 72, y: AD_IMAGE.y + 0.8 }, "O′", { anchor: "end", math: true, size: 3, color: "warn" }),
    ...angleMark(AD_P, 270 - AD_I, 270, { r: 6, label: "i", labelR: 14 }),
    ...angleMark(AD_P, 90 - AD_R, 90, { r: 6, label: "r", labelR: 13, color: "ok" }),
    label({ x: 50, y: 70 }, "air", { anchor: "start", size: 3, color: "muted" }),
    label({ x: 50, y: 26 }, "water", { anchor: "start", size: 3, color: "muted" }),
    label({ x: 126, y: 71 }, "to the eye", { anchor: "end", size: 2.7, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: AD_I, r: AD_R, n1: AD_N, n2: 1 },
    {
      kind: "value",
      label: "O′ is shallower than O",
      actual: AD_SURFACE - AD_IMAGE.y < AD_SURFACE - AD_O.y ? 1 : 0,
      expected: 1,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0d. A parallel-sided slab: no deviation, only a side-step (Fig. 9.9)
 * ──────────────────────────────────────────────────────────────────────── */

const SLAB: RefractingBody = {
  n: 1.5,
  id: "slab-9-3",
  polygon: [vec(48, 14), vec(88, 14), vec(88, 54), vec(48, 54)],
};
const SLAB_FROM: Vec = { x: 16, y: 68 };
const SLAB_INCIDENCE = -30;
const SLAB_TRACE = traceRay({ from: SLAB_FROM, angleDeg: SLAB_INCIDENCE, bodies: [SLAB], tail: 26 });
const SLAB_IN = SLAB_TRACE.events[0];
const SLAB_OUT = SLAB_TRACE.events[1];
const SLAB_INSIDE = angleOf(SLAB_TRACE.points[1], SLAB_TRACE.points[2]);

export const slabShift: FigureSpec = {
  id: "slab-lateral-shift-9-3",
  title: "Glass slab: parallel emergent ray, laterally shifted",
  alt:
    "A ray enters a rectangular glass slab at 30 degrees to the normal, bends to 19.5 degrees inside, leaves parallel to its original direction but shifted sideways; the un-deviated path is dashed.",
  caption:
    "Two refractions, equal and opposite, so r₂ = i₁: the emergent ray is parallel to the incident ray — not deviated, only displaced sideways. The dashed line is where it would have gone with no slab.",
  frame: { width: 132, height: 84 },
  source: "Fig. 9.9",
  elements: [
    body(SLAB.polygon),
    arrow(SLAB_TRACE.points[0], SLAB_TRACE.points[1], INCIDENT),
    arrow(SLAB_TRACE.points[1], SLAB_TRACE.points[2], s("ray", 0.5)),
    arrow(SLAB_TRACE.points[2], SLAB_TRACE.points[3], EMERGENT),
    line(SLAB_IN.at, add(SLAB_IN.at, mul(dir(SLAB_INCIDENCE), 58)), VIRTUAL),
    ...normal(SLAB_IN.at, 0, 12),
    ...normal(SLAB_OUT.at, 0, 10),
    ...angleMark(SLAB_IN.at, angleOf(SLAB_IN.at, SLAB_FROM), 180, { r: 10, label: "i", labelR: 13.5 }),
    ...angleMark(SLAB_IN.at, SLAB_INSIDE, 0, { r: 6, label: "r", labelR: 13 }),
    label({ x: 8, y: 78 }, "air", { anchor: "start", size: 3.2, color: "muted" }),
    label({ x: 68, y: 27 }, "glass", { anchor: "middle", size: 3.2, color: "muted" }),
    label({ x: 68, y: 21 }, "n = 1.5", { anchor: "middle", size: 2.9, color: "muted" }),
    label({ x: 128, y: 15 }, "∥ incident", { anchor: "end", size: 2.8, color: "ok" }),
  ],
  checks: [
    { kind: "snell", i: 30, r: 19.47, n2: 1.5 },
    {
      kind: "value",
      label: "emergent ∥ incident",
      actual: Math.abs(SLAB_OUT.outDeg - SLAB_IN.inDeg),
      expected: 0,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0e. Total internal reflection: one source, four angles (Fig. 9.11)
 * ──────────────────────────────────────────────────────────────────────── */

const TI_N = 1.33;
const TI_SURF = 58;
const TI_A: Vec = { x: 24, y: 12 };
const TI_IC_DEG = criticalAngleDeg(TI_N, 1)!;
const TI_ANGLES: readonly number[] = [20, 35, TI_IC_DEG, 60];

const TI_RAYS = TI_ANGLES.map((i) => {
  const P: Vec = { x: TI_A.x + (TI_SURF - TI_A.y) * Math.tan(i * RS_DEG), y: TI_SURF };
  const d = sub(P, TI_A);
  return { i, P, d, out: refract(d, { x: 0, y: 1 }, TI_N, 1), back: reflect(d, { x: 0, y: 1 }) };
});

/** The ray that grazes: its emergent direction lies along the interface. */
const TI_GRAZE = TI_RAYS[2];
const TI_CRIT = TI_GRAZE.out.angleOfRefraction;

export const totalInternalReflection: FigureSpec = {
  id: "total-internal-reflection-water",
  title: "Rays from A: partial refraction, grazing, then total internal reflection",
  alt:
    "Four rays leave a point A under water at increasing angles to the normal. The first two split into a refracted ray in the air and a weaker reflected ray in the water; the third, at the critical angle, sends its refracted ray along the surface; the fourth is entirely reflected back into the water.",
  caption:
    "Rays from A in water, at increasing angles of incidence. The first two split — part refracted into the air, part reflected back into the water. At the critical angle the refracted ray grazes the surface. Past it there is no refracted ray at all: total internal reflection.",
  frame: { width: 140, height: 84 },
  source: "Fig. 9.11",
  elements: [
    body([{ x: 8, y: 8 }, { x: 136, y: 8 }, { x: 136, y: TI_SURF }, { x: 8, y: TI_SURF }], "glass"),
    line({ x: 8, y: TI_SURF }, { x: 136, y: TI_SURF }, s("ink", 1.2)),
    ...TI_RAYS.map((ray) => arrow(TI_A, ray.P, RAY)),
    ...TI_RAYS.map((ray) => {
      const end = add(ray.P, mul(ray.back, 15));
      return arrow(ray.P, end, ray.out.tir ? s("hot", 0.7) : REFLECTED);
    }),
    ...TI_RAYS.map((ray) =>
      ray.out.dir ? [arrow(ray.P, add(ray.P, mul(ray.out.dir, 22)), EMERGENT)] : [],
    ).flat(),
    point(TI_A, 1.3, "ink"),
    label({ x: 19, y: 12 }, "A", { anchor: "end", math: true, size: 3.2 }),
    label({ x: 12, y: 52 }, "water", { anchor: "start", size: 3.2, color: "muted" }),
    label({ x: 12, y: 74 }, "air", { anchor: "start", size: 3.2, color: "muted" }),
    ...angleMark(TI_GRAZE.P, 270 - TI_GRAZE.out.angleOfIncidence, 270, { r: 7, label: "i_c", labelR: 11 }),
    label({ x: 96, y: 63 }, "r = 90°", { anchor: "middle", size: 2.8, color: "ok" }),
    label({ x: 134, y: 26 }, "totally reflected", { anchor: "end", size: 2.8, color: "hot" }),
  ],
  checks: [
    { kind: "snell", i: 35, r: TI_RAYS[1].out.angleOfRefraction, n1: TI_N, n2: 1 },
    {
      kind: "value",
      label: "the grazing ray emerges at 90°",
      actual: TI_CRIT,
      expected: 90,
      tol: 0.2,
    },
    {
      kind: "value",
      label: "the fourth ray is totally internally reflected",
      actual: TI_RAYS[3].out.tir ? 1 : 0,
      expected: 1,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "the critical angle is asin(1 / 1.33)",
      actual: TI_GRAZE.out.angleOfIncidence,
      expected: TI_IC_DEG,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0f. Optical fibre: total internal reflection at every wall (Fig. 9.14)
 * ──────────────────────────────────────────────────────────────────────── */

const FB_TOP = 33;
const FB_BOT = 23;
const FB_X0 = 24;
const FB_X1 = 120;

const FB_PTS: Vec[] = (() => {
  let p: Vec = { x: FB_X0, y: 28 };
  let d = dir(20);
  const out: Vec[] = [p];
  for (let bounce = 0; bounce < 6; bounce += 1) {
    const wall = d.y > 0 ? FB_TOP : FB_BOT;
    const t = (wall - p.y) / d.y;
    const hit: Vec = { x: p.x + d.x * t, y: wall };
    if (hit.x >= FB_X1) {
      out.push({ x: FB_X1, y: p.y + ((FB_X1 - p.x) * d.y) / d.x });
      break;
    }
    out.push(hit);
    p = hit;
    d = reflect(d, { x: 0, y: 1 });
  }
  return out;
})();

export const opticalFibre: FigureSpec = {
  id: "optical-fibre-tir",
  title: "Optical fibre: the ray is totally reflected at every wall",
  alt:
    "A fibre drawn as a cladding tube with a core inside it. A ray entering at the left zig-zags down the core, reflecting off the core wall at every bounce, and leaves at the right end.",
  caption:
    "Core inside cladding, the core the denser of the two. A ray launched at a suitable angle strikes each core wall past the critical angle, is totally reflected, and so travels the whole length with no appreciable loss.",
  frame: { width: 140, height: 58 },
  source: "Fig. 9.14",
  elements: [
    body(
      [
        { x: FB_X0 - 4, y: FB_BOT - 7 },
        { x: FB_X1 + 4, y: FB_BOT - 7 },
        { x: FB_X1 + 4, y: FB_TOP + 7 },
        { x: FB_X0 - 4, y: FB_TOP + 7 },
      ],
      "glass",
    ),
    line({ x: FB_X0 - 4, y: FB_TOP }, { x: FB_X1 + 4, y: FB_TOP }, THIN),
    line({ x: FB_X0 - 4, y: FB_BOT }, { x: FB_X1 + 4, y: FB_BOT }, THIN),
    { kind: "poly", points: FB_PTS, stroke: RAY },
    arrow(FB_PTS[FB_PTS.length - 2], FB_PTS[FB_PTS.length - 1], RAY),
    ...FB_PTS.slice(1, -1).map((hit) => point(hit, 0.8, "ok")),
    label({ x: FB_X0 - 8, y: FB_TOP + 3 }, "cladding", { anchor: "end", size: 2.9, color: "muted" }),
    label({ x: FB_X0 - 8, y: 28 }, "core", { anchor: "end", size: 2.9, color: "muted" }),
    label({ x: FB_X1 + 4, y: FB_TOP + 12 }, "n core > n cladding", { anchor: "end", size: 2.8, color: "muted" }),
    label({ x: FB_X1 + 4, y: FB_BOT - 12 }, "totally reflected at each wall", {
      anchor: "end",
      size: 2.8,
      color: "ok",
    }),
  ],
  checks: [
    {
      kind: "value",
      label: "every bounce stays inside the core",
      actual: FB_PTS.every((p) => p.y >= FB_BOT - 1e-9 && p.y <= FB_TOP + 1e-9) ? 1 : 0,
      expected: 1,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "the ray leaves at the far end",
      actual: Number(FB_PTS[FB_PTS.length - 1].x.toFixed(6)),
      expected: FB_X1,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0g. The three construction rays, convex lens (Fig. 9.17a)
 *
 * Object at u = −2f, so v = +2f and m = −1: every ray below is a straight
 * line through the object point, the lens plane and the image point, and the
 * spec's checks re-derive u, v and f with the lens equation.
 * ──────────────────────────────────────────────────────────────────────── */

const CV_AXIS = 34;
const CV_X = 44;
const CV_F = 18;
const CV_OBJ: Vec = { x: 8, y: 42 };
const CV_U = CV_OBJ.x - CV_X; // −36
const CV_V = (1 / (1 / CV_F + 1 / CV_U)) as number; // +36
const CV_IMG: Vec = { x: CV_X + CV_V, y: CV_AXIS - (CV_OBJ.y - CV_AXIS) };
const CV_F1: Vec = { x: CV_X - CV_F, y: CV_AXIS };
const CV_F2: Vec = { x: CV_X + CV_F, y: CV_AXIS };
/** Where a line from `from` through `through` crosses the plane x = `atX`. */
const atPlane = (from: Vec, through: Vec, atX: number): Vec => ({
  x: atX,
  y: from.y + ((atX - from.x) * (through.y - from.y)) / (through.x - from.x),
});

export const convexLensRays: FigureSpec = {
  id: "convex-lens-three-rays",
  title: "Convex lens: three construction rays meet at the image",
  alt:
    "A convex lens on an axis with an object arrow on the left. Three rays leave the object's tip: one parallel to the axis that bends through the second focus, one through the optical centre that goes straight on, and one through the first focus that leaves parallel. All three meet at the inverted image on the right.",
  caption:
    "Object at twice the focal length, so the image is real, inverted and the same size. The three construction rays meet at one point — that point is the image.",
  frame: { width: 96, height: 64 },
  source: "Fig. 9.17",
  elements: [
    line({ x: 4, y: CV_AXIS }, { x: 92, y: CV_AXIS }, AXIS),
    { kind: "poly", points: lensOutline({ x: CV_X, y: CV_AXIS }, 16, 3.4), stroke: INK, fill: "glass" },
    arrow({ x: CV_OBJ.x, y: CV_AXIS }, CV_OBJ, INK),
    arrow({ x: CV_IMG.x, y: CV_AXIS }, CV_IMG, EMERGENT),
    // ray 1: parallel in, through F′
    arrow(CV_OBJ, { x: CV_X, y: CV_OBJ.y }, RAY),
    arrow({ x: CV_X, y: CV_OBJ.y }, CV_IMG, RAY),
    // ray 2: through the optical centre, undeviated
    arrow(CV_OBJ, { x: CV_X, y: CV_AXIS }, s("ray", 0.5)),
    arrow({ x: CV_X, y: CV_AXIS }, CV_IMG, RAY),
    // ray 3: through F, out parallel
    arrow(CV_OBJ, { x: CV_X, y: CV_IMG.y }, s("ray", 0.5)),
    arrow({ x: CV_X, y: CV_IMG.y }, CV_IMG, RAY),
    point(CV_F1, 0.9, "ink"),
    point(CV_F2, 0.9, "ink"),
    label({ x: CV_OBJ.x, y: CV_AXIS - 6 }, "O", { anchor: "middle", math: true, size: 3 }),
    label({ x: CV_F1.x, y: CV_AXIS - 5 }, "F", { anchor: "middle", math: true, size: 3 }),
    label({ x: CV_F2.x, y: CV_AXIS - 5 }, "F′", { anchor: "middle", math: true, size: 3 }),
    label({ x: CV_IMG.x, y: CV_IMG.y - 4.8 }, "I", { anchor: "middle", math: true, size: 3.2, color: "ok" }),
  ],
  checks: [
    {
      kind: "value",
      label: "lens equation in Cartesian signs: 1/v − 1/u = 1/f",
      actual: 1 / CV_V - 1 / CV_U,
      expected: 1 / CV_F,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "the parallel ray heads for F′",
      actual: atPlane({ x: CV_X, y: CV_OBJ.y }, CV_F2, CV_IMG.x).y,
      expected: CV_IMG.y,
      tol: 1e-6,
    },
    {
      kind: "value",
      label: "the ray through the centre reaches the image point",
      actual: atPlane(CV_OBJ, { x: CV_X, y: CV_AXIS }, CV_IMG.x).y,
      expected: CV_IMG.y,
      tol: 1e-6,
    },
    {
      kind: "value",
      label: "the ray through F passes through F₁ and leaves level with the image",
      actual: atPlane(CV_OBJ, CV_F1, CV_X).y,
      expected: CV_IMG.y,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0h. The same three rays, concave lens (Fig. 9.17b)
 * ──────────────────────────────────────────────────────────────────────── */

const CC_AXIS = 30;
const CC_X = 44;
const CC_F = -30;
const CC_OBJ: Vec = { x: 6, y: 44 };
const CC_U = CC_OBJ.x - CC_X; // −38
const CC_V = (1 / (1 / CC_F + 1 / CC_U)) as number; // −15.4
const CC_H = CC_OBJ.y - CC_AXIS;
const CC_IMG: Vec = { x: CC_X + CC_V, y: CC_AXIS + (CC_V / CC_U) * CC_H };
/** The focus a parallel ray appears to diverge from: on the incident side. */
const CC_FRONT: Vec = { x: CC_X + CC_F, y: CC_AXIS };
/** The focus a ray must aim at to emerge parallel: on the far side. */
const CC_BACK: Vec = { x: CC_X - CC_F, y: CC_AXIS };
/** Where the ray aimed at F′ crosses the lens plane — level with the image. */
const CC_HIT = atPlane(CC_OBJ, CC_BACK, CC_X);
/** A point on the ray that leaves the lens parallel to the axis, far side. */
const CC_THROUGH = atPlane(CC_FRONT, { x: CC_X, y: CC_OBJ.y }, 86);

export const concaveLensRays: FigureSpec = {
  id: "concave-lens-three-rays",
  title: "Concave lens: the same three rays, all virtual",
  alt:
    "A concave lens on an axis with an object arrow on the left. One ray parallel to the axis bends away from it, as if it came from the near focus; one through the optical centre goes straight on; one aimed at the far focus leaves parallel. Their backward extensions meet at the virtual image, smaller and upright.",
  caption:
    "A concave lens produces a virtual, erect, diminished image. The emergent rays themselves never meet; their backward extensions do.",
  frame: { width: 96, height: 72 },
  source: "Fig. 9.17",
  elements: [
    line({ x: 4, y: CC_AXIS }, { x: 92, y: CC_AXIS }, AXIS),
    { kind: "poly", points: lensOutline({ x: CC_X, y: CC_AXIS }, 16, -2.6), stroke: INK, fill: "glass" },
    arrow({ x: CC_OBJ.x, y: CC_AXIS }, CC_OBJ, INK),
    arrow({ x: CC_IMG.x, y: CC_AXIS }, CC_IMG, VIRTUAL),
    // ray 1: parallel in, out as if from F
    arrow(CC_OBJ, { x: CC_X, y: CC_OBJ.y }, RAY),
    arrow({ x: CC_X, y: CC_OBJ.y }, CC_THROUGH, RAY),
    line({ x: CC_X, y: CC_OBJ.y }, { x: 12, y: atPlane(CC_FRONT, { x: CC_X, y: CC_OBJ.y }, 12).y }, GUIDE),
    // ray 2: through the optical centre, undeviated
    arrow(CC_OBJ, { x: CC_X, y: CC_AXIS }, s("ray", 0.5)),
    arrow({ x: CC_X, y: CC_AXIS }, { x: 78, y: atPlane(CC_OBJ, { x: CC_X, y: CC_AXIS }, 78).y }, RAY),
    // ray 3: aimed at F′, out parallel
    arrow(CC_OBJ, CC_HIT, s("ray", 0.5)),
    arrow(CC_HIT, { x: 86, y: CC_HIT.y }, RAY),
    line(CC_HIT, { x: 20, y: CC_HIT.y }, GUIDE),
    point(CC_FRONT, 0.9, "ink"),
    point(CC_BACK, 0.9, "ink"),
    label({ x: CC_OBJ.x, y: CC_AXIS - 6 }, "O", { anchor: "middle", math: true, size: 3 }),
    label({ x: CC_FRONT.x, y: CC_AXIS - 5 }, "F", { anchor: "middle", math: true, size: 3 }),
    label({ x: CC_BACK.x, y: CC_AXIS - 5 }, "F′", { anchor: "middle", math: true, size: 3 }),
    label({ x: CC_IMG.x, y: CC_IMG.y + 4.2 }, "I", { anchor: "middle", math: true, size: 3.2, color: "warn" }),
  ],
  checks: [
    {
      kind: "value",
      label: "lens equation in Cartesian signs: 1/v − 1/u = 1/f",
      actual: 1 / CC_V - 1 / CC_U,
      expected: 1 / CC_F,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "the incident ray through the centre points at I",
      actual: atPlane(CC_OBJ, { x: CC_X, y: CC_AXIS }, CC_IMG.x).y,
      expected: CC_IMG.y,
      tol: 1e-6,
    },
    {
      kind: "value",
      label: "the ray aimed at F′ leaves the lens level with I",
      actual: CC_HIT.y,
      expected: CC_IMG.y,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0i. The prism: a ray through ABC (Fig. 9.21)
 *
 * The path is traced by `traceRay`, so i, r₁, r₂ and e fall out of Snell's law
 * instead of being drawn by eye. The two normals are solved to their crossing
 * N — that is the quadrilateral AQNR the derivation turns on.
 * ──────────────────────────────────────────────────────────────────────── */

const PR_A = vec(32, 58);
const PR_B = vec(14, 26);
const PR_C = vec(50, 26);
const PR_INDEX = 1.5;
const PR_BODY: RefractingBody = { polygon: [PR_A, PR_B, PR_C], n: PR_INDEX, id: "prism" };
const PR_CENTRE = mul(add(add(PR_A, PR_B), PR_C), 1 / 3);

/** Outward normal of a face, from the face's direction and a point on it. */
function faceNormalDeg(at: Vec, faceDirDeg: number): number {
  const a = faceDirDeg + 90;
  const b = faceDirDeg - 90;
  return dot(dir(a), sub(at, PR_CENTRE)) > 0 ? a : b;
}

/** Where the line p + t·dir(aDeg) meets q + s·dir(bDeg). */
function meet(p: Vec, aDeg: number, q: Vec, bDeg: number): Vec | null {
  const u = dir(aDeg);
  const w = dir(bDeg);
  const det = u.x * w.y - u.y * w.x;
  if (Math.abs(det) < 1e-9) return null;
  const t = ((q.x - p.x) * w.y - (q.y - p.y) * w.x) / det;
  return add(p, mul(u, t));
}

const PR_PATH = traceRay({ from: vec(2, 30.5), angleDeg: 15.6, bodies: [PR_BODY], tail: 40 });
const PR_P = PR_PATH.points[0];
const PR_Q = PR_PATH.points[1];
const PR_R = PR_PATH.points[2];
const PR_S = PR_PATH.points[3];
const PR_AT_Q = PR_PATH.events[0];
const PR_AT_R = PR_PATH.events[1];
const PR_I = PR_AT_Q.angleOfIncidence;
const PR_R1 = PR_AT_Q.angleAfter;
const PR_R2 = PR_AT_R.angleOfIncidence;
const PR_E = PR_AT_R.angleAfter;
const PR_APEX = angleBetween(sub(PR_B, PR_A), sub(PR_C, PR_A));
const PR_DEV = PR_I + PR_E - PR_APEX;
const PR_NQ = faceNormalDeg(PR_Q, angleOf(PR_A, PR_B));
const PR_NR = faceNormalDeg(PR_R, angleOf(PR_A, PR_C));
/** N — where the normals at Q and at R meet. */
const PR_NPT = meet(PR_Q, PR_NQ, PR_R, PR_NR + 180) ?? mul(add(PR_B, PR_C), 0.5);
const PR_ARC_I = arcPair(PR_NQ, PR_AT_Q.inDeg + 180);
const PR_ARC_R1 = arcPair(PR_NQ + 180, PR_AT_Q.outDeg);
const PR_ARC_R2 = arcPair(PR_AT_R.inDeg + 180, PR_NR + 180);
const PR_ARC_E = arcPair(PR_AT_R.outDeg, PR_NR);
const PR_ARC_D = arcPair(PR_AT_R.outDeg, PR_AT_Q.inDeg);
const midOf = (a: [number, number]) => (a[0] + a[1]) / 2;

/** The two angles as a short CCW arc: both wrapped, the far one pulled within 180°. */
function arcPair(aDeg: number, bDeg: number): [number, number] {
  const a = ((aDeg % 360) + 360) % 360;
  let b = ((bDeg % 360) + 360) % 360;
  if (b - a > 180) b -= 360;
  if (a - b > 180) b += 360;
  return [a, b];
}

export const prismPath: FigureSpec = {
  id: "prism-ray-path",
  title: "A ray through a glass prism",
  alt:
    "An equilateral glass prism ABC. A ray PQ enters face AB, is refracted along QR inside the glass and leaves face AC as RS. The dashed normals at Q and R meet inside the prism at N. The angles i, r₁, r₂ and e are marked at the two faces, and the emergent ray leaves the incident direction by the deviation d.",
  caption:
    "The ray bends towards the base at each face. The dashed normals at Q and R meet at N, which is what makes r₁ + r₂ = A.",
  frame: { width: 96, height: 72 },
  source: "Fig. 9.21",
  elements: [
    body([PR_A, PR_B, PR_C], "glass"),
    arrow(PR_P, PR_Q, INCIDENT),
    arrow(PR_Q, PR_R, RAY),
    arrow(PR_R, PR_S, EMERGENT),
    line(add(PR_Q, mul(dir(PR_NQ), 6)), PR_NPT, GUIDE),
    line(add(PR_R, mul(dir(PR_NR), 6)), PR_NPT, GUIDE),
    rightAngle(PR_Q, angleOf(PR_A, PR_B), PR_NQ, 2.4),
    rightAngle(PR_R, angleOf(PR_A, PR_C), PR_NR, 2.4),
    ...angleMark(PR_Q, ...PR_ARC_I, { r: 6, label: "i", labelR: 9.6 }),
    ...angleMark(PR_Q, ...PR_ARC_R1, { r: 7.5 }),
    label(polar(PR_Q, midOf(PR_ARC_R1), 11), "r", { sub: "1", anchor: "middle", math: true, size: 3 }),
    ...angleMark(PR_R, ...PR_ARC_R2, { r: 6 }),
    label(polar(PR_R, midOf(PR_ARC_R2), 9.6), "r", { sub: "2", anchor: "middle", math: true, size: 3 }),
    ...angleMark(PR_R, ...PR_ARC_E, { r: 8, label: "e", labelR: 11 }),
    line(PR_S, add(PR_S, mul(dir(PR_AT_Q.inDeg), 11)), GUIDE),
    ...angleMark(PR_S, ...PR_ARC_D, { r: 6.5, label: "d", labelR: 10 }),
    point(PR_Q, 0.8),
    point(PR_R, 0.8),
    label({ x: PR_A.x, y: PR_A.y + 3.6 }, "A", { anchor: "middle", math: true, size: 3 }),
    label({ x: PR_B.x - 2.6, y: PR_B.y - 3 }, "B", { anchor: "end", math: true, size: 3 }),
    label({ x: PR_C.x + 2.6, y: PR_C.y - 3 }, "C", { anchor: "start", math: true, size: 3 }),
    label({ x: PR_P.x + 3, y: PR_P.y + 3.2 }, "P", { anchor: "start", math: true, size: 2.8 }),
    label({ x: PR_Q.x - 2.6, y: PR_Q.y + 3 }, "Q", { anchor: "end", math: true, size: 2.8 }),
    label({ x: PR_R.x + 3, y: PR_R.y + 3.4 }, "R", { anchor: "start", math: true, size: 2.8 }),
    label({ x: PR_S.x + 2.4, y: PR_S.y - 3 }, "S", { anchor: "start", math: true, size: 2.8 }),
    label({ x: PR_NPT.x - 2.6, y: PR_NPT.y - 0.6 }, "N", { anchor: "end", math: true, size: 2.8 }),
  ],
  checks: [
    {
      kind: "value",
      label: "first face: sin i = n sin r₁",
      actual: Math.sin(PR_I * RS_DEG),
      expected: PR_INDEX * Math.sin(PR_R1 * RS_DEG),
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "second face: n sin r₂ = sin e",
      actual: PR_INDEX * Math.sin(PR_R2 * RS_DEG),
      expected: Math.sin(PR_E * RS_DEG),
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "r₁ + r₂ = A",
      actual: PR_R1 + PR_R2,
      expected: PR_APEX,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "the angle between the incident and emergent directions is d = i + e − A",
      actual: angleBetween(dir(PR_AT_Q.inDeg), dir(PR_AT_R.outDeg)),
      expected: PR_DEV,
      tol: 1e-6,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0j. Deviation against incidence (Fig. 9.22)
 *
 * The curve is sampled from `prismDeviation`, the minimum from
 * `minimumDeviation`, and the two equal-deviation incidences are a pair
 * (i, e) — the symmetry the text describes.
 * ──────────────────────────────────────────────────────────────────────── */

const PD_APEX = 60;
const PD_INDEX = 1.5;
const PD_I0 = 30;
const PD_I1 = 80;
const PD_X0 = 16;
const PD_X1 = 90;
const PD_Y0 = 12;
const PD_Y1 = 46;
const PD_D0 = 36;
const PD_D1 = 50;

const pdX = (i: number) => PD_X0 + ((i - PD_I0) / (PD_I1 - PD_I0)) * (PD_X1 - PD_X0);
const pdY = (d: number) => PD_Y0 + ((d - PD_D0) / (PD_D1 - PD_D0)) * (PD_Y1 - PD_Y0);

const PD_SAMPLES = Array.from({ length: 101 }, (_, k) => PD_I0 + ((PD_I1 - PD_I0) * k) / 100)
  .map((i) => ({ i, d: prismDeviation(PD_APEX, PD_INDEX, i) }))
  .filter((p): p is { i: number; d: number } => p.d !== null);
const PD_CURVE = PD_SAMPLES.map((p) => vec(pdX(p.i), pdY(p.d)));
const PD_DMIN = minimumDeviation(PD_APEX, PD_INDEX) ?? 37.2;
const PD_IMIN = minimumDeviationIncidence(PD_APEX, PD_INDEX) ?? 48.6;
const PD_MIN = vec(pdX(PD_IMIN), pdY(PD_DMIN));

/** The emergence angle e at incidence i — the deviation is the same at both. */
const pdEmergent = (i: number): number => {
  const r1 = Math.asin(Math.sin(i * RS_DEG) / PD_INDEX);
  return Math.asin(PD_INDEX * Math.sin(PD_APEX * RS_DEG - r1)) / RS_DEG;
};
const PD_PAIR_I = 35;
const PD_PAIR_E = pdEmergent(PD_PAIR_I);
const PD_PAIR_D = prismDeviation(PD_APEX, PD_INDEX, PD_PAIR_I) ?? 43;

export const deviationCurve: FigureSpec = {
  id: "prism-deviation-curve",
  title: "Angle of deviation against angle of incidence",
  alt:
    "A graph of the angle of deviation d against the angle of incidence i for a 60-degree glass prism. The curve falls to a minimum, Dm, at i = e, then rises again. A horizontal dashed line cuts the curve in two places, showing that one value of d corresponds to two angles of incidence.",
  caption:
    "Every deviation except the smallest comes from two angles of incidence. The lowest point, Dm, is reached when i = e and the ray inside the prism runs parallel to the base.",
  frame: { width: 96, height: 58 },
  source: "Fig. 9.22",
  elements: [
    line({ x: PD_X0 - 2, y: PD_Y0 }, { x: 93, y: PD_Y0 }, AXIS),
    line({ x: PD_X0, y: PD_Y0 - 3 }, { x: PD_X0, y: PD_Y1 + 5 }, AXIS),
    { kind: "poly", points: PD_CURVE, stroke: s("ray", 0.8) },
    line(PD_MIN, { x: PD_MIN.x, y: PD_Y0 }, GUIDE),
    line(PD_MIN, { x: PD_X0, y: PD_MIN.y }, GUIDE),
    point(PD_MIN, 1, "ok"),
    line({ x: pdX(PD_PAIR_I), y: pdY(PD_PAIR_D) }, { x: pdX(PD_PAIR_E), y: pdY(PD_PAIR_D) }, GUIDE),
    point({ x: pdX(PD_PAIR_I), y: pdY(PD_PAIR_D) }, 0.8, "ink"),
    point({ x: pdX(PD_PAIR_E), y: pdY(PD_PAIR_D) }, 0.8, "ink"),
    label({ x: PD_MIN.x + 2.6, y: PD_MIN.y + 3.6 }, "D", { sub: "m", math: true, size: 3, color: "ok" }),
    label({ x: PD_MIN.x, y: PD_Y0 - 3.6 }, "i = e", { anchor: "middle", math: true, size: 2.7 }),
    label({ x: PD_X0 - 3.6, y: PD_Y1 + 3 }, "d", { anchor: "middle", math: true, size: 3 }),
    label({ x: 92, y: PD_Y0 - 3.6 }, "i", { anchor: "middle", math: true, size: 3 }),
  ],
  checks: [
    {
      kind: "value",
      label: "the lowest point of the curve is the minimum deviation",
      actual: Math.min(...PD_SAMPLES.map((p) => p.d)),
      expected: PD_DMIN,
      tol: 0.02,
    },
    {
      kind: "value",
      label: "the curve is symmetric: d(i) = d(e)",
      actual: prismDeviation(PD_APEX, PD_INDEX, 40) ?? 0,
      expected: prismDeviation(PD_APEX, PD_INDEX, pdEmergent(40)) ?? 1,
      tol: 1e-6,
    },
    {
      kind: "value",
      label: "one deviation, two angles of incidence: d(i) = d(e)",
      actual: prismDeviation(PD_APEX, PD_INDEX, PD_PAIR_E) ?? 0,
      expected: PD_PAIR_D,
      tol: 1e-6,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0k. The simple microscope (Fig. 9.23)
 *
 * One lens, twice. In (a) the object sits just inside f, so the image lands
 * at the near point — u = −6, f = 10, v = −15, m = 2.5 — and the backward
 * extensions of the emergent rays meet at the image tip. In (b) the object is
 * exactly at f, so the emergent bundle is parallel and the image is at
 * infinity.
 * ──────────────────────────────────────────────────────────────────────── */

const SM_AXIS = 26;
const SM_X = 38;
const SM_F = 10;
const SM_OBJ: Vec = { x: 32, y: 29 };
const SM_U = SM_OBJ.x - SM_X; // −6
const SM_V = (1 / (1 / SM_F + 1 / SM_U)) as number; // −15
const SM_IMG: Vec = { x: SM_X + SM_V, y: SM_AXIS + (SM_V / SM_U) * (SM_OBJ.y - SM_AXIS) };
const SM_HIT: Vec = { x: SM_X, y: SM_OBJ.y };
const SM_FOCUS: Vec = { x: SM_X + SM_F, y: SM_AXIS };
/** The parallel ray, after the lens: straight from the lens to F′ and on. */
const SM_OUT1: Vec = atPlane(SM_HIT, SM_FOCUS, 62);
/** The ray through the optical centre continues undeviated. */
const SM_OUT2: Vec = atPlane(SM_OBJ, { x: SM_X, y: SM_AXIS }, 62);

const SMB_X = 104;
const SMB_F = 8;
const SMB_OBJ: Vec = { x: SMB_X - SMB_F, y: SM_AXIS + 3 };
const SMB_OUT = (y: number): Vec => ({ x: 134, y: y - (30 * (SMB_OBJ.y - SM_AXIS)) / SMB_F });

export const simpleMicroscope: FigureSpec = {
  id: "simple-microscope",
  title: "A simple microscope: image at the near point, and at infinity",
  alt:
    "Two panels of one short-focal-length lens. In (a) a small object just inside the focus gives a larger, erect virtual image at the near point on the left, and the dashed backward extensions of the two emergent rays meet at its tip. In (b) the object is exactly at the focal point, so the emergent rays leave parallel and the image is at infinity.",
  caption:
    "One short-focal-length lens. With the object just inside f the image is erect, magnified and at the near point (a); with the object exactly at f the emergent rays are parallel and the relaxed eye sees the image at infinity (b).",
  frame: { width: 140, height: 50 },
  source: "Fig. 9.23",
  elements: [
    line({ x: 6, y: SM_AXIS }, { x: 68, y: SM_AXIS }, AXIS),
    { kind: "poly", points: lensOutline({ x: SM_X, y: SM_AXIS }, 10, 2), stroke: INK, fill: "glass" },
    arrow({ x: SM_OBJ.x, y: SM_AXIS }, SM_OBJ, INK),
    arrow({ x: SM_IMG.x, y: SM_AXIS }, SM_IMG, VIRTUAL),
    arrow(SM_OBJ, SM_HIT, RAY),
    arrow(SM_HIT, SM_OUT1, RAY),
    line(SM_HIT, SM_IMG, GUIDE),
    arrow(SM_OBJ, { x: SM_X, y: SM_AXIS }, s("ray", 0.5)),
    arrow({ x: SM_X, y: SM_AXIS }, SM_OUT2, RAY),
    line(SM_OBJ, SM_IMG, GUIDE),
    point(SM_FOCUS, 0.8, "ink"),
    line({ x: 70, y: 7 }, { x: 70, y: 44 }, s("rule", 0.3, "dash")),
    line({ x: 74, y: SM_AXIS }, { x: 138, y: SM_AXIS }, AXIS),
    { kind: "poly", points: lensOutline({ x: SMB_X, y: SM_AXIS }, 10, 2), stroke: INK, fill: "glass" },
    arrow({ x: SMB_OBJ.x, y: SM_AXIS }, SMB_OBJ, INK),
    arrow(SMB_OBJ, { x: SMB_X, y: SMB_OBJ.y }, RAY),
    arrow({ x: SMB_X, y: SMB_OBJ.y }, SMB_OUT(SMB_OBJ.y), RAY),
    arrow(SMB_OBJ, { x: SMB_X, y: SM_AXIS }, s("ray", 0.5)),
    arrow({ x: SMB_X, y: SM_AXIS }, SMB_OUT(SM_AXIS), RAY),
    point({ x: SMB_X + SMB_F, y: SM_AXIS }, 0.8, "ink"),
    label({ x: SM_OBJ.x, y: SM_AXIS - 3.8 }, "O", { anchor: "middle", math: true, size: 2.8 }),
    label({ x: SM_IMG.x, y: SM_IMG.y + 3 }, "I", { anchor: "middle", math: true, size: 2.8, color: "warn" }),
    label({ x: SM_FOCUS.x, y: SM_AXIS + 4.2 }, "F′", { anchor: "middle", math: true, size: 2.8 }),
    label({ x: 5, y: 43 }, "(a)", { size: 2.8, color: "muted" }),
    label({ x: SMB_OBJ.x, y: SM_AXIS - 3.8 }, "O", { anchor: "middle", math: true, size: 2.8 }),
    label({ x: SMB_X + SMB_F, y: SM_AXIS + 4.2 }, "F′", { anchor: "middle", math: true, size: 2.8 }),
    label({ x: 75, y: 43 }, "(b)", { size: 2.8, color: "muted" }),
  ],
  checks: [
    {
      kind: "value",
      label: "simple microscope, image at D: 1/v − 1/u = 1/f",
      actual: 1 / SM_V - 1 / SM_U,
      expected: 1 / SM_F,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "the bent parallel ray passes through F′ and on to the image tip",
      actual: atPlane(SM_HIT, SM_FOCUS, SM_IMG.x).y,
      expected: SM_IMG.y,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "the ray through the optical centre points at the image tip too",
      actual: atPlane({ x: SM_X, y: SM_AXIS }, SM_OBJ, SM_IMG.x).y,
      expected: SM_IMG.y,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "with the object at f the two emergent rays are parallel",
      actual: (SMB_OUT(SMB_OBJ.y).y - SMB_OBJ.y) / (134 - SMB_X),
      expected: (SMB_OUT(SM_AXIS).y - SM_AXIS) / (134 - SMB_X),
      tol: 1e-12,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0l. The compound microscope (Fig. 9.24)
 *
 * Objective at f_o = 9 with the object 12 in front: v = 36, m = −3, and the
 * first image lands exactly on the eyepiece's front focus, six in front of the
 * eyepiece. Its height is −6, so the emergent bundle has slope +1 and the eye
 * sees the final image at infinity, inverted.
 * ──────────────────────────────────────────────────────────────────────── */

const CM_AXIS = 30;
const CM_X = 44;
const CM_FO = 12;
const CM_OBJ: Vec = { x: 28, y: 34 };
const CM_U = CM_OBJ.x - CM_X; // −16
const CM_V = (1 / (1 / CM_FO + 1 / CM_U)) as number; // +48
const CM_M = CM_V / CM_U; // −3
const CM_I: Vec = { x: CM_X + CM_V, y: CM_AXIS + CM_M * (CM_OBJ.y - CM_AXIS) };
const CM_FE = 10;
const CM_EYE_X = CM_I.x + CM_FE;
const CM_L = CM_I.x - (CM_X + CM_FO); // 36
/** Slope after the eyepiece for a ray through the first image and the lens. */
const cmAfter = (yHit: number): number => (yHit - CM_I.y) / CM_FE - (yHit - CM_AXIS) / CM_FE;

export const compoundMicroscope: FigureSpec = {
  id: "compound-microscope",
  title: "A compound microscope: objective and eyepiece",
  alt:
    "A compound microscope on an axis. A small object beyond the objective's focus is imaged by the objective as a real, inverted, magnified first image at the eyepiece's front focal point. Rays from that image leave the eyepiece parallel, so the final image seen by the eye is at infinity and inverted. The tube length, from the objective's second focus to the eyepiece's first focus, is marked L.",
  caption:
    "The objective makes a real, inverted first image at the eyepiece's focal point; the eyepiece then acts as a simple magnifier, so the final image is at infinity and inverted. L is the tube length.",
  frame: { width: 152, height: 70 },
  source: "Fig. 9.24",
  elements: [
    line({ x: 6, y: CM_AXIS }, { x: 146, y: CM_AXIS }, AXIS),
    { kind: "poly", points: lensOutline({ x: CM_X, y: CM_AXIS }, 11, 2.2), stroke: INK, fill: "glass" },
    { kind: "poly", points: lensOutline({ x: CM_EYE_X, y: CM_AXIS }, 10, 2), stroke: INK, fill: "glass" },
    arrow({ x: CM_OBJ.x, y: CM_AXIS }, CM_OBJ, INK),
    arrow({ x: CM_I.x, y: CM_AXIS }, CM_I, EMERGENT),
    arrow(CM_OBJ, { x: CM_X, y: CM_OBJ.y }, RAY),
    arrow({ x: CM_X, y: CM_OBJ.y }, CM_I, RAY),
    arrow(CM_OBJ, { x: CM_X, y: CM_AXIS }, s("ray", 0.5)),
    arrow({ x: CM_X, y: CM_AXIS }, CM_I, RAY),
    line(CM_I, { x: CM_EYE_X, y: 24 }, s("ray", 0.5)),
    line(CM_I, { x: CM_EYE_X, y: 28 }, s("ray", 0.5)),
    arrow({ x: CM_EYE_X, y: 24 }, { x: 140, y: 39.2 }, EMERGENT),
    arrow({ x: CM_EYE_X, y: 28 }, { x: 140, y: 43.2 }, EMERGENT),
    line({ x: CM_I.x, y: 18 }, { x: CM_I.x, y: 38 }, GUIDE),
    line({ x: CM_X + CM_FO, y: 12 }, { x: CM_I.x, y: 12 }, THIN),
    line({ x: CM_X + CM_FO, y: 10.6 }, { x: CM_X + CM_FO, y: 13.4 }, THIN),
    line({ x: CM_I.x, y: 10.6 }, { x: CM_I.x, y: 13.4 }, THIN),
    point({ x: CM_X + CM_FO, y: CM_AXIS }, 0.8, "ink"),
    point({ x: CM_I.x, y: CM_AXIS }, 0.8, "ink"),
    label({ x: CM_OBJ.x - 0.8, y: CM_OBJ.y + 2.6 }, "O", { anchor: "end", math: true, size: 2.8 }),
    label({ x: CM_I.x - 1.6, y: CM_I.y - 3.4 }, "I", { sub: "1", anchor: "end", math: true, size: 2.8 }),
    label({ x: CM_X, y: 16.2 }, "objective", { anchor: "middle", size: 2.7, color: "muted" }),
    label({ x: CM_EYE_X, y: 16.2 }, "eyepiece", { anchor: "middle", size: 2.7, color: "muted" }),
    label({ x: (CM_X + CM_FO + CM_I.x) / 2, y: 8.6 }, "L", { anchor: "middle", math: true, size: 2.8 }),
  ],
  checks: [
    {
      kind: "value",
      label: "the objective forms the first image: 1/v − 1/u = 1/f_o",
      actual: 1 / CM_V - 1 / CM_U,
      expected: 1 / CM_FO,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "the first image sits at the eyepiece's front focus",
      actual: CM_I.x,
      expected: CM_EYE_X - CM_FE,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "m_o = L/f_o (the objective's magnification, in size)",
      actual: -CM_M,
      expected: CM_L / CM_FO,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "both emergent rays have the same slope: the bundle is parallel",
      actual: cmAfter(22),
      expected: cmAfter(26),
      tol: 1e-12,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0m. The refracting telescope (Fig. 9.25)
 *
 * Parallel light enters the objective at slope 0.12 and is brought to the
 * shared focal plane; the eyepiece, whose front focus sits there too, throws
 * the bundle out at slope −0.48. Slope ratio 0.48/0.12 = 4 = f_o/f_e, and the
 * tube is f_o + f_e = 30 long.
 * ──────────────────────────────────────────────────────────────────────── */

const RT_AXIS = 26;
const RT_X = 36;
const RT_FO = 24;
const RT_FE = 6;
const RT_EYE_X = RT_X + RT_FO + RT_FE; // 66
const RT_SLOPE = 0.12;
const RT_HALF = 10;
const RT_HIT: readonly [number, number] = [RT_AXIS + RT_HALF, RT_AXIS - RT_HALF];
const RT_IMG: Vec = { x: RT_X + RT_FO, y: RT_AXIS + RT_FO * RT_SLOPE };
const RT_IN = (y: number): Vec => ({ x: 4, y: y - RT_SLOPE * (RT_X - 4) });
const RT_AFTER_OBJ = (y: number): number => RT_SLOPE - (y - RT_AXIS) / RT_FO;
const RT_EYE = (y: number): Vec => ({ x: RT_EYE_X, y: RT_IMG.y + RT_AFTER_OBJ(y) * RT_FE });
const RT_AFTER_EYE = (RT_AXIS - RT_IMG.y) / RT_FE; // −0.48
const RT_END_X = 100;
const RT_END = (p: Vec): Vec => ({ x: RT_END_X, y: p.y + (RT_END_X - RT_EYE_X) * RT_AFTER_EYE });
const RT_ALPHA = (Math.atan(RT_SLOPE) * 180) / Math.PI;
const RT_BETA = (Math.atan(Math.abs(RT_AFTER_EYE)) * 180) / Math.PI;
/** Where the upper emergent ray crosses the axis: the vertex for the β mark. */
const RT_BETA_V: Vec = { x: RT_EYE_X - (RT_EYE(RT_HIT[1]).y - RT_AXIS) / RT_AFTER_EYE, y: RT_AXIS };
const RT_VERTEX: Vec = { x: RT_X, y: RT_AXIS };

export const refractingTelescope: FigureSpec = {
  id: "refracting-telescope",
  title: "A refracting telescope",
  alt:
    "A refracting telescope on an axis. Two parallel rays from a distant object enter the large objective at a small angle α to the axis and meet at its second focal point, which is also the eyepiece's first focal point. The eyepiece sends them out parallel at the larger angle β, so the final image of the distant object is inverted and magnified.",
  caption:
    "The objective forms a real image at its second focus; the eyepiece magnifies it. The emergent bundle leaves at angle β, and the object subtends α, so m = β/α = f_o/f_e. The tube is f_o + f_e long.",
  frame: { width: 112, height: 44 },
  source: "Fig. 9.25",
  elements: [
    line({ x: 4, y: RT_AXIS }, { x: 106, y: RT_AXIS }, AXIS),
    { kind: "poly", points: lensOutline({ x: RT_X, y: RT_AXIS }, 12, 2.4), stroke: INK, fill: "glass" },
    { kind: "poly", points: lensOutline({ x: RT_EYE_X, y: RT_AXIS }, 8, 1.6), stroke: INK, fill: "glass" },
    arrow(RT_IN(RT_HIT[0]), { x: RT_X, y: RT_HIT[0] }, INCIDENT),
    arrow(RT_IN(RT_HIT[1]), { x: RT_X, y: RT_HIT[1] }, INCIDENT),
    arrow({ x: RT_X, y: RT_HIT[0] }, RT_EYE(RT_HIT[0]), RAY),
    arrow({ x: RT_X, y: RT_HIT[1] }, RT_EYE(RT_HIT[1]), RAY),
    arrow(RT_EYE(RT_HIT[0]), RT_END(RT_EYE(RT_HIT[0])), EMERGENT),
    arrow(RT_EYE(RT_HIT[1]), RT_END(RT_EYE(RT_HIT[1])), EMERGENT),
    line({ x: RT_IMG.x, y: 18 }, { x: RT_IMG.x, y: 36 }, GUIDE),
    ...angleMark(RT_VERTEX, 180 - RT_ALPHA, 180, { r: 10 }),
    ...angleMark(RT_BETA_V, -RT_BETA, 0, { r: 10 }),
    point(RT_IMG, 0.9, "ink"),
    label({ x: RT_IMG.x + 2.4, y: RT_IMG.y + 2.4 }, "I", { anchor: "start", size: 2.8 }),
    label(polar(RT_VERTEX, 180 - RT_ALPHA / 2, 12.6), "α", { anchor: "middle", math: true, size: 2.8 }),
    label(polar(RT_BETA_V, -RT_BETA / 2, 13), "β", { anchor: "middle", math: true, size: 2.8 }),
    label({ x: RT_X, y: 12.2 }, "objective", { anchor: "middle", size: 2.7, color: "muted" }),
    label({ x: RT_EYE_X + 6, y: 12.2 }, "eyepiece", { anchor: "middle", size: 2.7, color: "muted" }),
  ],
  checks: [
    {
      kind: "value",
      label: "parallel rays at slope m meet the focal plane at the same height",
      actual: RT_HIT[0] + RT_AFTER_OBJ(RT_HIT[0]) * RT_FO,
      expected: RT_HIT[1] + RT_AFTER_OBJ(RT_HIT[1]) * RT_FO,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "the emergent rays are parallel",
      actual: (RT_END(RT_EYE(RT_HIT[0])).y - RT_EYE(RT_HIT[0]).y) / (RT_END_X - RT_EYE_X),
      expected: (RT_END(RT_EYE(RT_HIT[1])).y - RT_EYE(RT_HIT[1]).y) / (RT_END_X - RT_EYE_X),
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "m = f_o/f_e: the emergent slope is that many times the incident slope",
      actual: Math.abs(RT_AFTER_EYE) / RT_SLOPE,
      expected: RT_FO / RT_FE,
      tol: 1e-12,
    },
    {
      kind: "value",
      label: "the tube is f_o + f_e long",
      actual: RT_EYE_X - RT_X,
      expected: RT_FO + RT_FE,
      tol: 1e-12,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0n. The Cassegrain reflecting telescope (Fig. 9.26)
 *
 * Every ray below is `reflect`ed, twice: off the concave primary (centre C1,
 * radius 96, vertex at x = 68) and off the small convex secondary (centre C2,
 * radius 60, vertex at x = 60) that sends the light back through the hole in
 * the primary. The secondary sits well inside the primary's focus (x = 20), so
 * Δx = uR/(R + 2u) = 40·60/140 = 17.1 puts the final crossing 9 behind the
 * mirror — the reality that makes a Cassegrain long-focus but short.
 * ──────────────────────────────────────────────────────────────────────── */

const CS_AXIS = 34;
const CS_C1: Vec = { x: -28, y: CS_AXIS };
const CS_R1 = 96;
const CS_C2: Vec = { x: 120, y: CS_AXIS };
const CS_R2 = 60;
/** Half-angle of the hole in the primary: 96 sin 6° = 10. */
const CS_HOLE_DEG = 6;
/** Outer half-angle of the primary's surface: 96 sin 14.5° = 24. */
const CS_PRIM_DEG = 14.5;
/** Half-angle of the secondary: 60 sin 11.1° = 11.6 — just wide enough for the beam. */
const CS_SEC_DEG = 11.1;
const CS_RAY = 13;
const CS_HOLE_HALF = CS_R1 * Math.sin((CS_HOLE_DEG * Math.PI) / 180);
const CS_PRIMARY_X = CS_C1.x + CS_R1; // 68

/** Where two rays cross. */
function csCross(p: Vec, dp: Vec, q: Vec, dq: Vec): Vec | null {
  const den = dp.x * dq.y - dp.y * dq.x;
  if (Math.abs(den) < 1e-9) return null;
  const t = ((q.x - p.x) * dq.y - (q.y - p.y) * dq.x) / den;
  return add(p, mul(dp, t));
}

/** A mirror: the arc plus short ticks on its back. */
function csBand(C: Vec, R: number, fromDeg: number, toDeg: number): Element[] {
  const out: Element[] = [{ kind: "poly", points: arcPoints(C, R, fromDeg, toDeg), stroke: s("ink", 1.7) }];
  for (let a = fromDeg; a <= toDeg + 1e-9; a += 2.4) {
    out.push(line(polar(C, a, R + 0.6), polar(C, a, R + 2.4), s("ink", 0.28)));
  }
  return out;
}

const csTrace = (y: number) => {
  const from = vec(8, y);
  const p1 = hitCircle(from, dir(0), CS_C1, CS_R1, "far");
  const d1 = reflect(dir(0), unit(sub(p1, CS_C1)));
  const p2 = hitCircle(p1, d1, CS_C2, CS_R2, "far");
  const d2 = reflect(d1, unit(sub(p2, CS_C2)));
  return { from, p1, d1, p2, d2 };
};

const CS_HI = csTrace(CS_AXIS + CS_RAY);
const CS_LO = csTrace(CS_AXIS - CS_RAY);
const CS_FOCUS = csCross(CS_HI.p2, CS_HI.d2, CS_LO.p2, CS_LO.d2) ?? vec(73, CS_AXIS);
const csEnd = (r: { p2: Vec; d2: Vec }): Vec => add(r.p2, mul(r.d2, (100 - r.p2.x) / r.d2.x));
const CS_OUT_HI = csEnd(CS_HI);
const CS_OUT_LO = csEnd(CS_LO);
/** The emergent rays' height where they cross the primary's plane. */
const CS_AT_HOLE = Math.abs(
  CS_HI.p2.y + ((CS_PRIMARY_X - CS_HI.p2.x) * CS_HI.d2.y) / CS_HI.d2.x - CS_AXIS,
);
const CS_SEC_TOP = CS_AXIS + CS_R2 * Math.sin((CS_SEC_DEG * Math.PI) / 180);

export const cassegrain: FigureSpec = {
  id: "cassegrain-telescope",
  title: "A Cassegrain reflecting telescope",
  alt:
    "A Cassegrain telescope on an axis. Parallel light enters from the left past the small convex secondary, meets the concave primary mirror at the right, and returns to the secondary, which sends the converging beam back through a hole in the centre of the primary to a focus just behind it.",
  caption:
    "Parallel light hits the concave primary, comes back to the convex secondary and is sent through the hole in the primary. A long focal length fits in a short tube.",
  frame: { width: 116, height: 68 },
  source: "Fig. 9.26",
  elements: [
    line({ x: 6, y: CS_AXIS }, { x: 108, y: CS_AXIS }, AXIS),
    ...csBand(CS_C1, CS_R1, CS_HOLE_DEG, CS_PRIM_DEG),
    ...csBand(CS_C1, CS_R1, -CS_PRIM_DEG, -CS_HOLE_DEG),
    ...csBand(CS_C2, CS_R2, 180 - CS_SEC_DEG, 180 + CS_SEC_DEG),
    arrow(CS_HI.from, CS_HI.p1, INCIDENT),
    arrow(CS_LO.from, CS_LO.p1, INCIDENT),
    arrow(CS_HI.p1, CS_HI.p2, RAY),
    arrow(CS_LO.p1, CS_LO.p2, RAY),
    arrow(CS_HI.p2, CS_OUT_HI, EMERGENT),
    arrow(CS_LO.p2, CS_OUT_LO, EMERGENT),
    point(CS_FOCUS, 0.9, "ok"),
    label({ x: 52, y: 13 }, "secondary", { anchor: "middle", size: 2.7, color: "muted" }),
    label({ x: 78, y: 13 }, "primary", { anchor: "middle", size: 2.7, color: "muted" }),
    label({ x: CS_FOCUS.x + 1.4, y: CS_FOCUS.y + 3.8 }, "I", { anchor: "start", size: 2.8, color: "ok" }),
  ],
  checks: [
    {
      kind: "reflect",
      i: angleBetween(mul(dir(0), -1), unit(sub(CS_HI.p1, CS_C1))),
      r: angleBetween(CS_HI.d1, unit(sub(CS_HI.p1, CS_C1))),
      tolDeg: 1e-9,
    },
    {
      kind: "reflect",
      i: angleBetween(mul(CS_HI.d1, -1), unit(sub(CS_HI.p2, CS_C2))),
      r: angleBetween(CS_HI.d2, unit(sub(CS_HI.p2, CS_C2))),
      tolDeg: 1e-9,
    },
    {
      kind: "value",
      label: "the reflected rays meet at the primary's paraxial focus (within the drawing's spherical aberration)",
      actual: Math.hypot(
        (csCross(CS_HI.p1, CS_HI.d1, CS_LO.p1, CS_LO.d1) ?? vec(0, 0)).x - (CS_C1.x + CS_R1 / 2),
        (csCross(CS_HI.p1, CS_HI.d1, CS_LO.p1, CS_LO.d1) ?? vec(0, 0)).y - CS_AXIS,
      ),
      expected: 0,
      tol: 1.5,
    },
    {
      kind: "value",
      label: "the beam reaches the secondary: the reflected rays land inside its rim",
      actual: Math.max(...[CS_HI, CS_LO].map((r) => Math.abs(r.p2.y - CS_AXIS))),
      expected: CS_SEC_TOP - CS_AXIS,
      tol: CS_SEC_TOP - CS_AXIS,
    },
    {
      kind: "value",
      label: "the emergent rays cross on the axis",
      actual: CS_FOCUS.y,
      expected: CS_AXIS,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "the emergent rays pass inside the hole in the primary",
      actual: CS_AT_HOLE,
      expected: CS_HOLE_HALF,
      tol: CS_HOLE_HALF,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 0f. Refraction note: solved diagrams for the rebuilt 9.3 section
 * ──────────────────────────────────────────────────────────────────────── */

const RF_HEADER_P: Vec = vec(60, 26);
const RF_HEADER_I = 35;
const RF_HEADER = refract(dir(-(90 - RF_HEADER_I)), vec(0, 1), 1, 1.5);
const RF_HEADER_FROM = add(RF_HEADER_P, mul(dir(90 + RF_HEADER_I), 24));
const RF_HEADER_TO = add(RF_HEADER_P, mul(RF_HEADER.dir!, 24));

export const refractionHeaderCrossing: FigureSpec = {
  id: "refraction-header-crossing",
  title: "A ray crossing between two transparent media",
  alt: "An incident ray crosses a horizontal boundary and bends into the second transparent medium.",
  caption: "A ray changes direction when it crosses the boundary between two transparent media.",
  frame: { width: 120, height: 52 },
  labelSize: 2.8,
  elements: [
    body([vec(0, 0), vec(120, 0), vec(120, 26), vec(0, 26)], "glass"),
    line(vec(0, 26), vec(120, 26), s("ink", 1)),
    arrow(RF_HEADER_FROM, RF_HEADER_P, INCIDENT),
    arrow(RF_HEADER_P, RF_HEADER_TO, EMERGENT),
    label(vec(6, 47), "transparent medium 1", { anchor: "start", size: 2.5, color: "muted" }),
    label(vec(6, 5), "transparent medium 2", { anchor: "start", size: 2.5, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: RF_HEADER.angleOfIncidence, r: RF_HEADER.angleOfRefraction, n1: 1, n2: 1.5 },
    {
      kind: "value",
      label: "header ray follows the solved refracted direction",
      actual: angleBetween(sub(RF_HEADER_TO, RF_HEADER_P), RF_HEADER.dir!),
      expected: 0,
      tol: 1e-9,
    },
  ],
};

const RF_PLANE_P: Vec = vec(72, 46);
const RF_PLANE_I = 45;
const RF_PLANE = refract(dir(-(90 - RF_PLANE_I)), vec(0, 1), 1, 1.5);
const RF_PLANE_FROM = add(RF_PLANE_P, mul(dir(90 + RF_PLANE_I), 32));
const RF_PLANE_TO = add(RF_PLANE_P, mul(RF_PLANE.dir!, 32));
const RF_PLANE_STRAIGHT = add(RF_PLANE_P, mul(dir(-(90 - RF_PLANE_I)), 40));

export const refractionPlaneBoundary: FigureSpec = {
  id: "refraction-plane-boundary",
  title: "Refraction at a plane boundary",
  alt:
    "At a horizontal boundary, an oblique incident ray bends towards the dashed normal; its dotted undeviated continuation is shown, and a second ray falls normally and passes straight through.",
  caption:
    "The oblique ray bends at the boundary; a ray along the normal passes straight through without deviation.",
  frame: { width: 144, height: 92 },
  labelSize: 3,
  elements: [
    body([vec(0, 0), vec(144, 0), vec(144, 46), vec(0, 46)], "glass"),
    line(vec(0, 46), vec(144, 46), s("ink", 1.2)),
    ...normal(RF_PLANE_P, 90, 26, { text: "N" }),
    arrow(RF_PLANE_FROM, RF_PLANE_P, INCIDENT),
    arrow(RF_PLANE_P, RF_PLANE_TO, EMERGENT),
    line(RF_PLANE_P, RF_PLANE_STRAIGHT, s("muted", 0.4, "dot")),
    arrow(vec(112, 76), vec(112, 16), RAY),
    ...angleMark(RF_PLANE_P, 90, 90 + RF_PLANE_I, {
      r: 9,
      label: "i",
      labelR: 12.5,
      color: "hot",
    }),
    ...angleMark(RF_PLANE_P, 270, angleOf(RF_PLANE_P, RF_PLANE_TO) + 360, {
      r: 8,
      label: "r",
      labelR: 12,
      color: "ok",
    }),
    label(vec(6, 86), "Medium 1 (n₁, v₁)", { anchor: "start", size: 2.8, color: "muted" }),
    label(vec(6, 6), "Medium 2 (n₂, v₂)", { anchor: "start", size: 2.8, color: "muted" }),
    label(vec(40, 80), "incident ray", { anchor: "end", size: 2.6, color: "hot" }),
    label(vec(92, 16), "refracted ray", { anchor: "start", size: 2.6, color: "ok" }),
    label(vec(104, 28), "undeviated path", { anchor: "start", size: 2.5, color: "muted" }),
    label(vec(122, 76), "normal incidence", { anchor: "end", size: 2.5, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: RF_PLANE.angleOfIncidence, r: RF_PLANE.angleOfRefraction, n1: 1, n2: 1.5 },
    {
      kind: "value",
      label: "refracted ray follows the solved direction",
      actual: angleBetween(sub(RF_PLANE_TO, RF_PLANE_P), RF_PLANE.dir!),
      expected: 0,
      tol: 1e-4,
    },
  ],
};

const RF_RD_P: Vec = vec(66, 38);
const RF_RD_I = 45;
const RF_RD_N1 = 1;
const RF_RD_N2 = 1.5;
const RF_RD = refract(dir(-(90 - RF_RD_I)), vec(0, 1), RF_RD_N1, RF_RD_N2);
const RF_RD_FROM = add(RF_RD_P, mul(dir(90 + RF_RD_I), 30));
const RF_RD_TO = add(RF_RD_P, mul(RF_RD.dir!, 32));

export const refractionRarerToDenser: FigureSpec = {
  id: "refraction-rarer-to-denser",
  title: "Rarer medium to denser medium: bending towards the normal",
  alt:
    "A ray passes from a rarer upper medium into a denser lower medium; the refracted angle r is smaller than the incident angle i.",
  caption: "The refracted ray bends towards the normal: i > r.",
  frame: { width: 132, height: 76 },
  labelSize: 3,
  elements: [
    body([vec(0, 0), vec(132, 0), vec(132, 38), vec(0, 38)], "glass"),
    line(vec(0, 38), vec(132, 38), s("ink", 1.2)),
    ...normal(RF_RD_P, 90, 22, { text: "N" }),
    arrow(RF_RD_FROM, RF_RD_P, INCIDENT),
    arrow(RF_RD_P, RF_RD_TO, EMERGENT),
    ...angleMark(RF_RD_P, 90, 90 + RF_RD_I, { r: 8, label: "i", labelR: 11.5, color: "hot" }),
    ...angleMark(RF_RD_P, 270, angleOf(RF_RD_P, RF_RD_TO) + 360, {
      r: 7,
      label: "r",
      labelR: 10.5,
      color: "ok",
    }),
    label(vec(6, 70), "rarer medium", { anchor: "start", size: 2.7, color: "muted" }),
    label(vec(6, 7), "denser medium", { anchor: "start", size: 2.7, color: "muted" }),
  ],
  checks: [
    {
      kind: "snell",
      i: RF_RD.angleOfIncidence,
      r: RF_RD.angleOfRefraction,
      n1: RF_RD_N1,
      n2: RF_RD_N2,
    },
    {
      kind: "value",
      label: "r < i",
      actual: RF_RD.angleOfRefraction < RF_RD.angleOfIncidence ? 1 : 0,
      expected: 1,
      tol: 0,
    },
    {
      kind: "value",
      label: "drawn ray follows the solved direction",
      actual: angleBetween(sub(RF_RD_TO, RF_RD_P), RF_RD.dir!),
      expected: 0,
      tol: 1e-4,
    },
  ],
};

const RF_DR_P: Vec = vec(66, 38);
const RF_DR_I = 30;
const RF_DR_N1 = 1.5;
const RF_DR_N2 = 1;
const RF_DR_IN = dir(-(90 - RF_DR_I));
const RF_DR = refract(RF_DR_IN, vec(0, 1), RF_DR_N1, RF_DR_N2);
const RF_DR_FROM = add(RF_DR_P, mul(dir(90 + RF_DR_I), 30));
const RF_DR_TO = add(RF_DR_P, mul(RF_DR.dir!, 32));

export const refractionDenserToRarer: FigureSpec = {
  id: "refraction-denser-to-rarer",
  title: "Denser medium to rarer medium: bending away from the normal",
  alt:
    "A ray passes from a denser upper medium into a rarer lower medium; the refracted angle r is larger than the incident angle i.",
  caption: "The refracted ray bends away from the normal: i < r.",
  frame: { width: 132, height: 76 },
  labelSize: 3,
  elements: [
    body([vec(0, 0), vec(132, 0), vec(132, 38), vec(0, 38)], "glass"),
    line(vec(0, 38), vec(132, 38), s("ink", 1.2)),
    ...normal(RF_DR_P, 90, 22, { text: "N" }),
    arrow(RF_DR_FROM, RF_DR_P, INCIDENT),
    arrow(RF_DR_P, RF_DR_TO, EMERGENT),
    ...angleMark(RF_DR_P, 90, 90 + RF_DR_I, { r: 8, label: "i", labelR: 11.5, color: "hot" }),
    ...angleMark(RF_DR_P, 270, angleOf(RF_DR_P, RF_DR_TO) + 360, {
      r: 8,
      label: "r",
      labelR: 12,
      color: "ok",
    }),
    label(vec(6, 70), "denser medium", { anchor: "start", size: 2.7, color: "muted" }),
    label(vec(6, 7), "rarer medium", { anchor: "start", size: 2.7, color: "muted" }),
  ],
  checks: [
    {
      kind: "snell",
      i: RF_DR.angleOfIncidence,
      r: RF_DR.angleOfRefraction,
      n1: RF_DR_N1,
      n2: RF_DR_N2,
    },
    {
      kind: "value",
      label: "r > i",
      actual: RF_DR.angleOfRefraction > RF_DR.angleOfIncidence ? 1 : 0,
      expected: 1,
      tol: 0,
    },
    {
      kind: "value",
      label: "drawn ray follows the solved direction",
      actual: angleBetween(sub(RF_DR_TO, RF_DR_P), RF_DR.dir!),
      expected: 0,
      tol: 1e-9,
    },
  ],
};

const RF_SN_P: Vec = vec(36, 24);
const RF_SN_I = 40;
const RF_SN = refract(dir(-(90 - RF_SN_I)), vec(0, 1), 1, 1.5);
const RF_SN_FROM = add(RF_SN_P, mul(dir(90 + RF_SN_I), 20));
const RF_SN_TO = add(RF_SN_P, mul(RF_SN.dir!, 20));

export const refractionSnellDiagram: FigureSpec = {
  id: "refraction-snell-diagram",
  title: "Angles for Snell’s law",
  alt: "A ray crosses a boundary; i and r are measured from the dashed normal at the point of incidence.",
  caption: "Media 1 and 2 with the incident angle i, refracted angle r and normal N.",
  frame: { width: 72, height: 48 },
  labelSize: 2.8,
  elements: [
    body([vec(0, 0), vec(72, 0), vec(72, 24), vec(0, 24)], "glass"),
    line(vec(0, 24), vec(72, 24), s("ink", 1)),
    ...normal(RF_SN_P, 90, 15),
    arrow(RF_SN_FROM, RF_SN_P, INCIDENT),
    arrow(RF_SN_P, RF_SN_TO, EMERGENT),
    ...angleMark(RF_SN_P, 90, 90 + RF_SN_I, { r: 5.5, label: "i", labelR: 8.5, color: "hot" }),
    ...angleMark(RF_SN_P, 270, angleOf(RF_SN_P, RF_SN_TO) + 360, {
      r: 5.5,
      label: "r",
      labelR: 8.5,
      color: "ok",
    }),
    label(vec(5, 42), "Medium 1", { anchor: "start", size: 2.5, color: "muted" }),
    label(vec(5, 6), "Medium 2", { anchor: "start", size: 2.5, color: "muted" }),
    label(vec(40, 44), "N", { anchor: "start", size: 2.5, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: RF_SN.angleOfIncidence, r: RF_SN.angleOfRefraction, n1: 1, n2: 1.5 },
    {
      kind: "value",
      label: "Snell ray follows the solved direction",
      actual: angleBetween(sub(RF_SN_TO, RF_SN_P), RF_SN.dir!),
      expected: 0,
      tol: 1e-9,
    },
  ],
};

const RF_DS_I1 = SLAB_TRACE.events[0].angleOfIncidence;
const RF_DS_R1 = SLAB_TRACE.events[0].angleAfter;
const RF_DS_R2 = SLAB_TRACE.events[1].angleOfIncidence;
const RF_DS_I2 = SLAB_TRACE.events[1].angleAfter;
const RF_DS_D = dir(SLAB_INCIDENCE);
const RF_DS_Q = add(SLAB_TRACE.points[2], mul(RF_DS_D, 12));
const RF_DS_FOOT = add(
  SLAB_TRACE.points[1],
  mul(RF_DS_D, dot(sub(RF_DS_Q, SLAB_TRACE.points[1]), RF_DS_D)),
);
const RF_DS_SHIFT = slabLateralShift(40, RF_DS_I1, 1.5)!;

export const refractionSlabFourAngles: FigureSpec = {
  id: "refraction-slab-four-angles",
  title: "Parallel-sided slab: four angles and lateral shift",
  alt:
    "A ray enters a rectangular slab at i₁, refracts at r₁, meets the second face at i₂ and emerges at r₂; the emergent ray is parallel to the incident ray and shifted sideways.",
  caption:
    "The parallel faces give r₁ = i₂; Snell’s law at both faces then gives i₁ = r₂. The emergent ray is parallel to the incident ray.",
  frame: { width: 132, height: 84 },
  labelSize: 3,
  elements: [
    body(SLAB.polygon, "glassStrong"),
    arrow(SLAB_TRACE.points[0], SLAB_TRACE.points[1], INCIDENT),
    arrow(SLAB_TRACE.points[1], SLAB_TRACE.points[2], RAY),
    arrow(SLAB_TRACE.points[2], SLAB_TRACE.points[3], EMERGENT),
    line(SLAB_TRACE.points[1], add(SLAB_TRACE.points[1], mul(RF_DS_D, 58)), s("muted", 0.4, "dot")),
    ...normal(SLAB_TRACE.points[1], 0, 12),
    ...normal(SLAB_TRACE.points[2], 0, 10),
    ...angleMark(SLAB_TRACE.points[1], 150, 180, { r: 8, label: "i₁", labelR: 11.5, color: "hot" }),
    ...angleMark(SLAB_TRACE.points[1], SLAB_INSIDE + 360, 360, {
      r: 5.5,
      label: "r₁",
      labelR: 10,
      color: "ray",
    }),
    ...angleMark(SLAB_TRACE.points[2], SLAB_INSIDE + 180, 180, {
      r: 5.5,
      label: "r₂",
      labelR: 9.5,
      color: "ray",
    }),
    ...angleMark(SLAB_TRACE.points[2], SLAB_OUT.outDeg + 360, 360, {
      r: 7,
      label: "i₂",
      labelR: 10.5,
      color: "ok",
    }),
    line(RF_DS_FOOT, RF_DS_Q, s("ok", 0.5, "dash")),
    label(vec(102, 33), "lateral shift", { anchor: "start", size: 2.4, color: "ok" }),
    label(vec(35, 54), "N₁", { anchor: "end", size: 2.7, color: "muted" }),
    label(vec(93, 40), "N₂", { anchor: "start", size: 2.7, color: "muted" }),
    label(vec(6, 78), "Medium 1 (n₁)", { anchor: "start", size: 2.6, color: "muted" }),
    label(vec(68, 27), "Medium 2 (n₂)", { anchor: "middle", size: 2.6, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: RF_DS_I1, r: RF_DS_R1, n1: 1, n2: 1.5 },
    { kind: "snell", i: RF_DS_R2, r: RF_DS_I2, n1: 1.5, n2: 1 },
    { kind: "value", label: "r₂ = r₁", actual: RF_DS_R2, expected: RF_DS_R1, tol: 1e-9 },
    { kind: "value", label: "i₂ = i₁", actual: RF_DS_I2, expected: RF_DS_I1, tol: 1e-9 },
    {
      kind: "value",
      label: "emergent ray parallel to incident ray",
      actual: Math.abs(SLAB_OUT.outDeg - SLAB_IN.inDeg),
      expected: 0,
      tol: 1e-9,
    },
    {
      kind: "value",
      label: "marked separation equals slabLateralShift()",
      actual: dist(RF_DS_FOOT, RF_DS_Q),
      expected: RF_DS_SHIFT,
      tol: 1e-6,
    },
  ],
};

export const refractionParallelEmergence: FigureSpec = {
  id: "refraction-parallel-emergence",
  title: "Incident and emergent rays are parallel",
  alt: "Two separated arrows point in the same direction, showing that the emergent ray is parallel to the incident ray.",
  caption: "The emergent ray is parallel to the incident ray.",
  frame: { width: 100, height: 44 },
  labelSize: 2.8,
  elements: [
    arrow(vec(8, 36), vec(48, 12.94), INCIDENT),
    arrow(vec(54, 30), vec(94, 6.94), EMERGENT),
    label(vec(8, 41), "incident ray", { anchor: "start", size: 2.5, color: "hot" }),
    label(vec(94, 15), "emergent ray", { anchor: "end", size: 2.5, color: "ok" }),
  ],
  checks: [
    {
      kind: "value",
      label: "drawn rays are parallel",
      actual: angleBetween(sub(vec(48, 12.94), vec(8, 36)), sub(vec(94, 6.94), vec(54, 30))),
      expected: 0,
      tol: 1e-3,
    },
  ],
};

const RF_AC_O: Vec = vec(48, 12);
const RF_AC_SURFACE = 44;
const RF_AC_I = 20;
const RF_AC_N = 4 / 3;
const RF_AC_P: Vec = vec(RF_AC_O.x + (RF_AC_SURFACE - RF_AC_O.y) * Math.tan(RF_AC_I * RS_DEG), RF_AC_SURFACE);
const RF_AC = refract(dir(90 - RF_AC_I), vec(0, 1), RF_AC_N, 1);
const RF_AC_EYE = add(RF_AC_P, mul(RF_AC.dir!, 24));
const RF_AC_IMAGE = intersectLines(RF_AC_P, RF_AC.dir!, vec(RF_AC_O.x, 0), vec(0, 1))!;

export const refractionApparentConcept: FigureSpec = {
  id: "refraction-apparent-concept",
  title: "An object in a denser medium appears raised",
  alt:
    "An object in the lower denser medium is seen by an eye above; a dashed back-extension places its virtual image closer to the surface.",
  caption: "The virtual image appears closer to the surface than the actual object.",
  frame: { width: 120, height: 74 },
  labelSize: 3,
  elements: [
    body([vec(0, 0), vec(120, 0), vec(120, RF_AC_SURFACE), vec(0, RF_AC_SURFACE)], "glass"),
    line(vec(0, RF_AC_SURFACE), vec(120, RF_AC_SURFACE), s("ink", 1.1)),
    arrow(RF_AC_O, RF_AC_P, RAY),
    arrow(RF_AC_P, RF_AC_EYE, EMERGENT),
    line(RF_AC_P, RF_AC_IMAGE, VIRTUAL),
    point(RF_AC_O, 1.1),
    point(RF_AC_IMAGE, 1.1, "warn"),
    circle(RF_AC_EYE, 3, { stroke: INK, fill: null }),
    label(vec(43, 11), "O", { anchor: "end", size: 3, math: true }),
    label(vec(43, 23), "O′", { anchor: "end", size: 3, math: true, color: "warn" }),
    label(vec(76, 68), "eye", { anchor: "start", size: 2.6, color: "muted" }),
    label(vec(76, 24), "virtual image", { anchor: "start", size: 2.5, color: "warn" }),
    label(vec(6, 69), "rarer medium", { anchor: "start", size: 2.5, color: "muted" }),
    label(vec(6, 6), "denser medium", { anchor: "start", size: 2.5, color: "muted" }),
  ],
  checks: [
    { kind: "snell", i: RF_AC.angleOfIncidence, r: RF_AC.angleOfRefraction, n1: RF_AC_N, n2: 1 },
    {
      kind: "value",
      label: "virtual image is above the object",
      actual: RF_AC_IMAGE.y > RF_AC_O.y ? 1 : 0,
      expected: 1,
      tol: 0,
    },
  ],
};

const RF_AD_O: Vec = vec(54, 14);
const RF_AD_N = 4 / 3;
const RF_AD_SURFACE = 52;
const RF_AD_ANGLES: readonly number[] = [4, 7];
const RF_AD_RAYS = RF_AD_ANGLES.map((i) => {
  const p: Vec = vec(RF_AD_O.x + (RF_AD_SURFACE - RF_AD_O.y) * Math.tan(i * RS_DEG), RF_AD_SURFACE);
  const solved = refract(dir(90 - i), vec(0, 1), RF_AD_N, 1);
  const end = add(p, mul(solved.dir!, 24));
  const image = intersectLines(p, solved.dir!, vec(RF_AD_O.x, 0), vec(0, 1))!;
  return { i, p, solved, end, image };
});
const RF_AD_IMAGE = RF_AD_RAYS[0].image;
const RF_AD_EYE: Vec = vec(
  (RF_AD_RAYS[0].end.x + RF_AD_RAYS[1].end.x) / 2,
  (RF_AD_RAYS[0].end.y + RF_AD_RAYS[1].end.y) / 2,
);
const RF_AD_REAL_DEPTH = RF_AD_SURFACE - RF_AD_O.y;

export const refractionApparentDepth: FigureSpec = {
  id: "refraction-apparent-depth-n21",
  title: "Apparent depth and real depth",
  alt:
    "Rays from an object in a denser medium refract into the rarer medium; their backward extensions meet at a virtual image above the object, with real depth d and apparent depth d prime marked separately.",
  caption: "The backward extensions locate the virtual image: d′ = d / n₂₁.",
  frame: { width: 120, height: 88 },
  labelSize: 3,
  elements: [
    body([vec(0, 0), vec(120, 0), vec(120, RF_AD_SURFACE), vec(0, RF_AD_SURFACE)], "glass"),
    line(vec(0, RF_AD_SURFACE), vec(120, RF_AD_SURFACE), s("ink", 1.1)),
    ...normal(RF_AD_RAYS[0].p, 90, 18),
    ...RF_AD_RAYS.flatMap((ray) => [
      arrow(RF_AD_O, ray.p, RAY),
      arrow(ray.p, ray.end, EMERGENT),
      line(ray.p, ray.image, VIRTUAL),
    ]),
    point(RF_AD_O, 1.1),
    point(RF_AD_IMAGE, 1.1, "warn"),
    circle(RF_AD_EYE, 3, { stroke: INK, fill: null }),
    line(vec(38, RF_AD_O.y), vec(38, RF_AD_SURFACE), s("muted", 0.45)),
    tick(vec(38, RF_AD_O.y), 90, 1.8),
    tick(vec(38, RF_AD_SURFACE), 90, 1.8),
    line(vec(70, RF_AD_IMAGE.y), vec(70, RF_AD_SURFACE), s("warn", 0.45, "dash")),
    tick(vec(70, RF_AD_IMAGE.y), 90, 1.8),
    tick(vec(70, RF_AD_SURFACE), 90, 1.8),
    label(vec(34, 33), "d", { anchor: "end", size: 3, math: true, color: "muted" }),
    label(vec(74, 38), "d′", { anchor: "start", size: 3, math: true, color: "warn" }),
    label(vec(50, 11), "O", { anchor: "end", size: 3, math: true }),
    label(vec(50, 26), "O′", { anchor: "end", size: 3, math: true, color: "warn" }),
    label(vec(76, 27), "virtual image", { anchor: "start", size: 2.5, color: "warn" }),
    label(vec(66, 83), "eye", { anchor: "start", size: 2.6, color: "muted" }),
    label(vec(6, 84), "rarer medium", { anchor: "start", size: 2.5, color: "muted" }),
    label(vec(6, 6), "denser medium", { anchor: "start", size: 2.5, color: "muted" }),
  ],
  checks: [
    {
      kind: "snell",
      i: RF_AD_RAYS[0].solved.angleOfIncidence,
      r: RF_AD_RAYS[0].solved.angleOfRefraction,
      n1: RF_AD_N,
      n2: 1,
    },
    {
      kind: "value",
      label: "virtual image is above the object",
      actual: RF_AD_IMAGE.y > RF_AD_O.y ? 1 : 0,
      expected: 1,
      tol: 0,
    },
    {
      kind: "value",
      label: "paraxial apparent depth follows d / n₂₁",
      actual: RF_AD_SURFACE - RF_AD_IMAGE.y,
      expected: apparentDepthOf(RF_AD_REAL_DEPTH, RF_AD_N),
      tol: 0.5,
    },
  ],
};

export const RAY_OPTICS_FIGURES: readonly FigureSpec[] = [
  rayAndBeam,
  refractionAtSurface,
  apparentDepth,
  slabShift,
  refractionHeaderCrossing,
  refractionPlaneBoundary,
  refractionRarerToDenser,
  refractionDenserToRarer,
  refractionSnellDiagram,
  refractionSlabFourAngles,
  refractionParallelEmergence,
  refractionApparentConcept,
  refractionApparentDepth,
  totalInternalReflection,
  opticalFibre,
  convexLensRays,
  concaveLensRays,
  prismPath,
  deviationCurve,
  simpleMicroscope,
  compoundMicroscope,
  refractingTelescope,
  cassegrain,
  planeReflection,
  concaveMirrorTerms,
  convexMirrorTerms,
  ruleParallel,
  ruleFocus,
  ruleCentre,
  rulePole,
  signConventionConcave,
  signConventionConvex,
  concaveRealImage,
  mirrorEquationGeometry,
];
