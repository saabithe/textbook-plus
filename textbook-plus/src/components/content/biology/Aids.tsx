import type { ReactNode } from "react";
import { Check, FlaskConical, Pill, ShieldCheck, Users } from "lucide-react";

/**
 * Aids — the full AIDS profile: what the name means, how HIV spreads, how it
 * replicates (with the supplied illustration), and diagnosis, treatment and
 * prevention.
 *
 * rose = HIV and the disease, indigo = exposure categories and care,
 * amber = the outdated claim, emerald = prevention and safety.
 */

function Term({ children }: { children: ReactNode }) {
  return <div className="text-[10.5px] font-bold tracking-tight text-foreground">{children}</div>;
}

export function AidsDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-rose-600/35 bg-rose-50/40 p-4 dark:bg-rose-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
        Definition
      </div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">
        AIDS — Acquired Immuno Deficiency Syndrome
      </div>

      <div className="mt-2 overflow-hidden rounded-lg border border-rose-700/25 bg-card">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-2 px-2.5 py-2">
          <Term>Acquired</Term>
          <div className="text-[10.5px] leading-snug text-foreground">
            Develops during an individual’s lifetime; not congenital.
          </div>
          <Term>Immuno Deficiency</Term>
          <div className="text-[10.5px] leading-snug text-foreground">
            Deficiency or weakening of the immune system.
          </div>
          <Term>Syndrome</Term>
          <div className="text-[10.5px] leading-snug text-foreground">A group of symptoms.</div>
        </div>
      </div>

      <div className="mt-2.5 rounded-lg border border-rose-700/25 bg-card px-2.5 py-2">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Causative agent
        </div>
        <div className="mt-0.5 text-xs font-bold tracking-tight text-foreground">
          Human Immunodeficiency Virus (HIV)
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1">
          <span className="rounded border border-rose-600/30 bg-rose-50/50 px-1.5 py-0.5 text-[10px] font-semibold text-foreground dark:bg-rose-950/20">
            Retrovirus
          </span>
          <span className="rounded border border-rose-600/30 bg-rose-50/50 px-1.5 py-0.5 text-[10px] font-semibold text-foreground dark:bg-rose-950/20">
            RNA genome in a protein coat
          </span>
        </div>
      </div>
    </div>
  );
}

const ROUTES: { label: string; detail: string; aside?: string }[] = [
  {
    label: "Unprotected sexual contact",
    detail: "With an infected person.",
  },
  {
    label: "Blood transfusion",
    detail: "Involving contaminated blood or blood products.",
  },
  {
    label: "Sharing infected needles",
    detail: "Particularly among people who inject drugs.",
  },
  {
    label: "Mother-to-child transmission",
    detail: "During pregnancy, childbirth or breastfeeding.",
    aside: "The textbook route is through the placenta; the broader mother-to-child route also includes childbirth and breastfeeding.",
  },
];

