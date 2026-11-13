import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RampRow {
  /** Compound name, e.g. "Propanal". */
  compound: ReactNode;
  /** Functional class, e.g. "Aldehyde". */
  family: ReactNode;
  /** Molar mass value, e.g. "58". */
  mass: ReactNode;
  /** Boiling point as printed, e.g. "322 K". */
  boiling: ReactNode;
  /** Numeric kelvin value used to size the bar. */
  kelvin: number;
  /** Tints the row as the highest member of the set. */
  highlight?: boolean;
}

interface BoilingPointRampProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Banner above the rows, e.g. the molar-mass range the set shares. */
  massRange?: ReactNode;
  /** One row per compound, lowest boiling point first. */
  rows: RampRow[];
  /** Caption under the rows, e.g. "increasing boiling point". */
  axisLabel?: ReactNode;
}

/**
 * BoilingPointRamp — one row per compound, every row carrying the same four
 * facts (compound, class, molar mass, boiling point) over a bar drawn on one
 * shared scale. Because the bars are sized from the kelvin value, the row order
 * is visible before the numbers are compared.
 */
export function BoilingPointRamp({
  title,
  massRange,
  rows,
  axisLabel,
}: BoilingPointRampProps) {
  const max = Math.max(...rows.map((row) => row.kelvin));

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Comparative boiling points"}</span>
        {massRange && (
          <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_12%,transparent)] px-1.5 py-0.5 text-[0.62rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
            {massRange}
          </span>
        )}
      </div>

      <ol className="divide-y divide-border/70">
        {rows.map((row, index) => (
          <li
            key={index}
            className={cn(
              "px-4 py-2.5",
              row.highlight && "bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                <span className="text-sm font-extrabold leading-snug text-foreground">
                  {row.compound}
                </span>
                <span className="rounded-[2px] bg-muted px-1.5 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-muted-foreground">
                  {row.family}
                </span>
              </div>

              <div className="flex shrink-0 items-baseline gap-3">
                <span className="text-[0.62rem] font-bold tabular-nums text-muted-foreground">
                  M {row.mass}
                </span>
                <span className="w-14 text-right text-sm font-extrabold tabular-nums text-foreground">
                  {row.boiling}
                </span>
              </div>
            </div>

            <div
              aria-hidden
              className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)]"
            >
              <div
                className={cn(
                  "h-full rounded-full",
                  row.highlight
                    ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_70%,transparent)]"
                    : "bg-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)]",
                )}
                style={{ width: `${(row.kelvin / max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ol>

      {axisLabel && (
        <p className="border-t border-border px-4 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-muted-foreground">
          {axisLabel}
        </p>
      )}
    </section>
  );
}
