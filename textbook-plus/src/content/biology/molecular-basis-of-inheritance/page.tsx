import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { Timeline } from "@/components/content/process/Timeline";
import { MetricCard } from "@/components/content/study/MetricCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { NucleicAcidsSection } from "@/components/content/biology/NucleicAcidsGeneticMaterial";
import { DnaPolymerSection } from "@/components/content/biology/DnaGeneticPolymer";
import { NucleotideComponents, PentoseSugar } from "@/components/content/biology/NucleotideComponents";
import { NitrogenousBases } from "@/components/content/biology/NitrogenousBases";
import { NucleosideFormation, PhosphateAndNucleotide } from "@/components/content/biology/NucleosideNucleotide";
import { PolynucleotideChainSection } from "@/components/content/biology/PolynucleotideChain";
import { DnaDiscoveryTimeline } from "@/components/content/biology/DnaDiscoveryTimeline";
import { ChargaffPrinciple, ChargaffSolvedExample } from "@/components/content/biology/ChargaffRule";
import {
  PolynucleotideStrands,
  AntiparallelPolarity,
  ComplementaryBasePairing,
  HelicalDimensions,
} from "@/components/content/biology/DnaHelixFeatures";
import {
  CentralDogmaPrinciple,
  ReplicationNote,
  ReverseTranscriptionNote,
} from "@/components/content/biology/CentralDogma";
import { CentralDogmaDiagram } from "@/components/content/biology/CentralDogmaDiagram";
import { DnaLengthFormula, DnaLengthSolvedExample } from "@/components/content/biology/DnaLength";
import { DnaPackagingComparison } from "@/components/content/biology/DnaPackagingComparison";
import { NucleosomeStructure } from "@/components/content/biology/NucleosomeStructure";
import { HigherLevelPackaging } from "@/components/content/biology/HigherLevelPackaging";
import { ChromatinTypes } from "@/components/content/biology/ChromatinTypes";
import { DnaMaterialTimeline } from "@/components/content/biology/DnaMaterialTimeline";
import { GriffithExperiment } from "@/components/content/biology/GriffithExperiment";
import { AveryExperiment } from "@/components/content/biology/AveryExperiment";
import { HersheyChaseExperiment } from "@/components/content/biology/HersheyChaseExperiment";
import { GeneticMaterialCriteria } from "@/components/content/biology/GeneticMaterialCriteria";
import { DnaVsRnaComparison } from "@/components/content/biology/DnaVsRnaComparison";
import { GeneticMaterialRevisionSheet } from "@/components/content/biology/GeneticMaterialRevisionSheet";
import { RnaWorld } from "@/components/content/biology/RnaWorld";
import { SemiconservativeReplication } from "@/components/content/biology/SemiconservativeReplication";
import { MeselsonStahlExperiment } from "@/components/content/biology/MeselsonStahlExperiment";
import { TaylorExperiment } from "@/components/content/biology/TaylorExperiment";
import { ReplicationMachinery } from "@/components/content/biology/ReplicationMachinery";
import { ReplicationFork } from "@/components/content/biology/ReplicationFork";
import { CellCycleReplication } from "@/components/content/biology/CellCycleReplication";
import { TranscriptionFundamentals } from "@/components/content/biology/TranscriptionFundamentals";
import { TranscriptionUnit } from "@/components/content/biology/TranscriptionUnit";
import { GeneOrganisation } from "@/components/content/biology/GeneOrganisation";
import { ProkaryoticTranscription } from "@/components/content/biology/ProkaryoticTranscription";
import { ProkaryoticTranscriptionDiagram } from "@/components/content/biology/ProkaryoticTranscriptionDiagram";
import { EukaryoticTranscription } from "@/components/content/biology/EukaryoticTranscription";
import { StructuralGeneOrganisation } from "@/components/content/biology/StructuralGeneOrganisation";
import { TranscriptionReferenceDiagrams } from "@/components/content/biology/TranscriptionReferenceDiagrams";
import { InheritanceRevisionSheet } from "@/components/content/biology/InheritanceRevision";

