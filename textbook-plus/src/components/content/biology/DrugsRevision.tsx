import type { ReactNode } from "react";
import {
  ClipboardList,
  FlaskConical,
  Pill,
  type LucideIcon,
} from "lucide-react";

/**
 * DrugsRevision — compact closing revision block for the drugs notes.
 * Rose + indigo accent, matched in weight to the chapter's other revision
 * sheets but with its own two-table layout: drug sources and high-priority facts.
 */

const DRUG_SOURCE_ROWS: ReactNode[][] = [
  ["Opioids", <em key="opium">Papaver somniferum</em>, "Bind opioid receptors"],
  ["Cannabinoids", <em key="cannabis">Cannabis sativa</em>, "Act on cannabinoid receptors"],
  ["Coca alkaloids", <em key="coca">Erythroxylum coca</em>, "Interfere with dopamine transport"],
  [
    "Hallucinogenic plants",
    <>
      <em>Atropa belladonna</em>, <em>Datura</em>
    </>,
    "Hallucinogenic properties",
  ],
];

const HIGH_PRIORITY_ROWS: ReactNode[][] = [
  ["Heroin", "Diacetylmorphine"],
  ["Heroin production", "Acetylation of morphine"],
  ["Heroin source", "Poppy latex"],
  ["Morphine", "Sedative and painkiller"],
  ["Cannabinoid receptor location", "Principally brain"],
  ["Cannabinoid effects", "Mainly cardiovascular system"],
  ["Cocaine", "CNS stimulant"],
  ["Cocaine overdose", "Hallucinations"],
  ["Nicotine", "Stimulates adrenaline and noradrenaline release"],
  ["CO", "Reduces oxygen-carrying capacity of blood"],
  ["Addiction", "Compulsive attachment"],
  ["Tolerance", "Increased dose may be required"],
  ["Dependence", "Withdrawal symptoms after stopping"],
  ["IV needle sharing", "HIV/AIDS and Hepatitis B risk"],
  ["Chronic abuse", "Nervous system damage and liver cirrhosis"],
  ["Steroid misuse in adolescents", "Premature closure of growth centres"],
  ["Prevention", "Education, support, early detection and rehabilitation"],
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
        className={`grid ${cols} border-b border-border bg-muted/40 text-[9.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground`}
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
              className={`min-w-0 break-words px-2 py-1.5 text-[10.5px] leading-snug ${
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
      <span className="h-3 w-1 shrink-0 rounded-full bg-rose-500 dark:bg-rose-400" aria-hidden />
      <Icon className="h-3.5 w-3.5 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
      <div className="text-[9.5px] font-bold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
        {children}
      </div>
    </div>
  );
}

export function DrugsFinalRevisionSheet() {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border-2 border-rose-500/50 bg-gradient-to-br from-rose-50/60 via-card to-indigo-50/50 shadow-sm dark:from-rose-950/20 dark:via-card dark:to-indigo-950/20">
      <div className="flex items-start gap-3 border-b border-rose-500/30 bg-rose-50/50 px-4 py-3.5 dark:bg-rose-950/25">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-rose-600 text-white shadow-sm dark:bg-rose-500">
          <Pill className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-indigo-700 dark:text-indigo-300">
            Chapter revision
          </div>
          <div className="text-lg font-bold tracking-tight text-foreground">Final Revision Sheet</div>
        </div>
        <FlaskConical className="ml-auto hidden h-5 w-5 shrink-0 text-rose-500 sm:block" aria-hidden />
      </div>

      <div className="space-y-5 p-4">
        <div>
          <RevisionSubheading Icon={Pill}>Common Drugs and Their Sources</RevisionSubheading>
          <MiniTable
            headers={["Drug group", "Source", "Key mechanism / effect"]}
            rows={DRUG_SOURCE_ROWS}
          />
        </div>

        <div>
          <RevisionSubheading Icon={ClipboardList}>High-Priority Facts</RevisionSubheading>
          <MiniTable headers={["Topic", "Must remember"]} rows={HIGH_PRIORITY_ROWS} />
        </div>
      </div>
    </div>
  );
}
