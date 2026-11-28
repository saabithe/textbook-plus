import { Fragment, type ReactNode } from "react";

const PHYSICS = "var(--subject-physics)";

function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

/** The three ray colours stay fixed across every 9.4 diagram. */
export function RayLegend() {
  const keys = [
    { label: "Incident ray", color: "var(--destructive)" },
    { label: "Reflected ray", color: "var(--warning)" },
    { label: "Refracted ray", color: "var(--ok)" },
  ];
  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-xl border border-border/50 bg-muted/20 px-3 py-2.5">
      {keys.map((key) => (
        <span key={key.label} className="inline-flex items-center gap-2 text-[0.78rem] font-bold text-foreground/75">
          <span aria-hidden className="h-0.5 w-6 rounded-full" style={{ backgroundColor: key.color }} />
          {key.label}
        </span>
      ))}
    </div>
  );
}

/** Section opener: the repeated-bounce figure and the three learning blocks. */
export function TIRHero({ figure, blocks }: { figure: ReactNode; blocks: string[] }) {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="border-b border-border/40 px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r">
          <PanelLabel>Learning blocks</PanelLabel>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">Total Internal Reflection</p>
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
          <div className="w-full max-w-[24rem] min-w-0">{figure}</div>
        </div>
      </div>
      <div className="border-t border-border/40 px-4 py-3">
        <RayLegend />
      </div>
    </section>
  );
}

type BoundaryPanel = {
  title: string;
  figure: ReactNode;
  points: string[];
  accent: string;
};

