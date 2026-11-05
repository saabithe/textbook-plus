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

export const RAY_OPTICS_FIGURES: readonly FigureSpec[] = [
  planeReflection,
  concaveMirrorTerms,
  convexMirrorTerms,
  ruleParallel,
  ruleFocus,
  ruleCentre,
  rulePole,
];
