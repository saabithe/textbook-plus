import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * ResearchAreas — the three critical research areas of biotechnology, read as
 * one connected pipeline: catalyst → optimal conditions → downstream
 * processing. Equal weight: same card, same accent, numbered 01–03.
 */

const AREAS = [
  {
    n: "01",
    title: "Providing the Best Catalyst",
    detail: "An improved organism, usually a microbe, or a pure enzyme.",
  },
  {
    n: "02",
    title: "Creating Optimal Conditions",
    detail: "Engineering suitable conditions for the catalyst to act.",
  },
  {
    n: "03",
    title: "Downstream Processing",
    detail: "Technologies for purifying the protein or organic compound.",
  },
];

const SEQUENCE = ["Catalyst", "Optimal conditions", "Downstream processing"];

export function ResearchAreas() {
  return (
    <div className="my-6">
      <div className="flex flex-col gap-1.5 lg:flex-row lg:items-stretch lg:gap-2" role="list">
        {AREAS.map((area, index) => (
          <Fragment key={area.n}>
            <div className="flex-1 rounded-xl border border-border bg-card p-3.5" role="listitem">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-8 items-center justify-center rounded-md border border-indigo-600/30 bg-indigo-50 text-[11px] font-bold tabular-nums text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300">
                  {area.n}
                </span>
                <div className="text-sm font-semibold leading-tight tracking-tight text-foreground">{area.title}</div>
              </div>

              <div className="mt-2 text-xs leading-relaxed text-foreground/80">{area.detail}</div>
            </div>

            {index < AREAS.length - 1 && (
              <div className="flex items-center justify-center py-0.5 text-muted-foreground" aria-hidden>
                <ArrowDown className="h-3.5 w-3.5 lg:hidden" />
                <ArrowRight className="hidden h-3.5 w-3.5 lg:block" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-3 py-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Sequence</span>
        {SEQUENCE.map((label, index) => (
          <Fragment key={label}>
            <span className="text-xs font-medium text-foreground">{label}</span>
            {index < SEQUENCE.length - 1 && (
              <span className="text-[10px] text-muted-foreground" aria-hidden>
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
