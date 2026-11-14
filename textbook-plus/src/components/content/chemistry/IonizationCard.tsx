import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";

interface IonizationCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** KaTeX for the ionization equilibrium. */
  equation: string;
  /** The ion named under the equation, e.g. "R–COO⁻". */
  ion: ReactNode;
  /** One line about the ion. */
  note?: ReactNode;
}

/**
 * IonizationCard — the ionization equilibrium as the central idea of acidity,
 * with the carboxylate ion lifted out of the equation into its own tinted band.
 * The ion, not the acid, is the thing that carries the stability argument, so
 * it is the one element given a fill.
 */
export function IonizationCard({
  title,
  equation,
  ion,
  note,
}: IonizationCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_4%,transparent)]">
      <div className="border-b border-[color-mix(in_oklab,var(--subject-chemistry)_22%,transparent)] px-4 py-2.5">
        <span className="t-micro">{title ?? "General ionization"}</span>
      </div>

      <div className="px-4 py-4">
        <div className="overflow-x-auto rounded-md border border-border/70 bg-card px-3 py-3 text-center text-foreground">
          <Formula>{equation}</Formula>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_11%,transparent)] px-3 py-2.5 text-center">
          <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
            Carboxylate ion
          </span>
          <span className="text-[1rem] font-extrabold leading-none text-foreground">{ion}</span>
          {note && (
            <span className="text-[0.74rem] leading-snug text-foreground/80">{note}</span>
          )}
        </div>
      </div>
    </section>
  );
}
