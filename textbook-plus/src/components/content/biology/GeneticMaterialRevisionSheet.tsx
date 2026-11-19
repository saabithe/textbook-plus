import type { ReactNode } from "react";
import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import {
  ClipboardList,
  Dna,
  FlaskConical,
  Microscope,
  Table2,
  type LucideIcon,
} from "lucide-react";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

const EXPERIMENT_ROWS: string[][] = [
  ["Friedrich Miescher", "1869", "Discovery of nuclein", "Identified acidic nuclear substance"],
  ["Frederick Griffith", "1928", "Transforming principle", "R bacteria transformed into S type"],
  ["Avery, MacLeod and McCarty", "1933–1944", "Biochemical characterisation", "DNA is the transforming principle"],
  ["Hershey and Chase", "1952", "Bacteriophage experiment", "DNA is genetic material"],
];

const DEMONSTRATION_ROWS: string[][] = [
  ["Griffith", "A transforming principle exists"],
  ["Avery et al.", "DNA is the transforming principle"],
  ["Hershey–Chase", "DNA enters bacterial cells and carries viral genetic information"],
];

const ENZYME_ROWS: string[][] = [
  ["RNase", "RNA", "Continues"],
  ["Protease", "Protein", "Continues"],
  ["DNase", "DNA", "Stops"],
];

const ISOTOPE_ROWS: string[][] = [
  ["³⁵S", "Protein", "Supernatant"],
  ["³²P", "DNA", "Bacterial pellet"],
];

const CRITERIA: string[] = ["Replication", "Stability", "Mutation", "Expression"];

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

interface MiniTableProps {
  headers: string[];
  rows: string[][];
  highlightRows?: number[];
}

function MiniTable({ headers, rows, highlightRows = [] }: MiniTableProps) {
  const cols = GRID_COLS[headers.length] ?? "grid-cols-2";
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-border">
      <div className={`grid ${cols} border-b border-border bg-muted/40 text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-muted-foreground`}>
        {headers.map((header) => (
          <div key={header} className="min-w-0 px-2 py-1.5">
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => {
        const highlighted = highlightRows.includes(rowIndex);
        return (
          <div
            key={rowIndex}
            className={`grid ${cols} border-b border-border last:border-b-0 ${
              highlighted ? "bg-emerald-50/50 dark:bg-emerald-950/15" : ""
            }`}
          >
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`min-w-0 break-words px-2 py-1.5 text-[0.68rem] leading-snug ${
                  cellIndex === 0
                    ? `font-semibold ${highlighted ? "text-emerald-900 dark:text-emerald-200" : "text-foreground"}`
                    : "text-foreground/85"
                }`}
              >
                {cell}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function RevisionSubheading({ Icon, children }: { Icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-1 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400" aria-hidden />
      <Icon className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden />
      <div className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
        {children}
      </div>
    </div>
  );
}

function CriteriaStrip() {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      {CRITERIA.map((criterion, index) => (
        <span key={criterion} className="flex items-center gap-2">
          <span className="rounded-lg border border-emerald-500/30 bg-emerald-50/60 px-2.5 py-1 text-[0.68rem] font-semibold text-emerald-900 dark:bg-emerald-950/25 dark:text-emerald-200">
            {criterion}
          </span>
          {index < CRITERIA.length - 1 && (
            <span className="text-emerald-600 dark:text-emerald-400" aria-hidden>
              +
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export function GeneticMaterialRevisionSheet() {
  return (
    <CollapsibleRevision
      className="my-8 rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-50/60 via-card to-indigo-50/50 dark:from-emerald-950/20 dark:via-card dark:to-indigo-950/20"
      label="Genetic material revision sheet"
      header={
        <div className="flex items-start gap-3 border-b border-emerald-500/30 bg-emerald-50/50 px-4 py-3.5 pr-12 dark:bg-emerald-950/25">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white shadow-sm dark:bg-emerald-500">
            <Dna className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className={EYEBROW}>Revision sheet · the search for genetic material</div>
            <div className="text-lg font-bold tracking-tight text-foreground">⚡ Final Revision Sheet</div>
          </div>
          <ClipboardList className="ml-auto hidden h-5 w-5 shrink-0 text-emerald-500 sm:block" aria-hidden />
        </div>
      }
    >
      <div className="space-y-4 p-4">
        <div>
          <RevisionSubheading Icon={ClipboardList}>Experiments — Must Remember</RevisionSubheading>
          <MiniTable
            headers={["Scientist(s)", "Year", "Experiment / discovery", "Conclusion"]}
            rows={EXPERIMENT_ROWS}
          />
        </div>

        <div>
          <RevisionSubheading Icon={Microscope}>Griffith vs Avery vs Hershey–Chase</RevisionSubheading>
          <MiniTable
            headers={["Experiment", "What was demonstrated?"]}
            rows={DEMONSTRATION_ROWS}
          />
        </div>

        <div>
          <RevisionSubheading Icon={FlaskConical}>Enzymes — Avery Experiment</RevisionSubheading>
          <MiniTable
            headers={["Enzyme", "Acts on", "Transformation"]}
            rows={ENZYME_ROWS}
            highlightRows={[2]}
          />
        </div>

        <div>
          <RevisionSubheading Icon={Table2}>Isotopes — Hershey–Chase Experiment</RevisionSubheading>
          <MiniTable
            headers={["Isotope", "Component", "Result"]}
            rows={ISOTOPE_ROWS}
          />
        </div>

        <div>
          <RevisionSubheading Icon={Dna}>Genetic Material — Four Criteria</RevisionSubheading>
          <CriteriaStrip />
        </div>
      </div>
    </CollapsibleRevision>
  );
}
