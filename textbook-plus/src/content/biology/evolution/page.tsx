import Image from "next/image";
import { Callout } from "@/components/content/Callout";
import { Comparison } from "@/components/content/Comparison";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Stepper } from "@/components/content/Stepper";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { FormulaBlock } from "@/components/content/Formula";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { Timeline } from "@/components/content/process/Timeline";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { BrainSizeBars } from "@/components/content/biology/BrainSizeBars";
import { FinchBeaksDiagram } from "@/components/content/biology/FinchBeaksDiagram";
import { MillerApparatusDiagram } from "@/components/content/biology/MillerApparatusDiagram";
import { PocketGrid } from "@/components/content/PocketGrid";

export default function EvolutionChapter() {
  return (
    <>
      <FactCard
        title="Evolutionary biology"
        definition="The study of history of life forms on earth. An orderly change from one form to another."
        icon="🧬"
      />


      <h2 id="h-6-1">6.1 Origin of Life</h2>

      <p>
        The origin of life is considered a unique event in the history of the universe. The universe is vast, and
        relatively speaking the earth itself is almost only a speck.
      </p>

      <h3 id="h-6-1-early-earth">From the Big Bang to the first oceans</h3>
      <Timeline
        title="Three dates that set the stage"
        rtl={false}
        events={[
          {
            date: "13.8 billion years ago",
            label: "The universe",
            detail: "Huge clusters of galaxies, containing stars and clouds of gas and dust — the universe is almost 13.8 billion years old.",
          },
          {
            date: "4.5 billion years ago",
            label: "The earth",
            detail: "Formed in the solar system of the milky way galaxy. There was no atmosphere on early earth.",
          },
          {
            date: "Almost 4 billion years ago",
            label: "Life appears",
            detail: "Life appeared 500 million years after the formation of earth.",
          },
        ]}
      />
      <p>
        The <strong>Big Bang theory</strong> explains the origin of the universe as a singular, huge explosion. What
        followed can be read as four steps.
      </p>
      <Stepper
        steps={[
          {
            label: "A singular explosion",
            description: "The beginning is unimaginable in physical terms.",
          },
          {
            label: "Expansion and cooling",
            description: "The universe expanded, and the temperature came down.",
          },
          {
            label: "Hydrogen and helium form",
            description: "The first elements formed sometime later.",
          },
          {
            label: "Galaxies condense",
            description: "Gases condensed under gravitation into the galaxies of the present-day universe.",
          },
        ]}
      />
      <ProcessCard
        title="How the early earth was prepared for life"
        steps={[
          {
            label: "No atmosphere, only a molten surface",
            description:
              "Water vapour, methane, carbon dioxide and ammonia released from the molten mass covered the surface of early earth.",
          },
          {
            label: "UV rays split water",
            description:
              "The UV rays from the sun broke up water into hydrogen and oxygen. The lighter H₂ escaped.",
          },
          {
            label: "Oxygen mops up the reducing gases",
            description:
              "Oxygen combined with ammonia and methane to form water, CO₂ and others.",
          },
          {
            label: "The ozone layer forms",
            description: "The ozone layer was formed as these reactions proceeded.",
          },
          {
            label: "Rain fills the depressions",
            description:
              "As the earth cooled, the water vapour fell as rain, to fill all the depressions and form oceans.",
          },
        ]}
      />

      <h3 id="h-6-1-origin-ideas">Where did the first life come from?</h3>
      <TableCard
        title="Five answers to one question: where did the first life come from?"
        headers={["Theory", "Claim", "Present status"]}
        rows={[
          {
            cells: [
              "Special creation",
              "Life created by a supernatural power (by God); earth only about 4,000 years old. Diversity fixed since then and forever.",
              "Mythological; rejected by science.",
            ],
          },
          {
            cells: [
              "Panspermia",
              "Life came to earth as spores from outer space (early Greek thinkers and astronomers).",
              "Still a favourite idea for some.",
            ],
          },
          {
            cells: [
              "Abiogenesis (spontaneous generation)",
              "Life came from decaying/rotting matter such as straw, mud, etc.",
              "Dismissed once and for all by Louis Pasteur.",
            ],
          },
          {
            cells: [
              "Biogenesis",
              "\"Omnis vivum ex ovo\": new life only from pre-existing life.",
              "Accepted as a working principle.",
            ],
          },
          {
            cells: [
              "Chemical evolution",
              "The first life came from pre-existing non-living organic molecules (RNA, proteins, etc.) under early-earth conditions; Oparin & Haldane.",
              "More or less accepted.",
            ],
          },
        ]}
        caption="Pasteur settled the spontaneous-generation claim; chemical evolution is the version the chapter develops."
      />

      <Expandable title="The five theories, in detail">
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Special creation</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Life was created by a supernatural power — God (mythological; associated with Father Suarez).</li>
              <li>Three connotations: all present creatures were created as such; diversity never changes; earth about 4,000 years old.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Abiogenesis (spontaneous generation)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Life arose from decaying matter — straw, mud, etc. (living from non-living).</li>
              <li>Rejected by Louis Pasteur via the swan-neck flask experiment (sterile broth, no growth; growth appeared only when the neck was removed).</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Biogenesis</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Core maxim: <strong>&quot;Omnis vivum ex ovo or vivo&quot;</strong> — new life can originate only from
                pre-existing life. The experiment here set out to disprove abiogenesis (spontaneous generation from
                mud, straw, etc.).
              </li>
              <li>
                <strong>Swan-neck flask experiment:</strong> Louis Pasteur boiled nutrient broth in swan-neck flasks
                to kill existing microbes; the curved neck allowed air in but trapped airborne dust and spores.
              </li>
              <li>
                <strong>Results:</strong> broth in the curved flask stayed sterile (free of life); once the neck was
                removed or opened, microbial growth appeared.
              </li>
              <li>
                <strong>Conclusion and limitation:</strong> it permanently rejected spontaneous generation without
                explaining how the very first life itself emerged on earth.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Panspermia (cosmic theory)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Early Greek astronomers suggested units of life called <em>spores</em> were transferred from outer space to earth and other planets.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Chemical evolution (modern theory)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Proposed by <strong>Oparin</strong> (Russia) and <strong>Haldane</strong> (England); principle: <em>&quot;abiogenesis first, but biogenesis ever since&quot;</em>.</li>
              <li>Evolutionary sequence: inorganic constituents (NH₃, CH₄, etc.) → organic molecules (RNA, proteins) → life.</li>
              <li>Conditions: high temperature, volcanic storms, reducing atmosphere of methane and ammonia.</li>
              <li>Key note: first life originated in <strong>water</strong>; water is therefore essential for the origin of life.</li>
            </ul>
          </div>
        </div>
      </Expandable>

      <MistakeCard
        mistake="Pasteur's experiment explained how the very first life form arose on earth."
        correction="Pasteur only showed that life does not arise from non-living matter today. How the first life form came on earth remained an open question."
        example="The very next step in the chapter — chemical evolution — exists precisely because Pasteur left this gap."
      />

      <h3 id="h-6-1-chemical">Chemical evolution and the Urey-Miller experiment</h3>
      <Callout type="important" title="Aim of the experiment">
        To prove the theory of chemical evolution — that the organic molecules of life could form from inorganic
        gases on the early earth.
      </Callout>

      <p>
        Oparin (Russia) and Haldane (England) had proposed that the first form of life came from pre-existing
        non-living organic molecules, and that life was preceded by{" "}
        <Highlight color="yellow">chemical evolution</Highlight>. The Urey-Miller experiment put that idea to the
        test.
      </p>
      <TableCard
        title="Experimental setup and components"
        headers={["Component", "What it does"]}
        rows={[
          { cells: ["Closed flask", "Holds the gas mixture of CH₄, H₂, NH₃ and water vapour at 800 °C."] },
          { cells: ["Gas ratio", "CH₄ : NH₃ : H₂ = 2 : 1 : 2 — the reducing early-earth atmosphere."] },
          { cells: ["Electric discharge", "Spark discharge inside the flask, simulating lightning."] },
          { cells: ["Condenser", "Cools and condenses the circulating gases and water vapour."] },
          { cells: ["Boiling water flask", "At the base; supplies water vapour and heat."] },
          { cells: ["Trap", "Collects the water carrying the organic compounds formed."] },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "The apparatus",
            children: <MillerApparatusDiagram compact />,
          },
          {
            title: "What it yielded",
            children: (
              <>
                <KeyPoint title="Primary product formed">Amino acids.</KeyPoint>
                <Callout type="didyouknow" title="Compounds made by similar later experiments">
                  Sugars, nitrogenous bases, pigments and fats.
                </Callout>
              </>
            ),
          },
        ]}
      />
      <Expandable title="In-text question — what did the Urey-Miller experiment actually prove?">
        <p>
          It showed that <strong>organic molecules can be built from inorganic gases</strong> under the conditions
          of the early earth — that is, it supported chemical evolution. It said nothing about how those molecules
          came together into a self-replicating, metabolising capsule of life.
        </p>
      </Expandable>

      <h2 id="h-6-2">6.2 Evolution of Life Forms – A Theory</h2>
      <h3 id="h-6-2-darwin">⛵ 2. Charles Darwin &amp; the H.M.S. Beagle voyage</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          🚢 <strong>Voyage:</strong> world exploration aboard the sail ship{" "}
          <strong>H.M.S. Beagle</strong>.
        </li>
        <li>
          🔬 <strong>Core inferences and conclusions:</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>
              Existing living forms share varying degrees of similarities among themselves and with life forms that
              existed millions of years ago.
            </li>
            <li>
              Extinctions of different life forms occurred in the past, alongside the emergence of new life
              forms at different periods of the history of the earth.
            </li>
            <li>
              Life forms undergo <Highlight color="yellow">gradual evolution</Highlight> over time.
            </li>
          </ul>
        </li>
      </ul>
      <p className="font-semibold">Darwin’s argument, in four moves.</p>
      <Stepper
        steps={[
          {
            label: "Variation is already there",
            description: "Any population has built-in variation in characteristics.",
          },
          {
            label: "Some survive and breed better",
            description:
              "Characteristics that enable better survival in natural conditions let their owners outbreed the less-endowed under the same conditions.",
          },
          {
            label: "Fitness means reproductive fitness",
            description:
              "The fitness, according to Darwin, refers ultimately and only to reproductive fitness. Those better fit in an environment leave more progeny than others.",
          },
          {
            label: "Nature selects",
            description:
              "They survive more and are therefore selected by nature — he called it natural selection, and implied it as a mechanism of evolution.",
          },
        ]}
      />
      <h3 id="h-6-2-wallace">⏳ 4. Alfred Wallace &amp; Geological Correlation</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          🏝️ <strong>Alfred Wallace:</strong> a naturalist working in the <strong>Malay Archipelago</strong> who
          independently arrived at similar conclusions regarding natural selection around the same time.
        </li>
        <li>
          🌳 <strong>Common ancestors:</strong> all existing life forms share similarities and common ancestors that
          lived at different periods in Earth’s history (<strong>epochs, periods and eras</strong>).
        </li>
        <li>
          ⏳ <strong>Earth’s true age:</strong> geological history closely correlates with biological history; the
          earth is not thousands of years old but{" "}
          <Highlight color="yellow">billions of years old</Highlight>.
        </li>
      </ul>

      <h2 id="h-6-3">6.3 What are the Evidences for Evolution?</h2>
      <PocketGrid
        title="Tap a pocket to open its evidence"
        items={[
          {
            id: "h-6-3-fossils",
            icon: "🦴",
            label: "1. Palaeontological",
            note: "Fossils and the rock record.",
            content: (
              <>
      <Callout type="important" title="Palaeontology and fossils">
        <strong>Palaeontology</strong> is the study of fossils.{" "}
        <Highlight color="yellow">Fossils are hard remains of life-forms preserved in rocks.</Highlight>
      </Callout>
      <p>
        Rocks are formed by <strong>sedimentation</strong>. A cross-section of the earth&apos;s crust therefore shows
        sediments arranged one over the other across the long history of the earth, and different-aged sediments
        contain the fossils of life-forms that died while that sediment was forming.
      </p>
      <TableCard
        title="What the fossil record tells us"
        headers={["What is studied", "Example"]}
        rows={[
          {
            cells: ["Phylogeny — the evolutionary or race history of a group", "Horse evolution."],
          },
          {
            cells: [
              "Connecting links between two groups of organisms",
              "Archaeopteryx, which links reptiles and birds.",
            ],
          },
          {
            cells: [
              "Extinct animals",
              "Dinosaurs — Triceratops, Tyrannosaurus, Pteranodon, Stegosaurus and Brachiosaurus — and crocodilians.",
            ],
          },
          {
            cells: [
              "Geological periods",
              "Fossils in successive sedimentary layers fix the period in which those organisms existed.",
            ],
          },
          {
            cells: [
              "Change over time",
              "Life-forms varied over time, and some forms are restricted to certain geological time-spans — so new forms arose at different times.",
            ],
          },
        ]}
      />
      <KeyPoint title="Connecting link">
        A fossil that bridges two groups by carrying features of both. <em>Archaeopteryx</em> shows reptilian as well
        as avian characters, so it is a connecting link between reptiles and birds.
      </KeyPoint>

              </>
            ),
          },
          {
            id: "h-6-3-homology",
            icon: "🫀",
            label: "2. Morphological and anatomical",
            note: "Homology and analogy.",
            content: (
              <>
      <Callout type="important" title="Homologous organs (homology)">
        Organs with a{" "}
        <Highlight color="yellow">similar internal structure but different functions</Highlight>, suited to different
        environmental conditions. Homology is the result of{" "}
        <Highlight color="yellow">divergent evolution</Highlight> and indicates <strong>common ancestry</strong>.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Forelimbs of mammals — the human hand, whale&apos;s flippers, bat&apos;s wings and cheetah&apos;s foot — are
          all built from the same bones: <strong>humerus, radius, ulna, carpals, metacarpals and phalanges</strong>.
        </li>
        <li>
          Homology is also seen in internal organs such as the <strong>heart</strong> and <strong>brain</strong>.
        </li>
        <li>
          In plants, the <strong>thorns of Bougainvillea</strong> and the <strong>tendrils of Cucurbita</strong>.
        </li>
      </ul>
      <figure className="my-6">
        <Image
          src="/images/biology/evolution/homologous-forelimbs-comparison.jpg"
          alt="Forelimbs of a frog, lizard, bird, human, cat, whale and bat drawn side by side, each labelled with the same bones — humerus, ulna, radius and carpal — and digits 1 to 5."
          width={611}
          height={483}
          className="mx-auto h-auto w-full max-w-[611px] rounded-2xl border border-border/60 bg-white"
        />
        <figcaption className="mt-2 text-center text-xs leading-relaxed text-muted-foreground">
          The same bones in seven forelimbs. Image: &quot;Various vertebrate limbs&quot; by Ruth Lawson (Otago
          Polytechnic), CC BY 3.0, via Wikimedia Commons.
        </figcaption>
      </figure>
      <Callout type="important" title="Analogous organs (analogy)">
        Organs with{" "}
        <Highlight color="yellow">different internal structures but the same function</Highlight>, suited to similar
        environmental conditions. Analogy is the result of{" "}
        <Highlight color="yellow">convergent evolution</Highlight>.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Wings of insects (a thin flap of chitin) and wings of birds (modified forelimbs).</li>
        <li>Eyes of the octopus (retina formed from skin) and eyes of mammals (retina from the embryonic brain).</li>
        <li>Flippers of penguins and dolphins.</li>
        <li>Sweet potato (a modified root) and potato (a modified stem), both for food storage.</li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Homologous organs",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Structure</strong> — similar.</li>
                <li><strong>Function</strong> — different.</li>
                <li><strong>Cause</strong> — divergent evolution.</li>
                <li><strong>Shows</strong> — common ancestry.</li>
              </ul>
            ),
          },
          {
            title: "Analogous organs",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Structure</strong> — different.</li>
                <li><strong>Function</strong> — same.</li>
                <li><strong>Cause</strong> — convergent evolution.</li>
                <li><strong>Shows</strong> — similar habitat, not ancestry.</li>
              </ul>
            ),
          },
        ]}
      />

              </>
            ),
          },
          {
            id: "h-6-3-biochemistry",
            icon: "🧬",
            label: "3. Biochemical",
            note: "Proteins, genes and the central dogma.",
            content: (
              <>
      <p>
        Organisms show striking similarities in proteins, genes, other biomolecules and metabolic pathways. Such
        biochemical uniformity is strong evidence of <Highlight color="yellow">common ancestry</Highlight> for diverse
        life forms.
      </p>
      <KeyPoint title="Central dogma">
        DNA → mRNA → Protein — the same flow of information in all of them.
      </KeyPoint>

              </>
            ),
          },
          {
            id: "h-6-3-biogeography",
            icon: "🗺️",
            label: "4. Biogeographical and adaptive radiation",
            note: "Distribution, finches and marsupials.",
            content: (
              <>
                <p>
                  The distribution of organisms over geographical areas is itself evidence of evolution: an ancestral
                  stock that reaches an isolated area diversifies into many forms.
                </p>
                <Callout type="important" title="Adaptive radiation">
                  Evolution of different species in a given geographical area starting from one point and radiating
                  into other habitats is called <Highlight color="yellow">adaptive radiation</Highlight>.
                </Callout>
                <p>
                  On the <strong>Galapagos Islands</strong>, Darwin found small black birds —{" "}
                  <strong>Darwin&apos;s finches</strong>.
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Many varieties</strong> — several kinds of finch lived on the same island.</li>
                  <li><strong>One origin</strong> — he conjectured that all of them evolved on the island itself.</li>
                  <li>
                    <strong>Beaks changed with diet</strong> — from the original seed-eating form arose insectivorous
                    and vegetarian finches.
                  </li>
                </ul>
                <FinchBeaksDiagram />
                <TableCard
                  title="Two classic examples"
                  headers={["Example", "Where", "What radiated from what"]}
                  rows={[
                    {
                      cells: [
                        "Darwin's finches",
                        "Galapagos Islands",
                        "From the seed-eating ancestor arose insectivorous and vegetarian forms.",
                      ],
                    },
                    {
                      cells: [
                        "Australian marsupials",
                        "The Australian island continent",
                        "Many different marsupials evolved from one ancestral stock.",
                      ],
                    },
                  ]}
                />
                <p>
                  When more than one adaptive radiation occurs in the same isolated area, the resemblance between the
                  independently evolved forms is called{" "}
                  <Highlight color="yellow">convergent evolution</Highlight>.
                </p>
                <TableCard
                  title="Marsupial and placental look-alikes"
                  headers={["Placental mammal", "Australian marsupial"]}
                  rows={[
                    { cells: ["Mole", "Marsupial mole"] },
                    { cells: ["Anteater", "Numbat"] },
                    { cells: ["Mouse", "Marsupial mouse"] },
                    { cells: ["Lemur", "Spotted cuscus"] },
                    { cells: ["Flying squirrel", "Flying phalanger"] },
                    { cells: ["Bobcat", "Tasmanian tiger cat"] },
                    { cells: ["Wolf", "Tasmanian wolf"] },
                  ]}
                  caption="Resemblance here is analogy, not shared ancestry."
                />
                <MistakeCard
                  mistake="Adaptive radiation and convergent evolution are the same phenomenon."
                  correction="Adaptive radiation starts from one point and radiates into many forms. When more than one such radiation occurs in the same isolated area, the resemblance between the independently evolved forms is convergence."
                  example="Australian marsupials radiated; a placental wolf resembling the Tasmanian wolf is convergence."
                />

              </>
            ),
          },
          {
            id: "h-6-3-embryology",
            icon: "🥚",
            label: "5. Embryological",
            note: "Features shared by embryos.",
            content: (
              <>
      <p>
        Embryological support for evolution was proposed by <strong>Ernst Heckel</strong>, based upon the observation
        of certain features during the embryonic stage that are common to all vertebrates but absent in the adult.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          For example, the embryos of all vertebrates including human develop{" "}
          <strong>a row of vestigial gill slit</strong> just behind the head.
        </li>
        <li>
          But it is a functional organ <strong>only in fish</strong>, and is not found in any other adult vertebrates.
        </li>
      </ul>
      <Callout type="warning" title="The proposal was disapproved">
        On careful study performed by <strong>Karl Ernst von Baer</strong>, the proposal was disapproved. He noted
        that <Highlight color="yellow">embryos never pass through the adult stages of other animals</Highlight>.
      </Callout>

              </>
            ),
          },
          {
            id: "h-6-3-moth",
            icon: "🦋",
            label: "6. Natural selection",
            note: "Industrial melanism and resistance.",
            content: (
              <>
      <p>
        A famous test case comes from England — the peppered moth, sampled before and after industrialisation.
      </p>
      <Comparison
        columns={[
          {
            title: "Before 1850s",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Trees</strong> — covered in white lichen.</li>
                <li><strong>Moths</strong> — white-winged common; dark-winged rare.</li>
                <li><strong>Why</strong> — dark moths stood out against pale bark and were picked off.</li>
              </ul>
            ),
          },
          {
            title: "After 1920",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>Trees</strong> — darkened by soot; lichens died.</li>
                <li><strong>Moths</strong> — dark-winged common; white-winged declined.</li>
                <li><strong>Why</strong> — now the pale moths were the conspicuous ones.</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="note" title="Lichens as pollution indicators">
        <ul className="list-disc pl-5 space-y-1">
          <li>Lichens do not grow in polluted air.</li>
          <li>Their disappearance left the trunks bare and dark.</li>
          <li>That changed which moth was conspicuous.</li>
        </ul>
      </Callout>
      <KeyPoint title="What the moth story shows">
        In a mixed population, the better-adapted form survives and increases — but{" "}
        <strong>no variant is completely wiped out</strong>. The whole case is called{" "}
        <Highlight color="yellow">industrial melanism</Highlight>.
      </KeyPoint>

      <h4 id="h-6-3-anthropogenic">Evolution by anthropogenic action</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Excess use of herbicides, pesticides, etc. has only resulted in selection of <strong>resistant varieties</strong>{" "}
          in a much lesser time scale.
        </li>
        <li>
          This is also true for microbes against which we employ antibiotics, or drugs against eukaryotic
          organisms/cells.
        </li>
        <li>
          Hence resistant organisms/cells are appearing in a time scale of <strong>months or years</strong> and not
          centuries.
        </li>
      </ul>
      <Callout type="important" title="Evolution has no goal">
        Evolution is <Highlight color="yellow">not a directed process in the sense of determinism</Highlight>. It is
        a <strong>stochastic process</strong> based on chance events in nature and chance mutation in the organisms.
      </Callout>
              </>
            ),
          },
        ]}
      />

      <h2 id="h-6-4">6.4 Biological Evolution</h2>
      <p>
        The essence of Darwinian theory about evolution is{" "}
        <Highlight color="yellow">natural selection</Highlight>. The rate of appearance of new forms is linked to the
        life cycle or the life span — bacteria evolve within days, whereas fish or fowl need millions of years.
      </p>
      <p>
        Microbes that divide fast multiply into millions within hours — which is why their evolution is visible on a
        human timescale.
      </p>
      <Callout type="important" title="Fitness must be inherited to matter">
        The so-called fitness is based on characteristics which are <strong>inherited</strong>. Hence there must be a
        genetic basis for getting selected and to evolve. Adaptive ability is inherited; it has a genetic basis.{" "}
        <Highlight color="yellow">Fitness is the end result of the ability to adapt and get selected by nature.</Highlight>
      </Callout>
      <KeyPoint title="Darwin's two key concepts">
        <Highlight color="yellow">Branching descent</Highlight> and <Highlight color="yellow">natural selection</Highlight> are the
        two key concepts of the Darwinian theory of evolution.
      </KeyPoint>

      <h3 id="h-6-4-lamarck">Lamarck — use and disuse of organs</h3>
      <p>
        Even before Darwin, the French naturalist <strong>Lamarck</strong> argued that evolution is driven by{" "}
        <strong>use and disuse of organs</strong>.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>The claim</strong> — an organ used more develops; one used less withers.</li>
        <li>
          <strong>The giraffe</strong> — stretching for tall leaves elongated the neck, and the elongated neck was
          passed on to the offspring.
        </li>
        <li>
          <strong>The verdict</strong> — acquired characters are not inherited; nobody believes this conjecture any
          more.
        </li>
      </ul>
      <Callout type="note" title="A process, or the result of one?">
        The world we see, inanimate and animate, is only the success stories of evolution. When we describe the story
        of this world we describe evolution as a <em>process</em>; when we describe the story of life on earth we
        treat evolution as a <em>consequence</em> of a process called natural selection. We are still not very clear
        whether to regard evolution and natural selection as processes or as the end result of unknown processes.
      </Callout>

      <h3 id="h-6-4-malthus">Malthus and the logic of natural selection</h3>
      <p>
        It is possible that the work of <strong>Thomas Malthus</strong> on populations influenced Darwin. Natural
        selection is based on certain observations which are factual.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Natural resources are limited.</li>
        <li>Populations are stable in size except for seasonal fluctuation.</li>
        <li>
          Members of a population vary in characteristics — in fact no two individuals are alike — even though they
          look superficially similar.
        </li>
        <li>Most of the variations are inherited.</li>
      </ul>
      <p>
        Left unchecked, a population would grow exponentially — as a growing bacterial culture shows.
      </p>
      <p>
        Real populations stay limited, which means there has been <strong>competition for resources</strong>: only
        some survived and grew at the cost of others.
      </p>
      <KeyPoint title="Darwin's novel insight">
        Variations which are heritable, and which make resource utilisation better for a few (adapted to the habitat
        better), will enable only those to reproduce and leave more progeny. Over many generations, survivors leave
        more progeny, there is a change in population characteristic, and hence new forms appear to arise.
      </KeyPoint>

      <h2 id="h-6-5">6.5 Mechanism of Evolution</h2>
      <p>
        What is the origin of variation, and how does speciation occur? Darwin either ignored Mendel&apos;s
        inheritable &apos;factors&apos; or stayed silent about them.
      </p>
      <Callout type="note" title="deVries and the idea of mutation">
        In the first decade of the twentieth century, <strong>Hugo deVries</strong> — working on evening primrose —
        proposed{" "}
        <Highlight color="yellow">mutations: large differences arising suddenly in a population</Highlight>.
      </Callout>
      <TableCard
        title="Darwin vs deVries"
        headers={["Point", "Darwin", "deVries"]}
        rows={[
          {
            cells: ["Nature of the variation", "Minor variations, which are heritable.", "Mutations — large differences arising suddenly in a population."],
          },
          {
            cells: ["Direction", "Small and directional.", "Random and directionless."],
          },
          {
            cells: ["Tempo of evolution", "Gradual.", "Single step — saltation."],
          },
          {
            cells: [
              "What causes speciation",
              "Accumulation of small heritable variations under natural selection.",
              "Mutation; he believed it is mutation which causes evolution, not the minor variations Darwin talked about.",
            ],
          },
        ]}
        caption="deVries called speciation by a single step large mutation saltation. Studies in population genetics, later, brought out some clarity."
      />
      <MistakeCard
        mistake="Mutations are directed by the needs of the organism, so evolution moves toward a goal."
        correction="Mutations are random and directionless. Selection is what makes the outcome look directional, because only the variants that survive in the prevailing conditions leave progeny."
        example="Antibiotic resistance appears in bacteria whether or not the antibiotic is present; the drug only selects the resistant ones."
      />

      <h2 id="h-6-6">6.6 Hardy-Weinberg Principle</h2>
      <p>
        In a population, the frequency of alleles of a gene or locus tends to remain fixed through the generations.
        The <strong>Hardy-Weinberg principle</strong> states this in algebraic form.
      </p>
      <Callout type="important" title="The principle">
        Allele frequencies in a population are stable and are constant from generation to generation. The gene pool
        (total genes and their alleles in a population) remains a constant. This is called{" "}
        <Highlight color="yellow">genetic equilibrium</Highlight>.
      </Callout>
      <p>
        The sum of all allelic frequencies is 1. In a diploid, <em>p</em> and <em>q</em> are the frequencies of
        allele <strong>A</strong> and allele <strong>a</strong>.
      </p>
      <FormulaBlock latex={String.raw`p^2 + 2pq + q^2 = 1`} label="Hardy–Weinberg equilibrium" important />
      <TableCard
        title="Genotype frequencies from allele frequencies"
        headers={["Genotype", "Frequency", "Why"]}
        rows={[
          { cells: ["AA", "p²", "Allele A on both chromosomes: p × p."] },
          { cells: ["aa", "q²", "Allele a on both chromosomes: q × q."] },
          { cells: ["Aa", "2pq", "A from either parent — two ways."] },
        ]}
        caption="The whole equation is the binomial expansion of (p + q)²."
      />
      <Callout type="note" title="How the principle detects evolution">
        When the frequency measured differs from expected values, the difference (direction) indicates the extent of
        evolutionary change. Disturbance in genetic equilibrium — a change of frequency of alleles in a population —
        would then be interpreted as resulting in evolution.
      </Callout>
      <Expandable title="Try it: p = 0.6 — find the genotype frequencies">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Since <em>p</em> + <em>q</em> = 1, <em>q</em> = 1 − 0.6 = <strong>0.4</strong>.
          </li>
          <li>
            Frequency of AA = <em>p</em>² = (0.6)² = <strong>0.36</strong>.
          </li>
          <li>
            Frequency of Aa = 2<em>pq</em> = 2 × 0.6 × 0.4 = <strong>0.48</strong>.
          </li>
          <li>
            Frequency of aa = <em>q</em>² = (0.4)² = <strong>0.16</strong>.
          </li>
          <li>
            Check: 0.36 + 0.48 + 0.16 = <strong>1</strong>, as the equation demands.
          </li>
        </ul>
      </Expandable>

      <h3 id="h-6-6-factors">Five factors that disturb the equilibrium</h3>
      <TableCard
        title="Factors known to affect Hardy–Weinberg equilibrium"
        headers={["Factor", "What it does"]}
        rows={[
          {
            cells: [
              "Gene migration, or gene flow",
              "Alleles move between populations. Repeated migration is gene flow.",
            ],
          },
          {
            cells: [
              "Genetic drift",
              "Chance change in allele frequency. A drastically changed sample can found a new species — the founder effect.",
            ],
          },
          {
            cells: [
              "Mutation",
              "Advantageous mutations, when selected, give new phenotypes and can lead to speciation.",
            ],
          },
          {
            cells: [
              "Genetic recombination",
              "Recombination in gametogenesis reshuffles alleles for future generations.",
            ],
          },
          {
            cells: [
              "Natural selection",
              "Heritable variations that improve survival leave more progeny.",
            ],
          },
        ]}
        caption="Any one of these disturbs genetic equilibrium — and therefore counts as evolution."
      />
      <p>
        A critical analysis makes us believe that variation due to mutation, variation due to recombination during
        gametogenesis, or variation due to gene flow or genetic drift results in a changed frequency of genes and
        alleles in the future generation. Coupled to enhanced reproductive success, natural selection makes the
        population look like a different population altogether.
      </p>

      <h3 id="h-6-6-modes">What natural selection does to a trait</h3>
      <TableCard
        title="Three modes of natural selection"
        headers={["Mode", "What happens to individuals"]}
        rows={[
          { cells: ["Stabilising", "More individuals acquire the mean character value."] },
          { cells: ["Directional", "More individuals acquire a value other than the mean character value."] },
          {
            cells: [
              "Disruptive",
              "More individuals acquire peripheral character value at both ends of the distribution curve.",
            ],
          },
        ]}
      />

      <h2 id="h-6-7">6.7 A Brief Account of Evolution</h2>
      <p>
        About 2000 mya the first cellular life appeared. Some cells could release O₂ — much as the light reaction of
        photosynthesis splits water — and single cells slowly became multicellular.
      </p>
      <p>
        How non-cellular aggregates of giant molecules became cells with a membranous envelope is still unknown.
      </p>
      <Timeline
        title="Landmarks on the geological clock"
        rtl={false}
        events={[
          { date: "500 mya", label: "Invertebrates", detail: "Invertebrates were formed and active." },
          { date: "350 mya", label: "Jawless fish", detail: "Jawless fish probably evolved around this time." },
          {
            date: "350 mya",
            label: "Life invades land",
            detail: "Plants were the first organisms to invade land.",
          },
          { date: "320 mya", label: "Sea weeds and a few plants", detail: "Sea weeds and few plants existed probably around this time." },
          { date: "200 mya", label: "Fish-like reptiles", detail: "Some land reptiles went back into water to evolve into fish-like reptiles, e.g. Ichthyosaurs." },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Plants first</strong> — the first organisms to invade land were plants; they were widespread before
          animals followed.
        </li>
        <li>
          <strong>Coal from ferns</strong> — giant ferns (pteridophytes) fell and slowly formed coal deposits.
        </li>
      </ul>

      <h3 id="h-6-7-vertebrates">From fish to mammals</h3>
      <TableCard
        title="The vertebrate succession"
        headers={["Group", "Key innovation", "What became of it"]}
        rows={[
          {
            cells: [
              "Fish",
              "Jaws and fins; lobefins had fleshy fins.",
              "Jawless fish by 350 mya; lobefins gave rise to amphibians.",
            ],
          },
          {
            cells: [
              "Amphibians",
              "Legs, but eggs still need water.",
              "Ancestors of modern frogs and salamanders.",
            ],
          },
          {
            cells: [
              "Reptiles",
              "Thick-shelled eggs that do not dry up in the sun.",
              "Turtles, tortoises and crocodiles; reptiles dominated for about 200 million years.",
            ],
          },
          {
            cells: [
              "Dinosaurs",
              "Large size; Tyrannosaurus rex stood about 20 feet tall with dagger-like teeth.",
              "Vanished suddenly about 65 mya; small reptiles of that era survive today.",
            ],
          },
          {
            cells: [
              "Mammals",
              "Vivipary — young protected inside the mother.",
              "Took over once the reptiles declined.",
            ],
          },
        ]}
        caption="The reason for the dinosaurs' sudden disappearance is still debated — climate change, or descent into birds."
      />
      <Callout type="didyouknow" title="The fish that came back">
        In 1938 a fish caught in South Africa turned out to be a <strong>Coelacanth</strong>, thought extinct. These{" "}
        <strong>lobefins</strong> evolved into the first <strong>amphibians</strong>; no transitional specimens
        survive, only their descendants — frogs and salamanders.
      </Callout>

      <h3 id="h-6-7-mammals">Mammals take over</h3>
      <p>Once the reptiles declined, mammals took over the earth.</p>
      <TableCard
        title="After the dinosaurs: what mammals changed"
        headers={["Feature", "Detail"]}
        rows={[
          { cells: ["First mammals", "Shrew-like, with small fossils."] },
          { cells: ["Reproduction", "Viviparous — the unborn young develop inside the mother."] },
          { cells: ["Behaviour", "More intelligent at sensing and avoiding danger."] },
          {
            cells: [
              "South America",
              "Horse-, hippo-, bear- and rabbit-like forms; overrun by North American fauna after the continents joined.",
            ],
          },
          {
            cells: [
              "Australia",
              "Pouched mammals survived because there was no competition from other mammals.",
            ],
          },
          { cells: ["Water", "Whales, dolphins, seals and sea cows live wholly in water."] },
          {
            cells: [
              "Later stories",
              "Horse, elephant and dog evolution; and finally man, with language and self-consciousness.",
            ],
          },
        ]}
        caption="Continental drift explains why South America's mammals were replaced while Australia's pouched mammals survived."
      />

      <h2 id="h-6-8">6.8 Origin and Evolution of Man</h2>
      <p>
        About 15 mya, <strong>Dryopithecus</strong> and <strong>Ramapithecus</strong> lived. Both were hairy and walked
        like gorillas, but Ramapithecus was more man-like and Dryopithecus more ape-like.
      </p>
      <Timeline
        title="The human story"
        orientation="vertical"
        rtl={false}
        events={[
          {
            date: "3–4 mya",
            label: "Man-like primates in eastern Africa",
            detail: "Fossils of man-like bones discovered in Ethiopia and Tanzania revealed hominid features. They were probably not taller than 4 feet but walked upright.",
          },
          {
            date: "2 mya",
            label: "Australopithecines",
            detail: "Probably lived in East African grasslands; evidence shows they hunted with stone weapons but essentially ate fruit.",
          },
          {
            date: "2 mya",
            label: "Homo habilis",
            detail: "Some of the bones among the bones discovered were different. This creature was called the first human-like being, the hominid — Homo habilis.",
          },
          {
            date: "1.5 mya",
            label: "Homo erectus",
            detail: "Fossils discovered in Java in 1891 revealed this next stage.",
          },
          {
            date: "1,00,000–40,000 years back",
            label: "Neanderthal man",
            detail: "Lived in near east and central Asia. Used hides to protect their body and buried their dead.",
          },
          {
            date: "75,000–10,000 years ago",
            label: "Modern Homo sapiens",
            detail: "Arose during the ice age.",
          },
        ]}
      />
      <BrainSizeBars />
      <p>
        <strong>Homo sapiens</strong> arose in Africa, spread across continents, and developed into distinct races.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Cave art</strong> — about 18,000 years ago; see the paintings at the{" "}
          <strong>Bhimbetka rock shelter</strong>, Raisen district, Madhya Pradesh.
        </li>
        <li><strong>Agriculture</strong> — around 10,000 years ago; human settlements began.</li>
        <li><strong>History</strong> — the growth and decline of civilisations.</li>
      </ul>
      <MistakeCard
        mistake="Homo habilis had the largest brain of the human line."
        correction="Homo habilis had a brain of 650–800 cc; Homo erectus about 900 cc; the Neanderthal man 1400 cc. Brain size increased along the line, it did not decrease."
        example="The order to remember is habilis → erectus → Neanderthal."
      />
      <KeyPoint title="The pattern in the record">
        Upright walking appears early, brain size rises steadily along the line, the diet shifts from fruit to meat,
        and the later stages add culture — hides, deliberate burial, cave art and finally agriculture.
      </KeyPoint>

      <h2 id="h-6-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "Explain antibiotic resistance observed in bacteria in light of Darwinian selection theory.",
            "Find out from newspapers and popular science articles any new fossil discoveries or controversies about evolution.",
            "Attempt giving a clear definition of the term species.",
            "Try to trace the various components of human evolution (hint: brain size and function, skeletal structure, dietary preference, etc.)",
            "Find out through internet and popular science articles whether animals other than man has self-consciousness.",
            "List 10 modern-day animals and using the internet resources link it to a corresponding ancient fossil. Name both.",
            "Practise drawing various animals and plants.",
            "Describe one example of adaptive radiation.",
            "Can we call human evolution as adaptive radiation?",
            "Using various resources such as your school Library or the internet and discussions with your teacher, trace the evolutionary stages of any one animal, say horse.",
          ]}
          answers={[
            "A bacterial population carries built-in variation, and some variants can survive a given antibiotic. When the antibiotic is used, the susceptible bacteria die while the resistant ones survive and reproduce, leaving more progeny. The resistant variants then outgrow the rest and the population becomes resistant — natural selection in action, on a time scale of months or years rather than centuries.",
            "Answers will vary. Look for reports of a newly described fossil, a re-dating of an existing one, or a dispute about which branch of the family tree a specimen belongs to; note the species name, the age of the rock and the journal or newspaper source.",
            "A species is the largest group of organisms that can interbreed naturally and produce fertile offspring, sharing a common gene pool and remaining reproductively isolated from other such groups.",
            "Brain size and function: Homo habilis 650–800 cc and probably no meat; Homo erectus about 900 cc and probably ate meat; Neanderthal man 1400 cc, used hides and buried the dead; modern Homo sapiens with language and self-consciousness. Skeletal structure: upright, bipedal walking from about 3–4 mya, with a height of not more than 4 feet at that stage. Dietary preference: fruit in Australopithecines, meat from Homo erectus onward.",
            "Answers will vary. Read the reports critically: self-consciousness is usually tested by whether an animal recognises itself in a mirror, and the evidence for species other than man — apes, dolphins, elephants — is still debated.",
            "Answers will vary. One workable pair: modern horse (Equus) with the fossil Eohippus; modern crocodile with a fossil dinosaur such as Deinosuchus; modern bird with Archaeopteryx.",
            "Answers will vary. Draw from the descriptions in the chapter: lobefins, amphibians, reptiles, dinosaurs, the toothed and beaked birds, and the mammals.",
            "Darwin's finches of the Galapagos Islands: from an original seed-eating stock, many forms with altered beaks arose on the same island, becoming insectivorous and vegetarian finches. The Australian marsupials are another example — many different marsupials evolved from an ancestral stock within the Australian island continent.",
            "Not in the strict sense. Human evolution is essentially a single evolving lineage, with a few branches such as the Neanderthals, and its success came from the brain and language rather than from many forms radiating into many different habitats in one isolated area. Adaptive radiation, by contrast, produces a variety of species filling a variety of habitats from one starting point.",
            "The expected outline: small, four-toed, forest-dwelling forms such as Eohippus; gradually larger animals with fewer toes, as the feet became adapted to running on open grassland; teeth with high crowns suited to grazing on grass; and finally the single-toed modern horse, Equus. Confirm the stages and dates from your library or internet sources.",
          ]}
        />
      </Expandable>
    </>
  );
}
