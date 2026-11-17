import { ArrowDown, ArrowRight } from "lucide-react";

/**
 * TissueCulture — explant, totipotency and the culture medium.
 *
 * The diagram is a three-stage regeneration rail: a labelled whole plant, an
 * explant in its tube of sterile medium, and the plant regenerated from it.
 * Totipotency is defined beside that last stage, because that is the step the
 * definition explains. Accents follow the chapter: teal = living material,
 * amber = the plant that comes out.
 */

const PLANT = "var(--subject-biology)";
const INK = "var(--foreground)";
const AMBER = "var(--warning)";

export function ExplantDefinition() {
  return (
    <div className="my-5 rounded-xl border border-border bg-card p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
        Explant
      </div>
      <div className="mt-1 text-sm leading-relaxed text-foreground">
        Any part of a plant taken out and grown in a test tube under sterile conditions in a special nutrient medium.
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {["Flower", "Leaf", "Stem", "Root"].map((part) => (
          <span
            key={part}
            className="inline-flex items-center rounded border border-border bg-muted/40 px-1.5 py-0.5 text-[11px] text-foreground"
          >
            {part}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- plant */

function PlantSource() {
  return (
    <svg
      viewBox="0 0 220 250"
      className="h-auto w-full"
      role="img"
      aria-label="A whole plant in soil, labelled at its flower, leaf, stem and root — the four parts an explant can be taken from."
    >
      <title>The four plant parts an explant can be taken from</title>

      {/* soil */}
      <line x1={26} y1={196} x2={194} y2={196} stroke={INK} strokeOpacity={0.35} strokeWidth={1.6} />
      {[40, 62, 84, 106, 128, 150, 172].map((x) => (
        <line
          key={x}
          x1={x}
          y1={200}
          x2={x - 7}
          y2={209}
          stroke={INK}
          strokeOpacity={0.16}
          strokeWidth={1.2}
        />
      ))}

      {/* roots */}
      <path d="M110 196 L96 228" stroke={PLANT} strokeOpacity={0.75} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M110 196 L124 226" stroke={PLANT} strokeOpacity={0.75} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M110 196 L110 234" stroke={PLANT} strokeOpacity={0.75} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      <path d="M101 214 L92 222" stroke={PLANT} strokeOpacity={0.5} strokeWidth={1.5} fill="none" strokeLinecap="round" />
      <path d="M119 214 L128 220" stroke={PLANT} strokeOpacity={0.5} strokeWidth={1.5} fill="none" strokeLinecap="round" />

      {/* stem */}
      <path d="M110 196 L110 74" stroke={PLANT} strokeWidth={3} strokeLinecap="round" fill="none" />

      {/* leaves */}
      <ellipse
        cx={86}
        cy={152}
        rx={24}
        ry={9.5}
        transform="rotate(-22 86 152)"
        fill={PLANT}
        fillOpacity={0.28}
        stroke={PLANT}
        strokeOpacity={0.6}
        strokeWidth={1.4}
      />
      <ellipse
        cx={132}
        cy={124}
        rx={24}
        ry={9.5}
        transform="rotate(22 132 124)"
        fill={PLANT}
        fillOpacity={0.28}
        stroke={PLANT}
        strokeOpacity={0.6}
        strokeWidth={1.4}
      />

      {/* flower */}
      {[
        [123, 56],
        [116.5, 67.3],
        [103.5, 67.3],
        [97, 56],
        [103.5, 44.7],
        [116.5, 44.7],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={6.5} fill={PLANT} fillOpacity={0.24} stroke={PLANT} strokeOpacity={0.55} strokeWidth={1.2} />
      ))}
      <circle cx={110} cy={56} r={5.5} fill={AMBER} fillOpacity={0.55} stroke={AMBER} strokeWidth={1.2} />

      {/* labels */}
      <text x={132} y={40} fontSize={11} fontWeight={700} fill={INK} fillOpacity={0.8}>
        Flower
      </text>
      <text x={160} y={104} fontSize={11} fontWeight={700} fill={INK} fillOpacity={0.8}>
        Leaf
      </text>
      <line x1={56} y1={177} x2={106} y2={177} stroke={INK} strokeOpacity={0.25} strokeWidth={1.2} />
      <text x={20} y={181} fontSize={11} fontWeight={700} fill={INK} fillOpacity={0.8}>
        Stem
      </text>
      <text x={132} y={236} fontSize={11} fontWeight={700} fill={INK} fillOpacity={0.8}>
        Root
      </text>
    </svg>
  );
}

function ExplantInTube() {
  return (
    <svg
      viewBox="0 0 220 250"
      className="h-auto w-full"
      role="img"
      aria-label="A test tube of sterile nutrient medium holding pieces of plant tissue — the explants — under sterile conditions."
    >
      <title>Explant in a test tube of sterile nutrient medium</title>

      {/* medium */}
      <path d="M86 168 V196 Q86 229 120 229 Q154 229 154 196 V168 Z" fill={PLANT} fillOpacity={0.2} />
      <line x1={86} y1={168} x2={154} y2={168} stroke={PLANT} strokeOpacity={0.75} strokeWidth={1.6} />

      {/* glass */}
      <path
        d="M84 66 V196 Q84 232 120 232 Q156 232 156 196 V66"
        fill={PLANT}
        fillOpacity={0.05}
        stroke={INK}
        strokeOpacity={0.55}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <ellipse cx={120} cy={66} rx={36} ry={6} fill="none" stroke={INK} strokeOpacity={0.55} strokeWidth={2} />

      {/* explant pieces */}
      <ellipse
        cx={104}
        cy={190}
        rx={12}
        ry={5}
        transform="rotate(-20 104 190)"
        fill={PLANT}
        fillOpacity={0.4}
        stroke={PLANT}
        strokeOpacity={0.7}
        strokeWidth={1.3}
      />
      <line x1={131} y1={182} x2={131} y2={204} stroke={PLANT} strokeOpacity={0.8} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M112 210 q7 -7 14 0" fill="none" stroke={PLANT} strokeOpacity={0.8} strokeWidth={2} strokeLinecap="round" />

      {/* labels */}
      <line x1={156} y1={186} x2={163} y2={184} stroke={INK} strokeOpacity={0.25} strokeWidth={1.2} />
      <text x={166} y={182} fontSize={10.5} fontWeight={700} fill={INK} fillOpacity={0.8}>
        Explant
      </text>
      <line x1={156} y1={206} x2={163} y2={206} stroke={INK} strokeOpacity={0.25} strokeWidth={1.2} />
      <text x={166} y={210} fontSize={10.5} fontWeight={700} fill={INK} fillOpacity={0.8}>
        Medium
      </text>
      <text x={120} y={248} fontSize={10} fontWeight={600} textAnchor="middle" fill="var(--muted-foreground)">
        sterile conditions
      </text>
    </svg>
  );
}

function WholePlant() {
  return (
    <svg
      viewBox="0 0 220 250"
      className="h-auto w-full"
      role="img"
      aria-label="A whole plant regenerated from the explant inside its culture vessel."
    >
      <title>The whole plant regenerated from an explant</title>

      {/* vessel */}
      <path
        d="M80 96 V196 Q80 228 106 228 H134 Q160 228 160 196 V96"
        fill={PLANT}
        fillOpacity={0.05}
        stroke={INK}
        strokeOpacity={0.45}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <ellipse cx={120} cy={96} rx={40} ry={6} fill="none" stroke={INK} strokeOpacity={0.45} strokeWidth={2} />

      {/* regenerated plant */}
      <path d="M120 206 L120 132" stroke={PLANT} strokeWidth={3} strokeLinecap="round" fill="none" />
      <ellipse
        cx={103}
        cy={168}
        rx={17}
        ry={7}
        transform="rotate(-22 103 168)"
        fill={PLANT}
        fillOpacity={0.32}
        stroke={PLANT}
        strokeOpacity={0.65}
        strokeWidth={1.3}
      />
      <ellipse
        cx={137}
        cy={152}
        rx={17}
        ry={7}
        transform="rotate(22 137 152)"
        fill={PLANT}
        fillOpacity={0.32}
        stroke={PLANT}
        strokeOpacity={0.65}
        strokeWidth={1.3}
      />
      <circle cx={120} cy={124} r={7} fill={AMBER} fillOpacity={0.4} stroke={AMBER} strokeWidth={1.4} />
      <path d="M120 206 L110 222" stroke={PLANT} strokeOpacity={0.7} strokeWidth={2} fill="none" strokeLinecap="round" />
      <path d="M120 206 L130 220" stroke={PLANT} strokeOpacity={0.7} strokeWidth={2} fill="none" strokeLinecap="round" />

      <text x={120} y={248} fontSize={10.5} fontWeight={700} textAnchor="middle" fill={INK} fillOpacity={0.8}>
        whole plant
      </text>
    </svg>
  );
}

/* ---------------------------------------------------------------- diagram */

export function ExplantTotipotencyDiagram() {
  return (
    <figure className="my-5 rounded-xl border border-border bg-card p-3.5">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
        <div className="rounded-lg border border-border bg-muted/20 p-2.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">Plant</div>
          <PlantSource />
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-4 w-4 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 sm:block" />
        </div>

        <div className="rounded-lg border border-border bg-muted/20 p-2.5">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Explant in culture
          </div>
          <ExplantInTube />
        </div>

        <div className="flex items-center justify-center text-muted-foreground" aria-hidden>
          <ArrowDown className="h-4 w-4 sm:hidden" />
          <ArrowRight className="hidden h-4 w-4 sm:block" />
        </div>

        <div className="rounded-lg border-2 border-teal-600/35 bg-teal-50/40 p-2.5 dark:bg-teal-950/20">
          <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
            Regeneration
          </div>
          <WholePlant />

          <div className="mt-2 rounded-md border border-teal-600/30 bg-card px-2.5 py-2">
            <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-teal-800 dark:text-teal-300">
              Totipotency
            </div>
            <div className="mt-0.5 text-[11px] leading-snug text-foreground">
              The capacity of a plant cell or explant to generate a whole plant.
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Any part of the plant — flower, leaf, stem or root — can be taken out and grown in a test tube under sterile
        conditions in a special nutrient medium.
      </figcaption>
    </figure>
  );
}

/* ----------------------------------------------------------------- medium */

const MEDIUM = [
  { label: "Carbon source", gloss: "such as sucrose" },
  { label: "Inorganic salts" },
  { label: "Vitamins" },
  { label: "Amino acids" },
  { label: "Growth regulators", gloss: "like auxins and cytokinins" },
];

export function CultureMediumRequirements() {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border bg-muted/30 px-4 py-2.5">
        <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          The medium must supply
        </div>
      </div>

      <div className="divide-y divide-border">
        {MEDIUM.map((item) => (
          <div key={item.label} className="flex flex-wrap items-baseline gap-x-2 px-4 py-2">
            <span className="h-1 w-1 shrink-0 translate-y-[-0.15rem] rounded-full bg-teal-600/60" aria-hidden />
            <span className="text-sm font-medium text-foreground">{item.label}</span>
            {item.gloss && <span className="text-xs text-muted-foreground">{item.gloss}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
