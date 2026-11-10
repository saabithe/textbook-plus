"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  List,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CATALOG,
  CATEGORY_LABEL,
  CATEGORY_ORDER,
  type CatalogEntry,
} from "./catalog.generated";
import { DEMOS } from "./demos";
import { AutoSpecimen, PartRow, Specimen, anchorOf, type SpecimenStatus } from "./specimen";

const FILE_DEMO: Record<string, string> = {};
for (const id of Object.keys(DEMOS)) {
  const hash = id.indexOf("#");
  if (hash === -1) continue;
  const path = id.slice(0, hash);
  if (!FILE_DEMO[path]) FILE_DEMO[path] = id;
}

const FILE_COUNT = new Set(CATALOG.map((entry) => entry.path)).size;

/** One line of orientation per section — the taxonomy is not self-evident. */
const CATEGORY_BLURB: Record<string, string> = {
  ui: "base-nova primitives — every variant, size and sub-part",
  content: "reading blocks used inside chapter pages",
  data: "tables and checklists",
  process: "steps, timelines, cycles and ladders",
  study: "revision and mistake blocks",
  concept: "definition and classification cards",
  chapter: "chapter-page chrome — tabs, nav, progress",
  chemistry: "molecule and reaction schematics",
  physics: "interactive physics figures",
  biology: "anatomy and experiment diagrams",
  practice: "question flow and difficulty filters",
  flashcard: "deck and card surfaces",
  grammar: "grammar topic shell and quiz",
  shell: "project-shell modules and non-visual exports",
};

function modeOf(entry: CatalogEntry): SpecimenStatus {
  if (DEMOS[entry.id]) return "live";
  if (entry.shell || !entry.renderable) return "shell";
  const fileDemo = FILE_DEMO[entry.path];
  if (fileDemo && fileDemo !== entry.id) return "part";
  return "auto";
}

const MODE: Record<string, SpecimenStatus> = {};
for (const entry of CATALOG) MODE[entry.id] = modeOf(entry);

const COUNTS = CATALOG.reduce(
  (acc, entry) => {
    const mode = MODE[entry.id];
    acc.all += 1;
    acc[mode] += 1;
    return acc;
  },
  { all: 0, live: 0, auto: 0, shell: 0, part: 0 } as Record<"all" | SpecimenStatus, number>
);

type StatusFilter = "all" | SpecimenStatus;

const FILTERS: { id: StatusFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "live", label: "Demoed" },
  { id: "auto", label: "Auto" },
  { id: "shell", label: "Shell" },
  { id: "part", label: "Sub-parts" },
];

function matches(entry: CatalogEntry, query: string) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    entry.name.toLowerCase().includes(q) ||
    entry.path.toLowerCase().includes(q) ||
    (entry.props ?? "").toLowerCase().includes(q)
  );
}

