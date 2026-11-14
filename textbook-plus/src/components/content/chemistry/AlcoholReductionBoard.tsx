import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface ReducingAgent {
  /** Agent name, e.g. "Lithium aluminium hydride". */
  name: ReactNode;
  /** KaTeX for the agent, e.g. LiAlH₄. */
  formula: string;
}

export interface AlcoholConversion {
  /** Carbonyl compound, e.g. "Formaldehyde". */
  name: ReactNode;
  /** KaTeX for the conversion. */
  equation: string;
  /** Alcohol classification, e.g. "1° Alcohol". */
  classification: ReactNode;
  tone: "primary" | "secondary";
}

interface AlcoholReductionBoardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** KaTeX for >C=O → >CH–OH. */
  transformation: string;
  /** The reducing agents that carry the transformation out. */
  agents: ReducingAgent[];
  /** One card per carbonyl family and the alcohol it gives. */
  conversions: AlcoholConversion[];
}

/**
 * AlcoholReductionBoard — the alcohol reduction read in one block: the group
 * swap at the top, the three agents that do it, then a card per carbonyl family
 * ending on its alcohol class. The 1°/2° badge sits where the eye finishes, so
 * the classification is the answer the card delivers.
 */
export function AlcoholReductionBoard({
  title,
  transformation,
  agents,
  conversions,
}: AlcoholReductionBoardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reduction into alcohols"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {agents.length} reducing agents
        </span>
      </div>

      <div className="space-y-3 px-3 py-3 sm:px-4 sm:py-4">
        <div className="rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_30%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
          <p className="t-micro">General transformation</p>
          <div className="mt-1 overflow-x-auto text-center text-[1.15rem] text-foreground">
            <Formula>{transformation}</Formula>
          </div>
        </div>

        <div>
          <p className="t-micro">Reducing agents</p>
          <ul className="mt-1.5 grid gap-1.5 sm:grid-cols-3">
            {agents.map((agent, index) => (
              <li
                key={index}
                className="flex min-w-0 flex-col rounded-md border border-border/70 bg-card px-2.5 py-2"
              >
                <span className="text-[0.78rem] font-extrabold leading-snug text-foreground">
                  {agent.name}
                </span>
                <span className="mt-1 overflow-x-auto text-foreground">
                  <Formula>{agent.formula}</Formula>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="t-micro">General conversions</p>
          <ul className="mt-1.5 grid gap-2 sm:grid-cols-3">
            {conversions.map((conversion, index) => {
              const primary = conversion.tone === "primary";

              return (
                <li
                  key={index}
                  className="flex min-w-0 flex-col rounded-md border border-border/70 bg-card px-2.5 py-2.5"
                >
                  <p className="text-[0.78rem] font-extrabold leading-snug text-foreground">
                    {conversion.name}
                  </p>

                  <div className="mt-1.5 flex min-h-[2.6rem] items-center justify-center overflow-x-auto rounded-[4px] border border-border/70 bg-muted/20 px-1.5 py-2 text-foreground">
                    <Formula>{conversion.equation}</Formula>
                  </div>

                  <div className="mt-1.5 flex items-center gap-1">
                    <ArrowRight
                      aria-hidden
                      className="h-3 w-3 shrink-0 text-muted-foreground"
                      strokeWidth={2.5}
                    />
                    <span
                      className={cn(
                        "rounded-[3px] px-1.5 py-0.5 text-[0.68rem] font-extrabold",
                        primary
                          ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_15%,transparent)] text-[var(--subject-chemistry)]"
                          : "bg-muted text-foreground/80",
                      )}
                    >
                      {conversion.classification}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
