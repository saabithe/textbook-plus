import type { ReactNode } from "react";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Brain,
  Bug,
  Check,
  Cigarette,
  Dna,
  HeartPulse,
  Users,
} from "lucide-react";

/**
 * HealthConcept — the four chapter-opening sections: the history of the idea of
 * health, the factors that damage it, the WHO definition with its three
 * dimensions, and the definition and classification of disease.
 *
 * stone/amber = the old humour theory, sky = experiment, emerald = health,
 * rose = infectious disease, indigo = non-infectious disease.
 */

function Arrow() {
  return (
    <div className="flex items-center justify-center py-0.5" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 text-muted-foreground sm:hidden" />
      <ArrowRight className="hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
    </div>
  );
}

function StageCard({
  step,
  tag,
  title,
  tone,
  children,
}: {
  step: string;
  tag: string;
  title: string;
  tone: "amber" | "sky" | "emerald";
  children: ReactNode;
}) {
  const skin = {
    amber: "border-amber-600/35 bg-amber-50/45 dark:bg-amber-950/20",
    sky: "border-sky-600/35 bg-sky-50/45 dark:bg-sky-950/20",
    emerald: "border-emerald-600/35 bg-emerald-50/45 dark:bg-emerald-950/20",
  }[tone];

  const ink = {
    amber: "border-amber-600/40 text-amber-800 dark:text-amber-300",
    sky: "border-sky-600/40 text-sky-800 dark:text-sky-300",
    emerald: "border-emerald-600/40 text-emerald-800 dark:text-emerald-300",
  }[tone];

  return (
    <div className={`rounded-lg border px-3 py-2.5 ${skin}`}>
      <div className="flex items-center gap-1.5">
        <span className={`grid h-[18px] w-[18px] place-items-center rounded-full border text-[9px] font-bold ${ink}`}>
          {step}
        </span>
        <span className={`text-[8.5px] font-semibold uppercase tracking-[0.08em] ${ink}`}>{tag}</span>
      </div>
      <div className="mt-1 text-xs font-bold leading-snug tracking-tight text-foreground">{title}</div>
      <div className="mt-1.5 space-y-1">{children}</div>
    </div>
  );
}

function StageLine({ children }: { children: ReactNode }) {
  return <div className="flex gap-1.5 text-[10.5px] leading-snug text-foreground">{children}</div>;
}

