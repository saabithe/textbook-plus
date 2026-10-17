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
    id: "pv1", type: "mcq",
    question: "\"The letter was written by her.\" The active form is:",
    options: ["She wrote the letter.", "She has written the letter.", "The letter wrote her.", "She is writing the letter."],
    answer: 0, explanation: "Active: subject + verb + object \u2192 Passive: object + was/were + past participle + by + subject.",
  },
  {
    id: "pv2", type: "mcq",
    question: "\"The building ______ being constructed since January.\" Choose the correct form:",
    options: ["is", "has been", "was", "were"],
    answer: 1, explanation: "Passive perfect continuous: has/have been + being + past participle.",
  },
  {
    id: "pv3", type: "fill-blank",
    question: "Convert to passive: \"They will announce the results tomorrow.\" \u2192 The results ______ announced tomorrow.",
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
  {
    id: "pv6", type: "mcq",
    question: "\"Hasan assisted Dr. Cronin to help the patients.\" The passive form is:",
    options: ["Dr. Cronin was assisted by Hasan to help the patients.", "Dr. Cronin is assisted by Hasan to help the patients.", "Dr. Cronin assisted Hasan to help the patients.", "Hasan was assisted by Dr. Cronin to help the patients."],
    answer: 0, explanation: "Simple past passive: was/were + past participle. The infinitive purpose clause (\u201cto help the patients\u201d) stays at the end.",
  },
  {
    id: "pv7", type: "mcq",
    question: "\"The teacher explained the lesson to the students.\" The passive form is:",
    options: ["The lesson is explained to the students by the teacher.", "The lesson was explained to the students by the teacher.", "The lesson has explained to the students by the teacher.", "The lesson explains to the students by the teacher."],
    answer: 1, explanation: "Simple past (\u201cexplained\u201d) \u2192 was + explained (V3). The \u201cto the students\u201d phrase can sit before or after the by-agent.",
  },
  {
    id: "pv8", type: "mcq",
    question: "\"The company launched a new product last week.\" The passive form is:",
    options: ["A new product is launched by the company last week.", "A new product was launched by the company last week.", "A new product has launched by the company last week.", "A new product launches by the company last week."],
    answer: 1, explanation: "\u201cLast week\u201d fixes the past: was + launched (V3), with the agent at the end.",
  },
  {
    id: "pv9", type: "mcq",
    question: "Which passive sentence contains an error?",
    options: [
      "My bike has been stolen.",
      "The report has been submitted on time.",
      "The letter has wrote by the manager.",
      "All the tickets have been sold.",
    ],
    answer: 2, explanation: "\u201cHas wrote\u201d is wrong \u2014 the passive needs been + past participle: \u201cThe letter has been written by the manager.\u201d",
  },
  {
    id: "pv10", type: "mcq",
    question: "Which sentence correctly uses the present continuous passive?",
    options: [
      "A new school is being built in our town.",
      "A new school is building in our town.",
      "A new school is been built in our town.",
      "A new school being built in our town.",
    ],
    answer: 0, explanation: "The present continuous passive is is/are + being + past participle: \u201cis being built\u201d. \u201cIs building\u201d is active, \u201cis been\u201d uses the wrong auxiliary form, and \u201cbeing built\u201d alone is missing the auxiliary verb.",
  },
  {
    id: "pv11", type: "mcq",
    question: "Rewrite in the passive: \u201cThey sent her an invitation.\u201d",
    options: [
      "She was sent an invitation.",
      "She is sent an invitation.",
      "Her was sent an invitation.",
      "An invitation was sent her by they.",
    ],
    answer: 0, explanation: "With two objects, the indirect object often becomes the subject: \u201cShe was sent an invitation\u201d (past passive: was + sent). The alternative \u201cAn invitation was sent to her\u201d is also correct.",
  },
  {
    id: "pv12", type: "mcq",
    question: "\"Open the door.\" Choose the correct passive form of this imperative.",
    options: ["The door is opened.", "Let the door be opened.", "The door was opened.", "The door opens."],
    answer: 1, explanation: "Imperative passive: Let + object + be + past participle.",
  },
  {
    id: "pv13", type: "fill-blank",
    question: "Fill in the passive: \"The road ________ (repair) at the moment.\"",
    answer: "is being repaired", accepted: ["is getting repaired"],
    explanation: "Present continuous passive: is/are + being + past participle.",
  },
  {
    id: "pv14", type: "mcq",
    question: "\"Did she write the letter?\" The passive question is:",
    options: ["Was the letter written by her?", "The letter was written by her?", "Did the letter written by her?", "Is the letter written by her?"],
    answer: 0, explanation: "Passive questions move the auxiliary to the front: Was + subject + past participle + by-agent?",
  },
  {
    id: "pv15", type: "mcq",
    question: "Cloze: \u201cThe bridge ________ in 1905, but it ________ repaired several times since then.\u201d",
    options: [
      "was built / has been",
      "is built / was",
      "has been built / is",
      "built / has been",
    ],
    answer: 0, explanation: "\u201cIn 1905\u201d fixes a finished past action \u2192 simple past passive (\u201cwas built\u201d). \u201cSince then\u201d links to the present \u2192 present perfect passive (\u201chas been repaired\u201d), so the two halves cannot be reversed.",
  },
  {
    id: "pv16", type: "mcq",
    question: "\"People speak English all over the world.\" The passive form is:",
    options: ["English is spoken all over the world.", "English was spoken all over the world.", "English speaks all over the world.", "English has been speaking all over the world."],
    answer: 0, explanation: "Simple present passive: is/are + past participle. The vague agent \u201cpeople\u201d is dropped.",
  },
  {
    id: "pv17", type: "fill-blank",
    question: "Fill in the passive: \"The results ________ (announce) tomorrow.\"",
    answer: "will be announced",
    explanation: "Future passive: will + be + past participle.",
  },
  {
    id: "pv18", type: "mcq",
    question: "\"The window got broken.\" This is an example of:",
    options: ["An active sentence", "The get-passive (informal)", "A future passive", "A grammatical error"],
    answer: 1, explanation: "\u201cGet + past participle\u201d is the informal get-passive, common in speech.",
  },
  {
    id: "pv19", type: "mcq",
    question: "\"She was given a prize.\" The active form is:",
    options: ["They gave her a prize.", "She gave a prize.", "A prize was given to them.", "They were given a prize."],
    answer: 0, explanation: "The indirect object \u201cshe\u201d was the passive subject; restore it as the object in the active voice.",
  },
  {
    id: "pv20", type: "mcq",
    question: "\"You must finish the homework tonight.\" The passive form is:",
    options: ["The homework must be finished tonight.", "The homework must finished tonight.", "The homework is must finished tonight.", "The homework must being finished tonight."],
    answer: 0, explanation: "Modal passive: modal + be + past participle.",
  },
  {
    id: "pv21", type: "fill-blank",
    question: "Fill in the passive: \"A new bridge ________ (build) last year.\"",
    answer: "was built",
    explanation: "Simple past passive: was/were + past participle. Base verb \u201cbuild\u201d \u2192 participle \u201cbuilt\u201d.",
  },
  {
    id: "pv22", type: "mcq",
    question: "\"Someone must have taken it.\" The passive form is:",
    options: ["It must have been taken.", "It must be taken.", "It must have taken.", "It was must taken."],
    answer: 0, explanation: "Modal perfect passive: must have been + past participle.",
  },
];

