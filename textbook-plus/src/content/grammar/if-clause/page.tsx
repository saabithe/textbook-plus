"use client";

import { useState } from "react";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
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
  {
    id: "ic9", type: "mcq",
    question: "\"If I ________ you, I would apologise.\"",
    options: ["am", "was", "were", "will be"],
    answer: 2,
    explanation: "In hypothetical clauses, \u201cwere\u201d is used for every subject (the subjunctive).",
  },
  {
    id: "ic10", type: "mcq",
    question: "\"If she ________ harder, she would pass the exam.\"",
    options: ["studies", "studied", "had studied", "will study"],
    answer: 1,
    explanation: "Second conditional: if + past simple (\u201cstudied\u201d) \u2192 would + base verb.",
  },
  {
    id: "ic11", type: "mcq",
    question: "\"Water boils if you ________ it to 100\u00b0C.\"",
    options: ["will heat", "heated", "heat", "would heat"],
    answer: 2,
    explanation: "Zero conditional for a scientific fact: if + present simple \u2192 present simple.",
  },
  {
    id: "ic12", type: "mcq",
    question: "\"If I had known, I ________ you.\"",
    options: ["would tell", "would have told", "told", "will tell"],
    answer: 1,
    explanation: "Third conditional: if + had + V3 \u2192 would have + V3.",
  },
  {
    id: "ic13", type: "fill-blank",
    question: "Fill in the correct form of the verb: \"If it ________ (rain) tomorrow, we will stay at home.\"",
    answer: "rains",
    explanation: "First conditional \u2014 the if-clause takes the present simple, never \u201cwill rain\u201d.",
  },
  {
    id: "ic14", type: "mcq",
    question: "\"You will miss the bus if you ________.\"",
    options: ["don't hurry", "won't hurry", "didn't hurry", "wouldn't hurry"],
    answer: 0,
    explanation: "First conditional if-clause stays in the present simple, even for the negative.",
  },
  {
    id: "ic15", type: "mcq",
    question: "\"If I ________ a bird, I would fly across the world.\"",
    options: ["am", "were", "had been", "will be"],
    answer: 1,
    explanation: "An impossible imaginary present uses the second conditional with \u201cwere\u201d.",
  },
  {
    id: "ic16", type: "mcq",
    question: "\"If they had left earlier, they ________ the train.\"",
    options: ["would catch", "will catch", "would have caught", "caught"],
    answer: 2,
    explanation: "Third conditional main clause needs would have + past participle. The bare \u201ccaught\u201d is wrong because it is missing \u201cwould have\u201d.",
  },
  {
    id: "ic17", type: "mcq",
    question: "\"If you ________ red and blue, you get purple.\"",
    options: ["will mix", "mixed", "mix", "would mix"],
    answer: 2,
    explanation: "Zero conditional (a general truth): present simple in both halves.",
  },
  {
    id: "ic18", type: "mcq",
    question: "\"If she ________ the truth, she would have told us.\"",
    options: ["knew", "had known", "knows", "would know"],
    answer: 1,
    explanation: "Third conditional if-clause: had + past participle.",
  },
  {
    id: "ic19", type: "fill-blank",
    question: "Fill in the correct form: \"I would travel the world if I ________ (have) enough money.\"",
    answer: "had",
    explanation: "Second conditional if-clause takes the past simple \u2014 here, \u201chad\u201d.",
  },
  {
    id: "ic20", type: "mcq",
    question: "\"________ I were you, I would take the job.\"",
    options: ["If", "Unless", "Although", "Because"],
    answer: 0,
    explanation: "\u201cIf I were you\u201d is the fixed phrase for giving advice.",
  },
  {
    id: "ic21", type: "mcq",
    question: "\"If the weather ________ fine, we will go out.\"",
    options: ["will be", "is", "was", "were"],
    answer: 1,
    explanation: "First conditional if-clause uses the present simple (\u201cis\u201d).",
  },
  {
    id: "ic22", type: "mcq",
    question: "\"If I had studied medicine, I ________ a doctor now.\"",
    options: ["would be", "will be", "am", "would have been"],
    answer: 0,
    explanation: "Mixed conditional: a past condition (had studied) with a present result (would be).",
  },
];

