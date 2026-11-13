import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { BenzeneRing } from "@/components/content/chemistry/StructureGlyphs";

export interface AcidityFactorCard {
  /** Micro label, e.g. "Factor 1". */
  label: ReactNode;
  /** Card heading, e.g. "Carbon hybridisation". */
  title: ReactNode;
  /** Supporting facts, one per row. */
  points: ReactNode[];
}

interface PhenolAcidityCardsProps {
  /** Heading strip across the pair. */
  title?: ReactNode;
  hybridisation: AcidityFactorCard;
  resonance: AcidityFactorCard;
}

function FactorShell({
  card,
  children,
}: {
  card: AcidityFactorCard;
  children?: ReactNode;
}) {
  return (
    <article className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/25 p-3">
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-sm font-extrabold text-foreground">{card.title}</p>
        <span className="t-micro shrink-0">{card.label}</span>
      </div>

      <ul className="mt-2.5 space-y-1.5">
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

      {children && <div className="mt-3">{children}</div>}
    </article>
  );
}

/**
 * PhenolAcidityCards — the two reasons phenol out-acidifies an alcohol. The
 * first card carries the sp² ➜ O—H polarity chain; the second draws the
 * alkoxide/phenoxide pair so a localised charge can be seen against one spread
 * over the ring.
 */
export function PhenolAcidityCards({
  title,
  hybridisation,
  resonance,
}: PhenolAcidityCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro">Two factors</span>
        </div>
      )}

      <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        <FactorShell card={hybridisation}>
          <div className="flex flex-wrap items-center gap-2 rounded-md border border-border/70 bg-card px-2.5 py-2 text-[0.82rem]">
            <span className="rounded-[3px] border border-border bg-card px-2 py-0.5 font-bold text-foreground">
              sp<sup>2</sup> ring carbon
            </span>
            <ArrowRight aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span className="rounded-[3px] border border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)] px-2 py-0.5 font-extrabold text-foreground">
              O—H polarity ↑
            </span>
          </div>
        </FactorShell>

        <FactorShell card={resonance}>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex flex-col items-center rounded-md border border-border bg-card px-2.5 py-3 text-center">
              <span className="t-micro">Alkoxide ion</span>
              <span className="mt-1.5 text-lg font-extrabold tracking-tight text-foreground">
                R—O<sup className="text-[0.7em]">−</sup>
              </span>
              <span className="mt-1 text-[0.7rem] font-bold leading-tight text-muted-foreground">
                Charge localised on oxygen
              </span>
            </div>

            <div className="flex flex-col items-center rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)] px-2.5 py-3 text-center">
              <span className="t-micro">Phenoxide ion</span>
              <span className="mt-1 flex items-center gap-1">
                <BenzeneRing tone="chemistry" bond />
                <span className="text-lg font-extrabold tracking-tight text-foreground">
                  O<sup className="text-[0.7em]">−</sup>
                </span>
              </span>
              <span className="mt-1 text-[0.7rem] font-bold leading-tight text-muted-foreground">
                Charge delocalised over the ring
              </span>
            </div>
          </div>
        </FactorShell>
      </div>
    </section>
  );
}
