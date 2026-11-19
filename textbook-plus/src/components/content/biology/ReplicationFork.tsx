import { ArrowRight } from "lucide-react";
import { TableCard } from "@/components/content/data/TableCard";
import { Callout } from "@/components/content/Callout";
import { Highlight } from "@/components/content/Highlight";

const EYEBROW = "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface ComparisonRow {
  feature: string;
  leading: string;
  lagging: string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Synthesis", leading: "Continuous", lagging: "Discontinuous" },
  { feature: "Template orientation towards fork", leading: "3′ → 5′", lagging: "5′ → 3′" },
  { feature: "New strand synthesis", leading: "5′ → 3′", lagging: "5′ → 3′" },
  { feature: "Formation", leading: "Continuous strand", lagging: "Short fragments" },
  {
    feature: "Joining enzyme",
    leading: "Not required for joining separate fragments",
    lagging: "DNA ligase",
  },
];

/* Fork geometry: the still-joined parental duplex enters from the left and
   splits at the helicase into two template arms opening to the right. */
const STEM_X = [60, 96, 132, 168, 204, 240, 276, 312];

interface Segment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/* Each lagging fragment runs from its 5′ end (near the fork) to its 3′ end
   (away from the fork); the arrow marker sits on that 5′ → 3′ end only. */
const LAGGING_FRAGMENTS: Segment[] = [
  { x1: 351, y1: 241, x2: 415, y2: 265 },
  { x1: 431, y1: 271, x2: 495, y2: 296 },
  { x1: 511, y1: 302, x2: 575, y2: 326 },
  { x1: 591, y1: 332, x2: 639, y2: 351 },
];

const LIGASE_STEPS = ["Short DNA fragments", "DNA ligase", "Continuous DNA strand"];

function ForkDiagram() {
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-border bg-muted/20 p-2">
      <svg
        viewBox="0 0 720 420"
        className="mx-auto h-auto w-full"
        role="img"
        aria-label="Replication fork schematic: a parental DNA duplex enters from the left and is separated by helicase into two template arms. The leading template runs 3 prime to 5 prime toward the fork and carries one continuous new strand whose arrow points 5 prime to 3 prime toward the fork. The lagging template runs 5 prime to 3 prime toward the fork and carries several short new fragments, each with its own arrow pointing 5 prime to 3 prime away from the fork, joined by DNA ligase. No new strand is shown growing 3 prime to 5 prime."
      >
        <defs>
          <marker id="rf-lead-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" className="fill-emerald-600 dark:fill-emerald-400" />
          </marker>
          <marker id="rf-lag-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 z" className="fill-amber-600 dark:fill-amber-400" />
          </marker>
        </defs>

        {/* Parental duplex — still joined on the left of the fork */}
        <polyline
          points="30,202 330,202 650,80"
          className="fill-none stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="30,218 330,218 650,340"
          className="fill-none stroke-slate-600 dark:stroke-slate-400"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {STEM_X.map((x) => (
          <line
            key={x}
            x1={x}
            y1="205"
            x2={x}
            y2="215"
            className="stroke-slate-400/70 dark:stroke-slate-500/70"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        ))}

        {/* Helicase at the fork junction */}
        <circle
          cx="330"
          cy="210"
          r="20"
          className="fill-blue-100 stroke-blue-600 dark:fill-blue-950/40 dark:stroke-blue-400"
          strokeWidth="2"
        />
        <text x="330" y="214" textAnchor="middle" className="fill-blue-900 text-[8px] font-bold dark:fill-blue-200">
          Helicase
        </text>
        <line x1="252" y1="160" x2="316" y2="194" className="stroke-muted-foreground/60" strokeWidth="1" />
        <text x="250" y="154" textAnchor="middle" className="fill-foreground text-[10px] font-semibold">
          Replication fork
        </text>

        {/* Leading template: 3′ (distal) → 5′ (fork) — one continuous new strand,
            its 5′ → 3′ arrow pointing toward the fork */}
        <line
          x1="645"
          y1="67"
          x2="337"
          y2="186"
          className="stroke-emerald-600 dark:stroke-emerald-400"
          strokeWidth="5"
          strokeLinecap="round"
          markerEnd="url(#rf-lead-arrow)"
        />
        <text x="500" y="92" textAnchor="middle" className="fill-emerald-700 text-[10px] font-bold dark:fill-emerald-300">
          New leading strand — continuous
        </text>
        <text x="500" y="108" textAnchor="middle" className="fill-emerald-700 text-[9px] dark:fill-emerald-300">
          grows 5′ → 3′ toward the fork
        </text>
        <text x="470" y="176" textAnchor="middle" className="fill-muted-foreground text-[9px]">
          Leading template · 3′ → 5′ toward fork
        </text>
        <text x="305" y="192" textAnchor="middle" className="fill-slate-700 text-[11px] font-bold dark:fill-slate-300">
          5′
        </text>
        <text x="665" y="78" textAnchor="middle" className="fill-slate-700 text-[11px] font-bold dark:fill-slate-300">
          3′
        </text>

        {/* Lagging template: 5′ (distal) → 3′ (fork) — several short new fragments,
            each with its own 5′ → 3′ arrow pointing away from the fork */}
        {LAGGING_FRAGMENTS.map((fragment, index) => (
          <line
            key={`lag-${index}`}
            x1={fragment.x1}
            y1={fragment.y1}
            x2={fragment.x2}
            y2={fragment.y2}
            className="stroke-amber-600 dark:stroke-amber-400"
            strokeWidth="5"
            strokeLinecap="round"
            markerEnd="url(#rf-lag-arrow)"
          />
        ))}
        <line x1="415" y1="266" x2="431" y2="272" className="stroke-orange-600 dark:stroke-orange-400" strokeWidth="3" />
        <circle
          cx="423"
          cy="269"
          r="8"
          className="fill-orange-100 stroke-orange-600 dark:fill-orange-950/40 dark:stroke-orange-400"
          strokeWidth="1.5"
        />
        <line x1="423" y1="277" x2="423" y2="287" className="stroke-orange-600/70 dark:stroke-orange-400/70" strokeWidth="1" />
        <text x="423" y="298" textAnchor="middle" className="fill-orange-700 text-[9px] font-bold dark:fill-orange-300">
          DNA ligase
        </text>
        <text x="500" y="363" textAnchor="middle" className="fill-amber-700 text-[10px] font-bold dark:fill-amber-300">
          New short fragments — discontinuous
        </text>
        <text x="500" y="379" textAnchor="middle" className="fill-amber-700 text-[9px] dark:fill-amber-300">
          each grows 5′ → 3′
        </text>
        <text x="470" y="330" textAnchor="middle" className="fill-muted-foreground text-[9px]">
          Lagging template · 5′ → 3′ toward fork
        </text>
        <text x="302" y="232" textAnchor="middle" className="fill-slate-700 text-[11px] font-bold dark:fill-slate-300">
          3′
        </text>
        <text x="665" y="346" textAnchor="middle" className="fill-slate-700 text-[11px] font-bold dark:fill-slate-300">
          5′
        </text>

        {/* Distal labels: template ends at the far right of each arm */}
        <text x="590" y="58" textAnchor="middle" className="fill-emerald-700 text-[9px] font-semibold dark:fill-emerald-300">
          5′ new
        </text>
        <text x="660" y="332" textAnchor="middle" className="fill-amber-700 text-[9px] font-semibold dark:fill-amber-300">
          3′ new
        </text>
      </svg>

      <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-2 text-[11px] leading-snug text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-slate-600 dark:bg-slate-400" aria-hidden /> Parental template
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden /> Continuous new strand
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-amber-600 dark:bg-amber-400" aria-hidden /> Short new fragments
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-orange-600 dark:bg-orange-400" aria-hidden /> DNA ligase
        </span>
      </div>
    </div>
  );
}

