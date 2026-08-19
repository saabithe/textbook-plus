"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { CharacterComparison } from "@/components/content/CharacterComparison";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";

const QA_ITEMS = [
  {
    question: "What is special about the friendship between Antonio and Felix?",
    answer: (
      <>
        Their friendship was so <Highlight color="yellow">deep</Highlight> that
        they felt themselves to be <strong>brothers</strong>. They had known each
        other since childhood, growing up together in the same building on the{" "}
        <Highlight color="blue">Lower East Side of Manhattan</Highlight>.
      </>
    ),
  },
  {
    question: "How did they work to achieve their dream?",
    answer: (
      <>
        Every chance they had, they <Highlight color="green">worked out</Highlight>{" "}
        — at the Boys&rsquo; Club, the gym, and along the{" "}
        <Highlight color="blue">East River Drive</Highlight> at sunrise. They
        collected <strong>Fight magazines</strong>, kept a{" "}
        <strong>scrapbook</strong> of torn tickets and clippings, and dreamed{" "}
        <Highlight color="yellow">positively</Highlight>.
      </>
    ),
  },
  {
    question: "What was the wall rising between them?",
    answer: (
      <>
        After learning they had to <strong>fight each other</strong> in the
        division finals, a psychological{" "}
        <Highlight color="pink">wall</Highlight> rose between them &mdash; the
        tension of knowing that only one could win and that their friendship
        could not help either of them in the ring.
      </>
    ),
  },
  {
    question: "Felix decides to go to Aunt Lucy. Why?",
    answer: (
      <>
        Felix felt it would be <Highlight color="yellow">cooler</Highlight> if
        they did not see each other until the day of the fight. Staying with his{" "}
        <Highlight color="green">Aunt Lucy</Highlight> in the Bronx helped him{" "}
        <strong>distance himself emotionally</strong> and focus on the upcoming
        bout.
      </>
    ),
  },
  {
    question: "Compare the thoughts and feelings of the amigo brothers on the eve of their fight.",
    answer: (
      <>
        <Highlight color="blue">Tony</Highlight> went to the{" "}
        <strong>rooftop</strong> and tried not to think of Felix, deciding he
        would have to knock him out &ldquo;early and quick&rdquo; to spare him
        hurt. <Highlight color="green">Felix</Highlight> went to a{" "}
        <strong>movie</strong> (<em>The Champion</em>) but found it stirred him
        up — he saw himself in the ring, blasting Antonio against the ropes.
        Both prayed for victory via a <strong>quick clean knockout</strong>.
      </>
    ),
  },
  {
    question:
      "Both Antonio and Felix wanted to win in the first round. What might be the reason?",
    answer: (
      <>
        A quick knockout would <Highlight color="yellow">end the pain early</Highlight>{" "}
        — both wanted to win <strong>without prolonged suffering</strong> for
        themselves or their friend. A first-round knockout meant{" "}
        <strong>less emotional damage</strong> to the relationship.
      </>
    ),
  },
  {
    question: "The amigo brothers were popular as boxers. How do you know?",
    answer: (
      <>
        Large <Highlight color="blue">posters</Highlight> were plastered all over
        local shops announcing the fight. The neighbourhood showed{" "}
        <strong>great interest</strong>. Each had his own{" "}
        <Highlight color="yellow">loyal following</Highlight>, and they were{" "}
        <strong>well liked and respected</strong> in the community.
      </>
    ),
  },
  {
    question:
      "Do you think that the amigo brothers fought fiercely in the first and second rounds? What makes you think so?",
    answer: (
      <>
        <Highlight color="pink">Yes</Highlight>. In Round 1, Antonio&rsquo;s left
        hand was &ldquo;like a piston&rdquo; and Felix &ldquo;never stopped
        boring in.&rdquo; In Round 2, Felix rushed &ldquo;like a bull,&rdquo;
        and Antonio sent back a &ldquo;blurring barrage of lefts and
        rights.&rdquo; Neither gave an inch.
      </>
    ),
  },
  {
    question: "Who, do you think, will win in the end?",
    answer: (
      <>
        The story deliberately leaves the decision{" "}
        <Highlight color="yellow">unannounced</Highlight>. The true victory was
        their <Highlight color="green">friendship</Highlight> &mdash; the two
        walked out <strong>arm in arm</strong>, already champions to each other
        regardless of the judges&rsquo; verdict.
      </>
    ),
  },
];

