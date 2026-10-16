"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "pv1", type: "mcq",
    question: "\"The meeting was ________ because of the strike.\" (postponed)",
    options: ["put off", "put on", "put out", "put up"],
    answer: 0,
    explanation: "\u201cPut off\u201d means to postpone.",
  },
  {
    id: "pv2", type: "mcq",
    question: "\"I look forward to ________ you.\"",
    options: ["see", "seeing", "saw", "seen"],
    answer: 1,
    explanation: "In \u201clook forward to\u201d, \u201cto\u201d is a preposition, so it is followed by the -ing form.",
  },
  {
    id: "pv3", type: "mcq",
    question: "Choose the correct sentence (separable phrasal verb with a pronoun).",
    options: [
      "Please turn off it.",
      "Please turn it off.",
      "Please turn off.",
      "Please it turn off.",
    ],
    answer: 1,
    explanation: "With a separable phrasal verb, a pronoun object must go between the verb and the particle.",
  },
  {
    id: "pv4", type: "mcq",
    question: "\"She ________ her little brother while her mother was at work.\"",
    options: [
      "looks after",
      "looks after for",
      "looks her brother after",
      "looks for after",
    ],
    answer: 0,
    explanation: "\u201cLook after\u201d (= take care of) is inseparable: the object follows the particle.",
  },
  {
    id: "pv5", type: "fill-blank",
    question: "Replace the words in brackets with a phrasal verb: \"He ______ smoking last year. (stopped)\"",
    answer: "gave up",
    explanation: "\u201cGive up\u201d means to stop doing something.",
  },
];

const PHRASAL_TABLE = [
  { cells: ["give up", "stop doing something", "He gave up smoking."] },
  { cells: ["put off", "postpone", "They put off the meeting."] },
  { cells: ["look after", "take care of", "She looks after her sister."] },
  { cells: ["run into", "meet by chance", "I ran into an old friend."] },
  { cells: ["turn down", "reject / reduce", "He turned down the offer."] },
  { cells: ["carry out", "perform, complete", "They carried out the plan."] },
  { cells: ["bring about", "cause to happen", "The reform brought about change."] },
  { cells: ["call off", "cancel", "They called off the match."] },
  { cells: ["get along (with)", "have a good relationship", "I get along with my cousins."] },
  { cells: ["look forward to", "await eagerly", "I look forward to seeing you."] },
];

const SEPARABLE_TABLE = [
  { cells: ["Separable", "The object may go between the verb and the particle", "turn off the light / turn the light off"] },
  { cells: ["Inseparable", "The object must follow the particle", "look after the baby (not \u201clook the baby after\u201d)"] },
  { cells: ["Separable + pronoun", "A pronoun object must go in the middle", "turn it off (not \u201cturn off it\u201d)"] },
];

export default function PhrasalVerbsPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          A <Highlight color="yellow">phrasal verb</Highlight> is a verb combined with a small word (a particle) such as <em>up</em>, <em>off</em>, <em>out</em> or <em>after</em>. The combination usually has a meaning you cannot guess from the two words alone &mdash; <em>give up</em> does not mean &ldquo;give upwards&rdquo;.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Phrasal Verbs</h2>
        <TableCard
          headers={["Phrasal verb", "Meaning", "Example"]}
          rows={PHRASAL_TABLE}
          caption="Learn phrasal verbs as whole units, in a sentence — never word by word."
        />
      </section>

      <section id="separable" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Separable or Inseparable?</h2>
        <TableCard
          headers={["Type", "Rule", "Example"]}
          rows={SEPARABLE_TABLE}
          caption="When in doubt, keep the verb and particle together — that order is almost always safe."
        />
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="I look forward to see you."
          correction="I look forward to seeing you."
          example="In 'look forward to', 'to' is a preposition, so it is followed by the -ing form."
        />
        <MistakeCard
          mistake="Please turn off it."
          correction="Please turn it off."
          example="With a separable phrasal verb, a pronoun object goes between the verb and the particle."
        />
        <MistakeCard
          mistake="She looks the baby after."
          correction="She looks after the baby."
          example="'Look after' is inseparable — the object comes after the particle."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Learn phrasal verbs as fixed units with their meaning. Check whether the verb is <em>separable</em> (object can sit in the middle) or <em>inseparable</em> (object must follow) &mdash; and remember that a pronoun in a separable verb always goes in the middle.
        </KeyPoint>
      </section>
    </>
  );
}
