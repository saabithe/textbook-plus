import type { ReactNode } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export interface CannizzaroEquationCard {
  /** Reaction heading, e.g. "Formaldehyde". */
  title: ReactNode;
  /** KaTeX for the disproportionation. */
  equation: string;
  /** The oxidised product, e.g. "Sodium formate". */
  oxidation: ReactNode;
  /** The reduced product, e.g. "Methanol". */
  reduction: ReactNode;
}

interface CannizzaroEquationCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  cards: CannizzaroEquationCard[];
}

const PRODUCT = {
  oxidation: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]",
    label: "text-[var(--subject-chemistry)]",
  },
  reduction: {
    frame: "border-border/70 bg-muted/25",
    label: "text-muted-foreground",
  },
} as const;

/**
 * CannizzaroEquationCards — each disproportionation equation followed by its two
 * products split by role: one molecule was oxidised to the salt, the other
 * reduced to the alcohol. The split is the point, so it is printed as two
 * labelled tiles rather than a products list.
 */
export function CannizzaroEquationCards({
  title,
  cards,
}: CannizzaroEquationCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reaction equations"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {cards.length} examples
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-card px-2.5 py-2.5"
          >
            <p className="text-[0.82rem] font-extrabold leading-snug text-foreground">
              {card.title}
            </p>

            <div className="mt-1.5 overflow-x-auto rounded-[4px] border border-border/70 bg-muted/20 px-1.5 py-2 text-center text-foreground">
              <Formula>{card.equation}</Formula>
            </div>

            <div className="mt-1.5 grid gap-1.5">
              <div
                className={`flex min-w-0 items-baseline gap-1.5 rounded-[4px] border px-2 py-1.5 ${PRODUCT.oxidation.frame}`}
              >
                <ArrowUp
                  aria-hidden
                  className="h-3 w-3 shrink-0 self-center text-[var(--subject-chemistry)]"
                  strokeWidth={2.5}
                />
                <span className={`text-[0.56rem] font-extrabold uppercase tracking-[0.06em] ${PRODUCT.oxidation.label}`}>
                  Oxidation product
                </span>
                <span className="ml-auto text-right text-[0.78rem] font-extrabold leading-snug text-foreground">
                  {card.oxidation}
                </span>
              </div>

              <div
                className={`flex min-w-0 items-baseline gap-1.5 rounded-[4px] border px-2 py-1.5 ${PRODUCT.reduction.frame}`}
              >
                <ArrowDown
                  aria-hidden
                  className="h-3 w-3 shrink-0 self-center text-muted-foreground"
                  strokeWidth={2.5}
                />
                <span className={`text-[0.56rem] font-extrabold uppercase tracking-[0.06em] ${PRODUCT.reduction.label}`}>
                  Reduction product
                </span>
                <span className="ml-auto text-right text-[0.78rem] font-extrabold leading-snug text-foreground">
                  {card.reduction}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
