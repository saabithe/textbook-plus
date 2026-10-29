import type { Annotation } from "./types";

const PREFIX = "tp.annot.v1:";
const MAX_ITEMS = 200;

export function storageKey(path: string): string {
  return PREFIX + path;
}

export function load(path: string): Annotation[] {
  try {
    const raw = localStorage.getItem(storageKey(path));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { v?: number; items?: unknown };
    if (!parsed || parsed.v !== 1 || !Array.isArray(parsed.items)) return [];
    const out: Annotation[] = [];
    for (const rawItem of parsed.items) {
      if (!rawItem || typeof rawItem !== "object") continue;
      const it = rawItem as Partial<Annotation>;
      if (typeof it.id !== "string" || typeof it.q !== "string") continue;
      out.push({
        id: it.id,
        q: it.q,
        p: typeof it.p === "string" ? it.p : "",
        s: typeof it.s === "string" ? it.s : "",
        o: typeof it.o === "number" ? it.o : 0,
        at: typeof it.at === "number" ? it.at : Date.now(),
        b: it.b === true ? true : undefined,
        i: it.i === true ? true : undefined,
        u: it.u === true ? true : undefined,
        hl: ["yellow", "blue", "green", "pink", "orange"].includes(it.hl as string) ? (it.hl as Annotation["hl"]) : undefined,
      });
    }
    return out;
  } catch {
    return [];
  }
}

export function save(path: string, items: Annotation[]): boolean {
  try {
    if (items.length > MAX_ITEMS) return false;
    const payload = JSON.stringify({ v: 1, items, at: Date.now() });
    localStorage.setItem(storageKey(path), payload);
    return true;
  } catch {
    return false;
  }
}

export { MAX_ITEMS };
