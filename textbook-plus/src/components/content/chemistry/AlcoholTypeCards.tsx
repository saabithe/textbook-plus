import type { ReactNode } from "react";
import { StructureMark } from "@/components/content/chemistry/StructureGlyphs";

interface AlcoholType {
  type: string;
  degree: string;
  classification: string;
  formula: {
    before: ReactNode;
    focus: ReactNode;
    after: ReactNode;
  };
}

interface AlcoholTypeCardsProps {
  types: AlcoholType[];
}

/**
 * AlcoholTypeCards — the primary / secondary / tertiary trio. Each card keeps
 * the same order: type, the carbon it attaches to, then the structural formula
 * with the carbon bearing –OH picked out.
 */
export function AlcoholTypeCards({ types }: AlcoholTypeCardsProps) {
  return (
    <div className="my-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {types.map((item) => (
          <article
            key={item.type}
            className="flex h-full flex-col rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-extrabold text-foreground">{item.type}</p>
              <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] px-1.5 py-0.5 text-[0.7rem] font-extrabold text-[var(--subject-chemistry)]">
                {item.degree}
              </span>
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {item.classification}
            </p>

            <div className="mt-3 flex flex-1 items-center justify-center rounded-md border border-border/70 bg-muted/30 px-2 py-5">
              <p className="text-center text-[0.98rem] font-bold tracking-tight text-foreground">
                {item.formula.before}
                <StructureMark>{item.formula.focus}</StructureMark>
                {item.formula.after}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-2 flex items-center gap-1.5 text-[0.72rem] text-muted-foreground">
        <span
          aria-hidden
          className="h-2 w-2 rounded-[2px] bg-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)]"
        />
        Highlighted unit — the carbon bearing –OH.
      </p>
    </div>
  );
}
