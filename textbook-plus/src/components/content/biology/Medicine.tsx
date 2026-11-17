import { Fragment } from "react";
import { ArrowDown, ArrowRight, Dna, Microscope, Radio, ShieldCheck, Syringe } from "lucide-react";

/**
 * Medicine — the three medical applications in §10.2.
 *
 * teal = the living chain / host cell, indigo = the engineered chain,
 * violet = the peptide or vector agent, amber = the join / limitation,
 * rose = the defect or parasite, emerald = the working outcome.
 *
 * The insulin figure is deliberately a two-panel structure drawing: the same
 * two chains on both sides, with only the C-peptide appearing on the left and
 * floating free under the maturation arrow.
 */

const A_CHAIN = "var(--subject-biology)";
const B_CHAIN = "var(--subject-physics)";
const PEPTIDE = "var(--subject-english)";
const BOND = "var(--warning)";
const DEFECT = "var(--destructive)";
const INK = "var(--foreground)";

/* ======================================================= 10.2.1  insulin */

const NEED_STEPS = [
  {
    n: "1",
    label: "Animal source",
    text: "Insulin was traditionally extracted from the pancreas of slaughtered cattle and pigs.",
    card: "border-border bg-muted/25",
    dot: "bg-muted-foreground/50",
  },
  {
    n: "2",
    label: "Problem",
    text: "Animal insulin triggered allergic reactions, or reactions to foreign proteins, in some patients.",
    card: "border-amber-600/35 bg-amber-50/45 dark:bg-amber-950/20",
    dot: "bg-amber-600/70",
  },
  {
    n: "3",
    label: "Need",
    text: "Human insulin produced through genetic engineering.",
    card: "border-teal-600/35 bg-teal-50/45 dark:bg-teal-950/20",
    dot: "bg-teal-600/70",
  },
];

