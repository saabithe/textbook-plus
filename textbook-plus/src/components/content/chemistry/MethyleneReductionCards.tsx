import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface MethyleneRoute {
  /** Reaction name, e.g. "Clemmensen's reduction". */
  name: ReactNode;
  /** Reagent in words, e.g. "Zinc amalgam and hydrochloric acid." */
  reagent: ReactNode;
  /** KaTeX for the reagent, e.g. Zn-Hg / Conc. HCl. */
  reagentFormula: string;
  /** Supporting facts, one per row. */
  points: ReactNode[];
  /** KaTeX for the group conversion. */
  conversion: string;
  tone: "chemistry" | "ink";
}

interface MethyleneReductionCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  routes: MethyleneRoute[];
  /** The result both routes share, written as one line. */
  common: ReactNode;
}

/**
 * MethyleneReductionCards — Clemmensen and Wolff–Kishner set side by side. Each
 * card opens with its own coloured reagent strip, so the two reagent sets stay
 * apart, and closes on the same group conversion; the band underneath states
 * that the shared result is the only thing the routes agree on.
 */
export function MethyleneReductionCards({
  title,
  routes,
  common,
}: MethyleneReductionCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reduction into hydrocarbons"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Two routes
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        <div className="grid gap-2 sm:grid-cols-2">
          {routes.map((route, index) => {
            const chemistry = route.tone === "chemistry";

            return (
              <article
                key={index}
                className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border/70 bg-card"
              >
                <div className="border-b border-border/70 px-3 py-2">
                  <p className="text-[0.85rem] font-extrabold leading-snug text-foreground">
                    {route.name}
                  </p>
                </div>

                <div
                  className={cn(
                    "px-3 py-2.5",
                    chemistry
                      ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)]"
                      : "bg-muted/60",
                  )}
                >
                  <p
                    className={cn(
                      "text-[0.56rem] font-extrabold uppercase tracking-[0.09em]",
                      chemistry
                        ? "text-[var(--subject-chemistry)]"
                        : "text-muted-foreground",
                    )}
                  >
                    Reagents
                  </p>
                  <div className="mt-1 overflow-x-auto text-[1.05rem] text-foreground">
                    <Formula>{route.reagentFormula}</Formula>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-3 py-2.5">
                  <p className="text-[0.8rem] leading-relaxed text-foreground/85">
                    {route.reagent}
                  </p>
                  <ul className="mt-1.5 space-y-1">
                    {route.points.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex gap-2 text-[0.78rem] leading-relaxed text-foreground/90"
                      >
                        <Check
                          aria-hidden
                          className="mt-[0.2em] h-3 w-3 shrink-0 text-[var(--subject-chemistry)]"
                          strokeWidth={3}
                        />
                        <span className="min-w-0">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <div className="overflow-hidden rounded-[4px] border border-border/70 bg-muted/20 px-2 py-2 text-center">
                      <div className="overflow-x-auto text-foreground">
                        <Formula>{route.conversion}</Formula>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)] px-3 py-2.5">
          <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
            Common result
          </span>
          <p className="text-[0.85rem] font-extrabold leading-snug text-foreground">
            {common}
          </p>
        </div>
      </div>
    </section>
  );
}
