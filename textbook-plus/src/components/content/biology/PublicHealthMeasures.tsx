import { Building2, Check, Droplets, ShieldCheck, Syringe } from "lucide-react";

/**
 * PublicHealthMeasures — the 7.1 prevention block: personal/public hygiene,
 * vector control split by breeding versus bites, and vaccine impact.
 *
 * sky = hygiene and water, emerald = control and prevention,
 * amber = the one disease eradicated by immunisation.
 */

function CheckList({ items }: { items: string[] }) {
  return (
    <div className="mt-2 space-y-1.5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2">
          <span className="mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/40 bg-card text-emerald-800 dark:text-emerald-300">
            <Check className="h-2.5 w-2.5" aria-hidden />
          </span>
          <span className="text-[10.5px] leading-snug text-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function HygieneCards() {
  return (
    <div className="my-5">
      <div className="text-[10.5px] leading-snug text-foreground">
        Prevention of infectious diseases requires both <strong>personal hygiene</strong> and{" "}
        <strong>public hygiene</strong>.
      </div>

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-sky-600/35 bg-sky-50/35 p-4 dark:bg-sky-950/20">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-sky-700 dark:text-sky-300" aria-hidden />
            <div className="text-sm font-bold tracking-tight text-foreground">Personal hygiene</div>
          </div>
          <CheckList
            items={[
              "Keep the body clean.",
              "Consume clean water.",
              "Eat hygienic food, vegetables and fruits.",
            ]}
          />
        </div>

        <div className="rounded-xl border-2 border-emerald-600/35 bg-emerald-50/35 p-4 dark:bg-emerald-950/20">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-emerald-800 dark:text-emerald-300" aria-hidden />
            <div className="text-sm font-bold tracking-tight text-foreground">Public hygiene</div>
          </div>
          <CheckList
            items={[
              "Proper disposal of waste and excreta.",
              "Periodic cleaning and disinfection of water reservoirs, pools and tanks.",
              "Maintain hygiene in public catering.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

const VECTOR_DISEASES = ["Malaria", "Filariasis", "Dengue", "Chikungunya"];

interface Measure {
  number: number;
  title: string;
  details: string[];
}

const BREEDING_MEASURES: Measure[] = [
  {
    number: 1,
    title: "Eliminate stagnant water",
    details: ["Avoid water accumulation around residential areas.", "Clean water coolers regularly."],
  },
  {
    number: 3,
    title: "Control mosquito larvae",
    details: [
      "Introduce larvicidal fish such as Gambusia into ponds.",
      "These fish feed on mosquito larvae.",
    ],
  },
  {
    number: 4,
    title: "Destroy breeding sites",
    details: ["Spray insecticides in ditches, drainage areas and swamps."],
  },
  {
    number: 5,
    title: "Control Aedes mosquitoes",
    details: ["Important for preventing dengue and chikungunya."],
  },
];

const BITE_MEASURES: Measure[] = [
  {
    number: 2,
    title: "Prevent mosquito bites",
    details: ["Use mosquito nets.", "Install wire mesh on doors and windows."],
  },
];

function MeasureRows({ measures }: { measures: Measure[] }) {
  return (
    <div className="mt-1.5 space-y-1.5">
      {measures.map((measure) => (
        <div key={measure.number} className="rounded-lg border border-border bg-card px-2.5 py-2">
          <div className="flex items-center gap-1.5">
            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-emerald-600/40 bg-emerald-50/60 text-[8.5px] font-bold text-emerald-900 dark:bg-emerald-950/25 dark:text-emerald-200">
              {measure.number}
            </span>
            <span className="text-[10.5px] font-bold leading-snug text-foreground">{measure.title}</span>
          </div>
          <div className="mt-1 space-y-0.5 pl-[22px]">
            {measure.details.map((detail) => (
              <div key={detail} className="text-[10px] leading-snug text-foreground/85">
                {detail.includes("Gambusia") ? (
                  <>
                    Introduce larvicidal fish such as <em className="font-semibold">Gambusia</em> into ponds.
                  </>
                ) : (
                  detail
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function VectorControlMeasures() {
  return (
    <div className="my-5">
      <div className="text-[10.5px] leading-snug text-foreground">
        Vector control helps prevent diseases such as:
      </div>
      <div className="mt-1.5 flex flex-wrap gap-1.5">
        {VECTOR_DISEASES.map((disease) => (
          <span
            key={disease}
            className="rounded-md border border-emerald-600/30 bg-emerald-50/45 px-2 py-1 text-[11px] font-semibold text-foreground dark:bg-emerald-950/20"
          >
            {disease}
          </span>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-emerald-600/35 bg-emerald-50/30 p-3.5 dark:bg-emerald-950/15">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-emerald-800 dark:text-emerald-300">
            Prevent mosquito breeding
          </div>
          <MeasureRows measures={BREEDING_MEASURES} />
        </div>

        <div className="rounded-xl border-2 border-sky-600/35 bg-sky-50/30 p-3.5 dark:bg-sky-950/15">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-sky-800 dark:text-sky-300">
            Prevent mosquito entry and bites
          </div>
          <MeasureRows measures={BITE_MEASURES} />
        </div>
      </div>
    </div>
  );
}

const CONTROLLED_DISEASES = ["Polio", "Diphtheria", "Pneumonia", "Tetanus"];

export function VaccinationImpactCard() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[10.5px] leading-snug text-foreground">
        Vaccination has helped prevent and control several infectious diseases.
      </div>

      <div className="mt-2 flex items-start gap-2 rounded-lg border-2 border-amber-600/45 bg-amber-50/50 px-3 py-2 dark:bg-amber-950/20">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-800 dark:text-amber-300" aria-hidden />
        <div>
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-amber-800 dark:text-amber-300">
            Completely eradicated
          </div>
          <div className="mt-0.5 text-[11px] font-bold text-foreground">
            Smallpox — completely eradicated through immunisation.
          </div>
        </div>
      </div>

      <div className="mt-2 overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <div className="px-2.5 py-1.5">Disease</div>
          <div className="px-2.5 py-1.5">Role of vaccination</div>
        </div>
        {CONTROLLED_DISEASES.map((disease) => (
          <div key={disease} className="grid grid-cols-2 border-b border-border last:border-b-0">
            <div className="px-2.5 py-1.5 text-[10.5px] font-semibold text-foreground">{disease}</div>
            <div className="px-2.5 py-1.5 text-[10.5px] text-foreground/85">Controlled through vaccination</div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-start gap-2 rounded-md border border-border bg-muted/25 px-2.5 py-1.5">
        <Syringe className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
        <div className="text-[10.5px] leading-snug text-foreground">
          <span className="font-bold">Biotechnology contribution.</span> Enables the production of newer and safer
          vaccines.
        </div>
      </div>
    </div>
  );
}
