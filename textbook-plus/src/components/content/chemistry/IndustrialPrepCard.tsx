import type { ReactNode } from "react";
import { FlaskConical } from "lucide-react";
import { Formula } from "@/components/content/Formula";

interface SpecRow {
  /** What the row describes, e.g. "Reagents". */
  label: ReactNode;
  /** The reagent or catalyst itself. */
  value: ReactNode;
}

export interface PrepCondition {
  /** Name of the variable, e.g. "Pressure". */
  label: ReactNode;
  /** Its value, e.g. "200–300 atm". */
  value: ReactNode;
}

interface IndustrialPrepCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Chip in the header, e.g. "Catalytic hydrogenation". */
  tag?: ReactNode;
  /** One line naming the method. */
  method: ReactNode;
  /** KaTeX equation for the industrial reaction. */
  equation: string;
  /** Caption printed under the equation, e.g. "Carbon monoxide + hydrogen". */
  equationLabel?: ReactNode;
  /** Inputs that get consumed. */
  reagents?: SpecRow;
  /** The solid the vapours pass over. */
  catalyst?: SpecRow;
  /** Pressure, temperature and any other fixed variables. */
  conditions?: PrepCondition[];
}

/**
 * IndustrialPrepCard — an industrial synthesis as one dossier card: the method
 * in a line, the equation in its own tinted panel, then the inputs (reagents,
 * catalyst) and the fixed conditions as chips. The equation is display math so
 * the stacked arrow labels stay readable on a phone.
 */
export function IndustrialPrepCard({
  title,
  tag,
  method,
  equation,
  equationLabel,
  reagents,
  catalyst,
  conditions,
}: IndustrialPrepCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-6 w-6 items-center justify-center rounded-[3px] border border-border bg-card text-muted-foreground">
            <FlaskConical aria-hidden className="h-3.5 w-3.5" />
          </span>
          <span className="t-micro">{title ?? "Industrial preparation"}</span>
        </div>

        {tag && (
          <span className="rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.68rem] font-extrabold text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <p className="text-sm leading-relaxed text-foreground/85">{method}</p>

        <div className="mt-3 overflow-hidden rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_25%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
          <div className="overflow-x-auto text-center text-foreground">
            <Formula>{equation}</Formula>
          </div>
        </div>

        {equationLabel && (
          <p className="mt-1 text-center text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            {equationLabel}
          </p>
        )}

        {(reagents || catalyst) && (
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[reagents, catalyst].filter(Boolean).map((spec, index) => (
              <div
                key={index}
                className="rounded-md border border-border/70 bg-muted/25 px-3 py-2"
              >
                <span className="t-micro">{spec!.label}</span>
                <p className="mt-0.5 text-sm font-extrabold leading-snug text-foreground">
                  {spec!.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {conditions && conditions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {conditions.map((condition, index) => (
              <span
                key={index}
                className="inline-flex items-baseline gap-1.5 rounded-[4px] border border-border bg-card px-2 py-1"
              >
                <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                  {condition.label}
                </span>
                <span className="text-[0.82rem] font-extrabold tabular-nums leading-none text-foreground">
                  {condition.value}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
