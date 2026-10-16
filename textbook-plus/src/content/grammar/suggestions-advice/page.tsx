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
    answer: "don't",
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
      "You must join a rehabilitation program.",
      "You could join a rehabilitation program.",
      "You join a rehabilitation program.",
      "You had better join a rehabilitation program.",
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

export default function SuggestionsAdvicePage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          A <Highlight color="yellow">suggestion</Highlight> proposes an idea for doing something together; <Highlight color="green">advice</Highlight> tells someone what <em>they</em> should do. Both use special patterns, and the pattern decides how formal or forceful you sound.
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
        <Expandable title="Worked example — advising drug abusers (If I were you)" variant="exercise">
          <p><strong>Task:</strong> <em>Give advice beginning with &ldquo;If I were you&rdquo;.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>If I were you, I would seek immediate medical counseling to overcome this addiction.</em></p>
          <p className="mt-3"><strong>Rule:</strong> This sets up a Type 2 Conditional structure for giving advice. The main clause must balance the past subjunctive (&ldquo;were&rdquo;) by using would + base verb.</p>
        </Expandable>
        <Expandable title="Worked example — advising drug abusers (You could)" variant="exercise">
          <p><strong>Task:</strong> <em>Give advice beginning with &ldquo;You could&rdquo;.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>You could join a rehabilitation program and pick up healthy sports habits instead.</em></p>
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
