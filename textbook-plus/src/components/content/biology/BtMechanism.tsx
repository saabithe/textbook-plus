import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * BtMechanism — the toxin's two states, the seven steps inside the insect,
 * and the exam flowchart.
 *
 * The gut drawing is schematic: lumen, epithelial cells, toxin binding, pores,
 * swelling and lysis, each marked with the step number it belongs to.
 * teal = the living tissue, violet = the protoxin, amber = the activated
 * toxin, emerald = the final outcome.
 */

const PLANT = "var(--subject-biology)";
/** Violet token for the toxin protein (the chapter's agent colour). */
const TOXIN = "var(--subject-english)";
const AMBER = "var(--warning)";
const INK = "var(--foreground)";

/* ------------------------------------------------------------- 7.1 states */

function CrystalGlyph() {
  return (
    <svg viewBox="0 0 180 76" className="h-auto w-full max-w-[11rem]" role="img" aria-label="A Bacillus cell holding a crystal of insecticidal protein.">
      <title>A Bacillus cell holding a protein crystal</title>
      <rect x={14} y={22} width={112} height={36} rx={18} fill={PLANT} fillOpacity={0.14} stroke={PLANT} strokeWidth={2} />
      <path d="M52 40 l10 -11 l12 5 l-2 12 l-13 4 z" fill={TOXIN} fillOpacity={0.3} stroke={TOXIN} strokeWidth={1.6} strokeLinejoin="round" />
      <line x1={80} y1={48} x2={94} y2={58} stroke={INK} strokeOpacity={0.3} strokeWidth={1.1} />
      <text x={96} y={62} fontSize={9} fontWeight={700} fill={INK} fillOpacity={0.75}>
        crystal
      </text>
    </svg>
  );
}

function ProtoxinShape() {
  return (
    <svg viewBox="0 0 56 40" className="h-8 w-11" aria-hidden>
      <path d="M8 28 q7 -18 14 -2 q7 16 14 -2 q7 -18 12 -2" fill="none" stroke={TOXIN} strokeWidth={2.4} strokeLinecap="round" />
    </svg>
  );
}

function ActiveToxinShape() {
  return (
    <svg viewBox="0 0 56 40" className="h-8 w-11" aria-hidden>
      <path d="M8 28 L18 14 L28 28 L38 14" fill="none" stroke={AMBER} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 16 L48 22" fill="none" stroke={AMBER} strokeWidth={2.4} strokeLinecap="round" />
    </svg>
  );
}

export function BtProtoxinState() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-center">
        <div className="rounded-lg border border-border bg-muted/20 p-3">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            In the bacterium
          </div>
          <div className="mt-1.5 flex justify-center">
            <CrystalGlyph />
          </div>
          <div className="mt-1 text-[11px] leading-snug text-foreground/80">
            Bt bacterium produces insecticidal protein crystals.
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-lg border border-violet-600/35 bg-violet-50/50 px-2.5 py-2 text-center dark:bg-violet-950/25">
              <div className="flex justify-center">
                <ProtoxinShape />
              </div>
              <div className="mt-0.5 text-[11px] font-bold tracking-tight text-foreground">Inactive protoxin</div>
              <div className="text-[10px] text-muted-foreground">synthesised this way</div>
            </div>

            <div className="flex flex-col items-center py-0.5" aria-hidden>
              <ArrowDown className="h-3.5 w-3.5 text-muted-foreground sm:hidden" />
              <ArrowRight className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
              <span className="mt-0.5 text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
                alkaline pH
              </span>
            </div>

            <div className="rounded-lg border-2 border-amber-600/40 bg-amber-50/60 px-2.5 py-2 text-center dark:bg-amber-950/25">
              <div className="flex justify-center">
                <ActiveToxinShape />
              </div>
              <div className="mt-0.5 text-[11px] font-bold tracking-tight text-foreground">Active toxin</div>
              <div className="text-[10px] text-muted-foreground">in the insect gut</div>
            </div>
          </div>

          <div className="mt-2.5 space-y-1.5">
            <div className="flex gap-2 text-xs leading-relaxed text-foreground/85">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-600/60" aria-hidden />
              <span>The toxin is synthesised in an inactive protoxin form.</span>
            </div>
            <div className="flex gap-2 text-xs leading-relaxed text-foreground/85">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
              <span>In this inactive form, it does not harm the bacterium.</span>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Two distinct states: the folded protoxin stored in the crystal, and the active toxin formed once the insect
        gut dissolves it.
      </figcaption>
    </figure>
  );
}

/* --------------------------------------------------------------- 7.2 steps */

interface Stage {
  n: string;
  name: string;
  detail: string;
  tone?: "activation" | "death";
}

