import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export type TrendDirection = "up" | "down";

export interface TrendCard {
  /** What is changing, e.g. "Carbon chain length". */
  title: string;
  /** Quantity on the left of the relationship. */
  from: string;
  fromDirection: TrendDirection;
  /** Quantity on the right of the relationship. */
  to: string;
  toDirection: TrendDirection;
  /** The causal chain, one step per row. */
  points: ReactNode[];
}

interface TrendCardsProps {
  /** Heading strip across the pair. */
  title?: ReactNode;
  cards: TrendCard[];
}

function Direction({ direction }: { direction: TrendDirection }) {
  const Icon = direction === "up" ? ArrowUp : ArrowDown;

  return (
    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]">
      <Icon aria-hidden className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

/** One relationship pair, e.g. "Carbon atoms ↑ → Boiling point ↑". */
export function TrendPair({
  from,
  fromDirection,
  to,
  toDirection,
  size = "sm",
  layout = "inline",
}: {
  from: string;
  fromDirection: TrendDirection;
  to: string;
  toDirection: TrendDirection;
  size?: "sm" | "lg";
  /** "stacked" leads the consequence with its arrow on a second line. */
  layout?: "inline" | "stacked";
}) {
  const textSize = size === "lg" ? "text-[0.95rem]" : "text-[0.82rem]";

  const fromChip = (
    <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-border bg-card px-2.5 py-1 font-bold text-foreground">
      {from}
      <Direction direction={fromDirection} />
    </span>
  );

  const toChip = (
    <span className="inline-flex items-center gap-1.5 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)] px-2.5 py-1 font-extrabold text-foreground">
      {to}
      <Direction direction={toDirection} />
    </span>
  );

  if (layout === "stacked") {
    return (
      <div className={cn("flex flex-col items-start gap-1.5", textSize)}>
        {fromChip}

        <div className="flex items-center gap-1.5">
          <ArrowRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          {toChip}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-2", textSize)}>
      {fromChip}

      <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-muted-foreground" />

      {toChip}
    </div>
  );
}

/**
 * TrendCards — two physical-property trends side by side. Each card states the
 * relationship as a pair of arrowed quantities, then the causal chain beneath.
 */
export function TrendCards({ title, cards }: TrendCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
        </div>
      )}

      <div className="grid gap-4 p-4 sm:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/25 p-3"
          >
            <p className="text-sm font-extrabold text-foreground">{card.title}</p>

            <div className="mt-2">
              <TrendPair
                from={card.from}
                fromDirection={card.fromDirection}
                to={card.to}
                toDirection={card.toDirection}
              />
            </div>

            <ul className="mt-3 space-y-1.5">
              {card.points.map((point, index) => (
                <li key={index} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                  <span
                    aria-hidden
                    className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
