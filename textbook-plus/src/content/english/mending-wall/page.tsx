"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { Comparison } from "@/components/content/Comparison";

const POEM_LINES = [
  "Something there is that doesn\u2019t love a wall,",
  "That sends the frozen-ground-swell under it,",
  "And spills the upper boulders in the sun;",
  "And makes gaps even two can pass abreast.",
  "",
  "The work of hunters is another thing:",
  "I have come after them and made repair",
  "Where they have left not one stone on a stone,",
  "But they would have the rabbit out of hiding,",
  "To please the yelping dogs. The gaps I mean,",
  "No one has seen them made or heard them made,",
  "But at spring mending-time we find them there.",
  "",
  "I let my neighbor know beyond the hill;",
  "And on a day we meet to walk the line",
  "And set the wall between us once again.",
  "We keep the wall between us as we go.",
  "To each the boulders that have fallen to each.",
  "And some are loaves and some so nearly balls",
  "We have to use a spell to make them balance:",
  "\u2018Stay where you are until our backs are turned!\u2019",
  "We wear our fingers rough with handling them.",
  "",
  "Oh, just another kind of out-door game,",
  "One on a side. It comes to little more:",
  "There where it is we do not need the wall:",
  "He is all pine and I am apple orchard.",
  "My apple trees will never get across",
  "And eat the cones under his pines, I tell him.",
  "He only says, \u2018Good fences make good neighbors.\u2019",
  "",
  "Spring is the mischief in me, and I wonder",
  "If I could put a notion in his head:",
  "\u2018Why do they make good neighbors? Isn\u2019t it",
  "Where there are cows? But here there are no cows.",
  "Before I built a wall I\u2019d ask to know",
  "What I was walling in or walling out,",
  "And to whom I was like to give offense.",
  "Something there is that doesn\u2019t love a wall,",
  "That wants it down.\u2019 I could say \u2018Elves\u2019 to him,",
  "But it\u2019s not elves exactly, and I\u2019d rather",
  "He said it for himself. I see him there",
  "Bringing a stone grasped firmly by the top",
  "In each hand, like an old-stone savage armed.",
  "He moves in darkness as it seems to me,",
  "Not of woods only and the shade of trees.",
  "He will not go behind his father\u2019s saying,",
  "And he likes having thought of it so well",
  "He says again, \u2018Good fences make good neighbors.\u2019",
];

