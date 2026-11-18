import type { ReactNode } from "react";
import { ArrowRight, Worm } from "lucide-react";

/**
 * HelminthicDiseases — ascariasis (faecal-egg pathway) and filariasis
 * (lymphatic blockage, with the Wikimedia lymphatic-system diagram).
 *
 * orange = the helminth group, rose = the blockage and the deformity,
 * amber = the long residence in the lymphatic vessels.
 */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-[11px] leading-snug text-foreground">{children}</div>
    </div>
  );
}

const ASCARIASIS_PATHWAY = [
  "Eggs are excreted through the faeces of an infected host.",
  "The eggs contaminate soil, water and plants.",
  "Contaminated water, vegetables or fruits are consumed.",
  "The intestine becomes infected.",
];

const ASCARIASIS_SYMPTOMS = [
  "Internal bleeding",
  "Muscular pain",
  "Fever",
  "Anaemia",
  "Blockage of the intestinal passage",
];

export function AscariasisCard() {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-orange-50/40 px-4 py-2.5 dark:bg-orange-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-orange-800 dark:text-orange-300">
            Helminthic disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Ascariasis</div>
        </div>
        <Worm className="mt-0.5 h-4 w-4 shrink-0 text-orange-700 dark:text-orange-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <Field label="Pathogen">
          <span className="text-xs font-bold italic tracking-tight">Ascaris</span> — the common roundworm.
        </Field>
        <Field label="Affected part">Intestine.</Field>
      </div>

      <div className="grid grid-cols-1 gap-3 border-t border-border p-4 sm:grid-cols-2">
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Mode of transmission
          </div>

          <ol className="mt-1.5">
            {ASCARIASIS_PATHWAY.map((node, index) => {
              const last = index === ASCARIASIS_PATHWAY.length - 1;
              return (
                <li key={node} className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-orange-600/40 bg-orange-50/60 text-[8.5px] font-bold text-orange-900 dark:bg-orange-950/25 dark:text-orange-200">
                      {index + 1}
                    </span>
                    {!last && <span className="w-px flex-1 bg-border" aria-hidden />}
                  </div>
                  <div className={`text-[10px] leading-snug text-foreground ${last ? "pb-0" : "pb-1.5"}`}>{node}</div>
                </li>
              );
            })}
          </ol>
        </div>

        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Symptoms</div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {ASCARIASIS_SYMPTOMS.map((symptom) => (
              <span
                key={symptom}
                className="rounded border border-orange-600/30 bg-orange-50/40 px-1.5 py-1 text-[10px] font-medium leading-tight text-foreground dark:bg-orange-950/20"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

const FILARIASIS_PROGRESSION = [
  "Filarial infection",
  "Chronic inflammation",
  "Lymphatic blockage",
  "Gross deformities",
];

export function FilariasisCard() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-orange-50/40 px-4 py-2.5 dark:bg-orange-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-orange-800 dark:text-orange-300">
            Helminthic disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Filariasis — elephantiasis</div>
        </div>
        <Worm className="mt-0.5 h-4 w-4 shrink-0 text-orange-700 dark:text-orange-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 border-b border-border p-4 sm:grid-cols-3">
        <Field label="Pathogens">
          <span className="text-xs font-bold italic tracking-tight">Wuchereria bancrofti</span>
          <br />
          <span className="text-xs font-bold italic tracking-tight">Wuchereria malayi</span>
        </Field>
        <Field label="Mode of transmission">
          Bite of an infected female <em>Culex</em> mosquito.
        </Field>
        <Field label="Affected parts">
          Lymphatic vessels — usually of the lower limbs — and the genital organs.
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.55fr)] sm:items-start">
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Progression
          </div>

          <ol className="mt-1.5">
            {FILARIASIS_PROGRESSION.map((stage, index) => {
              const last = index === FILARIASIS_PROGRESSION.length - 1;
              return (
                <li key={stage} className="flex gap-2">
                  <div className="flex flex-col items-center">
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[9.5px] font-bold ${
                        last
                          ? "border-rose-600/40 bg-rose-50/60 text-rose-900 dark:bg-rose-950/25 dark:text-rose-200"
                          : "border-orange-600/40 bg-orange-50/60 text-orange-900 dark:bg-orange-950/25 dark:text-orange-200"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {!last && <span className="w-px flex-1 bg-border" aria-hidden />}
                  </div>
                  <div
                    className={`text-[10.5px] leading-snug ${last ? "font-bold text-foreground" : "text-foreground"} ${
                      last ? "pb-0" : "pb-2"
                    }`}
                  >
                    {stage}
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-2 flex items-start gap-2 rounded-md border border-amber-600/35 bg-amber-50/40 px-2.5 py-1.5 dark:bg-amber-950/20">
            <ArrowRight className="mt-0.5 h-3 w-3 shrink-0 rotate-90 text-amber-700 dark:text-amber-300" aria-hidden />
            <div className="text-[10px] leading-snug text-foreground">
              The worms may reside in the lymphatic vessels for <strong>years</strong>, so the inflammation develops
              slowly.
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-lg border border-border bg-white p-1.5">
            <img
              src="/images/biology/human-health-and-diseases/lymphatic-system.png"
              alt="Labelled diagram of the human lymphatic system, showing the lymph vessels and lymph nodes of the lower limbs, groin and the rest of the body."
              className="mx-auto h-auto w-full max-h-[380px] object-contain"
              loading="lazy"
            />
          </div>
          <div className="mt-1.5 text-[9px] leading-snug text-muted-foreground">
            Lymphatic system. Wikimedia Commons, <span className="italic">TE-Lymphatic system diagram.svg</span>, CC BY
            3.0 — after the public-domain NIH illustration <span className="italic">Illu lymphatic system.jpg</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
