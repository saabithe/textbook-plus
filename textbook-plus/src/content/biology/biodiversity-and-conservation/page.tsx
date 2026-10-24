import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { ProcessCard } from "@/components/content/process/ProcessCard";

export default function BiodiversityAndConservationChapter() {
  return (
    <>
      <FactCard
        title="Biodiversity"
        definition="Biodiversity is the combined diversity at all the levels of biological organisation, ranging from macromolecules within cells to biomes."
        icon="🌍"
      />
      <TreeDiagram
        title="The three levels of biodiversity"
        defaultExpanded
        nodes={[
          {
            label: "Biodiversity",
            children: [
              {
                label: "Genetic diversity",
                detail: "Diversity at the genetic level within a species over its distributional range.",
              },
              {
                label: "Species diversity",
                detail: "Diversity at the species level — more species in a given area means greater diversity.",
              },
              {
                label: "Ecological diversity",
                detail: "Diversity at the ecosystem level — variety of habitats, communities and ecological processes.",
              },
            ],
          },
        ]}
      />

      <h2 id="h-13-1">13.1 Biodiversity</h2>
      <p>
        In our biosphere immense diversity (or heterogeneity) exists not only at the species level but at all levels of
        biological organisation ranging from macromolecules within cells to biomes. Biodiversity is the term popularised by
        the sociobiologist Edward Wilson to describe the combined diversity at all the levels of biological organisation.
      </p>
      <p>
        The three most important levels of biodiversity are genetic, species and ecological diversity:
      </p>
      <TableCard
        title="The three levels of biodiversity"
        headers={["Level", "What it means", "Concrete example"]}
        rows={[
          {
            cells: [
              "Genetic diversity",
              "Diversity at the genetic level within a species across its range",
              "Rauwolfia vomitoria varies in reserpine potency across Himalayan ranges; India has over 50,000 genetically different strains of rice and 1,000 varieties of mango",
            ],
          },
          {
            cells: [
              "Species diversity",
              "Diversity at the species level in a region or community",
              "The Western Ghats have greater amphibian species diversity than the Eastern Ghats",
            ],
          },
          {
            cells: [
              "Ecological diversity",
              "Diversity at the ecosystem level — habitats, communities and processes",
              "India (deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, alpine meadows) has greater ecosystem diversity than a Scandinavian country like Norway",
            ],
          },
        ]}
      />
      <Callout type="important" title="Time and scale caveat">
        It has taken millions of years of evolution to accumulate this rich diversity in nature, but we could lose
        all that wealth in less than two centuries if the present rates of species losses continue. Biodiversity and
        its conservation are now vital environmental issues of international concern.
      </Callout>

      <h3 id="h-13-1-1">13.1.1 How Many Species Are There on Earth and How Many in India?</h3>
      <p>
        Published records tell us how many species have been discovered and named, but it is not easy to answer how many
        species there are on earth. According to the IUCN (2004), the total number of plant and animal species described
        so far is slightly more than 1.5 million. Estimates of the total range widely, from 20 to 50 million at the
        extreme, with a more conservative and scientifically sound estimate by Robert May placing global species diversity
        at about 7 million.
      </p>
      <KeyPoint title="Where the undiscovered species hide">
        Species inventories are more complete in temperate than in tropical countries, and the overwhelming majority
        of species still waiting to be discovered live in the tropics. So biologists extrapolate from the
        temperate-tropical richness ratio of an exhaustively studied group (insects) to the whole living world.
      </KeyPoint>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Described so far" value="1.5 million" description="Plant and animal species recorded world-wide (IUCN 2004)." />
        <MetricCard label="Best estimate" value="7 million" description="Robert May's conservative estimate of global species diversity." />
        <MetricCard label="India" value="67,000+" unit="species" description="About 45,000 plants plus twice as many animals recorded." />
      </div>
      <p>
        More than 70 per cent of all species recorded are animals, while plants (algae, fungi, bryophytes, gymnosperms
        and angiosperms) comprise no more than 22 per cent of the total. Among animals, insects are the most
        species-rich taxonomic group — more than 70 per cent of the total. The fungi alone have more species than all
        the fishes, amphibians, reptiles and mammals combined. Prokaryotes are not counted in any of these figures; their
        diversity, by molecular criteria, might run into millions, and many are not culturable under laboratory
        conditions.
      </p>
      <Callout type="note" title="India is one of 12 mega-diversity countries">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>India has only 2.4 per cent of the world's land area, but holds 8.1 per cent of global species diversity.</li>
          <li>Nearly 45,000 plant species and twice as many animal species have been recorded from India.</li>
          <li>If only 22 per cent of species have been recorded so far, then more than 1,00,000 plant and 3,00,000 animal species may still be waiting to be discovered in India.</li>
        </ul>
      </Callout>
      <MistakeCard
        mistake="India's small land area means low biodiversity."
        correction="India holds 8.1 per cent of global species diversity on only 2.4 per cent of land — that is precisely why it is one of the 12 mega-diversity countries."
        example="Land area and species richness are not proportional; latitude and habitat variety matter far more."
      />

      <h3 id="h-13-1-2">13.1.2 Patterns of Biodiversity</h3>
      <h4 className="text-base font-semibold">Latitudinal gradients</h4>
      <p>
        Species diversity is uneven across the globe: in general it decreases as we move away from the equator towards
        the poles. Tropics (23.5° N to 23.5° S) harbour more species than temperate or polar areas. Colombia near the
        equator has nearly 1,400 bird species; New York at 41° N has 105; Greenland at 71° N only 56. India, with much of
        its land in the tropical latitudes, hosts more than 1,200 bird species. A tropical forest such as in Ecuador can
        have up to 10 times as many vascular-plant species as a temperate forest of equal area, and the Amazonian rain
        forest — the most biodiverse place on earth — holds over 40,000 plant species, 3,000 fishes, 1,300 birds,
        427 mammals, 427 amphibians, 378 reptiles and 1,25,000+ invertebrates.
      </p>
      <TableCard
        title="Latitudinal gradient in bird species"
        headers={["Place", "Latitude", "Bird species"]}
        rows={[
          { cells: ["Colombia", "near the equator", "~1,400"] },
          { cells: ["India", "largely tropical", "1,200+"] },
          { cells: ["New York", "41° N", "105"] },
          { cells: ["Greenland", "71° N", "56"] },
        ]}
      />
      <KeyPoint title="Why the tropics are so diverse — three hypotheses">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>More evolutionary time:</strong> unlike temperate regions that suffered frequent past glaciations,
            the tropics have stayed relatively undisturbed for millions of years, allowing species to diversify.
          </li>
          <li>
            <strong>Less seasonal environments:</strong> constant, predictable conditions promote niche specialisation.
          </li>
          <li>
            <strong>More solar energy:</strong> higher productivity in the tropics indirectly supports greater diversity.
          </li>
        </ul>
      </KeyPoint>

      <h4 className="text-base font-semibold">Species-area relationships</h4>
      <p>
        Alexander von Humboldt observed that species richness increases with explored area, but only up to a limit; for
        a wide variety of taxa the relationship is a rectangular hyperbola. On a logarithmic scale this becomes a straight
        line:
      </p>
      <FormulaBlock latex={String.raw`\log S = \log C + Z \log A`} />
      <p>where <em>S</em> is species richness, <em>A</em> is area, <em>Z</em> is the slope of the regression line and <em>C</em> is the Y-intercept.</p>
      <TableCard
        title="Values of Z in the species-area relationship"
        headers={["Scale / region", "Z range", "Meaning"]}
        rows={[
          { cells: ["Small regions (most taxa)", "0.1 – 0.2", "Species richness changes little with area"] },
          { cells: ["Entire continents", "0.6 – 1.2", "Species richness rises sharply with area (e.g. frugivorous birds and mammals of tropical forests: 1.15)"] },
        ]}
      />

      <h3 id="h-13-1-3">13.1.3 The Importance of Species Diversity to the Ecosystem</h3>
      <p>
        Does the number of species in a community really matter to how the ecosystem functions? Ecologists have
        suspected for decades that communities richer in species tend to be more stable. A stable community shows
        little year-to-year variation in productivity, resists or recovers from disturbances, and resists invasion
        by alien species. David Tilman's long-term outdoor-plot experiments suggest that plots with more species show
        less year-to-year variation in total biomass and are more productive.
      </p>
      <Callout type="note" title="The rivet-popper analogy (Paul Ehrlich)">
        An ecosystem is an aeroplane and each species is a rivet. Popping out a few rivets at first may not affect the
        flight, but as more are removed the plane weakens dangerously; rivets on the wings (key species that drive
        major ecosystem functions) are far more critical than rivets on the seats or windows.
      </Callout>
      <MistakeCard
        mistake="We can afford to lose a few species without any harm."
        correction="Species loss is not linear — once key or keystone species are lost, ecosystem functions can collapse rapidly."
        example="The analogy distinguishes wing rivets from seat rivets; our problem is that we rarely know which species is which."
      />

      <h3 id="h-13-1-4">13.1.4 Loss of Biodiversity</h3>
      <p>
        New species are probably not being added as fast as old ones are being lost. The IUCN Red List (2004)
        documents the extinction of 784 species in the last 500 years. Examples of recent extinctions include the
        dodo (Mauritius), quagga (Africa), thylacine (Australia), Steller's Sea Cow (Russia) and three subspecies
        of tiger (Bali, Javan, Caspian). The last twenty years alone saw 27 species disappear. Loss is not random
        across taxa — amphibians appear especially vulnerable. More than 15,500 species world-wide, including over
        650 from India, face the threat of extinction. At present 12 per cent of all bird species, 23 per cent of
        all mammal species, 32 per cent of all amphibian species and 31 per cent of all gymnosperm species are
        threatened.
      </p>
      <Callout type="warning" title="The Sixth Extinction">
        Five mass-extinction episodes occurred during the more than 3 billion years of life on earth. The current
        sixth episode differs only in rate: present extinction rates are 100 to 1,000 times faster than pre-human
        times. If current trends continue, nearly half of all species may be wiped out within 100 years.
      </Callout>
      <KeyPoint title="What losing biodiversity does to a region">
        It generally leads to (a) decline in plant production, (b) lowered resistance to environmental perturbations
        such as drought and (c) increased variability in ecosystem processes such as plant productivity, water
        use and pest and disease cycles.
      </KeyPoint>

      <h4 className="text-base font-semibold">The four major causes — the &quot;Evil Quartet&quot;</h4>
      <TableCard
        title="Causes of accelerated biodiversity loss"
        headers={["Cause", "Why it matters", "Key illustration"]}
        rows={[
          {
            cells: [
              "Habitat loss and fragmentation",
              "The single most important cause; total destruction (e.g. rain forests cut for soya or cattle) plus fragmentation that hurts territory- and migration-needing species",
              "Tropical rain forests fell from over 14 per cent to no more than 6 per cent of land; by the time you finish reading, another 1,000 hectares may have been lost; Amazon is the 'lungs of the planet'",
            ],
          },
          {
            cells: [
              "Over-exploitation",
              "When need becomes greed, historically wiping out species (Steller's sea cow, passenger pigeon) and now over-harvesting marine fishes",
              "Many marine fish populations are over-harvested world-wide",
            ],
          },
          {
            cells: [
              "Alien species invasion",
              "Introduced species sometimes turn invasive and eliminate indigenous species",
              "Nile perch in Lake Victoria eliminated 200+ cichlid species; Parthenium, Lantana, Eichhornia and the African catfish threaten our natives",
            ],
          },
          {
            cells: [
              "Co-extinctions",
              "When a species goes extinct, species obligated to it (parasites of a host fish, or a co-evolved pollinator) follow",
              "Host-pollinator mutualisms break together",
            ],
          },
        ]}
      />

      <h2 id="h-13-2">13.2 Biodiversity Conservation</h2>

      <h3 id="h-13-2-1">13.2.1 Why Should We Conserve Biodiversity?</h3>
      <p>
        Conservation arguments fall into three categories:
      </p>
      <Comparison
        columns={[
          {
            title: "Narrowly utilitarian",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Countless direct economic benefits from nature — food (cereals, pulses, fruits), firewood, fibre, construction material.</li>
                <li>Industrial products — tannins, lubricants, dyes, resins, perfumes.</li>
                <li>More than 25 per cent of drugs sold world-wide are derived from plants; 25,000 plant species serve traditional medicine.</li>
                <li>Bioprospecting promises nations with rich biodiversity enormous benefits.</li>
              </ul>
            ),
          },
          {
            title: "Broadly utilitarian",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Ecosystem services — the Amazon forest alone produces an estimated 20 per cent of atmospheric oxygen through photosynthesis.</li>
                <li>Pollination by bees, bumblebees, birds and bats sustains our fruits and seeds.</li>
                <li>Intangible benefits — aesthetics, recreation, cultural and spiritual value.</li>
                <li>Climate moderation, pest control and flood control.</li>
              </ul>
            ),
          },
        ]}
      />
      <Callout type="important" title="Ethical argument">
        Every species has an intrinsic value, even if it has no economic value to us. We share this planet with
        millions of plant, animal and microbe species, and owe it to future generations to pass on our biological
        legacy in good order.
      </Callout>

      <h3 id="h-13-2-2">13.2.2 How Do We Conserve Biodiversity?</h3>
      <Comparison
        columns={[
          {
            title: "In situ (on site) conservation",
            children: (
              <p>
                Conserve the whole ecosystem to protect its biodiversity at all levels — save the entire forest to save
                the tiger. Preferred whenever the species still lives in its natural habitat.
              </p>
            ),
          },
          {
            title: "Ex situ (off site) conservation",
            children: (
              <p>
                Remove threatened animals and plants from their natural habitat into settings where they can be
                protected and given special care — zoological parks, botanical gardens, wildlife safari parks,
                cryopreservation of gametes, in-vitro fertilisation, tissue culture, seed banks.
              </p>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="In situ and ex situ are interchangeable."
        correction="In situ is the default and protects whole ecosystems; ex situ is reserved for species already endangered or threatened and needing urgent rescue."
      />

      <h4 className="text-base font-semibold">In situ conservation in practice</h4>
      <p>
        Nations cannot conserve everything, so conservationists identified "biodiversity hotspots" — regions with very
        high species richness and high endemism (species confined to that region and found nowhere else). Initially 25
        hotspots were identified; 9 more were added, bringing the total to 34. Although hotspots cover less than 2
        per cent of the earth's land area, they harbour an enormous share of species, and strict protection could cut
        ongoing mass extinctions by almost 30 per cent. Three of these hotspots (Western Ghats and Sri Lanka,
        Indo-Burma, Himalaya) cover India's exceptionally rich biodiversity regions.
      </p>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Biodiversity hotspots" value="34" description="World-wide (originally 25, later 34)." />
        <MetricCard label="Hotspot land area" value="<2%" description="Of earth's land, harbouring an enormous share of species." />
        <MetricCard label="Extinction reduction" value="~30%" description="If strict protection of hotspots were achieved." />
      </div>
      <p>
        In India, ecologically unique and biodiversity-rich regions are legally protected as biosphere reserves,
        national parks and wildlife sanctuaries — 14 biosphere reserves, 90 national parks and 448 wildlife
        sanctuaries. Indian cultural and religious traditions also protected nature through sacred groves: tracts of
        forest set aside and given total protection, found in the Khasi and Jaintia Hills (Meghalaya), Aravalli Hills
        (Rajasthan), the Western Ghats of Karnataka and Maharashtra, and the Sarguja, Chanda and Bastar areas of
        Madhya Pradesh. In Meghalaya these sacred groves are the last refuges for many rare and threatened plants.
      </p>
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Biosphere reserves" value="14" description="In India." />
        <MetricCard label="National parks" value="90" description="In India." />
        <MetricCard label="Wildlife sanctuaries" value="448" description="In India." />
      </div>

      <h4 className="text-base font-semibold">Ex situ conservation in practice</h4>
      <p>
        Threatened species are removed from their natural habitat and protected with special care. Many animals
        survive only in captivity today. Modern ex situ methods go well beyond enclosures: gametes preserved by
        cryopreservation, eggs fertilised in vitro, plants propagated by tissue culture, and genetic strains of
        commercially important plants maintained in seed banks.
      </p>
      <Callout type="note" title="Conservation knows no borders">
        Biodiversity does not respect political boundaries, so conservation is a collective responsibility of all
        nations. The Convention on Biological Diversity (the Earth Summit, Rio de Janeiro, 1992) called on all
        nations to conserve biodiversity and use it sustainably; the World Summit on Sustainable Development
        (Johannesburg, 2002) pledged a significant reduction in the rate of biodiversity loss by 2010.
      </Callout>

      <h2 id="h-13-exercises">Exercises</h2>
      <Expandable title="End-of-chapter exercises (10 questions)">
        <ExerciseQa
          questions={[
            "Name the three important components of biodiversity.",
            "How do ecologists estimate the total number of species present in the world?",
            "Give three hypotheses for explaining why tropics show the greatest levels of species richness.",
            "What is the significance of the slope of regression in a species–area relationship?",
            "What are the major causes of species losses in a geographical region?",
            "How is biodiversity important for ecosystem functioning?",
            "What are sacred groves? What is their role in conservation?",
            "Among the ecosystem services are control of floods and soil erosion. How is this achieved by the biotic components of the ecosystem?",
            "The species diversity of plants (22 per cent) is much less than that of animals (72 per cent). What could be the explanations for how animals achieved greater diversification?",
            "Can you think of a situation where we deliberately want to make a species extinct? How would you justify it?",
          ]}
          answers={[
            "Genetic diversity, species diversity and ecological diversity.",
            "By using published records of IUCN-described species (about 1.5 million so far) and extrapolating from temperate–tropical richness ratios of an exhaustively studied group like insects; Robert May's estimate puts global diversity at about 7 million (extreme estimates run 20–50 million).",
            "(a) Speciation is a function of time — the tropics stayed undisturbed for millions of years while temperate regions were repeatedly glaciated. (b) Tropical environments are less seasonal, more constant and predictable, promoting niche specialisation. (c) More solar energy in the tropics raises productivity, which indirectly promotes diversity.",
            "For small regions the slope Z lies between 0.1 and 0.2 (species richness barely changes with area); across whole continents Z is much steeper (0.6–1.2), so richness rises sharply with area (e.g. 1.15 for frugivorous birds and mammals in tropical forests).",
            "The four major causes of the 'Evil Quartet': habitat loss and fragmentation, over-exploitation, alien species invasions and co-extinctions.",
            "Communities richer in species show less year-to-year variation in total biomass, higher productivity and better resistance to disturbance and alien invasion (Tilman); more broadly, biodiversity supports ecosystem services (oxygen, pollination, climate and flood control) and the loss of key species can collapse whole ecosystems (rivet-popper analogy).",
            "Sacred groves are tracts of forest set aside and venerated in Indian cultural and religious traditions, given total protection; they are the last refuges for many rare and threatened plants (e.g. in Meghalaya).",
            "Vegetation and roots bind the soil, slow surface runoff, increase water infiltration and recharge, and reduce soil erosion, thereby controlling floods and erosion.",
            "Possible explanations: animals are heterotrophic and can exploit many food sources and niches; they have greater mobility and dispersal ability; nervous systems and complex behaviour let them adapt to varied habitats; and adaptive radiation into aquatic, terrestrial and aerial environments multiplied their forms.",
            "Ethically, deliberate extinction is never desirable; the only conceivable exceptions are unintentional removal of objectively harmful organisms such as disease vectors/pathogens in tightly controlled public-health programmes — and even then with great caution.",
          ]}
        />
      </Expandable>
    </>
  );
}