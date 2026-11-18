import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Cigarette,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * TobaccoSmokingSection — the tobacco block: background and the three modes of
 * use, then three separated sections — nicotine effects (definition, mechanism,
 * cause-and-effect flow), smoking-related diseases, and CO-related oxygen
 * deficiency (steps and a compact flow).
 *
 * amber / rose = nicotine, rose = diseases, indigo / sky = CO deficiency.
 */

type Tone = "amber" | "rose" | "indigo";

const TONES: Record<
  Tone,
  {
    border: string;
    surface: string;
    icon: string;
    badge: string;
    bullet: string;
  }
> = {
  amber: {
    border: "border-amber-600/35",
    surface: "bg-amber-50/30 dark:bg-amber-950/15",
    icon: "text-amber-700 dark:text-amber-300",
    badge:
      "border-amber-600/45 bg-amber-50/70 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200",
    bullet: "bg-amber-600/60",
  },
  rose: {
    border: "border-rose-600/35",
    surface: "bg-rose-50/30 dark:bg-rose-950/15",
    icon: "text-rose-700 dark:text-rose-300",
    badge:
      "border-rose-600/45 bg-rose-50/70 text-rose-900 dark:bg-rose-950/30 dark:text-rose-200",
    bullet: "bg-rose-600/60",
  },
  indigo: {
    border: "border-indigo-600/35",
    surface: "bg-indigo-50/30 dark:bg-indigo-950/15",
    icon: "text-indigo-700 dark:text-indigo-300",
    badge:
      "border-indigo-600/45 bg-indigo-50/70 text-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-200",
    bullet: "bg-indigo-600/60",
  },
};

type ChipTone = "amber" | "rose" | "indigo" | "sky";

const CHIP_TONES: Record<ChipTone, string> = {
  amber:
    "border-amber-600/30 bg-amber-50/60 text-foreground dark:bg-amber-950/25",
  rose: "border-rose-600/30 bg-rose-50/60 text-foreground dark:bg-rose-950/25",
  indigo:
    "border-indigo-600/30 bg-indigo-50/60 text-foreground dark:bg-indigo-950/25",
  sky: "border-sky-600/35 bg-sky-50/60 text-foreground dark:bg-sky-950/25",
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </div>
  );
}

function Section({
  numeral,
  Icon,
  title,
  tone,
  children,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  tone: Tone;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <section className={`rounded-xl border-2 ${t.border} ${t.surface} p-3.5`}>
      <div className="flex items-center gap-2">
        <span
          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] font-bold ${t.badge}`}
        >
          {numeral}
        </span>
        <Icon className={`h-4 w-4 shrink-0 ${t.icon}`} aria-hidden />
        <h3 className="text-sm font-bold tracking-tight text-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}

type Step = { text: ReactNode; subItems?: string[] };

function NumberedSteps({ steps, tone }: { steps: Step[]; tone: Tone }) {
  const t = TONES[tone];
  return (
    <ol className="mt-2 space-y-2">
      {steps.map((step, index) => (
        <li key={index} className="flex items-start gap-2">
          <span
            className={`mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border text-[8.5px] font-bold ${t.badge}`}
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <div className="text-[10.5px] leading-snug text-foreground">
              {step.text}
            </div>
            {step.subItems && (
              <ul className="mt-1 space-y-0.5">
                {step.subItems.map((item) => (
                  <li key={item} className="flex items-start gap-1.5 pl-1">
                    <span
                      className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${t.bullet}`}
                      aria-hidden
                    />
                    <span className="text-[10px] leading-snug text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

type FlowNode = { label: string; chip: ChipTone; bold?: boolean };

