import { ArrowRight, Thermometer } from "lucide-react";
import { TableCard } from "@/components/content/data/TableCard";
import { cn } from "@/lib/utils";

/**
 * HostIntroduction — getting the recombinant DNA past the membrane.
 *
 * The charge card states the obstacle; the cation and heat-shock cards are the
 * bacterial route through it; the table is the vectorless alternatives.
 */

export function CompetentHostConcept() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="px-4 py-3">
        <div className="t-micro">Competent cells</div>
        <div className="mt-1 text-sm leading-relaxed text-foreground">
          Host cells <strong className="font-semibold">prepared or made ready</strong> to take up recombinant DNA.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="space-y-1.5 bg-card px-4 py-3">
          <ChargeRow label="Recombinant DNA" />
          <ChargeRow label="Host cell membrane" />
          <div className="pt-1 text-xs leading-relaxed text-foreground">
            Both are negatively charged and non-polar, so introducing recombinant DNA into host cells requires
            suitable methods.
          </div>
        </div>

        <div className="bg-card px-4 py-3 sm:w-52">
          <ApproachArt />
        </div>
      </div>
    </div>
  );
}

export function CationTreatment() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          Step 1
        </span>
        <div className="text-xs font-semibold text-foreground">Divalent cation treatment</div>
        <span className="rounded border border-amber-600/30 bg-amber-50 px-1.5 py-px text-[10px] font-bold text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
          Ca²⁺
        </span>
      </div>

      <div className="mt-2 space-y-1 pl-7">
        <div className="text-xs leading-relaxed text-foreground">
          Bacterial cells are treated with a specific concentration of divalent cations such as calcium ions.
        </div>
        <div className="text-xs leading-relaxed text-foreground">
          <span className="font-semibold">Function</span> — increases the efficiency with which DNA enters the
          bacterium through pores in its cell wall.
        </div>
      </div>
    </div>
  );
}

const SHOCK_STAGES = [
  {
    n: "1",
    name: "Incubation on ice",
    temp: "Ice",
    detail: "Bacterial cells are mixed with recombinant DNA and kept on ice.",
    tone: "indigo" as const,
  },
  {
    n: "2",
    name: "Heat shock",
    temp: "42 °C",
    detail: "The mixture is briefly exposed to 42 °C.",
    tone: "amber" as const,
    hero: true,
  },
  {
    n: "3",
    name: "Return to ice",
    temp: "Ice",
    detail: "The mixture is returned to ice.",
    tone: "indigo" as const,
  },
];

