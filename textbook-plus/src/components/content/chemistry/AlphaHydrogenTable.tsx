import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AlphaHydrogenRow {
  /** The compound written as its structure, e.g. CH₃–CHO. */
  compound: ReactNode;
  /** How many α-hydrogens it has; omit when there are none. */
  count?: ReactNode;
  /** Whether any α-hydrogen is present. */
  present: boolean;
}

interface AlphaHydrogenTableProps {
  /** Heading strip. */
  title?: ReactNode;
  rows: AlphaHydrogenRow[];
  /** Line under the table. */
  caption?: ReactNode;
}

/**
 * AlphaHydrogenTable — the screening test for aldol condensation: compound, how
 * many α-hydrogens it carries, and whether that qualifies it. The count is set
 * large and the compounds without any are drained to the warning tone, so the
 * ineligible rows are the ones that stand out.
 */
export function AlphaHydrogenTable({
  title,
  rows,
  caption,
}: AlphaHydrogenTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "α-Hydrogen screening"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {rows.filter((row) => row.present).length} of {rows.length} eligible
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[30rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-border bg-muted/60">
              <th className="w-10 px-2 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                No.
              </th>
              <th className="px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Compound
              </th>
              <th className="w-36 px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                α-H present?
              </th>
              <th className="w-28 px-3 py-2.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                Eligibility
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => {
              const Icon = row.present ? Check : X;

              return (
                <tr
                  key={index}
                  className={cn(
                    "border-b border-border/70 last:border-b-0",
                    !row.present && "bg-warning/[0.06]",
                  )}
                >
                  <td className="px-2 py-2.5 text-[0.66rem] font-extrabold tabular-nums text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="px-3 py-2.5 text-[0.85rem] font-bold leading-snug text-foreground">
                    {row.compound}
                  </td>
                  <td className="px-3 py-2.5">
                    <span className="flex items-baseline gap-1.5">
                      <Icon
                        aria-hidden
                        className={cn(
                          "h-3.5 w-3.5 shrink-0 self-center",
                          row.present ? "text-ok" : "text-warning",
                        )}
                        strokeWidth={3}
                      />
                      {row.present ? (
                        <>
                          {row.count && (
                            <span className="text-[1.05rem] font-extrabold leading-none tabular-nums text-foreground">
                              {row.count}
                            </span>
                          )}
                          <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.05em] text-muted-foreground">
                            α-H
                          </span>
                        </>
                      ) : (
                        <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.05em] text-warning">
                          No α-H
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <span
                      className={cn(
                        "inline-block whitespace-nowrap rounded-[3px] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.05em]",
                        row.present
                          ? "bg-ok/12 text-ok"
                          : "bg-warning/12 text-warning",
                      )}
                    >
                      {row.present ? "Eligible" : "Not eligible"}
                    </span>
                  </td>
                </tr>
              );
            })}
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
