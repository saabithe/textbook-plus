"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
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
];

const HAD_BETTER_TABLE = [
  { cells: ["had better + base verb", "Strong advice / warning \u2014 there is a bad result if ignored", "You'd better hurry or we'll miss the train."] },
  { cells: ["should + base verb", "General advice, milder in tone", "You should take some rest."] },
  { cells: ["ought to + base verb", "Moral duty or advice", "You ought to apologise."] },
  { cells: ["would rather + base verb", "Preference, not advice", "I'd rather stay at home."] },
  { cells: ["had better not + base verb", "Negative advice / warning", "You'd better not be late."] },
];

export default function HadBetterPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Had better</Highlight> gives strong advice with a hint of warning: if you ignore it, something unpleasant will follow. It looks like the past tense, but it always refers to the <em>present or future</em>.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Form &amp; Meaning</h2>
        <TableCard
          headers={["Form", "Strength & meaning", "Example"]}
          rows={HAD_BETTER_TABLE}
          caption="Learn the contrast: had better warns, should advises, would rather prefers."
        />
      </section>

      <section id="usage" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Points to Remember</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Contraction:</strong> in speech, <em>had</em> is shortened to <em>&rsquo;d</em> &mdash; <em>I&rsquo;d better go</em>, <em>You&rsquo;d better ask</em>.</p>
          <p><strong>No past form:</strong> for past advice or regret, use <em>should have + past participle</em> &mdash; <em>You should have called me.</em></p>
          <p><strong>It is followed by the base verb</strong>, never <em>to</em> and never <em>-ing</em>: <em>We&rsquo;d better leave now.</em></p>
          <p><strong>Negative:</strong> put <em>not</em> after <em>better</em> &mdash; <em>You&rsquo;d better not touch it.</em></p>
          <p><strong>Tone:</strong> it can sound firm or even threatening, so it is common in warnings: <em>You&rsquo;d better be on time.</em></p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
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

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          <em>Had better</em> = strong advice + warning, always followed by the base verb (negative: <em>had better not</em>). Use <em>should</em> for ordinary advice and <em>should have</em> for advice about the past.
        </KeyPoint>
      </section>
    </>
  );
}
