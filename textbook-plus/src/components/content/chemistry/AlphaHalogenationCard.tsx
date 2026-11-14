import type { ReactNode } from "react";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Formula } from "@/components/content/Formula";

interface AlphaHalogenationCardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Named reaction, e.g. "Hell–Volhard–Zelinsky (HVZ) reaction". */
  name: ReactNode;
  /** Chip in the header, e.g. "Named reaction". */
  tag?: ReactNode;
  /** The reagents, in the order the note gives them. */
  reagents: ReactNode[];
  /** The essential structural requirement. */
  condition: ReactNode;
  /** KaTeX for the general reaction. */
  equation: string;
}

/**
 * AlphaHalogenationCard — the α-halogenation with the reacting atoms drawn, not
 * described: the α-carbon and its hydrogens are boxed in the starting compound,
 * an arrow carries the reagent across, and the same box lands on the product
 * holding one bromine. The substitution is therefore the shape of the diagram
 * before the equation is read.
 */
export function AlphaHalogenationCard({
  title,
  name,
  tag,
  reagents,
  condition,
  equation,
}: AlphaHalogenationCardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border px-4 py-3">
        <div className="min-w-0">
          <span className="t-micro">{title ?? "α-Halogenation"}</span>
          <p className="mt-1 text-[0.95rem] font-extrabold leading-snug tracking-tight text-foreground">
            {name}
          </p>
        </div>
        {tag && (
          <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
            {tag}
          </span>
        )}
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <span className="flex items-center gap-1.5 text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            <FlaskConical
              aria-hidden
              className="h-3.5 w-3.5 text-[var(--subject-chemistry)]"
              strokeWidth={2}
            />
            Reagents
          </span>
          {reagents.map((reagent, index) => (
            <span
              key={index}
              className="rounded-[3px] border border-border/70 bg-muted/30 px-1.5 py-0.5 text-[0.72rem] font-bold text-foreground"
            >
              {reagent}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-start gap-2 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-2">
          <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
            Essential condition
          </span>
          <p className="min-w-0 text-[0.8rem] font-bold leading-snug text-foreground">
            {condition}
          </p>
        </div>

        <div className="mt-3 grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-md border border-border/70 bg-muted/20 px-3 py-3">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              Starting compound
            </p>
            <p className="mt-1.5 text-center text-[1.05rem] font-extrabold tracking-tight text-foreground">
              R–C
              <span className="mx-0.5 rounded-[3px] border border-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1 text-[var(--subject-chemistry)]">
                H₂
              </span>
              –COOH
            </p>
            <p className="mt-1.5 text-center text-[0.62rem] font-semibold text-muted-foreground">
              α-carbon · two α-hydrogens
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 px-1">
            <span className="whitespace-nowrap rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold text-[var(--subject-chemistry)]">
              Br₂ / Red P
            </span>
            <ArrowRight
              aria-hidden
              className="h-4 w-4 text-muted-foreground"
              strokeWidth={2.5}
            />
            <span className="text-center text-[0.56rem] font-semibold leading-tight text-muted-foreground">
              one α-H
              <br />
              replaced
            </span>
          </div>

          <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_40%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
            <p className="text-[0.56rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
              α-Bromo acid
            </p>
            <p className="mt-1.5 text-center text-[1.05rem] font-extrabold tracking-tight text-foreground">
              R–C
              <span className="mx-0.5 rounded-[3px] border border-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1 text-[var(--subject-chemistry)]">
                H(Br)
              </span>
              –COOH
            </p>
            <p className="mt-1.5 text-center text-[0.62rem] font-semibold text-muted-foreground">
              one α-hydrogen replaced by halogen
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-md border border-border/70 bg-card px-3 py-2.5">
          <p className="text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            General reaction
          </p>
          <div className="mt-1.5 overflow-x-auto text-center text-foreground">
            <Formula>{equation}</Formula>
          </div>
        </div>
      </div>
    </section>
  );
}
