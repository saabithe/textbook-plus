import { ArrowRight, Link2 } from "lucide-react";

/**
 * PolynucleotideChain — formation of a dinucleotide, the sugar-phosphate
 * backbone with the supplied labelled illustration, and chain polarity shown
 * 5′ (left) → 3′ (right).
 *
 * teal = sugar-phosphate backbone, amber = phosphodiester linkage,
 * blue = 5′ end, rose = 3′ end.
 */

/* -------------------------------------------------------------------------- */
/* 1. Formation of a Dinucleotide                                              */
/* -------------------------------------------------------------------------- */

type FlowTone = "neutral" | "amber" | "teal";

type FlowNode = {
  title: string;
  caption?: string;
  tone: FlowTone;
};

const DINUCLEOTIDE_FLOW: FlowNode[] = [
  { title: "Nucleotide 1", tone: "neutral" },
  {
    title: "3′–5′ phosphodiester linkage",
    caption: "3′-OH of one sugar + 5′-phosphate of the next nucleotide",
    tone: "amber",
  },
  {
    title: "Nucleotide 2",
    caption: "Two linked nucleotides = a dinucleotide",
    tone: "teal",
  },
  { title: "Repeated linkage", tone: "neutral" },
  { title: "Polynucleotide chain", tone: "teal" },
];

function flowChipClass(tone: FlowTone): string {
  if (tone === "amber") {
    return "border-amber-600/45 bg-amber-50/50 dark:bg-amber-950/20";
  }
  if (tone === "teal") {
    return "border-teal-600/40 bg-teal-50/40 dark:bg-teal-950/20";
  }
  return "border-border bg-muted/25";
}

