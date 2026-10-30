"use client";

import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useAnnotationsPath } from "@/hooks/useAnnotations";
import { buildStream, rangeToStreamOffsets } from "@/lib/annotate/offsets";
import { resolve } from "@/lib/annotate/resolve";
import { applyOperation } from "@/lib/annotate/model";
import type { Annotation, Flags, Tone } from "@/lib/annotate/types";
import { SelectionToolbar } from "@/components/annotate/SelectionToolbar";

interface IV {
  start: number;
  end: number;
  b?: true;
  i?: true;
  u?: true;
  hl?: Tone;
}

function makeWrapper(id: string, flags: Flags): { outer: HTMLElement; leaf: HTMLElement } {
  const outer: HTMLElement =
    flags.hl ? document.createElement("mark") : document.createElement("span");
  outer.setAttribute("data-ann", id);
  if (flags.hl) outer.setAttribute("data-tone", flags.hl);
  let cur: HTMLElement = outer;
  if (flags.u) {
    const u = document.createElement("u");
    cur.appendChild(u);
    cur = u;
  }
  if (flags.b) {
    const s = document.createElement("strong");
    cur.appendChild(s);
    cur = s;
  }
  if (flags.i) {
    const e = document.createElement("em");
    cur.appendChild(e);
    cur = e;
  }
  return { outer, leaf: cur };
}

