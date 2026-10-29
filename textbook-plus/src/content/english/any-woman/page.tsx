"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question: "Mention the underlying ideas in the expression 'pillars of the house'.",
    answer: (
      <>
        <Highlight color="yellow">Pillars</Highlight> symbolize{" "}
        <strong>strength, stability, and support</strong>. The mother is the
        structural foundation of the family &mdash; remove her and the entire
        household collapses, just as removing pillars brings down a building.
      </>
    ),
  },
  {
    question: "How does the poet portray the bond between a mother and her children?",
    answer: (
      <>
        The poet uses the images of{" "}
        <Highlight color="blue">warmth</Highlight> (children warm their hands
        at her), <Highlight color="yellow">light</Highlight> (she is their
        light of love alive), and{" "}
        <Highlight color="green">a sacred knot</Highlight> (a twist that holds
        them together in a ring from which no lost child wanders).
      </>
    ),
  },
  {
    question:
      "Comment on the expression 'from floor to roof'. Attempt to coin another expression without changing the meaning.",
    answer: (
      <>
        &ldquo;From floor to roof&rdquo; means{" "}
        <Highlight color="yellow">completely, in every part</Highlight>. The
        mother pervades the entire household. Another expression:{" "}
        <strong>&ldquo;from foundation to chimney&rdquo;</strong> or{" "}
        <strong>&ldquo;from corner to corner.&rdquo;</strong>
      </>
    ),
  },
  {
    question: "What is the symbolic significance of 'wind and snow'.",
    answer: (
      <>
        <Highlight color="pink">Wind and snow</Highlight> represent{" "}
        <strong>hardship, danger, and the harshness of the outside world</strong>.
        The mother is the protective wall and door that shields her family from
        these elements.
      </>
    ),
  },
  {
    question:
      "Explain, in your own words, the concluding line of the poem.",
    answer: (
      <>
        The final line &mdash;{" "}
        <em>&ldquo;Take me not till the children grow!&rdquo;</em> &mdash; is a{" "}
        <Highlight color="yellow">desperate plea</Highlight> to God. The mother
        asks not to be taken (by death) until her children are grown and
        self-sufficient, because without her they would be lost.
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
        <p>
          The poem works through one sustained figure &mdash; the mother as the
          house and everything inside it. Every other device exists to support
          that single claim: take her away and the house falls.
        </p>

        <h3
          id="device-metaphor"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Extended Metaphor
        </h3>
        <p>
          The poem is one{" "}
          <Highlight color="yellow">extended metaphor</Highlight>, held without
          a single &ldquo;like&rdquo; or &ldquo;as&rdquo;: the speaker does not
          resemble the house, she <em>is</em> it.
        </p>
        <p>
          Stanza by stanza she becomes the pillars and keystone (structure), the
          fire, sun and heat (warmth), the twist and knot (binding), the house
          from floor to roof (the whole), and the wall and door (protection).
        </p>
        <p>
          Because the comparison never relaxes, the mother is not compared to a
          home &mdash; she is the home, and each stanza removes one more thing
          the family could not do without.
        </p>

        <h3
          id="device-anaphora"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Anaphora
        </h3>
        <p>
          <Highlight color="blue">&ldquo;I am&rdquo;</Highlight> opens line
          after line, three times in the second stanza alone. The repetition
          gives the poem a <strong>litany-like rhythm</strong>, somewhere between
          a creed and an inventory of work.
        </p>

        <h3
          id="device-simile"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Simile
        </h3>
        <p>
          The one explicit comparison arrives in stanza 2, where a house without
          her would be{" "}
          <Highlight color="green">&ldquo;colder than a stone&rdquo;</Highlight>.
          Placed after three metaphors, the simile lands like a fact rather than
          a decoration.
        </p>

        <h3
          id="device-hyperbole"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Hyperbole
        </h3>
        <p>
          &ldquo;Take me away, and roof and wall / Would fall to ruin me
          utterly&rdquo; exaggerates a physical collapse to state an emotional
          truth. The house would not literally fall down; it would fall apart,
          which is worse.
        </p>

        <h3
          id="device-symbolism"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Symbolism
        </h3>
        <p>
          The <strong>pillars and keystone</strong> stand for strength, balance
          and support, and the <strong>hearth and sun</strong> for love and
          life-giving warmth.
        </p>
        <p>
          <strong>Wind and snow</strong> stand for the hardships of the world
          outside, and the <strong>manger</strong> for divine motherhood,
          humility and sacrifice.
        </p>

        <h3
          id="device-alliteration"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Alliteration
        </h3>
        <p>
          &ldquo;light of love alive&rdquo; repeats the <em>l</em> sound, and
          &ldquo;warp and woof&rdquo; the <em>w</em> sound. The effect is
          domestic music: the poem sounds like work being done.
        </p>

        <h3
          id="device-allusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Biblical Allusion
        </h3>
        <p>
          &ldquo;Thou whom a woman laid in a{" "}
          <Highlight color="pink">manger</Highlight>&rdquo; names Christ through
          his mother&rsquo;s act rather than his title. The allusion fuses Mary
          with the speaker, so a private plea becomes a prayer about motherhood
          itself.
        </p>

        <h3
          id="device-rhyme"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Rhyme, Rhythm and Form
        </h3>
        <p>
          Six quatrains carry a strict{" "}
          <Highlight color="blue">abab</Highlight> rhyme &mdash; house/wall and
          I/utterly in the first, hearth/earth and sun/stone in the second
          &mdash; with four beats to the line. The regularity is the point: the
          verse is as steady as the mother it describes.
        </p>
        <p>
          Only the last stanza disturbs it, and even there the rhyme holds while
          the sentence turns from declaration into prayer. The form stays calm
          while the feeling rises.
        </p>
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
          Discourses page: poet and title, summary and central idea, devices and
          style, then message and personal response.
        </p>

        <h3
          id="app-introduction"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          I. Introduction &mdash; Poet, Title, Mood and Theme
        </h3>
        <p>
          <em>Any Woman</em>, written by{" "}
          <Highlight color="yellow">Katharine Tynan</Highlight>, is a beautiful,
          thought-provoking and inspiring poem. Through it the poet presents a{" "}
          <strong>deep insight</strong> into the all-embracing power of a woman
          and her indispensable role in the family.
        </p>
        <p>
          The poem explores the self-effacing love of a mother who is the pillar
          and backbone of her home. The <strong>title</strong> is itself a
          gateway to that idea: no one particular woman is meant, but any woman
          who holds a household together.
        </p>
        <p>
          The mood moves from quiet, confident declaration to urgent prayer. The{" "}
          <strong>tone</strong> is assertive yet tender, and it turns desperate
          only in the last line.
        </p>

        <h3
          id="app-summary-theme"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          II. Summary and Central Idea
        </h3>
        <p>
          The poem revolves around a mother who names herself as everything her
          family depends on. In six quatrains she is the pillars and keystone of
          the house, the fire, sun and heat, the twist that binds her children,
          the house from floor to roof, and the wall and door against wind and
          snow.
        </p>
        <p>
          The poet portrays the ordinary work of a home &mdash; spreading the
          board, spinning curtains, shaking down for beds &mdash; to convey the
          message that love is labour. Without that labour the hearthstone
          stands cold and the children cannot thrive.
        </p>
        <p>
          The poem&rsquo;s <strong>central idea</strong> is meaningful because it
          connects with our lives: every family rests on someone whose work is
          rarely counted. Each stanza adds one more irreplaceable role, so the
          final plea feels earned rather than sentimental.
        </p>

        <h3
          id="app-devices"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          III. Poetic Devices, Language, Tone and Style
        </h3>
        <p>
          The poet uses one sustained literary device, the extended metaphor,
          and lets it carry the whole poem. Vivid <strong>imagery</strong> of the
          house &mdash; pillars, keystone, hearth, curtains, bed &mdash; helps
          readers see the family as a building that stands only while she is
          inside it.
        </p>
        <p>
          <strong>Anaphora</strong> in &ldquo;I am&rdquo; gives the lines a
          litany-like rhythm, and the single <strong>simile</strong>,
          &ldquo;colder than a stone&rdquo;, hardens the contrast between a home
          with her and a house without her. <strong>Hyperbole</strong> in
          &ldquo;roof and wall / Would fall to ruin me utterly&rdquo; states the
          emotional truth of collapse.
        </p>
        <p>
          <strong>Alliteration</strong> in &ldquo;light of love alive&rdquo; and
          &ldquo;warp and woof&rdquo; adds a musical quality, while the{" "}
          <strong>biblical allusion</strong> to the manger strengthens the
          central theme by making motherhood sacred.
        </p>
        <p>
          The <strong>language</strong> is simple yet expressive, and the{" "}
          <strong>tone</strong> is proud, tender and finally pleading. The poem
          is organised into six quatrains in strict abab rhyme, and its regular
          rhythm supports the steadiness the mother gives her family.
        </p>

        <h3
          id="app-critical"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          IV. Conclusion &mdash; Message, Personal Response and Favourite Lines
        </h3>
        <p>
          In conclusion, <em>Any Woman</em> is a meaningful and memorable poem
          that leaves a lasting impression. Its message that a family is held up
          by unseen, self-effacing love is timeless and thought-provoking.
        </p>
        <p>
          The poem encourages readers to reflect on their own lives and to
          notice the person who keeps the house standing. My{" "}
          <strong>favourite lines</strong> are &ldquo;I am the house from floor
          to roof&rdquo; because they turn the smallest chores into the
          structure of a life.
        </p>
        <p>
          Overall, the poem is an inspiring and worthwhile piece of literature
          that deserves appreciation.
        </p>
      </>
    ),
  },
];

