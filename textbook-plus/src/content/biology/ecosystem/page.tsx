import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { Comparison } from "@/components/content/Comparison";

export default function EcosystemChapter() {
  return (
    <>
      <FactCard
        title="Ecosystem"
        definition="An ecosystem is a functional unit of nature in which living organisms interact among themselves and also with the surrounding physical environment."
        icon="🌍"
      />
      <p>
        An ecosystem varies greatly in size, from a small pond to a large forest or a sea. Many
        ecologists regard the entire <strong>biosphere</strong> as a global ecosystem — a composite
        of all the local ecosystems on Earth. Because that system is too large and complex to study at
        once, it is convenient to divide it into two basic categories: <strong>terrestrial</strong> and
        <strong>aquatic</strong>. Forest, grassland and desert are terrestrial; pond, lake, wetland,
        river and estuary are aquatic. Crop fields and an aquarium are man-made ecosystems.
      </p>
      <p>
        To understand how an ecosystem works we look at its structure first, then at the
        <strong>input (productivity)</strong>, the transfer of energy (food chain / food web, nutrient
        cycling) and the <strong>output (degradation and energy loss)</strong>. Along the way we meet
        the cycles, chains and webs created by these energy flows.
      </p>

      <h2 id="h-12-1">12.1 Ecosystem – Structure and Function</h2>
      <p>
        In earlier classes you looked at the abiotic and biotic components of the environment. Here
        we take a more integrated view and follow how energy moves through those components.
      </p>
      <p>
        Interaction of biotic and abiotic components produces a physical structure characteristic
        of each ecosystem. Identification and enumeration of the plant and animal species present gives
        the <strong>species composition</strong>. The vertical distribution of different species at
        different levels is called <strong>stratification</strong> — trees in the top layer of a
        forest, shrubs below them, herbs and grasses at the bottom.
      </p>
      <KeyPoint title="The four functions of an ecosystem">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Productivity — capture and storage of energy / biomass.</li>
          <li>Decomposition — breakdown of dead organic matter into inorganic nutrients.</li>
          <li>Energy flow — movement of energy from producers up the trophic levels.</li>
          <li>Nutrient cycling — repeated reuse of nutrient elements within the system.</li>
        </ul>
      </KeyPoint>
      <FactCard
        title="Pond as a model aquatic ecosystem"
        definition="A pond is a shallow, fairly self-sustaining body of water in which abiotic (water with dissolved substances, bottom soil, solar input, temperature and day-length cycle) and biotic (phytoplankton and other producers, zooplankton and other consumers, fungi and bacteria as decomposers) components are all well exhibited. It converts inorganic matter to organic matter using solar energy, transfers it through consumers, and finally decomposes dead matter to release nutrients for reuse."
        icon="💧"
      />

      <h2 id="h-12-2">12.2 Productivity</h2>
      <p>
        A constant input of solar energy is the basic requirement for any ecosystem to function and
        sustain. <strong>Primary production</strong> is the amount of biomass or organic matter
        produced per unit area over a time period by plants during photosynthesis, expressed as weight
        (g m⁻²) or energy (kcal m⁻²). The <strong>rate</strong> of biomass production is called
        <strong> productivity</strong>, expressed in g m⁻² yr⁻¹ or kcal m⁻² yr⁻¹ so that different
        ecosystems can be compared.
      </p>
      <TableCard
        title="Productivity terms you must not confuse"
        headers={["Term", "Meaning"]}
        rows={[
          { cells: ["Gross primary productivity (GPP)", "Rate of production of organic matter during photosynthesis."] },
          { cells: ["Net primary productivity (NPP)", "GPP minus respiration losses (R): GPP – R = NPP."] },
          { cells: ["Secondary productivity", "Rate of formation of new organic matter by the consumers."] },
        ]}
      />
      <p>
        <Highlight>NPP is the biomass actually available for consumption by heterotrophs — herbivores and decomposers.</Highlight>
      </p>
      <p>Primary productivity varies with plant species, environmental factors, nutrient availability and the photosynthetic capacity of plants.</p>
      <MetricCard
        label="Net primary productivity of the whole biosphere"
        value="170"
        unit="billion tons dry weight (annual)"
        trend="up"
        description="Despite occupying about 70% of the Earth's surface, the oceans contribute only 55 billion tons of this."
      />
      <MistakeCard
        mistake="Treating 'secondary productivity' as a second layer of photosynthesis."
        correction="Secondary productivity is the rate at which consumers assimilate the food energy they ingest into new body mass — it is consumption-based, not photosynthesis-based."
      />

      <h2 id="h-12-3">12.3 Decomposition</h2>
      <p>
        Decomposers break down complex organic matter into inorganic substances such as carbon
        dioxide, water and nutrients. The process is called <strong>decomposition</strong>. The raw
        material is <strong>detritus</strong> — dead plant remains (leaves, bark, flowers) and dead
        remains of animals, including faecal matter.
      </p>
      <ProcessCard
        title="Steps of decomposition (all operate simultaneously)"
        steps={[
          { label: "Fragmentation", description: "Detritivores (e.g., earthworm) break detritus into smaller particles." },
          { label: "Leaching", description: "Water-soluble inorganic nutrients move down the soil horizon and may precipitate as unavailable salts." },
          { label: "Catabolism", description: "Bacterial and fungal enzymes degrade detritus into simpler inorganic substances." },
          { label: "Humification", description: "Accumulation of humus — a dark, colloidal, microbe-resistant substance that acts as a nutrient reservoir." },
          { label: "Mineralisation", description: "Further microbial degradation of humus, releasing inorganic nutrients back for reuse." },
        ]}
      />
      <FactCard
        title="Factors controlling the rate of decomposition"
        definition="Decomposition is largely oxygen-requiring. It is slower when detritus is rich in lignin and chitin, and quicker when it is rich in nitrogen and water-soluble substances such as sugars. Temperature and soil moisture are the key climatic regulators — warm, moist conditions favour decomposition, while low temperature and anaerobiosis inhibit it, leading to a build-up of organic matter."
        icon="🍂"
      />

      <h2 id="h-12-4">12.4 Energy Flow</h2>
      <p>
        Except for the deep-sea hydrothermal ecosystems, the <strong>sun</strong> is the only source
        of energy for all ecosystems on Earth. Less than 50% of the incident solar radiation is
        <strong> photosynthetically active radiation (PAR)</strong>, and plants capture only
        <strong>2–10% of the PAR</strong> — yet this small amount sustains the entire living world.
      </p>
      <Callout type="note" title="Two laws of thermodynamics govern every ecosystem">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Energy flow is unidirectional — sun → producers → consumers — consistent with the first law.</li>
          <li>Energy is lost as heat at every transfer (second law), so ecosystems need a constant energy supply to maintain order.</li>
        </ul>
      </Callout>
      <p>
        The green plants are the <strong>producers</strong>. <strong>Consumers</strong> are
        heterotrophs that depend on plants directly or indirectly. If they feed on producers they are
        <strong>primary consumers</strong> (herbivores); if they eat other animals that eat plants
        they are <strong>secondary consumers</strong>; tertiary consumers exist too. An animal that
        eats herbivores is a carnivore, or more precisely a primary carnivore (still a secondary
        consumer).
      </p>
      <p>A simple grazing food chain (GFC):</p>
      <p>
        <strong>Grass</strong> (Producer) → <strong>Goat</strong> (Primary Consumer) → <strong>Man</strong> (Secondary Consumer)
      </p>
      <p>
        The <strong>detritus food chain (DFC)</strong> begins with dead organic matter and is driven
        by decomposers (fungi and bacteria, i.e., saprotrophs). GFC dominates energy flow in aquatic
        ecosystems; in terrestrial ecosystems a much larger fraction flows through the DFC. The two
        chains interconnect (omnivores, predators of detritivores) to form a <strong>food web</strong>.
      </p>
      <TableCard
        title="Trophic levels"
        headers={["Level", "Group"]}
        rows={[
          { cells: ["First", "Producers (plants / phytoplankton)"] },
          { cells: ["Second", "Primary consumers (herbivores)"] },
          { cells: ["Third", "Secondary / tertiary consumers (carnivores)"] },
        ]}
      />
      <p>
        Each level has a <strong>standing crop</strong> — the biomass (fresh or, more accurately, dry
        weight) or number of organisms present in a unit area at a given time. Successive trophic
        levels are limited by the <strong>10 per cent law</strong>: only about 10% of the energy of a
        level is transferred to the next; the rest is lost, mostly as heat.
      </p>
      <MistakeCard
        mistake="Assuming a detritus food chain can have unlimited trophic levels because decomposers are small."
        correction="The 10% law still applies at every transfer of energy — organism size is not the limiting factor; energy loss is."
      />

      <h2 id="h-12-5">12.5 Ecological Pyramids</h2>
      <p>
        An ecological pyramid expresses the food / energy relationship between organisms at different
        trophic levels in terms of <strong>number, biomass or energy</strong>. The base is always
        the producers (first trophic level); the apex is the top carnivore. Three types are studied:
      </p>
      <TableCard
        title="Three ecological pyramids"
        headers={["Pyramid", "Basis", "Typical shape"]}
        rows={[
          { cells: ["Of numbers", "Count of individuals at each level", "Upright in grassland; can be top-heavy on a single tree."] },
          { cells: ["Of biomass", "Dry (or fresh) mass at each level", "Upright on land; inverted in the sea."] },
          { cells: ["Of energy", "Energy content per unit area per unit time", "Always upright."] },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "Upright pyramid",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Producers far exceed consumers in number and biomass.</li>
                <li>Energy at a lower trophic level is always greater than at the next.</li>
                <li>Most terrestrial ecosystems show this.</li>
              </ul>
            ),
          },
          {
            title: "Inverted pyramid",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Biomass of consumers exceeds that of producers.</li>
                <li>Typical of the sea, where a small standing crop of fast-reproducing phytoplankton supports a large biomass of zooplankton / fish.</li>
                <li>Pyramid of energy can never be inverted.</li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Calling the inverted biomass pyramid of the sea a paradox that violates thermodynamics."
        correction="It does not: phytoplankton reproduce and are consumed so fast that their standing crop stays small, while fish accumulate biomass. The pyramid of ENERGY remains upright because energy is lost as heat at every step."
      />
      <MistakeCard
        mistake="Speaking of 'secondary producers'."
        correction="There are no secondary producers — producers are primary by definition. Organisms that eat plants are primary consumers, not producers."
      />
      <ConceptCard title="Limitations of ecological pyramids" icon="⚠">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>They ignore the same species occupying two or more trophic levels (e.g., a sparrow as both primary and secondary consumer).</li>
          <li>They assume a simple food chain, not a food web.</li>
          <li>Saprotrophs are not shown even though they play a vital role.</li>
        </ul>
      </ConceptCard>

      <h2 id="h-12-nutrient">Nutrient cycling — a brief note</h2>
      <p>
        Nutrient cycling is the storage and movement of nutrient elements through the components of an
        ecosystem, with nutrients being used repeatedly. It is of two types: <strong>gaseous</strong>
        (atmosphere or hydrosphere as reservoir — carbon) and <strong>sedimentary</strong> (Earth's
        crust as reservoir — phosphorus). Products of ecosystem processes are called ecosystem
        services, e.g., purification of air and water by forests.
      </p>
      <CycleDiagram
        title="Nutrient cycling in an ecosystem"
        steps={[
          { label: "Producers", detail: "Absorb inorganic nutrients to build organic matter." },
          { label: "Consumers", detail: "Take nutrients by eating producers or other consumers." },
          { label: "Detritus", detail: "Death and waste return organic nutrients to the soil / water." },
          { label: "Decomposers", detail: "Break detritus down, mineralising inorganic nutrients." },
          { label: "Inorganic pool", detail: "Released nutrients become available again to producers." },
        ]}
      />

      <h2 id="h-12-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "Fill in the blanks: (a) Plants are called as ______ because they fix carbon dioxide. (b) In an ecosystem dominated by trees, the pyramid (of numbers) is ______ type. (c) In aquatic ecosystems, the limiting factor for productivity is ______. (d) Common detritivores in our ecosystem are ______. (e) The major reservoir of carbon on earth is ______.",
            "Which one of the following has the largest population in a food chain? (a) Producers (b) Primary consumers (c) Secondary consumers (d) Decomposers",
            "The second trophic level in a lake is (a) Phytoplankton (b) Zooplankton (c) Benthos (d) Fishes.",
            "Secondary producers are (a) Herbivores (b) Producers (c) Carnivores (d) None of the above.",
            "What is the percentage of photosynthetically active radiation (PAR) in the incident solar radiation? (a) 100% (b) 50% (c) 1–5% (d) 2–10%",
            "Distinguish between: (a) grazing food chain and detritus food chain; (b) production and decomposition; (c) upright and inverted pyramid; (d) food chain and food web; (e) litter and detritus; (f) primary and secondary productivity.",
            "Describe the components of an ecosystem.",
            "Define ecological pyramids and describe, with examples, pyramids of number and biomass.",
            "What is primary productivity? Give a brief description of the factors that affect it.",
            "Define decomposition and describe the processes and products of decomposition.",
            "Give an account of energy flow in an ecosystem.",
          ]}
          answers={[
            "(a) Producers; (b) inverted; (c) light; (d) earthworms (also termites, ants, nematodes etc.); (e) oceans / the atmosphere (oceans).",
            "(a) Producers.",
            "(b) Zooplankton.",
            "(d) None of the above (there are no secondary producers).",
            "(d) 2–10%.",
            "(a) Grazing chain starts with living producers eaten by herbivores; detritus chain starts with dead organic matter worked on by saprotrophs. (b) Production is synthesis of biomass by autotrophs; decomposition is breakdown of dead matter into inorganic nutrients. (c) Upright — producers at base, consumers above in decreasing amounts; inverted — consumer biomass exceeds producer biomass (e.g., sea). (d) Food chain is a single linear sequence; food web is the interconnected set of chains. (e) Litter is freshly fallen dead organic matter; detritus is partly decomposed residue. (f) Primary productivity is biomass produced by autotrophs; secondary productivity is biomass formed by consumers.",
            "Abiotic (air, water, soil) and biotic (producers, consumers, decomposers) components interacting structurally (species composition, stratification) and functionally (productivity, decomposition, energy flow, nutrient cycling).",
            "Pyramids of number, biomass and energy; base = producers, apex = top carnivore. Number pyramid of grassland: many grass plants → few herbivores → fewer carnivores (upright); number pyramid on a single tree: one tree supports many insects (inverted). Biomass pyramid upright on land, inverted in sea.",
            "Rate of capture of solar energy / production of organic matter by producers; expressed as GPP or NPP. Depends on plant species, environmental factors, nutrient availability and photosynthetic capacity.",
            "Breakdown of complex organic matter by decomposers into inorganic substances (CO₂, water, nutrients); steps — fragmentation, leaching, catabolism, humification, mineralisation. Products: humus and released inorganic nutrients.",
            "Sun → producers (capture 2–10% of PAR) → consumers (only ~10% transferred per level) → detritus → decomposers, with heat lost at each step; unidirectional, cannot be recycled.",
          ]}
        />
      </Expandable>
    </>
  );
}

