import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface FormulaReagent {
  /** Reagent name, e.g. "Carbon monoxide". */
  name: ReactNode;
  /** Formula printed beside the name, e.g. "CO". */
  formula: ReactNode;
}

interface ReactionFormulaCardProps {
  /** Reaction name, e.g. "Gattermann–Koch reaction". */
  title: ReactNode;
  /** Chip in the header, e.g. "Named reaction". */
  tag?: ReactNode;
  /** KaTeX for the reaction. */
  equation: string;
  /** Caption under the equation. */
  equationLabel?: ReactNode;
  /** Heading above the reagent grid. */
  reagentTitle?: ReactNode;
  /** The reagents, printed as a compact grid of name + formula cells. */
  reagents?: FormulaReagent[];
  /** Line printed under the reagents. */
  footnote?: ReactNode;
}

/**
 * ReactionFormulaCard — one reaction given the whole card: the equation centred
 * on its own band, then the reagents the note lists as a compact grid. Used
 * where the reaction matters more than a route (a one-step formylation), so the
 * equation is read before the reagent list rather than beside it.
 */
export function ReactionFormulaCard({
  title,
  tag,
  equation,
  equationLabel,
  reagentTitle,
  reagents,
  footnote,
}: ReactionFormulaCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-extrabold leading-snug text-foreground">
          {title}
        </p>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.66rem] font-extrabold text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-4">
          <div className="overflow-x-auto text-center text-foreground">
            <Formula>{equation}</Formula>
          </div>
          {equationLabel && (
            <p className="mt-1.5 text-center text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
              {equationLabel}
            </p>
          )}
        </div>

        {reagents && reagents.length > 0 && (
          <>
            {reagentTitle && (
              <div className="mt-3">
                <span className="t-micro">{reagentTitle}</span>
              </div>
            )}
            <ul
              className={cn(
                "mt-1.5 grid gap-1.5",
                reagents.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "sm:grid-cols-3",
              )}
            >
              {reagents.map((reagent, index) => (
                <li
                  key={index}
                  className="flex min-w-0 flex-col rounded-[4px] border border-border/70 bg-muted/20 px-2.5 py-2"
                >
                  <span className="min-w-0 text-[0.7rem] font-semibold leading-snug text-muted-foreground">
                    {reagent.name}
                  </span>
                  <span className="mt-0.5 text-base font-extrabold leading-none tracking-tight text-foreground">
                    {reagent.formula}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {footnote && (
          <p className="mt-3 border-t border-border/70 pt-2 text-xs leading-relaxed text-foreground/85">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
