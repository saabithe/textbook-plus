import { Fragment, type ReactNode } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Highlight } from "@/components/content/Highlight";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { cn } from "@/lib/utils";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

function SubsectionHeading({ children }: { children: ReactNode }) {
  return <div className={EYEBROW}>{children}</div>;
}

function Fact({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-xl border border-border bg-card p-3.5", className)}>
      <div className={EYEBROW}>{label}</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">{children}</div>
    </div>
  );
}

/* --------------------------------------------------- bacteriophage figures */

type PhageLabel = "dna" | "coat";

interface Point {
  x: number;
  y: number;
}

interface PhageTone {
  markerId: string;
  ariaLabel: string;
  title: string;
  caption: string;
  coatClass: string;
  coatStrokeClass: string;
  dnaClass: string;
  labelLines: string[];
  labelBoxClass: string;
  labelTextClass: string;
  leaderClass: string;
  markerClass: string;
  dotClass: string;
  leaderFrom: Point;
  leaderTo: Point;
}

const PHAGE_TONES: Record<PhageLabel, PhageTone> = {
  dna: {
    markerId: "hc-phage-p32",
    ariaLabel:
      "Bacteriophage labelled with radioactive phosphorus-32: the leader points to the DNA squiggle inside the head.",
    title: "³²P-labelled bacteriophage — DNA",
    caption: "³²P · DNA — the label points inside the head.",
    coatClass: "fill-muted stroke-border",
    coatStrokeClass: "stroke-foreground/40",
    dnaClass: "stroke-blue-600 dark:stroke-blue-300",
    labelLines: ["³²P · DNA"],
    labelBoxClass: "fill-blue-50 stroke-blue-500/60 dark:fill-blue-950/40",
    labelTextClass: "fill-blue-900 dark:fill-blue-100",
    leaderClass: "stroke-blue-600 dark:stroke-blue-300",
    markerClass: "fill-blue-600 dark:fill-blue-300",
    dotClass: "fill-blue-600 dark:fill-blue-300",
    leaderFrom: { x: 166, y: 37 },
    leaderTo: { x: 138, y: 62 },
  },
  coat: {
    markerId: "hc-phage-s35",
    ariaLabel:
      "Bacteriophage labelled with radioactive sulfur-35: the leader points to the outer protein coat of the head.",
    title: "³⁵S-labelled bacteriophage — protein coat",
    caption: "³⁵S · protein coat — the label points to the outer head and tail coat.",
    coatClass: "fill-amber-50 stroke-amber-600/70 dark:fill-amber-950/30",
    coatStrokeClass: "stroke-amber-600/70 dark:stroke-amber-300",
    dnaClass: "stroke-foreground/35",
    labelLines: ["³⁵S · protein", "coat"],
    labelBoxClass: "fill-amber-50 stroke-amber-600/60 dark:fill-amber-950/40",
    labelTextClass: "fill-amber-900 dark:fill-amber-100",
    leaderClass: "stroke-amber-600 dark:stroke-amber-300",
    markerClass: "fill-amber-600 dark:fill-amber-300",
    dotClass: "fill-amber-600 dark:fill-amber-300",
    leaderFrom: { x: 166, y: 37 },
    leaderTo: { x: 156, y: 64 },
  },
};

