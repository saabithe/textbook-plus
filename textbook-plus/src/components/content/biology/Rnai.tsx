import { Fragment } from "react";
import { ArrowDown, ArrowRight, Ban } from "lucide-react";

/**
 * Rnai — silencing the nematode's own message instead of poisoning it.
 *
 * Every picture here is about one idea: the plant supplies dsRNA, the dsRNA
 * meets the nematode's complementary mRNA, and translation stops. The two
 * pathways in section 4 are drawn side by side precisely so the block is never
 * read as blocking the plant's own protein synthesis.
 *
 * teal = tobacco (host), rose = nematode (parasite), indigo = sense RNA,
 * amber = antisense RNA, violet = dsRNA, emerald = protected plant.
 */

const HOST = "var(--subject-biology)";
const PEST = "var(--destructive)";
const SENSE = "var(--subject-physics)";
const ANTISENSE = "var(--warning)";
const DSRNA = "var(--subject-english)";
const INK = "var(--foreground)";

/* --------------------------------------------------------------- 1. target */

function InfectedTobacco() {
  return (
    <svg
      viewBox="0 0 250 250"
      className="h-auto w-full max-w-[15rem]"
      role="img"
      aria-label="A tobacco plant whose roots are infected by nematodes, drawn as small worms with root swellings."
    >
      <title>Tobacco roots infected by Meloidogyne incognita</title>

      {/* soil line */}
      <line x1={16} y1={150} x2={234} y2={150} stroke={INK} strokeOpacity={0.3} strokeWidth={1.4} strokeDasharray="4 3" />
      <text x={18} y={144} fontSize={9} fontWeight={600} fill={INK} fillOpacity={0.55}>
        soil
      </text>

      {/* shoot */}
      <path d="M125 150 L125 52" stroke={HOST} strokeWidth={3} strokeLinecap="round" fill="none" />
      {[
        [92, 118, -24],
        [158, 104, 24],
        [96, 84, -28],
        [154, 70, 28],
      ].map(([cx, cy, rotate]) => (
        <ellipse
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          rx={30}
          ry={10}
          transform={`rotate(${rotate} ${cx} ${cy})`}
          fill={HOST}
          fillOpacity={0.24}
          stroke={HOST}
          strokeOpacity={0.6}
          strokeWidth={1.4}
        />
      ))}
      {/* flower cluster */}
      {[
        [118, 46],
        [132, 46],
        [125, 38],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={5} fill={ANTISENSE} fillOpacity={0.45} stroke={ANTISENSE} strokeOpacity={0.7} strokeWidth={1.1} />
      ))}

      {/* roots */}
      <path d="M125 150 L104 214" stroke={HOST} strokeOpacity={0.75} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M125 150 L146 216" stroke={HOST} strokeOpacity={0.75} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M125 150 L125 228" stroke={HOST} strokeOpacity={0.75} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M112 190 L92 200" stroke={HOST} strokeOpacity={0.5} strokeWidth={1.5} fill="none" strokeLinecap="round" />
      <path d="M138 186 L158 198" stroke={HOST} strokeOpacity={0.5} strokeWidth={1.5} fill="none" strokeLinecap="round" />

      {/* root swellings */}
      {[
        [108, 180],
        [140, 196],
        [122, 212],
      ].map(([cx, cy]) => (
        <ellipse key={`gall-${cx}`} cx={cx} cy={cy} rx={6.5} ry={5} fill={PEST} fillOpacity={0.16} stroke={PEST} strokeOpacity={0.55} strokeWidth={1.3} />
      ))}

      {/* nematodes */}
      {[
        [96, 172, 0],
        [150, 182, 12],
        [130, 206, -8],
      ].map(([x, y, rotate]) => (
        <path
          key={`worm-${x}-${y}`}
          d={`M${x} ${y} q5 -5 10 0 q5 5 10 0`}
          transform={`rotate(${rotate} ${x} ${y})`}
          fill="none"
          stroke={PEST}
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}

      {/* labels */}
      <line x1={160} y1={186} x2={176} y2={176} stroke={INK} strokeOpacity={0.25} strokeWidth={1.1} />
      <text x={179} y={174} fontSize={9} fontWeight={700} fill={INK} fillOpacity={0.75}>
        nematode
      </text>
      <line x1={110} y1={182} x2={86} y2={168} stroke={INK} strokeOpacity={0.25} strokeWidth={1.1} />
      <text x={16} y={166} fontSize={9} fontWeight={700} fill={INK} fillOpacity={0.75}>
        root swelling
      </text>
      <text x={190} y={124} fontSize={9} fontWeight={700} fill={INK} fillOpacity={0.7}>
        tobacco
      </text>
      <text x={190} y={136} fontSize={9} fontWeight={700} fill={INK} fillOpacity={0.7}>
        plant
      </text>
    </svg>
  );
}

export function NematodeTargetCard() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center">
      <div className="rounded-xl border border-border bg-card p-3">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Target parasite
        </div>
        <div className="mt-1 text-sm font-bold italic tracking-tight text-foreground">Meloidogyne incognita</div>
        <div className="mt-1.5 flex justify-center">
          <InfectedTobacco />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-4">
        <div className="text-sm leading-relaxed text-foreground">
          A nematode that infects the roots of tobacco plants.
        </div>
        <div className="mt-1 text-sm leading-relaxed text-foreground">
          Causes severe reduction in crop yield.
        </div>

        <div className="mt-3 rounded-lg border-2 border-teal-600/35 bg-teal-50/50 px-3 py-2.5 dark:bg-teal-950/25">
          <div className="text-[11px] leading-snug text-foreground">
            RNA interference (RNAi) is used to develop pest-resistant transgenic tobacco plants.
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ 2. principle */

export function RnaiDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-teal-600/35 bg-teal-50/40 p-4 dark:bg-teal-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Definition
      </div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">RNA Interference (RNAi)</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        Silencing of a specific mRNA using a complementary double-stranded RNA (dsRNA) molecule.
      </div>

      <div className="mt-3 space-y-1.5">
        {[
          "dsRNA binds to complementary mRNA.",
          "Prevents translation of the mRNA into protein.",
          "Results in gene silencing.",
        ].map((point) => (
          <div key={point} className="flex gap-2 text-xs leading-relaxed text-foreground/85">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60" aria-hidden />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StrandGlyph({ color, paired = false }: { color: string; paired?: boolean }) {
  return (
    <svg viewBox="0 0 64 30" className="h-6 w-14" aria-hidden>
      <path d="M4 18 q8 -14 16 0 q8 14 16 0 q8 -14 16 0" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
      {paired && (
        <path d="M4 10 q8 14 16 0 q8 -14 16 0 q8 14 16 0" fill="none" stroke={color} strokeOpacity={0.55} strokeWidth={2} strokeLinecap="round" />
      )}
    </svg>
  );
}

export function RnaiMolecularFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-col items-center rounded-lg border border-violet-600/35 bg-violet-50/50 px-3 py-2 text-center dark:bg-violet-950/25">
          <StrandGlyph color={DSRNA} paired />
          <div className="mt-1 text-[11px] font-semibold text-foreground">Complementary dsRNA</div>
        </div>

        <div className="flex items-center justify-center text-sm font-medium text-muted-foreground" aria-hidden>
          <span className="sm:hidden">+</span>
          <span className="hidden sm:inline">+</span>
        </div>

        <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 px-3 py-2 text-center">
          <StrandGlyph color={INK} />
          <div className="mt-1 text-[11px] font-semibold text-foreground">Specific mRNA</div>
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-4 w-4 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 sm:block" />
        </div>

        <div className="flex-1 rounded-lg border border-amber-600/35 bg-amber-50/50 px-3 py-2 text-center dark:bg-amber-950/25">
          <div className="text-[11px] font-semibold text-foreground">Translation blocked</div>
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-4 w-4 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 sm:block" />
        </div>

        <div className="flex-1 rounded-lg border-2 border-emerald-600/35 bg-emerald-50/50 px-3 py-2 text-center dark:bg-emerald-950/25">
          <div className="text-[11px] font-bold text-emerald-950 dark:text-emerald-100">Gene silencing</div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        The dsRNA must be complementary to the mRNA it silences — that pairing is what stops translation.
      </figcaption>
    </figure>
  );
}

export function RnaiNaturalSources() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Natural occurrence
      </div>
      <div className="mt-1 text-sm leading-relaxed text-foreground">
        RNAi serves as a cellular defence mechanism in all eukaryotic organisms.
      </div>

      <div className="mt-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Complementary RNA may originate from
      </div>

      <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-muted/25 px-3 py-2">
          <div className="text-xs font-medium text-foreground">Infection by RNA viruses</div>
        </div>
        <div className="rounded-lg border border-border bg-muted/25 px-3 py-2">
          <div className="text-xs font-medium text-foreground">Mobile genetic elements (transposons)</div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- 3. dsRNA */

function FlowNode({
  label,
  sub,
  tone = "plain",
  badge,
}: {
  label: string;
  sub?: string;
  tone?: "plain" | "host" | "sense" | "antisense" | "dsrna";
  badge?: string;
}) {
  const styles = {
    plain: "border border-border bg-muted/25",
    host: "border border-teal-600/35 bg-teal-50/45 dark:bg-teal-950/20",
    sense: "border border-blue-600/35 bg-blue-50/45 dark:bg-blue-950/20",
    antisense: "border border-amber-600/35 bg-amber-50/50 dark:bg-amber-950/20",
    dsrna: "border-2 border-violet-600/40 bg-violet-50/55 dark:bg-violet-950/25",
  }[tone];

  return (
    <div className={`rounded-lg ${styles} px-3 py-2 text-center`}>
      {badge && (
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{badge}</div>
      )}
      <div className="text-xs font-semibold leading-snug tracking-tight text-foreground">{label}</div>
      {sub && <div className="mt-0.5 text-[10.5px] leading-snug text-foreground/70">{sub}</div>}
    </div>
  );
}

function DownArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-0.5" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
      {label && (
        <span className="mt-0.5 text-[8.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}

export function RnaiDsRnaFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="mx-auto flex max-w-md flex-col">
        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          <FlowNode label="Nematode-specific gene" badge="Step 1" />
          <FlowNode label="Agrobacterium vector" sub="T-DNA / Ti-plasmid" />
        </div>

        <DownArrow label="introduced into" />

        <FlowNode
          label="Introduction into tobacco plant"
          sub="Agrobacterium vectors carry the nematode-specific gene in"
          tone="host"
        />

        <DownArrow label="Step 2 · two RNAs produced" />

        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-blue-600/35 bg-blue-50/45 px-2 py-2 text-center dark:bg-blue-950/20">
            <div className="flex justify-center">
              <StrandGlyph color={SENSE} />
            </div>
            <div className="mt-1 text-[11px] font-semibold text-foreground">Sense RNA</div>
          </div>
          <div className="rounded-lg border border-amber-600/35 bg-amber-50/50 px-2 py-2 text-center dark:bg-amber-950/20">
            <div className="flex justify-center">
              <StrandGlyph color={ANTISENSE} />
            </div>
            <div className="mt-1 text-[11px] font-semibold text-foreground">Antisense RNA (ASRNA)</div>
          </div>
        </div>

        <DownArrow label="complementary strands pair" />

        <div className="rounded-lg border-2 border-violet-600/40 bg-violet-50/55 px-3 py-2.5 text-center dark:bg-violet-950/25">
          <div className="flex justify-center gap-1">
            <StrandGlyph color={SENSE} />
            <StrandGlyph color={ANTISENSE} />
          </div>
          <div className="mt-1 text-xs font-bold tracking-tight text-foreground">Double-stranded RNA (dsRNA)</div>
          <div className="text-[10px] text-foreground/70">
            Step 3 · sense and antisense RNA are complementary, so they pair
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        The introduced DNA produces two types of RNA in the tobacco cells — sense and antisense — and because they
        are complementary, they pair.
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------- 4. silencing */

interface PathNode {
  label: string;
  sub?: string;
  badge?: string;
  tone?: "plain" | "blocked" | "dead";
}

function PathColumn({ title, nodes, accent }: { title: string; nodes: PathNode[]; accent: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-3">
      <div className={`text-[9px] font-semibold uppercase tracking-[0.08em] ${accent}`}>{title}</div>

      <div className="mt-2 flex flex-1 flex-col">
        {nodes.map((node, index) => (
          <div key={node.label} className="flex flex-col">
            <div
              className={
                node.tone === "blocked"
                  ? "rounded-md border-2 border-amber-600/45 bg-amber-50/55 px-2 py-1.5 text-center dark:bg-amber-950/25"
                  : node.tone === "dead"
                    ? "rounded-md border-2 border-emerald-600/40 bg-emerald-50/55 px-2 py-1.5 text-center dark:bg-emerald-950/25"
                    : "rounded-md border border-border bg-muted/25 px-2 py-1.5 text-center"
              }
            >
              <div className="flex items-center justify-center gap-1.5">
                {node.tone === "blocked" && <Ban className="h-3 w-3 text-amber-700 dark:text-amber-300" aria-hidden />}
                {node.badge && (
                  <span className="text-[9px] font-bold tabular-nums text-muted-foreground">{node.badge}</span>
                )}
                <span className="text-[11px] font-semibold leading-snug text-foreground">{node.label}</span>
              </div>
              {node.sub && <div className="mt-0.5 text-[10px] leading-snug text-foreground/70">{node.sub}</div>}
            </div>

            {index < nodes.length - 1 && (
              <div className="flex justify-center py-0.5" aria-hidden>
                <ArrowDown className="h-3 w-3 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function RnaiSilencingFlow() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <PathColumn
          title="Without RNAi — normal pathway"
          accent="text-muted-foreground"
          nodes={[
            { label: "Nematode DNA" },
            { label: "Nematode mRNA" },
            { label: "Nematode protein produced" },
            { label: "Nematode survives" },
          ]}
        />

        <PathColumn
          title="With RNAi — transgenic tobacco"
          accent="text-emerald-800 dark:text-emerald-300"
          nodes={[
            { label: "Nematode DNA" },
            { label: "Nematode mRNA", badge: "1" },
            { label: "dsRNA interference", sub: "plant dsRNA meets the nematode mRNA", badge: "2", tone: "blocked" },
            { label: "Complementary mRNA inhibited / degraded", badge: "3", tone: "blocked" },
            { label: "Translation blocked", badge: "4" },
            { label: "Nematode protein not produced", badge: "5" },
            {
              label: "Nematode cannot survive",
              sub: "in host tissues expressing interfering RNA",
              badge: "6",
              tone: "dead",
            },
          ]}
        />
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        The plant&apos;s dsRNA is complementary to the nematode&apos;s mRNA, so only that mRNA is silenced. The
        tobacco plant&apos;s own protein synthesis is untouched.
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------- 5. outcome */

const OUTCOME_CHAIN = [
  "RNAi",
  "Specific mRNA silencing",
  "Prevention of protein formation",
  "Nematode cannot survive",
];

function ProtectedPlant() {
  return (
    <svg viewBox="0 0 44 52" className="h-11 w-9" aria-hidden>
      <path d="M22 48 L22 18" stroke={HOST} strokeWidth={2.6} strokeLinecap="round" fill="none" />
      <ellipse cx={12} cy={28} rx={10} ry={4} transform="rotate(-26 12 28)" fill={HOST} fillOpacity={0.28} stroke={HOST} strokeOpacity={0.6} strokeWidth={1.2} />
      <ellipse cx={32} cy={22} rx={10} ry={4} transform="rotate(26 32 22)" fill={HOST} fillOpacity={0.28} stroke={HOST} strokeOpacity={0.6} strokeWidth={1.2} />
      <ellipse cx={13} cy={40} rx={9} ry={3.6} transform="rotate(-20 13 40)" fill={HOST} fillOpacity={0.24} stroke={HOST} strokeOpacity={0.55} strokeWidth={1.1} />
      <circle cx={22} cy={12} r={4.4} fill={ANTISENSE} fillOpacity={0.45} stroke={ANTISENSE} strokeWidth={1.2} />
    </svg>
  );
}

export function RnaiOutcomeCard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border-2 border-emerald-600/35 bg-emerald-50/40 dark:bg-emerald-950/20">
      <div className="p-4">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
          Final outcome
        </div>

        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 flex-wrap items-center gap-1.5">
            {OUTCOME_CHAIN.map((step, index) => (
              <Fragment key={step}>
                <span className="rounded border border-emerald-700/25 bg-card px-1.5 py-1 text-[11px] font-medium leading-snug text-foreground">
                  {step}
                </span>
                {index < OUTCOME_CHAIN.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-emerald-800/60 dark:text-emerald-300/60" aria-hidden />
                )}
              </Fragment>
            ))}
          </div>

          <div className="flex items-center justify-center text-emerald-800/60 dark:text-emerald-300/60" aria-hidden>
            <ArrowDown className="h-4 w-4 sm:hidden" />
            <ArrowRight className="hidden h-4 w-4 sm:block" />
          </div>

          <div className="flex items-center gap-2.5 rounded-lg border border-emerald-700/30 bg-card px-3 py-2 sm:w-52">
            <ProtectedPlant />
            <div className="text-[11px] font-bold leading-tight text-emerald-950 dark:text-emerald-100">
              Pest-resistant transgenic tobacco plant
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-700/20 bg-card/60 px-4 py-2">
        <div className="text-[11px] leading-snug text-foreground/80">
          Silencing the nematode&apos;s specific mRNA is what prevents protein formation and protects the plant.
        </div>
      </div>
    </div>
  );
}
