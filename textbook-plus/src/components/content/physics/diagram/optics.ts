/**
 * optics.ts — the optical laws themselves, as functions.
 *
 * The point of this layer is that a figure never *draws* a refracted ray by
 * eye: it asks Snell's law where the ray goes. Every angle in a figure built
 * from these helpers is therefore correct by construction, and the validator
 * re-checks it against the textbook formula.
 *
 * Same rules as geometry.ts: pure, y-up, no React.
 */
import {
  add,
  angleOf,
  angleBetween,
  cross,
  dir,
  dist,
  dot,
  len,
  mul,
  perp,
  rayHitSegment,
  sub,
  toDeg,
  unit,
  type Vec,
} from "./geometry.ts";

/* ── single interface ────────────────────────────────────────────────── */

export type Refraction = { dir: Vec | null; tir: boolean; angleOfIncidence: number; angleOfRefraction: number };

/** Law of reflection: d′ = d − 2(d·n̂)n̂, with n̂ normalised and pointing into the incoming ray. */
export function reflect(d: Vec, n: Vec): Vec {
  const nn = unit(n);
  const oriented = dot(d, nn) > 0 ? mul(nn, -1) : nn;
  return unit(sub(d, mul(oriented, 2 * dot(d, oriented))));
}

/**
 * Snell's law in vector form: n₁ sin θ₁ = n₂ sin θ₂.
 * `n` is any normal to the interface; it is flipped if needed so that it
 * opposes `d`. Returns `tir: true` (and `dir: null`) past the critical angle.
 */
export function refract(d: Vec, n: Vec, n1: number, n2: number): Refraction {
  const dd = unit(d);
  const nnRaw = unit(n);
  const nn = dot(dd, nnRaw) > 0 ? mul(nnRaw, -1) : nnRaw;

  const cos1 = -dot(dd, nn); // ≥ 0
  const sin1sq = Math.max(0, 1 - cos1 * cos1);
  const eta = n1 / n2;
  const sin2sq = eta * eta * sin1sq;

  const angleOfIncidence = toDeg(Math.asin(Math.sqrt(sin1sq)));

  if (sin2sq > 1 + 1e-12) {
    return { dir: null, tir: true, angleOfIncidence, angleOfRefraction: 90 };
  }

  const cos2 = Math.sqrt(Math.max(0, 1 - sin2sq));
  const t = add(mul(dd, eta), mul(nn, eta * cos1 - cos2));
  const angleOfRefraction = toDeg(Math.asin(Math.min(1, Math.sqrt(sin2sq))));
  return { dir: unit(t), tir: false, angleOfIncidence, angleOfRefraction };
}

/** Critical angle in degrees, or null when total internal reflection is impossible. */
export function criticalAngleDeg(n1: number, n2: number): number | null {
  if (n1 <= n2) return null;
  return toDeg(Math.asin(n2 / n1));
}

/* ── ray tracing through refracting bodies ───────────────────────────── */

export type RefractingBody = { polygon: readonly Vec[]; n: number; id?: string };

export type RayEventKind = "refract" | "tir" | "exit";

export type RayEvent = {
  at: Vec;
  kind: RayEventKind;
  /** │angle to the normal│ before the interface, degrees. */
  angleOfIncidence: number;
  /** Refracted (or reflected) angle to the normal, degrees. */
  angleAfter: number;
  /** Direction before / after, degrees. */
  inDeg: number;
  outDeg: number;
};

export type RayPath = { points: Vec[]; events: RayEvent[] };

type Edge = { a: Vec; b: Vec; body: RefractingBody };

const edgesOf = (body: RefractingBody): Edge[] =>
  body.polygon.map((a, i) => ({ a, b: body.polygon[(i + 1) % body.polygon.length], body }));