export function HeatShockTimeline() {
  return (
    <div className="my-5">
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[9px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
            Step 2
          </span>
          <div className="text-xs font-semibold text-foreground">Heat shock procedure</div>
        </div>

        <div className="mt-3" role="list">
          {SHOCK_STAGES.map((stage, index) => (
            <div key={stage.n} className="relative pb-2.5 pl-9 last:pb-0" role="listitem">
              {index < SHOCK_STAGES.length - 1 && (
                <span className="absolute bottom-0 left-[11px] top-7 w-px bg-border" aria-hidden />
              )}

              <span
                className={cn(
                  "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums",
                  stage.hero
                    ? "border-amber-600/50 bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200"
                    : "border-indigo-600/30 bg-indigo-50 text-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300",
                )}
              >
                {stage.n}
              </span>

              <div
                className={cn(
                  "rounded-lg border px-3 py-2",
                  stage.hero
                    ? "border-2 border-amber-600/40 bg-amber-50/60 dark:bg-amber-950/25"
                    : "border-border bg-muted/20",
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <div className="text-xs font-semibold text-foreground">{stage.name}</div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded px-1.5 py-px text-[10px] font-bold tabular-nums",
                      stage.hero
                        ? "bg-amber-600 text-white"
                        : "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-200",
                    )}
                  >
                    <Thermometer className="h-2.5 w-2.5" aria-hidden />
                    {stage.temp}
                  </span>
                </div>
                <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{stage.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 rounded-lg border-2 border-emerald-600/40 bg-emerald-50/60 px-3 py-2 dark:bg-emerald-950/25">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
          Outcome
        </span>
        <span className="text-xs font-semibold text-foreground">Bacteria take up recombinant DNA.</span>
      </div>
    </div>
  );
}

export function DirectTransferMethods() {
  return (
    <div className="my-5">
      <TableCard
        headers={["Method", "Target host", "Mechanism"]}
        rows={[
          {
            cells: [
              <MethodCell key="micro" name="Micro-injection" art={<MicroInjectionArt />} />,
              <HostChip key="micro-host">Animal cells</HostChip>,
              "Recombinant DNA is directly injected into the nucleus of an animal cell.",
            ],
          },
          {
            cells: [
              <MethodCell key="biolistics" name="Biolistics / gene gun" art={<GeneGunArt />} />,
              <HostChip key="biolistics-host">Plant cells</HostChip>,
              "High-velocity microparticles of gold or tungsten coated with DNA are used to bombard cells.",
            ],
          },
          {
            cells: [
              <MethodCell key="pathogen" name="Disarmed pathogen vectors" art={<PathogenArt />} />,
              <HostChip key="pathogen-host">Plants and animals</HostChip>,
              "Disarmed pathogens transfer recombinant DNA into host cells without causing disease.",
            ],
          },
        ]}
      />

      <div className="mt-2 rounded-lg border border-border border-l-[3px] border-l-teal-500 bg-muted/20 px-3 py-2">
        <div className="t-micro">Examples of disarmed pathogens</div>
        <div className="mt-1.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">Plants</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" aria-hidden />
            <span className="text-xs font-semibold italic text-foreground">Agrobacterium</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-muted-foreground">Animals</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" aria-hidden />
            <span className="text-xs font-semibold text-foreground">Retroviruses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- bits */

function ChargeRow({ label }: { label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="text-xs font-medium text-foreground">{label}</span>
      <span className="rounded border border-rose-600/30 bg-rose-50 px-1.5 py-px text-[10px] font-semibold text-rose-800 dark:bg-rose-950/30 dark:text-rose-300">
        negatively charged
      </span>
      <span className="rounded border border-border bg-muted/40 px-1.5 py-px text-[10px] font-semibold text-muted-foreground">
        non-polar
      </span>
    </div>
  );
}

function MethodCell({ name, art }: { name: string; art: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="shrink-0">{art}</span>
      <span className="text-xs font-semibold leading-snug text-foreground">{name}</span>
    </div>
  );
}

function HostChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal-600/30 bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-900 dark:bg-teal-950/30 dark:text-teal-200">
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------- art */

function ApproachArt() {
  return (
    <svg viewBox="0 0 200 116" className="w-full" role="img" aria-label="Negatively charged rDNA approaching a host cell membrane">
      {/* cell */}
      <rect x="86" y="18" width="100" height="80" rx="16" className="fill-teal-50/70 stroke-teal-600/40 dark:fill-teal-950/25" strokeWidth="1.4" />
      <text x="136" y="62" textAnchor="middle" className="fill-muted-foreground text-[7px]">
        host cell
      </text>

      {/* membrane negative charges */}
      {[30, 46, 62, 78].map((y) => (
        <text key={`m${y}`} x="80" y={y} textAnchor="middle" className="fill-rose-600 text-[8px] font-bold dark:fill-rose-400">
          −
        </text>
      ))}

      {/* rDNA fragment */}
      <line x1="10" y1="42" x2="48" y2="42" className="stroke-indigo-500" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="10" y1="54" x2="48" y2="54" className="stroke-indigo-500" strokeWidth="2.2" strokeLinecap="round" />
      {[18, 28, 38].map((x) => (
        <line key={`b${x}`} x1={x} y1="44" x2={x} y2="52" className="stroke-indigo-400" strokeWidth="1.1" />
      ))}
      {[42, 50].map((y) => (
        <text key={`c${y}`} x="56" y={y} textAnchor="middle" className="fill-rose-600 text-[8px] font-bold dark:fill-rose-400">
          −
        </text>
      ))}

      {/* approach arrow */}
      <line x1="60" y1="66" x2="74" y2="66" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" />
      <path d="M74 66 L68 63 M74 66 L68 69" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      <text x="8" y="102" className="fill-foreground text-[7px] font-semibold">
        rDNA
      </text>
      <text x="8" y="111" className="fill-muted-foreground text-[6.5px]">
        negative · non-polar
      </text>
    </svg>
  );
}

function MicroInjectionArt() {
  return (
    <svg viewBox="0 0 34 34" className="h-8 w-8" aria-hidden>
      <circle cx="15" cy="18" r="10" className="fill-teal-50 stroke-teal-600/50 dark:fill-teal-950/30" strokeWidth="1.2" />
      <circle cx="15" cy="18" r="3.4" className="fill-indigo-400/60" />
      <line x1="24" y1="9" x2="31" y2="3" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 9 L18 14" className="stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="1.2" strokeDasharray="2 1.5" />
    </svg>
  );
}

function GeneGunArt() {
  return (
    <svg viewBox="0 0 34 34" className="h-8 w-8" aria-hidden>
      <rect x="3" y="7" width="10" height="6" rx="1.5" className="fill-amber-100 stroke-amber-600/50 dark:fill-amber-950/30" strokeWidth="1.1" />
      <rect x="18" y="6" width="13" height="24" rx="3" className="fill-teal-50 stroke-teal-600/50 dark:fill-teal-950/30" strokeWidth="1.2" />
      {[10, 16, 22].map((x) => (
        <circle key={x} cx={x} cy="14" r="1" className="fill-amber-600 dark:fill-amber-400" />
      ))}
      {[11, 17, 23].map((x) => (
        <circle key={`p${x}`} cx={x} cy="24" r="1" className="fill-amber-600 dark:fill-amber-400" />
      ))}
    </svg>
  );
}

function PathogenArt() {
  return (
    <svg viewBox="0 0 34 34" className="h-8 w-8" aria-hidden>
      <circle cx="13" cy="15" r="7" className="fill-violet-100 stroke-violet-600/50 dark:fill-violet-950/30" strokeWidth="1.2" />
      {[
        [13, 6, 13, 9],
        [13, 21, 13, 24],
        [4, 15, 7, 15],
        [19, 15, 22, 15],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-violet-500" strokeWidth="1.2" strokeLinecap="round" />
      ))}
      <rect x="21" y="20" width="10" height="10" rx="2.5" className="fill-teal-50 stroke-teal-600/50 dark:fill-teal-950/30" strokeWidth="1.2" />
      <line x1="19" y1="18" x2="23" y2="22" className="stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
