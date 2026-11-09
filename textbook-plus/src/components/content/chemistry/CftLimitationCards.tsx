import type { ReactNode } from "react";

interface Limitation {
  title: string;
  points: ReactNode[];
}

interface CftLimitationCardsProps {
  limitations: Limitation[];
}

/**
 * CftLimitationCards — numbered cards. The limitation is the bold line, its
 * explanation sits directly underneath as bullets.
 */
export function CftLimitationCards({ limitations }: CftLimitationCardsProps) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {limitations.map((limitation, index) => (
        <article
          key={limitation.title}
          className="rounded-lg border border-border border-t-[3px] border-t-warning bg-card p-4"
        >
          <div className="flex items-start gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[3px] bg-warning/15 text-xs font-extrabold text-warning">
              {index + 1}
            </span>
            <p className="text-sm font-extrabold leading-snug text-foreground">
              {limitation.title}
            </p>
          </div>

          <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-foreground/85">
            {limitation.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
