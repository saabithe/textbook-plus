"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "co1", type: "mcq",
    question: "\"Every student ________ a textbook.\" Choose the correct verb:",
    options: ["have", "has", "are having", "having"],
    answer: 1, explanation: "'Every' is always followed by a singular verb. 'Every student has' — not 'have'.",
  },
  {
    id: "co2", type: "mcq",
    question: "\"The team ________ playing well this season.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "'Team' is a collective noun treated as singular in most formal English. 'The team is playing'.",
  },
  {
    id: "co3", type: "fill-blank",
    question: "Fill in: \"Neither the teacher nor the students ________ happy.\"",
    answer: "were", explanation: "With 'neither...nor', the verb agrees with the nearer subject — 'students' is plural, so 'were'.",
  },
  {
    id: "co4", type: "mcq",
    question: "\"The news ________ shocking.\" Choose the correct verb:",
    options: ["are", "were", "is", "have been"],
    answer: 2, explanation: "'News' looks plural but is grammatically singular — 'the news is'.",
  },
  {
    id: "co5", type: "mcq",
    question: "\"Each of the boys ________ a prize.\" Choose the correct verb:",
    options: ["have", "are", "has", "were"],
    answer: 2, explanation: "'Each' is always singular — 'each of the boys has'.",
  },
];

const RULES = [
  { cells: ["General rule", "Singular subject → singular verb; plural subject → plural verb", "She walks. / They walk."] },
  { cells: ["Every / Each / Either / Neither", "Always singular", "Every student has a book."] },
  { cells: ["Collective nouns (team, family, group)", "Singular (formal) or plural (British informal)", "The team is/are playing well."] },
  { cells: ["Neither...nor / Either...or", "Verb agrees with nearer subject", "Neither he nor they are ready."] },
  { cells: ["Compound subjects with 'and'", "Plural verb", "Tom and Jerry are friends."] },
  { cells: ["Unplural nouns (news, mathematics, physics)", "Singular verb", "The news is shocking."] },
  { cells: ["Subject + 'as well as / along with / with'", "Verb agrees with first subject", "The teacher, as well as the students, is present."] },
];

export default function ConcordPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Concord</Highlight> (also called subject-verb agreement) means the subject and verb must agree in number. A singular subject takes a singular verb; a plural subject takes a plural verb. This seems simple, but several tricky cases trip up even advanced learners.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Rules</h2>
        <TableCard
          headers={["Rule", "Pattern", "Example"]}
          rows={RULES}
          caption="The verb always agrees with the actual subject, not with words that come between."
        />
      </section>

      <section id="tricky-cases" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Tricky Cases</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><Highlight color="yellow">Uncountable nouns</Highlight> are always singular: <em>The information <strong>is</strong> correct.</em> (Not &ldquo;the information are&rdquo;)</p>
          <p><Highlight color="blue">Indefinite pronouns</Highlight> (<em>everyone, someone, nobody, anything</em>) are always singular: <em>Everyone <strong>is</strong> here.</em></p>
          <p><Highlight color="green">Plural-form, singular-meaning nouns</Highlight> (<em>news, physics, mathematics, politics</em>) take singular verbs: <em>Mathematics <strong>is</strong> difficult.</em></p>
          <p><Highlight color="pink">Subject after verb</Highlight> — the verb still agrees with the subject: <em>There <strong>is</strong> a book on the table.</em> / <em>There <strong>are</strong> books on the table.</em></p>
          <p><strong>Percentages &amp; fractions:</strong> singular if the noun is uncountable, plural if countable: <em>Fifty percent of the water <strong>is</strong> gone.</em> / <em>Fifty percent of the students <strong>are</strong> present.</em></p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="Each of the students have a book."
          correction="Each of the students has a book."
          example="'Each' is always singular — it refers to one at a time, even when followed by 'of the students'."
        />
        <MistakeCard
          mistake="The list of items are on the table."
          correction="The list of items is on the table."
          example="The subject is 'list' (singular), not 'items'. Ignore the 'of' phrase when finding the subject."
        />
        <MistakeCard
          mistake="Mathematics are my favourite subject."
          correction="Mathematics is my favourite subject."
          example="Subjects ending in -s (mathematics, physics, economics) are singular — they refer to one field of study."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          The verb agrees with the <strong>actual subject</strong>, not with words between the subject and verb. Indefinite pronouns (<em>everyone, each, nobody</em>) and uncountable nouns are always <strong>singular</strong>. Collective nouns can be singular or plural depending on context.
        </KeyPoint>
      </section>
    </>
  );
}