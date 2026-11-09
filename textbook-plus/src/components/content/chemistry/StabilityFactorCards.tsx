import type { ReactNode } from "react";

interface StabilityFactor {
  factor: string;
  detail: ReactNode;
}

interface StabilityFactorCardsProps {
  factors: StabilityFactor[];
}

/**
 * StabilityFactorCards — three numbered horizontal cards: factor as the
 * heading, its relationship underneath.
 */
export function StabilityFactorCards({ factors }: StabilityFactorCardsProps) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-3">
      {factors.map((item, index) => (
        <article key={item.factor} className="rounded-lg border border-border bg-card p-3.5">
          <div className="flex items-start gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_12%,transparent)] text-xs font-extrabold text-[var(--subject-chemistry)]">
              {index + 1}
            </span>
            <p className="text-sm font-extrabold leading-snug text-foreground">{item.factor}</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