/** Two side-by-side, identically framed boundary diagrams. */
export function BoundaryPair({ first, second }: { first: BoundaryPanel; second: BoundaryPanel }) {
  const card = (panel: BoundaryPanel) => (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <p
        className="border-b pb-3 text-base font-extrabold tracking-tight text-foreground"
        style={{ borderColor: panel.accent }}
      >
        {panel.title}
      </p>
      <div className="my-3 flex min-h-[8rem] items-center justify-center rounded-xl border border-border/40 bg-muted/20 px-2 py-3">
        <div className="w-full min-w-0">{panel.figure}</div>
      </div>
      <ul className="mt-auto list-none space-y-2 pl-0 text-sm text-foreground/80">
        {panel.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="my-6 grid gap-4 md:grid-cols-2">
      {card(first)}
      {card(second)}
    </div>
  );
}

/** The real-life split ray, kept visually separate from the two pure cases. */
export function SplitRayPanel({ figure }: { figure: ReactNode }) {
  const rows = [
    { label: "Reflection", value: "Occurs", color: "var(--warning)" },
    { label: "Refraction", value: "Occurs", color: "var(--ok)" },
  ];
  return (
    <section className="my-6 grid items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div className="min-w-0">{figure}</div>
      <div>
        <PanelLabel>What happens in real life?</PanelLabel>
        <div className="mt-3 space-y-2">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/50 bg-muted/20 px-3 py-2.5"
            >
              <span className="text-sm font-bold text-foreground">{row.label}</span>
              <span className="text-sm font-extrabold" style={{ color: row.color }}>
                {row.value}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm font-extrabold leading-relaxed text-foreground">
          Both partial reflection and refraction occur simultaneously.
        </p>
      </div>
    </section>
  );
}

/** One incidence case: identical frame, solved figure, condition and note points. */
export function CaseCard({
  title,
  condition,
  figure,
  points,
  featured,
}: {
  title: string;
  condition: ReactNode;
  figure: ReactNode;
  points: string[];
  featured?: boolean;
}) {
  return (
    <section
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm"
      style={featured ? { borderTopColor: PHYSICS, borderTopWidth: 3 } : undefined}
    >
      <div className="border-b border-border/40 bg-muted/20 px-4 py-3">
        <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">{title}</p>
        <div className="mt-1 [&>div]:my-0">{condition}</div>
      </div>
      <div className="flex min-h-[9rem] items-center justify-center px-3 py-3">{figure}</div>
      <ul className="mt-auto list-none space-y-2 border-t border-border/40 px-4 py-3 text-sm text-foreground/80">
        {points.map((point) => (
          <li key={point} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** The i<i_c → i=i_c → i>i_c progression beneath the three panels. */
export function AngleProgression({ items }: { items: ReactNode[] }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/40 bg-muted/25 px-4 py-2.5">
        <PanelLabel>Progressive angle indicator</PanelLabel>
      </div>
      <div className="flex flex-col items-center gap-2 px-4 py-4 sm:flex-row sm:justify-center sm:gap-3">
        {items.map((item, index) => (
          <Fragment key={index}>
            <div className="flex min-h-11 min-w-[7rem] items-center justify-center rounded-xl border border-border/60 bg-muted/20 px-3 text-sm font-bold">
              {item}
            </div>
            {index < items.length - 1 && (
              <span aria-hidden className="text-lg font-extrabold text-muted-foreground sm:rotate-0">
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/** The two necessary conditions, kept prominent for examination revision. */
export function ConditionCards({
  items,
}: {
  items: { title: string; formula: ReactNode; description: string }[];
}) {
  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <section
          key={item.title}
          className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5"
          style={{ borderLeftColor: PHYSICS, borderLeftWidth: 3 }}
        >
          <PanelLabel>{item.title}</PanelLabel>
          <div className="mt-3 [&>div]:my-0">{item.formula}</div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">{item.description}</p>
        </section>
      ))}
    </div>
  );
}

/** Compact three-row strip for the angle conditions and their results. */
export function AngleResultStrip({ items }: { items: { condition: ReactNode; result: string }[] }) {
  return (
    <div className="my-6 grid gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.result}
          className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl border border-border/60 bg-muted/20 px-3 py-2 text-center"
        >
          <div className="text-sm font-extrabold">{item.condition}</div>
          <div className="text-[0.78rem] font-bold uppercase tracking-wide text-foreground/70">{item.result}</div>
        </div>
      ))}
    </div>
  );
}

/** The single supplied critical-angle value, kept small and readable. */
export function ReferenceCard({
  medium,
  index,
  angle,
}: {
  medium: string;
  index: ReactNode;
  angle: ReactNode;
}) {
  return (
    <section className="my-6 max-w-md rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <PanelLabel>Critical angle relative to air</PanelLabel>
      <div className="mt-3 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-3">
        <div>
          <div className="t-micro">Medium</div>
          <p className="mt-1 text-lg font-extrabold tracking-tight text-foreground">{medium}</p>
        </div>
        <div className="text-right">
          <div className="t-micro">Refractive index</div>
          <div className="mt-1 text-lg font-extrabold">{index}</div>
        </div>
        <div
          className="col-span-2 rounded-xl border px-3 py-3 text-center"
          style={{
            borderColor: PHYSICS,
            backgroundColor: "color-mix(in oklab, var(--subject-physics) 10%, transparent)",
          }}
        >
          <div className="t-micro">Critical angle</div>
          <div className="mt-1 text-2xl font-extrabold" style={{ color: PHYSICS }}>
            {angle}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Figure-supported application card without an in-page navigation cue. */
export function ApplicationFigureCard({
  title,
  description,
  figure,
}: {
  title: string;
  description: string;
  figure: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <p className="text-base font-extrabold leading-snug tracking-tight text-foreground">{title}</p>
      <div className="my-3 flex min-h-[6rem] items-center justify-center rounded-xl border border-border/40 bg-muted/20 px-2 py-3">
        <div className="w-full max-w-[17rem] min-w-0">{figure}</div>
      </div>
      <p className="mt-auto text-sm leading-relaxed text-foreground/80">{description}</p>
    </div>
  );
}

/** Final dashboard: formulas, conditions, cases and fibre in four grouped cards. */
export function RevisionDashboard({
  critical,
  conditions,
  cases,
  fibre,
}: {
  critical: ReactNode;
  conditions: ReactNode;
  cases: ReactNode;
  fibre: ReactNode;
}) {
  const card = (title: string, body: ReactNode, featured: boolean) => (
    <section
      key={title}
      className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5"
      style={
        featured
          ? { borderColor: PHYSICS, backgroundColor: "color-mix(in oklab, var(--subject-physics) 8%, var(--card))" }
          : undefined
      }
    >
      <PanelLabel>{title}</PanelLabel>
      <div className="mt-3 [&>div]:my-0">{body}</div>
    </section>
  );

  return (
    <div className="my-6 grid gap-4 sm:grid-cols-2">
      {card("A · Critical angle", critical, true)}
      {card("B · Conditions for TIR", conditions, true)}
      {card("C · Three cases", cases, false)}
      {card("D · Optical fibre", fibre, false)}
    </div>
  );
}
