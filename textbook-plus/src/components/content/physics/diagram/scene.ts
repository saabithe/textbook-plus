/**
 * scene.ts — the figure language.
 *
 * A figure is plain data: a frame plus a list of primitives, built by the
 * helpers at the bottom of this file. Because it is data and not JSX, the same
 * spec is consumed by three things:
 *
 *   1. `PhysicsFigure.tsx` — renders it to inline SVG (theme-aware).
 *   2. `validateFigure()`     — checks bounds, label collisions, degenerate
 *                               arrows, and re-derives every law the figure
 *                               claims to obey (`checks`).
 *   3. `node scripts/verify-figures.mjs` — the CLI gate over every spec.
 *
 * Builders compute; nobody types coordinates they have not solved for.
 */
import {
  add,
  angleOf,
  arcPoints,
  bbox,
  boxesOverlap,
  dir,
  dist,
  len,
  mul,
  perp,
  polar,
  sub,
  type Box,
  type Vec,
} from "./geometry.ts";

/* ── style tokens ────────────────────────────────────────────────────── */

export type ColorToken = "ink" | "muted" | "rule" | "ray" | "hot" | "ok" | "warn";
export type Dash = "dash" | "dot" | "dashdot";
export type Fill = ColorToken | "glass" | "glassStrong" | null;

export type Stroke = { color?: ColorToken; width?: number; dash?: Dash; opacity?: number };

export const s = (color: ColorToken, width = 0.55, dash?: Dash): Stroke => ({ color, width, dash });

export const INK = s("ink", 0.55);
export const THIN = s("muted", 0.35);
export const RAY = s("ray", 0.75);
export const INCIDENT = s("hot", 0.75);
export const EMERGENT = s("ok", 0.75);
export const VIRTUAL = s("warn", 0.5, "dash");
/** Secondary ray (reflection, weak beam): present, but not the story. */
export const REFLECTED = s("muted", 0.5, "dash");
export const GUIDE = s("muted", 0.35, "dash");
export const AXIS = s("rule", 0.4, "dashdot");

/* ── primitives ──────────────────────────────────────────────────────── */

export type Element =
  | { kind: "poly"; points: readonly Vec[]; closed?: boolean; stroke?: Stroke | null; fill?: Fill }
  | { kind: "arrow"; from: Vec; to: Vec; stroke?: Stroke; head?: number }
  | { kind: "circle"; at: Vec; r: number; stroke?: Stroke | null; fill?: Fill }
  | { kind: "dot"; at: Vec; r?: number; color?: ColorToken }
  | {
      kind: "label";
      at: Vec;
      text: string;
      sub?: string;
      sup?: string;
      math?: boolean;
      size?: number;
      anchor?: "start" | "middle" | "end";
      color?: ColorToken;
      rotate?: number;
    };

/* ── builders ────────────────────────────────────────────────────────── */

export const line = (a: Vec, b: Vec, stroke: Stroke = INK): Element => ({
  kind: "poly",
  points: [a, b],
  stroke,
});

export const arrow = (a: Vec, b: Vec, stroke: Stroke = INK, head?: number): Element => ({
  kind: "arrow",
  from: a,
  to: b,
  stroke,
  head,
});

/** Arrow of a given length and direction from a point. */
export const arrowFrom = (at: Vec, angleDeg: number, length: number, stroke: Stroke = INK): Element =>
  arrow(at, add(at, mul(dir(angleDeg), length)), stroke);

export const polygon = (
  points: readonly Vec[],
  opts: { stroke?: Stroke | null; fill?: Fill } = {},
): Element => ({ kind: "poly", points, closed: true, stroke: opts.stroke ?? INK, fill: opts.fill ?? null });

/** A slab / prism / lens body: tinted glass with an ink outline. */
export const body = (points: readonly Vec[], fill: Fill = "glass"): Element =>
  polygon(points, { stroke: INK, fill });

