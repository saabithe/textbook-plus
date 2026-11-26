"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { Expandable } from "@/components/content/Expandable";
import { TableCard } from "@/components/content/data/TableCard";

const QA_ITEMS = [
  {
    question:
      "Of all the memories of his homeland, the narrator thinks of 'rice' first. What does this show?",
    answer: (
      <>
        Rice stands for{" "}
        <Highlight color="yellow">home, love and tradition</Highlight> &mdash; a
        deep attachment to the family life and the paddy culture he grew up in.
      </>
    ),
  },
  {
    question: "What are the memories of the narrator about the paddy cultivating season?",
    answer: (
      <ul>
        <li>His father in a mud-stained dhoti</li>
        <li>Oxen ploughing</li>
        <li>Water in the canal</li>
        <li>His brother carrying tender saplings</li>
        <li>
          His mother draining <em>athikira</em> rice
        </li>
      </ul>
    ),
  },
  {
    question:
      "The narrator wants the train to move a little faster. What does this tell us about his feeling for his native village?",
    answer: (
      <>
        <Highlight color="yellow">Homesick and excited</Highlight> &mdash; eager
        to reach his family and taste home food, with a strong longing for the
        village.
      </>
    ),
  },
  {
    question: "What changes in the native village does the narrator notice on his return?",
    answer: (
      <ul>
        <li>Paddy fields disappeared</li>
        <li>Rubber, arecanut and dealwood replaced them</li>
        <li>Father sets up a rubber-sheeting machine</li>
        <li>Family brings ration wheat</li>
      </ul>
    ),
  },
  {
    question: "Rubber plants have taken the place of paddy. What does this imply?",
    answer: (
      <>
        Cash crops replaced food crops for profit, which{" "}
        <Highlight color="pink">lowers self-sufficiency</Highlight> and raises
        dependence on outside grain.
      </>
    ),
  },
  {
    question: "'Only fools turn to rice-farming for gain.' Why does the father say so?",
    answer: (
      <>
        Paddy meant hard work and low returns; rubber meant better, easier
        income, so the family abandoned rice farming.
      </>
    ),
  },
  {
    question: "What does 'ship of the sky' represent?",
    answer: (
      <>
        An <Highlight color="blue">airplane</Highlight> carrying the Chief
        Minister to the Centre to request more grain.
      </>
    ),
  },
  {
    question:
      "'Can we get some husk from the Centre, too, to make toys with it?' Bring out the satire in these lines.",
    answer: (
      <>
        It mocks the total dependence that followed the abandonment of rice
        &mdash;{" "}
        <Highlight color="yellow">
          even cheap husk may have to be begged for
        </Highlight>{" "}
        &mdash; and exposes misplaced priorities and policy failure.
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
  {
    id: "examples-of-satire",
    title: "Examples of Satire",
    content: (
      <>
        <p>
          The question asks you to cite the instances of satire that surround the
          shift from paddy cultivation to rubber planting.
        </p>
        <p>
          Chemmanam Chacko uses sharp satire throughout the poem to expose
          societal hypocrisy.
        </p>
        <TableCard
          title="Four instances of satire"
          headers={["Instance", "In the poem", "The satire"]}
          rows={[
            {
              cells: [
                "Father's pride in quitting rice farming",
                "He calls rice farming \u201cinconvenient\u201d and says \u201conly fools turn to rice-farming for gain.\u201d",
                "Pride in abandoning food independence.",
              ],
            },
            {
              cells: [
                "Ration wheat instead of native rice",
                "The narrator craves athikira rice; his brother trips and spills government ration wheat across the yard.",
                "Home-grown food replaced by government charity.",
              ],
            },
            {
              cells: [
                "The flying Chief Minister",
                "His plane, the \u201cship of the sky\u201d, crosses tall cash-crop fields to beg New Delhi for grain.",
                "A state that cannot feed itself still flies to ask.",
              ],
            },
            {
              cells: [
                "The irony of the Ph.D. degree",
                "Four years of research on toys from rice husk, but no paddy is grown to supply husk.",
                "Higher education outlives its own subject.",
              ],
            },
          ]}
          caption="Each instance pairs a proud claim with the loss it hides."
        />
      </>
    ),
  },
  {
    id: "appreciation",
    title: "Poem Appreciation",
    content: (
      <>
        <p>
          A model appreciation written to the single-poem format on the
          Discourses page.
        </p>
        <p>
          It moves through four parts: poet and title; summary and central idea;
          devices and style; message and personal response.
        </p>

        <h3
          id="app-introduction"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          I. Introduction &mdash; Poet, Title, Mood and Theme
        </h3>
        <p>
          <em>Rice</em> is a beautiful, thought-provoking and inspiring poem.
        </p>
        <p>
          It was written by{" "}
          <Highlight color="yellow">Chemmanam Chacko</Highlight> and translated
          by K. Ayyappa Paniker.
        </p>
        <p>
          Through it the poet presents a <strong>deep insight</strong> into the
          shift from paddy cultivation to cash crops, and the loss of food
          self-reliance that follows.
        </p>
        <p>
          The <strong>title</strong> is a gateway to that idea: rice is the food
          at the centre of memory and the crop that has vanished from the fields.
        </p>
        <p>
          The <strong>mood</strong> is warm nostalgia in Part I and
          disillusionment in Part II, and the tone stays soft yet sharply ironic.
        </p>

        <h3
          id="app-summary-theme"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          II. Summary and Central Idea
        </h3>
        <p>
          The poem revolves around a narrator who returns to his village after
          four years of doctoral research in North India, dreaming of a hot meal
          of <Highlight color="green">athikira rice</Highlight>.
        </p>
        <p>He remembers the planting season:</p>
        <ul>
          <li>His father in a mud-stained dhoti, directing canal water</li>
          <li>Oxen ploughing</li>
          <li>His little brother running with tender paddy saplings</li>
          <li>His mother draining freshly cooked rice</li>
        </ul>
        <p>
          Instead he finds rubber rows where paddy once grew, a rubber-sheeting
          machine in the yard, and ration wheat in his brother&rsquo;s hands.
        </p>
        <p>
          The <strong>central idea</strong> is that chasing profit can erode food
          security, culture and the taste of home.
        </p>

        <h3
          id="app-devices"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          III. Poetic Devices, Language, Tone and Style
        </h3>
        <p>
          The poem works through <strong>contrast</strong>: the expected world of
          food crops and community work against the actual world of cash crops
          and machines.
        </p>
        <p>
          Its humour is gentle and its irony sharp. The father&rsquo;s
          &ldquo;only fools turn to rice-farming for gain&rdquo; sounds funny and
          reveals the sad shift to easy money in rubber.
        </p>
        <p>
          The &ldquo;ship of the sky&rdquo; has leaders flying to ask for grain
          because no one grows rice locally, and the closing plea for husk from
          the Centre pushes dependence to an absurd limit.
        </p>
        <p>
          The <strong>language</strong> is simple and plain, the village pictures
          are vivid, and the irony is soft yet powerful.
        </p>
        <p>
          The <strong>tone</strong> is warm with love for home and painful with
          the loss of old ways.
        </p>

        <h3
          id="app-critical"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          IV. Conclusion &mdash; Message, Personal Response and Favourite Lines
        </h3>
        <p>
          In conclusion, <em>Rice</em> is a meaningful and memorable poem whose
          message is timeless: chasing profit can erode food security, culture
          and the taste of home.
        </p>
        <p>
          The poem asks readers to weigh what a village gains in cash against
          what it loses in the taste of home rice, the rhythm of seasons and the
          dignity of feeding oneself.
        </p>
        <p>
          My <strong>favourite lines</strong> are &ldquo;only fools turn to
          rice-farming for gain&rdquo; because the father&rsquo;s pride makes the
          loss of food independence sting.
        </p>
        <p>
          Overall, the poem is an inspiring and worthwhile piece of literature
          that deserves appreciation.
        </p>
      </>
    ),
  },
  {
    id: "write-up",
    title: "Write-Up",
    content: (
      <>
        <p>
          Activity II asks for a write-up on <em>Rice</em> as a satire on farmers
          forced to switch to cash crops when the market for food crops fell.
        </p>

        <h3
          id="write-up-question"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Question
        </h3>
        <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
          <p>
            Chemmanam Chacko is a master satirist who has fought many a battle
            with the system through his writings, laced with scorn and sarcasm.
          </p>
          <p>
            He says, &ldquo;Socio-political sphere is much meek and limited
            compared with earlier times.&rdquo;
          </p>
          <p>
            &ldquo;Society has changed and, with it, have the mass
            sensibilities.&rdquo;
          </p>
          <p>
            Consider his poem &ldquo;Rice&rdquo; as a satire on the farmers who
            are forced to switch to cash crops when the market for food crops
            fell. Prepare a write-up.
          </p>
        </blockquote>

        <h3
          id="write-up-model"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Model Write-Up
        </h3>
        <p className="t-micro">About 250 words · title, information, significance</p>
        <Expandable
          title="Model write-up — a biting satire on commercialised farming"
          variant="example"
        >
          <p className="text-base font-bold tracking-tight text-foreground">
            Rice: A Biting Satire on Commercialized Farming and Lost
            Self-Reliance
          </p>
          <p>
            Chemmanam Chacko is a master satirist in Malayalam literature.
          </p>
          <p>
            His poem <em>Rice</em>, translated by K. Ayyappa Paniker, delivers a
            sharp socio-political critique of how commercial market forces have
            destroyed traditional agriculture in Kerala.
          </p>
          <p>
            Through humour, irony and sarcasm, he exposes the tragic shift from
            sustainable food crops to lucrative cash crops.
          </p>

          <h4>1. Market realities versus agrarian tradition</h4>
          <p>
            The narrator returns to his native village after four years of
            doctoral research in North India, dreaming of a warm home-cooked
            meal of native <em>athikira</em> rice.
          </p>
          <p>
            He is shocked to find the paddy fields (<em>modan</em> and{" "}
            <em>vellaran</em>) gone, replaced by tall rows of rubber trees and
            arecanut palms.
          </p>
          <p>
            The farmer father proudly justifies the shift: rice farming is
            financially inconvenient, and &ldquo;only fools turn to rice-farming
            for gain.&rdquo;
          </p>
          <p>
            Driven by market demand and quick profit, farmers voluntarily abandon
            essential food production for cash crops.
          </p>

          <h4>2. The irony of dependency</h4>
          <p>
            Chacko satirizes the absurdity of a society that gives up its food
            security for commercial convenience.
          </p>
          <p>
            The family that once harvested abundant native rice now relies on{" "}
            <Highlight color="pink">government ration wheat</Highlight> brought
            home by the little brother.
          </p>
          <p>
            The lively sounds of ploughing give way to machines, and communal
            work gives way to plantation routines.
          </p>
          <p>
            The satire reaches its peak with the Chief Minister&rsquo;s airplane,
            the &ldquo;ship of the sky&rdquo;. It flies over tall cash-crop fields
            to beg the Central Government in New Delhi for food grains.
          </p>

          <h4>3. The final satirical punchline</h4>
          <p>
            The poem closes on the ultimate irony. The narrator spent four years
            earning a doctorate on making toys from rice husk, only to find that
            no paddy is left, and therefore no husk.
          </p>
          <p>
            He wonders sarcastically whether the Chief Minister can request husk
            from the Centre too.
          </p>
          <p>
            The tone is not cruel. It understands why families chose profit, but
            it asks what is lost: the taste of home rice, the rhythm of seasons
            and the dignity of feeding oneself.
          </p>

          <h4>Conclusion</h4>
          <p>
            Through <em>Rice</em>, Chemmanam Chacko warns society about the
            dangers of prioritizing short-term market profits over sustainable
            food production.
          </p>
          <p>
            The poem is a powerful reminder that a society which trades its food
            security for cash crops ultimately surrenders its independence and
            cultural heritage.
          </p>
        </Expandable>
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

          <h2
            id="central-theme"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Central Theme
          </h2>
          <p>
            The poem contrasts a homecoming imagined in warmth and abundance with a village where paddy has given way to cash crops and food must be begged from the Centre. Through that contrast it satirises the abandonment of food self-reliance for profit.
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
