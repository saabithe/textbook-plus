import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** A reaction's applicability: true, false, or a qualifier such as "Limited (steric)". */
export type ReactionScope = boolean | ReactNode;

export interface OverviewRow {
  /** Reagent column, e.g. "HCN". */
  reagent: ReactNode;
  /** Does it add to aldehydes? */
  aldehydes: ReactionScope;
  /** Does it add to ketones? */
  ketones: ReactionScope;
  /** What the addition gives. */
  product: ReactNode;
}

interface AdditionOverviewTableProps {
  /** Heading strip. */
  title?: ReactNode;
  rows: OverviewRow[];
  /** Line under the table. */
  caption?: ReactNode;
}

function ScopeCell({ scope }: { scope: ReactionScope }) {
  if (scope === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]">
        <Check aria-hidden className="h-3.5 w-3.5" strokeWidth={3} />
        <span className="sr-only">Yes</span>
      </span>
    );
  }

  if (scope === false) {
    return <span className="text-muted-foreground">—</span>;
  }

  return (
    <span className="inline-block rounded-[3px] bg-muted px-1.5 py-0.5 text-[0.66rem] font-extrabold leading-snug text-foreground/85">
      {scope}
    </span>
  );
}

/**
 * AdditionOverviewTable — the reagent map for nucleophilic addition: one row per
 * reagent, ticked or qualified against aldehydes and ketones, with the product
 * column carrying the accent so the outcome is what the eye lands on. Wide
 * enough to scroll sideways on a phone rather than crush the columns.
 */
export function AdditionOverviewTable({
  title,
  rows,
  caption,
}: AdditionOverviewTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Overview of addition reactions"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {rows.length} REAGENTS
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              <th className="w-10 px-2 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                No.
              </th>
              <th className="px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Reagent
              </th>
              <th className="w-24 px-2 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Aldehydes
              </th>
              <th className="w-24 px-2 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Ketones
              </th>
              <th className="px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
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
                <td className="px-3 py-2.5 text-[0.82rem] font-extrabold leading-snug text-foreground">
                  {row.reagent}
                </td>
                <td className="px-2 py-2.5">
                  <ScopeCell scope={row.aldehydes} />
                </td>
                <td className="px-2 py-2.5">
                  <ScopeCell scope={row.ketones} />
                </td>
                <td
                  className={cn(
                    "bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2.5 text-[0.82rem] font-extrabold leading-snug text-foreground",
                  )}
                >
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
