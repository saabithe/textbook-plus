import type { ReactNode } from "react";
import {
  AlertTriangle,
  Dumbbell,
  HeartPulse,
  PersonStanding,
  Syringe,
  type LucideIcon,
} from "lucide-react";

/**
 * HarmfulEffects — the drug-abuse block in two parts:
 * 1. SystemicEffects: four body-system impact panels, with overdose and
 *    intravenous-infection risks given stronger borders and accents.
 * 2. SteroidMisuse: misused substances plus a three-column side-effect grid
 *    whose common psychological effects share one identical sub-block.
 *
 * amber = behaviour, rose / red = overdose and infection, slate = organs,
 * rose / sky / amber = females / males / adolescents.
 */

/* -------------------------------------------------------------------------- */
/* Shared helpers                                                             */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children, className = "text-muted-foreground" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[8.5px] font-semibold uppercase tracking-[0.08em] ${className}`}>
      {children}
    </div>
  );
}

function BulletList({ items, dotClass }: { items: ReactNode[]; dotClass: string }) {
  return (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="flex gap-1.5">
          <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dotClass}`} aria-hidden />
          <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. SystemicEffects                                                          */
/* -------------------------------------------------------------------------- */

type SystemTone = "amber" | "rose" | "red" | "slate";

const SYSTEM_TONES: Record<
  SystemTone,
  { card: string; bar: string; header: string; icon: string; eyebrow: string; dot: string; panel: string }
> = {
  amber: {
    card: "border-amber-600/35",
    bar: "bg-amber-400/80 dark:bg-amber-500/60",
    header: "bg-amber-50/40 dark:bg-amber-950/20",
    icon: "text-amber-700 dark:text-amber-300",
    eyebrow: "text-amber-800 dark:text-amber-300",
    dot: "bg-amber-600/60",
    panel: "border-amber-600/25 bg-amber-50/30 dark:bg-amber-950/15",
  },
  rose: {
    card: "border-rose-600/45",
    bar: "bg-rose-500/80 dark:bg-rose-400/60",
    header: "bg-rose-50/50 dark:bg-rose-950/25",
    icon: "text-rose-700 dark:text-rose-300",
    eyebrow: "text-rose-800 dark:text-rose-300",
    dot: "bg-rose-600/60",
    panel: "border-rose-600/30 bg-rose-50/40 dark:bg-rose-950/20",
  },
  red: {
    card: "border-red-600/45",
    bar: "bg-red-500/80 dark:bg-red-400/60",
    header: "bg-red-50/50 dark:bg-red-950/25",
    icon: "text-red-700 dark:text-red-300",
    eyebrow: "text-red-800 dark:text-red-300",
    dot: "bg-red-600/60",
    panel: "border-red-600/30 bg-red-50/40 dark:bg-red-950/20",
  },
  slate: {
    card: "border-slate-600/35",
    bar: "bg-slate-400/70 dark:bg-slate-500/60",
    header: "bg-slate-50/50 dark:bg-slate-900/40",
    icon: "text-slate-700 dark:text-slate-300",
    eyebrow: "text-slate-800 dark:text-slate-300",
    dot: "bg-slate-600/60",
    panel: "border-slate-600/25 bg-slate-50/40 dark:bg-slate-900/30",
  },
};

function SystemBlock({
  numeral,
  Icon,
  title,
  tone,
  prominent = false,
  children,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  tone: SystemTone;
  prominent?: boolean;
  children: ReactNode;
}) {
  const t = SYSTEM_TONES[tone];
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border-2 ${t.card} bg-card ${prominent ? "shadow-sm" : ""}`}
    >
      {prominent && <div className={`h-1 ${t.bar}`} aria-hidden />}
      <div className={`flex items-center gap-2 border-b border-border px-3 py-2 ${t.header}`}>
        <Icon className={`h-4 w-4 shrink-0 ${t.icon}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">
          <span className={`mr-1 ${t.eyebrow}`}>{numeral}</span>
          {title}
        </span>
      </div>
      <div className="flex-1 p-3">{children}</div>
    </div>
  );
}

