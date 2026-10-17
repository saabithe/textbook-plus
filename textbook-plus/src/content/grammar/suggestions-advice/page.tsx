"use client";

import { useState } from "react";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Expandable } from "@/components/content/Expandable";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "sa1", type: "mcq",
    question: "\"________ we take a short break?\"",
    options: ["Shall", "Will", "Do", "Are"],
    answer: 0,
    explanation: "\u201cShall we\u2026?\u201d is a polite, slightly formal way of making a suggestion.",
  },
  {
    id: "sa2", type: "mcq",
    question: "Choose the correct sentence.",
    options: [
      "How about to go for a walk?",
      "How about going for a walk?",
      "How about go for a walk?",
      "How about we going for a walk?",
    ],
    answer: 1,
    explanation: "\u201cHow about / What about\u201d is followed by an -ing form.",
  },
  {
    id: "sa3", type: "mcq",
    question: "\"I suggest that he ________ a doctor.\"",
    options: ["sees", "to see", "see", "seeing"],
    answer: 2,
    explanation: "After \u201csuggest that\u201d, use the base form (subjunctive): \u201cthat he see\u201d.",
  },
  {
    id: "sa4", type: "fill-blank",
    question: "Fill in (one word): \"Why ________ you ask your teacher for help?\"",
    answer: "don't", accepted: ["do not"],
    explanation: "\u201cWhy don't you\u2026?\u201d is a common informal way of making a suggestion.",
  },
  {
    id: "sa5", type: "mcq",
    question: "\"If I ________ you, I would wait a little longer.\"",
    options: ["am", "was", "were", "will be"],
    answer: 2,
    explanation: "\u201cIf I were you\u201d is the standard formula for giving advice.",
  },
  {
    id: "sa6", type: "mcq",
    question: "\"If I were you, I ________ limit screen time.\"",
    options: ["would", "will", "can", "must"],
    answer: 0,
    explanation: "Hypothetical advice (\u201cIf I were you\u201d) is followed by would + base verb.",
  },
  {
    id: "sa7", type: "mcq",
    question: "Which sentence makes a gentle, non-threatening suggestion?",
    options: [
      "You must join a rehabilitation programme.",
      "You could join a rehabilitation programme.",
      "You join a rehabilitation programme.",
      "You had better join a rehabilitation programme.",
    ],
    answer: 1,
    explanation: "\u201cCould\u201d works as a modal making a helpful suggestion or alternative \u2014 followed by the base verb.",
  },
  {
    id: "sa8", type: "mcq",
    question: "\"You ________ consult a doctor immediately!\" (urgent, consequences if ignored)",
    options: ["should", "had better", "could", "might"],
    answer: 1,
    explanation: "For urgent advice carrying a warning, use \u201chad better + base verb\u201d \u2014 never with \u201cto\u201d.",
  },
  {
    id: "hb1", type: "mcq",
    question: "\"You ________ better see a doctor.\"",
    options: ["had", "have", "has", "would"],
    answer: 0,
    explanation: "\u201cHad better\u201d is a fixed expression meaning strong advice.",
  },
  {
    id: "hb2", type: "mcq",
    question: "Choose the correct sentence.",
    options: [
      "You had better to rest.",
      "You had better rest.",
      "You had better resting.",
      "You have better rest.",
    ],
    answer: 1,
    explanation: "\u201cHad better\u201d is followed by the base verb, with no \u201cto\u201d.",
  },
  {
    id: "hb3", type: "fill-blank",
    question: "Make it negative \u2014 type the two missing words: \"You'd better ________ ________ late again.\" (not / be)",
    answer: "not be",
    explanation: "The negative is \u201chad better not + base verb\u201d.",
  },
  {
    id: "hb4", type: "mcq",
    question: "Which sentence expresses the strongest advice or warning?",
    options: [
      "You could see a doctor.",
      "You might see a doctor.",
      "You'd better see a doctor.",
      "You may see a doctor.",
    ],
    answer: 2,
    explanation: "\u201cHad better\u201d warns of a bad result if ignored \u2014 stronger than could / might / may.",
  },
  {
    id: "hb5", type: "mcq",
    question: "Choose the correct form to talk about advice you did NOT take in the past.",
    options: [
      "You had better saw a doctor.",
      "You should have seen a doctor.",
      "You had better seen a doctor.",
      "You would better see a doctor.",
    ],
    answer: 1,
    explanation: "\u201cShould have + past participle\u201d expresses past advice or regret; \u201chad better\u201d has no past form.",
  },
  {
    id: "hb6", type: "mcq",
    question: "\"You'd better ________ away from drug usage to avoid permanent damage.\"",
    options: ["stay", "stayed", "staying", "to stay"],
    answer: 0,
    explanation: "\u201cYou'd better\u201d (you had better) is strong, urgent advice \u2014 always followed by the base verb, never \u201cto\u201d.",
  },
];

