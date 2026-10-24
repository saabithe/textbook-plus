import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";

export default function OrganismsAndPopulationsChapter() {
  return (
    <>
      <FactCard
        title="Ecology is concerned with four levels of biological organisation"
        definition="Organisms, populations, communities and biomes. In this chapter we explore ecology at the population level — groups of individuals of a species that live together, interact and evolve as a unit."
        icon="🌿"
      />

      <Callout type="note" title="Two kinds of questions in biology">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>How?</strong> — seeks the mechanism behind a process (e.g. how the bird sings: voice box + vibrating bone).</li>
          <li><strong>Why?</strong> — seeks the significance (e.g. why the bird sings: to communicate with its mate).</li>
        </ul>
      </Callout>

      <h2 id="h-11-1">11.1 Populations</h2>
      <p>
        You have already learnt in earlier classes that Ecology is a subject which studies the
        interactions among organisms and between the organism and its physical (abiotic)
        environment. Ecology is concerned with four levels of biological organisation —
        organisms, populations, communities and biomes. Here we move from the
        individual organism to the <strong>population</strong>.
      </p>
      <Callout type="important" title="What is a population?">
        A population is <Highlight color="yellow">a group of individuals of a given species, sharing or
        competing for similar resources in a well-defined geographical area</Highlight>, potentially
        interbreeding. Although "interbreeding" implies sexual reproduction, a group of
        individuals resulting from even asexual reproduction is also generally considered
        a population for ecological studies. All the cormorants in a wetland, rats in an
        abandoned dwelling, teakwood trees in a forest tract, bacteria on a culture plate
        and lotus plants in a pond are examples of a population.
      </Callout>
      <p>
        In earlier chapters you learnt that although an individual organism is the one
        that has to cope with a changed environment, it is at the population level that
        natural selection operates to evolve the desired traits. Population ecology is
        therefore an important area because it links ecology to population genetics
        and evolution.
      </p>

      <h3 id="h-11-1-1">11.1.1 Population Attributes</h3>
      <p>
        A population has certain attributes that an individual organism does not. An
        individual may have births and deaths, but a population has <strong>birth rates</strong> and
        <strong> death rates</strong>. In a population these rates are per capita and are expressed as
        change in numbers relative to the members of the population.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Example — births: if a pond had 20 lotus plants last year and 8 new plants
          were added by reproduction, taking the population to 28, the birth rate is
          8/20 = <Highlight color="blue">0.4 offspring per lotus per year</Highlight>.
        </li>
        <li>
          Example — deaths: if 4 individuals in a laboratory population of 40 fruitflies
          died during a week, the death rate is 4/40 = <Highlight color="blue">0.1 individuals per fruitfly per week</Highlight>.
        </li>
      </ul>

      <TableCard
        title="Attributes: individual vs population"
        headers={["Attribute", "Individual", "Population"]}
        rows={[
          { cells: ["Births / deaths", "Has births and deaths", "Has birth rates and death rates (per capita)"] },
          { cells: ["Sex", "Either male or female", "Has a sex ratio (e.g. 60% female, 40% male)"] },
          { cells: ["Age", "Has one age", "Has an age distribution → age pyramid"] },
          { cells: ["Size", "Body size / mass", "Population density (N) — numbers, biomass or cover"] },
        ]}
      />

      <Callout type="note" title="Sex ratio">
        An individual is either male or female, but a population has a sex ratio — for
        example, 60 per cent of the population are females and 40 per cent males. This
        is itself an attribute of the population, not of any single member.
      </Callout>

      <p>
        A population at any given time is composed of individuals of different ages. If
        the age distribution (per cent individuals of a given age or age group) is
        plotted for the population, the resulting structure is called an
        <strong> age pyramid</strong>. For human populations, pyramids generally show the
        age distribution of males and females separately. The shape of the pyramid
        reflects the growth status of the population — (a) growing, (b) stable, or
        (c) declining.
      </p>
      <ConceptCard title="Reading an age pyramid" icon="📊">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Growing</strong> — wide base, narrow top: high birth rate relative to death rate; bottom (young) age classes bulge.</li>
          <li><strong>Stable</strong> — roughly uniform bars across age groups: birth rate matches death rate.</li>
          <li><strong>Declining</strong> — narrow base, wider top: low birth rate; ageing population.</li>
        </ul>
      </ConceptCard>

      <Callout type="important" title="Population density (N)">
        The size of the population tells us a lot about its status in the habitat. The
        density may be as low as <Highlight color="yellow">&lt;10</Highlight> (Siberian cranes at Bharatpur wetlands in a
        year) or run into millions (<em>Chlamydomonas</em> in a pond). Population size,
        technically called <strong>population density (N)</strong>, need not be
        measured in numbers only.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Numbers can mislead.</strong> 200 carrot-grass
          (<em>Parthenium hysterophorus</em>) plants vs one huge banyan tree with a large
          canopy — saying banyan has "low density" underestimates its enormous role.
          In such cases <strong>per cent cover or biomass</strong> is the more
          meaningful measure.
        </li>
        <li>
          <strong>Huge or hidden populations</strong> cannot be counted directly — a
          dense bacterial culture, fish in a lake. Relative measures serve (fish
          caught per trap); tiger censuses in our national parks and tiger reserves
          are often based on pug marks and fecal pellets.
        </li>
      </ul>
      <MistakeCard
        mistake="A low population count always means a small ecological impact."
        correction="A single banyan tree contributes far more (cover, habitat, food) than 200 carrot-grass plants. Density should sometimes be reported as biomass or cover, not numbers."
        example="The question to ask is not 'how many?' but 'how much of the habitat does this population occupy?'"
      />

      <h3 id="h-11-1-2">11.1.2 Population Growth</h3>
      <p>
        The size of a population for any species is not a static parameter. It changes
        with time depending on food availability, predation pressure and adverse
        weather. In fact, these changes tell us whether the population is flourishing
        or declining. Ultimately the density fluctuates due to four basic processes:
      </p>
      <ProcessCard
        title="The four processes that change population density"
        steps={[
          { label: "Natality (B)", description: "Number of births added during a given period. Increases density." },
          { label: "Mortality (D)", description: "Number of deaths during a given period. Decreases density." },
          { label: "Immigration (I)", description: "Individuals of the same species entering the habitat. Increases density — dominates early colonisation." },
          { label: "Emigration (E)", description: "Individuals leaving the habitat. Decreases density." },
        ]}
      />
      <FormulaBlock latex={String.raw`N_{t+1} = N_t + [(B + I) - (D + E)]`} important />
      <p>
        Population density increases when <Highlight color="blue">(B + I) &gt; (D + E)</Highlight>.
        Under normal conditions births and deaths are the most important factors;
        immigration and emigration matter mainly under special conditions — for
        instance, when a new habitat is just being colonised, immigration may
        contribute more than birth rate.
      </p>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Growth Models</h4>
      <p className="text-sm text-muted-foreground">
        Does population growth follow a predictable pattern? Nature's lesson on
        controlling growth — two classic models.
      </p>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">(i) Exponential (geometric) growth</h4>
      <Callout type="note" title="Unlimited resources">
        When resources in the habitat are unlimited, each species can fully realise
        its innate potential to grow, as Darwin observed. The population then grows
        in an exponential or geometric fashion, producing a <strong>J-shaped curve</strong>.
      </Callout>
      <p>
        If per capita birth rate is <strong>b</strong> and per capita death rate is
        <strong> d</strong> for a population of size N, then over a unit time interval:
      </p>
      <FormulaBlock latex={String.raw`\frac{dN}{dt} = (b - d)\,N`} />
      <FormulaBlock latex={String.raw`\frac{dN}{dt} = rN`} important />
      <p>
        where <Formula>{String.raw`r = b - d`}</Formula> is the
        <Highlight color="yellow"> intrinsic rate of natural increase</Highlight>, a
        very important parameter for assessing the impact of any factor on population
        growth. Reference values: Norway rat r = 0.015; flour beetle r = 0.12;
        human population in India in 1981 r = 0.0205. (Activity: find the current
        Indian r from current birth and death rates.)
      </p>
      <FormulaBlock latex={String.raw`N_t = N_0\,e^{rt}`} />
      <p className="text-sm text-muted-foreground">
        N<sub>t</sub> = density after time t; N<sub>0</sub> = density at time zero;
        e = 2.71828. Darwin showed how even a slow-growing animal like the
        elephant could reach enormous numbers without checks.
      </p>
      <Expandable title="Classic demonstration — the chessboard & Paramecium">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>A king agreed to a minister's bet: 1 grain on square 1, 2 on square 2,
            4 on square 3, 8 on square 4… doubling each square across all 64. By
            the time half the board was covered, the wheat of the entire kingdom
            pooled together was inadequate. Exponential growth outruns intuition.</li>
          <li>Then imagine a single <em>Paramecium</em> doubling every day by binary
            fission for 64 days, with unlimited food and space — population size
            becomes mind-boggling.</li>
        </ul>
      </Expandable>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">(ii) Logistic (Verhulst–Pearl) growth</h4>
      <Callout type="note" title="Limited resources">
        No population in nature has unlimited resources. Competition follows, and
        eventually a given habitat supports a maximum number —
        <Highlight color="yellow"> nature's carrying capacity (K)</Highlight>. Many
        governments have introduced restraints with a view to limit human population
        growth for exactly this reason.
      </Callout>
      <p>
        With limited resources the population shows a lag phase, then acceleration
        and deceleration, finally an asymptote at carrying capacity. A plot of N
        against time gives a <strong>sigmoid curve</strong>:
      </p>
      <FormulaBlock latex={String.raw`\frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)`} important />
      <p className="text-sm text-muted-foreground">
        N = density at time t; r = intrinsic rate of increase; K = carrying
        capacity. Since resources are finite sooner or later, the logistic model is
        considered the more realistic one. (Activity: gather India's census data for
        the last 100 years, plot and check which growth pattern is evident.)
      </p>
      <CycleDiagram
        title="Logistic growth phases"
        steps={[
          { label: "Lag phase", detail: "Slow start while population establishes." },
          { label: "Acceleration", detail: "Rapid increase while resources are abundant." },
          { label: "Deceleration", detail: "Growth slows as N approaches K." },
          { label: "Asymptote at K", detail: "Population density stabilises at carrying capacity." },
        ]}
      />

      <h3 id="h-11-1-3">11.1.3 Life History Variation</h3>
      <p>
        Populations evolve to maximise their reproductive fitness — Darwinian
        fitness (high r value) — in the habitat where they live. Under particular
        selection pressures organisms evolve toward the most efficient reproductive
        strategy. Life history traits vary enormously:
      </p>
      <Comparison
        columns={[
          {
            title: "Breeding frequency",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Once in lifetime</strong> — Pacific salmon, bamboo</li>
                <li><strong>Many times</strong> — most birds and mammals</li>
              </ul>
            ),
          },
          {
            title: "Offspring size / number",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Many, small</strong> — oysters, pelagic fishes</li>
                <li><strong>Few, large</strong> — birds, mammals</li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="What ecologists think">
        Life history traits have evolved in relation to the constraints imposed by
        the abiotic and biotic components of the habitat. Evolution of life history
        traits in different species is an active area of research.
      </KeyPoint>

      <h3 id="h-11-1-4">11.1.4 Population Interactions</h3>
      <p>
        Can you think of a natural habitat inhabited by a single species? There is
        no such habitat — it is even inconceivable. Even a plant making its own
        food needs soil microbes to return inorganic nutrients, and pollination needs
        an animal agent. In nature animals, plants and microbes do not live in
        isolation; they interact in varied ways to form a <strong>biological
        community</strong>.
      </p>
      <p>
        Interspecific interactions arise between populations of two different
        species and may be beneficial (+), detrimental (−), or neutral (0) to one or
        both. Table 11.1 lists all possible outcomes:
      </p>
      <TableCard
        title="Table 11.1 — Population interactions"
        headers={["Species A", "Species B", "Name of interaction"]}
        rows={[
          { cells: ["+", "+", "Mutualism"] },
          { cells: ["−", "−", "Competition"] },
          { cells: ["+", "−", "Predation"] },
          { cells: ["+", "−", "Parasitism"] },
          { cells: ["+", "0", "Commensalism"] },
          { cells: ["−", "0", "Amensalism"] },
        ]}
      />
      <p>
        Both species benefit in mutualism; both lose in competition. In parasitism
        and predation only one species benefits (parasite / predator) and the
        interaction is detrimental to the other (host / prey). In commensalism one
        benefits and the other is unaffected; in amensalism one is harmed and the
        other is unaffected. Predation, parasitism and commensalism share a
        characteristic — the interacting species live closely together.
      </p>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Predation</h4>
      <p>
        What would happen to all the energy fixed by autotrophic organisms if there
        were no animals to eat plants? Predation is nature's way of transferring
        that energy to higher trophic levels. A sparrow eating a seed is as much a
        predator as a tiger killing a deer; herbivores are, broadly, plant
        predators.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Predators keep prey populations under control — without them, prey
          densities could explode and destabilise the ecosystem.</li>
        <li>Introduced <strong>exotic species</strong> become invasive because the
          new land lacks their natural predators — e.g. prickly pear cactus in
          Australia in the 1920s, finally controlled only after a cactus-eating
          moth from its native range was introduced.</li>
        <li>Biological control of agricultural pests is based on the predator's
          ability to regulate prey — predators also maintain species diversity by
          reducing competition among prey (e.g. the starfish <em>Pisaster</em>
          in the rocky intertidal of the American Pacific Coast: removing it caused
          more than 10 invertebrate species to vanish within a year).</li>
        <li>Predators in nature are <Highlight color="yellow">"prudent"</Highlight>:
          if too efficient they exterminate their prey and then themselves for
          lack of food.</li>
      </ul>
      <Callout type="note" title="Defences against predation">
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Cryptic colouration</strong> (camouflage) — insects/frogs resemble surroundings to avoid detection.</li>
          <li><strong>Chemical defence</strong> — Monarch butterfly is distasteful because of a special chemical acquired during the caterpillar stage by feeding on a poisonous weed.</li>
        </ul>
      </Callout>
      <Callout type="note" title="Plant defences against herbivores">
        <p>Plants cannot run away, so they evolved astonishing defences:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Morphological</strong> — thorns (<em>Acacia</em>, <em>Cactus</em>).</li>
          <li><strong>Chemical</strong> — compounds that sicken, inhibit feeding/digestion, disrupt reproduction or kill: <em>Calotropis</em> contains cardiac glycosides, so cattle and goats never browse on it. Nicotine, caffeine, quinine, strychnine, opium were originally plant defences.</li>
        </ul>
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Competition</h4>
      <p>
        Darwin's "struggle for existence" was rooted in the conviction that
        interspecific competition is a potent evolutionary force. Competition is
        best defined as a process in which the fitness of one species (its r, the
        intrinsic rate of increase) is significantly lower in the presence of another
        species.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Unrelated species compete too</strong> — flamingoes and resident fishes in shallow South American lakes both eat the zooplankton.</li>
        <li><strong>Resources need not be limiting</strong> — in interference competition, the mere presence of one species reduces the feeding efficiency of the other even when food and space are abundant.</li>
        <li><strong>Field evidence:</strong> the Abingdon tortoise of the Galápagos went extinct within a decade of goat introduction (greater browsing efficiency of goats). <em>Competitive release</em>: when the superior competitor is experimentally removed, the restricted species expands its range dramatically. Connell showed that on Scottish rocky coasts <em>Balanus</em> (larger, superior) dominates the intertidal and excludes the smaller <em>Chathamalus</em>.</li>
        <li>Herbivores and plants seem more adversely affected by competition than carnivores.</li>
      </ul>
      <Callout type="important" title="Competitive Exclusion Principle (Gause)">
        Two closely related species competing for the same resources cannot coexist
        indefinitely; the competitively inferior one is eventually eliminated. This
        holds when resources are limiting. More recent work questions the gross
        generalisation, pointing out that competing species may evolve mechanisms
        promoting <strong>coexistence</strong> rather than exclusion — e.g.
        <Highlight color="yellow"> resource partitioning</Highlight>: feeding at different times
        or using different foraging patterns. MacArthur showed five closely related
        warbler species living on the same tree coexisted through behavioural
        differences in foraging.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Parasitism</h4>
      <p>
        Free lodging and meals make parasitism an attractive lifestyle; it has
        evolved in groups from plants to higher vertebrates. Many parasites are
        host-specific, so host and parasite co-evolve — when the host evolves
        defences, the parasite evolves counter-measures. Adaptations include loss of
        unnecessary sense organs, adhesive organs / suckers, loss of digestive
        system and high reproductive capacity. Life cycles are often complex,
        needing one or two intermediate hosts or vectors (human liver fluke needs
        snail and fish; malarial parasite needs mosquito).
      </p>
      <p>
        Most parasites harm the host — reducing survival, growth and reproduction,
        lowering population density, or making the host more vulnerable to predation.
        Why don't "ideal harmless parasites" prevail? (NCERT prompt.) Natural
        selection favours parasites able to exploit the host, not just coexist.
      </p>
      <TableCard
        title="Ectoparasites vs endoparasites"
        headers={["Type", "Where they live", "Examples / notes"]}
        rows={[
          { cells: ["Ectoparasites", "External surface of host", "Lice on humans; ticks on dogs; copepods on marine fish; Cuscuta (a parasitic plant) — lost chlorophyll and leaves, derives nutrition from host. The female mosquito is not considered a parasite."] },
          { cells: ["Endoparasites", "Inside host body (liver, kidney, lungs, RBCs, …)", "Life cycles more complex because of extreme specialisation; morphology greatly simplified; reproductive potential emphasised."] },
        ]}
      />
      <Callout type="tip" title="Brood parasitism">
        The parasitic bird lays its eggs in the host's nest and lets the host
        incubate them. Over evolution the parasite's eggs evolved to resemble the
        host's eggs in size and colour, reducing the chance of rejection. Watch
        the koel (cuckoo) and crow in your area during breeding season to see
        brood parasitism in action.
      </Callout>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Commensalism</h4>
      <p>
        One species benefits; the other is neither harmed nor benefited.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Orchid</strong> growing as an epiphyte on a mango branch; <strong>barnacles</strong> on the back of a whale — the host shows no apparent benefit or harm.</li>
        <li><strong>Cattle egret</strong> and grazing cattle — egrets forage close to cattle because the cattle stir up and flush out insects otherwise hard to catch.</li>
        <li><strong>Clown fish</strong> among sea-anemone's stinging tentacles gains protection from predators; the anemone gains nothing apparent.</li>
      </ul>

      <h4 className="text-[15px] font-semibold mt-6 mb-2">Mutualism</h4>
      <p>
        Both interacting species benefit. The most spectacular, evolutionarily
        fascinating cases are plant–animal relationships: plants need animals for
        pollination and seed dispersal and pay fees — pollen/nectar for
        pollinators, juicy fruits for seed dispersers. The system must be protected
        against "cheaters"; hence <strong>co-evolution</strong> of mutualists.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong>Lichens</strong> — intimate fungus + photosynthesising alga/cyanobacterium.</li>
        <li><strong>Mycorrhizae</strong> — fungus + higher-plant roots: fungi help plants absorb nutrients, plants supply energy-yielding carbohydrates.</li>
        <li><strong>Fig tree ↔ wasp</strong> — tight one-to-one relationship; fig pollinated only by its partner wasp. The female wasp oviposits in the fruit and nourishes larvae on developing seeds; the wasp pollinates the fig inflorescence while searching for egg-laying sites; in return the fig provides some developing seeds as food. (Figure 11.4)</li>
        <li><strong>Orchids & bumblebees</strong> — bewildering floral diversity evolved to attract the right pollinator and guarantee pollination. (Figure 11.5)</li>
        <li><strong><em>Ophrys</em> orchid</strong> (Mediterranean) — "sexual deceit": one petal resembles the female bee in size, colour and markings; the male bee pseudocopulates with the flower and is dusted with pollen, transferring it to another flower. Co-evolution in action.</li>
      </ul>

      <Callout type="tip" title="Amensalism in one line">
        One species is harmed; the other is unaffected (cf. the table above). It is
        the "−, 0" interaction — distinct from commensalism (+, 0), competition
        (−, −) and predation/parasitism (+, −).
      </Callout>

      <h2 id="h-11-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "List the attributes that populations possess but not individuals.",
            "If a population growing exponentially doubles in size in 3 years, what is the intrinsic rate of increase (r) of the population?",
            "Name important defence mechanisms in plants against herbivory.",
            "An orchid plant is growing on the branch of a mango tree. How do you describe this interaction?",
            "What is the ecological principle behind the biological control method of managing pest insects?",
            "Define population and community.",
            <div key="q7">
              <p>Define the following terms and give one example for each:</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Commensalism</li>
                <li>(b) Parasitism</li>
                <li>(c) Camouflage</li>
                <li>(d) Mutualism</li>
                <li>(e) Interspecific competition</li>
              </ul>
            </div>,
            "With the help of a suitable diagram describe the logistic population growth curve.",
            <div key="q9">
              <p>Select the statement which explains parasitism best:</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) One organism is benefited.</li>
                <li>(b) Both the organisms are benefited.</li>
                <li>(c) One organism is benefited, the other is not affected.</li>
                <li>(d) One organism is benefited, the other is affected.</li>
              </ul>
            </div>,
            "List any three important characteristics of a population and explain.",
          ]}
          answers={[
            <ul key="a1" className="space-y-1">
              <li>Birth rates and death rates (per capita)</li>
              <li>Sex ratio</li>
              <li>Age distribution / age pyramid</li>
              <li>Population density (N) — numbers, biomass or cover</li>
            </ul>,
            <p key="a2">
              Doubling time t<sub>d</sub> = 3 yr. For exponential growth N = N₀e^(rt),
              doubling means e^(3r) = 2, so r = ln 2 / 3 = 0.693 / 3 ≈
              <Highlight color="yellow">0.231 per year</Highlight>.
            </p>,
            <ul key="a3" className="space-y-1">
              <li>Morphological — thorns (<em>Acacia</em>, <em>Cactus</em>)</li>
              <li>Chemical — toxic/secondary compounds (e.g. <em>Calotropis</em> cardiac glycosides)</li>
              <li>Repellents/digestion inhibitors — nicotine, caffeine, quinine, strychnine, opium, etc.</li>
            </ul>,
            <p key="a4">
              <strong>Commensalism</strong> — the orchid (epiphyte) benefits while the
              mango tree is neither harmed nor benefited.
            </p>,
            <p key="a5">
              <strong>Competitive Exclusion / predation-based regulation:</strong>
              better predators control prey (pest) populations, replacing chemical
              control — biological control. The underlying principle is that
              predators regulate prey population density.
            </p>,
            <div key="a6">
              <p><strong>Population:</strong> group of individuals of one species in a defined area, interacting and potentially interbreeding.</p>
              <p className="mt-1"><strong>Community:</strong> all the populations of different species living together in a given area.</p>
            </div>,
            <ul key="a7" className="space-y-1">
              <li>(a) Commensalism — +, 0; e.g. orchid on mango tree, cattle egret + cattle.</li>
              <li>(b) Parasitism — +, −; e.g. <em>Cuscuta</em> on hedge plant, lice on humans, ticks on dogs.</li>
              <li>(c) Camouflage — cryptic colouration; e.g. camouflaged insects/frogs, Monarch butterfly's distastefulness.</li>
              <li>(d) Mutualism — +, +; e.g. lichens, mycorrhizae, fig–wasp.</li>
              <li>(e) Interspecific competition — −, −; e.g. flamingoes and fish for zooplankton, <em>Balanus</em> vs <em>Chathamalus</em>.</li>
            </ul>,
            <div key="a8">
              <p>The logistic curve is <strong>sigmoid</strong>: lag phase → exponential-like
              acceleration → deceleration as N approaches K → asymptote at the
              carrying capacity K. Equation: dN/dt = rN(1 − N/K). X-axis = time;
              Y-axis = population density N. K is the horizontal asymptote.</p>
            </div>,
            <p key="a9">
              <strong>(d)</strong> One organism is benefited, the other is affected.
            </p>,
            <ul key="a10" className="space-y-1">
              <li>Birth/death rates (per capita) — show whether the population is growing or declining.</li>
              <li>Sex ratio — affects future birth rate and population trend.</li>
              <li>Age distribution (age pyramid) — reflects growing/stable/declining status.</li>
              <li>(Alternative: population density measured as numbers, biomass or cover.)</li>
            </ul>,
          ]}
        />
      </Expandable>
    </>
  );
}
