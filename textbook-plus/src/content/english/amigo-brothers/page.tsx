"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { CharacterComparison } from "@/components/content/CharacterComparison";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { TableCard } from "@/components/content/data/TableCard";

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

const DISCOURSES = [
  {
    id: "character-sketch-antonio",
    title: "Character Sketch: Antonio Cruz",
    content: (
      <CharacterSketch name="Antonio Cruz">
        <p>
          <Highlight color="blue">Antonio</Highlight> was a{" "}
          <strong>seventeen-year-old</strong> Puerto Rican from the Lower East
          Side of Manhattan. His defining features:
        </p>
        <ul className="list-disc space-y-1.5 ps-5">
          <li>
            <Highlight color="yellow">Fair, lean, and lanky</Highlight>.
          </li>
          <li>Long hair that was always falling over his eyes.</li>
        </ul>
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
    ),
  },
  {
    id: "character-sketch-felix",
    title: "Character Sketch: Felix Vargas",
    content: (
      <CharacterSketch name="Felix Vargas">
        <p>
          <Highlight color="green">Felix</Highlight> was also a{" "}
          <strong>seventeen-year-old</strong> Puerto Rican from the same
          building on the Lower East Side. His defining features:
        </p>
        <ul className="list-disc space-y-1.5 ps-5">
          <li>
            <Highlight color="yellow">Dark, short, and husky</Highlight>.
          </li>
          <li>His black hair worn in a natural Afro style.</li>
        </ul>
        <p>
          Felix was a <strong>powerful inside fighter</strong>. He needed to
          get in close &mdash; only by coming in close could he achieve the
          dreamed-of knockout.
        </p>
        <p>
          He &ldquo;bored in&rdquo; relentlessly, bobbed and weaved, and
          &ldquo;rushed like a bull&rdquo; with devastating rights and lefts.
          His <strong>dynamite-packed fists</strong> kept even the longer-armed
          Antonio wary.
        </p>
        <p>
          On the eve of the fight, Felix went to see <em>The Champion</em>{" "}
          (Kirk Douglas) to keep Antonio&rsquo;s face away from his fists, but
          it only stirred him up.
        </p>
        <p>He walked dark streets and went to bed.</p>
        <p>
          He told Antonio: &ldquo;It&rsquo;s cooler if we split right here.
          After the fight, we can get it together again like nothing ever
          happened.&rdquo;
        </p>
        <p>
          Felix embodied{" "}
          <Highlight color="pink">raw emotional power</Highlight> &mdash;
          fierce in battle yet tender in friendship, &ldquo;not ashamed to hug
          each other tightly.&rdquo;
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "character-comparison",
    title: "Character Comparison: Antonio & Felix",
    content: (
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
              <ul key="f-r3" className="list-disc space-y-1 ps-4">
                <li>Tapped gloves, attacked anew.</li>
                <li>Toe to toe.</li>
                <li>Past hearing the bell.</li>
              </ul>,
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
    ),
  },
  {
    id: "conflict-study",
    title: "Key Aspects of the Conflict",
    content: (
      <>
        <p>
          Antonio Cruz and Felix Vargas are best friends who consider themselves
          brothers. After winning elimination bouts, they are scheduled to fight
          each other in the division finals.
        </p>

        <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
          Key aspects
        </h3>
        <ul className="space-y-1.5 text-[0.95rem] leading-[1.7]">
          <li>
            <strong>Rivalry for a single title:</strong> Only one winner can
            represent the Boys&rsquo; Club in the Golden Gloves Championship
            Tournament.
          </li>
          <li>
            <strong>&ldquo;The rising wall&rdquo;:</strong> As the match approaches,
            both boys feel a psychological wall rising between them. They worry
            about how fighting each other will affect their relationship.
          </li>
          <li>
            <strong>Duty against affection:</strong> They agree to act like
            &ldquo;two heavy strangers&rdquo; in the ring and refuse to pull
            punches. This creates a mental struggle between the desire to win and
            affection for each other.
          </li>
        </ul>

        <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
          Resolution of the conflict
        </h3>
        <ul className="space-y-1.5 text-[0.95rem] leading-[1.7]">
          <li>
            <strong>Three fierce rounds:</strong> The conflict is resolved in the
            ring after three fierce rounds.
          </li>
          <li>
            <strong>The exit:</strong> Once the final bell rings, both boys
            immediately embrace and walk out arm-in-arm before the announcer
            declares the official winner.
          </li>
          <li>
            <strong>The proof:</strong> Their unbreakable bond of friendship is
            far more valuable than any medal or title.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "write-up",
    title: "Write-Up: Triumph of Brotherhood",
    content: (
      <>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Essay / paragraph write-up &middot; 6 marks &middot; about 200 words
        </p>
        <h3 className="text-base font-bold mt-3 mb-2 scroll-mt-24 text-foreground">
          Triumph of Brotherhood: Friendship Portrayed in <em>Amigo Brothers</em>
        </h3>
        <p>
          Piri Thomas&rsquo;s short story <em>Amigo Brothers</em> presents an
          inspiring portrayal of genuine friendship, mutual respect and
          sportsmanship between two seventeen-year-old Puerto Rican youths,
          Antonio Cruz and Felix Vargas.
        </p>
        <p>
          Growing up in the same building on the Lower East Side of Manhattan,
          their bond is so deep that they feel themselves to be true brothers.
        </p>
        <p>
          Unlike many youths who fall into negative street habits, Antonio and
          Felix keep their focus on a positive path. They share a passionate
          dream of becoming the lightweight champion of the world.
        </p>
        <ul className="space-y-1.5 text-[0.95rem] leading-[1.7]">
          <li>
            <strong>Shared discipline:</strong> They &ldquo;slept, ate, rapped,
            and dreamt positive.&rdquo; They train rigorously at the Boys&rsquo;
            Club and run together along the East River Drive at sunrise.
          </li>
          <li>
            <strong>The test:</strong> They are scheduled to fight each other in
            the division finals for the Golden Gloves Championship Tournament.
          </li>
          <li>
            <strong>Their response:</strong> Sensing a rising psychological wall,
            they agree to act like &ldquo;two heavy strangers,&rdquo; give their
            absolute best without pulling punches and separate until match day.
          </li>
        </ul>
        <p>
          During the bout at Tompkins Square Park, both boys fight with fierce
          dedication across three punishing rounds. However, the moment the final
          bell rings, all rivalry disappears.
        </p>
        <p>
          The two boys rush into a warm embrace and walk out of the arena
          arm-in-arm before the official winner is declared. Through their
          actions, they prove that true friendship and mutual love are far more
          valuable than any personal title or championship trophy.
        </p>
      </>
    ),
  },
  {
    id: "debate",
    title: "Activity IV: Debate on the Real Spirit of a Competition",
    content: (
      <>
        <h3 className="text-base font-bold mb-2 scroll-mt-24 text-foreground">
          Textual context
        </h3>
        <p>
          <em>
            &ldquo;The announcer turned to point to the winner and found himself
            alone. Arm in arm, the champions had already left the ring.&rdquo;
          </em>
        </p>

        <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
          Should champions leave without receiving the prize?
        </h3>
        <TableCard
          headers={["Against leaving the prize", "Supporting their exit"]}
          rows={[
            {
              cells: [
                "Violation of rules: departing before the official announcement breaches tournament regulations and decorum.",
                "Higher value of friendship: human relationships and mutual respect are far superior to a physical medal or trophy.",
              ],
            },
            {
              cells: [
                "Audience and official confusion: organizers, judges, sponsors and spectators are left uninformed about who advances to the Golden Gloves Tournament.",
                "Rejection of artificial division: an arbitrary judges&rsquo; decision cannot divide two friends who gave 100% honesty in the ring.",
              ],
            },
            {
              cells: [
                "Denying recognition: it fails to formally honour the athletic effort and victory earned through three grueling rounds.",
                "True sportsmanship: victory lies in mutual love rather than public applause.",
              ],
            },
          ]}
        />

        <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
          Model speech for the motion
        </h3>
        <div className="italic">
          &ldquo;Respected Chairperson, panel of judges, and dear friends,
        </div>
        <p>
          <em>
            I stand FOR the motion that leaving a competition without accepting
            the award violates the fundamental decorum of sports.
          </em>
        </p>
        <p>
          <em>Rules and regulations are the backbone of any organized game.</em>
        </p>
        <p>
          <em>
            When Antonio and Felix walked out before the announcement, they
            disrupted the valedictory protocol and left thousands of fans and
            officials in confusion.
          </em>
        </p>
        <p>
          <em>
            While their friendship is admirable, respecting tournament rules is
            an essential duty of a true athlete. Accepting victory or defeat
            gracefully and honouring the organizers matter just as much.
          </em>
        </p>
        <p>
          <em>Therefore, rules must never be bypassed.&rdquo;</em>
        </p>

        <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
          Model speech against the motion
        </h3>
        <div className="italic">
          &ldquo;Respected Chairperson, panel of judges, and dear friends,
        </div>
        <p>
          <em>I stand AGAINST the motion. The real spirit of competition lies not
          in a brass medal or a title, but in integrity, maximum effort and mutual
          respect.</em>
        </p>
        <p>
          <em>
            Antonio and Felix fought three fierce rounds without holding back a
            single punch. By walking out arm-in-arm, they proved that their bond
            was unsullied by commercial glory.
          </em>
        </p>
        <p>
          <em>
            They did not disrespect the game; rather, they elevated it by showing
            the world that true brotherhood is the greatest championship prize of
            all.&rdquo;
          </em>
        </p>
        <KeyPoint title="The real spirit of competition">
          True brotherhood is the greatest championship prize of all.
        </KeyPoint>
      </>
    ),
  },
  {
    id: "newspaper-report",
    title: "Newspaper Report: Friendship Triumphs Over Title",
    content: (
      <>
        <h3 className="text-base font-bold mb-1 scroll-mt-24 text-foreground">
          FRIENDSHIP TRIUMPHS OVER TITLE AT GOLDEN GLOVES FINALS
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          By Staff Reporter &middot; New York, August 8
        </p>
        <p>
          In an extraordinary display of boxing skill and sportsmanship,
          seventeen-year-old local fighters Antonio Cruz and Felix Vargas turned
          yesterday&rsquo;s division final into an unforgettable event at Tompkins
          Square Park.
        </p>
        <p>
          The outdoor venue was packed to capacity with thousands of Lower East
          Side residents who gathered to watch the two close friends compete for
          a spot in the Golden Gloves Tournament.
        </p>
        <p>
          From the opening bell, both athletes fought with complete honesty and
          determination.
        </p>
        <p>
          Antonio used his height and long reach to land swift jabs, while Felix
          relied on his raw power, bobbing and weaving to deliver heavy body
          punches.
        </p>
        <p>
          The bout escalated through three intense rounds, with neither fighter
          giving ground. The action became so ferocious in the final round that
          both boys kept punching even after the final bell rang, requiring the
          referee and trainers to physically pry them apart.
        </p>
        <p>
          However, as soon as cold water was poured over them, all hostility
          melted away.
        </p>
        <p>
          Antonio and Felix threw their arms around each other in a warm embrace,
          drawing a standing ovation from the crowd.
        </p>
        <p>
          In a surprising turn of events, as the announcer stepped up to the
          microphone to declare the official winner, he found the ring empty.
        </p>
        <p>Antonio and Felix had already walked off together, arm-in-arm.</p>
        <p>
          Their decision showed the community that while only one fighter could
          officially advance, both young men walked away as true champions of
          brotherhood.
        </p>
      </>
    ),
  },
  {
    id: "announcement-script",
    title: "Sports Day / Boxing Match Announcement Script",
    content: (
      <>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Based on Activity II &middot; 4 marks &middot; live public address
          announcement for the 100m Super Sprint / Championship Match at the
          School Annual Sports Meet
        </p>
        <p className="font-semibold text-foreground/70">
          [Sound effect: chime / mic check]
        </p>
        <div className="space-y-2 italic text-foreground/90">
          <div>&ldquo;Good morning, students, teachers, and sports enthusiasts!</div>
          <div>May I have your attention, please!</div>
          <div>
            We have finally arrived at the most anticipated event of today&rsquo;s
            Annual Sports Meet &mdash; the Senior Boys&rsquo; 100-Metre Super Sprint
            Final!
          </div>
          <div>
            In just a few minutes, eight of our finest athletes will take their
            positions on the tracks. These young runners have worked tirelessly
            through months of early morning practice to reach this grand stage.
          </div>
          <div>
            Track 3: Rahul Sharma from Blue House &mdash; our defending champion
            with lightning speed.
          </div>
          <div>
            Track 4: Kevin Joseph from Red House &mdash; known for his powerful
            acceleration off the blocks.
          </div>
          <div>
            Only one runner will take home the gold today and qualify for the
            District Championship!
          </div>
          <div>
            Spectators are requested to clear the track borders and move behind
            the gallery ropes. Let&rsquo;s make some noise and cheer on our athletes
            as they push their limits!
          </div>
          <div>Runners, to your marks... Get set...&rdquo;</div>
        </div>
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
            <ChapterIntro author="Piri Thomas" genre="Short story" characters={["Antonio Cruz", "Felix Vargas"]} />
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
          </p>
          <p>
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

          {/* Central Theme */}
          <h2
            id="central-theme"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Central Theme
          </h2>
          <p>
            The story centres on two close friends and fellow boxers who must
            fight each other in the division finals, where only one can win. It
            asks whether their friendship can survive the competition that
            forces them to become opponents.
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
                  <strong>Author</strong>: Piri Thomas. Genre: Short story. Setting: Lower
                  East Side, New York City.
                </li>
                <li>
                  <strong>Characters</strong>:{" "}
                  <Highlight color="yellow">Antonio Cruz</Highlight> (fair, lean, long
                  reach) and{" "}
                  <Highlight color="blue">Felix Vargas</Highlight> (dark, short, powerful)
                  &mdash; both 17, best friends since childhood.
                </li>
                <li>
                  <strong>Conflict</strong>: Best friends must fight each other in the
                  Golden Gloves division finals. Winner goes to Madison Square Garden.
                </li>
                <li>
                  <strong>Key detail</strong>: Both prayed for a{" "}
                  <strong>quick clean knockout</strong> &mdash; to spare the other hurt.
                  Even their subconscious minds refused to hurt each other.
                </li>
                <li>
                  <strong>Resolution</strong>: After three brutal rounds, they embrace and
                  walk out arm in arm. The winner is never announced. Their friendship is
                  the victory.
                </li>
                <li>
                  <strong>Theme</strong>: True friendship{" "}
                  <Highlight color="green">survives competition</Highlight>. The title
                  itself is the theme &mdash; &ldquo;Amigo Brothers&rdquo; is what they
                  are before, during, and after the fight.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Introduction</strong>:{" "}
                  <Highlight color="yellow">Antonio Cruz</Highlight> (fair, lean, long
                  reach) and{" "}
                  <Highlight color="blue">Felix Vargas</Highlight> (dark, short, powerful)
                  are both 17, both from the Lower East Side, and trained together every
                  morning on the East River Drive. They are inseparable &mdash; sharing
                  dreams of becoming lightweight champion.
                </li>
                <li>
                  <strong>The news</strong>: They learned they must fight each other in the
                  division finals. The winner goes to the{" "}
                  <Highlight color="green">Golden Gloves Championship</Highlight> at
                  Madison Square Garden. The dream they shared now requires one to
                  destroy the other&rsquo;s chance.
                </li>
                <li>
                  <strong>The wall</strong>: A wall rose between them &mdash; not physical,
                  but emotional. Both admitted &ldquo;pulling punches&rdquo; in their
                  dreams &mdash; trying not to hurt each other. Even their subconscious
                  minds refused to wound the other. Their friendship was deeper than
                  ambition.
                </li>
                <li>
                  <strong>The agreement</strong>: They agreed: in the ring, like two{" "}
                  <Highlight color="yellow">strangers</Highlight> who want the same
                  thing. They shook hands and separated until fight day &mdash; a
                  self-imposed exile to preserve the friendship.
                </li>
                <li>
                  <strong>Eve of the fight</strong>: On the eve of the fight, both prayed
                  for a{" "}
                  <Highlight color="blue">quick clean knockout</Highlight> &mdash; not to
                  win, but to spare the other hurt. The paradox: they wanted to win, but
                  not at the other&rsquo;s expense.
                </li>
                <li>
                  <strong>The fight</strong>: At Tompkins Square Park, three brutal rounds
                  were fought. Neither gave an inch. The crowd went silent. Both fighters
                  were battered, exhausted, but neither would fall.
                </li>
                <li>
                  <strong>The embrace</strong>: The bell rang over and over. They were past
                  hearing. Finally pried apart, they rushed toward each other and{" "}
                  <Highlight color="pink">tightly embraced</Highlight>. They walked out
                  arm in arm &mdash; the announcer found himself alone. The decision was
                  irrelevant.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Setting as identity</strong>: The Lower East Side, the East
                  River Drive, Tompkins Square Park &mdash; the{" "}
                  <Highlight color="yellow">boxing world</Highlight> is their shared
                  home and language. Competition is built into their environment. They
                  grew up in a neighbourhood where fighting was survival, and boxing was
                  the noble version of that survival. The setting is not just background
                  &mdash; it shapes who they are.
                </li>
                <li>
                  <strong>Shared life and dream</strong>: Antonio Cruz and Felix
                  Vargas are seventeen-year-old best friends who have known each
                  other since childhood in the same building on the Lower East Side
                  of Manhattan. They feel like brothers and share the dream of
                  becoming the lightweight champion of the world.
                </li>
                <li>
                  <strong>Training routine</strong>: While other street youths fall
                  into negative habits, they work out at the Boys&rsquo; Club and
                  local gyms, run along the East River Drive at sunrise, collect
                  fight magazines, and keep scrapbooks of tickets and clippings.
                </li>
                <li>
                  <strong>The division final</strong>: After the elimination bouts,
                  they are set to fight each other on the 7th of August. The winner
                  will represent the Boys&rsquo; Club in the Golden Gloves
                  Championship Tournament.
                </li>
                <li>
                  <strong>The rising wall</strong>: As the fight approaches, both boys
                  feel a psychological wall rising between them. They worry about how
                  competing against each other will affect their friendship.
                </li>
                <li>
                  <strong>The pact on the run</strong>: During a workout run along the
                  East River Drive, they confront the issue openly. In the ring they
                  must act like &ldquo;two heavy strangers&rdquo; and fight without
                  holding back &mdash; &ldquo;no pulling punches.&rdquo; They decide not
                  to see each other until match day.
                </li>
                <li>
                  <strong>Separate preparations</strong>: Felix stays at his Aunt
                  Lucy&rsquo;s apartment to clear his mind. Antonio spends time on his
                  rooftop trying to overcome his doubts. Both try to treat the match
                  as professional duty, with no place for friendship in the ring.
                </li>
                <li>
                  <strong>Physical contrast</strong>: Antonio is fair, lean, long reach;
                  Felix is dark, short, powerful. The descriptions establish them as{" "}
                  <Highlight color="blue">opposites who complete each other</Highlight>
                  &mdash; and as evenly matched opponents. The contrast is deliberate:
                  they are different enough to be interesting, equal enough to be
                  dangerous. Neither has a clear advantage.
                </li>
                <li>
                  <strong>The wall</strong>: The metaphor of a wall rising between them
                  echoes the division they must create to fight. But unlike Frost&rsquo;s
                  wall, this one is{" "}
                  <Highlight color="green">temporary and chosen</Highlight>. They build it
                  themselves to survive the fight &mdash; and they tear it down the moment
                  it&rsquo;s over. The wall is a test: can they build it, live behind it,
                  and then destroy it without permanent damage?
                </li>
                <li>
                  <strong>&ldquo;Pulling punches&rdquo;</strong>: Both admit to pulling
                  punches in their dreams &mdash; even their subconscious minds refuse to
                  hurt the other. This is the story&rsquo;s most revealing detail. The
                  friendship runs deeper than ambition. They can&rsquo;t even hurt each
                  other in their sleep. The line tells us: this fight is a performance,
                  not a war.
                </li>
                <li>
                  <strong>The agreement</strong>: &ldquo;In the ring, like two
                  strangers&rdquo; &mdash; they must{" "}
                  <Highlight color="yellow">suspend friendship</Highlight> to honour it.
                  Paradoxically, being true friends means being fierce opponents. If they
                  held back, they would insult each other. The agreement is an act of
                  respect: we will fight like we mean it, because we owe each other that.
                </li>
                <li>
                  <strong>Boxing as spectacle</strong>: The crowd, the announcer, the
                  referee, the white T-shirts &mdash; the fight is a{" "}
                  <Highlight color="pink">public ritual</Highlight>. But the real contest
                  is private: can they survive being each other&rsquo;s enemy? The public
                  sees a boxing match. The reader sees two friends trying to preserve
                  something fragile under impossible pressure.
                </li>
                <li>
                  <strong>The venue</strong>: Massive public interest moves the bout to
                  Tompkins Square Park, which can accommodate the large crowd.
                </li>
                <li>
                  <strong>Round 1</strong>: The bell sounds and both charge aggressively.
                  Antonio uses his long reach; Felix counters with powerful body hits.
                  Neither holds back.
                </li>
                <li>
                  <strong>Round 2</strong>: The exchanges grow rapid. Both fighters are
                  bruised and hurting, yet neither yields ground.
                </li>
                <li>
                  <strong>Round 3</strong>: The crowd grows mute at blows exchanged like
                  hailstones. When the final bell rings repeatedly
                  (&ldquo;Bong! Bong! Bong!&rdquo;), neither hears it. They keep punching
                  until the referee and trainers physically pry them apart.
                </li>
                <li>
                  <strong>Cold water and cheers</strong>: Cold water brings them to their
                  senses. They look at each other and rush into a warm embrace. The crowd
                  erupts into loud cheers as their unbreakable bond is restored.
                </li>
                <li>
                  <strong>The embrace</strong>: Rushing toward each other after three
                  rounds of savagery &mdash; the crowd fears a fight to the death, but
                  it&rsquo;s a{" "}
                  <Highlight color="green">reunion</Highlight>. Their friendship has
                  survived the ring. The embrace is the story&rsquo;s climax &mdash; not
                  the fight itself. The fight was the test; the embrace is the result.
                  They pass.
                </li>
                <li>
                  <strong>Final image</strong>: The announcer turns to point to the winner
                  and finds himself{" "}
                  <Highlight color="yellow">alone</Highlight>. The champions have already
                  left arm in arm. The decision is irrelevant &mdash; their friendship
                  has already won. The image is comic and profound: the official
                  apparatus of competition (referee, announcer, judges) is meaningless
                  compared to the human bond.
                </li>
                <li>
                  <strong>Overall theme</strong>: True friendship{" "}
                  <Highlight color="blue">survives competition</Highlight>. The title
                  itself is the theme &mdash; &ldquo;Amigo Brothers&rdquo; is what they
                  are before, during, and after the fight. The story argues that real
                  bonds cannot be broken by circumstance &mdash; even when circumstance
                  demands they become enemies. The fight proves the friendship, rather
                  than destroying it.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
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
              The story&rsquo;s ending is its moral centre. Before the announcer
              can name the winner, the two{" "}
              <Highlight color="green">amigos leave together</Highlight> &mdash;
              arm in arm.
            </p>
            <p>
              The decision never matters.{" "}
              <strong>No matter what the result, they would always be champions
              to each other.</strong>
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
              holds back, or resents the other.
            </p>
            <p>
              To fight with{" "}
              <Highlight color="yellow">complete honesty</Highlight> is the truest
              act of sportsmanship &mdash; and the deepest expression of mutual
              respect.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
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
          </div>

          {/* Read & Respond */}
          <div id="read-and-respond-section" className="mt-14">
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in space-y-4">
          {(() => {
            const characters = DISCOURSES.filter((s) => s.id.startsWith("character-"));
            const others = DISCOURSES.filter((s) => !s.id.startsWith("character-"));
            return (
              <>
                {characters.length >= 2 && (
                  <div className="rounded-xl border border-border/50 bg-card/30 p-4 mt-2 mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Characters
                    </p>
                    {characters.map((section) => (
                      <CollapsibleSection key={section.id} id={section.id} title={section.title}>
                        {section.content}
                      </CollapsibleSection>
                    ))}
                  </div>
                )}
                {characters.length < 2 && characters.map((section) => (
                  <CollapsibleSection key={section.id} id={section.id} title={section.title}>
                    {section.content}
                  </CollapsibleSection>
                ))}
                {others.map((section) => (
                  <CollapsibleSection key={section.id} id={section.id} title={section.title}>
                    {section.content}
                  </CollapsibleSection>
                ))}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
