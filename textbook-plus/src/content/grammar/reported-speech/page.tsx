"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "rs1", type: "mcq",
    question: "Direct: He said, \u201cI am tired.\u201d \u2014 Reported: He said that he ______ tired.",
    options: ["is", "was", "has been", "will be"],
    answer: 1,
    explanation: "\u201cam / is\u201d changes to \u201cwas\u201d (present \u2192 past) in reported speech.",
  },
  {
    id: "rs2", type: "mcq",
    question: "Direct: She said, \u201cI saw him yesterday.\u201d \u2014 Reported: She said that she ______ him the previous day.",
    options: ["saw", "had seen", "has seen", "was seeing"],
    answer: 1,
    explanation: "Simple past (V2) becomes past perfect (had + V3).",
  },
  {
    id: "rs3", type: "fill-blank",
    question: "Direct: He said, \u201cI will help you.\u201d \u2014 Reported: He said that he ______ help me.",
    answer: "would",
    explanation: "\u201cwill\u201d changes to \u201cwould\u201d (future \u2192 conditional).",
  },
  {
    id: "rs4", type: "mcq",
    question: "Direct: \u201cWhere do you live?\u201d \u2014 Reported: He asked me where I ______.",
    options: ["do live", "live", "lived", "did live"],
    answer: 2,
    explanation: "In a reported wh-question, the verb back-shifts and the word order becomes statement order.",
  },
  {
    id: "rs5", type: "mcq",
    question: "Direct: \u201cAre you coming?\u201d \u2014 Reported: She asked me ______ I was coming.",
    options: ["that", "if", "to", "which"],
    answer: 1,
    explanation: "A yes/no question is reported with \u201cif\u201d or \u201cwhether\u201d.",
  },
  {
    id: "rs6", type: "mcq",
    question: "Direct: \u201cWill you help me?\u201d \u2014 Reported: She asked if I ______ help her.",
    options: ["will", "would", "would have", "had"],
    answer: 1,
    explanation: "\u201cwill\u201d back-shifts to \u201cwould\u201d even inside a reported question.",
  },
  {
    id: "rs7", type: "mcq",
    question: "Direct: \u201cClose the door.\u201d \u2014 Reported: She ______ me to close the door.",
    options: ["said", "told", "spoke", "replied"],
    answer: 1,
    explanation: "Commands use \u201ctold / ordered / asked + object + to + verb\u201d. \u201cSaid\u201d cannot take an object here.",
  },
  {
    id: "rs8", type: "mcq",
    question: "Direct: She said, \u201cI will meet you tomorrow.\u201d \u2014 Reported: She said that she would meet me ______.",
    options: ["tomorrow", "the next day", "the previous day", "that day"],
    answer: 1,
    explanation: "The time word must change too: \u201ctomorrow\u201d \u2192 \u201cthe next day\u201d.",
  },
  {
    id: "rs9", type: "mcq",
    question: "Direct: Guard: \u201cDon\u2019t touch the electric fence!\u201d \u2014 Reported: The guard ______ the children not to touch the electric fence.",
    options: ["said", "warned", "replied", "spoke"],
    answer: 1,
    explanation: "A prohibition is reported with \u201cwarned + object + not to + verb\u201d.",
  },
];

const OVERVIEW = [
  { cells: ["Statement", "said / told", "that", "He said that he was tired."] },
  { cells: ["Question", "asked / enquired", "if / whether, or the wh-word", "She asked if I was ready."] },
  { cells: ["Command, request, advice or warning", "ordered / requested / advised / warned", "to / not to", "He ordered me to stop."] },
];

const PRONOUNS = [
  { cells: ["I", "he / she"] },
  { cells: ["me", "him / her"] },
  { cells: ["my", "his / her"] },
  { cells: ["you", "he / she (the person addressed)"] },
  { cells: ["your", "his / her"] },
  { cells: ["we", "they"] },
  { cells: ["our", "their"] },
];

