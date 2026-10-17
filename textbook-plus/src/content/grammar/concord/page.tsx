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
    id: "co1", type: "mcq",
    question: "\"Every student ________ a textbook.\" Choose the correct verb:",
    options: ["have", "has", "are having", "having"],
    answer: 1, explanation: "\u201cEvery\u201d is always followed by a singular verb: \u201cevery student has\u201d.",
  },
  {
    id: "co2", type: "mcq",
    question: "\"The team ________ playing well this season.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "\u201cTeam\u201d is a collective noun treated as singular in most formal English: \u201cthe team is playing\u201d.",
  },
  {
    id: "co3", type: "fill-blank",
    question: "Fill in: \"Neither the teacher nor the students ________ happy.\" (be \u2014 past)",
    answer: "were", explanation: "With \u201cneither\u2026nor\u201d, the verb agrees with the nearer subject \u2014 \u201cstudents\u201d is plural, so \u201cwere\u201d.",
  },
  {
    id: "co4", type: "mcq",
    question: "\"The news ________ shocking.\" Choose the correct verb:",
    options: ["are", "were", "is", "have been"],
    answer: 2, explanation: "\u201cNews\u201d looks plural but is grammatically singular: \u201cthe news is\u201d.",
  },
  {
    id: "co5", type: "mcq",
    question: "\"Each of the boys ________ a prize.\" Choose the correct verb:",
    options: ["have", "are", "has", "were"],
    answer: 2, explanation: "\u201cEach\u201d is always singular: \u201ceach of the boys has\u201d.",
  },
  {
    id: "co6", type: "mcq",
    question: "\"One of my friends ________ in London.\" Choose the correct verb:",
    options: ["live", "lives", "are living", "have lived"],
    answer: 1, explanation: "\u201cOne of + plural noun\u201d takes a singular verb \u2014 the subject is \u201cone\u201d, not \u201cfriends\u201d.",
  },
  {
    id: "co7", type: "mcq",
    question: "\"A number of students ________ absent today.\" Choose the correct verb:",
    options: ["is", "was", "has", "are"],
    answer: 3, explanation: "\u201cA number of\u201d means \u201cmany\u201d and takes a plural verb; \u201cthe number of\u201d takes a singular verb.",
  },
  {
    id: "co8", type: "mcq",
    question: "\"The number of accidents ________ increasing.\" Choose the correct verb:",
    options: ["are", "were", "have", "is"],
    answer: 3, explanation: "\u201cThe number of\u201d is a single figure, so it takes a singular verb.",
  },
  {
    id: "co9", type: "mcq",
    question: "\"Mathematics ________ my favourite subject.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "Subject names ending in -s (mathematics, physics, economics) are singular.",
  },
  {
    id: "co10", type: "mcq",
    question: "\"The Arabian Nights ________ a famous book.\" Choose the correct verb:",
    options: ["are", "is", "were", "have been"],
    answer: 1, explanation: "A title is treated as one unit, so it takes a singular verb.",
  },
  {
    id: "co11", type: "mcq",
    question: "\"Ten kilometres ________ a long walk.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "A distance, sum of money or period of time counts as one amount \u2014 singular.",
  },
  {
    id: "co12", type: "mcq",
    question: "\"Both the sisters ________ doctors.\" Choose the correct verb:",
    options: ["is", "are", "was", "has"],
    answer: 1, explanation: "\u201cBoth\u201d is always plural.",
  },
  {
    id: "co13", type: "mcq",
    question: "\"Neither of the answers ________ correct.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "\u201cNeither of + plural noun\u201d is singular.",
  },
  {
    id: "co14", type: "fill-blank",
    question: "Fill in: \"The police ________ investigating the case.\" (be \u2014 present)",
    answer: "are", explanation: "\u201cPolice\u201d and \u201ccattle\u201d are plural-only nouns and always take a plural verb.",
  },
  {
    id: "co15", type: "mcq",
    question: "\"Many a student ________ failed the test.\" Choose the correct verb:",
    options: ["have", "has", "are", "were"],
    answer: 1, explanation: "\u201cMany a\u201d is followed by a singular noun and a singular verb \u2014 it means \u201cmany, one by one\u201d.",
  },
  {
    id: "co16", type: "mcq",
    question: "\"The teacher, as well as the students, ________ present.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "With \u201cas well as\u201d, \u201calong with\u201d or \u201cwith\u201d, the verb agrees with the first subject.",
  },
  {
    id: "co17", type: "mcq",
    question: "\"There ________ a book and two pens on the table.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "In \u201cthere is / there are\u201d the verb agrees with the nearer subject \u2014 \u201ca book\u201d is singular.",
  },
  {
    id: "co18", type: "mcq",
    question: "\"Cattle ________ grazing in the field.\" Choose the correct verb:",
    options: ["is", "are", "was", "has"],
    answer: 1, explanation: "\u201cCattle\u201d is a plural-only noun and takes a plural verb.",
  },
  {
    id: "co19", type: "fill-blank",
    question: "Fill in: \"My trousers ________ too tight.\" (be \u2014 present)",
    answer: "are", explanation: "\u201cTrousers, scissors, spectacles\u201d are plural-only nouns \u2014 they always take a plural verb.",
  },
  {
    id: "co20", type: "mcq",
    question: "\"The committee ________ divided in their opinions.\" Choose the correct verb:",
    options: ["is", "are", "was", "has"],
    answer: 1, explanation: "When the members of a collective are seen acting individually (note \u201ctheir\u201d), the verb becomes plural.",
  },
  {
    id: "co21", type: "mcq",
    question: "\"Either of the two options ________ acceptable.\" Choose the correct verb:",
    options: ["are", "is", "were", "have"],
    answer: 1, explanation: "\u201cEither of + plural noun\u201d is singular.",
  },
  {
    id: "co22", type: "mcq",
    question: "\"Everyone in the class ________ the answer.\" Choose the correct verb:",
    options: ["know", "knows", "are knowing", "have known"],
    answer: 1, explanation: "Indefinite pronouns (everyone, someone, nobody, anybody) are always singular.",
  },
];

