import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { FormulaBlock } from "@/components/content/Formula";

const PHYSICS = "var(--subject-physics)";

function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </span>
  );
}

/** Section opener: chapter map on the left, the solved surface-and-lens figure on the right. */
export function SphericalLensHero({ figure, parts }: { figure: ReactNode; parts: string[] }): ReactNode {
  return (
    <section className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        <div className="border-b border-border/40 px-5 py-5 sm:px-6 lg:border-b-0 lg:border-r">
          <PanelLabel>Chapter map</PanelLabel>
          <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
            Refraction at Spherical Surfaces &amp; Lenses
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {parts.map((part) => (
              <span
                key={part}
                className="inline-flex min-h-11 items-center rounded-xl border border-border/60 bg-muted/30 px-3 text-sm font-bold tracking-tight text-foreground/80"
              >
                {part}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center bg-muted/20 px-4 py-4 sm:px-6">
          <div className="w-full max-w-[24rem] min-w-0">{figure}</div>
        </div>
      </div>
    </section>
  );
}

/** Small-angle assumptions, marked as approximations rather than exact relations. */
export function ApproximationBlock({
  title = "Small-angle assumptions",
  items,
  note,
}: {
  title?: string;
  items: { label: ReactNode; value: ReactNode }[];
  note?: ReactNode;
}): ReactNode {
  return (
    <section
      className="my-6 rounded-2xl border border-border/60 shadow-sm"
      style={{
        borderLeftColor: PHYSICS,
        borderLeftWidth: 3,
        backgroundColor: "color-mix(in oklab, var(--subject-physics) 8%, var(--card))",
      }}
    >
      <div className="border-b border-border/40 px-4 py-2.5 sm:px-5">
        <PanelLabel>{title}</PanelLabel>
      </div>
      <div className="grid gap-2 px-4 py-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className="min-w-0 rounded-xl border border-border/50 bg-card/70 px-3 py-3">
            <div className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
              {item.label}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div className="min-w-0 [&>div]:my-0">{item.value}</div>
              <span
                aria-label="approximation"
                className="rounded-md border px-1.5 py-0.5 text-[0.7rem] font-extrabold leading-none"
                style={{ borderColor: PHYSICS, color: PHYSICS }}
              >
                ≈
              </span>
            </div>
          </div>
        ))}
      </div>
      {note && (
        <div className="border-t border-border/40 px-4 py-3 text-[0.82rem] leading-relaxed text-foreground/75 sm:px-5">
          {note}
        </div>
      )}
    </section>
  );
}

/** Full-width home for one major relation. */
export function ProminentFormula({
  label,
  latex,
  tag,
  note,
}: {
  label: string;
  latex: string;
  tag?: string;
  note?: ReactNode;
}): ReactNode {
  return (
    <div
      className="my-6 overflow-hidden rounded-2xl border shadow-sm"
      style={{
        borderColor: PHYSICS,
        backgroundColor: "color-mix(in oklab, var(--subject-physics) 6%, var(--card))",
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-border/40 px-4 py-2.5 sm:px-5">
        <PanelLabel>{label}</PanelLabel>
        {tag && <span className="t-micro">{tag}</span>}
      </div>
      <div className="px-3 py-2 sm:px-5 [&>div]:my-0">
        <FormulaBlock latex={latex} important />
      </div>
      {note && (
        <div className="border-t border-border/40 px-4 py-3 text-[0.82rem] leading-relaxed text-foreground/75 sm:px-5">
          {note}
        </div>
      )}
    </div>
  );
}

/** One principal ray per card: numbered disc, title, solved figure, then its rule. */
export function RayRuleList({
  rules,
}: {
  rules: {
    number: number;
    title: string;
    color: string;
    figure: ReactNode;
    children: ReactNode;
  }[];
}): ReactNode {
  return (
    <div className="my-6 space-y-3">
      {rules.map((rule) => (
        <section key={rule.number} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
          <div className="flex items-center gap-3 border-b border-border/40 bg-muted/20 px-4 py-3 sm:px-5">
            <span
              aria-hidden
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.35)]"
              style={{ backgroundColor: rule.color }}
            >
              {rule.number}
            </span>
            <p className="text-sm font-extrabold leading-snug tracking-tight text-foreground">{rule.title}</p>
          </div>
          <div className="grid gap-3 px-3 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] sm:items-center sm:px-4">
            <div className="flex min-h-[7rem] items-center justify-center rounded-xl border border-border/40 bg-muted/20 px-2 py-3">
              <div className="w-full max-w-[15rem] min-w-0">{rule.figure}</div>
            </div>
            <div className="text-[0.85rem] leading-relaxed text-foreground/80 sm:border-l sm:border-border/40 sm:pl-4">
              {rule.children}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/** Two framed comparison cards with coloured title underlines. */
export function ComparisonPair({
  first,
  second,
}: {
  first: { title: string; children: ReactNode; accent?: string };
  second: { title: string; children: ReactNode; accent?: string };
}): ReactNode {
  const card = (item: { title: string; children: ReactNode; accent?: string }) => (
    <section
      key={item.title}
      className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5"
    >
      <p
        className="border-b pb-3 text-base font-extrabold leading-snug tracking-tight text-foreground"
        style={{ borderColor: item.accent ?? PHYSICS }}
      >
        {item.title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-foreground/80 [&>div]:my-0">{item.children}</div>
    </section>
  );

  return (
    <div className="my-6 grid gap-3 md:grid-cols-2">
      {card(first)}
      {card(second)}
    </div>
  );
}

/** Sign convention at a glance: large signed value over its supporting note. */
export function SignCard({
  title,
  sign,
  tone,
  children,
}: {
  title: string;
  sign: string;
  tone: "positive" | "negative";
  children: ReactNode;
}): ReactNode {
  return (
    <section className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-4 shadow-sm sm:p-5">
      <PanelLabel>{title}</PanelLabel>
      <p
        className="mt-2 text-3xl font-extrabold leading-none tracking-tight"
        style={{ color: tone === "positive" ? "var(--ok)" : "var(--destructive)" }}
      >
        {sign}
      </p>
      <div className="mt-3 border-t border-border/40 pt-3 text-sm leading-relaxed text-foreground/80">
        {children}
      </div>
    </section>
  );
}

/** Colour key kept under ray diagrams so the three ray colours stay consistent. */
export function LensRayLegend({
  items,
}: {
  items: { label: string; color: string; dashed?: boolean }[];
}): ReactNode {
  return (
    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-xl border border-border/50 bg-muted/20 px-3 py-2.5">
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2 text-[0.78rem] font-bold text-foreground/75">
          <span
            aria-hidden
            className={cn("h-0.5 w-6", item.dashed ? "border-t-2 border-dashed" : "rounded-full")}
            style={item.dashed ? { borderColor: item.color } : { backgroundColor: item.color }}
          />
          {item.label}
        </span>
      ))}
    </div>
  );
}
