import type { ReactNode } from "react";
import {
  Check,
  Dna,
  Lightbulb,
  Microscope,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

/**
 * DiagnosisDashboard — the cancer detection-and-diagnosis block: four
 * like-for-like cards for tissue examination, diagnostic imaging,
 * immunological detection and molecular biology techniques.
 *
 * sky / teal = tissue examination, violet = imaging,
 * emerald = immunological detection, indigo = molecular techniques.
 */

type Tone = "tissue" | "imaging" | "immuno" | "molecular";

const TONES: Record<
  Tone,
  { border: string; surface: string; iconWrap: string; icon: string; badge: string }
> = {
  tissue: {
    border: "border-sky-600/35",
    surface: "bg-sky-50/30 dark:bg-sky-950/15",
    iconWrap: "border-sky-600/40 bg-sky-100/70 dark:bg-sky-950/35",
    icon: "text-sky-700 dark:text-sky-300",
    badge: "border-sky-600/40 bg-sky-50/70 text-sky-900 dark:bg-sky-950/30 dark:text-sky-200",
  },
  imaging: {
    border: "border-violet-600/35",
    surface: "bg-violet-50/30 dark:bg-violet-950/15",
    iconWrap: "border-violet-600/40 bg-violet-100/70 dark:bg-violet-950/35",
    icon: "text-violet-700 dark:text-violet-300",
    badge: "border-violet-600/40 bg-violet-50/70 text-violet-900 dark:bg-violet-950/30 dark:text-violet-200",
  },
  immuno: {
    border: "border-emerald-600/35",
    surface: "bg-emerald-50/30 dark:bg-emerald-950/15",
    iconWrap: "border-emerald-600/40 bg-emerald-100/70 dark:bg-emerald-950/35",
    icon: "text-emerald-700 dark:text-emerald-300",
    badge: "border-emerald-600/40 bg-emerald-50/70 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200",
  },
  molecular: {
    border: "border-indigo-600/35",
    surface: "bg-indigo-50/30 dark:bg-indigo-950/15",
    iconWrap: "border-indigo-600/40 bg-indigo-100/70 dark:bg-indigo-950/35",
    icon: "text-indigo-700 dark:text-indigo-300",
    badge: "border-indigo-600/40 bg-indigo-50/70 text-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-200",
  },
};

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
      {children}
    </div>
  );
}

