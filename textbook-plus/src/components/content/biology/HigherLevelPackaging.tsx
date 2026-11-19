import type { ReactNode } from "react";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

function HelixArt() {
  return (
    <svg viewBox="0 0 80 70" className="mx-auto h-14 w-auto" aria-hidden>
      <path d="M22 6 C62 18 18 28 58 40 C18 52 62 62 22 66" fill="none" className="stroke-rose-500" strokeWidth="3" />
      <path d="M58 6 C18 18 62 28 22 40 C62 52 18 62 58 66" fill="none" className="stroke-sky-500" strokeWidth="3" />
      {[14, 28, 46, 60].map((y) => (
        <line key={y} x1="30" x2="50" y1={y} y2={y} className="stroke-muted-foreground/50" strokeWidth="2" />
      ))}
    </svg>
  );
}

function NucleosomeArt() {
  return (
    <svg viewBox="0 0 80 70" className="mx-auto h-14 w-auto" aria-hidden>
      <circle cx="40" cy="35" r="19" className="fill-violet-500/30 stroke-violet-600/70" strokeWidth="1.5" />
      <circle cx="40" cy="35" r="9" className="fill-violet-600/55" />
      <path d="M8 35 A32 24 0 0 1 72 35" fill="none" className="stroke-rose-500" strokeWidth="4" />
    </svg>
  );
}

function ChromatinArt() {
  return (
    <svg viewBox="0 0 80 70" className="mx-auto h-14 w-auto" aria-hidden>
      <polyline points="8,26 28,44 48,26 68,44" fill="none" className="stroke-rose-400/70" strokeWidth="3" />
      {[28, 48, 68].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={i === 1 ? 26 : 44} r="10" className="fill-violet-500/35 stroke-violet-600/70" strokeWidth="1.5" />
          <circle cx={x} cy={i === 1 ? 26 : 44} r="4" className="fill-violet-600/60" />
        </g>
      ))}
    </svg>
  );
}

function FibreArt() {
  return (
    <svg viewBox="0 0 80 70" className="mx-auto h-14 w-auto" aria-hidden>
      <path d="M14 14 C60 14 60 28 14 28 C60 28 60 42 14 42 C60 42 60 56 14 56" fill="none" className="stroke-violet-600/70" strokeWidth="9" strokeLinecap="round" />
      <path d="M14 14 C60 14 60 28 14 28 C60 28 60 42 14 42 C60 42 60 56 14 56" fill="none" className="stroke-violet-300/40" strokeWidth="2" />
    </svg>
  );
}

function ChromosomeArt() {
  return (
    <svg viewBox="0 0 80 70" className="mx-auto h-14 w-auto" aria-hidden>
      <path d="M40 35 C28 26 22 16 24 8 C32 12 38 20 40 26 C42 20 48 12 56 8 C58 16 52 26 40 35 C52 44 58 54 56 62 C48 58 42 50 40 44 C38 50 32 58 24 62 C22 54 28 44 40 35 Z" className="fill-violet-700/80 stroke-violet-800" strokeWidth="1.5" />
    </svg>
  );
}

type Stage = { title: string; detail: string; art: ReactNode; dense: boolean };

const STAGES: Stage[] = [
  { title: "DNA", detail: "Polynucleotide double helix", art: <HelixArt />, dense: false },
  { title: "Nucleosome", detail: "DNA wrapped around histone octamer", art: <NucleosomeArt />, dense: false },
  { title: "Chromatin", detail: "Repeating nucleosomes — beads on a string", art: <ChromatinArt />, dense: false },
  { title: "Chromatin fibre", detail: "Further level of packaging", art: <FibreArt />, dense: true },
  { title: "Chromosome", detail: "Highly condensed structure (metaphase)", art: <ChromosomeArt />, dense: true },
];

export function HigherLevelPackaging() {
  return (
    <div className="my-6">
      <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li><strong>Repeating nucleosomes.</strong> Repeating nucleosomes form chromatin.</li>
        <li><strong>Chromatin fibres.</strong> Chromatin undergoes further packaging into chromatin fibres.</li>
        <li><strong>NHC proteins.</strong> Higher-level packaging requires Non-Histone Chromosomal proteins.</li>
        <li><strong>Metaphase chromosomes.</strong> Chromatin fibres condense further to form chromosomes during metaphase.</li>
      </ul>

      <p className="mt-6 text-sm font-bold tracking-tight text-foreground">Hierarchy of DNA packaging</p>
      <div className="mt-3 flex items-stretch gap-2 overflow-x-auto pb-2">
        {STAGES.map((stage, i) => (
          <div key={stage.title} className="flex shrink-0 items-stretch gap-2">
            <div
              className={`flex w-[156px] flex-col rounded-xl border p-3 ${
                stage.dense
                  ? "border-violet-500/40 bg-violet-50/60 dark:bg-violet-950/20"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-md bg-foreground text-[0.65rem] font-bold tabular-nums text-background">
                  {i + 1}
                </span>
                <span className="text-sm font-bold tracking-tight text-foreground">{stage.title}</span>
              </div>
              <div className="my-2">{stage.art}</div>
              <p className="mt-auto text-xs leading-snug text-muted-foreground">{stage.detail}</p>
            </div>
            {i < STAGES.length - 1 && (
              <span className="self-center text-lg font-bold text-muted-foreground/60" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-violet-500/40 bg-violet-50/60 px-4 py-3 dark:bg-violet-950/20">
        <span className={EYEBROW}>Higher-level packaging requires</span>
        <strong className="text-sm text-violet-900 dark:text-violet-200">
          NHC proteins · Non-Histone Chromosomal proteins
        </strong>
      </div>
    </div>
  );
}
