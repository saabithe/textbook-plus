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
  dot,
  mul,
  polar,
  sub,
  unit,
  type Vec,
} from "../../../components/content/physics/diagram/geometry.ts";
import { reflect } from "../../../components/content/physics/diagram/optics.ts";
import {
  AXIS,
  GUIDE,
  INCIDENT,
  RAY,
  angleMark,
  arrow,
  dot as point,
  label,
  line,
  s,
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
    label({ x: 101, y: 39.5 }, "P", { math: true, size: 3.2, anchor: "start" }),
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
    label({ x: 16, y: 62 }, "parallel to the axis", { anchor: "start", size: 2.9, color: "muted" }),
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
    label({ x: 136, y: 62 }, "parallel to the axis", { anchor: "end", size: 2.9, color: "muted" }),
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

/* 6. At the pole → equal angles with the principal axis */
const r4Start = add(M_P, mul(dir(150), 40));
const r4End = add(M_P, mul(dir(30), 36));
const r4B = bounce(M_P, M_C, sub(M_P, r4Start));

export const rulePole: FigureSpec = {
  id: "mirror-rule-pole-ray",
  title: "Rule 4 — a ray at the pole reflects symmetrically",
  alt: "A ray striking the pole P at 30 degrees to the principal axis is reflected at 30 degrees on the other side of the axis, obeying i = r.",
  caption:
    "At the pole the principal axis is the normal, so the ray is reflected to the other side of the axis with the same angle. Tangent to the mirror at P, the axis doubles as the normal line.",
  frame: { width: 140, height: 90 },
  source: "Fig. 9.5",
  elements: [
    ...mirrorBase(),
    arrow(r4Start, M_P, INCIDENT),
    arrow(M_P, r4End, RAY),
    ...angleMark(M_P, 150, 180, { r: 9, label: "i", labelR: 12.5 }),
    ...angleMark(M_P, 0, 30, { r: 9, label: "r", labelR: 12.5 }),
  ],
  checks: [{ kind: "reflect", i: r4B.iDeg, r: r4B.rDeg, tolDeg: 1e-6 }],
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
 * 10. The same figure, labelled for the mirror-equation proof
 * ──────────────────────────────────────────────────────────────────────── */

export const mirrorEquationGeometry: FigureSpec = {
  id: "mirror-equation-geometry",
  title: "Geometry of the mirror equation",
  alt: "The mirror-equation figure: object OB and inverted image IM stand perpendicular to the axis at O and I. The ray from B parallel to the axis strikes the mirror at N, drops to the pole P and reflects through F to the image tip M. Triangles OBP and IMP are similar about the pole; triangles FPN and FIM are similar about the focus.",
  caption:
    "The reflected ray runs straight from N through F to M, so ΔFPN and ΔFIM are similar; the bases OB and IM are parallel, so ΔOBP and ΔIMP are similar. The perpendicular from N falls on the axis almost at P, which makes PN = OB.",
  frame: { width: 140, height: 80 },
  source: "Fig. 9.5",
  elements: [
    line({ x: 6, y: OBJ.axisY }, { x: 136, y: OBJ.axisY }, AXIS),
    ...mirrorArc(OBJ.C, OBJ.R, -18, 18, 1),
    line(OBJ.O, objB, s("ink", 0.55)),
    line(OBJ.I, imgM, s("ink", 0.55)),
    arrow(objB, parHit, INCIDENT),
    arrow(parHit, endAtX(parHit, parB.out, 12), RAY),
    line(parHit, OBJ.P, s("muted", 0.4, "dash")),
    point(OBJ.C),
    point(OBJ.F),
    point(OBJ.P),
    label({ x: parHit.x - 2.5, y: parHit.y + 3.4 }, "N", { math: true, size: 3.2, anchor: "end" }),
    label({ x: OBJ.O.x, y: OBJ.axisY - 6.2 }, "O", { math: true, size: 3.2 }),
    label({ x: objB.x - 2, y: objB.y + 2.2 }, "B", { math: true, size: 3.2, anchor: "end" }),
    label({ x: OBJ.I.x - 2, y: OBJ.axisY - 6.2 }, "I", { math: true, size: 3.2, anchor: "end" }),
    label({ x: imgM.x - 2, y: imgM.y - 2.8 }, "M", { math: true, size: 3.2, anchor: "end" }),
    label({ x: OBJ.C.x, y: OBJ.axisY - 5.6 }, "C", { math: true, size: 3.2 }),
    label({ x: OBJ.F.x, y: OBJ.axisY - 5.6 }, "F", { math: true, size: 3.2 }),
    label({ x: OBJ.P.x + 3, y: OBJ.axisY - 5.6 }, "P", { math: true, size: 3.2, anchor: "start" }),
    label({ x: 8, y: 72 }, "Two pairs of similar triangles", { anchor: "start", size: 3.6 }),
  ],
  checks: [
    { kind: "reflect", i: parB.iDeg, r: parB.rDeg, tolDeg: 1e-6 },
    {
      kind: "value",
      label: "the drop from N meets the axis at P",
      actual: Math.abs(parHit.x - OBJ.P.x),
      expected: 0,
      tol: 1,
    },
    {
      kind: "value",
      label: "PN = OB (heights equal)",
      actual: Math.abs(parHit.y - OBJ.P.y),
      expected: OBJ.ho,
      tol: 0.4,
    },
    {
      kind: "value",
      label: "IM/PN = IF/FP",
      actual: Math.abs(OBJ.hi) / Math.abs(parHit.y - OBJ.P.y),
      expected: Math.abs(OBJ.F.x - OBJ.I.x) / Math.abs(OBJ.F.x - OBJ.P.x),
      tol: 0.06,
    },
  ],
};

export const RAY_OPTICS_FIGURES: readonly FigureSpec[] = [
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