function FormationBlock() {
  return (
    <section className="rounded-xl border border-border bg-card p-3.5">
      <div className="text-sm font-bold tracking-tight text-foreground">Formation of a Dinucleotide</div>

      <p className="mt-2 rounded-lg border border-amber-600/35 bg-amber-50/40 px-2.5 py-2 text-sm font-semibold leading-snug text-foreground dark:bg-amber-950/15">
        Two nucleotides join through a 3′–5′ phosphodiester linkage.
      </p>

      <div className="mt-3 flex flex-wrap items-stretch justify-center gap-x-1.5 gap-y-2">
        {DINUCLEOTIDE_FLOW.map((node, index) => (
          <div key={node.title} className="flex items-center gap-1.5">
            <div className={`max-w-[150px] rounded-md border px-2 py-1.5 text-center ${flowChipClass(node.tone)}`}>
              <div className="flex items-center justify-center gap-1 text-sm font-bold leading-snug text-foreground">
                {node.tone === "amber" && (
                  <Link2 className="h-3 w-3 shrink-0 text-amber-700 dark:text-amber-300" aria-hidden />
                )}
                {node.title}
              </div>
              {node.caption && (
                <div className="mt-0.5 text-xs leading-snug text-muted-foreground">{node.caption}</div>
              )}
            </div>
            {index < DINUCLEOTIDE_FLOW.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Polynucleotide Backbone                                                  */
/* -------------------------------------------------------------------------- */

function BackboneBlock() {
  return (
    <section className="rounded-xl border border-border bg-card p-3.5">
      <div className="text-sm font-bold tracking-tight text-foreground">Polynucleotide Backbone</div>

      <ul className="mt-2 space-y-1.5">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60" aria-hidden />
          <span className="text-sm leading-relaxed text-foreground">
            <strong>Repeated sugar and phosphate groups</strong> form the sugar-phosphate backbone.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-600/60" aria-hidden />
          <span className="text-sm leading-relaxed text-foreground">
            <strong>Nitrogenous bases</strong> project from this backbone.
          </span>
        </li>
      </ul>

      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <img
          src="/images/biology/molecular-basis-of-inheritance/polynucleotide-chain.png"
          alt="Labelled polynucleotide chain: alternating sugar and phosphate groups form the backbone with nitrogenous bases attached to the sugars; 3′–5′ phosphodiester linkage shown"
          className="w-full h-auto rounded-lg object-contain max-h-[520px] mx-auto bg-white"
          loading="lazy"
        />
        <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Alternating sugar and phosphate groups form the backbone; nitrogenous bases project from the sugars, and
          adjacent nucleotides are joined by a 3′–5′ phosphodiester linkage.
        </figcaption>
      </figure>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Chain Polarity                                                           */
/* -------------------------------------------------------------------------- */

const CHAIN_ENDS: [string, string][] = [
  ["5′ end", "Free phosphate group attached at the 5′ carbon"],
  ["3′ end", "Free hydroxyl (–OH) group at the 3′ carbon"],
];

const NODE_Y = 78;
const SUGAR_X = [120, 260, 400];
const PHOSPHATE_X = [190, 330];
const BACKBONE_X = [48, 120, 190, 260, 330, 400, 472];

function sugarPoints(cx: number, cy: number, r = 15): string {
  const points: string[] = [];
  for (let i = 0; i < 5; i += 1) {
    const angle = ((-90 + i * 72) * Math.PI) / 180;
    points.push(`${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`);
  }
  return points.join(" ");
}

function PolarityDiagram() {
  return (
    <div className="mt-3 rounded-lg border border-border bg-muted/20 p-2.5">
      <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Chain direction — 5′ → 3′
      </div>

      <svg
        viewBox="0 0 520 130"
        className="mx-auto mt-2 h-auto w-full max-w-[520px]"
        role="img"
        aria-label="Horizontal polynucleotide chain with the 5′ end on the left carrying a free phosphate group (P) and the 3′ end on the right carrying a free hydroxyl group (OH); a teal sugar-phosphate backbone is joined by amber phosphodiester linkages."
      >
        {/* Amber phosphodiester linkages (drawn beneath the nodes) */}
        {BACKBONE_X.slice(0, -1).map((x, i) => (
          <line
            key={`link-${x}`}
            x1={x}
            y1={NODE_Y}
            x2={BACKBONE_X[i + 1]}
            y2={NODE_Y}
            strokeWidth="5"
            strokeLinecap="round"
            className="stroke-amber-500 dark:stroke-amber-400"
          />
        ))}

        {/* Teal backbone — sugar pentagons */}
        {SUGAR_X.map((x) => (
          <polygon
            key={`sugar-${x}`}
            points={sugarPoints(x, NODE_Y)}
            strokeWidth="1.8"
            className="fill-teal-100 stroke-teal-600 dark:fill-teal-900/60 dark:stroke-teal-400"
          />
        ))}

        {/* Teal backbone — internal phosphate circles */}
        {PHOSPHATE_X.map((x) => (
          <g key={`phosphate-${x}`}>
            <circle
              cx={x}
              cy={NODE_Y}
              r="12"
              strokeWidth="1.8"
              className="fill-teal-100 stroke-teal-600 dark:fill-teal-900/60 dark:stroke-teal-400"
            />
            <text
              x={x}
              y={NODE_Y + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              className="fill-teal-900 dark:fill-teal-100"
            >
              P
            </text>
          </g>
        ))}

        {/* Blue 5′ end */}
        <text
          x="48"
          y="42"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          className="fill-blue-700 dark:fill-blue-300"
        >
          5′
        </text>
        <circle
          cx="48"
          cy={NODE_Y}
          r="16"
          strokeWidth="2"
          className="fill-blue-100 stroke-blue-600 dark:fill-blue-900/60 dark:stroke-blue-400"
        />
        <text
          x="48"
          y={NODE_Y + 5}
          textAnchor="middle"
          fontSize="13"
          fontWeight="700"
          className="fill-blue-900 dark:fill-blue-50"
        >
          P
        </text>

        {/* Rose 3′ end */}
        <text
          x="472"
          y="42"
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          className="fill-rose-700 dark:fill-rose-300"
        >
          3′
        </text>
        <circle
          cx="472"
          cy={NODE_Y}
          r="17"
          strokeWidth="2"
          className="fill-rose-100 stroke-rose-600 dark:fill-rose-900/60 dark:stroke-rose-400"
        />
        <text
          x="472"
          y={NODE_Y + 4}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          className="fill-rose-900 dark:fill-rose-50"
        >
          OH
        </text>
      </svg>

      {/* Explicit end labels, kept in the 5′ left → 3′ right orientation */}
      <div className="mt-1 grid grid-cols-2 gap-2">
        <div className="rounded-md border border-blue-600/25 bg-blue-50/40 px-2 py-1.5 dark:bg-blue-950/20">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-blue-800 dark:text-blue-300">
            5′ end
          </div>
          <div className="text-sm font-semibold leading-snug text-foreground">Free phosphate (P)</div>
        </div>
        <div className="rounded-md border border-rose-600/25 bg-rose-50/40 px-2 py-1.5 text-right dark:bg-rose-950/20">
          <div className="text-[8.5px] font-semibold uppercase tracking-[0.08em] text-rose-800 dark:text-rose-300">
            3′ end
          </div>
          <div className="text-sm font-semibold leading-snug text-foreground">Free hydroxyl (OH)</div>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs leading-snug text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-teal-500" aria-hidden /> Sugar-phosphate backbone
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden /> Phosphodiester linkage
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden /> 5′ end
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden /> 3′ end
        </span>
      </div>
    </div>
  );
}

function PolarityBlock() {
  return (
    <section className="rounded-xl border border-border bg-card p-3.5">
      <div className="text-sm font-bold tracking-tight text-foreground">Chain Polarity</div>

      <p className="mt-2 text-sm leading-relaxed text-foreground">
        <strong>A polynucleotide chain</strong> has two distinct ends:
      </p>

      <div className="mt-2 overflow-hidden rounded-lg border border-border">
        <div className="grid grid-cols-2 border-b border-border bg-muted/40 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          <div className="px-2.5 py-1.5">Chain end</div>
          <div className="px-2.5 py-1.5">Characteristic</div>
        </div>
        {CHAIN_ENDS.map(([end, characteristic]) => (
          <div key={end} className="grid grid-cols-2 border-b border-border last:border-b-0">
            <div className="px-2.5 py-1.5 text-sm font-semibold leading-snug text-foreground">{end}</div>
            <div className="px-2.5 py-1.5 text-sm leading-relaxed text-foreground/85">{characteristic}</div>
          </div>
        ))}
      </div>

      <PolarityDiagram />
    </section>
  );
}

/* -------------------------------------------------------------------------- */

export function PolynucleotideChainSection() {
  return (
    <div className="my-5 space-y-4">
      <FormationBlock />
      <BackboneBlock />
      <PolarityBlock />
    </div>
  );
}
