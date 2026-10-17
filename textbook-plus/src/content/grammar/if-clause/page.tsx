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
    id: "ic6", type: "mcq",
    question: "\"If the United Nations ________ the war beforehand, so many children would not have suffered.\"",
    options: ["had stopped", "stopped", "will stop", "would stop"],
    answer: 0,
    explanation: "\u201cWould not have suffered\u201d marks a Type 3 (third) conditional \u2014 an imaginary past. The if-clause strictly takes the past perfect (had + V3).",
  },
  {
    id: "ic7", type: "mcq",
    question: "\"If the situation continues the same, too many lives ________.\"",
    options: ["will be lost", "will lose", "would lost", "are lost"],
    answer: 0,
    explanation: "Present-simple if-clause \u2192 Type 1 (first) conditional: will + base verb. Lives cannot lose themselves, so the passive is needed: will be + lost (V3).",
  },
  {
    id: "ic8", type: "mcq",
    question: "\"If I were you, I ________ the offer.\"",
    options: ["would accept", "will accept", "accepted", "accept"],
    answer: 0,
    explanation: "\u201cIf I were you\u201d is Type 2 advice: if + simple past \u2192 would + base verb.",
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

      <section id="advice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Type 2 for Advice &mdash; If I Were You</h2>
        <Callout type="important" title="The advice formula">
          <strong>If + Simple Past &rarr; would + base verb.</strong> <em>If I were you, I would accept the offer.</em> / <em>If I were you, I would study hard for the exam.</em>
        </Callout>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          <p><Highlight color="yellow">If I were you</Highlight> gives advice by putting yourself in the other person&rsquo;s shoes. It describes an imaginary, impossible situation &mdash; since you can never actually become them.</p>
          <p><strong>Why <em>were</em> and not <em>was</em>?</strong> In hypothetical or imaginary situations (the subjunctive mood), English uses <em>were</em> for all pronouns &mdash; even singular ones like <em>I, he, she</em> and <em>it</em> (e.g. <em>If she were here&hellip;</em>).</p>
        </div>
      </section>

      <section id="worked-example" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Example</h2>
        <Expandable title="Worked example — a mixed conditional passage" variant="exercise">
          <p><strong>Passage:</strong> <em>If United Nations &hellip;(stop) the war between two countries beforehand, so many children and the old would not have suffered from hunger and cold. If the situation continues the same, too many lives &hellip;(lose).</em></p>
          <p className="mt-3"><strong>Blank 1 &mdash; Third Conditional (past unfulfilled action):</strong> <em>had stopped</em>. The phrase &ldquo;would not have suffered&rdquo; in the main clause establishes this as a Type 3 conditional. It describes an imaginary past situation that never actually occurred. The formula strictly requires the Past Perfect tense (had + V3) inside the if-clause.</p>
          <p className="mt-3"><strong>Blank 2 &mdash; First Conditional in the passive (future probability):</strong> <em>will be lost</em>. The phrase &ldquo;If the situation continues&rdquo; uses the Present Simple, which sets up a Type 1 structure for a highly possible future outcome &mdash; the result clause requires will + base verb. Since lives cannot actively lose themselves, it must be passive: will be + the past participle <em>lost</em>.</p>
        </Expandable>
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
