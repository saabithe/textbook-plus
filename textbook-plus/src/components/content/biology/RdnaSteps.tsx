import { ArrowDown, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * RdnaSteps — the eight sequential steps of recombinant DNA technology.
 *
 * The overview card names all eight at a glance; the timeline below is the
 * same eight, each with its own mechanism and a purpose-built visual. Accents
 * follow the chapter: indigo = DNA manipulation, violet = enzyme, teal = living
 * cell, amber = the product or gene that comes out.
 */

const STEPS = [
  { n: "1", short: "Isolation of DNA", title: "Isolation of DNA from cell", tag: "Gene of interest" },
  {
    n: "2",
    short: "Fragmentation by RE",
    title: "Fragmentation of DNA by restriction enzymes",
    tag: "RE",
  },
  {
    n: "3",
    short: "Isolation of IG by AGE",
    title: "Isolation of desirable gene by agarose gel electrophoresis (AGE)",
    tag: "AGE",
  },
  { n: "4", short: "Amplification by PCR", title: "Amplification of gene of interest by PCR", tag: "PCR" },
  {
    n: "5",
    short: "Joining with vector",
    title: "Joining of DNA with vector (= recombinant DNA)",
    tag: "DNA ligase",
  },
  { n: "6", short: "Transfer to host", title: "Transfer of rDNA into host cell", tag: "Host cell" },
  { n: "7", short: "Culturing the host", title: "Culturing host cell in optimum conditions", tag: "Culture" },
  {
    n: "8",
    short: "Separation & purification",
    title: "Separation and purification of product",
    tag: "Downstream processing",
  },
];

export function RdnaStepsOverview() {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-3.5 border-b border-border bg-muted/30 px-4 py-3.5 sm:px-5">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-indigo-600/30 bg-indigo-50 text-2xl font-bold tabular-nums text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-200">
          8
        </span>
        <div className="min-w-0">
          <div className="text-base font-semibold tracking-tight text-foreground">Sequential steps</div>
          <div className="text-xs leading-snug text-muted-foreground">
            From isolating the desired gene to separating and purifying the final product.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 px-4 py-3 sm:px-5">
        {STEPS.map((step) => (
          <span
            key={step.n}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/30 px-2.5 py-0.5 text-xs text-foreground"
          >
            <span className="text-[10px] font-bold tabular-nums text-muted-foreground">{step.n}</span>
            {step.short}
          </span>
        ))}
      </div>
    </div>
  );
}

