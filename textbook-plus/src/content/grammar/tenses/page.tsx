"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "t1", type: "mcq",
    question: "\"She ________ to school every day.\" Choose the correct form:",
    options: ["go", "goes", "going", "gone"],
    answer: 1, explanation: "\"She\" is third-person singular, so the simple present verb takes an -s ending: goes.",
  },
  {
    id: "t2", type: "mcq",
    question: "\"They ________ dinner when the phone rang.\" Choose the correct form:",
    options: ["have", "had", "were having", "have had"],
    answer: 2, explanation: "An action in progress interrupted by another action uses the past continuous (were having) + past simple (rang).",
  },
  {
    id: "t3", type: "fill-blank",
    question: "Fill in: \"I ________ (live) here since 2015.\"",
    answer: "have lived", explanation: "\"Since 2015\" indicates a period continuing to the present — use present perfect.",
  },
  {
    id: "t4", type: "mcq",
    question: "\"By the time we arrived, the train ________ already left.\" Choose the correct form:",
    options: ["has", "had", "was having", "having"],
    answer: 1, explanation: "An action completed before another past action uses the past perfect (had left).",
  },
  {
    id: "t5", type: "mcq",
    question: "\"She will have been working here for ten years by next March.\" This is:",
    options: ["Future simple", "Future continuous", "Future perfect continuous", "Past perfect"],
    answer: 2, explanation: "An action that will have been ongoing up to a specific future point uses the future perfect continuous.",
  },
];

export default function TensesPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          Tenses tell us <em>when</em> an action takes place — past, present, or future — and <em>how</em> it takes place — once, ongoing, or completed. Mastering tenses is essential for clear, accurate writing and speaking.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Tense Chart</h2>
        <TableCard
          headers={["Tense", "Affirmative", "Negative", "Question"]}
          rows={[
            { cells: ["Simple Present", "She goes to school.", "She does not go.", "Does she go?"] },
            { cells: ["Present Continuous", "She is going to school.", "She is not going.", "Is she going?"] },
            { cells: ["Present Perfect", "She has gone to school.", "She has not gone.", "Has she gone?"] },
            { cells: ["Present Perfect Continuous", "She has been going.", "She has not been going.", "Has she been going?"] },
            { cells: ["Simple Past", "She went to school.", "She did not go.", "Did she go?"] },
            { cells: ["Past Continuous", "She was going to school.", "She was not going.", "Was she going?"] },
            { cells: ["Past Perfect", "She had gone to school.", "She had not gone.", "Had she gone?"] },
            { cells: ["Past Perfect Continuous", "She had been going.", "She had not been going.", "Had she been going?"] },
            { cells: ["Simple Future", "She will go to school.", "She will not go.", "Will she go?"] },
            { cells: ["Future Continuous", "She will be going.", "She will not be going.", "Will she be going?"] },
            { cells: ["Future Perfect", "She will have gone.", "She will not have gone.", "Will she have gone?"] },
            { cells: ["Future Perfect Continuous", "She will have been going.", "She will not have been going.", "Will she have been going?"] },
          ]}
          caption="12 English tenses — affirmative, negative and question forms"
        />
      </section>

      <section id="when-to-use" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">When to Use Each Tense</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><Highlight color="yellow">Simple Present</Highlight> — habits, routines, facts, timetables. <em>She reads every evening.</em></p>
          <p><Highlight color="blue">Present Continuous</Highlight> — actions happening now or temporary. <em>She is reading a novel.</em></p>
          <p><Highlight color="green">Present Perfect</Highlight> — completed actions with present relevance; with <em>since</em> / <em>for</em>. <em>She has read three books this week.</em></p>
          <p><Highlight color="pink">Present Perfect Continuous</Highlight> — ongoing actions emphasising duration. <em>She has been reading for two hours.</em></p>
          <p><Highlight color="yellow">Simple Past</Highlight> — completed actions at a definite past time. <em>She read the book yesterday.</em></p>
          <p><Highlight color="blue">Past Continuous</Highlight> — actions in progress at a past moment, or interrupted actions. <em>She was reading when I called.</em></p>
          <p><Highlight color="green">Past Perfect</Highlight> — an action completed before another past action. <em>She had finished reading before dinner.</em></p>
          <p><Highlight color="pink">Past Perfect Continuous</Highlight> — duration of an action before another past event. <em>She had been reading for hours before she fell asleep.</em></p>
          <p><Highlight color="yellow">Simple Future</Highlight> — predictions, plans, promises. <em>She will read the report tomorrow.</em></p>
          <p><Highlight color="blue">Future Continuous</Highlight> — actions in progress at a future time. <em>She will be reading at 8 pm.</em></p>
          <p><Highlight color="green">Future Perfect</Highlight> — actions completed before a future time. <em>She will have finished by Friday.</em></p>
          <p><Highlight color="pink">Future Perfect Continuous</Highlight> — duration of an action up to a future point. <em>She will have been reading for a year by June.</em></p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="I am knowing the answer."
          correction="I know the answer."
          example="State verbs (know, believe, want) are not used in continuous form."
        />
        <MistakeCard
          mistake="She has been went to school."
          correction="She has gone to school."
          example="'Been' is never followed by a past simple form. Use 'been + past participle' (has gone) or 'been + verb-ing' (has been going)."
        />
        <MistakeCard
          mistake="He did not went home."
          correction="He did not go home."
          example="After 'did not', use the base form of the verb — not the past tense."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Tenses tell <em>when</em> and <em>how</em> an action happens. Pay special attention to auxiliary verbs (has/had/will), subject-verb agreement, and which tense to use after time markers like <em>since</em>, <em>for</em>, <em>already</em>, and <em>yet</em>.
        </KeyPoint>
      </section>
    </>
  );
}