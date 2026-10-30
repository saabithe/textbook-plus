"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
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
    question: "What is a horegallu? What is its purpose?",
    answer: (
      <>
        A <Highlight color="yellow">horegallu</Highlight> is a <strong>stone bench</strong> placed under a tree
        where travelers can sit, rest, chat, and refresh themselves before
        continuing their journey.
      </>
    ),
  },
  {
    question: "What are the special memories the author associates with horegallu?",
    answer: (
      <>
        The author remembers her <strong>childhood days</strong>, playing under the{" "}
        <Highlight color="blue">banyan tree</Highlight> and watching her{" "}
        <Highlight color="green">grandfather</Highlight> patiently listen to{" "}
        <strong>villagers&apos; worries</strong> as they rested on the horegallu.
      </>
    ),
  },
  {
    question: "How does the grandfather refresh the travellers?",
    answer: (
      <>
        He <Highlight color="yellow">listens</Highlight> to their problems with{" "}
        <strong>patience</strong>. Though he does not give solutions, his{" "}
        <Highlight color="pink">sympathetic listening</Highlight> makes them feel
        lighter and refreshed.
      </>
    ),
  },
  {
    question: "Is horegallu essential in a journey? Why?",
    answer: (
      <>
        <Highlight color="yellow">Yes</Highlight>. Because everyone carries{" "}
        <Highlight color="pink">burdens</Highlight> in life, and sometimes we need
        to <strong>pause</strong>, <strong>put them down</strong>, and{" "}
        <strong>rest</strong>. The horegallu gives people the chance to{" "}
        <Highlight color="green">regain strength</Highlight> before continuing.
      </>
    ),
  },
  {
    question: "Bring out the symbolic significance of the word burden.",
    answer: (
      <>
        The word <Highlight color="pink">burden</Highlight> symbolizes the{" "}
        <strong>worries, problems, and responsibilities</strong> people carry in
        life. <strong>Sharing them with a listener</strong> helps lighten the load.
      </>
    ),
  },
  {
    question: "Comment on the expression infectious cheerfulness.",
    answer: (
      <>
        It refers to <Highlight color="blue">Ratna&apos;s</Highlight>{" "}
        <strong>positive attitude</strong> at work. Her{" "}
        <Highlight color="yellow">cheerful nature</Highlight> spread to others,
        making them feel comfortable and open to share their troubles.
      </>
    ),
  },
  {
    question: "Horegallu gives everyone the opportunity to regain their strength. What does the author try to indicate here?",
    answer: (
      <>
        The author suggests that just as a{" "}
        <Highlight color="blue">stone bench</Highlight> helps travelers rest,{" "}
        <Highlight color="green">patient listeners</Highlight> help people{" "}
        <Highlight color="pink">regain emotional strength</Highlight> by allowing
        them to share their worries.
      </>
    ),
  },
  {
    question: "What does Ratna do during lunch hours?",
    answer: (
      <>
        She spends her <strong>lunch breaks</strong>{" "}
        <Highlight color="yellow">listening to her colleagues&apos; troubles</Highlight>{" "}
        with <strong>sympathy</strong> and <strong>without judgment</strong>.
      </>
    ),
  },
  {
    question: "What is Ratna&apos;s simplistic outlook?",
    answer: (
      <>
        Ratna believes that{" "}
        <Highlight color="yellow">listening itself</Highlight> relieves{" "}
        <Highlight color="pink">half of a person&apos;s burden</Highlight>, even if no
        solution is given.
      </>
    ),
  },
  {
    question: "The author wishes there were many more horegallus in the world. Comment.",
    answer: (
      <>
        The author feels that society needs{" "}
        <Highlight color="green">more people</Highlight> like her{" "}
        <Highlight color="blue">grandfather and Ratna</Highlight> —{" "}
        <strong>patient listeners</strong> who help others{" "}
        <Highlight color="pink">lighten their burdens</Highlight> and regain
        strength.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "character-sketches",
    title: "Character Sketches",
    content: (
      <>
        <p>
          Two listeners carry the essay &mdash; a retired teacher under a village
          banyan tree and a clerk in a Mumbai office. Neither of them solves a
          problem; both of them lighten one.
        </p>

        <CharacterSketch name="Grandfather">
          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            I. Introduction &mdash; Identity and Background
          </h3>
          <p>
            <Highlight color="green">Grandfather</Highlight> is one of the two
            central figures in Sudha Murty&rsquo;s personal anecdote{" "}
            <em>Horegallu</em>. He is a <strong>retired school teacher</strong> of
            the narrator&rsquo;s village, known to everyone there as{" "}
            <strong>Masterji</strong>.
          </p>
          <p>
            He belongs to the{" "}
            <Highlight color="yellow">horegallu</Highlight> under the village
            banyan tree, where he sits for hours every day talking to the
            travellers and field workers who stop there to rest.
          </p>

          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            II. Personality and Characteristic Features
          </h3>
          <p>
            He is <strong>patient</strong>, <strong>humble</strong> and{" "}
            <strong>generous with his time</strong>. These qualities appear not in
            what he says but in how long he is willing to sit and hear people out.
          </p>
          <p>
            His patience is visible in the daily scene at the bench. Villagers
            tired from the fields wash their faces, drink the cool water and talk
            about the dry summer, the loads on their heads and sons who want to
            leave for the city; he lets every one of them finish.
          </p>
          <p>
            His humility shows in his refusal to pretend he has answers. He cannot
            mend a leaking roof or raise a wage, and he never offers advice &mdash;
            which tells us that he understands his role as bearing weight rather
            than lifting it.
          </p>
          <p>
            His generosity is the quietest trait of all. He is paid nothing and
            recognised by no one, and he keeps the bench warm because these acts
            of kindness <Highlight color="pink">gave him joy</Highlight>.
          </p>

          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            III. Important Incidents, Relationships and Development
          </h3>
          <p>
            The important incident is not a single event but a repetition: every
            day travellers arrive heavy with their loads and leave with some ease,
            and every day he is there.
          </p>
          <p>
            His relationship with the villagers rests on{" "}
            <strong>respect</strong> &mdash; he is the elder they trust with what
            is worrying them &mdash; and his relationship with the narrator is the
            one that shapes the essay.
          </p>
          <p>
            She plays under the banyan tree during her holidays and watches him
            listen. It is to her that he explains the philosophy of the horegallu.
          </p>
          <p>
            Everyone carries burdens according to their situations and capacities,
            but every once in a while they need to stop, put the burden down and
            rest.
          </p>
          <p>
            His limitation is real &mdash; he can only listen. The essay treats
            that as the point rather than a flaw, and he himself never changes: he
            is the fixed point against which the narrator measures the rest of her
            life.
          </p>

          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            IV. Conclusion &mdash; Overall Assessment
          </h3>
          <p>
            Grandfather can be described as a patient, humble and quietly
            benevolent man who turned an ordinary stone bench into a form of
            hospitality.
          </p>
          <p>
            Through him the author presents the essay&rsquo;s central insight:
            service need not be grand, and listening is work. He matters to the
            story because he supplies its governing metaphor, and he is memorable
            because he makes empathy look easy.
          </p>
        </CharacterSketch>

        <CharacterSketch name="Ratna">
          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            I. Introduction &mdash; Identity and Background
          </h3>
          <p>
            <Highlight color="blue">Ratna</Highlight> is the second of the two
            human horegallus in the essay. She is a{" "}
            <strong>middle-aged senior clerk</strong> in the Mumbai company where
            the narrator works, and she has been there for nearly{" "}
            <strong>twenty-five years</strong>.
          </p>
          <p>
            She is a graduate whose work is repetitive and mundane: the same
            files, the same desk, the same hours. That makes her{" "}
            <Highlight color="pink">infectious cheerfulness</Highlight> the more
            remarkable.
          </p>

          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            II. Personality and Characteristic Features
          </h3>
          <p>
            She is <strong>cheerful</strong>,{" "}
            <strong>non-judgemental</strong> and{" "}
            <strong>utterly discreet</strong>. Each quality is proved by a small,
            concrete detail rather than by description.
          </p>
          <p>
            Her cheerfulness spreads through the office despite the dullness of
            the work; it is what draws colleagues to her, and it is why they feel
            able to speak.
          </p>
          <p>
            Her non-judgemental listening fills every lunch hour. She sits with
            one person in a room and hears them out, and when the narrator asks
            what they talk about she says simply, &ldquo;They share their troubles
            with me.&rdquo;
          </p>
          <p>
            Her discretion is the foundation of the whole arrangement. She calls
            betraying a confidence the worst kind of sin and says she would not
            do it <Highlight color="yellow">&ldquo;even in my dreams&rdquo;</Highlight>
            &mdash; people speak freely only because they know their words are
            safe.
          </p>

          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            III. Important Incidents, Relationships and Development
          </h3>
          <p>
            The incident that reveals her most clearly is the lunch-hour
            conversation the narrator witnesses. Ratna is not a trained counsellor
            and does not pretend to be one; she believes people must solve their
            own problems.
          </p>
          <p>
            What she offers instead is her own theory of listening: God gave her
            two ears to hear others with sympathy and without passing judgement,
            and when a person under strain finds an outlet for his worries,{" "}
            <Highlight color="pink">half his burden is relieved</Highlight>.
          </p>
          <p>
            Her relationship with her colleagues is therefore one of trust rather
            than friendship alone. They hand her their secrets, and she carries
            them without ever setting them down in public.
          </p>
          <p>
            She has an obvious limitation &mdash; she cannot solve anything
            &mdash; and the essay turns that limitation into her strength. Like
            the grandfather she does not change; her influence is on the narrator,
            who recognises in her the village bench made human.
          </p>

          <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
            IV. Conclusion &mdash; Overall Assessment
          </h3>
          <p>
            Ratna can be described as an ordinary working woman who performs an
            extraordinary service with no title, no training and no reward.
          </p>
          <p>
            Through her the author shows that empathy is a skill and that
            confidentiality is its price. She is important because she proves the
            horegallu is not a village memory but a living possibility, and she is
            memorable because she makes listening look like generosity rather than
            technique.
          </p>
        </CharacterSketch>
      </>
    ),
  },
  {
    id: "character-comparison",
    title: (
      <>
        Character Comparison:{" "}
        <Highlight color="green">Grandfather</Highlight> &amp;{" "}
        <Highlight color="blue">Ratna</Highlight>
      </>
    ),
    content: (
      <CharacterComparison
        characters={["Grandfather", "Ratna"]}
        rows={[
          {
            label: "Role",
            values: [
              <p key="g-role">Retired school teacher, called Masterji by the villagers</p>,
              <p key="r-role">Senior clerk, twenty-five years in the company, a graduate</p>,
            ],
          },
          {
            label: "Setting",
            values: [
              <p key="g-set">Village, under the banyan tree beside the horegallu</p>,
              <p key="r-set">Office, during lunch breaks in one of the rooms</p>,
            ],
          },
          {
            label: "Who they helped",
            values: [
              <p key="g-who">Villagers carrying heavy loads home from the fields</p>,
              <p key="r-who">Co-workers carrying worries and stress</p>,
            ],
          },
          {
            label: "How they listened",
            values: [
              <p key="g-how">Sat under the tree and let travellers talk about the dry summer, their loads and their sons</p>,
              <p key="r-how">Sat with one person each lunch hour and heard them out without trying to solve anything</p>,
            ],
          },
          {
            label: "Philosophy",
            values: [
              <p key="g-phil">&ldquo;A horegallu is essential in any journey. We all carry our burdens according to our situations and capacities. But every once in a while, we need to stop, put down that burden and rest.&rdquo;</p>,
              <p key="r-phil">&ldquo;God has given me two ears to listen to others. I hear them out with sympathy and without any judgement. When a person finds an outlet for his worries, it relieves half his burden.&rdquo;</p>,
            ],
          },
          {
            label: "Confidentiality",
            values: [
              <p key="g-conf">Villagers trusted him as a respected elder, and what they said at the bench stayed there</p>,
              <p key="r-conf">&ldquo;Not even in my dreams. I consider that to be the worst kind of betrayal.&rdquo;</p>,
            ],
          },
          {
            label: "Effect on others",
            values: [
              <p key="g-eff">Travellers felt refreshed and picked up their burdens with ease</p>,
              <p key="r-eff">Colleagues found relief and gathered the strength to carry on</p>,
            ],
          },
          {
            label: "Motivation",
            values: [
              <p key="g-mot">No money and no recognition; these acts of kindness gave him joy</p>,
              <p key="r-mot">No reward sought; she listened because people needed an outlet</p>,
            ],
          },
          {
            label: "Shared trait",
            values: [
              <p key="g-shared" className="font-semibold">Both were human horegallus &mdash; listeners who let others set a burden down and take it up again</p>,
              <p key="r-shared" className="font-semibold">Both were human horegallus &mdash; listeners who let others set a burden down and take it up again</p>,
            ],
          },
        ]}
      />
    ),
  },
  {
    id: "think-and-write",
    title: "Think and Write",
    content: (
      <>
        <p>
          Two questions ask you to judge the essay rather than recall it. Answer
          each in a paragraph of your own, using evidence from the text.
        </p>

        <h3
          id="tremendous-social-service"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. Do you think that the grandfather and Ratna were doing some
          tremendous social service? Explain.
        </h3>
        <p>
          <strong>Model answer.</strong> Yes &mdash; both were performing a
          tremendous social service, and the essay is careful to show that it
          looked like nothing at the time.
        </p>
        <p>
          Every day the grandfather sat under the village banyan tree and listened
          patiently to travellers and field workers describing their worries.
          Although he had no concrete answers, simply talking to him refreshed
          them, and they picked up their burdens with ease and continued on their
          way.
        </p>
        <p>
          In Mumbai, Ratna did the same thing in an office. During her lunch hour
          she heard her colleagues out with sympathy and without judgement.
        </p>
        <p>
          She kept every confidence, because she believed that when a person under
          strain finds an outlet, half the burden is relieved.
        </p>
        <p>
          Neither had wealth, a degree or public recognition. Yet both provided
          the emotional outlet that relieved real suffering and mental strain.
        </p>
        <p>
          They continued because these acts of kindness gave them joy, and that is
          exactly what makes the service remarkable.
        </p>

        <h3
          id="human-horegallu"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Can we relate the grandfather and Ratna to a horegallu? Why?
        </h3>
        <p>
          <strong>Model answer.</strong> Yes &mdash; the essay invites exactly
          that comparison, and it works on both the physical and the emotional
          level.
        </p>
        <p>
          A physical horegallu is a stone bench where a weary traveller can set
          down a heavy load, rest in the shade, quench his thirst and regain his
          strength before moving on.
        </p>
        <p>
          In life&rsquo;s journey people carry burdens of a different kind &mdash;
          anxiety, grief and daily trouble &mdash; and they carry them according
          to their situations and capacities. The grandfather and Ratna offered a
          safe, non-judgemental space where that weight could be set down for a
          while.
        </p>
        <p>
          Just as the bench helps a traveller resume the trek with ease, these two
          helped people recover the mental strength and confidence to face their
          struggles again. That is why the author calls them{" "}
          <Highlight color="yellow">human horegallus</Highlight>.
        </p>
      </>
    ),
  },
  {
    id: "women-perspectives",
    title: "Comparison of Women&rsquo;s Perspectives on Empowerment",
    content: (
      <>
        <p>
          Unit 1, <em>Flights of Freedom</em>, brings together four voices that
          describe four different kinds of strength. Read side by side, they
          answer one question: what does it actually mean for a woman to be
          empowered?
        </p>

        <h3
          id="perspectives-excerpts"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. The Excerpts and Their Core Meanings
        </h3>
        <TableCard
          title="Four voices, four kinds of strength"
          headers={["Voice", "Excerpt", "Core meaning"]}
          rows={[
            {
              cells: [
                <p key="lagarde-voice" className="font-semibold">
                  Christine Lagarde, <em>The 3Ls of Empowerment</em>
                </p>,
                <p key="lagarde-quote" className="italic">
                  &ldquo;It is time to create a world where all women can meet
                  their potential without impediment or prejudice.&rdquo;
                </p>,
                "Structural and economic liberation, achieved through Learning, Labour and Leadership.",
              ],
            },
            {
              cells: [
                <p key="tynan-voice" className="font-semibold">
                  Katharine Tynan, <em>Any Woman</em>
                </p>,
                <p key="tynan-quote" className="italic">
                  &ldquo;I am the heat that warms the earth, / Which else were
                  colder than a stone.&rdquo;
                </p>,
                "Domestic and emotional strength &mdash; the woman as the life-giving anchor of the house.",
              ],
            },
            {
              cells: [
                <p key="debi-voice" className="font-semibold">
                  Ashapurna Debi, <em>Matchbox</em>
                </p>,
                <p key="debi-quote" className="italic">
                  &ldquo;I always compare women to match boxes.&rdquo; / &ldquo;For
                  what reason should you open my letters?&rdquo;
                </p>,
                "Latent power and personal dignity &mdash; gunpowder under a quiet surface, and the right to privacy.",
              ],
            },
            {
              cells: [
                <p key="murty-voice" className="font-semibold">
                  Sudha Murty, <em>Horegallu</em>
                </p>,
                <p key="murty-quote" className="italic">
                  &ldquo;I don&rsquo;t think there is a greater sin than betraying
                  someone&rsquo;s confidence.&rdquo;
                </p>,
                "Empathy and unsung social service &mdash; the listener as a support system for others.",
              ],
            },
          ]}
          caption="Lagarde argues from policy, Tynan and Debi from the home, Murty from the everyday workplace."
        />

        <h3
          id="perspectives-synthesis"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Synthesis
        </h3>
        <p>
          The selections present a multi-dimensional picture of female
          empowerment. Lagarde works at the macro level: legal equality, workplace
          fairness and female leadership.
        </p>
        <p>
          <em>Matchbox</em> and <em>Any Woman</em>, by contrast, examine a
          woman&rsquo;s position inside the home.
        </p>
        <p>
          Tynan and Debi are best read as a pair. Tynan&rsquo;s mother is
          indispensable and honoured &mdash; the keystone of the arch.
        </p>
        <p>
          Debi&rsquo;s Nomita is equally indispensable, and yet she is monitored:
          her letters are opened before she reads them. The same centrality, a
          completely different dignity.
        </p>
        <p>
          Nomita&rsquo;s resistance shows where empowerment begins &mdash; with
          claiming personal dignity and self-respect inside the house, before any
          question of a career arises.
        </p>
        <p>
          Sudha Murty then widens the frame beyond the home. Ratna displays
          emotional maturity, empathy and integrity by offering a non-judgemental
          ear to colleagues in distress while strictly protecting their
          confidences, which makes empowerment a form of service rather than
          status.
        </p>
        <p>
          Together the excerpts show that true empowerment is not limited to
          executive titles or economic success. It includes self-respect at home,
          active leadership in society, and the emotional strength to lift other
          people up.
        </p>
      </>
    ),
  },
  {
    id: "film-review-dune",
    title: "Film Review: Dune (2021)",
    content: (
      <>
        <p>
          A film review is a judgement, not a summary. It reports the credits and
          explains what the film attempts.
        </p>
        <p>
          Then it says whether the attempt succeeds, with reasons drawn from the
          craft on screen.
        </p>

        <h3
          id="dune-credits"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Film Details and Credits
        </h3>
        <TableCard
          title="Dune (Part One), 2021"
          headers={["Field", "Detail"]}
          rows={[
            { cells: ["Director", "Denis Villeneuve"] },
            {
              cells: [
                "Screenplay",
                "Jon Spaihts, Denis Villeneuve and Eric Roth, based on Frank Herbert's 1965 novel",
              ],
            },
            { cells: ["Genre", "Epic science fiction / space opera"] },
            {
              cells: [
                "Key cast",
                "Timothée Chalamet (Paul Atreides), Rebecca Ferguson (Lady Jessica), Oscar Isaac (Duke Leto), Stellan Skarsgård (Baron Harkonnen), Zendaya (Chani), Javier Bardem (Stilgar)",
              ],
            },
            { cells: ["Cinematography", "Greig Fraser"] },
            { cells: ["Music", "Hans Zimmer"] },
            { cells: ["Runtime", "155 minutes"] },
          ]}
        />

        <h3
          id="dune-theme"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. Introduction and Central Theme
        </h3>
        <p>
          Denis Villeneuve&rsquo;s <em>Dune</em> is a monumental adaptation of
          Frank Herbert&rsquo;s 1965 science-fiction novel. At its core it is
          about political betrayal, colonial greed and environmental exploitation.
        </p>
        <p>
          It is equally about destiny and the burden of being taken for a messiah.
          The story is set thousands of years in the future, on Arrakis &mdash; a
          harsh desert planet and the universe&rsquo;s only source of{" "}
          <Highlight color="yellow">spice</Highlight>.
        </p>
        <p>
          Spice is the substance that makes interstellar travel possible and
          sharpens human consciousness, which is why every great house wants
          Arrakis.
        </p>

        <h3
          id="dune-plot"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Plot Summary
        </h3>
        <p>
          Paul Atreides is a gifted young nobleman troubled by prophetic dreams of
          a desert girl and of a war to come. When the Emperor orders House
          Atreides to take Arrakis from their rivals House Harkonnen, the transfer
          turns out to be a trap.
        </p>
        <p>
          After a brutal ambush, Paul and his mother Lady Jessica escape into the
          sand-scoured wilderness. There they must win the trust of the native
          Fremen if Paul is to survive and meet the destiny he has been trying to
          refuse.
        </p>

        <h3
          id="dune-direction"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          3. Screenplay and Direction
        </h3>
        <p>
          Villeneuve delivers a masterclass in scale and restraint. Herbert&rsquo;s
          novel was long thought unfilmable because so much of it happens inside
          characters&rsquo; heads, and the screenplay solves this by cutting the
          exposition and trusting the images.
        </p>
        <p>
          The direction is grand and contemplative. The film behaves like a
          solemn space opera rather than a fast action blockbuster, and it earns
          its length by making silence and landscape carry the drama.
        </p>

        <h3
          id="dune-cast"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          4. Cast and Performance
        </h3>
        <p>
          Timothée Chalamet gives a subtle, exceptional performance as Paul,
          moving convincingly from an uncertain heir to a conflicted leader
          carrying the weight of a galaxy.
        </p>
        <p>
          Rebecca Ferguson is the standout as Lady Jessica, balancing maternal
          fierceness against deep political vulnerability. Stellan Skarsgård is
          chilling as the grotesque Baron Harkonnen, while Oscar Isaac brings
          nobility and tragedy to Duke Leto.
        </p>

        <h3
          id="dune-craft"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          5. Cinematography, Sound and Visual Effects
        </h3>
        <p>
          Greig Fraser&rsquo;s camera work is breathtaking. Vast horizons,
          brutalist architecture and stark colour palettes set the cold geometry
          of the noble houses against the terrifying golden expanse of Arrakis.
        </p>
        <p>
          Hans Zimmer&rsquo;s Oscar-winning score sounds like nothing else in
          science-fiction cinema. Instead of orchestral fanfare he uses haunting
          vocal chants, woodwinds and thunderous bass to evoke something ancient
          and alien.
        </p>
        <p>
          The visual effects are seamless and grounded &mdash; the colossal
          sandworms of Shai-Hulud and the dragonfly-like ornithopters feel like
          machines and animals that could exist rather than digital spectacle.
        </p>

        <h3
          id="dune-verdict"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          6. Conclusion and Recommendation
        </h3>
        <p>
          <em>Dune</em> is a monumental achievement in modern science-fiction
          filmmaking &mdash; a rare synthesis of massive visual scale, technical
          perfection and narrative substance.
        </p>
        <p>
          Villeneuve has made an immersive adaptation that honours its source
          while setting a new benchmark for epic world-building.{" "}
          <Highlight color="yellow">★★★★★ (5/5)</Highlight>
        </p>
        <p>
          <strong>Recommendation</strong>: a must-watch for anyone who values
          immersive storytelling, grand cinematography and thought-provoking
          science fiction.
        </p>
      </>
    ),
  },
];

