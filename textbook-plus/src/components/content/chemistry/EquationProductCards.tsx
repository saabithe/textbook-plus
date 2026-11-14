import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export interface EquationProductCard {
  /** Reaction name, e.g. "Oxidation of ethanal". */
  title: ReactNode;
  /** Reagent or condition chip, e.g. "KMnO₄". */
  tag?: ReactNode;
  /** KaTeX for the conversion. */
  equation: string;
  /** The product named under the equation, when the source names it. */
  product?: ReactNode;
  /** One line about the product. */
  note?: ReactNode;
}

interface EquationProductCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  cards: EquationProductCard[];
  /** Columns from the small breakpoint. Defaults to three. */
  columns?: 1 | 2 | 3;
}

/**
 * EquationProductCards — one conversion per card: the equation carries both ends
 * of the change and the product band names the acid that results. Cards sit in a
 * row so the three oxidations are compared, not read one after another.
 */
export function EquationProductCards({
  title,
  cards,
  columns = 3,
}: EquationProductCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Specific reactions"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {cards.length} conversions
        </span>
      </div>

      <div
        className={
          columns === 2
            ? "grid gap-2 p-3 sm:grid-cols-2 sm:p-4"
            : columns === 1
              ? "grid gap-2 p-3 sm:p-4"
              : "grid gap-2 p-3 sm:grid-cols-3 sm:p-4"
        }
      >
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-card px-2.5 py-2.5"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-[0.8rem] font-extrabold leading-snug text-foreground">
                {card.title}
              </p>
              {card.tag && (
                <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold text-[var(--subject-chemistry)]">
                  {card.tag}
                </span>
              )}
            </div>

            <div className="mt-1.5 flex min-h-[2.8rem] items-center justify-center overflow-x-auto rounded-[4px] border border-border/70 bg-muted/20 px-1.5 py-2 text-foreground">
              <Formula>{card.equation}</Formula>
            </div>

            {card.product && (
              <div className="mt-1.5 flex items-baseline gap-1.5">
                <ArrowRight
                  aria-hidden
                  className="h-3 w-3 shrink-0 text-muted-foreground"
                  strokeWidth={2.5}
                />
                <p className="min-w-0 text-[0.78rem] font-extrabold leading-snug text-foreground">
                  {card.product}
                </p>
              </div>
            )}

            {card.note && (
              <p className="mt-0.5 text-[0.7rem] leading-relaxed text-muted-foreground">
                {card.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
