import type { ReactNode } from "react";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";

const EYEBROW =
  "text-[0.68rem] font-bold uppercase tracking-[0.1em] text-muted-foreground";

interface ComparisonRow {
  cells: ReactNode[];
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    cells: [
      "Strand structure",
      "Usually double-stranded; complementary strands provide stability and support repair",
      "Usually single-stranded; less stable",
    ],
  },
  {
    cells: [
      "Sugar",
      <>
        Deoxyribose; lacks <Highlight color="yellow">2′-OH</Highlight>
      </>,
      <>
        Ribose; contains <Highlight color="yellow">2′-OH</Highlight>
      </>,
    ],
  },
  {
    cells: [
      "Chemical stability",
      "More chemically stable",
      "More reactive, labile and easily degradable",
    ],
  },
  {
    cells: ["Pyrimidine base", "Thymine (5-methyl uracil)", "Uracil instead of thymine"],
  },
  {
    cells: [
      "Catalytic nature",
      "Primarily genetic information storage",
      "Can act as a catalyst (ribozyme)",
    ],
  },
  {
    cells: [
      "Mutation rate",
      "Generally slower mutation rate",
      "Generally faster mutation rate in RNA-genome viruses",
    ],
  },
  {
    cells: [
      "Protein synthesis",
      "Genetic information is transcribed into RNA before translation",
      "mRNA carries information for protein synthesis",
    ],
  },
  {
    cells: [
      "Primary role",
      "Preferred for long-term storage of genetic information",
      "Performs several roles, including information transfer and catalysis",
    ],
  },
];

interface StabilityCard {
  title: string;
  lines: ReactNode[];
}

const STABILITY_CARDS: StabilityCard[] = [
  {
    title: "Sugar",
    lines: [
      "DNA contains deoxyribose.",
      <>
        RNA contains ribose with an additional{" "}
        <Highlight color="yellow">2′-OH</Highlight> group.
      </>,
      "This makes RNA more chemically reactive and easily degradable.",
    ],
  },
  {
    title: "Strand Structure",
    lines: [
      "DNA is usually double-stranded.",
      "Complementary strands provide structural stability and support repair.",
      "RNA is usually single-stranded.",
    ],
  },
  {
    title: "Nitrogenous Base",
    lines: ["DNA contains thymine.", "RNA contains uracil in place of thymine."],
  },
];

type ConclusionTone = "dna" | "rna" | "rnaVirus";

interface Conclusion {
  label: string;
  tone: ConclusionTone;
  text: string;
}

const CONCLUSIONS: Conclusion[] = [
  {
    label: "DNA",
    tone: "dna",
    text: "Better suited for stable storage of genetic information.",
  },
  {
    label: "RNA",
    tone: "rna",
    text: "More reactive; performs messenger, adapter, structural and catalytic roles.",
  },
  {
    label: "RNA viruses",
    tone: "rnaVirus",
    text: "Generally show faster mutation rates than DNA-based organisms.",
  },
];

const TONE_CLASSES: Record<ConclusionTone, string> = {
  dna: "border-blue-600/30 bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300",
  rna: "border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
  rnaVirus:
    "border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
};

/**
 * DnaVsRnaComparison — the DNA/RNA comparison table, three compact cards
 * explaining DNA's greater stability, and the colour-cued key conclusion.
 */
export function DnaVsRnaComparison() {
  return (
    <section className="my-6">
      <p className="text-sm leading-relaxed text-foreground">
        Both <strong>DNA</strong> and <strong>RNA</strong> can function as genetic
        material, but DNA&apos;s greater chemical stability makes it better suited
        for long-term storage of genetic information.
      </p>

      <div className="mt-5">
        <TableCard
          title="Comparative features"
          headers={["Feature", "DNA", "RNA"]}
          rows={COMPARISON_ROWS}
        />
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>Why is DNA more stable than RNA?</div>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          {STABILITY_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-border bg-card p-3.5"
            >
              <p className="text-sm font-bold tracking-tight text-foreground">
                {card.title}
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
                {card.lines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className={EYEBROW}>Key conclusion</div>
        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-foreground">
          {CONCLUSIONS.map((item) => (
            <li key={item.label} className="flex items-start gap-2">
              <span
                className={`shrink-0 rounded-md border px-1.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] ${TONE_CLASSES[item.tone]}`}
              >
                {item.label}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
