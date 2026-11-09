import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface Factor {
  factor: string;
  from: ReactNode;
  to: ReactNode;
}

interface CftFactorCardsProps {
  factors: Factor[];
}

/**
 * CftFactorCards — three compact horizontal cards: the factor on top, then the
 * directional relationship as `cause → effect`.
 */
export function CftFactorCards({ factors }: CftFactorCardsProps) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-3">
      {factors.map((item) => (
        <article
          key={item.factor}
          className="rounded-lg border border-border bg-card p-3.5"
        >
          <p className="t-micro">{item.factor}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-foreground">
            <span>{item.from}</span>
            <ArrowRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span>{item.to}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
