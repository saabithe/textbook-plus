import type { ReactNode } from "react";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

/* -------------------------------------------------------------------------- */
/* Experimental organism + strains                                            */
/* -------------------------------------------------------------------------- */

interface Strain {
  code: string;
  fullName: string;
  attributes: ReactNode[];
  smooth: boolean;
}

const STRAINS: Strain[] = [
  {
    code: "S",
    fullName: "Smooth strain",
    smooth: true,
    attributes: [
      <>Smooth, shiny colonies.</>,
      <>
        Has a mucous <strong>polysaccharide coat</strong>.
      </>,
      <>
        <strong>Virulent</strong> — causes disease.
      </>,
    ],
  },
  {
    code: "R",
    fullName: "Rough strain",
    smooth: false,
    attributes: [
      <>Rough colonies.</>,
      <>Lacks polysaccharide coat.</>,
      <>
        <strong>Non-virulent</strong> — does not cause disease.
      </>,
    ],
  },
];

function StrainCard({ strain }: { strain: Strain }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3.5">
      <div className="flex items-center gap-2.5">
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-extrabold text-white ${
            strain.smooth
              ? "bg-emerald-600 dark:bg-emerald-500"
              : "bg-slate-500 dark:bg-slate-400"
          }`}
        >
          {strain.code}
        </span>
        <div>
          <div
            className={`${EYEBROW} ${
              strain.smooth
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-slate-600 dark:text-slate-300"
            }`}
          >
            {strain.code} strain
          </div>
          <div className="text-sm font-bold leading-snug text-foreground">
            {strain.fullName}
          </div>
        </div>
      </div>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        {strain.attributes.map((attribute, i) => (
          <li key={i}>{attribute}</li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Four-panel experimental diagram (inline SVG primitives)                    */
/* -------------------------------------------------------------------------- */

type PrepKind = "liveS" | "liveR" | "heatS" | "mixture";
type Outcome = "died" | "lived";

interface PanelData {
  number: string;
  title: string;
  injection: string;
  result: string;
  outcome: Outcome;
  prep: PrepKind;
  recovered?: string;
}

const PANELS: PanelData[] = [
  {
    number: "①",
    title: "Live S strain",
    injection: "Live S bacteria",
    result: "Mice died",
    outcome: "died",
    prep: "liveS",
  },
  {
    number: "②",
    title: "Live R strain",
    injection: "Live R bacteria",
    result: "Mice lived",
    outcome: "lived",
    prep: "liveR",
  },
  {
    number: "③",
    title: "Heat-killed S strain",
    injection: "Dead S bacteria",
    result: "Mice lived",
    outcome: "lived",
    prep: "heatS",
  },
  {
    number: "④",
    title: "Heat-killed S + Live R",
    injection: "Mixture",
    result: "Mice died",
    outcome: "died",
    prep: "mixture",
    recovered: "Live S bacteria recovered",
  },
];

/** Positions of the bacteria inside the preparation dish. */
const DOT_POSITIONS: [number, number][] = [
  [-42, 0],
  [-22, -6],
  [-2, 3],
  [18, -4],
  [38, 2],
  [-30, 8],
  [8, 8],
  [28, 7],
];

function BacteriaDots({ prep }: { prep: PrepKind }) {
  return (
    <g transform="translate(100,34)">
      {DOT_POSITIONS.map(([x, y], i) => {
        const heatKilled = prep === "heatS" || (prep === "mixture" && i < 4);
        return heatKilled ? (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={4.2}
            className="fill-card stroke-muted-foreground"
            strokeWidth={1.6}
          />
        ) : (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={4.2}
            className="fill-emerald-500"
            fillOpacity={0.9}
          />
        );
      })}
    </g>
  );
}

/** A mouse drawn around its own origin, so panels can translate / tilt it. */
function MouseFigure({ dead }: { dead: boolean }) {
  return (
    <g transform={dead ? "rotate(72)" : undefined}>
      {/* tail */}
      <path
        d="M34 2 Q 54 8 58 -6"
        fill="none"
        className="stroke-foreground/45"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      {/* feet */}
      <path
        d="M-12 20 v5 M14 20 v5"
        className="stroke-foreground/45"
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* body + head */}
      <ellipse
        cx={0}
        cy={0}
        rx={36}
        ry={20}
        className="fill-muted stroke-foreground/55"
        strokeWidth={1.5}
      />
      <circle
        cx={-38}
        cy={-8}
        r={13}
        className="fill-muted stroke-foreground/55"
        strokeWidth={1.5}
      />
      {/* ear + eye + nose */}
      <circle
        cx={-42}
        cy={-19}
        r={5.5}
        className="fill-card stroke-foreground/55"
        strokeWidth={1.3}
      />
      <circle cx={-43} cy={-10} r={2} className="fill-foreground" />
      <circle cx={-51} cy={-6} r={2.2} className="fill-foreground/70" />
      {/* death cross */}
      {dead && (
        <g className="stroke-rose-500" strokeWidth={3} strokeLinecap="round">
          <line x1={-14} y1={-14} x2={14} y2={14} />
          <line x1={-14} y1={14} x2={14} y2={-14} />
        </g>
      )}
    </g>
  );
}

function ExperimentPanel({ panel }: { panel: PanelData }) {
  const died = panel.outcome === "died";
  const description = `${panel.title}: mice injected with ${panel.injection.toLowerCase()}; ${panel.result.toLowerCase()}. ${
    died
      ? "A tilted mouse marked with a cross shows it died."
      : "An upright mouse shows it lived."
  }${panel.recovered ? ` ${panel.recovered}.` : ""}`;

  return (
    <div className="rounded-xl border border-border bg-card p-3.5">
      <div className="mb-2 flex items-center gap-2">
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-muted text-xs font-bold text-foreground">
          {panel.number}
        </span>
        <span className="text-sm font-bold leading-snug text-foreground">
          {panel.title}
        </span>
      </div>

      <svg
        viewBox="0 0 200 185"
        className="mx-auto h-auto w-full max-w-[13rem]"
        role="img"
        aria-label={description}
      >
        <title>{panel.title}</title>

        {/* injection preparation */}
        <text
          x={100}
          y={12}
          textAnchor="middle"
          fontSize={10.5}
          fontWeight={600}
          className="fill-muted-foreground"
        >
          {panel.injection}
        </text>
        <ellipse
          cx={100}
          cy={34}
          rx={60}
          ry={16}
          className="fill-muted stroke-border"
          fillOpacity={0.4}
          strokeWidth={1.5}
        />
        <BacteriaDots prep={panel.prep} />

        {/* injection arrow */}
        <path
          d="M100 56 V84"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth={1.6}
        />
        <path
          d="M95 78 L100 86 L105 78"
          fill="none"
          className="stroke-muted-foreground"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* mouse + result */}
        <g transform="translate(100,124)">
          <MouseFigure dead={died} />
        </g>
        <text
          x={100}
          y={174}
          textAnchor="middle"
          fontSize={11.5}
          fontWeight={800}
          className={
            died
              ? "fill-rose-600 dark:fill-rose-400"
              : "fill-emerald-700 dark:fill-emerald-300"
          }
        >
          {panel.result}
        </text>
      </svg>

      {panel.recovered && (
        <div className="mt-2 rounded-lg border border-emerald-500/30 bg-emerald-50/50 px-2 py-1.5 text-center text-xs font-semibold text-emerald-800 dark:bg-emerald-950/25 dark:text-emerald-200">
          {panel.recovered}
        </div>
      )}
    </div>
  );
}

function SymbolLegend() {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
        live bacteria
      </span>
      <span className="flex items-center gap-1.5">
        <span
          className="h-2.5 w-2.5 rounded-full border border-muted-foreground bg-card"
          aria-hidden
        />
        heat-killed bacteria
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-sm font-bold leading-none text-rose-500" aria-hidden>
          ✕
        </span>
        mouse died
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

/** Griffith's 1928 transforming-principle experiment, from organism to result. */
export function GriffithExperiment() {
  return (
    <div className="my-5 space-y-6">
      {/* 2.1 Experimental organism */}
      <section>
        <div className={EYEBROW}>Experimental organism</div>
        <p className="mt-1 text-sm leading-relaxed text-foreground">
          <em>Streptococcus pneumoniae</em> — a bacterium that causes pneumonia
          in mammals.
        </p>
      </section>

      {/* Two strains */}
      <section>
        <div className={EYEBROW}>Two bacterial strains were studied</div>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {STRAINS.map((strain) => (
            <StrainCard key={strain.code} strain={strain} />
          ))}
        </div>
      </section>

      {/* 2.2 Experimental steps and observations */}
      <section>
        <div className={EYEBROW}>Experimental steps and observations</div>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {PANELS.map((panel) => (
            <ExperimentPanel key={panel.number} panel={panel} />
          ))}
        </div>
        <SymbolLegend />
      </section>

      {/* 2.3 Explanation of the fourth experiment */}
      <section>
        <div className={EYEBROW}>Explanation of the fourth experiment</div>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>Heat-killed S bacteria alone could not cause disease.</li>
          <li>However, when mixed with live R bacteria, the mice died.</li>
          <li>Live S-strain bacteria were recovered from the dead mice.</li>
          <li>
            A substance from the dead S bacteria transformed the living R
            bacteria into virulent S-type bacteria.
          </li>
        </ul>
      </section>

      {/* Conclusion */}
      <div className="my-6 rounded-2xl border border-emerald-500/30 bg-emerald-50/40 p-4 dark:bg-emerald-950/15">
        <div className={`${EYEBROW} text-emerald-800 dark:text-emerald-200`}>
          Conclusion — Transforming Principle
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Griffith concluded that a <Highlight>transforming principle</Highlight>{" "}
          was transferred from heat-killed S bacteria to living R bacteria.
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>R strain → Transformed into S type.</li>
          <li>
            The exact biochemical nature of the transforming principle was not
            identified by Griffith.
          </li>
        </ul>
      </div>

      {/* Core experimental observation */}
      <section className="my-6">
        <div className={EYEBROW}>Core experimental observation</div>
        <Stepper
          steps={[
            { label: "Heat-killed S + Live R" },
            { label: "Transformation of R bacteria" },
            { label: "Live S bacteria recovered" },
            { label: "Transforming principle discovered" },
          ]}
        />
      </section>
    </div>
  );
}
