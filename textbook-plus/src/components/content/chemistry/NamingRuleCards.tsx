import type { ReactNode } from "react";
import { Formula } from "@/components/content/Formula";
import { cn } from "@/lib/utils";

export interface NamingRule {
  /** Letter or number printed before the title, e.g. "A". */
  label?: ReactNode;
  /** What the rule covers, e.g. "Open-chain aliphatic aldehydes". */
  title: ReactNode;
  /** The suffix the rule adds, shown as a chip, e.g. "–al". */
  suffix?: ReactNode;
  /** The rule itself. */
  rule: ReactNode;
  /** How the chain is numbered under this rule. */
  numbering?: ReactNode;
  /** KaTeX form of the suffix change, e.g. alkane − e + al. */
  equation?: string;
  /** Named example the rule produces. */
  example?: ReactNode;
  /** Spans both columns — use for the rule with the longest example. */
  wide?: boolean;
}

interface NamingRuleCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One card per rule. */
  rules: NamingRule[];
}

/**
 * NamingRuleCards — one card per IUPAC rule, every card carrying the same three
 * lines in the same order: the suffix it adds, how it numbers the chain, and
 * the named example. The suffix is a chip so the rules can be compared down the
 * grid without reading the prose again.
 */
export function NamingRuleCards({ title, rules }: NamingRuleCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "IUPAC naming rules"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {rules.length} RULES
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {rules.map((rule, index) => (
          <article
            key={index}
            className={cn(
              "flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/15 px-3 py-3",
              rule.wide && "sm:col-span-2",
            )}
          >
            <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
              <div className="flex min-w-0 items-baseline gap-2">
                {rule.label && (
                  <span className="shrink-0 rounded-[3px] bg-foreground px-1.5 py-0.5 text-[0.58rem] font-extrabold leading-none text-background">
                    {rule.label}
                  </span>
                )}
                <p className="text-sm font-extrabold leading-snug text-foreground">
                  {rule.title}
                </p>
              </div>

              {rule.suffix && (
                <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] px-1.5 py-0.5 text-[0.66rem] font-extrabold text-[var(--subject-chemistry)]">
                  {rule.suffix}
                </span>
              )}
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-foreground/85">{rule.rule}</p>

            {rule.numbering && (
              <p className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 text-xs leading-relaxed text-foreground/85">
                <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.1em] text-muted-foreground">
                  Numbering
                </span>
                <span>{rule.numbering}</span>
              </p>
            )}

            {rule.equation && (
              <div className="mt-2 overflow-x-auto rounded-[4px] border border-border/70 bg-card px-2 py-1.5 text-center">
                <Formula>{rule.equation}</Formula>
              </div>
            )}

            {rule.example && (
              <p className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 text-xs leading-relaxed text-foreground/85">
                <span className="text-[0.56rem] font-extrabold uppercase tracking-[0.1em] text-muted-foreground">
                  Example
                </span>
                <span>{rule.example}</span>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