export function RdnaStepsTimeline() {
  return (
    <div className="my-5" role="list">
      {STEPS.map((step, index) => (
        <div key={step.n} className="relative pb-4 pl-10 last:pb-0" role="listitem">
          {index < STEPS.length - 1 && (
            <span className="absolute bottom-0 left-[13px] top-8 w-px bg-border" aria-hidden />
          )}

          <span className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-indigo-600/30 bg-card text-[11px] font-bold tabular-nums text-indigo-800 dark:text-indigo-300">
            {step.n}
          </span>

          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <div className="text-sm font-semibold tracking-tight text-foreground">{step.title}</div>
            <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {step.tag}
            </span>
          </div>

          <div className="mt-2">{STEP_BODY[index]}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ step 1 */

function StepSource() {
  return (
    <>
      <div className="max-w-sm">
        <ChainNode label="Organism" accent={false}>
          Human
        </ChainNode>
        <ChainArrow />
        <ChainNode label="Organ" accent={false}>
          Pancreas
        </ChainNode>
        <ChainArrow />
        <ChainNode label="Cell" accent={false}>
          β-cell
        </ChainNode>
        <ChainArrow />
        <ChainNode label="Gene of interest (IG)" accent>
          Insulin gene
        </ChainNode>
      </div>

      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
        <span className="font-medium text-foreground">Gene of Interest (IG)</span> — the desired gene to be isolated.
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ step 2 */

function StepCutting() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 items-center justify-center rounded-lg border-2 border-violet-600/35 bg-violet-50 px-2.5 text-base font-bold tracking-tight text-violet-800 dark:bg-violet-950/30 dark:text-violet-200">
            RE
          </span>
          <div className="min-w-0">
            <div className="text-sm font-semibold leading-snug text-foreground">Restriction enzymes</div>
            <span className="mt-0.5 inline-flex items-center rounded border border-amber-600/30 bg-amber-50 px-1.5 py-px text-[10px] font-semibold text-amber-900 dark:bg-amber-950/30 dark:text-amber-300">
              Molecular scissors
            </span>
          </div>
        </div>

        <span className="hidden h-9 w-px shrink-0 bg-border sm:block" aria-hidden />

        <div className="min-w-0 flex-1">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Function</div>
          <div className="text-sm leading-snug text-foreground">Cut DNA into smaller fragments</div>
        </div>
      </div>

      <div className="mt-2.5 flex items-center gap-1.5 text-violet-700/70 dark:text-violet-300/70" aria-hidden>
        <span className="h-0.5 w-12 rounded bg-current" />
        <Scissors className="h-3.5 w-3.5" />
        <span className="h-0.5 w-12 rounded bg-current" />
        <span className="h-0.5 w-6 rounded bg-current opacity-50" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ step 3 */

function StepGel() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm font-semibold leading-snug text-foreground">
          Agarose gel electrophoresis (AGE)
        </div>
        <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Technique
        </span>
      </div>

      <div className="mt-2.5 flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-2">
        <Box>DNA fragments</Box>
        <FlowArrow />
        <Box accent="indigo">
          <div className="font-semibold">Separated by size</div>
          <div className="text-[10px] font-normal text-muted-foreground">Central principle of AGE</div>
        </Box>
        <FlowArrow />
        <Box accent="amber">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Output
          </div>
          <div className="font-semibold">Selected fragment → IG</div>
        </Box>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ step 4 */

function StepPcr() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch sm:gap-2">
        <Box className="sm:flex-1">Target DNA / IG</Box>
        <FlowArrow />
        <div className="flex-1 rounded-lg border-2 border-indigo-600/35 bg-indigo-50/60 px-3 py-2 text-center dark:bg-indigo-950/25">
          <div className="text-base font-bold tracking-tight text-indigo-900 dark:text-indigo-200">PCR</div>
          <div className="text-[10px] leading-snug text-indigo-800/80 dark:text-indigo-300/80">
            Polymerase Chain Reaction
          </div>
        </div>
        <FlowArrow />
        <Box accent="amber" className="sm:flex-1">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Output
          </div>
          <div className="font-semibold">Multiple copies of target DNA / IG</div>
        </Box>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ step 5 */

function StepLigation() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_auto_1fr]">
        <Box className="sm:text-right">Vector DNA</Box>
        <div className="flex justify-center text-sm font-semibold text-muted-foreground" aria-hidden>
          +
        </div>
        <Box>Gene of Interest</Box>
      </div>

      <DownArrow label="DNA ligase" />

      <div className="rounded-lg border-2 border-violet-600/35 bg-violet-50/60 px-3 py-2 text-center dark:bg-violet-950/25">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
          Enzyme
        </div>
        <div className="text-sm font-semibold text-violet-950 dark:text-violet-100">DNA ligase</div>
        <div className="mt-1 inline-flex items-center rounded-full bg-violet-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          Molecular glue
        </div>
      </div>

      <DownArrow />

      <Box accent="amber" className="text-center">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          Output
        </div>
        <div className="font-semibold">Recombinant DNA (rDNA)</div>
      </Box>
    </div>
  );
}

/* ------------------------------------------------------------------ step 6 */

function StepTransfer() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-2">
        <div className="flex-1 rounded-lg border border-indigo-600/30 bg-indigo-50/50 px-3 py-2 dark:bg-indigo-950/25">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Vector
          </div>
          <div className="text-sm font-semibold text-foreground">rDNA</div>
        </div>

        <FlowArrow label="introduce" />

        <div className="flex-1 rounded-lg border-2 border-dashed border-teal-600/40 bg-teal-50/40 px-3 py-2 dark:bg-teal-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Host cell
          </div>
          <div className="text-sm font-semibold text-foreground">Bacteria</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ step 7 */

function StepCulture() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Transformed host cells grown under optimum conditions
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-border border-l-2 border-l-teal-500/60 bg-muted/20 px-2.5 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Outcome 1
          </div>
          <div className="mt-0.5 text-sm font-medium leading-snug text-foreground">
            Growth of transformed host cells
          </div>
        </div>

        <div className="rounded-md border border-border border-l-2 border-l-amber-500/60 bg-muted/20 px-2.5 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Outcome 2
          </div>
          <div className="mt-0.5 text-sm font-medium leading-snug text-foreground">
            Expression of the desired insulin gene
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ step 8 */

function StepDownstream() {
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="rounded-md border border-indigo-600/30 bg-indigo-50/50 px-3 py-2 dark:bg-indigo-950/25">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Scale-up
        </div>
        <div className="text-sm font-semibold text-foreground">Bioreactors</div>
        <div className="text-xs leading-snug text-muted-foreground">Scale-up of production</div>
      </div>

      <DownArrow />

      <div className="rounded-md border-2 border-violet-600/35 bg-violet-50/50 px-3 py-2 dark:bg-violet-950/25">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
          Final operations
        </div>
        <div className="text-sm font-semibold text-foreground">Downstream processing</div>
        <div className="text-xs leading-snug text-muted-foreground">Separation + purification</div>
      </div>

      <DownArrow />

      <div className="rounded-md border-2 border-amber-600/40 bg-amber-50/60 px-3 py-2 dark:bg-amber-950/25">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          Product
        </div>
        <div className="text-sm font-semibold text-foreground">Target human protein product</div>
      </div>
    </div>
  );
}

const STEP_BODY = [
  <StepSource key="1" />,
  <StepCutting key="2" />,
  <StepGel key="3" />,
  <StepPcr key="4" />,
  <StepLigation key="5" />,
  <StepTransfer key="6" />,
  <StepCulture key="7" />,
  <StepDownstream key="8" />,
];

/* ------------------------------------------------------------------ atoms */

function ChainNode({
  label,
  accent = false,
  children,
}: {
  label: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border px-2.5 py-1.5",
        accent
          ? "border-2 border-amber-600/40 bg-amber-50/60 dark:bg-amber-950/25"
          : "border-border bg-muted/25",
      )}
    >
      <div
        className={cn(
          "text-[9px] font-semibold uppercase tracking-[0.08em]",
          accent ? "text-amber-800 dark:text-amber-300" : "text-muted-foreground",
        )}
      >
        {label}
      </div>
      <div className="text-sm font-medium leading-snug text-foreground">{children}</div>
    </div>
  );
}

function ChainArrow() {
  return (
    <div className="flex justify-center py-0.5 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5" />
    </div>
  );
}

function Box({
  children,
  accent,
  className,
}: {
  children: React.ReactNode;
  accent?: "indigo" | "amber";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border px-2.5 py-1.5",
        accent === "indigo" && "border-indigo-600/30 bg-indigo-50/50 dark:bg-indigo-950/25",
        accent === "amber" && "border-amber-600/40 bg-amber-50/60 dark:bg-amber-950/25",
        !accent && "border-border bg-muted/25",
        className,
      )}
    >
      <div className="text-sm leading-snug text-foreground">{children}</div>
    </div>
  );
}

/** Horizontal on wide screens, vertical when the flow stacks. */
function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-0.5 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
      <span className="hidden sm:inline-flex sm:items-center sm:gap-1.5">
        <span className="h-px w-4 bg-current opacity-40" />
        {label && <span className="text-[9px] uppercase tracking-[0.08em]">{label}</span>}
        <span className="text-xs">→</span>
      </span>
      {label && <span className="text-[10px] sm:hidden">{label}</span>}
    </div>
  );
}

/** Always vertical — for flows that read top to bottom at every width. */
function DownArrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-1.5 py-1 text-muted-foreground" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5" />
      {label && <span className="text-[9px] uppercase tracking-[0.08em]">{label}</span>}
    </div>
  );
}