export function AnnotationLayer({
  containerRef,
  enabled,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  enabled: boolean;
}) {
  const routerPath = usePathname();
  const path = routerPath ?? "";
  const { items, setItems, apply } = useAnnotationsPath(path);

  const applyingRef = useRef(false);
  const streamRef = useRef<ReturnType<typeof buildStream> | null>(null);
  const resolvedRef = useRef<IV[]>([]);
  const debounceRef = useRef<number | null>(null);

  const [active, setActive] = useState(false);
  const [activeRect, setActiveRect] = useState<DOMRect | null>(null);
  const [activeOffsets, setActiveOffsets] = useState<{ start: number; end: number } | null>(null);
  const [activeFlags, setActiveFlags] = useState<Flags>({});
  const [outcome, setOutcome] = useState<string | null>(null);
  const lastOffsetRef = useRef<{ start: number; end: number } | null>(null);
  const lastInteractionRef = useRef<number>(0);
  const [unresolvedCount, setUnresolvedCount] = useState(0);
  const [useDockOnly, setUseDockOnly] = useState(true);

  const rebuild = useCallback(() => {
    const container = containerRef.current;
    if (!container || applyingRef.current) return;
    applyingRef.current = true;
    try {
      // unwrap all existing wrappers, deepest first
      const wrappers = Array.from(container.querySelectorAll("[data-ann]")).sort((a, b) => {
        let da = 0,
          db = 0;
        let pa: Node | null = a.parentElement;
        while (pa && pa !== container) {
          da++;
          pa = pa.parentElement;
        }
        let pb: Node | null = b.parentElement;
        while (pb && pb !== container) {
          db++;
          pb = pb.parentElement;
        }
        return db - da;
      });
      for (const w of wrappers) {
        const p = w.parentNode;
        if (!p) continue;
        while (w.firstChild) p.insertBefore(w.firstChild, w);
        p.removeChild(w);
      }
      container.normalize();

      const stream = buildStream(container);
      streamRef.current = stream;

      // resolve annotations and apply wrappers
      const resolved: Array<{ a: Annotation; start: number; end: number }> = [];
      for (const a of items) {
        const r = resolve(a, stream.text);
        if (r && r.end > r.start) resolved.push({ a, start: r.start, end: r.end });
      }

      const ivs: IV[] = resolved.map((r) => ({
        start: r.start,
        end: r.end,
        b: r.a.b,
        i: r.a.i,
        u: r.a.u,
        hl: r.a.hl,
      }));
      resolvedRef.current = ivs;
      setUnresolvedCount(items.length - resolved.length);

      const edits = resolved
        .map((r) => ({ s: r.start, e: r.end, flags: { b: r.a.b, i: r.a.i, u: r.a.u, hl: r.a.hl }, item: r.a }))
        .sort((x, y) => y.s - x.s);

      for (const ed of edits) {
        const segs = stream.segments
          .filter((seg) => seg.end > ed.s && seg.start < ed.e)
          .sort((a, b) => b.start - a.start);
        for (const seg of segs) {
          const ls = Math.max(ed.s, seg.start) - seg.start;
          const le = Math.min(ed.e, seg.end) - seg.start;
          if (le <= ls) continue;
          const node = seg.node;
          const parent = node.parentNode as Node;
          let middle: Text = node;
          if (ls > 0) {
            node.splitText(ls);
            middle = node.nextSibling as Text;
          }
          const span = le - ls;
          if (middle.data.length > span) middle.splitText(span);
          const target = middle;
          const { outer, leaf } = makeWrapper(ed.item.id, ed.flags);
          const next = target.nextSibling;
          parent.removeChild(target);
          leaf.appendChild(target);
          parent.insertBefore(outer, next);
        }
      }
    } catch (e) {
      console.error("[annotate] rebuild failed", e);
    } finally {
      applyingRef.current = false;
    }
  }, [containerRef, items]);

  // rebuild when items change and on mount
  useLayoutEffect(() => {
    if (!enabled) return;
    rebuild();
  }, [enabled, rebuild]);

  // rebuild on DOM mutations (late-mounted content)
  useEffect(() => {
    if (!enabled) return;
    const container = containerRef.current;
    if (!container) return;
    const obs = new MutationObserver(() => {
      if (applyingRef.current) return;
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(() => rebuild(), 120);
    });
    obs.observe(container, { childList: true, subtree: true, characterData: true });
    return () => {
      obs.disconnect();
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [enabled, rebuild, containerRef]);

  // detect coarse pointer once (dock-first to avoid flash of floating toolbar)
  useEffect(() => {
    if (typeof window === "undefined") return;
    setUseDockOnly(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  // Keep selection alive while formatting UI is being operated.
  useEffect(() => {
    function onPointerDown(e: Event) {
      const t = e.target as HTMLElement | null;
      if (t?.closest?.('[role="toolbar"]')) lastInteractionRef.current = Date.now();
    }
    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, []);

  // clear aria-live outcome after 1.5s
  useEffect(() => {
    if (!outcome) return;
    const t = window.setTimeout(() => setOutcome(null), 1500);
    return () => window.clearTimeout(t);
  }, [outcome]);

  // selection handling
  useEffect(() => {
    if (!enabled) return;
    function check() {
      const container = containerRef.current;
      if (!container) return;
      const now = Date.now();
      const sel = window.getSelection();
      // Don't instantly vanish while interacting with the formatting toolbar
      // (its click/handlers may transiently collapse the native selection).
      const recentInteraction = now - lastInteractionRef.current < 450;
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
        if (!recentInteraction) {
          setActive(false);
          setActiveRect(null);
          setActiveOffsets(null);
        }
        return;
      }
      const range = sel.getRangeAt(0);
      if (!container.contains(range.commonAncestorContainer)) return;
      const stream = streamRef.current;
      if (!stream) {
        setActive(false);
        return;
      }
      const off = rangeToStreamOffsets(container, range, stream);
      if (!off || off.end <= off.start) {
        const txt = range.toString().trim();
        if (!txt) {
          setActive(false);
          return;
        }
      }
      const eff = off ?? null;
      if (!eff) {
        setActive(false);
        return;
      }
      const txt = stream.text.slice(eff.start, eff.end).trim();
      if (!txt) {
        setActive(false);
        return;
      }
      setActive(true);
      setActiveRect(range.getBoundingClientRect());
      setActiveOffsets(eff);
      lastOffsetRef.current = eff;

      // active flags
      const flags: Flags = {};
      const ivs = resolvedRef.current;
      const allB = allCarries(ivs, eff.start, eff.end, (iv) => !!iv.b);
      const allI = allCarries(ivs, eff.start, eff.end, (iv) => !!iv.i);
      const allU = allCarries(ivs, eff.start, eff.end, (iv) => !!iv.u);
      if (allB) flags.b = true;
      if (allI) flags.i = true;
      if (allU) flags.u = true;
      // highlight tone, if a single tone covers all
      const tones = new Set<string>();
      let hlCovered = 0;
      const total = eff.end - eff.start;
      for (const iv of ivs) {
        if (!iv.hl) continue;
        const s = Math.max(iv.start, eff.start);
        const e = Math.min(iv.end, eff.end);
        if (e > s) hlCovered += e - s;
        if (e > s) tones.add(iv.hl);
      }
      if (hlCovered === total && tones.size === 1) flags.hl = Array.from(tones)[0] as Tone;
      setActiveFlags(flags);
    }
    const debounced = () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
      debounceRef.current = window.setTimeout(check, 50);
    };
    document.addEventListener("pointerup", debounced);
    document.addEventListener("selectionchange", debounced);
    return () => {
      document.removeEventListener("pointerup", debounced);
      document.removeEventListener("selectionchange", debounced);
    };
  }, [enabled, containerRef]);

  // keyboard shortcuts
  useEffect(() => {
    if (!enabled) return;
    function onKey(e: KeyboardEvent) {
      if (!active || !activeOffsets) return;
      const mod = e.ctrlKey || e.metaKey;
      if (mod && (e.key === "b" || e.key === "B")) {
        e.preventDefault();
        handleToggle("b");
      } else if (mod && (e.key === "i" || e.key === "I")) {
        e.preventDefault();
        handleToggle("i");
      } else if (mod && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        handleToggle("u");
      } else if (e.key === "Escape") {
        setActive(false);
        setActiveOffsets(null);
        setActiveRect(null);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [enabled, active, activeOffsets]);

  function resolveOffsets() {
    if (activeOffsets) return activeOffsets;
    if (lastOffsetRef.current) return lastOffsetRef.current;
    const container = containerRef.current;
    const stream = streamRef.current;
    if (!container || !stream) return null;
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return null;
    const range = sel.getRangeAt(0);
    if (!container.contains(range.commonAncestorContainer)) return null;
    const off = rangeToStreamOffsets(container, range, stream);
    if (off && off.end > off.start) return off;
    return null;
  }

  function handleToggle(key: "b" | "i" | "u") {
    if (!streamRef.current) return;
    const offsets = resolveOffsets();
    if (!offsets) return;
    const stream = streamRef.current;
    apply(stream.text, offsets.start, offsets.end, { kind: "toggle", format: key });
    const label = key === "b" ? "Bold" : key === "i" ? "Italic" : "Underline";
    setOutcome(`${label} applied`);
    window.setTimeout(() => rebuild(), 0);
  }

  function handleTone(tone: string) {
    if (!streamRef.current) return;
    const offsets = resolveOffsets();
    if (!offsets) return;
    const stream = streamRef.current;
    apply(stream.text, offsets.start, offsets.end, { kind: "toggle", format: "hl", tone: tone as Tone });
    setOutcome("Highlight applied");
    window.setTimeout(() => rebuild(), 0);
  }

  function handleClear() {
    if (!streamRef.current) return;
    const offsets = resolveOffsets();
    if (!offsets) return;
    const stream = streamRef.current;
    apply(stream.text, offsets.start, offsets.end, { kind: "clear" });
    window.setTimeout(() => rebuild(), 0);
    setOutcome("Formatting cleared");
    lastOffsetRef.current = null;
    setActive(false);
    setActiveOffsets(null);
    setActiveRect(null);
  }

  function allCarries(
    ivs: IV[],
    start: number,
    end: number,
    pred: (iv: IV) => boolean
  ): boolean {
    const pieces: Array<[number, number]> = [];
    for (const iv of ivs) {
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

  if (!enabled) return null;

  return (
    <>
      {!useDockOnly && (
        <SelectionToolbar
          active={active}
          mode="floating"
          rect={activeRect}
          pressed={{ b: !!activeFlags.b, i: !!activeFlags.i, u: !!activeFlags.u }}
          activeTone={activeFlags.hl ?? null}
          onToggle={handleToggle}
          onTone={handleTone}
          onClear={handleClear}
        />
      )}
      {/* Mobile dock */}
      <div className="lg:hidden">
        <SelectionToolbar
          active={active}
          mode="dock"
          rect={activeRect}
          pressed={{ b: !!activeFlags.b, i: !!activeFlags.i, u: !!activeFlags.u }}
          activeTone={activeFlags.hl ?? null}
          onToggle={handleToggle}
          onTone={handleTone}
          onClear={handleClear}
        />
      </div>
      {unresolvedCount > 0 && (
        <p className="t-micro text-muted-foreground">
          {unresolvedCount} notes couldn't be placed here.
        </p>
      )}
      <span aria-live="polite" className="sr-only">
        {outcome ?? (active ? "Selection formatting available." : "")}
      </span>
    </>
  );
}
