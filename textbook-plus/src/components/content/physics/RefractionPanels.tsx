import { Fragment, type ReactNode } from "react";

const PHYSICS = "var(--subject-physics)";

function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

/** Section opener: title, the three learning blocks, and the solved crossing figure. */
export function RefractionHero({
  figure,
  blocks,
}: {
  figure: ReactNode;
  blocks: string[];
}) {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="border-b border-border/40 px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r">
          <PanelLabel>Learning blocks</PanelLabel>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">Refraction</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {blocks.map((block) => (
              <span
                key={block}
                className="inline-flex min-h-11 items-center rounded-xl border border-border/60 bg-muted/30 px-3 text-sm font-bold tracking-tight text-foreground/80"
              >
                {block}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center bg-muted/20 px-4 py-4 sm:px-6">
          <div className="w-full max-w-[22rem] min-w-0">{figure}</div>
        </div>
      </div>
    </section>
  );
}

/** Two compact horizontal orders: `>` for descending, `<` for ascending. */
export function RankStrip({
  title,
  direction,
  items,
}: {
  title: string;
  direction: "descending" | "ascending";
  items: { label: ReactNode; extreme?: boolean }[];
}) {
  return (
    <section className="my-5 rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 bg-muted/25 px-4 py-2.5">
        <PanelLabel>{title}</PanelLabel>
        <span className="text-[0.7rem] font-bold text-muted-foreground">
          {direction === "descending" ? "highest → lowest" : "lowest → highest"}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3 px-4 py-4 sm:px-5">
        {items.map((item, index) => (
          <Fragment key={index}>
            <span
              className={
                item.extreme
                  ? "rounded-xl border px-3 py-2 text-sm font-extrabold tracking-tight"
                  : "rounded-xl border border-border/60 bg-muted/30 px-3 py-2 text-sm font-bold tracking-tight text-foreground/80"
              }
              style={
                item.extreme
                  ? {
                      borderColor: PHYSICS,
                      backgroundColor: "color-mix(in oklab, var(--subject-physics) 12%, transparent)",
                      color: PHYSICS,
                    }
                  : undefined
              }
            >
              {item.label}
            </span>
            {index < items.length - 1 && (
              <span aria-hidden className="text-base font-extrabold text-muted-foreground">
                {direction === "descending" ? ">" : "<"}
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

/** A compact row of simultaneous conditions beneath a ray diagram. */
export function ConditionStrip({ items }: { items: ReactNode[] }) {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-border/50 bg-muted/25 px-3 py-2.5">
      {items.map((item, index) => (
        <Fragment key={index}>
          <span className="rounded-lg border border-border/60 bg-card px-2.5 py-1 text-sm font-bold text-foreground">
            {item}
          </span>
          {index < items.length - 1 && (
            <span aria-hidden className="text-xs font-bold text-muted-foreground">
              ·
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

/** Two stacked cards joined by one visible connector. */
export function ConnectedCards({ top, bottom }: { top: ReactNode; bottom: ReactNode }) {
  return (
    <div className="my-6">
      <div className="rounded-2xl border border-border/60 bg-card px-4 py-4 shadow-sm sm:px-5">{top}</div>
      <div aria-hidden className="mx-auto h-6 w-px bg-border" />
      <div className="rounded-2xl border border-border/60 bg-card px-4 py-4 shadow-sm sm:px-5">{bottom}</div>
    </div>
  );
}

/** Two directional refractive-index cards around a reciprocal bridge. */
export function DirectionPair({
  first,
  second,
  reciprocal,
}: {
  first: { direction: ReactNode; formula: ReactNode; meaning: string };
  second: { direction: ReactNode; formula: ReactNode; meaning: string };
  reciprocal: ReactNode;
}) {
  const card = (item: typeof first) => (
    <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <p className="text-sm font-extrabold tracking-tight text-foreground">{item.direction}</p>
      <div className="mt-3 [&>div]:my-0">{item.formula}</div>
      <p className="mt-3 text-[0.82rem] leading-relaxed text-foreground/75">{item.meaning}</p>
    </div>
  );

  return (
    <div className="my-6 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
      {card(first)}
      <div className="flex items-center justify-center">
        <div
          className="w-full rounded-xl border px-4 py-3 text-center md:w-auto md:min-w-[9rem]"
          style={{
            borderColor: PHYSICS,
            backgroundColor: "color-mix(in oklab, var(--subject-physics) 10%, transparent)",
          }}
        >
          <PanelLabel>Reciprocal</PanelLabel>
          <div className="mt-1 [&>div]:my-0">{reciprocal}</div>
        </div>
      </div>
      {card(second)}
    </div>
  );
}

/** Parallel derivation columns with one formula per row. */
export function DerivationPair({
  columns,
}: {
  columns: { title: string; rows: { label: string; formula: ReactNode; final?: boolean }[] }[];
}) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {columns.map((column) => (
        <section key={column.title} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="border-b border-border/40 bg-muted/25 px-4 py-2.5">
            <PanelLabel>{column.title}</PanelLabel>
          </div>
          <div className="px-3 py-3 sm:px-4">
            {column.rows.map((row, index) => (
              <div key={row.label} className="py-2">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-widest text-muted-foreground">
                  {row.label}
                </p>
                <div
                  className={
                    row.final
                      ? "mt-1 rounded-xl border border-border/60 bg-muted/30 px-2 py-1 [&>div]:my-0"
                      : "mt-1 [&>div]:my-0"
                  }
                  style={row.final ? { borderLeftColor: PHYSICS, borderLeftWidth: 3 } : undefined}
                >
                  {row.formula}
                </div>
                {index < column.rows.length - 1 && (
                  <div aria-hidden className="mx-auto mt-2 h-3 w-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/** A single formula in a quiet accent strip. */
export function FormulaStrip({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-5 flex min-h-14 items-center gap-3 rounded-xl border border-border/60 bg-muted/25 px-4 py-3"
      style={{ borderLeftColor: PHYSICS, borderLeftWidth: 3 }}
    >
      <div className="min-w-0 flex-1 [&>div]:my-0">{children}</div>
    </div>
  );
}

/** Large final-answer tile used after a worked solution. */
export function ResultCard({
  label,
  value,
  symbol,
}: {
  label: string;
  value: string;
  symbol: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 text-center shadow-sm">
      <p className="text-[0.68rem] font-extrabold uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight" style={{ color: PHYSICS }}>
        {value}
      </p>
      <div className="mt-1 text-sm text-foreground/75">{symbol}</div>
    </div>
  );
}

/** Application overview: title, conceptual figure, and an in-page link cue. */
export function ApplicationCard({
  title,
  figure,
  href,
}: {
  title: string;
  figure: ReactNode;
  href: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <p className="text-base font-extrabold leading-snug tracking-tight text-foreground">{title}</p>
      <div className="mt-3 flex min-h-[6rem] items-center justify-center rounded-xl border border-border/40 bg-muted/20 px-2 py-3">
        <div className="w-full max-w-[17rem] min-w-0">{figure}</div>
      </div>
      <a
        href={href}
        className="mt-3 inline-flex min-h-11 items-center gap-1.5 self-start rounded-xl px-1 text-sm font-bold"
        style={{ color: PHYSICS }}
      >
        Detailed section <span aria-hidden>→</span>
      </a>
    </div>
  );
}

/** Highlighted result beside its small parallel-ray illustration. */
export function TakeawayBlock({ formula, figure }: { formula: ReactNode; figure: ReactNode }) {
  return (
    <div className="my-6 grid items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:p-5">
      <div className="[&>div]:my-0">{formula}</div>
      <div className="min-w-0">{figure}</div>
    </div>
  );
}
