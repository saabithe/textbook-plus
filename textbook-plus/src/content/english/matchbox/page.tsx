"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { SummaryLevels } from "@/components/content/SummaryLevels";

import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { TableCard } from "@/components/content/data/TableCard";

const READ_RESPOND = [
  {
    question: "Why are women compared to matchboxes?",
    answer: (
      <>
        Because a matchbox holds enough{" "}
        <Highlight color="yellow">gunpowder to set a hundred Lankas aflame</Highlight>,
        yet sits meek and innocent in kitchens, pantries and bedrooms. Women carry
        the same latent strength and passion, but they rarely flare up &mdash;
        they do not burn their own colourful shells or the mask of men&rsquo;s
        &ldquo;high-mindedness&rdquo;.
      </>
    ),
  },
  {
    question: "What makes Nomita furious?",
    answer: (
      <>
        She finds a{" "}
        <Highlight color="pink">crumpled, twisted envelope</Highlight> addressed
        to her in the pocket of Ajit&rsquo;s dirty laundry. The postmark shows it
        arrived three days earlier: he opened it, read it and{" "}
        <strong>deliberately withheld it</strong>, and the discovery makes her
        burn with indignation.
      </>
    ),
  },
  {
    question: "What is the suspicion in Nomita's mind?",
    answer: (
      <>
        That Ajit secretly{" "}
        <Highlight color="blue">fishes the letter-box key</Highlight> out from
        among the members of the joint family so that he can open and read her
        mail first. She also suspects that he often keeps her letters from her
        altogether.
      </>
    ),
  },
  {
    question: 'What is called an "ugly habit"? Why?',
    answer: (
      <>
        Ajit&rsquo;s habit of{" "}
        <Highlight color="pink">intercepting, opening and reading</Highlight>{" "}
        letters addressed to Nomita before he hands them over. It is ugly because
        it violates her basic privacy and dignity, and shows persistent mistrust
        despite her repeated protests, anger and reproaches.
      </>
    ),
  },
  {
    question:
      'How does Ajit react when Nomita mentions about his "ugly habit"?',
    answer: (
      <>
        First he tries to <Highlight color="yellow">laugh it away</Highlight>. If
        laughter fails, he turns defensive and <strong>scolds her</strong> instead
        &mdash; he does not fear her anger, only a public row.
      </>
    ),
  },
  {
    question: "What are the expectations of Nomita's mother?",
    answer: (
      <>
        Her mother is an{" "}
        <Highlight color="green">impoverished widow</Highlight> in a house with a
        cracked, leaking roof. She expects her daughter and her
        &ldquo;large-hearted&rdquo; son-in-law to send money regularly, so that
        she is not crushed under a collapsing ceiling.
      </>
    ),
  },
  {
    question:
      "Comment on Ajit's attitude towards his mother-in-law.",
    answer: (
      <>
        Ajit is{" "}
        <Highlight color="pink">derisive, contemptuous and patronising</Highlight>
        . He mocks her desperate pleas by offering, with a sneer, to fill out a
        money-order form, and later calls her a whining beggar who holds out her
        palm to her son-in-law.
      </>
    ),
  },
  {
    question:
      'What makes Nomita call Ajit a "liar"? Is her action justifiable?',
    answer: (
      <>
        Ajit claims he simply &ldquo;forgot&rdquo; to give her the letter, though
        he had <Highlight color="yellow">deliberately withheld it</Highlight>. Her
        accusation is justifiable: he intercepted her private mail and then lied
        to cover it up.
      </>
    ),
  },
  {
    question: 'Comment on the simile "Nomita hisses like a snake."',
    answer: (
      <>
        It compares her intense, suppressed rage to a{" "}
        <Highlight color="pink">snake about to strike</Highlight>. The image gives
        her anger a sharp, poisonous edge as she confronts Ajit over his deceit
        and his contempt for her privacy.
      </>
    ),
  },
  {
    question:
      "How do you think Ajit would react if Nomita reads the letters addressed to him?",
    answer: (
      <>
        With <Highlight color="yellow">intense fury</Highlight>, loud anger and
        wounded indignation. As a dominating husband he believes he has the right
        to inspect her letters, while his own privacy must remain unchallenged.
      </>
    ),
  },
  {
    question: 'What is the "poisoned knife"?',
    answer: (
      <>
        Ajit&rsquo;s cruel, insulting words about Nomita&rsquo;s{" "}
        <Highlight color="pink">impoverished background</Highlight>. He mocks her
        mother as a beggar and sneers that a &ldquo;dung-picker&rsquo;s
        daughter&rdquo; has become a queen &mdash; a class insult that wounds
        silently and permanently.
      </>
    ),
  },
  {
    question: "How does Nomita frighten Ajit?",
    answer: (
      <>
        She grabs his matchbox, strikes a matchstick and sets the{" "}
        <Highlight color="yellow">fine anchol of her expensive sari</Highlight>{" "}
        ablaze. Her blazing red face and the destructive act startle him into
        jumping up in fear to smother the flame.
      </>
    ),
  },
  {
    question: "What is the plight of Nomita in the family?",
    answer: (
      <>
        She is humiliated again and again by her poor background and her
        mother&rsquo;s financial demands. Her husband denies her privacy and
        dignity, her sisters-in-law{" "}
        <Highlight color="blue">pinch her with sarcastic remarks</Highlight>, and
        she must suppress her anger and pretend that everything is harmonious.
      </>
    ),
  },
  {
    question:
      "Comment on the expression 'forest of people'. What does it tell us about the structure of Indian joint families?",
    answer: (
      <>
        It describes the{" "}
        <Highlight color="green">crowded, chaotic environment</Highlight> of a
        large Indian joint family. It reveals a rigid structure in which
        individuals &mdash; especially women &mdash; are constantly surrounded and
        monitored by relatives, with almost no room for personal space, privacy or
        open expression.
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
          Three people carry the story: the wife who endures, the husband who
          controls, and the mother whose letters set everything in motion.
        </p>

        <CharacterSketch name="Nomita">
          <p>
            <strong>Role</strong>: the story&rsquo;s central figure, a housewife
            in a big joint family, married to Ajit. Her position is{" "}
            <Highlight color="blue">&ldquo;Naw-wife&rdquo;</Highlight>, the wife
            of the fourth-oldest brother.
          </p>
          <p>
            <strong>Background</strong>: she is an{" "}
            <Highlight color="green">indigent widow&rsquo;s daughter</Highlight>,
            married into an enormous, wealthy Bengali three-storey household on
            the strength of her looks alone.
          </p>
          <p>
            <strong>Appearance</strong>: a young married woman in fine saris, she
            looks like a rich housewife and seems calm from the outside. Inside,
            she hides a deep fire.
          </p>
          <p>
            <strong>Personality</strong>: kind, respectful and full of
            self-respect. She does not shout or fight easily, but when she is hurt
            she can become bold and angry.
          </p>
          <p>
            <strong>Self-respect</strong>: she fiercely resists Ajit&rsquo;s{" "}
            <Highlight color="pink">&ldquo;ugly habit&rdquo;</Highlight> of
            opening and withholding her mail. Her mother&rsquo;s begging humiliates
            her, and she has already asked her mother to stop sending postcards
            that the whole household can read.
          </p>
          <p>
            <strong>The matchbox in her</strong>: when Ajit uses the{" "}
            <Highlight color="yellow">poisoned knife</Highlight> &mdash; mocking
            her mother as a beggar and sneering that a &ldquo;dung-picker&rsquo;s
            daughter becomes a queen&rdquo; &mdash; her suppressed rage reaches
            its peak. She grabs his matchbox, strikes a matchstick and sets the
            fine anchol of her expensive sari on fire.
          </p>
          <p>
            <strong>Social masking</strong>: the &ldquo;forest of people&rdquo;
            closes over her at once. When her niece enters she speaks in a calm
            tone, hides the burnt sari behind a joke about a hot-water pot, and
            sits down to peel potatoes while secretly worrying about her mother.
          </p>
          <p>
            <strong>What she stands for</strong>: Nomita represents the many women
            who stay quiet although they are strong inside. Like a matchbox she is
            small and calm outside and full of fire within, and her story exposes
            the unfair way such women are treated at home.
          </p>
        </CharacterSketch>

        <CharacterSketch name="Ajit">
          <p>
            <strong>Position</strong>: Nomita&rsquo;s husband, a man who takes his
            privileged place in a wealthy joint family for granted. He shows a
            complete disregard for his wife&rsquo;s individuality, dignity and
            right to privacy.
          </p>
          <p>
            <strong>The intrusive habit</strong>: he fishes the letter-box key out
            from among the family members so that he can inspect Nomita&rsquo;s
            mail first. He frequently withholds her mother&rsquo;s letters, or
            threatens to tear them up, to avoid giving extra cash.
          </p>
          <p>
            <strong>Derision</strong>: whenever a letter arrives from his
            mother-in-law he smiles derisively and offers to &ldquo;fill out a
            money-order form&rdquo;. When confronted about his deceit he stoops to
            insults about Nomita&rsquo;s poverty.
          </p>
          <p>
            <strong>How he handles a challenge</strong>: he first laughs the
            matter away, then scolds her. He does not fear her anger &mdash; he
            dreads a public row or a household scandal.
          </p>
          <p>
            <strong>Cowardice</strong>: when Nomita sets her sari alight he is
            startled and frightened by her blazing face. He smothers the flame
            hastily and tries to talk normally, so that nothing is exposed.
          </p>
          <p>
            <strong>The mask</strong>: his &ldquo;high-mindedness&rdquo; is a{" "}
            <Highlight color="blue">performance</Highlight> that depends on Nomita
            staying silent. Once she burns her anchol, the mask slips and the
            narrator lets us see the fear underneath.
          </p>
        </CharacterSketch>

        <CharacterSketch name="Nomita's Mother">
          <p>
            <strong>Condition</strong>: an{" "}
            <Highlight color="green">indigent widow</Highlight> with neither
            husband nor son, living in a dilapidated house whose cracked ceiling
            leaks rain in ceaseless streams.
          </p>
          <p>
            <strong>Pride</strong>: she takes constant credit for marrying her
            daughter into a wealthy family &ldquo;on the strength of looks
            alone&rdquo;. It is the one achievement she can claim.
          </p>
          <p>
            <strong>The begging letters</strong>: driven by poverty and the fear
            of being crushed under a collapsing roof, she writes letter after
            letter about her miseries. She praises her son-in-law as
            &ldquo;high-minded&rdquo; and &ldquo;large-hearted&rdquo; because she
            knows the flattery is the price of help.
          </p>
          <p>
            <strong>Effect on Nomita</strong>: the endless begging shames her
            daughter in her in-laws&rsquo; house. Nomita has forbidden the
            postcards, and still the letters come &mdash; which is why she both
            loves and resents her mother.
          </p>
        </CharacterSketch>
      </>
    ),
  },
  {
    id: "space-of-women",
    title: "Write-Up: The Space of Women in a Family",
    content: (
      <>
        <p>
          The space a woman occupies in a family is both{" "}
          <Highlight color="yellow">foundational and complicated</Highlight>.
          Tradition places her at the centre of the home, while everyday life
          quietly limits her.
        </p>

        <h3
          id="space-anchor"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. The Focal Point and Anchor of the Home
        </h3>
        <p>
          In literature and in social tradition a woman is the indispensable
          pillar of the domestic structure. Katharine Tynan&rsquo;s{" "}
          <em>Any Woman</em> calls her the &ldquo;pillars of the house&rdquo; and
          the &ldquo;keystone of the arch&rdquo;, warm as the &ldquo;fire upon the
          hearth&rdquo; and binding her children in a &ldquo;sacred ring&rdquo; of
          love.
        </p>
        <p>
          From preparing meals to shielding the family as &ldquo;their wall
          against all danger&rdquo;, her presence keeps the household functional,
          warm and secure. The ideal is real, but it is only half the picture.
        </p>

        <h3
          id="space-restricted"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Restricted Space and Suppressed Outrage
        </h3>
        <p>
          Inside many traditional joint families the reality is confinement and
          unacknowledged sacrifice. Ashapurna Debi&rsquo;s <em>Matchbox</em>{" "}
          compares women to matchboxes: full of gunpowder, yet sitting meek and
          innocent in kitchens, pantries and bedrooms.
        </p>
        <p>
          In a crowded &ldquo;forest of people&rdquo; a woman&rsquo;s privacy,
          self-respect and dignity are violated as a matter of course. To keep the
          outer shell of domestic peace she suppresses legitimate outrage, and
          does not burn away the mask of men&rsquo;s &ldquo;high-mindedness&rdquo;
          or her own colourful domestic shell.
        </p>

        <h3
          id="space-empowerment"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          3. Redefining Women&rsquo;s Space Through Empowerment
        </h3>
        <p>
          An equitable space at home requires domestic sacrifice to be replaced by
          mutual respect and independent agency. Christine Lagarde&rsquo;s{" "}
          <em>The 3Ls of Empowerment</em> supplies the frame:{" "}
          <Highlight color="green">Learning, Labour and Leadership</Highlight>.
        </p>
        <p>
          Education breaks the shackles of social exclusion, while fair economic
          participation &mdash; equal pay for equal work, and equal access to
          property and credit &mdash; grants financial independence. An empowered
          woman gains the confidence to step outside traditional comfort zones and
          demand equal status at home.
        </p>
        <p>
          In practice this means three small shifts: her opinions and dreams are
          heard rather than tolerated, her roles are chosen rather than fixed, and
          the load of the house is shared instead of assigned.
        </p>

        <h3
          id="space-conclusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Conclusion
        </h3>
        <p>
          A family cannot flourish while its primary caretaker is confined to
          passive submission or unrewarded toil. The space of women must move from
          silent endurance to partnership &mdash; equal dignity, shared
          responsibilities and mutual respect.
        </p>
        <p>
          A woman should be cherished not only as a self-sacrificing caregiver but
          as a free human being with an independent will. Today she is not merely
          a helper in the house; she is a leader, a thinker and a creator, and
          that space is her right rather than a gift.
        </p>
      </>
    ),
  },
  {
    id: "panel-discussion",
    title: "Activity II: Panel Discussion",
    content: (
      <>
        <p>
          A panel discussion is a systematic, objective discussion held by a
          group of experts in front of an audience. Its purpose is to clarify the
          different dimensions of a complex issue rather than to win an argument.
        </p>

        <h3
          id="panel-participants"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Three Participants
        </h3>
        <ul className="list-disc space-y-1.5 ps-5">
          <li>
            <strong>Moderator</strong> &mdash; leads the session, introduces the
            panellists, manages time, keeps the discussion on track and
            synthesises the key points at the end.
          </li>
          <li>
            <strong>Panellists</strong> &mdash; the experts who share specialised
            insight on particular sub-topics.
          </li>
          <li>
            <strong>Audience</strong> &mdash; listens, and asks questions during
            the Q&amp;A segment.
          </li>
        </ul>

        <h3
          id="panel-topic"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Topic and Panellists
        </h3>
        <p>
          <strong>Topic</strong>: &ldquo;Indian women &mdash; finding a space in
          the socio-cultural milieu&rdquo;.
        </p>
        <TableCard
          title="Panel"
          headers={["Panellist", "Designation / Area of expertise"]}
          rows={[
            {
              cells: [
                "Dr. Sunitha Nair",
                "Eminent sociologist and gender-rights activist",
              ],
            },
            {
              cells: [
                "Adv. Meera Sen",
                "High Court advocate and women's legal-rights expert",
              ],
            },
            {
              cells: [
                "Ms. Ananya Das",
                "Media analyst and senior journalist",
              ],
            },
            {
              cells: [
                "Prof. Ramesh Kumar",
                "Social historian and educational consultant",
              ],
            },
          ]}
        />

        <h3
          id="panel-welcome"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Script 1: The Moderator&rsquo;s Welcome
        </h3>
        <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
          <p>
            &ldquo;Good morning, respected Principal, teachers, guests and dear
            students. I am extremely happy to welcome you all to today&rsquo;s
            panel discussion on a crucial and timely theme: &lsquo;Indian women
            &mdash; finding a space in the socio-cultural milieu&rsquo;.
          </p>
          <p>
            In works of literature like Ashapurna Debi&rsquo;s <em>Matchbox</em>{" "}
            we often see women struggling to find personal dignity and autonomy
            within domestic walls. Today we bring together a group of
            distinguished experts to examine how Indian women can overcome
            socio-cultural barriers and claim their rightful space in modern
            society.
          </p>
          <p>
            Allow me to introduce our esteemed panellists for today&rsquo;s
            discussion.
          </p>
          <ul className="list-disc space-y-1.5 ps-5">
            <li>
              Dr. Sunitha Nair, an eminent sociologist, who will discuss the
              necessity of cultivating mental strength and resilience among
              women.
            </li>
            <li>
              Adv. Meera Sen, a senior High Court advocate, who will shed light on
              legal rights, property reforms and workplace equality.
            </li>
            <li>
              Ms. Ananya Das, a prominent media analyst, who will evaluate the
              impact of media portrayals on a woman&rsquo;s self-image.
            </li>
            <li>
              Prof. Ramesh Kumar, a social historian, who will trace the evolving
              role of Indian women from historical times to the present day.
            </li>
          </ul>
          <p>
            Without further ado, I invite our panellists to share their valuable
            perspectives. Let us begin our discussion.&rdquo;
          </p>
        </blockquote>

        <h3
          id="panel-conclusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Script 2: The Moderator&rsquo;s Conclusion
        </h3>
        <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
          <p>
            &ldquo;Thank you to all our distinguished panellists. On the whole,
            today&rsquo;s discussion has turned out to be an immensely fruitful
            and enlightening venture.
          </p>
          <p>
            Let us quickly synthesise the key takeaways highlighted by our
            experts.
          </p>
          <ul className="list-disc space-y-1.5 ps-5">
            <li>
              <strong>Media impact</strong> &mdash; Ms. Ananya Das pointed out
              that the media must move away from stereotyping women as passive
              homemakers and showcase positive role models of leadership.
            </li>
            <li>
              <strong>Legal and economic independence</strong> &mdash; Adv. Meera
              Sen emphasised that equal property rights, fair inheritance laws and
              equal pay for equal work are non-negotiable foundations for
              women&rsquo;s autonomy.
            </li>
            <li>
              <strong>Mental toughness and health</strong> &mdash; Dr. Sunitha
              Nair reminded us that &lsquo;a healthy woman builds a healthy
              nation&rsquo;, stressing the vital need for mental toughness and
              self-belief.
            </li>
            <li>
              <strong>Historical evolution</strong> &mdash; Prof. Ramesh Kumar
              showed how Indian women have continuously redefined their roles,
              proving that empowering women uplifts all marginalised sections of
              society.
            </li>
          </ul>
          <p>
            In conclusion, finding a space for women in our socio-cultural milieu
            requires a collective effort, in which men and women walk forward
            together in mutual respect and dignity.
          </p>
          <p>
            On behalf of the organisers, I extend my sincere vote of thanks to our
            panellists for sharing their valuable insights, and to the audience
            for their active participation. Thank you, and have a wonderful
            day!&rdquo;
          </p>
        </blockquote>
      </>
    ),
  },
  {
    id: "aptness-of-title",
    title: "Aptness of the Title",
    content: (
      <>
        <p>
          <strong>Task</strong>: show how far the title of the story is apt.
          Ashapurna Debi builds the whole story around one comparison &mdash;
          between a matchbox and the condition of women in a traditional
          household.
        </p>

        <h3
          id="title-metaphor"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. Inner Gunpowder, Outer Meekness
        </h3>
        <p>
          On the outside a matchbox looks small, humble and harmless, sitting in a
          kitchen, a pantry or a bedroom. Inside it holds enough gunpowder to
          &ldquo;set a hundred Lankas aflame&rdquo;.
        </p>
        <p>
          Women sit in the same domestic spaces, enduring insults and
          restrictions, although they possess immense courage and a capacity for
          explosive outrage. The title names that hidden charge in a single
          object.
        </p>

        <h3
          id="title-complacency"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Male Complacency and Carelessness
        </h3>
        <p>
          Men know a matchbox will not ignite on its own, so they leave it
          scattered about or slip it carelessly into a pocket. Ajit behaves
          exactly like this: he opens Nomita&rsquo;s mail, drops her letters into
          his dirty pockets and assumes she will quietly accept his dominance.
        </p>

        <h3
          id="title-literal"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          3. The Matchstick, Literal and Symbolic
        </h3>
        <p>
          When Ajit insults her mother as a beggar, Nomita&rsquo;s indignation
          reaches boiling point. She literally takes his matchbox from the table,
          strikes a matchstick and sets the anchol of her sari on fire.
        </p>
        <p>
          At that instant the metaphor becomes an event. The story shows how close
          a woman&rsquo;s suppressed anger always is to catching fire.
        </p>

        <h3
          id="title-shell"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          4. The Colourful Shell and the Mask
        </h3>
        <p>
          Nomita puts the flame out at once and covers the incident before her
          in-laws, lying that she burnt her sari on a hot pot. She does not burn
          away her own &ldquo;colourful shell&rdquo; or destroy the mask of
          men&rsquo;s &ldquo;high-mindedness&rdquo;.
        </p>
        <p>
          That restraint is exactly what men count on. The title therefore carries
          both the threat and the tragedy: the fire is real, and it is almost
          never allowed to spread.
        </p>

        <h3
          id="title-conclusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Conclusion
        </h3>
        <p>
          The title is perfect because a matchbox holds unexploded anger, a hidden
          capacity for rebellion and a tragic habit of self-restraint. One
          ordinary object carries the story&rsquo;s symbol, its plot and its
          judgement on patriarchal control.
        </p>
      </>
    ),
  },
];

