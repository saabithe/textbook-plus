import type { ReactNode } from "react";

export interface ReagentGridItem {
  /** Reagent name, e.g. "KMnO₄". */
  name: ReactNode;
  /** Optional second line, e.g. the full name. */
  detail?: ReactNode;
}

interface ReagentGridProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Line under the heading strip. */
  lead?: ReactNode;
  items: ReagentGridItem[];
  /** Grid columns from the small breakpoint. Defaults to two. */
  columns?: 2 | 3;
}

/**
 * ReagentGrid — a numbered reagent set as a compact grid, used where the point
 * is the set itself rather than any one member. Two columns keep long reagent
 * names on one line on a phone.
 */
export function ReagentGrid({
  title,
  lead,
  items,
  columns = 2,
}: ReagentGridProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Reagents"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          {items.length} reagents
        </span>
      </div>

      <div className="px-3 py-3 sm:px-4 sm:py-4">
        {lead && (
          <p className="mb-2 text-[0.8rem] leading-relaxed text-foreground/85">{lead}</p>
        )}

        <ul className={columns === 3 ? "grid gap-1.5 sm:grid-cols-3" : "grid gap-1.5 sm:grid-cols-2"}>
          {items.map((item, index) => (
            <li
              key={index}
              className="flex min-w-0 items-baseline gap-2 rounded-md border border-border/70 bg-card px-2.5 py-2"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_13%,transparent)] text-[0.6rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-[0.82rem] font-extrabold leading-snug text-foreground">
                  {item.name}
                </span>
                {item.detail && (
                  <span className="block text-[0.7rem] leading-snug text-muted-foreground">
                    {item.detail}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
