import type { ReactNode } from "react";
import { ArrowRight, Droplets, Thermometer, Wind } from "lucide-react";

/**
 * Pathogens — how disease-causing organisms are defined and how they work, the
 * bacterial disease index, and the two detailed bacterial diseases: typhoid
 * (with the Mary Mallon carrier case) and pneumonia (with the alveoli figure).
 *
 * teal = the pathogen or the healthy structure, amber = the damaged state,
 * rose = the disease card header.
 */

const BIOLOGY = "var(--subject-biology)";

const PATHOGEN_GROUPS = ["Bacteria", "Viruses", "Fungi", "Protozoans", "Helminths"];

const PATHOGENESIS_STEPS = [
  "Enter the human body through various means.",
  "Adapt to the host environment.",
  "Multiply inside the body.",
  "Interfere with normal vital activities.",
  "Cause morphological and physiological damage.",
];

export function PathogenDefinitionCard() {
  return (
    <div className="my-5 rounded-xl border-2 border-teal-600/35 bg-teal-50/40 p-4 dark:bg-teal-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Definition
      </div>
      <div className="mt-1 text-base font-bold tracking-tight text-foreground">Pathogens</div>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground">
        Disease-causing organisms belonging to different groups, including:
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-5">
        {PATHOGEN_GROUPS.map((group) => (
          <div
            key={group}
            className="rounded-md border border-teal-700/25 bg-card px-1.5 py-1.5 text-center text-[10.5px] font-semibold text-foreground"
          >
            {group}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PathogenesisFlow() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Pathogenesis — how a pathogen causes disease
      </div>

      <ol className="mt-2.5">
        {PATHOGENESIS_STEPS.map((step, index) => {
          const last = index === PATHOGENESIS_STEPS.length - 1;
          return (
            <li key={step} className="flex gap-2.5">
              <div className="flex flex-col items-center">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-teal-600/40 bg-teal-50/60 text-[9.5px] font-bold text-teal-900 dark:bg-teal-950/25 dark:text-teal-200">
                  {index + 1}
                </span>
                {!last && <span className="w-px flex-1 bg-border" aria-hidden />}
              </div>
              <div className={`text-[11px] leading-snug text-foreground ${last ? "pb-0" : "pb-2.5"}`}>{step}</div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function HostAdaptationCallout() {
  return (
    <div className="my-5 rounded-xl border border-amber-600/35 bg-amber-50/45 p-3.5 dark:bg-amber-950/20">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
        Host adaptation
      </div>
      <div className="mt-1 text-[11px] leading-snug text-foreground">
        Pathogens must adapt to the environment of their host.
      </div>

      <div className="mt-2 rounded-lg border border-amber-700/25 bg-card px-2.5 py-2">
        <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Example — gut pathogens
        </div>
        <div className="mt-1 space-y-1">
          <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-600/60" aria-hidden />
            <span>
              Must survive stomach acid at <strong>low pH</strong>.
            </span>
          </div>
          <div className="flex gap-2 text-[10.5px] leading-snug text-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-600/60" aria-hidden />
            <span>Must resist digestive enzymes.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const BACTERIAL_DISEASES = [
  { name: "Typhoid", detailed: true },
  { name: "Pneumonia", detailed: true },
  { name: "Dysentery", detailed: false },
  { name: "Plague", detailed: false },
  { name: "Diphtheria", detailed: false },
];

export function BacterialDiseaseIndex() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Bacterial diseases covered in the notes
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-5">
        {BACTERIAL_DISEASES.map((disease, index) => (
          <div
            key={disease.name}
            className={`rounded-md border px-1.5 py-1.5 text-center ${
              disease.detailed
                ? "border-rose-600/40 bg-rose-50/45 dark:bg-rose-950/20"
                : "border-border bg-muted/20"
            }`}
          >
            <div className="text-[8.5px] font-semibold text-muted-foreground">{index + 1}</div>
            <div className="text-[10.5px] font-bold leading-tight text-foreground">{disease.name}</div>
          </div>
        ))}
      </div>

      <div className="mt-2 text-[10px] leading-snug text-muted-foreground">
        Typhoid and pneumonia are described in detail below.
      </div>
    </div>
  );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-[11px] leading-snug text-foreground">{children}</div>
    </div>
  );
}

function SymptomRow({ children, highlight = false }: { children: ReactNode; highlight?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[10.5px] leading-snug ${
        highlight
          ? "border border-amber-600/40 bg-amber-50/50 font-semibold text-foreground dark:bg-amber-950/25"
          : "text-foreground"
      }`}
    >
      <span
        className={`h-1 w-1 shrink-0 rounded-full ${highlight ? "bg-amber-600" : "bg-rose-600/50"}`}
        aria-hidden
      />
      <span>{children}</span>
    </div>
  );
}

export function TyphoidCard() {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-rose-50/40 px-4 py-2.5 dark:bg-rose-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
            Bacterial disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Typhoid fever</div>
        </div>
        <Thermometer className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <div className="space-y-2.5">
          <div>
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Pathogen</div>
            <div className="mt-0.5 text-sm font-bold italic tracking-tight text-foreground">Salmonella typhi</div>
          </div>

          <Fact label="Mode of transmission">Contaminated food and water.</Fact>

          <div>
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Affected parts
            </div>
            <div className="mt-1 flex flex-wrap gap-1">
              <span className="rounded border border-rose-600/30 bg-rose-50/45 px-1.5 py-0.5 text-[10.5px] font-semibold text-foreground dark:bg-rose-950/20">
                Small intestine
              </span>
              <span className="rounded border border-rose-600/30 bg-rose-50/45 px-1.5 py-0.5 text-[10.5px] font-semibold text-foreground dark:bg-rose-950/20">
                Blood
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Symptoms</div>
          <div className="mt-1 space-y-0.5">
            <SymptomRow highlight>Sustained high fever: 39–40°C</SymptomRow>
            <SymptomRow>Weakness</SymptomRow>
            <SymptomRow>Stomach pain</SymptomRow>
            <SymptomRow>Constipation</SymptomRow>
            <SymptomRow>Headache</SymptomRow>
            <SymptomRow>Loss of appetite</SymptomRow>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 border-t border-border bg-muted/20 px-4 py-2.5 sm:grid-cols-2">
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Severe cases
          </div>
          <div className="mt-0.5 text-[10.5px] font-semibold leading-snug text-foreground">
            Intestinal perforation · Death
          </div>
        </div>
        <div>
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Confirmatory test
          </div>
          <div className="mt-0.5 inline-flex rounded border border-amber-600/40 bg-amber-50/60 px-1.5 py-0.5 text-[10.5px] font-bold text-foreground dark:bg-amber-950/25">
            Widal test
          </div>
        </div>
      </div>
    </figure>
  );
}

export function TyphoidMaryCard() {
  return (
    <div className="my-5 rounded-xl border border-stone-600/30 bg-stone-50/60 p-3.5 dark:bg-stone-900/40">
      <div className="flex items-start gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-stone-600/35 bg-card text-[11px] font-bold text-stone-700 dark:text-stone-300">
          MM
        </span>

        <div className="min-w-0">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-stone-700 dark:text-stone-300">
            Classic carrier case
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold tracking-tight text-foreground">Mary Mallon</span>
            <span className="rounded border border-stone-600/35 bg-card px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-stone-700 dark:text-stone-300">
              Typhoid Mary
            </span>
          </div>

          <div className="mt-1.5 space-y-1 text-[10.5px] leading-snug text-foreground">
            <div>
              <span className="font-semibold text-muted-foreground">Profession: </span>cook.
            </div>
            <div>
              She was a <strong>typhoid carrier</strong> and spread the disease for years through the food she prepared.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PNEUMONIA_SYMPTOMS = ["Fever", "Chills", "Cough", "Headache"];

export function PneumoniaCard() {
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-start justify-between gap-2 border-b border-border bg-sky-50/40 px-4 py-2.5 dark:bg-sky-950/20">
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-sky-800 dark:text-sky-300">
            Bacterial disease
          </div>
          <div className="text-sm font-bold tracking-tight text-foreground">Pneumonia</div>
        </div>
        <Wind className="mt-0.5 h-4 w-4 shrink-0 text-sky-700 dark:text-sky-300" aria-hidden />
      </div>

      <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
        <div className="space-y-2.5">
          <div>
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Pathogens
            </div>
            <div className="mt-0.5 space-y-0.5">
              <div className="text-xs font-bold italic tracking-tight text-foreground">Streptococcus pneumoniae</div>
              <div className="text-xs font-bold italic tracking-tight text-foreground">Haemophilus influenzae</div>
            </div>
          </div>

          <Fact label="Site of infection">
            <div>
              <strong>Alveoli</strong> — air-filled sacs of the lungs.
            </div>
            <div className="mt-1 text-[10.5px] text-foreground/75">Alveoli become filled with fluid.</div>
          </Fact>

          <Fact label="Mode of transmission">
            <div>Inhaling droplets or aerosols released by an infected person.</div>
            <div className="mt-1">Sharing glasses or utensils.</div>
          </Fact>
        </div>

        <div className="space-y-2.5">
          <div>
            <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Symptoms</div>
            <div className="mt-1 grid grid-cols-2 gap-1">
              {PNEUMONIA_SYMPTOMS.map((symptom) => (
                <div
                  key={symptom}
                  className="rounded border border-sky-600/30 bg-sky-50/45 px-1.5 py-1 text-center text-[10.5px] font-semibold text-foreground dark:bg-sky-950/20"
                >
                  {symptom}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-amber-600/40 bg-amber-50/50 px-2.5 py-2 dark:bg-amber-950/20">
            <div className="flex items-center gap-1.5">
              <Droplets className="h-3 w-3 text-amber-700 dark:text-amber-300" aria-hidden />
              <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
                Severe symptom
              </div>
            </div>
            <div className="mt-0.5 text-[10.5px] font-semibold leading-snug text-foreground">
              Lips and fingernails turn grey to bluish.
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function LungGlyph() {
  return (
    <svg
      viewBox="0 0 120 128"
      className="h-24 w-auto"
      role="img"
      aria-label="Lungs, with the alveoli marked in the lower lobe"
    >
      <g fill={BIOLOGY} fillOpacity="0.12" stroke={BIOLOGY} strokeWidth="1.6" strokeLinejoin="round">
        <rect x="54" y="4" width="12" height="26" rx="4" fill="none" />
        <path d="M58 30 C 52 40 44 46 40 54" fill="none" strokeLinecap="round" />
        <path d="M62 30 C 68 40 76 46 80 54" fill="none" strokeLinecap="round" />
        <path d="M56 30 C 40 34 24 56 22 82 C 20 104 32 118 46 119 C 54 120 57 112 57 104 Z" />
        <path d="M64 30 C 80 34 96 56 98 82 C 100 104 88 118 74 119 C 66 120 63 112 63 104 Z" />
      </g>
      <circle
        cx="38"
        cy="86"
        r="17"
        fill="none"
        stroke={BIOLOGY}
        strokeWidth="1.4"
        strokeDasharray="3 3"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

const ALVEOLI_CIRCLES = [
  [30, 44],
  [60, 39],
  [90, 44],
  [29, 71],
  [59, 66],
  [89, 71],
];

function AlveolusCluster({ fluid }: { fluid: boolean }) {
  return (
    <svg
      viewBox="0 0 120 92"
      className={`h-auto w-full ${fluid ? "text-amber-600 dark:text-amber-400" : "text-teal-600 dark:text-teal-400"}`}
      aria-hidden
    >
      <path
        d="M60 2 V13 M60 13 C 46 17 38 21 33 27 M60 13 C 74 17 82 21 87 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      {ALVEOLI_CIRCLES.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="11"
          fill="currentColor"
          fillOpacity={fluid ? 0.45 : 0.08}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />
      ))}
    </svg>
  );
}

export function AlveoliComparison() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Site of infection — alveoli of the lungs
      </div>

      <div className="mt-2 grid grid-cols-1 items-center gap-3 sm:grid-cols-[auto_minmax(0,1fr)]">
        <div className="flex flex-col items-center">
          <LungGlyph />
          <div className="mt-1 text-center text-[9px] font-semibold text-muted-foreground">
            Alveoli marked
            <ArrowRight className="ml-1 inline h-2.5 w-2.5 align-middle" aria-hidden />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-teal-600/30 bg-teal-50/35 p-2 dark:bg-teal-950/15">
            <AlveolusCluster fluid={false} />
            <div className="mt-1 text-center">
              <div className="text-[10px] font-bold text-foreground">Normal</div>
              <div className="text-[9px] leading-tight text-muted-foreground">air-filled sacs</div>
            </div>
          </div>

          <div className="rounded-lg border border-amber-600/35 bg-amber-50/40 p-2 dark:bg-amber-950/20">
            <AlveolusCluster fluid />
            <div className="mt-1 text-center">
              <div className="text-[10px] font-bold text-foreground">Pneumonia</div>
              <div className="text-[9px] leading-tight text-muted-foreground">filled with fluid</div>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-2 border-t border-border pt-2 text-[10px] leading-snug text-muted-foreground">
        Schematic — the alveoli are the air-filled sacs of the lungs; in pneumonia they become filled with fluid.
      </figcaption>
    </figure>
  );
}
