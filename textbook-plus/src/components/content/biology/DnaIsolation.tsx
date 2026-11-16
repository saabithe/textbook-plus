import { Fragment } from "react";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * DnaIsolation — the five panels of the isolation stage.
 *
 * Each panel answers one question and is shaped for it: what must go, which
 * enzyme opens which wall, which enzyme removes which macromolecule, the order
 * of the work, and the two physical steps that get DNA out of solution.
 */

const REMOVED = ["RNA", "Proteins", "Polysaccharides", "Lipids"];

export function PurityRequirement() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-4">
        <div className="rounded-lg border-2 border-emerald-600/35 bg-emerald-50/60 px-4 py-2.5 text-center dark:bg-emerald-950/25">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
            Required outcome
          </div>
          <div className="text-base font-semibold tracking-tight text-foreground">Pure DNA</div>
        </div>

        <div className="min-w-0">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Must be removed
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {REMOVED.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 border-t border-border pt-2.5 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Why purify:</span> DNA must be pure, free from other cellular
        macromolecules, so that restriction enzymes can cut it.
      </div>
    </div>
  );
}

const WALLS = [
  { source: "Bacteria", enzyme: "Lysozyme", neutral: false },
  { source: "Plant cells", enzyme: "Cellulase", neutral: false },
  { source: "Fungi", enzyme: "Chitinase", neutral: false },
  { source: "Animal cells", enzyme: "None", neutral: true },
];

