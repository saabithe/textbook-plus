import type { ReactNode } from "react";

export interface SubstitutionProduct {
  /** Product name, e.g. "p-Bromoanisole". */
  name: ReactNode;
  /** Yield or qualifier printed at the end of the row, e.g. "≈90%". */
  share?: ReactNode;
}

export interface SubstitutionCase {
  /** Reaction name, e.g. "Halogenation — bromination". */
  name: ReactNode;
  /** Reagents, one chip each. */
  reagents: ReactNode[];
  /** One-line qualifier about the conditions. */
  note?: ReactNode;
  /** Product at the para position — the major product for anisole. */
  para: SubstitutionProduct;
  /** Product at the ortho position — the minor product for anisole. */
  ortho: SubstitutionProduct;
}

interface AnisoleSubstitutionGridProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per reaction. */
  cases: SubstitutionCase[];
}

/**
 * AnisoleSubstitutionGrid — the four electrophilic substitutions of anisole in
 * one grid, every card using the same para-major / ortho-minor pattern: the
 * para row is tinted and tagged Major, the ortho row stays quiet and tagged
 * Minor. Reactants sit above as chips, so the four cards can be compared
 * column-against-column.
 */
export function AnisoleSubstitutionGrid({ title, cases }: AnisoleSubstitutionGridProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Electrophilic substitution of anisole"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          para major · ortho minor
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cases.map((item, index) => (
          <article
            key={index}
            className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 px-3 py-2.5"
          >
            <p className="text-sm font-extrabold leading-snug text-foreground">{item.name}</p>

            <div className="mt-1.5 flex flex-wrap gap-1">
              {item.reagents.map((reagent, reagentIndex) => (
                <span
                  key={reagentIndex}
                  className="rounded-[3px] border border-border bg-card px-1.5 py-0.5 text-[0.66rem] font-bold text-foreground/85"
                >
                  {reagent}
                </span>
              ))}
            </div>

            {item.note && (
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
            )}

            <div className="mt-2 space-y-1.5">
              <div className="flex items-baseline justify-between gap-2 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)] px-2 py-1.5">
                <div className="flex min-w-0 items-baseline gap-1.5">
                  <span className="shrink-0 rounded-[2px] bg-[color-mix(in_oklab,var(--subject-chemistry)_18%,transparent)] px-1 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
                    para
                  </span>
                  <span className="min-w-0 text-xs font-extrabold leading-snug text-foreground">
                    {item.para.name}
                  </span>
                </div>

                <div className="flex shrink-0 items-baseline gap-1.5">
                  {item.para.share && (
                    <span className="text-[0.68rem] font-extrabold tabular-nums text-foreground">
                      {item.para.share}
                    </span>
                  )}
                  <span className="rounded-[2px] bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] px-1 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
                    Major
                  </span>
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-2 rounded-[4px] border border-border/60 px-2 py-1.5">
                <div className="flex min-w-0 items-baseline gap-1.5">
                  <span className="shrink-0 rounded-[2px] bg-muted px-1 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-muted-foreground">
                    ortho
                  </span>
                  <span className="min-w-0 text-xs font-semibold leading-snug text-foreground/80">
                    {item.ortho.name}
                  </span>
                </div>

                <div className="flex shrink-0 items-baseline gap-1.5">
                  {item.ortho.share && (
                    <span className="text-[0.68rem] font-bold tabular-nums text-muted-foreground">
                      {item.ortho.share}
                    </span>
                  )}
                  <span className="rounded-[2px] bg-muted px-1 py-0.5 text-[0.56rem] font-extrabold uppercase tracking-[0.06em] text-muted-foreground">
                    Minor
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
