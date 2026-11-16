import { cn } from "@/lib/utils";

/**
 * DownstreamProcessing — the definition, then the three stages from broth to
 * marketable formulation, with the product-dependent caveat under the last one.
 */

const STAGES = [
  {
    n: "1",
    tag: "Recovery",
    name: "Separation and purification",
    detail: "Isolation of the synthesised product from the biomass and culture broth.",
  },
  {
    n: "2",
    tag: "Formulation",
    name: "Preservative formulation",
    detail: "Addition of suitable preservatives to ensure long-term stability.",
  },
  {
    n: "3",
    tag: "Testing",
    name: "Clinical trials and quality control",
    detail: "Drug formulations undergo clinical trials and strict quality control testing.",
  },
];

export function DownstreamProcessing() {
  return (
    <div className="my-5">
      <div className="rounded-xl border border-emerald-600/30 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
        <div className="t-micro text-emerald-800 dark:text-emerald-300">Definition</div>
        <div className="mt-1 text-sm leading-relaxed text-foreground">
          The <strong className="font-semibold">post-biosynthetic processing steps</strong> required to convert the raw
          biological product into a finished, marketable formulation.
        </div>
      </div>

      <div className="mt-2 rounded-xl border border-border bg-card p-3.5" role="list">
        {STAGES.map((stage, index) => (
          <div key={stage.n} className="relative pb-3 pl-9 last:pb-0" role="listitem">
            {index < STAGES.length - 1 && (
              <span className="absolute bottom-0 left-[11px] top-7 w-px bg-border" aria-hidden />
            )}

            <span
              className={cn(
                "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums",
                index === STAGES.length - 1
                  ? "border-emerald-600/40 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300"
                  : "border-border bg-muted/40 text-muted-foreground",
              )}
            >
              {stage.n}
            </span>

            <div className="rounded-lg border border-border bg-muted/20 px-3 py-2">
              <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {stage.tag}
              </div>
              <div className="mt-0.5 text-xs font-semibold text-foreground">{stage.name}</div>
              <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{stage.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-lg border border-amber-600/30 border-l-[3px] bg-amber-50/60 px-3 py-2 dark:bg-amber-950/20">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          Note
        </span>
        <span className="ml-2 text-xs leading-relaxed text-foreground">
          Requirements vary depending on the specific product.
        </span>
      </div>
    </div>
  );
}
