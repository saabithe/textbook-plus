"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "ed1", type: "mcq",
    question: "Choose the corrected sentence: \"The number of students are increasing.\"",
    options: [
      "The number of students are increasing.",
      "The number of students is increasing.",
      "A number of students is increasing.",
      "The numbers of students is increasing.",
    ],
    answer: 1,
    explanation: "\u201cThe number of\u201d takes a singular verb (is); \u201ca number of\u201d takes a plural verb.",
  },
  {
    id: "ed2", type: "mcq",
    question: "Find the error: \"She is married with a doctor.\"",
    options: [
      "She is married with a doctor.",
      "She is married to a doctor.",
      "She is married for a doctor.",
      "She is married by a doctor.",
    ],
    answer: 1,
    explanation: "\u201cMarried to\u201d is the fixed collocation.",
  },
  {
    id: "ed3", type: "mcq",
    question: "Choose the correct form: \"He plays the guitar very ________.\"",
    options: ["good", "well", "goodly", "better"],
    answer: 1,
    explanation: "An adverb (well) modifies the verb \u201cplays\u201d; \u201cgood\u201d is an adjective.",
  },
  {
    id: "ed4", type: "fill-blank",
    question: "Correct the spelling \u2014 type the right word: \"He will definately come.\"",
    answer: "definitely",
    explanation: "The correct spelling is \u201cdefinitely\u201d (from \u201cdefinite\u201d + \u201c-ly\u201d).",
  },
  {
    id: "ed5", type: "mcq",
    question: "Choose the corrected sentence: \"I have been living here since ten years.\"",
    options: [
      "I have been living here since ten years.",
      "I have been living here for ten years.",
      "I live here since ten years.",
      "I am living here since ten years.",
    ],
    answer: 1,
    explanation: "Use \u201cfor\u201d with a period of time (ten years) and \u201csince\u201d with a point in time (2015).",
  },
];

const ERROR_TYPES = [
  { cells: ["Subject\u2013verb agreement", "Does the verb match the subject?", "The list of items are long \u2192 is long"] },
  { cells: ["Tense", "Is the time frame consistent?", "She go yesterday \u2192 She went yesterday"] },
  { cells: ["Article", "Does the noun need a / an / the?", "He is best student \u2192 He is the best student"] },
  { cells: ["Preposition", "Check fixed collocations", "married with \u2192 married to"] },
  { cells: ["Word form", "Adjective or adverb? Noun or verb?", "He runs quick \u2192 He runs quickly"] },
  { cells: ["Spelling", "Common confusions", "definately \u2192 definitely"] },
  { cells: ["Punctuation", "Commas, apostrophes, capitals", "its raining \u2192 it's raining"] },
  { cells: ["Redundancy", "Unnecessary repetition", "return back \u2192 return"] },
];

export default function EditingPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Editing</Highlight> means finding and correcting the errors in a given passage. You are usually asked to edit <em>one</em> error per line or to rewrite a short passage correctly. The errors almost always come from a small, predictable set of grammar points.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Error Types</h2>
        <TableCard
          headers={["Error type", "What to check", "Wrong \u2192 Right"]}
          rows={ERROR_TYPES}
          caption="Scan the passage for these eight categories — most editing tasks test nothing else."
        />
      </section>

      <section id="editing-steps" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Editing Checklist</h2>
        <Checklist
          items={[
            { label: "Read the whole passage once for meaning before changing anything" },
            { label: "Check every verb against its subject (agreement)" },
            { label: "Keep the tense and time frame consistent" },
            { label: "Look at every noun: does it need a / an / the?" },
            { label: "Check prepositions in fixed phrases (depend on, married to)" },
            { label: "Watch word forms: adjective vs adverb" },
            { label: "Read aloud to catch spelling and punctuation slips" },
          ]}
        />
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="The number of students are increasing."
          correction="The number of students is increasing."
          example="'The number of' takes a singular verb; 'a number of' takes a plural verb."
        />
        <MistakeCard
          mistake="He did not went to school."
          correction="He did not go to school."
          example="After 'did not', use the base form of the verb — never the past tense."
        />
        <MistakeCard
          mistake="One of my friend is a teacher."
          correction="One of my friends is a teacher."
          example="'One of' is always followed by a plural noun, but the verb stays singular."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Editing is a <em>search</em>, not a rewrite. Work through a fixed checklist \u2014 agreement, tense, articles, prepositions, word form, spelling and punctuation \u2014 and change only what is wrong.
        </KeyPoint>
      </section>
    </>
  );
}
