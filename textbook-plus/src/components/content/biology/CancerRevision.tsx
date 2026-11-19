import type { ReactNode } from "react";
import { CollapsibleRevision } from "@/components/content/CollapsibleRevision";
import {
  Activity,
  Biohazard,
  ClipboardList,
  Microscope,
  Pill,
  type LucideIcon,
} from "lucide-react";

/**
 * CancerRevision — compact closing revision block for the cancer notes.
 * Teal + indigo accent, matched in weight to FinalRevisionSheet but with its
 * own four-table layout: Tumours, Carcinogens, Diagnosis and Treatment.
 */

const TUMOUR_ROWS: string[][] = [
  ["Location", "Confined to original site", "Can spread"],
  ["Invasion", "Does not invade distant tissues", "Invades and destroys surrounding tissues"],
  ["Spread", "No metastasis", "Metastasis"],
  ["Damage", "Usually little", "Can cause extensive damage"],
];

const CARCINOGEN_ROWS: string[][] = [
  ["Physical", "X-rays, gamma rays, UV rays"],
  ["Chemical", "Tobacco smoke, aniline dyes, mustard gas"],
  ["Biological", "Oncogenic viruses, viral oncogenes, cellular oncogenes"],
];

const DIAGNOSIS_ROWS: string[][] = [
  ["Biopsy", "Tissue examination"],
  ["Histopathology", "Microscopic examination of stained tissue"],
  ["Blood and bone marrow tests", "Leukaemia"],
  ["Radiography", "X-rays"],
  ["CT", "X-rays; 3D imaging"],
  ["MRI", "Magnetic fields and radiofrequency signals"],
  ["Immunological", "Cancer-specific antigens and antibodies"],
  ["Molecular biology", "Cancer-specific genes and inherited mutations"],
];

const TREATMENT_ROWS: string[][] = [
  ["Surgery", "Tumour removal"],
  ["Radiotherapy", "Radiation"],
  ["Chemotherapy", "Drugs; hair loss and anaemia"],
  ["Immunotherapy", "Stimulates immune response"],
  ["Biological response modifier", "α-interferon"],
];

const GRID_COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-3",
};

function MiniTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  const cols = GRID_COLS[headers.length] ?? "grid-cols-2";
  return (
    <div className="mt-2 overflow-hidden rounded-lg border border-border">
      <div
        className={`grid ${cols} border-b border-border bg-muted/40 text-[9.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground`}
      >
        {headers.map((header) => (
          <div key={header} className="px-2 py-1.5">
            {header}
          </div>
        ))}
      </div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`grid ${cols} border-b border-border last:border-b-0`}>
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`px-2 py-1.5 text-[10px] leading-snug ${
                cellIndex === 0
                  ? "font-semibold text-foreground"
                  : "text-foreground/85"
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
      <span className="h-3 w-1 shrink-0 rounded-full bg-teal-500 dark:bg-teal-400" aria-hidden />
      <Icon className="h-3.5 w-3.5 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden />
      <div className="text-[9.5px] font-bold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        {children}
      </div>
    </div>
  );
}

export function CancerQuickRevisionSheet() {
  return (
    <CollapsibleRevision
      className="my-8 rounded-2xl border-2 border-teal-500/50 bg-gradient-to-br from-teal-50/60 via-card to-indigo-50/50 shadow-sm dark:from-teal-950/20 dark:via-card dark:to-indigo-950/20"
      label="Quick Revision Sheet"
      header={
        <div className="flex items-start gap-3 border-b border-teal-500/30 bg-teal-50/50 px-4 py-3.5 pr-12 dark:bg-teal-950/25">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-600 text-white shadow-sm dark:bg-teal-500">
            <ClipboardList className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
              At a glance
            </div>
            <div className="text-lg font-bold tracking-tight text-foreground">Quick Revision Sheet</div>
          </div>
          <Microscope className="ml-auto hidden h-5 w-5 shrink-0 text-teal-500 sm:block" aria-hidden />
        </div>
      }
    >
      <div className="space-y-5 p-4">
        <div>
          <RevisionSubheading Icon={Activity}>Tumours</RevisionSubheading>
          <MiniTable headers={["Feature", "Benign", "Malignant"]} rows={TUMOUR_ROWS} />
        </div>

        <div>
          <RevisionSubheading Icon={Biohazard}>Carcinogens</RevisionSubheading>
          <MiniTable headers={["Category", "Examples / key terms"]} rows={CARCINOGEN_ROWS} />
        </div>

        <div>
          <RevisionSubheading Icon={Microscope}>Diagnosis</RevisionSubheading>
          <MiniTable headers={["Method", "Must remember"]} rows={DIAGNOSIS_ROWS} />
        </div>

        <div>
          <RevisionSubheading Icon={Pill}>Treatment</RevisionSubheading>
          <MiniTable headers={["Treatment", "Key point"]} rows={TREATMENT_ROWS} />
        </div>
      </div>
    </CollapsibleRevision>
  );
}