export default function AnyWomanPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro author="Katharine Tynan" role="Poet" genre="Poem" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Any Woman</em> is a poem by{" "}
            <Highlight color="yellow">Katharine Tynan</Highlight>, an Irish-born
            writer known for her novels and poetry. The poem presents the{" "}
            <Highlight color="green">all-embracing power of a woman</Highlight>{" "}
            to hold a family together &mdash; she is the pillar, the fire, the
            wall, the house itself.
          </p>
          <p>
            <Highlight color="yellow">
              <strong>Central theme:</strong> the all-embracing power,
              indispensable role and self-effacing love of a woman as the
              ultimate pillar and backbone of the family.
            </Highlight>
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
                  <strong>Poet</strong>: Katharine Tynan. Form: 6 quatrains, strict{" "}
                  <Highlight color="blue">ABAB rhyme</Highlight>, four beats a line.
                </li>
                <li>
                  <strong>Speaker</strong>: A mother pleading to God &mdash; let me live
                  until my children are grown.
                </li>
                <li>
                  <strong>Central metaphor</strong>: The mother is the house itself &mdash;
                  pillars, fire, walls, door. Each stanza adds one more irreplaceable role.
                </li>
                <li>
                  <strong>Key quote</strong>:{" "}
                  <em>&ldquo;Take me not till the children grow!&rdquo;</em>
                </li>
                <li>
                  <strong>Theme</strong>: A mother&rsquo;s self-effacing love is the{" "}
                  <Highlight color="yellow">invisible structure</Highlight> holding a family
                  together &mdash; she is its pillar and backbone, and without her
                  everything collapses.
                </li>
                <li>
                  <strong>Tone</strong>: Shifts from quiet pride to{" "}
                  <Highlight color="pink">urgent prayer</Highlight>.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Title</strong>: &ldquo;Any Woman&rdquo; makes the speaker{" "}
                  <Highlight color="yellow">every woman</Highlight>, not one mother.
                  What is true of her is true of any woman who holds a household
                  together.
                </li>
                <li>
                  <strong>Stanza 1</strong>: She is the{" "}
                  <Highlight color="blue">pillars and keystone</Highlight> &mdash; the
                  structural foundation. Without her, everything collapses. The poem opens
                  with architecture: the mother as the physical framework of the home.
                </li>
                <li>
                  <strong>Stanza 2</strong>: She is the{" "}
                  <Highlight color="green">fire, sun, and heat</Highlight> &mdash; the source
                  of warmth. Without her, the house turns cold as stone. The metaphor shifts
                  from structure to element.
                </li>
                <li>
                  <strong>Stanza 3</strong>: Her children warm their hands at her. She is
                  their <Highlight color="yellow">light of love alive</Highlight>. Without
                  her, the hearthstone is cold and the children cannot thrive.
                </li>
                <li>
                  <strong>Stanza 4</strong>: She is the twist and knot of love holding the
                  children in a sacred ring. No child strays from her close tether. The
                  metaphor becomes <Highlight color="pink">physical binding</Highlight> &mdash;
                  thread, weaving, a knot that holds.
                </li>
                <li>
                  <strong>Stanza 5</strong>: She is the house itself &mdash; she decks the
                  walls, spreads the board, spins the curtains, and shakes down their beds.
                  Every domestic act is her doing.
                </li>
                <li>
                  <strong>Stanza 6</strong>: She is the wall against danger and the door
                  against snow. The poem ends with a prayer:{" "}
                  <em>&ldquo;Take me not till the children grow!&rdquo;</em> She asks for
                  time, not for herself, and the tone shifts from declaration to desperate
                  plea.
                </li>
                <li>
                  <strong>Tone progression</strong>: The poem moves from reverent statement
                  (&ldquo;I am the pillars&rdquo;) to urgent prayer (&ldquo;Take me
                  not!&rdquo;). Each stanza adds one more irreplaceable role, building
                  emotional momentum toward the final cry.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Central theme</strong>: the all-embracing power,
                  indispensable role and{" "}
                  <Highlight color="yellow">self-effacing love</Highlight> of a
                  woman as the ultimate pillar and backbone of the family. The
                  poem does not romanticise motherhood; it presents it as labour,
                  as architecture, as survival.
                </li>
                <li>
                  <strong>Title &mdash; &ldquo;Any Woman&rdquo;</strong>: the
                  indefinite title makes the speaker every woman, not one mother.
                  What is true of her is true of any woman who holds a household
                  together, so a private declaration becomes a general claim.
                </li>
                <li>
                  <strong>Form &amp; rhyme</strong>: Six quatrains in strict{" "}
                  <Highlight color="blue">ABAB rhyme</Highlight>, four beats to
                  the line. The regular rhythm mirrors the steadiness of the
                  mother&rsquo;s presence &mdash; she is constant, reliable,
                  rhythmic. The hymn-like measure also links the poem to prayer
                  and devotion.
                </li>
                <li>
                  <strong>Metaphor &mdash; woman as house</strong>: The entire poem is an{" "}
                  <Highlight color="green">extended metaphor</Highlight>. Stanza 1: she is
                  the pillars and keystone (structure). Stanza 2: she is the fire and sun
                  (warmth). Stanza 3: she is the light of love (illumination). Stanza 4:
                  she is the twist and knot (binding). Stanza 5: she is the house itself
                  (the whole). Stanza 6: she is the wall and door (protection). Each stanza
                  adds a new layer of identity, making her irreplaceable.
                </li>
                <li>
                  <strong>Warmth and life</strong>: without her the house is{" "}
                  <Highlight color="green">&ldquo;colder than a
                  stone&rdquo;</Highlight>, and the children who warm their hands
                  at her cannot thrive. The metaphor makes her the
                  family&rsquo;s life source as well as its structure.
                </li>
                <li>
                  <strong>Metaphor &mdash; love as binding</strong>: &ldquo;Twist and knot of
                  love&rdquo; in Stanza 4 evokes{" "}
                  <Highlight color="pink">thread and weaving</Highlight> &mdash; love as
                  something physically tied, holding children close. The word
                  &ldquo;sacred&rdquo; elevates it from domestic to spiritual. The
                  &ldquo;ring&rdquo; suggests both protection and enclosure &mdash; love as
                  both shelter and gentle imprisonment.
                </li>
                <li>
                  <strong>Household labour &mdash; &ldquo;from floor to roof&rdquo;</strong>:
                  she decks the walls, spreads the board, spins the curtains
                  &ldquo;warp and woof&rdquo; and shakes the down to make their
                  beds. The detail is unglamorous on purpose: love here is
                  untiring, unpaid work, and &ldquo;from floor to roof&rdquo;
                  claims every corner of the house as hers.
                </li>
                <li>
                  <strong>Imagery clusters</strong>: Three distinct clusters run through the
                  poem: <strong>architectural</strong> (pillars, keystone, walls, house,
                  door), <strong>elemental</strong> (fire, sun, heat, warmth, cold, snow),
                  and <strong>protective</strong> (wall, door, ring, tether). The
                  architectural images establish her as foundation; the elemental images
                  establish her as life-source; the protective images establish her as
                  guardian.
                </li>
                <li>
                  <strong>Tone progression</strong>: The poem shifts from{" "}
                  <Highlight color="yellow">reverent declaration</Highlight> in the opening
                  stanzas (&ldquo;I am the pillars&rdquo;) to{" "}
                  <Highlight color="pink">urgent prayer</Highlight> by the close
                  (&ldquo;Take me not!&rdquo;). The accumulation of metaphors builds
                  emotional momentum &mdash; each new role makes the final plea more
                  desperate. By Stanza 6, the reader understands exactly what would be lost.
                </li>
                <li>
                  <strong>Key quote &mdash; Christ reference</strong>: &ldquo;Thou whom a
                  woman laid in a manger&rdquo; is a direct appeal to Christ, linking this
                  mother&rsquo;s sacrifice to Mary&rsquo;s. The reference elevates the
                  poem from personal plea to universal prayer &mdash; this is not just one
                  mother speaking, but motherhood itself. The final line,{" "}
                  <em>&ldquo;Take me not till the children grow!&rdquo;</em>, is the
                  poem&rsquo;s emotional climax. The prayer is self-effacing: she
                  asks for time, not for herself &mdash; not to be spared
                  suffering, only to be spared absence while her children still
                  need her.
                </li>
                <li>
                  <strong>Critical comment</strong>: The poem&rsquo;s power lies in its{" "}
                  <Highlight color="blue">relentless accumulation</Highlight> &mdash; each
                  stanza adds one more irreplaceable role, making the final prayer feel
                  earned and urgent rather than sentimental. Tynan does not ask the reader
                  to pity the mother; she asks the reader to understand what would collapse
                  without her. The poem is not about weakness &mdash; it is about the
                  immense, unseen labor that holds a family together.
                </li>
              </ul>
            }
          />

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              A mother is the{" "}
              <Highlight color="yellow">pillar, fire, light, wall, and house</Highlight>{" "}
              of the family &mdash; its backbone. The poem&rsquo;s accumulating
              metaphors show that without her, everything collapses. The final
              prayer &mdash;{" "}
              <em>&ldquo;Take me not till the children grow!&rdquo;</em> &mdash;
              captures the{" "}
              <Highlight color="green">self-effacing love</Highlight> of
              motherhood.
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
