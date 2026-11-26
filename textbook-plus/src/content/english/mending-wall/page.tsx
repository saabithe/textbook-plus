"use client";

import { useState } from "react";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Comparison } from "@/components/content/Comparison";
import { ReadRespond } from "@/components/content/ReadRespond";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

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
];

const AIDER = (
  <>
    <p className="mt-4 text-[0.95rem] text-muted-foreground">
      Use this when a question asks how Frost builds meaning through poetic devices.
    </p>

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Metaphor
    </h3>
    <TableCard
      headers={["Line", "What it does"]}
      rows={[
        {
          cells: [
            "“And some are loaves and some so nearly balls”",
            "Flat and round boulders are compared to loaves and balls.",
          ],
        },
        {
          cells: [
            "“Bringing a stone grasped firmly by the top / In each hand, like an old-stone savage armed.”",
            "The neighbour is presented as a primitive warrior holding stones.",
          ],
        },
      ]}
      caption="The primitive-warrior image also sharpens the contrast between the two men."
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Personification
    </h3>
    <TableCard
      headers={["Line", "What it does"]}
      rows={[
        {
          cells: [
            "“Something there is that doesn’t love a wall”",
            "Nature is given the human feeling of disliking barriers.",
          ],
        },
        {
          cells: [
            "“My apple trees will never get across / And eat the cones under his pines”",
            "The trees are made to walk across and eat.",
          ],
        },
        {
          cells: [
            "“Stay where you are until our backs are turned!”",
            "The stones are addressed as listeners who can obey.",
          ],
        },
        {
          cells: [
            "“Spring is the mischief in me”",
            "Spring is made the source of the speaker’s playful impulse to question.",
          ],
        },
      ]}
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Symbolism
    </h3>
    <TableCard
      headers={["Symbol", "Meaning"]}
      rows={[
        {
          cells: [
            "Wall",
            "A physical boundary, and psychological barriers such as prejudice, isolation and national or racial division.",
          ],
        },
        {
          cells: [
            "Darkness",
            "The shade of trees, and ignorance, blind tradition or mental darkness.",
          ],
        },
        {
          cells: [
            "Spring",
            "The season of repair, renewal, questioning and dismantling old prejudice.",
          ],
        },
        {
          cells: [
            "Elves",
            "Unseen natural forces, or mystical impulses that oppose artificial divisions.",
          ],
        },
        {
          cells: ["“Walk the line”", "The wall and the line as boundaries and traditions."],
        },
        {
          cells: [
            "“We keep the wall between us”",
            "Emotional and physical distance between the neighbours.",
          ],
        },
      ]}
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Irony, paradox and contrast
    </h3>
    <TableCard
      headers={["Moment", "Effect"]}
      rows={[
        {
          cells: [
            "The speaker starts the repair",
            "Situational irony: the man who argues against the wall initiates its mending.",
          ],
        },
        {
          cells: [
            "Rebuilding brings them together",
            "The only shared event is the ritual that keeps them apart.",
          ],
        },
        {
          cells: [
            "Two neighbours",
            "The questioning, progressive speaker is set against the traditional, uncritical neighbour.",
          ],
        },
        {
          cells: [
            "“Set the wall between us”",
            "They cooperate to rebuild the very thing that separates them.",
          ],
        },
        {
          cells: [
            "Pines and apple trees",
            "The contrast mocks the idea that a wall is needed here.",
          ],
        },
        {
          cells: ["The apple-tree joke", "Irony and humour expose the wall’s uselessness."],
        },
      ]}
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Repetition, refrain and sound
    </h3>
    <TableCard
      headers={["Line", "Device"]}
      rows={[
        {
          cells: [
            "“Something there is that doesn’t love a wall”",
            "Refrain in lines 1 and 35.",
          ],
        },
        {
          cells: [
            "“Good fences make good neighbours.”",
            "Refrain in lines 27 and 45.",
          ],
        },
        {
          cells: ["“Walling in or walling out”", "Repetition and contrast."],
        },
        {
          cells: ["“Not one stone on a stone”", "Alliteration."],
        },
        {
          cells: ["“Yelping dogs”", "Onomatopoeia and auditory imagery."],
        },
      ]}
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Imagery and other devices
    </h3>
    <TableCard
      headers={["Line", "What it does"]}
      rows={[
        {
          cells: [
            "“Sends a frozen-ground-swell under it / Spills the upper boulders in the sun”",
            "Visual and tactile imagery of the wall breaking.",
          ],
        },
        {
          cells: ["“Gaps even two can pass abreast”", "Hyperbole."],
        },
        {
          cells: ["“Rabbit out of hiding”", "Imagery of the hunt."],
        },
        {
          cells: ["“We wear our fingers rough”", "Tactile imagery of handling stones."],
        },
        {
          cells: ["“Where there are cows?”", "Rhetorical question."],
        },
        {
          cells: ["“He moves in darkness”", "Metaphor for unexamined tradition."],
        },
      ]}
    />
  </>
);

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
            <ChapterIntro author="Robert Frost" role="Poet" genre="Poem" />
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

          <h2
            id="central-theme"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Central Theme
          </h2>
          <p>
            The conflict between nature&rsquo;s impulse to break barriers and
            humanity&rsquo;s obsession with constructing physical and psychological
            walls.
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
                  <em>&ldquo;Something there is that doesn&rsquo;t love a wall,&rdquo;</em>{" "}
                  &mdash; a mysterious force, probably nature, dislikes walls and
                  barriers.
                </li>
                <li>
                  <em>
                    &ldquo;That sends a frozen-ground-swell under it / And spills the
                    upper boulders in the sun,&rdquo;
                  </em>{" "}
                  &mdash; winter ground freezes and swells, pushing the wall from
                  underneath; the top stones fall onto open sunny ground.
                </li>
                <li>
                  <em>&ldquo;And makes gaps even two can pass abreast.&rdquo;</em>{" "}
                  &mdash; the gaps become wide enough for two people side by side.
                </li>
                <li>
                  <em>&ldquo;The work of hunters is another thing:&rdquo;</em>{" "}
                  &mdash; hunters also break the wall while chasing animals such as
                  rabbits.
                </li>
                <li>
                  <em>&ldquo;I have come after them and made repair&rdquo;</em>{" "}
                  &mdash; the speaker comes later to fix the wall.
                </li>
                <li>
                  <em>&ldquo;Where they would have left not one stone on a stone,&rdquo;</em>{" "}
                  &mdash; the hunters would have completely destroyed the wall.
                </li>
                <li>
                  <em>&ldquo;But they would have the rabbit out of hiding,&rdquo;</em>{" "}
                  &mdash; they break the wall to chase rabbits out of hiding.
                </li>
                <li>
                  <em>&ldquo;To please the yelping dogs.&rdquo;</em>{" "}
                  &mdash; the hunt is for the barking dogs.
                </li>
                <li>
                  <em>&ldquo;The gaps I mean,&rdquo;</em>{" "}
                  &mdash; the speaker refers to these particular gaps.
                </li>
                <li>
                  <em>&ldquo;No one has seen them made or heard them made,&rdquo;</em>{" "}
                  &mdash; nobody saw or heard the gaps appear.
                </li>
                <li>
                  <em>&ldquo;But at spring mending-time we find them there.&rdquo;</em>{" "}
                  &mdash; the gaps are found again in spring.
                </li>
                <li>
                  <em>&ldquo;I let my neighbour know beyond the hill;&rdquo;</em>{" "}
                  &mdash; the speaker tells the neighbour who lives over the hill.
                </li>
                <li>
                  <em>&ldquo;And on a day we meet to walk the line&rdquo;</em>{" "}
                  &mdash; they meet on a chosen day and walk along the wall.
                </li>
                <li>
                  <em>&ldquo;And set the wall between us once again.&rdquo;</em>{" "}
                  &mdash; they rebuild the boundary between them.
                </li>
                <li>
                  <em>&ldquo;We keep the wall between us as we go.&rdquo;</em>{" "}
                  &mdash; they stay on opposite sides, physically and symbolically
                  separated.
                </li>
                <li>
                  <em>&ldquo;To each the boulders that have fallen to each.&rdquo;</em>{" "}
                  &mdash; each man repairs the stones that fell on his own side.
                </li>
                <li>
                  <em>&ldquo;And some are loaves and some so nearly balls&rdquo;</em>{" "}
                  &mdash; the stones are shaped like bread loaves and round balls.
                </li>
                <li>
                  <em>&ldquo;We have to use a spell to make them balance:&rdquo;</em>{" "}
                  &mdash; balancing the stones feels like magic.
                </li>
                <li>
                  <em>&ldquo;Stay where you are until our backs are turned!&rdquo;</em>{" "}
                  &mdash; the speaker jokes that the stones must obey a magic command.
                </li>
                <li>
                  <em>&ldquo;We wear our fingers rough with handling them.&rdquo;</em>{" "}
                  &mdash; their hands become rough and tired from lifting stones.
                </li>
                <li>
                  <em>&ldquo;Oh, just another kind of outdoor game,&rdquo;</em>{" "}
                  &mdash; the speaker treats wall-mending as a silly game.
                </li>
                <li>
                  <em>&ldquo;One on a side. It comes to little more:&rdquo;</em>{" "}
                  &mdash; each man stays on his own side, so little is achieved.
                </li>
                <li>
                  <em>&ldquo;There where it is we do not need the wall:&rdquo;</em>{" "}
                  &mdash; at that place, the wall is unnecessary.
                </li>
                <li>
                  <em>&ldquo;He is all pine and I am apple orchard.&rdquo;</em>{" "}
                  &mdash; the neighbour has pines and the speaker has apple trees.
                </li>
                <li>
                  <em>&ldquo;My apple trees will never get across.&rdquo;</em>{" "}
                  &mdash; the speaker jokes that his apple trees cannot cross into the
                  neighbour&rsquo;s land.
                </li>
                <li>
                  <em>&ldquo;And eat the cones under his pines, I tell him.&rdquo;</em>{" "}
                  &mdash; he adds that the trees will not eat the pine cones.
                </li>
                <li>
                  <em>&ldquo;He only says, &lsquo;Good fences make good neighbours.&rsquo;&rdquo;</em>{" "}
                  &mdash; the neighbour ignores the joke and repeats his belief.
                </li>
                <li>
                  <em>&ldquo;Spring is the mischief in me, and I wonder&rdquo;</em>{" "}
                  &mdash; spring makes the speaker feel playful and rebellious.
                </li>
                <li>
                  <em>&ldquo;If I could put a notion in his head:&rdquo;</em>{" "}
                  &mdash; he wants the neighbour to question the belief.
                </li>
                <li>
                  <em>&ldquo;&lsquo;Why do they make good neighbours? Isn&rsquo;t it&rdquo;</em>{" "}
                  &mdash; he asks why fences improve neighbourliness.
                </li>
                <li>
                  <em>&ldquo;Where there are cows? But here there are no cows.&rdquo;</em>{" "}
                  &mdash; fences help with cows, but there are no cows here.
                </li>
                <li>
                  <em>&ldquo;Before I built a wall I&rsquo;d ask to know&rdquo;</em>{" "}
                  &mdash; the speaker would ask why before building a wall.
                </li>
                <li>
                  <em>&ldquo;What I was walling in or walling out,&rdquo;</em>{" "}
                  &mdash; he wants to know what is kept inside and outside.
                </li>
                <li>
                  <em>&ldquo;And to whom I was like to give offence.&rdquo;</em>{" "}
                  &mdash; he wants to know who might be hurt or offended.
                </li>
                <li>
                  <em>&ldquo;Something there is that doesn&rsquo;t love a wall,&rdquo;</em>{" "}
                  &mdash; he repeats the idea that nature or truth resists walls.
                </li>
                <li>
                  <em>&ldquo;That wants it down. I could say &lsquo;Elves&rsquo; to him,&rdquo;</em>{" "}
                  &mdash; he jokes that magical elves want the wall down.
                </li>
                <li>
                  <em>&ldquo;But it&rsquo;s not elves exactly, and I&rsquo;d rather&rdquo;</em>{" "}
                  &mdash; the force is not really elves; it is an indescribable feeling
                  and truth.
                </li>
                <li>
                  <em>&ldquo;He said it for himself. I see him there,&rdquo;</em>{" "}
                  &mdash; the speaker wishes the neighbour had realised this himself,
                  and watches him.
                </li>
                <li>
                  <em>&ldquo;Bringing a stone grasped firmly by the top&rdquo;</em>{" "}
                  &mdash; the neighbour carries a heavy stone by its top.
                </li>
                <li>
                  <em>&ldquo;In each hand, like an old-stone savage armed.&rdquo;</em>{" "}
                  &mdash; he is compared to a primitive warrior holding stones as
                  weapons.
                </li>
                <li>
                  <em>&ldquo;He moves in darkness as it seems to me,&rdquo;</em>{" "}
                  &mdash; the speaker sees the neighbour as living in ignorance and
                  stubbornness.
                </li>
                <li>
                  <em>&ldquo;Not of woods only and the shade of trees.&rdquo;</em>{" "}
                  &mdash; this darkness is not only physical shade but a lack of
                  open-mindedness.
                </li>
                <li>
                  <em>&ldquo;He will not go behind his father&rsquo;s saying,&rdquo;</em>{" "}
                  &mdash; he refuses to question the belief he inherited.
                </li>
                <li>
                  <em>&ldquo;And he likes having thought of it so well&rdquo;</em>{" "}
                  &mdash; he is proud of repeating the old saying as if it were his own
                  idea.
                </li>
                <li>
                  <em>&ldquo;He says again, &lsquo;Good fences make good neighbours.&rsquo;&rdquo;</em>{" "}
                  &mdash; he repeats the unchanged belief.
                </li>
              </ul>
            }
          />

          {/* Aider */}
          <div className="my-10 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
              <span className="text-sm font-extrabold tracking-tight text-foreground">
                Aider
              </span>
              <span className="t-micro">Answer kit</span>
            </div>
            <div className="px-4 pb-5 sm:px-5">{AIDER}</div>
          </div>

          {/* Read & Respond */}
          <div id="read-and-respond-section" className="mt-14">
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