const QA_ITEMS = [
  {
    question: "What is the central theme of Mending Wall?",
    answer: (
      <>
        The central theme is that{" "}
        <Highlight color="yellow">nature does not like separation</Highlight>.
        The poem explores whether walls are necessary between neighbours and
        calls for <strong>breaking down man-made barriers</strong> to build a world
        of brotherhood and harmony.
      </>
    ),
  },
  {
    question: "Who are the two characters in the poem?",
    answer: (
      <>
        The two characters are the <Highlight color="blue">poet (narrator)</Highlight> and
        his <Highlight color="green">neighbour</Highlight>. They are neighbours
        who share a stone wall between their properties.
      </>
    ),
  },
  {
    question: "Why does the wall break every spring?",
    answer: (
      <>
        The wall breaks every spring, but <strong>no one knows who is breaking it</strong>.
        Some natural force \u2014 perhaps the ground shifting, frost, or animals \u2014 causes
        the stones to fall. The poet finds the gaps and informs his neighbour so they
        can repair it together.
      </>
    ),
  },
  {
    question: "What is the poet\u2019s view about the wall?",
    answer: (
      <>
        The poet <Highlight color="yellow">doubts the need</Highlight> of the wall
        between their properties. He argues they have no cattle that would cross
        boundaries \u2014 only <strong>apple trees and pine trees</strong> that would
        never &ldquo;come across and eat the cones under his pines.&rdquo;
      </>
    ),
  },
  {
    question: "What is the neighbour\u2019s view on walls?",
    answer: (
      <>
        The neighbour firmly believes that{" "}
        <Highlight color="green">walls are necessary</Highlight>. He always says,{" "}
        <em>&ldquo;Good fences make good neighbours,&rdquo;</em> meaning a wall is
        crucial to maintain a healthy relationship.
      </>
    ),
  },
  {
    question: "What does the refrain \u201cGood fences make good neighbours\u201d mean?",
    answer: (
      <>
        It is an <Highlight color="pink">epigram</Highlight> \u2014 a witty, memorable
        saying. In the neighbour&rsquo;s view, physical boundaries{" "}
        <strong>prevent conflict</strong> and help maintain a respectful relationship
        between neighbours.
      </>
    ),
  },
  {
    question: "What poetic devices are used in the poem?",
    answer: (
      <>
        The poem uses <Highlight color="yellow">personification</Highlight> (giving
        human qualities to inanimate things),{" "}
        <Highlight color="blue">simile</Highlight> (comparing the neighbour to &ldquo;an
        old-stone savage armed&rdquo;),{" "}
        <Highlight color="pink">metaphor</Highlight> (the wall as a symbol of human
        barriers), <strong>irony</strong> (the speaker questions the wall but repairs
        it), <Highlight color="green">apostrophe</Highlight> (speaking to the
        stones), and <strong>epigram</strong> (&ldquo;Good fences make good
        neighbours&rdquo;).
      </>
    ),
  },
  {
    question: "Give an example of personification from the poem.",
    answer: (
      <>
        In lines 1\u20134:{" "}
        <em>
          &ldquo;Something there is that doesn&rsquo;t love a wall, / That sends the
          frozen-ground-swell under it.&rdquo;
        </em>{" "}
        Here, an unnamed <Highlight color="yellow">natural force</Highlight> is given
        human emotions \u2014 it &ldquo;doesn&rsquo;t love&rdquo; the wall and actively
        works to destroy it.
      </>
    ),
  },
  {
    question: "What does the poem call for at the end?",
    answer: (
      <>
        The poem calls for{" "}
        <Highlight color="green">breaking down man-made walls</Highlight> and
        building a better world where <strong>brotherhood and harmony</strong> are
        upheld in places of conflict and separation.
      </>
    ),
  },
  {
    question: "Why doesn\u2019t the poet think a wall is necessary between them?",
    answer: (
      <>
        The poet argues that they have <strong>no cattle</strong> that might cross
        boundaries. They only have{" "}
        <Highlight color="blue">apple trees and pine trees</Highlight>, and these
        would never cross the land. Therefore, the wall serves no practical purpose.
      </>
    ),
  },
];

