import type { ReactNode } from "react";

interface UsesBoardProps {
  /** Heading strip. */
  title?: ReactNode;
  /** One entry per use, in the order given. */
  uses: ReactNode[];
}

/**
 * UsesBoard — the uses of a compound as numbered tiles rather than a comma-
 * separated sentence. Two uses sit side by side on a wide screen and stack on
 * a phone; the number is the only ornament, so the use itself reads first.
 */
export function UsesBoard({ title, uses }: UsesBoardProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Key uses"}</span>
        <span className="text-[0.68rem] font-extrabold tabular-nums text-muted-foreground">
          {uses.length}
        </span>
      </div>

      <ol className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {uses.map((use, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 rounded-md border border-border/70 bg-muted/25 px-3 py-2.5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-[color-mix(in_oklab,var(--subject-chemistry)_14%,transparent)] text-[0.7rem] font-extrabold tabular-nums text-[var(--subject-chemistry)]">
              {index + 1}
            </span>
            <p className="min-w-0 text-sm font-semibold leading-snug text-foreground">
              {use}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
