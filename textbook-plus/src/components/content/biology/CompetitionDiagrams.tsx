import { ArrowRight } from "lucide-react";
import { FlowRow } from "@/components/content/biology/FlowRow";

/**
 * CompetitionDiagrams — misconception rows, the shared-resource strip, the
 * interference mechanism, the Gause theorem panel, the Abingdon sequence, the
 * Connell before/after comparison and the MacArthur warbler partition.
 */

/* ---------------------------------------------------------------- */
/* Misconceptions                                                     */
/* ---------------------------------------------------------------- */

const MISCONCEPTIONS = [
  {
    wrong: "Competition occurs only between closely related species.",
    right: "Unrelated species can also compete.",
  },
  {
    wrong: "Competition requires limited resources.",
    right: "Interference competition can occur even when resources are abundant.",
  },
];

export function MisconceptionRows() {
  return (
    <div className="my-5 space-y-2">
      {MISCONCEPTIONS.map((row) => (
        <div
          key={row.wrong}
          className="grid grid-cols-1 items-stretch gap-2 rounded-xl border border-border bg-card p-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3"
        >
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Misconception
            </div>
            <div className="mt-0.5 text-sm leading-snug text-foreground/70">{row.wrong}</div>
          </div>

          <span className="flex items-center justify-center text-muted-foreground" aria-hidden>
            <ArrowRight className="hidden h-4 w-4 sm:block" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] sm:hidden">
              Reality ↓
            </span>
          </span>

          <div className="min-w-0 border-t border-border pt-2 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Reality
            </div>
            <div className="mt-0.5 text-sm font-medium leading-snug text-foreground">{row.right}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Shared resource strip                                             */
/* ---------------------------------------------------------------- */

export function FlamingoFishStrip() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Example — unrelated competitors</div>

      <div className="mt-3 grid grid-cols-1 items-center gap-2 sm:grid-cols-[1fr_auto_1fr]">
        <div className="space-y-2">
          <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm text-foreground">
            Visiting flamingos
          </div>
          <div className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm text-foreground">
            Resident fishes
          </div>
        </div>

        <span className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" />
        </span>

        <div className="rounded-lg border border-foreground/25 bg-card px-3 py-2.5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Shared resource
          </div>
          <div className="mt-0.5 text-sm font-semibold text-foreground">Zooplankton</div>
        </div>
      </div>

      <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Both species compete for the same resource in shallow South American lakes.
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Interference mechanism                                            */
/* ---------------------------------------------------------------- */

export function InterferenceMechanism() {
  return (
    <div className="my-5 rounded-xl border border-foreground/20 bg-muted/20 p-4">
      <div className="t-micro">Mechanism — interference competition</div>
      <FlowRow
        className="my-0 mt-2"
        items={[
          { label: "Presence of another species", tone: "warn" },
          { label: "Interference" },
          { label: "Reduced feeding efficiency" },
        ]}
        caption="This happens even when resources are abundant — it is not resource limitation."
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Gause theorem panel                                               */
/* ---------------------------------------------------------------- */

export function GauseTheoremPanel() {
  const rows = [
    { label: "Conditions", value: "Two closely related species competing for the same limiting resources." },
    { label: "Outcome", value: "They cannot coexist indefinitely." },
    { label: "Result", value: "The inferior competitor is eliminated." },
  ];

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border px-4 py-2.5">
        <div className="t-micro">Principle</div>
        <div className="mt-0.5 text-sm font-semibold tracking-tight text-foreground">
          Competitive Exclusion Principle — Gause
        </div>
      </div>
      <dl className="divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 gap-1 px-4 py-2.5 sm:grid-cols-[7rem_1fr] sm:gap-4">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:pt-0.5">
              {row.label}
            </dt>
            <dd className="text-sm leading-relaxed text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function AbingdonSequence() {
  return (
    <div className="my-5">
      <div className="t-micro">Example — Abingdon tortoise, Galapagos</div>
      <FlowRow
        className="my-0 mt-2"
        items={[
          { label: "Goats introduced" },
          { label: "Greater browsing efficiency", detail: "the competitive advantage", tone: "warn" },
          { label: "Abingdon tortoise extinct within a decade" },
        ]}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Competitive release — before / after                              */
/* ---------------------------------------------------------------- */

const DOTS_X = [26, 50, 74, 98, 122, 146, 170, 194, 218, 242, 266];
const DOTS_Y = [42, 66];

export function CompetitiveReleaseDiagram() {
  return (
    <figure className="my-6 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Before and after — Connell’s field experiments, Scotland’s rocky coast</div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <ShorePanel mode="before" />
        <ShorePanel mode="after" />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" aria-hidden>
            <circle cx="5" cy="5" r="4" className="fill-foreground/80" />
          </svg>
          <em>Balanus</em> (superior competitor)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg viewBox="0 0 10 10" className="h-2.5 w-2.5" aria-hidden>
            <circle cx="5" cy="5" r="3.5" className="fill-none stroke-foreground/60" strokeWidth="1.5" />
          </svg>
          <em>Chathamalus</em> (restricted species)
        </span>
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Removing the superior competitor releases the restricted species: <em>Chathamalus</em> expands across the shore
        it could not previously occupy. The bands are schematic — no measured boundaries are implied.
      </figcaption>
    </figure>
  );
}

function ShorePanel({ mode }: { mode: "before" | "after" }) {
  const isBefore = mode === "before";
  const balanus = isBefore ? DOTS_X.slice(0, 8) : [];
  const chathamalus = isBefore ? DOTS_X.slice(8) : DOTS_X;

  return (
    <div className="rounded-lg border border-border bg-muted/20 p-3">
      <div className="flex items-center justify-between gap-2">
        <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-foreground">
          {isBefore ? "Before — both present" : (
            <>
              After — <em>Balanus</em> removed
            </>
          )}
        </div>
        <span className="text-[10px] text-muted-foreground">
          {isBefore ? "restricted" : "expanded"}
        </span>
      </div>

      <svg viewBox="0 0 292 96" className="mt-2 h-auto w-full" role="img" aria-label={isBefore ? "Balanus occupies most of the shore, Chathamalus is restricted to one end" : "With Balanus removed, Chathamalus occupies the whole shore"}>
        <rect x="8" y="24" width="276" height="60" rx="4" className="fill-background stroke-border" strokeWidth="1" />
        {balanus.map((x) =>
          DOTS_Y.map((y) => (
            <circle key={`b-${x}-${y}`} cx={x} cy={y} r="4" className="fill-foreground/80" />
          )),
        )}
        {chathamalus.map((x) =>
          DOTS_Y.map((y) => (
            <circle
              key={`c-${x}-${y}`}
              cx={x}
              cy={y}
              r="3.5"
              className="fill-none stroke-foreground/60"
              strokeWidth="1.5"
            />
          )),
        )}
        <text x="146" y="17" textAnchor="middle" className="fill-muted-foreground" fontSize="9" fontFamily="sans-serif">
          rocky shore
        </text>
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* MacArthur warblers                                                */
/* ---------------------------------------------------------------- */

const WARBLERS = [
  { n: 1, x: 180, y: 62, angle: -60 },
  { n: 2, x: 112, y: 102, angle: 20 },
  { n: 3, x: 254, y: 106, angle: 100 },
  { n: 4, x: 142, y: 156, angle: 160 },
  { n: 5, x: 224, y: 162, angle: 240 },
];

export function WarblerPartitionDiagram() {
  return (
    <figure className="my-6 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Resource partitioning on one tree</div>

      <svg
        viewBox="0 0 360 316"
        className="mx-auto mt-3 h-auto w-full max-w-[360px]"
        role="img"
        aria-labelledby="warbler-title"
      >
        <title id="warbler-title">
          Five warbler species on a single tree, separated by foraging position and feeding time
        </title>

        {/* trunk and branches */}
        <path d="M 168 316 L 168 188 L 192 188 L 192 316 Z" className="fill-muted-foreground/30" />
        <path d="M 172 206 L 124 166" className="stroke-muted-foreground/30" strokeWidth="7" strokeLinecap="round" />
        <path d="M 190 208 L 240 172" className="stroke-muted-foreground/30" strokeWidth="7" strokeLinecap="round" />

        {/* canopy */}
        <path
          d="M 180 30 C 234 30, 290 60, 302 102 C 314 144, 268 184, 210 192 C 158 199, 94 188, 64 158 C 34 128, 42 76, 90 50 C 116 35, 150 30, 180 30 Z"
          className="fill-muted/60 stroke-border"
          strokeWidth="1.5"
        />

        {WARBLERS.map((w) => (
          <WarblerMarker key={w.n} {...w} />
        ))}
      </svg>

      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/20 px-3 py-2">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/30 text-[10px] font-bold text-foreground">
            1–5
          </span>
          <div className="text-xs leading-snug text-muted-foreground">
            <span className="font-medium text-foreground">Spatial marker</span> — position in the canopy, standing for
            the species’ foraging pattern.
          </div>
        </div>
        <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/20 px-3 py-2">
          <svg viewBox="0 0 16 16" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden>
            <circle cx="8" cy="8" r="6.5" className="fill-none stroke-foreground/50" strokeWidth="1.2" />
            <line x1="8" y1="8" x2="11" y2="4.5" className="stroke-foreground/70" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <div className="text-xs leading-snug text-muted-foreground">
            <span className="font-medium text-foreground">Temporal marker</span> — feeding time, drawn differently for
            each species.
          </div>
        </div>
      </div>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        MacArthur — five warbler species coexist on the same tree through resource partitioning. Different foraging
        patterns and feeding times reduce direct competition; the canopy is shared, not carved into exclusive
        territories.
      </figcaption>
    </figure>
  );
}

function WarblerMarker({
  n,
  x,
  y,
  angle,
}: {
  n: number;
  x: number;
  y: number;
  angle: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const hx = x + 17 + Math.cos(rad) * 4;
  const hy = y - 15 + Math.sin(rad) * 4;

  return (
    <g>
      <circle cx={x} cy={y} r="11" className="fill-card stroke-foreground/40" strokeWidth="1.2" />
      <text x={x} y={y + 4} textAnchor="middle" className="fill-foreground" fontSize="11" fontWeight="700" fontFamily="sans-serif">
        {n}
      </text>
      <circle cx={x + 17} cy={y - 15} r="7" className="fill-card stroke-foreground/40" strokeWidth="1" />
      <line
        x1={x + 17}
        y1={y - 15}
        x2={hx}
        y2={hy}
        className="stroke-foreground/70"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </g>
  );
}
