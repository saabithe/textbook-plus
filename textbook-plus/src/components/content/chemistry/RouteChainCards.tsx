import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

type StageTone = "default" | "intermediate" | "product";

export interface RouteChainStage {
  /** Stage name — the largest line in the stage. */
  title: ReactNode;
  /** KaTeX equation for this stage. */
  equation?: string;
  /** One line under the title or equation. */
  note?: ReactNode;
  /** Transformation printed on the arrow entering this stage. */
  via?: ReactNode;
  /** Tints the stage as an intermediate or as the route's product. */
  tone?: StageTone;
}

export interface RouteChain {
  /** Card header, e.g. "Primary alcohol (1°)". */
  label: ReactNode;
  /** Chip in the header, e.g. "→ Aldehyde". */
  badge?: ReactNode;
  /** The stages of the route, read top to bottom. */
  stages: RouteChainStage[];
}

interface RouteChainCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Shared conditions, printed as a chip strip above the routes. */
  conditions?: Array<{ label: ReactNode; value: ReactNode }>;
  /** One card per route, side by side on desktop. */
  chains: RouteChain[];
  /** Line printed under the routes. */
  footnote?: ReactNode;
}

const STAGE_TONE: Record<StageTone, string> = {
  default: "border-border/70 bg-card",
  intermediate:
    "border-[color-mix(in_oklab,var(--subject-chemistry)_45%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_8%,transparent)]",
  product:
    "border-[color-mix(in_oklab,var(--subject-chemistry)_55%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_11%,transparent)]",
};

const TAG_TONE: Record<StageTone, string> = {
  default: "bg-muted text-muted-foreground",
  intermediate:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]",
  product:
    "bg-[color-mix(in_oklab,var(--subject-chemistry)_18%,transparent)] text-[var(--subject-chemistry)]",
};

const TAG_LABEL: Partial<Record<StageTone, string>> = {
  intermediate: "Intermediate",
  product: "Product",
};

/**
 * RouteChainCards — the same condition driving two different substrates, one
 * route per column. The shared condition sits in a chip strip above a short
 * stem that forks into the routes; each route runs top to bottom, the arrow
 * between stages carrying the transformation that gets from one to the next,
 * and the product stage tinted.
 */
export function RouteChainCards({
  title,
  conditions,
  chains,
  footnote,
}: RouteChainCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reaction routes"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {chains.length} ROUTES
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        {conditions && conditions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_28%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-2.5 py-2">
            {conditions.map((condition, index) => (
              <span
                key={index}
                className="inline-flex flex-wrap items-baseline gap-1 rounded-[3px] border border-border bg-card px-1.5 py-0.5"
              >
                <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
                  {condition.label}
                </span>
                <span className="text-[0.72rem] font-extrabold text-foreground">
                  {condition.value}
                </span>
              </span>
            ))}
          </div>
        )}

        {conditions && conditions.length > 0 && (
          <div aria-hidden className="mx-auto h-5 w-px bg-border" />
        )}

        <div className="grid gap-2 sm:grid-cols-2">
          {chains.map((chain, chainIndex) => (
            <article
              key={chainIndex}
              className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 px-3 py-3"
            >
              <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
                <p className="text-sm font-extrabold leading-snug text-foreground">
                  {chain.label}
                </p>
                {chain.badge && (
                  <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.06em] text-[var(--subject-chemistry)]">
                    {chain.badge}
                  </span>
                )}
              </div>

              <div className="mt-2">
                {chain.stages.map((stage, stageIndex) => {
                  const tone = stage.tone ?? "default";
                  const tag = TAG_LABEL[tone];

                  return (
                    <div key={stageIndex}>
                      {stageIndex > 0 && (
                        <div className="flex flex-col items-center py-1">
                          <ArrowDown
                            aria-hidden
                            className="h-3.5 w-3.5 text-muted-foreground"
                          />
                          {stage.via && (
                            <span className="mt-0.5 text-center text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.06em] text-muted-foreground">
                              {stage.via}
                            </span>
                          )}
                        </div>
                      )}

                      <div
                        className={cn(
                          "rounded-[4px] border px-2.5 py-2",
                          STAGE_TONE[tone],
                        )}
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                          <p className="min-w-0 text-[0.82rem] font-extrabold leading-snug text-foreground">
                            {stage.title}
                          </p>
                          {tag && (
                            <span
                              className={cn(
                                "shrink-0 rounded-[2px] px-1.5 py-0.5 text-[0.54rem] font-extrabold uppercase tracking-[0.06em]",
                                TAG_TONE[tone],
                              )}
                            >
                              {tag}
                            </span>
                          )}
                        </div>

                        {stage.equation && (
                          <div className="mt-1 overflow-x-auto text-center text-foreground">
                            <Formula>{stage.equation}</Formula>
                          </div>
                        )}

                        {stage.note && (
                          <p className="mt-0.5 text-[0.68rem] leading-relaxed text-muted-foreground">
                            {stage.note}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        {footnote && (
          <p className="mt-3 border-t border-border/70 pt-2 text-xs leading-relaxed text-foreground/85">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
