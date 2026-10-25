"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question:
      "Why does the poet dislike sitting in a dentist's chair with his mouth wide open?",
    answer: (
      <>
        The poet finds the experience a combination of{" "}
        <Highlight color="yellow">physical and mental torture</Highlight>. He
        describes it as lacking dignity, with his jaw digging into his chest,
        fingernails digging into his palms, and his mouth being worked on like a
        construction site.
      </>
    ),
  },
  {
    question:
      "Why does one find it hard to keep calm while sitting before a dentist?",
    answer: (
      <>
        It is hard to be self-possessed when your jaw is digging into your chest
        and your fingernails are{" "}
        <Highlight color="pink">making alterations in your palm lines</Highlight>
        . The poet captures the physical discomfort that makes composure
        impossible &mdash; the position is &ldquo;one of the two or three in life
        most lacking in dignity.&rdquo;
      </>
    ),
  },
  {
    question:
      "How, according to the poet, does one lose one's dignity before a dentist?",
    answer: (
      <>
        The mouth becomes a{" "}
        <Highlight color="blue">construction site</Highlight> &mdash; &ldquo;a
        section of road that is being worked on,&rdquo; cluttered with stone
        crushers, concrete mixers, drills, and steam rollers. Every nerve is
        being irked. The poet loses all composure and the ability to project
        &ldquo;cheery benignity.&rdquo;
      </>
    ),
  },
  {
    question: "What makes the circumstances terrible?",
    answer: (
      <>
        The worst part is that{" "}
        <Highlight color="yellow">it&rsquo;s all done with a mirror</Highlight>.
        The dentist uses a mirror in one hand and a crowbar in the other, and the
        poet fears he might get left and right mixed up &mdash; just as one does
        when trying to tie a bow tie with a mirror.
      </>
    ),
  },
  {
    question:
      "What, according to the poet, is the danger in using a mirror for the treatment of dental problems?",
    answer: (
      <>
        The mirror reverses left and right, creating confusion. The poet worries
        the dentist might <Highlight color="pink">get mixed up</Highlight> &mdash;
        the way you do when tying a bow tie in a mirror and forget which side is
        which. This adds terror to an already terrifying situation.
      </>
    ),
  },
  {
    question: "Comment on the aptness of the title of the poem.",
    answer: (
      <>
        The title <em>This Is Going to Hurt Just a Little Bit</em> is very
        suitable, because going to the dentist is always painful and frightening.
        It repeats the reassuring words a dentist actually says, and the whole
        poem measures that &ldquo;little bit&rdquo; against what really happens
        in the chair. Nash uses it{" "}
        <Highlight color="yellow">ironically</Highlight>: the small hurt the
        title promises turns out to be demolition with a crowbar. The title also
        sets the comic tone before a single line is read &mdash; we already know
        the promise is going to be broken.
      </>
    ),
  },
  {
    question:
      "The poet compares the mouth to a section of road that is being repaired. Do you feel any exaggeration in it? Find more such instances in the poem.",
    answer: (
      <>
        <p>
          Yes, it is an exaggeration. A mouth being drilled is not really a road
          under repair, but the comparison is deliberately stretched so that the
          situation seems far worse than it is &mdash; and that is exactly what
          creates the humour. The image also works: stone crushers, concrete
          mixers, drills and steam rollers describe what the patient thinks he
          can hear and feel.
        </p>
        <p>Other exaggerations in the poem:</p>
        <ul>
          <li>Teeth that are supposed to be polished seem to be &ldquo;demolished&rdquo;.</li>
          <li>The dentist works with a &ldquo;crowbar&rdquo;.</li>
          <li>The coating he puts on feels like something used to put a shine on a &ldquo;horse&rsquo;s hoof&rdquo;.</li>
          <li>The jaw is &ldquo;digging into your chest&rdquo;.</li>
          <li>Every nerve in your head is &ldquo;being irked on&rdquo;.</li>
          <li>The patient feels he is one of the &ldquo;two or three in life most lacking in dignity&rdquo;.</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What effect does this poetic device (simile) produce in the poem? Find out other similes used in the poem.",
    answer: (
      <>
        <p>
          Similes make the poem funnier and help us imagine the discomfort
          clearly. They give the reader a familiar picture &mdash; a road under
          repair, a horse&rsquo;s hoof, a bow tie &mdash; for an experience that
          is otherwise hard to describe, so the exaggeration lands instead of
          merely sounding like complaint.
        </p>
        <p>Other similes and comparisons in the poem:</p>
        <ul>
          <li>
            &ldquo;Your mouth is like a section of road that is being
            worked on.&rdquo;
          </li>
          <li>
            The coating in the mouth is &ldquo;something that I suspect is
            generally used to put a shine on a horse&rsquo;s hoof.&rdquo;
          </li>
          <li>
            The dentist&rsquo;s confusion of left and right is &ldquo;the way you
            do when you try to tie a bow tie with the aid of a mirror.&rdquo;
          </li>
          <li>
            The dentist &ldquo;may be a bear&rdquo; &mdash; &ldquo;an ursa,&rdquo;
            as the Romans used to say.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "Nash plays with language throughout the poem. Point out his deliberate misspellings and puns, and say what they add to the poem.",
    answer: (
      <>
        <p>
          Nash uses{" "}
          <Highlight color="blue">deliberate misspellings and puns</Highlight>{" "}
          to keep the tone comic: &ldquo;hopen&rdquo; for <em>hoping</em>,
          &ldquo;monce&rdquo; for <em>months</em>, and &ldquo;ursa&rdquo; for the
          Latin word for a bear, which he turns into a joke about a feminine
          bear.
        </p>
        <p>
          The aside about the Romans is a comic digression: the dentist may be
          &ldquo;a bear,&rdquo; and the Romans, Nash says, used <em>ursa</em> only
          for a she-bear. It lightens the poem&rsquo;s tone while the
          argument &mdash; that the whole business is torture &mdash; quietly
          carries on.
        </p>
        <p>
          These small jokes matter because they turn complaint into comedy: the
          reader laughs at the language itself, not only at the situation.
        </p>
      </>
    ),
  },
];

const DISCUSSION_ITEMS = [
  {
    question:
      "Ogden Nash's poem is indeed a very strange way of looking at a reality — the painful experience of a dental treatment. Are you convinced of this attitude? Explain.",
    answer: (
      <>
        <p>
          Yes, the attitude is convincing. The poet uses{" "}
          <Highlight color="yellow">humour</Highlight> to deal with fear and
          pain: by exaggerating the experience until it becomes absurd, he makes
          it seem funny instead of merely frightening.
        </p>
        <p>
          This way of looking at it helps us realise that sometimes laughing at
          an uncomfortable situation makes it easier to face. The reader who has
          sat in a dentist&rsquo;s chair recognises every detail, and recognition
          is what turns dread into laughter.
        </p>
        <p>
          Sophia Borger&rsquo;s idea supports this too &mdash; a cheerful,
          humorous attitude helps us handle difficult realities more wisely.
        </p>
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "appreciation",
    title: "Poem Appreciation",
    content: (
      <>
        <p className="text-sm italic text-muted-foreground">
          Appreciation of the Poem &mdash; by Ogden Nash
        </p>
        <h3
          id="appreciation-intro"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          I. Introduction — Poet, Title, Mood and Theme
        </h3>
        <p>
          <em>This Is Going to Hurt Just a Little Bit</em> by Ogden Nash is a
          humorous poem about a visit to the dentist. The title is the
          poem&rsquo;s first joke: the cheerful assurance that it will hurt
          &ldquo;just a little bit&rdquo; is exactly what the patient dreads, and
          the whole poem measures that little bit against what actually happens
          in the chair. The mood is{" "}
          <Highlight color="yellow">light and playful</Highlight> throughout,
          and the theme is the fear, discomfort and helplessness a person feels
          during dental treatment &mdash; turned into comedy through exaggeration
          and wit.
        </p>

        <h3
          id="appreciation-summary"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          II. Summary and Central Idea
        </h3>
        <p>
          The poet declares that sitting in a dentist&rsquo;s chair with his
          mouth wide open is one thing he likes less than most things. Some
          tortures, he says, are physical and some are mental, but the dental one
          is both. He cannot stay composed: his jaw digs into his chest, his
          fingernails make &ldquo;serious alterations&rdquo; in his palm lines,
          and he cannot keep up his usual &ldquo;cheery benignity&rdquo; in a
          position &ldquo;most lacking in dignity.&rdquo;
        </p>
        <p>
          The mouth then becomes a section of road being worked on &mdash;
          cluttered with stone crushers, concrete mixers, drills and steam
          rollers &mdash; and every nerve in his head is being irked. The teeth
          are supposed to be polished but feel as if they are being demolished.
          Worst of all, it is all done with a mirror, so the dentist &mdash; who
          may be &ldquo;a bear,&rdquo; an <em>ursa</em> &mdash; holds a crowbar in
          one hand and a mirror in the other and might confuse left and right,
          the way one does when tying a bow tie in a mirror. When it is
          &ldquo;all over,&rdquo; he coats the mouth with something the poet
          suspects is used to put a shine on a horse&rsquo;s hoof, and says
          &ldquo;come back in three monce.&rdquo;
        </p>
        <p>
          The central idea arrives in the last lines: this is the most vicious
          circle Fate ever devised &mdash; a man must go continually to the
          dentist to keep his teeth in good condition, when the chief reason he
          wants them in good condition is so that he will not have to go to the
          dentist.
        </p>

        <h3
          id="appreciation-devices"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          III. Poetic Devices, Language, Tone and Style
        </h3>
        <p>
          The poem runs on hyperbole. A dentist&rsquo;s drill becomes a steam
          roller, a probe a crowbar, polishing a demolition, and a mouth a road
          under repair. The comparisons are what make the terror funny: the mouth
          is &ldquo;like a section of road that is being worked on,&rdquo; the
          coating is &ldquo;generally used to put a shine on a horse&rsquo;s
          hoof,&rdquo; and the confusion of the mirror is &ldquo;like trying to
          tie a bow tie with the aid of a mirror.&rdquo; Nash&rsquo;s irony
          works from the title downwards &mdash; the promise of &ldquo;just a
          little bit&rdquo; against the demolition in the chair, and the closing
          circle in which the cure is also the cause.
        </p>
        <p>
          The language is colloquial and conversational, with Nash&rsquo;s
          deliberate misspellings &mdash; &ldquo;hopen&rdquo; for hoping,
          &ldquo;monce&rdquo; for months, &ldquo;sentest&rdquo; for sent &mdash;
          and comic Latin (&ldquo;ursa&rdquo;). The lines are long and loosely
          rhymed, running on the way a nervous patient&rsquo;s thoughts run on,
          and the second person (&ldquo;your jaw,&rdquo; &ldquo;your mouth&rdquo;)
          pulls the reader into the chair. The tone is playful and self-mocking:
          the poet never complains seriously, he laughs at the whole experience.
        </p>

        <h3
          id="appreciation-conclusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          IV. Conclusion — Message, Personal Response and Favourite Lines
        </h3>
        <p>
          In conclusion, <em>This Is Going to Hurt Just a Little Bit</em> is a
          memorable poem because it turns a genuinely painful experience into an
          entertaining one. Its message &mdash; that{" "}
          <Highlight color="pink">
            humour helps us face fear and pain
          </Highlight>
          , and that laughing at an uncomfortable situation makes it easier to
          bear &mdash; is as useful as it is funny. My favourite lines are
          &ldquo;And your mouth is like a section of road that is being worked
          on,&rdquo; because in one image they hold the whole method of the poem:
          the ordinary mouth, the heavy machinery and the patient&rsquo;s
          helplessness at once. Overall, the poem is an effective and enjoyable
          piece of comic verse that deserves appreciation.
        </p>
      </>
    ),
  },
];

export default function ThisIsGoingToHurtPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro
              author="Ogden Nash"
              role="Poet"
              genre="Poem (humorous verse)"
            />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>This Is Going to Hurt Just a Little Bit</em> is a humorous poem
            by <Highlight color="yellow">Frederic Ogden Nash</Highlight>, one of
            America&rsquo;s best-known light poets.
          </p>
          <p>
            The poem is a graphic, hilarious description of the poet&rsquo;s
            experience sitting in a dentist&rsquo;s chair. Through{" "}
            <Highlight color="blue">
              wild metaphors and escalating exaggeration
            </Highlight>
            , Nash transforms a universal dread into comic art.
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
                  <strong>Poet</strong>: Ogden Nash &mdash; American humorist
                  poet (1902-1971).
                </li>
                <li>
                  <strong>Subject</strong>: The terror and indignity of sitting
                  in a dentist&rsquo;s chair.
                </li>
                <li>
                  <strong>Central metaphor</strong>: The mouth as a{" "}
                  <Highlight color="yellow">construction site</Highlight> &mdash;
                  stone crushers, concrete mixers, drills.
                </li>
                <li>
                  <strong>Worst element</strong>: The dentist uses a mirror
                  &mdash; which reverses left and right.
                </li>
                <li>
                  <strong>Closing</strong>: The &ldquo;most vicious
                  circle&rdquo; &mdash; we keep teeth healthy to avoid the
                  dentist.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  The poet declares that sitting in a dentist&rsquo;s chair with
                  his mouth open is the thing he likes{" "}
                  <Highlight color="yellow">less than most things</Highlight>.
                  Some tortures are physical, some mental &mdash; dental torture
                  is both.
                </li>
                <li>
                  He loses all composure: jaw digging into chest, fingernails
                  making &ldquo;serious alterations&rdquo; in his palm lines,
                  unable to maintain &ldquo;cheery benignity.&rdquo; The position
                  is &ldquo;one of the two or three in life most lacking in
                  dignity.&rdquo;
                </li>
                <li>
                  The mouth becomes a road under construction &mdash;
                  &ldquo;cluttered up with stone crushers and concrete mixers and
                  drills and steam rollers.&rdquo; Every nerve is being irked.
                  Teeth are supposed to be polished but feel like they&rsquo;re
                  being <Highlight color="pink">demolished</Highlight>.
                </li>
                <li>
                  The worst part is the mirror. The dentist may be a bear
                  (&ldquo;an ursa&rdquo;), and how can you be sure he
                  won&rsquo;t get left and right mixed up &mdash; like trying to
                  tie a bow tie in a mirror?
                </li>
                <li>
                  After it&rsquo;s &ldquo;over,&rdquo; the dentist says
                  &ldquo;come back in three monce.&rdquo; The poet addresses
                  Fate: this is the most{" "}
                  <Highlight color="blue">vicious circle</Highlight> &mdash; we
                  keep teeth healthy so we won&rsquo;t have to go to the dentist.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Opening declaration</strong>: The poem opens with a
                  characteristically Nash-like construction: &ldquo;One thing I
                  like less than most things.&rdquo; This understatement
                  immediately signals the comic tone. The hope of never having to
                  do it again is itself &ldquo;against hope hopen&rdquo; &mdash;
                  a deliberate misspelling that establishes the poem&rsquo;s
                  playful relationship with language.
                </li>
                <li>
                  <strong>Physical and mental torture</strong>: Nash identifies
                  the dual nature of dental anxiety: some tortures are physical,
                  some mental, but dental is both. The jaw digs into the chest.
                  Fingernails make &ldquo;serious alterations in your life line
                  or love line.&rdquo; The poet cannot maintain &ldquo;cheery
                  benignity&rdquo; &mdash; his usual social mask cracks under the
                  indignity.
                </li>
                <li>
                  <strong>The construction site metaphor</strong>: The mouth
                  becomes &ldquo;a section of road that is being worked
                  on&rdquo; &mdash; cluttered with stone crushers, concrete
                  mixers, drills, and steam rollers. This extended metaphor
                  transforms a medical procedure into{" "}
                  <Highlight color="yellow">industrial demolition</Highlight>.
                  The escalation from &ldquo;polished&rdquo; to
                  &ldquo;demolished&rdquo; captures the patient&rsquo;s
                  perception.
                </li>
                <li>
                  <strong>The mirror and the ursa</strong>: The dentist uses a
                  mirror in one hand and a &ldquo;crowbar&rdquo; in the other.
                  The poet compares the dentist to a bear (&ldquo;an
                  ursa&rdquo;) &mdash; with a comic aside that the Romans
                  referred to a feminine bear. The mirror reverses left and
                  right, creating confusion &mdash; like trying to tie a bow tie
                  in a mirror.
                </li>
                <li>
                  <strong>The vicious circle</strong>: The poem&rsquo;s closing
                  is its philosophical peak. Man goes to the dentist to keep
                  teeth healthy so he won&rsquo;t have to go to the dentist. Nash
                  addresses Fate directly: this is &ldquo;the most vicious circle
                  that thou ever sentest.&rdquo; The deliberately archaic
                  &ldquo;sentest&rdquo; adds comic gravity to what is essentially
                  a complaint about life&rsquo;s self-defeating routines.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="universal-anxiety"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Universal Anxiety
            </h3>
            <p>
              The poem captures a{" "}
              <Highlight color="yellow">shared human experience</Highlight>{" "}
              &mdash; the dread of sitting in a dentist&rsquo;s chair. By
              describing it in extreme terms, Nash validates the reader&rsquo;s
              own fears while simultaneously defusing them through humor.
            </p>
            <h3
              id="loss-of-control"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Loss of Control
            </h3>
            <p>
              The poet is entirely at the dentist&rsquo;s mercy. His mouth is
              &ldquo;cluttered up&rdquo; with instruments he cannot see,
              operated by a man who might &ldquo;get mixed up.&rdquo; The{" "}
              <Highlight color="pink">powerlessness</Highlight> of the patient
              &mdash; unable to see, speak, or defend himself &mdash; is the
              poem&rsquo;s emotional core.
            </p>
            <h3
              id="vicious-cycles"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Vicious Cycles
            </h3>
            <p>
              The closing &ldquo;vicious circle&rdquo; extends beyond dentistry.
              We maintain things to avoid maintaining them. We take medicine to
              avoid taking medicine. The poem uses dental anxiety as a metaphor
              for life&rsquo;s{" "}
              <Highlight color="blue">self-defeating routines</Highlight>.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Nash transforms dental anxiety into comic poetry through{" "}
              <Highlight color="yellow">
                hyperbole, wordplay, and escalating imagery
              </Highlight>
              . The mouth becomes a construction site, the dentist a bear with a
              crowbar, and the entire experience a &ldquo;vicious circle&rdquo;
              &mdash; we keep our teeth healthy so we won&rsquo;t have to visit
              the dentist. The poem reminds us that humor is the best weapon
              against life&rsquo;s small torments.
            </KeyPoint>
          </div>

          <div id="read-and-respond-section" className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">
              Read &amp; Respond
            </h2>

            <Expandable title="Read and Respond — 9 textbook questions">
              <ReadRespond title="Textbook questions" items={QA_ITEMS} />
            </Expandable>

            <Expandable title="Discussion & Analysis — the poet's attitude">
              <ReadRespond
                title="Discussion and analysis"
                items={DISCUSSION_ITEMS}
              />
            </Expandable>
          </div>
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in space-y-4">
          {DISCOURSES.map((section) => (
            <CollapsibleSection
              key={section.id}
              id={section.id}
              title={section.title}
            >
              {section.content}
            </CollapsibleSection>
          ))}
        </div>
      )}
    </div>
  );
}