export default function MatchboxPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro author="Ashapurna Debi" genre="Short story" characters={["Nomita", "Ajit", "Nomita's mother"]} />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Matchbox</em> is a short story by{" "}
            <Highlight color="yellow">Ashapurna Debi</Highlight>, a Bengali
            writer. Its title names an ordinary object, and that object carries
            the whole argument of the story.
          </p>
          <p>
            A matchbox holds enough gunpowder to set a hundred Lankas aflame,
            yet it sits meek and innocent in a pocket. The story asks what
            happens when a woman who has lived like that finally strikes a
            match.
          </p>
          <p>
            It follows one Sunday in a three-storey joint family house, where
            Nomita discovers that her husband opens her letters before she reads
            them. Her answer is small, domestic and frightening &mdash; she
            picks up his matchbox.
          </p>
          <p>
            <Highlight color="yellow">
              <strong>Central theme:</strong> privacy is power &mdash; whoever
              controls a woman&rsquo;s letters controls her world, and the
              quietest rebellion can still burn.
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
                  <strong>Author</strong>: Ashapurna Debi. Characters:{" "}
                  <Highlight color="yellow">Nomita</Highlight> (young wife),{" "}
                  <Highlight color="blue">Ajit</Highlight> (husband), mother (indigent
                  widow).
                </li>
                <li>
                  <strong>Plot</strong>: Ajit intercepts his mother-in-law&rsquo;s letter,
                  mocks her poverty, and insults her. Nomita grabs his matchbox and{" "}
                  <Highlight color="green">lights her sari on fire</Highlight> in protest.
                </li>
                <li>
                  <strong>Symbol</strong>: The matchbox &mdash; Ajit&rsquo;s own possession
                  turned against him. Women have the gunpowder but{" "}
                  <Highlight color="pink">never flare up</Highlight>.
                </li>
                <li>
                  <strong>Key quotes</strong>: &ldquo;Dung-picker&rsquo;s daughter&rdquo;
                  (Ajit&rsquo;s insult) and &ldquo;Women have the gunpowder but never flare
                  up&rdquo; (narrator).
                </li>
                <li>
                  <strong>Theme</strong>:{" "}
                  <Highlight color="yellow">Quiet oppression</Highlight> works through small
                  cruelties, control of information, and social shame &mdash; women absorb
                  it rather than destroy the system.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Discovery</strong>: a Sunday morning in an enormous{" "}
                  <Highlight color="blue">three-storey joint family house</Highlight>.
                  Nomita is sorting Ajit&rsquo;s dirty clothes for the washerman when
                  she finds a crumpled, twisted envelope addressed to her. The postmark
                  is three days old &mdash; he opened it, read it, and dropped it back
                  into his pocket. It is an ordinary letter from her mother, with
                  nothing suspicious in it, which makes the interception worse.
                </li>
                <li>
                  <strong>The &ldquo;ugly habit&rdquo;</strong>: Ajit keeps the
                  letter-box key and reads her mail first. When confronted in the past,
                  he laughed it off, scolded her, or hinted that he was checking for
                  secret love letters. This time the letter is from her impoverished
                  mother, asking for money to mend a{" "}
                  <Highlight color="yellow">leaking roof</Highlight>.
                </li>
                <li>
                  <strong>The mockery</strong>: Ajit&rsquo;s answer is a derisive smile
                  and an offer to &ldquo;fill out a money-order form&rdquo;. The joke is
                  aimed at a woman who has no money of her own, and Nomita is humiliated
                  by it.
                </li>
                <li>
                  <strong>The shame</strong>: the whole household reads her
                  mother&rsquo;s begging letters, so Nomita has already asked her to stop
                  sending postcards. Now even sealed envelopes are opened, and in her
                  anger she wants to write back and tell her mother to expect nothing
                  more.
                </li>
                <li>
                  <strong>Confrontation</strong>: Ajit comes in from his bath and Nomita
                  confronts him indignantly. He calls it a lapse of memory; she calls him
                  a <strong>liar</strong> and a{" "}
                  <strong>common, vulgar man</strong>. He answers with the{" "}
                  <Highlight color="pink">poisoned knife</Highlight>: &ldquo;A
                  dung-picker&rsquo;s daughter becomes a queen.&rdquo;
                </li>
                <li>
                  <strong>The fire</strong>: Nomita picks up his matchbox from the table,
                  strikes a match, and touches it to the fine anchol of her expensive
                  sari. Ajit jumps up, smothers the flame with his hands, and looks at her
                  blazing red face in fear.
                </li>
                <li>
                  <strong>The mask of calm</strong>: her niece comes in to ask about the
                  washerman. Nomita&rsquo;s voice is steady, and she goes downstairs,
                  where a sister-in-law teases her about spending time with her husband
                  and asks about the burnt anchol. She says she caught it on a hot pot
                  lifted off the stove.
                </li>
                <li>
                  <strong>Aftermath</strong>: she sits down to peel potatoes, outwardly
                  calm and secretly working out how to send her mother money.{" "}
                  <Highlight color="green">Nothing has changed outside</Highlight>, but
                  inside she has decided.
                </li>
                <li>
                  <strong>Narrator&rsquo;s closing</strong>: Women have the gunpowder but
                  never flare up and burn away the mask of men&rsquo;s high-mindedness. Men
                  know this &mdash; that&rsquo;s why they leave matchboxes scattered
                  carelessly in pockets.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Setting as power</strong>: The joint family house with its
                  &ldquo;fifty-two hands&rdquo; is a{" "}
                  <Highlight color="yellow">microcosm of patriarchal control</Highlight>.
                  Every space is shared, every action observed. Ajit holds the letter-box
                  key &mdash; a small, ordinary object that gives him power over what Nomita
                  reads and hears from her own family. The setting is not just backdrop; it
                  is the mechanism of oppression.
                </li>
                <li>
                  <strong>Privacy violation</strong>: Ajit&rsquo;s interception of the
                  letter is the story&rsquo;s central injustice. Reading a wife&rsquo;s
                  mail before she does denies her{" "}
                  <Highlight color="pink">individuality, dignity and autonomy</Highlight>{" "}
                  &mdash; the ordinary rights a patriarchal marriage quietly withholds.
                  Nomita is not allowed a private word with her own mother.
                </li>
                <li>
                  <strong>Mother&rsquo;s letter</strong>: The mother is an indigent widow who
                  traded her daughter&rsquo;s looks for security. Her complaints &mdash;
                  cracked ceiling, rain falling through &mdash; are{" "}
                  <Highlight color="blue">real, not abstract</Highlight>. Poverty is
                  physical: water dripping on the floor, a roof that cannot keep out the
                  monsoon. The letter is a cry for help that Ajit intercepts and dismisses:
                  her mother is asking for money to repair the leaking roof.
                </li>
                <li>
                  <strong>Nomita&rsquo;s shame</strong>: her mother&rsquo;s begging
                  embarrasses her in front of the whole household, and she has already
                  asked her mother to stop sending postcards that anyone can read. Now
                  sealed letters are opened too, and she is angry enough to write back
                  and tell her mother to expect nothing more.
                </li>
                <li>
                  <strong>Ajit&rsquo;s cruelty</strong>: He doesn&rsquo;t physically hit her.
                  His weapon is{" "}
                  <Highlight color="green">words</Highlight>: &ldquo;Why bother to read
                  that?&rdquo; and &ldquo;dung-picker&rsquo;s daughter.&rdquo; The insult
                  targets her origin, her mother, her identity. Ajit&rsquo;s cruelty is
                  quiet, casual, routine &mdash; which makes it more devastating than
                  violence. He doesn&rsquo;t need to raise his hand; the social structure
                  does the work for him.
                </li>
                <li>
                  <strong>The matchbox as symbol</strong>: Ajit&rsquo;s matchbox is his
                  possession &mdash; she takes{" "}
                  <Highlight color="pink">his own tool of control</Highlight> and turns it
                  into her weapon. The irony is deliberate: the instrument of his casual
                  power (he lights cigarettes, candles, stove) becomes the instrument of her
                  defiance. The matchbox represents both his carelessness and her buried
                  rage.
                </li>
                <li>
                  <strong>Nomita&rsquo;s fire</strong>: Setting her sari on fire is not
                  suicide &mdash; it is protest. She burns what is precious (her anchol, her
                  appearance, her social value) to show she has{" "}
                  <strong>nothing left to lose</strong>. The fire is visible, undeniable,
                  dangerous &mdash; everything that Nomita is not allowed to be. Ajit
                  &ldquo;slaps it out&rdquo; because he is terrified not of her death, but
                  of her anger made visible.
                </li>
                <li>
                  <strong>Aftermath</strong>: Her niece comes in to ask about the
                  washerman, and Nomita answers in a completely calm voice before going
                  downstairs. A sister-in-law teases her about spending time with her
                  husband and asks about the burnt anchol; Nomita invents a story about
                  lifting a hot pot off the stove. She lies about the burn, peels
                  potatoes, and the domestic routine continues &mdash;{" "}
                  <Highlight color="yellow">outwardly nothing has changed</Highlight>, but
                  inside she has made a decision. The sharp words (Mejo-wife teases about
                  love-talk, Boro-wife scolds about laziness) show that the oppression is
                  not just from Ajit but from the entire structure. Nomita must smile
                  through it all: &ldquo;Her voice must not tremble.&rdquo;
                </li>
                <li>
                  <strong>The &ldquo;poisoned knife&rdquo;</strong>: Ajit&rsquo;s worst
                  weapon is not the matchbox but his words. He calls her mother a
                  &ldquo;dung-picker&rsquo;s daughter&rdquo; &mdash; a class insult that
                  strikes at Nomita&rsquo;s identity. The narrator calls this a
                  &ldquo;poisoned knife&rdquo; because it wounds silently and permanently.
                  Words cannot be taken back; the scar remains.
                </li>
                <li>
                  <strong>Narrator&rsquo;s closing</strong>: Women have the gunpowder but
                  never flare up. They don&rsquo;t burn their own colourful shells. Men
                  know this &mdash; that&rsquo;s why they leave matchboxes scattered
                  carelessly in pockets. The closing is both observation and indictment: the
                  system persists because women choose endurance over destruction, and men
                  rely on that choice.
                </li>
                <li>
                  <strong>Overall theme</strong>: The story exposes how{" "}
                  <Highlight color="blue">quiet oppression</Highlight> works &mdash;
                  through small cruelties, control of information, and social shame &mdash;
                  and how women absorb and endure it rather than destroy the system that
                  oppresses them. The matchbox is the perfect symbol: full of potential
                  fire, kept meek and innocent, scattered carelessly because the men know
                  it will never be used.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="symbolism-themes">
            <Callout type="important">
              <p>
                The <Highlight color="yellow">matchbox</Highlight> is the
                story&rsquo;s central symbol: women have enough{" "}
                <strong>gunpowder</strong> to set a hundred Lankas aflame,
                yet they sit meek and innocent. The story asks: what happens
                when the match is finally struck?
              </p>
            </Callout>

            <h3
              id="matchbox-symbol"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              The Matchbox
            </h3>
            <p>
              The matchbox represents{" "}
              <Highlight color="yellow">women&rsquo;s suppressed power</Highlight>.
              It holds gunpowder, fire and rebellion, yet is kept &ldquo;meek and
              innocent&rdquo; in kitchens, pantries and bedrooms.
            </p>
            <p>
              Nomita grabs it and strikes a match, but the fire is{" "}
              <strong>quickly extinguished</strong>. Men know women won&rsquo;t
              burn their own shells &mdash; that is why they leave the boxes
              scattered carelessly.
            </p>

            <h3
              id="the-letter"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              The Letter
            </h3>
            <p>
              The letter is a symbol of{" "}
              <Highlight color="pink">male control over communication</Highlight>.
              Ajit opens, reads and sometimes discards Nomita&rsquo;s
              correspondence.
            </p>
            <p>
              The letter-box key is his tool of surveillance. Her private world
              &mdash; her relationship with her mother &mdash; is under his
              control.
            </p>

            <h3
              id="forest-of-people"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Forest of People
            </h3>
            <p>
              The expression{" "}
              <Highlight color="green">&ldquo;forest of people&rdquo;</Highlight>{" "}
              captures the overwhelming density of the joint family. Nomita
              looks around and sees the hurly-burly on either side.
            </p>
            <p>
              There is <strong>no privacy</strong> and no space for genuine
              emotion. Every smile is a performance, and her voice must not
              tremble.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              <em>Matchbox</em> reveals the{" "}
              <Highlight color="yellow">quiet fury</Highlight> of women who
              endure patriarchal control with composure. They have the
              gunpowder to burn everything down, but they{" "}
              <strong>never flare up and burn away the mask</strong> of
              men&rsquo;s high-mindedness. The men know this &mdash; and that
              is why they leave matchboxes scattered carelessly, without
              fear, in their pockets.
            </KeyPoint>
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
