import type { ReactNode } from "react";
import { ShieldAlert, Wind } from "lucide-react";

/**
 * ViralDiseases — the disease profiles for the viral group in 7.1.
 * Only the common cold has a note so far.
 *
 * violet = viral group, amber = the detail that separates it from pneumonia.
 */

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-[11px] leading-snug text-foreground">{children}</div>
    </div>
  );
}

const COLD_SYMPTOMS = [
  "Nasal congestion and discharge",
  "Sore throat",
  "Hoarseness",
  "Cough",
  "Headache",
  "Tiredness",
];

const CONTAMINATED_OBJECTS = ["Pens", "Books", "Cups", "Doorknobs", "Computer keyboards", "Mice"];

export function CommonColdCard() {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-violet-50/40 px-4 py-2.5 dark:bg-violet-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-violet-800 dark:text-violet-300">
            Viral disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Common cold</div>
        </div>
        <Wind className="mt-0.5 h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <Block label="Pathogen">
          <span className="text-xs font-bold italic tracking-tight">Rhinoviruses</span>
        </Block>

        <Block label="Site of infection">
          <div>Nose and respiratory passage.</div>
          <div className="mt-1.5 inline-flex items-center gap-1.5 rounded border border-amber-600/40 bg-amber-50/60 px-1.5 py-1 text-[10px] font-semibold text-foreground dark:bg-amber-950/25">
            <ShieldAlert className="h-3 w-3 text-amber-700 dark:text-amber-300" aria-hidden />
            Does not infect the lungs
          </div>
        </Block>

        <Block label="Symptoms">
          <div className="grid grid-cols-2 gap-1">
            {COLD_SYMPTOMS.map((symptom) => (
              <div
                key={symptom}
                className="rounded border border-violet-600/30 bg-violet-50/40 px-1.5 py-1 text-[10px] font-medium leading-tight text-foreground dark:bg-violet-950/20"
              >
                {symptom}
              </div>
            ))}
          </div>
        </Block>

        <Block label="Transmission">
          <div className="space-y-1">
            <div className="flex gap-1.5">
              <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-violet-600/40 text-[8.5px] font-bold text-violet-800 dark:text-violet-300">
                1
              </span>
              <span>Direct inhalation of droplets released during coughing or sneezing.</span>
            </div>
            <div className="flex gap-1.5">
              <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-violet-600/40 text-[8.5px] font-bold text-violet-800 dark:text-violet-300">
                2
              </span>
              <span>Indirect contact through contaminated objects.</span>
            </div>
          </div>

          <div className="mt-1.5 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Examples of contaminated objects
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {CONTAMINATED_OBJECTS.map((object) => (
              <span
                key={object}
                className="rounded border border-border bg-muted/25 px-1 py-0.5 text-[9.5px] text-foreground"
              >
                {object}
              </span>
            ))}
          </div>
        </Block>
      </div>

      <div className="flex items-baseline justify-between gap-2 border-t border-border bg-muted/20 px-4 py-2">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Typical duration
        </div>
        <div className="text-sm font-bold tracking-tight text-foreground">3–7 days</div>
      </div>
    </figure>
  );
}
