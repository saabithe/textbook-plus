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
  "One thing I like less than most things is sitting in a dentist chair",
  "with my mouth wide open.",
  "And that I will never have to do it again is a hope that I am against hope hopen.",
  "Because some tortures are physical and some are mental,",
  "But the one that is both is dental.",
  "It is hard to be self-possessed",
  "With your jaw digging into your chest.",
  "So hard to retain your calm",
  "When your fingernails are making serious alterations in your life",
  "line or love line or some other important line in your palm;",
  "So hard to give your usual effect of cheery benignity",
  "When you know your position is one of the two or three in life most lacking in dignity.",
  "And your mouth is like a section of road",
  "that is being worked on.",
  "And it is all cluttered up with stone",
  "crushers and concrete mixers and drills",
  "and steam rollers and there isn't a",
  "nerve in your head that you aren't being",
  "irked on.",
  "Oh, some people are unfortunate enough",
  "to be strung up by thumbs.",
  "And others have things done to their",
  "gums,",
  "And your teeth are supposed to be being polished,",
  "But you have reason to believe they are being demolished.",
  "And the circumstance that adds most to your terror",
  "Is that it's all done with a mirror,",
  "Because the dentist may be a bear, or as the Romans used to say,",
  "only they were referring to a feminine bear when they said it, an ursa,",
  "But all the same how can you be sure when he takes his crowbar in",
  "one hand and mirror in the",
  "other he won't get mixed up, the way you do when you try to tie a",
  "bow tie with the aid of a mirror, and forget that left is right and vice",
  "versa?",
  "And then at last he says That will be all; but it isn't because he then",
  "coats your mouth from cellar to roof",
  "With something that I suspect is generally used to put a shine on a",
  "horse's hoof.",
  "And you totter to your feet and think. Well it's all over now and after",
  "all it was only this once.",
  "And he says come back in three monce.",
  "And this, O Fate, is I think the most vicious circle that thou",
  "ever sentest, That Man has to go continually to the dentist to keep",
  "his teeth in good condition when the chief reason he wants his",
  "teeth in good condition is so that he won't have to go to the dentist.",
];