function BacteriophageFigure({ label }: { label: PhageLabel }) {
  const tone = PHAGE_TONES[label];

  return (
    <figure className="rounded-xl border border-border bg-card p-3">
      <svg viewBox="0 0 250 210" className="h-auto w-full" role="img" aria-label={tone.ariaLabel}>
        <title>{tone.title}</title>
        <defs>
          <marker id={tone.markerId} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" className={tone.markerClass} />
          </marker>
        </defs>

        <polygon
          points="110,16 156,40 156,88 110,112 64,88 64,40"
          className={tone.coatClass}
          strokeWidth={2.2}
          strokeLinejoin="round"
        />
        <rect x={104} y={110} width={12} height={58} rx={3} className={tone.coatClass} strokeWidth={2} />
        <line x1={100} y1={126} x2={120} y2={126} className="stroke-foreground/35" strokeWidth={1.1} />
        <line x1={100} y1={142} x2={120} y2={142} className="stroke-foreground/35" strokeWidth={1.1} />
        <rect x={94} y={166} width={32} height={8} rx={2} className={tone.coatClass} strokeWidth={2} />
        <path
          d="M98 174 C 88 184, 78 188, 68 190"
          fill="none"
          className={tone.coatStrokeClass}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M122 174 C 132 184, 142 188, 152 190"
          fill="none"
          className={tone.coatStrokeClass}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M106 174 C 102 184, 98 190, 94 196"
          fill="none"
          className={tone.coatStrokeClass}
          strokeWidth={1.8}
          strokeLinecap="round"
        />
        <path
          d="M118 174 C 122 184, 126 190, 130 196"
          fill="none"
          className={tone.coatStrokeClass}
          strokeWidth={1.8}
          strokeLinecap="round"
        />

        <path
          d="M82 58 C 92 44, 102 72, 112 55 S 132 42, 138 62 S 126 84, 140 86"
          fill="none"
          className={tone.dnaClass}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <path
          d="M84 74 C 94 62, 102 86, 114 70 S 130 60, 136 76"
          fill="none"
          className={tone.dnaClass}
          strokeWidth={2}
          strokeLinecap="round"
        />

        <line
          x1={tone.leaderFrom.x}
          y1={tone.leaderFrom.y}
          x2={tone.leaderTo.x}
          y2={tone.leaderTo.y}
          className={tone.leaderClass}
          strokeWidth={1.4}
          markerEnd={`url(#${tone.markerId})`}
        />
        <circle cx={tone.leaderTo.x} cy={tone.leaderTo.y} r={3} className={tone.dotClass} />

        <rect x={166} y={18} width={78} height={38} rx={6} className={tone.labelBoxClass} strokeWidth={1.2} />
        <text x={174} y={33} className={tone.labelTextClass} fontSize={10.5} fontWeight={700}>
          {tone.labelLines[0]}
        </text>
        {tone.labelLines[1] && (
          <text x={174} y={46} className={tone.labelTextClass} fontSize={10.5} fontWeight={700}>
            {tone.labelLines[1]}
          </text>
        )}
      </svg>
      <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">{tone.caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------ centrifugation separation */

function CentrifugationSeparation() {
  return (
    <figure className="my-4 rounded-xl border border-border bg-card p-3.5">
      <svg
        viewBox="0 0 380 190"
        className="h-auto w-full"
        role="img"
        aria-label="A centrifuged test tube with an upper supernatant layer of lighter viral coats and a lower pellet of heavier bacterial cells."
      >
        <title>Centrifugation separation: supernatant and pellet</title>
        <defs>
          <clipPath id="hc-centrifuge-tube">
            <path d="M104 18 H180 V128 Q180 166 142 166 Q104 166 104 128 Z" />
          </clipPath>
          <marker id="hc-centrifuge-leader" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" className="fill-foreground/60" />
          </marker>
        </defs>

        <g clipPath="url(#hc-centrifuge-tube)">
          <rect x={100} y={18} width={84} height={102} className="fill-blue-50/70 dark:fill-blue-950/30" />
          <rect x={100} y={120} width={84} height={50} className="fill-emerald-100/80 dark:fill-emerald-950/40" />
          <line x1={100} y1={120} x2={184} y2={120} className="stroke-foreground/40" strokeWidth={1.4} />
        </g>
        <path
          d="M104 18 H180 V128 Q180 166 142 166 Q104 166 104 128 Z"
          fill="none"
          className="stroke-foreground/55"
          strokeWidth={2}
        />

        <line
          x1={180}
          y1={60}
          x2={212}
          y2={60}
          className="stroke-foreground/50"
          strokeWidth={1.2}
          markerEnd="url(#hc-centrifuge-leader)"
        />
        <text x={220} y={57} className="fill-foreground text-[11px] font-bold">
          Supernatant
        </text>
        <text x={220} y={71} className="fill-muted-foreground text-[10px]">
          Lighter viral coats
        </text>

        <line
          x1={176}
          y1={140}
          x2={212}
          y2={140}
          className="stroke-foreground/50"
          strokeWidth={1.2}
          markerEnd="url(#hc-centrifuge-leader)"
        />
        <text x={220} y={137} className="fill-foreground text-[11px] font-bold">
          Pellet
        </text>
        <text x={220} y={151} className="fill-muted-foreground text-[10px]">
          Heavier bacterial cells
        </text>
      </svg>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Centrifugation — Separation: Pellet = heavier bacterial cells; Supernatant = lighter viral coats.
      </figcaption>
    </figure>
  );
}

/* --------------------------------------------------------- parallel pathways */

type PathwayKey = "s35" | "p32";

interface PathwayTone {
  row: string;
  chip: string;
  stage: string;
  result: string;
  resultLabel: string;
}

const PATHWAY_TONES: Record<PathwayKey, PathwayTone> = {
  s35: {
    row: "border-border bg-card",
    chip: "bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-100",
    stage: "border-border bg-muted/25",
    result: "border-amber-600/40 bg-amber-50/60 dark:bg-amber-950/25",
    resultLabel: "text-amber-800 dark:text-amber-200",
  },
  p32: {
    row: "border-blue-500/40 bg-blue-50/40 dark:bg-blue-950/20",
    chip: "bg-blue-600 text-white",
    stage: "border-blue-500/30 bg-card",
    result: "border-2 border-blue-600/50 bg-blue-100/70 dark:bg-blue-950/40",
    resultLabel: "text-blue-800 dark:text-blue-200",
  },
};

interface Pathway {
  key: PathwayKey;
  isotope: string;
  result: string;
  decisive?: boolean;
}

const PATHWAYS: Pathway[] = [
  { key: "s35", isotope: "³⁵S", result: "³⁵S → Supernatant" },
  { key: "p32", isotope: "³²P", result: "³²P → Bacterial pellet", decisive: true },
];

const PATHWAY_STAGES: string[] = ["Infection", "Blending", "Centrifugation"];

function StageArrow() {
  return (
    <span className="flex items-center text-muted-foreground" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
      <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
    </span>
  );
}

function ParallelPathways() {
  return (
    <div className="my-6 rounded-2xl border border-border bg-card p-4">
      <div className={EYEBROW}>Parallel pathways</div>
      <div className="mt-3 space-y-2.5">
        {PATHWAYS.map((pathway) => {
          const tone = PATHWAY_TONES[pathway.key];

          return (
            <div key={pathway.key} className={cn("rounded-xl border p-3.5", tone.row)}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <span
                  className={cn(
                    "shrink-0 self-start rounded-md px-2 py-1 text-[0.7rem] font-bold",
                    tone.chip,
                  )}
                >
                  {pathway.isotope}
                </span>

                <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
                  {PATHWAY_STAGES.map((stage, index) => (
                    <Fragment key={stage}>
                      <span className={cn("rounded-md border px-2 py-1 text-xs font-medium text-foreground", tone.stage)}>
                        {stage}
                      </span>
                      {index < PATHWAY_STAGES.length - 1 && <StageArrow />}
                    </Fragment>
                  ))}
                  <StageArrow />
                  <div className={cn("min-w-[9.5rem] rounded-lg border px-3 py-2", tone.result)}>
                    <div className={cn("text-[0.6rem] font-bold uppercase tracking-[0.1em]", tone.resultLabel)}>
                      {pathway.decisive ? "Decisive observation" : "Result"}
                    </div>
                    <div className="mt-0.5 text-sm font-bold text-foreground">
                      {pathway.decisive ? <Highlight color="yellow">{pathway.result}</Highlight> : pathway.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ section */

export function HersheyChaseExperiment() {
  return (
    <section className="my-8 space-y-6">
      <div>
        <SubsectionHeading>4.1 Researchers and experimental system</SubsectionHeading>
        <div className="mt-3 rounded-2xl border border-border bg-card p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            <Fact label="Scientists" className="col-span-2">
              <strong>Alfred Hershey</strong> and <strong>Martha Chase</strong>
            </Fact>
            <Fact label="Year">1952</Fact>
            <Fact label="Organism">
              <strong>Escherichia coli (E. coli)</strong>
            </Fact>
            <Fact label="Virus">
              <strong>Bacteriophage</strong> — a virus that infects bacteria.
            </Fact>
            <Fact label="Objective" className="col-span-2 sm:col-span-5">
              Determine whether <strong>DNA</strong> or <strong>protein</strong> enters bacterial cells during viral
              infection.
            </Fact>
          </div>
        </div>
      </div>

      <div>
        <SubsectionHeading>4.2 Radioactive isotopes</SubsectionHeading>
        <p className="my-3 text-sm leading-relaxed text-foreground">
          Two <strong>radioactive isotopes</strong> were used to distinguish DNA from protein.
        </p>

        <TableCard
          headers={["Radioactive isotope", "Labels", "Reason"]}
          rows={[
            { cells: ["³²P (Radioactive phosphorus)", "DNA", "DNA contains phosphorus"] },
            { cells: ["³⁵S (Radioactive sulfur)", "Protein coat", "Some proteins contain sulfur; DNA does not"] },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <BacteriophageFigure label="dna" />
          <BacteriophageFigure label="coat" />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-300" aria-hidden />
            ³²P labels DNA
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-300" aria-hidden />
            ³⁵S labels protein coat
          </span>
        </div>
      </div>

      <div>
        <SubsectionHeading>4.3 Three experimental stages</SubsectionHeading>
        <Stepper
          steps={[
            {
              label: (
                <>
                  <strong>Infection</strong>: Radioactively labelled bacteriophages were allowed to infect E. coli
                  bacteria.
                </>
              ),
              description: "Viral genetic material entered the bacterial cells.",
            },
            {
              label: <strong>Blending</strong>,
              description: "The infected mixture was agitated in a blender. This detached viral protein coats from the bacterial cells.",
            },
            {
              label: <strong>Centrifugation</strong>,
              description:
                "The mixture was centrifuged. Heavier bacterial cells formed the pellet. Lighter viral protein coats remained in the supernatant.",
            },
          ]}
        />
        <CentrifugationSeparation />
      </div>

      <div>
        <SubsectionHeading>4.4 Results</SubsectionHeading>
        <p className="my-3 text-sm leading-relaxed text-foreground">
          The results differed depending on which component was radioactively labelled.
        </p>

        <TableCard
          headers={["Labelled component", "Location of radioactivity"]}
          rows={[
            { cells: ["³⁵S — Protein coat", "Supernatant"] },
            { cells: ["³²P — DNA", "Inside bacterial cells / Pellet"] },
          ]}
          caption="Interpretation: Protein coats remained outside the bacterial cells. Viral DNA entered the bacterial cells."
        />

        <ParallelPathways />
      </div>

      <div>
        <SubsectionHeading>4.5 Conclusion</SubsectionHeading>
        <KeyPoint title="Conclusion">
          <p className="text-sm leading-relaxed text-foreground">
            <strong>DNA</strong> — Is the genetic material transferred from bacteriophage to bacteria.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            The Hershey–Chase experiment provided strong experimental proof that{" "}
            <Highlight color="yellow">DNA, rather than protein, carries genetic information</Highlight> in the
            bacteriophage system.
          </p>
        </KeyPoint>
      </div>
    </section>
  );
}
