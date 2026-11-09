import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface HydroxylTransformation {
  /** Caption above the card, e.g. "Methane → Methanol". */
  label: string;
  reactant: ReactNode;
  product: ReactNode;
}

interface HydroxylFormationCardsProps {
  transformations: HydroxylTransformation[];
}

/**
 * HydroxylFormationCards — one card per hydrocarbon → hydroxyl derivative
 * transformation. The reagent that does the substitution sits above the arrow,
 * and the product carries the highlighted –OH group.
 */
export function HydroxylFormationCards({ transformations }: HydroxylFormationCardsProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {transformations.map((item) => (
        <figure
          key={item.label}
          className="flex h-full flex-col rounded-lg border border-border bg-card p-4"
        >
          <figcaption className="t-micro">{item.label}</figcaption>

          <div className="mt-4 flex flex-1 items-center justify-between gap-2">
            <div className="flex min-w-[3rem] justify-center text-xl font-extrabold tracking-tight text-foreground">
              {item.reactant}
            </div>

            <div className="flex w-[5.75rem] shrink-0 flex-col items-center">
              <span className="rounded-[3px] border border-border bg-muted px-1.5 py-0.5 text-[0.65rem] font-bold tracking-[0.04em] text-muted-foreground">
                + OH / − H
              </span>
              <span className="mt-1 flex w-full items-center">
                <span aria-hidden className="h-px flex-1 bg-border" />
                <ArrowRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              </span>
            </div>

            <div className="flex min-w-[3rem] items-center justify-center text-xl font-extrabold tracking-tight text-foreground">
              {item.product}
            </div>
          </div>
        </figure>
      ))}
    </div>
  );
}
