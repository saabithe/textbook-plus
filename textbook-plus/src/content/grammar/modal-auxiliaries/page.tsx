"use client";

import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarSection } from "@/components/grammar/GrammarSection";
import { GrammarTopicLayout } from "@/components/grammar/GrammarTopicLayout";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "ma1", type: "mcq",
    question: "\"She ________ speak three languages fluently.\" Which modal expresses ability?",
    options: ["must", "can", "should", "may"],
    answer: 1, explanation: "\"Can\" expresses ability. \"She can speak three languages\" means she has the ability to.",
  },
  {
    id: "ma2", type: "mcq",
    question: "\"You ________ wear a helmet while riding.\" Which modal expresses obligation?",
    options: ["might", "could", "must", "would"],
    answer: 2, explanation: "\"Must\" expresses strong obligation or necessity — helmets are mandatory for safety.",
  },
  {
    id: "ma3", type: "fill-blank",
    question: "Fill in: \"______ you mind closing the window?\" (polite request)",
    answer: "Would", explanation: "\"Would you mind...\" is a standard polite request form.",
  },
  {
    id: "ma4", type: "mcq",
    question: "\"It ________ rain tomorrow. Take an umbrella.\" Which modal expresses possibility?",
    options: ["must", "shall", "may", "need"],
    answer: 2, explanation: "\"May\" expresses possibility — there is a chance of rain.",
  },
  {
    id: "ma5", type: "mcq",
    question: "\"He ________ have passed the exam — he studied every day.\" Which modal expresses logical deduction?",
    options: ["could", "might", "must", "would"],
    answer: 2, explanation: "\"Must have + past participle\" expresses a logical deduction based on evidence (he studied → he must have passed).",
  },
];

const MODALS_TABLE = [
  { cells: ["Can / Could", "Ability, permission, possibility", "She can swim. / Could you help?"] },
  { cells: ["May / Might", "Permission, possibility", "It may rain. / You may go."] },
  { cells: ["Must", "Strong obligation, logical deduction", "You must stop. / He must be tired."] },
  { cells: ["Shall", "Future, suggestion, determination", "Shall we go? / I shall return."] },
  { cells: ["Should", "Advice, obligation", "You should study. / It should be done."] },
  { cells: ["Would", "Polite request, past habit, conditional", "Would you like tea? / I would go."] },
  { cells: ["Ought to", "Moral obligation, advice", "You ought to apologise."] },
  { cells: ["Need", "Necessity (negative/question)", "Need I say more?"] },
];

export default function ModalAuxiliariesPage() {
  return (
    <GrammarTopicLayout
      questions={QUESTIONS}
      intro={<><Highlight color="yellow">Modal auxiliaries</Highlight> are special verbs that add ability, permission, obligation or possibility to the main verb, and they never change form.</>}
    >

      <GrammarSection id="rules" title={<>Modal Meanings</>}>
        <TableCard
          headers={["Modal", "Uses", "Examples"]}
          rows={MODALS_TABLE}
          caption="Every modal has multiple uses — context determines which one is intended."
        />
      </GrammarSection>

      <GrammarSection id="must-vs-have-to" title={<>Must vs Have To</>}>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><Highlight color="blue">Must</Highlight> — speaker&rsquo;s own obligation or strong belief: <em>I must finish this today.</em></p>
          <p><Highlight color="green">Have to</Highlight> — external obligation (rules, laws): <em>You have to wear a uniform at school.</em></p>
          <p><strong>Negative difference:</strong></p>
          <p className="ml-4"><em>Must not</em> = prohibition: <em>You must not cheat.</em></p>
          <p className="ml-4"><em>Don&rsquo;t have to</em> = not necessary: <em>You don&rsquo;t have to come if you&rsquo;re busy.</em></p>
        </div>
      </GrammarSection>

      <GrammarSection id="common-mistakes" title={<>Common Mistakes</>}>
        <MistakeCard
          mistake="She musts go now."
          correction="She must go now."
          example="Modals never take -s, -es, or -ed endings. 'Must' stays 'must' for all subjects."
        />
        <MistakeCard
          mistake="He can went to the park."
          correction="He can go to the park."
          example="After a modal, always use the base form of the verb — never past tense or -ing."
        />
        <MistakeCard
          mistake="She must to study hard."
          correction="She must study hard."
          example="Modals are followed directly by the base verb — no 'to' in between."
        />
      </GrammarSection>

      <GrammarSection id="key-takeaway"><KeyPoint>
          Modals never change form (no -s, no -ing) and are always followed by the base verb. The key distinction is <em>meaning</em>: ability (can), permission (may), obligation (must), advice (should), possibility (might), politeness (would).
        </KeyPoint>
      </GrammarSection>
    </GrammarTopicLayout>
  );
}