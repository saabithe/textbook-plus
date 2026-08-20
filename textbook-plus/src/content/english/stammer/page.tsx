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

const POEM_LINES = [
  "Stammer is no handicap",
  "It is a mode of speech.",
  "Stammer is the silence that falls",
  "between the word and its meaning,",
  "just as lameness is the",
  "silence that falls between",
  "the word and the deed.",
  "",
  "Did stammer precede language",
  "or succeed it?",
  "Is it only a dialect or",
  "a language itself?",
  "These questions make",
  "the linguists stammer.",
  "",
  "Each time we stammer",
  "we are offering a sacrifice",
  "to the God of meanings.",
  "",
  "When a whole people stammer",
  "Stammer becomes their mother tongue;",
  "just as it is with us now.",
  "",
  "God too must have stammered",
  "when He created man.",
  "That is why all the words of man",
  "carry different meanings.",
  "That is why everything he utters",
  "from his prayers to his commands",
  "stammers,",
  "like poetry.",
];

const QA_ITEMS = [
  {
    question: "What does the poet think of stammer primarily?",
    answer: (
      <>
        The poet considers stammer not a{" "}
        <Highlight color="yellow">handicap</Highlight> but a legitimate{" "}
        <strong>mode of speech</strong>. It is the silence between a word and
        its meaning &mdash; a natural part of human expression, not a
        deficiency.
      </>
    ),
  },
  {
    question: "How does the poet link stammer and lameness to silence?",
    answer: (
      <>
        Stammer is the silence between the{" "}
        <Highlight color="blue">word and its meaning</Highlight>. Lameness is
        the silence between the{" "}
        <Highlight color="green">word and the deed</Highlight>. Both represent
        gaps in the space between intention and expression &mdash; natural,
        human pauses that are part of life.
      </>
    ),
  },
  {
    question: "What, according to the poet, does a person do when he stammers?",
    answer: (
      <>
        Each time a person stammers, he is{" "}
        <Highlight color="yellow">offering a sacrifice</Highlight> to the God
        of meanings. The struggle to articulate is presented as a sacred act
        &mdash; a devotion to the pursuit of meaning itself.
      </>
    ),
  },
  {
    question: "Why does the poet refer to linguists here?",
    answer: (
      <>
        The poet asks whether stammer preceded or succeeded language, and
        whether it is a dialect or a language itself. These are{" "}
        <Highlight color="pink">philosophical questions</Highlight> that even
        linguists cannot answer definitively &mdash; the questions themselves
        make the linguists stammer. This cleverly elevates stammering above
        academic categorization.
      </>
    ),
  },
  {
    question: "When does stammer become a social phenomenon?",
    answer: (
      <>
        When a{" "}
        <Highlight color="yellow">whole people stammer</Highlight>, stammer
        becomes their mother tongue. The poet draws a parallel to his own
        community &mdash; &ldquo;just as it is with us now&rdquo; &mdash;
        suggesting that collective struggle in expression becomes a shared
        linguistic identity.
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
          K. Satchidanandan
        </p>
        <div className="space-y-1 text-foreground/90 text-[1.0625rem] leading-[1.85]">
          {POEM_LINES.map((line, i) =>
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
          id="device-metaphor"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Metaphor
        </h3>
        <p>
          Stammer is described as{" "}
          <Highlight color="yellow">&ldquo;the silence that falls between the
          word and its meaning&rdquo;</Highlight> &mdash; a metaphor that
          reframes stammering as a natural gap in expression rather than a
          defect. The entire poem is built on this central metaphor.
        </p>
        <h3
          id="device-repetition"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Repetition
        </h3>
        <p>
          The word &ldquo;stammer&rdquo; is repeated throughout the poem,
          creating a rhythmic{" "}
          <Highlight color="blue">stuttering effect</Highlight> that mirrors
          the subject itself. The repetition normalizes the act &mdash; the
          more we hear the word, the less unusual it becomes.
        </p>
        <h3
          id="device-parallelism"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Parallelism
        </h3>
        <p>
          The poem uses parallel structures: stammer ↔ silence between word
          and meaning; lameness ↔ silence between word and deed. This{" "}
          <Highlight color="green">structural mirroring</Highlight> elevates
          stammering by placing it alongside other human experiences of gap
          and delay.
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
            <em>Stammer</em> by K. Satchidanandan is a powerful free-verse poem
            that redefines stammering as a legitimate form of expression. Written
            in accessible language, the poem challenges the reader to reconsider
            what constitutes &ldquo;normal&rdquo; speech.
          </p>
        </Callout>
        <p>
          The poem&rsquo;s argument progresses through four stages: stammer as
          natural silence (stanza 1), stammer as philosophical mystery (stanza
          2), stammer as sacrifice (stanza 3), and stammer as universal human
          condition (stanzas 4-5). The final stanza&rsquo;s reference to God
          stammering when creating man is a{" "}
          <Highlight color="yellow">bold theological claim</Highlight> &mdash;
          if God stammered, then all human language carries the seed of
          imperfection.
        </p>
      </>
    ),
  },
];

export default function StammerPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="K. Satchidanandan" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Stammer</em> is a short but philosophically rich poem by{" "}
            <Highlight color="yellow">K. Satchidanandan</Highlight>, one of
            India&rsquo;s most respected poets, writing in Malayalam and English.
            A pioneer of modern Malayalam poetry, he was shortlisted for the
            Nobel Prize for Literature in 2011.
          </p>
          <p>
            In this poem, Satchidanandan redefines stammering &mdash; typically
            seen as a speech defect &mdash; as a{" "}
            <Highlight color="blue">legitimate mode of expression</Highlight>.
            The poem builds from a personal observation to a universal claim:
            all human language is a form of stammering.
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
                  <strong>Poet</strong>: K. Satchidanandan &mdash; Malayalam
                  poet, Nobel shortlisted 2011.
                </li>
                <li>
                  <strong>Central claim</strong>: Stammer is not a handicap but
                  a{" "}
                  <Highlight color="yellow">mode of speech</Highlight>.
                </li>
                <li>
                  <strong>Key metaphor</strong>: Stammer = silence between word
                  and meaning; lameness = silence between word and deed.
                </li>
                <li>
                  <strong>Philosophical question</strong>: Did stammer precede
                  or succeed language?
                </li>
                <li>
                  <strong>Universal claim</strong>: God stammered when creating
                  man &mdash; all language carries different meanings.
                </li>
                <li>
                  <strong>Closing</strong>: Everything humans utter &ldquo;stammers,
                  like poetry.&rdquo;
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  The poem opens by declaring stammer is not a handicap but a
                  mode of speech. It is the{" "}
                  <Highlight color="yellow">silence between word and
                  meaning</Highlight> &mdash; just as lameness is the silence
                  between word and deed. Both are natural gaps in human
                  expression.
                </li>
                <li>
                  The poet poses philosophical questions: did stammer precede or
                  succeed language? Is it a dialect or a language itself? These
                  questions are so profound that they make even{" "}
                  <Highlight color="blue">linguists stammer</Highlight>.
                </li>
                <li>
                  Each act of stammering is presented as a{" "}
                  <Highlight color="green">sacrifice to the God of
                  meanings</Highlight> &mdash; a sacred offering in the pursuit
                  of expression. The struggle to articulate becomes devotion.
                </li>
                <li>
                  When a whole people stammer, it becomes their mother tongue.
                  The poet draws a parallel to his own community &mdash;
                  &ldquo;just as it is with us now&rdquo; &mdash; suggesting
                  collective struggle becomes shared identity.
                </li>
                <li>
                  The final stanza makes a bold theological claim: God must have
                  stammered when creating man, which is why all human words
                  carry different meanings. Everything humans utter, from
                  prayers to commands, stammers &mdash;{" "}
                  <strong>like poetry</strong>.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Reframing disability</strong>: The poem&rsquo;s opening
                  move is radical: it declares stammer is no handicap. By
                  defining stammer as &ldquo;the silence that falls between the
                  word and its meaning,&rdquo; Satchidanandan{" "}
                  <Highlight color="yellow">normalizes</Highlight> what society
                  treats as abnormal. The parallel with lameness extends this
                  logic &mdash; both are natural pauses, not deficiencies.
                </li>
                <li>
                  <strong>Philosophical depth</strong>: The questions about
                  whether stammer precedes or succeeds language, and whether it
                  is a dialect or language itself, are not rhetorical &mdash;
                  they are genuine{" "}
                  <Highlight color="blue">philosophical puzzles</Highlight> about
                  the nature of language. That even linguists stammer at these
                  questions suggests that stammering is fundamental to human
                  cognition, not peripheral to it.
                </li>
                <li>
                  <strong>Sacred struggle</strong>: Each stammer is a
                  &ldquo;sacrifice to the God of meanings&rdquo; &mdash; a
                  striking image that transforms speech difficulty into{" "}
                  <Highlight color="green">spiritual practice</Highlight>. The
                  act of trying to speak, even imperfectly, is presented as
                  devotion to the pursuit of meaning.
                </li>
                <li>
                  <strong>Collective identity</strong>: When &ldquo;a whole
                  people stammer,&rdquo; it becomes their mother tongue. The
                  poet&rsquo;s aside &mdash; &ldquo;just as it is with
                  us&rdquo; &mdash; grounds this in his own experience as a
                  Malayalam poet navigating between languages. The gap between
                  languages is itself a form of collective stammer.
                </li>
                <li>
                  <strong>Theological claim</strong>: The poem&rsquo;s most
                  audacious moment: God &ldquo;must have stammered&rdquo; when
                  creating man. This is why words carry{" "}
                  <Highlight color="yellow">multiple meanings</Highlight> &mdash;
                  the ambiguity of language is divinely ordained, not a flaw.
                  The stammer is built into creation itself.
                </li>
                <li>
                  <strong>Poetry as stammer</strong>: The closing comparison
                  &mdash; &ldquo;like poetry&rdquo; &mdash; collapses the
                  distinction between stammering and artistic expression.
                  Poetry&rsquo;s ambiguity, layered meanings, and deliberate
                  pauses are themselves forms of stammer. The poem thus argues
                  that{" "}
                  <Highlight color="green">all great expression</Highlight>{" "}
                  embraces imperfection &mdash; that beauty lives in the gap
                  between word and meaning.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="language-and-meaning"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Language and Meaning
            </h3>
            <p>
              The poem questions whether stammer precedes or succeeds language, and
              whether it is a dialect or a language itself. These questions suggest
              that <Highlight color="blue">meaning is always imperfect</Highlight>{" "}
              &mdash; all speech is a kind of stammer, struggling to bridge the gap
              between thought and word.
            </p>
            <h3
              id="imperfection-as-universal"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Imperfection as Universal
            </h3>
            <p>
              The final stanza declares that God &ldquo;must have stammered&rdquo;
              when creating man, which is why all human words carry different
              meanings. This reframes imperfection as{" "}
              <Highlight color="yellow">divine origin</Highlight> &mdash; the
              diversity and ambiguity of language is not a flaw but a design.
            </p>
            <h3
              id="poetry-itself"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Poetry as Stammer
            </h3>
            <p>
              The poem&rsquo;s closing word &mdash; &ldquo;like poetry&rdquo; &mdash;
              draws a startling parallel. Poetry, with its ambiguity, layered
              meanings, and deliberate pauses, is itself a form of stammering. The
              poem thus argues that{" "}
              <Highlight color="green">all great expression</Highlight> embraces
              imperfection.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Stammer is not a handicap but a{" "}
              <Highlight color="yellow">mode of speech</Highlight> &mdash; the
              natural silence between word and meaning. The poem argues that all
              human language carries imperfection, that even God stammered when
              creating man, and that poetry itself is a form of beautiful
              stammering. Embracing imperfection is embracing our humanity.
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
