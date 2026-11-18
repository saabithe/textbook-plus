import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Bug, Repeat, Thermometer } from "lucide-react";

/**
 * ProtozoanDiseases — malaria (profile, two-lane life cycle, haemozoin) and
 * amoebiasis (profile, housefly pathway, symptoms).
 *
 * teal = the protozoan and the host body, rose = the human lane and the
 * symptoms, indigo = the mosquito lane, amber = haemozoin and the exam point.
 */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-[11px] leading-snug text-foreground">{children}</div>
    </div>
  );
}

const MALARIA_SPECIES = ["P. vivax", "P. malariae", "P. falciparum"];

export function MalariaProfileCard() {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-teal-50/40 px-4 py-2.5 dark:bg-teal-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Protozoan disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Malaria</div>
        </div>
        <Thermometer className="mt-0.5 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <Field label="Pathogen">
          <span className="text-xs font-bold italic tracking-tight">Plasmodium</span>
        </Field>

        <Field label="Three important species">
          <div className="flex flex-wrap gap-1">
            {MALARIA_SPECIES.map((species) => (
              <span
                key={species}
                className="rounded border border-teal-600/30 bg-teal-50/50 px-1.5 py-0.5 text-[10px] font-semibold italic text-foreground dark:bg-teal-950/20"
              >
                {species}
              </span>
            ))}
          </div>
        </Field>

        <Field label="Mode of transmission">
          Bite of an infected female <em>Anopheles</em> mosquito.
        </Field>

        <Field label="Affected parts">
          Liver and red blood cells (RBCs).
        </Field>
      </div>

      <div className="border-t border-border bg-amber-50/40 px-4 py-2.5 dark:bg-amber-950/20">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Malignant malaria
          </span>
          <span className="text-[10.5px] leading-snug text-foreground">
            Caused by <em className="font-semibold">P. falciparum</em> — the most serious form, and can be fatal.
          </span>
        </div>
      </div>
    </figure>
  );
}

interface LifeCycleStep {
  title: string;
  detail: ReactNode;
}

const HUMAN_STEPS: LifeCycleStep[] = [
  {
    title: "Infection",
    detail: (
      <>
        An infected female <em>Anopheles</em> mosquito bites a human. Infective stages called{" "}
        <strong>sporozoites</strong> enter the bloodstream.
      </>
    ),
  },
  {
    title: "Liver stage",
    detail:
      "Sporozoites reach the liver through the blood and multiply asexually inside liver cells. The infected liver cells rupture, releasing parasites into the blood.",
  },
  {
    title: "RBC stage",
    detail:
      "Parasites enter red blood cells and multiply asexually. Infected RBCs rupture, releasing more parasites that infect additional RBCs.",
  },
  {
    title: "Gametocyte formation",
    detail:
      "Some parasites develop into sexual stages called gametocytes inside RBCs — male gametocytes and female gametocytes.",
  },
];

const MOSQUITO_STEPS: LifeCycleStep[] = [
  {
    title: "Gametocyte uptake",
    detail: (
      <>
        A female <em>Anopheles</em> mosquito feeds on infected human blood and ingests the male and female gametocytes.
      </>
    ),
  },
  {
    title: "Sexual reproduction",
    detail: "Fertilisation and further development occur in the mosquito’s intestine.",
  },
  {
    title: "Sporozoite formation and migration",
    detail: "Mature infective sporozoites develop and migrate to the mosquito’s salivary glands.",
  },
];