function outwardNormal(edge: Edge): Vec {
  const midX = (edge.a.x + edge.b.x) / 2;
  const midY = (edge.a.y + edge.b.y) / 2;
  const centerX = edge.body.polygon.reduce((s, p) => s + p.x, 0) / edge.body.polygon.length;
  const centerY = edge.body.polygon.reduce((s, p) => s + p.y, 0) / edge.body.polygon.length;
  const n = unit(perp(sub(edge.b, edge.a)));
  const outward = (midX - centerX) * n.x + (midY - centerY) * n.y > 0 ? n : mul(n, -1);
  return outward;
}

/**
 * Trace a ray from `from` at `angleDeg` through a set of refracting bodies
 * (glass slabs, prisms, fibres), tracking which medium the ray is inside.
 * `tail` is how far the final segment runs when it hits nothing.
 */
export function traceRay(opts: {
  from: Vec;
  angleDeg: number;
  bodies?: readonly RefractingBody[];
  n0?: number;
  maxEvents?: number;
  tail?: number;
}): RayPath {
  const { from, angleDeg, bodies = [], n0 = 1, maxEvents = 8, tail = 0 } = opts;
  const edges = bodies.flatMap(edgesOf);
  const points: Vec[] = [from];
  const events: RayEvent[] = [];

  let p = from;
  let d = dir(angleDeg);
  let medium = n0;

  for (let step = 0; step <= maxEvents; step += 1) {
    let best: { at: Vec; t: number; edge: Edge } | null = null;
    for (const edge of edges) {
      const hit = rayHitSegment(p, d, edge.a, edge.b, 1e-7);
      if (!hit) continue;
      if (!best || hit.t < best.t) best = { at: hit.at, t: hit.t, edge };
    }

    if (!best) {
      if (tail > 0) points.push(add(p, mul(d, tail)));
      break;
    }

    const edge = best.edge;
    const normal = outwardNormal(edge);
    const exiting = Math.abs(medium - edge.body.n) < 1e-12;
    const n1 = exiting ? edge.body.n : medium;
    const n2 = exiting ? n0 : edge.body.n;

    const r = refract(d, normal, n1, n2);
    const inDeg = angleOf(p, add(p, d));

    if (r.tir || !r.dir) {
      const reflected = reflect(d, normal);
      events.push({
        at: best.at,
        kind: "tir",
        angleOfIncidence: r.angleOfIncidence,
        angleAfter: r.angleOfIncidence,
        inDeg,
        outDeg: angleOf(p, add(p, reflected)),
      });
      points.push(best.at);
      d = reflected;
      p = best.at;
      continue;
    }

    events.push({
      at: best.at,
      kind: "refract",
      angleOfIncidence: r.angleOfIncidence,
      angleAfter: r.angleOfRefraction,
      inDeg,
      outDeg: angleOf(p, add(p, r.dir)),
    });
    points.push(best.at);
    d = r.dir;
    p = best.at;
    medium = n2;
  }

  return { points, events };
}

/* ── thin lenses ─────────────────────────────────────────────────────── */

export type ThinLensInput = {
  /** Lens centre; the optical axis is horizontal. */
  center: Vec;
  /** Focal length (positive = converging). */
  f: number;
  /** Object tip: x left of the lens, y above the axis. */
  object: Vec;
};

export type ThinLensSolution = {
  image: Vec;
  /** Object distance, positive. */
  u: number;
  /** Image distance, positive (the solution below returns real images only). */
  v: number;
  /** Linear magnification, negative = inverted. */
  magnification: number;
  focalPoints: [Vec, Vec];
  /** Three principal rays, each already a polyline ready to draw. */
  rays: { parallel: Vec[]; throughCenter: Vec[]; throughFocus: Vec[] };
  /** Where the three rays meet the lens plane, for tick marks. */
  lensPoints: { parallel: Vec; throughFocus: Vec };
};

/**
 * Cartesian-free thin-lens solution for a real image formed by a converging
 * lens: 1/v + 1/u = 1/f (magnitudes), m = −v/u. Returns null when no real
 * image exists (u ≤ f), which a figure must not pretend to draw.
 */
