import { Fragment } from "react";

/**
 * RestrictionNaming — how an enzyme name is built, using EcoRI as the worked
 * example.
 *
 * The segmented strip is the point of the panel: each block is exactly one
 * segment of the name, with the segment's role under the letters and the fact
 * it stands for under that. Nothing else is added to the diagram.
 */

const RULES = [
  { part: "First letter", from: "Genus of source organism" },
  { part: "Next two letters", from: "Species name" },
  { part: "Additional letter(s)", from: "Strain" },
  { part: "Roman numeral", from: "Order of isolation from that strain" },
];

const SEGMENTS = [
  { letters: "E", role: "Genus", meaning: "Escherichia", italic: true, tone: "indigo" as const },
  { letters: "co", role: "Species", meaning: "coli", italic: true, tone: "teal" as const },
  { letters: "R", role: "Strain", meaning: "RY 13", italic: false, tone: "violet" as const },
  { letters: "I", role: "Order", meaning: "First", italic: false, tone: "amber" as const },
];

export function NamingRulesTable() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border">
      <div className="grid grid-cols-[auto_1fr] gap-px bg-border text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        <div className="bg-muted/40 px-3 py-1.5">Part of name</div>
        <div className="bg-muted/40 px-3 py-1.5">Derived from</div>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-px bg-border">
        {RULES.map((rule) => (
          <Fragment key={rule.part}>
            <div className="bg-card px-3 py-1.5 text-xs font-medium leading-snug text-foreground">{rule.part}</div>
            <div className="bg-card px-3 py-1.5 text-xs leading-snug text-muted-foreground">{rule.from}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function EcoRINamingDiagram() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div className="t-micro">Breakdown of the name EcoRI</div>
        <div className="text-xs text-muted-foreground">
          Source organism → <em className="text-foreground">Escherichia coli</em>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {SEGMENTS.map((segment, index) => (
          <div key={segment.letters} className="relative">
            <div
              className={
                segment.tone === "indigo"
                  ? "rounded-lg border-2 border-indigo-600/35 bg-indigo-50/60 px-2 py-2.5 text-center dark:bg-indigo-950/25"
                  : segment.tone === "teal"
                    ? "rounded-lg border-2 border-teal-600/35 bg-teal-50/60 px-2 py-2.5 text-center dark:bg-teal-950/25"
                    : segment.tone === "violet"
                      ? "rounded-lg border-2 border-violet-600/35 bg-violet-50/60 px-2 py-2.5 text-center dark:bg-violet-950/25"
                      : "rounded-lg border-2 border-amber-600/40 bg-amber-50/60 px-2 py-2.5 text-center dark:bg-amber-950/25"
              }
            >
              <div className="text-2xl font-bold leading-none tracking-tight text-foreground">{segment.letters}</div>

              <div className="mt-2 border-t border-foreground/10 pt-1.5">
                <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {segment.role}
                </div>
                <div className="text-xs font-semibold leading-snug text-foreground">{segment.meaning}</div>
              </div>
            </div>

            {index < SEGMENTS.length - 1 && (
              <span
                className="absolute -right-1.5 top-4 hidden text-[10px] text-muted-foreground sm:block"
                aria-hidden
              >
                +
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 rounded-lg border border-border bg-muted/25 px-3 py-2 text-xs">
        <span className="font-semibold text-foreground">Remember</span>
        {SEGMENTS.map((segment, index) => (
          <Fragment key={segment.letters}>
            <span className="text-foreground">
              {segment.letters} → {segment.italic ? <em>{segment.meaning}</em> : segment.meaning} ({segment.role})
            </span>
            {index < SEGMENTS.length - 1 && (
              <span className="text-muted-foreground" aria-hidden>
                ·
              </span>
            )}
          </Fragment>
        ))}
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Read left to right: genus, species, strain, then the order in which that strain&rsquo;s enzymes were isolated.
      </figcaption>
    </figure>
  );
}