const CONDITIONALS_TABLE = [
  { cells: ["Zero", "If + present simple", "present simple", "General truths & scientific facts", "If you heat ice, it melts."] },
  { cells: ["First", "If + present simple", "will + base verb", "A real, possible future", "If it rains, we will cancel."] },
  { cells: ["Second", "If + past simple", "would + base verb", "An unreal present / unlikely future", "If I had money, I would travel."] },
  { cells: ["Third", "If + had + past participle", "would have + past participle", "An unreal past (regret, criticism)", "If she had studied, she would have passed."] },
  { cells: ["Mixed", "If + had + past participle", "would + base verb", "A past condition with a present result", "If I had slept well, I would not be tired."] },
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
          An <Highlight color="yellow">if clause</Highlight> (a conditional clause) shows that one action depends on another.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Types of Conditionals</h2>
        <TableCard
          headers={["Type", "If-clause", "Main clause", "When we use it", "Example"]}
          rows={CONDITIONALS_TABLE}
          caption="Match the two halves: the if-clause and the main clause must belong to the same type."
        />
        <Callout type="important" title="The golden rule">
          The if-clause <strong>never</strong> takes <em>will</em> or <em>would</em>. Real future &rarr; present simple in the if-clause; unreal &rarr; past or past perfect.
        </Callout>
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

      <section id="worked-examples" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Examples</h2>
        <Expandable title="Worked example — a mixed conditional passage" variant="exercise">
          <p><strong>Passage:</strong> <em>If United Nations &hellip;(stop) the war between two countries beforehand, so many children and the old would not have suffered from hunger and cold. If the situation continues the same, too many lives &hellip;(lose).</em></p>
          <p className="mt-3"><strong>Blank 1 &mdash; Third Conditional (past unfulfilled action):</strong> <em>had stopped</em>. The phrase &ldquo;would not have suffered&rdquo; in the main clause establishes this as a Type 3 conditional. It describes an imaginary past situation that never actually occurred. The formula strictly requires the Past Perfect tense (had + V3) inside the if-clause.</p>
          <p className="mt-3"><strong>Blank 2 &mdash; First Conditional in the passive (future probability):</strong> <em>will be lost</em>. The phrase &ldquo;If the situation continues&rdquo; uses the Present Simple, which sets up a Type 1 structure for a highly possible future outcome &mdash; the result clause requires will + base verb. Since lives cannot actively lose themselves, it must be passive: will be + the past participle <em>lost</em>.</p>
        </Expandable>
        <Expandable title="Worked example — Type 1 (real future)">
          <p><strong>Task:</strong> <em>If you &hellip;(not / hurry), you &hellip;(miss) the train.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>If you <strong>do not hurry</strong>, you <strong>will miss</strong> the train.</em></p>
          <p className="mt-3"><strong>Why:</strong> a possible future situation is a Type 1 conditional. The if-clause takes the present simple (<em>do not hurry</em>), and the main clause takes <em>will</em> + base verb.</p>
        </Expandable>
        <Expandable title="Worked example — Type 2 (imaginary present)">
          <p><strong>Task:</strong> <em>If I &hellip;(be) taller, I &hellip;(join) the basketball team.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>If I <strong>were</strong> taller, I <strong>would join</strong> the basketball team.</em></p>
          <p className="mt-3"><strong>Why:</strong> being taller is imaginary, so this is a Type 2 conditional. The if-clause uses the past simple &mdash; <em>were</em> for all subjects &mdash; and the main clause uses <em>would</em> + base verb.</p>
        </Expandable>
        <Expandable title="Worked example — Type 3 (unreal past)">
          <p><strong>Task:</strong> <em>If she &hellip;(take) the medicine, she &hellip;(recover) quickly.</em></p>
          <p className="mt-3"><strong>Answer:</strong> <em>If she <strong>had taken</strong> the medicine, she <strong>would have recovered</strong> quickly.</em></p>
          <p className="mt-3"><strong>Why:</strong> the action is in the unchangeable past, so it is a Type 3 conditional. The if-clause needs the past perfect (<em>had taken</em>) and the main clause needs <em>would have</em> + past participle.</p>
        </Expandable>
      </section>

      <section id="try-these" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Try These</h2>
        <ExerciseQa
          questions={[
            <span key="q1">If you study regularly, you ________ (pass) easily.</span>,
            <span key="q2">If I ________ (know) her number, I would call her.</span>,
            <span key="q3">If they had started early, they ________ (arrive) on time.</span>,
            <span key="q4">She would be happier if she ________ (live) near the sea.</span>,
            <span key="q5">If you ________ (mix) yellow and blue, you get green.</span>,
          ]}
          answers={[
            <span key="a1"><strong>will pass</strong> &mdash; Type 1: present simple if-clause, will + base verb in the main clause.</span>,
            <span key="a2"><strong>knew</strong> &mdash; Type 2: past simple in the if-clause.</span>,
            <span key="a3"><strong>would have arrived</strong> &mdash; Type 3: had + V3 in the if-clause, would have + V3 in the main clause.</span>,
            <span key="a4"><strong>lived</strong> &mdash; Type 2: imaginary present, past simple in the if-clause.</span>,
            <span key="a5"><strong>mix</strong> &mdash; Type 0: a general truth, present simple in both halves.</span>,
          ]}
        />
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
          mistake="If she had studied, she would pass."
          correction="If she had studied, she would have passed."
          example="A Type 3 if-clause (had + V3) needs 'would have + V3' in the main clause, not 'would + base verb'."
        />
        <MistakeCard
          mistake="If I was you, I would apologise."
          correction="If I were you, I would apologise."
          example="In imaginary situations (the subjunctive), use 'were' for every subject — including 'I'."
        />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          The if-clause never takes <em>will</em> or <em>would</em> &mdash; it takes the present simple (real) or the past/perfect (unreal). The main clause carries the modal: <em>will</em> for real future, <em>would</em> for unreal present, <em>would have</em> for unreal past.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