export function solveThinLens({ center, f, object }: ThinLensInput, extend = 6): ThinLensSolution | null {
  const cx = center.x;
  const cy = center.y;
  const u = cx - object.x;
  if (!(u > 0) || !(f > 0) || u <= f) return null;

  const v = (u * f) / (u - f);
  const m = -v / u;
  const image: Vec = { x: cx + v, y: cy + m * (object.y - cy) };

  const parallelLensPoint: Vec = { x: cx, y: object.y };
  const focalLensPoint: Vec = { x: cx, y: image.y };

  const forward = (from: Vec, to: Vec): Vec => add(to, mul(unit(sub(to, from)), extend));

  const parallel = [object, parallelLensPoint, image, forward(parallelLensPoint, image)];
  const throughCenter = [object, center, image, forward(center, image)];
  const throughFocus = [
    object,
    { x: cx - f, y: cy },
    focalLensPoint,
    { x: cx + v + extend, y: focalLensPoint.y },
  ];

  return {
    image,
    u,
    v,
    magnification: m,
    focalPoints: [{ x: cx - f, y: cy }, { x: cx + f, y: cy }],
    rays: { parallel, throughCenter, throughFocus },
    lensPoints: { parallel: parallelLensPoint, throughFocus: focalLensPoint },
  };
}

/* ── prisms ──────────────────────────────────────────────────────────── */

/** Deviation produced by a prism of apex angle A, index n, at incidence i. */
export function prismDeviation(apexDeg: number, n: number, incidenceDeg: number): number | null {
  const A = (apexDeg * Math.PI) / 180;
  const i = (incidenceDeg * Math.PI) / 180;
  const sinR1 = Math.sin(i) / n;
  if (Math.abs(sinR1) > 1) return null;
  const r1 = Math.asin(sinR1);
  const r2 = A - r1;
  const sinI2 = n * Math.sin(r2);
  if (Math.abs(sinI2) > 1) return null;
  const i2 = Math.asin(sinI2);
  return ((i + i2 - A) * 180) / Math.PI;
}

/** Minimum deviation for a prism of apex angle A and index n. */
export function minimumDeviation(apexDeg: number, n: number): number | null {
  const A = (apexDeg * Math.PI) / 180;
  const s = n * Math.sin(A / 2);
  if (Math.abs(s) > 1) return null;
  return ((2 * Math.asin(s) - A) * 180) / Math.PI;
}

/** Incidence at minimum deviation. */
export function minimumDeviationIncidence(apexDeg: number, n: number): number | null {
  const A = (apexDeg * Math.PI) / 180;
  const s = n * Math.sin(A / 2);
  if (Math.abs(s) > 1) return null;
  return (Math.asin(s) * 180) / Math.PI;
}

/* ── small helpers used by figures ───────────────────────────────────── */

/** Lateral shift of a ray crossing a parallel-sided slab of thickness d. */
export function slabLateralShift(thickness: number, incidenceDeg: number, n: number): number | null {
  const i = (incidenceDeg * Math.PI) / 180;
  const sinR = Math.sin(i) / n;
  if (Math.abs(sinR) > 1) return null;
  const r = Math.asin(sinR);
  return (thickness * Math.sin(i - r)) / Math.cos(r);
}

/** Apparent depth of a point at real depth d seen from air through index n. */
export const apparentDepth = (depth: number, n: number): number => depth / n;

/** Distance from a point to the nearest polygon edge (used by validators). */
export function distanceToPolygon(p: Vec, polygon: readonly Vec[]): number {
  let best = Infinity;
  for (let i = 0; i < polygon.length; i += 1) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];
    const ab = sub(b, a);
    const t = Math.max(0, Math.min(1, dot(sub(p, a), ab) / dot(ab, ab)));
    best = Math.min(best, dist(p, add(a, mul(ab, t))));
  }
  return best;
}

export { angleBetween, cross, len };
