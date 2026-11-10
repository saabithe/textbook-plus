import type { ReactNode } from "react";

interface HydrogenBondCardProps {
  /** Micro label in the card header, e.g. "Intermolecular hydrogen bonding". */
  label?: ReactNode;
  /** The idea the card carries. */
  statement: ReactNode;
  /** Supporting facts, one per row. */
  points?: ReactNode[];
  /** Line above the comparison chips, e.g. "Boiling point is higher than". */
  comparisonLabel: ReactNode;
  /** Materials being compared against, e.g. ["hydrocarbons", "ethers"]. */
  comparisons: ReactNode[];
  /** Qualifier under the chips, e.g. "of comparable molar mass". */
  comparisonNote?: ReactNode;
}

/**
 * HydrogenBondCard — one accent concept card carrying the hydrogen-bonding
 * argument, with the molecules drawn as a donor H reaching the acceptor O of a
 * second molecule. The comparison against other compound families sits directly
 * under the card as chips, so the reason and its consequence read together.
 */
export function HydrogenBondCard({
  label,
  statement,
  points,
  comparisonLabel,
  comparisons,
  comparisonNote,
}: HydrogenBondCardProps) {
  return (
    <section className="my-6">
      <div className="rounded-lg border border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)] px-4 py-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="t-micro">{label}</span>
          <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.12em] text-[var(--subject-chemistry)]">
            Concept
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-foreground/90">{statement}</p>

        <div className="mt-3.5 flex flex-wrap items-start justify-center gap-x-3 gap-y-3 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_20%,transparent)] bg-card/80 px-3 py-4">
          <span className="text-[1.02rem] font-extrabold leading-none tracking-tight text-foreground">
            R—<span className="text-[var(--subject-chemistry)]">O</span>—H
          </span>

          <span className="flex w-14 flex-col items-center">
            <span
              aria-hidden
              className="mt-[0.45em] w-full border-t-2 border-dashed border-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)]"
            />
            <span className="mt-1 text-[0.52rem] font-extrabold uppercase leading-none tracking-[0.1em] text-[var(--subject-chemistry)]">
              H-bond
            </span>
          </span>

          <span className="flex flex-col items-start leading-none">
            <span className="text-[1.02rem] font-extrabold tracking-tight text-foreground">
              <span className="text-[var(--subject-chemistry)]">O</span>—R
            </span>
            <span aria-hidden className="ml-[0.3em] h-2.5 w-px bg-foreground/40" />
            <span className="ml-[0.08em] text-[1.02rem] font-extrabold text-foreground">H</span>
          </span>
        </div>

        {points && points.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {points.map((point, index) => (
              <li key={index} className="flex gap-2 text-sm leading-relaxed text-foreground/90">
                <span
                  aria-hidden
                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1.5 pl-1">
        <span className="text-[0.72rem] font-bold text-muted-foreground">{comparisonLabel}</span>

        {comparisons.map((comparison, index) => (
          <span
            key={index}
            className="rounded-[3px] border border-border bg-card px-2 py-0.5 text-[0.72rem] font-bold text-foreground/85"
          >
            {comparison}
          </span>
        ))}

        {comparisonNote && (
          <span className="text-[0.72rem] text-muted-foreground">{comparisonNote}</span>
        )}
      </div>
    </section>
  );
}
