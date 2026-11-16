import { Fragment } from "react";
import { ArrowDown, ArrowRight, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * GelElectrophoresis — why fragments need separating, how agarose does it, and
 * how the wanted band comes back out of the gel.
 *
 * The two gel drawings share one orientation (wells left, anode right) so the
 * setup and the band positions can be read against each other.
 */

export function SeparationNeed() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-center gap-1.5">
        {["Source DNA", "Restriction fragments", "Separation"].map((step, index) => (
          <Fragment key={step}>
            <span
              className={cn(
                "rounded border px-2 py-0.5 text-[11px] font-medium",
                index === 2
                  ? "border-2 border-indigo-600/35 bg-indigo-50/60 text-foreground dark:bg-indigo-950/25"
                  : "border-border bg-muted/40 text-foreground",
              )}
            >
              {step}
            </span>
            {index < 2 && (
              <span className="text-[10px] text-muted-foreground" aria-hidden>
                →
              </span>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-3 space-y-1.5">
        <Bullet>Endonuclease recognition sequences may occur many times within source DNA.</Bullet>
        <Bullet>Cutting the source DNA therefore produces numerous different fragments.</Bullet>
        <Bullet>The desired DNA fragment must be separated from the other fragments.</Bullet>
      </div>

      <div className="mt-2.5 flex flex-wrap items-baseline gap-2 border-t border-border pt-2">
        <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Method</span>
        <span className="text-sm font-semibold text-foreground">Gel electrophoresis</span>
      </div>
    </div>
  );
}

export function AgePrinciple() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-indigo-600/30 bg-indigo-50/40 dark:bg-indigo-950/20">
      <div className="px-4 py-3">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Principle
        </div>
        <div className="mt-1 text-sm leading-relaxed text-foreground">
          <strong className="font-semibold">Gel electrophoresis</strong> — a technique used to separate negatively
          charged DNA fragments according to their <strong className="font-semibold">size</strong> under an electric
          field through an agarose gel matrix.
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-indigo-600/20 bg-indigo-600/20 sm:grid-cols-3">
        <div className="bg-card px-4 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Developer</div>
          <div className="text-xs font-medium text-foreground">A. Tiselius</div>
        </div>
        <div className="bg-card px-4 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Matrix</div>
          <div className="text-xs font-medium leading-snug text-foreground">
            Agarose — a natural polymer extracted from seaweeds
          </div>
        </div>
        <div className="bg-card px-4 py-2">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Separation mechanism
          </div>
          <div className="text-xs font-medium text-foreground">Sieving effect of the agarose gel</div>
        </div>
      </div>
    </div>
  );
}

export function GelSetupDiagram() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Setup and direction of migration</div>

      <svg viewBox="0 0 340 148" className="mt-2 w-full" role="img" aria-label="Agarose gel apparatus">
        {/* tank */}
        <rect
          x="8"
          y="34"
          width="324"
          height="78"
          rx="8"
          className="fill-teal-50/60 stroke-teal-600/30 dark:fill-teal-950/20"
          strokeWidth="1.2"
        />
        {/* gel slab */}
        <rect x="40" y="48" width="260" height="50" rx="4" className="fill-teal-100/70 stroke-teal-600/40 dark:fill-teal-900/30" strokeWidth="1.2" />

        {/* wells at the cathode end */}
        {[50, 68, 86, 104].map((x) => (
          <rect key={x} x={x} y="50" width="9" height="9" rx="1" className="fill-card stroke-teal-700/40" strokeWidth="1" />
        ))}

        {/* DNA bands */}
        {[54, 72, 90, 108].map((x, i) => (
          <rect
            key={`band-${x}`}
            x={150 + i * 6}
            y={74}
            width="12"
            height="4"
            rx="1"
            className="fill-indigo-500"
          />
        ))}

        {/* terminal labels */}
        <text x="44" y="28" className="fill-rose-700 text-[8px] font-semibold dark:fill-rose-300">
          Cathode (−)
        </text>
        <text x="292" y="28" className="fill-indigo-700 text-[8px] font-semibold dark:fill-indigo-300">
          Anode (+)
        </text>

        {/* well label */}
        <text x="50" y="122" className="fill-muted-foreground text-[7px]">
          Wells
        </text>

        {/* migration arrow */}
        <line x1="60" y1="134" x2="286" y2="134" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.6" />
        <path d="M286 134 L278 130 M286 134 L278 138" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <text x="150" y="131" className="fill-amber-800 text-[7px] font-semibold dark:fill-amber-300">
          DNA migration
        </text>
      </svg>

      <div className="mt-1 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
        <Bullet>Wells — DNA samples are loaded at the cathode end.</Bullet>
        <Bullet>Cathode (−) — negative terminal, near the wells; anode (+) — opposite end.</Bullet>
        <Bullet>DNA is negatively charged → moves towards the positive anode.</Bullet>
      </div>
    </figure>
  );
}

