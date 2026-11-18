import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Waypoints,
} from "lucide-react";

/**
 * CancerOverview — the cancer block: contact inhibition and tumour development,
 * then the benign / malignant comparison kept immediately above the prominent
 * metastasis block with its pathway schematic and process list.
 *
 * emerald = normal cells / benign, rose = cancer cells / malignant,
 * violet / indigo = the metastasis pathway and its steps.
 */

/* -------------------------------------------------------------------------- */
/* 1. ContactInhibitionSection                                                */
/* -------------------------------------------------------------------------- */

const TUMOUR_FLOW: { title: string; caption?: string; tone: "emerald" | "rose" }[] = [
  { title: "Normal cells", caption: "Contact inhibition present", tone: "emerald" },
  { title: "Loss of contact inhibition", tone: "rose" },
  { title: "Uncontrolled cell multiplication", tone: "rose" },
  { title: "Tumour formation", tone: "rose" },
];

const NORMAL_CELLS = [
  [28, 28], [60, 28], [92, 28], [124, 28],
  [28, 60], [60, 60], [92, 60], [124, 60],
  [28, 92], [60, 92], [92, 92], [124, 92],
];

const CANCER_CELLS = [
  [34, 26], [58, 20], [82, 30], [106, 22], [126, 36],
  [28, 50], [52, 48], [76, 54], [100, 46], [122, 60],
  [34, 74], [58, 72], [84, 80], [108, 70], [128, 86],
  [50, 96], [92, 100], [112, 94],
];

function CellPanel({
  label,
  tone,
  cells,
  radius,
  ariaLabel,
}: {
  label: string;
  tone: "normal" | "cancer";
  cells: number[][];
  radius: number;
  ariaLabel: string;
}) {
  const cellClass =
    tone === "normal"
      ? "fill-emerald-100 stroke-emerald-600 dark:fill-emerald-900/50 dark:stroke-emerald-400"
      : "fill-rose-100 stroke-rose-600 dark:fill-rose-900/50 dark:stroke-rose-400";
  const captionClass =
    tone === "normal"
      ? "text-emerald-900 dark:text-emerald-200"
      : "text-rose-900 dark:text-rose-200";

  return (
    <div className="flex-1 rounded-lg border border-border bg-card p-2">
      <svg
        viewBox="0 0 152 120"
        className="mx-auto h-auto w-full max-w-[152px]"
        role="img"
        aria-label={ariaLabel}
      >
        {cells.map(([cx, cy], index) => (
          <circle key={index} cx={cx} cy={cy} r={radius} className={cellClass} strokeWidth="1.5" />
        ))}
      </svg>
      <div className={`mt-1 text-center text-[9px] font-semibold leading-snug ${captionClass}`}>{label}</div>
    </div>
  );
}

function ContactInhibitionIllustration() {
  return (
    <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
      <CellPanel
        label="Normal cells — contact inhibition"
        tone="normal"
        cells={NORMAL_CELLS}
        radius={11}
        ariaLabel="Schematic of normal cells arranged as a tidy, non-overlapping single layer with clear gaps between the round cells."
      />

      <div className="flex shrink-0 items-center justify-center gap-1.5 sm:flex-col sm:gap-1">
        <ArrowDown className="h-4 w-4 text-rose-600 dark:text-rose-400 sm:hidden" aria-hidden />
        <ArrowRight className="hidden h-4 w-4 text-rose-600 dark:text-rose-400 sm:block" aria-hidden />
        <span className="max-w-[92px] text-center text-[9px] font-semibold leading-snug text-rose-800 dark:text-rose-300">
          Loss of contact inhibition
        </span>
      </div>

      <CellPanel
        label="Cancer cells — uncontrolled multiplication"
        tone="cancer"
        cells={CANCER_CELLS}
        radius={13}
        ariaLabel="Schematic of a larger, disordered cluster of overlapping round cancer cells, with more cells than the normal-cell panel."
      />
    </div>
  );
}

