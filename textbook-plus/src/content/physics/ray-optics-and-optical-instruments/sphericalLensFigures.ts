/**
 * sphericalLensFigures.ts — chapter 9 figures for the spherical-surface and
 * lens-maker rebuild (eleven specs, all ids prefixed `sl-`).
 *
 * Every surface is sampled from a solved centre of curvature, every ray is
 * obtained from `refract`, `solveThinLens` or a line intersection, and every
 * spec carries checks the validator re-derives. Only frames, label positions
 * and stylistic choices are hand-placed.
 */
import {
  add,
  angleBetween,
  angleOf,
  arcPoints,
  cross,
  dir,
  dist,
  dot,
  intersectLines,
  len,
  mul,
  polar,
  sub,
  toDeg,
  unit,
  vec,
  type Vec,
} from "../../../components/content/physics/diagram/geometry.ts";
import { refract, solveThinLens } from "../../../components/content/physics/diagram/optics.ts";
import {
  AXIS,
  EMERGENT,
  GUIDE,
  INCIDENT,
  INK,
  RAY,
  VIRTUAL,
  angleMark,
  arrow,
  body,
  dot as point,
  label,
  lensOutline,
  line,
  rightAngle,
  s,
  type Element,
  type FigureSpec,
  type Stroke,
} from "../../../components/content/physics/diagram/scene.ts";

/* ── solved-geometry helpers ──────────────────────────────────────────── */

const HORIZONTAL = dir(0);

const along = (from: Vec, direction: Vec, length: number): Vec => add(from, mul(direction, length));

const extendBeyond = (from: Vec, through: Vec, extra: number): Vec =>
  along(through, unit(sub(through, from)), extra);

const atXAlong = (from: Vec, direction: Vec, x: number): Vec =>
  add(from, mul(direction, (x - from.x) / direction.x));

const lerpVec = (a: Vec, b: Vec, t: number): Vec => add(a, mul(sub(b, a), t));

const lineDistance = (p: Vec, a: Vec, d: Vec): number => Math.abs(cross(sub(p, a), unit(d)));

const segmentDistance = (p: Vec, a: Vec, b: Vec): number => {
  const ab = sub(b, a);
  const denom = dot(ab, ab);
  if (denom === 0) return dist(p, a);
  const t = Math.max(0, Math.min(1, dot(sub(p, a), ab) / denom));
  return dist(p, add(a, mul(ab, t)));
};

const rayPoly = (points: readonly Vec[], stroke: Stroke): Element => ({ kind: "poly", points, stroke });

/** Biconvex (r₁ > 0, r₂ < 0) or biconcave (r₁ < 0, r₂ > 0) sampled surfaces. */
type SignedLensGeometry = {
  body: Vec[];
  firstCenter: Vec;
  secondCenter: Vec;
  firstPole: Vec;
  secondPole: Vec;
  leftTop: Vec;
  leftBottom: Vec;
  rightTop: Vec;
  rightBottom: Vec;
};

const signedLensGeometry = (
  center: Vec,
  halfHeight: number,
  halfThickness: number,
  r1: number,
  r2: number,
): SignedLensGeometry => {
  const firstPole = vec(center.x - halfThickness, center.y);
  const secondPole = vec(center.x + halfThickness, center.y);
  const firstCenter = vec(firstPole.x + r1, firstPole.y);
  const secondCenter = vec(secondPole.x + r2, secondPole.y);
  const surfaceAngles = (radius: number): { top: number; bottom: number } => {
    const rise = toDeg(Math.asin(Math.min(1, halfHeight / Math.abs(radius))));
    const pole = radius > 0 ? 180 : 0;
    const turn = radius > 0 ? -1 : 1;
    return { top: pole + turn * rise, bottom: pole - turn * rise };
  };
  const a1 = surfaceAngles(r1);
  const a2 = surfaceAngles(r2);
  const leftSurface = arcPoints(firstCenter, Math.abs(r1), a1.top, a1.bottom, 4);
  const rightSurface = arcPoints(secondCenter, Math.abs(r2), a2.bottom, a2.top, 4);
  return {
    body: [...leftSurface, ...rightSurface],
    firstCenter,
    secondCenter,
    firstPole,
    secondPole,
    leftTop: leftSurface[0],
    leftBottom: leftSurface[leftSurface.length - 1],
    rightTop: rightSurface[rightSurface.length - 1],
    rightBottom: rightSurface[0],
  };
};

const signStroke = (positive: boolean): Stroke => s(positive ? "ok" : "hot", 0.85);

type ParallelRay = {
  start: Vec;
  lensPoint: Vec;
  end: Vec;
  focus: Vec;
};

/** Parallel incident rays that converge through the real focus on the far side. */
const convergingRays = (
  center: Vec,
  f: number,
  heights: readonly number[],
  leftX: number,
  rightX: number,
): ParallelRay[] =>
  heights.map((h) => {
    const start = vec(leftX, center.y + h);
    const lensPoint = vec(center.x, center.y + h);
    const focus = vec(center.x + f, center.y);
    return { start, lensPoint, end: atXAlong(lensPoint, unit(sub(focus, lensPoint)), rightX), focus };
  });

/** Parallel incident rays that diverge as if from the virtual focus on the incident side. */
const divergingRays = (
  center: Vec,
  f: number,
  heights: readonly number[],
  leftX: number,
  rightX: number,
): ParallelRay[] =>
  heights.map((h) => {
    const start = vec(leftX, center.y + h);
    const lensPoint = vec(center.x, center.y + h);
    const focus = vec(center.x + f, center.y);
    return { start, lensPoint, end: atXAlong(lensPoint, unit(sub(lensPoint, focus)), rightX), focus };
  });

