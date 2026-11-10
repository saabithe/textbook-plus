import { Fragment, type ReactNode } from "react";
import { ArrowDown, ArrowRight, TrendingUp } from "lucide-react";

export interface OrderedCompound {
  /** Compound name, e.g. "Butan-2-ol". */
  name: string;
  /** Condensed structure, e.g. CH₃CH(OH)CH₂CH₃. */
  formula?: ReactNode;
  /** Carbon-count chip, e.g. "4C". */
  carbons: string;
}

interface CompoundOrderStripProps {
  /** Heading strip, e.g. "Solution". */
  title?: ReactNode;
  /** Direction printed in the strip header, default "Increasing boiling point". */
  direction?: ReactNode;
  compounds: OrderedCompound[];
}

/**
 * CompoundOrderStrip — an answer given as a progression: one card per compound,
 * laid left to right in increasing order with an arrow between consecutive
 * cards. Stacks downwards on narrow screens so the sequence is never clipped.
 */
export function CompoundOrderStrip({
  title,
  direction = "Increasing boiling point",
  compounds,
}: CompoundOrderStripProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title}</span>
        <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-[var(--subject-chemistry)]">
          <TrendingUp aria-hidden className="h-3.5 w-3.5" />
          {direction}
        </span>
      </div>

      <div className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-stretch">
          {compounds.map((compound, index) => (
            <Fragment key={compound.name}>
              <article className="flex min-w-0 flex-1 flex-col rounded-md border border-border/70 bg-muted/25 px-3 py-2.5">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-extrabold leading-snug text-foreground">
                    {compound.name}
                  </p>
                  <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-1.5 py-0.5 text-[0.62rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                    {compound.carbons}
                  </span>
                </div>

                {compound.formula && (
                  <p className="mt-1 text-xs font-bold tracking-tight text-muted-foreground">
                    {compound.formula}
                  </p>
                )}
              </article>

              {index < compounds.length - 1 && (
                <div className="flex shrink-0 items-center justify-center px-1 py-1">
                  <ArrowDown aria-hidden className="h-3.5 w-3.5 text-muted-foreground sm:hidden" />
                  <ArrowRight
                    aria-hidden
                    className="hidden h-3.5 w-3.5 shrink-0 text-muted-foreground sm:block"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