export function GelSizeSeparation() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Size-based separation — the sieving effect</div>

      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-[1.15fr_1fr] sm:items-center">
        <svg viewBox="0 0 300 150" className="w-full" role="img" aria-label="Band positions by fragment size">
          <rect x="10" y="20" width="280" height="112" rx="6" className="fill-teal-50/60 stroke-teal-600/30 dark:fill-teal-950/20" strokeWidth="1.2" />

          {/* lane A — large fragment */}
          <text x="18" y="52" className="fill-muted-foreground text-[7px]">
            Large
          </text>
          <rect x="52" y="44" width="9" height="9" rx="1" className="fill-card stroke-teal-700/40" strokeWidth="1" />
          <rect x="86" y="46" width="14" height="6" rx="1" className="fill-indigo-500" />

          {/* lane B — small fragment */}
          <text x="18" y="106" className="fill-muted-foreground text-[7px]">
            Small
          </text>
          <rect x="52" y="98" width="9" height="9" rx="1" className="fill-card stroke-teal-700/40" strokeWidth="1" />
          <rect x="232" y="100" width="14" height="6" rx="1" className="fill-indigo-500" />

          {/* travel arrows */}
          <line x1="64" y1="66" x2="92" y2="66" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.4" />
          <path d="M92 66 L86 63 M92 66 L86 69" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.4" fill="none" strokeLinecap="round" />

          <line x1="64" y1="120" x2="238" y2="120" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.4" />
          <path d="M238 120 L232 117 M238 120 L232 123" className="stroke-amber-600 dark:stroke-amber-400" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        </svg>

        <div className="space-y-2">
          <div className="rounded-lg border border-border border-l-[3px] border-l-indigo-500 bg-muted/20 px-3 py-2">
            <div className="text-xs font-semibold text-foreground">Larger fragments</div>
            <div className="text-xs leading-snug text-muted-foreground">Move slowly; remain closer to the wells.</div>
          </div>
          <div className="rounded-lg border border-border border-l-[3px] border-l-amber-500 bg-muted/20 px-3 py-2">
            <div className="text-xs font-semibold text-foreground">Smaller fragments</div>
            <div className="text-xs leading-snug text-muted-foreground">Move faster; travel farther through the gel matrix.</div>
          </div>
        </div>
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Distance travelled reads as size: the band nearest the well holds the largest fragments.
      </figcaption>
    </figure>
  );
}

const STAIN_STEPS = [
  { n: "1", label: "Staining", detail: "Separated DNA fragments are stained using Ethidium bromide (EtBr)." },
  { n: "2", label: "UV exposure", detail: "The gel is exposed to UV radiation." },
  { n: "3", label: "Visualisation", detail: "DNA appears as bright orange-coloured fluorescent bands." },
];

