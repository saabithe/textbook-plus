import type { Annotation } from "./types";

export function resolve(annotation: Annotation, text: string): { start: number; end: number } | null {
  const { q, p, s, o } = annotation;
  if (!q) return null;

  // 1. Offset hint with full surrounding context.
  const idx = o - p.length;
  if (idx >= 0 && text.slice(idx, idx + q.length) === q) {
    const prefixOk = text.slice(idx - p.length, idx) === p;
    const suffixOk = text.slice(idx + q.length, idx + q.length + s.length) === s;
    if (prefixOk && suffixOk) return { start: idx, end: idx + q.length };
  }

  // 2. Unique occurrence of quote + suffix.
  const needle = q + (s || "");
  if (needle) {
    const hits: number[] = [];
    let pos = 0;
    while ((pos = text.indexOf(needle, pos)) !== -1) {
      hits.push(pos);
      pos += 1;
    }
    if (hits.length === 1) return { start: hits[0], end: hits[0] + q.length };
  }

  // 3. Unique occurrence of quote matching the prefix too.
  const prefixed: number[] = [];
  {
    let pos = 0;
    while ((pos = text.indexOf(q, pos)) !== -1) {
      prefixed.push(pos);
      pos += 1;
    }
  }
  const center = o - p.length;
  const fuzzy = prefixed.filter((i) => {
    if (Number.isFinite(center) && center >= 0 && Math.abs(i - center) > 180) return false;
    const prefixOk = p ? text.slice(i - p.length, i) === p : true;
    const suffixOk = s ? text.slice(i + q.length, i + q.length + s.length) === s : true;
    return prefixOk && suffixOk;
  });
  if (fuzzy.length === 1) return { start: fuzzy[0], end: fuzzy[0] + q.length };

  // 4. Exactly one quote occurrence, anywhere.
  if (prefixed.length === 1) return { start: prefixed[0], end: prefixed[0] + q.length };

  return null;
}