const SUGGESTIONS_TABLE = [
  { cells: ["Let's + base verb", "Let's take a break.", "Informal \u2014 includes the speaker"] },
  { cells: ["Shall we + base verb", "Shall we begin?", "Formal \u2014 a question form"] },
  { cells: ["Why don't we / you + base verb", "Why don't we meet at six?", "Informal"] },
  { cells: ["How about / What about + -ing", "How about going for a walk?", "Informal"] },
  { cells: ["We could + base verb", "We could try the other route.", "Neutral, tentative"] },
  { cells: ["I suggest / recommend + that + subject + base verb", "I suggest that we leave early.", "Formal"] },
];

const ADVICE_TABLE = [
  { cells: ["should / ought to + base verb", "You should rest. / You ought to apologise."] },
  { cells: ["had better + base verb", "You'd better apply soon."] },
  { cells: ["Why don't you + base verb", "Why don't you ask your teacher?"] },
  { cells: ["If I were you, I would + base verb", "If I were you, I would wait."] },
  { cells: ["I advise / recommend + -ing", "I advise waiting a day."] },
  { cells: ["must / have to (strong)", "You must finish it today."] },
];

const HAD_BETTER_TABLE = [
  { cells: ["had better + base verb", "Strong advice / warning \u2014 there is a bad result if ignored", "You'd better hurry or we'll miss the train."] },
  { cells: ["should + base verb", "General advice, milder in tone", "You should take some rest."] },
  { cells: ["ought to + base verb", "Moral duty or advice", "You ought to apologise."] },
  { cells: ["would rather + base verb", "Preference, not advice", "I'd rather stay at home."] },
  { cells: ["had better not + base verb", "Negative advice / warning", "You'd better not be late."] },
];

