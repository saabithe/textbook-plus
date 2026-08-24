"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { Comparison } from "@/components/content/Comparison";
import { ReadRespond } from "@/components/content/ReadRespond";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const POEM_LINES = [
  "Something there is that doesn’t love a wall,",
  "That sends a frozen-ground-swell under it,",
  "And spills the upper boulders in the sun;",
  "And makes gaps even two can pass abreast.",
  "",
  "The work of hunters is another thing:",
  "I have come after them and made repair",
  "Where they would have left not one stone on a stone,",
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
  "‘Stay where you are until our backs are turned!’",
  "We wear our fingers rough with handling them.",
  "",
  "Oh, just another kind of out-door game,",
  "One on a side. It comes to little more:",
  "There where it is we do not need the wall:",
  "He is all pine and I am apple orchard.",
  "My apple trees will never get across",
  "And eat the cones under his pines, I tell him.",
  "He only says, ‘Good fences make good neighbors.’",
  "",
  "Spring is the mischief in me, and I wonder",
  "If I could put a notion in his head:",
  "‘Why do they make good neighbors? Isn’t it",
  "Where there are cows? But here there are no cows.",
  "Before I built a wall I’d ask to know",
  "What I was walling in or walling out,",
  "And to whom I was like to give offense.",
  "Something there is that doesn’t love a wall,",
  "That wants it down.’ I could say ‘Elves’ to him,",
  "But it’s not elves exactly, and I’d rather",
  "He said it for himself. I see him there",
  "Bringing a stone grasped firmly by the top",
  "In each hand, like an old-stone savage armed.",
  "He moves in darkness as it seems to me,",
  "Not of woods only and the shade of trees.",
  "He will not go behind his father’s saying,",
  "And he likes having thought of it so well",
  "He says again, ‘Good fences make good neighbors.’",
];

