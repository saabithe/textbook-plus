import { Fragment, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  Eye,
  HeartHandshake,
  Stethoscope,
  TriangleAlert,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * PreventionPathway — the five major prevention-and-control approaches, shown
 * as a connected, numbered pathway (vertical on mobile, horizontal on desktop)
 * with the four early warning signs split out into their own caution checklist.
 *
 * teal → emerald → sky → amber → deep amber; checklist = rose / amber caution.
 */

type Tone = "teal" | "emerald" | "sky" | "amber" | "amberDeep";

const TONES: Record<
  Tone,
  { card: string; bar: string; header: string; badge: string; icon: string; dot: string }
> = {
  teal: {
    card: "border-teal-600/35",
    bar: "bg-teal-400/80 dark:bg-teal-500/60",
    header: "bg-teal-50/45 dark:bg-teal-950/20",
    badge: "border-teal-600/40 bg-teal-50/70 text-teal-900 dark:bg-teal-950/30 dark:text-teal-200",
    icon: "text-teal-700 dark:text-teal-300",
    dot: "bg-teal-600/60",
  },
  emerald: {
    card: "border-emerald-600/35",
    bar: "bg-emerald-400/80 dark:bg-emerald-500/60",
    header: "bg-emerald-50/45 dark:bg-emerald-950/20",
    badge: "border-emerald-600/40 bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200",
    icon: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-600/60",
  },
  sky: {
    card: "border-sky-600/35",
    bar: "bg-sky-400/80 dark:bg-sky-500/60",
    header: "bg-sky-50/45 dark:bg-sky-950/20",
    badge: "border-sky-600/40 bg-sky-50/70 text-sky-900 dark:bg-sky-950/30 dark:text-sky-200",
    icon: "text-sky-700 dark:text-sky-300",
    dot: "bg-sky-600/60",
  },
  amber: {
    card: "border-amber-600/35",
    bar: "bg-amber-400/80 dark:bg-amber-500/60",
    header: "bg-amber-50/45 dark:bg-amber-950/20",
    badge: "border-amber-600/40 bg-amber-50/70 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200",
    icon: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-600/60",
  },
  amberDeep: {
    card: "border-amber-700/50",
    bar: "bg-amber-600/80 dark:bg-amber-600/60",
    header: "bg-amber-100/70 dark:bg-amber-950/35",
    badge: "border-amber-700/50 bg-amber-100/80 text-amber-950 dark:bg-amber-900/40 dark:text-amber-100",
    icon: "text-amber-800 dark:text-amber-200",
    dot: "bg-amber-700/70",
  },
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{children}</div>
  );
}

function Connector() {
  return (
    <div className="flex h-6 shrink-0 items-center justify-center lg:h-auto lg:w-5" aria-hidden>
      <ArrowDown className="h-3.5 w-3.5 text-muted-foreground/50 lg:hidden" />
      <ArrowRight className="hidden h-3.5 w-3.5 text-muted-foreground/50 lg:block" />
    </div>
  );
}