function DetectionCard({
  Icon,
  tone,
  title,
  principle,
  children,
}: {
  Icon: LucideIcon;
  tone: Tone;
  title: string;
  principle: string;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <div className={`rounded-xl border-2 ${t.border} ${t.surface} p-3.5`}>
      <div className="flex items-center gap-2">
        <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border ${t.iconWrap}`}>
          <Icon className={`h-3.5 w-3.5 ${t.icon}`} aria-hidden />
        </span>
        <div className="text-sm font-bold tracking-tight text-foreground">{title}</div>
      </div>
      <div className="mt-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">
        {principle}
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

function ToneBullets({ items, tone }: { items: ReactNode[]; tone: Tone }) {
  const t = TONES[tone];
  return (
    <ul className="mt-1.5 space-y-1.5">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className={`mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border bg-card ${t.badge}`}>
            <Check className="h-2.5 w-2.5" aria-hidden />
          </span>
          <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const BIOPSY_STEPS: ReactNode[] = [
  <>
    <strong>A thin slice</strong> of suspected tissue is removed.
  </>,
  <>
    <strong>The tissue</strong> is sectioned and stained.
  </>,
  <>
    <strong>Examined</strong> under a microscope.
  </>,
  <>
    <strong>Evaluated</strong> by a pathologist.
  </>,
];

const IMAGING_ROWS: [string, string][] = [
  ["Radiography", "Uses X-rays to detect internal structural abnormalities"],
  ["CT scan", "Computed Tomography; uses X-rays to produce detailed, three-dimensional images"],
  [
    "MRI",
    "Magnetic Resonance Imaging; uses strong magnetic fields and radiofrequency signals to examine internal tissues",
  ],
];

export function DiagnosisDashboard() {
  return (
    <div className="my-5 space-y-3">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <Stethoscope className="h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
          <div className="text-sm font-bold tracking-tight text-foreground">Cancer Detection and Diagnosis</div>
        </div>
        <p className="mt-1.5 text-[10.5px] leading-snug text-foreground/85">
          Cancer can be detected using <strong>tissue examination</strong>, <strong>blood tests</strong>,{" "}
          <strong>imaging</strong>, <strong>immunological methods</strong> and <strong>molecular techniques</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        {/* 1. Tissue examination */}
        <DetectionCard
          Icon={Microscope}
          tone="tissue"
          title="Tissue examination"
          principle="Suspected tissue is removed and examined under a microscope."
        >
          <Eyebrow>Biopsy</Eyebrow>
          <ol className="mt-1.5 space-y-1.5">
            {BIOPSY_STEPS.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-teal-600/40 bg-teal-50/70 text-[8.5px] font-bold text-teal-900 dark:bg-teal-950/30 dark:text-teal-200">
                  {index + 1}
                </span>
                <span className="text-[10.5px] leading-snug text-foreground">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-2.5 rounded-lg border border-border bg-card px-2.5 py-2">
            <Eyebrow>Blood and bone marrow tests</Eyebrow>
            <div className="mt-1 text-[10.5px] leading-snug text-foreground">
              Used in diagnosing <strong>leukaemia</strong>.
            </div>
          </div>
        </DetectionCard>

        {/* 2. Diagnostic imaging */}
        <DetectionCard
          Icon={ScanLine}
          tone="imaging"
          title="Diagnostic imaging"
          principle="X-rays, magnetic fields and radiofrequency signals examine internal tissues."
        >
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="grid grid-cols-[minmax(5rem,0.8fr)_minmax(0,1.2fr)] border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              <div className="px-2.5 py-1.5">Technique</div>
              <div className="px-2.5 py-1.5">Principle / Application</div>
            </div>
            {IMAGING_ROWS.map(([technique, detail]) => (
              <div
                key={technique}
                className="grid grid-cols-[minmax(5rem,0.8fr)_minmax(0,1.2fr)] border-b border-border last:border-b-0"
              >
                <div className="min-w-0 px-2.5 py-1.5 text-[10.5px] font-semibold leading-snug text-foreground">
                  {technique}
                </div>
                <div className="min-w-0 px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground/85">
                  {detail}
                </div>
              </div>
            ))}
          </div>
        </DetectionCard>

        {/* 3. Immunological detection */}
        <DetectionCard
          Icon={ShieldCheck}
          tone="immuno"
          title="Immunological detection"
          principle="Antibodies are directed against cancer-specific antigens."
        >
          <ToneBullets
            tone="immuno"
            items={[
              <>
                <strong>Uses antibodies</strong> directed against cancer-specific antigens.
              </>,
              <>
                <strong>Helps identify</strong> cancer-associated antigens.
              </>,
            ]}
          />
        </DetectionCard>

        {/* 4. Molecular biology techniques */}
        <DetectionCard
          Icon={Dna}
          tone="molecular"
          title="Molecular biology techniques"
          principle="Cancer-specific genes or mutations are identified."
        >
          <ToneBullets
            tone="molecular"
            items={[
              <>
                <strong>Identify</strong> cancer-specific genes or mutations.
              </>,
              <>
                <strong>Detect inherited genetic changes</strong> that may predispose individuals to particular
                cancers.
              </>,
              <>
                <strong>Helps identify</strong> individuals who may need to avoid specific environmental carcinogens.
              </>,
            ]}
          />
          <div className="mt-2.5 flex items-start gap-2 rounded-lg border-2 border-indigo-600/35 bg-indigo-50/45 px-2.5 py-2 dark:bg-indigo-950/20">
            <Lightbulb
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-300"
              aria-hidden
            />
            <div>
              <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
                Example
              </div>
              <div className="mt-0.5 text-[10.5px] leading-snug text-foreground">
                <strong>Individuals genetically susceptible</strong> to lung cancer can be advised to avoid tobacco
                smoke.
              </div>
            </div>
          </div>
        </DetectionCard>
      </div>
    </div>
  );
}