export const circle = (
  at: Vec,
  r: number,
  opts: { stroke?: Stroke | null; fill?: Fill } = {},
): Element => ({ kind: "circle", at, r, stroke: opts.stroke ?? INK, fill: opts.fill ?? null });

export const dot = (at: Vec, r = 0.9, color: ColorToken = "ink"): Element => ({ kind: "dot", at, r, color });

export const label = (
  at: Vec,
  text: string,
  opts: Omit<Extract<Element, { kind: "label" }>, "kind" | "at" | "text"> = {},
): Element => ({ kind: "label", at, text, ...opts });

/** Dashed normal at a point on an interface. */
export function normal(
  at: Vec,
  angleDeg: number,
  half: number,
  opts: { stroke?: Stroke; text?: string; labelShift?: Vec } = {},
): Element[] {
  const a = add(at, mul(dir(angleDeg), half));
  const b = add(at, mul(dir(angleDeg + 180), half));
  const out: Element[] = [line(a, b, opts.stroke ?? GUIDE)];
  if (opts.text) out.push(label(add(a, opts.labelShift ?? mul(dir(angleDeg), 2.2)), opts.text, { size: 2.8, color: "muted" }));
  return out;
}

/** Angle arc between two directions, with an optional label on the bisector. */
export function angleMark(
  vertex: Vec,
  fromDeg: number,
  toDeg: number,
  opts: { r?: number; label?: string; labelR?: number; stroke?: Stroke; color?: ColorToken } = {},
): Element[] {
  const r = opts.r ?? 8;
  const pts = arcPoints(vertex, r, fromDeg, toDeg);
  const out: Element[] = [{ kind: "poly", points: pts, stroke: opts.stroke ?? s("muted", 0.4) }];
  if (opts.label) {
    const mid = (fromDeg + toDeg) / 2;
    out.push(
      label(polar(vertex, mid, opts.labelR ?? r + 3.4), opts.label, {
        anchor: "middle",
        size: 3,
        math: true,
        color: opts.color ?? "ink",
      }),
    );
  }
  return out;
}

/** Right-angle square at `vertex` between two directions. */
export function rightAngle(
  vertex: Vec,
  aDeg: number,
  bDeg: number,
  size = 3.2,
  stroke: Stroke = s("muted", 0.35),
): Element {
  const a = add(vertex, mul(dir(aDeg), size));
  const b = add(vertex, mul(dir(bDeg), size));
  const c = add(a, sub(b, vertex));
  return { kind: "poly", points: [a, c, b], stroke };
}

/** Short tick across a line at `at`, perpendicular to `alongDeg`. */
export const tick = (at: Vec, alongDeg: number, size = 1.8, stroke: Stroke = INK): Element => {
  const n = perp(dir(alongDeg));
  return line(add(at, mul(n, -size)), add(at, mul(n, size)), stroke);
};

/** Lens outline: two symmetric arcs, sampled (no sweep flags). */
export function lensOutline(center: Vec, halfHeight: number, bulge: number, steps = 24): Vec[] {
  const { x, y } = center;
  const right: Vec[] = [];
  const left: Vec[] = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = (Math.PI * i) / steps; // 0 → π
    right.push({ x: x + bulge * Math.sin(t), y: y + halfHeight * Math.cos(t) });
  }
  for (let i = steps; i >= 0; i -= 1) {
    const t = (Math.PI * i) / steps;
    left.push({ x: x - bulge * Math.sin(t), y: y + halfHeight * Math.cos(t) });
  }
  // drop the shared top/bottom points so the polygon has no duplicates
  return [...right, ...left.slice(1, -1)];
}

/* ── figure spec ─────────────────────────────────────────────────────── */

export type LawCheck =
  | { kind: "snell"; i: number; r: number; n1?: number; n2: number; tolDeg?: number }
  | { kind: "reflect"; i: number; r: number; tolDeg?: number }
  | { kind: "lens"; u: number; v: number; f: number; tol?: number }
  | { kind: "value"; label: string; actual: number; expected: number; tol: number };

