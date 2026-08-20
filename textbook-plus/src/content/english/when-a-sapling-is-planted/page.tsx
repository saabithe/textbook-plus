"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

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
            <Highlight color="green">Green Belt Movement</Highlight> in the
            1970s, an environmental NGO focused on tree planting, environmental
            conservation, and women&rsquo;s rights. Together, they planted over
            <strong> 30 million trees</strong> that provide fuel, food, shelter,
            and income to support families.
          </p>
        </Callout>
        <p>
          The movement began because women in rural Kenya could no longer meet
          their basic needs. The degradation of their environment &mdash;
          combined with commercial farming replacing household food crops
          &mdash; had made survival difficult. Tree planting was chosen because
          it was{" "}
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
          <Highlight color="yellow">democratic space</Highlight>. Citizens were
          mobilized to challenge widespread abuse of power, corruption, and
          environmental mismanagement. The tree became a symbol of Kenya&rsquo;s
          democratic struggle.
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
          reconciliation. Maathai connects this cultural heritage to
          conservation and peace.
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
            <AuthorCard name="Wangari Maathai" />
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
            by Wangari Maathai, delivered in Oslo on December 10, 2004. Maathai
            was the first African woman to receive this prestigious award, in
            recognition of her contribution to sustainable development, democracy,
            and peace.
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
                  <strong>Speaker</strong>: Wangari Maathai &mdash; first
                  African woman Nobel Peace Prize laureate.
                </li>
                <li>
                  <strong>Green Belt Movement</strong>: Planted{" "}
                  <Highlight color="green">30 million trees</Highlight> for
                  fuel, food, shelter, and income.
                </li>
                <li>
                  <strong>Core argument</strong>: No peace without equitable
                  development; no development without environmental management
                  in a democratic space.
                </li>
                <li>
                  <strong>Tree symbol</strong>: Peace, democracy,
                  reconciliation &mdash; rooted in Kikuyu tradition.
                </li>
                <li>
                  <strong>Closing image</strong>: The dried-up stream where
                  tadpoles once swam &mdash; a call to restore beauty and
                  wonder.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Maathai opens with humility, dedicating the prize to the
                  founders of the Green Belt Movement, the women of Kenya,
                  Africa, and the world, and those who have worked for{" "}
                  <Highlight color="yellow">democracy and peace</Highlight>.
                </li>
                <li>
                  She explains that African women are primary caretakers of the
                  land &mdash; they were the first to notice environmental
                  damage. When degradation and commercial farming replaced food
                  crops, women could no longer meet basic needs. International
                  trade controlled export prices, making fair income impossible.
                </li>
                <li>
                  Tree planting was chosen because it was simple, attainable,
                  and guaranteed quick results. Together, they planted over 30
                  million trees providing fuel, food, shelter, and income &mdash;
                  while creating employment and improving{" "}
                  <Highlight color="green">soil and watersheds</Highlight>.
                </li>
                <li>
                  The tree became a symbol of Kenya&rsquo;s{" "}
                  <Highlight color="yellow">democratic struggle</Highlight>.
                  Citizens mobilized against corruption and environmental
                  mismanagement. In Kikuyu tradition, the thigi tree staff
                  placed between disputing sides caused reconciliation.
                </li>
                <li>
                  Maathai calls on world leaders to expand democratic space,
                  and on young people to commit to long-term goals: &ldquo;You
                  are a gift to your communities and indeed, the world.&rdquo;
                </li>
                <li>
                  She closes with a childhood memory of a stream where tadpoles
                  swam &mdash; now dried up. &ldquo;The challenge is to restore
                  the home of the tadpoles and give back to our children a
                  world of beauty and wonder.&rdquo;
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Personal authority</strong>: Maathai speaks as the
                  first African woman to receive the Nobel Peace Prize. Her
                  authority comes not from political office but from decades of
                  grassroots work &mdash; founding the Green Belt Movement in the
                  1970s, mobilizing communities, and facing personal risk for
                  environmental and democratic activism.
                </li>
                <li>
                  <strong>Women and environment</strong>: Maathai establishes a
                  direct link between women&rsquo;s lives and environmental
                  health. African women till the land and feed their families
                  &mdash; they are{" "}
                  <Highlight color="yellow">first to notice</Highlight> when
                  resources become scarce. The degradation of the environment
                  meant they could no longer meet basic needs, and international
                  trade arrangements denied them fair income.
                </li>
                <li>
                  <strong>Why tree planting</strong>: Maathai explains the
                  strategic logic: tree planting is simple, attainable, and
                  guarantees quick, successful results within a reasonable time.
                  This sustains interest and commitment &mdash; a lesson in{" "}
                  <Highlight color="green">grassroots movement design</Highlight>.
                  Over 30 million trees were planted, providing fuel, food,
                  shelter, income, employment, and improved soil and watersheds.
                </li>
                <li>
                  <strong>From ecology to democracy</strong>: The movement
                  initially did not address democracy or peace. But it became
                  clear that responsible environmental governance was impossible
                  without{" "}
                  <Highlight color="yellow">democratic space</Highlight>. The
                  tree became a symbol of the democratic struggle &mdash;
                  citizens mobilized against corruption, abuse of power, and
                  environmental mismanagement.
                </li>
                <li>
                  <strong>Tree as peace symbol</strong>: In Kikuyu tradition,
                  elders carried a staff from the thigi tree that, when placed
                  between disputing sides, caused them to stop fighting and
                  seek reconciliation. Maathai extends this to ethnic conflicts
                  in Kenya &mdash; trees became symbols of peace and conflict
                  resolution, connecting{" "}
                  <Highlight color="green">cultural heritage</Highlight> to
                  conservation.
                </li>
                <li>
                  <strong>Call to action</strong>: Maathai calls on world
                  leaders to expand democratic space and build fair societies.
                  She calls on young people to commit to long-term goals:
                  &ldquo;You are a gift to your communities and indeed, the
                  world. You are our hope and our future.&rdquo;
                </li>
                <li>
                  <strong>The tadpole image</strong>: The speech&rsquo;s most
                  moving moment: Maathai recalls visiting a stream as a child
                  where she drank clean water, played among arrowroot leaves,
                  and watched tadpoles in clear water against brown earth.
                  Today the stream is dried up. &ldquo;The challenge is to
                  restore the home of the tadpoles and give back to our
                  children a world of beauty and wonder.&rdquo; The image
                  encapsulates the entire speech &mdash; loss, memory, and
                  hope.
                </li>
              </ul>
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
              working together. Maathai calls on world leaders, young people, and
              citizens to embrace their role in healing the Earth.
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
