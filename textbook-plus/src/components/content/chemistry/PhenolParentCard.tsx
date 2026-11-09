import { BenzeneRing, StructureMark } from "@/components/content/chemistry/StructureGlyphs";

interface PhenolParentCardProps {
  name: string;
  statements: string[];
  formula: string;
}

/**
 * PhenolParentCard — the parent compound as a portrait card: ring with its –OH,
 * the formula underneath, and the two defining statements beside it.
 */
export function PhenolParentCard({ name, statements, formula }: PhenolParentCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">Parent compound</span>
      </div>

      <div className="grid sm:grid-cols-[auto_1fr] sm:items-center">
        <div className="flex flex-col items-center gap-2 border-b border-border px-8 py-5 sm:border-b-0 sm:border-r">
          <div className="flex items-center gap-1 text-foreground">
            <BenzeneRing bond vertexDot className="h-12 w-[3.55rem]" />
            <StructureMark>OH</StructureMark>
          </div>
          <p className="text-sm font-bold tabular-nums text-muted-foreground">{formula}</p>
        </div>

        <div className="p-4">
          <p className="text-lg font-extrabold tracking-tight text-foreground">{name}</p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-foreground/90">
            {statements.map((statement) => (
              <li key={statement} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
                />
                <span>{statement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