export type FigureSpec = {
  /** kebab-case, unique across the repo. */
  id: string;
  /** Gallery heading. */
  title: string;
  /** Screen-reader description of the drawing. */
  alt: string;
  /** Printed caption (plain text, unicode sub/superscripts allowed). */
  caption: string;
  frame: { width: number; height: number };
  /** Base label size in user units. */
  labelSize?: number;
  elements: Element[];
  checks?: LawCheck[];
  /** Printed/textbook figure this drawing corresponds to, e.g. "Fig. 9.15". */
  source?: string;
};

/* ── validation ──────────────────────────────────────────────────────── */

export type Issue = { level: "error" | "warn"; code: string; message: string };

const LABEL_W = 0.62; // width per character, in em

export function labelBox(el: Extract<Element, { kind: "label" }>, baseSize: number): Box {
  const size = el.size ?? baseSize;
  const chars = `${el.text}${el.sub ?? ""}${el.sup ?? ""}`.length;
  const w = size * LABEL_W * chars;
  const h = size * 1.25;
  const x = el.anchor === "start" ? el.at.x : el.anchor === "end" ? el.at.x - w : el.at.x - w / 2;
  const y = el.at.y - h / 2;
  return { x, y, w, h };
}

const finite = (...ns: number[]): boolean => ns.every((n) => Number.isFinite(n));

/** Re-derive every law the figure claims to obey. */
export function runChecks(spec: FigureSpec): Issue[] {
  const out: Issue[] = [];
  for (const check of spec.checks ?? []) {
    if (check.kind === "snell") {
      const n1 = check.n1 ?? 1;
      const expected = (Math.asin(Math.min(1, (n1 * Math.sin((check.i * Math.PI) / 180)) / check.n2)) * 180) / Math.PI;
      const diff = Math.abs(expected - check.r);
      if (diff > (check.tolDeg ?? 0.05)) {
        out.push({
          level: "error",
          code: "check.snell",
          message: `Snell: ${n1}·sin ${check.i}° implies ${expected.toFixed(3)}°, figure says ${check.r}° (Δ ${diff.toFixed(3)}°)`,
        });
      }
    } else if (check.kind === "reflect") {
      const diff = Math.abs(check.i - check.r);
      if (diff > (check.tolDeg ?? 0.05)) {
        out.push({
          level: "error",
          code: "check.reflect",
          message: `Reflection: i = ${check.i}°, r = ${check.r}° (Δ ${diff.toFixed(3)}°)`,
        });
      }
    } else if (check.kind === "lens") {
      const residual = 1 / check.u + 1 / check.v - 1 / check.f;
      if (Math.abs(residual) > (check.tol ?? 1e-6)) {
        out.push({
          level: "error",
          code: "check.lens",
          message: `Thin lens: 1/${check.u} + 1/${check.v} − 1/${check.f} = ${residual.toExponential(2)} ≠ 0`,
        });
      }
    } else {
      const diff = Math.abs(check.actual - check.expected);
      if (diff > check.tol) {
        out.push({
          level: "error",
          code: "check.value",
          message: `${check.label}: expected ${check.expected}, got ${check.actual} (Δ ${diff})`,
        });
      }
    }
  }
  return out;
}