export function Library() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [dense, setDense] = useState(false);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<string>("");
  const searchRef = useRef<HTMLInputElement>(null);
  const { resolvedTheme, setTheme } = useTheme();

  const groups = useMemo(() => {
    return CATEGORY_ORDER.map((category) => {
      const entries = CATALOG.filter((entry) => {
        if (entry.category !== category) return false;
        if (!matches(entry, query)) return false;
        const mode = MODE[entry.id];
        if (filter !== "all" && mode !== filter) return false;
        return true;
      });
      return { category, entries };
    }).filter((group) => group.entries.length > 0);
  }, [query, filter]);

  const shown = groups.reduce((sum, group) => sum + group.entries.length, 0);
  const filtering = query.trim().length > 0 || filter !== "all";

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const typing =
        target?.tagName === "INPUT" || target?.tagName === "TEXTAREA" || target?.isContentEditable;
      if (event.key === "/" && !typing) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape" && typing) {
        setQuery("");
        searchRef.current?.blur();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-category]"));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.getAttribute("data-category") ?? "");
      },
      { rootMargin: "-96px 0px -68% 0px", threshold: 0 }
    );
    sections.forEach((section) => io.observe(section));

    // The last section is usually shorter than the observe band, so it never
    // becomes "active" — pin it once the page is scrolled to the bottom.
    function onScroll() {
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (atBottom) {
        const last = sections[sections.length - 1];
        setActive(last.getAttribute("data-category") ?? "");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [groups]);

  function toggleCategory(category: string) {
    setCollapsed((previous) => {
      const next = new Set(previous);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#specimens"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-3 focus:z-50 focus:rounded focus:border focus:border-border focus:bg-card focus:px-3 focus:py-2 focus:text-[12px] focus:font-medium"
      >
        Skip to specimens
      </a>
      {/* ── sticky toolbar ─────────────────────────────────────────── */}

      {/* Toolbar height (row + filter strip) is mirrored by the sticky
          offsets below: `top-[92px]` and `scroll-mt-[104px]`. */}
      <div className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1500px] items-center gap-2 px-4 py-2 sm:px-6">
          <nav aria-label="Breadcrumb" className="hidden items-center gap-2 sm:flex">
            <Link href="/" className="t-micro text-muted-foreground hover:text-foreground">
              Textbook++
            </Link>
            <span className="text-muted-foreground/40">/</span>
            <span className="t-micro font-semibold text-foreground">Components</span>
          </nav>

          <div role="search" className="relative min-w-0 flex-1 sm:ms-auto sm:w-80 sm:flex-none">
            <Search className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                const first = groups[0]?.entries[0];
                const target = first ? document.getElementById(anchorOf(first.id)) : null;
                target?.scrollIntoView({ block: "start" });
              }}
              placeholder={`Search ${CATALOG.length} exports…`}
              aria-label="Search components"
              className="h-9 w-full appearance-none rounded-md border border-border bg-card ps-8 pe-10 text-[12.5px] outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-rule-strong focus-visible:ring-2 focus-visible:ring-ring/40 [&::-webkit-search-cancel-button]:hidden"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute end-1.5 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded text-muted-foreground transition-colors hover:bg-foreground/[0.06] hover:text-foreground"
              >
                <X className="size-3.5" />
              </button>
            ) : (
              <kbd className="pointer-events-none absolute end-2 top-1/2 -translate-y-1/2 rounded border border-border px-1.5 py-0.5 font-mono text-[9.5px] text-muted-foreground">
                /
              </kbd>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => setDense((value) => !value)}
              aria-pressed={dense}
              title={dense ? "Comfortable layout" : "Compact two-column layout"}
              aria-label={dense ? "Comfortable layout" : "Compact two-column layout"}
              className="grid size-8 place-items-center rounded border border-border text-muted-foreground transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
            >
              {dense ? <List className="size-3.5" /> : <LayoutGrid className="size-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              title="Toggle theme"
              aria-label="Toggle theme"
              className="grid size-8 place-items-center rounded border border-border text-muted-foreground transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
            >
              {resolvedTheme === "dark" ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
            </button>
          </div>
        </div>

        {/* filter strip — one line, scrolls sideways on narrow screens */}
        <div className="mx-auto flex max-w-[1500px] items-center gap-1.5 overflow-x-auto px-4 pb-2 sm:px-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FILTERS.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={selected}
                className={cn(
                  "flex h-7 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 text-[11px] font-medium transition-colors",
                  selected
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "font-mono text-[9.5px] tabular-nums",
                    selected ? "text-background/70" : "text-muted-foreground/60"
                  )}
                >
                  {COUNTS[item.id]}
                </span>
              </button>
            );
          })}

          <span className="mx-1 h-4 w-px shrink-0 bg-border" />

          <span className="ms-auto hidden shrink-0 whitespace-nowrap pe-1 font-mono text-[10.5px] tabular-nums text-muted-foreground/70 md:inline">
            <span aria-live="polite">{shown}</span> / {CATALOG.length} shown
          </span>

          <button
            type="button"
            onClick={() => setCollapsed(collapsed.size > 0 ? new Set() : new Set(CATEGORY_ORDER))}
            className="hidden shrink-0 whitespace-nowrap text-[11px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline md:block"
          >
            {collapsed.size > 0 ? "Expand all" : "Collapse all"}
          </button>
        </div>
      </div>

      {/* ── hero ───────────────────────────────────────────────────── */}
      <header className="mx-auto max-w-[1500px] border-b border-border px-4 pb-6 pt-8 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="t-micro text-muted-foreground">Internal reference · dev route · noindex</p>
          <span className="text-muted-foreground/30">·</span>
          <a
            href="/dev/design"
            className="t-micro text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            Design system →
          </a>
        </div>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div className="max-w-[38rem]">
            <h1 className="t-title">Component Library</h1>
            <p className="t-lead mt-3">
              Every export in the app, generated from the filesystem and proven complete by{" "}
              <code className="font-mono text-[0.8em]">verify:catalog</code>. Copy an import from any
              card; the anchor links to it.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-x-6 gap-y-2 text-[12px] sm:grid-cols-6 sm:gap-x-7">
            {[
              ["Files", FILE_COUNT],
              ["Exports", CATALOG.length],
              ["Demoed", COUNTS.live],
              ["Auto", COUNTS.auto],
              ["Parts", COUNTS.part],
              ["Showing", shown],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col-reverse gap-0.5">
                <dt className="t-micro text-muted-foreground">{label}</dt>
                <dd className="font-mono text-[17px] font-semibold leading-none tabular-nums">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* The rail (with the legend) is desktop-only; repeat it inline here. */}
        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-muted-foreground lg:hidden">
          <li className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-ok" /> demo — hand-written fixture
          </li>
          <li className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-muted-foreground" /> auto — mounted bare
          </li>
          <li className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full border border-muted-foreground/50" /> shell —
            documented only
          </li>
        </ul>
      </header>

      {/* ── body ───────────────────────────────────────────────────── */}
      <div className="mx-auto flex max-w-[1500px] gap-8 px-4 pb-24 pt-6 sm:px-6">
        {/* rail */}
        <nav
          aria-label="Categories"
          className="sticky top-[100px] hidden h-fit w-56 shrink-0 lg:block"
        >
          <p className="t-micro mb-2 text-muted-foreground">Categories</p>
          <ul className="space-y-0.5">
            {CATEGORY_ORDER.map((category) => {
              const total = CATALOG.filter((entry) => entry.category === category).length;
              if (!total) return null;
              const matched =
                groups.find((group) => group.category === category)?.entries.length ?? 0;
              if (filtering && matched === 0) return null;
              const isActive = active === category;
              return (
                <li key={category}>
                  <a
                    href={`#cat-${category}`}
                    title={CATEGORY_BLURB[category]}
                    className={cn(
                      "flex items-center justify-between border-s-2 py-1.5 pe-2 ps-2.5 text-[12px] transition-colors",
                      isActive
                        ? "border-s-foreground bg-foreground/[0.04] font-medium text-foreground"
                        : "border-s-transparent text-muted-foreground hover:border-s-border hover:bg-foreground/[0.03] hover:text-foreground"
                    )}
                  >
                    <span>{CATEGORY_LABEL[category]}</span>
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground/60">
                      {filtering ? `${matched}/${total}` : total}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-6 rounded-lg border border-border p-3">
            <p className="t-micro text-muted-foreground">Legend</p>
            <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-ok" /> Demo — hand-written fixture
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-muted-foreground" /> Auto — mounted bare
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full border border-muted-foreground/50" /> Shell —
                documented only
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-muted-foreground/40" /> Part — shown with parent
              </li>
            </ul>
            <p className="mt-3 border-t border-border pt-2 font-mono text-[10px] leading-relaxed text-muted-foreground/70">
              verify:catalog · {CATALOG.length}/{CATALOG.length} exports present
            </p>
          </div>
        </nav>

        {/* content */}
        <div id="specimens" className="min-w-0 flex-1 scroll-mt-[104px]">
          {/* mobile category strip */}
          <div className="-mx-4 mb-6 overflow-x-auto px-4 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-1">
              {CATEGORY_ORDER.map((category) => {
                const count = CATALOG.filter((entry) => entry.category === category).length;
                if (!count) return null;
                const isActive = active === category;
                return (
                  <a
                    key={category}
                    href={`#cat-${category}`}
                    className={cn(
                      "flex h-7 items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 text-[11px] transition-colors",
                      isActive
                        ? "border-foreground/30 bg-foreground/[0.06] font-medium text-foreground"
                        : "border-border text-muted-foreground"
                    )}
                  >
                    {CATEGORY_LABEL[category]}
                    <span className="font-mono text-[9.5px] tabular-nums text-muted-foreground/60">
                      {count}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {groups.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-24 text-center">
              <Search className="size-6 text-muted-foreground/50" />
              <p className="mt-3 text-sm font-medium">
                {query ? `No component matches “${query}”` : "Nothing in this filter"}
                {filter !== "all" && query ? ` under “${FILTERS.find((f) => f.id === filter)?.label}”` : ""}.
              </p>
              <p className="mt-1 text-[12px] text-muted-foreground">
                {COUNTS.all} exports in the catalog.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
                className="mt-4 h-8 rounded-md border border-border px-3 text-[12px] font-medium transition-colors hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {groups.map(({ category, entries }) => {
                const cards = entries.filter((entry) => MODE[entry.id] !== "part");
                const parts = entries.filter((entry) => MODE[entry.id] === "part");
                const isCollapsed = collapsed.has(category) && !query;

                return (
                  <section
                    key={category}
                    id={`cat-${category}`}
                    data-category={category}
                    className="scroll-mt-[104px]"
                  >
                    <div className="z-20 mb-3 flex items-center gap-2 border-b border-border bg-background py-1 lg:sticky lg:top-[88px]">
                      <button
                        type="button"
                        onClick={() => toggleCategory(category)}
                        aria-expanded={!isCollapsed}
                        className="group/head flex min-h-9 min-w-0 flex-1 items-center gap-2 rounded pe-2 text-start transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded text-muted-foreground transition-colors group-hover/head:bg-foreground/[0.05] group-hover/head:text-foreground">
                          {isCollapsed ? (
                            <ChevronRight className="size-3.5" />
                          ) : (
                            <ChevronDown className="size-3.5" />
                          )}
                        </span>
                        <h2 className="t-h3 shrink-0">{CATEGORY_LABEL[category]}</h2>
                        <span className="min-w-0 truncate text-[10.5px] uppercase tracking-[0.06em] text-muted-foreground/70">
                          {cards.length} {cards.length === 1 ? "component" : "components"}
                          {parts.length ? ` · ${parts.length} parts` : ""}
                        </span>
                        <span className="hidden min-w-0 truncate text-[11.5px] text-muted-foreground/60 xl:block">
                          — {CATEGORY_BLURB[category]}
                        </span>
                      </button>
                      <a
                        href="#top"
                        className="t-micro shrink-0 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        Top ↑
                      </a>
                    </div>

                    {!isCollapsed ? (
                      <>
                        {cards.length > 0 ? (
                          <div
                            className={cn(
                              "grid items-start",
                              dense ? "gap-3 2xl:grid-cols-2" : "gap-4"
                            )}
                          >
                            {cards.map((entry) => {
                              if (DEMOS[entry.id]) {
                                return (
                                  <Specimen key={entry.id} entry={entry} dense={dense}>
                                    {DEMOS[entry.id]}
                                  </Specimen>
                                );
                              }
                              return (
                                <AutoSpecimen
                                  key={entry.id}
                                  entry={entry}
                                  heavy={entry.category === "physics"}
                                  dense={dense}
                                />
                              );
                            })}
                          </div>
                        ) : null}

                        {parts.length > 0 ? (
                          <details
                            {...(filter === "part" ? { open: true } : {})}
                            className="mt-3 rounded-lg border border-border bg-muted/20"
                          >
                            <summary className="cursor-pointer select-none px-3 py-2 text-[11.5px] text-muted-foreground hover:text-foreground">
                              {parts.length} exported sub-parts — each shown with its parent demo
                            </summary>
                            <div className="space-y-0.5 border-t border-border p-2">
                              {parts.map((entry) => {
                                const parentId = FILE_DEMO[entry.path];
                                const parent = CATALOG.find((item) => item.id === parentId);
                                return (
                                  <PartRow
                                    key={entry.id}
                                    entry={entry}
                                    parentId={parentId}
                                    parentName={parent?.name ?? "parent"}
                                    dense={dense}
                                  />
                                );
                              })}
                            </div>
                          </details>
                        ) : null}
                      </>
                    ) : null}
                  </section>
                );
              })}
            </div>
          )}

          <footer className="mt-16 border-t border-border pt-4 text-[11px] text-muted-foreground">
            <p>
              {CATALOG.length} exports across {FILE_COUNT} files. Generated by{" "}
              <code className="font-mono">scripts/generate-component-catalog.cjs</code>; guarded by{" "}
              <code className="font-mono">npm run verify:catalog</code>.{" "}
              <a href="#top" className="underline-offset-4 hover:text-foreground hover:underline">
                Back to top
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
