import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export interface CarbonylClassRow {
  /** Carbonyl compound, e.g. "Methanal". */
  carbonyl: string;
  /** Its formula, e.g. "HCHO". */
  formula: ReactNode;
  /** Alcohol class produced, e.g. "Primary (1°)". */
  alcoholClass: string;
}

interface CarbonylClassTableProps {
  title?: string;
  rows: CarbonylClassRow[];
}

/**
 * CarbonylClassTable — the carbonyl → alcohol relationship as three wide rows,
 * so the class each carbonyl gives is the element that reads first.
 */
export function CarbonylClassTable({
  title = "Which alcohol a carbonyl gives",
  rows,
}: CarbonylClassTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3">
        <span className="t-micro">{title}</span>
        <span className="t-micro">
          {rows.length} {rows.length === 1 ? "Row" : "Rows"}
        </span>
      </div>

      <div className="divide-y divide-border">
        {rows.map((row) => (
          <div
            key={row.carbonyl}
            className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{row.carbonyl}</p>
              <p className="mt-0.5 text-xs tabular-nums text-muted-foreground">{row.formula}</p>
            </div>

            <ArrowRight aria-hidden className="h-4 w-4 text-muted-foreground" />

            <span className="justify-self-start rounded-[4px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] px-2.5 py-1 text-[0.8rem] font-extrabold leading-tight text-[var(--subject-chemistry)]">
              {row.alcoholClass}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
