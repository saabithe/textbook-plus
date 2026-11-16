import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { BiotechDefinitionCard } from "@/components/content/biology/BiotechDefinition";
import { CurdFormationStrip } from "@/components/content/biology/CurdFormation";
import { EfbQuoteCard, EfbConceptFlow } from "@/components/content/biology/EfbConcept";
import { ModernBiotechGrid } from "@/components/content/biology/ModernBiotechGrid";
import { OldNewBiotech } from "@/components/content/biology/OldNewBiotech";
import { CoreTechniques } from "@/components/content/biology/CoreTechniques";
import {
  GeneticEngineeringDefinition,
  GeneticEngineeringFlow,
  GeneticEngineeringExample,
} from "@/components/content/biology/GeneticEngineeringFlow";
import { BioprocessEngineering } from "@/components/content/biology/BioprocessEngineering";
import {
  ReproductionComparison,
  HybridisationLimitation,
  GeneticEngineeringSolution,
} from "@/components/content/biology/ConceptualBasis";
import {
  HybridisationVsEngineering,
  HybridisationCrossing,
} from "@/components/content/biology/HybridisationComparison";
import { ThreeBasicSteps } from "@/components/content/biology/ThreeBasicSteps";
import {
  PurityRequirement,
  CellWallEnzymes,
  MacromoleculeRemoval,
  IsolationWorkflow,
  PrecipitationSpooling,
} from "@/components/content/biology/DnaIsolation";
import {
  RestrictionEnzymeConcept,
  BacterialDefence,
  NucleaseTypes,
  RestrictionMechanism,
  StickyEndsDiagram,
} from "@/components/content/biology/RestrictionEnzymes";
import {
  RestrictionHistoryTimeline,
  HindIICard,
  CommonEnzymesGrid,
} from "@/components/content/biology/RestrictionHistory";
import { NamingRulesTable, EcoRINamingDiagram } from "@/components/content/biology/RestrictionNaming";
import { PalindromeDefinition, EcoRIRecognitionSite, EcoRICutSite } from "@/components/content/biology/PalindromeSites";
import { EnzymeToolkitTable } from "@/components/content/biology/EnzymeToolkitTable";
import {
  PcrConcept,
  PcrComponents,
  PcrCycle,
  TaqPolymerase,
  ExponentialAmplification,
} from "@/components/content/biology/Pcr";
import {
  SeparationNeed,
  AgePrinciple,
  GelSetupDiagram,
  GelSizeSeparation,
  StainingVisualisation,
  Elution,
  AgeWorkflow,
} from "@/components/content/biology/GelElectrophoresis";
import { LigationPrinciple, LigationStages } from "@/components/content/biology/Ligation";
import { VectorDefinition, VectorTypes, CloningVectorFeatures } from "@/components/content/biology/Vectors";
import {
  CompetentHostConcept,
  CationTreatment,
  HeatShockTimeline,
  DirectTransferMethods,
} from "@/components/content/biology/HostIntroduction";
import {
  RecombinantProtein,
  SmallScaleCulturing,
  ContinuousCulture,
} from "@/components/content/biology/GeneProduct";
import {
  BioreactorNeed,
  BioreactorEnvironment,
  StirredTankTypes,
  BioreactorControls,
} from "@/components/content/biology/Bioreactor";
import { DownstreamProcessing } from "@/components/content/biology/DownstreamProcessing";
import { RdnaStepsOverview, RdnaStepsTimeline } from "@/components/content/biology/RdnaSteps";
import {
  CohenBoyerMilestone,
  CohenBoyerProcedure,
  CohenBoyerFlow,
} from "@/components/content/biology/CohenBoyerProcess";
import { BiotechGlossary } from "@/components/content/biology/BiotechGlossary";