function LigaseFlow() {
  return (
    <div className="mt-3 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
      {LIGASE_STEPS.map((step, index) => (
        <div key={step} className="flex flex-1 items-center gap-2">
          <div
            className={`flex-1 rounded-xl border px-3 py-2 text-center text-sm font-semibold leading-snug ${
              index === 1
                ? "border-orange-500/50 bg-orange-50/50 text-orange-900 dark:bg-orange-950/20 dark:text-orange-200"
                : "border-border bg-card text-foreground"
            }`}
          >
            {step}
          </div>
          {index < LIGASE_STEPS.length - 1 && (
            <ArrowRight className="mx-auto hidden h-4 w-4 shrink-0 rotate-90 text-muted-foreground sm:block sm:rotate-0" aria-hidden />
          )}
        </div>
      ))}
    </div>
  );
}

export function ReplicationFork() {
  return (
    <section className="my-8 space-y-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-3.5">
          <div className={EYEBROW}>4.1 Origin of replication (ori)</div>
          <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li>A specific DNA sequence where <strong>DNA replication</strong> begins.</li>
            <li>The <strong>replication machinery</strong> assembles at this region.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-3.5">
          <div className={EYEBROW}>4.2 Helicase and the replication fork</div>
          <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li><strong>Helicase</strong> unwinds and separates the parental DNA strands.</li>
            <li>This creates an opening called the <strong>replication fork</strong>.</li>
            <li>Each separated parental strand acts as a <strong>template</strong> for new DNA synthesis.</li>
          </ul>
        </div>
      </div>

      <div>
        <div className={EYEBROW}>4.3 Direction of DNA synthesis</div>
        <Callout type="important" title="Critical rule">
          <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
            <li>Every newly synthesised DNA strand grows in the <Highlight>5′ → 3′</Highlight> direction.</li>
            <li>DNA polymerase reads the template strand in the opposite direction: <strong>3′ → 5′</strong>.</li>
            <li>The two template strands have opposite orientations, resulting in <strong>two different synthesis patterns</strong>.</li>
          </ul>
        </Callout>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>Leading and lagging synthesis at the fork</div>
        <ForkDiagram />
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className={EYEBROW}>A · Leading strand</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              <li>Synthesised <strong>continuously</strong>.</li>
              <li>Its template strand runs in the <strong>3′ → 5′ direction</strong> towards the replication fork.</li>
              <li>New DNA is synthesised in the <strong>5′ → 3′ direction</strong>.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-3.5">
            <div className={EYEBROW}>B · Lagging strand</div>
            <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
              <li>Synthesised <strong>discontinuously</strong>.</li>
              <li>Its template strand runs in the <strong>5′ → 3′ direction</strong> towards the replication fork.</li>
              <li>New DNA is formed as <strong>short fragments</strong>.</li>
              <li>These fragments are joined by <strong>DNA ligase</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className={EYEBROW}>Leading vs lagging strand</div>
        <TableCard
          headers={["Feature", "Leading strand", "Lagging strand"]}
          rows={COMPARISON_ROWS.map((row) => ({ cells: [row.feature, row.leading, row.lagging] }))}
        />
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <div className={EYEBROW}>4.4 DNA ligase</div>
        <ul className="my-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
          <li>Joins the <strong>short fragments</strong> formed during discontinuous DNA synthesis.</li>
          <li>Produces a <strong>continuous DNA strand</strong>.</li>
        </ul>
        <LigaseFlow />
      </div>
    </section>
  );
}
