import type { Annotation, Flags, Tone } from "./types";
import { resolve } from "./resolve";

export type Op =
  | { kind: "toggle"; format: "b" | "i" | "u" | "hl"; tone?: Tone }
  | { kind: "clear" };

function flagsFrom(a: Annotation): Flags {
  return { b: a.b, i: a.i, u: a.u, hl: a.hl };
}

function flagsEqual(a: Flags, b: Flags): boolean {
  return a.b === b.b && a.i === b.i && a.u === b.u && a.hl === b.hl;
}

function hasAnyFlags(f: Flags): boolean {
  return !!(f.b || f.i || f.u || f.hl);
}

function makeId(): string {
  return "a" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
}

interface IV {
  start: number;
  end: number;
  b?: true;
  i?: true;
  u?: true;
  hl?: Tone;
}

function allCarries(intervals: IV[], start: number, end: number, pred: (iv: IV) => boolean): boolean {
  // true if every character in [start,end) is covered by an interval satisfying pred, contiguously.
  const pieces: Array<[number, number]> = [];
  for (const iv of intervals) {
    if (!pred(iv)) continue;
    const s = Math.max(iv.start, start);
    const e = Math.min(iv.end, end);
    if (e > s) pieces.push([s, e]);
  }
  pieces.sort((a, b) => a[0] - b[0]);
  let cursor = start;
  for (const [s, e] of pieces) {
    if (s > cursor) return false;
    if (e > cursor) cursor = e;
  }
  return cursor >= end;
}

function toAnnotation(iv: IV, text: string): Annotation {
  const n = 24;
  const p = text.slice(Math.max(0, iv.start - n), iv.start);
  const s = text.slice(iv.end, iv.end + n);
  const q = text.slice(iv.start, iv.end).slice(0, 400);
  return {
    id: makeId(),
    q,
    p,
    s,
    o: iv.start + p.length,
    at: Date.now(),
    b: iv.b,
    i: iv.i,
    u: iv.u,
    hl: iv.hl,
  };
}

/**
 * Resolve annotations against the live stream text, apply `op` to [start,end),
 * and return the resulting annotation list. Splitting happens at both edges;
 * gaps inside the selected range become new annotated pieces. Adjacent equal
 * pieces are merged. Pieces end up as disjoint, non-overlapping intervals.
 */
export function applyOperation(
  text: string,
  items: Annotation[],
  selStart: number,
  selEnd: number,
  op: Op
): Annotation[] {
  if (selEnd <= selStart) return items;

  // Resolve existing annotations → intervals, dropping unresolved ones.
  const resolved: IV[] = [];
  for (const a of items) {
    const r = resolve(a, text);
    if (r && r.end > r.start) resolved.push({ start: r.start, end: r.end, ...flagsFrom(a) } as IV);
  }

  // Decide the target flag value for the operation within the selected range.
  const midTransform = (iv: IV, base: Flags): Flags => {
    const out: Flags = { ...base };
    if (op.kind === "toggle") {
      if (op.format === "b") {
        const all = allCarries(resolved, selStart, selEnd, (x) => !!x.b);
        out.b = all ? undefined : true;
      } else if (op.format === "i") {
        const all = allCarries(resolved, selStart, selEnd, (x) => !!x.i);
        out.i = all ? undefined : true;
      } else if (op.format === "u") {
        const all = allCarries(resolved, selStart, selEnd, (x) => !!x.u);
        out.u = all ? undefined : true;
      } else if (op.format === "hl") {
        const tone = op.tone ?? "yellow";
        const all = allCarries(resolved, selStart, selEnd, (x) => x.hl === tone);
        out.hl = all ? undefined : tone;
      }
    }
    // other flags preserved from base
    return out;
  };

  // Build result pieces.
  const result: IV[] = [];

  // Split every existing interval at selStart/selEnd.
  for (const iv of resolved) {
    // left piece (outside)
    const lStart = iv.start;
    const lEnd = Math.min(iv.end, selStart);
    if (lEnd > lStart) result.push({ start: lStart, end: lEnd, b: iv.b, i: iv.i, u: iv.u, hl: iv.hl });
    // mid piece
    const mStart = Math.max(iv.start, selStart);
    const mEnd = Math.min(iv.end, selEnd);
    if (mEnd > mStart) {
      const nv = midTransform(iv, { b: iv.b, i: iv.i, u: iv.u, hl: iv.hl });
      result.push({ start: mStart, end: mEnd, b: nv.b, i: nv.i, u: nv.u, hl: nv.hl });
    }
    // right piece
    const rStart = Math.max(iv.start, selEnd);
    const rEnd = iv.end;
    if (rEnd > rStart) result.push({ start: rStart, end: rEnd, b: iv.b, i: iv.i, u: iv.u, hl: iv.hl });
  }

  // Gap pass inside [selStart, selEnd]: positions not covered by any (surviving) mid
  // piece receive op-applied flags on a fresh base.
  const midPieces = result.filter((r) => r.start >= selStart && r.end <= selEnd);
  const covered = midPieces.map((r) => [r.start, r.end] as [number, number]).sort((a, b) => a[0] - b[0]);
  let cursor = selStart;
  const gaps: IV[] = [];
  for (const [s, e] of covered) {
    if (s > cursor) {
      const nv = midTransform({} as IV, {});
      gaps.push({ start: cursor, end: s, b: nv.b, i: nv.i, u: nv.u, hl: nv.hl });
    }
    cursor = Math.max(cursor, e);
  }
  if (cursor < selEnd) {
    const nv = midTransform({} as IV, {});
    gaps.push({ start: cursor, end: selEnd, b: nv.b, i: nv.i, u: nv.u, hl: nv.hl });
  }
  for (const g of gaps) if (g.end > g.start) result.push(g);

  // Clear op: zero flags inside [selStart,selEnd] (already cleared by transform returning
  // no flags when op is clear — we handle op.kind === clear by overriding midTransform
  // above conceptually). Handle clear here by removing any flag in the range.
  // (Implemented by treating clear as a special op format none.)
  // Note: our midTransform above returns unchanged flags for unknown ops; clear needs wipe.
  if (op.kind === "clear" || (op as Op & { kind: string }).kind === "clear") {
    for (const r of result) {
      if (r.start >= selStart && r.end <= selEnd) {
        r.b = undefined;
        r.i = undefined;
        r.u = undefined;
        r.hl = undefined;
      }
    }
  }

  // Merge adjacent equal-flag intervals
  const sorted = result.filter((r) => r.end > r.start).sort((a, b) => a.start - b.start);
  const merged: IV[] = [];
  for (const r of sorted) {
    const last = merged[merged.length - 1];
    if (last && last.end === r.start && last.b === r.b && last.i === r.i && last.u === r.u && last.hl === r.hl) {
      last.end = r.end;
    } else {
      merged.push({ ...r });
    }
  }

  // Drop intervals without flags (clear leaves none behind).
  const kept = merged.filter((iv) => hasAnyFlags(iv));

  // Convert to Annotations (each interval carries its own quote).
  return kept.map((iv) => toAnnotation(iv, text));
}

// expose op kinds without type complaints
declare module "./model" {}