export function CellWallEnzymes() {
  return (
    <div className="my-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {WALLS.map((wall) => (
        <div
          key={wall.source}
          className={cn(
            "rounded-xl border px-3 py-3 text-center",
            wall.neutral ? "border-border bg-muted/25" : "border-border bg-card",
          )}
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {wall.source}
          </div>

          {wall.neutral ? (
            <div className="mt-1.5 flex items-center justify-center gap-1 text-base font-semibold text-muted-foreground">
              None
              <X className="h-4 w-4" aria-hidden />
            </div>
          ) : (
            <div className="mt-1.5 text-base font-bold tracking-tight text-foreground">{wall.enzyme}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const REMOVAL = [
  { target: "Cell membrane", enzyme: "Lipases", action: "Cell membrane breakdown" },
  { target: "Proteins (e.g., histones)", enzyme: "Proteases", action: "Protein breakdown" },
  { target: "RNA", enzyme: "Ribonuclease (RNase)", action: "RNA breakdown" },
];

export function MacromoleculeRemoval() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border">
      <div className="grid grid-cols-3 gap-px bg-border text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        <div className="bg-muted/40 px-3 py-1.5">Target</div>
        <div className="bg-muted/40 px-3 py-1.5">Enzyme used</div>
        <div className="bg-muted/40 px-3 py-1.5">Function</div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-border">
        {REMOVAL.map((row) => (
          <Fragment key={row.target}>
            <div className="bg-card px-3 py-2 text-xs leading-snug text-foreground">{row.target}</div>
            <div className="bg-card px-3 py-2">
              <span className="inline-flex rounded border border-violet-600/30 bg-violet-50 px-1.5 py-0.5 text-xs font-semibold text-violet-900 dark:bg-violet-950/30 dark:text-violet-300">
                {row.enzyme}
              </span>
            </div>
            <div className="bg-card px-3 py-2 text-xs leading-snug text-muted-foreground">{row.action}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

const WORKFLOW = [
  { n: "1", title: "Cell wall breakdown", enzyme: "Lysozyme / Cellulase / Chitinase, depending on source" },
  { n: "2", title: "Cell membrane breakdown", enzyme: "Lipases" },
  { n: "3", title: "Protein breakdown", enzyme: "Proteases" },
  { n: "4", title: "RNA breakdown", enzyme: "Ribonuclease (RNase)" },
  { n: "5", title: "DNA isolation", enzyme: "Purified genetic material", output: true },
];

export function IsolationWorkflow() {
  return (
    <div className="my-5 flex flex-col gap-1.5 md:flex-row md:items-stretch md:gap-0">
      {WORKFLOW.map((node, index) => (
        <Fragment key={node.n}>
          <div
            className={cn(
              "flex-1 rounded-lg border px-2.5 py-2",
              node.output
                ? "border-2 border-emerald-600/40 bg-emerald-50/50 dark:bg-emerald-950/25"
                : "border-border bg-card",
            )}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded text-[9px] font-bold tabular-nums",
                  node.output
                    ? "bg-emerald-600 text-white"
                    : "border border-border bg-muted/40 text-muted-foreground",
                )}
              >
                {node.n}
              </span>
              <div className="text-xs font-semibold leading-tight text-foreground">{node.title}</div>
            </div>
            <div
              className={cn(
                "mt-1 text-[10px] leading-snug",
                node.output ? "font-medium text-emerald-900 dark:text-emerald-300" : "text-muted-foreground",
              )}
            >
              {node.enzyme}
            </div>
          </div>

          {index < WORKFLOW.length - 1 && (
            <div className="flex items-center justify-center py-0.5 text-muted-foreground" aria-hidden>
              <ArrowDown className="h-3 w-3 md:hidden" />
              <ArrowRight className="hidden h-3 w-3 md:block" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export function PrecipitationSpooling() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-muted/25 px-3 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            1 · Precipitation
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-[10px] text-muted-foreground">Reagent</span>
            <span className="rounded bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
              Chilled ethanol
            </span>
          </div>
          <div className="mt-1 text-xs leading-snug text-foreground">
            Purified DNA precipitates out of the solution as a collection of fine threads.
          </div>
        </div>

        <div className="rounded-lg border border-border bg-muted/25 px-3 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            2 · Spooling
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-[10px] text-muted-foreground">Tool</span>
            <span className="rounded bg-amber-600 px-2 py-0.5 text-xs font-semibold text-white">Glass rod</span>
          </div>
          <div className="mt-1 text-xs leading-snug text-foreground">
            DNA is separated by scooping and swirling it around the rod.
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 items-center gap-3 sm:grid-cols-[1fr_auto]">
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-foreground">
          <span className="rounded border border-border bg-muted/40 px-2 py-0.5">Purified DNA solution</span>
          <span className="text-[10px] text-muted-foreground" aria-hidden>
            →
          </span>
          <span className="rounded border border-indigo-600/30 bg-indigo-50/60 px-2 py-0.5 dark:bg-indigo-950/25">
            Chilled ethanol
          </span>
          <span className="text-[10px] text-muted-foreground" aria-hidden>
            →
          </span>
          <span className="rounded border border-border bg-muted/40 px-2 py-0.5">
            DNA precipitation — fine threads
          </span>
          <span className="text-[10px] text-muted-foreground" aria-hidden>
            →
          </span>
          <span className="rounded border border-amber-600/30 bg-amber-50/60 px-2 py-0.5 dark:bg-amber-950/25">
            Spooling · glass rod
          </span>
          <span className="text-[10px] text-muted-foreground" aria-hidden>
            →
          </span>
          <span className="rounded border-2 border-emerald-600/40 bg-emerald-50/60 px-2 py-0.5 font-semibold dark:bg-emerald-950/25">
            Separated DNA
          </span>
        </div>

        <SpoolingGlyph />
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Chilled ethanol brings the DNA out of solution; the glass rod lifts the threads clear of it.
      </figcaption>
    </figure>
  );
}

function SpoolingGlyph() {
  return (
    <svg viewBox="0 0 90 60" className="mx-auto h-14 w-24 text-foreground/70" aria-hidden>
      {/* glass rod */}
      <line x1="18" y1="54" x2="72" y2="8" className="stroke-current" strokeWidth="2.2" strokeLinecap="round" />
      {/* threads wound around the rod */}
      <path
        d="M 26 44 C 38 40, 46 46, 56 38 C 62 34, 66 36, 70 30"
        className="fill-none stroke-current"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 22 48 C 34 44, 44 50, 54 42 C 60 38, 64 40, 68 34"
        className="fill-none stroke-current"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M 30 40 C 42 36, 50 42, 60 34 C 66 30, 70 32, 74 26"
        className="fill-none stroke-current"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* solution */}
      <line x1="6" y1="54" x2="84" y2="54" className="stroke-current opacity-40" strokeWidth="1.2" />
    </svg>
  );
}
