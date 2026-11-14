import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface OxidationScopeSide {
  /** Family name, e.g. "Aldehydes". */
  name: ReactNode;
  /** KaTeX for the change the family undergoes. */
  equation: string;
  /** The verdict, e.g. "Oxidation occurs". */
  verdict: ReactNode;
  /** One line under the verdict. */
  note?: ReactNode;
  tone: "reacts" | "resists";
}

interface OxidationScopeCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  aldehyde: OxidationScopeSide;
  ketone: OxidationScopeSide;
}

/**
 * OxidationScopeCards — the fork in oxidation behaviour: aldehydes react, ketones
 * do not, under the same ordinary conditions. Each side carries its own arrow
 * and verdict, with the ketone card drained of colour so the contrast is the
 * first thing read.
 */
export function OxidationScopeCards({
  title,
  aldehyde,
  ketone,
}: OxidationScopeCardsProps) {
  const sides = [aldehyde, ketone];

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Oxidation under normal conditions"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Normal conditions
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {sides.map((side, index) => {
          const reacts = side.tone === "reacts";
          const Icon = reacts ? Check : X;

          return (
            <article
              key={index}
              className={cn(
                "flex min-w-0 flex-col rounded-md border px-3 py-3",
                reacts
                  ? "border-[color-mix(in_oklab,var(--subject-chemistry)_35%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)]"
                  : "border-border/70 bg-muted/20",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[0.85rem] font-extrabold leading-snug text-foreground">
                  {side.name}
                </p>
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px]",
                    reacts
                      ? "bg-[color-mix(in_oklab,var(--subject-chemistry)_16%,transparent)] text-[var(--subject-chemistry)]"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  <Icon aria-hidden className="h-3 w-3" strokeWidth={3} />
                </span>
              </div>

              <div className="mt-2 flex min-h-[2.8rem] items-center justify-center overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-2.5 text-foreground">
                <Formula>{side.equation}</Formula>
              </div>

              <p
                className={cn(
                  "mt-2 text-[0.82rem] font-extrabold leading-snug",
                  reacts ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {side.verdict}
              </p>
              {side.note && (
                <p className="mt-0.5 text-[0.72rem] leading-relaxed text-muted-foreground">
                  {side.note}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
