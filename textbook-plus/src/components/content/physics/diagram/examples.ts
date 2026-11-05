/**
 * examples.ts — the reference figures for the gallery, and the worked proof
 * that the engine draws what the law says.
 *
 * Each spec is written the way a figure request will be: a frame, the bodies,
 * the rays (asked of the engine, never typed), the marks, the labels, and the
 * laws it must satisfy. Only the frame, the label positions and the style are
 * hand-placed; every ray, angle and image point is solved.
 */
import { add, angleOf, dir, intersectLines, mul, vec, type Vec } from "./geometry.ts";
import {
  minimumDeviation,
  minimumDeviationIncidence,
  reflect,
  refract,
  solveThinLens,
  traceRay,
  type RefractingBody,
} from "./optics.ts";
import {
  AXIS,
  EMERGENT,
  GUIDE,
  INCIDENT,
  INK,
  RAY,
  REFLECTED,
  VIRTUAL,
  angleMark,
  arrow,
  body,
  dot,
  label,
  lensOutline,
  line,
  normal,
  polygon,
  tick,
  type FigureSpec,
} from "./scene.ts";

/* ────────────────────────────────────────────────────────────────────────
 * 1. Refraction at a plane surface: air → glass, 45° incidence
 * ──────────────────────────────────────────────────────────────────────── */

const P = vec(58, 44);
const incidentDir = dir(-45);
const refractedDir = refract(incidentDir, vec(0, 1), 1, 1.5).dir as Vec;
const incidentStart = add(P, mul(dir(135), 26));
const refractedEnd = add(P, mul(refractedDir, 30));
const reflectedEnd = add(P, mul(reflect(incidentDir, vec(0, 1)), 22));

