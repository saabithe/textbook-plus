import { ArrowDown, ArrowRight } from "lucide-react";
import { FlowRow } from "@/components/content/biology/FlowRow";

/**
 * PredationDiagrams — the shapes the predation section needs:
 * trophic energy flow, the three ecological roles, the Pisaster
 * cause-and-effect chain and the overexploitation loop.
 *
 * Only the +/−/0 language owns emerald/rose/slate. Amber is reserved for
 * "initiating event / consequence" emphasis so it never reads as a sign.
 */

const TROPHIC_STAGES = ["Autotrophs", "Herbivore / seed-eater", "Higher-level predator"];

export function TrophicEnergyDiagram() {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-4">
      <div className="t-micro">Trophic energy transfer — arrows show energy flow</div>

      <div className="mt-4 flex flex-col gap-1.5 sm:flex-row sm:items-start sm:gap-0">
        <Stage label={TROPHIC_STAGES[0]} detail="fix energy from sunlight" />
        <Arrow caption="e.g. sparrow eating a seed" />
        <Stage label={TROPHIC_STAGES[1]} detail="takes fixed plant energy" />
        <Arrow caption="e.g. tiger eating a deer" />
        <Stage label={TROPHIC_STAGES[2]} detail="receives it at a higher level" />
      </div>

      <div className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Both relationships are <strong className="font-semibold text-foreground">predation</strong> — the sparrow on a
        seed and the tiger on a deer differ in size, not in ecological role.
      </div>
    </div>
  );
}

function Stage({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="min-w-0 rounded-lg border border-border bg-muted/30 px-3 py-2 sm:flex-1">
      <div className="text-sm font-semibold leading-snug text-foreground">{label}</div>
      <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{detail}</div>
    </div>
  );
}