export function StainingVisualisation() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="space-y-1.5">
          {STAIN_STEPS.map((step) => (
            <div key={step.n} className="flex items-start gap-2">
              <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded border border-border bg-muted/40 text-[10px] font-bold tabular-nums text-muted-foreground">
                {step.n}
              </span>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-foreground">{step.label}</div>
                <div className="text-xs leading-snug text-muted-foreground">{step.detail}</div>
              </div>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 200 132" className="mx-auto w-40 sm:w-44" role="img" aria-label="Fluorescent DNA bands under UV">
          <rect x="14" y="14" width="172" height="104" rx="6" className="fill-teal-950/70" />
          <rect x="24" y="24" width="152" height="84" rx="3" className="fill-teal-900/60" />

          {[36, 60, 84].map((y) => (
            <rect key={`well-${y}`} x="30" y={y} width="8" height="8" rx="1" className="fill-teal-800" />
          ))}

          {[
            { x: 96, y: 36 },
            { x: 126, y: 60 },
            { x: 78, y: 84 },
          ].map((band) => (
            <g key={`${band.x}-${band.y}`}>
              <rect x={band.x - 4} y={band.y - 3} width="30" height="10" rx="4" className="fill-amber-400/30" />
              <rect x={band.x} y={band.y} width="22" height="5" rx="2" className="fill-amber-400" />
            </g>
          ))}

          <text x="166" y="122" textAnchor="end" className="fill-amber-200/90 text-[7px] font-semibold">
            UV
          </text>
        </svg>
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-600/30 bg-amber-50/60 px-3 py-2 dark:bg-amber-950/20">
        <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
        <div className="text-xs leading-relaxed text-foreground">
          <span className="font-semibold">Important</span> — pure DNA cannot be seen in visible light without staining.
        </div>
      </div>
    </div>
  );
}

const ELUTION_STEPS = ["Separated DNA bands", "Desired band cut out", "DNA extracted"];

export function Elution() {
  return (
    <div className="my-5">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-stretch sm:gap-0">
        {ELUTION_STEPS.map((step, index) => (
          <Fragment key={step}>
            <div
              className={cn(
                "flex-1 rounded-lg border px-3 py-2",
                index === ELUTION_STEPS.length - 1
                  ? "border-2 border-emerald-600/40 bg-emerald-50/50 dark:bg-emerald-950/25"
                  : "border-border bg-card",
              )}
            >
              <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                {index + 1}
              </div>
              <div className="text-xs font-semibold leading-snug text-foreground">{step}</div>
            </div>

            {index < ELUTION_STEPS.length - 1 && (
              <div className="flex items-center justify-center py-0.5 text-muted-foreground" aria-hidden>
                <ArrowDown className="h-3 w-3 sm:hidden" />
                <ArrowRight className="hidden h-3 w-3 sm:block" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-2 rounded-lg border border-border border-l-[3px] border-l-emerald-500 bg-muted/20 px-3 py-2">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Purpose</div>
        <div className="text-xs leading-relaxed text-foreground">
          To obtain the desired DNA fragment for further use in recombinant DNA construction.
        </div>
      </div>
    </div>
  );
}

const WORKFLOW = [
  { n: "1", title: "Loading", detail: "DNA fragments are loaded into the wells." },
  { n: "2", title: "Electrophoresis", detail: "An electric field is applied across the agarose gel." },
  {
    n: "3",
    title: "Migration and separation",
    detail: "Negatively charged DNA moves towards the anode; smaller fragments travel farther.",
  },
  { n: "4", title: "Staining", detail: "DNA fragments are stained with Ethidium bromide (EtBr)." },
  { n: "5", title: "Visualisation", detail: "UV exposure reveals bright orange-coloured fluorescent bands." },
  { n: "6", title: "Elution", detail: "The desired DNA band is cut out and extracted.", output: true },
];

export function AgeWorkflow() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5" role="list">
      {WORKFLOW.map((step, index) => (
        <div key={step.n} className="relative pb-2.5 pl-8 last:pb-0" role="listitem">
          {index < WORKFLOW.length - 1 && <span className="absolute bottom-0 left-[11px] top-7 w-px bg-border" aria-hidden />}

          <span
            className={cn(
              "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-bold tabular-nums",
              step.output
                ? "border-emerald-600/40 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300"
                : "border-border bg-muted/40 text-muted-foreground",
            )}
          >
            {step.n}
          </span>

          <div className="flex flex-wrap items-baseline gap-x-2">
            <div className="text-xs font-semibold text-foreground">{step.title}</div>
            <div className="text-xs leading-snug text-muted-foreground">{step.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-1.5">
      <span className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-foreground/35" aria-hidden />
      <div className="text-xs leading-snug text-foreground">{children}</div>
    </div>
  );
}
