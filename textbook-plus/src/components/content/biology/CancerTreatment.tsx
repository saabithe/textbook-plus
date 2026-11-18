import type { ReactNode } from "react";
import { Pill, Scissors, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { Highlight } from "@/components/content/Highlight";

/**
 * CancerTreatment — the treatment block: four approaches with their basic
 * mechanism, plus the chemotherapy side-effect and immunotherapy
 * biological-response-modifier notes.
 *
 * teal = surgery, amber = radiotherapy, rose = chemotherapy,
 * indigo = immunotherapy.
 */

type Tone = "teal" | "amber" | "rose" | "indigo";

const TONES: Record<
  Tone,
  { border: string; bg: string; badge: string; icon: string; bullet: string; eyebrow: string }
> = {
  teal: {
    border: "border-teal-600/35",
    bg: "bg-teal-50/35 dark:bg-teal-950/20",
    badge: "border-teal-600/45 bg-teal-50/70 text-teal-900 dark:bg-teal-950/30 dark:text-teal-200",
    icon: "text-teal-700 dark:text-teal-300",
    bullet: "bg-teal-600/60",
    eyebrow: "text-teal-800 dark:text-teal-300",
  },
  amber: {
    border: "border-amber-600/35",
    bg: "bg-amber-50/35 dark:bg-amber-950/20",
    badge: "border-amber-600/45 bg-amber-50/70 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200",
    icon: "text-amber-700 dark:text-amber-300",
    bullet: "bg-amber-600/60",
    eyebrow: "text-amber-800 dark:text-amber-300",
  },
  rose: {
    border: "border-rose-600/35",
    bg: "bg-rose-50/35 dark:bg-rose-950/20",
    badge: "border-rose-600/45 bg-rose-50/70 text-rose-900 dark:bg-rose-950/30 dark:text-rose-200",
    icon: "text-rose-700 dark:text-rose-300",
    bullet: "bg-rose-600/60",
    eyebrow: "text-rose-800 dark:text-rose-300",
  },
  indigo: {
    border: "border-indigo-600/35",
    bg: "bg-indigo-50/35 dark:bg-indigo-950/20",
    badge: "border-indigo-600/45 bg-indigo-50/70 text-indigo-900 dark:bg-indigo-950/30 dark:text-indigo-200",
    icon: "text-indigo-700 dark:text-indigo-300",
    bullet: "bg-indigo-600/60",
    eyebrow: "text-indigo-800 dark:text-indigo-300",
  },
};

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

function TreatmentCard({
  numeral,
  Icon,
  title,
  mechanism,
  lines,
  tone,
}: {
  numeral: string;
  Icon: LucideIcon;
  title: string;
  mechanism: string;
  lines: string[];
  tone: Tone;
}) {
  const styles = TONES[tone];
  return (
    <div className={`rounded-xl border-2 ${styles.border} ${styles.bg} p-3.5`}>
      <div className="flex items-center gap-2">
        <span
          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[10px] font-bold ${styles.badge}`}
        >
          {numeral}
        </span>
        <Icon className={`h-4 w-4 shrink-0 ${styles.icon}`} aria-hidden />
        <span className="text-sm font-bold tracking-tight text-foreground">{title}</span>
      </div>

      <div className="mt-2 rounded-lg border border-border bg-card px-2.5 py-2">
        <Eyebrow>Mechanism</Eyebrow>
        <div className="mt-0.5 text-[10.5px] font-bold leading-snug text-foreground">{mechanism}</div>
      </div>

      <ul className="mt-2 space-y-1">
        {lines.map((line) => (
          <li key={line} className="flex gap-1.5">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${styles.bullet}`} aria-hidden />
            <span className="text-[10.5px] leading-snug text-foreground">{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideEffectCallout() {
  return (
    <div className="mt-2 rounded-lg border border-rose-600/30 bg-rose-50/30 px-2.5 py-2 dark:bg-rose-950/15">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
        Common side effects
      </div>
      <ul className="mt-1 space-y-0.5">
        {["Hair loss.", "Anaemia."].map((item) => (
          <li key={item} className="flex gap-1.5">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose-600/60" aria-hidden />
            <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BiologicalResponseModifiers() {
  return (
    <div className="mt-2 rounded-lg border border-indigo-600/30 bg-indigo-50/30 px-2.5 py-2 dark:bg-indigo-950/15">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
        Biological response modifiers
      </div>
      <div className="mt-1 space-y-0.5 text-[10.5px] leading-snug text-foreground">
        <div>
          <strong className="font-bold">Example:</strong> <Highlight>α-interferon</Highlight>.
        </div>
        <div>Stimulates the immune system to help destroy tumour cells.</div>
      </div>
    </div>
  );
}

export function TreatmentCards() {
  return (
    <div className="my-5">
      <div className="text-[10.5px] leading-snug text-foreground">
        Cancer treatment generally involves a combination of approaches depending on the condition.
      </div>

      <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <div>
          <TreatmentCard
            numeral="①"
            Icon={Scissors}
            title="Surgery"
            mechanism="Tumour removal"
            lines={["Surgical removal of localised tumour masses."]}
            tone="teal"
          />
        </div>

        <div>
          <TreatmentCard
            numeral="②"
            Icon={Zap}
            title="Radiotherapy"
            mechanism="Radiation-based destruction"
            lines={[
              "Uses radiation to destroy tumour cells.",
              "Adjacent normal tissues are shielded as far as possible.",
            ]}
            tone="amber"
          />
        </div>

        <div>
          <TreatmentCard
            numeral="③"
            Icon={Pill}
            title="Chemotherapy"
            mechanism="Drug-based treatment"
            lines={["Uses specific chemotherapeutic drugs to destroy cancer cells."]}
            tone="rose"
          />
          <SideEffectCallout />
        </div>

        <div>
          <TreatmentCard
            numeral="④"
            Icon={ShieldCheck}
            title="Immunotherapy"
            mechanism="Immune-system stimulation"
            lines={[
              "Uses the body's immune system to fight tumour cells.",
              "Tumour cells may evade normal immune surveillance.",
            ]}
            tone="indigo"
          />
          <BiologicalResponseModifiers />
        </div>
      </div>
    </div>
  );
}
