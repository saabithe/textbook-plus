import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BoilingRow {
  /** Condensed formula, e.g. "C₂H₅OC₂H₅". */
  formula: ReactNode;
  /** Common name, e.g. "Ethoxyethane". */
  name: ReactNode;
  /** The value as printed, e.g. "390 K". */
  boiling: ReactNode;
  /** Numeric kelvin value used to size the bar. */
  kelvin: number;
  /** Tints the row as the outlier, e.g. the alcohol. */
  highlight?: boolean;
  /** Chip printed beside the name, e.g. "hydrogen-bonded". */
  tag?: ReactNode;
}

interface BoilingPointCompareProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The three compounds, drawn as bars on one kelvin scale. */
  rows: BoilingRow[];
  /** Heading inside the explanation band. */
  explanationTitle?: ReactNode;
  /** The reason the highlighted row stands apart. */
  explanation: ReactNode;
  /** Extra observation printed under the explanation, e.g. functional isomers. */
  note?: ReactNode;
}

/**
 * BoilingPointCompare — three boiling points drawn on one kelvin scale, so the
 * near-equality of the alkane and the ether and the step up to the alcohol are
 * visible, not just tabulated. The alcohol row carries the highlight and the
 * hydrogen-bonding reason sits directly beneath it.
 */
export function BoilingPointCompare({
  title,
  rows,
  explanationTitle,
  explanation,
  note,
}: BoilingPointCompareProps) {
  const max = Math.max(...rows.map((row) => row.kelvin));

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Boiling point comparison"}</span>
      </div>

      <ol className="space-y-3 px-3 py-3 sm:px-4 sm:py-4">
        {rows.map((row, index) => (
          <li
            key={index}
            className={cn(
              "rounded-md px-3 py-2.5",
              row.highlight
                ? "border border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]"
                : "border border-transparent",
            )}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-extrabold tabular-nums tracking-tight text-foreground">
                  {row.formula}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">{row.name}</span>
                {row.tag && (
                  <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
                    {row.tag}
                  </span>
                )}
              </div>

              <span className="text-sm font-extrabold tabular-nums text-foreground">
                {row.boiling}
              </span>
            </div>

            <div
              aria-hidden
              className="mt-1.5 h-2 overflow-hidden rounded-full bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)]"
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

      <div className="border-t border-border px-4 py-3">
        {explanationTitle && <span className="t-micro">{explanationTitle}</span>}
        <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground">{explanation}</p>
        {note && (
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{note}</p>
        )}
      </div>
    </section>
  );
}