function Arrow({ caption }: { caption: string }) {
  return (
    <div className="flex items-center gap-2 py-0.5 sm:w-28 sm:flex-col sm:justify-center sm:gap-1 sm:py-0">
      <span className="text-muted-foreground" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
        <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
      </span>
      <span className="text-[10px] leading-tight text-muted-foreground sm:text-center">{caption}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */

interface RoleProps {
  index: number;
  title: string;
  summary: string;
  children: React.ReactNode;
}

function Role({ index, title, summary, children }: RoleProps) {
  return (
    <div className="relative pl-9" role="listitem">
      <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card text-xs font-bold text-foreground">
        {index}
      </span>
      <div className="text-sm font-semibold tracking-tight text-foreground">{title}</div>
      <div className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{summary}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function PredationRoles() {
  return (
    <div className="my-6 space-y-6" role="list">
      <Role index={1} title="Prey population control" summary="Keeps prey populations under check and helps prevent ecosystem instability.">
        <PreyControlFigure />
      </Role>

      <Role
        index={2}
        title="Biological control of invasive species"
        summary="A predator that feeds on the invader brings it back under control — the principle behind biological pest control in agriculture."
      >
        <FlowRow
          items={[
            { label: "Prickly pear cactus introduced into Australia", detail: "1920s", tone: "warn" },
            { label: "Cactus-feeding moth introduced", detail: "a predator of the cactus" },
            { label: "Cactus brought under control" },
          ]}
        />
      </Role>

      <Role
        index={3}
        title="Maintenance of species diversity"
        summary="Predation reduces competition among competing prey species — remove the predator and competitors eliminate each other."
      >
        <PisasterCauseEffect />
      </Role>
    </div>
  );
}

function PreyControlFigure() {
  return (
    <figure className="rounded-lg border border-border bg-muted/20 p-3">
      <svg
        viewBox="0 0 320 96"
        className="h-auto w-full max-w-[320px]"
        role="img"
        aria-labelledby="prey-control-title"
      >
        <title id="prey-control-title">
          A prey population held inside a check band by predation
        </title>
        <line x1="12" y1="80" x2="308" y2="80" className="stroke-border" strokeWidth="1" />
        <rect
          x="12"
          y="24"
          width="296"
          height="56"
          className="fill-foreground/5 stroke-border"
          strokeWidth="1"
          strokeDasharray="5 4"
          rx="3"
        />
        <path
          d="M 12 62 C 40 44, 62 68, 90 54 C 118 40, 140 66, 168 50 C 196 36, 220 64, 248 52 C 276 42, 292 56, 308 48"
          fill="none"
          className="stroke-foreground/70"
          strokeWidth="2"
        />
        <text x="16" y="18" className="fill-muted-foreground" fontSize="10" fontFamily="sans-serif">
          Upper limit held by predation
        </text>
        <text x="16" y="93" className="fill-muted-foreground" fontSize="10" fontFamily="sans-serif">
          Time →
        </text>
        <text x="300" y="93" textAnchor="end" className="fill-muted-foreground" fontSize="10" fontFamily="sans-serif">
          Prey population
        </text>
      </svg>
      <figcaption className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Predation holds prey numbers inside a check band instead of letting them run away.
      </figcaption>
    </figure>
  );
}

export function PisasterCauseEffect() {
  return (
    <div className="rounded-lg border border-amber-500/30 bg-amber-50/40 p-3 dark:bg-amber-950/20">
      <div className="t-micro">Cause and effect — American Pacific Coast intertidal areas</div>
      <FlowRow
        items={[
          { label: <>Starfish (<em>Pisaster</em>) removed</>, detail: "initiating event", tone: "warn" },
          { label: "Interspecific competition increases", detail: "prey species compete for the freed space" },
          { label: "Over 10 invertebrate species become extinct" },
        ]}
        className="my-0 mt-2"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */

/**
 * Three-node loop. Rendered as a ring with a return arrow so it reads as a
 * closed consequence, never as a normal population cycle.
 */
export function OverexploitationLoop() {
  return (
    <figure className="my-6 rounded-xl border border-amber-500/35 bg-amber-50/40 p-4 dark:bg-amber-950/20">
      <div className="t-micro">Consequence of overexploitation — not a normal population cycle</div>

      <svg
        viewBox="0 0 420 268"
        className="mx-auto mt-3 h-auto w-full max-w-[420px]"
        role="img"
        aria-labelledby="overexploit-title"
      >
        <title id="overexploit-title">
          Predator overexploits prey, prey become extinct, the predator then becomes extinct too
        </title>
        <defs>
          <marker
            id="oe-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-foreground/60" />
          </marker>
        </defs>

        {/* A → B */}
        <path
          d="M 292 74 Q 366 130 326 166"
          fill="none"
          className="stroke-foreground/60"
          strokeWidth="1.5"
          markerEnd="url(#oe-arrow)"
        />
        {/* B → C */}
        <path
          d="M 226 192 L 196 192"
          fill="none"
          className="stroke-foreground/60"
          strokeWidth="1.5"
          markerEnd="url(#oe-arrow)"
        />
        {/* C → A (return) */}
        <path
          d="M 104 166 Q 44 120 126 76"
          fill="none"
          className="stroke-foreground/60"
          strokeWidth="1.5"
          markerEnd="url(#oe-arrow)"
        />

        <Node x={130} y={36} width={160} label="Predator overexploits prey" />
        <Node x={228} y={170} width={164} label="Prey extinction" />
        <Node x={28} y={170} width={164} label="Predator extinction" />
      </svg>

      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        The final node closes back on the predator’s original dependence on prey: overexploitation removes the food
        supply that the predator itself needs. Predators therefore do not overexploit prey.
      </figcaption>
    </figure>
  );
}

function Node({ x, y, width, label }: { x: number; y: number; width: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={46}
        rx={8}
        className="fill-card stroke-border"
        strokeWidth="1"
      />
      <text
        x={x + width / 2}
        y={y + 27}
        textAnchor="middle"
        className="fill-foreground"
        fontSize="12"
        fontFamily="sans-serif"
      >
        {label}
      </text>
    </g>
  );
}