const RULES = [
  { cells: ["General rule", "Singular subject \u2192 singular verb; plural subject \u2192 plural verb", "She walks. / They walk."] },
  { cells: ["Every / Each / Either / Neither", "Always singular", "Every student has a book."] },
  { cells: ["One of + plural noun", "Singular verb (the subject is \u201cone\u201d)", "One of the boys is absent."] },
  { cells: ["A number of \u2026 / The number of \u2026", "Plural / Singular", "A number of guests are here. / The number of guests is small."] },
  { cells: ["Collective nouns (team, family, group)", "Singular (formal) or plural (when members act individually)", "The team is/are playing well."] },
  { cells: ["Neither\u2026nor / Either\u2026or", "Verb agrees with the nearer subject", "Neither he nor they are ready."] },
  { cells: ["Compound subjects with 'and'", "Plural verb (unless it is one idea)", "Tom and Jerry are friends."] },
  { cells: ["Unplural nouns (news, mathematics, physics)", "Singular verb", "The news is shocking."] },
  { cells: ["Titles of books, films, plays", "Singular verb (one unit)", "The Arabian Nights is a famous book."] },
  { cells: ["Money, distance, time as one amount", "Singular verb", "Ten rupees is not much."] },
  { cells: ["'Many a' + singular noun", "Singular verb", "Many a man has tried."] },
  { cells: ["Plural-only nouns (police, cattle, trousers, scissors)", "Plural verb", "The police are here."] },
  { cells: ["Subject + 'as well as / along with / with'", "Verb agrees with the first subject", "The teacher, as well as the students, is present."] },
  { cells: ["Inverted order ('there is / there are')", "Verb agrees with the nearer subject", "There is a book and two pens."] },
];