function StepCard({
  numeral,
  Icon,
  title,
  tone,
  points,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  tone: Tone;
  points: ReactNode[];
}) {
  const t = TONES[tone];
  return (
    <div className={`flex h-full flex-col overflow-hidden rounded-xl border-2 ${t.card} bg-card`}>
      <div className={`h-1 ${t.bar}`} aria-hidden />
      <div className={`flex items-start gap-1.5 border-b border-border px-2.5 py-2 ${t.header}`}>
        <span
          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[9px] font-bold ${t.badge}`}
        >
          {numeral}
        </span>
        <span className="flex-1 text-sm font-bold leading-tight tracking-tight text-foreground">{title}</span>
        <Icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${t.icon}`} aria-hidden />
      </div>
      <ul className="flex-1 space-y-1.5 p-2.5">
        {points.map((point, index) => (
          <li key={index} className="flex gap-1.5">
            <span className={`mt-1 h-1 w-1 shrink-0 rounded-full ${t.dot}`} aria-hidden />
            <span className="min-w-0 text-[10.5px] leading-snug text-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const STEPS: { numeral: string; Icon: LucideIcon; title: string; tone: Tone; points: ReactNode[] }[] = [
  {
    numeral: "1",
    Icon: Users,
    title: "Avoid undue peer pressure",
    tone: "teal",
    points: [
      <strong key="p1a">Respect each child&apos;s individual limits.</strong>,
      <>
        <strong>Avoid excessive pressure</strong> in academics, sports and other activities.
      </>,
    ],
  },
  {
    numeral: "2",
    Icon: BookOpen,
    title: "Education and counselling",
    tone: "emerald",
    points: [
      <>
        <strong>Teach young people</strong> to manage stress.
      </>,
      <>
        <strong>Help them accept failure</strong> as part of life.
      </>,
      <>
        <strong>Encourage positive activities:</strong>
        <ul className="mt-1 grid grid-cols-2 gap-x-3 gap-y-0.5 pl-1">
          {["Sports", "Music", "Reading", "Yoga"].map((activity) => (
            <li key={activity} className="flex gap-1.5">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-emerald-600/60" aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{activity}</span>
            </li>
          ))}
        </ul>
      </>,
    ],
  },
  {
    numeral: "3",
    Icon: HeartHandshake,
    title: "Seek support from parents and peers",
    tone: "sky",
    points: [
      <>
        <strong>Discuss anxiety and guilt</strong> with trusted people.
      </>,
      <>
        <strong>Seek guidance</strong> from parents and trusted friends.
      </>,
    ],
  },
  {
    numeral: "4",
    Icon: Eye,
    title: "Identify early warning signs",
    tone: "amber",
    points: [
      <>
        <strong>Parents, teachers and friends</strong> should watch for:
        <span className="mt-1 inline-flex items-center gap-1 rounded border border-amber-600/30 bg-amber-50/60 px-1.5 py-0.5 text-[8.5px] font-semibold text-amber-800 dark:bg-amber-950/30 dark:text-amber-200">
          <ArrowDown className="h-2.5 w-2.5" aria-hidden /> Four signs in the checklist below
        </span>
      </>,
      <>
        <strong>Early identification</strong> helps initiate intervention.
      </>,
    ],
  },
  {
    numeral: "5",
    Icon: Stethoscope,
    title: "Professional and medical assistance",
    tone: "amberDeep",
    points: [
      <strong key="p5a">Consult qualified psychologists and psychiatrists.</strong>,
      <strong key="p5b">Use de-addiction and rehabilitation programmes.</strong>,
      <>
        <strong>Seek appropriate support</strong> for recovery.
      </>,
    ],
  },
];

const WARNING_SIGNS = ["Declining academic performance.", "Social isolation.", "Fatigue.", "Mood changes."];

function WarningSignChecklist() {
  return (
    <div className="mt-3 rounded-xl border-2 border-rose-600/35 bg-rose-50/40 p-3.5 dark:bg-rose-950/20">
      <div className="flex items-start gap-2">
        <TriangleAlert
          className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300"
          aria-hidden
        />
        <div>
          <Eyebrow>Checklist · Caution</Eyebrow>
          <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">Early warning signs</div>
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {WARNING_SIGNS.map((sign) => (
          <div
            key={sign}
            className="flex items-center gap-2 rounded-lg border border-amber-600/25 bg-card px-2.5 py-2"
          >
            <span
              className="grid h-4 w-4 shrink-0 place-items-center rounded border border-rose-600/45 bg-rose-50/70 text-rose-700 dark:bg-rose-950/30 dark:text-rose-200"
              aria-hidden
            >
              <Check className="h-3 w-3" />
            </span>
            <span className="text-[10.5px] leading-snug text-foreground">{sign}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PreventionPathway() {
  return (
    <div className="my-5">
      <Eyebrow>5. Prevention and Control Strategies</Eyebrow>
      <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">Five Major Approaches</div>
      <p className="mt-1 text-[10.5px] leading-snug text-muted-foreground">
        A stepwise path from family and peer support to professional assistance.
      </p>

      <div className="mt-3 flex flex-col lg:flex-row lg:items-stretch">
        {STEPS.map((step, index) => (
          <Fragment key={step.numeral}>
            <div className="min-w-0 flex-1">
              <StepCard {...step} />
            </div>
            {index < STEPS.length - 1 && <Connector />}
          </Fragment>
        ))}
      </div>

      <WarningSignChecklist />
    </div>
  );
}
