import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TrendPair, type TrendDirection } from "@/components/content/chemistry/TrendCards";

export interface SolubilitySection {
  /** Section label, e.g. "Hydrogen bonding". */
  label: string;
  /** One or two sentences under the label. */
  body: ReactNode;
  /** Optional relationship pair carried by the section. */
  trend?: {
    from: string;
    fromDirection: TrendDirection;
    to: string;
    toDirection: TrendDirection;
  };
  /** Optional chips, e.g. the miscible alcohols. */
  items?: string[];
  /** Muted lead-in for the chips, e.g. "such as". */
  itemsLabel?: string;
  /** Marks the section as the rule the note wants read first. */
  emphasis?: boolean;
}

interface SolubilityPanelProps {
  /** Heading strip across the panel. */
  title?: ReactNode;
  sections: SolubilitySection[];
}

/**
 * SolubilityPanel — three compact solubility sections side by side. The section
 * marked `emphasis` takes the chemistry tint and a "Key trend" chip, so the
 * decreasing-solubility rule reads as the point of the panel rather than as a
 * middle column.
 */
export function SolubilityPanel({ title, sections }: SolubilityPanelProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      {title && (
        <div className="border-b border-border px-4 py-3">
          <span className="t-micro">{title}</span>
        </div>
      )}

      <div className="grid gap-3 p-3 sm:p-4 md:grid-cols-3">
        {sections.map((section) => (
          <article
            key={section.label}
            className={cn(
              "flex min-w-0 flex-col rounded-md border p-3",
              section.emphasis
                ? "border-[color-mix(in_oklab,var(--subject-chemistry)_42%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_9%,transparent)]"
                : "border-border/70 bg-muted/25",
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-extrabold leading-snug text-foreground">{section.label}</p>
              {section.emphasis && (
                <span className="shrink-0 rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_18%,transparent)] px-1.5 py-0.5 text-[0.58rem] font-extrabold uppercase tracking-[0.08em] text-[var(--subject-chemistry)]">
                  Key trend
                </span>
              )}
            </div>

            {section.trend && (
              <div className="mt-2.5">
                <TrendPair
                  {...section.trend}
                  size={section.emphasis ? "lg" : "sm"}
                  layout={section.emphasis ? "stacked" : "inline"}
                />
              </div>
            )}

            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{section.body}</p>

            {section.items && section.items.length > 0 && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {section.itemsLabel && (
                  <span className="text-[0.72rem] text-muted-foreground">{section.itemsLabel}</span>
                )}

                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-[3px] border border-border bg-card px-2 py-0.5 text-[0.72rem] font-bold text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
