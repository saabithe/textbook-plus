import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Dna,
  Hash,
  Ruler,
  type LucideIcon,
} from "lucide-react";

/**
 * DnaGeneticPolymer — the DNA composition block: the definition of DNA, how
 * its length is expressed (nucleotides vs base pairs), and the NCERT benchmark
 * genome measurements with a haploid / diploid comparison strip.
 *
 * sky / indigo = composition, slate / teal = measurement table,
 * amber = the unit caution.
 */

/* -------------------------------------------------------------------------- */
/* 2.1 Basic Composition                                                       */
/* -------------------------------------------------------------------------- */

function CompositionCard({
  numeral,
  eyebrow,
  body,
  tone,
}: {
  numeral: string;
  eyebrow: string;
  body: ReactNode;
  tone: "sky" | "indigo";
}) {
  const cardClass =
    tone === "sky"
      ? "border-sky-600/30 bg-sky-50/35 dark:bg-sky-950/20"
      : "border-indigo-600/30 bg-indigo-50/35 dark:bg-indigo-950/20";
  const iconClass =
    tone === "sky"
      ? "text-sky-700 dark:text-sky-300"
      : "text-indigo-700 dark:text-indigo-300";

  return (
    <div className={`rounded-lg border p-3 ${cardClass}`}>
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-border bg-card text-[10px] font-bold text-foreground">
          {numeral}
        </span>
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {eyebrow}
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-foreground">{body}</p>
      <span className={`mt-2 block h-0.5 w-6 rounded-full bg-current opacity-50 ${iconClass}`} aria-hidden />
    </div>
  );
}

function BasicComposition() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-1 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400" aria-hidden />
        <Dna className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">2.1 Basic Composition</div>
      </div>

      <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <CompositionCard
          numeral="1"
          eyebrow="Expansion"
          tone="sky"
          body={
            <>
              <strong>DNA</strong> = Deoxyribonucleic acid.
            </>
          }
        />
        <CompositionCard
          numeral="2"
          eyebrow="Chemical nature"
          tone="indigo"
          body={
            <>
              DNA is a <strong>polymer of deoxyribonucleotides</strong>.
            </>
          }
        />
        <CompositionCard
          numeral="3"
          eyebrow="Length determinant"
          tone="sky"
          body={
            <>
              DNA length depends on the <strong>number of deoxyribonucleotides</strong>.
            </>
          }
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2.2 DNA Length and Base-Pair Measurements                                   */
/* -------------------------------------------------------------------------- */

function UnitCard({
  Icon,
  title,
  detail,
  tone,
}: {
  Icon: LucideIcon;
  title: string;
  detail: string;
  tone: "sky" | "indigo";
}) {
  const cardClass =
    tone === "sky"
      ? "border-sky-600/35 bg-sky-50/40 dark:bg-sky-950/20"
      : "border-indigo-600/35 bg-indigo-50/40 dark:bg-indigo-950/20";
  const iconClass =
    tone === "sky"
      ? "text-sky-700 dark:text-sky-300"
      : "text-indigo-700 dark:text-indigo-300";

  return (
    <div className={`rounded-xl border-2 p-3 ${cardClass}`}>
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{detail}</p>
    </div>
  );
}

const GENOME_ROWS: ReactNode[][] = [
  [<strong key="o1">Bacteriophage φX174</strong>, "Single-stranded", <strong key="g1">5,386 nucleotides</strong>],
  [<strong key="o2">Bacteriophage λ (Lambda)</strong>, "Double-stranded", <strong key="g2">48,502 bp</strong>],
  [
    <strong key="o3">
      <em>Escherichia coli</em> (<em>E. coli</em>)
    </strong>,
    "Double-stranded",
    <strong key="g3">4.6 × 10⁶ bp</strong>,
  ],
  [<strong key="o4">Human — Haploid (n)</strong>, "Double-stranded", <strong key="g4">3.3 × 10⁹ bp</strong>],
  [<strong key="o5">Human — Diploid (2n)</strong>, "Double-stranded", <strong key="g5">6.6 × 10⁹ bp</strong>],
];

function BenchmarkTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-300/70 bg-card dark:border-slate-600/50">
      <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-slate-300/70 bg-slate-100/70 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-slate-700 dark:border-slate-600/50 dark:bg-slate-800/60 dark:text-slate-200">
        <div className="px-2.5 py-2">Organism</div>
        <div className="px-2.5 py-2">Type of DNA</div>
        <div className="px-2.5 py-2">Genome length</div>
      </div>
      {GENOME_ROWS.map((row, index) => (
        <div
          key={index}
          className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-border last:border-b-0 odd:bg-slate-50/40 dark:odd:bg-slate-900/20"
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`px-2.5 py-2 text-sm leading-relaxed ${
                cellIndex === 2
                  ? "font-bold text-teal-800 dark:text-teal-300"
                  : "text-foreground"
              }`}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function HaploidDiploidStrip() {
  return (
    <div className="flex flex-col items-stretch gap-2 rounded-lg border border-teal-600/30 bg-teal-50/40 p-2.5 dark:bg-teal-950/20 sm:flex-row sm:items-center sm:justify-center">
      <div className="text-center text-sm font-semibold leading-snug text-foreground">
        Human haploid → <span className="text-teal-800 dark:text-teal-300">3.3 × 10⁹ bp</span>
      </div>
      <ArrowRight
        className="mx-auto h-4 w-4 shrink-0 rotate-90 text-teal-700 dark:text-teal-300 sm:rotate-0"
        aria-hidden
      />
      <div className="text-center text-sm font-semibold leading-snug text-foreground">
        Human diploid → <span className="text-teal-800 dark:text-teal-300">6.6 × 10⁹ bp</span>
      </div>
    </div>
  );
}

function LengthMeasurements() {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <span className="h-3 w-1 shrink-0 rounded-full bg-teal-500 dark:bg-teal-400" aria-hidden />
        <Ruler className="h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">
          2.2 DNA Length and Base-Pair Measurements
        </div>
      </div>

      <div className="mt-2.5">
        <p className="text-sm leading-relaxed text-foreground">DNA length is expressed using:</p>
        <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          <UnitCard Icon={Hash} title="Nucleotides" detail="Used for single-stranded DNA." tone="sky" />
          <UnitCard
            Icon={Ruler}
            title="Base pairs (bp)"
            detail="Used for double-stranded DNA."
            tone="indigo"
          />
        </div>

        <div className="mt-2.5 flex items-start gap-2 rounded-lg border-2 border-amber-500/45 bg-amber-50/60 px-3 py-2.5 dark:bg-amber-950/25">
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <strong>Nucleotides and base pairs are not interchangeable.</strong>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          NCERT Benchmark Genome Measurements
        </div>
        <div className="mt-2">
          <BenchmarkTable />
        </div>
        <div className="mt-2.5">
          <HaploidDiploidStrip />
        </div>
      </div>
    </div>
  );
}

export function DnaPolymerSection() {
  return (
    <div className="my-5 space-y-5">
      <BasicComposition />
      <LengthMeasurements />
    </div>
  );
}
