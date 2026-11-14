import type { ReactNode } from "react";
import { AlertTriangle, Droplet, Snowflake } from "lucide-react";

interface AcidStateSide {
  /** The carbon-count boundary, e.g. "Up to 9 C". */
  limit: ReactNode;
  /** The state at that size, e.g. "Colourless liquids". */
  state: ReactNode;
}

interface AcidStateCardsProps {
  /** Heading strip. */
  title?: ReactNode;
  liquid: AcidStateSide;
  solid: AcidStateSide;
  /** Warning strip for a source notation kept as written. */
  verification?: ReactNode;
}

/**
 * AcidStateCards — the two room-temperature states as a hard split at the
 * carbon boundary rather than a sentence that runs both together. The boundary
 * is the largest line on each card, because the number is the fact being tested.
 */
export function AcidStateCards({
  title,
  liquid,
  solid,
  verification,
}: AcidStateCardsProps) {
  return (
    <section className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border px-4 py-3">
        <span className="t-micro">{title ?? "Physical state"}</span>
        <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-muted-foreground">
          Two states
        </span>
      </div>

      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        <article className="flex min-w-0 flex-col rounded-md border border-[color-mix(in_oklab,var(--subject-chemistry)_32%,transparent)] bg-[color-mix(in_oklab,var(--subject-chemistry)_6%,transparent)] px-3 py-3">
          <span className="flex items-center gap-1.5 text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-[var(--subject-chemistry)]">
            <Droplet aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
            Liquid
          </span>
          <p className="mt-2 text-[1.05rem] font-extrabold leading-none tracking-tight text-foreground">
            {liquid.limit}
          </p>
          <p className="mt-1.5 text-[0.9rem] font-bold leading-snug text-foreground/90">
            {liquid.state}
          </p>
        </article>

        <article className="flex min-w-0 flex-col rounded-md border border-border/70 bg-muted/30 px-3 py-3">
          <span className="flex items-center gap-1.5 text-[0.58rem] font-extrabold uppercase tracking-[0.09em] text-muted-foreground">
            <Snowflake aria-hidden className="h-3.5 w-3.5" strokeWidth={2.2} />
            Waxy solid
          </span>
          <p className="mt-2 text-[1.05rem] font-extrabold leading-none tracking-tight text-foreground">
            {solid.limit}
          </p>
          <p className="mt-1.5 text-[0.9rem] font-bold leading-snug text-foreground/90">
            {solid.state}
          </p>
        </article>
      </div>

      {verification && (
        <div className="flex items-start gap-2 border-t border-warning/35 bg-warning/[0.06] px-4 py-2.5">
          <AlertTriangle
            aria-hidden
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning"
            strokeWidth={2.2}
          />
          <p className="min-w-0 text-[0.72rem] leading-relaxed text-foreground/80">
            <span className="font-extrabold uppercase tracking-[0.06em] text-warning">
              Source notation ·{" "}
            </span>
            {verification}
          </p>
        </div>
      )}
    </section>
  );
}