const TIME_PLACE = [
  { cells: ["today", "that day"] },
  { cells: ["tomorrow", "the next day"] },
  { cells: ["yesterday", "the previous day"] },
  { cells: ["now", "then"] },
  { cells: ["this", "that"] },
  { cells: ["these", "those"] },
  { cells: ["here", "there"] },
  { cells: ["ago", "before"] },
];

const TENSE_SHIFT = [
  { cells: ["Simple Present (V1)", "Simple Past (V2)"] },
  { cells: ["Present Continuous (am / is / are + V-ing)", "Past Continuous (was / were + V-ing)"] },
  { cells: ["Present Perfect (has / have + V3)", "Past Perfect (had + V3)"] },
  { cells: ["Simple Past (V2)", "Past Perfect (had + V3)"] },
  { cells: ["Past Continuous (was / were + V-ing)", "Past Perfect Continuous (had been + V-ing)"] },
];

const AUXILIARIES = [
  { cells: ["am / is", "was"] },
  { cells: ["are", "were"] },
  { cells: ["do / does", "did"] },
  { cells: ["has / have", "had"] },
  { cells: ["was / were", "had been"] },
  { cells: ["did + V1", "had + V3"] },
  { cells: ["can", "could"] },
  { cells: ["may", "might"] },
  { cells: ["shall", "should"] },
  { cells: ["will", "would"] },
  { cells: ["must", "had to"] },
];

const WH_QUESTIONS = [
  { cells: ["\u201cWhere do you live?\u201d", "He asked me where I lived."] },
  { cells: ["\u201cWhat are you doing?\u201d", "She asked what I was doing."] },
  { cells: ["\u201cWhy did you leave early?\u201d", "He asked why I had left early."] },
  { cells: ["\u201cWhich book do you want?\u201d", "He asked which book I wanted."] },
  { cells: ["\u201cWho is at the door?\u201d", "She asked who was at the door."] },
  { cells: ["\u201cWhen will you return?\u201d", "He asked when I would return."] },
  { cells: ["\u201cHow much does it cost?\u201d", "She asked how much it cost."] },
  { cells: ["\u201cHow many students were absent?\u201d", "He asked how many students had been absent."] },
  { cells: ["\u201cHow old are you?\u201d", "She asked how old I was."] },
];

const YESNO_QUESTIONS = [
  { cells: ["\u201cDo you like coffee?\u201d", "She asked if I liked coffee."] },
  { cells: ["\u201cHave you finished?\u201d", "He asked whether I had finished."] },
  { cells: ["\u201cWill you help me?\u201d", "She asked if I would help her."] },
  { cells: ["\u201cCan you drive?\u201d", "He asked whether I could drive."] },
  { cells: ["\u201cAre you a student?\u201d", "She asked if I was a student."] },
  { cells: ["\u201cDid you call him?\u201d", "He asked whether I had called him."] },
  { cells: ["\u201cMust I wait here?\u201d", "She asked if she had to wait there."] },
];

const STATEMENT_VARIETIES = [
  { cells: ["A \u2014 Simple statement", "Young Seagull: \u201cI don\u2019t think I can fly.\u201d", "Young Seagull said that he didn\u2019t think he could fly."] },
  { cells: ["B \u2014 Past tense \u2192 past perfect", "Greta: \u201cI thought you could make real peaches.\u201d", "Greta told her father that she had thought he could make real peaches."] },
  { cells: ["C \u2014 Replying \u201cNo\u201d / \u201cYes\u201d and adding a clause", "Father: \u201cNo. You have to go to the store for those.\u201d", "Father said that he couldn\u2019t and added that she had to go to the store for those."] },
  { cells: ["D \u2014 \u201ctold\u201d + a direct object", "Gupta: \u201cMaggie, I will use this shilling to buy flowers.\u201d", "Gupta told Maggie that he would use that shilling to buy flowers."] },
];

const POLITENESS = [
  { cells: ["Maggie: \u201cExcuse me, are you a vegetarian?\u201d", "Maggie asked him to excuse her and asked if he was a vegetarian."] },
];

