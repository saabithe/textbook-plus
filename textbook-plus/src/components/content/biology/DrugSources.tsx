import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  GitBranch,
  Leaf,
  Stethoscope,
} from "lucide-react";
import { Highlight } from "@/components/content/Highlight";

/**
 * DrugSources — the plant-derived drugs of abuse block: a three-branch source
 * classification, the heroin vs morphine comparison, and the cannabinoid
 * source → products → mechanism/effects sequence.
 *
 * amber / rose = heroin, teal / emerald = morphine,
 * green / emerald = cannabinoids and plant sources.
 */

/* -------------------------------------------------------------------------- */
/* shared helpers                                                             */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. CommonlyAbusedDrugs                                                     */
/* -------------------------------------------------------------------------- */

const DRUG_BRANCHES: { title: string; plant: string; tone: "amber" | "green" | "rose" }[] = [
  { title: "Opioids", plant: "Papaver somniferum", tone: "amber" },
  { title: "Cannabinoids", plant: "Cannabis sativa", tone: "green" },
  { title: "Coca alkaloids", plant: "Erythroxylum coca", tone: "rose" },
];

const BRANCH_TONES: Record<
  "amber" | "green" | "rose",
  { border: string; bg: string; title: string }
> = {
  amber: {
    border: "border-amber-600/35",
    bg: "bg-amber-50/35 dark:bg-amber-950/20",
    title: "text-amber-900 dark:text-amber-200",
  },
  green: {
    border: "border-green-600/35",
    bg: "bg-green-50/35 dark:bg-green-950/20",
    title: "text-green-900 dark:text-green-200",
  },
  rose: {
    border: "border-rose-600/35",
    bg: "bg-rose-50/35 dark:bg-rose-950/20",
    title: "text-rose-900 dark:text-rose-200",
  },
};

function DrugBranchNode({ title, plant, tone }: (typeof DRUG_BRANCHES)[number]) {
  const t = BRANCH_TONES[tone];
  return (
    <div className={`rounded-lg border-2 p-2.5 text-center ${t.border} ${t.bg}`}>
      <div className={`text-[11px] font-bold ${t.title}`}>{title}</div>
      <div className="mt-1.5 border-t border-border pt-1.5">
        <Eyebrow>Plant source</Eyebrow>
        <div className="mt-0.5 text-[10.5px] leading-snug text-foreground">
          <em>{plant}</em>
        </div>
      </div>
    </div>
  );
}