export default function BiotechnologyPrinciplesAndProcessesChapter() {
  return (
    <>
      <h2 id="h-9-1">9.1 Principles of Biotechnology</h2>

      <h3 id="h-9-1-1">1. Definition of Biotechnology</h3>
      <BiotechDefinitionCard />
      <CurdFormationStrip
        className="mt-4"
        caption="Lactobacillus (B) acts on milk; curd is the product."
      />

      <h3 id="h-9-1-2">2. European Federation of Biotechnology (EFB) Definition</h3>
      <EfbQuoteCard />

      <h4 id="h-9-1-2-components">Conceptual components</h4>
      <EfbConceptFlow />

      <h3 id="h-9-1-3">3. Modern Context of Biotechnology</h3>
      <p>
        Modern biotechnology refers more restrictively to processes involving{" "}
        <strong>genetically modified organisms (GMOs)</strong> to produce goods on a larger scale.
      </p>
      <ModernBiotechGrid />

      <h3 id="h-9-1-4">4. Evolution of Biotechnology: Old BT vs New BT</h3>
      <p>
        Biotechnology has evolved from using the natural abilities of organisms to genetically modifying organisms for
        obtaining products.
      </p>
      <OldNewBiotech />

      <h2 id="h-9-core">Core Techniques of Modern Biotechnology</h2>
      <p>
        Modern biotechnology is based on <strong>two core techniques</strong>: genetic engineering and bioprocess
        engineering.
      </p>
      <CoreTechniques />

      <h3 id="h-9-core-1">1. Genetic Engineering 🧬</h3>

      <h4 id="h-9-core-1-definition">Definition and mechanism</h4>
      <GeneticEngineeringDefinition />

      <h4 id="h-9-core-1-flow">Process flow</h4>
      <GeneticEngineeringFlow />
      <GeneticEngineeringExample />

      <h3 id="h-9-core-2">2. Bioprocess Engineering 🧫</h3>

      <h4 id="h-9-core-2-definition">Definition and mechanism</h4>
      <BioprocessEngineering />

      <h3 id="h-9-core-3">3. Conceptual Basis &amp; Advantages of Genetic Engineering</h3>

      <h4 id="h-9-core-3-asexual">Asexual vs sexual reproduction</h4>
      <ReproductionComparison />

      <h4 id="h-9-core-3-limitation">Limitation of traditional hybridisation</h4>
      <HybridisationLimitation />

      <h4 id="h-9-core-3-solution">Solution: genetic engineering</h4>
      <GeneticEngineeringSolution />

      <h3 id="h-9-core-4">4. Traditional Hybridisation vs Genetic Engineering</h3>
      <HybridisationVsEngineering />

      <h4 id="h-9-core-4-example">Hybridisation example</h4>
      <HybridisationCrossing />

      <h2 id="h-9-2">9.2 Processes of Recombinant DNA Technology</h2>

      <h3 id="h-9-2-1">1. Three Basic Steps in Genetically Modifying an Organism</h3>
      <p>Genetic modification involves <strong>three basic steps</strong>.</p>
      <ThreeBasicSteps />

      <h3 id="h-9-2-2">2. Sequential Steps in Recombinant DNA Technology</h3>
      <p>
        Recombinant DNA technology involves <strong>8 sequential steps</strong>, from isolating the desired gene to
        separating and purifying the final product.
      </p>
      <RdnaStepsOverview />
      <RdnaStepsTimeline />

      <h3 id="h-9-2-3">3. Construction of First Recombinant DNA — Cohen &amp; Boyer (1972)</h3>
      <p>
        This process flow describes the use of an <strong>Antibiotic Resistance Gene (ABRG)</strong> from a{" "}
        <em>Salmonella typhimurium</em> plasmid and its introduction into <em>E. coli</em>.
      </p>
      <CohenBoyerMilestone />

      <h4 id="h-9-2-3-procedure">Procedure</h4>
      <CohenBoyerProcedure />

      <h4 id="h-9-2-3-flow">Complete Cohen–Boyer process flow</h4>
      <CohenBoyerFlow />

      <h3 id="h-9-2-4">4. Important Terms — Quick Reference</h3>
      <BiotechGlossary />

      <h2 id="h-9-3">9.3 Tools of Recombinant DNA Technology</h2>

      <h3 id="h-9-3-1">1. Isolation of Genetic Material (DNA)</h3>

      <h4 id="h-9-3-1-purity">A. Purity requirement</h4>
      <PurityRequirement />

      <h4 id="h-9-3-1-wall">B. Cell wall breakdown</h4>
      <CellWallEnzymes />

      <h4 id="h-9-3-1-macromolecules">C. Subsequent breakdown and removal of macromolecules</h4>
      <MacromoleculeRemoval />

      <h4 id="h-9-3-1-workflow">D. Sequential workflow of DNA isolation</h4>
      <IsolationWorkflow />

      <h4 id="h-9-3-1-spooling">E. Precipitation and spooling</h4>
      <PrecipitationSpooling />

      <h3 id="h-9-3-2">2. Fragmentation of DNA by Restriction Enzymes (RE)</h3>

      <h4 id="h-9-3-2-scissors">A. Restriction enzymes — molecular scissors</h4>
      <RestrictionEnzymeConcept />

      <h4 id="h-9-3-2-defence">B. Bacterial defence mechanism</h4>
      <BacterialDefence />

      <h4 id="h-9-3-2-types">C. Types of nucleases</h4>
      <NucleaseTypes />

      <h3 id="h-9-3-3">3. Discovery and Origin of Restriction Enzymes</h3>

      <h4 id="h-9-3-3-history">A. Historical development</h4>
      <RestrictionHistoryTimeline />

      <h4 id="h-9-3-3-hind">B. First restriction endonuclease</h4>
      <HindIICard />

      <h4 id="h-9-3-3-common">C. Commonly used restriction enzymes</h4>
      <CommonEnzymesGrid />

      <h3 id="h-9-3-4">4. Nomenclature of Restriction Enzymes</h3>
      <p>The names of restriction enzymes are derived from their <strong>source bacteria</strong>.</p>
      <NamingRulesTable />

      <h4 id="h-9-3-4-example">Example: EcoRI</h4>
      <EcoRINamingDiagram />

      <h3 id="h-9-3-5">5. Action of Restriction Endonucleases</h3>
      <p>Restriction endonucleases act through <strong>four major stages</strong>.</p>
      <RestrictionMechanism />

      <h4 id="h-9-3-5-sticky">Sticky ends</h4>
      <StickyEndsDiagram />

      <h3 id="h-9-3-6">6. Palindromic DNA Sequences</h3>

      <h4 id="h-9-3-6-definition">A. Definition</h4>
      <PalindromeDefinition />

      <h4 id="h-9-3-6-site">B. Example: EcoRI recognition site</h4>
      <EcoRIRecognitionSite />

      <h4 id="h-9-3-6-cut">C. EcoRI cleavage site</h4>
      <EcoRICutSite />

      <h3 id="h-9-3-7">7. Combined Enzymatic and Chemical Toolkit</h3>
      <p>
        A consolidated reference of the enzymes and reagents used during DNA isolation, cleavage and joining.
      </p>
      <EnzymeToolkitTable />

      <h3 id="h-9-3-8">8. Separation and Isolation of DNA Fragments</h3>

      <h4 id="h-9-3-8-why">Why is separation necessary?</h4>
      <SeparationNeed />

      <h4 id="h-9-3-8-age">Agarose gel electrophoresis (AGE)</h4>

      <h5 id="h-9-3-8-principle">Principle</h5>
      <AgePrinciple />

      <h5 id="h-9-3-8-setup">Setup and direction of migration</h5>
      <GelSetupDiagram />

      <h5 id="h-9-3-8-size">Size-based separation (sieving effect)</h5>
      <GelSizeSeparation />

      <h5 id="h-9-3-8-staining">Staining and visualisation</h5>
      <StainingVisualisation />

      <h5 id="h-9-3-8-elution">Elution</h5>
      <Elution />

      <h5 id="h-9-3-8-workflow">Complete AGE workflow — quick revision</h5>
      <AgeWorkflow />

      <h3 id="h-9-3-9">9. Polymerase Chain Reaction (PCR)</h3>

      <h4 id="h-9-3-9-definition">Definition</h4>
      <PcrConcept />

      <h4 id="h-9-3-9-requirements">Requirements and key components</h4>
      <PcrComponents />

      <h4 id="h-9-3-9-cycle">Three core steps of PCR (thermal cycling)</h4>
      <PcrCycle />

      <h4 id="h-9-3-9-taq">Taq polymerase — thermostable enzyme</h4>
      <TaqPolymerase />

      <h4 id="h-9-3-9-exponential">Exponential amplification</h4>
      <ExponentialAmplification />

      <h3 id="h-9-3-10">10. Ligation of DNA Fragment into a Vector</h3>

      <h4 id="h-9-3-10-principle">Formation of recombinant DNA (rDNA)</h4>
      <LigationPrinciple />

      <h4 id="h-9-3-10-stages">Stages of ligation</h4>
      <LigationStages />

      <h3 id="h-9-3-11">11. Vectors</h3>

      <h4 id="h-9-3-11-definition">Definition</h4>
      <VectorDefinition />

      <h5 id="h-9-3-11-types">Common types of vectors</h5>
      <VectorTypes />

      <h5 id="h-9-3-11-features">Essential features of a cloning vector</h5>
      <CloningVectorFeatures />

      <h3 id="h-9-3-12">12. Introduction of Recombinant DNA into Host Cells</h3>

      <h4 id="h-9-3-12-competent">Competent host cells</h4>
      <CompetentHostConcept />

      <h4 id="h-9-3-12-chemical">Chemical treatment and heat shock</h4>
      <CationTreatment />
      <HeatShockTimeline />

      <h4 id="h-9-3-12-direct">Direct (vectorless) and alternative gene transfer methods</h4>
      <DirectTransferMethods />

      <h3 id="h-9-3-13">13. Obtaining the Foreign Gene Product</h3>

      <h4 id="h-9-3-13-protein">Recombinant protein</h4>
      <RecombinantProtein />

      <h4 id="h-9-3-13-small-scale">Small-scale culturing</h4>
      <SmallScaleCulturing />

      <h4 id="h-9-3-13-continuous">Continuous culture system</h4>
      <ContinuousCulture />

      <h3 id="h-9-3-14">14. Bioreactors and Mass Production</h3>

      <h4 id="h-9-3-14-need">Need for bioreactors</h4>
      <BioreactorNeed />

      <h5 id="h-9-3-14-environment">Optimal growth environment</h5>
      <BioreactorEnvironment />

      <h4 id="h-9-3-14-types">Types of stirred-tank bioreactors</h4>
      <StirredTankTypes />

      <h4 id="h-9-3-14-controls">Essential control systems</h4>
      <BioreactorControls />

      <h3 id="h-9-3-15">15. Downstream Processing</h3>

      <h4 id="h-9-3-15-steps">Definition and major steps</h4>
      <DownstreamProcessing />

      <h2 id="h-9-exercises">Exercises</h2>
      <Expandable title="NCERT Exercises" variant="exercise">
        <ExerciseQa
          questions={[
            "Can you list 10 recombinant proteins which are used in medical practice? Find out where they are used as therapeutics (use the internet).",
            "Make a chart (with diagrammatic representation) showing a restriction enzyme, the substrate DNA on which it acts, the site at which it cuts DNA and the product it produces.",
            "From what you have learnt, can you tell whether enzymes are bigger or DNA is bigger in molecular size? How did you know?",
            "What would be the molar concentration of human DNA in a human cell? Consult your teacher.",
            "Do eukaryotic cells have restriction endonucleases? Justify your answer.",
            "Besides better aeration and mixing properties, what other advantages do stirred tank bioreactors have over shake flasks?",
            "Collect 5 examples of palindromic DNA sequences by consulting your teacher. Better try to create a palindromic sequence by following base-pair rules.",
            "Can you recall meiosis and indicate at what stage a recombinant DNA is made?",
            "Can you think and answer how a reporter enzyme can be used to monitor transformation of host cells by foreign DNA in addition to a selectable marker?",
            <div key="q10">
              <p>Describe briefly the following:</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Origin of replication</li>
                <li>(b) Bioreactors</li>
                <li>(c) Downstream processing</li>
              </ul>
            </div>,
            <div key="q11">
              <p>Explain briefly</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) PCR</li>
                <li>(b) Restriction enzymes and DNA</li>
                <li>(c) Chitinase</li>
              </ul>
            </div>,
            <div key="q12">
              <p>Discuss with your teacher and find out how to distinguish between</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Plasmid DNA and Chromosomal DNA</li>
                <li>(b) RNA and DNA</li>
                <li>(c) Exonuclease and Endonuclease</li>
              </ul>
            </div>,
          ]}
          answers={[
            <div key="a1">
              <p>A starting list — the chapter itself does not name them, so verify each use in a current source:</p>
              <ul className="mt-1.5 space-y-1">
                <li><strong>Human insulin</strong> — diabetes mellitus.</li>
                <li><strong>Human growth hormone</strong> — growth hormone deficiency in children.</li>
                <li><strong>Erythropoietin</strong> — anaemia, especially in kidney failure.</li>
                <li><strong>Interferon alpha</strong> — chronic hepatitis and some cancers.</li>
                <li><strong>Factor VIII</strong> — haemophilia A.</li>
                <li><strong>Factor IX</strong> — haemophilia B.</li>
                <li><strong>Tissue plasminogen activator</strong> — dissolving clots after heart attack or stroke.</li>
                <li><strong>Streptokinase</strong> — dissolving blood clots.</li>
                <li><strong>Hepatitis B surface antigen</strong> — the recombinant hepatitis B vaccine.</li>
                <li><strong>Interleukin-2</strong> — some kidney cancers.</li>
              </ul>
            </div>,
            <div key="a2">
              <p>
                Take <strong>EcoRI</strong>. Its substrate is any DNA carrying the palindromic recognition sequence
                5&prime;-GAATTC-3&prime; / 3&prime;-CTTAAG-5&prime;. It cuts a little away from the centre of the
                palindrome, but between the same two bases on the two strands:
              </p>
              <div className="my-2 overflow-x-auto rounded-xl border border-border/40 bg-muted/25 px-4 py-3">
                <pre className="font-mono text-xs leading-relaxed text-foreground">
                  {"5' — G ↓ A A T T C — 3'\n3' — C T T A A ↑ G — 5'"}
                </pre>
              </div>
              <p>
                The product is two fragments, each with a single stranded overhang — a{" "}
                <strong>sticky end</strong> — of the sequence AATT. Because the overhangs are complementary, the two
                ends can be sealed later by DNA ligase. The chart therefore carries four labels: the enzyme (EcoRI), the
                substrate DNA (the palindrome), the cut site (between G and A on each strand) and the product (two
                fragments with sticky ends).
              </p>
            </div>,
            <div key="a3">
              <p>
                <strong>DNA is much bigger.</strong> The clue is in the way the two molecules meet: a restriction
                endonuclease &lsquo;inspects&rsquo; the length of a DNA sequence and needs to read a recognition
                sequence of only about six base pairs to find its cutting point. A protein that reads six base pairs at
                a time is tiny compared with the DNA molecule it works on, which runs to millions of base pairs and
                carries hundreds of genes. The enzyme can cut the DNA many times over and still leave large fragments —
                which is why the products of a digest can be separated and seen as distinct bands on a gel.
              </p>
            </div>,
            <div key="a4">
              <p>
                Estimate it from the size of the genome. A human diploid cell carries about 6.6 × 10<sup>9</sup> base
                pairs, i.e. roughly 6.6 pg of DNA; taking the average molar mass of a base pair as about 660 g/mol, the
                amount of DNA in one cell is of the order of 10<sup>−24</sup> mol. Dividing that by the volume of the
                nucleus gives a concentration of roughly 10<sup>−10</sup> M. This is only an order-of-magnitude
                estimate — the exact value depends on the cell type and the stage of the cell cycle — so check the
                working with your teacher.
              </p>
            </div>,
            <div key="a5">
              <p>
                <strong>No — not as a restriction system.</strong> Restriction endonucleases are a bacterial defence:
                in 1963 the two enzymes responsible for restricting the growth of bacteriophage in{" "}
                <em>Escherichia coli</em> were isolated, one that added methyl groups to DNA and one that cut DNA. The
                methylase protects the bacterium&rsquo;s own DNA at the same recognition sequence, so only the invading
                DNA is cut. Eukaryotic cells do not carry this paired restriction–modification system; their DNA is
                organised with histones and is not protected by methylation of that kind. Eukaryotic cells do contain
                endonucleases for DNA repair and recombination, but these are not restriction endonucleases.
              </p>
            </div>,
            <div key="a6">
              <ul className="space-y-1">
                <li>A temperature control system holds the culture at the optimum temperature.</li>
                <li>A pH control system holds the optimum pH.</li>
                <li>A foam control system deals with the foam that stirring produces.</li>
                <li>Sampling ports allow small volumes of culture to be withdrawn periodically for checking.</li>
                <li>An agitator system and an oxygen delivery system keep mixing and oxygen supply uniform.</li>
                <li>Large volumes — 100 to 1000 litres — can be processed, which a shake flask cannot do.</li>
                <li>A continuous culture system can be run, draining used medium and adding fresh medium to keep cells in the physiologically most active log/exponential phase, giving a larger biomass and higher yields.</li>
              </ul>
            </div>,
            <div key="a7">
              <ul className="space-y-1">
                <li><strong>GAATTC</strong> — the EcoRI site.</li>
                <li><strong>GGATCC</strong> — the BamHI site.</li>
                <li><strong>AAGCTT</strong> — the HindIII site.</li>
                <li><strong>GTCGAC</strong> — the SalI site.</li>
                <li><strong>CTGCAG</strong> — the PstI site.</li>
              </ul>
              <p className="mt-2">
                To build one yourself, write any six bases, then write the complementary strand below it and read that
                strand backwards. If the two lines read the same, you have a palindromic sequence.
              </p>
            </div>,
            <div key="a8">
              <p>
                Recombinant DNA is made during <strong>prophase I of meiosis</strong>, at the stage when{" "}
                <strong>crossing over</strong> takes place between non-sister chromatids of a pair of homologous
                chromosomes. The exchange of segments joins DNA from two different chromosomes into a single new
                combination — a recombinant DNA molecule. This is the natural counterpart of the recombinant DNA that
                restriction enzymes and ligase make in the laboratory.
              </p>
            </div>,
            <div key="a9">
              <p>
                A reporter enzyme reports whether the foreign DNA actually got in and is being expressed. Insert the
                foreign DNA within the coding sequence of a reporter gene such as β-galactosidase, and add a chromogenic
                substrate to the plate. Cells that took up the recombinant DNA have an inactivated reporter gene, so
                they produce no colour; cells that took up a plasmid without an insert turn blue. The colour itself
                therefore monitors transformation, and the intensity of the reporter&rsquo;s activity can also be
                measured to follow how well the gene is expressed — information a selectable marker, which only says
                whether the cell survives, cannot give.
              </p>
            </div>,
            <div key="a10">
              <ul className="space-y-1.5">
                <li>
                  <strong>(a) Origin of replication:</strong> a sequence from where replication starts. Any piece of
                  DNA linked to it can be made to replicate within the host cells, and it also controls the copy number
                  of the linked DNA. To recover many copies of a target DNA, clone it in a vector whose origin supports
                  a high copy number.
                </li>
                <li>
                  <strong>(b) Bioreactors:</strong> vessels in which raw materials are biologically converted into
                  specific products, individual enzymes, etc., using microbial, plant, animal or human cells. They
                  process large volumes (100–1000 litres) and provide optimum growth conditions — temperature, pH,
                  substrate, salts, vitamins, oxygen.
                </li>
                <li>
                  <strong>(c) Downstream processing:</strong> the separation and purification steps that follow the
                  biosynthetic stage, after which the product is formulated with suitable preservatives, put through
                  clinical trials and subjected to strict quality control testing. It varies from product to product.
                </li>
              </ul>
            </div>,
            <div key="a11">
              <ul className="space-y-1.5">
                <li>
                  <strong>(a) PCR:</strong> Polymerase Chain Reaction — multiple copies of the gene (or DNA) of
                  interest are synthesised in vitro using two sets of primers and DNA polymerase. Each cycle has
                  denaturation, primer annealing and extension of primers. Repeated many times, the segment can be
                  amplified to approximately a billion copies; this needs a thermostable DNA polymerase from{" "}
                  <em>Thermus aquaticus</em>, which survives the high temperature denaturation step.
                </li>
                <li>
                  <strong>(b) Restriction enzymes and DNA:</strong> these &lsquo;molecular scissors&rsquo; inspect the
                  length of a DNA sequence, bind at a specific palindromic recognition sequence and cut each of the two
                  strands at specific points in their sugar-phosphate backbones. Cutting a little away from the centre
                  of the palindrome leaves sticky ends that hydrogen-bond with complementary cut ends, which DNA ligase
                  then joins. Cutting the vector and the source DNA with the same enzyme is what makes a recombinant
                  vector possible.
                </li>
                <li>
                  <strong>(c) Chitinase:</strong> the enzyme used to break open fungal cells so that DNA can be
                  released, in the same way that lysozyme is used for bacteria and cellulase for plant cells.
                </li>
              </ul>
            </div>,
            <div key="a12">
              <ul className="space-y-1.5">
                <li>
                  <strong>(a) Plasmid DNA and chromosomal DNA:</strong> a plasmid is a small, circular,
                  extra-chromosomal DNA that replicates autonomously, independent of the control of chromosomal DNA, and
                  may be present in one or two copies or 15–100 copies per cell; chromosomal DNA is the large linear
                  molecule that carries the main genome and replicates with the cell. The plasmid is the natural raw
                  material of a cloning vector; the chromosome is not.
                </li>
                <li>
                  <strong>(b) RNA and DNA:</strong> DNA is the genetic material in the majority of organisms and is
                  what restriction enzymes act on; RNA is removed during DNA isolation by treatment with ribonuclease,
                  while proteins are removed with protease. DNA is double stranded and negatively charged, which is why
                  it moves towards the anode in gel electrophoresis.
                </li>
                <li>
                  <strong>(c) Exonuclease and Endonuclease:</strong> exonucleases remove nucleotides from the ends of
                  the DNA; endonucleases make cuts at specific positions within the DNA. Restriction endonucleases are
                  endonucleases.
                </li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>
    </>
  );
}
