import type { ReactNode } from "react";

export interface ConcentrationRung {
  /** Name of the product, e.g. "Rectified spirit". */
  name: ReactNode;
  /** The strength printed large, e.g. "95.6% by mass". */
  value: ReactNode;
  /** One line qualifying the product. */
  detail?: ReactNode;
  /** Chip for a product with a special standing, e.g. "Industrial alcohol". */
  badge?: ReactNode;
  /** Numeric ethanol percentage that sizes the bar. */
  percent: number;
}

interface ConcentrationLadderProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Rungs from weakest to strongest. */
  rungs: ConcentrationRung[];
  /** Line printed under the ladder. */
  footnote?: ReactNode;
}

/**
 * ConcentrationLadder — the three strengths of ethanol stacked as ascending
 * bars. Bar length is the ethanol percentage, so wash reads as a short bar and
 * absolute alcohol as a full one; the print value stays exact beside the name.
 */
export function ConcentrationLadder({ title, rungs, footnote }: ConcentrationLadderProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Concentration terminology"}</span>
      </div>

      <ol className="space-y-3 px-3 py-3 sm:px-4 sm:py-4">
        {rungs.map((rung, index) => (
          <li key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="flex flex-wrap items-baseline gap-1.5">
                <p className="text-sm font-extrabold leading-snug text-foreground">
                  {rung.name}
                </p>
                {rung.badge && (
                  <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
                    {rung.badge}
                  </span>
                )}
              </div>

              <span className="text-sm font-extrabold tabular-nums leading-none text-foreground">
                {rung.value}
              </span>
            </div>

            <div
              aria-hidden
              className="mt-1.5 h-2 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)]"
            >
              <div
                className="h-full rounded-full bg-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)]"
                style={{ width: `${Math.max(rung.percent, 6)}%` }}
              />
            </div>

            {rung.detail && (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {rung.detail}
              </p>
            )}
          </li>
        ))}
      </ol>

      {footnote && (
        <p className="border-t border-border px-4 py-2.5 text-xs leading-relaxed text-muted-foreground">
          {footnote}
        </p>
      )}
    </section>
  );
}