export default function HoregalluPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro author="Sudha Murty" genre="Personal anecdote" characters={["Sudha Murty (narrator)", "Grandfather", "Ratna"]} />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
            <p className="text-lg font-medium italic text-foreground">
              &ldquo;Listening is often the only thing needed to help
              someone.&rdquo;
            </p>
          </blockquote>
          <p>
            <em>Horegallu</em> is a personal anecdote by{" "}
            <Highlight color="yellow">Sudha Murty</Highlight> about a stone bench
            in her village and the two people who taught her what it means. The
            bench is a horegallu &mdash; literally &ldquo;a stone that can bear
            weight&rdquo; &mdash; and the essay turns it into a metaphor for a
            listener.
          </p>
          <p>
            A horegallu sits under a banyan tree, with cool water in earthen pots
            beside it. Weary travellers set down their loads, wash their faces and
            talk; then they pick the load up again with some ease.
          </p>
          <p>
            The two people are her grandfather and Ratna. He listened to
            villagers under the tree; she listened to co-workers at lunch in
            Mumbai.
          </p>
          <p>
            Neither offered solutions, and neither was paid for it.
          </p>
          <p>
            <Highlight color="yellow">
              <strong>Central theme:</strong> the vital necessity of empathy,
              active and unjudgemental listening, and quiet social service in
              relieving human suffering and emotional strain.
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
                  <strong>Author</strong>: Sudha Murty. Genre: Personal essay. Central
                  metaphor:{" "}
                  <Highlight color="yellow">horegallu</Highlight> = stone resting place for
                  weary travellers = human listener.
                </li>
                <li>
                  <strong>Characters</strong>: Grandfather (retired teacher, listener in the
                  village), Ratna (colleague in Mumbai, listener at work).
                </li>
                <li>
                  <strong>Key quote</strong>: &ldquo;God gave me two ears to listen without
                  judgement. When a person finds an outlet, half his burden is
                  relieved.&rdquo; (Ratna)
                </li>
                <li>
                  <strong>Metaphor</strong>: &ldquo;Load-pourers&rdquo; &mdash; everyone
                  carries a burden; they need someone to{" "}
                  <Highlight color="blue">pour it out to</Highlight>.
                </li>
                <li>
                  <strong>Theme</strong>: Listening is not passive. Being a horegallu &mdash;
                  someone who listens with compassion &mdash; creates{" "}
                  <Highlight color="green">healthy minds</Highlight> and lightens burdens.
                </li>
                <li>
                  <strong>Structure</strong>: Village to city, past to present &mdash; the
                  theme is not nostalgia but a living need.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  The essay opens with a village memory: under a banyan tree stood a{" "}
                  <Highlight color="yellow">horegallu</Highlight> &mdash; a large flat
                  stone laid over two vertical ones, where anyone could sit, rest, chat
                  and drink cool water from earthen pots. The banyan tree is a
                  traditional place of refuge, reinforcing the theme of{" "}
                  <Highlight color="green">shelter and rest</Highlight>.
                </li>
                <li>
                  The author&rsquo;s{" "}
                  <Highlight color="blue">grandfather</Highlight>, a retired school
                  teacher whom the villagers called <strong>Masterji</strong>, would
                  spend hours near the horegallu listening to them. They talked about
                  the dry summer, the heavy loads on their heads and sons who wanted to
                  leave for the city. He gave no advice, yet simply talking to him
                  refreshed them, and they picked up their burdens with ease.
                </li>
                <li>
                  Grandfather&rsquo;s lesson: everyone carries burdens according to
                  their situation and capacity, but every once in a while they need to
                  stop, lay the load down and rest before picking it up again.
                </li>
                <li>
                  Later, in Mumbai, the author meets{" "}
                  <strong>Ratna</strong>, a cheerful senior clerk who spent her lunch
                  breaks listening to co-workers&rsquo; troubles. She was not a trained
                  counsellor and knew that no one can solve another person&rsquo;s
                  problem &mdash; but listening, she said, relieves half the burden.
                </li>
                <li>
                  Ratna&rsquo;s principle: &ldquo;God gave me two ears to listen
                  without judgement. When a person finds an outlet, half his burden is
                  relieved.&rdquo; She never betrayed a confidence, calling it the
                  worst kind of betrayal. This is the essay&rsquo;s{" "}
                  <Highlight color="yellow">moral centre</Highlight>.
                </li>
                <li>
                  Both grandfather and Ratna were{" "}
                  <Highlight color="blue">human horegallus</Highlight> &mdash; listeners
                  who helped others carry on. The essay moves from village to city, past
                  to present, showing the theme is not nostalgia but a{" "}
                  <Highlight color="pink">living need</Highlight>.
                </li>
                <li>
                  The essay&rsquo;s central metaphor is carrying{" "}
                  <Highlight color="green">burdens</Highlight>: everyone carries one, but
                  they need someone to listen. The act of talking itself is healing.
                </li>
                <li>
                  Neither of them had wealth, a degree or public recognition, yet both
                  were doing <strong>tremendous social service</strong>. They did it
                  because kindness gave them joy, and the author ends by wishing there
                  were many more horegallus in the world.
                </li>
                <li>
                  Sudha Murty&rsquo;s tone is personal, warm, and anecdotal. The
                  authority comes not from expertise but from{" "}
                  <Highlight color="yellow">lived experience</Highlight> &mdash;
                  grandfather and Ratna are real people she knew, not fictional examples.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Central metaphor</strong>: The horegallu (literally &ldquo;a
                  stone that can bear weight&rdquo;) becomes the essay&rsquo;s
                  controlling image for{" "}
                  <Highlight color="yellow">empathetic listening</Highlight>. Physically
                  it is a large flat stone laid over two vertical ones, under a banyan
                  tree, with earthen pots of water beside it. It does nothing &mdash;
                  it simply bears weight. The metaphor says: sometimes the most useful
                  thing you can do is be present and let someone lean on you.
                </li>
                <li>
                  <strong>Grandfather as character</strong>: He is the essay&rsquo;s
                  emotional centre &mdash; a retired school teacher the villagers call{" "}
                  <strong>Masterji</strong>, who does not give advice. They talk about
                  the dry summer, their heavy loads and sons who want the city, and they
                  leave feeling re-energised. The simplicity of his role is the point:{" "}
                  <Highlight color="blue">listening itself is the gift</Highlight>. He
                  does not solve their problems; he gives them the space to solve their
                  own.
                </li>
                <li>
                  <strong>Banyan tree</strong>: Not just scenery &mdash; a banyan tree is a
                  traditional place of refuge and community gathering in Indian villages.
                  It provides shade, shelter, and a sense of continuity (banyan trees live
                  for centuries). The tree reinforces the theme of{" "}
                  <Highlight color="green">shelter and rest</Highlight> &mdash; both physical
                  and emotional.
                </li>
                <li>
                  <strong>Ratna&rsquo;s quote</strong>: &ldquo;God has given me two ears to
                  listen without judgement. When a person finds an outlet, half his burden
                  is relieved.&rdquo; This is the essay&rsquo;s{" "}
                  <Highlight color="yellow">moral centre</Highlight>. The key phrase is
                  &ldquo;without judgement&rdquo; &mdash; Ratna does not evaluate, advise,
                  or criticise. She is not a trained counsellor and says plainly that no
                  one can solve another person&rsquo;s problem; she simply hears, and
                  keeps what she hears secret. The quote also introduces the idea that
                  listening is active, not passive: it requires effort, patience, and
                  empathy.
                </li>
                <li>
                  <strong>Confidentiality</strong>: the trust is the whole mechanism.
                  Ratna says she would not betray a confidence &ldquo;even in my
                  dreams&rdquo;, and calls it the worst kind of betrayal. People speak
                  freely only because they know their words are secure with her.
                </li>
                <li>
                  <strong>Structure</strong>: Village → city, past → present. The essay
                  moves from childhood memory (grandfather in the village) to adult life
                  (Ratna in Mumbai), showing the theme is not nostalgia but a{" "}
                  <Highlight color="pink">living need</Highlight>. The structure argues that
                  the need for horegallus is universal &mdash; it exists in every
                  community, every workplace, every era.
                </li>
                <li>
                  <strong>Carrying burdens</strong>: The essay&rsquo;s central metaphor is
                  carrying burdens &mdash; everyone has one (grief, stress, loneliness,
                  fear), but they need someone to listen. The act of talking itself is
                  healing. The horegallu is the place where that rest happens.
                </li>
                <li>
                  <strong>Sudha Murty&rsquo;s tone</strong>: Personal, warm, and anecdotal.
                  The authority comes not from expertise but from{" "}
                  <Highlight color="yellow">lived experience</Highlight> &mdash;
                  grandfather and Ratna are real people she knew, not fictional examples.
                  The essay does not argue or persuade; it simply tells stories and lets
                  the reader draw conclusions. This restraint makes the message more
                  powerful.
                </li>
                <li>
                  <strong>Overall theme</strong>: Listening is not passive. Being a
                  horegallu &mdash; someone who listens with compassion &mdash; creates{" "}
                  <Highlight color="green">healthy minds</Highlight> and lightens burdens.
                  The essay is a call to be someone&rsquo;s resting place. In a world that
                  values advice and solutions, Murty argues that the greatest gift is
                  simply being present &mdash; bearing weight without judgment, giving space
                  without agenda.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="symbolism-themes">
            <Callout type="important">
              <p>
                The <em>horegallu</em> is not just a physical stone bench. It is a{" "}
                <strong>metaphor</strong> for{" "}
                <Highlight color="yellow">empathy</Highlight>,{" "}
                <Highlight color="pink">support</Highlight>, and the{" "}
                <strong>power of listening</strong> in human relationships.
              </p>
            </Callout>

            <h3
              id="what-a-horegallu-is"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              What a Horegallu Is
            </h3>
            <p>
              The word <Highlight color="yellow">horegallu</Highlight> literally
              means &ldquo;a stone that can bear weight&rdquo;. Physically it is a
              large flat stone laid horizontally over two vertical ones, making a
              sturdy stone bench.
            </p>
            <p>
              It stands beneath a massive banyan tree whose branches give shade
              and comfort. Travellers walking long distances with heavy loads on
              their heads sit, rest, exchange news of the road and drink cool
              water from the earthen pots kept nearby.
            </p>
            <p>
              Similar simple arrangements can be found in villages all over the
              country. The bench costs nothing, does nothing and asks for nothing
              &mdash; it simply bears weight.
            </p>

            <h3
              id="the-burden"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              The Symbolism of &lsquo;Burden&rsquo;
            </h3>
            <p>
              The word &lsquo;<Highlight color="pink">burden</Highlight>&rsquo; is used
              both literally and symbolically. The villagers literally carry{" "}
              <strong>heavy loads</strong> on their heads, but the word also represents
              the <strong>emotional and psychological worries</strong> that people carry
              through life.
            </p>
            <p>
              The horegallu offers a place to set down both kinds of burden, which
              is why the image carries the whole essay.
            </p>

            <h3
              id="power-of-listening"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              The Power of Listening
            </h3>
            <p>
              Both <Highlight color="green">grandfather</Highlight> and{" "}
              <Highlight color="blue">Ratna</Highlight> are{" "}
              <strong>good listeners</strong>. Neither tries to solve problems or offer
              advice &mdash; they simply listen with{" "}
              <strong>sympathy</strong> and{" "}
              <strong>without judgement</strong>.
            </p>
            <p>
              The story shows that{" "}
              <Highlight color="yellow">listening itself</Highlight> is a powerful form
              of social service. It provides{" "}
              <Highlight color="pink">psychological relief</Highlight> and creates{" "}
              <strong>healthy minds</strong>.
            </p>

            <h3
              id="human-horegallus"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Human Horegallus
            </h3>
            <p>
              The story draws a parallel between{" "}
              <Highlight color="green">grandfather</Highlight> and{" "}
              <Highlight color="blue">Ratna</Highlight>. Both acted as &lsquo;
              <Highlight color="yellow">human horegallus</Highlight>&rsquo; &mdash;
              offering <strong>empathy</strong> and{" "}
              <strong>patience</strong> without expecting any reward.
            </p>
            <p>
              The author concludes that the world needs many more such{" "}
              <strong>people who listen with compassion</strong>.
            </p>

            <h3
              id="quiet-social-service"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Unacknowledged Social Service
            </h3>
            <p>
              Neither the grandfather nor Ratna had great wealth, a counselling
              degree or public recognition. Yet, in their own small ways, both were
              doing <Highlight color="pink">tremendous social service</Highlight>.
            </p>
            <p>
              No one thought of acknowledging or rewarding their work, and they
              never asked for it. They continued because these acts of kindness
              gave them joy &mdash; which is exactly what makes the service
              remarkable.
            </p>
            <p>
              Sudha Murty ends by remembering them whenever she passes a
              horegallu, and wishing there were many more of them in the world.
              The wish covers both the stone bench and the human listener.
            </p>

            <Expandable title="Infectious Cheerfulness">
              <p>
                The expression &lsquo;<Highlight color="pink">infectious
                cheerfulness</Highlight>&rsquo; describes{" "}
                <Highlight color="blue">Ratna&rsquo;s</Highlight>{" "}
                <strong>positive attitude</strong> that naturally affected everyone
                around her. Even though her work was repetitive and mundane, she
                approached it with joy &mdash; and that joy spread to the people who came to
                her for support.
              </p>
            </Expandable>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              The <Highlight color="yellow">horegallu</Highlight> is a{" "}
              <strong>metaphor for empathy and support</strong> in human
              relationships. Everyone carries burdens, and sometimes they just need{" "}
              <strong>someone to listen</strong>. Good listeners &mdash; like the
              author&rsquo;s grandfather and Ratna &mdash; act as{" "}
              <Highlight color="green">human horegallus</Highlight>, providing the{" "}
              <Highlight color="pink">psychological relief</Highlight> and{" "}
              <strong>emotional support</strong> that people need to regain their
              strength and carry on with their journey.
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