export function ContactInhibitionSection() {
  return (
    <div className="my-5 space-y-4">
      {/* Definition */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-emerald-600/35 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
        <ShieldCheck
          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-300"
          aria-hidden
        />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
            Definition
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Contact inhibition</strong> = The property of normal cells by which contact with neighbouring cells
            inhibits further cell division.
          </p>
        </div>
      </div>

      {/* Three points */}
      <div className="space-y-1.5">
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">
            <strong>Normal cells</strong> → Show contact inhibition.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">
            <strong>Cancer cells</strong> → Lose contact inhibition.
          </span>
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">
            <strong>Uncontrolled cell multiplication</strong> → Formation of an abnormal mass of cells called a{" "}
            <strong>tumour</strong>.
          </span>
        </div>
      </div>

      {/* Development flow */}
      <div className="rounded-lg border border-border bg-muted/20 p-2.5">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Development of a tumour
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          {TUMOUR_FLOW.map((node, index) => {
            const nodeClass =
              node.tone === "emerald"
                ? "border-emerald-600/30 bg-emerald-50/45 dark:bg-emerald-950/20"
                : "border-rose-600/30 bg-rose-50/45 dark:bg-rose-950/20";
            return (
              <div key={node.title} className="flex items-center gap-1.5">
                <div className={`rounded-md border px-2 py-1.5 text-center ${nodeClass}`}>
                  <div className="text-[10.5px] font-bold leading-snug text-foreground">{node.title}</div>
                  {node.caption && (
                    <div className="mt-0.5 text-[9px] leading-snug text-emerald-800 dark:text-emerald-300">
                      {node.caption}
                    </div>
                  )}
                </div>
                {index < TUMOUR_FLOW.length - 1 && (
                  <ArrowRight
                    className="h-3.5 w-3.5 shrink-0 rotate-90 text-muted-foreground sm:rotate-0"
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Primary visual */}
      <ContactInhibitionIllustration />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. TumourTypesSection                                                       */
/* -------------------------------------------------------------------------- */

type TumourTone = "benign" | "malignant";

function TumourTypeCard({
  title,
  tone,
  lines,
}: {
  title: string;
  tone: TumourTone;
  lines: string[];
}) {
  const benign = tone === "benign";
  const Icon = benign ? ShieldCheck : AlertTriangle;
  const cardClass = benign
    ? "border-teal-600/35 bg-teal-50/30 dark:bg-teal-950/15"
    : "border-rose-600/45 bg-rose-50/40 shadow-sm dark:bg-rose-950/20";
  const iconClass = benign
    ? "text-teal-700 dark:text-teal-300"
    : "text-rose-700 dark:text-rose-300";
  const dotClass = benign ? "bg-teal-600/60" : "bg-rose-600/60";

  return (
    <div className={`rounded-xl border-2 p-3.5 ${cardClass}`}>
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 shrink-0 ${iconClass}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>
      <ul className="mt-2 space-y-1.5">
        {lines.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
            <span className="text-[10.5px] leading-snug text-foreground">{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const METASTASIS_STEPS = [
  "Primary malignant tumour",
  "Cells enter blood vessels",
  "Transport through blood",
  "Cells lodge in distant organs",
  "Secondary tumour formation",
];

const METASTASIS_PROCESS = [
  "Cells separate from the primary malignant tumour.",
  "Enter blood vessels.",
  "Travel to distant organs through blood.",
  "Lodge in other tissues.",
  "Initiate secondary tumours.",
];

function MetastasisDiagram() {
  return (
    <div className="mt-2.5 rounded-lg border border-violet-600/25 bg-card/70 p-2 dark:bg-violet-950/10">
      <svg
        viewBox="0 0 360 100"
        className="mx-auto h-auto w-full max-w-[340px]"
        role="img"
        aria-label="Schematic: a primary malignant tumour mass at left, cancer cells entering and flowing along a horizontal blood vessel, and a distant organ at right carrying a secondary tumour."
      >
        {/* Blood vessel walls */}
        <g className="fill-none stroke-violet-500/60 dark:stroke-violet-400/70" strokeWidth="2">
          <line x1="72" y1="40" x2="292" y2="40" />
          <line x1="72" y1="60" x2="292" y2="60" />
        </g>

        {/* Direction arrow */}
        <path
          d="M 285 34 L 294 50 L 285 66"
          className="fill-none stroke-violet-500/70 dark:stroke-violet-400"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Cancer cells flowing in blood */}
        {[100, 136, 172, 208, 244, 272].map((x) => (
          <circle key={x} cx={x} cy="50" r="4" className="fill-violet-500/80 dark:fill-violet-400" />
        ))}

        {/* Primary malignant tumour mass */}
        <g
          className="fill-violet-200 stroke-violet-600 dark:fill-violet-900/60 dark:stroke-violet-400"
          strokeWidth="1.4"
        >
          <circle cx="26" cy="50" r="11" />
          <circle cx="44" cy="40" r="9" />
          <circle cx="46" cy="60" r="10" />
          <circle cx="60" cy="50" r="8" />
        </g>

        {/* Distant organ */}
        <path
          d="M 308 30 C 336 26 350 42 348 56 C 346 72 324 76 310 68 C 300 62 300 38 308 30 Z"
          className="fill-muted/30 stroke-border"
          strokeWidth="1.6"
        />

        {/* Secondary tumour inside the organ */}
        <g
          className="fill-violet-300 stroke-violet-600 dark:fill-violet-800 dark:stroke-violet-400"
          strokeWidth="1.2"
        >
          <circle cx="324" cy="50" r="7" />
          <circle cx="334" cy="56" r="5" />
        </g>
      </svg>

      {/* Five labelled pathway steps — wrap on mobile */}
      <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
        {METASTASIS_STEPS.map((step, index) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 rounded-md border border-violet-600/30 bg-violet-50/50 px-1.5 py-1 dark:bg-violet-950/25">
              <span className="grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-violet-600 text-[8px] font-bold text-white">
                {index + 1}
              </span>
              <span className="text-[9.5px] font-semibold leading-snug text-foreground">{step}</span>
            </span>
            {index < METASTASIS_STEPS.length - 1 && (
              <ChevronRight className="h-3 w-3 shrink-0 text-violet-400" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TumourTypesSection() {
  return (
    <div className="my-5 space-y-3">
      <div>
        <p className="text-[10.5px] leading-snug text-foreground">Tumours are classified into two major types:</p>

        <div className="mt-2 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
          <TumourTypeCard
            title="Benign tumours"
            tone="benign"
            lines={[
              "Remain confined to their original location.",
              "Do not spread to other body regions.",
              "Usually cause little damage.",
            ]}
          />
          <TumourTypeCard
            title="Malignant tumours"
            tone="malignant"
            lines={[
              "Grow rapidly.",
              "Invade and destroy surrounding healthy tissues.",
              "Can spread to distant body regions.",
            ]}
          />
        </div>
      </div>

      {/* Prominent metastasis block */}
      <div className="rounded-xl border-2 border-violet-600/45 bg-violet-50/35 p-3.5 shadow-sm dark:bg-violet-950/20">
        <div className="flex items-center gap-2">
          <Waypoints className="h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
          <div className="text-sm font-bold tracking-tight text-foreground">
            Metastasis — Key Feature of Malignant Tumours
          </div>
        </div>

        <div className="mt-2 rounded-lg border border-violet-600/25 bg-card/70 px-2.5 py-2 dark:bg-violet-950/10">
          <p className="text-[10.5px] leading-snug text-foreground">
            <strong>Metastasis</strong> = Spread of cancer cells from the primary tumour to distant organs, where they
            form secondary tumours.
          </p>
        </div>

        <MetastasisDiagram />

        {/* Process */}
        <div className="mt-3">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Process</div>
          <ol className="mt-1.5 space-y-1.5">
            {METASTASIS_PROCESS.map((step, index) => (
              <li key={step} className="flex items-start gap-2">
                <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-violet-600/40 bg-violet-50/60 text-[8.5px] font-bold text-violet-900 dark:bg-violet-950/25 dark:text-violet-200">
                  {index + 1}
                </span>
                <span className="text-[10.5px] leading-snug text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Additional feature */}
        <div className="mt-3 rounded-lg border border-violet-600/30 bg-violet-50/40 px-2.5 py-2 dark:bg-violet-950/25">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Additional feature
          </div>
          <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
            Malignant cells compete with normal cells for essential nutrients, affecting their growth and survival.
          </p>
        </div>
      </div>
    </div>
  );
}