const READ_RESPOND = [
  {
    question: "What does the speaker&apos;s neighbour say about walls?",
    answer: (
      <>
        The neighbour repeats his father&apos;s saying: <strong>&quot;Good fences make good neighbours.&quot;</strong> He
        believes boundaries keep the relationship respectful and orderly, and he will not go behind his
        father&apos;s words to question them.
      </>
    ),
  },
  {
    question: "According to the speaker, why is the wall unnecessary?",
    answer: (
      <>
        There is nothing to keep in or out — the speaker has an apple orchard and his neighbour has pines,
        so their trees will never cross. He also notes that cows are the only thing walls ever contained
        here. Nature itself conspires against the wall: frozen ground swells under it and topples boulders,
        leaving gaps that &quot;even two can pass abreast&quot;.
      </>
    ),
  },
  {
    question: 'What is the significance of the phrase "Good fences make good neighbours"?',
    answer: (
      <>
        It is the proverb the poem tests. On one reading, boundaries prevent disputes and preserve
        neighbourliness; on another — the speaker&apos;s ironic reading — endless fence-mending is a ritual that
        keeps people apart rather than together. Frost leaves both readings standing, which is why the line
        has become one of the most debated in American poetry.
      </>
    ),
  },
  {
    question: "How does the poem explore the tension between tradition and modernity?",
    answer: (
      <>
        The mending ritual itself is tradition: a spring custom inherited from past generations, defended by
        the neighbour&apos;s father&apos;s saying. The speaker embodies a modern, questioning temper — he wants reasons,
        asking what he is &quot;walling in or walling out&quot;. The poem stages the clash without resolving it: old
        rituals give life shape, but unexamined tradition can become darkness, like the old-stone savage.
      </>
    ),
  },
  {
    question: 'What does the speaker mean by "Something there is that doesn\'t love a wall"?',
    answer: (
      <>
        He names an unnamed natural force — frost heave, gravity, time — that spills the boulders each
        winter and makes gaps. But the phrase reaches beyond geology: it suggests that human nature itself
        resists artificial barriers, that connection, not separation, is the default state of the world.
        It is the speaker&apos;s poetic counter-argument to the neighbour&apos;s proverb.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "wall-debate",
    title: "The Wall Debate",
    content: (
      <>
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
      </>
    ),
  },
  {
    id: "poetic-devices",
    title: "Poetic Devices",
    content: (
      <>
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
      </>
    ),
  },
  {
    id: "appreciation",
    title: "Poem Appreciation",
    content: (
      <div className="rounded-2xl border border-border/50 bg-muted/20 p-6 my-6 space-y-4 text-[0.95rem] leading-[1.75] text-foreground/85">
        <p className="font-semibold text-foreground">1. Introduction</p>
        <p>
          <Highlight color="yellow">Mending Wall</Highlight> is a celebrated poem
          by <strong>Robert Frost</strong>, first published in his 1914 collection{" "}
          <em>North of Boston</em>. The poem has a{" "}
          <Highlight color="blue">reflective and conversational</Highlight> tone,
          as the poet narrates a simple rural encounter that raises profound
          questions about human relationships and the boundaries we construct.
        </p>

        <p className="font-semibold text-foreground mt-4">2. Summary and Theme (Gist)</p>
        <p>
          The poem describes two New England neighbours who meet each spring to
          repair the stone wall between their properties. While the{" "}
          <Highlight color="blue">poet</Highlight> questions the need for the
          wall &mdash; arguing they have no cattle, only apple trees and pine trees
          that would never cross &mdash; his{" "}
          <Highlight color="green">neighbour</Highlight> firmly believes in the old
          saying, <em>&ldquo;Good fences make good neighbours.&rdquo;</em>
        </p>
        <p>
          The <strong>central idea</strong> is that{" "}
          <Highlight color="yellow">nature does not like separation</Highlight>.
          The wall breaks every spring without human intervention, yet the
          neighbour insists on rebuilding it. The poem calls for{" "}
          <strong>breaking down man-made walls</strong> and building a world
          where brotherhood and harmony are upheld.
        </p>

        <p className="font-semibold text-foreground mt-4">3. Poetic Devices and Style</p>
        <p>
          The poem is written in{" "}
          <Highlight color="blue">blank verse</Highlight> &mdash; unrhymed iambic
          pentameter &mdash; which gives it a natural, conversational rhythm suited
          to the walking pace of two men along a wall. There is no regular rhyme
          scheme, but the repetition of the line{" "}
          <em>&ldquo;Good fences make good neighbours&rdquo;</em> acts as a{" "}
          <Highlight color="pink">refrain</Highlight>.
        </p>
        <p>
          Frost employs <Highlight color="yellow">personification</Highlight>{" "}
          when he says &ldquo;Something there is that doesn&rsquo;t love a
          wall&rdquo; &mdash; giving human emotions to an unnamed natural force.
          The <Highlight color="pink">simile</Highlight> &ldquo;like an old-stone
          savage armed&rdquo; paints the neighbour as a primitive figure clinging
          to inherited beliefs. The <Highlight color="blue">metaphor</Highlight>{" "}
          of the wall itself represents all the social, emotional, and
          psychological barriers that humans construct.{" "}
          <Highlight color="green">Apostrophe</Highlight> appears when the poet
          speaks to the stones: &ldquo;Stay where you are until our backs are
          turned!&rdquo; The poem is rich in{" "}
          <strong>visual imagery</strong> &mdash; boulders shaped like loaves and
          balls, fingers worn rough with handling stones, and a neighbour moving
          &ldquo;in darkness&rdquo; among the trees.
        </p>

        <p className="font-semibold text-foreground mt-4">4. Critical Comment / Personal Opinion</p>
        <p>
          What makes <em>Mending Wall</em> truly powerful is its{" "}
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
          American poetry. It captures a universal truth &mdash; that boundaries
          can both <strong>divide and connect</strong>. The poem remains relevant
          today as we continue to debate walls &mdash; between nations, communities,
          and individuals. It is a masterful reminder that the walls we build say
          as much about us as the people we build them against.
        </p>
      </div>
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
            <AuthorCard name="Robert Frost" />
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
                  <strong>Poet</strong>: Robert Frost. Form: Blank verse (unrhymed iambic
                  pentameter). Two neighbours: narrator (questions walls) and neighbour
                  (follows tradition).
                </li>
                <li>
                  <strong>Central mystery</strong>: &ldquo;Something there is that
                  doesn&rsquo;t love a wall&rdquo; &mdash; something unnamed keeps
                  breaking it. Frost never reveals what.
                </li>
                <li>
                  <strong>Key quote</strong>: &ldquo;Good fences make good
                  neighbours&rdquo; &mdash; the neighbour&rsquo;s inherited saying, repeated
                  without question.
                </li>
                <li>
                  <strong>Argument</strong>: The narrator asks what the wall is for &mdash;
                  they have no cattle, only apple and pine trees. The neighbour ignores the
                  logic.
                </li>
                <li>
                  <strong>Imagery</strong>: &ldquo;An old-stone savage armed&rdquo; &mdash;
                  the neighbour becomes{" "}
                  <Highlight color="blue">primitive, pre-rational</Highlight>, moving
                  &ldquo;in darkness.&rdquo;
                </li>
                <li>
                  <strong>Theme</strong>: Tradition vs reason, connection vs division. The
                  poem is a gentle, witty{" "}
                  <Highlight color="green">meditation on unnecessary barriers</Highlight>.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Opening (Stanza 1&ndash;2)</strong>: Spring arrives and the
                  narrator finds gaps in the stone wall. Something{" "}
                  <Highlight color="yellow">unnamed</Highlight> has disturbed it &mdash;
                  no one has seen or heard it happen. He describes the damage: frozen
                  ground swelling, stones tumbling, and his task of resetting them with
                  his hands.
                </li>
                <li>
                  <strong>Walking the line (Stanza 3&ndash;4)</strong>: The narrator walks
                  the wall line with his neighbour, setting fallen boulders back in place.
                  They wear their fingers rough doing the work. The mood is companionable
                  but quietly tense &mdash; they work side by side but see the wall
                  differently.
                </li>
                <li>
                  <strong>The narrator&rsquo;s argument (Stanza 5&ndash;7)</strong>: The
                  narrator{" "}
                  <Highlight color="blue">doubts the need</Highlight> for the wall: they
                  have no cattle &mdash; only apple trees and pine trees that would never
                  cross into each other&rsquo;s land. He asks: &ldquo;Before I built a
                  wall I&rsquo;d ask to know / What I was walling in or walling out.&rdquo;
                  Logic says the wall is pointless.
                </li>
                <li>
                  <strong>The neighbour&rsquo;s reply (Stanza 8&ndash;9)</strong>: The
                  neighbour ignores the argument entirely. He moves steadily along the line,
                  repeating the inherited epigram:{" "}
                  <em>&ldquo;Good fences make good neighbours.&rdquo;</em> The narrator
                  notes the neighbour says it like a spell &mdash; as if saying it often
                  enough makes it true.
                </li>
                <li>
                  <strong>The climb (Stanza 10&ndash;12)</strong>: The terrain changes as
                  the wall rises and they climb. The landscape opens up &mdash; the wall
                  stretches into darkness. The narrator moves behind his neighbour,
                  picturing him as &ldquo;an{" "}
                  <Highlight color="green">old-stone savage</Highlight> armed.&rdquo; The
                  image is vivid: the neighbour becomes ancient, primitive, unknowable.
                </li>
                <li>
                  <strong>Tradition vs reason (Stanza 13&ndash;15)</strong>: The narrator
                  observes that the neighbour is{" "}
                  <Highlight color="pink">unwilling to go behind</Highlight> his
                  father&rsquo;s saying. He follows tradition without questioning it &mdash;
                  not out of conviction but out of habit. The narrator pushes gently, but
                  the neighbour won&rsquo;t engage.
                </li>
                <li>
                  <strong>Ending (Stanza 16&ndash;21)</strong>: The poem ends without
                  resolution. The wall remains. The two neighbours walk the line together,
                  and the spring darkness is &ldquo;at one in that it is both
                  host to and protector of the mysterious force.&rdquo; The wall stands,
                  but the question of whether it should stays open.
                </li>
                <li>
                  <strong>Mood</strong>: Reflective, playful, quietly philosophical. Frost
                  never resolves the debate &mdash; the{" "}
                  <Highlight color="yellow">tension is the meaning</Highlight>.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Form</strong>: Blank verse &mdash; unrhymed iambic pentameter.
                  The regular rhythm mirrors the{" "}
                  <Highlight color="yellow">conversational, meditative tone</Highlight>.
                  Frost makes the poem feel like a natural spoken narrative, but the
                  underlying discipline gives it weight and structure. The lack of rhyme
                  suits the open-ended, unresolved nature of the argument.
                </li>
                <li>
                  <strong>Wall as symbol</strong>: The stone wall represents all barriers
                  humans create &mdash; psychological, social, emotional, cultural. Nature
                  keeps breaking it: the wall is{" "}
                  <Highlight color="blue">anti-natural</Highlight>. Frost does not say
                  walls are wrong; he says nature disagrees with them. The tension between
                  human construction and natural dissolution runs throughout.
                </li>
                <li>
                  <strong>Mystery of the gaps</strong>: &ldquo;Something there is that
                  doesn&rsquo;t love a wall.&rdquo; The unnamed force is left deliberately
                  ambiguous &mdash; could be nature (freeze-thaw cycles), could be the human
                  spirit itself, could be something spiritual or metaphysical. Frost refuses
                  to name it, which makes the mystery more powerful. The mystery is the
                  poem&rsquo;s engine &mdash; it drives the entire meditation.
                </li>
                <li>
                  <strong>The apple-pine argument</strong>: The narrator argues logically:
                  no cattle, no harm. His apple trees are on his side, the neighbour&rsquo;s
                  pines are on his. They would never cross. But logic fails against{" "}
                  <Highlight color="green">tradition and fear</Highlight>. The neighbour
                  doesn&rsquo;t need a reason &mdash; the wall simply &ldquo;is.&rdquo;
                  The narrator asks: &ldquo;Before I built a wall I&rsquo;d ask to know / What
                  I was walling in or walling out, and to whom I was like to give
                  offence.&rdquo; This is the poem&rsquo;s most direct statement of
                  philosophical doubt.
                </li>
                <li>
                  <strong>Key quote</strong>: &ldquo;Good fences make good
                  neighbours&rdquo; &mdash; an inherited saying, not the
                  neighbour&rsquo;s own thought. The narrator notes the neighbour repeats it
                  like a spell. The{" "}
                  <Highlight color="yellow">epigram</Highlight> is presented as
                  unquestioned wisdom, but the poem questions it relentlessly. The saying
                  is old &mdash; it appears in proverbs worldwide &mdash; but old does not
                  mean true.
                </li>
                <li>
                  <strong>Imagery</strong>: &ldquo;An old-stone savage armed&rdquo; &mdash;
                  the neighbour becomes{" "}
                  <Highlight color="pink">primitive, dark, pre-rational</Highlight>. He
                  moves &ldquo;in darkness,&rdquo; a figure of unexamined tradition. The
                  word &ldquo;armed&rdquo; is ambiguous: armed with stones? armed with
                  conviction? The image is comic and slightly ominous &mdash; Frost holds
                  both tones at once.
                </li>
                <li>
                  <strong>Ambiguity</strong>: Frost never resolves the debate. The poem is
                  not simply pro-wall or anti-wall &mdash; it asks whether barriers are
                  necessary or merely inherited. The{" "}
                  <Highlight color="blue">tension is the meaning</Highlight>. Frost
                  presents two valid positions: the narrator&rsquo;s reason and the
                  neighbour&rsquo;s tradition. Neither is wrong. The poem does not answer
                  its own question &mdash; it lets the reader sit with the ambiguity.
                </li>
                <li>
                  <strong>Overall theme</strong>: Human separation may be unnecessary, but
                  people cling to boundaries out of habit and fear. The poem is a gentle,
                  witty{" "}
                  <Highlight color="green">meditation on connection vs division</Highlight>.
                  The wall is both real (a stone barrier) and metaphorical (every boundary
                  humans build). The &ldquo;something&rdquo; that breaks the wall may be
                  nature, or it may be the human desire to connect &mdash; the part of us
                  that resists isolation. Frost&rsquo;s genius is that the poem works on
                  both levels simultaneously.
                </li>
              </ul>
            }
          />

          {/* Theme */}
          <div id="theme">
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
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              <Highlight color="yellow">Mending Wall</Highlight> explores the tension
              between <strong>tradition and reason</strong>. While the neighbour clings
              to the old saying &ldquo;Good fences make good neighbours,&rdquo; the poet
              questions whether walls are necessary when there is no real threat. The
              poem calls for <strong>breaking down barriers</strong> and building{" "}
              <Highlight color="green">harmony and brotherhood</Highlight>.
            </KeyPoint>
          </div>

          {/* Read & Respond */}
          <div id="read-and-respond-section" className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">Read &amp; Respond</h2>
            <ReadRespond items={READ_RESPOND} />
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