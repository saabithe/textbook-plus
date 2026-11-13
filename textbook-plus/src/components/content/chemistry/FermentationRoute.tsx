import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface FermentationSource {
  /** Materials the sugar is taken from, e.g. "Molasses", "Cane sugar". */
  materials: ReactNode[];
  /** Sugar strength of the raw material, e.g. "~40% sugar". */
  raw: ReactNode;
  /** Strength after dilution, e.g. "~10% sugar solution". */
  diluted: ReactNode;
}

export interface FermentationStep {
  /** Step name, e.g. "Inversion". */
  name: ReactNode;
  /** Enzyme that performs the step, e.g. "Invertase". */
  enzyme: ReactNode;
  /** KaTeX equation for the step. */
  equation: string;
}

interface FermentationRouteProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Chip in the header. */
  tag?: ReactNode;
  /** Where the sugar comes from and how it is diluted. */
  source: FermentationSource;
  /** The enzyme steps, in order. */
  steps: FermentationStep[];
  /** Line printed under the route, e.g. where the enzymes come from. */
  footnote?: ReactNode;
}

/**
 * FermentationRoute — the fermentation of sugar as a route: one source band
 * showing the raw material and its dilution, then each enzyme step on a
 * numbered rail with its own equation and products. Steps stack, so the rail
 * reads top-to-bottom on a phone without horizontal scrolling.
 */
export function FermentationRoute({ title, tag, source, steps, footnote }: FermentationRouteProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Industrial preparation"}</span>

        {tag && (
          <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.68rem] font-extrabold text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-border/70 bg-muted/25 px-3 py-2.5">
          <span className="t-micro">Source</span>

          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {source.materials.map((material, index) => (
              <span
                key={index}
                className="rounded-[3px] border border-border bg-card px-2 py-0.5 text-[0.72rem] font-extrabold text-foreground"
              >
                {material}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-baseline gap-1.5 rounded-[4px] border border-border bg-card px-2 py-1">
              <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Raw
              </span>
              <span className="text-[0.82rem] font-extrabold tabular-nums leading-none text-foreground">
                {source.raw}
              </span>
            </span>

            <ArrowRight
              aria-hidden
              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
            />

            <span className="inline-flex items-baseline gap-1.5 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)] px-2 py-1">
              <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Diluted
              </span>
              <span className="text-[0.82rem] font-extrabold tabular-nums leading-none text-foreground">
                {source.diluted}
              </span>
            </span>
          </div>
        </div>

        <ol className="mt-3">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <div className="flex flex-col items-center pt-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[0.7rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <span aria-hidden className="mt-1 w-px flex-1 bg-border" />
                )}
              </div>

              <div
                className={cn(
                  "min-w-0 flex-1 rounded-md border border-border/70 bg-muted/15 px-3 py-2.5",
                  index < steps.length - 1 && "mb-2",
                )}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="text-sm font-extrabold leading-snug text-foreground">
                    {step.name}
                  </p>
                  <span className="inline-flex items-baseline gap-1 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] px-1.5 py-0.5">
                    <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                      Enzyme
                    </span>
                    <span className="text-[0.7rem] font-extrabold text-[var(--subject-chemistry)]">
                      {step.enzyme}
                    </span>
                  </span>
                </div>

                <div className="mt-1.5 overflow-hidden rounded-[4px] border border-border/70 bg-card px-2 py-2">
                  <div className="overflow-x-auto text-center text-foreground">
                    <Formula>{step.equation}</Formula>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {footnote && (
          <p className="mt-3 border-t border-border pt-2.5 text-xs leading-relaxed text-muted-foreground">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
