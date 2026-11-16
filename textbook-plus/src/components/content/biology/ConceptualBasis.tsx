import { TriangleAlert } from "lucide-react";

/**
 * ConceptualBasis — why genetic engineering exists.
 *
 * Two columns of equal weight state the contrast that makes the rest of the
 * section necessary (unchanged vs variation), then a restrained amber warning
 * names the cost of traditional breeding, then the solution card answers it
 * with the three techniques the note lists.
 */

const REPRODUCTION = [
  {
    title: "Asexual reproduction",
    verdict: "Unchanged",
    lines: ["Preserves genetic information unchanged", "Genetic information remains unchanged"],
    tone: "slate" as const,
  },
  {
    title: "Sexual reproduction",
    verdict: "Variation",
    lines: ["Permits variation", "Produces unique combinations of genetic setups"],
    tone: "indigo" as const,
  },
];

export function ReproductionComparison() {
  return (
    <div className="my-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
      {REPRODUCTION.map((column) => (
        <section key={column.title} className="flex flex-col bg-card p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-sm font-semibold tracking-tight text-foreground">{column.title}</div>
            <span
              className={
                column.tone === "indigo"
                  ? "shrink-0 rounded-full border border-indigo-600/30 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300"
                  : "shrink-0 rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
              }
            >
              {column.verdict}
            </span>
          </div>

          <div className="mt-3 space-y-1.5">
            {column.lines.map((line) => (
              <div key={line} className="flex items-start gap-2">
                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35" aria-hidden />
                <div className="text-sm leading-snug text-foreground">{line}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const TECHNIQUES = ["Recombinant DNA creation", "Gene cloning", "Gene transfer"];

export function HybridisationLimitation() {
  return (
    <div className="my-5 rounded-xl border border-border border-l-[3px] border-l-amber-500 bg-amber-50/50 px-4 py-3.5 dark:bg-amber-950/20">
      <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300">
        <TriangleAlert className="h-4 w-4 shrink-0" aria-hidden />
        <span className="text-[10px] font-semibold uppercase tracking-[0.08em]">Key limitation</span>
      </div>

      <div className="mt-1.5 text-sm font-semibold leading-relaxed text-foreground">
        Traditional hybridisation may transfer undesirable genes along with desirable genes.
      </div>

      <div className="mt-2 space-y-1">
        <div className="text-xs leading-snug text-muted-foreground">
          Inclusion of desirable genes.
        </div>
        <div className="text-xs leading-snug text-muted-foreground">
          Inclusion and multiplication of undesirable genes alongside desirable ones.
        </div>
      </div>
    </div>
  );
}

export function GeneticEngineeringSolution() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Solution — genetic engineering</div>

      <div className="mt-2 text-sm leading-relaxed text-foreground">
        Genetic engineering allows the isolation and introduction of{" "}
        <span className="rounded-[4px] bg-teal-100 px-1.5 py-0.5 font-semibold text-teal-900 dark:bg-teal-900/50 dark:text-teal-100">
          only desirable genes
        </span>
        , without introducing undesirable genes.
      </div>

      <div className="mt-3 border-t border-border pt-3">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Techniques involved
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {TECHNIQUES.map((technique) => (
            <span
              key={technique}
              className="inline-flex items-center rounded-md border border-teal-600/25 bg-teal-50/60 px-2.5 py-1 text-xs font-medium text-teal-900 dark:bg-teal-950/30 dark:text-teal-200"
            >
              {technique}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