export default function AmigoBrothersPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="Piri Thomas" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Amigo Brothers</em> is a story about two young boxers,{" "}
            <Highlight color="blue">Antonio Cruz</Highlight> and{" "}
            <Highlight color="green">Felix Vargas</Highlight>, who grew up together
            on the <Highlight color="blue">Lower East Side of Manhattan</Highlight>.
            Though not related by blood, their bond was so{" "}
            <strong>deep and sincere</strong> that they considered themselves
            brothers.
          </p>
          <p>
            The story explores the{" "}
            <Highlight color="yellow">conflict</Highlight> that arises when the two
            close friends are pitted against each other in a{" "}
            <strong>boxing elimination bout</strong>, and how they navigate the
            tension between <strong>friendship</strong> and{" "}
            <strong>ambition</strong>.
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
                  <em>Amigo Brothers</em> by{" "}
                  <Highlight color="yellow">Piri Thomas</Highlight> is a story
                  about two best friends who must face each other in a boxing ring.
                </li>
                <li>
                  <Highlight color="blue">Antonio</Highlight> and{" "}
                  <Highlight color="green">Felix</Highlight>, both 17, grew up
                  together on the <strong>Lower East Side</strong> and dreamed of
                  becoming lightweight champion.
                </li>
                <li>
                  When told they must fight each other in the finals, a{" "}
                  <Highlight color="pink">wall</Highlight> rose between them.
                </li>
                <li>
                  Despite fierce competition in all three rounds, the story ends
                  with the two walking out{" "}
                  <strong>arm in arm</strong> &mdash; champions to each other.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <em>Amigo Brothers</em> by{" "}
                  <Highlight color="yellow">Piri Thomas</Highlight> tells the story
                  of two teenage friends whose loyalty is tested by competition.
                </li>
                <li>
                  <Highlight color="blue">Antonio Cruz</Highlight> (fair, lean,
                  long reach) and{" "}
                  <Highlight color="green">Felix Vargas</Highlight> (dark, short,
                  powerful) are both 17 and training to become lightweight champions
                  of the world.
                </li>
                <li>
                  Every morning they run along the{" "}
                  <Highlight color="blue">East River Drive</Highlight>, work out
                  together, and share a collection of Fight magazines and a scrapbook of
                  ticket stubs and clippings.
                </li>
                <li>
                  After a series of elimination bouts, they learn they must fight{" "}
                  <strong>each other</strong> in the division finals. The winner
                  will represent the Boys&rsquo; Club in the{" "}
                  <Highlight color="yellow">Golden Gloves Championship Tournament</Highlight>.
                </li>
                <li>
                  A <Highlight color="pink">wall</Highlight> begins rising between
                  them. Felix admits he has been &ldquo;pulling punches&rdquo; in his
                  dreams, trying not to hurt Antonio. Antonio says the same.
                </li>
                <li>
                  They agree: in the ring it must be like they{" "}
                  <strong>never met</strong>. They shake on it and agree not to see
                  each other until fight day.
                </li>
                <li>
                  On the eve of the fight, both deal with anxiety differently.
                  Both pray for victory via a <strong>quick clean knockout</strong>.
                </li>
                <li>
                  At <Highlight color="blue">Tompkins Square Park</Highlight>, three
                  brutal rounds are fought. Neither gives an inch. The crowd goes
                  silent, then erupts when the two walk out{" "}
                  <strong>arm in arm</strong>.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <em>Amigo Brothers</em> by{" "}
                  <Highlight color="yellow">Piri Thomas</Highlight> is a story about
                  friendship, ambition, and the courage it takes to compete against
                  someone you love.
                </li>
                <li>
                  <Highlight color="blue">Antonio Cruz</Highlight> was fair, lean,
                  and lanky, with hair always falling over his eyes.{" "}
                  <Highlight color="green">Felix Vargas</Highlight> was dark, short,
                  and husky, wearing his black hair in a natural Afro style. Both
                  were 17, both Puerto Rican, both from the Lower East Side of
                  Manhattan, and they had known each other since childhood &mdash;
                  growing up in the same building.
                </li>
                <li>
                  They felt themselves to be{" "}
                  <Highlight color="yellow">brothers</Highlight> in every way that
                  mattered. Their shared dream: to someday become the lightweight
                  champion of the world.
                </li>
                <li>
                  Every chance they got, they trained &mdash; at the Boys&rsquo; Club,
                  at the gym, and at sunrise along the{" "}
                  <Highlight color="blue">East River Drive</Highlight>. While other
                  youngsters got into street negatives, they slept, ate, rapped, and
                  dreamed positive. They had a collection of Fight magazines and a
                  scrapbook of torn tickets and clippings.
                </li>
                <li>
                  Then they learned they were to meet each other in the{" "}
                  <strong>division finals</strong>, two weeks away &mdash; the winner
                  to represent the Boys&rsquo; Club in the Golden Gloves. Even while
                  joking, they sensed a{" "}
                  <Highlight color="pink">wall</Highlight> rising between them.
                </li>
                <li>
                  A week before the bout, Felix stopped their run and they finally
                  spoke openly. Both admitted to lying awake at night, &ldquo;pulling
                  punches&rdquo; on each other. They agreed: in the ring, like two
                  heavy <strong>strangers</strong> that want the same thing &mdash;
                  no pulling punches, go all the way. They shook hands and agreed not
                  to see each other until fight day.
                </li>
                <li>
                  On the eve of the fight, Antonio stood on his rooftop and resolved
                  to knock Felix out &ldquo;early and quick&rdquo; &mdash; to spare
                  him hurt. Felix watched <em>The Champion</em> (Kirk Douglas), saw
                  himself blasting Antonio against the ropes, walked the dark streets,
                  and went to bed. Both prayed for a{" "}
                  <strong>quick clean knockout</strong> in the first round.
                </li>
                <li>
                  At <Highlight color="blue">Tompkins Square Park</Highlight>,
                  escorted by fans in white T-shirts, they climbed into the ring to
                  an explosion of cheers. The announcer introduced them: Felix 134
                  pounds, Antonio 133 pounds. The referee gave instructions: no low
                  blows, no back of the head, keep your heads up. &ldquo;Now shake
                  hands and come out fighting.&rdquo;
                </li>
                <li>
                  <strong>Round 1:</strong> Felix came in fast, head low, half-hunched
                  toward his right shoulder. Antonio&rsquo;s left was &ldquo;like a
                  piston pumping jabs one right after another.&rdquo; Felix Bobbed
                  and weaved, boring in &mdash; only close range could give him the
                  knockout. He trapped Antonio on the ropes, poured rights and lefts to
                  his midsection. Antonio slipped away, crashing two lefts to
                  Felix&rsquo;s head, setting his right ear ringing.
                </li>
                <li>
                  <strong>Round 2:</strong> Felix came off his stool &ldquo;like a
                  bull.&rdquo; Antonio hurt him back with a blurring barrage. Felix
                  feinted left, threw a right. Rights to the body, lefts to the head.
                  Then a short right caught Antonio squarely on the chin. His legs
                  turned to jelly, arms flailing. Felix threw wild punches from every
                  direction. Antonio, groggy, bobbed and weaved, evading most blows.
                  His head cleared. His left flashed out hard and straight, catching
                  Felix on the bridge of the nose.
                </li>
                <li>
                  <strong>Round 3 &mdash; the final round:</strong> It had been
                  tic-tac-toe, pretty much even, and this round would decide the
                  winner. This time, to everyone&rsquo;s surprise, Antonio charged
                  across the ring first. Felix tapped his gloves and commenced his
                  attack anew. Both pounded away. Neither gave an inch. Neither fell.
                  They fought{" "}
                  <Highlight color="yellow">toe to toe</Highlight>. The crowd went
                  completely mute. The referee was stunned by their savagery.
                </li>
                <li>
                  The bell rang over and over again. Felix and Antonio were past
                  hearing. Their blows continued like{" "}
                  <Highlight color="pink">hailstones</Highlight>. Finally the
                  referee and trainers pried them apart. Cold water was poured over
                  them to bring them back.
                </li>
                <li>
                  They looked around and then rushed toward each other. The crowd
                  gasped &mdash; was this a fight to the death? Fear gave way to{" "}
                  <Highlight color="yellow">wave upon wave of cheering</Highlight>{" "}
                  as the two amigos{" "}
                  <strong>tightly embraced</strong>. No matter what the decision,
                  they knew they would always be champions to each other.
                </li>
                <li>
                  The announcer turned to point to the winner and found himself{" "}
                  <strong>alone</strong>. Arm in arm, the champions had already left
                  the ring.
                </li>
              </ul>
            }
          />
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in">
          {/* Character Sketch: Antonio Cruz */}
          <h2
            id="character-sketch-antonio"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="blue">Antonio Cruz</Highlight>
          </h2>
          <CharacterSketch name="Antonio Cruz">
            <p>
              <Highlight color="blue">Antonio</Highlight> was a{" "}
              <strong>seventeen-year-old</strong> Puerto Rican from the Lower East
              Side of Manhattan. He was{" "}
              <Highlight color="yellow">fair, lean, and lanky</Highlight>, with
              long hair that was always falling over his eyes.
            </p>
            <p>
              A <strong>natural fighter</strong>, Antonio relied on his{" "}
              <strong>reach advantage</strong> and left hand. His left jab was
              described as &ldquo;a piston pumping jabs one right after another
              with seeming ease.&rdquo; His greatest strength was{" "}
              <Highlight color="green">discipline</Highlight> &mdash; he fought with
              strategy and never lost sight of the bigger picture.
            </p>
            <p>
              On the eve of the fight, Antonio stood on his rooftop and resolved
              to knock Felix out &ldquo;early and quick&rdquo; &mdash; not out of
              cruelty, but to <strong>spare his friend prolonged hurt</strong>.
              He cut negative thinking by doing &ldquo;speedy fancy dance
              steps&rdquo; and fell asleep mentally preparing.
            </p>
            <p>
              Antonio exemplifies the idea that{" "}
              <Highlight color="pink">true friendship</Highlight> and{" "}
              <strong>fierce competition</strong> can coexist. He fought with
              everything he had, and loved his amigo brother for the same reason.
            </p>
          </CharacterSketch>

          {/* Character Sketch: Felix Vargas */}
          <h2
            id="character-sketch-felix"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="green">Felix Vargas</Highlight>
          </h2>
          <CharacterSketch name="Felix Vargas">
            <p>
              <Highlight color="green">Felix</Highlight> was also a{" "}
              <strong>seventeen-year-old</strong> Puerto Rican from the same
              building on the Lower East Side. He was{" "}
              <Highlight color="yellow">dark, short, and husky</Highlight>, with
              his black hair worn in a natural Afro style.
            </p>
            <p>
              Felix was a <strong>powerful inside fighter</strong>. He needed to
              get in close &mdash; only by coming in close could he achieve the
              dreamed-of knockout. He &ldquo;bored in&rdquo; relentlessly,
              bobbed and weaved, and &ldquo;rushed like a bull&rdquo; with
              devastating rights and lefts. His{" "}
              <strong>dynamite-packed fists</strong> kept even the longer-armed
              Antonio wary.
            </p>
            <p>
              On the eve of the fight, Felix went to see{" "}
              <em>The Champion</em> (Kirk Douglas) to keep Antonio&rsquo;s face
              away from his fists, but it only stirred him up. He walked dark
              streets and went to bed. He told Antonio: &ldquo;It&rsquo;s cooler if
              we split right here. After the fight, we can get it together again
              like nothing ever happened.&rdquo;
            </p>
            <p>
              Felix embodied{" "}
              <Highlight color="pink">raw emotional power</Highlight> &mdash;
              fierce in battle yet tender in friendship, &ldquo;not ashamed to hug
              each other tightly.&rdquo;
            </p>
          </CharacterSketch>

          {/* Character Comparison */}
          <h2
            id="character-comparison"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Comparison:{" "}
            <Highlight color="blue">Antonio</Highlight> &amp;{" "}
            <Highlight color="green">Felix</Highlight>
          </h2>
          <CharacterComparison
            characters={["Antonio Cruz", "Felix Vargas"]}
            rows={[
              {
                label: "Appearance",
                values: [
                  <p key="a-app">Fair, lean, and lanky. Hair always falling over his eyes.</p>,
                  <p key="f-app">Dark, short, and husky. Black hair in a natural Afro style.</p>,
                ],
              },
              {
                label: "Weight",
                values: [
                  <p key="a-wt">133 pounds</p>,
                  <p key="f-wt">134 pounds</p>,
                ],
              },
              {
                label: "Fighting style",
                values: [
                  <p key="a-style">Long-range fighter. Relied on reach and a piston-like left jab.</p>,
                  <p key="f-style">Inside fighter. Relied on power, close range, and relentless aggression.</p>,
                ],
              },
              {
                label: "Strength",
                values: [
                  <p key="a-str">Reach, speed, strategy. &ldquo;His left hand was like a piston.&rdquo;</p>,
                  <p key="f-str">Power, determination. &ldquo;Dynamite stored in his fists.&rdquo;</p>,
                ],
              },
              {
                label: "Eve of fight",
                values: [
                  <p key="a-eve">Stood on his rooftop. Resolved to knock Felix out early to spare him hurt.</p>,
                  <p key="f-eve">Watched a movie, walked dark streets, went to bed. Stirred up and restless.</p>,
                ],
              },
              {
                label: "Round 1",
                values: [
                  <p key="a-r1">Kept distance with jab. Sent two lefts to Felix&rsquo;s head, setting his ear ringing.</p>,
                  <p key="f-r1">Bored in relentlessly. Trapped Antonio on the ropes with punishing rights and lefts.</p>,
                ],
              },
              {
                label: "Round 2",
                values: [
                  <p key="a-r2">Hurt badly &mdash; caught on the chin, legs turned to jelly. Head cleared; landed a hard left to Felix&rsquo;s nose.</p>,
                  <p key="f-r2">Rushed &ldquo;like a bull.&rdquo; Threw wild punches. Caught a hard left on the bridge of his nose.</p>,
                ],
              },
              {
                label: "Round 3",
                values: [
                  <p key="a-r3">Came out fast this time, charging across the ring. Neither gave an inch.</p>,
                  <p key="f-r3">Tapped gloves, attacked anew. Toe to toe. Past hearing the bell.</p>,
                ],
              },
              {
                label: "Philosophy",
                values: [
                  <p key="a-phil">&ldquo;No pulling punches. We go all the way.&rdquo;</p>,
                  <p key="f-phil">&ldquo;In the ring, it&rsquo;s got to be like we never met.&rdquo;</p>,
                ],
              },
              {
                label: "Shared trait",
                values: [
                  <p key="a-shared" className="font-semibold">Both were true champions &mdash; they knew that friendship survived competition, and walked out arm in arm.</p>,
                  <p key="f-shared" className="font-semibold">Both were true champions &mdash; they knew that friendship survived competition, and walked out arm in arm.</p>,
                ],
              },
            ]}
          />

          {/* Themes */}
          <h2
            id="themes"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Themes
          </h2>

          <Callout type="important">
            <p>
              <em>Amigo Brothers</em> explores the{" "}
              <Highlight color="yellow">tension between friendship and ambition</Highlight>{" "}
              &mdash; and the courage required to put your{" "}
              <strong>whole self</strong> into competition against someone you
              love, knowing the relationship must survive beyond the ring.
            </p>
          </Callout>

          <h3
            id="friendship-vs-ambition"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            Friendship vs. Ambition
          </h3>
          <p>
            Both Antonio and Felix want the same thing &mdash; the{" "}
            <Highlight color="yellow">lightweight championship</Highlight> &mdash;
            but only one can have it. The story does not frame this as a tragedy
            but as a{" "}
            <strong>test of maturity</strong>: both recognize that fighting fair
            and giving everything is the{" "}
            <Highlight color="green">highest form of respect</Highlight> they can
            offer each other.
          </p>

          <h3
            id="the-rising-wall"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            The Rising Wall
          </h3>
          <p>
            Even while joking together, the boys &ldquo;sensed a{" "}
            <Highlight color="pink">wall</Highlight> rising between them.&rdquo;
            This wall is not physical but{" "}
            <strong>psychological</strong> &mdash; the inevitable emotional
            distance that comes when two people who love each other must become{" "}
            <Highlight color="yellow">opponents</Highlight>. It mirrors the theme
            explored in Robert Frost&rsquo;s <em>Mending Wall</em>: walls arise
            between people, sometimes necessary, sometimes not.
          </p>

          <h3
            id="brotherhood-above-victory"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            Brotherhood Above Victory
          </h3>
          <p>
            The story&rsquo;s ending is its moral centre. Before the announcer can
            name the winner, the two{" "}
            <Highlight color="green">amigos leave together</Highlight> &mdash; arm
            in arm. The decision never matters.{" "}
            <strong>No matter what the result, they would always be champions to
            each other.</strong>
          </p>

          <h3
            id="courage-and-sportsmanship"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            Courage and Sportsmanship
          </h3>
          <p>
            The referee&rsquo;s words &ldquo;May the best man win&rdquo; capture
            the story&rsquo;s ethic. Neither boy <strong>pulls punches</strong>,
            holds back, or resents the other. To fight with{" "}
            <Highlight color="yellow">complete honesty</Highlight> is the truest
            act of sportsmanship &mdash; and the deepest expression of mutual
            respect.
          </p>

          {/* Key Takeaway */}
          <KeyPoint title="Key Takeaway">
            <em>Amigo Brothers</em> teaches that{" "}
            <strong>competition need not destroy friendship</strong>. When two
            people give everything they have &mdash; and still walk out arm in
            arm &mdash; it proves that{" "}
            <Highlight color="yellow">brotherhood</Highlight> is stronger than
            any victory or defeat. The true champion is not the one who wins the
            belt, but the one who{" "}
            <Highlight color="green">preserves the relationship</Highlight>.
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
