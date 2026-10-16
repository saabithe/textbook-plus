"use client";

import { useState } from "react";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "ic1", type: "mcq",
    question: "\"If you heat ice, it ________.\"",
    options: ["will melt", "melts", "melted", "would melt"],
    answer: 1,
    explanation: "This is a zero conditional (a general truth): if + present simple \u2192 present simple.",
  },
  {
    id: "ic2", type: "mcq",
    question: "\"If it ________ tomorrow, we will cancel the trip.\"",
    options: ["will rain", "rains", "rained", "would rain"],
    answer: 1,
    explanation: "First conditional: use the present simple (not \u201cwill\u201d) in the if-clause.",
  },
  {
    id: "ic3", type: "mcq",
    question: "\"If I ________ rich, I would travel the world.\"",
    options: ["am", "was", "were", "will be"],
    answer: 2,
    explanation: "Second conditional (unreal present): if + past simple (\u201cwere\u201d for all subjects), with \u201cwould\u201d in the main clause.",
  },
  {
    id: "ic4", type: "mcq",
    question: "\"She would have passed if she ________ harder.\"",
    options: ["studied", "had studied", "would study", "studies"],
    answer: 1,
    explanation: "Third conditional (unreal past): if + had + past participle \u2192 would have + past participle.",
  },
  {
    id: "ic5", type: "fill-blank",
    question: "Fill in: \"________ you hurry, you will miss the bus.\" (one word meaning \u201cif not\u201d)",
    answer: "Unless",
    explanation: "\u201cUnless\u201d means \u201cif not\u201d \u2014 and it already carries the negative, so no extra \u201cnot\u201d is needed.",
  },
];

const CONDITIONALS_TABLE = [
  { cells: ["Zero", "If + present simple", "present simple", "If you heat ice, it melts."] },
  { cells: ["First", "If + present simple", "will + base verb", "If it rains, we will cancel."] },
  { cells: ["Second", "If + past simple", "would + base verb", "If I had money, I would travel."] },
  { cells: ["Third", "If + had + past participle", "would have + past participle", "If she had studied, she would have passed."] },
  { cells: ["Mixed", "If + had + past participle", "would + base verb", "If I had slept well, I would not be tired."] },
];

export default function IfClausePage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          An <Highlight color="yellow">if clause</Highlight> (a conditional clause) shows that one action depends on another. The tense you choose for the if-clause and for the main clause tells the reader whether the situation is real, imaginary, or impossible.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Types of Conditionals</h2>
        <TableCard
          headers={["Type", "If-clause", "Main clause", "Example"]}
          rows={CONDITIONALS_TABLE}
          caption="Match the two halves: the if-clause and the main clause must belong to the same type."
        />
      </section>

      <section id="other-words" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Other Conditional Words</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><Highlight color="blue">Unless</Highlight> = if not: <em>Unless you hurry, you will be late.</em></p>
          <p><Highlight color="green">In case</Highlight> = to be prepared for a possibility: <em>Take an umbrella in case it rains.</em></p>
          <p><strong>Provided (that) / as long as</strong> = on condition that: <em>You may go, as long as you finish your work.</em></p>
          <p><strong>Otherwise</strong> = if not (joins two clauses): <em>Hurry up; otherwise we will miss the train.</em></p>
          <p><strong>But for</strong> = if it were not for: <em>But for your help, I would have failed.</em></p>
        </div>
      </section>

      <section id="inversion" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Formal Inversion</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p>In formal writing, the if-clause can drop <em>if</em> and invert the subject and verb:</p>
          <p className="ml-4"><em>Had I known</em> the truth, I would have acted differently. (= If I had known&hellip;)</p>
          <p className="ml-4"><em>Were I you</em>, I would apologise. (= If I were you&hellip;)</p>
          <p className="ml-4"><em>Should you need</em> help, call me. (= If you should need&hellip;)</p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="If it will rain, we will cancel."
          correction="If it rains, we will cancel."
          example="Use the present simple in the if-clause of a first conditional — never 'will'."
        />
        <MistakeCard
          mistake="If I would have money, I would travel."
          correction="If I had money, I would travel."
          example="Never use 'would' in the if-clause; the 'would' belongs in the main clause."
        />
        <MistakeCard
          mistake="Unless you don't hurry, you'll be late."
          correction="Unless you hurry, you'll be late."
          example="'Unless' already means 'if not', so an extra 'not' reverses the meaning."
        />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          The if-clause never takes <em>will</em> or <em>would</em> — it takes the present simple (real) or the past/perfect (unreal). The main clause carries the modal: <em>will</em> for real future, <em>would</em> for unreal present, <em>would have</em> for unreal past.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