export function validateFigure(spec: FigureSpec): Issue[] {
  const issues: Issue[] = [...runChecks(spec)];
  const { width, height } = spec.frame;
  const base = spec.labelSize ?? 3.4;
  const tol = 0.01;

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(spec.id)) {
    issues.push({ level: "error", code: "id", message: `id "${spec.id}" is not kebab-case` });
  }
  if (!(width > 0) || !(height > 0)) {
    issues.push({ level: "error", code: "frame", message: "frame must have positive width and height" });
  }
  if (!spec.caption.trim()) issues.push({ level: "error", code: "caption", message: "caption is empty" });
  if (!spec.alt.trim()) issues.push({ level: "error", code: "alt", message: "alt text is empty" });
  if (spec.elements.length === 0) issues.push({ level: "error", code: "empty", message: "figure has no elements" });

  const inside = (p: Vec, what: string): void => {
    if (!finite(p.x, p.y)) {
      issues.push({ level: "error", code: "nan", message: `${what} has a non-finite coordinate` });
      return;
    }
    if (p.x < -tol || p.x > width + tol || p.y < -tol || p.y > height + tol) {
      issues.push({
        level: "error",
        code: "bounds",
        message: `${what} at (${p.x.toFixed(2)}, ${p.y.toFixed(2)}) is outside the ${width}×${height} frame`,
      });
    }
  };

  const labelBoxes: { box: Box; text: string }[] = [];

  spec.elements.forEach((el, index) => {
    const tag = `${el.kind}[${index}]`;
    switch (el.kind) {
      case "poly": {
        if (el.points.length < (el.closed ? 3 : 2)) {
          issues.push({ level: "error", code: "poly", message: `${tag} needs ≥${el.closed ? 3 : 2} points` });
        }
        el.points.forEach((p) => inside(p, tag));
        for (let i = 1; i < el.points.length; i += 1) {
          if (dist(el.points[i - 1], el.points[i]) < 1e-9) {
            issues.push({ level: "error", code: "poly.dup", message: `${tag} has a repeated point at index ${i}` });
            break;
          }
        }
        break;
      }
      case "arrow": {
        inside(el.from, tag);
        inside(el.to, tag);
        const l = dist(el.from, el.to);
        if (!(l > 0.4)) issues.push({ level: "error", code: "arrow", message: `${tag} is only ${l.toFixed(2)} units long` });
        if (!(el.stroke?.width ?? 0.55 > 0)) {
          issues.push({ level: "error", code: "arrow.width", message: `${tag} has a non-positive width` });
        }
        break;
      }
      case "circle": {
        inside(el.at, tag);
        if (!(el.r > 0)) issues.push({ level: "error", code: "circle", message: `${tag} radius must be positive` });
        break;
      }
      case "dot": {
        inside(el.at, tag);
        break;
      }
      case "label": {
        inside(el.at, tag);
        const box = labelBox(el, base);
        labelBoxes.push({ box, text: el.text });
        if (box.x < -tol || box.y < -tol || box.x + box.w > width + tol || box.y + box.h > height + tol) {
          issues.push({
            level: "warn",
            code: "label.bounds",
            message: `label "${el.text}" runs outside the frame (x ${box.x.toFixed(1)}…${(box.x + box.w).toFixed(1)}, y ${box.y.toFixed(1)}…${(box.y + box.h).toFixed(1)})`,
          });
        }
        break;
      }
    }
  });

  for (let i = 0; i < labelBoxes.length; i += 1) {
    for (let j = i + 1; j < labelBoxes.length; j += 1) {
      if (boxesOverlap(labelBoxes[i].box, labelBoxes[j].box)) {
        issues.push({
          level: "warn",
          code: "label.overlap",
          message: `labels "${labelBoxes[i].text}" and "${labelBoxes[j].text}" overlap`,
        });
      }
    }
  }

  const xs: Vec[] = [];
  for (const el of spec.elements) {
    if (el.kind === "poly") xs.push(...el.points);
    else if (el.kind === "arrow") xs.push(el.from, el.to);
    else if (el.kind === "circle" || el.kind === "dot" || el.kind === "label") xs.push(el.at);
  }
  if (xs.length > 0) {
    const b = bbox(xs);
    if (b.w < 8 || b.h < 8) {
      issues.push({ level: "warn", code: "dense", message: `drawing spans only ${b.w.toFixed(1)}×${b.h.toFixed(1)} units — frame is mostly empty` });
    }
  }

  return issues;
}

export const errorsOf = (issues: readonly Issue[]): Issue[] => issues.filter((i) => i.level === "error");
export const warningsOf = (issues: readonly Issue[]): Issue[] => issues.filter((i) => i.level === "warn");

/* re-exports so a figure file needs one import */
export {
  add,
  angleOf,
  arcPoints,
  dir,
  dist,
  len,
  mul,
  polar,
  sub,
  type Vec,
};
