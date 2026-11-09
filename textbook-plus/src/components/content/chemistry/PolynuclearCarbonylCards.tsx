import type { ReactNode } from "react";

interface PolynuclearCarbonyl {
  formula: string;
  description: ReactNode;
}

interface PolynuclearCarbonylCardsProps {
  carbonyls: PolynuclearCarbonyl[];
}

/**
 * PolynuclearCarbonylCards — one card per cluster, formula first, structure
 * description underneath with the metal–metal bond and bridging CO in bold.
 */
export function PolynuclearCarbonylCards({ carbonyls }: PolynuclearCarbonylCardsProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {carbonyls.map((carbonyl) => (
        <article key={carbonyl.formula} className="rounded-lg border border-border bg-card p-4">
          <p className="text-lg font-extrabold leading-tight tracking-tight text-foreground">
            {carbonyl.formula}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">
            {carbonyl.description}
          </p>
        </article>
      ))}
    </div>
  );
}