const COMMAND_VERBS = [
  { cells: ["Order", "ordered", "ordered + object + to + V1"] },
  { cells: ["Request", "requested", "requested + object + to + V1"] },
  { cells: ["Advice", "advised", "advised + object + to / not to + V1"] },
  { cells: ["Warning", "warned", "warned + object + not to + V1"] },
];

const COMMAND_EXAMPLES = [
  { cells: ["Order", "Officer: \u201cHalt and show your ID.\u201d", "The officer ordered him to halt and show his ID."] },
  { cells: ["Order", "Mother: \u201cClean your room right now!\u201d", "The mother ordered her son to clean his room right then."] },
  { cells: ["Request", "Passenger: \u201cCould you please help me with this suitcase?\u201d", "The passenger requested the stranger to help him with that suitcase."] },
  { cells: ["Request", "Librarian: \u201cPlease maintain silence in the hall.\u201d", "The librarian requested the students to maintain silence in the hall."] },
  { cells: ["Advice", "Doctor: \u201cTake this medicine twice a day.\u201d", "The doctor advised the patient to take that medicine twice a day."] },
  { cells: ["Advice", "Friend: \u201cDon\u2019t rush into decisions without thinking.\u201d", "The friend advised him not to rush into decisions without thinking."] },
  { cells: ["Warning", "Guard: \u201cDon\u2019t touch the electric fence!\u201d", "The guard warned the children not to touch the electric fence."] },
];

