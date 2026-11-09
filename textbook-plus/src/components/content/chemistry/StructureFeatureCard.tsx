import type { ReactNode } from "react";

interface FeatureLegendItem {
  label: string;
  tone: "chemistry" | "warning";
}

interface StructureFeatureCardProps {
  title: string;
  definition: ReactNode;
  structure: ReactNode;
  structureCaption?: string;
  legend: FeatureLegendItem[];
  note?: {
    label: string;
    text: ReactNode;
  };
}

const DOT_TONE = {
  chemistry: "bg-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)]",
  warning: "bg-warning/60",
} as const;

/**
 * StructureFeatureCard — definition, one large structural formula and a legend
 * that names each highlighted region. The optional footer carries a secondary
 * property such as the substitution degree.
 */
export function StructureFeatureCard({
  title,
  definition,
  structure,
  structureCaption,
  legend,
  note,
}: StructureFeatureCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-4 py-3">
        <span className="t-micro">{title}</span>
      </div>

      <div className="p-4">
        <p className="text-sm leading-relaxed text-foreground/90">
          <span className="font-extrabold text-foreground">Definition:</span> {definition}
        </p>

        <div className="mt-4 flex min-h-[7rem] items-center justify-center overflow-x-auto rounded-md border border-border/70 bg-muted/30 px-4 py-6">
          <div className="text-2xl font-extrabold tracking-tight text-foreground">{structure}</div>
        </div>

        {structureCaption && (
          <p className="mt-2 text-center text-xs text-muted-foreground">{structureCaption}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {legend.map((item) => (
            <span
              key={item.label}
              className="flex items-center gap-1.5 text-[0.72rem] text-muted-foreground"
            >
              <span aria-hidden className={`h-2 w-2 rounded-[2px] ${DOT_TONE[item.tone]}`} />
              {item.label}
            </span>
          ))}
        </div>

        {note && (
          <p className="mt-4 border-t border-border pt-3 text-sm leading-relaxed text-foreground/90">
            <span className="font-extrabold text-foreground">{note.label}:</span> {note.text}
          </p>
        )}
      </div>
    </section>
  );
}
