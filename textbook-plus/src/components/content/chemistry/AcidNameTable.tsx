import type { ReactNode } from "react";

export interface AcidNameRow {
  /** Formula or structure, e.g. CH₃–COOH. */
  formula: ReactNode;
  /** Familiar name, e.g. Acetic acid. */
  common: ReactNode;
  /** IUPAC name, e.g. Ethanoic acid. */
  iupac: ReactNode;
}

interface AcidNameTableProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Context line under the heading strip, e.g. "Aliphatic and aromatic". */
  lead?: ReactNode;
  rows: AcidNameRow[];
  /** Line under the table. */
  caption?: ReactNode;
}

/**
 * AcidNameTable — the monocarboxylic acids with both names set at the same
 * weight: the common name and the IUPAC name are the two things being learned,
 * so neither is demoted to a secondary column. The formula column is fixed and
 * never wraps, which keeps the carbon chains aligned down the page.
 */
export function AcidNameTable({ title, lead, rows, caption }: AcidNameTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Monocarboxylic acids"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {rows.length} acids
        </span>
      </div>

      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        {lead && (
          <p className="mb-2 text-[0.8rem] leading-relaxed text-foreground/85">{lead}</p>
        )}
      </div>

      <div className="overflow-x-auto px-3 pb-3 sm:px-4 sm:pb-4">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="w-52 px-2 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Formula
              </th>
              <th className="px-2 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Common name
              </th>
              <th className="px-2 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                IUPAC name
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-border/70 transition-colors duration-[120ms] ease-[var(--ease-blueprint)] last:border-b-0 hover:bg-[color-mix(in_oklab,var(--subject-chemistry)_5%,transparent)]"
              >
                <td className="w-52 whitespace-nowrap px-2 py-2.5 text-[0.82rem] font-semibold tabular-nums text-foreground">
                  {row.formula}
                </td>
                <td className="px-2 py-2.5 text-[0.85rem] font-extrabold leading-snug text-foreground">
                  {row.common}
                </td>
                <td className="px-2 py-2.5 text-[0.85rem] font-extrabold leading-snug text-[var(--subject-chemistry)]">
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
