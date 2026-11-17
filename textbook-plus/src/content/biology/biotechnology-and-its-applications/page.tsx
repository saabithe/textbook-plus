import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { BiotechApplicationsGrid } from "@/components/content/biology/BiotechApplications";
import { ResearchAreas } from "@/components/content/biology/ResearchAreas";
import { FoodYieldOptions } from "@/components/content/biology/FoodYieldOptions";
import {
  CultureMediumRequirements,
  ExplantDefinition,
  ExplantTotipotencyDiagram,
} from "@/components/content/biology/TissueCulture";
import { MicropropagationFlow, SomaclonesCard } from "@/components/content/biology/Micropropagation";
import {
  PomatoCard,
  SomaticFusionFlow,
  SomaticHybridisationPrinciple,
} from "@/components/content/biology/SomaticHybridisation";
import { GmAdvantages, GmoDefinitionCard, TailorMadeCrops } from "@/components/content/biology/GmOrganisms";
import { BtInsectGroups, BtOverview, CryGeneTargets } from "@/components/content/biology/BtCrops";
import { BtExamFlowchart, BtProtoxinState, BtToxinAction } from "@/components/content/biology/BtMechanism";
import {
  NematodeTargetCard,
  RnaiDefinitionCard,
  RnaiDsRnaFlow,
  RnaiMolecularFlow,
  RnaiNaturalSources,
  RnaiOutcomeCard,
  RnaiSilencingFlow,
} from "@/components/content/biology/Rnai";
import {
  AdaScidBranchDiagram,
  DiagnosisProblemSolution,
  EliLillyProcess,
  EliLillyTakeaway,
  ElisaBranches,
  GeneTherapyApproaches,
  GeneTherapyDefinitionCard,
  GeneTherapyLimitationCard,
  GeneTherapyPermanentCure,
  GeneTherapyWorkflow,
  InsulinMaturationTable,
  InsulinNeedCard,
  InsulinStructureDiagram,
  PcrTechniqueCard,
  ProbeHybridisationFlow,
} from "@/components/content/biology/Medicine";
import {
  TransgenicApplications,
  TransgenicDefinitionCard,
  TransgenicMiceStat,
} from "@/components/content/biology/TransgenicAnimals";
import {
  BasmatiCaseStudy,
  BiopiracyDefinitionCard,
  GlobalImbalance,
  IndianPatentsBill,
  RegulationCard,
  TraditionalHerbalResources,
} from "@/components/content/biology/EthicalIssues";

