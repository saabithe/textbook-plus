import type { ReactNode } from "react";

interface PolyhydricAlcohol {
  common: string;
  iupac: string;
  hydroxyls: number;
  structure: ReactNode;
}

interface PolyhydricAlcoholCardsProps {
  alcohols: PolyhydricAlcohol[];
}

/**
 * PolyhydricAlcoholCards — one card per polyhydric alcohol. The structure keeps
 * every –OH marked, and the count chip states how many the molecule carries.
 */
export function PolyhydricAlcoholCards({ alcohols }: PolyhydricAlcoholCardsProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {alcohols.map((alcohol) => (
        <article
          key={alcohol.common}
          className="flex h-full flex-col rounded-lg border border-border bg-card p-4"
        >
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-extrabold text-foreground">{alcohol.common}</p>
            <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] px-2 py-0.5 text-[0.68rem] font-extrabold text-[var(--subject-chemistry)]">
              {alcohol.hydroxyls} × –OH
            </span>
          </div>

          <div className="mt-3 flex flex-1 items-center justify-center overflow-x-auto rounded-md border border-border/70 bg-muted/30 px-3 py-6">
            <p className="whitespace-nowrap text-[0.95rem] font-bold tracking-tight text-foreground">
              {alcohol.structure}
            </p>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            IUPAC: <span className="font-semibold text-foreground">{alcohol.iupac}</span>
          </p>
        </article>
      ))}
    </div>
  );
}
