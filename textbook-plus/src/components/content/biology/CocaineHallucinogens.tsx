import type { ReactNode } from "react";
import {
  AlertTriangle,
  FlaskConical,
  Leaf,
  Pill,
  Sparkles,
  Syringe,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * CocaineHallucinogens — two consecutive note blocks from the drug-abuse
 * section: the cocaine drug profile (C) and the hallucinogens / prescription
 * drugs block (D).
 *
 * rose / red = cocaine; violet / indigo = hallucinogens and prescription
 * drugs, with an amber caution panel for the terminology note.
 */

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 1. CocaineProfile                                                          */
/* -------------------------------------------------------------------------- */

function ProfileField({
  label,
  Icon,
  children,
}: {
  label: string;
  Icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-2.5 rounded-lg border border-rose-600/25 bg-card px-2.5 py-2 dark:border-rose-900/40">
      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border border-rose-600/35 bg-rose-50/70 dark:bg-rose-950/30">
        <Icon className="h-3.5 w-3.5 text-rose-700 dark:text-rose-300" aria-hidden />
      </span>
      <div className="min-w-0">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
          {label}
        </div>
        <div className="mt-1 space-y-1 text-[10.5px] leading-snug text-foreground">{children}</div>
      </div>
    </div>
  );
}

export function CocaineProfile() {
  return (
    <div className="my-5 space-y-3">
      {/* Header */}
      <div className="overflow-hidden rounded-xl border-2 border-rose-600/40">
        <div className="h-1 bg-rose-500/80 dark:bg-rose-500/60" aria-hidden />
        <div className="flex items-start gap-2 bg-rose-50/45 px-3.5 py-3 dark:bg-rose-950/20">
          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
          <div>
            <Eyebrow>C. Coca Alkaloids</Eyebrow>
            <div className="text-sm font-bold tracking-tight text-foreground">Cocaine</div>
            <div className="mt-1 text-[10.5px] leading-snug text-muted-foreground">
              Street names: <strong className="font-semibold text-foreground">Coke, Crack</strong>.
            </div>
          </div>
        </div>
      </div>

      {/* Four labelled fields */}
      <div className="space-y-2">
        <ProfileField label="Source" Icon={Leaf}>
          <div>
            Extracted from the coca plant <em className="font-medium">Erythroxylum coca</em>.
          </div>
          <div>
            Native to <strong>South America</strong>.
          </div>
        </ProfileField>

        <ProfileField label="Mechanism" Icon={FlaskConical}>
          <div>
            Interferes with the transport of the neurotransmitter <strong>dopamine</strong>.
          </div>
        </ProfileField>

        <ProfileField label="Effects" Icon={Sparkles}>
          <div>
            <strong>Potent stimulant</strong> of the CNS.
          </div>
          <div>
            <strong>Produces:</strong>
            <ul className="ml-4 mt-1 list-disc space-y-0.5 marker:text-rose-600 dark:marker:text-rose-400">
              <li>Euphoria.</li>
              <li>Increased energy.</li>
            </ul>
          </div>
          <div>
            Excessive dosage can cause <strong>hallucinations</strong>.
          </div>
        </ProfileField>

        <ProfileField label="Administration" Icon={Syringe}>
          <div>
            <strong>Powdered cocaine</strong> — commonly snorted.
          </div>
          <div>
            <strong>Crack cocaine</strong> — generally smoked.
          </div>
        </ProfileField>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. HallucinogensPrescription                                               */
/* -------------------------------------------------------------------------- */

function PlantChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-violet-600/30 bg-violet-50/50 px-2 py-1 text-[11px] font-medium text-foreground dark:bg-violet-950/25">
      {children}
    </span>
  );
}

export function HallucinogensPrescription() {
  return (
    <div className="my-5 space-y-3">
      {/* Header */}
      <div className="overflow-hidden rounded-xl border-2 border-violet-600/40">
        <div className="h-1 bg-violet-500/80 dark:bg-violet-500/60" aria-hidden />
        <div className="flex items-start gap-2 bg-violet-50/45 px-3.5 py-3 dark:bg-violet-950/20">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
          <div>
            <Eyebrow>D. Hallucinogens and Prescription Drugs</Eyebrow>
            <div className="mt-0.5 text-sm font-bold tracking-tight text-foreground">
              Hallucinogens and Prescription Drugs
            </div>
          </div>
        </div>
      </div>

      {/* Naturally occurring plants */}
      <div className="rounded-lg border border-violet-600/25 bg-card px-2.5 py-2">
        <div className="flex items-center gap-1.5">
          <Leaf className="h-3.5 w-3.5 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
            Naturally occurring hallucinogenic plants
          </div>
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          <PlantChip>
            <em>Atropa belladonna</em>
          </PlantChip>
          <PlantChip>
            <em>Datura</em>
          </PlantChip>
        </div>
      </div>

      {/* Pharmaceutical drugs */}
      <div className="rounded-lg border border-indigo-600/25 bg-card px-2.5 py-2">
        <div className="flex items-center gap-1.5">
          <Pill className="h-3.5 w-3.5 shrink-0 text-indigo-700 dark:text-indigo-300" aria-hidden />
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
            Pharmaceutical drugs that may be abused
          </div>
        </div>
        <ul className="mt-1.5 space-y-1">
          {["Barbiturates.", "Amphetamines.", "Benzodiazepines."].map((drug) => (
            <li key={drug} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
              <span className="text-[10.5px] leading-snug text-foreground">{drug}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Legitimate-use line */}
      <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/25 px-2.5 py-2">
        <Wind className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
        <p className="text-[10.5px] leading-snug text-foreground">
          These medicines can have <strong>legitimate clinical uses</strong>, but their non-medical misuse can cause
          harm.
        </p>
      </div>

      {/* Terminology note — amber caution panel */}
      <div className="rounded-xl border-2 border-amber-600/40 bg-amber-50/45 p-3 dark:bg-amber-950/20">
        <div className="flex items-start gap-2">
          <AlertTriangle
            className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-300"
            aria-hidden
          />
          <div>
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
              Terminology note
            </div>
            <div className="mt-1 space-y-1 text-[10.5px] leading-snug text-foreground">
              <div>
                These three drug groups <strong>do not all share the same medical indications</strong>.
              </div>
              <div>
                Avoid memorising them collectively as medicines prescribed specifically for{" "}
                <strong>depression and insomnia</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
