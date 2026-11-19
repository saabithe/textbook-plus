import type { ReactNode } from "react";
import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import { FormulaBlock } from "@/components/content/Formula";
import { ClipboardList, Dna, Sigma, Table2, type LucideIcon } from "lucide-react";

/**
 * Final revision sheet for Chapter 5. Collapsed by default via the shared
 * CollapsibleRevision shell. Contains only the note's High-Priority Facts and
 * Essential Formulas.
 */

const FACT_ROWS: [string, string][] = [
  ["Miescher", "1869; Nuclein"],
  ["Watson and Crick", "1953; Double helix"],
  ["Wilkins and Franklin", "X-ray diffraction data"],
  ["Chargaff's rule", "A = T; G = C"],
  ["Total purines", "Equal to total pyrimidines"],
  ["DNA strands", "Two, antiparallel"],
  ["A–T", "2 hydrogen bonds"],
  ["G–C", "3 hydrogen bonds"],
  ["Helix direction", "Right-handed"],
  ["Base pairs per turn", "10"],
  ["Pitch", "3.4 nm"],
  ["Adjacent base-pair distance", "0.34 nm"],
  ["Central dogma", "DNA → RNA → Protein"],
  ["Replication", "DNA → DNA"],
  ["Reverse transcription", "RNA → DNA"],
  ["Reverse transcription example", "HIV"],
  ["Human diploid DNA length", "Approximately 2.2 m"],
];

const FORMULAS = [
  String.raw`A=T,\quad G=C`,
  String.raw`A+G=T+C`,
  String.raw`\text{Pitch}=10\times0.34=3.4\,\text{nm}`,
  String.raw`\text{DNA length}=\text{Total bp}\times0.34\,\text{nm}`,
];

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

function FactsTable() {
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-border">
      <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-xs font-semibold uppercase tracking-[0.06em] text-muted-foreground">
        <div className="min-w-0 px-2 py-1.5">Topic</div>
        <div className="min-w-0 px-2 py-1.5">Must remember</div>
      </div>
      {FACT_ROWS.map(([topic, remember]) => (
        <div key={topic} className="grid grid-cols-2 border-b border-border last:border-b-0">
          <div className="min-w-0 break-words px-2 py-1.5 text-sm font-semibold leading-relaxed text-foreground">
            {topic}
          </div>
          <div className="min-w-0 break-words px-2 py-1.5 text-sm leading-relaxed text-foreground/85">
            {remember}
          </div>
        </div>
      ))}
    </div>
  );
}

function FormulasList() {
  return (
    <div className="mt-2 divide-y divide-border overflow-hidden rounded-lg border border-border bg-card [&>div]:my-0">
      {FORMULAS.map((latex) => (
        <div key={latex} className="px-2 py-1">
          <FormulaBlock latex={latex} />
        </div>
      ))}
    </div>
  );
}

export function InheritanceRevisionSheet() {
  return (
    <CollapsibleRevision
      className="my-8 rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-50/60 via-card to-indigo-50/50 shadow-sm dark:from-emerald-950/20 dark:via-card dark:to-indigo-950/20"
      label="Final Revision Sheet"
      header={
        <div className="flex items-start gap-3 border-b border-emerald-500/30 bg-emerald-50/50 px-4 py-3.5 pr-12 dark:bg-emerald-950/25">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white shadow-sm dark:bg-emerald-500">
            <Dna className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
              Chapter revision
            </div>
            <div className="text-lg font-bold tracking-tight text-foreground">⚡ Final Revision Sheet</div>
          </div>
          <ClipboardList className="ml-auto hidden h-5 w-5 shrink-0 text-emerald-500 sm:block" aria-hidden />
        </div>
      }
    >
      <div className="space-y-5 p-4">
        <div>
          <RevisionSubheading Icon={Table2}>High-Priority Facts</RevisionSubheading>
          <FactsTable />
        </div>
        <div>
          <RevisionSubheading Icon={Sigma}>Essential Formulas</RevisionSubheading>
          <FormulasList />
        </div>
      </div>
    </CollapsibleRevision>
  );
}