export const refractionPlane: FigureSpec = {
  id: "refraction-plane-surface",
  title: "Refraction at a plane surface (air → glass)",
  alt: "A ray strikes a horizontal air-glass interface at 45 degrees to the normal, bends towards the normal to 28 degrees inside the glass, and a weak reflected ray leaves at 45 degrees.",
  caption:
    "Incident at 45°, refracted at 28.1°: sin i = n sin r with n = 1.5. The reflected ray leaves at the same 45° it arrived with.",
  frame: { width: 120, height: 84 },
  source: "Fig. 9.12",
  elements: [
    body([vec(0, 0), vec(120, 0), vec(120, 44), vec(0, 44)]),
    ...normal(P, 90, 26, { text: "normal" }),
    arrow(incidentStart, P, INCIDENT),
    arrow(P, refractedEnd, EMERGENT),
    arrow(P, reflectedEnd, REFLECTED),
    ...angleMark(P, 90, 135, { r: 9, label: "i", labelR: 12.6 }),
    ...angleMark(P, 270, angleOf(P, refractedEnd) + 360, { r: 9, label: "r", labelR: 12.6, color: "ok" }),
    label(vec(7, 76), "air", { anchor: "start", size: 3.2, color: "muted" }),
    label(vec(7, 34), "glass", { anchor: "start", size: 3.2, color: "muted" }),
    label(vec(7, 27), "n = 1.5", { anchor: "start", size: 2.9, color: "muted" }),
    label(vec(30, 55), "incident", { anchor: "end", size: 2.8, color: "hot" }),
    label(vec(84, 62), "reflected", { anchor: "start", size: 2.8, color: "muted" }),
    label(vec(80, 12), "refracted", { anchor: "start", size: 2.8, color: "ok" }),
  ],
  checks: [
    { kind: "snell", i: 45, r: 28.13, n1: 1, n2: 1.5 },
    { kind: "reflect", i: 45, r: 45 },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 2. Converging lens: a real, inverted, same-size image
 * ──────────────────────────────────────────────────────────────────────── */

const lensCenter = vec(78, 45);
const lens = solveThinLens({ center: lensCenter, f: 18, object: vec(42, 60) })!;

export const lensRealImage: FigureSpec = {
  id: "converging-lens-real-image",
  title: "Converging lens: object at 2F gives a real, inverted image at 2F",
  alt: "A converging lens with an object arrow at twice the focal length on the left, three principal rays crossing at twice the focal length on the right to form an inverted image of the same size.",
  caption:
    "u = 36 cm, f = 18 cm ⟹ v = 36 cm and m = −1: the image is real, inverted and the same size, formed at 2F on the far side. 1/v + 1/u = 1/f.",
  frame: { width: 150, height: 90 },
  elements: [
    line(vec(4, 45), vec(146, 45), AXIS),
    polygon(lensOutline(lensCenter, 17, 3.2), { stroke: INK, fill: "glass" }),
    dot(lens.focalPoints[0], 1.1),
    dot(lens.focalPoints[1], 1.1),
    { kind: "poly", points: lens.rays.parallel, stroke: RAY },
    { kind: "poly", points: lens.rays.throughCenter, stroke: RAY },
    { kind: "poly", points: lens.rays.throughFocus, stroke: RAY },
    arrow(vec(42, 45), vec(42, 60), INCIDENT),
    arrow(vec(lens.image.x, 45), lens.image, EMERGENT),
    tick(vec(42, 45), 0, 1.6, INK),
    tick(vec(lens.image.x, 45), 0, 1.6, INK),
    label(vec(38, 60), "O", { anchor: "end", math: true, size: 3.2 }),
    label(vec(lens.image.x + 3, lens.image.y + 1), "I", { anchor: "start", math: true, size: 3.2, color: "ok" }),
    label(vec(lens.focalPoints[0].x, 40.4), "F", { math: true, size: 2.9, color: "muted" }),
    label(vec(lens.focalPoints[1].x, 40.4), "F′", { math: true, size: 2.9, color: "muted" }),
    label(vec(116, 48), "2F", { anchor: "start", size: 2.7, color: "muted" }),
  ],
  checks: [{ kind: "lens", u: 36, v: 36, f: 18 }],
};

/* ────────────────────────────────────────────────────────────────────────
 * 3. Glass slab: the emergent ray is parallel, shifted sideways
 * ──────────────────────────────────────────────────────────────────────── */

const slab: RefractingBody = {
  n: 1.5,
  id: "slab",
  polygon: [vec(46, 22), vec(86, 22), vec(86, 68), vec(46, 68)],
};
const slabTrace = traceRay({ from: vec(14, 76), angleDeg: -30, bodies: [slab], tail: 30 });
const entry = slabTrace.events[0];
const exit = slabTrace.events[1];
const insideDeg = angleOf(slabTrace.points[1], slabTrace.points[2]);

export const slabLateralShift: FigureSpec = {
  id: "glass-slab-lateral-shift",
  title: "Glass slab: parallel emergent ray, laterally shifted",
  alt: "A ray enters a rectangular glass slab at 30 degrees to the normal, bends to 19.5 degrees inside, leaves parallel to its original direction but shifted sideways, with the un-deviated path shown dashed.",
  caption:
    "Two refractions, equal and opposite, so the emergent ray is parallel to the incident ray — merely displaced sideways. The dashed line is where it would have gone with no slab.",
  frame: { width: 130, height: 90 },
  elements: [
    body(slab.polygon),
    { kind: "poly", points: slabTrace.points, stroke: EMERGENT },
    line(entry.at, add(entry.at, mul(dir(-30), 52)), VIRTUAL),
    ...normal(entry.at, 0, 14),
    ...normal(exit.at, 0, 12),
    ...angleMark(entry.at, angleOf(entry.at, vec(14, 76)), 180, { r: 8, label: "i", labelR: 11.5 }),
    ...angleMark(exit.at, insideDeg, 0, { r: 7, label: "r", labelR: 10.4 }),
    label(vec(8, 86), "air", { anchor: "start", size: 3.2, color: "muted" }),
    label(vec(66, 30), "glass", { anchor: "middle", size: 3.2, color: "muted" }),
    label(vec(66, 25), "n = 1.5", { anchor: "middle", size: 2.9, color: "muted" }),
    label(vec(96, 21), "∥ incident", { anchor: "start", size: 2.8, color: "ok" }),
  ],
  checks: [
    { kind: "snell", i: 30, r: 19.47, n2: 1.5 },
    {
      kind: "value",
      label: "emergent ∥ incident",
      actual: Math.abs(exit.outDeg - entry.inDeg),
      expected: 0,
      tol: 1e-9,
    },
  ],
};

/* ────────────────────────────────────────────────────────────────────────
 * 4. Prism at minimum deviation: symmetric path, δ = i₁ + i₂ − A
 * ──────────────────────────────────────────────────────────────────────── */

const prismHalf = 40 / Math.tan(Math.PI / 3); // equilateral, apex 60°, height 40
const prismApex = vec(70, 60);
const prismBody = [prismApex, vec(70 - prismHalf, 20), vec(70 + prismHalf, 20)];
const iMin = minimumDeviationIncidence(60, 1.5)!;
/** The left face normal is at −30°, so a ray at (iMin − 30)° strikes it at iMin. */
const incidentDeg = iMin - 30;
const prismTrace = traceRay({
  from: vec(25, 27),
  angleDeg: incidentDeg,
  bodies: [{ n: 1.5, polygon: prismBody }],
  tail: 30,
});
const pEntry = prismTrace.points[1];
const pExit = prismTrace.points[2];
const pEnd = prismTrace.points[3];
const emergentDeg = angleOf(pExit, pEnd);
const delta = Math.abs(incidentDeg - emergentDeg);
/** Where the incident ray extended meets the emergent ray: the deviation is marked there. */
const pCross = intersectLines(pEntry, dir(incidentDeg), pExit, dir(emergentDeg))!;

export const prismMinimumDeviation: FigureSpec = {
  id: "prism-minimum-deviation",
  title: "Equilateral prism at minimum deviation",
  alt: "A ray enters an equilateral glass prism at 48.6 degrees to the left face, crosses the prism horizontally, and leaves the right face at 48.6 degrees, deviated by 37.2 degrees towards the base.",
  caption:
    "At minimum deviation the path is symmetric: i₁ = i₂ = 48.6°, the ray inside is parallel to the base, and δ = i₁ + i₂ − A = 37.2° for A = 60°, n = 1.5. Then n = sin((A + δ)/2) / sin(A/2).",
  frame: { width: 132, height: 72 },
  elements: [
    body(prismBody),
    line(pEntry, pCross, GUIDE),
    line(pCross, pExit, GUIDE),
    { kind: "poly", points: prismTrace.points, stroke: EMERGENT },
    ...normal(pEntry, -30, 13),
    ...normal(pExit, 30, 13),
    ...angleMark(pEntry, 150, 180 + incidentDeg, { r: 7, label: "i₁", labelR: 10.4 }),
    ...angleMark(pExit, emergentDeg, 30, { r: 7, label: "i₂", labelR: 10.4, color: "ok" }),
    ...angleMark(pCross, emergentDeg, incidentDeg, { r: 7, label: "δ", labelR: 9.4 }),
    ...angleMark(prismApex, 240, 300, { r: 6, label: "60°", labelR: 9.2, color: "muted" }),
    label(vec(70, 28), "n = 1.5", { anchor: "middle", size: 2.9, color: "muted" }),
    label(vec(20, 23), "incident", { anchor: "start", size: 2.8, color: "hot" }),
    label(vec(112, 24), "emergent", { anchor: "start", size: 2.8, color: "ok" }),
  ],
  checks: [
    { kind: "snell", i: iMin, r: 30, n2: 1.5 },
    { kind: "value", label: "δ = i₁ + i₂ − A", actual: delta, expected: minimumDeviation(60, 1.5)!, tol: 1e-9 },
    { kind: "value", label: "symmetric path (i₂ = i₁)", actual: Math.abs(prismTrace.events[1].angleAfter - iMin), expected: 0, tol: 1e-9 },
    { kind: "value", label: "internal ray ∥ base", actual: Math.abs(angleOf(pEntry, pExit)), expected: 0, tol: 1e-9 },
  ],
};

export const FIGURES: readonly FigureSpec[] = [
  refractionPlane,
  lensRealImage,
  slabLateralShift,
  prismMinimumDeviation,
];
