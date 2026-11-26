"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { TableCard } from "@/components/content/data/TableCard";

const QA_ITEMS = [
  {
    question: "Of all the memories of his homeland, the narrator thinks of 'rice' first. What does this show?",
    answer: (
      <>
        Rice represents the narrator&rsquo;s{" "}
        <Highlight color="yellow">deepest connection to home</Highlight>.
        After four years of eating chapaties in North India, his first desire
        is for a meal of athikira rice. This shows that food is intertwined
        with identity, belonging, and the sensory memories of childhood.
      </>
    ),
  },
  {
    question: "What are the memories of the narrator about the paddy cultivating season?",
    answer: (
      <>
        Part I paints a vivid picture: his father in a mud-stained dhoti,
        excited about canal waters, greeting him from the fields amidst the
        shouts of ploughing. His little brother carries tender saplings. His
        mother drains well-cooked rice. These are{" "}
        <Highlight color="green">warm, active memories</Highlight> of a
        community engaged in rice cultivation.
      </>
    ),
  },
  {
    question: "The narrator wants the train to move a little faster. What does this tell us about his feeling for his native village?",
    answer: (
      <>
        The plea &ldquo;O train, will you run a little faster&rdquo; reveals{" "}
        <Highlight color="yellow">deep longing and impatience</Highlight>.
        After years away, the narrator cannot wait to reach home and eat his
        fill of athikira rice. The urgency is emotional &mdash; home is not
        just a place but a sensory experience he craves.
      </>
    ),
  },
  {
    question: "What changes in the native village does the narrator notice on his return?",
    answer: (
      <>
        Rubber plants have replaced paddy fields. Arecanut palms and dealwood
        trees stand where rice was once grown. There is no bustle of men, no
        shouts of ploughing. The village has{" "}
        <Highlight color="pink">shifted from rice to cash crops</Highlight>{" "}
        &mdash; a transformation that fills the narrator with a sense of loss.
      </>
    ),
  },
  {
    question: "Rubber plants have taken the place of paddy. What does this imply?",
    answer: (
      <>
        The replacement of paddy with rubber implies the{" "}
        <Highlight color="blue">commercialization of agriculture</Highlight>{" "}
        &mdash; farmers have abandoned food crops for more profitable cash
        crops. It signals the erosion of self-sufficiency and traditional
        farming, and the growing dependence on government rations.
      </>
    ),
  },
  {
    question: "'Only fools turn to rice-farming for gain'. Why does the father say so?",
    answer: (
      <>
        The father&rsquo;s statement is{" "}
        <Highlight color="yellow">bitter irony</Highlight>. Rice farming has
        become economically unviable &mdash; the government itself distributes
        rice to those without paddy fields. The father has proudly shifted to
        rubber, but the narrator recognizes the tragedy: a community that once
        fed itself now depends on handouts.
      </>
    ),
  },
  {
    question: "What does 'ship of the sky' represent?",
    answer: (
      <>
        The &ldquo;ship of the sky&rdquo; is an{" "}
        <Highlight color="blue">airplane</Highlight> &mdash; carrying the Chief
        Minister to the Centre to &ldquo;clamour for more grains.&rdquo; It
        symbolizes the disconnect between political power and the reality of
        farming communities. The farmer flies above the cash crops while the
        people below go hungry.
      </>
    ),
  },
  {
    question: "'Can we get some husk from the Centre, too, to make toys with it?' Bring out the satire in these lines?",
    answer: (
      <>
        This closing line is the poem&rsquo;s{" "}
        <Highlight color="yellow">sharpest satirical stroke</Highlight>. The
        narrator&rsquo;s doctoral research was on making toys with rice husk
        &mdash; a topic now irrelevant because rice is no longer grown.
        The question mocks a system where the Centre supplies rice (not
        self-grown) and where education leads to skills that the changing
        landscape makes useless.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "poetic-devices",
    title: "Poetic Devices",
    content: (
      <>
        <h3
          id="device-imagery"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Imagery
        </h3>
        <p>
          Part I is rich with{" "}
          <Highlight color="green">sensory imagery</Highlight> &mdash; the
          father&rsquo;s mud-stained dhoti, the shouts of ploughing, the
          mother draining well-cooked rice. Part II contrasts this with the
          absence of the same images: no bustle, no shouts, only rubber plants
          standing in rows.
        </p>
        <h3
          id="device-satire"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Satire
        </h3>
        <p>
          The poem is a masterclass in{" "}
          <Highlight color="yellow">understated satire</Highlight>. The
          father&rsquo;s pride in abandoning rice, the government distributing
          rice to those without fields, the Chief Minister flying to
          &ldquo;clamour for more grains&rdquo; &mdash; each detail quietly
          exposes the absurdity of a system that has abandoned
          self-sufficiency.
        </p>
        <h3
          id="device-contrast"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Contrast
        </h3>
        <p>
          The two-part structure creates a devastating contrast: Part I is{" "}
          <Highlight color="blue">longing and memory</Highlight>, Part II is
          disillusionment and reality. The narrator&rsquo;s eagerness to
          &ldquo;eat a full meal of athikira rice&rdquo; in Part I collides
          with the father&rsquo;s declaration that rice farming is for
          &ldquo;fools&rdquo; in Part II.
        </p>
      </>
    ),
  },
  {
    id: "symbolism",
    title: "Symbolism",
    content: (
      <>
        <TableCard
          title="What each symbol stands for"
          headers={["Symbol", "What it represents"]}
          rows={[
            {
              cells: [
                <em key="athikira">Athikira rice</em>,
                "Cultural identity, indigenous heritage, health and native warmth.",
              ],
            },
            {
              cells: [
                "Rubber sheets and machines",
                "Commercial greed, capitalist convenience and the death of traditional farming culture.",
              ],
            },
            {
              cells: [
                <span key="ship">
                  &ldquo;Ship of the sky&rdquo; (aeroplane)
                </span>,
                "Political hypocrisy: the Chief Minister flies over cash crop fields to beg the Centre for grain instead of encouraging local rice farming.",
              ],
            },
          ]}
        />
        <KeyPoint title="Irony and satire">
          The father calls rice farming &ldquo;fools&rsquo; work&rdquo; while the
          brother scatters imported wheat in a household that once harvested
          abundant rice.
        </KeyPoint>
      </>
    ),
  },
];

export default function RicePage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro author="Chemmanam Chacko" role="Poet" subname="Translated by Prof. K. Ayyappa Paniker" genre="Poem (translated from Malayalam)" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Rice</em> is a poem by{" "}
            <Highlight color="yellow">Chemmanam Chacko</Highlight>, a master
            satirist of Malayalam poetry, translated into English by K. Ayyappa
            Paniker.
          </p>
          <p>
            Chacko is known for pungent verse that reacts to his surroundings
            with sharp observation.
          </p>
          <p>
            The poem is divided into two parts. Part I is a nostalgic
            imagination of returning home during planting season, eager for a
            meal of <Highlight color="green">athikira rice</Highlight> (a native
            Kerala variety).
          </p>
          <p>
            Part II is the disillusioning reality &mdash; paddy fields have been
            replaced by rubber and cash crops, and the community has lost its
            agricultural identity.
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
                  <strong>Poet</strong>: Chemmanam Chacko &mdash; Malayalam
                  satirist, born 1926.
                </li>
                <li>
                  <strong>Part I</strong>: Narrator imagines returning home
                  during planting season, eager for{" "}
                  <Highlight color="green">athikira rice</Highlight>.
                </li>
                <li>
                  <strong>Part II</strong>: Reality &mdash; paddy replaced by
                  rubber, arecanut, and dealwood. Father proudly says rice
                  farming is for &ldquo;fools.&rdquo;
                </li>
                <li>
                  <strong>Satire</strong>: Chief Minister flies to Centre to
                  &ldquo;clamour for more grains.&rdquo; Government gives rice
                  to those without fields.
                </li>
                <li>
                  <strong>Closing</strong>: &ldquo;Can we get some husk from
                  the Centre, too, to make toys with it?&rdquo;
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Part I is a vivid{" "}
                  <Highlight color="yellow">nostalgic imagining</Highlight> of
                  homecoming. The narrator, bored with chapaties after four
                  years of research in North India, dreams of athikira rice.
                  His father in a mud-stained dhoti, his brother carrying
                  saplings, his mother draining rice &mdash; all are warm,
                  active images of agricultural life.
                </li>
                <li>
                  The narrator pleads with the train to run faster &mdash; a
                  small, human detail that reveals{" "}
                  <Highlight color="blue">deep longing</Highlight>. He wants
                  to reach home in time, just as his mother drains the
                  well-cooked rice.
                </li>
                <li>
                  Part II shatters the dream. The bus stops; palm-thatched
                  houses are gone. Rubber plants stand where paddy was sown.
                  There is no bustle, no shouts of ploughing. The whole field
                  is planted with arecanut and dealwood.
                </li>
                <li>
                  The father proudly announces they&rsquo;ve stopped rice
                  farming: &ldquo;Only fools turn to rice-farming for
                  gain.&rdquo; He watches with contentment as workers fix a
                  rubber sheet machine. The government gives rice to those
                  without paddy fields.
                </li>
                <li>
                  The little brother scatters the household rations. An
                  airplane &mdash; the &ldquo;ship of the sky&rdquo; &mdash;
                  carries the Chief Minister to the Centre to{" "}
                  <Highlight color="pink">clamour for more grains</Highlight>.
                  The poem closes with a devastating satirical question about
                  getting husk from the Centre to make toys.
                </li>
              </ul>
            }
            detailed={
              <>
                <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
                  1. What He Expected (His Dream)
                </h3>
                <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                  <li>
                    <strong>Returning home.</strong> The narrator comes back to
                    his village in Kerala after completing four years of
                    doctoral research (Ph.D.) in North India. Ironically, his
                    research topic was &ldquo;making toys out of rice
                    husk&rdquo;.
                  </li>
                  <li>
                    <strong>Craving native food.</strong> Tired of eating wheat
                    chapaties every day in the North, he eagerly looks forward
                    to a hot meal of native{" "}
                    <Highlight color="green">athikira rice</Highlight> cooked by
                    his mother.
                  </li>
                  <li>
                    <strong>Happy farming memories.</strong> He imagines
                    arriving during the planting season:
                    <ul className="mt-2 space-y-1.5">
                      <li>
                        His <strong>father</strong> standing in the muddy field
                        in a dhoti, directing canal water amidst the shouts of
                        oxen ploughing.
                      </li>
                      <li>
                        His <strong>little brother</strong> running happily with
                        tender paddy saplings to plant.
                      </li>
                      <li>
                        His <strong>mother</strong> draining freshly cooked rice
                        just as he walks into the house.
                      </li>
                    </ul>
                  </li>
                  <li>
                    He urges the train to run faster so that he can reach home
                    quickly and eat his fill.
                  </li>
                </ul>

                <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
                  2. What He Actually Found (The Reality)
                </h3>
                <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                  <li>
                    <strong>No paddy fields.</strong> When he gets off the bus
                    he is shocked to see that the village has completely
                    changed. The old paddy fields (<em>modan</em> and{" "}
                    <em>vellaran</em>) are gone.
                  </li>
                  <li>
                    <strong>Cash crops everywhere.</strong> Instead of rice, the
                    land is covered with rubber plants, arecanut palms and
                    dealwood trees.
                  </li>
                  <li>
                    <strong>The father&rsquo;s explanation.</strong> He finds
                    his father happily setting up a machine to make rubber
                    sheets. His father proudly tells him that they stopped
                    growing rice because it brings no profit &mdash;{" "}
                    <Highlight color="yellow">
                      &ldquo;only fools turn to rice-farming for gain&rdquo;
                    </Highlight>
                    . Growing cash crops makes better money, and the government
                    gives ration rice anyway.
                  </li>
                  <li>
                    <strong>Ration wheat.</strong> While the narrator waits for
                    athikira rice, his little brother runs in carrying{" "}
                    <Highlight color="pink">government ration wheat</Highlight>,
                    trips, and spills the grains across the yard.
                  </li>
                  <li>
                    <strong>The Chief Minister in the airplane.</strong> An
                    airplane, the &ldquo;ship of the sky&rdquo;, roars overhead.
                    It carries the Chief Minister to New Delhi to ask the
                    Central Government for food grains, flying right above the
                    cash crop fields below.
                  </li>
                  <li>
                    <strong>The final satiric joke.</strong> Realising that no
                    one grows paddy any more, the narrator wonders sarcastically
                    whether he can get some husk from the Central Government to
                    make his toys.
                  </li>
                </ul>
              </>
            }
          />

          {/* Themes */}
          <div id="themes">
            <p>
              The poem turns on five ideas, and each one carries a part of its
              argument.
            </p>

            <h3
              id="theme-expectation"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              1. Expectation versus Reality
            </h3>
            <p>
              The narrator&rsquo;s warm, traditional memories of an agricultural
              society meet the stark, commercialised reality that awaits him.
            </p>
            <p>
              On the train he begs for speed; off the bus he steps into a village
              he no longer recognises.
            </p>

            <h3
              id="theme-crops"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              2. Food Crops versus Cash Crops
            </h3>
            <p>
              Farmers abandon sustainable food production &mdash;{" "}
              <em>athikira</em>, <em>modan</em> and <em>vellaran</em> paddy
              &mdash; for quick commercial gain from rubber and arecanut palms.
            </p>
            <p>
              The father states the trade plainly: rice gave the farmer nothing,
              and the new crops give better money.
            </p>

            <h3
              id="theme-self-reliance"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              3. Loss of Self-Reliance and Identity
            </h3>
            <p>
              By abandoning paddy cultivation, the state turns from a
              self-sufficient producer of food into a consumer dependent on
              ration shops and central aid.
            </p>
            <p>
              Rubber plants, arecanut palms and dealwood trees now stand where
              the fields were, so the community that once grew its own food waits
              for <Highlight color="pink">government rations</Highlight>.
            </p>

            <h3
              id="theme-governance"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              4. Satire on Governance
            </h3>
            <p>
              The Chief Minister flying to the Centre to &ldquo;clamour for more
              grains&rdquo; is a sharp critique of{" "}
              <Highlight color="yellow">political dependency</Highlight>.
            </p>
            <p>
              The government distributes rice to those without paddy fields
              &mdash; but the real question is why the fields were abandoned in
              the first place.
            </p>

            <h3
              id="theme-education"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              5. Satire on Higher Education
            </h3>
            <p>
              The narrator spends four years earning a doctorate on making toys
              out of rice husk, and returns to find that no one grows paddy any
              more.
            </p>
            <p>
              There is no husk left for the research, so the degree he was
              praised for has outlived its own subject.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              <em>Rice</em> is a quiet elegy for a vanishing way of life. Through
              the contrast between nostalgic memory and harsh reality, Chemmanam
              Chacko exposes the cost of abandoning agriculture for cash crops.
              The poem&rsquo;s final satirical question &mdash; about getting husk
              from the Centre &mdash; captures the irony of a system that has
              traded{" "}
              <Highlight color="yellow">self-sufficiency for dependency</Highlight>.
            </KeyPoint>
          </div>

          <div id="read-and-respond-section" className="mt-14">
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
