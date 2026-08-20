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

const POEM_LINES_PART1 = [
  "I come home at the end of four years of research",
  "in North India, having earned a doctoral degree",
  "and generous praise for my work on making toys with husk;",
  "bored with eating chapaties day after day,",
  "I'm eager to eat a meal of athikira rice.",
  "",
  "It will be the planting season when I get there,",
  "and my father—his handloom dhoti stained with yellow mud,",
  "excited about the waters of the Varanganal canal—",
  "will greet me from the fields below our house,",
  "amidst the shouts of ploughing with several oxen.",
  "",
  "The oxen will stop when they see me",
  "walking with my suitcase, and my father,",
  "without smiling the smile slowly forming on his lips,",
  "will call from the field: 'And when did you start from there?'",
  "",
  "My little brother, carrying the tender saplings",
  "to be planted in the field where the ploughing is done,",
  "will run when he sees me, and call out loud",
  "within earshot of the house: 'Mother, brother's arrived!'",
  "",
  "Walking cautiously along the dyke",
  "so as not to upset the baskets full of seed,",
  "I'll reach home in good time, at last,",
  "just as my mother drains the well-cooked rice.",
  "",
  "O train, will you run a little faster—",
  "let me get home quickly and eat my fill.",
];

const POEM_LINES_PART2 = [
  "The bus stops on the road across from the house.",
  "When I left this place, palm-thatched houses could be seen",
  "in the distance on the right--but now there's nothing,",
  "except for trees. How the place has changed!",
  "",
  "Rubber plants, twice my height,",
  "now stand in rows around me on the ridge",
  "where modan and vellaran used to be sown,",
  "and confuse my path as I walk home.",
  "",
  "There's no bustle of men below,",
  "no shouts of ploughing; and when I look,",
  "the whole field is planted over with arecanut palms,",
  "and in the corner, along the canal, stand the dealwood trees.",
  "",
  "I enter the house. Beyond the southern wing,",
  "my father's watching them fix up the machine",
  "for making rubber sheets--how happy",
  "and contented the look on his face!",
  "",
  "My father says, with obvious pride:",
  "'Son, we've stopped working on all the rice.",
  "It was quite inconvenient. The farmer gained nothing-",
  "only fools turn to rice-farming for gain.",
  "This is better money--what good times!",
  "The government gives rice to those who don't have paddy fields.'",
  "",
  "My little brother runs in to meet me--",
  "I, eager to have a full meal of athikira rice.",
  "He's carrying the rations for the whole household--",
  "He trips over something and scatters the wheat all over the yard.",
  "",
  "Above us, a 'ship of the sky' roars northwards,",
  "drowning my brother's loud cries--",
  "the Chief Minister's off like an arrow to the Centre",
  "to clamour for more grains, now flying high",
  "above the cash crops, now growing tall like the trees,",
  "since no one here promotes the farming of rice.",
  "",
  "Can we get some husk from the Centre, too,",
  "to make toys with it? I don't know.",
];

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
    id: "the-poem",
    title: "The Poem",
    content: (
      <div className="rounded-xl border border-border/40 bg-muted/20 p-6">
        <p className="text-sm text-muted-foreground mb-4 italic">
          Chemmanam Chacko (translated by Prof. K. Ayyappa Paniker)
        </p>
        <h4 className="text-foreground font-semibold mb-3">Part I</h4>
        <div className="space-y-1 text-foreground/90 text-[1.0625rem] leading-[1.85] mb-6">
          {POEM_LINES_PART1.map((line, i) =>
            line === "" ? (
              <div key={i} className="h-3" />
            ) : (
              <p key={i}>{line}</p>
            )
          )}
        </div>
        <h4 className="text-foreground font-semibold mb-3">Part II</h4>
        <div className="space-y-1 text-foreground/90 text-[1.0625rem] leading-[1.85]">
          {POEM_LINES_PART2.map((line, i) =>
            line === "" ? (
              <div key={i} className="h-3" />
            ) : (
              <p key={i}>{line}</p>
            )
          )}
        </div>
      </div>
    ),
  },
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
    id: "appreciation",
    title: "Poem Appreciation",
    content: (
      <>
        <Callout type="important">
          <p>
            <em>Rice</em> by Chemmanam Chacko is a satirical poem about the
            decline of traditional rice farming in Kerala. Written in Malayalam
            and translated by Prof. K. Ayyappa Paniker, the poem uses personal
            memory and social commentary to expose the tragedy of agricultural
            commercialization.
          </p>
        </Callout>
        <p>
          The poem&rsquo;s power lies in its restraint. The narrator never
          explicitly criticizes the shift from paddy to cash crops &mdash; he
          simply presents the contrast between memory and reality, letting the
          reader feel the loss. The father&rsquo;s pride, the scattered wheat,
          the airplane roaring overhead &mdash; each image carries its own
          quiet indictment.
        </p>
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
            <AuthorCard name="Chemmanam Chacko" />
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
            satirist of Malayalam poetry, translated into English by Prof. K.
            Ayyappa Paniker. Born in 1926 in Mulakulam, Kerala, Chacko is known
            for pungent verse that reacts to his surroundings with sharp
            observation.
          </p>
          <p>
            The poem is divided into two parts. Part I is a nostalgic
            imagination of returning home during planting season, eager for a
            meal of{" "}
            <Highlight color="green">athikira rice</Highlight> (a native
            Kerala variety). Part II is the disillusioning reality &mdash;
            paddy fields have been replaced by rubber and cash crops, and the
            community has lost its agricultural identity.
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
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Part I &mdash; nostalgic longing</strong>: The
                  narrator imagines returning home with a doctoral degree and
                  &ldquo;generous praise for my work on making toys with
                  husk.&rdquo; His first desire is athikira rice. The
                  imagery is warm and specific: father in a mud-stained dhoti,
                  excited about canal waters; brother carrying tender saplings;
                  mother draining rice. The plea &ldquo;O train, will you run
                  a little faster&rdquo; reveals the urgency of{" "}
                  <Highlight color="yellow">emotional homecoming</Highlight>.
                </li>
                <li>
                  <strong>Part II &mdash; disillusionment</strong>: The
                  reality is devastating. Rubber plants have replaced paddy.
                  Arecanut palms and dealwood trees stand where rice grew.
                  No bustle of men, no shouts of ploughing. The narrator
                  enters the house to find his father watching workers fix
                  a rubber sheet machine &ldquo;with obvious pride.&rdquo;
                </li>
                <li>
                  <strong>The father&rsquo;s declaration</strong>: &ldquo;We&rsquo;ve
                  stopped working on all the rice. It was quite inconvenient.
                  The farmer gained nothing &mdash; only fools turn to
                  rice-farming for gain.&rdquo; This is{" "}
                  <Highlight color="yellow">bitter irony</Highlight> &mdash;
                  the father speaks with pride, but the narrator hears loss.
                  The government gives rice to those without paddy fields,
                  creating a system of dependency.
                </li>
                <li>
                  <strong>Satirical images</strong>: The little brother
                  scatters wheat &mdash; a domestic image of waste. The
                  &ldquo;ship of the sky&rdquo; roars northwards, carrying
                  the Chief Minister to &ldquo;clamour for more grains.&rdquo;
                  He flies above the cash crops, now growing tall like trees,
                  since no one promotes rice farming.
                </li>
                <li>
                  <strong>Closing satire</strong>: The narrator&rsquo;s
                  doctoral research was on making toys with rice husk &mdash;
                  a skill rendered useless by the shift from paddy to cash
                  crops. &ldquo;Can we get some husk from the Centre, too,
                  to make toys with it? I don&rsquo;t know.&rdquo; The line
                  is the poem&rsquo;s sharpest stroke:{" "}
                  <Highlight color="blue">education, self-sufficiency, and
                  identity</Highlight> have all been traded for dependency.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="loss-of-identity"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Loss of Agricultural Identity
            </h3>
            <p>
              The poem mourns the displacement of rice farming by cash crops.
              Rubber plants, arecanut palms, and dealwood trees have replaced
              paddy fields. The community that once grew its own food now depends
              on{" "}
              <Highlight color="pink">government rations</Highlight> &mdash;
              a loss of self-sufficiency and cultural identity.
            </p>
            <h3
              id="satire-on-governance"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Satire on Governance
            </h3>
            <p>
              The Chief Minister flying to the Centre to &ldquo;clamour for more
              grains&rdquo; is a sharp critique of{" "}
              <Highlight color="yellow">political dependency</Highlight>. The
              government distributes rice to those without paddy fields &mdash;
              but the real question is why paddy fields were abandoned in the
              first place.
            </p>
            <h3
              id="education-irrelevance"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Education and Irrelevance
            </h3>
            <p>
              The narrator earned a doctoral degree for &ldquo;making toys with
              husk&rdquo; &mdash; a skill now useless because rice is no longer
              grown. The closing question &ldquo;Can we get some husk from the
              Centre, too?&rdquo; is a bitter joke about{" "}
              <Highlight color="blue">education disconnected from ground
              reality</Highlight>.
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
