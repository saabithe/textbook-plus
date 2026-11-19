import { Highlight } from "@/components/content/Highlight";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/* -------------------------------------------------------------------------- */
/* 1. RNA as the first genetic material                                        */
/* -------------------------------------------------------------------------- */

const ESSENTIAL_FUNCTIONS: { lead: string; detail: string }[] = [
  {
    lead: "Store genetic information",
    detail: "act as genetic material.",
  },
  {
    lead: "Catalyse biochemical reactions",
    detail: "act as a biological catalyst (ribozyme).",
  },
];

/* -------------------------------------------------------------------------- */
/* 1.1 Importance of RNA in early life                                         */
/* -------------------------------------------------------------------------- */

const LIFE_PROCESSES: string[] = [
  "Metabolism",
  "Translation",
  "Splicing",
  "Catalytic biochemical reactions",
];

const DUAL_FUNCTIONS: { title: string; detail: string }[] = [
  {
    title: "Genetic material",
    detail: "Stores genetic information",
  },
  {
    title: "Catalyst",
    detail: "Catalyses biochemical reactions",
  },
];

/* -------------------------------------------------------------------------- */
/* 1.2 Evolution of DNA from RNA                                               */
/* -------------------------------------------------------------------------- */

const RNA_LIMITATIONS: string[] = [
  "RNA is chemically reactive and relatively unstable.",
  "Its catalytic nature and chemical properties make it less suitable for long-term storage of genetic information.",
];

const DNA_EVOLUTION: string[] = [
  "DNA evolved from RNA through chemical modifications.",
  "These modifications made DNA less chemically reactive and more stable.",
  "Double-stranded structure provides additional stability.",
  "Complementary base pairing allows damaged DNA to be repaired using the other strand.",
];

type StageTone = "rna" | "transition" | "dna";

interface StageStyle {
  box: string;
  title: string;
  chip: string;
}

const STAGE_STYLES: Record<StageTone, StageStyle> = {
  rna: {
    box: "border-emerald-600/35 bg-emerald-50/50 dark:bg-emerald-950/25",
    title: "text-emerald-800 dark:text-emerald-200",
    chip:
      "border-emerald-600/30 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200",
  },
  transition: {
    box: "border-amber-600/35 bg-amber-50/50 dark:bg-amber-950/25",
    title: "text-amber-800 dark:text-amber-200",
    chip: "",
  },
  dna: {
    box: "border-blue-600/35 bg-blue-50/50 dark:bg-blue-950/25",
    title: "text-blue-800 dark:text-blue-200",
    chip:
      "border-blue-600/30 bg-blue-50 text-blue-800 dark:bg-blue-950/30 dark:text-blue-200",
  },
};

interface ProgressionStageProps {
  title: string;
  tone: StageTone;
  tags?: string[];
}

function ProgressionStage({ title, tone, tags }: ProgressionStageProps) {
  const style = STAGE_STYLES[tone];
  return (
    <div className={`flex-1 rounded-xl border p-3.5 ${style.box}`}>
      <div className={`text-center text-sm font-bold tracking-tight ${style.title}`}>
        {title}
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-md border px-1.5 py-0.5 text-[0.66rem] font-semibold leading-snug ${style.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ProgressionArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center py-1 sm:py-0" aria-hidden>
      <span className="block rotate-90 text-2xl leading-none text-amber-600 dark:text-amber-400 sm:rotate-0">
        →
      </span>
    </div>
  );
}

/**
 * RnaWorld — §5.3: RNA's dual role as the first genetic material and catalyst,
 * its involvement in early life processes, and the evolutionary progression
 * from RNA to DNA. All headings are owned by page.tsx; this block emits none.
 */
export function RnaWorld() {
  return (
    <section className="my-6 space-y-8">
      {/* 1. RNA as the first genetic material */}
      <div>
        <p className="text-sm leading-relaxed text-foreground">
          <Highlight>RNA is considered the first genetic material</Highlight>{" "}
          because it could perform two essential functions:
        </p>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          {ESSENTIAL_FUNCTIONS.map((item) => (
            <li key={item.lead}>
              <strong>{item.lead}</strong> → {item.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* 1.1 Importance of RNA in early life */}
      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">
          1.1 Importance of RNA in Early Life
        </div>
        <p className="mt-1 text-sm leading-relaxed text-foreground">
          RNA is involved in several essential life processes:
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {LIFE_PROCESSES.map((process) => (
            <div
              key={process}
              className="rounded-xl border border-border bg-card p-3.5 text-center text-sm font-semibold leading-snug text-foreground"
            >
              {process}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-card p-4">
          <div className={EYEBROW}>Dual functionality of RNA</div>
          <div className="mt-3">
            {/* central RNA node */}
            <div className="mx-auto w-fit rounded-xl border border-emerald-600/35 bg-emerald-50 px-6 py-2 text-center dark:bg-emerald-950/25">
              <span className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
                RNA
              </span>
            </div>

            {/* connectors: mobile stem → stacked cards */}
            <div className="mx-auto flex h-6 justify-center sm:hidden" aria-hidden>
              <div className="h-full w-px bg-muted-foreground/45" />
            </div>

            {/* connectors: sm+ central stem → split bar → two drops */}
            <div
              className="relative mx-auto hidden h-8 w-full max-w-md sm:block"
              aria-hidden
            >
              <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-muted-foreground/45" />
              <div className="absolute left-1/4 right-1/2 top-1/2 h-px bg-emerald-500/55" />
              <div className="absolute left-1/2 right-1/4 top-1/2 h-px bg-emerald-500/55" />
              <div className="absolute left-1/4 top-1/2 h-1/2 w-px -translate-x-1/2 bg-emerald-500/55" />
              <div className="absolute right-1/4 top-1/2 h-1/2 w-px translate-x-1/2 bg-emerald-500/55" />
            </div>

            {/* the two branches, each label kept with its own card */}
            <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
              {DUAL_FUNCTIONS.map((branch) => (
                <div
                  key={branch.title}
                  className="rounded-xl border border-emerald-600/30 bg-emerald-50/40 p-3.5 dark:bg-emerald-950/20"
                >
                  <div className="text-sm font-bold tracking-tight text-emerald-800 dark:text-emerald-200">
                    {branch.title}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    {branch.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 1.2 Evolution of DNA from RNA */}
      <div>
        <div className="text-sm font-bold tracking-tight text-foreground">
          1.2 Evolution of DNA from RNA
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>Limitation of RNA</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              {RNA_LIMITATIONS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={EYEBROW}>Evolution of DNA</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              {DNA_EVOLUTION.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-card p-4">
          <div className={EYEBROW}>Evolutionary progression</div>
          <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <ProgressionStage
              title="RNA"
              tone="rna"
              tags={["dual functionality", "lower stability"]}
            />
            <ProgressionArrow />
            <ProgressionStage title="Chemical modifications" tone="transition" />
            <ProgressionArrow />
            <ProgressionStage
              title="DNA"
              tone="dna"
              tags={["double-stranded", "stability", "repair"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