const SPECIAL_TABLE = [
  { cells: ["Imperative", "Let + object + be + V3", "Open the door. \u2192 Let the door be opened."] },
  { cells: ["Two objects", "Either object becomes the subject", "He gave me a book. \u2192 I was given a book. / A book was given to me."] },
  { cells: ["Negative", "'not' goes after the auxiliary", "She did not write it. \u2192 It was not written by her."] },
  { cells: ["Question", "Auxiliary before the subject", "Did she write it? \u2192 Was it written by her?"] },
  { cells: ["With a modal", "modal + be + V3", "You must finish it. \u2192 It must be finished."] },
  { cells: ["Modal perfect", "modal + have been + V3", "They must have taken it. \u2192 It must have been taken."] },
  { cells: ["Get-passive (informal)", "get + V3", "The window got broken."] },
];

export default function PassiveVoicePage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Passive voice</Highlight> is used when the focus is on the action, not on who did it.
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
            { cells: ["Future Perfect", "She will have written a letter.", "A letter will have been written by her."] },
            { cells: ["Modal", "She can write a letter.", "A letter can be written by her."] },
          ]}
        />
      </section>

      <section id="special-passives" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Special Passives</h2>
        <TableCard
          headers={["Type", "Rule", "Example"]}
          rows={SPECIAL_TABLE}
          caption="These are the transformations that most often carry extra marks in exams."
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

      <section id="worked-transformation" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Examples</h2>
        <Expandable title="Worked example — Hasan assisted Dr. Cronin" variant="exercise">
          <p><strong>Active:</strong> <em>Hasan assisted Dr. Cronin to help the patients.</em></p>
          <p className="mt-3"><strong>Passive:</strong> <em>Dr. Cronin was assisted by Hasan to help the patients.</em></p>
          <p className="mt-3"><strong>Why the sentence changed:</strong></p>
          <ul>
            <li><strong>Identify the core object &amp; subject:</strong> Hasan is the subject performing the action, and Dr. Cronin is the direct object receiving the action. The remaining phrase (&ldquo;to help the patients&rdquo;) is an infinitive purpose clause that stays at the end.</li>
            <li><strong>Shift the object to the front:</strong> Dr. Cronin moves to the beginning of the sentence as the new grammatical subject.</li>
            <li><strong>Tense transformation:</strong> the original verb &ldquo;assisted&rdquo; is in the Simple Past tense. In the passive voice, the Simple Past is formed using was/were + past participle (V3). Since Dr. Cronin is singular, we use &ldquo;was assisted&rdquo;.</li>
            <li><strong>Add the agent:</strong> the original subject is placed at the end preceded by &ldquo;by&rdquo; (&ldquo;by Hasan&rdquo;).</li>
          </ul>
          <p className="mt-3"><strong>Formula:</strong> Subject + was/were + past participle + by + agent.</p>
        </Expandable>
        <Expandable title="Worked example — two objects (direct + indirect)">
          <p><strong>Active:</strong> <em>The teacher gave the students a prize.</em></p>
          <p className="mt-3"><strong>Passive (indirect object first):</strong> <em>The students were given a prize by the teacher.</em></p>
          <p className="mt-3"><strong>Passive (direct object first):</strong> <em>A prize was given to the students by the teacher.</em></p>
          <p className="mt-3"><strong>Why:</strong> with two objects, either one can become the subject. When the direct object leads, keep the preposition <em>to</em> before the remaining object.</p>
        </Expandable>
        <Expandable title="Worked example — an imperative">
          <p><strong>Active (command):</strong> <em>Switch off the lights.</em></p>
          <p className="mt-3"><strong>Passive:</strong> <em>Let the lights be switched off.</em></p>
          <p className="mt-3"><strong>Why:</strong> a command has no subject, so the passive uses the fixed pattern <em>Let + object + be + past participle</em>.</p>
        </Expandable>
        <Expandable title="Worked example — a question">
          <p><strong>Active question:</strong> <em>Did the committee approve the plan?</em></p>
          <p className="mt-3"><strong>Passive question:</strong> <em>Was the plan approved by the committee?</em></p>
          <p className="mt-3"><strong>Why:</strong> form the passive as usual (was + approved), then put the auxiliary <em>was</em> before the subject to keep it a question.</p>
        </Expandable>
      </section>

      <section id="worked-questions" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Try These</h2>
        <ExerciseQa
          questions={[
            <span key="q1">Active Voice: The teacher explained the lesson to the students. &mdash; Write the Passive Voice.</span>,
            <span key="q2">Active Voice: The company launched a new product last week. &mdash; Write the Passive Voice.</span>,
            <span key="q3">Active Voice: Someone has broken the window. &mdash; Write the Passive Voice.</span>,
            <span key="q4">Active Voice: They are repairing the road. &mdash; Write the Passive Voice.</span>,
            <span key="q5">Active Voice: You must submit the report today. &mdash; Write the Passive Voice.</span>,
          ]}
          answers={[
            <span key="a1"><strong>The lesson was explained to the students by the teacher.</strong> (Alternative: The lesson was explained by the teacher to the students.)</span>,
            <span key="a2"><strong>A new product was launched by the company last week.</strong> (Alternative: A new product was launched last week by the company.)</span>,
            <span key="a3"><strong>The window has been broken.</strong> (Present perfect passive: has/have + been + V3. The unknown agent &ldquo;someone&rdquo; is dropped.)</span>,
            <span key="a4"><strong>The road is being repaired.</strong> (Present continuous passive: is/are + being + V3.)</span>,
            <span key="a5"><strong>The report must be submitted today.</strong> (Modal passive: modal + be + V3.)</span>,
          ]}
        />
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
        <MistakeCard
          mistake="The letter was written from her."
          correction="The letter was written by her."
          example="The agent in a passive sentence is introduced by 'by', never 'from'."
        />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Passive voice = <strong>object + correct form of &lsquo;to be&rsquo; + past participle</strong>. Use it when the agent is unknown, unimportant, or when you want to focus on the action itself. Always match the tense of &lsquo;to be&rsquo; to the original sentence.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
