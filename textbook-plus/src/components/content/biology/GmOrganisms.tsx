import { ArrowDown } from "lucide-react";

/**
 * GmOrganisms — what a GMO is, what GM crops buy you, and what else GM
 * technology can be aimed at.
 *
 * The definition card marks the defining feature (genes altered by
 * manipulation) rather than decorating the whole sentence, and the four
 * organism categories stay as four equal labels: the note gives no ranking
 * between them.
 */

const ORGANISMS = [
  { name: "Plants", dot: "bg-teal-600/70" },
  { name: "Bacteria", dot: "bg-indigo-600/70" },
  { name: "Fungi", dot: "bg-amber-600/70" },
  { name: "Animals", dot: "bg-violet-600/70" },
];

export function GmoDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-teal-600/35 bg-teal-50/40 p-4 dark:bg-teal-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Definition
      </div>

      <div className="mt-1 text-base font-bold tracking-tight text-foreground">
        Genetically Modified Organisms (GMOs)
      </div>

      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        Plants, bacteria, fungi and animals whose{" "}
        <span className="border-b-2 border-teal-600/50 pb-0.5 font-semibold">
          genes have been altered through genetic manipulation
        </span>
        .
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Organisms
        </span>
        {ORGANISMS.map((organism) => (
          <span
            key={organism.name}
            className="inline-flex items-center gap-1.5 rounded border border-border bg-card px-1.5 py-0.5 text-[11px] font-medium text-foreground"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${organism.dot}`} aria-hidden />
            {organism.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- advantages */

const STRESSES = ["Cold", "Drought", "Salt", "Heat"];

interface Advantage {
  n: string;
  title: string;
  body: string;
  chips?: string[];
  example?: string;
}

const ADVANTAGES: Advantage[] = [
  {
    n: "1",
    title: "Abiotic Stress Tolerance",
    body: "Increased tolerance to:",
    chips: STRESSES,
  },
  {
    n: "2",
    title: "Pest Resistance",
    body: "Reduces reliance on chemical pesticides.",
  },
  {
    n: "3",
    title: "Post-Harvest Management",
    body: "Helps reduce post-harvest losses.",
  },
  {
    n: "4",
    title: "Mineral Efficiency",
    body: "Increased efficiency of mineral usage, preventing early exhaustion of soil fertility.",
  },
  {
    n: "5",
    title: "Nutritional Enhancement",
    body: "Enhanced nutritional value.",
    example: "Golden Rice → Vitamin A-enriched rice",
  },
];

export function GmAdvantages() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3" role="list">
      {ADVANTAGES.map((advantage) => (
        <div
          key={advantage.n}
          className="flex flex-col rounded-xl border border-border bg-card p-3.5"
          role="listitem"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-indigo-600/30 bg-indigo-50 text-[11px] font-bold tabular-nums text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300">
              {advantage.n}
            </span>
            <div className="text-sm font-semibold leading-tight tracking-tight text-foreground">
              {advantage.title}
            </div>
          </div>

          <div className="mt-2 text-xs leading-relaxed text-foreground/80">{advantage.body}</div>

          {advantage.chips && (
            <div className="mt-2 flex flex-wrap gap-1">
              {advantage.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] text-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}

          {advantage.example && (
            <div className="mt-auto pt-2.5">
              <div className="rounded-md border border-amber-600/30 bg-amber-50/60 px-2 py-1.5 dark:bg-amber-950/25">
                <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
                  Example
                </div>
                <div className="mt-0.5 text-[11px] font-medium leading-snug text-foreground">
                  {advantage.example}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ tailor-made */

const OUTPUTS = ["Starches", "Fuels", "Pharmaceuticals"];

export function TailorMadeCrops() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="mx-auto w-full max-w-[15rem] rounded-lg border-2 border-indigo-600/35 bg-indigo-50/50 px-4 py-3 text-center dark:bg-indigo-950/25">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Source
        </div>
        <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">GM Technology</div>
      </div>

      <div className="mx-auto mt-1.5 h-3 w-px bg-border" aria-hidden />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {OUTPUTS.map((output) => (
          <div key={output} className="flex flex-col items-center">
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            <div className="mt-1 w-full rounded-lg border border-amber-600/30 bg-amber-50/50 px-3 py-2.5 text-center dark:bg-amber-950/20">
              <div className="text-xs font-semibold tracking-tight text-foreground">{output}</div>
            </div>
          </div>
        ))}
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Specialised crops produced to supply industries with raw materials.
      </figcaption>
    </figure>
  );
}
