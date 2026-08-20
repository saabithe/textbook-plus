"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
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
    id: "the-poem",
    title: "The Poem",
    content: (
      <div className="my-6 px-6 py-5 rounded-2xl border border-border/50 bg-card">
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] italic">
          I am the pillars of the house;<br />
          The keystone of the arch am I.<br />
          Take me away, and roof and wall<br />
          Would fall to ruin me utterly.
        </p>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] italic mt-4">
          I am the fire upon the hearth,<br />
          I am the light of the good sun,<br />
          I am the heat that warms the earth,<br />
          Which else were colder than a stone.
        </p>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] italic mt-4">
          At me the children warm their hands;<br />
          I am their light of love alive.<br />
          Without me cold the hearthstone stands,<br />
          Nor could the precious children thrive.
        </p>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] italic mt-4">
          I am the twist that holds together<br />
          The children in its sacred ring,<br />
          Their knot of love, from whose close tether<br />
          No lost child goes a-wandering.
        </p>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] italic mt-4">
          I am the house from floor to roof,<br />
          I deck the walls, the board I spread;<br />
          I spin the curtains, warp and woof,<br />
          And shake the down to be their bed.
        </p>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] italic mt-4">
          I am their wall against all danger,<br />
          Their door against the wind and snow,<br />
          Thou whom a woman laid in a manger,<br />
          Take me not till the children grow!
        </p>
      </div>
    ),
  },
  {
    id: "poetic-devices",
    title: "Poetic Devices",
    content: (
      <>
        <h3
          id="device-metaphor"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Metaphor
        </h3>
        <p>
          The poem is built entirely on{" "}
          <Highlight color="yellow">metaphor</Highlight>. The mother is
          compared to structural elements (pillars, keystone, house, wall,
          door), natural forces (fire, sun, heat), and domestic objects
          (twist, knot, curtains, bed). Each metaphor reinforces her{" "}
          <strong>indispensability</strong>.
        </p>

        <h3
          id="device-anaphora"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Anaphora
        </h3>
        <p>
          The repetition of{" "}
          <Highlight color="blue">&ldquo;I am&rdquo;</Highlight> at the
          beginning of lines creates a{" "}
          <strong>litany-like rhythm</strong>, emphasizing the mother&rsquo;s
          all-encompassing presence. She is everything, everywhere, all at
          once.
        </p>

        <h3
          id="device-rhyme"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Rhyme Scheme
        </h3>
        <p>
          Each stanza follows an{" "}
          <Highlight color="green">ABAB rhyme scheme</Highlight>{" "}
          (house/utterly, hearth/stone, hands/thrive, together/tether, etc.).
          This regular structure mirrors the{" "}
          <strong>order and stability</strong> the mother provides.
        </p>

        <h3
          id="device-allusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Biblical Allusion
        </h3>
        <p>
          The final stanza&rsquo;s{" "}
          <Highlight color="pink">&ldquo;Thou whom a woman laid in a
          manger&rdquo;</Highlight> alludes to the{" "}
          <strong>Virgin Mary and the birth of Christ</strong>. By invoking
          this image, the poet elevates motherhood to a sacred, divine act
          &mdash; and makes the plea all the more powerful.
        </p>
      </>
    ),
  },
  {
    id: "appreciation",
    title: "Poem Appreciation",
    content: (
      <>
        <h3
          id="app-introduction"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. Introduction
        </h3>
        <p>
          <em>Any Woman</em> is a lyric poem by{" "}
          <Highlight color="yellow">Katharine Tynan</Highlight> (1859&ndash;1931),
          an Irish-born writer. The poem is a first-person declaration by a
          mother who describes her indispensable role in the family through a
          series of powerful metaphors. The tone is{" "}
          <strong>assertive yet tender</strong>, building to a desperate prayer.
        </p>

        <h3
          id="app-summary-theme"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Summary and Theme
        </h3>
        <p>
          The poem presents a mother as the{" "}
          <Highlight color="blue">foundation, warmth, light, and protection</Highlight>{" "}
          of the family. She is the pillars that hold the house, the fire that
          warms it, the twist that binds the children, and the wall against
          danger. The central theme is the{" "}
          <strong>all-encompassing, irreplaceable nature of motherhood</strong>{" "}
          &mdash; without her, everything collapses.
        </p>

        <h3
          id="app-devices"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          3. Poetic Devices and Style
        </h3>
        <p>
          The poem uses an <Highlight color="green">ABAB rhyme scheme</Highlight>{" "}
          across six quatrains. <Highlight color="yellow">Metaphor</Highlight>{" "}
          is the dominant device: the mother is compared to pillars, fire, sun,
          twist, house, wall, and door. <strong>Anaphora</strong> (&ldquo;I
          am&rdquo;) creates a litany-like rhythm. A{" "}
          <Highlight color="pink">biblical allusion</Highlight> in the final
          stanza elevates motherhood to the sacred. The style is{" "}
          <strong>simple, direct, and emotionally powerful</strong>.
        </p>

        <h3
          id="app-critical"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          4. Critical Comment
        </h3>
        <p>
          What makes <em>Any Woman</em> powerful is its{" "}
          <Highlight color="yellow">accumulation</Highlight>. Each stanza adds
          another layer of the mother&rsquo;s role &mdash; structural, thermal,
          emotional, domestic, protective &mdash; until the final plea feels
          earned and inevitable. The poem resonates beyond its Victorian
          context: every family depends on someone who{" "}
          <strong>holds everything together</strong>, often invisibly.
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
            <AuthorCard name="Katharine Tynan" />
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
            <Highlight color="yellow">Katharine Tynan</Highlight> (1859&ndash;1931),
            an Irish-born writer known for her novels and poetry. The poem
            presents the{" "}
            <Highlight color="green">all-embracing power of a woman</Highlight>{" "}
            to hold a family together &mdash; she is the pillar, the fire, the
            wall, the house itself.
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
                  <strong>Poet</strong>: Katharine Tynan. Form: 6 quatrains, simple{" "}
                  <Highlight color="blue">ABCB hymn-like rhyme</Highlight>.
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
                  <strong>Theme</strong>: A mother&rsquo;s love is the{" "}
                  <Highlight color="yellow">invisible structure</Highlight> holding a family
                  together &mdash; without her, everything collapses.
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
                  her, the hearthstone is cold. The metaphor narrows from the house to the
                  children&rsquo;s direct experience.
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
                  <em>&ldquo;Take me not till the children grow!&rdquo;</em> The tone shifts
                  from declaration to desperate plea.
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
                  <strong>Theme</strong>: A mother&rsquo;s love is the{" "}
                  <Highlight color="yellow">invisible structure</Highlight> holding a family
                  together &mdash; without her, everything falls apart. The poem does not
                  romanticise motherhood; it presents it as labor, as architecture, as
                  survival.
                </li>
                <li>
                  <strong>Form &amp; rhyme</strong>: Six quatrains with a simple{" "}
                  <Highlight color="blue">ABCB hymn-like rhyme</Highlight> scheme. The
                  regular rhythm mirrors the steadiness of the mother&rsquo;s presence &mdash;
                  she is constant, reliable, rhythmic. The hymn form also links the poem to
                  prayer and devotion.
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
                  <strong>Metaphor &mdash; love as binding</strong>: &ldquo;Twist and knot of
                  love&rdquo; in Stanza 4 evokes{" "}
                  <Highlight color="pink">thread and weaving</Highlight> &mdash; love as
                  something physically tied, holding children close. The word
                  &ldquo;sacred&rdquo; elevates it from domestic to spiritual. The
                  &ldquo;ring&rdquo; suggests both protection and enclosure &mdash; love as
                  both shelter and gentle imprisonment.
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
                  poem&rsquo;s emotional climax.
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
              of the family. The poem&rsquo;s accumulating metaphors show that
              without her, everything collapses. The final prayer &mdash;{" "}
              <em>&ldquo;Take me not till the children grow!&rdquo;</em> &mdash;
              captures the{" "}
              <Highlight color="green">desperation and selflessness</Highlight> of
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
