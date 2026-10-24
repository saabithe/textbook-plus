import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { RevealAnswer } from "@/components/content/process/RevealAnswer";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";

export default function BiotechnologyAndItsApplicationsChapter() {
  return (
    <>
      <p>
        Biotechnology, as you would have learnt from the previous chapter, essentially deals with
        industrial scale production of biopharmaceuticals and biologicals using genetically modified
        microbes, fungi, plants and animals.
      </p>
      <TableCard
        title="Three critical research areas of biotechnology"
        headers={["Research area", "What it means"]}
        rows={[
          {
            cells: [
              "Providing the best catalyst",
              "An improved organism — usually a microbe — or a pure enzyme.",
            ],
          },
          {
            cells: [
              "Creating optimal conditions",
              "Conditions created through engineering, so that the catalyst can act.",
            ],
          },
          {
            cells: [
              "Downstream processing",
              "Technologies to purify the protein or organic compound that has been made.",
            ],
          },
        ]}
      />
      <ConceptCard title="Where biotechnology is applied" icon="🧬">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Therapeutics</li>
          <li>Diagnostics</li>
          <li>Genetically modified crops for agriculture</li>
          <li>Processed food</li>
          <li>Bioremediation</li>
          <li>Waste treatment</li>
          <li>Energy production</li>
        </ul>
      </ConceptCard>
      <KeyPoint title="This chapter in one line">
        Human beings have used biotechnology to improve the quality of human life, especially in the
        field of <strong>food production</strong> and <strong>health</strong> — and those two arenas
        are exactly the two halves of this chapter.
      </KeyPoint>

      <h2 id="h-10-1">10.1 Biotechnological Applications in Agriculture</h2>
      <p>Let us take a look at the three options that can be thought for increasing food production.</p>
      <ol className="list-decimal pl-5 space-y-1.5">
        <li>Agro-chemical based agriculture.</li>
        <li>Organic agriculture.</li>
        <li>Genetically engineered crop-based agriculture.</li>
      </ol>
      <p>
        Why was a third option even needed? The Green Revolution succeeded in tripling the food supply,
        but yet it was not enough to feed the growing human population.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Increased yields have <strong>partly</strong> been due to the use of improved crop
          varieties.
        </li>
        <li>
          But they were <strong>mainly</strong> due to better management practices and the use of
          agrochemicals — fertilisers and pesticides.
        </li>
        <li>
          For farmers in the developing world, agrochemicals are often <strong>too expensive</strong>.
        </li>
        <li>
          Further increases in yield with existing varieties are{" "}
          <strong>not possible using conventional breeding</strong>.
        </li>
      </ul>
      <Callout type="note" title="The gap that opened up">
        Traditional breeding techniques failed to keep pace with demand and to provide sufficiently
        fast and efficient systems for crop improvement. Two technologies were developed to fill that
        gap — <strong>tissue culture</strong> and, later, <strong>genetically modified crops</strong>.
      </Callout>

      <h3 id="h-10-1-tissue-culture">Tissue culture and micro-propagation</h3>
      <p>
        It was learnt by scientists, during the 1950s, that whole plants could be regenerated from
        explants — any part of a plant taken out and grown in a test tube, under sterile conditions in
        special nutrient media.
      </p>
      <Callout type="important" title="Totipotency">
        This capacity to generate a whole plant from any cell/explant is called{" "}
        <Highlight color="yellow">totipotency</Highlight>.
      </Callout>
      <TableCard
        title="The vocabulary of tissue culture"
        headers={["Term", "Meaning"]}
        rows={[
          {
            cells: [
              "Explant",
              "Any part of a plant taken out and grown in a test tube, under sterile conditions in special nutrient media.",
            ],
          },
          {
            cells: [
              "Totipotency",
              "The capacity to generate a whole plant from any cell/explant.",
            ],
          },
          {
            cells: [
              "Micro-propagation",
              "The method of producing thousands of plants through tissue culture.",
            ],
          },
          {
            cells: [
              "Somaclone",
              "Each plant produced this way is genetically identical to the original plant from which it was grown.",
            ],
          },
        ]}
      />
      <Callout type="note" title="What the nutrient medium must supply">
        The nutrient medium must provide a <strong>carbon source</strong> such as sucrose, and also{" "}
        <strong>inorganic salts</strong>, <strong>vitamins</strong>, <strong>amino acids</strong> and{" "}
        <strong>growth regulators</strong> like auxins and cytokinins.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          By application of these methods it is possible to achieve propagation of a{" "}
          <strong>large number of plants in very short durations</strong>.
        </li>
        <li>
          Many important food plants — <strong>tomato</strong>, <strong>banana</strong>,{" "}
          <strong>apple</strong> — have been produced on commercial scale using this method.
        </li>
      </ul>

      <h3 id="h-10-1-virus-free">Recovery of healthy plants from diseased plants</h3>
      <Callout type="important" title="Why the meristem is the answer">
        Even if the plant is infected with a virus, the <strong>meristem</strong> (apical and axillary)
        is free of virus. Hence, one can remove the meristem and grow it{" "}
        <em>in vitro</em> to obtain virus-free plants.
      </Callout>
      <p>
        Scientists have succeeded in culturing meristems of <strong>banana</strong>,{" "}
        <strong>sugarcane</strong>, <strong>potato</strong>, etc.
      </p>

      <h3 id="h-10-1-somatic-hybrids">Somatic hybrids</h3>
      <p>
        Scientists have even isolated single cells from plants and, after digesting their cell walls,
        have been able to isolate naked protoplasts (surrounded by plasma membranes).
      </p>
      <Stepper
        steps={[
          {
            label: "Single cells are isolated from plants",
            description: "The starting material is an isolated plant cell.",
          },
          {
            label: "Cell walls are digested",
            description: "Naked protoplasts are obtained — each surrounded only by its plasma membrane.",
          },
          {
            label: "Protoplasts of two varieties are fused",
            description:
              "One protoplast from each of two different varieties of plants, each having a desirable character, is fused.",
          },
          {
            label: "Hybrid protoplasts are formed",
            description: "The fused product is a hybrid protoplast.",
          },
          {
            label: "A new plant is grown",
            description: "The hybrid protoplast is grown further to form a new plant.",
          },
        ]}
      />
      <FactCard
        title="Somatic hybrid / somatic hybridisation"
        definition="Hybrids produced by fusing protoplasts of two different varieties are called somatic hybrids, and the process is called somatic hybridisation."
        icon="🌱"
      />
      <Callout type="note" title="The pomato story">
        A protoplast of tomato was fused with that of potato and grown — forming new hybrid plants
        combining tomato and potato characteristics. This was achieved, giving{" "}
        <strong>pomato</strong>. Unfortunately, the plant did not have all the desired combination of
        characteristics for its commercial utilisation.
      </Callout>

      <h3 id="h-10-1-gm-crops">Genetically modified crops</h3>
      <p>
        Is there an alternative path that our understanding of genetics can show, so that farmers may
        obtain maximum yield from their fields, and the use of fertilisers and chemicals can be
        minimised? Use of <strong>genetically modified crops</strong> is a possible solution.
      </p>
      <Callout type="important" title="Genetically Modified Organisms (GMO)">
        Plants, bacteria, fungi and animals whose genes have been altered by manipulation are called{" "}
        <Highlight color="yellow">Genetically Modified Organisms (GMO)</Highlight>.
      </Callout>
      <TableCard
        title="What genetic modification has done for crops"
        headers={["Benefit", "Detail"]}
        rows={[
          {
            cells: [
              "More tolerant to abiotic stresses",
              "Cold, drought, salt, heat.",
            ],
          },
          {
            cells: [
              "Reduced reliance on chemical pesticides",
              "Pest-resistant crops.",
            ],
          },
          {
            cells: ["Fewer post-harvest losses", "Losses after harvesting are reduced."],
          },
          {
            cells: [
              "More efficient mineral usage",
              "This prevents early exhaustion of the fertility of the soil.",
            ],
          },
          {
            cells: [
              "Enhanced nutritional value of food",
              "e.g., golden rice — Vitamin 'A' enriched rice.",
            ],
          },
        ]}
      />
      <p>
        In addition to these uses, GM has been used to create{" "}
        <strong>tailor-made plants</strong> to supply alternative resources to industries, in the form
        of <strong>starches</strong>, <strong>fuels</strong> and <strong>pharmaceuticals</strong>.
      </p>
      <p>
        The application studied in detail here is the production of{" "}
        <strong>pest resistant plants</strong>, which could decrease the amount of pesticide used.{" "}
        <strong>Bt toxin</strong> is produced by a bacterium called{" "}
        <em>Bacillus thuringiensis</em> (Bt for short).
      </p>
      <Callout type="important" title="A bio-pesticide, not a sprayed pesticide">
        The Bt toxin gene has been <strong>cloned from the bacteria</strong> and{" "}
        <strong>expressed in plants</strong> to provide resistance to insects without the need for
        insecticides — in effect creating a <Highlight color="yellow">bio-pesticide</Highlight>.
      </Callout>
      <p>
        Examples are <strong>Bt cotton</strong>, <strong>Bt corn</strong>, <strong>rice</strong>,{" "}
        <strong>tomato</strong>, <strong>potato</strong> and <strong>soyabean</strong>.
      </p>

      <h3 id="h-10-1-bt-cotton">Bt cotton — how the toxin works</h3>
      <p>
        Some strains of <em>Bacillus thuringiensis</em> produce proteins that kill certain insects.
      </p>
      <TableCard
        title="Insects killed by Bt toxin"
        headers={["Group", "Examples"]}
        rows={[
          { cells: ["Lepidopterans", "Tobacco budworm, armyworm"] },
          { cells: ["Coleopterans", "Beetles"] },
          { cells: ["Dipterans", "Flies, mosquitoes"] },
        ]}
      />
      <p>
        <em>B. thuringiensis</em> forms <strong>protein crystals</strong> during a particular phase of
        its growth. These crystals contain a toxic insecticidal protein.
      </p>
      <Callout type="warning" title="Why the toxin does not kill the Bacillus itself">
        The Bt toxin protein exists as an <strong>inactive protoxin</strong>. It becomes active only
        after an insect ingests it — so the bacterium that stores the crystal is never harmed by its
        own product.
      </Callout>
      <Stepper
        steps={[
          {
            label: "The bacterium forms protein crystals",
            description:
              "B. thuringiensis forms crystals during a particular phase of growth; the crystals contain the toxic insecticidal protein.",
          },
          {
            label: "An insect ingests the inactive toxin",
            description: "The protein enters the insect gut still in its inactive protoxin form.",
          },
          {
            label: "The alkaline pH of the gut solubilises the crystals",
            description: "This converts the inactive toxin into the active form of the toxin.",
          },
          {
            label: "The activated toxin binds midgut epithelial cells",
            description: "It binds to the surface of the midgut epithelial cells.",
          },
          {
            label: "Pores are created",
            description: "The toxin creates pores in the membrane of these cells.",
          },
          {
            label: "Cells swell and lyse",
            description: "Cell swelling and lysis follow.",
          },
          {
            label: "The insect dies",
            description: "Death of the insect is the eventual outcome.",
          },
        ]}
      />
      <p>
        Specific Bt toxin genes were isolated from <em>Bacillus thuringiensis</em> and incorporated
        into several crop plants such as cotton. The choice of genes depends upon the crop and the
        targeted pest, as most Bt toxins are <strong>insect-group specific</strong>.
      </p>
      <TableCard
        title="cry genes and the pests they control"
        headers={["Gene", "Protein controls"]}
        rows={[
          { cells: ["cryIAc", "Cotton bollworms"] },
          { cells: ["cryIIAb", "Cotton bollworms"] },
          { cells: ["cryIAb", "Corn borer"] },
        ]}
        caption="The toxin is coded by a gene named cry — cryIAc is one of a number of them."
      />
      <MistakeCard
        mistake="Bt cotton is a variety that is sprayed with the Bt toxin."
        correction="The Bt toxin gene (cry) is cloned from Bacillus thuringiensis and expressed inside the cotton plant itself, so the plant makes the toxin. The advantage is resistance to insects without the need for insecticides."
        example="That is why Bt cotton is called a bio-pesticide rather than a pesticide-treated crop."
      />

      <h3 id="h-10-1-pest-resistant">Pest resistant plants — RNA interference</h3>
      <p>
        Several nematodes parasitise a wide variety of plants and animals, including human beings. A
        nematode, <em>Meloidegyne incognitia</em>, infects the roots of tobacco plants and causes a
        great reduction in yield.
      </p>
      <p>
        A novel strategy was adopted to prevent this infestation, based on the process of{" "}
        <strong>RNA interference (RNAi)</strong>.
      </p>
      <Callout type="important" title="RNA interference">
        RNAi takes place in <strong>all eukaryotic organisms</strong> as a method of cellular defense.
        This method involves <Highlight color="yellow">silencing of a specific mRNA</Highlight> due to a
        complementary dsRNA molecule that binds to and prevents translation of the mRNA (silencing).
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The source of this complementary RNA could be an infection by{" "}
          <strong>viruses having RNA genomes</strong>.
        </li>
        <li>
          It could also come from <strong>mobile genetic elements (transposons)</strong> that replicate
          via an RNA intermediate.
        </li>
      </ul>
      <Stepper
        steps={[
          {
            label: "Nematode-specific genes are introduced into the host plant",
            description: "Agrobacterium vectors are used to carry the genes into the plant.",
          },
          {
            label: "The introduced DNA produces both sense and anti-sense RNA",
            description: "The DNA is designed so that both strands are transcribed in the host cells.",
          },
          {
            label: "The two RNAs are complementary, so they pair",
            description: "They form a double stranded RNA — dsRNA.",
          },
          {
            label: "The dsRNA initiates RNAi",
            description: "RNA interference is set off inside the host cell.",
          },
          {
            label: "The specific mRNA of the nematode is silenced",
            description: "The complementary dsRNA binds to it and prevents its translation.",
          },
          {
            label: "The parasite cannot survive in the transgenic host",
            description:
              "The nematode fails to establish itself in a host expressing the specific interfering RNA.",
          },
          {
            label: "The transgenic plant is protected",
            description: "The plant therefore gets itself protected from the parasite.",
          },
        ]}
      />
      <KeyPoint title="No toxin — silence instead">
        In the Bt strategy the plant makes a <strong>toxic protein</strong>. In the RNAi strategy the
        plant makes an <strong>RNA that silences the nematode&apos;s own mRNA</strong>. Both protect
        the plant, but only the first is a toxin.
      </KeyPoint>

      <h2 id="h-10-2">10.2 Biotechnological Applications in Medicine</h2>
      <p>
        The recombinant DNA technological processes have made immense impact in the area of healthcare
        by enabling mass production of safe and more effective therapeutic drugs.
      </p>
      <Callout type="important" title="Why recombinant therapeutics are safer">
        Recombinant therapeutics <Highlight color="yellow">do not induce unwanted immunological responses</Highlight>{" "}
        as is common in case of similar products isolated from non-human sources.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard
          label="Recombinant therapeutics approved"
          value="30"
          unit="world over"
          description="Approved for human use at the time of writing."
        />
        <MetricCard
          label="Marketed in India"
          value="12"
          unit="of those 30"
          description="Presently being marketed in India."
        />
      </div>

      <h3 id="h-10-2-insulin">10.2.1 Genetically Engineered Insulin</h3>
      <p>
        Management of adult-onset diabetes is possible by taking insulin at regular time intervals.
        What would a diabetic patient do if enough human insulin was not available? One would have to
        isolate and use insulin from other animals.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Insulin used for diabetes was earlier extracted from the{" "}
          <strong>pancreas of slaughtered cattle and pigs</strong>.
        </li>
        <li>
          Insulin from an animal source, though, caused some patients to develop{" "}
          <strong>allergy or other types of reactions to the foreign protein</strong>.
        </li>
        <li>
          Imagine if a bacterium were available that could make human insulin — you could grow a large
          quantity of the bacteria and make as much insulin as you need.
        </li>
      </ul>
      <Callout type="note" title="The structure that makes it hard">
        Insulin consists of <strong>two short polypeptide chains</strong> — chain A and chain B — that
        are linked together by <strong>disulphide bridges</strong>.
      </Callout>
      <p>
        In mammals, including humans, insulin is synthesised as a <strong>pro-hormone</strong> (like a
        pro-enzyme, the pro-hormone also needs to be processed before it becomes a fully mature and
        functional hormone) which contains an extra stretch called the <strong>C peptide</strong>.
      </p>
      <TableCard
        title="The parts of pro-insulin"
        headers={["Part", "What happens to it"]}
        rows={[
          {
            cells: [
              "Chain A",
              "One of the two short polypeptide chains of mature insulin.",
            ],
          },
          {
            cells: [
              "Chain B",
              "The other short polypeptide chain; the two are linked by disulphide bridges.",
            ],
          },
          {
            cells: [
              "C peptide",
              "An extra stretch present in the pro-hormone. It is not present in mature insulin — it is removed during maturation into insulin.",
            ],
          },
        ]}
      />
      <KeyPoint title="The real challenge">
        The main challenge for production of insulin using rDNA techniques was{" "}
        <Highlight color="yellow">getting insulin assembled into a mature form</Highlight> — not
        making the chains, but joining them correctly.
      </KeyPoint>
      <ProcessCard
        title="How Eli Lilly made human insulin — 1983"
        steps={[
          {
            label: "Prepare two DNA sequences",
            description:
              "Two DNA sequences were prepared, corresponding to the A and B chains of human insulin.",
          },
          {
            label: "Introduce them into plasmids of E. coli",
            description: "The sequences were introduced into the plasmids of Escherichia coli.",
          },
          {
            label: "E. coli produces the insulin chains",
            description: "The bacteria expressed the introduced sequences as insulin chains.",
          },
          {
            label: "Chains A and B are produced separately and extracted",
            description: "Each chain was made on its own and then recovered from the bacteria.",
          },
          {
            label: "The chains are combined by creating disulfide bonds",
            description: "This final joining step assembles mature human insulin.",
          },
        ]}
      />
      <RevealAnswer
        title="Think about it"
        question="Can insulin be orally administered to diabetic people or not? Why?"
        answer="No. Insulin is a protein hormone, so taken by mouth it would be digested by the proteases of the digestive tract and lose its activity before it could act. It therefore has to be given by injection."
      />

      <h3 id="h-10-2-gene-therapy">10.2.2 Gene Therapy</h3>
      <p>
        If a person is born with a hereditary disease, can a corrective therapy be taken for such a
        disease? Gene therapy is an attempt to do this.
      </p>
      <Callout type="important" title="Gene therapy">
        Gene therapy is a collection of methods that allows correction of a gene defect that has been
        diagnosed in a child/embryo. Here genes are inserted into a person&apos;s cells and tissues to
        treat a disease.
      </Callout>
      <p>
        Correction of a genetic defect involves{" "}
        <Highlight color="blue">delivery of a normal gene</Highlight> into the individual or embryo to
        take over the function of, and compensate for, the non-functional gene.
      </p>
      <p>
        The first clinical gene therapy was given in <strong>1990</strong> to a{" "}
        <strong>4-year old girl with adenosine deaminase (ADA) deficiency</strong>.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>ADA</strong> is an enzyme crucial for the immune system to function.
        </li>
        <li>
          The disorder is caused due to the <strong>deletion of the gene for adenosine deaminase</strong>.
        </li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Bone marrow transplantation",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Can cure ADA deficiency in some children.</li>
                <li>The patient receives bone marrow from a donor.</li>
                <li>
                  <strong>Not completely curative.</strong>
                </li>
              </ul>
            ),
          },
          {
            title: "Enzyme replacement therapy",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Used for other children with the same disorder.</li>
                <li>Functional ADA is given to the patient by injection.</li>
                <li>
                  <strong>Not completely curative.</strong>
                </li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        Both approaches work, but neither is a complete cure — which is what pushed the search towards
        gene therapy.
      </p>
      <Stepper
        steps={[
          {
            label: "Lymphocytes are taken from the patient's blood",
            description: "As a first step, lymphocytes from the blood of the patient are collected.",
          },
          {
            label: "They are grown in culture outside the body",
            description: "The cells are cultured in vitro.",
          },
          {
            label: "A functional ADA cDNA is introduced",
            description: "A retroviral vector is used to carry the functional ADA cDNA into these lymphocytes.",
          },
          {
            label: "The engineered lymphocytes are returned to the patient",
            description: "The corrected cells are put back into the patient's body.",
          },
          {
            label: "The patient needs periodic infusion",
            description:
              "These cells are not immortal, so the correction does not last — genetically engineered lymphocytes have to be infused again and again.",
          },
          {
            label: "A permanent cure is possible in principle",
            description:
              "If the gene isolated from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure.",
          },
        ]}
      />
      <MistakeCard
        mistake="The 1990 gene therapy for ADA deficiency was a permanent, one-time cure."
        correction="The engineered lymphocytes are not immortal, so the patient requires periodic infusion of such genetically engineered lymphocytes. A permanent cure needs the ADA gene to be introduced into cells at early embryonic stages."
        example="This single limitation is the reason gene therapy is described as an attempt, not a routine cure."
      />

      <h3 id="h-10-2-diagnosis">10.2.3 Molecular Diagnosis</h3>
      <p>
        For effective treatment of a disease, <strong>early diagnosis</strong> and understanding its
        pathophysiology is very important. Using conventional methods of diagnosis — serum and urine
        analysis, etc. — early detection is not possible.
      </p>
      <Callout type="note" title="Why early detection needs a different tool">
        Presence of a pathogen (bacteria, viruses, etc.) is normally suspected only when it has
        produced a <strong>disease symptom</strong>. By this time the concentration of the pathogen is
        already very high in the body.
      </Callout>
      <TableCard
        title="Three techniques that serve the purpose of early diagnosis"
        headers={["Technique", "Principle", "What it detects"]}
        rows={[
          {
            cells: [
              "Recombinant DNA technology (probe hybridisation)",
              "A single stranded DNA or RNA tagged with a radioactive molecule — a probe — hybridises to its complementary DNA in a clone of cells; detection is by autoradiography.",
              "Mutated genes: the clone carrying the mutation does not appear on the photographic film.",
            ],
          },
          {
            cells: [
              "PCR — Polymerase Chain Reaction",
              "Amplification of the nucleic acid of the pathogen.",
              "Very low concentrations of bacteria or viruses, HIV in suspected AIDS patients, mutations in genes in suspected cancer patients, and many other genetic disorders.",
            ],
          },
          {
            cells: [
              "ELISA — Enzyme Linked Immuno-sorbent Assay",
              "Antigen–antibody interaction.",
              "The presence of antigens (proteins, glycoproteins, etc.) or the antibodies synthesised against the pathogen.",
            ],
          },
        ]}
      />
      <p>
        Very low concentration of a bacteria or virus — at a time when the symptoms of the disease are
        not yet visible — can be detected by amplification of their nucleic acid by PCR.
      </p>
      <Callout type="important" title="Why the probe goes silent on a mutated gene">
        The clone having the mutated gene will not appear on the photographic film, because the probe
        will <Highlight color="yellow">not have complementarity</Highlight> with the mutated gene.
      </Callout>
      <MistakeCard
        mistake="ELISA amplifies the DNA of a pathogen, just like PCR."
        correction="ELISA is based on the principle of antigen–antibody interaction; it detects antigens of the pathogen or the antibodies raised against it. PCR is the technique that amplifies nucleic acid."
        example="PCR asks whether the DNA of the pathogen is present; ELISA asks whether its antigen, or the antibody against it, is present in the blood."
      />

      <h2 id="h-10-3">10.3 Transgenic Animals</h2>
      <Callout type="important" title="Transgenic animals">
        Animals that have had their DNA manipulated to possess and express an extra (foreign) gene are
        known as <Highlight color="yellow">transgenic animals</Highlight>.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard
          label="Transgenic animals produced"
          value="6"
          unit="kinds"
          description="Rats, rabbits, pigs, sheep, cows and fish."
        />
        <MetricCard
          label="Of all existing transgenic animals"
          value="95%+"
          description="Over 95 per cent of them are mice."
        />
      </div>
      <TableCard
        title="Why transgenic animals are produced"
        headers={["Purpose", "What it involves", "Example"]}
        rows={[
          {
            cells: [
              "Normal physiology and development",
              "Study of how genes are regulated, and how they affect the normal functions of the body and its development. Genes from other species that alter the formation of a factor are introduced, and the biological effects studied.",
              "Complex factors involved in growth, such as insulin-like growth factor.",
            ],
          },
          {
            cells: [
              "Study of disease",
              "Designed to increase our understanding of how genes contribute to the development of disease; they serve as models for human diseases so that new treatments can be investigated.",
              "Cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer's.",
            ],
          },
          {
            cells: [
              "Biological products",
              "The portion of DNA (or genes) that codes for a particular product is introduced, so the animal makes that product.",
              "Human protein α-1-antitrypsin, used to treat emphysema.",
            ],
          },
          {
            cells: [
              "Vaccine safety",
              "Testing the safety of vaccines before they are used on humans.",
              "Transgenic mice used to test the safety of the polio vaccine.",
            ],
          },
          {
            cells: [
              "Chemical safety testing",
              "Also known as toxicity/safety testing; the procedure is the same as that used for testing toxicity of drugs. The animals carry genes that make them more sensitive to toxic substances than non-transgenic animals, are exposed to the substance, and the effects are studied.",
              "Results are obtained in less time.",
            ],
          },
        ]}
      />
      <FactCard
        title="Rosie — the first transgenic cow, 1997"
        definition="Rosie produced human protein-enriched milk, 2.4 grams per litre. The milk contained the human alpha-lactalbumin and was nutritionally a more balanced product for human babies than natural cow-milk."
        icon="🐄"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Medicines required to treat certain human diseases can contain biological products, but such
          products are often <strong>expensive to make</strong>.
        </li>
        <li>
          Similar attempts to the α-1-antitrypsin work are being made for treatment of{" "}
          <strong>phenylketonuria (PKU)</strong> and <strong>cystic fibrosis</strong>.
        </li>
        <li>
          Transgenic mice are being used to test the safety of the polio vaccine; if successful and
          found to be reliable, they could <strong>replace the use of monkeys</strong> to test the
          safety of batches of the vaccine.
        </li>
      </ul>
      <KeyPoint title="Two words cover all five reasons">
        <strong>Understand</strong> (physiology, disease) and <strong>manufacture or test</strong>{" "}
        (biological products, vaccine safety, chemical safety). Every reason in the table falls under
        one of those two.
      </KeyPoint>

      <h2 id="h-10-4">10.4 Ethical Issues</h2>
      <p>
        The manipulation of living organisms by the human race cannot go on any further, without
        regulation. Some <strong>ethical standards</strong> are required to evaluate the morality of
        all human activities that might help or harm living organisms.
      </p>
      <Callout type="warning" title="Going beyond morality — the biological risk">
        Genetic modification of organisms can have{" "}
        <Highlight color="yellow">unpredictable results</Highlight> when such organisms are introduced
        into the ecosystem.
      </Callout>
      <FactCard
        title="GEAC — Genetic Engineering Approval Committee"
        definition="An organisation set up by the Indian Government, which will make decisions regarding the validity of GM research and the safety of introducing GM-organisms for public services."
        icon="⚖️"
      />
      <p>
        The modification/usage of living organisms for public services — as food and medicine sources,
        for example — has also created problems with <strong>patents</strong> granted for the same.
      </p>
      <Callout type="note" title="The public anger behind the patent debate">
        Certain companies are being granted patents for products and technologies that make use of the
        genetic materials, plants and other biological resources that have{" "}
        <strong>long been identified, developed and used by farmers and indigenous people</strong> of a
        specific region or country.
      </Callout>

      <h3 id="h-10-4-basmati">The Basmati rice patent</h3>
      <p>
        Rice is an important food grain, the presence of which goes back thousands of years in
        Asia&apos;s agricultural history. The diversity of rice in India is one of the richest in the
        world. Basmati rice is distinct for its unique aroma and flavour, and there is reference to
        Basmati in ancient texts, folklore and poetry, as it has been grown for centuries.
      </p>
      <TableCard
        title="The Basmati patent — what happened"
        headers={["Fact", "Detail"]}
        rows={[
          {
            cells: ["Rice varieties in India", "An estimated 200,000 varieties, in India alone."],
          },
          {
            cells: ["Documented Basmati varieties", "27, grown in India."],
          },
          {
            cells: [
              "1997 — the patent",
              "An American company got patent rights on Basmati rice through the US Patent and Trademark Office.",
            ],
          },
          {
            cells: [
              "What the patent allowed",
              "The company could sell a 'new' variety of Basmati in the US and abroad.",
            ],
          },
          {
            cells: [
              "Where that 'new' variety came from",
              "It had actually been derived from Indian farmers' varieties — Indian Basmati was crossed with semi-dwarf varieties and claimed as an invention or a novelty.",
            ],
          },
          {
            cells: [
              "How far the patent reaches",
              "It extends to functional equivalents, implying that other people selling Basmati rice could be restricted by the patent.",
            ],
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Several attempts have also been made to patent uses, products and processes based on Indian
          traditional herbal medicines — e.g., <strong>turmeric</strong>, <strong>neem</strong>.
        </li>
        <li>
          If we are not vigilant and do not immediately counter these patent applications, other
          countries/individuals may encash on our rich legacy, and we may not be able to do anything
          about it.
        </li>
      </ul>

      <h3 id="h-10-4-biopiracy">Biopiracy</h3>
      <Callout type="important" title="Biopiracy">
        Biopiracy is the term used to refer to the use of bio-resources by multinational companies and
        other organisations{" "}
        <Highlight color="yellow">
          without proper authorisation from the countries and people concerned without compensatory
          payment
        </Highlight>
        .
      </Callout>
      <Comparison
        columns={[
          {
            title: "Industrialised nations",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Rich financially.</strong>
                </li>
                <li>Poor in biodiversity.</li>
                <li>Poor in traditional knowledge related to bio-resources.</li>
              </ul>
            ),
          },
          {
            title: "Developing and underdeveloped world",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Rich in biodiversity.</li>
                <li>Rich in traditional knowledge related to bio-resources.</li>
                <li>
                  Traditional knowledge can be exploited to develop modern applications, and can save
                  time, effort and expenditure during commercialisation.
                </li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        There has been growing realisation of the injustice, inadequate compensation, and benefit
        sharing between developed and developing countries. Therefore, some nations are developing laws
        to prevent such unauthorised exploitation of their bio-resources and traditional knowledge.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The Indian Parliament has recently cleared the <strong>second amendment of the Indian
          Patents Bill</strong>.
        </li>
        <li>
          The amendment takes such issues into consideration, including patent terms, emergency
          provisions, research, and development initiatives.
        </li>
      </ul>

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
