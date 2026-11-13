import type { ReactNode } from "react";

interface CompoundHeaderProps {
  /** Two-digit ordinal, e.g. "01". */
  index: string;
  /** Compound name, e.g. "Methanol". */
  name: ReactNode;
  /** Condensed formula rendered at display size, e.g. CH₃OH. */
  formula: ReactNode;
  /** Common name chip, e.g. { label: "Common name", value: "Wood spirit" }. */
  alias?: { label: ReactNode; value: ReactNode };
}

/**
 * CompoundHeader — the opening band of a commercial-compound dossier: the
 * ordinal and name on the left, the formula held in its own tile on the right,
 * and the common name as a chip under the name. Colour comes from the subject
 * hue, never from a photo or icon.
 */
export function CompoundHeader({ index, name, formula, alias }: CompoundHeaderProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)]">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-4 sm:px-5">
        <div className="min-w-0">
          <span className="t-micro">Commercial alcohol · {index}</span>

          <p className="mt-1 text-[1.55rem] font-extrabold leading-tight tracking-tight text-foreground">
            {name}
          </p>

          {alias && (
            <span className="mt-2 inline-flex items-baseline gap-1.5 rounded-[3px] border border-border bg-card px-2 py-0.5 text-[0.72rem]">
              <span className="font-bold uppercase tracking-[0.08em] text-muted-foreground">
                {alias.label}
              </span>
              <span className="font-extrabold text-foreground">{alias.value}</span>
            </span>
          )}
        </div>

        <div className="shrink-0 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-card px-4 py-2.5 text-right">
          <span className="t-micro">Formula</span>
          <p className="mt-0.5 text-xl font-extrabold leading-none tracking-tight text-foreground">
            {formula}
          </p>
        </div>
      </div>
    </section>
  );
}
