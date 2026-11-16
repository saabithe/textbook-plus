import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * Ligation — joining the cut fragment to the cut vector.
 *
 * The three stages are drawn as separate panels so they stack cleanly on a
 * phone; the formula underneath is the takeaway the brief asks for.
 */

const PRINCIPLE = [
  "The desired DNA fragment (dG) and vector plasmid are cut using the same restriction endonuclease.",
  "This produces complementary sticky ends on both DNA molecules.",
  "The cut DNA fragment and vector are mixed with DNA ligase.",
  "DNA ligase joins the DNA fragments, producing recombinant DNA (rDNA).",
];

export function LigationPrinciple() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="space-y-1.5">
        {PRINCIPLE.map((line, index) => (
          <div key={line} className="flex items-start gap-2">
            <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-muted/40 text-[10px] font-bold tabular-nums text-muted-foreground">
              {index + 1}
            </span>
            <div className="text-xs leading-relaxed text-foreground">{line}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-border pt-2.5">
        <span className="rounded bg-violet-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
          Molecular glue
        </span>
        <span className="text-xs leading-relaxed text-foreground">
          <strong className="font-semibold">DNA ligase</strong> joins the desired DNA fragment with the vector DNA.
        </span>
      </div>
    </div>
  );
}

const STAGES = [
  {
    n: "1",
    title: "Cut fragment and cut vector",
    detail: "Complementary sticky ends on both molecules.",
    art: <CutEndsArt />,
  },
  {
    n: "2",
    title: "DNA ligase joins them",
    detail: "The enzyme seals the fragment into the vector.",
    art: <JoinedArt />,
  },
  {
    n: "3",
    title: "Circular recombinant plasmid",
    detail: "Recombinant DNA (rDNA) is formed.",
    art: <CircleArt />,
  },
];

export function LigationStages() {
  return (
    <div className="my-5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {STAGES.map((stage) => (
          <div key={stage.n} className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-indigo-600/30 bg-indigo-50 text-[10px] font-bold tabular-nums text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300">
                {stage.n}
              </span>
              <div className="text-xs font-semibold leading-tight text-foreground">{stage.title}</div>
            </div>

            <div className="mt-2">{stage.art}</div>

            <div className="mt-1 text-[11px] leading-snug text-muted-foreground">{stage.detail}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-1 rounded-lg border-2 border-emerald-600/40 bg-emerald-50/60 px-3 py-2 dark:bg-emerald-950/25 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1.5">
        <span className="w-fit rounded border border-border bg-card px-2 py-0.5 text-[11px] font-medium text-foreground">
          Desired DNA (dG) + Vector
        </span>
        <span className="text-muted-foreground" aria-hidden>
          <ArrowDown className="h-3 w-3 sm:hidden" />
          <ArrowRight className="hidden h-3 w-3 sm:block" />
        </span>
        <span className="inline-flex w-fit items-center gap-1 rounded border border-violet-600/30 bg-violet-50 px-2 py-0.5 text-[11px] font-semibold text-violet-900 dark:bg-violet-950/30 dark:text-violet-300">
          DNA ligase
        </span>
        <span className="text-muted-foreground" aria-hidden>
          <ArrowDown className="h-3 w-3 sm:hidden" />
          <ArrowRight className="hidden h-3 w-3 sm:block" />
        </span>
        <span className="w-fit rounded border-2 border-emerald-600/40 bg-card px-2 py-0.5 text-[11px] font-bold text-foreground">
          Recombinant DNA (rDNA)
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- art */

function CutEndsArt() {
  return (
    <svg viewBox="0 0 150 96" className="w-full" aria-hidden>
      {/* fragment */}
      <line x1="6" y1="36" x2="56" y2="36" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="6" y1="48" x2="44" y2="48" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />

      {/* vector, opened */}
      <line x1="70" y1="36" x2="144" y2="36" className="stroke-teal-600" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="58" y1="48" x2="144" y2="48" className="stroke-teal-600" strokeWidth="2.4" strokeLinecap="round" />

      <text x="6" y="66" className="fill-muted-foreground text-[7px]">
        fragment
      </text>
      <text x="120" y="66" className="fill-muted-foreground text-[7px]">
        vector
      </text>
      <text x="75" y="24" textAnchor="middle" className="fill-amber-700 text-[6.5px] font-semibold dark:fill-amber-300">
        complementary ends
      </text>
    </svg>
  );
}

function JoinedArt() {
  return (
    <svg viewBox="0 0 150 96" className="w-full" aria-hidden>
      {/* continuous duplex with two nicks */}
      <line x1="6" y1="36" x2="56" y2="36" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="56" y1="36" x2="144" y2="36" className="stroke-teal-600" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="6" y1="48" x2="44" y2="48" className="stroke-indigo-500" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="44" y1="48" x2="144" y2="48" className="stroke-teal-600" strokeWidth="2.4" strokeLinecap="round" />

      {/* hydrogen bonds across the annealed overhang */}
      {[48, 52].map((x) => (
        <line key={x} x1={x} y1="38" x2={x} y2="46" className="stroke-violet-400" strokeWidth="1.2" strokeDasharray="2 2" />
      ))}

      {/* enzyme */}
      <circle cx="75" cy="72" r="12" className="fill-violet-100 stroke-violet-600/50 dark:fill-violet-950/40" strokeWidth="1.2" />
      <text x="75" y="75" textAnchor="middle" className="fill-violet-800 text-[7px] font-bold dark:fill-violet-200">
        ligase
      </text>
      <line x1="75" y1="60" x2="75" y2="52" className="stroke-violet-500" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  );
}

function CircleArt() {
  return (
    <svg viewBox="0 0 150 96" className="w-full" aria-hidden>
      <circle cx="70" cy="48" r="30" className="fill-none stroke-teal-600" strokeWidth="2.4" />
      <path
        d="M 94.6 30.8 A 30 30 0 0 1 94.6 65.2"
        className="fill-none stroke-emerald-500"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <text x="112" y="46" className="fill-emerald-700 text-[7px] font-semibold dark:fill-emerald-300">
        insert
      </text>
      <text x="112" y="56" className="fill-muted-foreground text-[7px]">
        vector
      </text>
      <line x1="104" y1="48" x2="110" y2="48" className="stroke-emerald-600/60" strokeWidth="1" />
    </svg>
  );
}


