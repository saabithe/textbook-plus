import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface ReductionRoute {
  /** Anchor id of the subsection the card opens. */
  id: string;
  /** "A" or "B". */
  letter: string;
  /** Route name, e.g. "Reduction into alcohols". */
  title: ReactNode;
  /** KaTeX for the carbonyl transformation. */
  transformation: string;
  /** One line under the transformation. */
  note?: ReactNode;
  tone?: "chemistry" | "ink";
}

interface ReductionRouteCardsProps {
  routes: ReductionRoute[];
  /** Accessible name for the navigation group. */
  label?: string;
}

/**
 * ReductionRouteCards — the two destinations a carbonyl reduction can take,
 * side by side, each showing the group it lands on. The cards are anchors, so
 * the transformation is both the summary and the way into the subsection.
 */
export function ReductionRouteCards({
  routes,
  label = "Reduction routes",
}: ReductionRouteCardsProps) {
  return (
    <nav className="my-6 grid gap-2 sm:grid-cols-2" aria-label={label}>
      {routes.map((route) => {
        const chemistry = (route.tone ?? "chemistry") === "chemistry";

        return (
          <a
            key={route.id}
            href={`#${route.id}`}
            className={cn(
              "group flex min-w-0 flex-col rounded-lg border px-3 py-3 transition-colors duration-[120ms] ease-[var(--ease-blueprint)]",
              chemistry
                ? "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] hover:bg-[color-mix(in_oklab,var(--subject-chemistry)_10%,transparent)]"
                : "border-border bg-card hover:bg-muted/40",
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] text-[0.62rem] font-extrabold leading-none",
                    chemistry
                      ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]"
                      : "bg-muted text-foreground",
                  )}
                >
                  {route.letter}
                </span>
                <p className="text-sm font-extrabold leading-snug text-foreground">
                  {route.title}
                </p>
              </div>
              <ArrowRight
                aria-hidden
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-[120ms] group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </div>

            <div className="mt-2 flex min-h-[2.6rem] items-center justify-center overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-3 text-[1.1rem] font-extrabold tracking-tight text-foreground">
              <Formula>{route.transformation}</Formula>
            </div>

            {route.note && (
              <p className="mt-1.5 text-[0.72rem] leading-relaxed text-muted-foreground">
                {route.note}
              </p>
            )}
          </a>
        );
      })}
    </nav>
  );
}