export default function SuggestionsAdvicePage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          A <Highlight color="yellow">suggestion</Highlight> proposes an idea for doing something together; <Highlight color="green">advice</Highlight> tells someone what <em>they</em> should do.
        </Callout>
      </section>

      <section id="suggestions" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Making Suggestions</h2>
        <TableCard
          headers={["Structure", "Example", "Register"]}
          rows={SUGGESTIONS_TABLE}
          caption="Notice the verb forms: base verb after 'let's / shall we / why don't', but -ing after 'how about'."
        />
      </section>

      <section id="advice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Giving Advice</h2>
        <TableCard
          headers={["Structure", "Example"]}
          rows={ADVICE_TABLE}
          caption="From gentle (should) to strong (must) — pick the strength that matches the situation."
        />
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          <p><strong>Should / ought to</strong> give general recommendations or moral duties, followed by the base verb (V1): <em>You should study regularly.</em></p>
          <p><strong>Had better</strong> gives urgent advice or a strong recommendation carrying a warning of consequences, followed directly by the base verb (V1) &mdash; never <em>to</em>: <em>You had better consult a doctor immediately.</em></p>
          <p><strong>If I were you</strong> gives hypothetical advice by putting yourself in their shoes, followed by <em>would</em> + V1: <em>If I were you, I would limit screen time.</em></p>
          <p><strong>Handy starters:</strong> direct advice &mdash; <em>You should really&hellip;</em>, <em>You ought to&hellip;</em>, <em>You&rsquo;d better&hellip;</em>; hypothetical advice &mdash; <em>If I were you, I would&hellip;</em>; advisory verbs &mdash; <em>advise, suggest, recommend</em>.</p>
        </div>
      </section>

      <section id="had-better" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Had Better &mdash; Strong Advice</h2>
        <Callout type="note">
          <Highlight color="yellow">Had better</Highlight> gives strong advice with a hint of warning: if you ignore it, something unpleasant will follow. It looks like the past tense, but it always refers to the <em>present or future</em>.
        </Callout>
        <TableCard
          headers={["Form", "Strength & meaning", "Example"]}
          rows={HAD_BETTER_TABLE}
          caption="Learn the contrast: had better warns, should advises, would rather prefers."
        />
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          <p><strong>Contraction:</strong> in speech, <em>had</em> is shortened to <em>&rsquo;d</em> &mdash; <em>I&rsquo;d better go</em>, <em>You&rsquo;d better ask</em>.</p>
          <p><strong>No past form:</strong> for past advice or regret, use <em>should have + past participle</em> &mdash; <em>You should have called me.</em></p>
          <p><strong>It is followed by the base verb</strong>, never <em>to</em> and never <em>-ing</em>: <em>We&rsquo;d better leave now.</em></p>
          <p><strong>Negative:</strong> put <em>not</em> after <em>better</em> &mdash; <em>You&rsquo;d better not touch it.</em></p>
          <p><strong>Tone:</strong> it can sound firm or even threatening, so it is common in warnings: <em>You&rsquo;d better be on time.</em></p>
        </div>
      </section>

      <section id="responding" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Responding to a Suggestion</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Accepting:</strong> <em>That&rsquo;s a good idea.</em> / <em>Sounds great.</em> / <em>Sure, let&rsquo;s do that.</em></p>
          <p><strong>Declining politely:</strong> <em>I&rsquo;d rather not, thanks.</em> / <em>I&rsquo;m not sure about that.</em> / <em>Maybe another time.</em></p>
        </div>
      </section>

      <section id="worked-examples" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Examples</h2>
        <Expandable title="Worked example — advising a friend addicted to phones" variant="exercise">
          <p><strong>Context:</strong> <em>Advising a friend addicted to mobile phones.</em></p>
          <p className="mt-3"><strong>Advice 1:</strong> <em>You should really set a daily screen-time limit.</em> (Direct advice with <em>should</em> + base verb.)</p>
          <p className="mt-3"><strong>Advice 2:</strong> <em>If I were you, I would turn off non-essential notifications.</em> (Hypothetical advice: <em>would</em> + base verb.)</p>
        </Expandable>
        <Expandable title="Worked example — advising drug abusers (You'd better)" variant="exercise">
          <p><strong>Task:</strong> <em>The drug abusers must be warned of the ill effects of intoxicants. Give advice beginning with &ldquo;You&rsquo;d better&rdquo;.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>You&rsquo;d better stay away from drug usage to avoid permanent physical and mental damage.</em></p>
          <p className="mt-3"><strong>Rule:</strong> &ldquo;You&rsquo;d better&rdquo; (You had better) is used for strong, urgent advice where negative consequences will follow if ignored. It must strictly be followed by a base verb (infinitive without &lsquo;to&rsquo;).</p>
        </Expandable>
        <Expandable title="Worked example — advising drug abusers (If I were you)" variant="exercise">
          <p><strong>Task:</strong> <em>Give advice beginning with &ldquo;If I were you&rdquo;.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>If I were you, I would seek immediate medical counseling to overcome this addiction.</em></p>
          <p className="mt-3"><strong>Rule:</strong> This sets up a Type 2 Conditional structure for giving advice. The main clause must balance the past subjunctive (&ldquo;were&rdquo;) by using would + base verb.</p>
        </Expandable>
        <Expandable title="Worked example — advising drug abusers (You could)" variant="exercise">
          <p><strong>Task:</strong> <em>Give advice beginning with &ldquo;You could&rdquo;.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>You could join a rehabilitation programme and pick up healthy sports habits instead.</em></p>
          <p className="mt-3"><strong>Rule:</strong> &ldquo;Could&rdquo; functions here as a modal auxiliary to make a helpful, non-threatening suggestion or outline a positive alternative path. It must be followed by a base verb.</p>
        </Expandable>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="I suggest him to study."
          correction="I suggest that he study. / I suggest studying."
          example="'Suggest' never takes an object + to-infinitive; use 'that + subject + base verb' or a gerund."
        />
        <MistakeCard
          mistake="How about to take a taxi?"
          correction="How about taking a taxi?"
          example="After 'how about / what about', use the -ing form, not the infinitive."
        />
        <MistakeCard
          mistake="Why don't we to start?"
          correction="Why don't we start?"
          example="'Why don't we' is followed by the base verb, with no 'to'."
        />
        <MistakeCard
          mistake="You had better to study."
          correction="You had better study."
          example="'Had better' is followed directly by the base verb — don't add 'to'."
        />
        <MistakeCard
          mistake="He has better go now."
          correction="He had better go now."
          example="The form is fixed: it is always 'had better', never 'has better' or 'have better'."
        />
        <MistakeCard
          mistake="You had better not to be late."
          correction="You had better not be late."
          example="In the negative, 'not' comes after 'better' and the verb stays in the base form."
        />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Suggestions &amp; advice depend on the pattern: base verb after <em>let&rsquo;s / shall we / why don&rsquo;t we / had better</em>, but <em>-ing</em> after <em>how about / what about / advise / recommend</em>. Choose <em>should</em> for gentle advice and <em>must</em> for strong advice.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
