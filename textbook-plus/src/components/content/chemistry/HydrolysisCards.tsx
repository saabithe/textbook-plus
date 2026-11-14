import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface HydrolysisCard {
  /** Letter the note gives the derivative, e.g. "A". */
  letter: ReactNode;
  /** Derivative name, e.g. "Hydrolysis of nitriles". */
  name: ReactNode;
  /** KaTeX for the starting compound. */
  starting: string;
  /** KaTeX for the hydrolysis. */
  equation: string;
}

export interface FeaturedHydrolysisCard extends HydrolysisCard {
  /** KaTeX for the worked example. */
  example: { equation: string; products: ReactNode[] };
}

interface HydrolysisCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** The four compact derivative cards. */
  cards: HydrolysisCard[];
  /** The ester card, given the extra room and the worked example. */
  featured: FeaturedHydrolysisCard;
}

/**
 * HydrolysisCards — the four derivative hydrolyses as equal cards, then the
 * ester case given a larger card of its own because it carries the worked
 * example. Every card keeps the same three lines — name, starting compound,
 * reaction — so the differences are read down the same positions, and the ester
 * products are lifted out as named chips rather than left inside the equation.
 */
export function HydrolysisCards({
  title,
  cards,
  featured,
}: HydrolysisCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Hydrolysis of derivatives"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {cards.length + 1} derivatives
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border/70 bg-card"
          >
            <div className="flex items-baseline gap-2 border-b border-border/70 px-2.5 py-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] text-[0.62rem] font-extrabold text-[var(--subject-chemistry)]">
                {card.letter}
              </span>
              <p className="min-w-0 text-[0.8rem] font-extrabold leading-snug text-foreground">
                {card.name}
              </p>
            </div>

            <div className="px-2.5 py-2">
              <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                Starting compound
              </p>
              <div className="mt-1 overflow-x-auto rounded-[4px] border border-border/70 bg-muted/20 px-2 py-1.5 text-center text-foreground">
                <Formula>{card.starting}</Formula>
              </div>
            </div>

            <div className="mt-auto border-t border-border/70 bg-muted/10 px-2.5 py-2">
              <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                Reaction
              </p>
              <div className="mt-1 overflow-x-auto text-center text-foreground">
                <Formula>{card.equation}</Formula>
              </div>
            </div>
          </article>
        ))}

        <article className="flex min-w-0 flex-col overflow-hidden rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_4%,transparent)] sm:col-span-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[color-mix(in_oklab,var(--subject-chemistry)_24%,transparent)] px-3 py-2.5">
            <div className="flex items-baseline gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_18%,transparent)] text-[0.62rem] font-extrabold text-[var(--subject-chemistry)]">
                {featured.letter}
              </span>
              <p className="text-[0.86rem] font-extrabold leading-snug text-foreground">
                {featured.name}
              </p>
            </div>
            <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-1.5 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.07em] text-[var(--subject-chemistry)]">
              Worked example
            </span>
          </div>

          <div className="grid gap-2 px-3 py-2.5 sm:grid-cols-2">
            <div>
              <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                Starting compound
              </p>
              <div className="mt-1 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-1.5 text-center text-foreground">
                <Formula>{featured.starting}</Formula>
              </div>
            </div>
            <div>
              <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                Reaction
              </p>
              <div className="mt-1 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-1.5 text-center text-foreground">
                <Formula>{featured.equation}</Formula>
              </div>
            </div>
          </div>

          <div className="border-t border-[color-mix(in_oklab,var(--subject-chemistry)_22%,transparent)] px-3 py-2.5">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Example
            </p>
            <div className="mt-1 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-2 text-center text-foreground">
              <Formula>{featured.example.equation}</Formula>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                Products
              </span>
              {featured.example.products.map((product, index) => (
                <span key={index} className="flex items-center gap-1">
                  {index > 0 && (
                    <ArrowRight
                      aria-hidden
                      className="h-3 w-3 text-muted-foreground"
                      strokeWidth={2.5}
                    />
                  )}
                  <span
                    className={cn(
                      "rounded-[3px] px-1.5 py-0.5 text-[0.66rem] font-extrabold",
                      "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]",
                    )}
                  >
                    {product}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
