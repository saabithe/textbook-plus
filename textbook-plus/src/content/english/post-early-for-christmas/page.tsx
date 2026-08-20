"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question: "What was the Assistant's experience at the post office the other day? Why does she consider people funny?",
    answer: (
      <>
        The Assistant had a busy day with no rest, dealing with last-minute
        Christmas parcels and cards. She considers people funny because of
        their{" "}
        <Highlight color="yellow">absurd requests and misunderstandings</Highlight>{" "}
        &mdash; a man asked where to get a stamp (in a post office!), and an
        old man put his glasses on the counter and ordered a pint of beer.
      </>
    ),
  },
  {
    question: "Why does the Old Gentleman get angry with the Assistant?",
    answer: (
      <>
        The Old Gentleman is{" "}
        <Highlight color="blue">deaf</Highlight> and mishears everything the
        Assistant says. &ldquo;Book&rdquo; becomes &ldquo;cook,&rdquo;
        &ldquo;Ted&rdquo; becomes his name, and &ldquo;bed&rdquo; becomes
        a suggestion to go to bed. His frustration builds with each
        misunderstanding.
      </>
    ),
  },
  {
    question: "Why does everyone in the post office become anxious about the Tourist's parcel?",
    answer: (
      <>
        The Farmer reads a newspaper report about a{" "}
        <Highlight color="pink">time-bomb found in a London post office</Highlight>.
        When Bertie reports a funny noise from the parcel, and everyone hears
        ticking, they conclude it is a bomb. The Farmer&rsquo;s warning about
        ticking parcels triggers collective panic.
      </>
    ),
  },
  {
    question: "How does the play end?",
    answer: (
      <>
        The Policeman throws the parcel into a bucket of water. The Tourist
        returns, retrieves it, and reveals it was a{" "}
        <Highlight color="yellow">Swiss clock</Highlight> &mdash; now ruined.
        He threatens to sue everyone and never post anything in the country
        again. The Assistant, fed up, quits to work at the{" "}
        <strong>animal dispensary</strong> because &ldquo;animals don&rsquo;t
        do such silly things.&rdquo;
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "character-sketch-assistant",
    title: "Character Sketch: The Young Lady Assistant",
    content: (
      <CharacterSketch name="The Young Lady Assistant">
        <p>
          The Assistant is the play&rsquo;s{" "}
          <Highlight color="blue">central figure</Highlight> &mdash; patient,
          professional, and increasingly exasperated. She deals with an
          absurd parade of customers with remarkable composure, from the
          confused Deaf Gentleman to the Fussy Old Lady who mistakes the
          post office for an animal clinic.
        </p>
        <p>
          Her patience is tested to its limits. She calmly explains,
          corrects, and serves &mdash; only to face escalating chaos. When
          the bomb scare erupts, she tries to take sensible action (removing
          the parcel, fetching water) but is overruled by the Farmer and
          Policeman. Her final decision to quit for the animal dispensary is
          the play&rsquo;s comic climax.
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "the-comedy-of-errors",
    title: "The Comedy of Errors",
    content: (
      <>
        <h3
          id="deaf-gentleman"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Deaf Old Gentleman
        </h3>
        <p>
          His deafness creates a chain of{" "}
          <Highlight color="yellow">comic misunderstandings</Highlight>.
          &ldquo;Book&rdquo; becomes &ldquo;cook,&rdquo; &ldquo;did you bring
          your book&rdquo; becomes &ldquo;you want me cook.&rdquo; He
          accuses the Assistant of being impudent, then says{" "}
          <em>she</em> is deaf. The reversal is the scene&rsquo;s sharpest
          comic moment.
        </p>
        <h3
          id="fussy-old-lady"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Fussy Old Lady
        </h3>
        <p>
          She mistakes the post office for a{" "}
          <Highlight color="green">veterinary clinic</Highlight>, seeking
          antiseptic for her cat Tiddles. When corrected, she insists on
          buying something &ldquo;to not have troubled you for nothing.&rdquo;
          Her purchase of a halfpenny stamp is a masterclass in comic
          politeness.
        </p>
        <h3
          id="bertie"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Bertie and His Mother
        </h3>
        <p>
          Bertie&rsquo;s ungrammatical exclamations (&ldquo;I seed
          em,&rdquo; &ldquo;I sawed em&rdquo;) and his obsession with an
          engine next door provide running comedy. His mother&rsquo;s
          constant corrections and the running gag about grammar create a{" "}
          <Highlight color="blue">comic subplot</Highlight>.
        </p>
      </>
    ),
  },
];

export default function PostEarlyForChristmasPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="R. H. Wood" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Post Early for Christmas</em> is a one-act play by{" "}
            <Highlight color="yellow">R. H. Wood</Highlight>, a British
            dramatist known for his simplicity of language, dramatic settings,
            and subtle presentation of stock characters. The action takes place
            inside a small post office in an English village during the
            Christmas rush.
          </p>
          <p>
            A cast of ten characters &mdash; each with their own comic quirk
            &mdash; converges on a single post office counter. What begins as
            a busy December day escalates into a{" "}
            <Highlight color="pink">bomb scare</Highlight> when a ticking
            parcel, a newspaper report, and a chain of misunderstandings
            collide.
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
                  <strong>Setting</strong>: A post office on a busy December
                  day. Posters read &ldquo;Post Early for Christmas.&rdquo;
                </li>
                <li>
                  <strong>Characters</strong>: Assistant, Mrs Smith, Mrs Jones,
                  Deaf Gentleman, Fussy Old Lady, Farmer Brown, Mrs Higgins
                  &amp; Bertie, Foreign Tourist, Policeman.
                </li>
                <li>
                  <strong>Central incident</strong>: A Foreign Tourist&rsquo;s
                  parcel ticks like a{" "}
                  <Highlight color="pink">time-bomb</Highlight>. Everyone
                  panics.
                </li>
                <li>
                  <strong>Climax</strong>: The Policeman throws it in water.
                  It&rsquo;s a Swiss clock &mdash; ruined.
                </li>
                <li>
                  <strong>Ending</strong>: The Tourist threatens to sue. The
                  Assistant quits to work at the animal dispensary.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  The Assistant opens the play with a monologue about the
                  previous day&rsquo;s chaos. She describes funny customers:
                  a man asking for stamps (in a post office) and an old man
                  who put his glasses on the counter and ordered beer.
                </li>
                <li>
                  Mrs Smith arrives first &mdash; she has posted everything
                  early and hopes for no snow (it aggravates her rheumatism).
                  Mrs Jones arrives with last-minute parcels. The{" "}
                  <Highlight color="blue">Deaf Old Gentleman</Highlight> creates
                  a chain of comic misunderstandings: &ldquo;book&rdquo;
                  becomes &ldquo;cook,&rdquo; and he accuses the Assistant of
                  being impudent.
                </li>
                <li>
                  The Fussy Old Lady mistakes the post office for an animal
                  clinic, seeking help for her injured cat Tiddles. Farmer
                  Brown arrives and reads a newspaper report about a{" "}
                  <Highlight color="yellow">time-bomb found in a London post
                  office</Highlight>. He jokes that ticking parcels might be
                  bombs.
                </li>
                <li>
                  Bertie and his mother Mrs Higgins provide comic relief with
                  their grammar battles (&ldquo;I seed em&rdquo; vs
                  &ldquo;I saw em&rdquo;). Bertie discovers the
                  Tourist&rsquo;s parcel is making a funny noise.
                </li>
                <li>
                  Panic spreads. Everyone hears ticking. The Farmer declares
                  it a time-bomb. The Assistant tries to remove it; the Farmer
                  warns against it. They all hide. The Policeman arrives and
                  begins unwrapping the parcel.
                </li>
                <li>
                  The Tourist returns for his gloves. The Farmer holds him.
                  The Policeman throws the parcel into water. The Tourist
                  retrieves a ruined{" "}
                  <Highlight color="green">Swiss clock</Highlight> and threatens
                  to sue. The Assistant quits to work at the animal dispensary:
                  &ldquo;Animals don&rsquo;t do such silly things.&rdquo;
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Comic structure</strong>: The play uses a classic
                  escalation structure. Each character arrives with a mundane
                  purpose &mdash; stamps, parcels, a pension &mdash; and the
                  accumulated small absurdities build to a catastrophic
                  misunderstanding. The confined setting (a single counter)
                  forces characters into proximity, amplifying the comedy.
                </li>
                <li>
                  <strong>The Deaf Gentleman sequence</strong>: The
                  Assistant&rsquo;s patient attempts to communicate with the
                  deaf man create the play&rsquo;s longest comic scene.
                  &ldquo;Did you bring your book?&rdquo; becomes &ldquo;You
                  want me cook?&rdquo; The reversal &mdash; he accuses{" "}
                  <em>her</em> of being deaf &mdash; is a masterclass in
                  comic irony.
                </li>
                <li>
                  <strong>The bomb scare</strong>: The Farmer&rsquo;s newspaper
                  report about a real bomb discovery primes the audience.
                  When Bertie reports a ticking noise, collective{" "}
                  <Highlight color="pink">panic escalates</Highlight> &mdash;
                  each person&rsquo;s fear validates the next&rsquo;s. The
                  Policeman arrives to find them all hiding under the
                  counter.
                </li>
                <li>
                  <strong>The Swiss clock reveal</strong>: The Tourist&rsquo;s
                  parcel was a clock from Switzerland &mdash; ticking because
                  that&rsquo;s what clocks do. The Policeman&rsquo;s
                  well-intentioned intervention (throwing it in water) destroys
                  it. The Tourist&rsquo;s fury &mdash; &ldquo;I will sue you
                  all, you blundering idiots!&rdquo; &mdash; is the
                  play&rsquo;s comic climax.
                </li>
                <li>
                  <strong>The Assistant&rsquo;s exit</strong>: Her decision to
                  quit for the animal dispensary is the play&rsquo;s final
                  joke and its most pointed commentary. After enduring hours
                  of absurdity, she concludes that{" "}
                  <Highlight color="yellow">animals are more rational than
                  humans</Highlight>. The line &ldquo;Animals don&rsquo;t do
                  such silly things&rdquo; encapsulates the play&rsquo;s
                  satire on human folly.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="miscommunication"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Miscommunication
            </h3>
            <p>
              The play is built on a chain of{" "}
              <Highlight color="yellow">misunderstandings</Highlight>. The Deaf
              Gentleman mishears, the Old Lady mistakes the post office, the
              Farmer&rsquo;s bomb joke triggers panic, and the Tourist&rsquo;s
              foreign accent adds to the confusion. Every character exists in
              their own linguistic bubble.
            </p>
            <h3
              id="panic-and-crowd"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Panic and Crowd Psychology
            </h3>
            <p>
              The bomb scare demonstrates how quickly{" "}
              <Highlight color="pink">collective fear</Highlight> escalates. One
              person hears a tick, others agree, and suddenly everyone is hiding
              under counters. The Policeman arrives to find them all cowering
              &mdash; a satire on how easily rational people are swept into panic.
            </p>
            <h3
              id="everyday-absurdity"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Everyday Absurdity
            </h3>
            <p>
              The post office becomes a microcosm of human folly. Each character
              arrives with a mundane purpose &mdash; stamps, parcels, a pension
              &mdash; and the accumulated small absurdities build to a
              catastrophic misunderstanding. The play suggests that ordinary life
              is already absurd; we just need the right trigger to notice.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              <em>Post Early for Christmas</em> is a comedy of escalating
              misunderstandings. Through a deaf old gentleman, a confused old lady,
              a mischievous child, and a ticking Swiss clock, R. H. Wood shows how{" "}
              <Highlight color="yellow">ordinary people</Highlight> can be swept
              into collective panic by the smallest trigger. The play&rsquo;s
              gentle satire on miscommunication and crowd psychology remains as
              relevant today as when it was written.
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
