import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface CleavageCase {
  /** Which ether is being cleaved, e.g. "Dimethyl ether". */
  title: ReactNode;
  /** Condensed formula shown beside the title, e.g. "CH₃—O—CH₃". */
  formula?: ReactNode;
  /** The hydrogen halide, e.g. "HI". */
  reagent: ReactNode;
  /** Pathway badge, e.g. "Sₙ2", "Sₙ1", "aryl C—O". */
  mechanism?: ReactNode;
  /** "warning" tints the mechanism badge, e.g. for the Sₙ1 exception. */
  tone?: "chemistry" | "warning";
  /** KaTeX equation for the cleavage. */
  equation: string;
  /** Optional second stage, e.g. reaction of the alcohol with excess HI. */
  second?: { label: ReactNode; equation: string };
  /** Supporting facts, one per row. */
  points?: ReactNode[];
  /** Distinct band for the reason this case behaves as it does. */
  highlight?: ReactNode;
}

interface CleavageCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per ether, in the order given. */
  cases: CleavageCase[];
}

/**
 * CleavageCards — the cleavage of one ether per card: substrate and reagent in
 * the header, the mechanism as a badge, the equation in a panel, then the
 * reason. The anisole card carries the aryl-bond reason in a tinted band so the
 * exception is not lost among the Sₙ2 cases.
 */
export function CleavageCards({ title, cases }: CleavageCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Cleavage by hydrogen halides"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {cases.length}
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {cases.map((item, index) => {
          const warning = item.tone === "warning";

          return (
            <article
              key={index}
              className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 px-3 py-2.5"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-sm font-extrabold leading-snug text-foreground">
                    {item.title}
                  </p>
                  {item.formula && (
                    <p className="mt-0.5 text-xs font-semibold tabular-nums text-muted-foreground">
                      {item.formula}
                    </p>
                  )}
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                  <span className="rounded-[3px] border border-border bg-card px-1.5 py-0.5 text-[0.62rem] font-extrabold text-foreground/85">
                    {item.reagent}
                  </span>
                  {item.mechanism && (
                    <span
                      className={cn(
                        "rounded-[3px] px-1.5 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-[0.06em]",
                        warning
                          ? "bg-warning/15 text-warning"
                          : "bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[var(--subject-chemistry)]",
                      )}
                    >
                      {item.mechanism}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-2 overflow-hidden rounded-[4px] border border-border/70 bg-card px-2 py-2">
                <div className="overflow-x-auto text-center text-foreground">
                  <Formula>{item.equation}</Formula>
                </div>
              </div>

              {item.second && (
                <div className="mt-1.5 overflow-hidden rounded-[4px] border border-border/70 bg-card px-2 py-2">
                  <span className="block text-center text-[0.56rem] font-extrabold uppercase tracking-[0.1em] text-muted-foreground">
                    {item.second.label}
                  </span>
                  <div className="overflow-x-auto text-center text-foreground">
                    <Formula>{item.second.equation}</Formula>
                  </div>
                </div>
              )}

              {item.points && item.points.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {item.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex gap-2 text-xs leading-relaxed text-foreground/85"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-[var(--subject-chemistry)]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.highlight && (
                <p className="mt-2 rounded-[4px] border border-[color-mix(in_oklab,var(--subject-chemistry)_25%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-2 py-1.5 text-xs leading-relaxed text-foreground/85">
                  {item.highlight}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
