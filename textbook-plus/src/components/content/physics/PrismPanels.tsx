import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FormulaBlock } from "@/components/content/Formula";
import { SPECTRUM } from "./diagram/scene.ts";

const PHYSICS = "var(--subject-physics)";

function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

/** The three ray colours stay fixed across every prism diagram. */
export function PrismRayLegend() {
  const keys = [
    { label: "Incident ray", color: "var(--destructive)" },
    { label: "Ray inside prism", color: PHYSICS },
    { label: "Emergent ray", color: "var(--ok)" },
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

/** Section opener: the chapter's three learning blocks and its header figure. */
export function PrismHero({ figure, blocks }: { figure: ReactNode; blocks: string[] }) {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="border-b border-border/40 px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r">
          <PanelLabel>Chapter map</PanelLabel>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">Prism &amp; Dispersion</p>
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
      <div className="border-t border-border/40 px-4 py-3">
        <PrismRayLegend />
      </div>
    </section>
  );
}

type DefinitionItem = {
  tag: string;
  title: ReactNode;
  body: ReactNode;
  formula?: ReactNode;
  figure?: ReactNode;
  featured?: boolean;
};

/** Four named definitions, with the equilateral inset and D given priority. */
export function DefinitionGrid({ items }: { items: DefinitionItem[] }) {
  return (
    <div className="my-6 grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <section
          key={item.tag}
          className={cn(
            "flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5",
            item.featured && "border-t-[3px]",
          )}
          style={item.featured ? { borderTopColor: PHYSICS } : undefined}
        >
          <div className="flex items-center gap-2">
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-muted/30 text-xs font-extrabold text-foreground/80"
              aria-hidden
            >
              {item.tag}
            </span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">{item.title}</p>
          </div>
          <div className="mt-3 text-sm leading-relaxed text-foreground/80">{item.body}</div>
          {item.figure && (
            <div className="my-3 flex min-h-[7rem] items-center justify-center rounded-xl border border-border/40 bg-muted/20 px-2 py-2">
              <div className="w-full max-w-[15rem] min-w-0">{item.figure}</div>
            </div>
          )}
          {item.formula && <div className="mt-auto pt-2 [&>div]:my-0">{item.formula}</div>}
        </section>
      ))}
    </div>
  );
}

/** Graph and its minimum-deviation conditions in one connected block. */
export function GraphConditions({ graph, conditions }: { graph: ReactNode; conditions: ReactNode[] }) {
  return (
    <div className="my-6">
      <div className="rounded-2xl border border-border/60 bg-card px-3 py-3 shadow-sm sm:px-4">
        <div className="mx-auto w-full max-w-[30rem] min-w-0">{graph}</div>
      </div>
      <div aria-hidden className="mx-auto flex h-7 flex-col items-center">
        <span className="h-4 w-px bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--subject-physics)]" />
      </div>
      <div
        className="rounded-2xl border border-border/60 bg-muted/25 p-4 sm:p-5"
        style={{ borderLeftColor: PHYSICS, borderLeftWidth: 3 }}
      >
        <PanelLabel>At the minimum-deviation position</PanelLabel>
        <div className="mt-2 grid gap-1 sm:grid-cols-3 sm:gap-3">
          {conditions.map((condition, index) => (
            <div key={index} className="min-w-0 [&>div]:my-0">
              {condition}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

type DerivationRow = {
  label: string;
  latex: string;
  tag?: string;
  important?: boolean;
};

type DerivationStage = {
  title: string;
  rows: DerivationRow[];
  /** Steps 4–6 carry the main transformations and get the full width. */
  wide?: boolean;
};

/** Seven numbered stages; one formula per row and equation tags kept visible. */
export function DerivationStages({ stages }: { stages: DerivationStage[] }) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      {stages.map((stage, index) => (
        <section
          key={stage.title}
          className={cn(
            "overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm",
            stage.wide && "sm:col-span-2",
          )}
        >
          <div className="flex items-center gap-3 border-b border-border/40 bg-muted/25 px-4 py-2.5">
            <span className="t-micro tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">{stage.title}</p>
          </div>
          <div className={cn("px-3 sm:px-4", stage.wide ? "py-4" : "py-2")}>
            {stage.rows.map((row, rowIndex) => (
              <Fragment key={row.label}>
                <div className="min-w-0 py-1.5 [&>div]:my-0">
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">{row.label}</p>
                  <div className="mt-1">
                    <FormulaBlock latex={row.latex} tag={row.tag} important={row.important} />
                  </div>
                </div>
                {rowIndex < stage.rows.length - 1 && (
                  <div aria-hidden className="mx-auto h-2.5 w-px bg-border" />
                )}
              </Fragment>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/** Seven VIBGYOR rows, top to bottom, matching the dispersion fan. */
export function SpectrumSequence() {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-border/40 bg-muted/25 px-4 py-2.5">
        <PanelLabel>VIBGYOR — colour sequence</PanelLabel>
        <span className="text-[0.72rem] font-bold text-muted-foreground">Top → Bottom: Red to Violet</span>
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-2 sm:p-4">
        {SPECTRUM.map((entry) => (
          <div
            key={entry.token}
            className="flex min-h-11 items-center gap-3 rounded-xl border border-border/50 bg-muted/20 px-3 py-2"
          >
            <span
              aria-hidden
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-bold text-foreground">{entry.name}</span>
            <span className="ml-auto text-xs font-extrabold tracking-widest text-muted-foreground">{entry.letter}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

type RevisionSection = {
  title: string;
  rows?: ReactNode[];
  list?: string[];
  featured?: boolean;
  full?: boolean;
};

/** Compact grouped dashboard used inside the collapsed quick revision. */
export function PrismRevisionGrid({ sections }: { sections: RevisionSection[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {sections.map((section) => (
        <section
          key={section.title}
          className={cn(
            "rounded-xl border border-border/60 bg-card p-4 shadow-sm",
            section.full && "sm:col-span-2",
            section.featured && "border-l-[3px]",
          )}
          style={section.featured ? { borderLeftColor: PHYSICS } : undefined}
        >
          <p className="text-sm font-extrabold tracking-tight text-foreground">{section.title}</p>
          {section.rows && (
            <div className="mt-2 grid gap-1 [&>div]:my-0">
              {section.rows.map((row, index) => (
                <div key={index} className="min-w-0">
                  {row}
                </div>
              ))}
            </div>
          )}
          {section.list && (
            <ul className="mt-2 list-none space-y-1.5 pl-0 text-sm text-foreground/80">
              {section.list.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
