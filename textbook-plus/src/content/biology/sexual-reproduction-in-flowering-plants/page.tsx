import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { MetricCard } from "@/components/content/study/MetricCard";

export default function SexualReproductionInFloweringPlantsChapter() {
  return (
    <>
      <p>
        Are we not lucky that plants reproduce sexually? The myriads of flowers that we enjoy
        gazing at, the scents and the perfumes that we swoon over, the rich colours that attract
        us, are all there as an aid to sexual reproduction. Flowers do not exist only for us to be
        used for our own selfishness. <strong>All flowering plants show sexual reproduction.</strong>
      </p>
      <p>
        A look at the diversity of structures of the inflorescences, flowers and floral parts shows
        an amazing range of adaptations to ensure formation of the end products of sexual
        reproduction — the <strong>fruits</strong> and <strong>seeds</strong>. This chapter covers
        the morphology, structure and the processes of sexual reproduction in flowering plants
        (angiosperms).
      </p>
      <Expandable title="Scientist profile — Panchanan Maheshwari (1904–1966)">
        <p>
          Born in November 1904 in Jaipur (Rajasthan), Panchanan Maheshwari rose to become one of
          the most distinguished botanists not only of India but of the entire world. He moved to
          Allahabad for higher education where he obtained his D.Sc. During his college days he was
          inspired by Dr W. Dudgeon, an American missionary teacher, to develop interest in Botany
          and especially morphology. His teacher once expressed that if his student progresses ahead
          of him, it will give him a great satisfaction. These words encouraged Panchanan to enquire
          what he could do for his teacher in return.
        </p>
        <p className="mt-3">
          He worked on embryological aspects and popularised the use of embryological characters in
          taxonomy. He established the Department of Botany, University of Delhi as an important
          centre of research in embryology and tissue culture. He also emphasised the need for
          initiation of work on artificial culture of immature embryos. These days, tissue culture
          has become a landmark in science. His work on test tube fertilisation and intra-ovarian
          pollination won worldwide acclaim.
        </p>
        <p className="mt-3">
          He was honoured with fellowship of the Royal Society of London (FRS), Indian National
          Science Academy and several other institutions of excellence. He encouraged general
          education and made a significant contribution to school education by his leadership in
          bringing out the very first textbooks of Biology for Higher Secondary Schools published by
          NCERT in 1964.
        </p>
      </Expandable>

      <h2 id="h-1-1">1.1 Flower – A Fascinating Organ of Angiosperms</h2>
      <p>
        Human beings have had an intimate relationship with flowers since time immemorial. Flowers
        are objects of aesthetic, ornamental, social, religious and cultural value — they have
        always been used as symbols for conveying important human feelings such as love, affection,
        happiness, grief, mourning, etc.
      </p>
      <Callout type="note" title="Try this">
        List at least five flowers of ornamental value that are commonly cultivated at homes and in
        gardens. Find out the names of five more flowers that are used in social and cultural
        celebrations in your family. Have you heard of <strong>floriculture</strong> — what does it
        refer to?
      </Callout>
      <p>
        To a biologist, flowers are morphological and embryological marvels and the{" "}
        <Highlight color="yellow">sites of sexual reproduction</Highlight>. In earlier classes you
        have read the various parts of a flower. Recall the parts of a typical flower in
        longitudinal section, and name the two parts in which the two most important units of
        sexual reproduction develop.
      </p>
      <TreeDiagram
        title="A typical flower (L.S.) — parts and what they carry"
        defaultExpanded
        nodes={[
          {
            label: "Thalamus",
            detail: "The swollen axis of the flower on which all floral parts are borne.",
          },
          {
            label: "Accessory whorls",
            children: [
              { label: "Calyx", detail: "Whorl of sepals — encloses and protects the bud." },
              { label: "Corolla", detail: "Whorl of petals — colour and fragrance attract pollinators." },
            ],
          },
          {
            label: "Androecium — male reproductive organ",
            detail: "A whorl of stamens. Each stamen = filament + anther.",
            children: [
              {
                label: "Anther",
                detail:
                  "Terminal, generally bilobed; bears four microsporangia (pollen sacs) that produce pollen grains — the male gametophyte.",
              },
            ],
          },
          {
            label: "Gynoecium — female reproductive organ",
            detail: "One or more pistils. Each pistil = stigma + style + ovary.",
            children: [
              {
                label: "Ovary",
                detail:
                  "Basal bulged part bearing ovules (megasporangia); each ovule produces an embryo sac — the female gametophyte.",
              },
            ],
          },
        ]}
      />
      <KeyPoint title="Answer to the in-text question">
        The two most important units of sexual reproduction develop in the{" "}
        <Highlight color="green">anther</Highlight> (pollen grains, the male gametophyte) and in the{" "}
        <Highlight color="green">ovule</Highlight> (embryo sac, the female gametophyte).
      </KeyPoint>

      <h2 id="h-1-2">1.2 Pre-fertilisation: Structures and Events</h2>
      <p>
        Much before the actual flower is seen on a plant, the decision that the plant is going to
        flower has taken place. Several hormonal and structural changes are initiated which lead to
        the differentiation and further development of the floral primordium.
      </p>
      <ProcessCard
        title="From the decision to flower to a mature flower"
        steps={[
          {
            label: "Hormonal and structural changes are initiated",
            description: "The decision that the plant is going to flower has already been taken.",
          },
          {
            label: "The floral primordium differentiates and develops",
          },
          {
            label: "Inflorescences are formed",
            description: "They bear the floral buds and then the flowers.",
          },
          {
            label: "Androecium and gynoecium differentiate and develop",
            description: "The male and female reproductive structures form inside the flower.",
          },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "Androecium (male)",
            children: (
              <ul>
                <li>Consists of a whorl of <strong>stamens</strong>.</li>
                <li>Each stamen has an <strong>anther</strong> that produces pollen grains.</li>
                <li>Pollen grains are the male gametophytes.</li>
              </ul>
            ),
          },
          {
            title: "Gynoecium (female)",
            children: (
              <ul>
                <li>Consists of one or more <strong>pistils</strong>.</li>
                <li>Each pistil has an <strong>ovary</strong> that bears ovules.</li>
                <li>Each ovule contains an embryo sac, the female gametophyte.</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-1-2-1">1.2.1 Stamen, Microsporangium and Pollen Grain</h3>
      <p>The two parts of a typical stamen:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Filament</strong> — the long and slender stalk.
        </li>
        <li>
          <strong>Anther</strong> — the terminal, generally bilobed structure.
        </li>
      </ul>
      <p>
        The proximal end of the filament is attached to the <strong>thalamus</strong> or the{" "}
        <strong>petal</strong> of the flower. The number and length of stamens are variable in
        flowers of different species.
      </p>
      <Callout type="note" title="Try this">
        Collect a stamen each from ten flowers (each from a different species) and arrange them on
        a slide — you will be able to appreciate the large variation in size seen in nature. Observe
        each stamen under a dissecting microscope and make neat diagrams to see the range in shape
        and attachment of anthers in different flowers.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">The anther</h4>
      <p>
        A typical angiosperm anther is <strong>bilobed</strong> with each lobe having two theca —
        that is, it is <strong>dithecous</strong>. Often a longitudinal groove runs lengthwise
        separating the theca. In transverse section the bilobed nature is very distinct: the anther
        is a four-sided (<strong>tetragonal</strong>) structure consisting of four microsporangia
        located at the corners, two in each lobe.
      </p>
      <TableCard
        caption="The microsporangia develop further and become pollen sacs. They extend longitudinally all through the length of an anther and are packed with pollen grains."
        headers={["Feature", "Observation"]}
        rows={[
          { cells: ["Lobes", "Two (bilobed)"] },
          { cells: ["Theca per lobe", "Two — hence dithecous"] },
          { cells: ["Groove", "A longitudinal groove runs lengthwise separating the theca"] },
          { cells: ["Transverse section", "Four-sided (tetragonal)"] },
          { cells: ["Microsporangia", "Four, one at each corner — two in each lobe"] },
          { cells: ["Fate", "Develop into pollen sacs packed with pollen grains"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Structure of the microsporangium</h4>
      <p>
        In a transverse section a typical microsporangium appears near circular in outline. It is
        generally surrounded by <strong>four wall layers</strong>.
      </p>
      <TableCard
        title="Four wall layers of the microsporangium"
        caption="The outer three wall layers perform the function of protection and help in dehiscence of the anther to release the pollen. The innermost layer, the tapetum, nourishes the developing pollen grains."
        headers={["Wall layer", "Position", "Function / feature"]}
        rows={[
          { cells: ["Epidermis", "Outermost", "Protection; helps in dehiscence of the anther"] },
          { cells: ["Endothecium", "Below the epidermis", "Protection; helps in dehiscence of the anther"] },
          { cells: ["Middle layers", "Between endothecium and tapetum", "Protection; helps in dehiscence of the anther"] },
          {
            cells: [
              "Tapetum",
              "Innermost",
              "Nourishes the developing pollen grains; cells possess dense cytoplasm and generally have more than one nucleus",
            ],
          },
        ]}
      />
      <Callout type="note" title="Sporogenous tissue">
        When the anther is young, a group of compactly arranged homogenous cells called the{" "}
        <strong>sporogenous tissue</strong> occupies the centre of each microsporangium.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Microsporogenesis</h4>
      <Callout type="important" title="Definition — microsporogenesis">
        The process of formation of microspores from a pollen mother cell (PMC) through meiosis is
        called <Highlight color="yellow">microsporogenesis</Highlight>.
      </Callout>
      <p>
        As the anther develops, the cells of the sporogenous tissue undergo meiotic divisions to form
        microspore tetrads. Each cell of the sporogenous tissue is capable of giving rise to a
        microspore tetrad — each one is a potential pollen or microspore mother cell.
      </p>
      <ProcessCard
        title="Microsporogenesis — from sporogenous tissue to pollen grains"
        steps={[
          {
            label: "Sporogenous tissue — the starting cells",
          },
          {
            label: "Pollen mother cell (PMC)",
            description:
              "Each cell of the sporogenous tissue is a potential pollen or microspore mother cell.",
          },
          {
            label: "Meiosis",
            description: "The cells of the sporogenous tissue undergo meiotic divisions.",
          },
          {
            label: "Microspore tetrad",
            description:
              "The microspores, as they are formed, are arranged in a cluster of four cells — the microspore tetrad.",
          },
          {
            label: "Microspores dissociate",
            description:
              "As the anthers mature and dehydrate, the microspores separate from each other.",
          },
          {
            label: "Pollen grains",
            description:
              "Each microspore develops into a pollen grain. Several thousands are formed inside each microsporangium and are released with the dehiscence of the anther.",
          },
        ]}
      />
      <Expandable title="In-text question — what is the ploidy of the cells of the tetrad?">
        <p>
          The sporogenous tissue and therefore the pollen mother cell is <strong>diploid (2n)</strong>.
          Meiosis halves the chromosome number, so each of the four microspores of the tetrad is{" "}
          <strong>haploid (n)</strong>. The same logic fixes the ploidy of every later structure up to
          the gametes: pollen grain, vegetative cell, generative cell and the two male gametes are
          all haploid.
        </p>
      </Expandable>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Pollen grain — the male gametophyte</h4>
      <FactCard
        title="Pollen grain"
        definition="The pollen grains represent the male gametophytes."
      />
      <p>
        Pollen grains are generally spherical, measuring about 25–50 micrometres in diameter, and
        have a prominent two-layered wall. Tap the opened anthers of <em>Hibiscus</em> or any other
        flower and yellowish powdery pollen grains come off on your fingers; sprinkled on a drop of
        water and seen under a microscope, they show an amazing variety of architecture — sizes,
        shapes, colours and designs — in different species.
      </p>
      <Comparison
        columns={[
          {
            title: "Exine — outer, hard layer",
            children: (
              <ul>
                <li>Made up of <strong>sporopollenin</strong>, one of the most resistant organic materials known.</li>
                <li>Can withstand high temperatures and strong acids and alkali.</li>
                <li>No enzyme that degrades sporopollenin is so far known.</li>
                <li>Has prominent apertures called <strong>germ pores</strong>, where sporopollenin is absent.</li>
                <li>Exhibits a fascinating array of patterns and designs.</li>
                <li>Preserves pollen grains as fossils.</li>
              </ul>
            ),
          },
          {
            title: "Intine — inner layer",
            children: (
              <ul>
                <li>Thin and continuous layer.</li>
                <li>Made up of <strong>cellulose and pectin</strong>.</li>
                <li>The cytoplasm of the pollen grain is surrounded by a plasma membrane.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        When the pollen grain is mature it contains two cells — the <strong>vegetative cell</strong>{" "}
        and the <strong>generative cell</strong>.
      </p>
      <TableCard
        title="The two cells of a mature pollen grain"
        caption="In over 60 per cent of angiosperms, pollen grains are shed at this 2-celled stage. In the remaining species the generative cell divides mitotically to give rise to the two male gametes before the pollen grains are shed (3-celled stage)."
        headers={["Cell", "Features"]}
        rows={[
          {
            cells: [
              "Vegetative cell",
              "Bigger; has abundant food reserve and a large irregularly shaped nucleus",
            ],
          },
          {
            cells: [
              "Generative cell",
              "Small; floats in the cytoplasm of the vegetative cell; spindle shaped with dense cytoplasm and a nucleus",
            ],
          },
        ]}
      />
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard
          label="Pollen grain size"
          value="25–50"
          unit="µm"
          description="Generally spherical, with a two-layered wall."
        />
        <MetricCard
          label="Shed at 2-celled stage"
          value="> 60"
          unit="% of angiosperms"
          description="The rest shed 3-celled pollen, the generative cell having already divided."
        />
        <MetricCard
          label="Pollen storage"
          value="−196"
          unit="°C (liquid nitrogen)"
          description="Pollen of many species can be stored for years as pollen banks."
        />
      </div>
      <Callout type="warning" title="Pollen allergy">
        Pollen grains of many species cause severe allergies and bronchial afflictions in some
        people, often leading to chronic respiratory disorders — asthma, bronchitis, etc.{" "}
        <em>Parthenium</em> or carrot grass, which came into India as a contaminant with imported
        wheat, has become ubiquitous in occurrence and causes pollen allergy.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Pollen viability and pollen banks</h4>
      <p>
        Once shed, pollen grains have to land on the stigma before they lose viability if they are
        to bring about fertilisation. The period for which pollen grains remain viable is highly
        variable and to some extent depends on the prevailing temperature and humidity.
      </p>
      <TableCard
        caption="Pollen stored in liquid nitrogen can be used as pollen banks, similar to seed banks, in crop breeding programmes — just as semen/sperms of animals including humans are stored for artificial insemination."
        headers={["Plants", "Viability of pollen grains"]}
        rows={[
          { cells: ["Cereals such as rice and wheat", "Lose viability within 30 minutes of release"] },
          { cells: ["Some members of Rosaceae, Leguminoseae and Solanaceae", "Maintain viability for months"] },
          { cells: ["Many species stored in liquid nitrogen (−196 °C)", "Remain viable for years"] },
        ]}
      />
      <Callout type="didyouknow" title="Pollen products">
        Pollen grains are rich in nutrients. It has become a fashion in recent years to use pollen
        tablets as food supplements. In western countries, a large number of pollen products in the
        form of tablets and syrups are available in the market. Pollen consumption has been claimed
        to increase the performance of athletes and race horses.
      </Callout>

      <h3 id="h-1-2-2">1.2.2 The Pistil, Megasporangium (Ovule) and Embryo Sac</h3>
      <p>
        The <strong>gynoecium</strong> represents the female reproductive part of the flower. It may
        consist of a single pistil (<strong>monocarpellary</strong>) or more than one pistil
        (<strong>multicarpellary</strong>). When there are more than one, the pistils may be fused
        together (<strong>syncarpous</strong>) or may be free (<strong>apocarpous</strong>).
      </p>
      <TableCard
        title="Three parts of a pistil"
        caption="Arising from the placenta are the megasporangia, commonly called ovules. The number of ovules in an ovary may be one (wheat, paddy, mango) to many (papaya, water melon, orchids)."
        headers={["Part", "Position", "Function"]}
        rows={[
          { cells: ["Stigma", "Top of the pistil", "Serves as a landing platform for pollen grains"] },
          { cells: ["Style", "Elongated slender part beneath the stigma", "Connects stigma to ovary; the pollen tube grows through it"] },
          {
            cells: [
              "Ovary",
              "Basal bulged part of the pistil",
              "Contains the ovarian cavity (locule) with the placenta, from which the ovules arise",
            ],
          },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">The megasporangium (ovule)</h4>
      <p>
        The ovule is a small structure attached to the placenta by means of a stalk. A typical
        angiosperm ovule (anatropous) is built of the following parts.
      </p>
      <TableCard
        title="Structure of a typical angiosperm ovule"
        headers={["Part", "What it is"]}
        rows={[
          { cells: ["Funicle", "The stalk by which the ovule is attached to the placenta"] },
          { cells: ["Hilum", "The region where the body of the ovule fuses with the funicle — the junction between ovule and funicle"] },
          { cells: ["Integuments", "One or two protective envelopes; they encircle the nucellus except at the tip"] },
          { cells: ["Micropyle", "The small opening at the tip, where the integuments leave a gap"] },
          { cells: ["Chalaza", "The basal part of the ovule, opposite the micropylar end"] },
          { cells: ["Nucellus", "The mass of cells enclosed within the integuments; its cells have abundant reserve food materials"] },
          { cells: ["Embryo sac", "The female gametophyte, located in the nucellus. An ovule generally has a single embryo sac formed from a megaspore"] },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Megasporogenesis</h4>
      <Callout type="important" title="Definition — megasporogenesis">
        The process of formation of megaspores from the megaspore mother cell is called{" "}
        <Highlight color="yellow">megasporogenesis</Highlight>.
      </Callout>
      <p>
        Ovules generally differentiate a single <strong>megaspore mother cell (MMC)</strong> in the
        micropylar region of the nucellus. It is a large cell containing dense cytoplasm and a
        prominent nucleus. The MMC undergoes meiotic division, and meiosis results in the production
        of <strong>four megaspores</strong>.
      </p>
      <ProcessCard
        title="Megasporogenesis"
        steps={[
          {
            label: "Megaspore mother cell (2n) differentiates",
          },
          { label: "Meiotic division of the MMC" },
          {
            label: "Tetrad of four megaspores (n)",
            description: "Meiosis reduces the chromosome number, so all four megaspores are haploid.",
          },
          {
            label: "Three degenerate, one becomes functional",
            description:
              "In a majority of flowering plants, one of the megaspores is functional while the other three degenerate.",
          },
          {
            label: "Functional megaspore forms the female gametophyte",
          },
        ]}
      />
      <FactCard
        title="Monosporic development"
        definition="Only the functional megaspore develops into the female gametophyte (embryo sac). This method of embryo sac formation from a single megaspore is termed monosporic development."
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Formation of the embryo sac</h4>
      <ProcessCard
        title="From functional megaspore to mature embryo sac"
        steps={[
          {
            label: "1-nucleate functional megaspore (n)",
            description: "Its nucleus divides mitotically.",
          },
          {
            label: "2-nucleate embryo sac",
            description: "Two nuclei are formed which move to the opposite poles.",
          },
          {
            label: "4-nucleate stage",
            description: "Two more sequential mitotic nuclear divisions follow.",
          },
          {
            label: "8-nucleate stage",
            description:
              "These mitotic divisions are strictly free nuclear — the nuclear divisions are not followed immediately by cell wall formation.",
          },
          {
            label: "Cellularisation",
            description:
              "After the 8-nucleate stage, cell walls are laid down and the typical female gametophyte is organised.",
          },
          {
            label: "Mature embryo sac — 7-celled, 8-nucleate",
            description:
              "The eight nuclei are now distributed among seven cells, and the sac is ready to receive the pollen tube.",
          },
        ]}
      />
      <TableCard
        title="Distribution of cells in the mature embryo sac"
        caption="Six of the eight nuclei are enclosed in cells and the remaining two lie free as polar nuclei in the central cell — hence a typical angiosperm embryo sac, at maturity, though 8-nucleate is 7-celled."
        headers={["Region", "Cells", "Details"]}
        rows={[
          {
            cells: [
              "Micropylar end",
              "Egg apparatus — 3 cells",
              "Two synergids and one egg cell. The synergids have special cellular thickenings at the micropylar tip called the filiform apparatus, which guide the pollen tube into the synergid.",
            ],
          },
          {
            cells: ["Chalazal end", "Antipodals — 3 cells", "Three cells grouped at the chalazal end."],
          },
          {
            cells: [
              "Centre",
              "Central cell — 1 cell",
              "Large cell containing the two polar nuclei, situated below the egg apparatus.",
            ],
          },
        ]}
      />
      <MistakeCard
        mistake="The mature embryo sac is described as 8-celled because it has 8 nuclei."
        correction="It is 8-nucleate but 7-celled: six nuclei are enclosed in cells (egg apparatus 3 + antipodals 3) and two remain free as polar nuclei in the central cell."
        example="3 + 3 + 1 = 7 cells; 3 + 3 + 2 = 8 nuclei."
      />
      <TableCard
        title="Ploidy in the ovule — the in-text question answered"
        headers={["Structure", "Ploidy", "Reason"]}
        rows={[
          { cells: ["Nucellus", "2n (diploid)", "Somatic tissue of the ovule"] },
          { cells: ["Megaspore mother cell (MMC)", "2n (diploid)", "Differentiates from nucellar cells"] },
          { cells: ["Functional megaspore", "n (haploid)", "Product of meiosis of the MMC"] },
          {
            cells: ["Female gametophyte (embryo sac)", "n (haploid)", "Formed from the haploid megaspore by mitosis alone"],
          },
        ]}
      />

      <h3 id="h-1-2-3">1.2.3 Pollination</h3>
      <p>
        The male and female gametes in flowering plants are produced in the pollen grain and embryo
        sac respectively. As both types of gametes are <strong>non-motile</strong>, they have to be
        brought together for fertilisation to occur.
      </p>
      <Callout type="important" title="Definition — pollination">
        Transfer of pollen grains (shed from the anther) to the stigma of a pistil is termed{" "}
        <Highlight color="yellow">pollination</Highlight>.
      </Callout>
      <p>
        Flowering plants have evolved an amazing array of adaptations to achieve pollination, and
        they make use of external agents to do it.
      </p>
      <p>Depending on the source of pollen, pollination is divided into three types.</p>
      <TableCard
        title="Kinds of pollination"
        caption="Xenogamy is the only type of pollination which, during pollination, brings genetically different types of pollen grains to the stigma."
        headers={["Type", "Transfer of pollen", "Genetic meaning"]}
        rows={[
          {
            cells: [
              "Autogamy",
              "From the anther to the stigma of the same flower",
              "Pollination within the same flower. In a normal flower that opens and exposes the anthers and stigma, complete autogamy is rather rare — it needs synchrony in pollen release and stigma receptivity, and the anthers and stigma must lie close together.",
            ],
          },
          {
            cells: [
              "Geitonogamy",
              "From the anther to the stigma of another flower of the same plant",
              "Functionally cross-pollination involving a pollinating agent, but genetically similar to autogamy since the pollen comes from the same plant.",
            ],
          },
          {
            cells: [
              "Xenogamy",
              "From the anther to the stigma of a different plant",
              "The only type that brings genetically different pollen grains to the stigma.",
            ],
          },
        ]}
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Chasmogamous and cleistogamous flowers</h4>
      <p>
        Some plants such as <em>Viola</em> (common pansy), <em>Oxalis</em> and <em>Commelina</em>{" "}
        produce two types of flowers.
      </p>
      <Comparison
        columns={[
          {
            title: "Chasmogamous flowers",
            children: (
              <ul>
                <li>Similar to flowers of other species, with <strong>exposed anthers and stigma</strong>.</li>
                <li>The flower opens normally.</li>
                <li>Cross-pollination is possible.</li>
              </ul>
            ),
          },
          {
            title: "Cleistogamous flowers",
            children: (
              <ul>
                <li>Do <strong>not open at all</strong>.</li>
                <li>Anthers and stigma lie close to each other.</li>
                <li>Anthers dehisce in the flower buds, so pollen grains come in contact with the stigma and pollination is effected.</li>
                <li>Invariably <strong>autogamous</strong> — there is no chance of cross-pollen landing on the stigma.</li>
                <li>Produce assured seed-set even in the absence of pollinators.</li>
              </ul>
            ),
          },
        ]}
      />
      <Expandable title="Think: is cleistogamy advantageous or disadvantageous?">
        <p>
          <strong>Advantageous</strong> in the short term — cleistogamous flowers set seed
          assuredly, even when pollinators are absent, because pollination is guaranteed inside the
          closed bud.
        </p>
        <p className="mt-2">
          <strong>Disadvantageous</strong> in the long term — no cross-pollination means no new gene
          combinations, so there is no variation for the progeny to draw on, and continued
          self-pollination leads to inbreeding depression.
        </p>
      </Expandable>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Agents of pollination</h4>
      <p>
        Plants use two abiotic agents (wind and water) and one biotic agent (animals) to achieve
        pollination. <strong>Majority of plants use biotic agents</strong>; only a small proportion
        use abiotic agents. Pollen grains coming in contact with the stigma is a chance factor in
        both wind and water pollination, so to compensate for these uncertainties and the associated
        loss of pollen grains, such flowers produce enormous amounts of pollen compared with the
        number of ovules available for pollination.
      </p>
      <TreeDiagram
        title="Agents of pollination"
        defaultExpanded
        nodes={[
          {
            label: "Abiotic agents — used by only a small proportion of plants",
            children: [
              { label: "Wind", detail: "The more common of the two abiotic pollinations." },
              {
                label: "Water",
                detail: "Quite rare — limited to about 30 genera, mostly monocotyledons.",
              },
            ],
          },
          {
            label: "Biotic agent — animals (used by the majority of plants)",
            detail:
              "Bees, butterflies, flies, beetles, wasps, ants, moths, birds (sunbirds and humming birds) and bats. Insects, particularly bees, are the dominant biotic pollinating agents.",
          },
        ]}
      />
      <TableCard
        title="Adaptations of flowers to their pollinating agent"
        headers={["Agent", "Flower adaptations", "Examples"]}
        rows={[
          {
            cells: [
              "Wind",
              "Pollen light and non-sticky so that it can be transported in wind currents; well-exposed stamens so that pollen is easily dispersed; large, often feathery stigma to trap air-borne pollen; a single ovule in each ovary; numerous flowers packed into an inflorescence",
              <>
                Corn cob — the &ldquo;ears&rdquo; you see are nothing but the stigma and style waving in
                the wind to trap pollen grains. Wind-pollination is quite common in grasses.
              </>,
            ],
          },
          {
            cells: [
              "Water",
              "In most water-pollinated species pollen grains are protected from wetting by a mucilaginous covering; pollen may be long and ribbon-like and is carried passively inside the water",
              <>
                <em>Vallisneria</em> and <em>Hydrilla</em> (fresh water), marine sea-grasses such as{" "}
                <em>Zostera</em>. In <em>Vallisneria</em> the female flower reaches the surface of water
                by a long stalk and the male flowers or pollen grains are released on to the surface,
                carried passively by water currents. In seagrasses the female flowers remain submerged
                and pollen is released inside the water.
              </>,
            ],
          },
          {
            cells: [
              "Animals",
              "Large, colourful, fragrant and rich in nectar; when small, many flowers clustered into an inflorescence to be conspicuous; nectar and pollen grains are the usual floral rewards; pollen generally sticky; flowers pollinated by flies and beetles secrete foul odours",
              <>
                Bees (dominant), butterflies, flies, beetles, wasps, ants, moths, birds (sunbirds and
                humming birds) and bats. Larger animals such as some primates (lemurs), arboreal
                (tree-dwelling) rodents, or even reptiles (gecko lizard and garden lizard) have also
                been reported as pollinators in some species.
              </>,
            ],
          },
        ]}
      />
      <Callout type="note" title="Water carries gametes in lower plants — but not in every aquatic">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Water is a <strong>regular mode of transport for the male gametes among the lower plant
            groups</strong> such as algae, bryophytes and pteridophytes. It is believed, particularly
            for some bryophytes and pteridophytes, that their distribution is limited because of the
            need for water for the transport of male gametes and fertilisation.
          </li>
          <li>
            Not all aquatic plants use water for pollination. In a majority of aquatic plants such as{" "}
            <strong>water hyacinth and water lily</strong>, the flowers emerge above the level of water
            and are pollinated by insects or wind as in most land plants.
          </li>
        </ul>
      </Callout>
      <p>
        Often flowers of animal-pollinated plants are{" "}
        <Highlight color="yellow">specifically adapted for a particular species of animal</Highlight>
        — which is why the same flower is not visited by every animal around it.
      </p>
      <Callout type="note" title="Why are wind- and water-pollinated flowers drab?">
        Both wind- and water-pollinated flowers are not very colourful and do not produce nectar.
        Colour and nectar are rewards and signals for animal visitors — abiotic pollination needs
        neither.
      </Callout>
      <Callout type="didyouknow" title="Floral rewards that are not food">
        In some species floral rewards take the form of safe places to lay eggs. One example is the
        tallest flower of <em>Amorphophallus</em> — the flower itself is about 6 feet in height. A
        similar relationship exists between a species of moth and the plant <em>Yucca</em>, where
        both species cannot complete their life cycles without each other: the moth deposits its
        eggs in the locule of the ovary and the flower, in turn, gets pollinated by the moth. The
        larvae of the moth come out of the eggs as the seeds start developing.
      </Callout>
      <Callout type="warning" title="Pollen and nectar robbers">
        Many insects may consume pollen or the nectar without bringing about pollination. Such
        floral visitors are referred to as <strong>pollen/nectar robbers</strong>. Only visitors that
        come in contact with the anthers and the stigma can bring about pollination.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Outbreeding devices</h4>
      <p>
        Majority of flowering plants produce <strong>hermaphrodite</strong> flowers, and pollen
        grains are likely to come in contact with the stigma of the same flower. Continued
        self-pollination results in <strong>inbreeding depression</strong>. Flowering plants have
        therefore developed many devices to discourage self-pollination and to encourage
        cross-pollination.
      </p>
      <Stepper
        steps={[
          {
            label: "Pollen release and stigma receptivity are not synchronised",
            description:
              "Either the pollen is released before the stigma becomes receptive, or the stigma becomes receptive much before the release of pollen.",
          },
          {
            label: "Anther and stigma are placed at different positions",
            description:
              "The pollen cannot come in contact with the stigma of the same flower. Both this device and the previous one prevent autogamy.",
          },
          {
            label: "Self-incompatibility",
            description:
              "A genetic mechanism that prevents self-pollen (from the same flower or other flowers of the same plant) from fertilising the ovules by inhibiting pollen germination or pollen tube growth in the pistil.",
          },
          {
            label: "Production of unisexual flowers",
            description:
              "If both male and female flowers are present on the same plant such as castor and maize (monoecious), it prevents autogamy but not geitonogamy. In several species such as papaya, male and female flowers are present on different plants — each plant is either male or female (dioecy) — which prevents both autogamy and geitonogamy.",
          },
        ]}
      />
      <MistakeCard
        mistake="Unisexual flowers always prevent self-pollination completely."
        correction="Only dioecy prevents both autogamy and geitonogamy. Monoecy (castor, maize) prevents autogamy but not geitonogamy, because pollen can still move between flowers of the same plant."
      />

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Pollen–pistil interaction</h4>
      <p>
        Pollination does not guarantee the transfer of the right type of pollen — compatible pollen
        of the same species as the stigma. Often pollen of the wrong type, either from other species
        or from the same plant (if it is self-incompatible), also lands on the stigma.
      </p>
      <ConceptCard title="Recognition — the dialogue between pollen and pistil">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>The pistil has the ability to <strong>recognise</strong> the pollen, whether it is of the right type (compatible) or of the wrong type (incompatible).</li>
          <li>If it is of the right type, the pistil accepts the pollen and promotes post-pollination events that lead to fertilisation.</li>
          <li>If the pollen is of the wrong type, the pistil rejects it by preventing pollen germination on the stigma or the pollen tube growth in the style.</li>
          <li>The ability to recognise pollen followed by acceptance or rejection is the result of a continuous dialogue between pollen grain and pistil, mediated by chemical components of the pollen interacting with those of the pistil.</li>
          <li>
            It is only in recent years that botanists have been able to identify some of the pollen
            and pistil components, and the interactions leading to recognition followed by acceptance
            or rejection.
          </li>
        </ul>
      </ConceptCard>
      <ProcessCard
        title="From compatible pollination to the entry of the pollen tube"
        steps={[
          {
            label: "Germination on the stigma",
            description:
              "The pollen grain germinates on the stigma and produces a pollen tube through one of the germ pores.",
          },
          {
            label: "Contents move into the pollen tube",
            description: "The contents of the pollen grain move into the pollen tube.",
          },
          {
            label: "Growth through the style",
            description:
              "The pollen tube grows through the tissues of the stigma and style and reaches the ovary.",
          },
          {
            label: "Two male gametes",
            description:
              "In plants that shed 2-celled pollen, the generative cell divides and forms the two male gametes during the growth of the pollen tube. In plants that shed 3-celled pollen, the pollen tube carries the two male gametes from the beginning.",
          },
          {
            label: "Entry into the ovule",
            description: "After reaching the ovary, the pollen tube enters the ovule through the micropyle.",
          },
          {
            label: "Entry into a synergid",
            description:
              "The tube then enters one of the synergids through the filiform apparatus, which guides its entry.",
          },
        ]}
      />
      <Callout type="important" title="Definition — pollen–pistil interaction">
        All these events — from pollen deposition on the stigma until pollen tubes enter the ovule —
        are together referred to as{" "}
        <Highlight color="yellow">pollen–pistil interaction</Highlight>. It is a dynamic process
        involving pollen recognition followed by promotion or inhibition of the pollen.
      </Callout>
      <p>
        The knowledge gained in this area helps the plant breeder manipulate pollen–pistil
        interaction, even in incompatible pollinations, to get desired hybrids.
      </p>
      <Callout type="note" title="Try this — pollen germination on a slide">
        Dust some pollen from flowers such as pea, chickpea, <em>Crotalaria</em>, balsam and{" "}
        <em>Vinca</em> on a glass slide containing a drop of sugar solution (about 10 per cent).
        After about 15–30 minutes, observe the slide under the low power lens of the microscope. You
        are likely to see pollen tubes coming out of the pollen grains.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Artificial hybridisation — emasculation and bagging</h4>
      <p>
        A breeder is interested in crossing different species and often genera to combine desirable
        characters to produce commercially &lsquo;superior&rsquo; varieties. Artificial hybridisation
        is one of the major approaches of crop improvement programmes. In such crossing experiments
        it is important to make sure that only the desired pollen grains are used for pollination and
        the stigma is protected from contamination by unwanted pollen. This is achieved by
        emasculation and bagging.
      </p>
      <ProcessCard
        title="Emasculation and bagging — when the female parent has bisexual flowers"
        steps={[
          {
            label: "Emasculation",
            description:
              "Removal of anthers from the flower bud before the anther dehisces, using a pair of forceps.",
          },
          {
            label: "Bagging",
            description:
              "The emasculated flowers are covered with a bag of suitable size, generally made up of butter paper, to prevent contamination of the stigma with unwanted pollen.",
          },
          {
            label: "Pollination with desired pollen",
            description:
              "When the stigma of the bagged flower attains receptivity, mature pollen grains collected from the anthers of the male parent are dusted on the stigma.",
          },
          {
            label: "Rebagging",
            description: "The flowers are rebagged and the fruits are allowed to develop.",
          },
        ]}
      />
      <Callout type="note" title="When the female parent has unisexual flowers">
        There is no need for emasculation. The female flower buds are bagged before the flowers
        open. When the stigma becomes receptive, pollination is carried out using the desired pollen
        and the flower is rebagged.
      </Callout>

      <h2 id="h-1-3">1.3 Double Fertilisation</h2>
      <p>
        After entering one of the synergids, the pollen tube releases the two male gametes into the
        cytoplasm of the synergid.
      </p>
      <ProcessCard
        title="Double fertilisation — the two fusions"
        steps={[
          {
            label: "Discharge of the male gametes",
            description: "The pollen tube releases the two male gametes into the cytoplasm of a synergid.",
          },
          {
            label: "Syngamy",
            description:
              "One of the male gametes moves towards the egg cell and fuses with its nucleus, completing syngamy. This results in the formation of a diploid cell, the zygote.",
          },
          {
            label: "Triple fusion",
            description:
              "The other male gamete moves towards the two polar nuclei located in the central cell and fuses with them to produce a triploid primary endosperm nucleus (PEN). As this involves the fusion of three haploid nuclei it is termed triple fusion.",
          },
          {
            label: "Double fertilisation",
            description:
              "Since two types of fusions, syngamy and triple fusion, take place in an embryo sac, the phenomenon is termed double fertilisation — an event unique to flowering plants.",
          },
          {
            label: "What each product becomes",
            description:
              "The central cell after triple fusion becomes the primary endosperm cell (PEC) and develops into the endosperm, while the zygote develops into an embryo.",
          },
        ]}
      />
      <TableCard
        title="Products of the two fusions"
        headers={["Event", "Fusing nuclei", "Product", "Ploidy"]}
        rows={[
          {
            cells: ["Syngamy", "Egg cell (n) + one male gamete (n)", "Zygote", "2n (diploid)"],
          },
          {
            cells: [
              "Triple fusion",
              "Two polar nuclei (n + n) + one male gamete (n)",
              "Primary endosperm nucleus (PEN), in the primary endosperm cell",
              "3n (triploid)",
            ],
          },
        ]}
      />
      <KeyPoint title="Why double fertilisation?">
        Two fusion events happen in the <em>same</em> embryo sac —{" "}
        <Highlight color="yellow">syngamy and triple fusion</Highlight>. Triple fusion brings together{" "}
        <strong>three haploid nuclei</strong> (two polar nuclei and one male gamete); syngamy brings
        together <strong>two</strong>. No other plant group shows this.
      </KeyPoint>

      <h2 id="h-1-4">1.4 Post-fertilisation: Structures and Events</h2>
      <Callout type="important" title="Definition — post-fertilisation events">
        Following double fertilisation, events of endosperm and embryo development, maturation of
        ovule(s) into seed(s) and ovary into fruit, are collectively termed{" "}
        <Highlight color="yellow">post-fertilisation events</Highlight>.
      </Callout>

      <h3 id="h-1-4-1">1.4.1 Endosperm</h3>
      <p>
        <strong>Endosperm development precedes embryo development.</strong> Why? Because the
        developing embryo must be assured of nutrition from the beginning.
      </p>
      <ProcessCard
        title="Endosperm development"
        steps={[
          {
            label: "Primary endosperm cell divides repeatedly",
            description: "It forms a triploid (3n) endosperm tissue.",
          },
          {
            label: "Reserve food is stored",
            description:
              "The cells of this tissue are filled with reserve food materials and are used for the nutrition of the developing embryo.",
          },
          {
            label: "Free-nuclear endosperm",
            description:
              "In the most common type of endosperm development, the PEN undergoes successive nuclear divisions to give rise to free nuclei.",
          },
          {
            label: "Cellular endosperm",
            description:
              "Subsequently cell wall formation occurs and the endosperm becomes cellular. The number of free nuclei formed before cellularisation varies greatly.",
          },
        ]}
      />
      <Callout type="didyouknow" title="Coconut water is endosperm">
        The coconut water from tender coconut is nothing but <strong>free-nuclear endosperm</strong>{" "}
        (made up of thousands of nuclei), and the surrounding white kernel is the{" "}
        <strong>cellular endosperm</strong>.
      </Callout>
      <TableCard
        title="What happens to the endosperm in the mature seed"
        caption="Split open some seeds of castor, peas, beans, groundnut and the fruit of coconut and look for the endosperm in each case. Find out whether the endosperm is persistent in cereals — wheat, rice and maize."
        headers={["Fate of endosperm", "What happens", "Examples"]}
        rows={[
          {
            cells: [
              "Completely consumed",
              "Used up by the developing embryo before seed maturation",
              "Pea, groundnut, beans",
            ],
          },
          {
            cells: [
              "Persists in the mature seed",
              "Retained in the seed and used up during seed germination",
              "Castor, coconut",
            ],
          },
        ]}
      />

      <h3 id="h-1-4-2">1.4.2 Embryo</h3>
      <p>
        The embryo develops at the <strong>micropylar end</strong> of the embryo sac where the zygote
        is situated. Most zygotes divide only after a certain amount of endosperm is formed — an
        adaptation to provide assured nutrition to the developing embryo. Though the seeds differ
        greatly, the early stages of embryo development (<strong>embryogeny</strong>) are similar in
        both monocotyledons and dicotyledons.
      </p>
      <ProcessCard
        title="Embryogeny in a dicotyledonous embryo"
        steps={[
          { label: "Zygote" },
          { label: "Proembryo" },
          { label: "Globular embryo" },
          { label: "Heart-shaped embryo" },
          { label: "Mature embryo" },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "Dicotyledonous embryo",
            children: (
              <ul>
                <li>Consists of an <strong>embryonal axis</strong> and <strong>two cotyledons</strong>.</li>
                <li>
                  <strong>Epicotyl</strong> — the portion of the embryonal axis above the level of
                  cotyledons; it terminates with the plumule or stem tip.
                </li>
                <li>
                  <strong>Hypocotyl</strong> — the cylindrical portion below the level of cotyledons;
                  it terminates at its lower end in the radicle or root tip.
                </li>
                <li>The root tip is covered with a <strong>root cap</strong>.</li>
              </ul>
            ),
          },
          {
            title: "Monocotyledonous embryo (grass)",
            children: (
              <ul>
                <li>Possesses only <strong>one cotyledon</strong>.</li>
                <li>In the grass family the cotyledon is called <strong>scutellum</strong>, situated towards one side (lateral) of the embryonal axis.</li>
                <li>
                  At its lower end the embryonal axis has the radicle and root cap enclosed in an
                  undifferentiated sheath called <strong>coleorrhiza</strong>.
                </li>
                <li>
                  The portion above the level of attachment of the scutellum is the epicotyl, which
                  has a shoot apex and a few leaf primordia enclosed in a hollow foliar structure,
                  the <strong>coleoptile</strong>.
                </li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="note" title="Try this">
        Soak a few seeds in water (say of wheat, maize, peas, chickpeas, ground nut) overnight. Then
        split the seeds and observe the various parts of the embryo and the seed.
      </Callout>

      <h3 id="h-1-4-3">1.4.3 Seed</h3>
      <FactCard
        title="Seed"
        definition="In angiosperms, the seed is the final product of sexual reproduction. It is often described as a fertilised ovule. Seeds are formed inside fruits."
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>A seed typically consists of <strong>seed coat(s)</strong>, <strong>cotyledon(s)</strong> and an <strong>embryo axis</strong>.</li>
        <li>The cotyledons of the embryo are simple structures, generally thick and swollen due to storage of food reserves (as in legumes).</li>
        <li>
          Mature seeds may be <strong>non-albuminous</strong> (or ex-albuminous) — no residual
          endosperm, as it is completely consumed during embryo development — or{" "}
          <strong>albuminous</strong>, retaining a part of the endosperm that is not completely used
          up during embryo development, as in cereals such as wheat, maize and barley.
        </li>
        <li>
          Occasionally, in some seeds such as black pepper and beet, remnants of the nucellus are
          also persistent. This residual, persistent nucellus is the <strong>perisperm</strong>.
        </li>
        <li>Integuments of the ovule harden as tough protective <strong>seed coats</strong>.</li>
        <li>
          The <strong>micropyle</strong> remains as a small pore in the seed coat, facilitating entry
          of oxygen and water into the seed during germination.
        </li>
        <li>
          As the seed matures its water content is reduced and seeds become relatively dry —{" "}
          <strong>10–15 per cent moisture by mass</strong>. General metabolic activity of the embryo
          slows down.
        </li>
        <li>
          The embryo may enter a state of inactivity called <strong>dormancy</strong>; if favourable
          conditions are available (adequate moisture, oxygen and suitable temperature), the seeds
          germinate.
        </li>
      </ul>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Ovary to fruit</h4>
      <p>
        As ovules mature into seeds, the ovary develops into a fruit — the transformation of ovules
        into seeds and ovary into fruit proceeds simultaneously. The wall of the ovary develops into
        the wall of the fruit, called the <strong>pericarp</strong>. Fruits may be fleshy (guava,
        orange, mango) or dry (groundnut, mustard), and many have evolved mechanisms for dispersal
        of seeds. Recall the classification of fruits and their dispersal mechanisms studied in an
        earlier class.
      </p>
      <TableCard
        title="True, false and parthenocarpic fruits"
        caption="In most plants, by the time the fruit develops from the ovary, other floral parts degenerate and fall off. Only in a few species does the thalamus also contribute to fruit formation."
        headers={["Type", "How it forms", "Examples"]}
        rows={[
          {
            cells: [
              "True fruit",
              "Develops only from the ovary, as a result of fertilisation",
              "Most fruits — mango, guava, groundnut, mustard",
            ],
          },
          {
            cells: [
              "False fruit",
              "The thalamus also contributes to fruit formation along with the ovary",
              "Apple, strawberry, cashew",
            ],
          },
          {
            cells: [
              "Parthenocarpic fruit",
              "Develops without fertilisation; seedless. Parthenocarpy can be induced through the application of growth hormones",
              "Banana",
            ],
          },
        ]}
      />
      <Expandable title="In-text question — is there a relationship between the number of ovules and the number of seeds?">
        <p>
          Yes. Each fertilised ovule develops into one seed, so the number of seeds in a fruit is
          decided by how many ovules in the ovary were fertilised. An ovary with a single ovule
          (wheat, paddy, mango) therefore yields a fruit with one seed, while an ovary with many
          ovules (papaya, water melon, orchids) yields a fruit with many seeds. Ovules that are not
          fertilised do not form seeds.
        </p>
      </Expandable>
      <h4 className="text-[15px] font-semibold mt-6 mb-2">Advantages of seeds</h4>
      <Stepper
        steps={[
          {
            label: "Seed formation is more dependable",
            description:
              "Reproductive processes such as pollination and fertilisation are independent of water.",
          },
          {
            label: "Better dispersal",
            description:
              "Seeds have better adaptive strategies for dispersal to new habitats and help the species colonise other areas.",
          },
          {
            label: "Nourishment of the seedling",
            description:
              "Sufficient food reserves nourish young seedlings until they are capable of photosynthesis on their own.",
          },
          {
            label: "Protection",
            description: "The hard seed coat provides protection to the young embryo.",
          },
          {
            label: "Variation",
            description:
              "Being products of sexual reproduction, seeds generate new genetic combinations leading to variations.",
          },
        ]}
      />
      <p>
        <strong>Seed is the basis of our agriculture.</strong> Dehydration and dormancy of mature
        seeds are crucial for storage of seeds, which can be used as food throughout the year and
        also to raise a crop in the next season.
      </p>
      <h4 className="text-[15px] font-semibold mt-6 mb-2">How long do seeds remain alive?</h4>
      <p>
        This period varies greatly. In a few species the seeds lose viability within a few months;
        seeds of a large number of species live for several years, and some can remain alive for
        hundreds of years. There are several records of very old yet viable seeds.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 [&>div]:my-0">
        <MetricCard
          label="Lupinus arcticus (lupine)"
          value="10,000"
          unit="years of dormancy"
          description="Excavated from Arctic Tundra; the seed germinated and flowered after an estimated record of 10,000 years of dormancy — the oldest known."
        />
        <MetricCard
          label="Phoenix dactylifera (date palm)"
          value="2,000"
          unit="years"
          description="A recent record of a viable seed discovered during the archeological excavation at King Herod's palace near the Dead Sea."
        />
      </div>
      <Callout type="note" title="Count the reproductive capacity">
        How many eggs are present in an embryo sac? How many embryo sacs are present in an ovule?
        How many ovules are present in an ovary? How many ovaries are present in a typical flower?
        How many flowers are present on a tree? And so on — this chain of questions measures the
        enormous reproductive capacity of flowering plants.
      </Callout>
      <Callout type="didyouknow" title="Fruits with thousands of seeds">
        Orchid fruits are one such category, and each fruit contains thousands of tiny seeds. Similar
        is the case in fruits of some parasitic species such as <em>Orobanche</em> and{" "}
        <em>Striga</em>. Consider the tiny seed of <em>Ficus</em> — and the size of the tree that
        develops from it, and the billions of seeds each <em>Ficus</em> tree produces.
      </Callout>

      <h2 id="h-1-5">1.5 Apomixis and Polyembryony</h2>
      <p>
        Although seeds, in general, are the products of fertilisation, a few flowering plants such as
        some species of Asteraceae and grasses have evolved a special mechanism to produce seeds
        without fertilisation.
      </p>
      <Callout type="important" title="Definition — apomixis">
        A few flowering plants such as some species of Asteraceae and grasses have evolved a special
        mechanism to produce seeds without fertilisation, called{" "}
        <Highlight color="yellow">apomixis</Highlight>. Thus, apomixis is a form of asexual
        reproduction that mimics sexual reproduction.
      </Callout>
      <p>
        There are several ways of development of apomictic seeds.
      </p>
      <Comparison
        columns={[
          {
            title: "Diploid egg cell route",
            children: (
              <ul>
                <li>The diploid egg cell is formed <strong>without reduction division</strong>.</li>
                <li>It develops into the embryo <strong>without fertilisation</strong>.</li>
              </ul>
            ),
          },
          {
            title: "Nucellar cell route — more common",
            children: (
              <ul>
                <li>As in many <em>Citrus</em> and <em>Mango</em> varieties, some of the nucellar cells surrounding the embryo sac start dividing.</li>
                <li>They protrude into the embryo sac and develop into embryos.</li>
                <li>In such species each ovule contains <strong>many embryos</strong>.</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="note" title="In-text question — fruit without fertilisation">
        What is fruit production without fertilisation called? <strong>Parthenocarpy</strong>, and
        such fruits (banana) are seedless. Apomixis is different: there fertilisation is skipped too,
        but a <em>seed</em> is still formed.
      </Callout>
      <FactCard
        title="Polyembryony"
        definition="Occurrence of more than one embryo in a seed is referred to as polyembryony."
      />
      <Expandable title="Think: what is the genetic nature of apomictic embryos?">
        <p>
          Apomictic embryos arise without meiosis and without fertilisation, so they carry the same
          genetic constitution as the parent plant. They can therefore be called{" "}
          <strong>clones</strong> — and that is exactly why apomixis is so useful in the hybrid seed
          industry. Take out some seeds of orange and squeeze them: you will see many embryos of
          different sizes and shapes from each seed.
        </p>
      </Expandable>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Why apomixis matters to the hybrid seed industry</h4>
      <ProcessCard
        title="The problem with hybrids — and how apomixis solves it"
        steps={[
          {
            label: "Hybrids are widely cultivated",
            description:
              "Hybrid varieties of several food and vegetable crops are being extensively cultivated, and cultivation of hybrids has tremendously increased productivity.",
          },
          {
            label: "Hybrid seed must be produced every year",
            description:
              "If the seeds collected from hybrids are sown, the plants in the progeny will segregate and do not maintain hybrid characters.",
          },
          {
            label: "Hybrid seed is costly",
            description:
              "Production of hybrid seeds is costly, and hence the cost of hybrid seeds becomes too expensive for the farmers.",
          },
          {
            label: "Apomictic hybrids do not segregate",
            description:
              "If these hybrids are made into apomicts, there is no segregation of characters in the hybrid progeny. Farmers can keep on using the hybrid seeds to raise a new crop year after year without buying hybrid seed every year.",
          },
          {
            label: "Active research",
            description:
              "Because of the importance of apomixis in the hybrid seed industry, research is going on in many laboratories around the world to understand the genetics of apomixis and to transfer apomictic genes into hybrid varieties.",
          },
        ]}
      />
      <KeyPoint title="The one-line contrast">
        <Highlight color="green">Apomixis</Highlight> = seed without fertilisation (asexual
        reproduction that mimics sexual reproduction).{" "}
        <Highlight color="green">Polyembryony</Highlight> = more than one embryo in a seed — the
        usual outcome of the nucellar route in <em>Citrus</em> and mango.
      </KeyPoint>

      <h2 id="h-1-exercises">Exercises</h2>
      <Expandable title="NCERT Exercises — all 18 questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "Name the parts of an angiosperm flower in which development of male and female gametophyte take place.",
            "Differentiate between microsporogenesis and megasporogenesis. Which type of cell division occurs during these events? Name the structures formed at the end of these two events.",
            "Arrange the following terms in the correct developmental sequence: Pollen grain, sporogenous tissue, microspore tetrad, pollen mother cell, male gametes.",
            "With a neat, labelled diagram, describe the parts of a typical angiosperm ovule.",
            "What is meant by monosporic development of female gametophyte?",
            "With a neat diagram explain the 7-celled, 8-nucleate nature of the female gametophyte.",
            "What are chasmogamous flowers? Can cross-pollination occur in cleistogamous flowers? Give reasons for your answer.",
            "Mention two strategies evolved to prevent self-pollination in flowers.",
            "What is self-incompatibility? Why does self-pollination not lead to seed formation in self-incompatible species?",
            "What is bagging technique? How is it useful in a plant breeding programme?",
            "What is triple fusion? Where and how does it take place? Name the nuclei involved in triple fusion.",
            "Why do you think the zygote is dormant for sometime in a fertilised ovule?",
            <>
              Differentiate between: (a) hypocotyl and epicotyl; (b) coleoptile and coleorrhiza; (c)
              integument and testa; (d) perisperm and pericarp.
            </>,
            "Why is apple called a false fruit? Which part(s) of the flower forms the fruit?",
            "What is meant by emasculation? When and why does a plant breeder employ this technique?",
            "If one can induce parthenocarpy through the application of growth substances, which fruits would you select to induce parthenocarpy and why?",
            "Explain the role of tapetum in the formation of pollen-grain wall.",
            "What is apomixis and what is its importance?",
          ]}
          answers={[
            <>
              Male gametophyte (pollen grains) develops in the <strong>anther</strong> — specifically
              inside the microsporangia (pollen sacs) of the anther. Female gametophyte (embryo sac)
              develops in the <strong>ovule</strong> (megasporangium), which is borne inside the ovary
              of the pistil.
            </>,
            <>
              <strong>Microsporogenesis:</strong> formation of microspores from a pollen mother cell
              through meiosis; occurs in the microsporangium of the anther. Structure formed at the
              end: <strong>microspore tetrad</strong>, whose microspores mature into pollen grains.
              <br />
              <strong>Megasporogenesis:</strong> formation of megaspores from the megaspore mother
              cell; occurs in the nucellus of the ovule. Structure formed at the end:{" "}
              <strong>four megaspores</strong>, of which three degenerate and one becomes the embryo
              sac. Both events involve <strong>meiosis</strong>.
            </>,
            <>
              Sporogenous tissue → pollen mother cell → microspore tetrad → pollen grain → male
              gametes.
            </>,
            <>
              A typical angiosperm ovule (anatropous) has: <strong>funicle</strong> — the stalk
              attaching it to the placenta; <strong>hilum</strong> — the junction between ovule and
              funicle; <strong>integuments</strong> — one or two protective envelopes encircling the
              nucellus except at the tip; <strong>micropyle</strong> — the small opening at the tip;{" "}
              <strong>chalaza</strong> — the basal part opposite the micropylar end;{" "}
              <strong>nucellus</strong> — the mass of cells inside the integuments, with abundant
              reserve food; and the <strong>embryo sac</strong> (female gametophyte) located in the
              nucellus.
            </>,
            <>
              Monosporic development means the embryo sac is formed from a{" "}
              <strong>single functional megaspore</strong>. The MMC undergoes meiosis and produces
              four megaspores; in a majority of flowering plants three degenerate and only one
              remains functional and develops into the female gametophyte.
            </>,
            <>
              The functional megaspore nucleus divides mitotically to give 2 nuclei which move to
              opposite poles (2-nucleate), then two more free-nuclear mitotic divisions give the
              4-nucleate and 8-nucleate stages. Cell walls are then laid down, enclosing six of the
              eight nuclei in cells: the <strong>egg apparatus</strong> at the micropylar end (two
              synergids + one egg cell) and <strong>three antipodals</strong> at the chalazal end.
              The remaining <strong>two polar nuclei</strong> lie free in the large central cell.
              Hence 3 + 3 + 1 = <strong>7 cells</strong> but 3 + 3 + 2 ={" "}
              <strong>8 nuclei</strong>.
            </>,
            <>
              Chasmogamous flowers are flowers similar to those of other species, with{" "}
              <strong>exposed anthers and stigma</strong>. No — cross-pollination cannot occur in
              cleistogamous flowers, because they do not open at all and the anthers and stigma lie
              close to each other; the anthers dehisce inside the flower bud and pollen comes in
              contact with the stigma of the same flower. There is no chance of cross-pollen landing
              on the stigma, so cleistogamous flowers are invariably autogamous.
            </>,
            <>
              (i) Pollen release and stigma receptivity are not synchronised — pollen is released
              before the stigma becomes receptive, or the stigma becomes receptive much before
              pollen release. (ii) The anther and stigma are placed at different positions so that
              pollen cannot come in contact with the stigma of the same flower. (Self-incompatibility
              and unisexual flowers are further devices.)
            </>,
            <>
              Self-incompatibility is a <strong>genetic mechanism</strong> that prevents self-pollen
              (from the same flower or other flowers of the same plant) from fertilising the ovules
              by inhibiting pollen germination or pollen tube growth in the pistil. Since the pollen
              tube cannot reach the ovule, fertilisation fails and no seed is formed.
            </>,
            <>
              Bagging is covering the emasculated flowers with a bag of suitable size, generally made
              up of butter paper, to prevent contamination of the stigma with unwanted pollen. In a
              breeding programme it ensures that only the desired pollen is used for pollination, so
              that the desired hybrid is obtained.
            </>,
            <>
              Triple fusion is the fusion of <strong>one male gamete with the two polar nuclei</strong>{" "}
              of the central cell, producing a <strong>triploid primary endosperm nucleus (PEN)</strong>.
              It takes place in the <strong>central cell of the embryo sac</strong>, after the pollen
              tube has entered a synergid and discharged the two male gametes. The nuclei involved are
              one male gamete (n) and the two polar nuclei (n each).
            </>,
            <>
              Most zygotes divide only after a certain amount of endosperm is formed. The delay is an
              adaptation to provide <strong>assured nutrition</strong> to the developing embryo from
              the endosperm tissue.
            </>,
            <>
              (a) <strong>Hypocotyl</strong> is the cylindrical portion of the embryonal axis below the
              level of cotyledons, ending in the radicle/root tip; <strong>epicotyl</strong> is the
              portion above the cotyledons, ending in the plumule/stem tip.
              <br />
              (b) <strong>Coleoptile</strong> is the hollow foliar sheath enclosing the shoot apex and
              leaf primordia in a grass embryo; <strong>coleorrhiza</strong> is the undifferentiated
              sheath enclosing the radicle and root cap.
              <br />
              (c) <strong>Integument</strong> is the protective envelope of the ovule, which hardens
              into the seed coat; <strong>testa</strong> is the seed coat so formed.
              <br />
              (d) <strong>Perisperm</strong> is the residual, persistent nucellus in seeds such as
              black pepper and beet; <strong>pericarp</strong> is the wall of the fruit, developed
              from the ovary wall.
            </>,
            <>
              Apple is called a false fruit because the <strong>thalamus</strong> also contributes to
              its formation along with the ovary. The ovary forms the fruit and the thalamus forms the
              fleshy edible part.
            </>,
            <>
              Emasculation is the removal of anthers from the flower bud before the anther dehisces,
              using a pair of forceps. A plant breeder employs it during <strong>artificial
              hybridisation</strong> when the female parent bears bisexual flowers, to make sure that
              only the desired pollen is used and the stigma is not contaminated by unwanted pollen.
            </>,
            <>
              Fruits in which seeds are not desired and seedlessness adds value — banana (naturally
              parthenocarpic), and fruits such as watermelon, grapes and citrus. Parthenocarpy gives{" "}
              <strong>seedless fruits</strong> without fertilisation, which are preferred for eating
              fresh and for processing.
            </>,
            <>
              The tapetum is the innermost wall layer of the microsporangium. Its cells possess dense
              cytoplasm and generally more than one nucleus. It <strong>nourishes the developing
              pollen grains</strong> and supplies the material from which the pollen-grain wall,
              especially the sporopollenin-containing exine, is built.
            </>,
            <>
              Apomixis is a special mechanism found in some flowering plants (some species of
              Asteraceae and grasses) to produce seeds without fertilisation — a form of asexual
              reproduction that mimics sexual reproduction. Its importance lies in the hybrid seed
              industry: apomictic hybrids do not segregate, so farmers can keep using the hybrid seed
              year after year without buying fresh hybrid seed every year, and the cost of hybrid seed
              production is saved.
            </>,
          ]}
        />
      </Expandable>
    </>
  );
}
