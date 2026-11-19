import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Boxes,
  Dna,
  FlaskConical,
  Link2,
  Plus,
} from "lucide-react";
import { FormulaBlock } from "@/components/content/Formula";

/**
 * NucleosideNucleotide — the nucleoside / nucleotide build-up block: the sugar
 * + base combination through an N-glycosidic bond, the phosphate group added
 * through a phosphoester bond, the three-step equation set, a construction
 * diagram and the two naming tables.
 *
 * emerald = nucleoside stage, blue = phosphate, indigo = nucleotide stage.
 */

/* -------------------------------------------------------------------------- */
/* Shared primitives                                                          */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </div>
  );
}

type ChipTone = "neutral" | "emerald" | "blue" | "indigo";

const CHIP_TONES: Record<ChipTone, string> = {
  neutral: "border-border bg-muted/40 text-foreground",
  emerald:
    "border-emerald-600/40 bg-emerald-50/55 text-emerald-900 dark:bg-emerald-950/25 dark:text-emerald-200",
  blue: "border-blue-600/40 bg-blue-50/55 text-blue-900 dark:bg-blue-950/25 dark:text-blue-200",
  indigo:
    "border-indigo-600/40 bg-indigo-50/55 text-indigo-900 dark:bg-indigo-950/25 dark:text-indigo-200",
};

function EquationChip({ children, tone }: { children: ReactNode; tone: ChipTone }) {
  return (
    <span
      className={`whitespace-nowrap rounded-lg border px-2.5 py-1.5 text-sm font-bold leading-snug ${CHIP_TONES[tone]}`}
    >
      {children}
    </span>
  );
}

type ThreeColRow = [string, string, string];

function TableCell({ value, deoxy }: { value: string; deoxy?: boolean }) {
  if (value === "—") {
    return <span className="text-muted-foreground/60">—</span>;
  }
  if (deoxy && value.startsWith("Deoxy")) {
    return (
      <>
        <strong className="text-emerald-800 dark:text-emerald-300">Deoxy</strong>
        {value.slice(5)}
      </>
    );
  }
  return <>{value}</>;
}

