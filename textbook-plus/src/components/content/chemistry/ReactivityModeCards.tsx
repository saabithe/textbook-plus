import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface ReactivityEquation {
  /** Line under the mode heading, e.g. "General scheme". */
  label?: ReactNode;
  /** KaTeX source. */
  latex: string;
}

export interface ReactivityMode {
  /** "As a nucleophile" / "As an electrophile". */
  role: ReactNode;
  /** Bond that breaks in this mode, e.g. "O—H". */
  bond: string;
  /** One sentence framing the mode. */
  statement: ReactNode;
  /** Supporting facts, one per row. */
  points: ReactNode[];
  equations: ReactivityEquation[];
  /** "chemistry" tints the card, "ink" keeps it neutral. */
  tone?: "chemistry" | "ink";
}

interface ReactivityModeCardsProps {
  /** Heading strip across the pair. */
  title?: ReactNode;
  cards: ReactivityMode[];
}

const TONE = {
  chemistry: {
    frame:
      "border-[color-mix(in_oklab,var(--subject-chemistry)_38%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_7%,transparent)]",
    chip: "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]",
    rule: "bg-[var(--subject-chemistry)]",
  },
  ink: {
    frame: "border-foreground/20 bg-muted/40",
    chip: "bg-foreground/10 text-foreground",
    rule: "bg-foreground/60",
  },
} as const;

/**
 * ReactivityModeCards — the two ways an alcohol reacts, set side by side. Each
 * card names the role, isolates the bond that breaks, then carries the mode's
 * equations so O—H cleavage and C—O cleavage are never confused.
 */
export function ReactivityModeCards({ title, cards }: ReactivityModeCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
          <span className="t-micro">Two modes</span>
        </div>
      )}

      <div className="grid gap-3 p-3 sm:grid-cols-2 sm:p-4">
        {cards.map((card, index) => {
          const tone = TONE[card.tone ?? (index === 0 ? "chemistry" : "ink")];

          return (
            <article
              key={index}
              className={cn("flex min-w-0 flex-col rounded-md border px-3 py-3", tone.frame)}
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className={cn(
                    "rounded-[3px] px-2 py-0.5 text-[0.66rem] font-extrabold uppercase tracking-[0.08em]",
                    tone.chip,
                  )}
                >
                  {card.role}
                </span>
                <span className="t-micro shrink-0">Mode {index + 1}</span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 rounded-md border border-border/70 bg-card/80 px-3 py-2">
                <span className="t-micro">Bond cleaved</span>
                <span className="inline-flex items-center gap-1.5 text-base font-extrabold tracking-tight text-foreground">
                  <span aria-hidden className={cn("h-3.5 w-0.5 rounded-full", tone.rule)} />
                  {card.bond}
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{card.statement}</p>

              <ul className="mt-2.5 space-y-1.5">
                {card.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/90"
                  >
                    <span
                      aria-hidden
                      className={cn("mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full", tone.rule)}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 space-y-2">
                {card.equations.map((equation, equationIndex) => (
                  <div
                    key={equationIndex}
                    className="rounded-md border border-border/70 bg-card px-2.5 py-2"
                  >
                    <div className="text-center text-[0.95rem] text-foreground">
                      <Formula>{equation.latex}</Formula>
                    </div>
                    {equation.label && (
                      <p className="mt-1 text-center text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                        {equation.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
