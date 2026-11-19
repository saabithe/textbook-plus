import type { ReactNode } from "react";
import {
  Boxes,
  ClipboardList,
  Dna,
  KeyRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * InheritanceRevision — compact closing revision block for the molecular
 * inheritance / biomolecule notes. Indigo + emerald accent, matched in weight
 * to the chapter's other revision sheets, with its own four-block recall
 * layout: nucleotide bonds, DNA vs RNA, keywords and the formation flow.
 */

const NUCLEOTIDE_ROWS: [string, string][] = [
  ["Nucleotide", "Sugar + Base + Phosphate"],
  ["Nucleoside", "Sugar + Base"],
  ["N-glycosidic bond", "Connects base to C1′ of sugar"],
  ["Phosphoester bond", "Connects phosphate to C5′ of sugar"],
  ["Phosphodiester bond", "Joins adjacent nucleotides through 3′–5′ linkage"],
];

const DNA_RNA_ROWS: [string, string, string][] = [
  ["Sugar", "Deoxyribose", "Ribose"],
  ["2′ position", "H", "OH"],
  ["Bases", "A, G, T, C", "A, G, U, C"],
  ["Chemical stability", "More stable", "More reactive and easily degradable"],
];

const KEYWORD_ROWS: [string, string][] = [
  ["Purines", "Adenine, Guanine"],
  ["Pyrimidines", "Cytosine, Thymine, Uracil"],
  ["Nucleoside", "Sugar + Base"],
  ["Nucleotide", "Sugar + Base + Phosphate"],
  ["3′–5′ linkage", "Phosphodiester bond"],
  ["5′ end", "Free phosphate"],
  ["3′ end", "Free hydroxyl"],
  ["Polynucleotide backbone", "Sugar-phosphate chain"],
];

const FLOW_STEPS: string[] = [
  "Nitrogenous base + Pentose sugar",
  "Nucleoside",
  "+ Phosphate",
  "Nucleotide",
  "3′–5′ phosphodiester linkage",
  "Polynucleotide chain.",
];

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
};

function MiniTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  const cols = GRID_COLS[headers.length] ?? "grid-cols-2";
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-border">
      <div
        className={`grid ${cols} border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground`}
      >
        {headers.map((header) => (
          <div key={header} className="min-w-0 px-2 py-1.5">
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`grid ${cols} border-b border-border last:border-b-0`}>
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`min-w-0 break-words px-2 py-1.5 text-sm leading-relaxed ${
                cellIndex === 0 ? "font-semibold text-foreground" : "text-foreground/85"
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

function RevisionSubheading({ Icon, children }: { Icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-1 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" aria-hidden />
      <Icon className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden />
      <div className="text-xs font-bold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
        {children}
      </div>
    </div>
  );
}

function KeywordList() {
  return (
    <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
      {KEYWORD_ROWS.map(([term, meaning]) => (
        <div
          key={term}
          className="flex flex-wrap items-baseline gap-x-1.5 rounded-md border border-border bg-muted/30 px-2.5 py-1.5"
        >
          <span className="text-sm font-semibold leading-snug text-foreground">{term}</span>
          <span className="text-sm leading-relaxed text-muted-foreground">→ {meaning}</span>
        </div>
      ))}
    </div>
  );
}

function FormationFlow() {
  return (
    <div className="mt-2 rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-50/70 via-card to-indigo-50/60 p-3 shadow-sm dark:from-emerald-950/20 dark:via-card dark:to-indigo-950/20">
      <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-semibold leading-relaxed text-foreground">
        {FLOW_STEPS.map((step, index) => (
          <span key={step} className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {index > 0 && (
              <span className="font-bold text-emerald-600 dark:text-emerald-400" aria-hidden>
                →
              </span>
            )}
            <span>{step}</span>
          </span>
        ))}
      </p>
    </div>
  );
}

export function InheritanceRevisionSheet() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-50/60 via-card to-indigo-50/50 shadow-sm dark:from-emerald-950/20 dark:via-card dark:to-indigo-950/20">
      <div className="flex items-start gap-3 border-b border-emerald-500/30 bg-emerald-50/50 px-4 py-3.5 dark:bg-emerald-950/25">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white shadow-sm dark:bg-emerald-500">
          <Dna className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
            Chapter revision
          </div>
          <div className="text-lg font-bold tracking-tight text-foreground">Complete Revision Sheet</div>
        </div>
        <ClipboardList className="ml-auto hidden h-5 w-5 shrink-0 text-emerald-500 sm:block" aria-hidden />
      </div>

      <div className="space-y-5 p-4">
        <div>
          <RevisionSubheading Icon={Boxes}>Nucleotide Components and Bonds</RevisionSubheading>
          <MiniTable
            headers={["Structure / bond", "Composition or function"]}
            rows={NUCLEOTIDE_ROWS}
          />
        </div>

        <div>
          <RevisionSubheading Icon={Dna}>DNA vs RNA</RevisionSubheading>
          <MiniTable headers={["Feature", "DNA", "RNA"]} rows={DNA_RNA_ROWS} />
        </div>

        <div>
          <RevisionSubheading Icon={KeyRound}>High-Priority Keywords</RevisionSubheading>
          <KeywordList />
        </div>

        <div>
          <RevisionSubheading Icon={Workflow}>Structure Formation — One-Line Flow</RevisionSubheading>
          <FormationFlow />
        </div>
      </div>
    </div>
  );
}