export default function ConcordPage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Concord</Highlight> (also called subject-verb agreement) means the subject and verb must agree in number. A singular subject takes a singular verb; a plural subject takes a plural verb. This seems simple, but several tricky cases trip up even advanced learners.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Rules at a Glance</h2>
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
          <p><Highlight color="pink">Subject after verb</Highlight> &mdash; the verb still agrees with the subject: <em>There <strong>is</strong> a book on the table.</em> / <em>There <strong>are</strong> books on the table.</em></p>
          <p><strong>Percentages &amp; fractions:</strong> singular if the noun is uncountable, plural if countable: <em>Fifty percent of the water <strong>is</strong> gone.</em> / <em>Fifty percent of the students <strong>are</strong> present.</em></p>
          <p><strong>Beware the <em>of</em> phrase:</strong> the verb agrees with the noun <em>before</em> <em>of</em>, not after it: <em>The box of chocolates <strong>is</strong> on the shelf.</em></p>
        </div>
      </section>

      <section id="worked-examples" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Examples</h2>
        <Expandable title="Worked example — 'Each of the students…'">
          <p><strong>Sentence:</strong> <em>Each of the students have submitted the assignment.</em></p>
          <p className="mt-3"><strong>Correct:</strong> <em>Each of the students <strong>has</strong> submitted the assignment.</em></p>
          <p className="mt-3"><strong>Why:</strong> strip away the phrase <em>of the students</em> and the real subject is <em>each</em> &mdash; always singular. So the verb must be <em>has</em>, not <em>have</em>.</p>
        </Expandable>
        <Expandable title="Worked example — 'Neither the principal nor the teachers…'">
          <p><strong>Sentence:</strong> <em>Neither the principal nor the teachers was present.</em></p>
          <p className="mt-3"><strong>Correct:</strong> <em>Neither the principal nor the teachers <strong>were</strong> present.</em></p>
          <p className="mt-3"><strong>Why:</strong> with <em>neither&hellip;nor</em>, the verb follows the <em>nearer</em> subject. The nearer subject is <em>teachers</em> (plural), so we use <em>were</em>.</p>
        </Expandable>
        <Expandable title="Worked example — 'A number of…' vs 'The number of…'">
          <p><strong>Sentence 1:</strong> <em>A number of tourists <strong>is</strong> visiting the city.</em> &rarr; <strong>Wrong.</strong> <em>A number of</em> = <em>many</em>, so it takes a plural verb: <em>A number of tourists <strong>are</strong> visiting the city.</em></p>
          <p className="mt-3"><strong>Sentence 2:</strong> <em>The number of hotels <strong>have</strong> increased.</em> &rarr; <strong>Wrong.</strong> <em>The number of</em> is a single figure, so it takes a singular verb: <em>The number of hotels <strong>has</strong> increased.</em></p>
          <p className="mt-3"><strong>Rule:</strong> the article changes everything &mdash; <em>a</em> number &rarr; plural, <em>the</em> number &rarr; singular.</p>
        </Expandable>
        <Expandable title="Worked example — two -s nouns in one sentence">
          <p><strong>Sentence:</strong> <em>Mathematics are difficult, but the news are encouraging.</em></p>
          <p className="mt-3"><strong>Correct:</strong> <em>Mathematics <strong>is</strong> difficult, but the news <strong>is</strong> encouraging.</em></p>
          <p className="mt-3"><strong>Why:</strong> both <em>mathematics</em> and <em>news</em> end in <em>-s</em> but are singular in meaning &mdash; each names one subject or one piece of information.</p>
        </Expandable>
      </section>

      <section id="try-these" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Try These</h2>
        <ExerciseQa
          questions={[
            <span key="q1">The jury ________ (be) divided in its verdict.</span>,
            <span key="q2">Bread and butter ________ (be) my usual breakfast.</span>,
            <span key="q3">Fifty rupees ________ (be) not a small amount for him.</span>,
            <span key="q4">Neither of the two candidates ________ (have) the required experience.</span>,
            <span key="q5">The poet and philosopher ________ (be) dead.</span>,
          ]}
          answers={[
            <span key="a1"><strong>is.</strong> The jury acts as one body here (note &ldquo;its verdict&rdquo;), so it is singular.</span>,
            <span key="a2"><strong>is.</strong> &ldquo;Bread and butter&rdquo; names a single idea (one breakfast), so it takes a singular verb.</span>,
            <span key="a3"><strong>is.</strong> A sum of money is treated as one amount &mdash; singular.</span>,
            <span key="a4"><strong>has.</strong> &ldquo;Neither of + plural noun&rdquo; is singular.</span>,
            <span key="a5"><strong>is.</strong> &ldquo;The poet and philosopher&rdquo; (one person holding both roles) takes a singular verb. If it were two people, it would be &ldquo;The poet and the philosopher <em>are</em> dead.&rdquo;</span>,
          ]}
        />
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
        <MistakeCard
          mistake="The number of accidents are rising."
          correction="The number of accidents is rising."
          example="'The number of...' is one figure, so it takes a singular verb. Only 'a number of...' is plural."
        />
        <MistakeCard
          mistake="The police is investigating."
          correction="The police are investigating."
          example="'Police' and 'cattle' are plural-only nouns — they always take a plural verb."
        />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          The verb agrees with the <strong>actual subject</strong>, not with words between the subject and verb. Indefinite pronouns (<em>everyone, each, nobody</em>) and uncountable nouns are always <strong>singular</strong>. Collective nouns can be singular or plural depending on context.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
