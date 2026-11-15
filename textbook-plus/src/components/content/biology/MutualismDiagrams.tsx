import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { FlowRow } from "@/components/content/biology/FlowRow";

/**
 * MutualismDiagrams — four different shapes for four examples:
 *   lichens + mycorrhizae → two-organism exchange
 *   fig–wasp             → three-event interaction sequence
 *   Ophrys–bee           → three-stage sexual-deceit sequence
 */

interface ExchangeProps {
  title: string;
  left: { name: string; gives: string };
  right: { name: string; gives: string };
  caption?: string;
}

export function SymbiosisExchange({ title, left, right, caption }: ExchangeProps) {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">{title}</div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Organism name={left.name} />

        <div className="flex flex-1 flex-col justify-center gap-2">
          <ArrowLabel direction="right" text={left.gives} />
          <ArrowLabel direction="left" text={right.gives} />
        </div>

        <Organism name={right.name} />
      </div>

      {caption && <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function Organism({ name }: { name: string }) {
  return (
    <div className="flex min-h-[3.25rem] items-center rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium leading-snug text-foreground sm:w-40">
      {name}
    </div>
  );
}

function ArrowLabel({ direction, text }: { direction: "left" | "right"; text: string }) {
  const arrow = (
    <span className="shrink-0 text-muted-foreground" aria-hidden>
      {direction === "right" ? <ArrowRight className="h-3.5 w-3.5" /> : <ArrowLeft className="h-3.5 w-3.5" />}
    </span>
  );
  const label = (
    <span className="text-xs leading-snug text-foreground/80">
      <span className="sr-only">{direction === "right" ? "provides" : "provides back"}: </span>
      {text}
    </span>
  );

  return (
    <div className="flex items-center gap-2">
      {direction === "right" ? (
        <>
          {label}
          <span className="h-px flex-1 bg-border" aria-hidden />
          {arrow}
        </>
      ) : (
        <>
          {arrow}
          <span className="h-px flex-1 bg-border" aria-hidden />
          {label}
        </>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Fig tree and wasp                                                 */
/* ---------------------------------------------------------------- */

export function FigWaspSequence() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-md border border-foreground/25 bg-muted/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
          One-to-one obligate relationship
        </span>
        <span className="text-xs text-muted-foreground">Fig tree ↔ fig wasp</span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <Event n="1" label="Pollination" text="Female wasp pollinates the fig inflorescence." />
        <Event n="2" label="Egg-laying" text="The same female wasp lays eggs in the ovary locule." />
      </div>

      <div className="mt-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        one act, two outcomes
      </div>

      <div className="flex justify-center py-1.5 text-muted-foreground" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5" />
      </div>

      <div className="mx-auto max-w-md">
        <Event n="3" label="Larval food" text="Developing seeds provide food for the wasp larvae." />
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Pollination, egg-laying and larval food provision are three separate events in one interaction.
      </figcaption>
    </figure>
  );
}

function Event({ n, label, text }: { n: string; label: string; text: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/20 p-3">
      <div className="flex items-center gap-2">
        <span className="flex h-5 w-5 items-center justify-center rounded-md border border-border bg-card text-[10px] font-bold text-foreground">
          {n}
        </span>
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      </div>
      <div className="mt-1 text-sm leading-snug text-foreground">{text}</div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Ophrys and bee                                                    */
/* ---------------------------------------------------------------- */

export function OphrysBeeSequence() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-md border border-foreground/25 bg-muted/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
          Mechanism — sexual deceit
        </span>
        <span className="text-xs text-muted-foreground">
          Orchid (<em>Ophrys</em>) ↔ bee
        </span>
      </div>

      <FlowRow
        className="my-0 mt-3"
        items={[
          { label: "One petal resembles a female bee" },
          { label: "Male bee pseudocopulates with the flower", detail: "male bee, not a female" },
          { label: "Pollen gets transferred" },
        ]}
      />

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Ecological significance: the partnership demonstrates tight co-evolution.
      </figcaption>
    </figure>
  );
}
