import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";

export default function BiotechnologyPrinciplesAndProcessesChapter() {
  return (
    <>
      <FactCard
        title="What biotechnology is"
        definition="Biotechnology deals with techniques of using live organisms or enzymes from organisms to produce products and processes useful to humans."
        icon="🧬"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Making <strong>curd, bread or wine</strong> — all microbe-mediated processes — could also be thought of as a
          form of biotechnology.
        </li>
        <li>
          In the restricted sense used today, it refers to those processes which use{" "}
          <strong>genetically modified organisms</strong> to achieve the same on a larger scale.
        </li>
        <li>
          Many other techniques are included too — <em>in vitro</em> fertilisation leading to a &lsquo;test-tube&rsquo;
          baby, synthesising a gene and using it, developing a DNA vaccine, or correcting a defective gene.
        </li>
      </ul>
      <Callout type="important" title="The EFB definition of biotechnology">
        The European Federation of Biotechnology (EFB) has given a definition of biotechnology that encompasses both
        the traditional view and modern molecular biotechnology:
        <p className="mt-2">
          &lsquo;
          <Highlight color="yellow">
            The integration of natural science and organisms, cells, parts thereof, and molecular analogues for
            products and services
          </Highlight>
          &rsquo;.
        </p>
      </Callout>
      <Expandable title="Scientist spotlight — Herbert Boyer and the sticky end" variant="misc">
        <p>
          Herbert Boyer was born in 1936 and brought up in a corner of western Pennsylvania where railroads and mines
          were the destiny of most young men. He completed graduate work at the University of Pittsburgh in 1963,
          followed by three years of post-graduate studies at Yale. In 1966, Boyer took over assistant professorship at
          the University of California at San Francisco.
        </p>
        <p className="mt-2">
          By 1969, he performed studies on a couple of restriction enzymes of the <em>E. coli</em> bacterium with
          especially useful properties. Boyer observed that these enzymes have the capability of cutting DNA strands in
          a particular fashion, which left what has become known as &lsquo;sticky ends&rsquo; on the strands. These
          clipped ends made pasting together pieces of DNA a precise exercise.
        </p>
        <p className="mt-2">
          This discovery, in turn, led to a rich and rewarding conversation in Hawaii with a Stanford scientist named
          Stanley Cohen. Cohen had been studying small ringlets of DNA called plasmids, which float about freely in the
          cytoplasm of certain bacterial cells and replicate independently from the coding strand of DNA. Cohen had
          developed a method of removing these plasmids from the cell and then reinserting them in other cells.
          Combining this process with that of DNA splicing enabled Boyer and Cohen to recombine segments of DNA in
          desired configurations and insert the DNA in bacterial cells, which could then act as manufacturing plants
          for specific proteins.
        </p>
        <p className="mt-2">
          <strong>This breakthrough was the basis upon which the discipline of biotechnology was founded.</strong>
        </p>
      </Expandable>

      <h2 id="h-9-1">9.1 Principles of Biotechnology</h2>
      <p>Among many, the two core techniques that enabled birth of modern biotechnology are:</p>
      <Comparison
        columns={[
          {
            title: "Genetic engineering",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Techniques to alter the <strong>chemistry of genetic material</strong> — DNA and RNA.
                </li>
                <li>
                  Introduce these into <strong>host organisms</strong>.
                </li>
                <li>
                  Thus change the <strong>phenotype</strong> of the host organism.
                </li>
              </ul>
            ),
          },
          {
            title: "Bioprocess engineering",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Maintenance of a <strong>sterile</strong> (microbial contamination-free) ambience in chemical
                  engineering processes.
                </li>
                <li>
                  Enables growth of only the <strong>desired microbe/eukaryotic cell</strong> in large quantities.
                </li>
                <li>
                  For manufacture of biotechnological products like <strong>antibiotics, vaccines, enzymes</strong>,
                  etc.
                </li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-9-1-principles">The conceptual development of genetic engineering</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Sexual reproduction</strong> provides opportunities for variations and formulation of unique
          combinations of genetic setup, some of which may be beneficial to the organism as well as the population.
        </li>
        <li>
          <strong>Asexual reproduction</strong> preserves the genetic information, while sexual reproduction permits
          variation.
        </li>
        <li>
          <strong>Traditional hybridisation</strong> procedures used in plant and animal breeding very often lead to
          inclusion and multiplication of <em>undesirable</em> genes along with the desired genes.
        </li>
        <li>
          The techniques of genetic engineering — creation of recombinant DNA, use of gene cloning and gene transfer —
          overcome this limitation.
        </li>
        <li>
          They allow us to isolate and introduce <strong>only one or a set of desirable genes</strong> without
          introducing undesirable genes into the target organism.
        </li>
      </ul>

      <h3 id="h-9-1-ori">Why an alien piece of DNA needs an origin of replication</h3>
      <p>
        Most likely, a piece of DNA transferred into an alien organism would <em>not</em> be able to multiply itself in
        the progeny cells of the organism. But when it gets integrated into the genome of the recipient, it may
        multiply and be inherited along with the host DNA — because the alien piece has become part of a{" "}
        <strong>chromosome</strong>, which has the ability to replicate.
      </p>
      <Callout type="important" title="Origin of replication">
        In a chromosome there is a specific DNA sequence called the{" "}
        <Highlight color="yellow">origin of replication</Highlight>, which is responsible for initiating replication.
        <p className="mt-2">
          An alien DNA is linked with the origin of replication, so that this alien piece of DNA can replicate and
          multiply itself in the host organism.
        </p>
      </Callout>
      <FactCard
        title="Cloning"
        definition="Making multiple identical copies of any template DNA."
        icon="⧉"
      />
      <Callout type="didyouknow" title="A vector is a carrier — in two very different worlds">
        A mosquito acts as an <strong>insect vector</strong> to transfer the malarial parasite into the human body. In
        the same way, a <strong>plasmid</strong> can be used as a vector to deliver an alien piece of DNA into the host
        organism.
      </Callout>

      <h3 id="h-9-1-first">The first artificial recombinant DNA molecule</h3>
      <p>
        The construction of the first recombinant DNA emerged from the possibility of linking a gene encoding
        antibiotic resistance with a native <strong>plasmid</strong> — autonomously replicating circular
        extra-chromosomal DNA — of <em>Salmonella typhimurium</em>. Stanley Cohen and Herbert Boyer accomplished this in{" "}
        <strong>1972</strong>.
      </p>
      <ProcessCard
        title="How Cohen and Boyer built the first recombinant DNA"
        steps={[
          {
            label: "Isolate the antibiotic resistance gene",
            description:
              "A piece of DNA responsible for conferring antibiotic resistance was cut out of a plasmid.",
          },
          {
            label: "Cut at specific locations",
            description:
              "The cutting of DNA at specific locations became possible with the discovery of the so-called 'molecular scissors' — restriction enzymes.",
          },
          {
            label: "Link the cut piece to plasmid DNA",
            description:
              "The cut piece of DNA was then linked with the plasmid DNA. These plasmid DNA act as vectors to transfer the piece of DNA attached to it.",
          },
          {
            label: "Join the ends with DNA ligase",
            description:
              "The linking of the antibiotic resistance gene with the plasmid vector became possible with the enzyme DNA ligase, which acts on cut DNA molecules and joins their ends.",
          },
          {
            label: "A new combination — recombinant DNA",
            description:
              "This makes a new combination of circular autonomously replicating DNA created in vitro, known as recombinant DNA.",
          },
          {
            label: "Transfer into E. coli and multiply",
            description:
              "When this DNA is transferred into Escherichia coli, a bacterium closely related to Salmonella, it could replicate using the new host's DNA polymerase enzyme and make multiple copies.",
          },
          {
            label: "Cloning of the antibiotic resistance gene",
            description:
              "The ability to multiply copies of the antibiotic resistance gene in E. coli was called cloning of antibiotic resistance gene in E. coli.",
          },
        ]}
      />
      <h3 id="h-9-1-steps">Three basic steps in genetically modifying an organism</h3>
      <Stepper
        steps={[
          {
            label: "(i) Identification of DNA with desirable genes",
            description: "Find the DNA that carries the gene you actually want.",
          },
          {
            label: "(ii) Introduction of the identified DNA into the host",
            description: "Carry that DNA into the host organism with a suitable vector.",
          },
          {
            label: "(iii) Maintenance of introduced DNA in the host",
            description: "Keep it there, and transfer the DNA to the progeny of the host.",
          },
        ]}
      />

      <h2 id="h-9-2">9.2 Tools of Recombinant DNA Technology</h2>
      <p>
        Genetic engineering or recombinant DNA technology can be accomplished only if we have the key tools. Five of
        them are named in the chapter:
      </p>
      <TableCard
        title="The five key tools"
        headers={["Tool", "Its job"]}
        rows={[
          {
            cells: [
              "Restriction enzymes",
              "Cut DNA at specific locations — the 'molecular scissors' of the trade.",
            ],
          },
          {
            cells: ["Polymerase enzymes", "Extend a growing DNA strand, copying the template."],
          },
          {
            cells: ["Ligases", "Join the ends of cut DNA molecules."],
          },
          {
            cells: [
              "Vectors",
              "Carry the alien piece of DNA into the host, where it is multiplied.",
            ],
          },
          {
            cells: [
              "The host organism",
              "The bacterium, plant or animal cell in which the recombinant DNA replicates.",
            ],
          },
        ]}
      />

      <h3 id="h-9-2-1">9.2.1 Restriction Enzymes</h3>
      <p>
        In the year <strong>1963</strong>, the two enzymes responsible for restricting the growth of bacteriophage in{" "}
        <em>Escherichia coli</em> were isolated. One of these added methyl groups to DNA, while the other cut DNA. The
        latter was called <strong>restriction endonuclease</strong>.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The first restriction endonuclease — <strong>Hind II</strong> — whose functioning depended on a specific DNA
          nucleotide sequence, was isolated and characterised five years later.
        </li>
        <li>
          Hind II always cut DNA molecules at a particular point by recognising a specific sequence of{" "}
          <strong>six base pairs</strong>.
        </li>
        <li>
          This specific base sequence is known as the <strong>recognition sequence</strong> for Hind II.
        </li>
        <li>
          Today we know more than <strong>900 restriction enzymes</strong>, isolated from over{" "}
          <strong>230 strains of bacteria</strong>, each of which recognises different recognition sequences.
        </li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard
          label="Known today"
          value="900+"
          unit="restriction enzymes"
          description="Each recognises a different sequence."
        />
        <MetricCard
          label="Source strains"
          value="230+"
          unit="strains of bacteria"
          description="From which these enzymes have been isolated."
        />
        <MetricCard
          label="Hind II recognition site"
          value="6"
          unit="base pairs"
          description="A specific six-base-pair sequence."
        />
      </div>

      <h3 id="h-9-2-1-naming">How these enzymes are named</h3>
      <p>
        The convention is that the first letter of the name comes from the <strong>genus</strong> and the second two
        letters come from the <strong>species</strong> of the prokaryotic cell from which they were isolated. Roman
        numbers following the names indicate the order in which the enzymes were isolated from that strain of bacteria.
      </p>
      <TableCard
        title="Reading the name EcoRI"
        headers={["Part of the name", "Comes from"]}
        rows={[
          { cells: ["E", "First letter of the genus — Escherichia"] },
          { cells: ["co", "First two letters of the species — coli"] },
          { cells: ["R", "The strain — RY 13"] },
          { cells: ["I", "Roman number — the first enzyme isolated from that strain"] },
        ]}
        caption="EcoRI therefore comes from Escherichia coli RY 13."
      />

      <h3 id="h-9-2-1-nucleases">Nucleases: exo and endo</h3>
      <p>Restriction enzymes belong to a larger class of enzymes called <strong>nucleases</strong>.</p>
      <Comparison
        columns={[
          {
            title: "Exonucleases",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Remove nucleotides from the <strong>ends</strong> of the DNA.</li>
                <li>They nibble inwards from a terminus.</li>
              </ul>
            ),
          },
          {
            title: "Endonucleases",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Make cuts at <strong>specific positions within</strong> the DNA.</li>
                <li>Restriction endonucleases belong to this group.</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-9-2-1-action">How a restriction endonuclease works</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Each restriction endonuclease functions by &lsquo;<strong>inspecting</strong>&rsquo; the length of a DNA
          sequence.
        </li>
        <li>
          Once it finds its specific recognition sequence, it binds to the DNA.
        </li>
        <li>
          It then cuts <strong>each of the two strands</strong> of the double helix at specific points in their
          sugar-phosphate backbones.
        </li>
        <li>
          Each restriction endonuclease recognises a specific <strong>palindromic</strong> nucleotide sequence in the
          DNA.
        </li>
      </ul>
      <Callout type="note" title="What a palindrome means in DNA">
        Palindromes are groups of letters that form the same words when read both forward and backward, e.g.
        &ldquo;MALAYALAM&rdquo;. As against a word-palindrome, where the same word is read in both directions, the
        palindrome in DNA is a sequence of base pairs that reads the same on the two strands when the orientation of
        reading is kept the same.
        <div className="my-3 overflow-x-auto rounded-xl border border-border/40 bg-muted/25 px-4 py-3">
          <pre className="text-center font-mono text-sm leading-relaxed text-foreground">
            {"5' —— GAATTC —— 3'\n3' —— CTTAAG —— 5'"}
          </pre>
        </div>
        These sequences read the same on the two strands in the 5&prime; → 3&prime; direction — and this is also true
        if read in the 3&prime; → 5&prime; direction.
      </Callout>

      <h3 id="h-9-2-1-sticky">Sticky ends</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Restriction enzymes cut the strand of DNA <strong>a little away from the centre</strong> of the palindrome
          sites, but <strong>between the same two bases</strong> on the opposite strands.
        </li>
        <li>This leaves single stranded portions at the ends.</li>
        <li>
          These overhanging stretches are called <strong>sticky ends</strong>, on each strand.
        </li>
        <li>
          They are named so because they form <strong>hydrogen bonds</strong> with their complementary cut
          counterparts.
        </li>
        <li>
          This stickiness of the ends facilitates the action of the enzyme <strong>DNA ligase</strong>.
        </li>
      </ul>
      <Callout type="important" title="One enzyme, two DNAs">
        Restriction endonucleases are used in genetic engineering to form &lsquo;recombinant&rsquo; molecules of DNA,
        which are composed of DNA from different sources/genomes.
        <p className="mt-2">
          When cut by the <strong>same</strong> restriction enzyme, the resultant DNA fragments have the same kind of
          sticky ends, and these can be joined together (end-to-end) using DNA ligases.{" "}
          <Highlight color="yellow">
            Unless one cuts the vector and the source DNA with the same restriction enzyme, the recombinant vector
            molecule cannot be created.
          </Highlight>
        </p>
      </Callout>

      <h3 id="h-9-2-1-gel">Separation and isolation of DNA fragments</h3>
      <p>
        The cutting of DNA by restriction endonucleases results in fragments of DNA. These fragments can be separated
        by a technique known as <strong>gel electrophoresis</strong>.
      </p>
      <FactCard
        title="Why DNA moves at all"
        definition="DNA fragments are negatively charged molecules, so they can be separated by forcing them to move towards the anode under an electric field through a medium/matrix."
        icon="⚡"
      />
      <ProcessCard
        title="Gel electrophoresis, step by step"
        steps={[
          {
            label: "Load the digest on the gel",
            description:
              "The matrix used nowadays is agarose — a natural polymer extracted from sea weeds. The sample is loaded in wells.",
          },
          {
            label: "Switch on the field",
            description:
              "Being negatively charged, the DNA fragments are forced to move towards the anode through the agarose matrix.",
          },
          {
            label: "The gel sieves by size",
            description:
              "The DNA fragments separate (resolve) according to their size through the sieving effect provided by the agarose gel. Hence, the smaller the fragment size, the farther it moves.",
          },
          {
            label: "Stain and see the bands",
            description:
              "Pure DNA fragments cannot be seen in visible light and without staining. The DNA is stained with ethidium bromide and exposed to UV radiation, which shows bright orange coloured bands of DNA.",
          },
          {
            label: "Elute the wanted band",
            description:
              "The separated bands of DNA are cut out from the agarose gel and extracted from the gel piece. This step is known as elution.",
          },
        ]}
      />
      <MistakeCard
        mistake="In gel electrophoresis, the DNA fragments travel towards the cathode (the negative electrode)."
        correction="DNA is negatively charged, so it moves towards the anode, the positive electrode. The wells are therefore at the cathode end, and the smallest fragments travel farthest from them."
        example="The chapter tells you to look at the gel and guess at which end the sample was loaded — the answer follows from the charge on DNA."
      />
      <p>
        The DNA fragments purified in this way are used in constructing recombinant DNA by joining them with cloning
        vectors.
      </p>

      <h3 id="h-9-2-2">9.2.2 Cloning Vectors</h3>
      <p>
        Plasmids and bacteriophages have the ability to <strong>replicate within bacterial cells independent of the
        control of chromosomal DNA</strong>. Bacteriophages, because of their high number per cell, have very high copy
        numbers of their genome within the bacterial cells.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Some plasmids may have only <strong>one or two copies</strong> per cell.
        </li>
        <li>
          Others may have <strong>15–100 copies</strong> per cell, and their numbers can go even higher.
        </li>
        <li>
          Link an alien piece of DNA with bacteriophage or plasmid DNA, and its numbers can be multiplied equal to the
          copy number of the plasmid or bacteriophage.
        </li>
        <li>
          Vectors used at present are engineered in such a way that they help easy linking of foreign DNA and selection
          of recombinants from non-recombinants.
        </li>
      </ul>

      <h3 id="h-9-2-2-ori">Origin of replication (ori)</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          This is a sequence <strong>from where replication starts</strong>.
        </li>
        <li>
          Any piece of DNA, when linked to this sequence, can be made to replicate within the host cells.
        </li>
        <li>
          This sequence is also responsible for <strong>controlling the copy number</strong> of the linked DNA.
        </li>
        <li>
          So, if one wants to recover many copies of the target DNA, it should be cloned in a vector whose origin
          supports a <strong>high copy number</strong>.
        </li>
      </ul>

      <h3 id="h-9-2-2-marker">Selectable marker</h3>
      <p>
        In addition to &lsquo;ori&rsquo;, the vector requires a <strong>selectable marker</strong>, which helps in
        identifying and eliminating non-transformants and selectively permitting the growth of the transformants.
      </p>
      <FactCard
        title="Transformation"
        definition="A procedure through which a piece of DNA is introduced in a host bacterium."
        icon="↔"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Normally, the genes encoding resistance to antibiotics such as <strong>ampicillin, chloramphenicol,
          tetracycline or kanamycin</strong>, etc., are considered useful selectable markers for <em>E. coli</em>.
        </li>
        <li>
          The normal <em>E. coli</em> cells do <strong>not</strong> carry resistance against any of these antibiotics.
        </li>
      </ul>

      <h3 id="h-9-2-2-sites">Cloning sites</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          In order to link the alien DNA, the vector needs to have <strong>very few, preferably single</strong>,
          recognition sites for the commonly used restriction enzymes.
        </li>
        <li>
          Presence of more than one recognition site within the vector will generate several fragments, which will
          complicate the gene cloning.
        </li>
        <li>
          The ligation of alien DNA is carried out at a restriction site present in one of the two antibiotic
          resistance genes.
        </li>
        <li>
          For example, you can ligate a foreign DNA at the <em>BamH</em> I site of the tetracycline resistance gene in
          the vector <strong>pBR322</strong>.
        </li>
      </ul>
      <Callout type="note" title="Inside pBR322">
        The <em>E. coli</em> cloning vector pBR322 shows restriction sites (Hind III, EcoR I, BamH I, Sal I, Pvu II,
        Pst I, Cla I), an <strong>ori</strong> and the antibiotic resistance genes (amp<sup>R</sup> and tet
        <sup>R</sup>). <strong>rop</strong> codes for the proteins involved in the replication of the plasmid.
      </Callout>
      <p>
        The recombinant plasmids will <strong>lose tetracycline resistance</strong> due to insertion of foreign DNA,
        but can still be selected out from non-recombinant ones by plating the transformants on an ampicillin
        containing medium. The transformants growing on ampicillin containing medium are then transferred on a medium
        containing tetracycline.
      </p>
      <TableCard
        title="What grows where"
        headers={["Medium", "Recombinants", "Non-recombinants"]}
        rows={[
          { cells: ["Ampicillin", "Grow", "Grow"] },
          { cells: ["Ampicillin + tetracycline", "Do not grow", "Grow"] },
        ]}
        caption="Both recombinants and non-recombinants are transformants that carry a plasmid, so both grow on ampicillin. One antibiotic resistance gene helps in selecting the transformants; the other gets 'inactivated due to insertion' of alien DNA and helps in selection of recombinants."
      />
      <Callout type="important" title="Insertional inactivation — the colour screen">
        Selection of recombinants due to inactivation of antibiotics is a <em>cumbersome</em> procedure, because it
        requires simultaneous plating on two plates having different antibiotics. Alternative selectable markers
        therefore differentiate recombinants from non-recombinants on the basis of their ability to produce colour in
        the presence of a <strong>chromogenic substrate</strong>.
        <p className="mt-2">
          In this, a recombinant DNA is inserted within the coding sequence of an enzyme,{" "}
          <strong>β-galactosidase</strong>. This results into inactivation of the gene for synthesis of this enzyme —
          referred to as <strong>insertional inactivation</strong>.
        </p>
        <p className="mt-2">
          The presence of a chromogenic substrate gives <strong>blue coloured colonies</strong> if the plasmid in the
          bacteria does not have an insert. Presence of an insert results in insertional inactivation of the
          β-galactosidase gene, so the colonies <strong>do not produce any colour</strong> — these are identified as
          recombinant colonies.
        </p>
      </Callout>
      <Comparison
        columns={[
          {
            title: "Selectable marker",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Identifies and eliminates <strong>non-transformants</strong>; permits growth of the transformants
                  only.
                </li>
                <li>
                  Usually a gene for resistance to an antibiotic the normal host cell is <em>not</em> resistant to.
                </li>
                <li>Tells you that DNA got into the cell — nothing about whether that DNA is recombinant.</li>
              </ul>
            ),
          },
          {
            title: "Insertional inactivation",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  Separates <strong>recombinants</strong> from non-recombinants, both of which are already
                  transformants.
                </li>
                <li>
                  Works because the insert disrupts a <em>second</em> gene — an antibiotic resistance gene, or the gene
                  for β-galactosidase.
                </li>
                <li>
                  The antibiotic version needs two plates; the chromogenic version reads the colour of the colonies on
                  one plate.
                </li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="A blue colony on the chromogenic plate is the recombinant one."
        correction="Blue means β-galactosidase is still active, so the plasmid has no insert. The recombinant colony is the one that produces no colour, because the inserted DNA has inactivated the β-galactosidase gene."
      />

      <h3 id="h-9-2-2-plants">Vectors for cloning genes in plants and animals</h3>
      <p>
        We have learnt the lesson of transferring genes into plants and animals from bacteria and viruses, which have
        known this for ages — how to deliver genes to transform eukaryotic cells and force them to do what the bacteria
        or viruses want.
      </p>
      <TableCard
        title="Pathogens that taught us to deliver genes"
        headers={["Vector", "Host", "What it does naturally", "After being disarmed"]}
        rows={[
          {
            cells: [
              "Agrobacterium tumifaciens",
              "Several dicot plants",
              "Delivers a piece of DNA known as 'T-DNA' to transform normal plant cells into a tumor, and directs these tumor cells to produce the chemicals required by the pathogen.",
              "The tumor inducing (Ti) plasmid has been modified into a cloning vector that is no more pathogenic to the plants but is still able to deliver genes of our interest into a variety of plants.",
            ],
          },
          {
            cells: [
              "Retroviruses",
              "Animals",
              "Have the ability to transform normal cells into cancerous cells.",
              "Retroviruses have also been disarmed and are now used to deliver desirable genes into animal cells.",
            ],
          },
        ]}
      />
      <KeyPoint title="What happens after ligation">
        Once a gene or a DNA fragment has been ligated into a suitable vector, it is transferred into a bacterial,
        plant or animal host — where it multiplies.
      </KeyPoint>

      <h3 id="h-9-2-3">9.2.3 Competent Host (For Transformation with Recombinant DNA)</h3>
      <p>
        DNA is a <strong>hydrophilic</strong> molecule, so it cannot pass through cell membranes. In order to force
        bacteria to take up the plasmid, the bacterial cells must first be made &lsquo;
        <strong>competent</strong>&rsquo; to take up DNA.
      </p>
      <ProcessCard
        title="Making a cell competent, then transforming it"
        steps={[
          {
            label: "Treat with a divalent cation",
            description:
              "The cells are treated with a specific concentration of a divalent cation, such as calcium. This increases the efficiency with which DNA enters the bacterium through pores in its cell wall.",
          },
          {
            label: "Incubate with the recombinant DNA on ice",
            description: "Recombinant DNA is placed in contact with the competent cells, on ice.",
          },
          {
            label: "Heat shock at 42 °C",
            description: "The cells are placed briefly at 42 °C.",
          },
          {
            label: "Back on ice",
            description:
              "The cells are put back on ice. This enables the bacteria to take up the recombinant DNA.",
          },
        ]}
      />
      <p>This is not the only way to introduce alien DNA into host cells.</p>
      <TableCard
        title="Other ways in"
        headers={["Method", "How it works", "Best suited to"]}
        rows={[
          {
            cells: [
              "Micro-injection",
              "Recombinant DNA is directly injected into the nucleus of the cell.",
              "Animal cells",
            ],
          },
          {
            cells: [
              "Biolistics (gene gun)",
              "Cells are bombarded with high velocity micro-particles of gold or tungsten coated with DNA.",
              "Plants",
            ],
          },
          {
            cells: [
              "Disarmed pathogen vectors",
              "The pathogen is allowed to infect the cell, and in doing so transfers the recombinant DNA into the host.",
              "Host cells the pathogen naturally infects",
            ],
          },
        ]}
      />

      <h2 id="h-9-3">9.3 Processes of Recombinant DNA Technology</h2>
      <p>Recombinant DNA technology involves several steps in a specific sequence:</p>
      <ProcessCard
        title="The recombinant DNA workflow"
        steps={[
          {
            label: "Isolation of DNA",
            description: "The genetic material is released from the cell and purified.",
          },
          {
            label: "Fragmentation of DNA by restriction endonucleases",
            description: "The purified DNA is cut into fragments at specific recognition sequences.",
          },
          {
            label: "Isolation of a desired DNA fragment",
            description: "The fragments are separated by gel electrophoresis and the wanted band is eluted.",
          },
          {
            label: "Ligation of the DNA fragment into a vector",
            description:
              "The cut out gene of interest and the cut vector are mixed and ligase is added, giving recombinant DNA.",
          },
          {
            label: "Transferring the recombinant DNA into the host",
            description: "The ligated DNA is introduced into recipient cells made competent to receive it.",
          },
          {
            label: "Culturing the host cells in a medium at large scale",
            description: "The transformed cells are grown in large volumes so that the product accumulates.",
          },
          {
            label: "Extraction of the desired product",
            description: "The product is recovered and processed before it can be marketed.",
          },
        ]}
      />

      <h3 id="h-9-3-1">9.3.1 Isolation of the Genetic Material (DNA)</h3>
      <p>
        Nucleic acid is the genetic material of all organisms without exception; in the majority of organisms this is
        deoxyribonucleic acid, or <strong>DNA</strong>. In order to cut the DNA with restriction enzymes, it needs to be
        in <strong>pure form</strong>, free from other macro-molecules.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>DNA is enclosed within membranes, so the cell has to be broken open.</li>
        <li>
          That releases DNA along with other macromolecules — <strong>RNA, proteins, polysaccharides</strong> and also{" "}
          <strong>lipids</strong>.
        </li>
        <li>
          Genes are located on long molecules of DNA intertwined with proteins such as <strong>histones</strong>.
        </li>
      </ul>
      <TableCard
        title="Which enzyme opens which cell"
        headers={["Enzyme used", "Acts on"]}
        rows={[
          { cells: ["Lysozyme", "Bacteria"] },
          { cells: ["Cellulase", "Plant cells"] },
          { cells: ["Chitinase", "Fungus"] },
        ]}
      />
      <TableCard
        title="Clearing away the contaminants"
        headers={["Unwanted molecule", "Removed by"]}
        rows={[
          { cells: ["RNA", "Treatment with ribonuclease"] },
          { cells: ["Proteins", "Treatment with protease"] },
          { cells: ["Other molecules", "Appropriate treatments"] },
        ]}
        caption="Purified DNA ultimately precipitates out after the addition of chilled ethanol, and can be seen as a collection of fine threads in the suspension. It is then removed by spooling."
      />

      <h3 id="h-9-3-2">9.3.2 Cutting of DNA at Specific Locations</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Restriction enzyme digestions are performed by incubating purified DNA molecules with the restriction enzyme,
          at the <strong>optimal conditions</strong> for that specific enzyme.
        </li>
        <li>
          <strong>Agarose gel electrophoresis</strong> is employed to check the progression of a restriction enzyme
          digestion.
        </li>
        <li>
          DNA is a negatively charged molecule, hence it moves towards the positive electrode (anode).
        </li>
        <li>
          The process is repeated with the <strong>vector DNA</strong> also.
        </li>
      </ul>
      <KeyPoint title="The joining step">
        After having cut the source DNA as well as the vector DNA with a specific restriction enzyme, the cut out
        &lsquo;gene of interest&rsquo; from the source DNA and the cut vector with space are mixed and{" "}
        <strong>ligase</strong> is added. This results in the preparation of recombinant DNA.
      </KeyPoint>

      <h3 id="h-9-3-3">9.3.3 Amplification of Gene of Interest using PCR</h3>
      <p>
        <strong>PCR</strong> stands for <strong>Polymerase Chain Reaction</strong>. In this reaction, multiple copies of
        the gene (or DNA) of interest is synthesised <em>in vitro</em> using two sets of <strong>primers</strong> and
        the enzyme <strong>DNA polymerase</strong>.
      </p>
      <FactCard
        title="Primers"
        definition="Small chemically synthesised oligonucleotides that are complementary to the regions of DNA."
        icon="🧫"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The enzyme extends the primers using the <strong>nucleotides</strong> provided in the reaction and the{" "}
          <strong>genomic DNA as template</strong>.
        </li>
        <li>
          If the process of replication of DNA is repeated many times, the segment of DNA can be amplified to
          approximately <strong>billion times</strong> — that is, 1 billion copies are made.
        </li>
        <li>
          Such repeated amplification is achieved by the use of a <strong>thermostable DNA polymerase</strong>, isolated
          from a bacterium, <em>Thermus aquaticus</em>.
        </li>
        <li>
          This enzyme remains active during the high temperature induced denaturation of double stranded DNA.
        </li>
        <li>
          The amplified fragment, if desired, can now be used to ligate with a vector for further cloning.
        </li>
      </ul>
      <CycleDiagram
        title="Each PCR cycle has three steps"
        steps={[
          {
            label: "Denaturation",
            detail:
              "The double stranded DNA is separated into single strands by high temperature.",
          },
          {
            label: "Primer annealing",
            detail:
              "The two sets of primers, complementary to the regions of DNA, anneal to the separated strands.",
          },
          {
            label: "Extension of primers",
            detail:
              "DNA polymerase extends the primers using the nucleotides provided in the reaction and the genomic DNA as template.",
          },
        ]}
      />
      <MistakeCard
        mistake="PCR is how a gene is cloned inside a bacterial cell."
        correction="PCR multiplies the gene in vitro, in a reaction tube, with primers, DNA polymerase and nucleotides. Cloning in a host comes later: the amplified fragment is ligated with a vector, put into a bacterial, plant or animal host, and multiplied there using the host's own replication machinery."
      />

      <h3 id="h-9-3-4">9.3.4 Insertion of Recombinant DNA into the Host Cell/Organism</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>There are several methods of introducing the ligated DNA into recipient cells.</li>
        <li>
          Recipient cells, after making them &lsquo;competent&rsquo; to receive, take up DNA present in their
          surroundings.
        </li>
        <li>
          If a recombinant DNA bearing a gene for resistance to an antibiotic (e.g. ampicillin) is transferred into{" "}
          <em>E. coli</em> cells, the host cells become transformed into <strong>ampicillin-resistant cells</strong>.
        </li>
        <li>
          Spread the transformed cells on agar plates containing ampicillin: only <strong>transformants</strong> will
          grow, untransformed recipient cells will die.
        </li>
        <li>
          Because of the ampicillin resistance gene, one is able to select a transformed cell in the presence of
          ampicillin — the gene in this case is called a <strong>selectable marker</strong>.
        </li>
      </ul>

      <h3 id="h-9-3-5">9.3.5 Obtaining the Foreign Gene Product</h3>
      <p>
        When you insert a piece of alien DNA into a cloning vector and transfer it into a bacterial, plant or animal
        cell, the alien DNA gets multiplied. In almost all recombinant technologies, the ultimate aim is to produce a{" "}
        <strong>desirable protein</strong>, so there is a need for the recombinant DNA to be expressed. The foreign gene
        gets expressed under appropriate conditions.
      </p>
      <FactCard
        title="Recombinant protein"
        definition="If any protein encoding gene is expressed in a heterologous host, it is called a recombinant protein."
        icon="🧪"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The cells harbouring cloned genes of interest may be grown on a{" "}
          <strong>small scale in the laboratory</strong>.
        </li>
        <li>
          The cultures may be used for extracting the desired protein and then purifying it by using different
          separation techniques.
        </li>
        <li>
          The cells can also be multiplied in a <strong>continuous culture system</strong>, wherein the used medium is
          drained out from one side while fresh medium is added from the other.
        </li>
        <li>
          This maintains the cells in their physiologically most active <strong>log/exponential phase</strong>.
        </li>
        <li>
          This type of culturing method produces a larger biomass, leading to higher yields of the desired protein.
        </li>
      </ul>
      <Callout type="important" title="Why bioreactors were needed">
        Small volume cultures cannot yield appreciable quantities of products. To produce in large quantities, the
        development of <strong>bioreactors</strong> — where large volumes (100–1000 litres) of culture can be
        processed — was required.
        <p className="mt-2">
          Bioreactors can be thought of as vessels in which raw materials are biologically converted into specific
          products, individual enzymes, etc., using microbial, plant, animal or human cells.
        </p>
      </Callout>
      <p>
        A bioreactor provides the optimal conditions for achieving the desired product by providing optimum growth
        conditions — <strong>temperature, pH, substrate, salts, vitamins, oxygen</strong>. The most commonly used
        bioreactors are of <strong>stirring type</strong>.
      </p>
      <TableCard
        title="Parts of a stirred-tank bioreactor"
        headers={["System or part", "What it does"]}
        rows={[
          {
            cells: [
              "Vessel shape",
              "Usually cylindrical, or with a curved base, to facilitate the mixing of the reactor contents.",
            ],
          },
          {
            cells: [
              "Stirrer / agitator system",
              "Facilitates even mixing and oxygen availability throughout the bioreactor.",
            ],
          },
          {
            cells: [
              "Oxygen delivery system",
              "Supplies oxygen — alternatively, air can be bubbled (sparged) through the reactor.",
            ],
          },
          { cells: ["Foam control system", "Keeps the foam produced during stirring under control."] },
          { cells: ["Temperature control system", "Holds the culture at the optimum temperature."] },
          { cells: ["pH control system", "Holds the culture at the optimum pH."] },
          {
            cells: [
              "Sampling ports",
              "Let small volumes of the culture be withdrawn periodically for checking.",
            ],
          },
        ]}
      />
      <MistakeCard
        mistake="A bioreactor is simply a large flask in which cells are grown."
        correction="A stirred-tank bioreactor is a controlled vessel. Besides holding a large volume, it has an agitator system, an oxygen delivery system, a foam control system, a temperature control system, a pH control system and sampling ports — none of which a shake flask provides."
        example="Exercise 6 asks exactly what a stirred tank bioreactor offers over a shake flask, apart from better aeration and mixing."
      />

      <h3 id="h-9-3-6">9.3.6 Downstream Processing</h3>
      <p>
        After completion of the biosynthetic stage, the product has to be subjected through a series of processes before
        it is ready for marketing as a finished product. The processes include separation and purification, which are
        collectively referred to as <strong>downstream processing</strong>.
      </p>
      <ProcessCard
        title="From bioreactor to market"
        steps={[
          {
            label: "Separation and purification",
            description:
              "The product is separated from the culture and purified — together these are downstream processing.",
          },
          {
            label: "Formulation",
            description: "The product has to be formulated with suitable preservatives.",
          },
          {
            label: "Clinical trials",
            description: "Such formulation has to undergo thorough clinical trials as in case of drugs.",
          },
          {
            label: "Quality control testing",
            description: "Strict quality control testing for each product is also required.",
          },
        ]}
      />
      <Callout type="note" title="No single recipe">
        The downstream processing and quality control testing <strong>vary from product to product</strong>. There is no
        one protocol that fits every product coming out of a bioreactor.
      </Callout>

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
