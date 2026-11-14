import type { ReactNode } from "react";
import { Check } from "lucide-react";

export interface CannizzaroCompound {
  /** Compound name, e.g. "Formaldehyde". */
  name: ReactNode;
  /** Formula, e.g. "HCHO". */
  formula: ReactNode;
}

interface CannizzaroCompoundCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The condition every card shares, e.g. "No α-H". */
  condition: ReactNode;
  cards: CannizzaroCompound[];
}

/**
 * CannizzaroCompoundCards — the aldehydes that qualify for the Cannizzaro
 * reaction, one card each under a single shared condition chip. The condition
 * is stated once because it is identical for all three; the cards only carry
 * what differs.
 */
export function CannizzaroCompoundCards({
  title,
  condition,
  cards,
}: CannizzaroCompoundCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Compounds that react"}</span>
        <span className="rounded-[3px] bg-warning/12 px-2 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.05em] text-warning">
          {condition}
        </span>
      </div>

      <ul className="grid gap-2 p-3 sm:grid-cols-3 sm:p-4">
        {cards.map((card, index) => (
          <li
            key={index}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-card px-2.5 py-2.5"
          >
            <p className="text-[0.8rem] font-extrabold leading-snug text-foreground">
              {card.name}
            </p>
            <p className="mt-1 overflow-x-auto text-[0.9rem] font-bold leading-snug text-foreground/80">
              {card.formula}
            </p>
            <p className="mt-auto flex items-center gap-1 pt-2 text-[0.62rem] font-extrabold uppercase tracking-[0.05em] text-[var(--subject-chemistry)]">
              <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
              Cannizzaro
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
