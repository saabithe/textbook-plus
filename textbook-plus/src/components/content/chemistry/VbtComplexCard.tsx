import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Magnetic = "Paramagnetic" | "Diamagnetic";

interface VbtComplexCardProps {
  formula: string;
  geometry: string;
  hybridisation: ReactNode;
  magnetic: Magnetic;
  config: ReactNode;
  unpaired: ReactNode;
  orbitalType?: string;
  notes: ReactNode[];
}

/**
 * VbtComplexCard — compact evidence card for one complex under Valence Bond
 * Theory. The hierarchy is fixed: complex → metal configuration →
 * hybridisation → magnetic behaviour → short supporting notes.
 */
export function VbtComplexCard({
  formula,
  geometry,
  hybridisation,
  magnetic,
  config,
  unpaired,
  orbitalType,
  notes,
}: VbtComplexCardProps) {
  const isParamagnetic = magnetic === "Paramagnetic";

  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-card p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-lg font-extrabold leading-tight tracking-tight text-foreground">
          {formula}
        </p>
        <div className="flex flex-wrap justify-end gap-1.5">
          <span
            className={cn(
              "rounded-[3px] px-2 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em]",
              isParamagnetic ? "bg-warning/10 text-warning" : "bg-ok/10 text-ok",
            )}
          >
            {magnetic}
          </span>
          {orbitalType && (
            <span className="rounded-[3px] border border-border bg-muted px-2 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
              {orbitalType}
            </span>
          )}
        </div>
      </div>

      <dl className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-border/70 bg-muted/40 px-3 py-2">
          <dt className="t-micro">Metal config</dt>
          <dd className="mt-0.5 text-sm font-semibold text-foreground">{config}</dd>
        </div>
        <div className="rounded-md border border-border/70 bg-muted/40 px-3 py-2">
          <dt className="t-micro">Hybridisation</dt>
          <dd className="mt-0.5 text-sm font-semibold text-foreground">{hybridisation}</dd>
        </div>
        <div className="rounded-md border border-border/70 bg-muted/40 px-3 py-2">
          <dt className="t-micro">Geometry</dt>
          <dd className="mt-0.5 text-sm font-semibold text-foreground">{geometry}</dd>
        </div>
        <div className="rounded-md border border-border/70 bg-muted/40 px-3 py-2">
          <dt className="t-micro">Unpaired e⁻</dt>
          <dd className="mt-0.5 text-sm font-semibold text-foreground">{unpaired}</dd>
        </div>
      </dl>

      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground/85">
        {notes.map((note, index) => (
          <li key={index} className="flex gap-2">
            <span aria-hidden className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
