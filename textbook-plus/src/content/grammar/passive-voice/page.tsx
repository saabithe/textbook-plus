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
    question: "\"The letter was written by her.\" The active form is:",
    options: ["She wrote the letter.", "She has written the letter.", "The letter wrote her.", "She is writing the letter."],
    answer: 0, explanation: "Active: subject + verb + object → Passive: object + was/were + past participle + by + subject.",
  },
  {
    id: "pv2", type: "mcq",
    question: "\"The building ______ being constructed since January.\" Choose the correct form:",
    options: ["is", "has been", "was", "were"],
    answer: 1, explanation: "Passive perfect continuous: has/have been + being + past participle.",
  },
  {
    id: "pv3", type: "fill-blank",
    question: "Convert to passive: \"They will announce the results tomorrow.\" → The results ______ announced tomorrow.",
    answer: "will be", explanation: "Future passive: will + be + past participle.",
  },
  {
    id: "pv4", type: "mcq",
    question: "The 'by' phrase in a passive sentence is called the:",
    options: ["Subject phrase", "By-agent", "Passive complement", "Object phrase"],
    answer: 1, explanation: "The 'by-agent' identifies who performed the action. It is often omitted when the agent is unknown, unimportant, or obvious.",
  },
  {
    id: "pv5", type: "mcq",
    question: "\"The window was broken.\" This passive sentence has no by-agent because:",
    options: [
      "The window broke itself",
      "The agent is unknown or unimportant",
      "The sentence is grammatically wrong",
      "Passive sentences never include agents",
    ],
    answer: 1, explanation: "We omit the by-agent when the agent is unknown (we don't know who broke the window) or unimportant (it doesn't matter who did it).",
  },
];

export default function PassiveVoicePage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Passive voice</Highlight> is used when the focus is on the action, not the person who did it. The object of the active sentence becomes the subject of the passive sentence.
        </Callout>
      </section>

      <section id="structure" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Structure</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Active:</strong> Subject + Verb + Object</p>
          <p><strong>Passive:</strong> Object + <Highlight color="blue">to be (conjugated)</Highlight> + <Highlight color="green">past participle</Highlight> + (by + agent)</p>
          <p className="mt-3">The form of <Highlight color="blue">to be</Highlight> must match the tense of the active sentence:</p>
        </div>
        <TableCard
          headers={["Tense", "Active", "Passive"]}
          rows={[
            { cells: ["Simple Present", "She writes a letter.", "A letter is written by her."] },
            { cells: ["Present Continuous", "She is writing a letter.", "A letter is being written by her."] },
            { cells: ["Present Perfect", "She has written a letter.", "A letter has been written by her."] },
            { cells: ["Simple Past", "She wrote a letter.", "A letter was written by her."] },
            { cells: ["Past Continuous", "She was writing a letter.", "A letter was being written by her."] },
            { cells: ["Past Perfect", "She had written a letter.", "A letter had been written by her."] },
            { cells: ["Simple Future", "She will write a letter.", "A letter will be written by her."] },
            { cells: ["Modal", "She can write a letter.", "A letter can be written by her."] },
          ]}
        />
      </section>

      <section id="when-to-use" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">When to Use Passive Voice</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Agent unknown:</strong> <em>The window was broken.</em> (We don&rsquo;t know who did it.)</p>
          <p><strong>Agent unimportant:</strong> <em>The road is being repaired.</em> (By whom is irrelevant.)</p>
          <p><strong>Focus on the object/action:</strong> <em>The novel was published in 1950.</em> (The date matters, not the publisher.)</p>
          <p><strong>Formal / scientific writing:</strong> <em>The experiment was conducted over three months.</em></p>
          <p><strong>To be diplomatic:</strong> <em>Mistakes were made.</em> (Avoids pointing fingers.)</p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="The book was wrote by her."
          correction="The book was written by her."
          example="'Wrote' is the past simple — use the past participle 'written' in passive voice."
        />
        <MistakeCard
          mistake="The homework was been done."
          correction="The homework was done."
          example="'Been' is only used in passive perfect forms: has/have been + past participle, not was been + past participle."
        />
        <MistakeCard
          mistake="The ball is hit by him yesterday."
          correction="The ball was hit by him yesterday."
          example="'Yesterday' signals past tense — use 'was' not 'is'."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Passive voice = <strong>object + correct form of &lsquo;to be&rsquo; + past participle</strong>. Use it when the agent is unknown, unimportant, or when you want to focus on the action itself. Always match the tense of &lsquo;to be&rsquo; to the original sentence.
        </KeyPoint>
      </section>
    </>
  );
}