export function SystemicEffects() {
  return (
    <div className="my-5 space-y-4">
      <div className="flex items-start gap-2.5">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
        <div>
          <Eyebrow>4. Harmful Effects of Drug and Alcohol Abuse</Eyebrow>
          <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">
            A. Immediate and Systemic Effects
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        {/* ① Behavioural Effects */}
        <SystemBlock numeral="①" Icon={PersonStanding} title="Behavioural Effects" tone="amber">
          <BulletList
            dotClass={SYSTEM_TONES.amber.dot}
            items={[
              <>
                <strong>Reckless</strong> behaviour.
              </>,
              <>
                <strong>Vandalism</strong>.
              </>,
              <>
                <strong>Violence</strong>.
              </>,
            ]}
          />
        </SystemBlock>

        {/* ② Overdose Risks — prominent */}
        <SystemBlock numeral="②" Icon={AlertTriangle} title="Overdose Risks" tone="rose" prominent>
          <p className="text-[10.5px] leading-snug text-foreground">
            <strong>Excessive doses</strong> can cause:
          </p>
          <div className={`mt-1.5 rounded-lg border px-2.5 py-1.5 ${SYSTEM_TONES.rose.panel}`}>
            <span className="text-[10.5px] font-bold leading-snug text-rose-900 dark:text-rose-200">Coma.</span>
          </div>

          <div className="mt-2.5">
            <Eyebrow className={SYSTEM_TONES.rose.eyebrow}>Death due to:</Eyebrow>
            <ul className="mt-1 space-y-1 rounded-lg border border-rose-600/25 bg-card/60 px-2.5 py-2 dark:bg-rose-950/10">
              {["Respiratory failure.", "Heart failure.", "Cerebral haemorrhage."].map((cause) => (
                <li key={cause} className="flex gap-1.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
                  <span className="text-[10px] leading-snug text-foreground">{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-3 rounded-lg border-2 border-red-600/40 bg-red-50/50 p-2.5 dark:bg-red-950/25">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-700 dark:text-red-300" aria-hidden />
              <div>
                <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-red-800 dark:text-red-300">
                  Danger: Mixing drugs and alcohol
                </div>
                <p className="mt-0.5 text-[10.5px] leading-snug text-foreground">
                  Combining drugs with alcohol can amplify toxic effects and increase the risk of fatal overdose.
                </p>
              </div>
            </div>
          </div>
        </SystemBlock>

        {/* ③ Risks of Intravenous Drug Use — prominent */}
        <SystemBlock
          numeral="③"
          Icon={Syringe}
          title="Risks of Intravenous Drug Use"
          tone="red"
          prominent
        >
          <p className="text-[10.5px] leading-snug text-foreground">
            <strong>Sharing infected needles</strong> increases the risk of acquiring:
          </p>
          <ul className="mt-1.5 space-y-1 rounded-lg border border-red-600/25 bg-card/60 px-2.5 py-2 dark:bg-red-950/10">
            {[
              <>
                <strong>AIDS</strong> (HIV infection).
              </>,
              <>
                <strong>Hepatitis B</strong>.
              </>,
            ].map((item, index) => (
              <li key={index} className="flex gap-1.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-600/60" aria-hidden />
                <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </SystemBlock>

        {/* ④ Long-Term Organ Damage */}
        <SystemBlock numeral="④" Icon={HeartPulse} title="Long-Term Organ Damage" tone="slate">
          <BulletList
            dotClass={SYSTEM_TONES.slate.dot}
            items={[
              <>
                <strong>Nervous system</strong> damage.
              </>,
              <>
                <strong>Liver cirrhosis</strong>.
              </>,
              <>
                Harm to the <strong>developing foetus</strong> when substances are used during pregnancy.
              </>,
            ]}
          />
        </SystemBlock>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. SteroidMisuse                                                            */
/* -------------------------------------------------------------------------- */

type SteroidTone = "rose" | "sky" | "amber";

const STEROID_TONES: Record<
  SteroidTone,
  {
    card: string;
    bar: string;
    header: string;
    dot: string;
    highlightBorder: string;
    highlightBg: string;
    highlightText: string;
  }
> = {
  rose: {
    card: "border-rose-600/35",
    bar: "bg-rose-400/80 dark:bg-rose-500/60",
    header: "bg-rose-50/45 dark:bg-rose-950/20",
    dot: "bg-rose-600/60",
    highlightBorder: "border-rose-600/40",
    highlightBg: "bg-rose-50/60 dark:bg-rose-950/25",
    highlightText: "text-rose-900 dark:text-rose-200",
  },
  sky: {
    card: "border-sky-600/35",
    bar: "bg-sky-400/80 dark:bg-sky-500/60",
    header: "bg-sky-50/45 dark:bg-sky-950/20",
    dot: "bg-sky-600/60",
    highlightBorder: "border-sky-600/40",
    highlightBg: "bg-sky-50/60 dark:bg-sky-950/25",
    highlightText: "text-sky-900 dark:text-sky-200",
  },
  amber: {
    card: "border-amber-600/35",
    bar: "bg-amber-400/80 dark:bg-amber-500/60",
    header: "bg-amber-50/45 dark:bg-amber-950/20",
    dot: "bg-amber-600/60",
    highlightBorder: "border-amber-600/40",
    highlightBg: "bg-amber-50/60 dark:bg-amber-950/25",
    highlightText: "text-amber-900 dark:text-amber-200",
  },
};

function EffectItem({
  children,
  tone,
  highlight = false,
}: {
  children: ReactNode;
  tone: SteroidTone;
  highlight?: boolean;
}) {
  const t = STEROID_TONES[tone];
  if (highlight) {
    return (
      <li className={`flex gap-1.5 rounded-md border px-2 py-1 ${t.highlightBorder} ${t.highlightBg}`}>
        <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${t.dot}`} aria-hidden />
        <span className={`text-[10.5px] font-bold leading-snug ${t.highlightText}`}>{children}</span>
      </li>
    );
  }
  return (
    <li className="flex gap-1.5 px-0.5">
      <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${t.dot}`} aria-hidden />
      <span className="text-[10.5px] leading-snug text-foreground">{children}</span>
    </li>
  );
}

/** Identical in both adult columns so the shared psychological effects read as a matched set. */
function PsychologicalEffects() {
  return (
    <li>
      <div className="rounded-lg border border-border bg-muted/30 px-2.5 py-2">
        <Eyebrow>Common psychological effects</Eyebrow>
        <ul className="mt-1 space-y-1">
          {["Increased aggressiveness.", "Mood swings.", "Depression."].map((item) => (
            <li key={item} className="flex gap-1.5">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function SteroidColumn({
  emoji,
  title,
  tone,
  children,
}: {
  emoji: string;
  title: string;
  tone: SteroidTone;
  children: ReactNode;
}) {
  const t = STEROID_TONES[tone];
  return (
    <div className={`flex flex-col overflow-hidden rounded-xl border-2 ${t.card} bg-card`}>
      <div className={`h-1 ${t.bar}`} aria-hidden />
      <div className={`flex items-center gap-2 border-b border-border px-3 py-2 ${t.header}`}>
        <span className="text-base leading-none" aria-hidden>
          {emoji}
        </span>
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>
      <div className="flex-1 p-3">
        <ul className="space-y-1">{children}</ul>
      </div>
    </div>
  );
}

export function SteroidMisuse() {
  return (
    <div className="my-5 space-y-4">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
        <div className="text-sm font-bold tracking-tight text-foreground">B. Anabolic Steroid Misuse in Sports</div>
      </div>

      <p className="text-[10.5px] leading-snug text-foreground">
        Some sportspersons <strong>misuse substances</strong> to increase muscle strength, muscle bulk and
        aggressiveness, aiming to improve performance.
      </p>

      <div>
        <Eyebrow>Substances misused</Eyebrow>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {["Narcotic analgesics.", "Anabolic steroids.", "Diuretics.", "Hormones."].map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[10.5px] font-semibold leading-snug text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="text-[11px] font-bold tracking-tight text-foreground">
          Side Effects of Anabolic Steroid Misuse
        </div>

        <div className="mt-2 grid grid-cols-1 items-start gap-3 md:grid-cols-3">
          {/* Females */}
          <SteroidColumn emoji="♀️" title="Females" tone="rose">
            <EffectItem tone="rose" highlight>
              <strong>Masculinisation.</strong>
            </EffectItem>
            <PsychologicalEffects />
            <EffectItem tone="rose" highlight>
              <strong>Abnormal menstrual cycles.</strong>
            </EffectItem>
            <EffectItem tone="rose" highlight>
              <strong>Excessive facial and body hair.</strong>
            </EffectItem>
            <EffectItem tone="rose" highlight>
              <strong>Clitoral enlargement.</strong>
            </EffectItem>
            <EffectItem tone="rose" highlight>
              <strong>Deepening of voice.</strong>
            </EffectItem>
          </SteroidColumn>

          {/* Males */}
          <SteroidColumn emoji="♂️" title="Males" tone="sky">
            <EffectItem tone="sky">Acne.</EffectItem>
            <PsychologicalEffects />
            <EffectItem tone="sky" highlight>
              <strong>Reduction in testicle size.</strong>
            </EffectItem>
            <EffectItem tone="sky" highlight>
              <strong>Decreased sperm production.</strong>
            </EffectItem>
            <EffectItem tone="sky">Kidney and liver dysfunction.</EffectItem>
            <EffectItem tone="sky" highlight>
              <strong>Breast enlargement (gynecomastia).</strong>
            </EffectItem>
            <EffectItem tone="sky">Premature baldness.</EffectItem>
            <EffectItem tone="sky" highlight>
              <strong>Prostate enlargement.</strong>
            </EffectItem>
          </SteroidColumn>

          {/* Adolescents */}
          <SteroidColumn emoji="🚸" title="Adolescents" tone="amber">
            <EffectItem tone="amber">Severe facial and body acne.</EffectItem>
            <EffectItem tone="amber" highlight>
              <strong>Premature closure of long-bone growth centres.</strong>
            </EffectItem>
            <EffectItem tone="amber" highlight>
              <strong>Stunted growth.</strong>
            </EffectItem>
          </SteroidColumn>
        </div>
      </div>
    </div>
  );
}