export function InsulinNeedCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Syringe className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Why a human source was needed
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-stretch">
        {NEED_STEPS.map((step, index) => (
          <Fragment key={step.n}>
            <div className={`flex-1 rounded-lg border px-3 py-2.5 ${step.card}`}>
              <div className="flex items-center gap-1.5">
                <span className={`h-1.5 w-1.5 rounded-full ${step.dot}`} aria-hidden />
                <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {step.label}
                </span>
              </div>
              <div className="mt-1 text-xs leading-relaxed text-foreground">{step.text}</div>
            </div>

            {index < NEED_STEPS.length - 1 && (
              <div className="flex items-center justify-center py-0.5 sm:px-1" aria-hidden>
                <ArrowDown className="h-3.5 w-3.5 text-muted-foreground sm:hidden" />
                <ArrowRight className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function ChainBar({ x, y, label, color }: { x: number; y: number; label: string; color: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={150}
        height={26}
        rx={13}
        fill={color}
        fillOpacity={0.16}
        stroke={color}
        strokeWidth={1.8}
      />
      <text x={x + 75} y={y + 18.5} textAnchor="middle" fontSize={12} fontWeight={700} fill={INK}>
        {label}
      </text>
    </g>
  );
}

function DisulfideBridge({ x }: { x: number }) {
  return <line x1={x} y1={82} x2={x} y2={136} stroke={BOND} strokeWidth={2} strokeDasharray="4 2" />;
}

function InsulinPanel({ mature }: { mature: boolean }) {
  return (
    <svg
      viewBox="0 0 300 190"
      className="h-auto w-full"
      role="img"
      aria-label={
        mature
          ? "Mature insulin: an A-chain and a B-chain joined by disulfide bridges, with no C-peptide."
          : "Pro-insulin: an A-chain and a B-chain, with a C-peptide joining them and disulfide bridges between the chains."
      }
    >
      <title>{mature ? "Mature insulin" : "Pro-insulin"}</title>

      <text x={16} y={20} fontSize={10.5} fontWeight={700} letterSpacing={1.1} fill={INK} fillOpacity={0.55}>
        {mature ? "MATURE INSULIN" : "PRO-INSULIN"}
      </text>
      <text x={16} y={34} fontSize={11} fill={INK} fillOpacity={0.6}>
        {mature ? "active hormone" : "inactive precursor"}
      </text>

      <ChainBar x={24} y={56} label="A-chain" color={A_CHAIN} />
      <ChainBar x={24} y={136} label="B-chain" color={B_CHAIN} />
      <DisulfideBridge x={58} />
      <DisulfideBridge x={100} />

      {!mature && (
        <>
          <path
            d="M174 69 C 236 69 236 149 174 149"
            fill="none"
            stroke={PEPTIDE}
            strokeWidth={6}
            strokeLinecap="round"
            opacity={0.85}
          />
          <text x={205} y={113} textAnchor="middle" fontSize={11} fontWeight={700} fill={PEPTIDE}>
            C-peptide
          </text>
        </>
      )}

      <text x={24} y={182} fontSize={10} fill={INK} fillOpacity={0.65}>
        –S–S– disulfide bridges
      </text>
    </svg>
  );
}

function FreePeptideGlyph() {
  return (
    <svg viewBox="0 0 64 30" className="h-6 w-14" aria-hidden>
      <path
        d="M10 6 C 10 26 54 26 54 6"
        fill="none"
        stroke={PEPTIDE}
        strokeWidth={5}
        strokeLinecap="round"
        opacity={0.85}
      />
    </svg>
  );
}

export function InsulinStructureDiagram() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex-1 rounded-lg border border-border bg-muted/20 p-2">
          <InsulinPanel mature={false} />
        </div>

        <div className="flex flex-col items-center justify-center gap-1 sm:px-2">
          <div className="flex items-center gap-1.5 text-[9.5px] font-semibold text-foreground/75">
            <span>C-peptide removed</span>
            <ArrowDown className="h-3 w-3 sm:hidden" aria-hidden />
            <ArrowRight className="hidden h-3 w-3 sm:block" aria-hidden />
          </div>
          <div className="flex flex-col items-center rounded-md border border-violet-600/30 bg-violet-50/45 px-2 py-1 dark:bg-violet-950/20">
            <FreePeptideGlyph />
            <span className="text-[9px] font-semibold text-violet-800 dark:text-violet-300">free C-peptide</span>
          </div>
        </div>

        <div className="flex-1 rounded-lg border border-border bg-muted/20 p-2">
          <InsulinPanel mature />
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Maturation removes the C-peptide: pro-insulin (inactive) becomes mature insulin (active), with the A and B
        chains joined by disulfide bridges and the C-peptide released.
      </figcaption>
    </figure>
  );
}

const MATURATION_ROWS = [
  { feature: "State", pro: "Inactive precursor", mature: "Active hormone" },
  { feature: "Chains", pro: "A + B + C peptide", mature: "A + B chains" },
  { feature: "C-peptide", pro: "Contains C-peptide", mature: "C-peptide absent" },
];

export function InsulinMaturationTable() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="hidden grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border bg-muted/30 sm:grid">
        <div className="px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Feature
        </div>
        <div className="px-3 py-2 text-[10px] font-bold text-amber-900 dark:text-amber-200">Pro-insulin</div>
        <div className="px-3 py-2 text-[10px] font-bold text-emerald-900 dark:text-emerald-200">
          Mature insulin
        </div>
      </div>

      {MATURATION_ROWS.map((row, index) => (
        <div
          key={row.feature}
          className={
            index === 0
              ? "px-3 py-2.5 sm:grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] sm:items-center"
              : "border-t border-border px-3 py-2.5 sm:grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1fr)] sm:items-center"
          }
        >
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {row.feature}
          </div>

          <div className="mt-1.5 grid grid-cols-2 gap-1.5 sm:contents">
            <div className="rounded-md border border-amber-600/30 bg-amber-50/45 px-2 py-1.5 text-[11px] leading-snug text-foreground sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0">
              <span className="mr-1 text-[8.5px] font-semibold uppercase tracking-[0.06em] text-amber-800 sm:hidden dark:text-amber-300">
                Pro
              </span>
              {row.pro}
            </div>
            <div className="rounded-md border border-emerald-600/30 bg-emerald-50/45 px-2 py-1.5 text-[11px] leading-snug text-foreground sm:rounded-none sm:border-0 sm:bg-transparent sm:px-3 sm:py-0">
              <span className="mr-1 text-[8.5px] font-semibold uppercase tracking-[0.06em] text-emerald-800 sm:hidden dark:text-emerald-300">
                Mature
              </span>
              {row.mature}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StageArrow() {
  return (
    <div className="flex items-center justify-center py-0.5 sm:px-1" aria-hidden>
      <ArrowDown className="h-4 w-4 text-muted-foreground sm:hidden" />
      <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
    </div>
  );
}

function ChainChip({ label, color }: { label: string; color: string }) {
  return (
    <div
      className="rounded-md border px-2 py-1.5 text-center text-[11px] font-semibold text-foreground"
      style={{ borderColor: `color-mix(in oklab, ${color} 35%, transparent)`, backgroundColor: `color-mix(in oklab, ${color} 10%, transparent)` }}
    >
      {label}
    </div>
  );
}

export function EliLillyProcess() {
  const meta = [
    { label: "Company", value: "Eli Lilly" },
    { label: "Year", value: "1983" },
    { label: "Host", value: "E. coli" },
    { label: "Vector", value: "Plasmids" },
  ];

  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Historical breakthrough
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Recombinant insulin production</div>
        </div>
        <div className="text-[10px] text-muted-foreground">American company</div>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {meta.map((item) => (
          <div key={item.label} className="rounded-md border border-border bg-muted/25 px-2 py-1.5">
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
              {item.label}
            </div>
            <div className="mt-0.5 text-[11px] font-semibold text-foreground">
              {item.value === "E. coli" ? <em>E. coli</em> : item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-stretch">
        <div className="flex-1 rounded-lg border border-border bg-muted/20 p-2.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Stage 1 · Prepare DNA
          </div>
          <div className="mt-2 space-y-1.5">
            <ChainChip label="A-chain DNA" color={A_CHAIN} />
            <ChainChip label="B-chain DNA" color={B_CHAIN} />
          </div>
          <div className="mt-2 text-[10.5px] leading-snug text-foreground/70">
            Two DNA sequences prepared chemically, corresponding to the A and B chains.
          </div>
        </div>

        <StageArrow />

        <div className="flex-1 rounded-lg border border-border bg-muted/20 p-2.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Stage 2 · Express separately
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="flex items-center justify-center gap-1.5 rounded-md border border-teal-600/30 bg-teal-50/45 px-2 py-1.5 dark:bg-teal-950/20">
              <span className="text-[10px] italic text-foreground/75">E. coli</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" aria-hidden />
              <span className="text-[11px] font-semibold text-foreground">A-chain</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 rounded-md border border-blue-600/30 bg-blue-50/45 px-2 py-1.5 dark:bg-blue-950/20">
              <span className="text-[10px] italic text-foreground/75">E. coli</span>
              <ArrowRight className="h-3 w-3 text-muted-foreground" aria-hidden />
              <span className="text-[11px] font-semibold text-foreground">B-chain</span>
            </div>
          </div>
          <div className="mt-2 text-[10.5px] leading-snug text-foreground/70">
            Chains produced separately and extracted individually.
          </div>
        </div>

        <StageArrow />

        <div className="flex-1 rounded-lg border-2 border-emerald-600/35 bg-emerald-50/40 p-2.5 dark:bg-emerald-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
            Stage 3 · Join chains
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1">
            <ChainChip label="A-chain" color={A_CHAIN} />
            <ChainChip label="B-chain" color={B_CHAIN} />
          </div>
          <div className="flex justify-center py-1" aria-hidden>
            <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <div className="rounded-md border border-amber-600/35 bg-amber-50/50 px-2 py-1.5 text-center text-[10.5px] font-semibold text-foreground dark:bg-amber-950/20">
            Disulfide bonds (–S–S–)
          </div>
          <div className="mt-1.5 rounded-md border border-emerald-600/40 bg-card px-2 py-1.5 text-center text-[11px] font-bold text-emerald-950 dark:text-emerald-100">
            Functional human insulin
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        The two chains travel in parallel through <em>E. coli</em> and only meet at the final joining stage, where
        disulfide bonds assemble functional human insulin.
      </figcaption>
    </figure>
  );
}

export function EliLillyTakeaway() {
  return (
    <div className="my-5 rounded-xl border-l-[3px] border-indigo-600/60 bg-indigo-50/40 px-4 py-3 dark:bg-indigo-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
        Exam takeaway
      </div>
      <div className="mt-1 text-xs leading-relaxed text-foreground">
        Eli Lilly produced human insulin by separately synthesising the A and B chains in <em>E. coli</em> and joining
        them through disulfide bonds.
      </div>
    </div>
  );
}

/* =================================================== 10.2.2  gene therapy */

export function GeneTherapyDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-teal-600/35 bg-teal-50/40 p-4 dark:bg-teal-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Definition
      </div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">Gene therapy</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        A collection of methods used to correct a gene defect diagnosed in a child or embryo by introducing a normal,
        functional gene to compensate for the non-functional gene.
      </div>

      <div className="mt-3 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg border border-rose-600/35 bg-rose-50/45 px-2.5 py-2 text-center dark:bg-rose-950/20">
          <div className="text-[10.5px] font-semibold text-foreground">Non-functional gene</div>
        </div>
        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
          <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
        </div>
        <div className="rounded-lg border border-teal-600/40 bg-card px-2.5 py-2 text-center">
          <div className="text-[10.5px] font-semibold text-foreground">
            Normal, functional gene introduced to compensate
          </div>
        </div>
      </div>
    </div>
  );
}

const ADA_FACTS = [
  { label: "ADA", text: "Adenosine deaminase — an enzyme essential for immune system function." },
  { label: "ADA deficiency", text: "Caused by deletion of the ADA gene." },
  { label: "SCID", text: "Severe Combined Immunodeficiency." },
];

function SplitConnector() {
  return (
    <>
      <div className="flex justify-center py-0.5 sm:hidden" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <svg viewBox="0 0 400 32" className="hidden h-8 w-full sm:block" aria-hidden preserveAspectRatio="none">
        <path
          d="M200 0 V11 M200 11 H100 V32 M200 11 H300 V32"
          fill="none"
          stroke={INK}
          strokeOpacity={0.28}
          strokeWidth={1.2}
        />
      </svg>
    </>
  );
}

function BranchCard({
  title,
  outcome,
  color,
}: {
  title: string;
  outcome: string;
  color: "teal" | "blue";
}) {
  const tone =
    color === "teal"
      ? {
          card: "border-teal-600/35 bg-teal-50/45 dark:bg-teal-950/20",
          title: "text-teal-900 dark:text-teal-200",
        }
      : {
          card: "border-blue-600/35 bg-blue-50/45 dark:bg-blue-950/20",
          title: "text-blue-900 dark:text-blue-200",
        };

  return (
    <div className={`rounded-lg border px-3 py-2.5 text-center ${tone.card}`}>
      <div className={`text-xs font-bold tracking-tight ${tone.title}`}>{title}</div>
      <div className="flex justify-center py-0.5" aria-hidden>
        <ArrowDown className="h-3 w-3 text-muted-foreground" />
      </div>
      <div className="text-[11px] leading-snug text-foreground">{outcome}</div>
    </div>
  );
}

export function AdaScidBranchDiagram() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
        {ADA_FACTS.map((fact) => (
          <div key={fact.label} className="rounded-lg border border-border bg-muted/25 px-2.5 py-2">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              {fact.label}
            </div>
            <div className="mt-0.5 text-[11px] leading-snug text-foreground">{fact.text}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-3 max-w-md">
        <div className="rounded-lg border-2 border-rose-600/35 bg-rose-50/45 px-3 py-2 text-center dark:bg-rose-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
            Immune system connection
          </div>
          <div className="text-xs font-bold tracking-tight text-foreground">Combined immunodeficiency</div>
        </div>

        <SplitConnector />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <BranchCard title="B cells" outcome="Antibody-mediated immunity" color="teal" />
          <BranchCard title="T cells" outcome="Cell-mediated immunity" color="blue" />
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        ADA is essential for immune system function; combined immunodeficiency affects both antibody-mediated and
        cell-mediated immunity.
      </figcaption>
    </figure>
  );
}

const APPROACHES = [
  {
    icon: Syringe,
    method: "Bone marrow transplantation",
    description: "Alternative treatment.",
  },
  {
    icon: Syringe,
    method: "Enzyme replacement therapy",
    description: "Injection of functional ADA enzyme.",
  },
  {
    icon: Dna,
    method: "Genetically engineered lymphocytes",
    description: "Introduction of functional ADA cDNA into patient lymphocytes.",
  },
];

export function GeneTherapyApproaches() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          First clinical gene therapy
        </div>
        <div className="text-[10px] text-muted-foreground">1990</div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-muted/25 px-2.5 py-2">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">Year</div>
          <div className="mt-0.5 text-[11px] font-semibold text-foreground">1990</div>
        </div>
        <div className="rounded-lg border border-border bg-muted/25 px-2.5 py-2">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">Patient</div>
          <div className="mt-0.5 text-[11px] font-semibold text-foreground">A 4-year-old girl</div>
        </div>
        <div className="rounded-lg border border-border bg-muted/25 px-2.5 py-2">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
            Condition
          </div>
          <div className="mt-0.5 text-[11px] font-semibold text-foreground">ADA deficiency</div>
        </div>
      </div>

      <div className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Available treatment approaches
      </div>

      <div className="mt-1.5 space-y-1.5">
        {APPROACHES.map((approach) => {
          const Icon = approach.icon;
          return (
            <div
              key={approach.method}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-muted/20 px-3 py-2"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-border bg-card">
                <Icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
              </span>
              <div>
                <div className="text-[11.5px] font-semibold leading-snug text-foreground">{approach.method}</div>
                <div className="mt-0.5 text-[11px] leading-snug text-foreground/75">{approach.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LymphocyteGlyph({ vector = false }: { vector?: boolean }) {
  return (
    <svg viewBox="0 0 34 34" className="h-7 w-7 shrink-0" aria-hidden>
      <circle cx={17} cy={17} r={12} fill={A_CHAIN} fillOpacity={0.16} stroke={A_CHAIN} strokeWidth={1.6} />
      <circle cx={17} cy={17} r={4.6} fill={A_CHAIN} fillOpacity={0.45} />
      {vector && <circle cx={28} cy={6} r={3.6} fill="none" stroke={PEPTIDE} strokeWidth={1.5} />}
    </svg>
  );
}

const WORKFLOW = [
  {
    title: "Patient's blood",
    text: "Lymphocytes are isolated from the patient's blood.",
    highlight: false,
  },
  {
    title: "In-vitro culture",
    text: "Isolated lymphocytes are cultured outside the body.",
    highlight: false,
  },
  {
    title: "Gene transfer",
    text: "Functional ADA cDNA is introduced using a retroviral vector.",
    highlight: true,
  },
  {
    title: "Re-infusion",
    text: "Genetically engineered lymphocytes are returned to the patient.",
    highlight: false,
  },
];

export function GeneTherapyWorkflow() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-2">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Gene therapy workflow
        </div>
        <div className="text-[10px] text-muted-foreground">four steps</div>
      </div>

      <div className="mx-auto max-w-lg">
        {WORKFLOW.map((step, index) => (
          <div key={step.title} className="flex gap-2.5">
            <div className="flex flex-col items-center">
              <div
                className={
                  step.highlight
                    ? "grid h-6 w-6 place-items-center rounded-full border-2 border-violet-600/50 bg-violet-50 text-[10px] font-bold text-violet-900 dark:bg-violet-950/40 dark:text-violet-200"
                    : "grid h-6 w-6 place-items-center rounded-full border border-border bg-muted/40 text-[10px] font-bold text-muted-foreground"
                }
              >
                {index + 1}
              </div>
              {index < WORKFLOW.length - 1 && <div className="w-px flex-1 bg-border" aria-hidden />}
            </div>

            <div
              className={
                step.highlight
                  ? "mb-2 flex-1 rounded-lg border-2 border-violet-600/40 bg-violet-50/50 px-3 py-2 dark:bg-violet-950/25"
                  : "mb-2 flex-1 rounded-lg border border-border bg-muted/20 px-3 py-2"
              }
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-[11.5px] font-bold leading-snug text-foreground">{step.title}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-foreground/75">{step.text}</div>
                  {step.highlight && (
                    <div className="mt-1 inline-flex items-center rounded border border-violet-600/30 bg-card px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-violet-800 dark:text-violet-300">
                      Retroviral vector · key gene-transfer step
                    </div>
                  )}
                </div>
                <LymphocyteGlyph vector={step.highlight} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GeneTherapyLimitationCard() {
  const chain = [
    "Lymphocytes are not immortal.",
    "Genetically engineered lymphocytes do not remain permanently in the patient.",
    "Periodic infusions are required.",
  ];

  return (
    <div className="my-5 rounded-xl border border-amber-600/35 bg-amber-50/40 p-4 dark:bg-amber-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
        Limitation of the treatment
      </div>

      <div className="mt-2 space-y-1.5">
        {chain.map((line, index) => (
          <Fragment key={line}>
            <div className="rounded-md border border-amber-700/25 bg-card px-2.5 py-1.5 text-[11.5px] leading-snug text-foreground">
              {line}
            </div>
            {index < chain.length - 1 && (
              <div className="flex justify-center" aria-hidden>
                <ArrowDown className="h-3 w-3 text-amber-800/60 dark:text-amber-300/60" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function GeneTherapyPermanentCure() {
  return (
    <div className="my-5 rounded-xl border-2 border-emerald-600/35 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
        Permanent cure strategy
      </div>

      <div className="mt-2 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg border border-emerald-700/30 bg-card px-2.5 py-2 text-center">
          <div className="text-[10.5px] font-semibold leading-snug text-foreground">
            Functional ADA gene isolated from marrow cells
          </div>
        </div>
        <div className="flex items-center justify-center text-emerald-800/60 dark:text-emerald-300/60" aria-hidden>
          <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
          <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
        </div>
        <div className="rounded-lg border border-emerald-700/30 bg-card px-2.5 py-2 text-center">
          <div className="text-[10.5px] font-semibold leading-snug text-foreground">
            Introduced into target host cells at an early embryonic stage
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================= 10.2.3  diagnosis */

const TECHNIQUES = [
  {
    n: "1",
    name: "Polymerase Chain Reaction (PCR)",
    principle: "Amplification of nucleic acids",
    icon: Dna,
    tone: "border-indigo-600/35 bg-indigo-50/45 dark:bg-indigo-950/20",
  },
  {
    n: "2",
    name: "Probe hybridisation and autoradiography",
    principle: "Hybridisation between complementary nucleic acid sequences",
    icon: Radio,
    tone: "border-violet-600/35 bg-violet-50/45 dark:bg-violet-950/20",
  },
  {
    n: "3",
    name: "ELISA",
    principle: "Antigen–antibody interaction",
    icon: ShieldCheck,
    tone: "border-teal-600/35 bg-teal-50/45 dark:bg-teal-950/20",
  },
];

export function DiagnosisProblemSolution() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Microscope className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Limitation of conventional diagnostic methods
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-lg border border-rose-600/35 bg-rose-50/45 px-3 py-2.5 dark:bg-rose-950/20">
          <div className="space-y-1.5">
            <div className="flex gap-2 text-[11px] leading-relaxed text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
              <span>Serum and urine analysis may fail to detect very low concentrations of pathogens.</span>
            </div>
            <div className="flex gap-2 text-[11px] leading-relaxed text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
              <span>Pathogens may remain undetected during the early stages of infection, before symptoms appear.</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
          <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
        </div>

        <div className="rounded-lg border-2 border-teal-600/40 bg-teal-50/50 px-3 py-2.5 text-center dark:bg-teal-950/25">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Solution · need for early detection
          </div>
          <div className="mt-0.5 text-xs font-bold tracking-tight text-foreground">Early molecular diagnosis</div>
        </div>
      </div>

      <div className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Three primary techniques
      </div>

      <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-3">
        {TECHNIQUES.map((technique) => {
          const Icon = technique.icon;
          return (
            <div key={technique.name} className={`rounded-lg border px-2.5 py-2.5 ${technique.tone}`}>
              <div className="flex items-center justify-between gap-1">
                <span className="text-[9px] font-bold tabular-nums text-muted-foreground">{technique.n}</span>
                <Icon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
              </div>
              <div className="mt-1 text-[11.5px] font-bold leading-snug tracking-tight text-foreground">
                {technique.name}
              </div>
              <div className="mt-1 text-[10px] leading-snug text-foreground/70">{technique.principle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PcrTechniqueCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Technique 1
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Polymerase Chain Reaction (PCR)</div>
        </div>
        <Dna className="h-4 w-4 text-indigo-700 dark:text-indigo-300" aria-hidden />
      </div>

      <div className="mt-2.5 rounded-lg border border-indigo-600/35 bg-indigo-50/50 px-3 py-2 dark:bg-indigo-950/25">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-indigo-800 dark:text-indigo-300">
          Principle
        </div>
        <div className="mt-0.5 text-xs font-bold tracking-tight text-foreground">Amplification of nucleic acids</div>
      </div>

      <div className="mt-2.5 space-y-1.5">
        <div className="flex gap-2 text-[11.5px] leading-relaxed text-foreground/85">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>Amplifies very low concentrations of bacterial or viral nucleic acids.</span>
        </div>
        <div className="flex gap-2 text-[11.5px] leading-relaxed text-foreground/85">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>Enables detection of pathogens before disease symptoms appear.</span>
        </div>
      </div>

      <div className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Applications
      </div>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {[
          "HIV in suspected AIDS patients",
          "Gene mutations in cancer patients",
          "Genetic disorders",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-indigo-600/30 bg-indigo-50/45 px-2 py-1 text-[10.5px] font-medium leading-snug text-foreground dark:bg-indigo-950/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProbeDnaGlyph({ bound }: { bound: boolean }) {
  return (
    <svg viewBox="0 0 150 62" className="mx-auto h-auto w-full max-w-[11rem]" aria-hidden>
      <path
        d="M10 40 q12 -14 24 0 q12 14 24 0 q12 -14 24 0 q12 14 24 0"
        fill="none"
        stroke={bound ? A_CHAIN : DEFECT}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeOpacity={bound ? 1 : 0.55}
      />

      {bound ? (
        <>
          <line x1={70} y1={26} x2={70} y2={35} stroke={PEPTIDE} strokeWidth={1.6} />
          <circle cx={70} cy={19} r={7} fill={PEPTIDE} fillOpacity={0.25} stroke={PEPTIDE} strokeWidth={1.8} />
          {[
            [70, 8, 70, 4],
            [78, 11, 81, 8],
            [62, 11, 59, 8],
          ].map(([x1, y1, x2, y2]) => (
            <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={PEPTIDE} strokeWidth={1.2} />
          ))}
        </>
      ) : (
        <>
          <circle
            cx={104}
            cy={16}
            r={7}
            fill={PEPTIDE}
            fillOpacity={0.16}
            stroke={PEPTIDE}
            strokeWidth={1.5}
            strokeDasharray="3 2"
          />
          <line x1={97} y1={21} x2={82} y2={31} stroke={PEPTIDE} strokeWidth={1.3} strokeDasharray="3 2" />
        </>
      )}
    </svg>
  );
}

function FilmStrip({ spot }: { spot: boolean }) {
  return (
    <svg viewBox="0 0 120 46" className="mx-auto h-auto w-full max-w-[10rem]" aria-hidden>
      <rect
        x={2}
        y={2}
        width={116}
        height={42}
        rx={4}
        fill={INK}
        fillOpacity={0.06}
        stroke={INK}
        strokeOpacity={0.3}
        strokeWidth={1.2}
      />
      {[10, 30, 50, 70, 90, 110].map((x) => (
        <rect key={x} x={x - 3} y={5} width={6} height={5} rx={1} fill={INK} fillOpacity={0.15} />
      ))}
      {spot ? (
        <rect x={50} y={22} width={20} height={7} rx={2} fill={INK} fillOpacity={0.75} />
      ) : (
        <line
          x1={38}
          y1={25}
          x2={82}
          y2={25}
          stroke={INK}
          strokeOpacity={0.18}
          strokeWidth={1}
          strokeDasharray="3 3"
        />
      )}
    </svg>
  );
}

function ProbePath({
  title,
  subtitle,
  nodes,
  bound,
  spot,
  filmLabel,
  tone,
}: {
  title: string;
  subtitle: string;
  nodes: string[];
  bound: boolean;
  spot: boolean;
  filmLabel: string;
  tone: "emerald" | "rose";
}) {
  const accent =
    tone === "emerald"
      ? "text-emerald-800 dark:text-emerald-300"
      : "text-rose-800 dark:text-rose-300";

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-3">
      <div className={`text-[9px] font-semibold uppercase tracking-[0.08em] ${accent}`}>{title}</div>
      <div className="mt-0.5 text-[10px] text-muted-foreground">{subtitle}</div>

      <div className="mt-1.5">
        <ProbeDnaGlyph bound={bound} />
      </div>

      <div className="mt-1 flex flex-1 flex-col">
        {nodes.map((node, index) => (
          <Fragment key={node}>
            <div
              className={
                index === nodes.length - 1
                  ? "rounded-md border border-border bg-muted/25 px-2 py-1.5 text-center text-[11px] font-semibold leading-snug text-foreground"
                  : "rounded-md border border-border bg-muted/25 px-2 py-1.5 text-center text-[11px] leading-snug text-foreground"
              }
            >
              {node}
            </div>
            {index < nodes.length - 1 && (
              <div className="flex justify-center py-0.5" aria-hidden>
                <ArrowDown className="h-3 w-3 text-muted-foreground" />
              </div>
            )}
          </Fragment>
        ))}
      </div>

      <div className="mt-2 rounded-lg border border-border bg-muted/20 p-2">
        <FilmStrip spot={spot} />
        <div
          className={
            spot
              ? "mt-1 text-center text-[11px] font-bold text-emerald-900 dark:text-emerald-200"
              : "mt-1 text-center text-[11px] font-bold text-rose-900 dark:text-rose-200"
          }
        >
          {filmLabel}
        </div>
      </div>
    </div>
  );
}

export function ProbeHybridisationFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
            Recombinant DNA technology
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">
            Probe Hybridisation and Autoradiography
          </div>
        </div>
        <div className="text-[10px] text-muted-foreground">two clones, one probe</div>
      </div>

      <div className="mt-2 rounded-lg border border-violet-600/30 bg-violet-50/45 px-3 py-2 dark:bg-violet-950/20">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-violet-800 dark:text-violet-300">
          Principle
        </div>
        <div className="mt-0.5 text-[11.5px] font-semibold text-foreground">
          Hybridisation between complementary nucleic acid sequences
        </div>
        <div className="mt-1 flex gap-2 text-[10.5px] leading-snug text-foreground/80">
          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-violet-600/40 text-[8.5px] font-bold text-violet-800 dark:text-violet-300">
            1
          </span>
          <span>
            A single-stranded DNA or RNA molecule is tagged with a radioactive molecule. This is called a probe.
          </span>
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <ProbePath
          title="Normal gene"
          subtitle="Complementary DNA"
          nodes={["Probe hybridises", "Autoradiography"]}
          bound
          spot
          filmLabel="Appears on film"
          tone="emerald"
        />
        <ProbePath
          title="Mutated gene"
          subtitle="Non-complementary DNA"
          nodes={["No hybridisation", "Autoradiography"]}
          bound={false}
          spot={false}
          filmLabel="Does not appear on film"
          tone="rose"
        />
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        The radioactive probe binds only to complementary DNA. Clones carrying the mutated gene cannot hybridise
        with the probe, so they leave no band on the photographic film.
      </figcaption>
    </figure>
  );
}

export function ElisaBranches() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Technique 3
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">
            ELISA — Enzyme-Linked Immunosorbent Assay
          </div>
        </div>
        <ShieldCheck className="h-4 w-4 text-teal-700 dark:text-teal-300" aria-hidden />
      </div>

      <div className="mt-2.5 rounded-lg border border-teal-600/35 bg-teal-50/50 px-3 py-2 dark:bg-teal-950/25">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.06em] text-teal-800 dark:text-teal-300">
          Principle
        </div>
        <div className="mt-0.5 text-xs font-bold tracking-tight text-foreground">Antigen–antibody interaction</div>
      </div>

      <div className="mt-2.5 text-[11.5px] leading-relaxed text-foreground">
        Infection by a pathogen can be detected through the presence of:
      </div>

      <div className="mx-auto mt-2 max-w-md">
        <div className="rounded-lg border-2 border-teal-600/40 bg-teal-50/50 px-3 py-2 text-center dark:bg-teal-950/25">
          <div className="text-xs font-bold tracking-tight text-foreground">ELISA</div>
          <div className="text-[10px] text-foreground/70">antigen or antibody detection</div>
        </div>

        <SplitConnector />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-amber-600/35 bg-amber-50/45 px-3 py-2.5 text-center dark:bg-amber-950/20">
            <div className="text-xs font-bold tracking-tight text-amber-900 dark:text-amber-200">Pathogen antigens</div>
            <div className="flex justify-center py-0.5" aria-hidden>
              <ArrowDown className="h-3 w-3 text-muted-foreground" />
            </div>
            <div className="text-[11px] leading-snug text-foreground">Proteins or glycoproteins</div>
          </div>
          <div className="rounded-lg border border-teal-600/35 bg-teal-50/45 px-3 py-2.5 text-center dark:bg-teal-950/20">
            <div className="text-xs font-bold tracking-tight text-teal-900 dark:text-teal-200">Antibodies</div>
            <div className="flex justify-center py-0.5" aria-hidden>
              <ArrowDown className="h-3 w-3 text-muted-foreground" />
            </div>
            <div className="text-[11px] leading-snug text-foreground">
              Produced by the host against the pathogen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
