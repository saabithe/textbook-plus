import type { ReactNode } from "react";

export interface RevisionItem {
  /** What the line is about, e.g. "413 K". */
  label: ReactNode;
  /** The point to recall, e.g. "Ether formation". */
  value: ReactNode;
}

export interface RevisionGroup {
  /** Category name, e.g. "Conditions". */
  title: ReactNode;
  /** Key points, kept to one line each. */
  items: RevisionItem[];
}

interface RevisionDashboardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** Four categories, laid out two by two. */
  groups: RevisionGroup[];
}

/**
 * RevisionDashboard — the topic condensed into category tiles: a title per
 * category and one-line label/value rows, nothing else. Four tiles read as one
 * screen on desktop and stack on a phone.
 */
export function RevisionDashboard({ title, groups }: RevisionDashboardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Quick revision"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {groups.length} {groups.length === 1 ? "GROUP" : "GROUPS"}
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {groups.map((group, index) => (
          <div
            key={index}
            className="min-w-0 rounded-md border border-border/70 bg-muted/15 px-3 py-2.5"
          >
            <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[var(--subject-chemistry)]">
              {group.title}
            </p>

            <dl className="mt-1.5 divide-y divide-border/70">
              {group.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-baseline justify-between gap-2 py-1 first:pt-0 last:pb-0"
                >
                  <dt className="text-[0.72rem] font-semibold leading-snug text-muted-foreground">
                    {item.label}
                  </dt>
                  <dd className="shrink-0 text-right text-[0.78rem] font-extrabold leading-snug text-foreground">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