export function CommonlyAbusedDrugs() {
  return (
    <div className="my-5 space-y-4">
      <div className="space-y-1.5">
        <p className="text-[10.5px] leading-snug text-foreground">
          Drug and alcohol abuse has been increasing, particularly among young people.
        </p>
        <p className="text-[10.5px] leading-snug text-foreground">
          Many commonly abused drugs are obtained from flowering plants; some are derived from fungi.
        </p>
      </div>

      <div>
        <div className="mx-auto w-fit rounded-lg border-2 border-emerald-600/45 bg-emerald-50/55 px-5 py-1.5 text-center dark:bg-emerald-950/25">
          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-900 dark:text-emerald-200">
            Commonly abused drugs
          </span>
        </div>

        {/* straight-line connectors: vertical spine on mobile, branching tree on sm */}
        <div className="relative mx-auto h-8 w-full max-w-md" aria-hidden>
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-emerald-500/55 sm:hidden" />
          <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-emerald-500/55 max-sm:hidden" />
          <div className="absolute left-[16.6%] right-[16.6%] top-1/2 h-px bg-emerald-500/55 max-sm:hidden" />
          <div className="absolute left-[16.6%] top-1/2 h-1/2 w-px -translate-x-1/2 bg-emerald-500/55 max-sm:hidden" />
          <div className="absolute left-1/2 top-1/2 h-1/2 w-px -translate-x-1/2 bg-emerald-500/55 max-sm:hidden" />
          <div className="absolute right-[16.6%] top-1/2 h-1/2 w-px translate-x-1/2 bg-emerald-500/55 max-sm:hidden" />
        </div>

        <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-3">
          {DRUG_BRANCHES.map((branch, index) => (
            <div key={branch.title}>
              {index > 0 && (
                <div className="flex justify-center py-1 sm:hidden" aria-hidden>
                  <ArrowDown className="h-3.5 w-3.5 text-emerald-600/70 dark:text-emerald-400" />
                </div>
              )}
              <DrugBranchNode {...branch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. OpioidsSection                                                          */
/* -------------------------------------------------------------------------- */

const HEROIN_ROWS: [string, ReactNode][] = [
  ["Chemical name", "Diacetylmorphine"],
  ["Appearance", "White, odourless, bitter crystalline compound"],
  ["Source", "Morphine extracted from poppy plant latex"],
  ["Plant", <em key="plant">Papaver somniferum</em>],
  ["Nature", "Depressant"],
];

const HEROIN_EFFECTS: ReactNode[] = [
  <>
    Can be <strong>snorted or injected</strong>.
  </>,
  <>
    Acts as a <strong>depressant</strong>.
  </>,
  <>
    <strong>Slows down</strong> body functions.
  </>,
];

const HEROIN_FLOW = ["Poppy latex", "Morphine", "Acetylation", "Heroin"];

function HeroinCard() {
  return (
    <div className="rounded-xl border-2 border-rose-600/45 bg-rose-50/40 p-3.5 shadow-sm dark:bg-rose-950/20">
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-rose-600/45 bg-rose-50/70 text-[10px] font-bold text-rose-900 dark:bg-rose-950/30 dark:text-rose-200">
          ①
        </span>
        <AlertTriangle className="h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">Heroin — Smack</span>
      </div>

      {/* Feature / Description table */}
      <div className="mt-2.5 overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-[minmax(5rem,0.8fr)_minmax(0,1.2fr)] border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <div className="px-2 py-1.5">Feature</div>
          <div className="px-2 py-1.5">Description</div>
        </div>
        {HEROIN_ROWS.map(([feature, description]) => (
          <div
            key={feature}
            className="grid grid-cols-[minmax(5rem,0.8fr)_minmax(0,1.2fr)] border-b border-border last:border-b-0"
          >
            <div className="px-2 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">{feature}</div>
            <div className="px-2 py-1.5 text-[10.5px] leading-snug text-foreground/85">{description}</div>
          </div>
        ))}
      </div>

      {/* Production origin */}
      <div className="mt-2.5 rounded-lg border border-amber-600/30 bg-amber-50/40 px-2.5 py-2 dark:bg-amber-950/20">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          Production origin
        </div>
        <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
          <strong>Heroin is obtained by acetylation of morphine.</strong>
        </p>
      </div>

      {/* Effects and administration */}
      <div className="mt-2.5">
        <Eyebrow>Effects and administration</Eyebrow>
        <ul className="mt-1.5 space-y-1.5">
          {HEROIN_EFFECTS.map((effect, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{effect}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Production flow */}
      <div className="mt-2.5">
        <Eyebrow>Production flow</Eyebrow>
        <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
          {HEROIN_FLOW.map((node, index) => (
            <div key={node} className="flex items-center gap-1.5">
              <span className="rounded-md border border-rose-600/30 bg-rose-50/50 px-2 py-1 text-[9.5px] font-semibold leading-snug text-foreground dark:bg-rose-950/25">
                {node}
              </span>
              {index < HEROIN_FLOW.length - 1 && (
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 rotate-90 text-rose-500/70 sm:rotate-0"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MorphineCard() {
  return (
    <div className="rounded-xl border-2 border-teal-600/35 bg-teal-50/35 p-3.5 dark:bg-teal-950/20">
      <div className="flex items-center gap-2">
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-teal-600/45 bg-teal-50/70 text-[10px] font-bold text-teal-900 dark:bg-teal-950/30 dark:text-teal-200">
          ②
        </span>
        <Stethoscope className="h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">Morphine</span>
      </div>

      <div className="mt-2.5 rounded-lg border border-border bg-card px-2.5 py-2">
        <p className="text-[10.5px] leading-snug text-foreground">A highly effective sedative and painkiller.</p>
      </div>

      <div className="mt-2.5 rounded-lg border-2 border-teal-600/35 bg-teal-50/45 px-2.5 py-2 dark:bg-teal-950/25">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
          Medical use
        </div>
        <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
          <Highlight>Used for patients undergoing surgery.</Highlight>
        </p>
      </div>
    </div>
  );
}

export function OpioidsSection() {
  return (
    <div className="my-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
          A.
        </span>
        <span className="text-sm font-bold tracking-tight text-foreground">Opioids</span>
      </div>

      <div className="flex items-start gap-2.5 rounded-xl border-2 border-amber-600/30 bg-amber-50/35 p-3.5 dark:bg-amber-950/15">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
        <p className="text-[10.5px] leading-snug text-foreground">
          Opioids bind to specific <strong>opioid receptors</strong> present in the central nervous system (CNS) and
          gastrointestinal tract.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <HeroinCard />
        <MorphineCard />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. CannabinoidsSection                                                     */
/* -------------------------------------------------------------------------- */

const CANNABINOID_PRODUCTS = ["Marijuana", "Hashish", "Charas", "Ganja"];

const CANNABINOID_EFFECTS: ReactNode[] = [
  <>
    <strong>Inhalation.</strong>
  </>,
  <>
    <strong>Oral ingestion.</strong>
  </>,
  <>
    Primarily affect the <strong>cardiovascular system</strong>.
  </>,
  <>
    Also abused by some <strong>sportspersons</strong>.
  </>,
];

export function CannabinoidsSection() {
  return (
    <div className="my-5 space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-green-800 dark:text-green-300">
          B.
        </span>
        <span className="text-sm font-bold tracking-tight text-foreground">Cannabinoids</span>
      </div>

      {/* Plant source */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-green-600/35 bg-green-50/35 p-3.5 dark:bg-green-950/20">
        <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-green-700 dark:text-green-300" aria-hidden />
        <div>
          <Eyebrow>Plant source</Eyebrow>
          <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
            Inflorescences (flowering tops) of <em>Cannabis sativa</em>.
          </p>
        </div>
      </div>

      <div className="flex justify-center" aria-hidden>
        <ArrowDown className="h-4 w-4 text-green-600/70 dark:text-green-400" />
      </div>

      {/* Products */}
      <div className="rounded-xl border border-border bg-card p-3">
        <p className="text-[10.5px] leading-snug text-foreground">
          <strong>Products obtained</strong> from combinations of flower tops, leaves and resin:
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {CANNABINOID_PRODUCTS.map((product) => (
            <div
              key={product}
              className="rounded-lg border border-green-600/35 bg-green-50/45 px-2 py-2 text-center dark:bg-green-950/25"
            >
              <span className="text-[10.5px] font-bold leading-snug text-green-900 dark:text-green-200">
                {product}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mechanism */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-emerald-600/35 bg-emerald-50/35 p-3.5 dark:bg-emerald-950/20">
        <GitBranch className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-300" aria-hidden />
        <p className="text-[10.5px] leading-snug text-foreground">
          Interact with cannabinoid receptors located <strong>principally in the brain</strong>.
        </p>
      </div>

      {/* Administration and effects */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="border-b border-border bg-emerald-50/40 px-3 py-2 dark:bg-emerald-950/20">
          <Eyebrow>Administration and effects</Eyebrow>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-1.5 p-3 sm:grid-cols-2">
          {CANNABINOID_EFFECTS.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