export default function ReportedSpeechPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Reported speech</Highlight> (also called indirect speech) reports what someone said without using their exact words. The tense, pronouns and time or place words change so that the meaning stays true from the reporter&rsquo;s point of view. Sentences are reported in three ways &mdash; statements, questions, and commands or requests.
        </Callout>
        <TableCard
          title="The three types at a glance"
          headers={["Sentence type", "Reporting verb", "Linker", "Example"]}
          rows={OVERVIEW}
        />
      </section>

      <section id="framework" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Step-by-Step Framework</h2>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mb-2">
          Whatever the sentence, convert it the same way every time. Work through these seven steps in order.
        </p>
        <ProcessCard
          title="How to build reported speech"
          steps={[
            { label: "Identify the type of sentence", description: "Is it a statement, a question, or a command / request / advice / warning? The type decides everything that follows." },
            { label: "Remove the quotation marks and the comma", description: "Drop the inverted commas and the comma after the reporting verb." },
            { label: "Choose the reporting verb", description: "said (statements), asked / enquired (questions), ordered / requested / advised / warned (commands and requests)." },
            { label: "Add the linker", description: "that (statements); if / whether or the wh-word (questions); to / not to (commands)." },
            { label: "Back-shift the tense", description: "V1 \u2192 V2, and V2 \u2192 had + V3. Keep the tense unchanged only for universal truths and still-true facts." },
            { label: "Change the pronouns, time and place words", description: "I \u2192 he / she, we \u2192 they; today \u2192 that day, here \u2192 there." },
            { label: "Check the finished sentence", description: "Use statement word order, remove the question mark, and end with a full stop." },
          ]}
        />
      </section>

      <section id="word-changes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">What Changes</h2>
        <TableCard
          title="Pronouns"
          headers={["Direct", "Reported"]}
          rows={PRONOUNS}
          caption="Pronouns change to match the reporter, not the original speaker."
        />
        <TableCard
          title="Time & place words"
          headers={["Direct", "Reported"]}
          rows={TIME_PLACE}
          caption="Words pointing to \u201chere and now\u201d shift to \u201cthere and then\u201d."
        />
        <TableCard
          title="Tense back-shift"
          headers={["Direct", "Reported"]}
          rows={TENSE_SHIFT}
          caption="Every tense moves one step into the past."
        />
        <TableCard
          title="Auxiliaries & modals"
          headers={["Direct", "Reported"]}
          rows={AUXILIARIES}
          caption="The verb or auxiliary also shifts: am / is \u2192 was, must \u2192 had to."
        />
        <div className="mt-6 space-y-4">
          <Callout type="important" title="The back-shift chain">
            V1 &rarr; V2 &nbsp;(<em>go &rarr; went</em>); &nbsp;V2 &rarr; had + V3 &nbsp;(<em>went &rarr; had gone</em>); &nbsp;did + V1 &rarr; had + V3 &nbsp;(<em>did become &rarr; had become</em>).
          </Callout>
          <Callout type="note">
            <strong>No back-shift needed</strong> when the statement is still true: <em>He said the Earth is round.</em> The past simple may also stay as past simple instead of becoming past perfect.
          </Callout>
        </div>
      </section>

      <section id="questions" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Type 1 &mdash; Questions</h2>
        <Callout type="note">
          Questions are reported in two ways. <Highlight color="yellow">Wh-questions</Highlight> keep the question word; <Highlight color="blue">Yes/No questions</Highlight> take <em>if</em> or <em>whether</em>. In both cases the word order becomes <strong>statement order</strong> (subject + verb) and there is <strong>no question mark</strong>.
        </Callout>

        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-6 mb-1">
          <strong>Wh-questions</strong> begin with a question word &mdash; <em>where, what, why, which, who, when, how much, how many, how old</em> &mdash; and the question word is kept.
        </p>
        <TableCard headers={["Direct Speech", "Reported Speech"]} rows={WH_QUESTIONS} />

        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-8 mb-1">
          <strong>Yes/No questions</strong> begin with an auxiliary &mdash; <em>am, is, are, was, were, do, does, did, has, have, had, will, would, shall, should, can, could, may, might, must, need, dare, ought to, used to</em> &mdash; and are linked with <em>if</em> or <em>whether</em>.
        </p>
        <TableCard headers={["Direct Speech", "Reported Speech"]} rows={YESNO_QUESTIONS} />

        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-8 mb-1">
          <strong>Special case &mdash; politeness words.</strong> A phrase like <em>Excuse me</em> is not part of the question. It is a polite request, so it becomes its own clause (<em>asked &hellip; to excuse</em>) joined to the reported question by <em>and</em>.
        </p>
        <TableCard headers={["Direct Speech", "Reported Speech"]} rows={POLITENESS} />
      </section>

      <section id="statements" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Type 2 &mdash; Statements</h2>
        <Callout type="important" title="Core formula">
          <strong>Speaker + said / told / replied + (that) + Subject + Converted Verb</strong> &mdash; use <em>that</em> to join the clauses, back-shift the tense, and change the pronouns and time/place words.
        </Callout>
        <TableCard
          title="Varieties of statements"
          headers={["Variety", "Direct Speech", "Reported Speech"]}
          rows={STATEMENT_VARIETIES}
          caption="The formula never changes — only the reporting verb and the details of the sentence do."
        />
      </section>

      <section id="imperatives" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Type 3 &mdash; Commands, Requests, Advice &amp; Warnings</h2>
        <Callout type="note">
          Commands and requests are reported with the <Highlight color="green">to-infinitive</Highlight>, and negative ones with <Highlight color="pink">not to</Highlight>. The reporting verb (<em>ordered, requested, advised, warned</em>) tells the reader what kind of instruction it was.
        </Callout>
        <TableCard
          title="Reporting verbs"
          headers={["Type", "Reporting verb", "Pattern"]}
          rows={COMMAND_VERBS}
        />
        <TableCard
          title="Examples"
          headers={["Type", "Direct Speech", "Reported Speech"]}
          rows={COMMAND_EXAMPLES}
          caption="Every example follows the same shape: reporting verb + object + to / not to + verb."
        />
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
        <MistakeCard
          mistake="The doctor advised him take the medicine."
          correction="The doctor advised him to take the medicine."
          example="Reported commands and advice always take 'to' before the verb."
        />
        <MistakeCard
          mistake="She asked me that whether I was ready."
          correction="She asked me whether I was ready."
          example="Do not use 'that' together with 'if / whether' — one linker is enough."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          First decide the <em>type</em>: statements join with <em>that</em>, questions with <em>if / whether</em> or the wh-word, and commands with <em>to / not to</em>. Then back-shift the tense, change the pronouns, and change the time and place words. Reported questions always use statement word order &mdash; and no question mark.
        </KeyPoint>
      </section>
    </>
  );
}