function FlowChips({ nodes }: { nodes: FlowNode[] }) {
  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2">
      {nodes.map((node, index) => (
        <div key={node.label} className="flex items-center gap-1.5">
          <span
            className={`rounded-md border px-2 py-1 text-center text-[10px] leading-snug ${CHIP_TONES[node.chip]}`}
          >
            {node.bold ? <strong>{node.label}</strong> : node.label}
          </span>
          {index < nodes.length - 1 && (
            <ArrowRight
              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}

const NICOTINE_FLOW: FlowNode[] = [
  { label: "Nicotine", chip: "amber" },
  { label: "Adrenal gland stimulation", chip: "amber" },
  { label: "Adrenaline + Noradrenaline release", chip: "amber" },
  { label: "Increased blood pressure and heart rate", chip: "rose", bold: true },
];

const SMOKING_DISEASES = [
  "Cancers of the lung, urinary bladder and throat.",
  "Bronchitis.",
  "Emphysema.",
  "Coronary heart disease.",
  "Gastric ulcers.",
];

const CO_STEPS: Step[] = [
  {
    text: (
      <>
        <strong>Smoking increases</strong> carbon monoxide (CO) levels in blood.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>CO binds</strong> to haemoglobin.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>This reduces</strong> the blood&apos;s oxygen-carrying capacity.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>Results in</strong> reduced oxygen supply to body tissues.
      </>
    ),
  },
];

const CO_FLOW: FlowNode[] = [
  { label: "Tobacco smoke", chip: "indigo" },
  { label: "Increased CO in blood", chip: "indigo" },
  { label: "Reduced haemoglobin oxygen transport", chip: "indigo" },
  { label: "Reduced oxygen supply to tissues", chip: "sky", bold: true },
];

export function TobaccoSmokingSection() {
  return (
    <div className="my-5 space-y-4">
      {/* Background */}
      <div className="rounded-xl border border-border bg-card p-3.5">
        <div className="flex items-center gap-2">
          <Cigarette
            className="h-4 w-4 shrink-0 text-muted-foreground"
            aria-hidden
          />
          <div className="text-sm font-bold tracking-tight text-foreground">
            Tobacco use
          </div>
        </div>
        <p className="mt-1.5 text-[10.5px] leading-snug text-foreground">
          Tobacco has been used for over <strong>400 years</strong> through:
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Smoking.", "Chewing.", "Snuffing."].map((mode) => (
            <span
              key={mode}
              className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[10px] font-semibold leading-snug text-foreground/85"
            >
              {mode}
            </span>
          ))}
        </div>
      </div>

      {/* Section 1 — Nicotine effects */}
      <Section numeral="1" Icon={Zap} title="Nicotine effects" tone="amber">
        <div className="rounded-lg border border-amber-600/30 bg-card px-2.5 py-2 dark:bg-amber-950/10">
          <Eyebrow>Definition</Eyebrow>
          <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
            <strong>Nicotine</strong> = An alkaloid present in tobacco.
          </p>
        </div>

        <div className="mt-3">
          <Eyebrow>Mechanism</Eyebrow>
          <NumberedSteps
            tone="amber"
            steps={[
              {
                text: (
                  <>
                    <strong>Nicotine stimulates</strong> the adrenal gland.
                  </>
                ),
              },
              {
                text: (
                  <>
                    <strong>The adrenal gland</strong> releases:
                  </>
                ),
                subItems: ["Adrenaline.", "Noradrenaline."],
              },
              {
                text: (
                  <>
                    <strong>These increase</strong>:
                  </>
                ),
                subItems: ["Blood pressure.", "Heart rate."],
              },
            ]}
          />
        </div>

        <div className="mt-3 rounded-lg border border-border bg-muted/20 p-2.5">
          <Eyebrow>Cause and effect</Eyebrow>
          <FlowChips nodes={NICOTINE_FLOW} />
        </div>
      </Section>

      {/* Section 2 — Smoking-related diseases */}
      <Section
        numeral="2"
        Icon={AlertTriangle}
        title="Smoking-related diseases"
        tone="rose"
      >
        <div className="rounded-lg border border-rose-600/30 bg-card p-3 dark:bg-rose-950/10">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-rose-600/45 bg-rose-50/70 text-[10px] font-bold text-rose-900 dark:bg-rose-950/30 dark:text-rose-200">
              A
            </span>
            <div className="text-sm font-bold tracking-tight text-foreground">
              Smoking
            </div>
          </div>
          <div className="mt-1.5">
            <Eyebrow>Associated with increased risk of:</Eyebrow>
          </div>
          <ul className="mt-1.5 space-y-1.5">
            {SMOKING_DISEASES.map((disease) => (
              <li key={disease} className="flex items-start gap-2">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60"
                  aria-hidden
                />
                <span className="text-[10.5px] leading-snug text-foreground">
                  {disease}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2.5 rounded-lg border border-rose-600/30 bg-card p-3 dark:bg-rose-950/10">
          <div className="flex items-center gap-2">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-rose-600/45 bg-rose-50/70 text-[10px] font-bold text-rose-900 dark:bg-rose-950/30 dark:text-rose-200">
              B
            </span>
            <div className="text-sm font-bold tracking-tight text-foreground">
              Chewing tobacco
            </div>
          </div>
          <p className="mt-1.5 text-[10.5px] leading-snug text-foreground">
            Increases the risk of <strong>oral cavity cancer</strong>.
          </p>
        </div>
      </Section>

      {/* Section 3 — CO-related oxygen deficiency */}
      <Section
        numeral="3"
        Icon={Wind}
        title="CO-related oxygen deficiency"
        tone="indigo"
      >
        <div className="rounded-lg border border-indigo-600/30 bg-card px-2.5 py-2 dark:bg-indigo-950/10">
          <Eyebrow>Steps</Eyebrow>
          <NumberedSteps steps={CO_STEPS} tone="indigo" />
        </div>

        <div className="mt-3 rounded-lg border border-border bg-muted/20 p-2.5">
          <Eyebrow>CO mechanism</Eyebrow>
          <FlowChips nodes={CO_FLOW} />
        </div>
      </Section>
    </div>
  );
}
