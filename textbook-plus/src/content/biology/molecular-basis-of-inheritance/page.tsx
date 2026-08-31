import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { Timeline } from "@/components/content/process/Timeline";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";

export default function MolecularBasisOfInheritanceChapter() {
  return (
    <>
      <h2 id="h-5-1">5.1 The DNA</h2>
      <div className="my-4 rounded-xl border border-border/60 bg-card p-3">
        <div className="flex flex-col items-center gap-0">
          <div className="rounded-lg border border-border/60 bg-muted/30 px-4 py-2.5 text-center">
            <p className="text-sm font-semibold leading-none">Nucleic Acids</p>
            <p className="text-[11px] text-muted-foreground">— polymers of nucleotides</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-3 bg-border/60" />
            <div className="relative w-[280px] sm:w-[360px] h-px bg-border/60">
              <div className="absolute left-[25%] -top-0 w-px h-3 bg-border/60" style={{ left: "25%" }} />
              <div className="absolute right-[25%] -top-0 w-px h-3 bg-border/60" style={{ right: "25%" }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full max-w-[560px] mt-0">
            <div className="rounded-lg border border-blue-500/20 bg-blue-500/[0.06] px-3 py-2.5">
              <p className="text-xs font-semibold text-blue-900 dark:text-blue-100">DNA</p>
              <p className="text-[11px] font-medium text-blue-800/80 dark:text-blue-200/80 -mt-0.5">Deoxyribonucleic acid</p>
              <p className="text-xs text-muted-foreground mt-1">Genetic material for most organisms.</p>
            </div>
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.06] px-3 py-2.5">
              <p className="text-xs font-semibold text-emerald-900 dark:text-emerald-100">RNA</p>
              <p className="text-[11px] font-medium text-emerald-800/80 dark:text-emerald-200/80 -mt-0.5">Ribonucleic acid</p>
              <p className="text-xs text-muted-foreground mt-1">Genetic material for some viruses.</p>
              <ul className="list-disc pl-4 text-[11px] text-muted-foreground mt-1.5 space-y-0.5">
                <li>Messenger</li>
                <li>Adapter</li>
                <li>Structural role</li>
                <li>Catalytic role</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Callout type="important">
        DNA is a <Highlight color="yellow">long polymer of deoxyribonucleotides</Highlight>.
        Length is defined as number of nucleotides / base pairs (bp) — a characteristic of the organism.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>div]:my-0">
        <MetricCard label="φ ×174 bacteriophage" value="5386" unit="nucleotides" description="Single-stranded DNA phage — smallest in the list." />
        <MetricCard label="λ bacteriophage" value="48,502" unit="bp" description="Double-stranded DNA phage." />
        <MetricCard label="E. coli" value="4.6 × 10⁶" unit="bp" description="Bacterial genome — completes replication in 18 min." />
        <MetricCard label="Human (haploid)" value="3.3 × 10⁹" unit="bp" description="Diploid content 6.6 × 10⁹ bp → 2.2 m of DNA per cell." />
      </div>

      <h3 id="h-5-1-1">5.1.1 Structure of Polynucleotide Chain</h3>
      <p>A nucleotide consists of three main components:</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li><strong>Pentose Sugar</strong></li>
        <li><strong>Nitrogenous Base</strong></li>
        <li><strong>Phosphate Group</strong></li>
      </ol>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">1. Pentose Sugar</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Formed of 5 carbons (<strong>C<sub>5</sub></strong>).</li>
        <li><strong>RNA:</strong> Ribose (<strong>C<sub>5</sub>H<sub>10</sub>O<sub>5</sub></strong>)</li>
        <li><strong>DNA:</strong> Deoxyribose (<strong>C<sub>5</sub>H<sub>10</sub>O<sub>4</sub></strong>)</li>
      </ul>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/The_difference_between_ribose_and_deoxyribose.png" alt="Ribose vs Deoxyribose — difference at 2' carbon: –OH vs –H" className="w-full h-auto rounded-lg object-contain max-h-[420px] mx-auto bg-white" loading="lazy" />
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Ribose (RNA, C<sub>5</sub>H<sub>10</sub>O<sub>5</sub>) vs Deoxyribose (DNA, C<sub>5</sub>H<sub>10</sub>O<sub>4</sub>) — difference at 2&apos; carbon: –OH vs –H. Carbon numbering 1&apos;–5&apos;.</figcaption>
      </figure>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">2. Nitrogenous Bases</h4>
      <p>Classified into two major types:</p>
      <Comparison
        columns={[
          {
            title: "Purines (double ring)",
            children: (
              <ul>
                <li>Ring positions: <strong>1, 3, 7, 9</strong></li>
                <li>Adenine (<strong>A</strong>)</li>
                <li>Guanine (<strong>G</strong>)</li>
              </ul>
            ),
          },
          {
            title: "Pyrimidines (single ring)",
            children: (
              <ul>
                <li>Ring positions: <strong>1, 3</strong></li>
                <li>Cytosine (<strong>C</strong>)</li>
                <li>Thymine (<strong>T</strong>) — in DNA</li>
                <li>Uracil (<strong>U</strong>) — in RNA</li>
              </ul>
            ),
          },
        ]}
      />
      <p className="text-sm mt-3">
        <strong>DNA:</strong> Adenine (A), Guanine (G), Thymine (T), Cytosine (C)<br />
        <strong>RNA:</strong> Adenine (A), Guanine (G), Uracil (U), Cytosine (C)
      </p>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Nucleoside Formation</h4>
      <p>
        A nucleoside is formed by the combination of a <strong>Sugar + Nitrogenous Base</strong> linked via an <Highlight color="yellow">N-Glycosidic bond</Highlight> at 1&apos; C.
      </p>
      <TableCard
        headers={["Nitrogenous Base", "RNA Nucleoside", "DNA Nucleoside"]}
        rows={[
          { cells: ["Adenine", "Adenosine", "Deoxyadenosine"] },
          { cells: ["Guanine", "Guanosine", "Deoxyguanosine"] },
          { cells: ["Cytosine", "Cytidine", "Deoxycytidine"] },
          { cells: ["Thymine", "—", "Deoxythymidine"] },
          { cells: ["Uracil", "Uridine", "—"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">3. Phosphate Group (H<sub>3</sub>PO<sub>4</sub>)</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Linked via a <Highlight color="blue">phosphoester bond</Highlight> to the sugar at 5&apos; C.</li>
        <li>
          <strong>Nucleotide Definition:</strong> <Highlight color="yellow">Nucleotide = Sugar + Nitrogenous Base + Phosphate = Nucleoside + Phosphate</Highlight>
        </li>
      </ul>
      <TableCard
        caption="Nucleotide / Nucleic acid nomenclature"
        headers={["Type", "Nucleotides (Phosphate + Sugar + Base)"]}
        rows={[
          { cells: ["RNA Nucleotides (Ribonucleotides)", "Adenylic acid (A), Guanylic acid (G), Cytidylic acid (C), Uridylic acid (U)"] },
          { cells: ["DNA Nucleotides (Deoxyribonucleotides)", "Deoxyadenylic acid (A), Deoxyguanylic acid (G), Deoxycytidylic acid (C), Deoxythymidylic acid (T)"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Polynucleotide Chain Backbone</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Nucleotides are linked together through <Highlight color="blue">phosphodiester bonds</Highlight> (3&apos;–5&apos;) forming a dinucleotide and subsequently a polynucleotide chain.</li>
        <li>The backbone consists of alternating <strong>sugar and phosphate</strong> residues, with nitrogenous bases projecting outward from the sugar-phosphate backbone.</li>
        <li>
          <strong>Directionality:</strong> Free phosphate moiety at the 5&apos; carbon end (<strong>5&apos; → P</strong>) and free hydroxyl group at the 3&apos; carbon end (<strong>3&apos; → OH</strong>).
        </li>
      </ul>
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <img src="/images/biology/molecular-basis-of-inheritance/polynucleotide-chain.png" alt="A schematic illustration of a polynucleotide chain backbone showing alternating pentose sugar pentagons and phosphate circles connected by phosphodiester bonds, oriented vertically with a 5-prime phosphate end at the top and a 3-prime hydroxyl group at the bottom, with nitrogenous bases extending to the right from each sugar unit." className="w-full h-auto rounded-lg object-contain max-h-[520px] mx-auto bg-white" loading="lazy" />
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Figure 5.1 — Polynucleotide chain: alternating sugar (pentagon) — phosphate (P) via 3&apos;–5&apos; phosphodiester bonds; 5&apos; phosphate (top) → 3&apos; OH (bottom); bases to the right.</figcaption>
      </figure>
      <Callout type="note" title="Polarity — quick recap">
        Polymer has <Highlight color="yellow">5&apos; end</Highlight> (free phosphate at 5&apos; sugar) and <Highlight color="green">3&apos; end</Highlight> (free –OH at 3&apos; sugar). Backbone = sugar-phosphate; bases project from it. Same convention defines Template (3&apos;→5&apos;) vs Coding (5&apos;→3&apos;) later in Transcription.
      </Callout>
      <Callout type="note" title="DNA Double Helix – History">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>1869 – Friedrich Miescher</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Identified &ldquo;Nuclein&rdquo; — an acidic substance in nucleus</li>
              <li>Progress delayed — technical limitations in isolating long polymer intact</li>
            </ul>
          </li>
          <li>
            <strong>1953 – Watson & Crick</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Proposed <Highlight color="yellow">DNA double helical model</Highlight></li>
              <li>Based on X-ray diffraction data — <strong>Maurice Wilkins & Rosalind Franklin</strong></li>
            </ul>
          </li>
          <li>
            <strong>Hallmark</strong> — <Highlight color="yellow">base pairing</Highlight>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Purine opposite pyrimidine</li>
              <li>Gives uniform distance between strands</li>
            </ul>
          </li>
        </ul>
      </Callout>
      <Callout type="important" title="Chargaff's Rule — Erwin Chargaff">
        <p>Applicable only to <strong>double-stranded DNA</strong>. In a given DNA molecule, total purines = total pyrimidines:</p>
        <FormulaBlock latex={String.raw`\text{Purines} = \text{Pyrimidines}`} />
        <FormulaBlock latex={String.raw`A + G = T + C`} />
        <FormulaBlock latex={String.raw`\frac{A + G}{T + C} = 1`} important />
      </Callout>
      <Expandable title="Example: A = 22% → find T, G, C (Chargaff)">
        <p>
          <strong>Problem:</strong> In a DNA sample, Adenine (A) is 22%. Find Thymine (T), Guanine (G), and Cytosine (C).
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Since <Formula>{String.raw`A = T`}</Formula>, then <Formula>{String.raw`T = 22\%`}</Formula>.
          </li>
          <li>
            <Formula>{String.raw`A + T = 44\%`}</Formula>.
          </li>
          <li>
            Remaining <Formula>{String.raw`G + C = 100\% - 44\% = 56\%`}</Formula>.
          </li>
          <li>
            Since <Formula>{String.raw`G = C`}</Formula>, then <Formula>{String.raw`G = 56\%/2 = 28\%`}</Formula> and <Formula>{String.raw`C = 28\%`}</Formula>.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Final:</strong> <Highlight color="yellow">A = 22%, T = 22%, G = 28%, C = 28%</Highlight>.
        </p>
      </Expandable>
      <p>Because strands are complementary, knowing one strand predicts the other. Each parental strand as template → two daughter DNAs identical to parental.</p>
      <ConceptCard title="Salient Features of DNA Double Helix (Figure 5.2, 5.3)">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>1. Composition & Backbone</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Composed of <strong>2 polynucleotide chains</strong></li>
              <li><strong>Sugar-phosphate</strong> forms outer backbone</li>
              <li><strong>Bases project inside</strong></li>
            </ul>
          </li>
          <li>
            <strong>2. Antiparallel Polarity</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Two chains run opposite</li>
              <li>One <strong>5&apos; → 3&apos;</strong>, the other <strong>3&apos; → 5&apos;</strong></li>
            </ul>
          </li>
          <li>
            <strong>3. Hydrogen Bonding</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Held together by <strong>H-bonds</strong> between complementary pairs</li>
              <li><strong>A = T</strong> via <strong>2 H-bonds</strong></li>
              <li><strong>G ≡ C</strong> via <strong>3 H-bonds</strong></li>
            </ul>
          </li>
          <li>
            <strong>4. Coiling & Pitch</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Coiled in <strong>right-handed</strong> fashion</li>
              <li><strong>Pitch</strong> (one turn) = <strong>3.4 nm</strong> — contains <strong>10 bp</strong></li>
              <li>Distance between 2 consecutive bp = <strong>0.34 nm</strong></li>
            </ul>
          </li>
          <li>
            <strong>5. Stability</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
              <li>Base pairs <strong>stack</strong> one over the other</li>
              <li>In addition to H-bonds, confers stability</li>
            </ul>
          </li>
        </ul>
      </ConceptCard>
      <div className="grid gap-4 sm:grid-cols-2 my-6">
        <figure className="rounded-xl border border-border/60 bg-card p-3">
          <img src="/images/biology/molecular-basis-of-inheritance/ds-polynucleotide-chain.png" alt="Double stranded polynucleotide chain — two anti-parallel strands with complementary base pairing, purine opposite pyrimidine" className="w-full h-auto rounded-lg object-contain max-h-[320px] mx-auto bg-white" loading="lazy" />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">Figure 5.2 — Double stranded polynucleotide chain</figcaption>
        </figure>
        <figure className="rounded-xl border border-border/60 bg-card p-3">
          <img src="/images/biology/molecular-basis-of-inheritance/dna-double-helix.png" alt="A detailed structural diagram of antiparallel double-stranded DNA showing a 5&apos; to 3&apos; strand paired with a 3&apos; to 5&apos; strand. Sugar-phosphate backbones form the outer structural support, with complementary nitrogenous bases extending inwards—Adenine paired to Thymine via double hydrogen bonds, and Guanine paired to Cytosine via triple hydrogen bonds." className="w-full h-auto rounded-lg object-contain max-h-[320px] mx-auto bg-white" loading="lazy" />
          <figcaption className="text-xs text-muted-foreground mt-2 text-center">Figure 5.3 — DNA double helix (pitch 3.4 nm, 10 bp/turn)</figcaption>
        </figure>
      </div>
      <Expandable title="Why does purine–pyrimidine pairing keep distance constant?">
        <p>Purine (double ring) opposite pyrimidine (single ring) gives roughly constant width. Purine–purine would be too wide, pyrimidine–pyrimidine too narrow — Chargaff’s pairing solves this.</p>
      </Expandable>
      <KeyPoint title="Central Dogma — Crick">
        Proposed by <Highlight color="yellow">Francis Crick</Highlight> — explains the flow of genetic information.
      </KeyPoint>
      <FormulaBlock latex={String.raw`\text{DNA} \xrightarrow{\text{Replication}} \text{DNA} \xrightarrow{\text{Transcription}} \text{mRNA} \xrightarrow{\text{Translation}} \text{Protein}`} important />
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <img src="/images/biology/molecular-basis-of-inheritance/central-dogma.png" alt="A flow diagram representing the Central Dogma of Molecular Biology by Francis Crick, depicting a circular loop on DNA for replication, a forward arrow to mRNA labeled transcription, and a forward arrow to protein labeled translation." className="w-full h-auto rounded-lg object-contain max-h-[360px] mx-auto bg-white" loading="lazy" />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">Central Dogma — DNA → (Replication) → DNA → (Transcription) → mRNA → (Translation) → Protein</figcaption>
      </figure>
      <Callout type="note" title="Reverse Transcription">
        <p>Information flow from <Highlight color="yellow">RNA to DNA</Highlight>:</p>
        <FormulaBlock latex={String.raw`\text{RNA} \xrightarrow{\text{Reverse Transcription}} \text{DNA}`} />
        <p className="text-sm text-muted-foreground">
          <strong>Example:</strong> HIV (retrovirus).
        </p>
      </Callout>

      <h3 id="h-5-1-2">5.1.2 Packaging of DNA Helix</h3>
      <Callout type="note" title="Calculation of DNA Length">
        <p>
          <strong>Formula:</strong> <Formula>{String.raw`\text{Length of DNA} = \text{Total number of base pairs (bp)} \times \text{Distance between 2 bp}`}</Formula>
        </p>
        <p className="mt-2">
          <strong>Human DNA (2n):</strong>
        </p>
        <FormulaBlock latex={String.raw`\text{Length} = 6.6 \times 10^{9}\,\text{bp} \times 0.34\,\text{nm}`} />
        <FormulaBlock latex={String.raw`\text{Length} = 6.6 \times 10^{9} \times 0.34 \times 10^{-9}\,\text{m}`} />
        <FormulaBlock latex={String.raw`\text{Length} = 2.2\,\text{meters}`} important />
      </Callout>
      <MetricCard label="DNA in a mammalian cell" value="2.2 metres" unit="6.6 × 10⁹ bp × 0.34 nm/bp" trend="up" description="Far larger than nucleus (~10⁻⁶ m). Must be packaged." />
      <Expandable title="Do the calculation: E. coli DNA 1.36 mm → how many bp?">
        <p>1.36 mm = 1.36 × 10⁻³ m. Divide by 0.34 × 10⁻⁹ m/bp → <strong>4 × 10⁶ bp</strong> (≈ 4.6 × 10⁶ bp with precise constants).</p>
      </Expandable>
      <ProcessCard
        steps={[
          { label: "1. Prokaryotes — Nucleoid", description: "Negatively charged DNA wrapped around positively charged proteins — held in large loops in region called nucleoid (no defined nucleus)." },
          { label: "2. Eukaryotes — Histone octamer", description: "Positively charged basic proteins rich in Lysine (Lys) & Arginine (Arg) — Lys & Arg carry positive charges. Eight molecules form histone octamer." },
          { label: "Nucleosome — H1 stabilised", description: "Negatively charged DNA wraps around histone octamer core, stabilised by H1 histone (Figure 5.4a). ~200 bp per nucleosome — repeating unit of chromatin." },
          { label: "Beads-on-string → Chromatin fibre → Chromosome", description: "Nucleosomes give beads-on-string appearance under EM (Figure 5.4b). Further coiled with NHC proteins into chromatin fibres. Hierarchy: DNA → Nucleosome → Chromatin fibre → Chromosome (metaphase condensed)." },
        ]}
      />
      <figure className="my-6 rounded-xl border border-border/60 bg-card p-4">
        <img src="/images/biology/molecular-basis-of-inheritance/figure-5.4a-nucleosome.png" alt="A structural model of a nucleosome core showing a spherical octamer composed of 8 histone proteins wrapped by a double-stranded DNA thread, secured at the entry/exit point by an H1 histone protein unit." className="w-full h-auto rounded-lg object-contain max-h-[420px] mx-auto bg-white" loading="lazy" />
        <figcaption className="text-xs text-muted-foreground mt-3 text-center">Figure 5.4a — Nucleosome core: 8 histones wrapped by DNA, secured by H1</figcaption>
      </figure>
      <FormulaBlock latex={String.raw`\text{DNA} \rightarrow \text{Nucleosome} \rightarrow \text{Chromatin fibre} \rightarrow \text{Chromosome}`} />
      <TableCard
        caption="Types of Chromatin"
        headers={["Feature", "Heterochromatin", "Euchromatin"]}
        rows={[
          { cells: ["Arrangement", "Densely arranged", "Loosely arranged"] },
          { cells: ["Staining", "Stains darker", "Stains lighter"] },
          { cells: ["Activity", "Transcriptionally inactive", "Transcriptionally active"] },
        ]}
      />
      <Expandable title="How many nucleosomes in a mammalian cell?">
        <p>Diploid DNA 6.6 × 10⁹ bp ÷ 200 bp/nucleosome ≈ <strong>3.3 × 10⁷ nucleosomes</strong>. Tightly coiled at metaphase into 46 chromosomes via NHC proteins.</p>
      </Expandable>

      <h2 id="h-5-2">5.2 The Search for Genetic Material</h2>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          <strong>1869:</strong> Identification of Nuclein (Miescher).
        </li>
        <li>
          <strong>1926:</strong> Core question raised — chemical nature of genetic material?
        </li>
      </ul>
      <p className="text-sm text-muted-foreground">Meischer’s nuclein and Mendel’s factors were simultaneous, but “DNA is the genetic material” took decades. By 1926 chromosomes were narrowed as carriers — but which molecule?</p>

      <h3 id="h-5-2-transforming">1. Transforming Principle — Frederick Griffith (1928)</h3>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          <strong>Organism Used:</strong> <em>Streptococcus pneumoniae</em>
        </li>
        <li>
          <strong>Bacterial Strains:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>
              <strong>S strain (Smooth):</strong> mucus polysaccharide coat; virulent
            </li>
            <li>
              <strong>R strain (Rough):</strong> lacks coat; non-virulent
            </li>
          </ul>
        </li>
      </ul>
      <h4 className="text-sm font-semibold mt-4">Experimental Procedure & Results:</h4>
      <TableCard
        headers={["Treatment", "Result"]}
        rows={[
          { cells: ["S strain → Injected into Mice", "Mice Died"] },
          { cells: ["R strain → Injected into Mice", "Mice Lived"] },
          { cells: ["Heat-Killed S strain → Injected into Mice", "Mice Lived"] },
          { cells: ["Heat-Killed S + Live R → Injected into Mice", "Mice Died (Live S recovered)"] },
        ]}
      />
      <KeyPoint title="Griffith’s conclusion">
        Some <Highlight color="yellow">transforming principle</Highlight> from heat-killed S enabled R to make a smooth coat and become virulent — transfer of genetic material. Biochemical nature not defined yet.
      </KeyPoint>

      <h3 id="h-5-2-avery">2. Biochemical Characterisation — Avery, MacLeod, McCarty (1933–44)</h3>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          <strong>Researchers:</strong> Oswald Avery, Colin MacLeod, Maclyn McCarty
        </li>
        <li>
          <strong>Objective:</strong> Determine chemical nature of transforming principle from Griffith’s experiment.
        </li>
      </ul>
      <h4 className="text-sm font-semibold mt-4">Experimental Setup & Findings:</h4>
      <p className="text-sm">Purified biomolecules (RNA, Protein, DNA) from Heat-Killed S strain and added them to Live R strain:</p>
      <TableCard
        headers={["Enzyme Added", "Effect", "Conclusion"]}
        rows={[
          { cells: ["Protease (destroys protein)", "Transformation still occurs (R → S)", "Protein is NOT genetic material"] },
          { cells: ["RNase (destroys RNA)", "Transformation still occurs (R → S)", "RNA is NOT genetic material"] },
          { cells: ["DNase (destroys DNA)", "Transformation inhibited (remains R)", "DNA IS the transforming principle"] },
        ]}
      />
      <Expandable title="DNAs vs DNase — what’s the difference?">
        <p>
          <strong>DNA</strong> is the polymer (genetic material). <strong>DNase</strong> is the enzyme that digests DNA. Avery used DNase to prove DNA’s role.
        </p>
      </Expandable>

      <h3 id="h-5-2-1">3. Proof That DNA is the Genetic Material — Hershey & Chase (1952)</h3>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          <strong>Researchers:</strong> Alfred Hershey and Martha Chase
        </li>
        <li>
          <strong>Experimental System:</strong> Bacteriophages (viruses that infect bacteria) and <em>E. coli</em>
        </li>
        <li>
          <strong>Radioactive Isotope Labeling:</strong>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-muted-foreground">
            <li>
              <strong>³⁵S (Radioactive Sulfur):</strong> Labels viral <strong>protein coat</strong> (Sulfur in protein, absent in DNA)
            </li>
            <li>
              <strong>³²P (Radioactive Phosphorus):</strong> Labels viral <strong>DNA</strong> (Phosphorus in DNA, absent in protein)
            </li>
          </ul>
        </li>
      </ul>
      <h4 className="text-sm font-semibold mt-4">Experimental Steps:</h4>
      <Stepper
        steps={[
          { label: "Infection", description: "Radiolabeled phages allowed to infect E. coli." },
          { label: "Blending", description: "Agitation in a blender to separate viral coats from bacterial cells." },
          { label: "Centrifugation", description: "Separation of lighter viral particles (supernatant) from heavier bacterial cells (pellet)." },
        ]}
      />
      <figure className="my-4 rounded-xl border border-border/60 bg-card p-3">
        <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Hershey_Chase_experiment.png" alt="Figure 5.5 The Hershey-Chase experiment — 35S protein vs 32P DNA labeling, blender and centrifuge separation" className="w-full h-auto rounded-lg object-contain max-h-[320px] mx-auto bg-white" loading="lazy" />
        <figcaption className="text-xs text-muted-foreground mt-2 text-center">Figure 5.5 — Hershey–Chase experiment (³⁵S protein vs ³²P DNA)</figcaption>
      </figure>
      <KeyPoint title="Unequivocal proof">
        <Highlight color="yellow">DNA is the genetic material</Highlight> passed from virus to bacteria (Figure 5.5).
      </KeyPoint>
      <h3 id="h-5-2-2">5.2.2 Properties of Genetic Material (DNA vs RNA)</h3>
      <p>In some viruses (TMV, QB bacteriophage) RNA is the genetic material. Why is DNA predominant while RNA is messenger/adapter? To function as genetic material, a molecule must fulfill four requirements:</p>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        <li>
          <strong>1. Replication:</strong> It should be able to generate its replica.
        </li>
        <li>
          <strong>2. Stability:</strong> It should be structurally and chemically stable.
        </li>
        <li>
          <strong>3. Mutation/Evolution:</strong> It should undergo slow changes that lead to evolution.
        </li>
        <li>
          <strong>4. Expression:</strong> It should be able to express itself in the form of Mendelian characters.
        </li>
      </ul>
      <TableCard
        caption="Four criteria for a molecule to act as genetic material"
        headers={["Criterion", "DNA", "RNA", "Protein"]}
        rows={[
          { cells: ["1. Replication", "Yes — complementarity directs duplication", "Yes — can duplicate", "Cannot direct its own duplication"] },
          { cells: ["2. Stability", "High — less reactive, double-stranded, thymine + repair", "Low — 2'-OH reactive, catalytic, labile", "Varies"] },
          { cells: ["3. Mutation / Evolution", "Mutates but slower (stable)", "Mutates faster (unstable) → RNA viruses evolve faster", "—"] },
          { cells: ["4. Expression", "Via RNA → protein (needs RNA for expression)", "Directly codes for protein", "End product"] },
        ]}
      />
      <TableCard
        caption="DNA vs RNA"
        headers={["Feature", "DNA (Deoxyribonucleic Acid)", "RNA (Ribonucleic Acid)"]}
        rows={[
          { cells: ["Structure", "Double-stranded", "Single-stranded"] },
          { cells: ["Sugar reactive group", "2'-H group (non-reactive)", "2'-OH group (highly reactive, labile)"] },
          { cells: ["Catalytic role", "No role as catalyst", "Can act as catalyst"] },
          { cells: ["Base stability", "Contains Thymine (confers higher stability)", "Contains Uracil (less stable)"] },
          { cells: ["Primary function", "Storing genetic information", "Transferring genetic information"] },
        ]}
      />
      <Callout type="note">
        <strong>Why DNA is better for storage:</strong> 2&apos;-OH in every RNA nucleotide makes RNA labile; RNA is catalytic/reactive; DNA is less reactive, double-stranded, with repair. Thymine (vs uracil) adds stability.
      </Callout>
      <KeyPoint title="Which for what?">
        <Highlight color="yellow">DNA</Highlight> for <strong>storage</strong>, <Highlight color="green">RNA</Highlight> for <strong>transmission</strong>. RNA is more reactive and mutates faster — hence RNA-genome viruses have short life and evolve fast.
      </KeyPoint>

      <h2 id="h-5-3">5.3 RNA World</h2>
      <Callout type="important">
        <Highlight color="yellow">RNA was the first genetic material</Highlight>. Essential life processes (metabolism, translation, splicing) evolved around RNA.
      </Callout>
      <ul>
        <li>RNA acted as <strong>genetic material + catalyst</strong> (important biochemical reactions catalysed by RNA, not protein enzymes).</li>
        <li>As catalyst, RNA was <strong>reactive and unstable</strong> → DNA evolved from RNA via chemical modifications for stability.</li>
        <li>Double-stranded + complementary strand + <Highlight color="green">repair process</Highlight> further resists changes.</li>
      </ul>

      <h2 id="h-5-4">5.4 Replication</h2>
      <h3 id="h-5-4-semiconservative">Semiconservative Scheme</h3>
      <Callout type="note" title="Watson–Crick 1953">
        “It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible <strong>copying mechanism</strong>.”
        Each strand separates and acts as template for new complementary strand → after replication each DNA has <Highlight color="yellow">one parental + one new strand</Highlight> → <strong>semiconservative</strong> (Figure 5.6).
      </Callout>
      <p className="mt-4">
        <strong>Mechanism:</strong> DNA replicates in a <strong>semiconservative manner</strong>. The original DNA strands separate, with each original strand acting as a <strong>template strand</strong> to synthesize a new <strong>complementary strand</strong>.
      </p>

      <h3 id="h-5-4-1">5.4.1 The Experimental Proof — Meselson & Stahl (1958)</h3>
      <p><strong>Researchers:</strong> Matthew Meselson and Franklin Stahl.</p>
      <p><strong>Organism Used:</strong> <em>E. coli</em>.</p>
      <p><strong>Isotope & Density Gradient Technique:</strong> Used heavy nitrogen isotope (<span className="font-mono">¹⁵N</span> in ammonium chloride, <span className="font-mono">¹⁵NH₄Cl</span>) and standard nitrogen isotope (<span className="font-mono">¹⁴N</span> in <span className="font-mono">¹⁴NH₄Cl</span>), separated using Cesium Chloride (<span className="font-mono">CsCl</span>) density gradient centrifugation.</p>
      <p><strong>Generation Timeline & Results:</strong></p>
      <ul className="list-disc pl-5 space-y-1 mt-2">
        <li><strong>0 min (Initial):</strong> Both strands contain <span className="font-mono">¹⁵N</span> (<span className="font-mono">¹⁵N¹⁵N</span>) → <strong>Heavy density</strong> band.</li>
        <li><strong>20 min (1st Generation):</strong> All DNA molecules contain one <span className="font-mono">¹⁵N</span> strand and one <span className="font-mono">¹⁴N</span> strand (<span className="font-mono">¹⁵N¹⁴N</span>) → <strong>Hybrid / Intermediate density</strong> band.</li>
        <li><strong>40 min (2nd Generation):</strong> Equal proportion of hybrid (<span className="font-mono">¹⁵N¹⁴N</span>) and light (<span className="font-mono">¹⁴N¹⁴N</span>) DNA → <strong>Intermediate density</strong> and <strong>Light density</strong> bands.</li>
        <li><strong>60 min / 80 min (Subsequent Generations):</strong> Higher proportion of light density DNA (<span className="font-mono">¹⁴N¹⁴N</span>) relative to hybrid DNA.</li>
      </ul>
      <Stepper
        steps={[
          { label: "Grow in ¹⁵N", description: "E. coli in ¹⁵NH₄Cl (heavy N) for many generations → heavy DNA (¹⁵N). Distinguish by CsCl density gradient (¹⁵N not radioactive, separated by density only)." },
          { label: "Shift to ¹⁴N", description: "Transfer to normal ¹⁴NH₄Cl. Sample at 20 min (1 gen), 40 min (2 gens), extract dsDNA, centrifuge on CsCl." },
          { label: "Results", description: "After 1 gen (20 min): single hybrid/intermediate density band. After 2 gens (40 min): equal hybrid + light bands. After 80 min → predict 6/8 light + 2/8 hybrid." },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "One generation (20 min)",
            children: <p>All DNA <Highlight color="yellow">hybrid (¹⁵N/¹⁴N)</Highlight> density</p>,
          },
          {
            title: "Two generations (40 min)",
            children: <p>50% hybrid + 50% <Highlight color="green">light (¹⁴N/¹⁴N)</Highlight></p>,
          },
        ]}
      />
      <Expandable title="If grown for 80 min → proportions?">
        <p>80 min = 4 generations (dividing every 20 min). Start 2 strands heavy. After n gens: 2 hybrid + (2ⁿ – 2) light. For 80 min (4 gens, 16 strands): <strong>2 hybrid : 14 light = 1:7</strong>. Tellingly, Taylor et al. (1958) with radioactive thymidine on <em>Vicia faba</em> chromosomes showed same semiconservative replication in eukaryotes.</p>
      </Expandable>
      <Callout type="note" title="Centrifugation note">
        Can you recall centrifugal force? Higher mass/density sediments faster → heavy (¹⁵N) at bottom, light (¹⁴N) at top, hybrid in middle on CsCl gradient (Figure 5.7).
      </Callout>

      <h3 id="h-5-4-taylor">Taylor and Colleagues Experiment (1958)</h3>
      <p><strong>Researchers:</strong> Taylor and colleagues.</p>
      <p><strong>Organism Used:</strong> Plant – <em>Vicia faba</em> (Faba bean).</p>
      <p><strong>Medium Used:</strong> <strong>Radioactive Thymidine</strong>.</p>
      <Callout type="note">
        <strong>Conclusion:</strong> Proved that DNA replication in chromosomes also proceeds in a <strong>semiconservative manner</strong> in eukaryotes.
      </Callout>

      <h3 id="h-5-4-2">5.4.2 DNA Replication Process</h3>
      <p><strong>Key Characteristics:</strong></p>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Mode of Replication:</strong> Proceeds in a <strong>semiconservative manner</strong>.</li>
        <li><strong>Main Enzyme:</strong> <strong>DNA-dependent DNA polymerase</strong>.</li>
        <li><strong>Replication Rate in <em>E. coli</em>:</strong> Total genome size: <span className="font-mono">4.6 × 10⁶ bp</span>. Rate of polymerization: <strong>2000 bp/sec</strong>.</li>
        <li><strong>Energy Source:</strong> <strong>Deoxynucleoside triphosphates</strong> act as both substrates and provide energy for polymerization.</li>
      </ul>

      <h4>Mechanism of Replication</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Origin of Replication:</strong> Specific site where replication initiates.</li>
        <li><strong>Helicase:</strong> Unwinds the double-stranded DNA to form the <strong>Replication Fork</strong>.</li>
        <li><strong>Direction of Synthesis:</strong> DNA polymerase synthesizes new strands exclusively in the <strong>5' → 3' direction</strong>.</li>
      </ul>

      <h5>Strand Synthesis Types:</h5>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Leading Strand (Continuous Synthesis):</strong> Formed on the <strong>3' → 5' template strand</strong>. The new strand is synthesized continuously in the 5' → 3' direction.
        </li>
        <li>
          <strong>Lagging Strand (Discontinuous Synthesis):</strong> Formed on the <strong>5' → 3' template strand</strong>. The new strand is synthesized discontinuously as small fragments (Okazaki fragments) which are later joined by <strong>DNA ligase</strong>.
        </li>
      </ul>

      <Callout type="note" title="Centrifugation note">
        Can you recall centrifugal force? Higher mass/density sediments faster → heavy (¹⁵N) at bottom, light (¹⁴N) at top, hybrid in middle on CsCl gradient (Figure 5.7).
      </Callout>

      <h3 id="h-5-4-3">5.4.3 The Machinery and the Enzymes</h3>
      <FactCard
        title="Main enzyme"
        definition="DNA-dependent DNA polymerase — uses DNA template to polymerise deoxynucleotides. E. coli 4.6×10⁶ bp vs human diploid 6.6×10⁹ bp. E. coli finishes in 18 min → ~2000 bp/s. Must be fast and highly accurate; errors → mutations."
        icon="⚙️"
      />
      <ul>
        <li><strong>Energy:</strong> Deoxyribonucleoside triphosphates act as substrates <em>and</em> energy source (two terminal high-energy phosphates like ATP).</li>
        <li><strong>Replication fork:</strong> Cannot separate whole long DNA at once — replication within small opening called <Highlight color="blue">replication fork</Highlight>.</li>
        <li>Polymerase catalyses only <Highlight color="yellow">5&apos;→3&apos;</Highlight> → one template (3&apos;→5&apos;) → <strong>continuous</strong> replication; the other (5&apos;→3&apos;) → <strong>discontinuous</strong> (Okazaki) fragments later joined by <strong>DNA ligase</strong> (Figure 5.8).</li>
        <li>Cannot initiate on its own; needs <strong>origin of replication</strong> — definite region in E. coli DNA. Vectors need origin to propagate in recombinant DNA procedures.</li>
      </ul>
      <Callout type="note">
        In eukaryotes replication at <Highlight color="yellow">S-phase</Highlight>, tightly coordinated with cell cycle. Failure after replication without division → <strong>polyploidy</strong> (chromosomal anomaly). Detailed origin structure — higher classes.
      </Callout>
      <MistakeCard
        mistake="Thinking both strands replicate continuously."
        correction="Remember: polymerase only 5'→3', so one strand must be discontinuous. Template 3'→5' = continuous; Template 5'→3' = discontinuous + ligase."
      />

            <h2 id="h-5-5">5.5 Transcription</h2>
      <Callout type="important">
        Copying genetic information from <Highlight color="yellow">one strand of DNA into RNA</Highlight>. Principle of complementarity — but A pairs with <strong>U</strong> (not T). Unlike replication (whole DNA duplicated), only <strong>one segment + one strand</strong> is copied.
      </Callout>
      <Expandable title="Why aren’t both strands copied?">
        <ul>
          <li>If both strands as templates → two different RNAs (complementary ≠ identical) → code for two different proteins from one segment → complicates information transfer.</li>
          <li>Two complementary RNAs made simultaneously would form dsRNA → cannot be translated → transcription becomes futile.</li>
        </ul>
      </Expandable>

      <h3 id="h-5-5-1">5.5.1 Transcription Unit</h3>
      <p>A transcription unit in DNA is defined by three regions:</p>
      <ConceptCard title="Transcription unit — three parts">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Promoter:</strong> Towards 5&apos; end (upstream) of structural gene (w.r.t. coding strand). Binding site for RNA polymerase; defines template vs coding strands.</li>
          <li><strong>Structural gene:</strong> Region transcribed.</li>
          <li><strong>Terminator:</strong> Towards 3&apos; end (downstream) of coding strand; defines end of transcription.</li>
        </ul>
      </ConceptCard>
      <Callout type="note" title="Template vs Coding strand — convention">
        <p>Polymerase also works 5&apos;→3&apos;, so the strand with polarity <Highlight color="yellow">3&apos;→5&apos;</Highlight> acts as <strong>template strand</strong>. The other strand (5&apos;→3&apos;), same sequence as RNA (T instead of U), is <strong>coding strand</strong> (does not code, strange name) — displaced during transcription. Reference point is coding strand. Example:</p>
        <p className="font-mono text-sm bg-muted p-2 rounded">3&apos;-ATGCATGCATGC-5&apos; Template<br />5&apos;-TACGTACGTACG-3&apos; Coding</p>
        <p className="text-sm">RNA transcribed from above template? <strong>5&apos;-UACGUACGUACG-3&apos;</strong> (complement of template, same as coding except U).</p>
        <p className="text-sm text-muted-foreground mt-2">Figure 5.9 schematic. Promoter↔terminator swap would reverse coding/template definitions. Additional regulatory sequences may lie further upstream/downstream — discussed in gene regulation.</p>
      </Callout>

            <h3 id="h-5-5-2">5.5.2 Transcription Unit and the Gene</h3>
      <Callout type="note">
        <strong>Gene</strong> = functional unit of inheritance. Difficult to define strictly as DNA sequence.
      </Callout>
      <ul>
        <li>tRNA/rRNA coding DNA also defines a <strong>gene</strong>.</li>
        <li>Define <Highlight color="yellow">cistron</Highlight> as segment coding for polypeptide → structural gene can be <strong>monocistronic</strong> (mostly eukaryotes) or <strong>polycistronic</strong> (mostly bacteria/prokaryotes).</li>
        <li>Eukaryotic monocistronic genes are <strong>split</strong>: coding <strong>exons</strong> (appear in mature RNA) interrupted by <strong>introns</strong> (intervening, removed). Split arrangement complicates gene definition.</li>
        <li>Promoter/regulatory sequences affect inheritance but don’t code → loosely called <strong>regulatory genes</strong>.</li>
      </ul>

      <h3 id="h-5-5-3">5.5.3 Types of RNA and the process of Transcription</h3>
      <TableCard
        caption="Three major RNAs in bacteria"
        headers={["RNA", "Role"]}
        rows={[
          { cells: ["mRNA (messenger)", "Provides template"] },
          { cells: ["tRNA (transfer)", "Brings amino acids, reads code"] },
          { cells: ["rRNA (ribosomal)", "Structural + catalytic during translation"] },
        ]}
      />
      <ProcessCard
        steps={[
          { label: "Bacteria — single polymerase", description: "One DNA-dependent RNA polymerase transcribes all RNAs. Binds promoter → initiation (uses NTPs as substrate, opens helix, elongates; short RNA stays bound). At terminator, nascent RNA + polymerase fall off → termination (Figure 5.10)." },
          { label: "σ and ρ factors", description: "Polymerase alone can only elongate. Associates transiently with initiation-factor σ and termination-factor ρ to alter specificity to initiate/terminate." },
          { label: "Coupled in bacteria", description: "mRNA needs no processing and transcription/translation in same compartment → translation can begin before mRNA fully transcribed — coupled." },
        ]}
      />
            <Comparison
        columns={[{
            title: "Bacteria",
            children: (
              <ul>
                <li>One polymerase for all RNAs</li>
                <li>σ/ρ factors</li>
                <li>No processing; coupled transcription-translation</li>
              </ul>
            ),
          },
          {
            title: "Eukaryotes — two complexities",
            children: (
              <ul>
                <li>3 polymerases in nucleus + organellar ones</li>
                <li>Primary transcripts have exons + introns → splicing + capping + tailing</li>
              </ul>
            ),
          },
        ]}
      />
      <FactCard
        title="Eukaryotic polymerases — division of labour"
        definition="Pol I → rRNAs (28S, 18S, 5.8S); Pol III → tRNA, 5S rRNA, snRNAs; Pol II → precursor mRNA (hnRNA)."
        icon="🧬"
      />
      <ProcessCard
        steps={[
          { label: "Splicing", description: "Introns removed, exons joined in defined order." },
          { label: "Capping", description: "Unusual nucleotide methyl guanosine triphosphate added to 5&apos; end of hnRNA." },
          { label: "Tailing", description: "Adenylate residues (200–300) added at 3&apos; end template-independently (poly-A tail)." },
          { label: "Export", description: "Fully processed hnRNA now called mRNA transported out of nucleus for translation (Figure 5.11)." },
        ]}
      />
            <KeyPoint title="Why such complexity?">
        Split genes probably ancient; introns reminiscent of antiquity; splicing represents dominance of <Highlight color="yellow">RNA world</Highlight>. RNA-dependent processes gaining importance.
      </KeyPoint>

      <h2 id="h-5-6">5.6 Genetic Code</h2>
      <p>
        Replication/transcription copy nucleic acid → nucleic acid (complementarity easy). Translation = nucleotides → amino acids — no complementarity, no theoretical mapping. Yet nucleic acid changes cause amino acid changes → genetic code proposes.
      </p>
      <Callout type="note" title="History — who cracked it">
        Physicist <strong>George Gamow</strong> argued: 4 bases code for 20 amino acids ⇒ combination. 3-nucleotide code: 4³ = 64 codons (&gt;20, bold proposition). <strong>Har Gobind Khorana</strong> chemical method for defined RNA (homopolymers/copolymers); <strong>Marshall Nirenberg</strong> cell-free protein synthesis; <strong>Severo Ochoa</strong> enzyme (polynucleotide phosphorylase) template-independent RNA synthesis → checkerboard Table 5.1.
      </Callout>
      <ConceptCard title="Salient features of genetic code">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>(i) Triplet:</strong> 61 codons code for amino acids, 3 do not → stop codons.</li>
          <li><strong>(ii) Degenerate:</strong> Some amino acids coded by &gt;1 codon.</li>
          <li><strong>(iii) No punctuation:</strong> Read contiguously, comma-free.</li>
          <li><strong>(iv) Nearly universal:</strong> UUU → Phe from bacteria to human. Exceptions: mitochondrial, some protozoans.</li>
          <li><strong>(v) AUG dual:</strong> Codes for Met and acts as initiator codon.</li>
          <li><strong>(vi) Stops:</strong> UAA, UAG, UGA are terminator codons.</li>
        </ul>
      </ConceptCard>
      <Expandable title="Predict: AUG UUU UUC UUC UUU UUU UUC → amino acids?">
        <p>Look up checkerboard: <strong>AUG (Met) – Phe – Phe – Phe – Phe – Phe – Phe</strong>. Tryptophan? Check.</p>
      </Expandable>
      <Expandable title="Reverse: Met-Phe-Phe-Phe-Phe-Phe-Phe → RNA sequence?">
        <p>Difficulty! Due to <Highlight color="yellow">degeneracy</Highlight> (Phe has UUU/UUC) and lack of punctuation, reverse prediction is not unique — many RNA sequences possible. Which two properties does this illustrate? Degenerate + non-punctuated.</p>
      </Expandable>

      <h3 id="h-5-6-1">5.6.1 Mutations and Genetic Code</h3>
      <p>Large deletions/rearrangements → loss/gain of gene/function. Point mutation example: single base pair change in beta-globin → Glu → Val → <Highlight color="pink">sickle cell anemia</Highlight>.</p>
      <Expandable title="Frameshift — RAM HAS RED CAP analogy">
        <ul>
          <li>Original: <strong>RAM HAS RED CAP</strong> (each word = codon).</li>
          <li>Insert B between HAS and RED → <strong>RAM HAS BRE DCA P</strong> (frame shifted).</li>
          <li>Insert BI → <strong>RAM HAS BIR EDC AP</strong></li>
          <li>Insert BIG → <strong>RAM HAS BIG RED CAP</strong> (3 letters → frame restored, one codon inserted).</li>
          <li>Delete R → <strong>RAM HAS EDC AP</strong>; Delete E → <strong>RAM HAS DCA P</strong>; Delete D → <strong>RAM HAS CAP</strong></li>
        </ul>
        <p>Conclusion: Insertion/deletion of <Highlight color="yellow">1 or 2 bases</Highlight> → <strong>frameshift</strong> from point onward. Insertion/deletion of <strong>3 or multiple of 3</strong> → one/multiple codons inserted/deleted, frame unaltered from that point.</p>
      </Expandable>

      <h3 id="h-5-6-2">5.6.2 tRNA– the Adapter Molecule</h3>
      <p>Francis Crick postulated an <Highlight color="yellow">adapter</Highlight> — amino acids have no code-reading speciality. tRNA, then sRNA (soluble RNA), later assigned role.</p>
      <FactCard
        title="tRNA structure"
        definition="Anticodon loop complementary to codon + amino acid acceptor end. Specific tRNA per amino acid (Figure 5.12). Initiator tRNA for initiation; no tRNAs for stop codons. Secondary clover-leaf → actual compact inverted L."
        icon="🔗"
      />

            <h2 id="h-5-7">5.7 Translation</h2>
      <p>Polymerisation of amino acids to polypeptide (Figure 5.13). Order defined by mRNA base sequence. Amino acids joined by <Highlight color="yellow">peptide bond</Highlight> — needs energy.</p>
      <ProcessCard
        steps={[
          { label: "Charging / aminoacylation", description: "Amino acids activated with ATP and linked to cognate tRNA (charging). Requires energy; two charged tRNAs close enough → peptide bond formation favoured." },
          { label: "Ribosome — factory", description: "Consists of structural RNAs + ~80 proteins. Inactive as two subunits (large + small). Small subunit encounters mRNA → translation begins. Large subunit has two sites for subsequent amino acids to be close for peptide bond. Ribosome acts as catalyst — 23S rRNA in bacteria is the ribozyme." },
          { label: "Translational unit", description: "mRNA sequence flanked by start codon (AUG) and stop codon, codes for polypeptide. Additional untranslated regions (UTRs) at 5&apos; (before start) and 3&apos; (after stop) required for efficient translation." },
          { label: "Initiation → elongation → termination", description: "Ribosome binds at start codon (AUG) recognised only by initiator tRNA → elongation: aminoacyl-tRNA sequentially bind via anticodon-codon pairing, ribosome moves codon to codon, adds amino acids → release factor binds stop codon → polypeptide released." },
        ]}
      />

            <h2 id="h-5-8">5.8 Regulation of Gene Expression</h2>
      <p>Broad term — may occur at various levels. Since expression → polypeptide formation, it can be regulated at:</p>
      <TableCard
        caption="Levels of regulation in eukaryotes"
        headers={["Level", "What is regulated"]}
        rows={[
          { cells: ["Transcriptional level", "Formation of primary transcript"] },
          { cells: ["Processing level", "Regulation of splicing"] },
          { cells: ["Transport level", "mRNA nucleus → cytoplasm"] },
          { cells: ["Translational level", "Protein synthesis"] },
        ]}
      />
      <p>Genes expressed to perform functions — e.g., E. coli <strong>beta-galactosidase</strong> hydrolyses lactose → galactose + glucose for energy. If no lactose, no need to synthesise enzyme. Thus <Highlight color="yellow">metabolic / physiological / environmental conditions</Highlight> regulate expression. Development/differentiation also via coordinated regulation.</p>
      <Callout type="note">
        In prokaryotes <Highlight color="yellow">transcriptional initiation</Highlight> is predominant control. RNA polymerase activity at promoter regulated by accessory proteins (activators positive, repressors negative). Promoter accessibility regulated by proteins interacting with <strong>operators</strong> adjacent to promoter — operator binds repressor. Each operon has specific operator + repressor (e.g., lac operator only interacts with lac repressor).
      </Callout>

      <h3 id="h-5-8-1">5.8.1 The Lac operon</h3>
      <p>Elucidated by <strong>Francois Jacob + Jacque Monod</strong> — first transcriptionally regulated system. <strong>Polycistronic</strong> structural gene regulated by common promoter + regulatory genes — common in bacteria (lac, trp, ara, his, val operons).</p>
      <ConceptCard title="Lac operon components">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>i gene (regulatory):</strong> i = inhibitor (not inducer). Codes for repressor of lac operon (constitutively made).</li>
          <li><strong>z gene:</strong> Codes for beta-galactosidase (β-gal) — hydrolyses lactose → galactose + glucose.</li>
          <li><strong>y gene:</strong> Codes for permease — increases permeability to β-galactosides.</li>
          <li><strong>a gene:</strong> Encodes transacetylase.</li>
        </ul>
      </ConceptCard>
      <p className="text-sm text-muted-foreground">All three products together metabolise lactose; similar clustering in other operons for same/related pathway (Figure 5.14).</p>
      <CycleDiagram
        steps={[
          { label: "No lactose — Repressor bound", detail: "Repressor from i gene binds operator → prevents RNA polymerase transcription → operon OFF" },
          { label: "Lactose present", detail: "Low basal permease lets lactose in; lactose (or allolactose) inducer inactivates repressor" },
          { label: "Operon ON", detail: "Repressor off operator → RNA polymerase accesses promoter → transcription proceeds → enzymes made" },
          { label: "Lactose exhausted", detail: "Inducer gone → repressor re-binds → operon OFF again" },
        ]}
      />
            <Callout type="note">
        <strong>Inducer = lactose / allolactose</strong> (substrate regulating enzyme synthesis). Glucose/galactose cannot induce. Very low basal expression always present otherwise lactose cannot enter. Regulation by repressor = <Highlight color="yellow">negative regulation</Highlight>; positive control exists but beyond scope. Can you think how long operon stays expressed with lactose present? (Figure 5.14)
      </Callout>

      <h2 id="h-5-9">5.9 Human Genome Project</h2>
      <Callout type="important">
        Sequence of bases determines genetic information. Finding complete human DNA sequence became the quest → <Highlight color="yellow">Human Genome Project (HGP)</Highlight> launched 1990, completed 2003.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard label="Human genome" value="3 × 10⁹" unit="bp" description="Initial cost estimate $3 per bp → ~$9 billion total; 3300 books (1000 pages×1000 letters) to store one cell&apos;s sequence." />
        <MetricCard label="Timeline" value="13 years" unit="1990–2003" description="Coordinated by US DOE + NIH; Wellcome Trust (UK), Japan, France, Germany, China contributed." />
      </div>
      <h3 id="h-5-9-goals">Goals of HGP</h3>
      <TableCard
        caption="Six goals of HGP"
        headers={["#", "Goal"]}
        rows={[
          { cells: ["(i)", "Identify all ~20,000–25,000 genes in human DNA"] },
          { cells: ["(ii)", "Determine sequences of the 3 billion base pairs"] },
          { cells: ["(iii)", "Store information in databases"] },
          { cells: ["(iv)", "Improve tools for data analysis"] },
          { cells: ["(v)", "Transfer related technologies to other sectors (industries)"] },
          { cells: ["(vi)", "Address ELSI — ethical, legal, social issues"] },
        ]}
      />
      <p className="text-sm text-muted-foreground">Impact: revolutionise diagnosis/treatment/prevention; non-human model organisms also sequenced — bacteria, yeast, <em>C. elegans</em>, <em>Drosophila</em>, rice, <em>Arabidopsis</em>.</p>
      <h3 id="h-5-9-method">Methodologies</h3>
      <ProcessCard
        steps={[
          { label: "EST vs Sequence Annotation", description: "Approach 1: identify all genes expressed as RNA (Expressed Sequence Tags — ESTs). Approach 2: blind sequence whole genome (coding + non-coding) then assign functions (Sequence Annotation)." },
          { label: "Fragment + clone", description: "Total DNA → random smaller fragments → cloned in bacteria/yeast via BAC/YAC vectors → amplified." },
          { label: "Sanger sequencing", description: "Fragments sequenced via automated sequencers based on Frederick Sanger’s method (also for amino acid sequences)." },
          { label: "Assembly & annotation", description: "Overlapping regions required → overlapping fragments generated → computer programs align (Figure 5.15), annotated to chromosomes. Chromosome 1 completed May 2006 (last of 24: 22 autosomes + X + Y)." },
          { label: "Mapping", description: "Genetic/physical maps via restriction site polymorphisms + microsatellites (basis for fingerprinting)." },
        ]}
      />
            <KeyPoint title="Bioinformatics">
        Enormous data → high-speed computation for storage/retrieval/analysis. HGP drove birth of <Highlight color="yellow">Bioinformatics</Highlight>.
      </KeyPoint>

      <h3 id="h-5-9-1">5.9.1 Salient Features of Human Genome</h3>
      <TableCard
        caption="Salient observations from HGP"
        headers={["#", "Observation"]}
        rows={[
          { cells: ["(i)", "Human genome contains 3164.7 million bp (~3.16 billion)."] },
          { cells: ["(ii)", "Average gene 3000 bases; largest dystrophin 2.4 million bases; size varies greatly."] },
          { cells: ["(iii)", "Total genes ~30,000 (much lower than 80k–140k estimates). 99.9% bases same in all humans."] },
          { cells: ["(iv)", "Functions unknown for >50% of discovered genes."] },
          { cells: ["(v)", "<2% of genome codes for proteins."] },
          { cells: ["(vi)", "Repeated sequences make up large portion."] },
          { cells: ["(vii)", "Repetitive sequences: stretches repeated 100–1000 times; no direct coding function but shed light on chromosome structure/dynamics/evolution."] },
          { cells: ["(viii)", "Chromosome 1 most genes (2968), Y fewest (231)."] },
          { cells: ["(ix)", "~1.4 million SNPs (single nucleotide polymorphisms, ‘snips’) — single-base differences occur in humans; promise for disease mapping & human history."] },
        ]}
      />

      <h3 id="h-5-9-2">5.9.2 Applications and Future Challenges</h3>
      <p>
        Deriving meaningful knowledge from sequences will define research for decades — tens of thousands of scientists across disciplines, public + private. Greatest impact may be a <Highlight color="yellow">radically new approach</Highlight>: from studying one/a few genes at a time → systemically studying all genes, all transcripts in a tissue/tumor, how tens of thousands of genes/proteins work in networks to orchestrate chemistry of life.
      </p>

      <h2 id="h-5-10">5.10 DNA Fingerprinting</h2>
      <p>
        99.9% bases same; human genome 3 × 10⁹ bp → differences in <strong>~3 × 10⁶ bp</strong>. Comparing full sequences would be daunting. <Highlight color="yellow">DNA fingerprinting</Highlight> quickly compares individuals via repetitive DNA differences.
      </p>
      <ConceptCard title="Repetitive & satellite DNA">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Repetitive DNA:</strong> Small stretch repeated many times. Separated as small peaks vs bulk genomic DNA major peak during density gradient centrifugation.</li>
          <li><strong>Satellite DNA:</strong> Classified by base composition (A:T-rich or G:C-rich), length, repeat units → micro-satellites, mini-satellites, etc. Normally do not code for proteins, form large portion of genome.</li>
          <li><strong>Polymorphism basis:</strong> High degree of polymorphism → basis of fingerprinting. Same in every tissue (blood, hair, skin, bone, saliva, sperm) → forensic use. Inheritable → paternity testing.</li>
        </ul>
      </ConceptCard>
      <Expandable title="What is DNA polymorphism?">
        <ul>
          <li>Variation at genetic level arises due to <strong>mutations</strong> (recall Ch 4 and this chapter).</li>
          <li>New mutations in somatic cells not transmitted; germ cell mutations (gamete-forming) can spread via sexual reproduction if not seriously impairing reproductive ability.</li>
          <li>Traditionally described as <Highlight color="yellow">DNA polymorphism</Highlight> if &gt;1 variant (allele) at a locus occurs in population with frequency &gt;0.01 — high-frequency inheritable mutation.</li>
          <li>More likely in <strong>non-coding DNA</strong> (mutations there may not affect reproductive ability, accumulate generation after generation). Basis of variability. Ranges from single nucleotide to very large scale changes — important for evolution/speciation (higher classes).</li>
        </ul>
      </Expandable>
      <ProcessCard
        steps={[
          { label: "Alec Jeffreys — VNTR", description: "Used satellite DNA probe Variable Number of Tandem Repeats (VNTR) — mini-satellite with copy number varying chromosome to chromosome (0.1–20 kb size). Hybrid DNA separated, autoradiogram gives many bands of differing sizes — characteristic pattern per individual (Figure 5.16). Except identical twins, banding pattern unique. Different colour schemes trace each band’s origin; crime scene banding matches individual B, not A." },
          { label: "Steps (Southern blot hybridisation)", description: "(i) isolation of DNA, (ii) digestion by restriction endonucleases, (iii) separation by electrophoresis, (iv) blotting to nitrocellulose/nylon, (v) hybridisation with labelled VNTR probe, (vi) detection by autoradiography." },
          { label: "Modern sensitivity", description: "PCR (Chapter 9) increased sensitivity — DNA from single cell enough. Now many different probes used. Wider applications: population & genetic diversities beyond forensics." },
        ]}
      />
            <KeyPoint title="In short">
        DNA fingerprinting works on <Highlight color="yellow">polymorphism in repetitive sequences</Highlight> — especially mini-satellite VNTRs. Copy number polymorphism → band pattern fingerprint.
      </KeyPoint>

<Expandable title="In-text questions — quick check">
        <ul>
          <li>Two chemical differences between DNA and RNA? → DNA: deoxyribose (no 2&apos;-OH), thymine; RNA: ribose (2&apos;-OH), uracil.</li>
          <li>Reverse transcription name? → Reverse transcription / Central dogma reverse.</li>
          <li>RNA to DNA flow name? → Teminism / Reverse transcription.</li>
        </ul>
      </Expandable>

      <h2 id="h-5-11">5.11 Key Scientists of This Chapter</h2>
      <p className="text-sm text-muted-foreground">
        This chapter traces a chain of discoveries. Read it in order — each scientist's contribution only makes sense after the one before.
      </p>
      <Timeline
        title="Who did what, and when"
        orientation="horizontal"
        rtl
        events={[
          { date: "1869", label: "Friedrich Miescher", detail: "Identified 'nuclein' (DNA) in white blood cell nuclei." },
          { date: "1950", label: "Erwin Chargaff", detail: "Chargaff's rule — A=T, G=C; base composition of DNA." },
          { date: "1952", label: "Rosalind Franklin & Maurice Wilkins", detail: "X-ray diffraction (Photo 51) revealing DNA's helical structure." },
          { date: "1953", label: "James Watson & Francis Crick", detail: "Double helix model — built on Chargaff's rule and Wilkins/Franklin X-ray data." },
          { date: "1928", label: "Frederick Griffith", detail: "Transforming principle — heat-killed S strain turns live R strain virulent (S. pneumoniae)." },
          { date: "1933–44", label: "Avery, MacLeod & McCarty", detail: "DNA is the transforming principle — DNase abolishes transformation; proteases/RNases do not." },
          { date: "1952", label: "Alfred Hershey & Martha Chase", detail: "³⁵S/³²P phage experiment — DNA enters bacteria, protein coat does not." },
          { date: "1958", label: "Meselson & Stahl", detail: "Semiconservative replication proved by CsCl density-gradient centrifugation." },
          { date: "1958", label: "Taylor et al.", detail: "Same semiconservative replication in eukaryotes (Vicia faba chromosomes)." },
          { date: "1961", label: "Francis Crick", detail: "Central Dogma + tRNA adapter hypothesis." },
          { date: "1960s", label: "Gamow, Khorana, Nirenberg & Ochoa", detail: "Cracked the genetic code — 4 bases → 4³ = 64 codons for 20 amino acids." },
          { date: "1961", label: "François Jacob & Jacques Monod", detail: "lac operon — the first transcriptionally regulated system." },
          { date: "1970s", label: "Frederick Sanger", detail: "Dideoxy DNA sequencing method." },
          { date: "1984", label: "Alec Jeffreys", detail: "VNTR → DNA fingerprinting." },
        ]}
      />
      <KeyPoint title="Common mix-ups to avoid">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Griffith (1928)</strong> found the transforming principle; <strong>Avery (1933–44)</strong> identified it as DNA.</li>
          <li><strong>Hershey–Chase (1952)</strong> proved DNA is genetic material; <strong>Meselson–Stahl (1958)</strong> proved how it replicates.</li>
          <li><strong>Watson &amp; Crick</strong> built the model on <strong>Wilkins &amp; Franklin’s</strong> X-ray data and <strong>Chargaff’s</strong> base ratios.</li>
        </ul>
      </KeyPoint>
    </>
  );
}
