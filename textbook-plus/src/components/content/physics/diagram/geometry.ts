/**
 * geometry.ts — pure 2-D geometry for physics figures.
 *
 * Spec space is **y-up** (textbook convention: +y points up the page). The
 * renderer flips to SVG's y-down once, at the very end, so every angle,
 * normal and intersection below follows the physics, not the screen.
 *
 * No React, no DOM, no I/O: this module runs the same in the browser, in
 * `next build`, and in `node scripts/verify-figures.mjs`.
 */

export type Vec = { readonly x: number; readonly y: number };

export const vec = (x: number, y: number): Vec => ({ x, y });

export const add = (a: Vec, b: Vec): Vec => ({ x: a.x + b.x, y: a.y + b.y });
export const sub = (a: Vec, b: Vec): Vec => ({ x: a.x - b.x, y: a.y - b.y });
export const mul = (a: Vec, k: number): Vec => ({ x: a.x * k, y: a.y * k });
export const neg = (a: Vec): Vec => ({ x: -a.x, y: -a.y });

export const dot = (a: Vec, b: Vec): number => a.x * b.x + a.y * b.y;
export const cross = (a: Vec, b: Vec): number => a.x * b.y - a.y * b.x;
export const len = (a: Vec): number => Math.hypot(a.x, a.y);
export const dist = (a: Vec, b: Vec): number => len(sub(a, b));

/** Rotate 90° counter-clockwise. */
export const perp = (a: Vec): Vec => ({ x: -a.y, y: a.x });

export function unit(a: Vec): Vec {
  const l = len(a);
  if (!(l > 1e-12)) throw new Error("unit(): zero-length vector");
  return mul(a, 1 / l);
}

export const rad = (deg: number): number => (deg * Math.PI) / 180;
export const toDeg = (r: number): number => (r * 180) / Math.PI;

/** Unit vector at `deg` counter-clockwise from +x (y-up). */
export const dir = (deg: number): Vec => ({ x: Math.cos(rad(deg)), y: Math.sin(rad(deg)) });

/** Direction of `b - a`, in degrees, in (-180, 180]. */
export const angleOf = (a: Vec, b: Vec = vec(0, 0)): number => toDeg(Math.atan2(b.y - a.y, b.x - a.x));

export const mid = (a: Vec, b: Vec): Vec => mul(add(a, b), 0.5);
export const lerp = (a: Vec, b: Vec, t: number): Vec => add(a, mul(sub(b, a), t));
export const polar = (origin: Vec, deg: number, r: number): Vec => add(origin, mul(dir(deg), r));

/** Unsigned angle between two directions, 0–180°. */
export function angleBetween(a: Vec, b: Vec): number {
  const c = Math.max(-1, Math.min(1, dot(unit(a), unit(b))));
  return toDeg(Math.acos(c));
}

/** Smallest signed turn from direction `a` to direction `b`, in (-180, 180]. */
export function signedTurn(a: number, b: number): number {
  let d = ((b - a + 180) % 360 + 360) % 360 - 180;
  if (d === -180) d = 180;
  return d;
}

/** Intersection of infinite lines `p + t·d`; null when parallel. */
export function intersectLines(p: Vec, d: Vec, q: Vec, e: Vec): Vec | null {
  const den = cross(d, e);
  if (Math.abs(den) < 1e-12) return null;
  const t = cross(sub(q, p), e) / den;
  return add(p, mul(d, t));
}

/**
 * Intersection of segments a–b and c–d, with the parameter along each.
 * `t` is the fraction along a→b, `u` the fraction along c→d.
 */
export function intersectSegments(
  a: Vec,
  b: Vec,
  c: Vec,
  d: Vec,
): { at: Vec; t: number; u: number } | null {
  const s = sub(b, a);
  const r = sub(d, c);
  const den = cross(s, r);
  if (Math.abs(den) < 1e-12) return null;
  const t = cross(sub(c, a), r) / den;
  const u = cross(sub(c, a), s) / den;
  if (t < -1e-9 || t > 1 + 1e-9 || u < -1e-9 || u > 1 + 1e-9) return null;
  return { at: add(a, mul(s, t)), t, u };
}

/** Where a ray from `p` along `d` first meets segment a–b (t > eps), with t = distance. */
export function rayHitSegment(
  p: Vec,
  d: Vec,
  a: Vec,
  b: Vec,
  eps = 1e-6,
): { at: Vec; t: number } | null {
  const s = sub(b, a);
  const den = cross(d, s);
  if (Math.abs(den) < 1e-12) return null;
  const diff = sub(a, p);
  const t = cross(diff, s) / den;
  const u = cross(diff, d) / den;
  if (t <= eps || u < -1e-9 || u > 1 + 1e-9) return null;
  return { at: add(p, mul(d, t)), t };
}

/** Sampled circular arc (degrees, CCW). Sampling avoids SVG sweep-flag bugs. */
export function arcPoints(
  center: Vec,
  radius: number,
  fromDeg: number,
  toDeg: number,
  maxStepDeg = 4,
): Vec[] {
  const sweep = Math.abs(toDeg - fromDeg);
  if (sweep > 360.5) {
    throw new Error(`arcPoints(): a ${sweep.toFixed(1)}° arc looks like a full circle — check the end angle`);
  }
  const steps = Math.max(1, Math.ceil(sweep / maxStepDeg));
  const pts: Vec[] = [];
  for (let i = 0; i <= steps; i += 1) {
    pts.push(polar(center, fromDeg + ((toDeg - fromDeg) * i) / steps, radius));
  }
  return pts;
}

export function polylineLength(points: readonly Vec[]): number {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) total += dist(points[i - 1], points[i]);
  return total;
}

export type Box = { x: number; y: number; w: number; h: number };

export function bbox(points: readonly Vec[]): Box {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y };
}

export const boxesOverlap = (a: Box, b: Box): boolean =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

export const round = (n: number, places = 2): number => {
  const f = 10 ** places;
  return Math.round(n * f) / f;
};
