"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "rs1", type: "mcq",
    question: "Direct: He said, \"I am tired.\" Reported: He said that he ______ tired.",
    options: ["is", "was", "has been", "will be"],
    answer: 1, explanation: "\"Am\" changes to \"was\" (present → past) when converting to reported speech.",
  },
  {
    id: "rs2", type: "mcq",
    question: "Direct: She said, \"I saw him yesterday.\" Reported: She said that she ______ him the day before.",
    options: ["saw", "had seen", "has seen", "was seeing"],
    answer: 1, explanation: "Past simple becomes past perfect in reported speech.",
  },
  {
    id: "rs3", type: "fill-blank",
    question: "Direct: He said, \"I will help you.\" Reported: He said that he ______ help me.",
    answer: "would", explanation: "\"Will\" changes to \"would\" in reported speech (future → conditional).",
  },
  {
    id: "rs4", type: "mcq",
    question: "Direct: She said, \"I have finished.\" Reported: She said that she ______ finished.",
    options: ["has", "had", "have", "was having"],
    answer: 1, explanation: "\"Have finished\" (present perfect) becomes \"had finished\" (past perfect) in reported speech.",
  },
  {
    id: "rs5", type: "mcq",
    question: "\"I don't remember\" — reported as a statement becomes:",
    options: [
      "He said that he doesn't remember",
      "He said that he didn't remember",
      "He said that he hadn't remembered",
      "He said that he not remember",
    ],
    answer: 1, explanation: "The present simple \"don't remember\" changes to past simple \"didn't remember\" in reported speech.",
  },
];

export default function ReportedSpeechPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Reported speech</Highlight> (also called indirect speech) is how we report what someone else said without using their exact words. The tense, pronouns, and time expressions often shift.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Rules</h2>
        <TableCard
          headers={["Reporting verb", "Tense change", "Pronoun change", "Time/Place change"]}
          rows={[
            { cells: ["said", "→ back-shift (see table below)", "I → he/she, my → his/her", "here → there, now → then"] },
            { cells: ["told", "same as 'said' (requires object)", "we → they, our → their", "today → that day, tomorrow → the next day"] },
            { cells: ["asked (questions)", "same back-shift rules", "same changes", "yesterday → the day before"] },
          ]}
          caption="Core changes when converting to reported speech"
        />
      </section>

      <section id="tense-shifts" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Tense Shifts</h2>
        <TableCard
          headers={["Direct Speech", "Reported Speech"]}
          rows={[
            { cells: ["Simple Present (I go)", "Simple Past (he went)"] },
            { cells: ["Present Continuous (I am going)", "Past Continuous (he was going)"] },
            { cells: ["Present Perfect (I have gone)", "Past Perfect (he had gone)"] },
            { cells: ["Simple Past (I went)", "Past Perfect (he had gone)"] },
            { cells: ["Will (I will go)", "Would (he would go)"] },
            { cells: ["Can (I can go)", "Could (he could go)"] },
            { cells: ["May (I may go)", "Might (he might go)"] },
          ]}
          caption="Back-shift rule: every tense moves one step into the past"
        />
        <div className="mt-6">
          <Callout type="important">
            <strong>No back-shift needed</strong> when the statement is still true: <em>He said the Earth is round.</em> (True now → no change.) Also, the past simple can stay as past simple or change to past perfect.
          </Callout>
        </div>
      </section>

      <section id="questions-and-commands" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Questions &amp; Commands</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Yes/No questions</strong> use <Highlight color="blue">if / whether</Highlight>:</p>
          <p className="ml-4">Direct: She said, &ldquo;Do you like tea?&rdquo;</p>
          <p className="ml-4">Reported: She asked me <Highlight color="blue">if</Highlight> I liked tea.</p>
          <p className="mt-3"><strong>Wh-questions</strong> keep the question word:</p>
          <p className="ml-4">Direct: He said, &ldquo;Where do you live?&rdquo;</p>
          <p className="ml-4">Reported: He asked me <Highlight color="yellow">where</Highlight> I lived.</p>
          <p className="mt-3"><strong>Commands</strong> use <Highlight color="green">to + infinitive</Highlight>:</p>
          <p className="ml-4">Direct: She said, &ldquo;Close the door.&rdquo;</p>
          <p className="ml-4">Reported: She told me <Highlight color="green">to close</Highlight> the door.</p>
          <p className="mt-3"><strong>Negative commands</strong> use <Highlight color="pink">not to + infinitive</Highlight>:</p>
          <p className="ml-4">Direct: He said, &ldquo;Don&rsquo;t touch that.&rdquo;</p>
          <p className="ml-4">Reported: He told me <Highlight color="pink">not to touch</Highlight> that.</p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="He said me that he was busy."
          correction="He told me that he was busy."
          example="'Said' is not followed by an indirect object. Use 'told + object' or 'said + to + object'."
        />
        <MistakeCard
          mistake="She asked where do I live."
          correction="She asked where I lived."
          example="Reported questions do not use question word order — use statement order after wh-words."
        />
        <MistakeCard
          mistake="He said that he will come tomorrow."
          correction="He said that he would come the next day."
          example="Both the verb and the time expression must shift: will → would, tomorrow → the next day."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Always back-shift the tense, change pronouns, and adjust time/place expressions. For questions, use <em>if / whether</em> for yes/no and the wh-word for others — but remember reported questions use <strong>statement word order</strong>, not question word order.
        </KeyPoint>
      </section>
    </>
  );
}