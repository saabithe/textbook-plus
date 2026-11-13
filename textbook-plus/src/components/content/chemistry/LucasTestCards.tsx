import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LucasObservation {
  /** Turbidity time, e.g. "Immediate". */
  time: ReactNode;
  /** Alcohol class, e.g. "Tertiary (3°)". */
  alcoholClass: ReactNode;
  /** Supporting line, e.g. "at room temperature". */
  detail?: ReactNode;
}

interface LucasTestCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Reagent printed in the header, e.g. "Conc. HCl + anhydrous ZnCl₂". */
  reagent?: ReactNode;
  /** Observations in the order turbidity appears. */
  observations: LucasObservation[];
  /** Line printed under the stack. */
  footnote?: ReactNode;
}

const ROW_TONE = [
  "border-[color-mix(in_oklab,var(--subject-chemistry)_42%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_11%,transparent)]",
  "border-[color-mix(in_oklab,var(--subject-chemistry)_24%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)]",
  "border-border bg-muted/25",
];

/**
 * LucasTestCards — the three alcohols stacked in the order turbidity appears.
 * The time is the largest element in each row (it is what the test measures),
 * the class sits beside it, and a downward arrow between rows carries the
 * "slower" step so the sequence reads top to bottom.
 */
export function LucasTestCards({
  title,
  reagent,
  observations,
  footnote,
}: LucasTestCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Lucas test"}</span>
        {reagent && (
          <span className="rounded-[3px] bg-muted px-2 py-0.5 text-[0.68rem] font-bold text-foreground/80">
            {reagent}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <ol className="space-y-0">
          {observations.map((observation, index) => (
            <li key={index}>
              <article
                className={cn(
                  "grid gap-1 rounded-md border px-3 py-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-4",
                  ROW_TONE[index] ?? ROW_TONE[ROW_TONE.length - 1],
                )}
              >
                <div className="min-w-0">
                  <p className="text-[1.35rem] font-extrabold leading-none tracking-tight text-foreground">
                    {observation.time}
                  </p>
                  {observation.detail && (
                    <p className="mt-1 text-xs font-semibold leading-snug text-muted-foreground">
                      {observation.detail}
                    </p>
                  )}
                </div>

                <span className="justify-self-start rounded-[3px] border border-border bg-card px-2 py-0.5 text-[0.72rem] font-extrabold text-foreground/85 sm:justify-self-end">
                  {observation.alcoholClass}
                </span>
              </article>

              {index < observations.length - 1 && (
                <div className="flex items-center gap-1.5 py-1 pl-2 text-muted-foreground">
                  <ChevronDown aria-hidden className="h-3.5 w-3.5" />
                  <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.12em]">
                    slower
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>

        {footnote && (
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{footnote}</p>
        )}
      </div>
    </section>
  );
}
