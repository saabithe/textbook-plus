"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
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
            <AuthorCard name="Sudha Murty" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Hot summer days</em> remind the author of her{" "}
            <strong>childhood</strong> in a <strong>little village</strong>. There
            was a large{" "}
            <Highlight color="blue">banyan tree</Highlight> right in the middle of
            the village, and she would spend many hours playing under it during her
            holidays. The tree was like a <strong>massive umbrella</strong> with its
            branches providing much needed shade and succour.
          </p>
          <p>
            Travellers spent some time sitting under it and catching their breath
            before going on their way. To make them comfortable, there was a{" "}
            <Highlight color="yellow">&lsquo;horegallu&rsquo;</Highlight> under the
            tree.
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
                  <Highlight color="yellow">&lsquo;Horegallu&rsquo;</Highlight> is a{" "}
                  <strong>motivational story</strong> by Sudha Murty about the
                  importance of <strong>taking rest</strong> and{" "}
                  <strong>sharing our problems</strong> with others.
                </li>
                <li>
                  A horegallu literally means{" "}
                  <em>&ldquo;a stone that can bear weight&rdquo;</em> &mdash; a{" "}
                  <strong>resting place</strong> for weary travellers.
                </li>
                <li>
                  In any journey, everyone needs to <strong>stop</strong>, put down
                  their burden, and <strong>rest</strong> before they can continue.
                </li>
                <li>
                  The author&rsquo;s{" "}
                  <Highlight color="green">grandfather</Highlight> and her colleague{" "}
                  <Highlight color="blue">Ratna</Highlight> both acted as{" "}
                  <Highlight color="yellow">human horegallus</Highlight> &mdash;{" "}
                  <strong>good listeners</strong> who helped people regain their
                  strength.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  &lsquo;Horegallu&rsquo; is a{" "}
                  <strong>motivational story</strong> written by Sudha Murty. It
                  tells us the importance of <strong>taking rest</strong> in the
                  middle of our journey or <strong>sharing our problems</strong> with
                  others.
                </li>
                <li>
                  It is a short and simple{" "}
                  <Highlight color="blue">anecdote</Highlight> that shows Sudha
                  Murty&rsquo;s <strong>nostalgia</strong> for her childhood in a
                  little village with a huge banyan tree in the middle.
                </li>
                <li>
                  Under the banyan tree there was a{" "}
                  <Highlight color="yellow">horegallu</Highlight> &mdash; a{" "}
                  <strong>large flat stone</strong> placed over two vertical ones, on
                  which anyone could sit and rest, chat with fellow travellers, and
                  drink cool water from earthen pots kept nearby.
                </li>
                <li>
                  The author&rsquo;s{" "}
                  <Highlight color="green">grandfather</Highlight>, a{" "}
                  <strong>retired school teacher</strong>, would spend hours near the
                  horegallu chatting with travellers. He could only listen, but
                  simply talking to him seemed to{" "}
                  <Highlight color="pink">re-energise</Highlight> them for the road
                  ahead.
                </li>
                <li>
                  Grandfather told the author that a horegallu is{" "}
                  <strong>essential in any journey</strong>. Everyone bears their
                  burdens according to their capacities, but every once in a while
                  they need to <strong>stop</strong>, lay down their burden, and{" "}
                  <strong>rest</strong>.
                </li>
                <li>
                  Later in life the author met{" "}
                  <Highlight color="blue">Ratna</Highlight>, a{" "}
                  <strong>cheerful colleague</strong> in Mumbai, who reminded her of
                  her grandfather. Ratna spent her lunch breaks listening to the
                  troubles of her co-workers.{" "}
                  <em>&ldquo;God has given me two ears to listen without
                  judgement.&rdquo;</em>
                </li>
                <li>
                  Both grandfather and Ratna acted as{" "}
                  <Highlight color="yellow">human horegallus</Highlight> &mdash; they{" "}
                  <strong>listened with empathy</strong> and helped others regain the
                  strength to carry on.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  &lsquo;Horegallu&rsquo; is a{" "}
                  <strong>motivational story</strong> written by Sudha Murty. It
                  tells us the importance of <strong>taking rest</strong> in the
                  middle of our journey or <strong>sharing our problems</strong> with
                  others.
                </li>
                <li>
                  It is a short and simple anecdote that shows Sudha Murty&rsquo;s{" "}
                  <strong>nostalgia</strong> for her childhood in a little village
                  with a huge banyan tree in the middle.
                </li>
                <li>
                  Under the banyan tree there was a{" "}
                  <Highlight color="yellow">horegallu</Highlight> &mdash; a{" "}
                  <strong>large flat stone</strong> placed over two vertical ones, on
                  which anyone could sit and rest, chat with fellow travellers, and
                  drink cool water from earthen pots kept nearby.
                </li>
                <li>
                  The author&rsquo;s{" "}
                  <Highlight color="green">grandfather</Highlight>, a retired school
                  teacher, would spend hours near the horegallu chatting with
                  travellers. He could only listen, but simply talking to him seemed
                  to re-energise them for the road ahead.
                </li>
                <li>
                  Grandfather told the author that a horegallu is essential in any
                  journey. Everyone bears their burdens according to their
                  capacities, but every once in a while they need to{" "}
                  <strong>stop, lay down their burden, and rest</strong> &mdash; only
                  then can they be refreshed enough to pick up the load once more.
                </li>
                <li>
                  Later in life the author met{" "}
                  <Highlight color="blue">Ratna</Highlight>, a cheerful colleague in
                  Mumbai, who reminded her of her grandfather. Ratna spent her lunch
                  breaks listening to the troubles of her co-workers.
                </li>
                <li>
                  Ratna said:{" "}
                  <em>
                    &ldquo;God has given me two ears to listen to others. I hear them
                    out with <strong>sympathy</strong> and{" "}
                    <strong>without any judgement</strong>. When a person in trouble
                    finds an outlet for his worries, it relieves half his
                    burden.&rdquo;
                  </em>
                </li>
                <li>
                  Both the grandfather and Ratna acted as{" "}
                  <Highlight color="yellow">human horegallus</Highlight> &mdash; they{" "}
                  <strong>listened with empathy</strong> and helped others regain the
                  strength to carry on.
                </li>
                <li>
                  The story encourages us to be{" "}
                  <Highlight color="green">someone&rsquo;s horegallu</Highlight>: a
                  person who <strong>listens with compassion</strong> and creates{" "}
                  <strong>healthy minds</strong>.
                </li>
              </ul>
            }
          />
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in">
          {/* Character Sketch: Ratna */}
          <h2
            id="character-sketch-ratna"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="blue">Ratna</Highlight>
          </h2>
          <CharacterSketch name="Ratna">
            <p>
              <Highlight color="blue">Ratna</Highlight> is a character in the
              anecdote &lsquo;Horegallu&rsquo; written by Sudha Murty. She is a{" "}
              <strong>senior clerk</strong> who had been working in the company for
              nearly <strong>twenty-five years</strong>. She went about her{" "}
              <em>repetitive, mundane work</em> with an{" "}
              <Highlight color="pink">infectious cheerfulness</Highlight>.
            </p>
            <p>
              Every day during the{" "}
              <Highlight color="yellow">lunch hour</Highlight>, she would sit with
              some person in one of the rooms and have <strong>long chats</strong>.
              When the author asked what they talked about, Ratna simply said,{" "}
              <em>&ldquo;They share their troubles with me.&rdquo;</em>
            </p>
            <p>
              Ratna could not <strong>solve all their problems</strong>, but she just{" "}
              <Highlight color="yellow">listened</Highlight>. She considered sharing
              their conversations a sin, as they <strong>trusted her</strong> with
              their secrets. She never betrayed that confidence.
            </p>
            <p>
              She believed that{" "}
              <em>
                &ldquo;God had given her two ears so that she could listen with{" "}
                <strong>sympathy</strong> and{" "}
                <strong>without passing any judgement</strong>.&rdquo;
              </em>{" "}
              When a person finds an outlet for his worries, it relieves{" "}
              <Highlight color="pink">half his burden</Highlight>.
            </p>
            <p>
              People could <strong>open their minds</strong> before her and find
              relief. Soon after sharing their problems with her, they would gather
              the strength to <strong>move on with their journey</strong>. She acted
              as a <Highlight color="yellow">horegallu</Highlight> &mdash; a place
              where weary travellers could lay down their weight and rest.
            </p>
          </CharacterSketch>

          {/* Character Sketch: Grandfather */}
          <h2
            id="character-sketch-grandfather"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="green">Grandfather</Highlight>
          </h2>
          <CharacterSketch name="Grandfather">
            <p>
              The author&rsquo;s{" "}
              <Highlight color="green">grandfather</Highlight> was a{" "}
              <strong>retired school teacher</strong>. He would spend{" "}
              <strong>hours every day</strong> sitting under the{" "}
              <Highlight color="blue">banyan tree</Highlight> and talking to those
              resting near the horegallu.
            </p>
            <p>
              Most of the travellers were{" "}
              <strong>villagers taking a break from their work</strong> in the fields
              nearby. They had to walk <strong>long distances</strong> each day,
              carrying <strong>heavy burdens</strong> on their heads. Tired out by
              the heat, they would drink the cool water, wash their faces, and chat
              with grandfather about their daily lives and worries.
            </p>
            <p>
              Grandfather could only <strong>listen</strong> to them, but just talking
              to him seemed to <strong>refresh them</strong> for the journey. After
              some time, they would pick up their burdens with some ease and go on
              their way.
            </p>
            <p>
              He explained to the author that a{" "}
              <Highlight color="yellow">horegallu</Highlight> is{" "}
              <strong>essential in any journey</strong>. Everyone carries their
              burdens according to their situations and capacities, but every once in
              a while they need to <strong>stop, put down that burden, and rest</strong>. Only then
              can they be refreshed enough to pick up the load once more.
            </p>
            <p>
              <Highlight color="green">Grandfather</Highlight> acted as a{" "}
              <Highlight color="yellow">human horegallu</Highlight> &mdash; through
              his <strong>patient listening</strong>, he helped the villagers{" "}
              <Highlight color="pink">regain their strength</Highlight> and carry on
              with their lives. He did this not for money or recognition, but because
              these <strong>acts of kindness</strong> gave him joy.
            </p>
          </CharacterSketch>

          {/* Character Comparison */}
          <h2
            id="character-comparison"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Comparison:{" "}
            <Highlight color="green">Grandfather</Highlight> &amp;{" "}
            <Highlight color="blue">Ratna</Highlight>
          </h2>
          <CharacterComparison
            characters={["Grandfather", "Ratna"]}
            rows={[
              {
                label: "Role",
                values: [
                  <p key="g-role">Retired school teacher</p>,
                  <p key="r-role">Senior clerk (25 years in the company)</p>,
                ],
              },
              {
                label: "Setting",
                values: [
                  <p key="g-set">Village, under the banyan tree near the horegallu</p>,
                  <p key="r-set">Office, during lunch breaks in one of the rooms</p>,
                ],
              },
              {
                label: "Who they helped",
                values: [
                  <p key="g-who">Villagers carrying heavy loads from the fields</p>,
                  <p key="r-who">Co-workers carrying worries and stress</p>,
                ],
              },
              {
                label: "How they listened",
                values: [
                  <p key="g-how">Sat under the tree and chatted with travellers; mostly listened to their daily concerns</p>,
                  <p key="r-how">Sat with one person each lunch hour; mostly listened to their problems without trying to solve them</p>,
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
                  <p key="g-conf">Villagers naturally trusted him as a respected elder; their conversations stayed private</p>,
                  <p key="r-conf">&ldquo;Not even in my dreams. I consider that to be the worst kind of betrayal.&rdquo; She never disclosed what was shared in confidence</p>,
                ],
              },
              {
                label: "Effect on others",
                values: [
                  <p key="g-eff">Travellers felt refreshed and picked up their burdens with ease</p>,
                  <p key="r-eff">Colleagues found relief and gathered strength to carry on with their journey</p>,
                ],
              },
              {
                label: "Motivation",
                values: [
                  <p key="g-mot">No money or recognition; these acts of kindness gave him joy</p>,
                  <p key="r-mot">No reward sought; simply listened and provided a safe outlet for worries</p>,
                ],
              },
              {
                label: "Shared trait",
                values: [
                  <p key="g-shared" className="font-semibold">Both were human horegallus &mdash; good listeners who provided empathy and helped people regain their strength through patient listening</p>,
                  <p key="r-shared" className="font-semibold">Both were human horegallus &mdash; good listeners who provided empathy and helped people regain their strength through patient listening</p>,
                ],
              },
            ]}
          />

          {/* Symbolism & Themes */}
          <h2
            id="symbolism-themes"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Symbolism &amp; Themes
          </h2>

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
            through life. The horegallu offers a place to set down both kinds of
            burden.
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
            <strong>without judgement</strong>. The story shows that{" "}
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
            <strong>patience</strong> without expecting any reward. The author
            concludes that the world needs many more such{" "}
            <strong>people who listen with compassion</strong>.
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

          {/* Key Takeaway */}
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

          {/* Read & Respond */}
          <div id="read-and-respond-section" className="mt-10">
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}
    </div>
  );
}