export const SPHERICAL_LENS_FIGURES: readonly FigureSpec[] = [
  /* ── 1. Two-panel chapter header ─────────────────────────────────────── */
  (() => {
    const AXIS_Y = 36;
    const surfaceCenter = vec(66, AXIS_Y);
    const surfaceRadius = 30;
    const pole = vec(surfaceCenter.x - surfaceRadius, AXIS_Y);
    const hit = polar(surfaceCenter, 170, surfaceRadius);
    const objectPoint = vec(8, 42);
    const solved = refract(sub(hit, objectPoint), sub(hit, surfaceCenter), 1, 1.5);
    const refractedEnd = atXAlong(hit, solved.dir!, 78);

    const lensCenter = vec(128, AXIS_Y);
    const focus = vec(lensCenter.x + 16, AXIS_Y);
    const parallel = convergingRays(lensCenter, 16, [8, -8], 98, 160);

    return {
      id: "sl-header",
      title: "Spherical surface and convex lens — chapter header",
      alt:
        "Two small panels: a ray refracts at a convex spherical air-to-glass surface at its pole, and parallel rays through a convex lens converge at the far focal point.",
      caption: "Spherical surface / Convex lens",
      frame: { width: 170, height: 72 },
      labelSize: 2.7,
      elements: [
        line(vec(4, AXIS_Y), vec(80, AXIS_Y), AXIS),
        body(arcPoints(surfaceCenter, surfaceRadius, 90, 270, 5)),
        line(vec(66, 66), vec(66, 6), INK),
        arrow(objectPoint, hit, INCIDENT),
        arrow(hit, refractedEnd, EMERGENT),
        point(pole, 1),
        point(hit, 1, "ray"),
        label(vec(pole.x - 2, pole.y + 4), "P", { size: 2.8, anchor: "end", math: true }),
        label(vec(52, 20), "n = 1.5", { size: 2.5, anchor: "middle", color: "muted" }),
        line(vec(85, 5), vec(85, 67), GUIDE),
        line(vec(92, AXIS_Y), vec(166, AXIS_Y), AXIS),
        body(lensOutline(lensCenter, 16, 4)),
        ...parallel.flatMap((ray) => [
          arrow(ray.start, ray.lensPoint, INCIDENT),
          arrow(ray.lensPoint, ray.end, EMERGENT),
        ]),
        point(focus, 1, "ok"),
        label(vec(focus.x, focus.y - 5), "F′", { size: 2.7, anchor: "middle", math: true }),
        label(vec(42, 4), "Spherical surface", { size: 2.5, anchor: "middle", color: "muted" }),
        label(vec(128, 4), "Convex lens", { size: 2.5, anchor: "middle", color: "muted" }),
      ],
      checks: [
        { kind: "snell", i: solved.angleOfIncidence, r: solved.angleOfRefraction, n1: 1, n2: 1.5 },
        {
          kind: "value",
          label: "right-panel ray 1 heads for F′",
          actual: lineDistance(focus, parallel[0].lensPoint, sub(parallel[0].end, parallel[0].lensPoint)),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "right-panel ray 2 heads for F′",
          actual: lineDistance(focus, parallel[1].lensPoint, sub(parallel[1].end, parallel[1].lensPoint)),
          expected: 0,
          tol: 1e-9,
        },
      ],
    };
  })(),

  /* ── 2. Spherical-surface derivation geometry ───────────────────────── */
  (() => {
    const AXIS_Y = 52;
    const n1 = 1;
    const n2 = 1.5;
    const R = 20;
    const C = vec(130, AXIS_Y);
    const P = vec(110, AXIS_Y);
    const O = vec(10, AXIS_Y);
    const I = vec(210, AXIS_Y);
    const M = polar(C, 175, R);
    const incoming = sub(M, O);
    const outgoing = refract(incoming, sub(M, C), n1, n2);
    const crossing = intersectLines(M, outgoing.dir!, I, vec(0, 1))!;
    const crossingEnd = extendBeyond(M, crossing, 10);
    const N = vec(M.x, AXIS_Y);
    const alpha = angleBetween(incoming, HORIZONTAL);
    const beta = angleBetween(sub(M, C), dir(180));
    const theta = angleBetween(outgoing.dir!, HORIZONTAL);
    const toO = ((angleOf(M, O) + 360) % 360);
    const sphericalLHS = n2 / (I.x - P.x) - n1 / (O.x - P.x);
    const sphericalRHS = (n2 - n1) / R;

    return {
      id: "sl-spherical-surface-geometry",
      title: "Refraction at a spherical surface — labelled derivation",
      alt:
        "A ray from an axial object crosses a convex spherical surface at M and bends towards the normal to meet the axis at I. The incident angle, refracted angle, surface angles and perpendicular from M to the axis are all marked.",
      caption:
        "At a spherical surface n₂/v − n₁/u = (n₂ − n₁)/R; Snell's law at M fixes the refracted ray, which crosses the axis close to I.",
      frame: { width: 230, height: 110 },
      labelSize: 2.8,
      elements: [
        line(vec(6, AXIS_Y), vec(222, AXIS_Y), AXIS),
        body(arcPoints(C, R, 90, 270, 4)),
        line(polar(C, 175, R + 12), polar(C, 355, R + 12), s("warn", 0.5, "dash")),
        label(vec(166, 46), "normal", { size: 2.5, anchor: "end", color: "muted" }),
        arrow(O, M, INCIDENT),
        arrow(M, crossing, EMERGENT),
        arrow(crossing, crossingEnd, EMERGENT),
        line(M, N, GUIDE),
        rightAngle(N, 90, 180, 3),
        point(O, 1.1),
        point(P, 1.1),
        point(C, 1.1),
        point(I, 1.1, "ok"),
        point(M, 1.1, "ray"),
        ...angleMark(O, 0, angleOf(O, M), { r: 13, labelR: 16, label: "α" }),
        ...angleMark(C, angleOf(C, M), angleOf(C, P), { r: 12, labelR: 15.5, label: "β" }),
        ...angleMark(M, angleOf(C, M), toO, { r: 9, labelR: 13, label: "i", color: "hot" }),
        ...angleMark(M, angleOf(M, C), angleOf(M, crossing), {
          r: 9,
          labelR: 12,
          label: "r",
          color: "ok",
        }),
        ...angleMark(M, angleOf(M, crossing), 0, { r: 16, labelR: 20, label: "θ" }),
        label(vec(O.x + 2, AXIS_Y + 5), "O", { size: 2.9, anchor: "start", math: true }),
        label(vec(P.x - 4, AXIS_Y - 7), "P", { size: 2.9, anchor: "end", math: true }),
        label(vec(N.x + 3, AXIS_Y - 7), "N", { size: 2.9, anchor: "start", math: true }),
        label(vec(C.x, AXIS_Y - 7), "C", { size: 2.9, anchor: "middle", math: true }),
        label(vec(I.x + 2, AXIS_Y + 5), "I", { size: 2.9, anchor: "start", math: true, color: "ok" }),
        label(vec(M.x - 5, M.y + 6), "M", { size: 2.9, anchor: "end", math: true }),
        label(vec(10, 100), "air  n₁ = 1", { size: 2.7, anchor: "start", color: "muted" }),
        label(vec(222, 100), "glass  n₂ = 1.5", { size: 2.7, anchor: "end", color: "muted" }),
      ],
      checks: [
        { kind: "snell", i: outgoing.angleOfIncidence, r: outgoing.angleOfRefraction, n1, n2 },
        {
          kind: "value",
          label: "spherical formula n₂/v − n₁/u",
          actual: sphericalLHS,
          expected: sphericalRHS,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "refracted ray crosses axis near I",
          actual: dist(crossing, I),
          expected: 0,
          tol: 1,
        },
        { kind: "value", label: "i = α + β", actual: Math.abs(outgoing.angleOfIncidence - (alpha + beta)), expected: 0, tol: 0.02 },
        { kind: "value", label: "β = r + θ", actual: Math.abs(beta - (outgoing.angleOfRefraction + theta)), expected: 0, tol: 0.02 },
      ],
    };
  })(),

  /* ── 3. Lens maker: two refracting surfaces ──────────────────────────── */
  (() => {
    const AXIS_Y = 50;
    const center = vec(70, AXIS_Y);
    const firstPole = vec(center.x, AXIS_Y);
    const secondPole = vec(center.x, AXIS_Y);
    const visualFirstPole = vec(center.x - 2, AXIS_Y);
    const visualSecondPole = vec(center.x + 2, AXIS_Y);
    const r1 = 10;
    const r2 = -10;
    const n1 = 1;
    const nGlass = 1.5;
    const u1 = 8 - firstPole.x;
    const v1 = nGlass / ((nGlass - n1) / r1 + n1 / u1);
    const intermediate = vec(firstPole.x + v1, AXIS_Y);
    const m1 = (n1 * v1) / (nGlass * u1);
    const intermediateTip = vec(intermediate.x, AXIS_Y + m1 * 12);
    const u2 = intermediate.x - secondPole.x;
    const v2 = 1 / ((1 - nGlass) / r2 + nGlass / u2);
    const thin = solveThinLens({ center, f: 10, object: vec(8, 62) })!;
    const A = vec(center.x, AXIS_Y + 14);
    const B = visualFirstPole;
    const C = vec(center.x, AXIS_Y - 14);
    const D = visualSecondPole;
    const objectTip = vec(8, 62);
    const parallelHitsLens = vec(center.x, objectTip.y);

    return {
      id: "sl-thin-lens-two-surfaces",
      title: "Lens maker's formula — first and second refracting surfaces",
      alt:
        "A thin biconvex lens is split into two spherical surfaces. Rays from an object first head towards a virtual intermediate image I prime, then the second surface forms the final inverted image at the thin-lens position.",
      caption:
        "The first surface predicts I′; the second surface refines it into the final image I. The dashed continuations meet at I′ while the solid rays meet at I.",
      frame: { width: 230, height: 110 },
      labelSize: 2.6,
      elements: [
        line(vec(4, AXIS_Y), vec(222, AXIS_Y), AXIS),
        body(lensOutline(center, 14, 2)),
        rayPoly([A, B, C], s("ink", 0.5)),
        rayPoly([A, D, C], s("ink", 0.5)),
        line(vec(firstPole.x + r1, AXIS_Y), firstPole, GUIDE),
        line(vec(secondPole.x + r2, AXIS_Y), secondPole, GUIDE),
        point(vec(firstPole.x + r1, AXIS_Y), 0.9, "muted"),
        point(vec(secondPole.x + r2, AXIS_Y), 0.9, "muted"),
        arrow(vec(8, AXIS_Y), objectTip, INCIDENT),
        arrow(objectTip, parallelHitsLens, INCIDENT),
        arrow(parallelHitsLens, thin.image, EMERGENT),
        arrow(objectTip, center, INCIDENT),
        arrow(center, thin.image, EMERGENT),
        line(parallelHitsLens, intermediateTip, VIRTUAL),
        line(center, intermediateTip, VIRTUAL),
        point(vec(center.x - 10, AXIS_Y), 1),
        point(vec(center.x + 10, AXIS_Y), 1),
        point(intermediate, 1.1, "warn"),
        point(intermediateTip, 1.1, "warn"),
        arrow(vec(thin.image.x, AXIS_Y), thin.image, EMERGENT),
        label(vec(5, AXIS_Y + 4), "O", { size: 2.8, anchor: "start", math: true }),
        label(vec(A.x - 2, A.y + 4), "A", { size: 2.4, anchor: "end", math: true }),
        label(vec(B.x - 3, B.y + 4), "B", { size: 2.4, anchor: "end", math: true }),
        label(vec(C.x - 2, C.y - 3), "C", { size: 2.4, anchor: "end", math: true }),
        label(vec(D.x + 3, D.y + 4), "D", { size: 2.4, anchor: "start", math: true }),
        label(vec(center.x - 10, AXIS_Y - 5), "F", { size: 2.6, anchor: "middle", math: true }),
        label(vec(center.x + 10, AXIS_Y - 5), "F′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(84, 59), "R₁ = +10", { size: 2.5, anchor: "middle", color: "ok" }),
        label(vec(56, 41), "R₂ = −10", { size: 2.5, anchor: "middle", color: "hot" }),
        label(vec(intermediate.x + 3, intermediate.y - 5), "I′", { size: 2.8, anchor: "start", math: true, color: "warn" }),
        label(vec(thin.image.x + 3, thin.image.y + 3), "I", { size: 2.8, anchor: "start", math: true, color: "ok" }),
      ],
      checks: [
        { kind: "lens", u: center.x - 8, v: thin.v, f: 10 },
        {
          kind: "value",
          label: "first surface n₂/v₁ − n₁/u₁",
          actual: nGlass / v1 - n1 / u1,
          expected: (nGlass - n1) / r1,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "second surface 1/v₂ − n₁/u₂",
          actual: 1 / v2 - nGlass / u2,
          expected: (1 - nGlass) / r2,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "final image agrees with thin lens",
          actual: Math.abs(secondPole.x + v2 - thin.image.x),
          expected: 0,
          tol: 1.5,
        },
      ],
    };
  })(),

  /* ── 4. Convex and concave lens types ────────────────────────────────── */
  (() => {
    const AXIS_Y = 50;
    const convex = vec(55, AXIS_Y);
    const concave = vec(155, AXIS_Y);
    const f = 14;
    const convexRays = convergingRays(convex, f, [9, -9], 6, 82);
    const concaveRays = divergingRays(concave, -f, [9, -9], 106, 200);
    const tickAt = (x: number, above: boolean): Vec => vec(x, AXIS_Y + (above ? 9 : -9));

    return {
      id: "sl-lens-types-pair",
      title: "Convex and concave lenses — principal points and parallel rays",
      alt:
        "Two panels compare a convex lens, whose parallel rays converge at F prime, with a concave lens, whose parallel rays diverge as if from F on the incident side. F, F prime, C and C prime are marked on both.",
      caption:
        "Converging (convex) rays meet at F′; diverging (concave) rays only appear to start at F, shown by the dashed back-extensions.",
      frame: { width: 210, height: 100 },
      labelSize: 2.7,
      elements: [
        line(vec(4, AXIS_Y), vec(84, AXIS_Y), AXIS),
        line(vec(104, AXIS_Y), vec(204, AXIS_Y), AXIS),
        line(vec(93, 6), vec(93, 94), GUIDE),
        body(lensOutline(convex, 18, 4)),
        body(lensOutline(concave, 18, -4)),
        arrow(vec(10, AXIS_Y), vec(10, AXIS_Y + 10), INCIDENT),
        arrow(vec(110, AXIS_Y), vec(110, AXIS_Y + 10), INCIDENT),
        ...convexRays.flatMap((ray) => [arrow(ray.start, ray.lensPoint, INCIDENT), arrow(ray.lensPoint, ray.end, EMERGENT)]),
        ...concaveRays.flatMap((ray) => [
          arrow(ray.start, ray.lensPoint, INCIDENT),
          arrow(ray.lensPoint, ray.end, EMERGENT),
          line(ray.lensPoint, ray.focus, VIRTUAL),
        ]),
        ...[convex.x - 2 * f, convex.x - f, convex.x, convex.x + f, convex.x + 2 * f].map((x) =>
          point(vec(x, AXIS_Y), 1, x === convex.x ? "ink" : "muted"),
        ),
        ...[concave.x - 2 * f, concave.x - f, concave.x, concave.x + f, concave.x + 2 * f].map((x) =>
          point(vec(x, AXIS_Y), 1, x === concave.x ? "ink" : "muted"),
        ),
        label(vec(convex.x - 2 * f, AXIS_Y - 6), "C", { size: 2.6, anchor: "middle", math: true }),
        label(vec(convex.x - f, AXIS_Y - 6), "F", { size: 2.6, anchor: "middle", math: true }),
        label(vec(convex.x + 2, AXIS_Y + 4), "O", { size: 2.6, anchor: "start", math: true }),
        label(vec(convex.x + f, AXIS_Y - 6), "F′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(convex.x + 2 * f, AXIS_Y - 6), "C′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(concave.x - 2 * f, AXIS_Y - 6), "C", { size: 2.6, anchor: "middle", math: true }),
        label(vec(concave.x - f, AXIS_Y - 6), "F", { size: 2.6, anchor: "middle", math: true }),
        label(vec(concave.x + 2, AXIS_Y + 4), "O", { size: 2.6, anchor: "start", math: true }),
        label(vec(concave.x + f, AXIS_Y - 6), "F′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(concave.x + 2 * f, AXIS_Y - 6), "C′", { size: 2.6, anchor: "middle", math: true }),
        line(tickAt(convex.x - f, true), tickAt(convex.x - f, false), GUIDE),
        line(tickAt(convex.x + f, true), tickAt(convex.x + f, false), GUIDE),
        line(tickAt(concave.x - f, true), tickAt(concave.x - f, false), GUIDE),
        line(tickAt(concave.x + f, true), tickAt(concave.x + f, false), GUIDE),
        label(vec(55, 5), "Convex lens", { size: 2.6, anchor: "middle", color: "muted" }),
        label(vec(155, 5), "Concave lens", { size: 2.6, anchor: "middle", color: "muted" }),
      ],
      checks: [
        ...convexRays.map((ray, i) => ({
          kind: "value" as const,
          label: `convex ray ${i + 1} heads for F′`,
          actual: lineDistance(ray.focus, ray.lensPoint, sub(ray.end, ray.lensPoint)),
          expected: 0,
          tol: 1e-9,
        })),
        ...concaveRays.map((ray, i) => ({
          kind: "value" as const,
          label: `concave ray ${i + 1} extends back through F`,
          actual: angleBetween(sub(ray.lensPoint, ray.focus), sub(ray.end, ray.lensPoint)),
          expected: 0,
          tol: 1e-9,
        })),
      ],
    };
  })(),
  /* ── 5. Signed radii and focal lengths ──────────────────────────────── */
  (() => {
    const AXIS_Y = 50;
    const convexCenter = vec(58, AXIS_Y);
    const concaveCenter = vec(162, AXIS_Y);
    const r = 12;
    const fConvex = 14;
    const fConcave = -14;
    const convexLens = signedLensGeometry(convexCenter, 8, 2, r, -r);
    const concaveLens = signedLensGeometry(concaveCenter, 8, 2, -r, r);
    const midpoint = (a: Vec, b: Vec): Vec => lerpVec(a, b, 0.5);

    return {
      id: "sl-lens-sign-convention",
      title: "Sign convention for converging and diverging lenses",
      alt:
        "Two lens cross-sections with radius arrows: the biconvex lens has a positive first radius, negative second radius and positive focal length; the biconcave lens has the opposite signs. Positive quantities are green and negative quantities red.",
      caption:
        "A radius is positive when its centre lies to the right of the surface. Convex: R₁ > 0, R₂ < 0, f > 0. Concave: R₁ < 0, R₂ > 0, f < 0.",
      frame: { width: 220, height: 100 },
      labelSize: 2.5,
      elements: [
        line(vec(4, AXIS_Y), vec(216, AXIS_Y), AXIS),
        line(vec(110, 6), vec(110, 94), GUIDE),
        body(convexLens.body),
        body(concaveLens.body),
        arrow(convexLens.firstCenter, convexLens.firstPole, signStroke(true)),
        arrow(convexLens.secondCenter, convexLens.secondPole, signStroke(false)),
        arrow(concaveLens.firstCenter, concaveLens.firstPole, signStroke(false)),
        arrow(concaveLens.secondCenter, concaveLens.secondPole, signStroke(true)),
        point(convexCenter, 1.1),
        point(concaveCenter, 1.1),
        point(convexLens.firstCenter, 0.8, "muted"),
        point(convexLens.secondCenter, 0.8, "muted"),
        point(concaveLens.firstCenter, 0.8, "muted"),
        point(concaveLens.secondCenter, 0.8, "muted"),
        arrow(vec(convexCenter.x, 18), vec(convexCenter.x + fConvex, 18), signStroke(true)),
        arrow(vec(concaveCenter.x, 82), vec(concaveCenter.x + fConcave, 82), signStroke(false)),
        label(add(midpoint(convexLens.firstCenter, convexLens.firstPole), vec(0, 8)), "R₁ > 0", {
          size: 2.5,
          anchor: "middle",
          color: "ok",
        }),
        label(add(midpoint(convexLens.secondCenter, convexLens.secondPole), vec(0, -8)), "R₂ < 0", {
          size: 2.5,
          anchor: "middle",
          color: "hot",
        }),
        label(add(midpoint(concaveLens.firstCenter, concaveLens.firstPole), vec(0, -8)), "R₁ < 0", {
          size: 2.5,
          anchor: "middle",
          color: "hot",
        }),
        label(add(midpoint(concaveLens.secondCenter, concaveLens.secondPole), vec(0, 8)), "R₂ > 0", {
          size: 2.5,
          anchor: "middle",
          color: "ok",
        }),
        label(vec(convexCenter.x + fConvex / 2, 13), "f > 0", { size: 2.6, anchor: "middle", color: "ok" }),
        label(vec(concaveCenter.x + fConcave / 2, 87), "f < 0", { size: 2.6, anchor: "middle", color: "hot" }),
        label(vec(convexCenter.x, AXIS_Y - 2), "O", { size: 2.6, anchor: "middle", math: true }),
        label(vec(concaveCenter.x, AXIS_Y + 5), "O", { size: 2.6, anchor: "middle", math: true }),
        label(vec(convexCenter.x, 4), "Convex lens", { size: 2.5, anchor: "middle", color: "muted" }),
        label(vec(concaveCenter.x, 4), "Concave lens", { size: 2.5, anchor: "middle", color: "muted" }),
      ],
      checks: [
        { kind: "value", label: "convex R₁ sign", actual: Math.sign(r), expected: 1, tol: 0 },
        { kind: "value", label: "convex R₂ sign", actual: Math.sign(-r), expected: -1, tol: 0 },
        { kind: "value", label: "convex f sign", actual: Math.sign(fConvex), expected: 1, tol: 0 },
        { kind: "value", label: "concave R₁ sign", actual: Math.sign(-r), expected: -1, tol: 0 },
        { kind: "value", label: "concave R₂ sign", actual: Math.sign(r), expected: 1, tol: 0 },
        { kind: "value", label: "concave f sign", actual: Math.sign(fConcave), expected: -1, tol: 0 },
        {
          kind: "value",
          label: "radius lengths match |R|",
          actual: Math.max(
            len(sub(convexLens.firstCenter, convexLens.firstPole)),
            len(sub(concaveLens.secondCenter, concaveLens.secondPole)),
          ),
          expected: r,
          tol: 1e-9,
        },
      ],
    };
  })(),

  /* ── 6. Three principal rays of a convex lens ────────────────────────── */
  (() => {
    const AXIS_Y = 52;
    const center = vec(95, AXIS_Y);
    const f = 16;
    const objectBase = vec(35, AXIS_Y);
    const objectTip = vec(35, 70);
    const thin = solveThinLens({ center, f, object: objectTip })!;
    const hot = s("hot", 0.8);
    const green = s("ok", 0.8);
    const parallelLensPoint = thin.lensPoints.parallel;
    const focusLensPoint = thin.lensPoints.throughFocus;
    const [object, leftFocus, , focusRayEnd] = thin.rays.throughFocus;

    return {
      id: "sl-convex-three-rays",
      title: "Convex lens — the three principal rays",
      alt:
        "An object arrow to the left of a convex lens sends three numbered rays: one parallel that refracts through F prime, one through the optical centre that is undeviated, and one through F that emerges parallel. All meet at the same inverted image tip.",
      caption:
        "1 parallel → F′; 2 through O undeviated; 3 through F → parallel. The three rays meet at the same image point predicted by the lens equation.",
      frame: { width: 190, height: 110 },
      labelSize: 2.7,
      elements: [
        line(vec(6, AXIS_Y), vec(184, AXIS_Y), AXIS),
        body(lensOutline(center, 18, 4)),
        arrow(objectBase, objectTip, INCIDENT),
        arrow(objectTip, parallelLensPoint, hot),
        arrow(parallelLensPoint, thin.image, hot),
        arrow(thin.image, thin.rays.parallel[3], hot),
        arrow(object, center, RAY),
        arrow(center, thin.image, RAY),
        arrow(thin.image, thin.rays.throughCenter[3], RAY),
        arrow(object, leftFocus, green),
        arrow(leftFocus, focusLensPoint, green),
        arrow(focusLensPoint, focusRayEnd, green),
        ...[thin.focalPoints[0], thin.focalPoints[1], vec(center.x - 2 * f, AXIS_Y), vec(center.x + 2 * f, AXIS_Y)].map((p) => point(p, 1, "muted")),
        point(thin.image, 1.2, "ok"),
        label(vec(center.x - 2 * f, AXIS_Y - 6), "C", { size: 2.6, anchor: "middle", math: true }),
        label(vec(thin.focalPoints[0].x, AXIS_Y - 6), "F", { size: 2.6, anchor: "middle", math: true }),
        label(vec(center.x + 2, AXIS_Y + 4), "O", { size: 2.6, anchor: "start", math: true }),
        label(vec(thin.focalPoints[1].x, AXIS_Y - 6), "F′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(center.x + 2 * f, AXIS_Y - 6), "C′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(objectTip.x - 3, objectTip.y + 4), "object", { size: 2.5, anchor: "end", color: "hot" }),
        label(vec(thin.image.x + 3, thin.image.y + 3), "I", { size: 2.9, anchor: "start", math: true, color: "ok" }),
        label(add(lerpVec(objectTip, parallelLensPoint, 0.5), vec(0, 4)), "1", { size: 2.7, anchor: "middle", color: "hot" }),
        label(add(lerpVec(object, center, 0.5), vec(0, -4)), "2", { size: 2.7, anchor: "middle" }),
        label(add(lerpVec(object, leftFocus, 0.5), vec(0, 4)), "3", { size: 2.7, anchor: "middle", color: "ok" }),
      ],
      checks: [
        { kind: "lens", u: center.x - object.x, v: thin.v, f },
        {
          kind: "value",
          label: "ray 1 reaches image tip",
          actual: segmentDistance(thin.image, parallelLensPoint, thin.rays.parallel[2]),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "ray 2 reaches image tip",
          actual: segmentDistance(thin.image, center, thin.rays.throughCenter[2]),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "ray 3 reaches image tip",
          actual: segmentDistance(thin.image, focusLensPoint, thin.rays.throughFocus[3]),
          expected: 0,
          tol: 1e-9,
        },
      ],
    };
  })(),

  /* ── 7. Two principal rays of a concave lens ─────────────────────────── */
  (() => {
    const AXIS_Y = 52;
    const center = vec(95, AXIS_Y);
    const f = -24;
    const objectBase = vec(30, AXIS_Y);
    const objectTip = vec(30, 64);
    const uCart = objectBase.x - center.x;
    const vCart = 1 / (1 / f + 1 / uCart);
    const magnification = vCart / uCart;
    const imageTip = vec(center.x + vCart, AXIS_Y + magnification * (objectTip.y - AXIS_Y));
    const imageBase = vec(imageTip.x, AXIS_Y);
    const F = vec(center.x + f, AXIS_Y);
    const Fprime = vec(center.x - f, AXIS_Y);
    const C = vec(center.x + 2 * f, AXIS_Y);
    const Cprime = vec(center.x - 2 * f, AXIS_Y);
    const parallelLensPoint = vec(center.x, objectTip.y);
    const ray1End = atXAlong(parallelLensPoint, unit(sub(parallelLensPoint, F)), 170);
    const ray2End = atXAlong(center, unit(sub(center, objectTip)), 170);
    const virtualTip = intersectLines(
      parallelLensPoint,
      sub(parallelLensPoint, F),
      center,
      sub(center, objectTip),
    )!;
    const virtualStroke = s("ok", 0.8, "dash");

    return {
      id: "sl-concave-principal-rays",
      title: "Concave lens — parallel and central principal rays",
      alt:
        "A concave lens receives a parallel ray that leaves as if it came from the near focus F, and a ray through its optical centre that continues straight. Their dashed back-extensions locate a virtual, upright image on the object side.",
      caption:
        "The emergent parallel ray extends back through F; the central ray is undeviated. Their back-extensions meet at the virtual image given by the thin-lens equation.",
      frame: { width: 190, height: 105 },
      labelSize: 2.6,
      elements: [
        line(vec(6, AXIS_Y), vec(184, AXIS_Y), AXIS),
        body(lensOutline(center, 18, -4)),
        arrow(objectBase, objectTip, INCIDENT),
        arrow(objectTip, parallelLensPoint, INCIDENT),
        arrow(parallelLensPoint, ray1End, EMERGENT),
        arrow(objectTip, center, RAY),
        arrow(center, ray2End, RAY),
        line(parallelLensPoint, virtualTip, VIRTUAL),
        line(center, virtualTip, VIRTUAL),
        arrow(imageBase, imageTip, virtualStroke),
        ...[C, F, center, Fprime, Cprime].map((p) => point(p, 1, p === center ? "ink" : "muted")),
        point(virtualTip, 1.1, "ok"),
        label(vec(C.x, AXIS_Y - 6), "C", { size: 2.6, anchor: "middle", math: true }),
        label(vec(F.x, AXIS_Y - 6), "F", { size: 2.6, anchor: "middle", math: true }),
        label(vec(center.x + 2, AXIS_Y + 4), "O", { size: 2.6, anchor: "start", math: true }),
        label(vec(Fprime.x, AXIS_Y - 6), "F′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(Cprime.x, AXIS_Y - 6), "C′", { size: 2.6, anchor: "middle", math: true }),
        label(vec(objectTip.x - 3, objectTip.y + 4), "object", { size: 2.5, anchor: "end", color: "hot" }),
        label(vec(virtualTip.x, virtualTip.y + 7), "I (virtual)", { size: 2.5, anchor: "middle", color: "ok" }),
        label(vec(parallelLensPoint.x + 5, parallelLensPoint.y + 4), "1", { size: 2.6, anchor: "start", color: "hot" }),
        label(vec(lerpVec(objectTip, center, 0.5).x, lerpVec(objectTip, center, 0.5).y + 4), "2", {
          size: 2.6,
          anchor: "middle",
        }),
      ],
      checks: [
        {
          kind: "value",
          label: "diverging lens equation 1/v − 1/u = 1/f",
          actual: 1 / vCart - 1 / uCart,
          expected: 1 / f,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "dashed parallel-ray extension passes through F",
          actual: lineDistance(F, parallelLensPoint, sub(virtualTip, parallelLensPoint)),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "dashed central extension passes through image",
          actual: lineDistance(imageTip, objectTip, sub(center, objectTip)),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "ray intersection agrees with lens equation",
          actual: dist(virtualTip, imageTip),
          expected: 0,
          tol: 1e-9,
        },
      ],
    };
  })(),

  /* ── 8. Object at C: examination-style construction ─────────────────── */
  (() => {
    const AXIS_Y = 52;
    const center = vec(95, AXIS_Y);
    const f = 18;
    const objectBase = vec(center.x - 2 * f, AXIS_Y);
    const objectTip = vec(objectBase.x, AXIS_Y + 14);
    const thin = solveThinLens({ center, f, object: objectTip })!;
    const parallelLensPoint = thin.lensPoints.parallel;
    const Fprime = thin.focalPoints[1];
    const ray1End = atXAlong(parallelLensPoint, unit(sub(Fprime, parallelLensPoint)), 170);
    const ray2End = atXAlong(center, unit(sub(center, objectTip)), 170);
    const rayIntersection = intersectLines(
      parallelLensPoint,
      sub(Fprime, parallelLensPoint),
      center,
      sub(center, objectTip),
    )!;

    return {
      id: "sl-convex-object-at-centre",
      title: "Convex lens — object at C gives an equal, inverted image at C′",
      alt:
        "An object arrow stands at C, twice the focal length in front of a convex lens. A ray parallel to the axis refracts through F prime and a ray through the optical centre continues straight; they meet at C prime as an inverted image of equal height.",
      caption:
        "u = 2f ⟹ v = 2f and m = −1: the image at C′ is real, inverted and the same size as the object at C.",
      frame: { width: 190, height: 105 },
      labelSize: 2.7,
      elements: [
        line(vec(6, AXIS_Y), vec(184, AXIS_Y), AXIS),
        body(lensOutline(center, 18, 4)),
        arrow(objectBase, objectTip, INCIDENT),
        arrow(objectTip, parallelLensPoint, s("hot", 0.8)),
        arrow(parallelLensPoint, rayIntersection, s("hot", 0.8)),
        arrow(rayIntersection, ray1End, s("hot", 0.8)),
        arrow(objectTip, center, RAY),
        arrow(center, rayIntersection, RAY),
        arrow(rayIntersection, ray2End, RAY),
        arrow(vec(rayIntersection.x, AXIS_Y), rayIntersection, EMERGENT),
        ...[thin.focalPoints[0], thin.focalPoints[1], objectBase, vec(center.x + 2 * f, AXIS_Y)].map((p) => point(p, 1.1, "muted")),
        point(rayIntersection, 1.2, "ok"),
        label(vec(thin.focalPoints[0].x, AXIS_Y - 6), "F", { size: 2.7, anchor: "middle", math: true }),
        label(vec(objectBase.x, AXIS_Y - 6), "C", { size: 2.7, anchor: "middle", math: true }),
        label(vec(center.x + 2, AXIS_Y + 4), "O", { size: 2.7, anchor: "start", math: true }),
        label(vec(Fprime.x, AXIS_Y - 6), "F′", { size: 2.7, anchor: "middle", math: true }),
        label(vec(center.x + 2 * f, AXIS_Y - 6), "C′", { size: 2.7, anchor: "middle", math: true }),
        label(vec(objectTip.x - 4, objectTip.y + 5), "object", { size: 2.5, anchor: "end", color: "hot" }),
        label(vec(rayIntersection.x + 3, rayIntersection.y + 4), "image", { size: 2.5, anchor: "start", color: "ok" }),
        label(add(lerpVec(objectTip, parallelLensPoint, 0.55), vec(0, 4)), "1", { size: 2.7, anchor: "middle", color: "hot" }),
        label(add(lerpVec(objectTip, center, 0.45), vec(0, -4)), "2", { size: 2.7, anchor: "middle" }),
      ],
      checks: [
        { kind: "lens", u: center.x - objectBase.x, v: thin.v, f },
        { kind: "value", label: "magnification m", actual: thin.magnification, expected: -1, tol: 1e-9 },
        {
          kind: "value",
          label: "equal object and image heights",
          actual: Math.abs(objectTip.y - AXIS_Y) - Math.abs(thin.image.y - AXIS_Y),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "ray 1 passes through image tip",
          actual: lineDistance(Fprime, parallelLensPoint, sub(rayIntersection, parallelLensPoint)),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "ray 2 passes through image tip",
          actual: lineDistance(rayIntersection, objectTip, sub(center, objectTip)),
          expected: 0,
          tol: 1e-9,
        },
        {
          kind: "value",
          label: "ray intersection equals thin-lens image",
          actual: dist(rayIntersection, thin.image),
          expected: 0,
          tol: 1e-9,
        },
      ],
    };
  })(),
  /* ── 9. Power comparison pair ───────────────────────────────────────── */
  (() => {
    const AXIS_Y = 34;
    const convex = vec(46, AXIS_Y);
    const concave = vec(124, AXIS_Y);
    const f = 14;
    const converging = convergingRays(convex, f, [8, -8], 8, 70);
    const diverging = divergingRays(concave, -f, [8, -8], 86, 162);

    return {
      id: "sl-power-ray-pair",
      title: "Power: converging and diverging lenses compared",
      alt:
        "Two compact panels place equal parallel rays through a convex and a concave lens. The convex rays converge at F prime; the concave rays spread apart and extend back to F.",
      caption: "High positive power converges rays; negative power makes them diverge as if from F.",
      frame: { width: 170, height: 66 },
      labelSize: 2.4,
      elements: [
        line(vec(4, AXIS_Y), vec(80, AXIS_Y), AXIS),
        line(vec(90, AXIS_Y), vec(166, AXIS_Y), AXIS),
        line(vec(85, 5), vec(85, 61), GUIDE),
        body(lensOutline(convex, 11, 3)),
        body(lensOutline(concave, 11, -3)),
        ...converging.flatMap((ray) => [arrow(ray.start, ray.lensPoint, INCIDENT), arrow(ray.lensPoint, ray.end, EMERGENT)]),
        ...diverging.flatMap((ray) => [
          arrow(ray.start, ray.lensPoint, INCIDENT),
          arrow(ray.lensPoint, ray.end, EMERGENT),
          line(ray.lensPoint, ray.focus, VIRTUAL),
        ]),
        point(converging[0].focus, 1, "ok"),
        point(diverging[0].focus, 1, "warn"),
        label(vec(converging[0].focus.x, AXIS_Y - 5), "F′", { size: 2.4, anchor: "middle", math: true }),
        label(vec(diverging[0].focus.x, AXIS_Y - 5), "F", { size: 2.4, anchor: "middle", math: true }),
        label(vec(convex.x, 4), "Converging", { size: 2.4, anchor: "middle", color: "muted" }),
        label(vec(concave.x, 4), "Diverging", { size: 2.4, anchor: "middle", color: "muted" }),
      ],
      checks: [
        ...converging.map((ray, i) => ({
          kind: "value" as const,
          label: `convex panel ray ${i + 1} heads for F′`,
          actual: lineDistance(ray.focus, ray.lensPoint, sub(ray.end, ray.lensPoint)),
          expected: 0,
          tol: 1e-9,
        })),
        ...diverging.map((ray, i) => ({
          kind: "value" as const,
          label: `concave panel ray ${i + 1} extends back through F`,
          actual: lineDistance(ray.focus, ray.lensPoint, sub(ray.end, ray.lensPoint)),
          expected: 0,
          tol: 1e-9,
        })),
      ],
    };
  })(),

  /* ── 10. Compact convex power ray ───────────────────────────────────── */
  (() => {
    const AXIS_Y = 26;
    const center = vec(38, AXIS_Y);
    const f = 14;
    const rays = convergingRays(center, f, [6, -6], 4, 66);

    return {
      id: "sl-power-convex",
      title: "Convex lens power — rays converge",
      alt: "A tiny convex-lens panel with two parallel rays bending towards one focal point F prime on the far side.",
      caption: "Positive power: two parallel rays converge at F′.",
      frame: { width: 72, height: 52 },
      labelSize: 2.4,
      elements: [
        line(vec(2, AXIS_Y), vec(70, AXIS_Y), AXIS),
        body(lensOutline(center, 10, 2.5)),
        ...rays.flatMap((ray) => [arrow(ray.start, ray.lensPoint, INCIDENT), arrow(ray.lensPoint, ray.end, EMERGENT)]),
        point(rays[0].focus, 1, "ok"),
        label(vec(rays[0].focus.x, AXIS_Y - 5), "F′", { size: 2.4, anchor: "middle", math: true }),
      ],
      checks: rays.map((ray, i) => ({
        kind: "value" as const,
        label: `convex power ray ${i + 1} heads for F′`,
        actual: lineDistance(ray.focus, ray.lensPoint, sub(ray.end, ray.lensPoint)),
        expected: 0,
        tol: 1e-9,
      })),
    };
  })(),

  /* ── 11. Compact concave power ray ──────────────────────────────────── */
  (() => {
    const AXIS_Y = 26;
    const center = vec(38, AXIS_Y);
    const f = -14;
    const rays = divergingRays(center, f, [6, -6], 4, 66);

    return {
      id: "sl-power-concave",
      title: "Concave lens power — rays diverge",
      alt: "A tiny concave-lens panel with two parallel rays leaving as if they came from the focal point F on the incident side, shown by short dashed back-extensions.",
      caption: "Negative power: parallel rays diverge as if from F.",
      frame: { width: 72, height: 52 },
      labelSize: 2.4,
      elements: [
        line(vec(2, AXIS_Y), vec(70, AXIS_Y), AXIS),
        body(lensOutline(center, 10, -2.5)),
        ...rays.flatMap((ray) => [
          arrow(ray.start, ray.lensPoint, INCIDENT),
          arrow(ray.lensPoint, ray.end, EMERGENT),
          line(ray.lensPoint, ray.focus, VIRTUAL),
        ]),
        point(rays[0].focus, 1, "warn"),
        label(vec(rays[0].focus.x, AXIS_Y - 5), "F", { size: 2.4, anchor: "middle", math: true }),
      ],
      checks: rays.map((ray, i) => ({
        kind: "value" as const,
        label: `concave power ray ${i + 1} extends back through F`,
        actual: lineDistance(ray.focus, ray.lensPoint, sub(ray.end, ray.lensPoint)),
        expected: 0,
        tol: 1e-9,
      })),
    };
  })(),
];

/* Named exports for the chapter page, kept in sync with the array order. */
export const sphericalSurfaceLensHeader: FigureSpec = SPHERICAL_LENS_FIGURES[0];
export const sphericalSurfaceRefractionGeometry: FigureSpec = SPHERICAL_LENS_FIGURES[1];
export const thinLensTwoSurfaceSetup: FigureSpec = SPHERICAL_LENS_FIGURES[2];
export const lensTypesPair: FigureSpec = SPHERICAL_LENS_FIGURES[3];
export const lensSignConventionPair: FigureSpec = SPHERICAL_LENS_FIGURES[4];
export const convexLensThreePrincipalRays: FigureSpec = SPHERICAL_LENS_FIGURES[5];
export const concaveLensPrincipalRays: FigureSpec = SPHERICAL_LENS_FIGURES[6];
export const convexLensObjectAtCentre: FigureSpec = SPHERICAL_LENS_FIGURES[7];
export const lensPowerRayPair: FigureSpec = SPHERICAL_LENS_FIGURES[8];
export const convexPowerRay: FigureSpec = SPHERICAL_LENS_FIGURES[9];
export const concavePowerRay: FigureSpec = SPHERICAL_LENS_FIGURES[10];
