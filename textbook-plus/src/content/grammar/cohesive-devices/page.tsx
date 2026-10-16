"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "cd1", type: "mcq",
    question: "\"It was raining heavily; ________, we decided to stay indoors.\"",
    options: ["however", "therefore", "although", "for example"],
    answer: 1,
    explanation: "The second clause is the result of the first, so \u201ctherefore\u201d fits.",
  },
  {
    id: "cd2", type: "mcq",
    question: "Choose the correctly punctuated sentence.",
    options: [
      "It was late, however we continued.",
      "It was late; however, we continued.",
      "It was late however, we continued.",
      "It was late; however we continued.",
    ],
    answer: 1,
    explanation: "A conjunctive adverb such as \u201chowever\u201d needs a semicolon before it and a comma after it.",
  },
  {
    id: "cd3", type: "mcq",
    question: "\"________ he was very tired, he finished the work.\"",
    options: ["Although", "Because", "So", "Moreover"],
    answer: 0,
    explanation: "\u201cAlthough\u201d introduces a contrast, or concession.",
  },
  {
    id: "cd4", type: "mcq",
    question: "Choose the correct sentence.",
    options: [
      "Although he was tired, but he continued.",
      "Although he was tired, he continued.",
      "He was tired, although but he continued.",
      "Although he was tired, so he continued.",
    ],
    answer: 1,
    explanation: "Do not use \u201calthough\u201d together with \u201cbut\u201d \u2014 one connector is enough.",
  },
  {
    id: "cd5", type: "fill-blank",
    question: "Fill in (two words): \"She spoke slowly ________ everyone could hear her.\"",
    answer: "so that",
    explanation: "\u201cSo that\u201d introduces a clause of purpose.",
  },
];

const FUNCTIONS_TABLE = [
  { cells: ["Addition", "and, also, moreover, furthermore, in addition", "Moreover, the plan saves money."] },
  { cells: ["Contrast", "but, however, although, nevertheless, whereas", "It was late; however, we continued."] },
  { cells: ["Cause / Reason", "because, since, as, due to", "He left because he was tired."] },
  { cells: ["Effect / Result", "so, therefore, thus, consequently, as a result", "It rained; therefore, we stayed in."] },
  { cells: ["Purpose", "so that, in order that, to", "She spoke slowly so that all could hear."] },
  { cells: ["Sequence", "first, then, next, after that, finally", "First, mix the flour; then add water."] },
  { cells: ["Condition", "if, unless, provided that, in case", "We'll go unless it rains."] },
  { cells: ["Example", "for example, for instance, such as", "Citrus fruits, such as oranges, are rich in vitamin C."] },
  { cells: ["Summary", "in short, to sum up, in conclusion, overall", "In short, the plan is worth trying."] },
];

export default function CohesiveDevicesPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Cohesive devices</Highlight> (also called linkers, connectives, or discourse markers) are the words that hold a text together. They signal the relationship between one idea and the next, so the reader can follow your argument without guessing.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Linkers by Function</h2>
        <TableCard
          headers={["Function", "Linkers", "Example"]}
          rows={FUNCTIONS_TABLE}
          caption="Identify the relationship you want first, then pick a linker from that row."
        />
      </section>

      <section id="punctuation" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Punctuation &amp; Position</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Coordinating conjunctions</strong> (<em>and, but, or, so, for, nor, yet</em>) join two clauses with just a comma: <em>It was late, but we continued.</em></p>
          <p><strong>Conjunctive adverbs</strong> (<em>however, therefore, moreover, nevertheless, thus</em>) need a semicolon before and a comma after: <em>It was late; however, we continued.</em></p>
          <p><strong>Subordinating conjunctions</strong> (<em>although, because, since, while</em>) attach a dependent clause and take no semicolon: <em>Although it was late, we continued.</em></p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="It was late, however we continued."
          correction="It was late; however, we continued."
          example="A conjunctive adverb joins clauses with a semicolon (or a full stop), not a comma."
        />
        <MistakeCard
          mistake="Because it rained, so we stayed in."
          correction="Because it rained, we stayed in."
          example="Do not use 'because' and 'so' in the same sentence — one connector is enough."
        />
        <MistakeCard
          mistake="Although he was sick, but he came."
          correction="Although he was sick, he came."
          example="Nowhere in English do 'although' and 'but' appear together in the same clause pair."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Choose a linker by the <em>relationship</em> you want to show (addition, contrast, cause, result&hellip;). Then punctuate it correctly: coordinating conjunctions take a comma, but conjunctive adverbs such as <em>however</em> and <em>therefore</em> take a semicolon before and a comma after.
        </KeyPoint>
      </section>
    </>
  );
}
