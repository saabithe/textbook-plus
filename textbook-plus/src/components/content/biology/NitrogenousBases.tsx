import {
  Dna,
  Info,
  Layers,
  type LucideIcon,
} from "lucide-react";

/**
 * NitrogenousBases — the nitrogenous-base block: the two structural classes
 * (purines / pyrimidines) with ring-count glyphs, a side-by-side DNA vs RNA
 * base-composition comparison with a colour legend, and the key distinctions.
 *
 * amber = purines, sky = pyrimidines, emerald = bases shared by DNA and RNA,
 * blue = thymine (DNA), violet = uracil (RNA).
 */

/* -------------------------------------------------------------------------- */
/* Shared bits                                                                */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </div>
  );
}

/** CSS/SVG ring-count glyph: two overlapping rings vs one ring. */
function RingGlyph({ rings, tone }: { rings: 1 | 2; tone: "purine" | "pyrimidine" }) {
  const isDouble = rings === 2;
  const circleClass =
    tone === "purine"
      ? "fill-amber-100 stroke-amber-600 dark:fill-amber-900/50 dark:stroke-amber-400"
      : "fill-sky-100 stroke-sky-600 dark:fill-sky-900/50 dark:stroke-sky-400";

  return (
    <svg
      viewBox="0 0 44 26"
      className="h-6 w-11 shrink-0"
      role="img"
      aria-label={isDouble ? "Two fused rings (double-ring structure)" : "One ring (single-ring structure)"}
    >
      {isDouble ? (
        <>
          <circle cx="17" cy="13" r="9" className={circleClass} strokeWidth="1.5" />
          <circle cx="27" cy="13" r="9" className={circleClass} strokeWidth="1.5" />
        </>
      ) : (
        <circle cx="22" cy="13" r="9" className={circleClass} strokeWidth="1.5" />
      )}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. Two structural classes                                                  */
/* -------------------------------------------------------------------------- */

type ClassTone = "purine" | "pyrimidine";

function BaseClassCard({
  Icon,
  title,
  tone,
  rings,
  structure,
  bases,
  nitrogenPositions,
}: {
  Icon: LucideIcon;
  title: string;
  tone: ClassTone;
  rings: 1 | 2;
  structure: string;
  bases: string[];
  nitrogenPositions: string;
}) {
  const isPurine = tone === "purine";
  const cardClass = isPurine
    ? "border-amber-600/35 bg-amber-50/30 dark:bg-amber-950/15"
    : "border-sky-600/35 bg-sky-50/30 dark:bg-sky-950/15";
  const iconClass = isPurine
    ? "text-amber-700 dark:text-amber-300"
    : "text-sky-700 dark:text-sky-300";
  const dotClass = isPurine ? "bg-amber-600/60" : "bg-sky-600/60";
  const structureClass = isPurine
    ? "text-amber-900 dark:text-amber-200"
    : "text-sky-900 dark:text-sky-200";

  return (
    <div className={`rounded-xl border-2 p-3.5 ${cardClass}`}>
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>

      <div className="mt-2.5 flex items-center gap-2.5 rounded-lg border border-border bg-card px-2.5 py-2">
        <RingGlyph rings={rings} tone={tone} />
        <span className={`text-[10.5px] font-semibold leading-snug ${structureClass}`}>{structure}</span>
      </div>

      <div className="mt-2.5">
        <Eyebrow>Bases</Eyebrow>
        <ul className="mt-1.5 space-y-1.5">
          {bases.map((base) => (
            <li key={base} className="flex items-start gap-2">
              <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{base}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-2.5 rounded-md border border-border bg-muted/25 px-2.5 py-1.5">
        <p className="text-[10.5px] leading-snug text-foreground/85">
          <strong>Nitrogen positions:</strong> {nitrogenPositions}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Base composition: DNA vs RNA                                            */
/* -------------------------------------------------------------------------- */

type CompositionTone = "shared" | "dna" | "rna";

type CompositionRow = {
  dna: string;
  rna: string;
  tone: "shared" | "distinct";
};

const COMPOSITION_ROWS: CompositionRow[] = [
  { dna: "Adenine (A)", rna: "Adenine (A)", tone: "shared" },
  { dna: "Guanine (G)", rna: "Guanine (G)", tone: "shared" },
  { dna: "Thymine (T)", rna: "Uracil (U)", tone: "distinct" },
  { dna: "Cytosine (C)", rna: "Cytosine (C)", tone: "shared" },
];

const CELL_TONES: Record<
  CompositionTone,
  { row: string; badge: string; label: string }
> = {
  shared: {
    row: "border-emerald-600/25 bg-emerald-50/40 dark:bg-emerald-950/20",
    badge: "border-emerald-600/40 bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200",
    label: "Both",
  },
  dna: {
    row: "border-blue-600/30 bg-blue-50/45 dark:bg-blue-950/20",
    badge: "border-blue-600/45 bg-blue-50/70 text-blue-900 dark:bg-blue-950/30 dark:text-blue-200",
    label: "DNA",
  },
  rna: {
    row: "border-violet-600/30 bg-violet-50/45 dark:bg-violet-950/20",
    badge: "border-violet-600/45 bg-violet-50/70 text-violet-900 dark:bg-violet-950/30 dark:text-violet-200",
    label: "RNA",
  },
};

function BaseCell({ name, tone }: { name: string; tone: CompositionTone }) {
  const t = CELL_TONES[tone];
  return (
    <div className={`flex items-center justify-between gap-2 rounded-md border px-2.5 py-1.5 ${t.row}`}>
      <span className="text-[10.5px] font-semibold leading-snug text-foreground">{name}</span>
      <span className={`shrink-0 rounded border px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.06em] ${t.badge}`}>
        {t.label}
      </span>
    </div>
  );
}

function CompositionPanel({
  title,
  strand,
}: {
  title: string;
  strand: "dna" | "rna";
}) {
  const headerClass =
    strand === "dna"
      ? "border-blue-600/30 bg-blue-50/40 dark:bg-blue-950/20"
      : "border-violet-600/30 bg-violet-50/40 dark:bg-violet-950/20";
  const headerText =
    strand === "dna"
      ? "text-blue-900 dark:text-blue-200"
      : "text-violet-900 dark:text-violet-200";

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className={`flex items-center gap-2 border-b px-3 py-2 ${headerClass}`}>
        <Dna className={`h-3.5 w-3.5 shrink-0 ${headerText}`} aria-hidden />
        <span className={`text-[11px] font-bold tracking-tight ${headerText}`}>{title}</span>
      </div>
      <div className="space-y-1.5 p-2.5">
        {COMPOSITION_ROWS.map((row) => (
          <BaseCell
            key={`${strand}-${row.dna}`}
            name={strand === "dna" ? row.dna : row.rna}
            tone={row.tone === "distinct" ? strand : "shared"}
          />
        ))}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-lg border border-border bg-muted/25 px-2.5 py-2">
      <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Legend</span>
      <span className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm border border-emerald-600/50 bg-emerald-500/70" aria-hidden />
        <span className="text-[9.5px] leading-snug text-foreground">Shared — A, G, C</span>
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm border border-blue-600/50 bg-blue-500/70" aria-hidden />
        <span className="text-[9.5px] leading-snug text-foreground">Thymine (T) — DNA</span>
      </span>
      <span className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 shrink-0 rounded-sm border border-violet-600/50 bg-violet-500/70" aria-hidden />
        <span className="text-[9.5px] leading-snug text-foreground">Uracil (U) — RNA</span>
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Important distinction                                                   */
/* -------------------------------------------------------------------------- */

const DISTINCTIONS: React.ReactNode[] = [
  <><strong>Cytosine</strong> is common to both DNA and RNA.</>,
  <><strong>Thymine</strong> occurs in DNA.</>,
  <><strong>Uracil</strong> occurs in RNA instead of thymine.</>,
  <>Thymine is also known as <strong>5-methyl uracil</strong>.</>,
];

/* -------------------------------------------------------------------------- */
/* Main export                                                                */
/* -------------------------------------------------------------------------- */

export function NitrogenousBases() {
  return (
    <div className="my-5 space-y-5">
      {/* Intro */}
      <p className="text-[10.5px] leading-snug text-foreground">
        <strong>Nitrogenous bases</strong> are classified into two groups.
      </p>

      {/* Two structural classes */}
      <div>
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
          <div className="text-sm font-bold tracking-tight text-foreground">Two Structural Groups</div>
        </div>
        <div className="mt-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <BaseClassCard
            Icon={Layers}
            title="Purines"
            tone="purine"
            rings={2}
            structure="Double-ring structure"
            bases={["Adenine (A)", "Guanine (G)"]}
            nitrogenPositions="1, 3, 7, 9"
          />
          <BaseClassCard
            Icon={Layers}
            title="Pyrimidines"
            tone="pyrimidine"
            rings={1}
            structure="Single-ring structure"
            bases={["Cytosine (C)", "Thymine (T)", "Uracil (U)"]}
            nitrogenPositions="1, 3"
          />
        </div>
      </div>

      {/* Base composition */}
      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">Base Composition in DNA and RNA</div>
        <div className="mt-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <CompositionPanel title="DNA" strand="dna" />
          <CompositionPanel title="RNA" strand="rna" />
        </div>
        <Legend />
      </div>

      {/* Important distinction */}
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="flex items-center gap-2">
          <Info className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
          <div className="text-sm font-bold tracking-tight text-foreground">Important distinction</div>
        </div>
        <ul className="mt-2 space-y-1.5">
          {DISTINCTIONS.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-600/60" aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
