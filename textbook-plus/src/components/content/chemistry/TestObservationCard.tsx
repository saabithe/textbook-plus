import type { ReactNode } from "react";
import { AlertTriangle, FlaskConical, Sparkles } from "lucide-react";
import { Formula } from "@/components/content/Formula";

export interface TestReagent {
  /** Label above the reagent, e.g. "Tollen's reagent". */
  label: ReactNode;
  /** KaTeX for the reagent, e.g. TR = Ammoniacal AgNO₃ solution. */
  formula?: string;
  /** One line of prose under the formula. */
  text?: ReactNode;
}

export interface TestPart {
  /** Block label, e.g. "Fehling solution A". */
  label: ReactNode;
  /** Prose under the label. */
  text?: ReactNode;
  /** Optional KaTeX line. */
  formula?: string;
}

export interface TestObservation {
  /** What is seen, e.g. "Silver mirror formation". */
  value: ReactNode;
  /** One line under the observation. */
  note?: ReactNode;
}

interface TestObservationCardProps {
  /** Test name, e.g. "Tollen's test". */
  title: ReactNode;
  /** Short descriptor in the header, e.g. "Identification test". */
  tag?: ReactNode;
  /** Reagent band at the top of the card. */
  reagent?: TestReagent;
  /** Composition or structural groups, shown as a two-column grid. */
  parts?: TestPart[];
  /** Formula that combines the parts, e.g. FR = A + B. */
  combine?: { label?: ReactNode; formula: string };
  /** KaTeX for the test reaction. */
  reaction?: string;
  /** The visual result the test is known for. */
  observation: TestObservation;
  /** Exception or caveat, shown as a warning strip at the foot. */
  warning?: ReactNode;
}

/**
 * TestObservationCard — an identification test built around what is seen. The
 * reagent and its parts are laid out first, then the reaction, then the
 * observation in the card's strongest band; any exception closes the card as a
 * warning strip so it cannot be read as part of the positive result.
 */
export function TestObservationCard({
  title,
  tag,
  reagent,
  parts,
  combine,
  reaction,
  observation,
  warning,
}: TestObservationCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-extrabold leading-snug text-foreground">{title}</p>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] px-2 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="space-y-2 px-3 py-3 sm:px-4 sm:py-4">
        {reagent && (
          <div className="rounded-md border border-border/70 bg-muted/25 px-3 py-2.5">
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              {reagent.label}
            </p>
            {reagent.formula && (
              <div className="mt-1 overflow-x-auto text-center text-foreground">
                <Formula>{reagent.formula}</Formula>
              </div>
            )}
            {reagent.text && (
              <p className="mt-1 text-[0.8rem] leading-relaxed text-foreground/85">
                {reagent.text}
              </p>
            )}
          </div>
        )}

        {parts && parts.length > 0 && (
          <div className="grid gap-1.5 sm:grid-cols-2">
            {parts.map((part, index) => (
              <div
                key={index}
                className="min-w-0 rounded-md border border-border/70 bg-card px-2.5 py-2"
              >
                <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
                  {part.label}
                </p>
                {part.formula && (
                  <div className="mt-1 overflow-x-auto text-foreground">
                    <Formula>{part.formula}</Formula>
                  </div>
                )}
                {part.text && (
                  <p className="mt-0.5 text-[0.78rem] leading-relaxed text-foreground/85">
                    {part.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {combine && (
          <div className="rounded-md border border-border/70 bg-card px-3 py-2">
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              {combine.label ?? "Reagent"}
            </p>
            <div className="mt-1 overflow-x-auto text-center text-foreground">
              <Formula>{combine.formula}</Formula>
            </div>
          </div>
        )}

        {reaction && (
          <div className="rounded-md border border-border/70 bg-card px-3 py-2">
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Reaction
            </p>
            <div className="mt-1 overflow-x-auto text-center text-foreground">
              <Formula>{reaction}</Formula>
            </div>
          </div>
        )}

        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)] px-3 py-3">
          <div className="flex items-center gap-1.5">
            <FlaskConical
              aria-hidden
              className="h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
              strokeWidth={2}
            />
            <p className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
              Observation
            </p>
            <Sparkles
              aria-hidden
              className="ml-auto h-3.5 w-3.5 shrink-0 text-[var(--subject-chemistry)]"
              strokeWidth={2}
            />
          </div>
          <p className="mt-1 text-[1rem] font-extrabold leading-snug text-foreground">
            {observation.value}
          </p>
          {observation.note && (
            <p className="mt-0.5 text-[0.76rem] leading-relaxed text-foreground/80">
              {observation.note}
            </p>
          )}
        </div>

        {warning && (
          <div className="flex gap-2 rounded-md border border-warning/40 bg-warning/[0.06] px-3 py-2">
            <AlertTriangle
              aria-hidden
              className="mt-[0.15em] h-3.5 w-3.5 shrink-0 text-warning"
              strokeWidth={2}
            />
            <p className="min-w-0 text-[0.78rem] leading-relaxed text-foreground/90">
              {warning}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