function Lane({
  host,
  mode,
  steps,
  start,
  tone,
}: {
  host: string;
  mode: string;
  steps: LifeCycleStep[];
  start: number;
  tone: "rose" | "indigo";
}) {
  const bar = tone === "rose" ? "bg-rose-50/50 dark:bg-rose-950/15" : "bg-indigo-50/50 dark:bg-indigo-950/15";
  const chip =
    tone === "rose"
      ? "border-rose-600/40 bg-card text-rose-900 dark:text-rose-200"
      : "border-indigo-600/40 bg-card text-indigo-900 dark:text-indigo-200";
  const dot =
    tone === "rose"
      ? "border-rose-600/40 bg-rose-50/60 text-rose-900 dark:bg-rose-950/25 dark:text-rose-200"
      : "border-indigo-600/40 bg-indigo-50/60 text-indigo-900 dark:bg-indigo-950/25 dark:text-indigo-200";

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className={`flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 border-b border-border px-2.5 py-1.5 ${bar}`}>
        <div className="text-[11px] font-bold tracking-tight text-foreground">{host}</div>
        <div className={`rounded border px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.06em] ${chip}`}>
          {mode}
        </div>
      </div>

      <ol className="px-2.5 py-2">
        {steps.map((step, index) => {
          const last = index === steps.length - 1;
          return (
            <li key={step.title} className="flex gap-2">
              <div className="flex flex-col items-center">
                <span
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[9.5px] font-bold ${dot}`}
                >
                  {start + index}
                </span>
                {!last && <span className="w-px flex-1 bg-border" aria-hidden />}
              </div>
              <div className={`min-w-0 ${last ? "pb-0" : "pb-2"}`}>
                <div className="text-[10.5px] font-bold leading-snug tracking-tight text-foreground">{step.title}</div>
                <div className="mt-0.5 text-[10px] leading-snug text-foreground/85">{step.detail}</div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Crossing({ label, children, loop }: { label: string; children: ReactNode; loop?: boolean }) {
  return (
    <div className="my-2 flex items-start gap-2 rounded-md border border-dashed border-border bg-muted/25 px-2.5 py-1.5">
      <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-border bg-card text-muted-foreground">
        {loop ? <Repeat className="h-2.5 w-2.5" aria-hidden /> : <ArrowDown className="h-2.5 w-2.5" aria-hidden />}
      </span>
      <div className="min-w-0 text-[10px] leading-snug text-foreground">
        <span className="font-bold">{label}</span> {children}
      </div>
    </div>
  );
}

export function MalariaLifeCycle() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Life cycle of <span className="italic">Plasmodium</span>
      </div>
      <div className="mt-1 text-[10.5px] leading-snug text-foreground">
        Two hosts are required: the human, where reproduction is asexual, and the female <em>Anopheles</em> mosquito,
        where it is sexual.
      </div>

      <div className="mt-3">
        <Lane host="Human host" mode="Asexual reproduction" steps={HUMAN_STEPS} start={1} tone="rose" />

        <Crossing label="Mosquito bite.">
          A female <em>Anopheles</em> mosquito feeds on infected blood and ingests the gametocytes.
        </Crossing>

        <Lane host="Mosquito host" mode="Sexual reproduction" steps={MOSQUITO_STEPS} start={5} tone="indigo" />

        <Crossing label="Next bite." loop>
          Sporozoites from the salivary glands enter another human and the cycle begins again.
        </Crossing>
      </div>
    </div>
  );
}

const HAEMOZOIN_CHAIN = [
  { label: "Infected RBCs rupture", tone: "neutral" as const },
  { label: "Haemozoin released", tone: "amber" as const },
  { label: "Chills and high fever", tone: "rose" as const },
];

const CHAIN_TONE = {
  neutral: "border-border bg-muted/25 text-foreground",
  amber: "border-amber-600/40 bg-amber-50/50 text-foreground dark:bg-amber-950/25",
  rose: "border-rose-600/40 bg-rose-50/45 text-foreground dark:bg-rose-950/20",
};

export function HaemozoinFlow() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Haemozoin and malaria symptoms
      </div>

      <div className="mt-2 flex flex-col items-stretch gap-1 sm:flex-row sm:items-center">
        {HAEMOZOIN_CHAIN.map((node, index) => (
          <div key={node.label} className="flex flex-col items-stretch sm:flex-1 sm:flex-row sm:items-center">
            <div
              className={`flex-1 rounded-md border px-2 py-1.5 text-center text-[10.5px] font-semibold leading-snug ${CHAIN_TONE[node.tone]}`}
            >
              {node.label}
            </div>
            {index < HAEMOZOIN_CHAIN.length - 1 && (
              <ArrowRight
                className="mx-auto my-0.5 h-3 w-3 shrink-0 rotate-90 text-muted-foreground sm:mx-1 sm:my-0 sm:rotate-0"
                aria-hidden
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t border-border pt-2">
        <span className="rounded border border-amber-600/40 bg-amber-50/50 px-1.5 py-0.5 text-[9.5px] font-semibold text-foreground dark:bg-amber-950/25">
          Every 3–4 days
        </span>
        <span className="text-[10.5px] leading-snug text-foreground">
          Haemozoin is the toxic substance behind the chill and the high fever, which recurs in episodes.
        </span>
      </div>

      <div className="mt-2 rounded-md border border-border bg-muted/25 px-2.5 py-1.5">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Examination point
        </div>
        <div className="mt-0.5 text-[10.5px] leading-snug text-foreground">
          The malarial parasite can be obtained in the RBCs of a patient when the temperature rises with rigour.
        </div>
      </div>
    </div>
  );
}

const AMOEBIASIS_PATHWAY = [
  "Infected faeces",
  "Housefly — mechanical carrier",
  "Food and water",
  "Human",
  "Large intestine",
];

const AMOEBIASIS_SYMPTOMS = [
  "Constipation",
  "Abdominal pain",
  "Abdominal cramps",
  "Stools containing excess mucus and blood clots",
];

export function AmoebiasisCard() {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-teal-50/40 px-4 py-2.5 dark:bg-teal-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Protozoan disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Amoebiasis (amoebic dysentery)</div>
        </div>
        <Bug className="mt-0.5 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <Field label="Pathogen">
          <span className="text-xs font-bold italic tracking-tight">Entamoeba histolytica</span>
        </Field>
        <Field label="Affected part">Large intestine.</Field>
      </div>

      <div className="grid grid-cols-1 gap-3 border-t border-border p-4 sm:grid-cols-2">
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Mode of transmission
          </div>

          <ol className="mt-1.5">
            {AMOEBIASIS_PATHWAY.map((node, index) => {
              const last = index === AMOEBIASIS_PATHWAY.length - 1;
              return (
                <li key={node} className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-teal-600/40 bg-teal-50/60 text-[8.5px] font-bold text-teal-900 dark:bg-teal-950/25 dark:text-teal-200">
                      {index + 1}
                    </span>
                    {!last && <span className="w-px flex-1 bg-border" aria-hidden />}
                  </div>
                  <div className={`text-[10px] leading-snug text-foreground ${last ? "pb-0" : "pb-1.5"}`}>{node}</div>
                </li>
              );
            })}
          </ol>

          <div className="mt-1.5 text-[9.5px] leading-snug text-muted-foreground">
            Contaminated food and water are the source of infection.
          </div>
        </div>

        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Symptoms</div>
          <div className="mt-1.5 grid grid-cols-1 gap-1">
            {AMOEBIASIS_SYMPTOMS.map((symptom) => (
              <div
                key={symptom}
                className="rounded border border-teal-600/30 bg-teal-50/40 px-1.5 py-1 text-[10px] font-medium leading-tight text-foreground dark:bg-teal-950/20"
              >
                {symptom}
              </div>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}