function Dot({ className = "bg-foreground/35" }: { className?: string }) {
  return <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${className}`} aria-hidden />;
}

export function HealthEvolutionTimeline() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        From humours to evidence
      </div>

      <div className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <StageCard step="1" tag="Hypothesis" title="Good Humour Hypothesis" tone="amber">
          <StageLine>
            <Dot className="bg-amber-600/60" />
            <span>
              Proposed by early Greeks, including <strong>Hippocrates</strong>, and the Indian{" "}
              <strong>Ayurveda system of medicine</strong>.
            </span>
          </StageLine>
          <StageLine>
            <Dot className="bg-amber-600/60" />
            <span>
              Health was a state of body and mind maintained by a <strong>balance of certain humours</strong>.
            </span>
          </StageLine>
          <StageLine>
            <Dot className="bg-amber-600/60" />
            <span>
              <strong>Example:</strong> people with ‘black bile’ were believed to have a hot personality and to
              develop fever.
            </span>
          </StageLine>
        </StageCard>

        <Arrow />

        <StageCard step="2" tag="Experiment" title="Experimental observations" tone="sky">
          <StageLine>
            <Dot className="bg-sky-600/60" />
            <span>
              <strong>William Harvey</strong> discovered blood circulation using the experimental method.
            </span>
          </StageLine>
          <StageLine>
            <Dot className="bg-sky-600/60" />
            <span>
              A <strong>thermometer</strong> showed normal body temperature in individuals with black bile.
            </span>
          </StageLine>
        </StageCard>

        <Arrow />

        <StageCard step="3" tag="Disproof" title="Hypothesis disproved" tone="emerald">
          <StageLine>
            <Dot className="bg-emerald-600/60" />
            <span>These findings disproved the Good Humour Hypothesis.</span>
          </StageLine>
        </StageCard>
      </div>
    </div>
  );
}

export function MindImmunityCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Brain className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Mind–immunity connection
        </div>
      </div>

      <div className="mt-2 grid grid-cols-1 items-center gap-1.5 sm:grid-cols-[auto_auto_minmax(0,1fr)_auto_auto]">
        <div className="rounded-lg border border-violet-600/35 bg-violet-50/45 px-3 py-1.5 text-center dark:bg-violet-950/20">
          <div className="text-xs font-bold tracking-tight text-foreground">Mind</div>
        </div>

        <Arrow />

        <div>
          <div className="text-center text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Influences the immune system through
          </div>
          <div className="mt-1 grid grid-cols-2 gap-1.5">
            <div className="rounded-md border border-violet-600/30 bg-card px-2 py-1 text-center text-[10.5px] font-semibold text-foreground">
              Neural system
            </div>
            <div className="rounded-md border border-violet-600/30 bg-card px-2 py-1 text-center text-[10.5px] font-semibold text-foreground">
              Endocrine system
            </div>
          </div>
        </div>

        <Arrow />

        <div className="rounded-lg border border-emerald-600/35 bg-emerald-50/45 px-3 py-1.5 text-center dark:bg-emerald-950/20">
          <div className="text-xs font-bold tracking-tight text-foreground">Immune system</div>
        </div>
      </div>

      <div className="mt-2.5 border-t border-border pt-2 text-[10.5px] leading-snug text-muted-foreground">
        These systems contribute to maintaining overall health.
      </div>
    </div>
  );
}

function HealthBranchSplit() {
  return (
    <>
      <div className="flex justify-center py-0.5 sm:hidden" aria-hidden>
        <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
      </div>
      <svg viewBox="0 0 400 26" className="hidden h-7 w-full sm:block" aria-hidden preserveAspectRatio="none">
        <path
          d="M200 0 V9 M67 9 H333 M67 9 V26 M200 9 V26 M333 9 V26"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1.2"
        />
      </svg>
    </>
  );
}

const HEALTH_FACTORS = [
  {
    n: "1",
    title: "Genetic disorders",
    detail: "Deficiencies present from birth and defects inherited from parents.",
    icon: <Dna className="h-4 w-4" />,
    tone: "rose",
  },
  {
    n: "2",
    title: "Infections",
    detail: "Invasion by pathogenic microorganisms.",
    icon: <Bug className="h-4 w-4" />,
    tone: "amber",
  },
  {
    n: "3",
    title: "Lifestyle",
    detail: "Food, water, rest, exercise and personal habits.",
    icon: <Cigarette className="h-4 w-4" />,
    tone: "indigo",
  },
] as const;

export function HealthFactorsTrio() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex flex-col items-center">
        <div className="rounded-md border-2 border-rose-600/40 bg-rose-50/50 px-4 py-1 text-center dark:bg-rose-950/25">
          <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-rose-900 dark:text-rose-200">
            Health
          </div>
        </div>
        <div className="mt-0.5 text-[9px] font-medium text-muted-foreground">
          Three major factors can adversely affect it
        </div>
      </div>

      <HealthBranchSplit />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {HEALTH_FACTORS.map((factor) => {
          const skin = {
            rose: "border-rose-600/35 bg-rose-50/40 dark:bg-rose-950/20",
            amber: "border-amber-600/35 bg-amber-50/40 dark:bg-amber-950/20",
            indigo: "border-indigo-600/35 bg-indigo-50/40 dark:bg-indigo-950/20",
          }[factor.tone];

          const badge = {
            rose: "border-rose-600/40 text-rose-800 dark:text-rose-300",
            amber: "border-amber-600/40 text-amber-800 dark:text-amber-300",
            indigo: "border-indigo-600/40 text-indigo-800 dark:text-indigo-300",
          }[factor.tone];

          return (
            <div key={factor.n} className={`rounded-lg border px-3 py-2.5 ${skin}`}>
              <div className="flex items-center gap-1.5">
                <span className={`grid h-[18px] w-[18px] place-items-center rounded-full border text-[9px] font-bold ${badge}`}>
                  {factor.n}
                </span>
                <span className="text-muted-foreground" aria-hidden>
                  {factor.icon}
                </span>
                <span className="text-xs font-bold tracking-tight text-foreground">{factor.title}</span>
              </div>
              <div className="mt-1 text-[10.5px] leading-snug text-foreground">{factor.detail}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const DETERMINANTS = [
  "Self-care system",
  "Personal behaviour",
  "Culture",
  "Community",
  "Lifestyle",
  "Family",
  "Psycho-social environment",
  "Body",
  "Physical environment",
  "Human-made environment",
  "Biosphere",
  "Work",
];

const DETERMINANT_POINTS = DETERMINANTS.map((label, index) => {
  const angle = (-90 + index * 30) * (Math.PI / 180);
  return {
    label,
    x: 50 + 36 * Math.cos(angle),
    y: 50 + 36 * Math.sin(angle),
  };
});

export function HealthDeterminantsRadial() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Determinants of health
      </div>
      <div className="mt-0.5 text-[11px] leading-snug text-foreground/70">
        Health is influenced by multiple interconnected factors.
      </div>

      <div className="relative mx-auto mt-3 hidden aspect-square w-full max-w-[30rem] text-foreground sm:block">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {DETERMINANT_POINTS.map((point) => (
            <line
              key={point.label}
              x1="50"
              y1="50"
              x2={point.x}
              y2={point.y}
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="0.3"
            />
          ))}
          {DETERMINANT_POINTS.map((point) => (
            <circle key={point.label} cx={point.x} cy={point.y} r="0.9" fill="currentColor" fillOpacity="0.35" />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-teal-600/40 bg-teal-50 px-5 py-4 text-center dark:bg-teal-950/40">
          <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-teal-900 dark:text-teal-200">Health</div>
        </div>

        {DETERMINANT_POINTS.map((point) => (
          <div
            key={point.label}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            className="absolute w-[5.4rem] -translate-x-1/2 -translate-y-1/2 rounded-md border border-border bg-card px-1 py-1 text-center text-[9px] font-semibold leading-tight text-foreground shadow-sm"
          >
            {point.label}
          </div>
        ))}
      </div>

      <div className="mt-2.5 sm:hidden">
        <div className="rounded-md border border-teal-600/35 bg-teal-50/50 py-1 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-teal-900 dark:bg-teal-950/25 dark:text-teal-200">
          Health
        </div>
        <div className="mt-1 grid grid-cols-2 gap-1">
          {DETERMINANTS.map((determinant) => (
            <div
              key={determinant}
              className="rounded border border-border bg-muted/20 px-1.5 py-1 text-center text-[9.5px] font-medium leading-tight text-foreground"
            >
              {determinant}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DIMENSIONS = [
  { label: "Physical", icon: <Activity className="h-4 w-4" /> },
  { label: "Mental", icon: <Brain className="h-4 w-4" /> },
  { label: "Social", icon: <Users className="h-4 w-4" /> },
];

export function WhoHealthDefinition() {
  return (
    <div className="my-5 rounded-xl border-2 border-emerald-600/35 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2">
        <HeartPulse className="h-3.5 w-3.5 text-emerald-800 dark:text-emerald-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
          Definition · World Health Organization
        </div>
      </div>

      <div className="mt-1.5 text-sm font-semibold leading-relaxed text-foreground">
        Health is a state of <strong>complete physical, mental and social well-being</strong> and not merely the absence
        of disease or infirmity.
      </div>

      <div className="mt-3 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Three dimensions of health
      </div>
      <div className="mt-1 grid grid-cols-3 gap-1.5">
        {DIMENSIONS.map((dimension) => (
          <div
            key={dimension.label}
            className="rounded-lg border border-emerald-600/30 bg-card px-2 py-2 text-center"
          >
            <span className="mx-auto flex justify-center text-emerald-700 dark:text-emerald-300" aria-hidden>
              {dimension.icon}
            </span>
            <div className="mt-1 text-[10.5px] font-bold tracking-tight text-foreground">{dimension.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 text-[10.5px] leading-snug text-foreground/80">
        All three contribute to complete well-being.
      </div>
    </div>
  );
}

const HEALTH_BENEFITS = [
  "Improves work efficiency.",
  "Increases productivity and economic prosperity.",
  "Increases longevity.",
  "Reduces infant and maternal mortality.",
];

const HEALTH_MEASURES = [
  "Balanced diet",
  "Personal hygiene",
  "Regular exercise, including Yoga",
  "Awareness about diseases",
  "Vaccination (immunisation)",
  "Proper disposal of biological wastes",
  "Vector control",
  "Hygienic food and clean water resources",
];

export function HealthImportanceAndMeasures() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
          Socio-economic importance
        </div>
        <div className="mt-1 text-xs font-bold tracking-tight text-foreground">Good health</div>

        <div className="mt-2 space-y-1.5">
          {HEALTH_BENEFITS.map((benefit) => (
            <div key={benefit} className="flex gap-2 text-[11px] leading-snug text-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Measures for maintaining health
        </div>

        <div className="mt-2 space-y-1">
          {HEALTH_MEASURES.map((measure, index) => (
            <div key={measure} className="flex items-start gap-1.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/35 bg-emerald-50/60 text-emerald-800 dark:bg-emerald-950/25 dark:text-emerald-300">
                <Check className="h-2.5 w-2.5" aria-hidden />
              </span>
              <span className="text-[10.5px] leading-snug text-foreground">
                <span className="font-semibold text-muted-foreground">{index + 1}. </span>
                {measure}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DiseaseDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-rose-600/35 bg-rose-50/40 p-4 dark:bg-rose-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
        Definition
      </div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">Disease</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        When the functioning of one or more organs or systems of the body is adversely affected, and this is
        characterised by the appearance of signs and symptoms, the individual is said to have a disease.
      </div>
    </div>
  );
}

export function DiseaseTypesComparison() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Types of diseases</div>

      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="rounded-lg border border-rose-600/35 bg-rose-50/40 p-3 dark:bg-rose-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
            Infectious diseases
          </div>
          <div className="mt-1 inline-flex rounded border border-rose-700/30 bg-card px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em] text-rose-800 dark:text-rose-300">
            Transmissible
          </div>
          <div className="mt-1.5 text-[11px] leading-relaxed text-foreground">
            Transmitted from an infected person to a healthy person.
          </div>
          <div className="mt-2 border-t border-rose-700/20 pt-1.5">
            <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Example ·{" "}
            </span>
            <span className="text-xs font-bold tracking-tight text-foreground">AIDS</span>
          </div>
        </div>

        <div className="rounded-lg border border-indigo-600/35 bg-indigo-50/40 p-3 dark:bg-indigo-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Non-infectious diseases
          </div>
          <div className="mt-1 inline-flex rounded border border-indigo-700/30 bg-card px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.06em] text-indigo-800 dark:text-indigo-300">
            Non-transmissible
          </div>
          <div className="mt-1.5 text-[11px] leading-relaxed text-foreground">
            Not transmitted from an infected person to a healthy person.
          </div>
          <div className="mt-2 border-t border-indigo-700/20 pt-1.5">
            <span className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Example ·{" "}
            </span>
            <span className="text-xs font-bold tracking-tight text-foreground">Cancer</span>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-start gap-2 rounded-lg border border-amber-600/30 bg-amber-50/40 px-3 py-2 dark:bg-amber-950/20">
        <Cigarette className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
        <div className="text-[10.5px] leading-snug text-foreground">
          <strong>Additional health concern:</strong> drug and alcohol abuse also adversely affect overall health.
        </div>
      </div>
    </div>
  );
}