function ThreeColumnTable({
  title,
  heads,
  rows,
}: {
  title: string;
  heads: [string, string, string];
  rows: ThreeColRow[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-3 py-2">
        <Dna className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">{title}</div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[320px]">
          <div className="grid grid-cols-[minmax(6rem,0.9fr)_minmax(0,1.25fr)_minmax(0,1fr)] border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <div className="px-2.5 py-1.5">{heads[0]}</div>
            <div className="px-2.5 py-1.5">{heads[1]}</div>
            <div className="px-2.5 py-1.5">{heads[2]}</div>
          </div>
          {rows.map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-[minmax(6rem,0.9fr)_minmax(0,1.25fr)_minmax(0,1fr)] border-b border-border last:border-b-0"
            >
              <div className="px-2.5 py-1.5 text-sm font-semibold leading-snug text-foreground">
                <TableCell value={row[0]} />
              </div>
              <div className="px-2.5 py-1.5 text-sm leading-relaxed text-foreground">
                <TableCell value={row[1]} deoxy />
              </div>
              <div className="px-2.5 py-1.5 text-sm leading-relaxed text-foreground/85">
                <TableCell value={row[2]} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border bg-muted/20 px-2.5 py-1.5 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-emerald-800 dark:text-emerald-300">Naming pattern</strong> — DNA forms carry the
        deoxy- prefix; RNA forms do not.
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. NucleosideFormation                                                     */
/* -------------------------------------------------------------------------- */

const NUCLEOSIDE_ROWS: ThreeColRow[] = [
  ["Adenine", "Deoxyadenosine", "Adenosine"],
  ["Guanine", "Deoxyguanosine", "Guanosine"],
  ["Thymine", "Deoxythymidine", "—"],
  ["Cytosine", "Deoxycytidine", "Cytidine"],
  ["Uracil", "—", "Uridine"],
];

export function NucleosideFormation() {
  return (
    <div className="my-5 space-y-4">
      {/* Definition */}
      <div className="rounded-xl border-2 border-emerald-600/35 bg-emerald-50/35 p-4 dark:bg-emerald-950/20">
        <Eyebrow>Nucleoside</Eyebrow>
        <p className="mt-1 text-sm leading-relaxed text-foreground">
          <strong>Nucleoside = Pentose sugar + Nitrogenous base</strong>
        </p>
      </div>

      {/* Bond — one idea per row */}
      <div className="space-y-1.5">
        <div className="flex items-start gap-2">
          <Link2
            className="mt-px h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-300"
            aria-hidden
          />
          <span className="text-sm leading-relaxed text-foreground">
            <strong>Formation</strong> → Formed through an N-glycosidic bond.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <Link2
            className="mt-px h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-300"
            aria-hidden
          />
          <span className="text-sm leading-relaxed text-foreground">
            <strong>Connection</strong> → Connects the C1′ carbon of the sugar to a nitrogen atom of the nitrogenous
            base.
          </span>
        </div>
      </div>

      {/* Prominent equation — styled chips, no LaTeX */}
      <div className="rounded-xl border-2 border-emerald-600/40 bg-emerald-50/45 p-3 dark:bg-emerald-950/25">
        <Eyebrow>Overall formation</Eyebrow>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
          <EquationChip tone="neutral">Sugar</EquationChip>
          <Plus className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
          <EquationChip tone="neutral">Base</EquationChip>
          <ArrowRight className="mx-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden />
          <EquationChip tone="emerald">Nucleoside</EquationChip>
        </div>
      </div>

      <ThreeColumnTable
        title="DNA and RNA Nucleosides"
        heads={["Nitrogenous base", "DNA nucleoside", "RNA nucleoside"]}
        rows={NUCLEOSIDE_ROWS}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. PhosphateAndNucleotide                                                   */
/* -------------------------------------------------------------------------- */

const NUCLEOTIDE_ROWS: ThreeColRow[] = [
  ["Adenine", "Deoxyadenylic acid", "Adenylic acid"],
  ["Guanine", "Deoxyguanylic acid", "Guanylic acid"],
  ["Thymine", "Deoxythymidylic acid", "—"],
  ["Cytosine", "Deoxycytidylic acid", "Cytidylic acid"],
  ["Uracil", "—", "Uridylic acid"],
];

function StageBox({
  tone,
  title,
}: {
  tone: "neutral" | "emerald" | "indigo";
  title: string;
}) {
  return (
    <div
      className={`shrink-0 rounded-lg border-2 px-3 py-2 text-center ${CHIP_TONES[tone]}`}
    >
      <span className="whitespace-nowrap text-sm font-bold leading-snug">{title}</span>
    </div>
  );
}

function Connector({
  label,
  addOn,
}: {
  label: string;
  addOn?: string;
}) {
  return (
    <div className="flex shrink-0 flex-col items-center justify-center gap-0.5 self-stretch sm:self-auto">
      {addOn && (
        <span className="whitespace-nowrap rounded-md border border-blue-600/40 bg-blue-50/60 px-1.5 py-0.5 text-[8.5px] font-bold leading-snug text-blue-900 dark:bg-blue-950/30 dark:text-blue-200">
          {addOn}
        </span>
      )}
      <ArrowDown className="h-4 w-4 text-muted-foreground sm:hidden" aria-hidden />
      <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" aria-hidden />
      <span className="max-w-[92px] text-center text-[8.5px] font-semibold leading-snug text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function ConstructionDiagram() {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-center gap-2">
        <Boxes className="h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
        <Eyebrow>Construction of a nucleotide</Eyebrow>
      </div>
      <div className="mt-2.5 flex flex-col items-stretch gap-y-2 sm:flex-row sm:items-center sm:justify-center sm:gap-x-2">
        <StageBox tone="neutral" title="Base + Sugar" />
        <Connector label="N-glycosidic bond" />
        <StageBox tone="emerald" title="Nucleoside" />
        <Connector label="Phosphoester bond" addOn="+ Phosphate" />
        <StageBox tone="indigo" title="Nucleotide" />
      </div>
    </div>
  );
}

export function PhosphateAndNucleotide() {
  return (
    <div className="my-5 space-y-4">
      {/* Phosphate group */}
      <div className="rounded-xl border-2 border-blue-600/35 bg-blue-50/30 p-3.5 dark:bg-blue-950/15">
        <div className="flex items-center gap-2">
          <FlaskConical
            className="h-4 w-4 shrink-0 text-blue-700 dark:text-blue-300"
            aria-hidden
          />
          <div className="text-sm font-bold tracking-tight text-foreground">Phosphate Group</div>
        </div>
        <ul className="mt-2 space-y-1.5">
          <li className="flex items-start gap-2">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600/60"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-foreground">
              <strong>Formula</strong>: H₃PO₄.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-600/60"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-foreground">
              Connected to the C5′ carbon of the pentose sugar through a{" "}
              <strong>phosphoester bond</strong>.
            </span>
          </li>
        </ul>
      </div>

      {/* Nucleotide formation */}
      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">Formation of a Nucleotide</div>
        <div className="mt-2 rounded-lg border-2 border-indigo-600/35 bg-indigo-50/40 px-3 py-2 dark:bg-indigo-950/20">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>Nucleotide = Nucleoside + Phosphate</strong>
          </p>
        </div>

        {/* One formula per row */}
        <div className="mt-1 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card px-1">
          <FormulaBlock
            latex={String.raw`\boxed{\text{Nucleotide} = \text{Sugar}+\text{Base}+\text{Phosphate}}`}
          />
          <FormulaBlock
            latex={String.raw`\text{Sugar}+\text{Base} \xrightarrow{\text{N-glycosidic bond}} \text{Nucleoside}`}
          />
          <FormulaBlock
            latex={String.raw`\text{Nucleoside}+\text{Phosphate} \xrightarrow{\text{Phosphoester bond}} \text{Nucleotide}`}
          />
        </div>
      </div>

      <ConstructionDiagram />

      <ThreeColumnTable
        title="DNA and RNA Nucleotides"
        heads={["Nitrogenous base", "DNA nucleotide", "RNA nucleotide"]}
        rows={NUCLEOTIDE_ROWS}
      />
    </div>
  );
}
