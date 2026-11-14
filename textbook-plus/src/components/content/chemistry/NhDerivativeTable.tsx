import { type ReactNode } from "react";

export interface NhDerivativeRow {
  /** Reagent written with its formula, e.g. "Hydroxylamine (NH₂OH)". */
  reagent: ReactNode;
  /** The group the reagent contributes, e.g. "–OH". */
  group: ReactNode;
  /** The named product, e.g. "Oxime". */
  product: ReactNode;
}

interface NhDerivativeTableProps {
  /** Heading strip. */
  title?: ReactNode;
  rows: NhDerivativeRow[];
  /** Line under the table. */
  caption?: ReactNode;
}

/**
 * NhDerivativeTable — each H₂N–Z reagent beside the group it contributes and the
 * derivative it names. Reagent, group and product stay in separate columns so
 * the naming pattern (group in, name out) can be read down the table; the
 * product column carries the accent because that is what gets asked in exams.
 */
export function NhDerivativeTable({
  title,
  rows,
  caption,
}: NhDerivativeTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">
          {title ?? "Ammonia derivatives and their products"}
        </span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {rows.length} reagents
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              <th className="w-10 px-2 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                No.
              </th>
              <th className="px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Reagent (H₂N–Z)
              </th>
              <th className="w-32 px-2 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                –Z Group
              </th>
              <th className="px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
                Product
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-border/70 last:border-b-0">
                <td className="px-2 py-2.5 text-[0.66rem] font-extrabold tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-3 py-2.5 text-[0.82rem] font-bold leading-snug text-foreground">
                  {row.reagent}
                </td>
                <td className="px-2 py-2.5 text-[0.82rem] font-bold leading-snug text-foreground/85">
                  {row.group}
                </td>
                <td className="bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-3 py-2.5 text-[0.88rem] font-extrabold leading-snug text-foreground">
                  {row.product}
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