export default function BiotechnologyAndItsApplicationsChapter() {
  return (
    <>
      <h2 id="h-10-intro">1. Introduction to Biotechnology</h2>

      <h3 id="h-10-intro-applications">Applications of Biotechnology</h3>
      <p>Biotechnology has applications in several fields.</p>
      <BiotechApplicationsGrid />

      <h2 id="h-10-research">2. Three Critical Research Areas of Biotechnology</h2>
      <p>Three major research areas are:</p>
      <ResearchAreas />

      <h2 id="h-10-1">10.1 Biotechnological Applications in Agriculture</h2>

      <h3 id="h-10-1-options">3. Three Options to Increase Food Yield</h3>
      <p>Three approaches are available to increase food production:</p>
      <FoodYieldOptions />

      <h3 id="h-10-1-tissue-culture">4. Tissue Culture</h3>

      <h4 id="h-10-1-explant">Explant and Totipotency</h4>
      <ExplantDefinition />
      <ExplantTotipotencyDiagram />

      <h4 id="h-10-1-medium">Medium Requirements</h4>
      <CultureMediumRequirements />

      <h4 id="h-10-1-micropropagation">4.1 Micro-propagation and Somaclones</h4>
      <MicropropagationFlow />
      <SomaclonesCard />

      <h3 id="h-10-1-somatic-hybrids">5. Somatic Hybridisation</h3>

      <h4 id="h-10-1-somatic-principle">Definition and Principle</h4>
      <SomaticHybridisationPrinciple />

      <h4 id="h-10-1-somatic-process">Process of Somatic Hybridisation</h4>
      <SomaticFusionFlow />

      <h4 id="h-10-1-somatic-example">Example of Somatic Hybrid</h4>
      <PomatoCard />

      <h3 id="h-10-1-gm-crops">Genetically Modified Organisms (GMOs)</h3>

      <h4 id="h-10-1-gmo-definition">1. Definition</h4>
      <GmoDefinitionCard />

      <h4 id="h-10-1-gmo-advantages">2. Advantages of Genetically Modified Crops</h4>
      <p>GM crops offer five major advantages:</p>
      <GmAdvantages />

      <h4 id="h-10-1-tailor-made">3. Tailor-Made Industrial Crops</h4>
      <p>GM technology can produce specialised crops to supply industries with raw materials such as:</p>
      <TailorMadeCrops />

      <h2 id="h-10-3-bt">10.3 Pest-Resistant Plants: Bt Crops</h2>

      <h3 id="h-10-3-bt-overview">4. Overview of <em>Bacillus thuringiensis</em> (Bt)</h3>
      <BtOverview />

      <h3 id="h-10-3-insect-groups">5. Insect Groups Targeted by Bt Toxins</h3>
      <p>Bt proteins act against specific insect groups.</p>
      <BtInsectGroups />

      <h3 id="h-10-3-cry-genes">6. <em>cry</em> Genes and Their Specificity</h3>
      <p>Bt toxin production is coded by genes called <em>cry</em> genes.</p>
      <CryGeneTargets />

      <h3 id="h-10-3-mechanism">7. Mechanism of Bt Toxin Action</h3>

      <h4 id="h-10-3-protoxin">7.1 Formation of Inactive Protoxin</h4>
      <BtProtoxinState />

      <h4 id="h-10-3-gut-action">7.2 Activation and Action in the Insect Gut</h4>
      <p>When an insect ingests the Bt toxin:</p>
      <BtToxinAction />

      <h4 id="h-10-3-exam-flow">Complete Mechanism — Board Exam Flowchart</h4>
      <BtExamFlowchart />

      <h2 id="h-10-1-rnai">Pest-Resistant Plants via RNA Interference (RNAi)</h2>

      <h3 id="h-10-1-rnai-target">1. Introduction and Target Organism</h3>
      <NematodeTargetCard />

      <h3 id="h-10-1-rnai-principle">2. Principle of RNA Interference (RNAi)</h3>
      <RnaiDefinitionCard />
      <RnaiMolecularFlow />
      <RnaiNaturalSources />

      <h3 id="h-10-1-rnai-mechanism">3. RNAi Mechanism in Transgenic Tobacco</h3>
      <RnaiDsRnaFlow />

      <h3 id="h-10-1-rnai-silencing">4. Gene Silencing in the Nematode</h3>
      <p>When the nematode infects the transgenic tobacco plant:</p>
      <RnaiSilencingFlow />

      <h3 id="h-10-1-rnai-outcome">5. Final Outcome</h3>
      <RnaiOutcomeCard />

      <h2 id="h-10-2">10.2 Biotechnological Applications in Medicine</h2>

      <h3 id="h-10-2-insulin">10.2.1 Genetically Engineered Insulin</h3>

      <h4 id="h-10-2-insulin-why">1. Why Genetically Engineered Insulin?</h4>
      <InsulinNeedCard />

      <h4 id="h-10-2-insulin-structure">2. Structure of Human Insulin</h4>
      <InsulinStructureDiagram />
      <InsulinMaturationTable />

      <h4 id="h-10-2-insulin-production">3. Production of Human Insulin by Eli Lilly (1983)</h4>
      <EliLillyProcess />
      <EliLillyTakeaway />

      <h3 id="h-10-2-gene-therapy">10.2.2 Gene Therapy</h3>

      <h4 id="h-10-2-gene-therapy-definition">1. Definition</h4>
      <GeneTherapyDefinitionCard />

      <h4 id="h-10-2-ada-scid">2. ADA Deficiency and SCID</h4>
      <AdaScidBranchDiagram />

      <h4 id="h-10-2-first-therapy">3. First Clinical Gene Therapy (1990)</h4>
      <GeneTherapyApproaches />

      <h4 id="h-10-2-procedure">4. Gene Therapy Procedure for ADA Deficiency</h4>
      <GeneTherapyWorkflow />

      <h4 id="h-10-2-limitation">5. Limitation of the Treatment</h4>
      <GeneTherapyLimitationCard />

      <h4 id="h-10-2-permanent-cure">6. Permanent Cure Strategy</h4>
      <GeneTherapyPermanentCure />

      <h3 id="h-10-2-diagnosis">10.2.3 Molecular Diagnosis</h3>

      <h4 id="h-10-2-diagnosis-why">1. Why Molecular Diagnosis?</h4>
      <DiagnosisProblemSolution />

      <h4 id="h-10-2-pcr">2. Polymerase Chain Reaction (PCR)</h4>
      <PcrTechniqueCard />

      <h4 id="h-10-2-probe">3. Probe Hybridisation and Autoradiography</h4>
      <ProbeHybridisationFlow />

      <h4 id="h-10-2-elisa">4. ELISA — Enzyme-Linked Immunosorbent Assay</h4>
      <ElisaBranches />

      <h2 id="h-10-3">10.3 Transgenic Animals</h2>

      <h3 id="h-10-3-definition">1. Definition and Scope</h3>
      <TransgenicDefinitionCard />
      <TransgenicMiceStat />

      <h3 id="h-10-3-applications">2. Five Core Applications</h3>
      <TransgenicApplications />

      <h2 id="h-10-4">10.4 Ethical Issues</h2>

      <h3 id="h-10-4-regulation">1. Need for Regulation</h3>
      <RegulationCard />

      <h3 id="h-10-4-biopiracy">2. Biopiracy and Patent Issues</h3>

      <h4 id="h-10-4-biopiracy-definition">Definition of Biopiracy</h4>
      <BiopiracyDefinitionCard />

      <h4 id="h-10-4-imbalance">Global Imbalance</h4>
      <GlobalImbalance />

      <h4 id="h-10-4-indian-examples">Indian Examples and Patent Issues</h4>
      <BasmatiCaseStudy />
      <TraditionalHerbalResources />

      <IndianPatentsBill />

      <h2 id="h-10-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "Which part of the plant is best suited for making virus-free plants and why?",
            "What is the major advantage of producing plants by micropropagation?",
            "Find out what the various components of the medium used for propagation of an explant in vitro are?",
            <div key="q4">
              <p>Crystals of Bt toxin produced by some bacteria do not kill the bacteria themselves because –</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) bacteria are resistant to the toxin</li>
                <li>(b) toxin is immature;</li>
                <li>(c) toxin is inactive;</li>
                <li>(d) bacteria encloses toxin in a special sac.</li>
              </ul>
            </div>,
            "What are transgenic bacteria? Illustrate using any one example.",
            "Compare and contrast the advantages and disadvantages of production of genetically modified crops.",
            "What are Cry proteins? Name an organism that produce it. How has man exploited this protein to his benefit?",
            "What is gene therapy? Illustrate using the example of adenosine deaminase (ADA) deficiency.",
            "Digrammatically represent the experimental steps in cloning and expressing an human gene (say the gene for growth hormone) into a bacterium like E. coli?",
            "Can you suggest a method to remove oil (hydrocarbon) from seeds based on your understanding of rDNA technology and chemistry of oil?",
            "Find out from internet what is golden rice.",
            "Does our blood have proteases and nucleases?",
            "Consult internet and find out how to make orally active protein pharmaceutical. What is the major problem to be encountered?",
          ]}
          answers={[
            <div key="a1">
              <p>
                The <strong>meristem</strong> (apical and axillary) is best suited.
              </p>
              <p className="mt-1">
                Even if the plant is infected with a virus, the meristem is free of virus. Hence one can
                remove the meristem and grow it in vitro to obtain virus-free plants. Scientists have
                succeeded in culturing meristems of banana, sugarcane, potato, etc.
              </p>
            </div>,
            <div key="a2">
              <p>
                A very large number of plants — thousands of them — can be produced from a small amount
                of tissue in very short durations.
              </p>
              <p className="mt-1">
                All these plants are genetically identical to the original plant from which they were
                grown, i.e., they are somaclones.
              </p>
            </div>,
            <div key="a3">
              <ul className="space-y-1">
                <li>A carbon source such as sucrose.</li>
                <li>Inorganic salts.</li>
                <li>Vitamins.</li>
                <li>Amino acids.</li>
                <li>Growth regulators like auxins, cytokinins, etc.</li>
              </ul>
              <p className="mt-1">The medium must be sterile.</p>
            </div>,
            <div key="a4">
              <p>
                <strong>(c) toxin is inactive.</strong>
              </p>
              <p className="mt-1">
                The Bt toxin protein exists as an inactive protoxin in the bacterium. It is converted
                into the active form only in the alkaline pH of an insect gut, which solubilises the
                crystals. So the crystals in the bacterium itself never act on the bacterium.
              </p>
            </div>,
            <div key="a5">
              <p>
                Transgenic bacteria are bacteria that have had their DNA manipulated to possess and
                express an extra (foreign) gene.
              </p>
              <p className="mt-1">
                <strong>Example:</strong> In 1983, Eli Lilly prepared two DNA sequences corresponding
                to the A and B chains of human insulin and introduced them into plasmids of{" "}
                <em>E. coli</em>. The bacteria produced the two insulin chains, which were extracted
                and combined by creating disulfide bonds to form human insulin.
              </p>
            </div>,
            <div key="a6">
              <p>
                <strong>Advantages:</strong>
              </p>
              <ul className="mt-1 space-y-1">
                <li>Made crops more tolerant to abiotic stresses — cold, drought, salt, heat.</li>
                <li>Reduced reliance on chemical pesticides, through pest-resistant crops.</li>
                <li>Helped to reduce post-harvest losses.</li>
                <li>Increased efficiency of mineral usage by plants, preventing early exhaustion of soil fertility.</li>
                <li>Enhanced nutritional value of food, e.g., golden rice — Vitamin &apos;A&apos; enriched rice.</li>
                <li>Tailor-made plants can supply alternative resources to industries, such as starches, fuels and pharmaceuticals.</li>
              </ul>
              <p className="mt-2">
                <strong>Disadvantages:</strong>
              </p>
              <ul className="mt-1 space-y-1">
                <li>Genetic modification of organisms can have unpredictable results when such organisms are introduced into the ecosystem.</li>
                <li>Ethical standards are required to evaluate the morality of such manipulation of living organisms, so regulation becomes necessary.</li>
                <li>Patents on products and technologies that use biological resources have raised public anger, since these resources have long been used by farmers and indigenous people.</li>
                <li>Biopiracy — use of bio-resources without proper authorisation and without compensatory payment.</li>
              </ul>
            </div>,
            <div key="a7">
              <p>
                <strong>Cry proteins</strong> are the insecticidal proteins coded by{" "}
                <em>cry</em> genes. They are produced as protein crystals by the bacterium{" "}
                <em>Bacillus thuringiensis</em> and exist in it as inactive protoxins.
              </p>
              <p className="mt-1">
                <strong>How man has exploited them:</strong> specific Bt toxin genes were isolated from
                the bacterium and incorporated into several crop plants such as cotton. The choice of
                gene depends on the crop and the targeted pest, as most Bt toxins are insect-group
                specific. For example, the proteins encoded by <em>cryIAc</em> and <em>cryIIAb</em>{" "}
                control the cotton bollworms, while that of <em>cryIAb</em> controls the corn borer. The
                plant then provides resistance to insects without the need for insecticides — in effect
                a bio-pesticide.
              </p>
            </div>,
            <div key="a8">
              <p>
                <strong>Gene therapy</strong> is a collection of methods that allows correction of a
                gene defect that has been diagnosed in a child/embryo. Genes are inserted into a
                person&apos;s cells and tissues to treat a disease. Correction of a genetic defect
                involves delivery of a normal gene into the individual or embryo to take over the
                function of and compensate for the non-functional gene.
              </p>
              <p className="mt-1">
                <strong>ADA deficiency:</strong>
              </p>
              <ol className="mt-1 list-decimal pl-5 space-y-1">
                <li>
                  The first clinical gene therapy was given in 1990 to a 4-year old girl with adenosine
                  deaminase (ADA) deficiency.
                </li>
                <li>This enzyme is crucial for the immune system to function.</li>
                <li>The disorder is caused due to the deletion of the gene for adenosine deaminase.</li>
                <li>
                  Bone marrow transplantation cures some children; others are treated by enzyme
                  replacement therapy, in which functional ADA is given by injection. Both are not
                  completely curative.
                </li>
                <li>Lymphocytes from the blood of the patient are grown in a culture outside the body.</li>
                <li>A functional ADA cDNA is introduced into these lymphocytes using a retroviral vector.</li>
                <li>The lymphocytes are returned to the patient.</li>
                <li>
                  As these cells are not immortal, the patient requires periodic infusion of such
                  genetically engineered lymphocytes.
                </li>
                <li>
                  If the gene isolated from marrow cells producing ADA is introduced into cells at
                  early embryonic stages, it could be a permanent cure.
                </li>
              </ol>
            </div>,
            <div key="a9">
              <p>The steps, in order, are:</p>
              <ol className="mt-1 list-decimal pl-5 space-y-1">
                <li>Isolate the human gene for growth hormone, or prepare its cDNA from the mRNA.</li>
                <li>Cut the gene and a suitable plasmid vector with the same restriction enzyme, so that complementary sticky ends are produced.</li>
                <li>Ligate the gene into the plasmid to form a recombinant DNA.</li>
                <li>Introduce the recombinant plasmid into <em>E. coli</em> by transformation, and select the transformed cells.</li>
                <li>Culture the selected bacteria on a large scale.</li>
                <li>The bacteria express the human gene and the growth hormone is harvested and purified by downstream processing.</li>
              </ol>
            </div>,
            <div key="a10">
              <p>
                Oil in seeds is a hydrocarbon, so the way to remove it is to stop the plant from making
                it. Using rDNA technology, the genes coding for the enzymes of oil synthesis can be
                silenced by the same strategy used against the nematode —{" "}
                <strong>RNA interference</strong>.
              </p>
              <p className="mt-1">
                The gene is introduced into the plant using a suitable vector in such a way that the
                host produces both sense and anti-sense RNA. These complementary RNAs form a dsRNA,
                which initiates RNAi and silences the specific mRNA for oil synthesis. The seed then
                accumulates far less oil.
              </p>
            </div>,
            <div key="a11">
              <p>
                Golden rice is a genetically modified variety of rice that is enriched with Vitamin
                &apos;A&apos; — it is the example NCERT gives for GM food with enhanced nutritional
                value.
              </p>
            </div>,
            <div key="a12">
              <p>
                <strong>No.</strong> Blood does not carry proteases and nucleases in an active form; if
                it did, the proteins and nucleic acids present in the blood would themselves be broken
                down.
              </p>
            </div>,
            <div key="a13">
              <p>
                <strong>How:</strong> the protein has to be protected from digestion and then made able
                to reach the blood intact — for instance by coating the protein so that it survives the
                stomach and is released only in the intestine.
              </p>
              <p className="mt-1">
                <strong>Major problem:</strong> proteins are digested by the proteases of the digestive
                tract, so an orally taken protein pharmaceutical loses its activity before it can act.
                This is exactly why insulin has to be injected and cannot be taken by mouth.
              </p>
            </div>,
          ]}
        />
      </Expandable>
    </>
  );
}
