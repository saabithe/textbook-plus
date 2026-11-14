import type { ReactNode } from "react";

export interface DicarboxylicRow {
  /** Number of CH₂ groups between the two carboxyl groups. */
  n: ReactNode;
  /** Formula or structure, e.g. COOH–(CH₂)₂–COOH. */
  formula: ReactNode;
  /** Familiar name, e.g. Succinic acid. */
  common: ReactNode;
  /** IUPAC name, e.g. Butanedioic acid. */
  iupac: ReactNode;
}

interface DicarboxylicSeriesTableProps {
  /** Heading strip. */
  title?: ReactNode;
  rows: DicarboxylicRow[];
  /** Line under the table. */
  caption?: ReactNode;
}

/**
 * DicarboxylicSeriesTable — the series as a scrollable ladder: n runs 0 → 6
 * down the left, the chain grows in the middle, and the names sit beside it.
 * The scroll box keeps the seven-row series compact without hiding any member;
 * the n column is tinted and set large so the step that drives the whole table
 * is the easiest thing to follow.
 */
export function DicarboxylicSeriesTable({
  title,
  rows,
  caption,
}: DicarboxylicSeriesTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Dicarboxylic acid series"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          n = 0 → {rows.length - 1}
        </span>
      </div>

      <div className="max-h-[19rem] overflow-y-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead className="sticky top-0 z-10 bg-muted">
            <tr className="border-b border-border">
              <th className="w-12 px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                n
              </th>
              <th className="px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Formula / structure
              </th>
              <th className="px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Common name
              </th>
              <th className="px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                IUPAC name
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-border/70 last:border-b-0"
                style={{
                  background: `color-mix(in oklab, var(--subject-chemistry) ${3 + index}%, transparent)`,
                }}
              >
                <td className="w-12 px-3 py-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[0.78rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                    {row.n}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-[0.8rem] font-semibold tabular-nums text-foreground">
                  {row.formula}
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-[0.84rem] font-extrabold leading-snug text-foreground">
                  {row.common}
                </td>
                <td className="whitespace-nowrap px-3 py-2.5 text-[0.84rem] font-bold leading-snug text-foreground/90">
                  {row.iupac}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {caption && (
        <p className="border-t border-border px-4 py-2 text-[0.72rem] leading-relaxed text-muted-foreground">
          {caption}
        </p>
      )}
    </section>
  );
}
