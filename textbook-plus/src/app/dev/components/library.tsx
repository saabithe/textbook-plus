"use client";

import { useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Search } from "lucide-react";
import { CATALOG, CATEGORY_LABEL, CATEGORY_ORDER, type CatalogEntry } from "./catalog.generated";
import { DEMOS } from "./demos";
import { AutoSpecimen, Specimen, anchorOf } from "./specimen";

const FILE_DEMO: Record<string, string> = {};
for (const id of Object.keys(DEMOS)) {
  const hash = id.indexOf("#");
  if (hash === -1) continue;
  const path = id.slice(0, hash);
  if (!FILE_DEMO[path]) FILE_DEMO[path] = id;
}

const FILE_COUNT = new Set(CATALOG.map((entry) => entry.path)).size;
const LIVE_COUNT = Object.keys(DEMOS).length;

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
  const { resolvedTheme, setTheme } = useTheme();

  const groups = useMemo(() => {
    return CATEGORY_ORDER.map((category) => ({
      category,
      entries: CATALOG.filter((entry) => entry.category === category && matches(entry, query)),
    })).filter((group) => group.entries.length > 0);
  }, [query]);

  const shown = groups.reduce((sum, group) => sum + group.entries.length, 0);

  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 pb-24 pt-8 sm:px-6">
      <header className="border-b border-border pb-6">
        <p className="t-micro">Textbook++ · internal reference</p>
        <h1 className="t-title mt-3">Component Library</h1>
        <p className="t-lead mt-3 max-w-[52rem]">
          Every component, every export, every variant. Generated from the filesystem and checked by{" "}
          <code className="font-mono text-[0.833em]">npm run verify:catalog</code>.
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {[
            ["Files", FILE_COUNT],
            ["Exports", CATALOG.length],
            ["Hand demos", LIVE_COUNT],
            ["Showing", shown],
          ].map(([label, value]) => (
            <div key={label} className="flex items-baseline gap-2">
              <dt className="t-micro text-muted-foreground">{label}</dt>
              <dd className="font-mono text-sm font-semibold">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[11.5px] text-muted-foreground">
          Dev route · unlisted · <code className="font-mono">robots: noindex</code>. Components without a
          hand-written fixture render bare inside an error boundary, so a missing prop shows an API card
          instead of breaking the page.
        </p>
      </header>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <nav aria-label="Categories" className="lg:sticky lg:top-20 lg:h-fit lg:w-56 lg:shrink-0">
          <label className="relative block">
            <Search className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Filter components…"
              className="h-9 w-full rounded-md border border-border bg-card ps-8 pe-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <ul className="mt-3 flex flex-wrap gap-1 lg:flex-col">
            {CATEGORY_ORDER.map((category) => {
              const count = CATALOG.filter((entry) => entry.category === category).length;
              if (!count) return null;
              return (
                <li key={category}>
                  <a
                    href={`#cat-${category}`}
                    className="flex items-center justify-between rounded px-2 py-1.5 text-[12.5px] text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground"
                  >
                    <span>{CATEGORY_LABEL[category]}</span>
                    <span className="font-mono text-[10.5px]">{count}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="mt-4 hidden h-8 w-full rounded border border-border px-2 text-[12px] hover:bg-foreground/[0.04] lg:block"
          >
            Theme: {resolvedTheme === "dark" ? "dark" : "light"} → toggle
          </button>
        </nav>

        <div className="min-w-0 flex-1 space-y-12">
          {groups.map(({ category, entries }) => (
            <section key={category} id={`cat-${category}`} className="scroll-mt-20">
              <div className="mb-4 flex items-end justify-between gap-4 border-b border-border pb-2">
                <div>
                  <h2 className="t-h2">{CATEGORY_LABEL[category]}</h2>
                  <p className="t-caption mt-1">
                    {entries.length} exports · {new Set(entries.map((entry) => entry.path)).size} files
                  </p>
                </div>
                <a href="#top" className="t-micro text-muted-foreground hover:text-foreground">
                  Top
                </a>
              </div>

              <div className="grid gap-4">
                {entries.map((entry) => {
                  if (DEMOS[entry.id]) {
                    return (
                      <Specimen key={entry.id} entry={entry}>
                        {DEMOS[entry.id]}
                      </Specimen>
                    );
                  }

                  const fileDemo = FILE_DEMO[entry.path];
                  if (fileDemo && fileDemo !== entry.id) {
                    const parent = CATALOG.find((candidate) => candidate.id === fileDemo);
                    return (
                      <Specimen key={entry.id} entry={entry} status="part">
                        <a
                          href={`#${anchorOf(parent?.id ?? fileDemo)}`}
                          className="text-[12px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                        >
                          Sub-part — shown with {parent?.name ?? "the parent demo"} →
                        </a>
                      </Specimen>
                    );
                  }

                  return (
                    <AutoSpecimen key={entry.id} entry={entry} heavy={entry.category === "physics"} />
                  );
                })}
              </div>
            </section>
          ))}

          {groups.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              No component matches “{query}”.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