export function HivTransmissionRoutes() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Modes of transmission
      </div>

      <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {ROUTES.map((route, index) => (
          <div key={route.label} className="rounded-lg border border-rose-600/30 bg-rose-50/35 px-2.5 py-2 dark:bg-rose-950/15">
            <div className="flex items-center gap-1.5">
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-rose-600/40 text-[8.5px] font-bold text-rose-800 dark:text-rose-300">
                {index + 1}
              </span>
              <span className="text-[11px] font-bold leading-snug text-foreground">{route.label}</span>
            </div>
            <div className="mt-1 pl-[22px] text-[10.5px] leading-snug text-foreground">{route.detail}</div>
            {route.aside && (
              <div className="mt-1 pl-[22px] text-[9.5px] leading-snug text-muted-foreground">{route.aside}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const EXPOSURE_GROUPS = [
  "Individuals with multiple sexual partners.",
  "People who inject drugs using shared needles.",
  "Individuals requiring repeated blood transfusions, e.g. patients with severe thalassemia.",
  "Children born to HIV-infected mothers.",
];

export function HivExposureGroups() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2">
        <Users className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Exposure categories mentioned in the notes
        </div>
      </div>

      <div className="mt-2 space-y-1">
        {EXPOSURE_GROUPS.map((group) => (
          <div
            key={group}
            className="flex gap-2 rounded-md border border-border bg-muted/20 px-2.5 py-1.5 text-[10.5px] leading-snug text-foreground"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
            <span>{group}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CASUAL_CONTACTS = ["Touching or hugging", "Sharing ordinary objects or utensils", "Everyday social interaction"];

export function HivCasualContactCallout() {
  return (
    <div className="my-5 rounded-xl border-2 border-emerald-600/40 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-800 dark:text-emerald-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
          Important misconception
        </div>
      </div>

      <div className="mt-1 text-sm font-bold tracking-tight text-foreground">
        HIV is NOT transmitted through casual physical contact.
      </div>

      <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-3">
        {CASUAL_CONTACTS.map((contact) => (
          <div
            key={contact}
            className="rounded-md border border-emerald-700/25 bg-card px-2 py-1.5 text-[10px] leading-snug text-foreground"
          >
            {contact}
          </div>
        ))}
      </div>

      <div className="mt-2 border-t border-emerald-700/25 pt-2 text-[10.5px] leading-snug text-foreground">
        HIV spreads through <strong>specific infected body fluids</strong>, not ordinary social contact.
      </div>
    </div>
  );
}

export function HivNonIsolationCallout() {
  return (
    <div className="my-5 rounded-xl border border-indigo-600/35 bg-indigo-50/40 p-3.5 dark:bg-indigo-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
        Non-isolation policy
      </div>

      <div className="mt-1.5 space-y-1">
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>HIV-infected individuals should not be isolated from family and society.</span>
        </div>
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>Social and psychological well-being must be protected.</span>
        </div>
      </div>
    </div>
  );
}

export function HivTimeLag() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Time lag</div>

      <div className="mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-[11px] text-foreground">A few months</span>
        <span className="text-muted-foreground" aria-hidden>
          →
        </span>
        <span className="text-2xl font-bold leading-none tracking-tight text-foreground">5–10 years</span>
      </div>

      <div className="mt-1.5 text-[10.5px] leading-snug text-foreground">
        There can be a long interval between initial infection and the appearance of symptoms.
      </div>
    </div>
  );
}

const REPLICATION_STEPS: { label: string; detail: ReactNode; emphasised?: boolean }[] = [
  {
    label: "HIV enters macrophages",
    detail: "Macrophages become HIV factories.",
  },
  {
    label: "RNA → DNA",
    detail: "Reverse transcriptase converts viral RNA into viral DNA.",
    emphasised: true,
  },
  {
    label: "Integration",
    detail: "Viral DNA integrates into host DNA; the infected cell is directed to produce new virus particles.",
    emphasised: true,
  },
  {
    label: "Production of new viruses",
    detail: "Infected cells produce and release virus particles. Macrophages continuously produce virus.",
  },
  {
    label: "Helper T-cell infection",
    detail: (
      <>
        HIV attacks and replicates inside helper T-lymphocytes (T<sub>H</sub> cells). New virus particles are released
        into the blood.
      </>
    ),
  },
  {
    label: "Tₕ-cell depletion",
    detail: "Repeated infection and lysis reduce Tₕ-cell numbers — a severe decline below 200 cells/mm³.",
    emphasised: true,
  },
  {
    label: "Severe immunodeficiency",
    detail: "Fever, diarrhoea and weight loss; opportunistic infections caused by Mycobacterium, viruses, fungi and Toxoplasma.",
  },
];

export function HivReplicationCycle() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        HIV replication and immune-system damage
      </div>
      <div className="mt-1 text-[10.5px] leading-snug text-foreground">
        HIV infects macrophages and helper T-lymphocytes, leading to progressive weakening of the immune system.
      </div>

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:items-start">
        <div className="rounded-lg border border-border/60 bg-white p-1.5">
          <img
            src="/images/biology/human-health-and-diseases/hiv-replication-cycle.png"
            alt="HIV RNA entering a macrophage and the events that follow inside the cell."
            className="h-auto w-full rounded object-contain"
            loading="lazy"
          />
        </div>

        <ol className="space-y-0">
          {REPLICATION_STEPS.map((step, index) => {
            const last = index === REPLICATION_STEPS.length - 1;
            return (
              <li key={step.label} className="flex gap-2">
                <div className="flex flex-col items-center">
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[9.5px] font-bold ${
                      step.emphasised
                        ? "border-amber-600/50 bg-amber-50/60 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200"
                        : "border-rose-600/40 bg-rose-50/50 text-rose-900 dark:bg-rose-950/25 dark:text-rose-200"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {!last && <span className="w-px flex-1 bg-border" aria-hidden />}
                </div>
                <div className={`min-w-0 ${last ? "pb-0" : "pb-2"}`}>
                  <div className="text-[10.5px] font-bold leading-snug tracking-tight text-foreground">
                    {step.label}
                  </div>
                  <div className="mt-0.5 text-[10px] leading-snug text-foreground/85">{step.detail}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <figcaption className="mt-2 border-t border-border pt-2 text-[10px] leading-snug text-muted-foreground">
        The illustration follows the viral RNA from its entry into the macrophage through the events inside the cell.
        The three steps that carry the mechanism are marked in amber: reverse transcriptase, integration and
        T<sub>H</sub>-cell depletion.
      </figcaption>
    </figure>
  );
}

export function HivDiagnosisCard() {
  return (
    <div className="my-5 rounded-xl border border-sky-600/35 bg-sky-50/40 p-4 dark:bg-sky-950/20">
      <div className="flex items-center gap-2">
        <FlaskConical className="h-3.5 w-3.5 text-sky-800 dark:text-sky-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-sky-800 dark:text-sky-300">
          Diagnosis
        </div>
      </div>

      <div className="mt-1 text-xs font-bold tracking-tight text-foreground">ELISA</div>
      <div className="text-[10px] font-semibold text-foreground/75">Enzyme-Linked Immunosorbent Assay</div>

      <div className="mt-2 space-y-1">
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-600/60" aria-hidden />
          <span>Based on antigen–antibody interaction.</span>
        </div>
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky-600/60" aria-hidden />
          <span>Used as a diagnostic test for HIV.</span>
        </div>
      </div>
    </div>
  );
}

export function HivTreatmentCard() {
  return (
    <div className="my-5 rounded-xl border border-indigo-600/35 bg-indigo-50/40 p-4 dark:bg-indigo-950/20">
      <div className="flex items-center gap-2">
        <Pill className="h-3.5 w-3.5 text-indigo-800 dark:text-indigo-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-indigo-800 dark:text-indigo-300">
          Treatment
        </div>
      </div>

      <div className="mt-1 text-xs font-bold tracking-tight text-foreground">Antiretroviral therapy (ART)</div>

      <div className="mt-2 space-y-1">
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>ART suppresses viral replication.</span>
        </div>
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>It helps preserve immune function.</span>
        </div>
        <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-600/60" aria-hidden />
          <span>
            There is currently <strong>no cure</strong>, but effective treatment can make HIV a manageable chronic
            condition and allow people to live long, healthy lives.
          </span>
        </div>
      </div>
    </div>
  );
}

export function HivTreatmentCorrection() {
  return (
    <div className="my-5 rounded-xl border border-amber-600/40 bg-amber-50/45 px-3.5 py-2.5 dark:bg-amber-950/20">
      <div className="flex items-center gap-1.5">
        <span className="grid h-4 w-4 place-items-center rounded-full border border-amber-600/45 text-[9px] font-bold text-amber-900 dark:text-amber-200">
          !
        </span>
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
          Correction to older textbook wording
        </div>
      </div>

      <div className="mt-1 text-[10.5px] leading-snug text-foreground">
        The older statement that antiretroviral drugs only prolong life and cannot prevent eventual death is{" "}
        <strong>outdated</strong>. Effective ART can suppress HIV and prevent progression to advanced disease when
        treatment is maintained.
      </div>
    </div>
  );
}

const PREVENTION_MEASURES = [
  "Ensure the safety of blood in blood banks.",
  "Promote disposable needles and syringes in hospitals and clinics.",
  "Distribute condoms.",
  "Control drug abuse.",
  "Advocate safe sexual practices.",
  "Promote regular HIV check-ups among susceptible populations.",
];

export function HivPreventionBlock() {
  return (
    <div className="my-5 rounded-xl border border-emerald-600/35 bg-emerald-50/40 p-4 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-800 dark:text-emerald-300" aria-hidden />
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
          Prevention and awareness
        </div>
      </div>

      <div className="mt-2 rounded-lg border border-emerald-700/25 bg-card px-2.5 py-2">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <div className="text-xs font-bold tracking-tight text-foreground">NACO</div>
          <div className="text-[10px] font-semibold text-foreground/75">
            National AIDS Control Organisation
          </div>
        </div>
        <div className="mt-1 text-[10.5px] leading-snug text-foreground">
          India’s national organisation for HIV/AIDS prevention and control.
        </div>
        <div className="mt-1.5 inline-flex rounded border border-emerald-700/30 bg-emerald-50/50 px-1.5 py-0.5 text-[9.5px] font-semibold text-foreground dark:bg-emerald-950/25">
          Established in 1992
        </div>
      </div>

      <div className="mt-2 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        WHO-recommended measures
      </div>

      <div className="mt-1 space-y-1">
        {PREVENTION_MEASURES.map((measure, index) => (
          <div key={measure} className="flex items-start gap-1.5">
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/35 bg-card text-emerald-800 dark:text-emerald-300">
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
  );
}
