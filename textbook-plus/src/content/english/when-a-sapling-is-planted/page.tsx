"use client";

import { useState } from "react";
import Link from "next/link";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { Expandable } from "@/components/content/Expandable";
import { TableCard } from "@/components/content/data/TableCard";

import type { ReactNode } from "react";

/** One headed group of bullets inside the Detailed summary. */
function SummaryPart({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2.5 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h3>
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        {children}
      </ul>
    </section>
  );
}

const QA_ITEMS = [
  {
    question:
      "What is the role of bio-diversity in maintaining environmental balance?",
    answer: (
      <>
        <p>
          Biodiversity is vital for preserving{" "}
          <strong>soil health</strong>, regulating{" "}
          <strong>climate stability</strong> and protecting local{" "}
          <strong>watersheds</strong>. Indigenous forests and diverse flora
          maintain the land&rsquo;s natural capacity to conserve water and prevent
          soil erosion.
        </p>
        <p>
          Replacing natural biodiversity with{" "}
          <Highlight color="green">monoculture commercial plantations</Highlight>{" "}
          destroys ecosystems, dries up streams and triggers ecological
          instability.
        </p>
      </>
    ),
  },
  {
    question:
      "Identify the needs of the present day women, and compare them with those of the women of Kenya at the time of Wangari Maathai.",
    answer: (
      <>
        <ul className="list-disc space-y-2 ps-5">
          <li>
            <strong>Kenyan women in Maathai&rsquo;s time</strong>: direct survival
            needs &mdash; firewood, clean drinking water, balanced diets, shelter
            and basic income, all of which were lost as the environment was
            degraded.
          </li>
          <li>
            <strong>Present-day women</strong>: rural women in developing regions
            still face resource scarcity, but modern women also demand equal
            employment opportunities, leadership roles, equal pay, access to
            quality education and freedom from social prejudice and the comfort
            zone.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "\u201cWomen are often the first to become aware of environmental damage,\u201d says Wangari Maathai. What is your opinion?",
    answer: (
      <>
        <p>
          This is true, particularly in rural societies where women are the{" "}
          <strong>primary caretakers</strong> responsible for tilling the soil,
          gathering firewood, fetching water and feeding their families. Because
          their daily duties depend directly on natural resources, any
          deforestation, soil erosion or drying up of streams affects them
          immediately.
        </p>
      </>
    ),
  },
  {
    question: "What is the impact of commercial farming on the rural community?",
    answer: (
      <>
        <p>
          Commercial farming leads to the clearing of indigenous forests and the
          displacement of{" "}
          <strong>traditional household food crops</strong>. This causes
          deforestation, loss of biodiversity and soil contamination.
        </p>
        <p>
          Because international trade dictates prices, small-scale farmers cannot
          secure a <strong>just income</strong>, which leads to poverty and food
          insecurity.
        </p>
      </>
    ),
  },
  {
    question: "How does degradation of environment trigger off poverty and conflict?",
    answer: (
      <>
        <p>
          Environmental destruction plunders essential natural resources such as
          clean water, fertile land and wood. As these resources grow scarce,
          communities face excruciating poverty and are forced into a fierce{" "}
          <strong>scramble for survival</strong>.
        </p>
        <p>
          That scramble frequently escalates into{" "}
          <Highlight color="pink">social unrest</Highlight>, riots and violent
          ethnic conflicts.
        </p>
      </>
    ),
  },
  {
    question: "Explain the term 'sustainable development.'",
    answer: (
      <>
        <p>
          <Highlight color="yellow">Sustainable development</Highlight> means
          meeting the present generation&rsquo;s needs without destroying or
          mismanaging natural resources, thereby safeguarding the quality of life
          for <strong>future generations</strong>.
        </p>
        <p>
          It establishes an interdependent relationship between democratic
          governance, equitable economic progress, peace and environmental
          protection.
        </p>
      </>
    ),
  },
];

const ADVERB_ROWS = [
  { cells: ["Adverb", "always", "modifies the verb \u201cran\u201d"] },
  { cells: ["Adverb", "Finally", "modifies the verb \u201cdecided\u201d"] },
  { cells: ["Adverb", "absolutely", "modifies the adjective \u201cnecessary\u201d"] },
  { cells: ["Adverb", "away", "modifies the verb \u201ctake\u201d"] },
  { cells: ["Adverb phrase", "At first", "adverb phrase of time"] },
  {
    cells: [
      "Adverb phrase",
      "in controlling the child",
      "adverb phrase (how much trouble)",
    ],
  },
  { cells: ["Adverb phrase", "to her mother", "adverb phrase of direction"] },
  { cells: ["Adverb phrase", "for a while", "adverb phrase of time"] },
  {
    cells: [
      "Adverb clause",
      "from the time she was a baby",
      "adverb clause of time (subject \u201cshe\u201d, verb \u201cwas\u201d)",
    ],
  },
  {
    cells: [
      "Adverb clause",
      "When she was six years old",
      "adverb clause of time (subject \u201cshe\u201d, verb \u201cwas\u201d)",
    ],
  },
  {
    cells: [
      "Adverb clause",
      "because Helen always ran to her mother",
      "adverb clause of reason (subject \u201cHelen\u201d, verb \u201cran\u201d)",
    ],
  },
];

const DISCOURSES = [
  {
    id: "green-belt-movement",
    title: "The Green Belt Movement",
    content: (
      <>
        <Callout type="important">
          <p>
            Wangari Maathai founded the{" "}
            <Highlight color="green">Green Belt Movement</Highlight> in 1977, an
            environmental NGO that worked on three fronts at once:
          </p>
          <ul className="list-disc space-y-1.5 ps-5">
            <li>tree planting;</li>
            <li>environmental conservation;</li>
            <li>women&rsquo;s rights.</li>
          </ul>
          <p>
            Together they planted over <strong>30 million trees</strong>, which
            provide fuel, food, shelter and income to support families.
          </p>
        </Callout>
        <p>
          The movement began because women in rural Kenya could no longer meet
          their basic needs. The degradation of their environment &mdash; combined
          with commercial farming replacing household food crops &mdash; had made
          survival difficult.
        </p>
        <p>
          Tree planting was chosen because it was{" "}
          <Highlight color="yellow">simple, attainable, and guaranteed quick
          results</Highlight>, sustaining interest and commitment.
        </p>
      </>
    ),
  },
  {
    id: "environment-democracy-peace",
    title: "Environment, Democracy, and Peace",
    content: (
      <>
        <h3
          id="environment-democracy"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Environment and Democracy
        </h3>
        <p>
          Although the movement initially focused on tree planting, it became
          clear that responsible governance of the environment was impossible
          without{" "}
          <Highlight color="yellow">democratic space</Highlight>. The tree
          therefore became a symbol of Kenya&rsquo;s democratic struggle.
        </p>
        <p>
          Citizens were mobilised to challenge widespread abuse of power,
          corruption, and environmental mismanagement.
        </p>
        <h3
          id="trees-as-peace"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Trees as Peace Symbols
        </h3>
        <p>
          Using trees as peace symbols follows a widespread African tradition.
          The Kikuyu elders carried a staff from the{" "}
          <Highlight color="green">thigi tree</Highlight> &mdash; placing it
          between disputing sides caused them to stop fighting and seek
          reconciliation.
        </p>
        <p>
          Maathai connects this cultural heritage to conservation and peace.
        </p>
      </>
    ),
  },
  {
    id: "ngc-award-speech",
    title: "Acceptance Speech: National Green Corps Award",
    content: (
      <>
        <p>
          This is the acceptance speech for the{" "}
          <strong>National Green Corps (NGC) Award</strong>, delivered before the
          Governor and the Chief Minister on behalf of the school&rsquo;s
          Eco-Club.
        </p>
        <div className="mt-6 space-y-4 border-l-2 border-border/70 pl-5">
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Respected Governor of the State, Honourable Chief Minister,
            distinguished dignitaries on and off the stage, teachers, and my dear
            friends. Good morning to one and all.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            It is with profound humility, immense joy and deep gratitude that I
            stand before you today to accept the prestigious National Green Corps
            Award on behalf of our school&rsquo;s Eco-Club. I thank the Honourable
            Governor and the Chief Minister for honouring our modest
            environmental initiatives with this recognition.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            This award is not just mine &mdash; it belongs to my eco club team,
            who worked hard to make our school and its surroundings greener and
            cleaner. It is a tribute to every member of the club, to our
            supportive principal and teachers and to the local community that
            walked alongside us.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            We began with a simple idea, borrowed from the Nobel Laureate Wangari
            Maathai: that planting one sapling can heal the Earth and restore a
            degraded ecosystem. Over the past year the club turned that idea into
            work on the ground.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            <strong>Tree plantation drives.</strong> We planted more than{" "}
            <Highlight color="green">500 indigenous saplings</Highlight> across
            our campus and the surrounding village areas, restoring local
            biodiversity and protecting soil health.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            <strong>Plastic-free campaign and waste management.</strong> We held
            awareness rallies to remove single-use plastics from our locality, and
            we set up a paper-recycling and composting unit on the school campus.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            <strong>Conserving water resources.</strong> Echoing Maathai&rsquo;s
            call to restore &ldquo;the home of the tadpoles&rdquo;, our club ran a
            stream-cleaning drive and built rainwater harvesting structures to
            protect our local water sources.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Receiving this award fills me with pride, and with responsibility. It
            tells us that{" "}
            <Highlight color="yellow">no environmental action is too small</Highlight>{" "}
            and that when young people act together, simple work creates ripples
            of change across society.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            So I appeal to my fellow students: our Earth is our only home and it
            depends on us for care. Plant at least one sapling every year, protect
            the stream or pond near your home, and reduce the waste you throw
            away.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            If each of us does this much, our school, our village and our country
            will be greener and cleaner. I promise to keep working for Mother Earth
            and I invite every one of you to walk with us.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Thank you once again for this great honour. Jai Hind!
          </p>
        </div>
        <TableCard
          title="The seven moves of an acceptance speech"
          headers={["Move", "What it does", "In this speech"]}
          rows={[
            {
              cells: [
                "Salutation",
                "Names the dignitaries in order of rank",
                "\u201cRespected Governor \u2026 my dear friends\u201d",
              ],
            },
            {
              cells: [
                "Thanks for the honour",
                "Names who gave it",
                "the Governor, the Chief Minister and the NGC",
              ],
            },
            {
              cells: [
                "Credit shared",
                "Refuses to keep the prize",
                "\u201cnot just mine, it belongs to my eco club team\u201d",
              ],
            },
            {
              cells: [
                "Evidence",
                "What the club actually did",
                "the 500 saplings, the plastic-free campaign, the water work",
              ],
            },
            {
              cells: [
                "Meaning",
                "What the award changes",
                "\u201cpride and responsibility\u201d",
              ],
            },
            {
              cells: [
                "Appeal",
                "Gives the audience a task",
                "plant one sapling a year, save water, reduce waste",
              ],
            },
            {
              cells: [
                "Close",
                "Thanks again and a patriotic line",
                "\u201cJai Hind!\u201d",
              ],
            },
          ]}
        />
      </>
    ),
  },
];

export default function WhenASaplingIsPlantedPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro author="Wangari Maathai" role="Speaker" genre="Nobel lecture / speech" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>When a Sapling is Planted</em> is the{" "}
            <Highlight color="yellow">Nobel Peace Prize Acceptance Speech</Highlight>{" "}
            by Wangari Maathai. Maathai was the first African woman to receive
            this prestigious award, in recognition of her contribution to
            sustainable development, democracy, and peace.
          </p>
          <p>
            The speech traces her journey from founding the Green Belt Movement
            in Kenya to addressing world leaders about the{" "}
            <Highlight color="green">interconnectedness of environment,
            democracy, and peace</Highlight>. It is both a personal reflection
            and a global call to action.
          </p>

          {/* Summary */}
          <h2
            id="summary"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Summary
          </h2>
          <SummaryLevels
            quick={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Speaker</strong>: Wangari Maathai, the{" "}
                  <Highlight color="yellow">first African woman</Highlight> to
                  win the Nobel Peace Prize.
                </li>
                <li>
                  <strong>Green Belt Movement</strong>: founded in 1977 to meet
                  what rural women named as their basic needs &mdash; firewood,
                  clean drinking water, balanced diets, shelter and income;{" "}
                  <Highlight color="green">30 million trees</Highlight> planted.
                </li>
                <li>
                  <strong>Why trees</strong>: planting is simple, attainable and
                  gives quick, visible results, so the community stays committed.
                </li>
                <li>
                  <strong>More than ecology</strong>: the tree became a symbol of
                  Kenya&rsquo;s democratic struggle and of peace, and development,
                  peace and environmental management cannot exist apart.
                </li>
                <li>
                  <strong>Closing image</strong>: the dried-up stream where
                  tadpoles once swam &mdash; our task is to restore &ldquo;the
                  home of the tadpoles&rdquo;.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Maathai accepts the prize as the first African woman laureate,
                  dedicating it to the people of Kenya, Africa and the world, and
                  hoping it will encourage women and young girls to raise their
                  voices and step into leadership.
                </li>
                <li>
                  Her commitment began in childhood in rural Kenya, watching
                  indigenous forests cleared and replaced by commercial
                  plantations &mdash; a change that destroyed biodiversity and the
                  land&rsquo;s capacity to conserve water.
                </li>
                <li>
                  In 1977 she founded the Green Belt Movement in answer to what
                  rural women named as their basic needs: firewood, clean drinking
                  water, balanced diets, shelter and income.
                </li>
                <li>
                  Women, as the caretakers who till the land, felt the damage
                  first; commercial farming had displaced household food crops and
                  export prices were fixed by international trade, so a fair
                  income was impossible.
                </li>
                <li>
                  Tree planting was chosen because it was simple, attainable and
                  produced visible, quick results. Over{" "}
                  <Highlight color="green">30 million trees</Highlight> followed,
                  providing fuel, food, shelter and income, creating employment
                  and restoring soil and watersheds.
                </li>
                <li>
                  The movement grew into a{" "}
                  <Highlight color="yellow">democratic struggle</Highlight>: the
                  tree became its symbol, and citizens mobilised against
                  corruption, environmental mismanagement and the abuse of power.
                </li>
                <li>
                  Trees also became symbols of peace, following the Kikuyu custom
                  of the thigi staff placed between disputing sides. Equitable
                  development, peace and sound environmental management, she
                  argues, cannot exist apart.
                </li>
                <li>
                  She calls on world leaders to widen democratic space and build
                  fair societies, and on young people to shape a sustainable
                  future: &ldquo;You are our hope and our future.&rdquo; She closes
                  with the dried-up stream of her childhood &mdash; the challenge
                  is to &ldquo;restore the home of the tadpoles&rdquo;.
                </li>
              </ul>
            }
            detailed={
              <div className="space-y-7">
                <SummaryPart title="1. The Prize, the Dedication and Her Childhood">
                  <li>
                    Maathai accepts the Nobel Peace Prize as the{" "}
                    <Highlight color="yellow">first African woman</Highlight> ever
                    to receive it, and dedicates it to the people of Kenya, to
                    Africa and to the world.
                  </li>
                  <li>
                    She hopes the award will inspire women and young girls to
                    raise their voices and step into leadership.
                  </li>
                  <li>
                    Her authority comes not from political office but from
                    decades of grassroots work &mdash; founding the Green Belt
                    Movement, mobilising communities, and facing personal risk for
                    environmental and democratic activism.
                  </li>
                  <li>
                    Her commitment to the environment began in childhood in rural
                    Kenya, where she watched indigenous forests being cleared and
                    replaced by commercial plantations.
                  </li>
                  <li>
                    That clearing destroyed biodiversity and stripped the land of
                    its natural capacity to conserve water.
                  </li>
                </SummaryPart>

                <SummaryPart title="2. The Green Belt Movement, 1977">
                  <li>
                    She founded the movement in response to the basic survival
                    needs voiced by rural African women: firewood, clean drinking
                    water, balanced diets, shelter and income.
                  </li>
                  <li>
                    Women are the primary caretakers who till the land to feed
                    their families, so they were the first to experience
                    environmental damage as natural resources grew scarce.
                  </li>
                  <li>
                    The crisis was aggravated by environmental degradation and by
                    the introduction of commercial farming, which displaced
                    traditional household food crops.
                  </li>
                  <li>
                    Because international trade controlled export prices,
                    small-scale farmers could not be guaranteed a fair or just
                    income.
                  </li>
                </SummaryPart>

                <SummaryPart title="3. Why Tree Planting Worked">
                  <li>
                    Tree planting was chosen as the core activity because it was
                    simple, attainable and produced visible, quick results &mdash;
                    which kept the community committed. Maathai offers this as a
                    lesson in{" "}
                    <Highlight color="green">grassroots movement design</Highlight>.
                  </li>
                  <li>
                    Through collective effort the movement planted over 30 million
                    trees across Kenya.
                  </li>
                  <li>
                    The trees provided fuel, food, shelter and income, money that
                    funded children&rsquo;s education and household needs.
                  </li>
                  <li>
                    Planting also created local employment while restoring soil
                    health and improving watersheds.
                  </li>
                </SummaryPart>

                <SummaryPart title="4. Environment, Democracy and Peace">
                  <li>
                    The movement began with environmental needs but evolved to
                    address larger socio-political issues.
                  </li>
                  <li>
                    <strong>Democracy</strong>: she recognised that responsible
                    environmental governance is impossible without democratic
                    space. The tree became the symbol of the democratic struggle in
                    Kenya, mobilising citizens against corruption, environmental
                    mismanagement and the abuse of power.
                  </li>
                  <li>
                    <strong>Peace</strong>: trees became symbols of peace during
                    ethnic conflicts, honouring traditional African customs.
                    Kikuyu elders carried a staff from the{" "}
                    <Highlight color="green">thigi tree</Highlight> and placed it
                    between disputing factions; the fighting stopped and the sides
                    were reconciled.
                  </li>
                  <li>
                    <strong>Core principle</strong>: equitable development, peace
                    and sustainable environmental management are interdependent
                    and cannot exist without one another in a democratic space.
                  </li>
                </SummaryPart>

                <SummaryPart title="5. The Call to Action and the Closing Image">
                  <li>
                    To <strong>world leaders</strong>: expand democratic spaces
                    and construct fair societies.
                  </li>
                  <li>
                    To <strong>young people</strong>: use your creativity and
                    energy to shape a sustainable future. &ldquo;You are a gift to
                    your communities and indeed, the world. You are our hope and
                    our future.&rdquo;
                  </li>
                  <li>
                    She closes with a childhood memory of fetching water from a
                    stream near her home, drinking directly from it, and watching
                    thousands of energetic, wriggling{" "}
                    <strong>tadpoles</strong> in the clear water against the brown
                    earth.
                  </li>
                  <li>
                    Returning fifty years later, she found the stream completely
                    dried up.
                  </li>
                  <li>
                    The primary challenge of our generation, she says, is to
                    &ldquo;restore the home of the tadpoles&rdquo; and return a
                    world of beauty and wonder to future generations.
                  </li>
                </SummaryPart>
              </div>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="environmental-restoration"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Environmental Restoration as Community Empowerment
            </h3>
            <p>
              Wangari Maathai demonstrates how environmental protection directly
              addresses the <strong>immediate survival needs</strong> of rural
              African women, who are often the first to feel the brunt of
              environmental damage.
            </p>
            <p>
              By organising community tree planting through the Green Belt
              Movement, rural communities planted{" "}
              <Highlight color="green">over 30 million trees</Highlight>,
              providing fuel, food, shelter and income. That simple, practical
              effort restored degraded soil and watersheds while empowering local
              women with <strong>sustainable livelihoods</strong> and a{" "}
              <strong>sense of agency</strong>.
            </p>

            <h3
              id="triad"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              The Triad of Environment, Democracy, and Peace
            </h3>
            <p>
              A central theme of the speech is that sustainable environmental
              management, democratic governance and peace are{" "}
              <Highlight color="yellow">inseparable</Highlight>. Maathai explains
              that protecting resources requires a{" "}
              <strong>democratic space</strong> where citizens can challenge
              corruption and the abuse of power.
            </p>
            <p>
              Drawing on traditional African customs &mdash; such as Kikuyu
              elders placing a staff from the <strong>thigi tree</strong> between
              disputing parties to halt fighting &mdash; the tree also evolved
              into a <strong>symbol of reconciliation</strong>. This shows that
              conflict over scarce resources can be prevented through{" "}
              <strong>equitable development</strong>.
            </p>

            <h3
              id="intergenerational-responsibility"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Intergenerational Responsibility: &ldquo;Restoring the Home of the
              Tadpoles&rdquo;
            </h3>
            <p>
              Maathai uses a poignant personal reflection from her childhood in
              rural Kenya, where she drank clean water straight from a stream
              filled with energetic <strong>tadpoles</strong>, and contrasts it
              with the dried-up stream she found{" "}
              <strong>fifty years later</strong>.
            </p>
            <p>
              She defines the major challenge of our generation as an ethical call
              to <Highlight color="green">heal the Earth</Highlight> and shift
              human consciousness. By expanding democratic spaces and encouraging
              young people to lead sustainable actions, humanity can restore
              nature&rsquo;s wonder for future generations.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Environmental conservation, democracy, and peace are{" "}
              <Highlight color="yellow">inseparable</Highlight>. Wangari
              Maathai&rsquo;s Nobel lecture shows that tree planting is not just
              about ecology &mdash; it is about restoring dignity, empowering
              communities, and building democratic societies. Her closing image
              &mdash; the dried-up stream where tadpoles once swam &mdash; is a
              call to restore &ldquo;the home of the tadpoles and give back to our
              children a world of beauty and wonder.&rdquo;
            </KeyPoint>
          </div>

          <div id="read-and-respond-section" className="mt-14">
            <ReadRespond items={QA_ITEMS} />
            <Expandable title="Grammar Practice — Adverbs, Adverb Phrases, Adverb Clauses">
              <p>
                The passage below is the textbook exercise for this unit. Pick
                out the adverbs, the adverb phrases and the adverb clauses.
              </p>
              <blockquote className="mt-4 border-l-2 border-border pl-4 italic text-foreground/80">
                Helen Keller was deaf and dumb from the time she was a baby. At
                first no one thought she would be capable of learning anything.
                When she was six years old her parents decided to engage a
                teacher for her. At first the teacher, Miss Sullivan, had trouble
                in controlling the child. She could not make her obey because
                Helen always ran to her mother. Finally, Miss Sullivan decided
                that it was absolutely necessary to take Helen away for a while.
              </blockquote>
              <TableCard
                title="Adverbs, adverb phrases and adverb clauses in the passage"
                headers={["Type", "From the passage", "What it does"]}
                rows={ADVERB_ROWS}
              />
              <p className="mt-4">
                <Link
                  className="underline underline-offset-2"
                  href="/grammar/adverb-phrases-and-clauses"
                >
                  Full lesson: Adverbs, Adverb Phrases and Adverb Clauses
                </Link>
              </p>
            </Expandable>
          </div>
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in space-y-4">
          {DISCOURSES.map((section) => (
            <CollapsibleSection key={section.id} id={section.id} title={section.title}>
              {section.content}
            </CollapsibleSection>
          ))}
        </div>
      )}
    </div>
  );
}