const STAGES: Stage[] = [
  {
    n: "1",
    name: "Ingestion",
    detail: "The insect feeds on the Bt-containing plant and ingests the toxin.",
  },
  {
    n: "2",
    name: "Solubilisation",
    detail: "The alkaline pH of the insect's midgut solubilises the protein crystals.",
  },
  {
    n: "3",
    name: "Activation",
    detail: "The inactive protoxin is converted into an active toxin.",
    tone: "activation",
  },
  {
    n: "4",
    name: "Binding",
    detail: "The activated toxin binds to the midgut epithelial cells.",
  },
  {
    n: "5",
    name: "Pore Formation",
    detail: "The toxin creates pores in the epithelial cells.",
  },
  {
    n: "6",
    name: "Cell Damage",
    detail: "The cells swell and undergo lysis.",
  },
  {
    n: "7",
    name: "Insect Death",
    detail: "The insect dies.",
    tone: "death",
  },
];

function StageRow({ stage, last }: { stage: Stage; last: boolean }) {
  const isActivation = stage.tone === "activation";
  const isDeath = stage.tone === "death";

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <span
          className={
            isActivation
              ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-600 text-[11px] font-bold tabular-nums text-white"
              : isDeath
                ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-[11px] font-bold tabular-nums text-white"
                : "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-[11px] font-bold tabular-nums text-foreground"
          }
        >
          {stage.n}
        </span>
        {!last && <span className="mt-1 w-px flex-1 bg-border" aria-hidden />}
      </div>

      <div
        className={
          isActivation
            ? "mb-2 flex-1 rounded-lg border-2 border-amber-600/40 bg-amber-50/50 px-3 py-2 dark:bg-amber-950/20"
            : isDeath
              ? "mb-2 flex-1 rounded-lg border-2 border-emerald-600/35 bg-emerald-50/50 px-3 py-2 dark:bg-emerald-950/20"
              : "mb-2 flex-1 rounded-lg border border-border bg-card px-3 py-2"
        }
      >
        <div className="text-sm font-semibold leading-tight tracking-tight text-foreground">{stage.name}</div>
        <div className="mt-0.5 text-xs leading-relaxed text-foreground/80">{stage.detail}</div>

        {isActivation && (
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5 rounded-md border border-amber-600/30 bg-card px-2 py-1">
            <span className="text-[10px] font-semibold text-violet-800 dark:text-violet-300">Protoxin</span>
            <ArrowRight className="h-3 w-3 text-muted-foreground" aria-hidden />
            <span className="text-[10px] font-semibold text-amber-800 dark:text-amber-300">Active toxin</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- gut drawing */

function MidgutPanel() {
  return (
    <figure className="my-3 overflow-hidden rounded-xl border border-border bg-card p-3">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Inside the insect midgut
      </div>

      <svg
        viewBox="0 0 440 196"
        className="mt-1.5 h-auto w-full"
        role="img"
        aria-label="A section of the insect midgut: active toxin in the lumen binds to epithelial cells, forms pores, and the cells swell and burst."
      >
        <title>Toxin action on the midgut epithelium</title>

        {/* lumen */}
        <rect x={10} y={10} width={420} height={34} rx={4} fill={AMBER} fillOpacity={0.12} stroke={AMBER} strokeOpacity={0.35} />
        <text x={20} y={31} fontSize={9.5} fontWeight={700} fill={INK} fillOpacity={0.75}>
          Midgut lumen — alkaline pH
        </text>
        <text x={330} y={31} fontSize={9} fontWeight={600} fill={INK} fillOpacity={0.6}>
          active toxin
        </text>

        {/* toxin molecules */}
        {[52, 96, 140, 184, 228].map((x) => (
          <path
            key={x}
            d={`M${x} 52 l5 -5 l5 5 l-5 5 z`}
            fill={TOXIN}
            fillOpacity={0.45}
            stroke={TOXIN}
            strokeWidth={1.2}
          />
        ))}
        <line x1={145} y1={60} x2={145} y2={74} stroke={TOXIN} strokeWidth={1.4} strokeOpacity={0.7} />
        <path d="M141 70 L145 77 L149 70 Z" fill={TOXIN} fillOpacity={0.7} />
        <line x1={189} y1={60} x2={189} y2={74} stroke={TOXIN} strokeWidth={1.4} strokeOpacity={0.7} />
        <path d="M185 70 L189 77 L193 70 Z" fill={TOXIN} fillOpacity={0.7} />

        {/* normal cells */}
        <rect x={40} y={80} width={68} height={62} rx={6} fill={PLANT} fillOpacity={0.18} stroke={PLANT} strokeOpacity={0.6} strokeWidth={1.6} />
        <ellipse cx={74} cy={111} rx={12} ry={9} fill={PLANT} fillOpacity={0.3} />

        <rect x={122} y={80} width={68} height={62} rx={6} fill={PLANT} fillOpacity={0.18} stroke={PLANT} strokeOpacity={0.6} strokeWidth={1.6} />
        <ellipse cx={156} cy={111} rx={12} ry={9} fill={PLANT} fillOpacity={0.3} />
        {/* pores */}
        <line x1={140} y1={78} x2={140} y2={86} stroke="var(--card)" strokeWidth={3.4} />
        <line x1={164} y1={78} x2={164} y2={86} stroke="var(--card)" strokeWidth={3.4} />

        {/* swollen cell */}
        <rect
          x={200}
          y={76}
          width={78}
          height={70}
          rx={12}
          fill={PLANT}
          fillOpacity={0.2}
          stroke={AMBER}
          strokeOpacity={0.85}
          strokeWidth={2}
          strokeDasharray="5 3"
        />
        <ellipse cx={239} cy={111} rx={14} ry={11} fill={PLANT} fillOpacity={0.3} />

        {/* lysed cell */}
        <path
          d="M292 142 L292 100 Q292 82 308 82 L318 82"
          fill="none"
          stroke={PLANT}
          strokeOpacity={0.7}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M330 82 L344 82 Q358 82 358 100 L358 142"
          fill="none"
          stroke={PLANT}
          strokeOpacity={0.7}
          strokeWidth={2}
          strokeLinecap="round"
        />
        {[
          [318, 104],
          [334, 116],
          [322, 128],
        ].map(([x, y]) => (
          <path key={`${x}-${y}`} d={`M${x} ${y} l4 -4 l4 4 l-4 4 z`} fill={PLANT} fillOpacity={0.35} stroke={PLANT} strokeOpacity={0.5} strokeWidth={1} />
        ))}

        {/* step badges */}
        {[
          [74, 60, "4"],
          [156, 60, "5"],
          [239, 60, "6"],
        ].map(([x, y, label]) => (
          <g key={label}>
            <circle cx={x as number} cy={y as number} r={8.5} fill="var(--card)" stroke={INK} strokeOpacity={0.35} />
            <text x={x as number} y={(y as number) + 3.2} fontSize={9} fontWeight={700} textAnchor="middle" fill={INK} fillOpacity={0.85}>
              {label}
            </text>
          </g>
        ))}

        {/* cell labels */}
        <text x={74} y={162} fontSize={9} fontWeight={600} textAnchor="middle" fill={INK} fillOpacity={0.65}>
          binding
        </text>
        <text x={156} y={162} fontSize={9} fontWeight={600} textAnchor="middle" fill={INK} fillOpacity={0.65}>
          pores
        </text>
        <text x={239} y={162} fontSize={9} fontWeight={600} textAnchor="middle" fill={INK} fillOpacity={0.65}>
          swelling
        </text>
        <text x={325} y={162} fontSize={9} fontWeight={600} textAnchor="middle" fill={INK} fillOpacity={0.65}>
          lysis
        </text>

        <line x1={10} y1={176} x2={430} y2={176} stroke={INK} strokeOpacity={0.15} />
        <text x={10} y={190} fontSize={9} fill={INK} fillOpacity={0.55}>
          epithelial cells of the midgut
        </text>
      </svg>
    </figure>
  );
}

export function BtToxinAction() {
  return (
    <div className="my-5">
      {STAGES.slice(0, 3).map((stage) => (
        <StageRow key={stage.n} stage={stage} last={false} />
      ))}

      <MidgutPanel />

      {STAGES.slice(3).map((stage, index) => (
        <StageRow key={stage.n} stage={stage} last={index === STAGES.slice(3).length - 1} />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------ exam flow */

interface FlowStep {
  text: string;
  sub?: string;
  tone?: "activation" | "death";
}

const EXAM_FLOW: FlowStep[] = [
  { text: "cry gene incorporated into cotton plant" },
  { text: "Plant expresses Bt toxin" },
  { text: "Insect feeds on the plant" },
  { text: "Bt toxin is ingested" },
  { text: "Toxin reaches the insect gut" },
  { text: "Alkaline pH", sub: "Protoxin → Active toxin", tone: "activation" },
  { text: "Binds to midgut epithelial cells" },
  { text: "Pore formation" },
  { text: "Cell swelling and lysis" },
  { text: "Death of insect", tone: "death" },
];

export function BtExamFlowchart() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Board exam flowchart
        </div>
        <div className="text-[10px] text-muted-foreground">write it top to bottom</div>
      </div>

      <div className="mx-auto flex max-w-md flex-col">
        {EXAM_FLOW.map((step, index) => {
          const isActivation = step.tone === "activation";
          const isDeath = step.tone === "death";

          return (
            <Fragment key={step.text}>
              <div
                className={
                  isActivation
                    ? "rounded-md border-2 border-amber-600/45 bg-amber-50/60 px-2.5 py-1.5 text-center dark:bg-amber-950/25"
                    : isDeath
                      ? "rounded-md border-2 border-emerald-600/40 bg-emerald-50/60 px-2.5 py-2 text-center dark:bg-emerald-950/25"
                      : "rounded-md border border-border bg-muted/20 px-2.5 py-1.5 text-center"
                }
              >
                <div
                  className={
                    isDeath
                      ? "text-xs font-bold tracking-tight text-emerald-950 dark:text-emerald-100"
                      : "text-xs font-medium leading-snug text-foreground"
                  }
                >
                  {step.text}
                </div>
                {step.sub && (
                  <div className="mt-0.5 text-[10px] font-semibold text-amber-900 dark:text-amber-200">{step.sub}</div>
                )}
              </div>

              {index < EXAM_FLOW.length - 1 && (
                <div className="flex justify-center py-0.5" aria-hidden>
                  <ArrowDown className="h-3 w-3 text-muted-foreground" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
