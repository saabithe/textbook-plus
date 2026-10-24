import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { FormulaBlock } from "@/components/content/Formula";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { Timeline } from "@/components/content/process/Timeline";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";

export default function EvolutionChapter() {
  return (
    <>
      <FactCard
        title="Evolutionary biology"
        definition="The study of history of life forms on earth."
        icon="🧬"
      />
      <p>
        To understand the changes in flora and fauna that have occurred over millions of years on earth, we must
        first understand the context of origin of life — the evolution of earth, of stars, and indeed of the
        universe itself. What follows is the longest of all the construed and conjectured stories: the story of the
        origin of life and the evolution of life forms, or biodiversity, on planet earth.
      </p>

      <h2 id="h-6-1">6.1 Origin of Life</h2>
      <Callout type="didyouknow" title="Looking at stars is looking back in time">
        Stellar distances are measured in <strong>light years</strong>. The light from a star we see tonight started
        its journey millions of years back, from trillions of kilometres away, and reaches our eyes only now. Objects
        in our immediate surroundings, by contrast, are seen instantly — and hence in the present. So when we see
        stars, we are peeping into the past.
      </Callout>
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
        The <strong>Big Bang theory</strong> attempts to explain the origin of the universe. It talks of a singular
        huge explosion unimaginable in physical terms. The universe expanded and hence the temperature came down.
        Hydrogen and helium formed sometime later. The gases condensed under gravitation and formed the galaxies of
        the present day universe.
      </p>
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
        title="Three answers to the same question"
        headers={["Idea", "What it claims", "Present status"]}
        rows={[
          {
            cells: [
              "Panspermia",
              "Units of life called spores were transferred to different planets, including earth, from outer space — a view of early Greek thinkers.",
              "Still a favourite idea for some astronomers.",
            ],
          },
          {
            cells: [
              "Spontaneous generation",
              "Life came out of decaying and rotting matter like straw, mud, etc.",
              "Dismissed once and for all by Louis Pasteur.",
            ],
          },
          {
            cells: [
              "Chemical evolution",
              "The first form of life came from pre-existing non-living organic molecules (e.g. RNA, protein, etc.), and formation of life was preceded by chemical evolution.",
              "Proposed by Oparin and Haldane; chemical evolution is more or less accepted.",
            ],
          },
        ]}
        caption="Pasteur's experiment settled the second claim; the third is the version this chapter develops."
      />
      <Callout type="important" title="Pasteur: life comes only from pre-existing life">
        Louis Pasteur, by careful experimentation, demonstrated that life comes only from pre-existing life. He
        showed that in pre-sterilised flasks, life did not come from killed yeast, while in another flask open to air,
        new living organisms arose from &apos;killed yeast&apos;. The theory of spontaneous generation was dismissed
        once and for all — but{" "}
        <Highlight color="yellow">this did not answer how the first life form came on earth</Highlight>.
      </Callout>
      <MistakeCard
        mistake="Pasteur's experiment explained how the very first life form arose on earth."
        correction="Pasteur only showed that life does not arise from non-living matter today. How the first life form came on earth remained an open question."
        example="The very next step in the chapter — chemical evolution — exists precisely because Pasteur left this gap."
      />

      <h3 id="h-6-1-chemical">Chemical evolution and Miller's experiment</h3>
      <p>
        Oparin of Russia and Haldane of England proposed that the first form of life could have come from
        pre-existing non-living organic molecules (e.g. RNA, protein, etc.), and that formation of life was preceded
        by <strong>chemical evolution</strong> — the formation of diverse organic molecules from inorganic
        constituents. The conditions on earth then were high temperature, volcanic storms, and a reducing atmosphere
        containing CH₄, NH₃, etc.
      </p>
      <ProcessCard
        title="Miller's experiment, 1953"
        steps={[
          {
            label: "Copy the early earth in the laboratory",
            description:
              "S.L. Miller, an American scientist, created conditions similar to those of the early earth on a laboratory scale.",
          },
          {
            label: "The flask",
            description:
              "A closed flask containing CH₄, H₂, NH₃ and water vapour at 800 °C.",
          },
          {
            label: "The spark",
            description: "He created electric discharge in the flask.",
          },
          {
            label: "What appeared",
            description: "He observed formation of amino acids.",
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>In similar experiments, others observed formation of sugars, nitrogen bases, pigment and fats.</li>
        <li>
          Analysis of meteorite content also revealed similar compounds, indicating that similar processes are
          occurring elsewhere in space.
        </li>
        <li>
          With this limited evidence, the first part of the conjectured story — chemical evolution — was{" "}
          <strong>more or less accepted</strong>.
        </li>
      </ul>
      <Expandable title="In-text question — what did Miller's experiment actually prove?">
        <p>
          It showed that <strong>organic molecules can be built from inorganic gases</strong> under the conditions
          of the early earth — that is, it supported chemical evolution. It said nothing about how those molecules
          came together into a self-replicating, metabolising capsule of life.
        </p>
      </Expandable>

      <h3 id="h-6-1-first-cells">From giant molecules to the first cells</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          We have no idea about how the first <strong>self replicating metabolic capsule</strong> of life arose.
        </li>
        <li>
          The first <strong>non-cellular</strong> forms of life could have originated <strong>3 billion years</strong>{" "}
          back.
        </li>
        <li>They would have been giant molecules (RNA, protein, polysaccharides, etc.).</li>
        <li>These capsules reproduced their molecules, perhaps.</li>
        <li>
          The first <strong>cellular</strong> form of life did not possibly originate till about{" "}
          <strong>2000 million years ago</strong>; these were probably single cells.
        </li>
        <li>All life forms were in a water environment only.</li>
        <li>
          This version of <strong>biogenesis</strong> — the first form of life arose slowly through evolutionary
          forces from non-living molecules — is accepted by the majority.
        </li>
      </ul>
      <KeyPoint title="Where the certainty ends">
        The chemical part of the story is accepted; the step from a self-replicating capsule to a cell with a
        membranous envelope is still unknown. The rest of the chapter works forward from that first cellular life.
      </KeyPoint>

      <h2 id="h-6-2">6.2 Evolution of Life Forms – A Theory</h2>
      <ConceptCard title="The theory of special creation" icon="📜">
        <p className="mb-2">Conventional religious literature tells us this theory, which has three connotations:</p>
        <ol className="list-decimal pl-5 space-y-1.5">
          <li>All living organisms (species or types) that we see today were created as such.</li>
          <li>The diversity was always the same since creation and will be the same in future also.</li>
          <li>The earth is about 4000 years old.</li>
        </ol>
      </ConceptCard>
      <p>
        All these ideas were strongly challenged during the nineteenth century. Based on observations made during a
        sea voyage in a sail ship called <strong>H.M.S. Beagle</strong> round the world, Charles Darwin concluded the
        following.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Existing living forms share similarities to varying degrees — not only among themselves but also with life
          forms that existed millions of years ago.
        </li>
        <li>
          Many such life forms do not exist any more. Extinctions of different life forms happened in the years gone
          by, just as new forms of life arose at different periods of the history of earth.
        </li>
        <li>There has been <strong>gradual evolution</strong> of life forms.</li>
      </ul>
      <ProcessCard
        title="Darwin's argument, in four moves"
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
      <Callout type="note" title="Wallace, at the same time">
        Alfred Wallace, a naturalist who worked in the Malay Archipelago, had also come to similar conclusions
        around the same time.
      </Callout>
      <p>
        In due course of time, apparently new types of organisms are recognisable. All existing life forms share
        similarities and share common ancestors — but these ancestors were present at different periods in the
        history of earth (epochs, periods and eras). The geological history of earth closely correlates with the
        biological history of earth. A common permissible conclusion is that{" "}
        <Highlight color="yellow">earth is very old — not thousands of years, but billions of years old</Highlight>.
      </p>
      <MistakeCard
        mistake="The fittest individual is the strongest, fastest or largest one."
        correction="Fitness, according to Darwin, refers ultimately and only to reproductive fitness — the ability to leave more progeny. Strength is not the measure."
        example="A small, fast-breeding organism can be fitter than a large, strong one."
      />

      <h2 id="h-6-3">6.3 What are the Evidences for Evolution?</h2>
      <p>
        Evidence that evolution of life forms has indeed taken place on earth has come from many quarters — the
        rocks, the embryo, the bones, the molecules, and even the changes humans have caused in their own lifetime.
      </p>

      <h3 id="h-6-3-fossils">Fossils — the palaeontological evidence</h3>
      <Callout type="important" title="Fossil">
        <Highlight color="yellow">Fossils are remains of hard parts of life-forms found in rocks.</Highlight>
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Rocks form sediments, and a cross-section of earth&apos;s crust indicates the arrangement of sediments one
          over the other during the long history of earth.
        </li>
        <li>
          Different-aged rock sediments contain fossils of different life-forms who probably died during the
          formation of that particular sediment.
        </li>
        <li>
          Some of them appear similar to modern organisms. They represent <strong>extinct</strong> organisms (e.g.
          dinosaurs).
        </li>
        <li>
          A study of fossils in different sedimentary layers indicates the geological period in which they existed.
        </li>
        <li>
          The study showed that life-forms varied over time, and certain life forms are restricted to certain
          geological time-spans.
        </li>
        <li>Hence, new forms of life have arisen at different times in the history of earth.</li>
      </ul>
      <p>
        All this is called <strong>palaeontological evidence</strong>.
      </p>
      <Expandable title="In-text question — how are the ages of fossils calculated?">
        <p>
          By <strong>radioactive dating</strong>. An unstable isotope in the rock decays into a stable daughter
          isotope at a fixed, known rate. The ratio of the parent isotope to the daughter isotope in the sample tells
          how many half-lives have passed since the rock — and the fossil in it — was formed. That is how a fossil
          gets tied to a geological period.
        </p>
      </Expandable>

      <h3 id="h-6-3-embryology">Embryological evidence — and why it was set aside</h3>
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
          But it is a functional organ <strong>only in fish</strong>, and is not found in any other adult
          vertebrates.
        </li>
      </ul>
      <Callout type="warning" title="The proposal was disapproved">
        On careful study performed by <strong>Karl Ernst von Baer</strong>, the proposal was disapproved. He noted
        that{" "}
        <Highlight color="yellow">embryos never pass through the adult stages of other animals</Highlight>.
      </Callout>

      <h3 id="h-6-3-homology">Homology, analogy and comparative anatomy</h3>
      <p>
        Comparative anatomy and morphology shows similarities and differences among organisms of today and those that
        existed years ago. Such similarities can be interpreted to understand whether common ancestors were shared or
        not.
      </p>
      <p>
        Take the forelimbs of whales, bats, cheetah and human — all mammals. They share similarities in the pattern of
        bones: all of them have <strong>humerus, radius, ulna, carpals, metacarpals and phalanges</strong> in their
        forelimbs, though these forelimbs perform different functions in these animals. The same structure developed
        along different directions because of adaptation to different needs. This is{" "}
        <strong>divergent evolution</strong>, and these structures are <strong>homologous</strong>.
      </p>
      <p>
        Wings of a butterfly and of a bird look alike, but they are not anatomically similar structures, though they
        perform similar functions. Analogous structures are therefore a result of <strong>convergent evolution</strong>{" "}
        — different structures evolving for the same function, and hence having similarity. It is the similar habitat
        that has resulted in selection of similar adaptive features in different groups of organisms, but toward the
        same function.
      </p>
      <TableCard
        title="Homology vs analogy"
        headers={["Point of difference", "Homologous structures", "Analogous structures"]}
        rows={[
          {
            cells: [
              "Structure and function",
              "Similar anatomical structure; the functions may differ.",
              "Anatomically dissimilar structures; the functions are similar.",
            ],
          },
          {
            cells: ["What it indicates", "Common ancestry.", "Similar habitat that selected similar adaptive features in different groups."],
          },
          {
            cells: [
              "Other examples",
              "Vertebrate hearts or brains; thorn and tendrils of Bougainvillea and Cucurbita.",
              "Eye of the octopus and of mammals; flippers of penguins and dolphins; sweet potato (root modification) and potato (stem modification).",
            ],
          },
        ]}
      />
      <MistakeCard
        mistake="Homologous organs are those that perform the same function."
        correction="Homologous organs share the same basic structure and origin but may perform different functions (forelimbs of whale, bat, cheetah, human). Organs that perform the same function with different structures are analogous (wings of butterfly and bird)."
        example="Sweet potato is a root modification and potato is a stem modification — analogy, not homology."
      />

      <h3 id="h-6-3-biochemistry">Biochemical similarities</h3>
      <p>
        Similarities in proteins and genes performing a given function among diverse organisms give clues to common
        ancestry. These biochemical similarities point to the same shared ancestry as structural similarities among
        diverse organisms.
      </p>

      <h3 id="h-6-3-moth">Artificial selection and the peppered moth</h3>
      <p>
        Man has bred selected plants and animals for agriculture, horticulture, sport or security, and has
        domesticated many wild animals and crops. This intensive breeding programme has created breeds that differ
        from other breeds (e.g. dogs) but still are of the same group. It is argued that{" "}
        <Highlight color="yellow">
          if within hundreds of years man could create new breeds, could not nature have done the same over millions
          of years?
        </Highlight>
      </p>
      <p>
        Another interesting observation supporting evolution by natural selection comes from England — a collection
        of moths made before industrialisation and again after it.
      </p>
      <TableCard
        title="The peppered moth in England"
        headers={["Period", "Background on the trees", "Which moths predominated"]}
        rows={[
          {
            cells: [
              "1850s, before industrialisation",
              "Thick growth of almost white-coloured lichen covered the trees.",
              "More white-winged moths than dark-winged or melanised moths.",
            ],
          },
          {
            cells: [
              "1920, after industrialisation",
              "Tree trunks became dark due to industrial smoke and soot.",
              "More dark-winged moths — the proportion was reversed.",
            ],
          },
        ]}
        caption="The same area was sampled twice, and the proportion of the two forms was reversed between the two collections."
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The explanation put forth for this observation was that{" "}
          <strong>predators will spot a moth against a contrasting background</strong> — so the form that matches the
          tree trunk survives, and the other is picked out.
        </li>
        <li>Hence, moths that were able to camouflage themselves, i.e. hide in the background, survived.</li>
        <li>
          This understanding is supported by the fact that in areas where industrialisation did not occur — for
          example in rural areas — the count of melanic moths was low.
        </li>
      </ul>
      <Callout type="didyouknow" title="Lichens as pollution indicators">
        Lichens will not grow in areas that are polluted — which is why they can be used as industrial pollution
        indicators. Their disappearance from the tree trunks is what changed the background colour in the first place.
      </Callout>
      <KeyPoint title="What the moth story shows">
        In a mixed population, those that can better adapt survive and increase in population size. And{" "}
        <strong>no variant is completely wiped out</strong> — the dark-winged form was present before 1850 and the
        white-winged form was still present after 1920.
      </KeyPoint>

      <h3 id="h-6-3-anthropogenic">Evolution by anthropogenic action</h3>
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
        <li>These are examples of evolution by <strong>anthropogenic action</strong>.</li>
      </ul>
      <Callout type="important" title="Evolution has no goal">
        Evolution is <Highlight color="yellow">not a directed process in the sense of determinism</Highlight>. It is
        a <strong>stochastic process</strong> based on chance events in nature and chance mutation in the organisms.
      </Callout>

      <h2 id="h-6-4">6.4 What is Adaptive Radiation?</h2>
      <p>
        During his journey Darwin went to the <strong>Galapagos Islands</strong>. There he observed an amazing
        diversity of creatures. Of particular interest were small black birds later called{" "}
        <strong>Darwin&apos;s Finches</strong>. He realised that there were many varieties of finches in the same
        island. All the varieties, he conjectured, evolved on the island itself. From the original seed-eating
        features, many other forms with altered beaks arose, enabling them to become insectivorous and vegetarian
        finches.
      </p>
      <Callout type="important" title="Adaptive radiation">
        This process of evolution of different species in a given geographical area starting from a point and
        literally radiating to other areas of geography (habitats) is called{" "}
        <Highlight color="yellow">adaptive radiation</Highlight>.
      </Callout>
      <TableCard
        title="Two classic examples"
        headers={["Example", "Where it happened", "What radiated from what"]}
        rows={[
          {
            cells: [
              "Darwin's finches",
              "Galapagos Islands — the same island",
              "From the original seed-eating features, many other forms with altered beaks arose, becoming insectivorous and vegetarian finches.",
            ],
          },
          {
            cells: [
              "Australian marsupials",
              "The Australian island continent",
              "A number of marsupials, each different from the other, evolved from an ancestral stock — all within the same continent.",
            ],
          },
        ]}
      />
      <p>
        When more than one adaptive radiation appears to have occurred in an isolated geographical area (representing
        different habitats), one can call this <strong>convergent evolution</strong>. Placental mammals in Australia
        also exhibit adaptive radiation, evolving into varieties of placental mammals each of which appears to be
        &apos;similar&apos; to a corresponding marsupial — for example, the placental wolf and the Tasmanian wolf, a
        marsupial.
      </p>
      <MistakeCard
        mistake="Adaptive radiation and convergent evolution are the same phenomenon."
        correction="Adaptive radiation starts from one point and radiates into many forms and habitats. When more than one such radiation occurs in the same isolated area, the resemblance between the independently evolved forms is called convergent evolution."
        example="Australian marsupials radiated; a placental wolf resembling the Tasmanian wolf is convergence."
      />

      <h2 id="h-6-5">6.5 Biological Evolution</h2>
      <p>
        Evolution by natural selection, in a true sense, would have started when{" "}
        <strong>cellular forms of life with differences in metabolic capability</strong> originated on earth.
      </p>
      <p>
        The essence of Darwinian theory about evolution is natural selection. The rate of appearance of new forms is
        linked to the life cycle or the life span.
      </p>
      <ProcessCard
        title="A colony, a changed medium, a new species"
        steps={[
          {
            label: "Built-in variation",
            description:
              "A colony of bacteria (say A) growing on a given medium has built-in variation in terms of ability to utilise a feed component.",
          },
          {
            label: "The medium changes",
            description:
              "A change in the medium composition would bring out only that part of the population (say B) that can survive under the new conditions.",
          },
          {
            label: "B outgrows A",
            description:
              "In due course of time this variant population outgrows the others and appears as a new species. This would happen within days.",
          },
          {
            label: "The same, on a slower clock",
            description:
              "For the same thing to happen in a fish or fowl would take millions of years, as life spans of these animals are in years.",
          },
        ]}
      />
      <p>
        Here we say that the fitness of B is better than that of A under the new conditions. Nature selects for
        fitness. Microbes that divide fast have the ability to multiply and become millions of individuals within
        hours — which is why their evolution is visible on a human timescale.
      </p>
      <Callout type="important" title="Fitness must be inherited to matter">
        The so-called fitness is based on characteristics which are <strong>inherited</strong>. Hence there must be a
        genetic basis for getting selected and to evolve. Adaptive ability is inherited; it has a genetic basis.
        Fitness is the end result of the ability to adapt and get selected by nature.
      </Callout>
      <KeyPoint title="Two key concepts">
        <Highlight color="yellow">Branching descent and natural selection</Highlight> are the two key concepts of the
        Darwinian theory of evolution.
      </KeyPoint>

      <h3 id="h-6-5-lamarck">Lamarck — use and disuse of organs</h3>
      <p>
        Even before Darwin, a French naturalist <strong>Lamarck</strong> had said that evolution of life forms had
        occurred, but driven by <strong>use and disuse of organs</strong>. He gave the example of giraffes, who in an
        attempt to forage leaves on tall trees had to adapt by elongation of their necks. As they passed on this
        acquired character of elongated neck to succeeding generations, giraffes slowly, over the years, came to
        acquire long necks. Nobody believes this conjecture any more.
      </p>
      <TableCard
        title="Lamarck vs Darwin"
        headers={["Point", "Lamarck", "Darwin"]}
        rows={[
          {
            cells: [
              "Driving force",
              "Use and disuse of organs — an organ used more develops, one used less withers.",
              "Natural selection acting on built-in variation.",
            ],
          },
          {
            cells: [
              "What is passed on",
              "Acquired characters — changes gained during the parent's lifetime.",
              "Inherited characteristics that already vary within the population.",
            ],
          },
          {
            cells: [
              "The giraffe",
              "Stretching for tall leaves elongated the neck, and the elongated neck was passed to the offspring.",
              "Longer-necked variants in the population survived and left more progeny.",
            ],
          },
          {
            cells: ["Status today", "Nobody believes this conjecture any more.", "The framework of the theory of evolution by natural selection."],
          },
        ]}
      />
      <Callout type="note" title="A process, or the result of one?">
        The world we see, inanimate and animate, is only the success stories of evolution. When we describe the story
        of this world we describe evolution as a <em>process</em>; when we describe the story of life on earth we
        treat evolution as a <em>consequence</em> of a process called natural selection. We are still not very clear
        whether to regard evolution and natural selection as processes or as the end result of unknown processes.
      </Callout>

      <h3 id="h-6-5-malthus">Malthus and the logic of natural selection</h3>
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
        Theoretically, population size will grow exponentially if everybody reproduced maximally — a fact that can be
        seen in a growing bacterial population. The fact that population sizes in reality are limited means that
        there had been <strong>competition for resources</strong>. Only some survived and grew at the cost of others
        that could not flourish.
      </p>
      <KeyPoint title="Darwin's novel insight">
        Variations which are heritable, and which make resource utilisation better for a few (adapted to the habitat
        better), will enable only those to reproduce and leave more progeny. Over many generations, survivors leave
        more progeny, there is a change in population characteristic, and hence new forms appear to arise.
      </KeyPoint>

      <h2 id="h-6-6">6.6 Mechanism of Evolution</h2>
      <p>
        What is the origin of this variation and how does speciation occur? Even though <strong>Mendel</strong> had
        talked of inheritable &apos;factors&apos; influencing phenotype, Darwin either ignored these observations or
        kept silence. In the first decade of the twentieth century, <strong>Hugo deVries</strong>, based on his work
        on evening primrose, brought forth the idea of <strong>mutations</strong> — large differences arising suddenly
        in a population.
      </p>
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

      <h2 id="h-6-7">6.7 Hardy-Weinberg Principle</h2>
      <p>
        In a given population one can find out the frequency of occurrence of alleles of a gene or a locus. This
        frequency is supposed to remain fixed and even remain the same through generations. The Hardy-Weinberg
        principle stated it using algebraic equations.
      </p>
      <Callout type="important" title="The principle">
        Allele frequencies in a population are stable and are constant from generation to generation. The gene pool
        (total genes and their alleles in a population) remains a constant. This is called{" "}
        <Highlight color="yellow">genetic equilibrium</Highlight>.
      </Callout>
      <p>
        The sum total of all the allelic frequencies is 1. Individual frequencies, for example, can be named p, q,
        etc. In a diploid, <em>p</em> and <em>q</em> represent the frequency of allele <strong>A</strong> and allele{" "}
        <strong>a</strong>.
      </p>
      <FormulaBlock latex={String.raw`p^2 + 2pq + q^2 = 1`} label="Hardy–Weinberg equilibrium" important />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The frequency of <strong>AA</strong> individuals in a population is simply <em>p</em>² — the probability
          that an allele A with a frequency of p appears on both the chromosomes of a diploid individual, which is
          the product of the probabilities.
        </li>
        <li>
          Similarly, the frequency of <strong>aa</strong> is <em>q</em>².
        </li>
        <li>
          The frequency of <strong>Aa</strong> is 2<em>pq</em>.
        </li>
        <li>
          The whole equation is the binomial expansion of (<em>p</em> + <em>q</em>)².
        </li>
      </ul>
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

      <h3 id="h-6-7-factors">Five factors that disturb the equilibrium</h3>
      <TableCard
        title="Factors known to affect Hardy–Weinberg equilibrium"
        headers={["Factor", "What it does"]}
        rows={[
          {
            cells: [
              "Gene migration, or gene flow",
              "When migration of a section of population to another place and population occurs, gene frequencies change in the original as well as in the new population. New genes/alleles are added to the new population and these are lost from the old population. There would be gene flow if this gene migration happens multiple times.",
            ],
          },
          {
            cells: [
              "Genetic drift",
              "If the same change occurs by chance, it is called genetic drift. Sometimes the change in allele frequency is so different in the new sample of population that they become a different species — the original drifted population becomes founders, and the effect is called the founder effect.",
            ],
          },
          {
            cells: [
              "Mutation",
              "Pre-existing advantageous mutations, when selected, result in observation of new phenotypes; over a few generations this would result in speciation.",
            ],
          },
          {
            cells: [
              "Genetic recombination",
              "Variation due to recombination during gametogenesis changes the frequency of genes and alleles in future generations.",
            ],
          },
          {
            cells: [
              "Natural selection",
              "A process in which heritable variations enabling better survival are enabled to reproduce and leave a greater number of progeny.",
            ],
          },
        ]}
      />
      <p>
        A critical analysis makes us believe that variation due to mutation, variation due to recombination during
        gametogenesis, or variation due to gene flow or genetic drift results in a changed frequency of genes and
        alleles in the future generation. Coupled to enhanced reproductive success, natural selection makes the
        population look like a different population altogether.
      </p>

      <h3 id="h-6-7-modes">What natural selection does to a trait</h3>
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

      <h2 id="h-6-8">6.8 A Brief Account of Evolution</h2>
      <p>
        About 2000 million years ago (mya) the first cellular forms of life appeared on earth. The mechanism of how
        non-cellular aggregates of giant macromolecules could evolve into cells with a membranous envelope is not
        known. Some of these cells had the ability to release O₂. The reaction could have been similar to the light
        reaction in photosynthesis, where water is split with the help of solar energy captured and channelised by
        appropriate light harvesting pigments. Slowly, single-celled organisms became multi-cellular life forms.
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
      <p>
        We are told that the first organisms that invaded land were <strong>plants</strong>. They were widespread on
        land when animals invaded land. In 1938, a fish caught in South Africa happened to be a{" "}
        <strong>Coelacanth</strong>, which was thought to be extinct. These animals, called <strong>lobefins</strong>,
        evolved into the first <strong>amphibians</strong> that lived on both land and water. There are no specimens
        of these left with us; however, these were ancestors of modern day frogs and salamanders.
      </p>
      <p>
        The amphibians evolved into <strong>reptiles</strong>. They lay thick-shelled eggs which do not dry up in the
        sun, unlike those of amphibians. Again we only see their modern day descendants — the turtles, tortoises and
        crocodiles. In the next 200 million years or so, reptiles of different shapes and sizes dominated on earth.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Giant ferns (pteridophytes) were present, but they all fell to form coal deposits slowly.</li>
        <li>
          The land reptiles were, of course, the dinosaurs. The biggest of them, <strong>Tyrannosaurus rex</strong>,
          was about 20 feet in height and had huge fearsome dagger-like teeth.
        </li>
        <li>About 65 mya the dinosaurs suddenly disappeared from the earth. We do not know the true reason.</li>
        <li>
          Some say climatic changes killed them; some say most of them evolved into birds. The truth may live in
          between.
        </li>
        <li>Small-sized reptiles of that era still exist today.</li>
      </ul>

      <h3 id="h-6-8-mammals">Mammals take over</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>The first mammals were like shrews, and their fossils are small sized.</li>
        <li>
          Mammals were <strong>viviparous</strong> and protected their unborn young inside the mother&apos;s body.
        </li>
        <li>Mammals were more intelligent in sensing and avoiding danger, at least.</li>
        <li>When reptiles came down, mammals took over this earth.</li>
        <li>
          There were, in South America, mammals resembling horse, hippopotamus, bear, rabbit, etc. Due to continental
          drift, when South America joined North America, these animals were overridden by North American fauna.
        </li>
        <li>
          Due to the same continental drift, pouched mammals of Australia survived because of lack of competition from
          any other mammal.
        </li>
        <li>
          Some mammals live wholly in water — whales, dolphins, seals and sea cows are some examples.
        </li>
        <li>
          Evolution of horse, elephant, dog, etc. are special stories of evolution, to be learnt in higher classes.
        </li>
        <li>
          The most successful story is the evolution of man, with language skills and self-consciousness.
        </li>
      </ul>

      <h2 id="h-6-9">6.9 Origin and Evolution of Man</h2>
      <p>
        About 15 mya, primates called <strong>Dryopithecus</strong> and <strong>Ramapithecus</strong> were existing.
        They were hairy and walked like gorillas and chimpanzees. Ramapithecus was more man-like while Dryopithecus
        was more ape-like.
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
      <TableCard
        title="Brain size along the human line"
        headers={["Stage", "Brain capacity", "Diet"]}
        rows={[
          { cells: ["Homo habilis", "650–800 cc", "Probably did not eat meat."] },
          { cells: ["Homo erectus", "Around 900 cc", "Probably ate meat."] },
          { cells: ["Neanderthal man", "1400 cc", "—"] },
        ]}
      />
      <p>
        <strong>Homo sapiens</strong> arose in Africa and moved across continents and developed into distinct races.
        Pre-historic cave art developed about 18,000 years ago; one such cave painting by pre-historic humans can be
        seen at the <strong>Bhimbetka rock shelter</strong> in Raisen district of Madhya Pradesh. Agriculture came
        around 10,000 years back and human settlements started. The rest of what happened is part of human history —
        the growth and decline of civilisations.
      </p>
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
