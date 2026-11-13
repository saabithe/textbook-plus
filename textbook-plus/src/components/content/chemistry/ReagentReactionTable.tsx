import type { ReactNode } from "react";
import { Minus } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface ReagentCell {
  /** KaTeX reaction shown in the cell. */
  equation?: string;
  /** Named product under the equation. */
  product?: ReactNode;
  /** "none" prints the muted no-reaction state instead of a product. */
  state?: "reacts" | "none";
  /** Extra line under the product. */
  note?: ReactNode;
}

export interface ReagentReactionRow {
  /** Reagent name, e.g. "Active metals". */
  reagent: ReactNode;
  /** Reagent list or condition under the name, e.g. "Na · K · Al". */
  reagentNote?: ReactNode;
  alcohol: ReagentCell;
  phenol: ReagentCell;
}

interface ReagentReactionTableProps {
  /** Heading strip. */
  title?: ReactNode;
  rows: ReagentReactionRow[];
}

function Cell({
  side,
  cell,
  accent = false,
}: {
  side: string;
  cell: ReagentCell;
  accent?: boolean;
}) {
  const isNone = cell.state === "none";

  return (
    <div
      className={cn(
        "min-w-0 rounded-md border px-3 py-2.5",
        isNone
          ? "border-dashed border-border bg-transparent"
          : accent
            ? "border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
            : "border-border/70 bg-muted/25",
      )}
    >
      <span className="t-micro sm:hidden">{side}</span>

      {isNone ? (
        <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground sm:mt-0">
          <Minus aria-hidden className="h-3.5 w-3.5 shrink-0" strokeWidth={3} />
          No reaction shown
        </p>
      ) : (
        <>
          {cell.equation && (
            <div className="overflow-x-auto text-center text-[0.9rem] text-foreground">
              <Formula>{cell.equation}</Formula>
            </div>
          )}
          {cell.product && (
            <p className="mt-1 text-sm font-extrabold leading-snug text-foreground">
              {cell.product}
            </p>
          )}
          {cell.note && (
            <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{cell.note}</p>
          )}
        </>
      )}
    </div>
  );
}

/**
 * ReagentReactionTable — one reagent per row with the alcohol result beside the
 * phenol result, so a reaction shown by only one class is visible at a glance.
 * The phenol column carries the chemistry wash; a dashed cell means the note
 * shows no reaction there.
 */
export function ReagentReactionTable({ title, rows }: ReagentReactionTableProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro">O—H bond</span>
        </div>
      )}

      <div className="hidden grid-cols-[8.5rem_minmax(0,1fr)_minmax(0,1fr)] gap-3 border-b border-border bg-muted/40 px-4 py-2 sm:grid">
        <span className="t-micro">Reagent</span>
        <span className="t-micro">Alcohols</span>
        <span className="t-micro text-[var(--subject-chemistry)]">Phenols</span>
      </div>

      <div className="divide-y divide-border">
        {rows.map((row, index) => (
          <div
            key={index}
            className="grid gap-2 px-3 py-3 sm:grid-cols-[8.5rem_minmax(0,1fr)_minmax(0,1fr)] sm:gap-3 sm:px-4"
          >
            <div className="min-w-0">
              <p className="text-sm font-extrabold leading-snug text-foreground">{row.reagent}</p>
              {row.reagentNote && (
                <p className="mt-0.5 text-xs font-bold tracking-wide text-muted-foreground">
                  {row.reagentNote}
                </p>
              )}
            </div>

            <Cell side="Alcohols" cell={row.alcohol} />
            <Cell side="Phenols" cell={row.phenol} accent />
          </div>
        ))}
      </div>
    </section>
  );
}
