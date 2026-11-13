import type { ReactNode } from "react";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ConditionColumn {
  /** Alcohol class, e.g. "Primary (1°)". */
  alcoholClass: ReactNode;
  /** Product formed, e.g. "Aldehyde". */
  product: ReactNode;
  /** Line under the product, e.g. "dehydration". */
  note?: ReactNode;
  /** Tints the column for a different outcome. */
  different?: boolean;
}

interface ConditionColumnsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The single condition shared by every column, e.g. "Alcohol vapours over heated copper". */
  condition: ReactNode;
  /** Temperature printed as the banner's largest element, e.g. "573 K". */
  temperature: ReactNode;
  columns: ConditionColumn[];
  /** Line printed under the columns. */
  footnote?: ReactNode;
}

/**
 * ConditionColumns — one condition stated once, then the three alcohol classes
 * and their products side by side. The shared temperature is the banner's
 * largest element so it is not mistaken for a per-column variable.
 */
export function ConditionColumns({
  title,
  condition,
  temperature,
  columns,
  footnote,
}: ConditionColumnsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
        </div>
      )}

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex items-center gap-3 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)] px-3 py-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]">
            <Flame aria-hidden className="h-5 w-5" strokeWidth={2} />
          </span>

          <div className="min-w-0">
            <p className="text-xl font-extrabold leading-none tracking-tight text-foreground">
              {temperature}
            </p>
            <p className="mt-0.5 text-xs font-semibold leading-snug text-muted-foreground">
              {condition}
            </p>
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {columns.map((column, index) => (
            <article
              key={index}
              className={cn(
                "flex min-w-0 flex-col rounded-md border px-3 py-2.5",
                column.different
                  ? "border-warning/40 bg-warning/10"
                  : "border-border/70 bg-muted/25",
              )}
            >
              <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                {column.alcoholClass}
              </span>

              <p className="mt-1 text-[1.02rem] font-extrabold leading-snug tracking-tight text-foreground">
                {column.product}
              </p>

              {column.note && (
                <span
                  className={cn(
                    "mt-1.5 self-start rounded-[3px] px-1.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.06em]",
                    column.different
                      ? "bg-warning/15 text-warning"
                      : "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]",
                  )}
                >
                  {column.note}
                </span>
              )}
            </article>
          ))}
        </div>

        {footnote && (
          <p className="mt-3 text-sm leading-relaxed text-foreground/85">{footnote}</p>
        )}
      </div>
    </section>
  );
}