const QA_ITEMS = [
  {
    question: "Why does the poet dislike sitting in a dentist's chair with his mouth wide open?",
    answer: (
      <>
        The poet finds the experience a combination of{" "}
        <Highlight color="yellow">physical and mental torture</Highlight>.
        He describes it as lacking dignity, with his jaw digging into his
        chest, fingernails digging into his palms, and his mouth being
        worked on like a construction site.
      </>
    ),
  },
  {
    question: "Why does one find it hard to keep calm while sitting before a dentist?",
    answer: (
      <>
        It is hard to be self-possessed when your jaw is digging into your
        chest and your fingernails are{" "}
        <Highlight color="pink">making alterations in your palm lines</Highlight>.
        The poet captures the physical discomfort that makes composure
        impossible &mdash; the position is &ldquo;one of the two or three in
        life most lacking in dignity.&rdquo;
      </>
    ),
  },
  {
    question: "How, according to the poet, does one lose one's dignity before a dentist?",
    answer: (
      <>
        The mouth becomes a{" "}
        <Highlight color="blue">construction site</Highlight> &mdash;
        &ldquo;a section of road that is being worked on,&rdquo; cluttered
        with stone crushers, concrete mixers, drills, and steam rollers.
        Every nerve is being irked. The poet loses all composure and the
        ability to project &ldquo;cheery benignity.&rdquo;
      </>
    ),
  },
  {
    question: "What makes the circumstances terrible?",
    answer: (
      <>
        The worst part is that{" "}
        <Highlight color="yellow">it&rsquo;s all done with a mirror</Highlight>.
        The dentist uses a mirror in one hand and a crowbar in the other,
        and the poet fears he might get left and right mixed up &mdash; just
        as one does when trying to tie a bow tie with a mirror.
      </>
    ),
  },
  {
    question: "What, according to the poet, is the danger in using a mirror for the treatment of dental problems?",
    answer: (
      <>
        The mirror reverses left and right, creating confusion. The poet
        worries the dentist might{" "}
        <Highlight color="pink">get mixed up</Highlight> &mdash; the way you
        do when tying a bow tie in a mirror and forget which side is which.
        This adds terror to an already terrifying situation.
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
          Ogden Nash
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
          id="device-hyperbole"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Hyperbole
        </h3>
        <p>
          The poem is built on{" "}
          <Highlight color="yellow">exaggeration</Highlight>. The mouth is
          &ldquo;a section of road being worked on,&rdquo; cluttered with
          stone crushers and steam rollers. The dentist uses a
          &ldquo;crowbar.&rdquo; Teeth are &ldquo;being demolished&rdquo;
          rather than polished. Each image inflates the dental experience to
          absurd proportions.
        </p>
        <h3
          id="device-humor"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Humor and Wordplay
        </h3>
        <p>
          Nash uses deliberate misspellings and puns: &ldquo;hopen&rdquo;
          (hope), &ldquo;monce&rdquo; (months), &ldquo;ursa&rdquo; (bear).
          The aside about the Romans referring to a{" "}
          <Highlight color="blue">feminine bear</Highlight> is a comic
          digression that lightens the poem&rsquo;s tone while maintaining
          its argument.
        </p>
        <h3
          id="device-vicious-circle"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Vicious Circle
        </h3>
        <p>
          The poem&rsquo;s closing image is its most brilliant: you go to the
          dentist to keep your teeth in good condition so you{" "}
          <Highlight color="yellow">won&rsquo;t have to go to the
          dentist</Highlight>. This is the &ldquo;most vicious circle&rdquo;
          &mdash; the entire exercise is self-defeating, and the poet
          addresses Fate directly to express his frustration.
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
            <em>This Is Going to Hurt Just a Little Bit</em> by Ogden Nash is
            a humorous poem that transforms the universal experience of dental
            anxiety into comic art. Nash&rsquo;s signature style &mdash;
            exaggerated comparisons, deliberate misspellings, and unexpected
            digressions &mdash; makes the reader laugh while recognizing their
            own fears.
          </p>
        </Callout>
        <p>
          The poem&rsquo;s genius lies in its escalating imagery. The mouth
          begins as a road under construction, escalates to a torture chamber
          (&ldquo;strung up by thumbs&rdquo;), and peaks with the
          dentist&rsquo;s mirror as a weapon of confusion. The final
          &ldquo;vicious circle&rdquo; elevates the complaint to{" "}
          <Highlight color="yellow">philosophical comedy</Highlight> &mdash;
          this is not just about teeth but about the absurdity of the human
          condition.
        </p>
      </>
    ),
  },
  {
    id: "themes",
    title: "Themes",
    content: (
      <>
        <h3
          id="universal-anxiety"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Universal Anxiety
        </h3>
        <p>
          The poem captures a{" "}
          <Highlight color="yellow">shared human experience</Highlight> &mdash;
          the dread of sitting in a dentist&rsquo;s chair. By describing it
          in extreme terms, Nash validates the reader&rsquo;s own fears while
          simultaneously defusing them through humor.
        </p>
        <h3
          id="loss-of-control"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Loss of Control
        </h3>
        <p>
          The poet is entirely at the dentist&rsquo;s mercy. His mouth is
          &ldquo;cluttered up&rdquo; with instruments he cannot see, operated
          by a man who might &ldquo;get mixed up.&rdquo; The{" "}
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
      </>
    ),
  },
  {
    id: "key-takeaway",
    title: "Key Takeaway",
    content: (
      <KeyPoint title="Key Takeaway">
        Nash transforms dental anxiety into comic poetry through{" "}
        <Highlight color="yellow">hyperbole, wordplay, and escalating
        imagery</Highlight>. The mouth becomes a construction site, the
        dentist a bear with a crowbar, and the entire experience a
        &ldquo;vicious circle&rdquo; &mdash; we keep our teeth healthy so
        we won&rsquo;t have to visit the dentist. The poem reminds us that
        humor is the best weapon against life&rsquo;s small torments.
      </KeyPoint>
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
            <AuthorCard name="Ogden Nash" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>This Is Going to Hurt Just a Little Bit</em> is a humorous
            poem by{" "}
            <Highlight color="yellow">Frederic Ogden Nash</Highlight> (1902-1971),
            one of America&rsquo;s best-known light poets. His poems are noted
            for surprising puns, comic misspellings, and exaggerated expressions
            that give them special charm.
          </p>
          <p>
            The poem is a graphic, hilarious description of the
            poet&rsquo;s experience sitting in a dentist&rsquo;s chair. Through
            <Highlight color="blue"> wild metaphors and escalating
            exaggeration</Highlight>, Nash transforms a universal dread into
            comic art.
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
                  The poet declares that sitting in a dentist&rsquo;s chair
                  with his mouth open is the thing he likes{" "}
                  <Highlight color="yellow">less than most things</Highlight>.
                  Some tortures are physical, some mental &mdash; dental
                  torture is both.
                </li>
                <li>
                  He loses all composure: jaw digging into chest, fingernails
                  making &ldquo;serious alterations&rdquo; in his palm lines,
                  unable to maintain &ldquo;cheery benignity.&rdquo; The
                  position is &ldquo;one of the two or three in life most
                  lacking in dignity.&rdquo;
                </li>
                <li>
                  The mouth becomes a road under construction &mdash;
                  &ldquo;cluttered up with stone crushers and concrete mixers
                  and drills and steam rollers.&rdquo; Every nerve is being
                  irked. Teeth are supposed to be polished but feel like
                  they&rsquo;re being{" "}
                  <Highlight color="pink">demolished</Highlight>.
                </li>
                <li>
                  The worst part is the mirror. The dentist may be a bear
                  (&ldquo;an ursa&rdquo;), and how can you be sure he
                  won&rsquo;t get left and right mixed up &mdash; like trying
                  to tie a bow tie in a mirror?
                </li>
                <li>
                  After it&rsquo;s &ldquo;over,&rdquo; the dentist says
                  &ldquo;come back in three monce.&rdquo; The poet addresses
                  Fate: this is the most{" "}
                  <Highlight color="blue">vicious circle</Highlight> &mdash;
                  we keep teeth healthy so we won&rsquo;t have to go to the
                  dentist.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Opening declaration</strong>: The poem opens with a
                  characteristically Nash-like construction: &ldquo;One thing
                  I like less than most things.&rdquo; This understatement
                  immediately signals the comic tone. The hope of never having
                  to do it again is itself &ldquo;against hope hopen&rdquo;
                  &mdash; a deliberate misspelling that establishes the
                  poem&rsquo;s playful relationship with language.
                </li>
                <li>
                  <strong>Physical and mental torture</strong>: Nash identifies
                  the dual nature of dental anxiety: some tortures are
                  physical, some mental, but dental is both. The jaw digs into
                  the chest. Fingernails make &ldquo;serious alterations in
                  your life line or love line.&rdquo; The poet cannot maintain
                  &ldquo;cheery benignity&rdquo; &mdash; his usual social
                  mask cracks under the indignity.
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
                  right, creating confusion &mdash; like trying to tie a bow
                  tie in a mirror.
                </li>
                <li>
                  <strong>The vicious circle</strong>: The poem&rsquo;s closing
                  is its philosophical peak. Man goes to the dentist to keep
                  teeth healthy so he won&rsquo;t have to go to the dentist.
                  Nash addresses Fate directly: this is &ldquo;the most
                  vicious circle that thou ever sentest.&rdquo; The
                  deliberately archaic &ldquo;sentest&rdquo; adds comic
                  gravity to what is essentially a complaint about
                  life&rsquo;s self-defeating routines.
                </li>
              </ul>
            }
          />
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
          <div id="read-and-respond-section" className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">Read &amp; Respond</h2>
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}
    </div>
  );
}
