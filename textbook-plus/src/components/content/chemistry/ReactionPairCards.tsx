import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export interface ReactionPairCard {
  /** Card header, e.g. "Markovnikov hydration". */
  label: string;
  /** Reagent or condition chip in the header, e.g. "H₂O / H⁺". */
  reagent: string;
  /** Starting structure. */
  substrate: ReactNode;
  /** Product structure. */
  product: ReactNode;
  /** Optional rule line above the structures. */
  description?: ReactNode;
  /** Product name shown under the reaction. */
  productName: string;
  /** Alcohol class chip, e.g. "Secondary (2°)". */
  productMeta: ReactNode;
  /** Optional locant tag, e.g. "–OH at C-2". */
  badge?: ReactNode;
}

interface ReactionPairCardsProps {
  /** Heading strip across the pair. */
  title?: ReactNode;
  cards: ReactionPairCard[];
}

/**
 * ReactionPairCards — two reactions set side by side so the substrate and the
 * product can be read across. Each card keeps the same rhythm: header with the
 * reagent, the structures with an arrow between them, then the product name and
 * its class chip.
 */
export function ReactionPairCards({ title, cards }: ReactionPairCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
        </div>
      )}

      <div className="grid gap-4 p-4 sm:grid-cols-2">
        {cards.map((card) => (
          <article key={card.label} className="flex min-w-0 flex-col">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-extrabold leading-snug text-foreground">{card.label}</p>
              <span className="shrink-0 rounded-[3px] bg-muted px-2 py-0.5 text-[0.68rem] font-bold text-foreground/80">
                {card.reagent}
              </span>
            </div>

            {card.description && (
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{card.description}</p>
            )}

            <div className="mt-3 flex flex-1 flex-col justify-center rounded-md border border-border/70 bg-muted/30 px-3 py-4">
              <div className="overflow-x-auto text-center text-[0.95rem] font-bold tracking-tight text-foreground">
                <span className="whitespace-nowrap">{card.substrate}</span>
              </div>

              <div className="my-2 flex items-center justify-center gap-2 text-muted-foreground">
                <span aria-hidden className="h-px w-6 bg-border" />
                <ArrowRight className="h-4 w-4" aria-hidden />
                <span className="t-micro">{card.reagent}</span>
                <span aria-hidden className="h-px w-6 bg-border" />
              </div>

              <div className="overflow-x-auto text-center text-[0.95rem] font-bold tracking-tight text-foreground">
                <span className="whitespace-nowrap">{card.product}</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-sm font-extrabold text-foreground">{card.productName}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{card.productMeta}</p>
              </div>
              {card.badge && (
                <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-2 py-0.5 text-[0.7rem] font-extrabold text-[var(--subject-chemistry)]">
                  {card.badge}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