export default function MolecularBasisOfInheritanceChapter() {
  return (
    <>
      <h2>1. Nucleic Acids and Genetic Material</h2>
      <NucleicAcidsSection />

      <h2>2. DNA — Structure as a Genetic Polymer</h2>
      <DnaPolymerSection />

      <h2>3. Structure of a Polynucleotide Chain</h2>
      <NucleotideComponents />
      <PentoseSugar />
      <NitrogenousBases />
      <NucleosideFormation />
      <PhosphateAndNucleotide />
      <PolynucleotideChainSection />

      <h2>4. History of DNA Double Helix Discovery</h2>
      <h3>4.1 Major Discoveries — Timeline</h3>
      <DnaDiscoveryTimeline />

      <h2>5. Chargaff&apos;s Rule</h2>
      <h3>5.1 Principle</h3>
      <ChargaffPrinciple />
      <h3>5.2 Solved Example</h3>
      <ChargaffSolvedExample />

      <h2>6. Salient Features of DNA Double Helix</h2>
      <h3>6.1 Polynucleotide Strands</h3>
      <PolynucleotideStrands />
      <h3>6.2 Antiparallel Polarity</h3>
      <AntiparallelPolarity />
      <h3>6.3 Complementary Base Pairing</h3>
      <ComplementaryBasePairing />
      <h3>6.4 Helical Nature and Dimensions</h3>
      <HelicalDimensions />
      <h3>6.5 Complete Structural Summary</h3>
      <TableCard
        headers={["Feature", "Description"]}
        rows={[
          { cells: ["Number of strands", "Two polynucleotide chains"] },
          { cells: ["Backbone", "Sugar-phosphate"] },
          { cells: ["Base arrangement", "Project inward"] },
          { cells: ["Strand orientation", "Antiparallel"] },
          { cells: ["Helical direction", "Right-handed"] },
          { cells: ["A–T pairing", "2 hydrogen bonds"] },
          { cells: ["G–C pairing", "3 hydrogen bonds"] },
          { cells: ["Base stacking", "One above another"] },
          { cells: ["One complete turn", "10 bp"] },
          { cells: ["Pitch", "3.4 nm"] },
          { cells: ["Adjacent base-pair distance", "0.34 nm"] },
        ]}
      />

      <h2>7. Central Dogma of Molecular Biology 🔄</h2>
      <h3>7.1 Central Dogma</h3>
      <CentralDogmaPrinciple />
      <h3>7.2 Replication</h3>
      <ReplicationNote />
      <h3>7.3 Reverse Transcription</h3>
      <ReverseTranscriptionNote />
      <CentralDogmaDiagram />

      <h2>8. Length of DNA 📏</h2>
      <h3>8.1 Formula</h3>
      <DnaLengthFormula />
      <h3>8.2 Solved Example — Human Diploid DNA (2n)</h3>
      <DnaLengthSolvedExample />

      <InheritanceRevisionSheet />

      <h3 id="h-5-1-2">5.1.2 Packaging of DNA Helix</h3>
      <p className="my-4 text-sm leading-relaxed text-foreground">
        DNA is a long molecule that must be compactly organised inside cells. Its packaging differs between prokaryotic and eukaryotic organisms.
      </p>

      <h4>1. DNA Packaging: Prokaryotes vs Eukaryotes</h4>
      <DnaPackagingComparison />

      <h4>2. Nucleosome and Histones</h4>
      <NucleosomeStructure />

      <h4>3. Higher-Level Packaging of DNA</h4>
      <HigherLevelPackaging />

      <h4>4. Euchromatin vs Heterochromatin</h4>
      <ChromatinTypes />

      <h2 id="h-5-2">5.2 The Search for Genetic Material</h2>

      <h3 id="h-5-2-history">1. Historical Background</h3>
      <DnaMaterialTimeline />

      <h3 id="h-5-2-transforming">2. Griffith&apos;s Experiment — Transforming Principle (1928)</h3>
      <GriffithExperiment />

      <h3 id="h-5-2-avery">3. Biochemical Characterisation of the Transforming Principle (1933–1944)</h3>
      <AveryExperiment />

      <h3 id="h-5-2-1">4. Hershey–Chase Experiment (1952)</h3>
      <HersheyChaseExperiment />

      <h3 id="h-5-2-2">5.2.2 Essential Criteria of Genetic Material</h3>
      <h4 id="h-5-2-criteria">5. Requirements of a Genetic Material</h4>
      <GeneticMaterialCriteria />

      <h4 id="h-5-2-dna-rna">6. DNA vs RNA as Genetic Material</h4>
      <DnaVsRnaComparison />

      <GeneticMaterialRevisionSheet />

      <h2 id="h-5-3">5.3 RNA World</h2>
      <h3>1. RNA as the First Genetic Material</h3>
      <RnaWorld />

      <h2 id="h-5-4">5.4 DNA Replication</h2>

      <h3 id="h-5-4-semiconservative">1. Semiconservative Replication Model</h3>
      <SemiconservativeReplication />

      <h3 id="h-5-4-proof">2. Experimental Proof of Semiconservative Replication</h3>
      <p className="text-sm leading-relaxed text-foreground">
        Two major experiments demonstrated semiconservative DNA replication:
      </p>
      <ol className="my-4 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-foreground">
        <li>
          <strong>Meselson and Stahl</strong> — <em>E. coli</em>.
        </li>
        <li>
          <strong>Taylor and colleagues</strong> — <em>Vicia faba</em> (faba bean).
        </li>
      </ol>

      <h4 id="h-5-4-1">A. Meselson and Stahl Experiment (1958)</h4>
      <MeselsonStahlExperiment />

      <h4 id="h-5-4-taylor">B. Taylor and Colleagues Experiment (1958)</h4>
      <TaylorExperiment />

      <h3 id="h-5-4-2">3. DNA Replication — Machinery and Enzymes</h3>
      <ReplicationMachinery />

      <h3 id="h-5-4-3">4. Replication Fork and Strand Synthesis</h3>
      <ReplicationFork />

      <h3 id="h-5-4-4">5. DNA Replication and the Cell Cycle</h3>
      <CellCycleReplication />

      <h2 id="h-5-5">5.5 Transcription</h2>

      <h3 id="h-5-5-1">1. Definition and Fundamental Principle</h3>
      <TranscriptionFundamentals />

      <h3 id="h-5-5-2">2. Transcription Unit and Strand Nomenclature</h3>
      <TranscriptionUnit />

      <h3 id="h-5-5-3">3. Gene Organisation</h3>
      <GeneOrganisation />

      <h3 id="h-5-5-4">4. Transcription in Prokaryotes</h3>
      <ProkaryoticTranscription />
      <ProkaryoticTranscriptionDiagram />

      <h3 id="h-5-5-5">5. Transcription in Eukaryotes</h3>
      <EukaryoticTranscription />

      <h3 id="h-5-5-6">6. Structural Gene Organisation in Eukaryotes</h3>
      <StructuralGeneOrganisation />

      <h3 id="h-5-5-7">7. Reference Diagrams</h3>
      <TranscriptionReferenceDiagrams />

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
        This chapter traces a chain of discoveries. Read it in order — each scientist&apos;s contribution only makes sense after the one before.
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
