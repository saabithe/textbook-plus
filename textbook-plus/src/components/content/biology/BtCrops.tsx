import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * BtCrops — the bacterium, the insects it targets, and the genes that decide
 * which insect it targets.
 *
 * Colours follow the chapter: teal = the living organism, violet = the toxin
 * protein, indigo = the gene/engineering layer, emerald = the takeaway.
 */

const PLANT = "var(--subject-biology)";
/** Violet token for the toxin protein (the chapter's agent colour). */
const TOXIN = "var(--subject-english)";
const INK = "var(--foreground)";

/* ------------------------------------------------------------- bacterium */

function BtBacterium() {
  return (
    <svg
      viewBox="0 0 240 122"
      className="h-auto w-full max-w-[15rem]"
      role="img"
      aria-label="A rod-shaped Bacillus thuringiensis cell holding a crystal of insecticidal protein."
    >
      <title>Bacillus thuringiensis with its protein crystal</title>

      <text x={28} y={20} fontSize={10.5} fontStyle="italic" fontWeight={700} fill={INK} fillOpacity={0.8}>
        Bacillus thuringiensis
      </text>

      {/* cell */}
      <rect
        x={30}
        y={34}
        width={150}
        height={52}
        rx={26}
        fill={PLANT}
        fillOpacity={0.14}
        stroke={PLANT}
        strokeWidth={2.4}
      />
      <rect
        x={37}
        y={41}
        width={136}
        height={38}
        rx={19}
        fill="none"
        stroke={PLANT}
        strokeOpacity={0.35}
        strokeWidth={1.2}
      />

      {/* crystal */}
      <path
        d="M78 66 l16 -18 l20 8 l-4 20 l-22 6 z"
        fill={TOXIN}
        fillOpacity={0.3}
        stroke={TOXIN}
        strokeWidth={2}
        strokeLinejoin="round"
      />

      {/* label */}
      <line x1={110} y1={84} x2={128} y2={100} stroke={INK} strokeOpacity={0.3} strokeWidth={1.2} />
      <text x={132} y={104} fontSize={10} fontWeight={700} fill={INK} fillOpacity={0.8}>
        protein crystals
      </text>
    </svg>
  );
}

const BT_CROPS = ["Bt cotton", "Bt corn", "Rice", "Tomato", "Potato", "Soybean"];

export function BtOverview() {
  return (
    <div className="my-5 grid grid-cols-1 gap-2 lg:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
          The bacterium
        </div>

        <div className="mt-1 text-sm leading-relaxed text-foreground">
          <em className="font-semibold">Bacillus thuringiensis</em> (Bt) is a bacterium that produces protein
          crystals containing insecticidal toxins.
        </div>

        <div className="mt-2 flex justify-center">
          <BtBacterium />
        </div>

        <div className="mt-2 space-y-1.5">
          <div className="flex gap-2 text-xs leading-relaxed text-foreground/85">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60" aria-hidden />
            <span>These toxins are active against specific insect groups.</span>
          </div>
          <div className="flex gap-2 text-xs leading-relaxed text-foreground/85">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-600/60" aria-hidden />
            <span>Bt toxin is synthesised as an inactive protoxin.</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-xl border border-border bg-card p-4">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Bt crops
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {BT_CROPS.map((crop) => (
            <span
              key={crop}
              className="inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] font-medium text-foreground"
            >
              {crop}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-lg border-2 border-emerald-600/35 bg-emerald-50/50 px-3 py-2.5 dark:bg-emerald-950/25">
            <span className="text-sm font-bold tracking-tight text-emerald-950 dark:text-emerald-100">Bt</span>
            <ArrowRight className="h-3.5 w-3.5 text-emerald-700 dark:text-emerald-300" aria-hidden />
            <span className="text-sm font-bold tracking-tight text-emerald-950 dark:text-emerald-100">
              Biopesticide
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- insect groups */

const GROUPS = [
  { order: "Lepidopterans", examples: "Tobacco budworm, armyworm" },
  { order: "Coleopterans", examples: "Beetles" },
  { order: "Dipterans", examples: "Flies, mosquitoes" },
];

export function BtInsectGroups() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] border-b border-border bg-muted/30 px-4 py-2">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Insect order</div>
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Examples</div>
      </div>

      <div className="divide-y divide-border">
        {GROUPS.map((group) => (
          <div key={group.order} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-baseline gap-x-3 px-4 py-2.5">
            <div className="flex items-baseline gap-2">
              <span className="h-1.5 w-1.5 shrink-0 translate-y-[-0.1rem] rounded-full bg-teal-600/60" aria-hidden />
              <span className="text-sm font-semibold tracking-tight text-foreground">{group.order}</span>
            </div>
            <div className="text-xs leading-relaxed text-foreground/80">{group.examples}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-border bg-indigo-50/40 px-4 py-2 dark:bg-indigo-950/20">
        <div className="text-[11px] font-medium text-indigo-900 dark:text-indigo-200">
          Bt toxins are insect-group specific.
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- cry genes */

const TARGETS = [
  {
    crop: "Cotton",
    pest: "Cotton bollworms",
    genes: ["cryIAc", "cryIIAb"],
  },
  {
    crop: "Corn",
    pest: "Corn borer",
    genes: ["cryIAb"],
  },
];

export function CryGeneTargets() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {TARGETS.map((target) => (
          <div key={target.crop} className="flex flex-col rounded-lg border border-border bg-muted/20 p-3">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
              Crop
            </div>
            <div className="mt-0.5 text-xs font-bold tracking-tight text-foreground">{target.crop}</div>

            <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
              {target.genes.map((gene) => (
                <span
                  key={gene}
                  className="inline-flex items-center rounded border border-violet-600/30 bg-violet-50 px-1.5 py-0.5 text-[11px] font-semibold text-violet-900 dark:bg-violet-950/30 dark:text-violet-200"
                >
                  <em>cry</em>
                  {gene.replace("cry", "")}
                </span>
              ))}
            </div>

            <div className="flex justify-center py-0.5" aria-hidden>
              <ArrowDown className="h-3.5 w-3.5 text-muted-foreground" />
            </div>

            <div className="rounded-md border border-amber-600/30 bg-amber-50/60 px-2 py-1.5 text-center dark:bg-amber-950/25">
              <div className="text-[11px] font-semibold text-foreground">{target.pest}</div>
            </div>
          </div>
        ))}
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        The choice of gene depends on the crop and the targeted pest. The two cotton bollworm genes stay together;
        corn borer is targeted by a different one.
      </figcaption>
    </figure>
  );
}