export default function MendingWallPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="Robert Frost">
              <p>
                <strong>Robert Frost</strong> (1874\u20131963) was a famous American
                poet known for his realistic depictions of{" "}
                <Highlight color="blue">rural New England</Highlight> life. He
                received four{" "}
                <Highlight color="yellow">Pulitzer Prizes</Highlight> for Poetry and
                is celebrated for his accessible language and deep philosophical
                themes. Mending Wall first appeared in his 1914 collection{" "}
                <em>North of Boston</em>.
              </p>
            </AuthorCard>
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <Highlight color="yellow">Mending Wall</Highlight> is a poem written by
            the famous American poet Robert Frost. The poem tells about the
            relationship of two neighbours and explores whether walls are necessary
            between them.
          </p>
          <p>
            The poem is structured as a <strong>45-line</strong> piece of{" "}
            <Highlight color="blue">blank verse</Highlight> (unrhymed iambic
            pentameter) with a <em>conversational tone</em>, as the poet narrates his
            observations and dialogues with his neighbour about the stone wall
            separating their properties.
          </p>

          {/* The Poem */}
          <h2
            id="the-poem"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            The Poem
          </h2>
          <div className="rounded-2xl border border-border/50 bg-muted/20 p-6 my-6">
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Mending Wall &mdash; Robert Frost (1914)
            </p>
            <div className="text-[0.95rem] leading-[2] text-foreground/90 font-serif italic space-y-0">
              {POEM_LINES.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-3" />
                ) : (
                  <div key={i}>{line}</div>
                )
              )}
            </div>
          </div>

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
                  <Highlight color="yellow">Mending Wall</Highlight> is a poem by
                  Robert Frost about two neighbours with different views on walls.
                </li>
                <li>
                  A <strong>stone wall</strong> separates their properties, and it
                  breaks every spring for unknown reasons.
                </li>
                <li>
                  The <Highlight color="blue">poet</Highlight> doubts the need for
                  the wall, but his{" "}
                  <Highlight color="green">neighbour</Highlight> believes{" "}
                  <em>&ldquo;Good fences make good neighbours.&rdquo;</em>
                </li>
                <li>
                  The poem calls for{" "}
                  <strong>breaking down man-made barriers</strong> and building
                  harmony.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <Highlight color="yellow">Mending Wall</Highlight> is a poem by
                  Robert Frost about the relationship of two neighbours.
                </li>
                <li>
                  The <strong>central theme</strong> is that nature does not like
                  separation, but for a healthy relationship between neighbours, walls
                  are sometimes considered necessary.
                </li>
                <li>
                  There is a <strong>stone wall</strong> between their properties. The
                  wall is broken every spring without any known reason. No one has
                  seen or heard the gaps being made.
                </li>
                <li>
                  The <Highlight color="blue">poet</Highlight> informs his{" "}
                  <Highlight color="green">neighbour</Highlight> about the condition,
                  and they repair the wall together &mdash; walking the line, setting
                  fallen boulders, wearing their fingers rough.
                </li>
                <li>
                  The poet <Highlight color="yellow">doubts the need</Highlight> of
                  the wall. They have no cattle &mdash; only{" "}
                  <strong>apple trees and pine trees</strong> that would never cross
                  the land.
                </li>
                <li>
                  The neighbour is not ready to accept the poet&rsquo;s opinion. He
                  has a firm belief that a wall is crucial to maintain their
                  relationship.
                </li>
                <li>
                  He always says,{" "}
                  <em>&ldquo;Good fences make good neighbours,&rdquo;</em> which is an{" "}
                  <Highlight color="pink">epigram</Highlight> meaning walls are
                  necessary.
                </li>
                <li>
                  The poem calls for{" "}
                  <strong>breaking down man-made walls</strong> and building a better
                  world where brotherhood and harmony are upheld.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <Highlight color="yellow">Mending Wall</Highlight> is a poem by
                  Robert Frost about the relationship of two neighbours.
                </li>
                <li>
                  The <strong>central theme</strong> is that nature does not like
                  separation, but for a healthy relationship between neighbours, walls
                  are sometimes considered necessary.
                </li>
                <li>
                  There are two characters: the{" "}
                  <Highlight color="blue">poet</Highlight> and his{" "}
                  <Highlight color="green">neighbour</Highlight>.
                </li>
                <li>
                  There is a <strong>stone wall</strong> between their property. The
                  wall is broken every spring. No one has seen or heard the gaps
                  being made, but they find them there at spring mending-time.
                </li>
                <li>
                  The poet lets his neighbour know, and they meet to walk the line and
                  set the wall between them once again. Some boulders are loaves, some
                  nearly balls &mdash; they use a &ldquo;spell&rdquo; to make them
                  balance.
                </li>
                <li>
                  The poet <Highlight color="yellow">doubts the need</Highlight> of
                  the wall. They have no cattle &mdash; only apple trees and pine
                  trees. He argues his apple trees will never cross to eat the cones
                  under the neighbour&rsquo;s pines.
                </li>
                <li>
                  The neighbour is not ready to accept the poet&rsquo;s opinion. He
                  has a <strong>firm belief</strong> that there must be a wall because
                  it is crucial to maintain their relationship.
                </li>
                <li>
                  He always says{" "}
                  <em>&ldquo;Good fences make good neighbours.&rdquo;</em> The poet
                  sees him as &ldquo;an old-stone savage armed,&rdquo; moving in
                  darkness, unwilling to go behind his father&rsquo;s saying.
                </li>
                <li>
                  The ideas of the poet and his neighbour are{" "}
                  <Highlight color="pink">different</Highlight>. The poet argues there
                  is no need of a wall; the neighbour argues there should be a wall.
                </li>
                <li>
                  The poem calls for{" "}
                  <strong>breaking down man-made walls</strong> and building a better
                  world where <Highlight color="green">brotherhood and harmony</Highlight>{" "}
                  are upheld in places of conflict and separation.
                </li>
              </ul>
            }
          />
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in">
          {/* The Wall Debate */}
          <h2
            id="wall-debate"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            The Wall Debate
          </h2>
          <Comparison
            columns={[
              {
                title: "The Poet",
                children: (
                  <div className="space-y-3">
                    <p>
                      <Highlight color="yellow">Doubts the need</Highlight> of the
                      wall. Sees it as unnecessary.
                    </p>
                    <p>
                      They have <strong>no cattle</strong> &mdash; only apple trees and
                      pine trees that would never cross the land.
                    </p>
                    <p>
                      <strong>Questioning</strong> and open-minded. Willing to challenge
                      tradition.
                    </p>
                    <p>
                      <em>
                        &ldquo;My apple trees will never get across / And eat the cones
                        under his pines.&rdquo;
                      </em>
                    </p>
                  </div>
                ),
              },
              {
                title: "The Neighbour",
                children: (
                  <div className="space-y-3">
                    <p>
                      <Highlight color="green">Firmly believes</Highlight> walls are
                      necessary for a healthy relationship.
                    </p>
                    <p>
                      <em>&ldquo;Good fences make good neighbours.&rdquo;</em> Walls
                      prevent conflict and maintain boundaries.
                    </p>
                    <p>
                      <strong>Traditional</strong> and steadfast. Holds firm to inherited
                      beliefs.
                    </p>
                    <p>
                      <em>&ldquo;Good fences make good neighbours.&rdquo;</em>
                    </p>
                  </div>
                ),
              },
            ]}
          />

          {/* Poetic Devices */}
          <h2
            id="poetic-devices"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Poetic Devices
          </h2>

          <Expandable title="Personification" id="device-personification">
            <p>
              <strong>Personification</strong> is giving human qualities to non-living
              things.
            </p>
            <p className="mt-2">
              <em>
                &ldquo;Something there is that doesn&rsquo;t love a wall, / That sends
                the frozen-ground-swell under it.&rdquo;
              </em>
            </p>
            <p className="mt-2">
              An unnamed <Highlight color="yellow">natural force</Highlight> is given
              human emotions &mdash; it &ldquo;doesn&rsquo;t love&rdquo; the wall and
              actively works to destroy it. The force is never identified, adding
              mystery.
            </p>
          </Expandable>

          <Expandable title="Simile" id="device-simile">
            <p>
              A <strong>simile</strong> is a comparison between two unlike things
              using &ldquo;like&rdquo; or &ldquo;as.&rdquo;
            </p>
            <p className="mt-2">
              <em>
                &ldquo;Bringing a stone grasped firmly by the top / In each hand, like
                an old-stone savage armed.&rdquo;
              </em>
            </p>
            <p className="mt-2">
              The neighbour is compared to a{" "}
              <Highlight color="pink">primitive warrior</Highlight>, suggesting he
              clings to ancient traditions without questioning them.
            </p>
          </Expandable>

          <Expandable title="Metaphor" id="device-metaphor">
            <p>
              A <strong>metaphor</strong> is a direct comparison without using
              &ldquo;like&rdquo; or &ldquo;as.&rdquo;
            </p>
            <p className="mt-2">
              <em>&ldquo;He is all pine and I am apple orchard.&rdquo;</em>
            </p>
            <p className="mt-2">
              The men are equated with their properties &mdash; the neighbour is
              &ldquo;all pine&rdquo; and the poet is &ldquo;apple orchard.&rdquo; The{" "}
              <Highlight color="yellow">wall itself</Highlight> is a extended metaphor
              for all human-made barriers &mdash; social, emotional, and
              psychological.
            </p>
          </Expandable>

          <Expandable title="Irony" id="device-irony">
            <p>
              <strong>Irony</strong> is when the outcome is opposite to what is
              expected.
            </p>
            <p className="mt-2">
              The <Highlight color="blue">speaker who questions the wall</Highlight>{" "}
              is the one who initiates its repair each spring:{" "}
              <em>&ldquo;I let my neighbour know beyond the hill.&rdquo;</em> He could
              simply let the gaps stand, but instead he calls his neighbour out and
              walks the line.
            </p>
          </Expandable>

          <Expandable title="Apostrophe" id="device-apostrophe">
            <p>
              <strong>Apostrophe</strong> is when the poet speaks to an absent person
              or inanimate object.
            </p>
            <p className="mt-2">
              <em>
                &ldquo;Stay where you are until our backs are turned!&rdquo;
              </em>
            </p>
            <p className="mt-2">
              The poet addresses the{" "}
              <Highlight color="blue">stones</Highlight> in the wall, telling them to
              stay in place &mdash; even though stones cannot listen or obey.
            </p>
          </Expandable>

          <Expandable title="Epigram" id="device-epigram">
            <p>
              An <strong>epigram</strong> is a witty, memorable saying that expresses
              a truth in a clever way.
            </p>
            <p className="mt-2">
              <em>&ldquo;Good fences make good neighbours.&rdquo;</em>
            </p>
            <p className="mt-2">
              This <Highlight color="pink">refrain</Highlight> is repeated throughout
              the poem. It encapsulates the neighbour&rsquo;s entire philosophy in one
              memorable line.
            </p>
          </Expandable>

          <Expandable title="Enjambment" id="device-enjambment">
            <p>
              <strong>Enjambment</strong> is when a sentence continues beyond the
              end of a line without a pause.
            </p>
            <p className="mt-2">
              <em>
                &ldquo;And he likes having thought of it so well / He says again,
                &lsquo;Good fences make good neighbours.&rsquo;&rdquo;
              </em>
            </p>
            <p className="mt-2">
              The thought flows across the line break, creating a{" "}
              <Highlight color="yellow">conversational rhythm</Highlight> that mirrors
              natural speech.
            </p>
          </Expandable>

          <Expandable title="Assonance" id="device-assonance">
            <p>
              <strong>Assonance</strong> is the repetition of vowel sounds in nearby
              words.
            </p>
            <p className="mt-2">
              <em>
                &ldquo;To please the yelping dogs. The gaps I mean.&rdquo;
              </em>
            </p>
            <p className="mt-2">
              The repeated <Highlight color="blue">/iː/</Highlight> sound in
              &ldquo;please,&rdquo; &ldquo;yelping,&rdquo; and &ldquo;gaps I
              mean&rdquo; creates a subtle musical effect.
            </p>
          </Expandable>

          <Expandable title="Symbolism" id="device-symbolism">
            <p>
              <strong>Symbolism</strong> is when an object represents a deeper
              meaning.
            </p>
            <p className="mt-2">
              The <Highlight color="yellow">stone wall</Highlight> symbolizes all
              human-made barriers &mdash; between neighbours, communities, and nations.
              The <Highlight color="green">frozen-ground-swell</Highlight> (frost)
              symbolizes natural forces that resist human separation. The{" "}
              <strong>apple and pine trees</strong> symbolize difference without
              conflict.
            </p>
          </Expandable>

          <Expandable title="Blank Verse" id="device-blank-verse">
            <p>
              <strong>Blank verse</strong> is unrhymed iambic pentameter &mdash; five
              stressed beats per line without a rhyme scheme.
            </p>
            <p className="mt-2">
              The poem&rsquo;s 45 lines of blank verse create a{" "}
              <Highlight color="yellow">conversational rhythm</Highlight> suited to
              the walking pace of two men along a wall. The opening line&rsquo;s
              trochaic inversion disrupts the iambic pattern, enacting the very force
              that disrupts the wall.
            </p>
          </Expandable>

          {/* Theme */}
          <h2
            id="theme"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Theme
          </h2>
          <Callout type="important">
            <p>
              The poem calls for{" "}
              <Highlight color="green">breaking down man-made walls</Highlight> and
              building a better world where{" "}
              <strong>brotherhood and harmony</strong> are upheld in places of
              conflict and separation.
            </p>
          </Callout>
          <p>
            Nature itself does not like separation &mdash; the wall breaks every spring
            without human intervention. Yet the neighbour insists on rebuilding it,
            showing how <strong>human tradition</strong> can conflict with{" "}
            <Highlight color="yellow">natural order</Highlight>.
          </p>
          <p>
            The poem ultimately questions whether <strong>walls</strong> (physical or
            psychological) are truly necessary when there is{" "}
            <em>no real threat of encroachment</em>. As a whole, the poem calls for
            breaking down man-made walls and building a better world where brotherhood
            and harmony are upheld in places of conflict and separation.
          </p>

          {/* Poem Appreciation */}
          <h2
            id="appreciation"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Poem Appreciation
          </h2>
          <div className="rounded-2xl border border-border/50 bg-muted/20 p-6 my-6 space-y-4 text-[0.95rem] leading-[1.75] text-foreground/85">
            <p>
              <Highlight color="yellow">Mending Wall</Highlight> is a celebrated poem
              by <strong>Robert Frost</strong>, first published in his 1914 collection{" "}
              <em>North of Boston</em>. It is written in{" "}
              <Highlight color="blue">blank verse</Highlight> (unrhymed iambic
              pentameter), which gives it a natural, conversational tone.
            </p>
            <p>
              The poem describes two New England neighbours who meet each spring to
              repair the stone wall between their properties. Through this simple
              annual ritual, Frost explores the{" "}
              <strong>deep tension between tradition and reason</strong>, between the
              desire for connection and the habit of separation.
            </p>
            <p>
              The poet uses <Highlight color="yellow">personification</Highlight>{" "}
              when he says &ldquo;Something there is that doesn&rsquo;t love a
              wall&rdquo; &mdash; giving human emotions to an unnamed natural force.
              The <Highlight color="pink">simile</Highlight> &ldquo;like an old-stone
              savage armed&rdquo; paints the neighbour as a primitive figure clinging
              to inherited beliefs. The <Highlight color="blue">metaphor</Highlight>{" "}
              of the wall itself represents all the social, emotional, and
              psychological barriers that humans construct.
            </p>
            <p>
              The poem&rsquo;s greatest strength is its{" "}
              <strong>ambiguity</strong>. Frost does not declare a winner in the
              debate. The speaker questions the wall, yet he is the one who initiates
              its repair each spring &mdash; a deeply{" "}
              <Highlight color="green">ironic</Highlight> position. The neighbour
              clings to his father&rsquo;s saying without examining it, yet his
              insistence on boundaries has its own wisdom.
            </p>
            <p>
              The <Highlight color="pink">epigram</Highlight> &ldquo;Good fences make
              good neighbours&rdquo; has become one of the most quoted lines in
              American poetry. It captures a universal truth about human relationships
              &mdash; that boundaries can both divide and connect.
            </p>
            <p>
              Overall, <em>Mending Wall</em> is a masterful poem that uses a simple
              rural scene to ask profound questions about{" "}
              <strong>community, tradition, and the walls we build</strong> between
              ourselves and others. It calls for breaking down man-made barriers and
              building a world of brotherhood and harmony.
            </p>
          </div>

          {/* Key Takeaway */}
          <KeyPoint title="Key Takeaway">
            <Highlight color="yellow">Mending Wall</Highlight> explores the tension
            between <strong>tradition and reason</strong>. While the neighbour clings
            to the old saying &ldquo;Good fences make good neighbours,&rdquo; the poet
            questions whether walls are necessary when there is no real threat. The
            poem calls for <strong>breaking down barriers</strong> and building{" "}
            <Highlight color="green">harmony and brotherhood</Highlight>.
          </KeyPoint>

          {/* Read & Respond */}
          <div id="read-and-respond-section" className="mt-10">
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}
    </div>
  );
}