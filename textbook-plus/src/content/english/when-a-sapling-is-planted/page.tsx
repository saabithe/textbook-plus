"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

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
    question: "What is the role of bio-diversity in maintaining environmental balance?",
    answer: (
      <>
        Biodiversity maintains the{" "}
        <Highlight color="green">ecological balance</Highlight> that sustains
        all life. Wangari Maathai describes the degradation of ecosystems
        through deforestation, climatic instability, and soil and water
        contamination &mdash; all of which disrupt biodiversity and lead to
        poverty, resource conflicts, and the loss of natural heritage. The
        Green Belt Movement planted over 30 million trees to restore this
        balance.
      </>
    ),
  },
  {
    question: "How does Wangari Maathai link tree planting to democracy?",
    answer: (
      <>
        Tree planting became a symbol of the{" "}
        <Highlight color="yellow">democratic struggle</Highlight> in Kenya.
        Maathai explains that responsible governance of the environment was
        impossible without democratic space. Citizens were mobilized to
        challenge corruption, abuse of power, and environmental mismanagement
        &mdash; the tree became a rallying symbol for this movement.
      </>
    ),
  },
  {
    question: "What is the symbolic significance of the tree in the speech?",
    answer: (
      <>
        The tree symbolizes{" "}
        <Highlight color="green">peace, democracy, and reconciliation</Highlight>.
        In the Kikuyu tradition, elders carried a staff from the thigi tree
        that, when placed between disputing sides, caused them to stop
        fighting. Maathai extends this tradition &mdash; the tree represents
        both environmental conservation and cultures of peace.
      </>
    ),
  },
  {
    question: "How does the speaker connect environmental degradation to poverty?",
    answer: (
      <>
        Women were the first to notice environmental damage as resources
        became scarce. International trade controlled export prices, so
        small-scale farmers could not earn a reasonable income. When the
        environment is destroyed, she argues, we{" "}
        <Highlight color="pink">undermine the quality of life</Highlight> for
        current and future generations, leading to poverty and conflict.
      </>
    ),
  },
  {
    question: "What message does the speech convey to young people?",
    answer: (
      <>
        Maathai calls on young people to{" "}
        <Highlight color="yellow">commit to activities</Highlight> that
        contribute toward long-term goals. She says they have the energy and
        creativity to shape a sustainable future: &ldquo;You are a gift to
        your communities and indeed, the world. You are our hope and our
        future.&rdquo;
      </>
    ),
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
              id="environmental-justice"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Environmental Justice
            </h3>
            <p>
              Maathai argues that environmental degradation is not just an ecological
              issue but a{" "}
              <Highlight color="pink">justice issue</Highlight>. When the
              environment is destroyed, the poorest suffer first &mdash; women who
              till the land, families who depend on clean water, children who will
              never know what they have lost.
            </p>
            <h3
              id="collective-action"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Collective Action
            </h3>
            <p>
              The speech emphasizes that change comes through{" "}
              <Highlight color="yellow">collective effort</Highlight>. Over 30
              million trees were planted not by one person but by communities
              working together.
            </p>
            <p>
              Maathai calls on world leaders, young people, and citizens to
              embrace their role in healing the Earth.
            </p>
            <h3
              id="interconnectedness"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Interconnectedness
            </h3>
            <p>
              Maathai draws a powerful connection: there can be no peace without
              equitable development, and no development without sustainable
              environmental management in a{" "}
              <Highlight color="green">democratic and peaceful space</Highlight>.
              Environment, democracy, peace, and development are inseparable.
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
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">Read &amp; Respond</h2>
            <ReadRespond items={QA_ITEMS} />
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
