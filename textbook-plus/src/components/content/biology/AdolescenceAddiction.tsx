import type { ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Brain,
  HeartPulse,
  Info,
  Repeat2,
  Sparkles,
  Table2,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * AdolescenceAddiction — two standalone blocks:
 *   1. AdolescenceVulnerability — definition, age-range note and the seven
 *      possible risk factors shown as satellite chips around the adolescence hub.
 *   2. AddictionDependence — three linked-but-separate concept cards, the
 *      withdrawal-symptom list and the compact term/meaning comparison table.
 *
 * sky / amber = adolescence, rose / indigo = addiction and dependence.
 */

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

function Bullet({ children, dot }: { children: ReactNode; dot: string }) {
  return (
    <li className="flex items-start gap-2">
      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} aria-hidden />
      <span className="text-[10.5px] leading-snug text-foreground">{children}</span>
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. AdolescenceVulnerability                                                */
/* -------------------------------------------------------------------------- */

function FactorChip({ index, children }: { index: number; children: ReactNode }) {
  return (
    <div className="flex items-start gap-2 rounded-lg border border-sky-600/30 bg-card px-2.5 py-2">
      <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-amber-600/45 bg-amber-50 text-[8.5px] font-bold text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
        {index}
      </span>
      <span className="text-[10.5px] leading-snug text-foreground">{children}</span>
    </div>
  );
}

/** Decorative hub-to-chip connector. Mirrored on the right with scale-x. */
function SideConnector({ count, mirror = false }: { count: number; mirror?: boolean }) {
  const ys = Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * 100);
  return (
    <div className="relative hidden w-8 shrink-0 self-stretch sm:block" aria-hidden>
      <svg
        viewBox="0 0 32 100"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full ${mirror ? "scale-x-[-1]" : ""}`}
      >
        <line
          x1="30"
          y1={ys[0]}
          x2="30"
          y2={ys[ys.length - 1]}
          className="stroke-sky-500/60 dark:stroke-sky-400/70"
          strokeWidth="1.5"
        />
        {ys.map((y) => (
          <g key={y} className="stroke-sky-500/60 dark:stroke-sky-400/70" strokeLinecap="round">
            <line x1="16" y1={y} x2="30" y2={y} strokeWidth="1.5" />
            <line x1="2" y1={y} x2="16" y2={y} strokeWidth="1" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function AdolescenceVulnerability() {
  return (
    <div className="my-5 space-y-4">
      {/* Definition */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-sky-600/35 bg-sky-50/40 p-4 dark:bg-sky-950/20">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-sky-800 dark:text-sky-300">
            Definition
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Adolescence</strong> is the period and process during which a child develops maturity in attitudes
            and beliefs for effective social participation.
          </p>
        </div>
      </div>

      {/* Two opening points */}
      <ul className="space-y-1.5">
        <Bullet dot="bg-sky-600/60">Acts as a bridge between childhood and adulthood.</Bullet>
        <Bullet dot="bg-amber-600/60">
          The supplied notes use the age range <strong>12–18 years</strong>.
        </Bullet>
      </ul>

      {/* Age-range note */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-amber-600/40 bg-amber-50/45 p-3.5 dark:bg-amber-950/20">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Age-range note
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>WHO</strong> defines adolescence as 10–19 years. The 12–18 range above is retained from your
            supplied study material.
          </p>
        </div>
      </div>

      {/* Factors */}
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="text-sm font-bold tracking-tight text-foreground">
          Factors Increasing Vulnerability to Drug Abuse
        </div>
        <div className="mt-1 flex items-start gap-2 rounded-md border border-sky-600/25 bg-sky-50/35 px-2.5 py-1.5 dark:bg-sky-950/15">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-600/60" aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">
            Seven <strong>possible risk factors</strong> — they do not mean adolescence itself causes substance abuse.
          </span>
        </div>

        <div className="mt-3 flex flex-col items-stretch gap-3 sm:flex-row sm:items-stretch">
          {/* Left satellites: 1–3 */}
          <div className="order-2 flex flex-col gap-2 sm:order-1 sm:flex-1">
            <FactorChip index={1}>Curiosity.</FactorChip>
            <FactorChip index={2}>Desire for adventure and excitement.</FactorChip>
            <FactorChip index={3}>Experimentation.</FactorChip>
          </div>

          <div className="sm:order-2">
            <SideConnector count={3} />
          </div>

          {/* Central hub */}
          <div className="order-1 shrink-0 self-center rounded-xl border-2 border-sky-600/50 bg-sky-50/60 px-4 py-3 text-center shadow-sm dark:bg-sky-950/30 sm:order-3 sm:w-40">
            <Users className="mx-auto h-5 w-5 text-sky-700 dark:text-sky-300" aria-hidden />
            <div className="mt-1.5 text-sm font-bold tracking-tight text-foreground">Adolescence</div>
            <div className="mt-1 text-[9px] leading-snug text-amber-800 dark:text-amber-300">central focus</div>
          </div>

          <div className="sm:order-4">
            <SideConnector count={4} mirror />
          </div>

          {/* Right satellites: 4–7 */}
          <div className="order-3 flex flex-col gap-2 sm:order-5 sm:flex-1">
            <FactorChip index={4}>Academic stress.</FactorChip>
            <FactorChip index={5}>Peer pressure.</FactorChip>
            <FactorChip index={6}>Unsupportive family structures.</FactorChip>
            <FactorChip index={7}>Media portrayal of smoking and drugs as fashionable or progressive.</FactorChip>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. AddictionDependence                                                     */
/* -------------------------------------------------------------------------- */

type ConceptTone = "rose" | "indigo";

const CONCEPT_TONES: Record<ConceptTone, { border: string; bg: string; badge: string; icon: string; dot: string }> = {
  rose: {
    border: "border-rose-600/40",
    bg: "bg-rose-50/35 dark:bg-rose-950/20",
    badge: "border-rose-600/45 bg-rose-50/70 text-rose-900 dark:bg-rose-950/30 dark:text-rose-200",
    icon: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-600/60",
  },
  indigo: {
    border: "border-indigo-600/40",
    bg: "bg-indigo-50/35 dark:bg-indigo-950/20",
    badge: "border-indigo-600/45 bg-indigo-50/70 text-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-200",
    icon: "text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-600/60",
  },
};

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-2 rounded-md border border-border bg-muted/25 px-2 py-1.5">
      <Eyebrow>Process</Eyebrow>
      <div className="mt-1 flex flex-wrap items-center gap-x-1 gap-y-1">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-1">
            <span className="rounded border border-border bg-card px-1.5 py-0.5 text-[9.5px] font-semibold leading-snug text-foreground">
              {step}
            </span>
            {index < steps.length - 1 && (
              <ArrowRight
                className="h-3 w-3 shrink-0 rotate-90 text-muted-foreground sm:rotate-0"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ConceptCard({
  numeral,
  Icon,
  title,
  tone,
  bullets,
  brief,
  flow,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  tone: ConceptTone;
  bullets?: string[];
  brief?: string;
  flow?: string[];
}) {
  const styles = CONCEPT_TONES[tone];
  return (
    <div className={`rounded-xl border-2 ${styles.border} ${styles.bg} p-3`}>
      <div className="flex items-center gap-2">
        <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] font-bold ${styles.badge}`}>
          {numeral}
        </span>
        <Icon className={`h-4 w-4 shrink-0 ${styles.icon}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>

      {brief && (
        <div className="mt-2 rounded-md border border-border bg-card px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground">
          {brief}
        </div>
      )}

      {bullets && (
        <ul className="mt-2 space-y-1.5">
          {bullets.map((line) => (
            <Bullet key={line} dot={styles.dot}>
              {line}
            </Bullet>
          ))}
        </ul>
      )}

      {flow && <Flow steps={flow} />}
    </div>
  );
}

const WITHDRAWAL_SYMPTOMS = ["Anxiety.", "Shakiness.", "Nausea.", "Sweating."];

const DIFFERENCE_ROWS: [string, string][] = [
  ["Addiction", "Compulsive psychological/behavioural attachment to substance use"],
  ["Tolerance", "Increasing amount may be required to produce the same effect"],
  ["Dependence", "Physical adaptation that may produce withdrawal after stopping"],
];

export function AddictionDependence() {
  return (
    <div className="my-5 space-y-4">
      {/* Link caveat */}
      <div className="flex items-start gap-2.5 rounded-xl border-2 border-rose-600/30 bg-rose-50/35 p-3.5 dark:bg-rose-950/20">
        <Brain className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
            Linked but separate
          </div>
          <p className="mt-1 text-[10.5px] leading-snug text-foreground">
            <strong>Repeated use</strong> can lead to tolerance and dependence; they do not develop identically in
            everyone.
          </p>
        </div>
      </div>

      {/* Three concept cards with arrows */}
      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)]">
        <ConceptCard
          numeral="①"
          Icon={Brain}
          title="Addiction"
          tone="rose"
          bullets={[
            "Psychological attachment or compulsive use associated with drug effects.",
            "May involve seeking euphoria and temporary well-being.",
            "Repeated use can produce tolerance.",
            "Higher doses may be taken to achieve the previous effect.",
          ]}
          flow={["Repeated drug use", "Reduced response to same dose", "Higher dose may be sought"]}
        />

        <div className="flex items-center justify-center py-1 sm:py-10" aria-hidden>
          <ArrowDown className="h-4 w-4 text-indigo-500/70 dark:text-indigo-400 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 text-indigo-500/70 dark:text-indigo-400 sm:block" />
        </div>

        <ConceptCard
          numeral="②"
          Icon={Repeat2}
          title="Tolerance"
          tone="indigo"
          brief="Increasing amount may be required to produce the same effect."
        />

        <div className="flex items-center justify-center py-1 sm:py-10" aria-hidden>
          <ArrowDown className="h-4 w-4 text-indigo-500/70 dark:text-indigo-400 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 text-indigo-500/70 dark:text-indigo-400 sm:block" />
        </div>

        <ConceptCard
          numeral="③"
          Icon={HeartPulse}
          title="Dependence"
          tone="rose"
          bullets={[
            "The body adapts to repeated substance use.",
            "Abrupt discontinuation can produce withdrawal syndrome.",
            "Resuming substance use may temporarily relieve withdrawal symptoms.",
          ]}
          flow={["Repeated use", "Physical adaptation", "Abrupt discontinuation", "Withdrawal symptoms"]}
        />
      </div>

      {/* Withdrawal symptoms */}
      <div className="rounded-xl border border-rose-600/35 bg-rose-50/30 p-3 dark:bg-rose-950/15">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
          <div className="text-sm font-bold tracking-tight text-foreground">Withdrawal Symptoms</div>
        </div>
        <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {WITHDRAWAL_SYMPTOMS.map((symptom) => (
            <li
              key={symptom}
              className="flex items-center gap-2 rounded-md border border-border bg-card px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
              {symptom}
            </li>
          ))}
        </ul>
      </div>

      {/* Difference table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border bg-muted/25 px-3.5 py-2.5">
          <Table2 className="h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
          <div className="text-sm font-bold tracking-tight text-foreground">
            Difference Between Addiction, Tolerance and Dependence
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="grid grid-cols-[minmax(6rem,0.7fr)_minmax(0,1.3fr)] border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <div className="px-2.5 py-1.5">Term</div>
            <div className="px-2.5 py-1.5">Meaning</div>
          </div>
          {DIFFERENCE_ROWS.map(([term, meaning]) => (
            <div
              key={term}
              className="grid grid-cols-[minmax(6rem,0.7fr)_minmax(0,1.3fr)] border-b border-border last:border-b-0"
            >
              <div className="min-w-0 px-2.5 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">
                {term}
              </div>
              <div className="min-w-0 px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">{meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
