"use client";

import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarSection } from "@/components/grammar/GrammarSection";
import { GrammarTopicLayout } from "@/components/grammar/GrammarTopicLayout";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "adv1", type: "mcq",
    question: "In \u201cShe walked in a slow manner\u201d, what is \u201cin a slow manner\u201d?",
    options: ["An adverb", "An adverb phrase", "An adverb clause", "An adjective phrase"],
    answer: 1,
    explanation: "It is a group of words doing an adverb\u2019s work, but there is no subject and no finite verb inside it, so it is an adverb phrase. A single word such as \u201cslowly\u201d would be the plain adverb.",
  },
  {
    id: "adv2", type: "mcq",
    question: "In \u201cHe left when the clock struck five\u201d, what is \u201cwhen the clock struck five\u201d?",
    options: ["An adverb phrase", "An adjective clause", "An adverb clause", "A noun clause"],
    answer: 2,
    explanation: "The group has its own subject (\u201cthe clock\u201d) and its own finite verb (\u201cstruck\u201d), and it tells us when he left, so it is an adverb clause of time.",
  },
  {
    id: "adv3", type: "mcq",
    question: "In \u201cThey always win at home\u201d, what kind of adverb is \u201calways\u201d?",
    options: ["An adverb of frequency", "An adverb of manner", "An adverb clause", "An adjective"],
    answer: 0,
    explanation: "\u201cAlways\u201d answers \u201chow often?\u201d, so it is a single-word adverb of frequency. It is not a clause, because it carries no subject and no verb of its own.",
  },
  {
    id: "adv4", type: "mcq",
    question: "Which sentence contains an adverb clause?",
    options: [
      "Let us wait till his arrival.",
      "Let us wait for his arrival.",
      "Let us wait patiently.",
      "Let us wait till he arrives.",
    ],
    answer: 3,
    explanation: "Only \u201ctill he arrives\u201d contains a subject (\u201che\u201d) and a finite verb (\u201carrives\u201d). \u201cTill his arrival\u201d and \u201cfor his arrival\u201d are adverb phrases, and \u201cpatiently\u201d is a single adverb.",
  },
  {
    id: "adv5", type: "mcq",
    question: "Which of these words can open an adverb clause?",
    options: ["besides", "despite", "although", "during"],
    answer: 2,
    explanation: "\u201cAlthough\u201d is a subordinating conjunction, so it opens an adverb clause of concession: although it was raining. \u201cBesides\u201d, \u201cdespite\u201d and \u201cduring\u201d are prepositions and can only introduce phrases.",
  },
  {
    id: "adv6", type: "mcq",
    question: "Which group of words is a phrase, not a clause?",
    options: [
      "as if she were tired",
      "because Helen ran to her mother",
      "at five o\u2019clock",
      "when the clock struck five",
    ],
    answer: 2,
    explanation: "\u201cAt five o\u2019clock\u201d has no subject and no finite verb, so it is an adverb phrase. The other three each carry a subject and a finite verb, which makes them clauses.",
  },
  {
    id: "adv7", type: "mcq",
    question: "In \u201cShe walked as if she were tired\u201d, what is \u201cas if she were tired\u201d, and what does \u201cwere\u201d signal?",
    options: [
      "An adverb phrase; \u201cwere\u201d is a verb with no subject",
      "An adverb clause of manner; \u201cwere\u201d is its finite verb, in the subjunctive after \u201cas if\u201d",
      "An adjective clause; \u201cwere\u201d is a linking verb",
      "A noun clause; \u201cwere\u201d is part of a question",
    ],
    answer: 1,
    explanation: "The group has its own subject (\u201cshe\u201d) and its own finite verb (\u201cwere\u201d), and it tells us how she walked, so it is an adverb clause of manner. \u201cWere\u201d rather than \u201cwas\u201d is the subjunctive, used after \u201cas if\u201d for an imagined state.",
  },
  {
    id: "adv8", type: "mcq",
    question: "Turn this simple sentence into a complex one: \u201cThe box is too heavy for me to lift.\u201d",
    options: [
      "The box is too heavy for lifting by me.",
      "The box is heavy for me to lift it.",
      "The box is so heavy that I cannot lift it.",
      "The box is very heavy for me to lift.",
    ],
    answer: 2,
    explanation: "The phrase pattern \u201ctoo ... to\u201d opens out into the clause pattern \u201cso ... that\u201d: so heavy that I cannot lift it. Only that version carries a finite clause with its own subject and verb.",
  },
  {
    id: "adv9", type: "fill-blank",
    question: "Replace the phrase with a clause: \u201cHe could not see properly because of the darkness.\u201d \u2192 He could not see properly because ______",
    answer: "it was dark",
    accepted: ["it was dark outside"],
    explanation: "\u201cBecause of the darkness\u201d is a phrase; \u201cbecause it was dark\u201d is the clause, with the subject \u201cit\u201d and the finite verb \u201cwas\u201d. Type only the part after \u201cbecause\u201d.",
  },
  {
    id: "adv10", type: "fill-blank",
    question: "Complete the complex sentence: \u201cI don\u2019t know the time of his arrival.\u201d \u2192 I don\u2019t know ______ he will arrive.",
    answer: "when",
    accepted: ["when exactly"],
    explanation: "The phrase \u201cthe time of his arrival\u201d is replaced by the clause \u201cwhen he will arrive\u201d, so the opening word is \u201cwhen\u201d. Here the clause is the object of \u201cknow\u201d, which is why \u201cwhen\u201d is the right connector.",
  },
];

const TYPE_ROWS = [
  {
    cells: [
      "Adverb",
      "a single word that modifies a verb, an adjective or another adverb",
      "No",
      <div key="adv" className="space-y-1">
        <div>&ldquo;She walked slowly.&rdquo;</div>
        <div>&ldquo;He left yesterday.&rdquo;</div>
        <div>&ldquo;They always win.&rdquo;</div>
      </div>,
    ],
  },
  {
    cells: [
      "Adverb phrase",
      "a group of words that does the work of an adverb but has no subject + verb",
      "No",
      <div key="phr" className="space-y-1">
        <div>&ldquo;She walked in a slow manner.&rdquo;</div>
        <div>&ldquo;He left at five o&rsquo;clock.&rdquo;</div>
        <div>&ldquo;Let us wait till his arrival.&rdquo;</div>
      </div>,
    ],
  },
  {
    cells: [
      "Adverb clause",
      "a subordinate clause that does the work of an adverb and has its own subject + finite verb",
      "Yes",
      <div key="cl" className="space-y-1">
        <div>&ldquo;She walked as if she were tired.&rdquo;</div>
        <div>&ldquo;He left when the clock struck five.&rdquo;</div>
        <div>&ldquo;Let us wait till he arrives.&rdquo;</div>
      </div>,
    ],
  },
];

const CONTRAST_ROWS = [
  {
    cells: [
      "Let us wait till his arrival.",
      "till his arrival",
      "Adverb phrase",
      "No subject, no finite verb inside the group.",
    ],
  },
  {
    cells: [
      "Let us wait till he arrives.",
      "till he arrives",
      "Adverb clause",
      "Subject \u201che\u201d + finite verb \u201carrives\u201d inside the group.",
    ],
  },
  {
    cells: [
      "She answered in a polite manner.",
      "in a polite manner",
      "Adverb phrase",
      "A preposition + noun; nothing inside it can be a verb.",
    ],
  },
  {
    cells: [
      "She answered as a polite person speaks.",
      "as a polite person speaks",
      "Adverb clause",
      "Subject \u201ca polite person\u201d + finite verb \u201cspeaks\u201d.",
    ],
  },
];

const PASSAGE_ROWS = [
  { cells: ["Adverb", "always", "modifies the verb \u201cran\u201d"] },
  { cells: ["Adverb", "Finally", "modifies the verb \u201cdecided\u201d"] },
  { cells: ["Adverb", "absolutely", "modifies the adjective \u201cnecessary\u201d"] },
  { cells: ["Adverb", "away", "modifies the verb \u201ctake\u201d"] },
  { cells: ["Adverb phrase", "At first", "adverb phrase of time"] },
  { cells: ["Adverb phrase", "in controlling the child", "adverb phrase (where the trouble lay)"] },
  { cells: ["Adverb phrase", "to her mother", "adverb phrase of direction"] },
  { cells: ["Adverb phrase", "for a while", "adverb phrase of time"] },
  { cells: ["Adverb clause", "from the time she was a baby", "adverb clause of time (subject \u201cshe\u201d, verb \u201cwas\u201d)"] },
  { cells: ["Adverb clause", "When she was six years old", "adverb clause of time (subject \u201cshe\u201d, verb \u201cwas\u201d)"] },
  { cells: ["Adverb clause", "because Helen always ran to her mother", "adverb clause of reason (subject \u201cHelen\u201d, verb \u201cran\u201d)"] },
];

const CONVERSION_ROWS = [
  {
    cells: [
      "I don\u2019t know the time of his arrival.",
      "I don\u2019t know when he will arrive.",
      "the noun phrase became a \u201cwhen\u201d clause",
    ],
  },
  {
    cells: [
      "Do you know his residence?",
      "Do you know where he resides?",
      "the noun became a \u201cwhere\u201d clause",
    ],
  },
  {
    cells: [
      "He could not see properly because of the darkness.",
      "He could not see properly because it was dark.",
      "\u201cbecause of\u201d + noun became \u201cbecause\u201d + subject and verb",
    ],
  },
  {
    cells: [
      "The problem is too complicated for them to solve.",
      "The problem is so complicated that they cannot solve it.",
      "\u201ctoo ... to\u201d became \u201cso ... that\u201d",
    ],
  },
  {
    cells: [
      "The box is too heavy for me to lift.",
      "The box is so heavy that I cannot lift it.",
      "\u201ctoo ... to\u201d became \u201cso ... that\u201d",
    ],
  },
];

export default function AdverbPhrasesAndClausesPage() {
  return (
    <GrammarTopicLayout
      questions={QUESTIONS}
      intro={<>An <Highlight color="yellow">adverb</Highlight> tells us how, when, where or why an action happens &mdash; and it can arrive as a single word, as a phrase, or as a whole clause.</>}
    >

      <GrammarSection id="three-types" title={<>The Three Types</>}>
        <TableCard
          headers={["Type", "What it is", "Contains subject + verb?", "Example"]}
          rows={TYPE_ROWS}
          caption="Same job, three sizes: one word, a phrase with no verb, or a clause with its own subject and finite verb."
        />

        <KeyPoint>
          The whole topic rests on <strong>one question</strong>: find the group of words, then look for a subject and a finite verb <em>inside</em> it. Verb inside it &mdash; <strong>clause</strong>. No verb inside it &mdash; <strong>phrase</strong>. Just one word &mdash; <strong>adverb</strong>.
        </KeyPoint>

        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
          Say it once more as a single test: <Highlight color="yellow">Is there a subject and a finite verb inside the group of words?</Highlight> Nothing else &mdash; not length, not the connector, not how many words there are &mdash; decides the answer.
        </p>
      </GrammarSection>

      <GrammarSection id="phrase-or-clause" title={<>Phrase or Clause? Two Sentences That Look Alike</>}>
        <div className="my-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-muted/30 px-4 py-3">
            <p className="text-sm font-extrabold text-foreground">&ldquo;Let us wait till his arrival.&rdquo;</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              A simple sentence. &ldquo;till his arrival&rdquo; is an adverb <strong>phrase</strong>: no subject, no finite verb.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-muted/30 px-4 py-3">
            <p className="text-sm font-extrabold text-foreground">&ldquo;Let us wait till he arrives.&rdquo;</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              A complex sentence. &ldquo;till he arrives&rdquo; is an adverb <strong>clause</strong>: subject &ldquo;he&rdquo;, verb &ldquo;arrives&rdquo;.
            </p>
          </div>
        </div>

        <TableCard
          headers={["Sentence", "The group of words", "Type", "Why"]}
          rows={CONTRAST_ROWS}
          caption="The connector is often identical. Only the subject + finite verb inside the group separates the phrase from the clause."
        />

        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          The words that usually open an adverb clause are <strong>when</strong>, <strong>because</strong>, <strong>if</strong>, <strong>till</strong>, <strong>although</strong>, <strong>since</strong>, <strong>so ... that</strong> and <strong>as if</strong>. Each one must be followed by its own subject and finite verb before the group becomes a clause.
        </p>
      </GrammarSection>

      <GrammarSection id="in-a-passage" title={<>Adverbs in a Passage</>}>
        <div className="my-5 rounded-r-2xl border-l-4 border-primary/40 bg-primary/[0.05] py-2 pl-4 pr-4 text-foreground/80 italic">
          <p className="text-[1.0625rem] leading-[1.75]">
            &ldquo;Helen Keller was deaf and dumb from the time she was a baby. At first no one thought she would be capable of learning anything. When she was six years old her parents decided to engage a teacher for her. At first the teacher, Miss Sullivan, had trouble in controlling the child. She could not make her obey because Helen always ran to her mother. Finally, Miss Sullivan decided that it was absolutely necessary to take Helen away for a while.&rdquo;
          </p>
        </div>

        <TableCard
          headers={["Type", "From the passage", "What it does"]}
          rows={PASSAGE_ROWS}
          caption="Read the same passage three times over: once for single adverbs, once for phrases, once for clauses."
        />

        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          The passage contains four single-word adverbs, four adverb phrases and three adverb clauses &mdash; and notice that &ldquo;always&rdquo; sits <em>inside</em> a clause while &ldquo;absolutely&rdquo; modifies an adjective rather than a verb.
        </p>
      </GrammarSection>

      <GrammarSection id="simple-to-complex" title={<>Turning a Simple Sentence into a Complex One</>}>
        <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
          A phrase can almost always be opened out into a clause, and that is exactly what turns a simple sentence into a complex one.
        </p>

        <Expandable title={"Worked examples \u2014 five conversions"}>
          <TableCard
            headers={["Simple (phrase)", "Complex (clause)", "What changed"]}
            rows={CONVERSION_ROWS}
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            In the second row, &ldquo;Do you know where he lives?&rdquo; is also accepted.
          </p>
        </Expandable>
      </GrammarSection>

      <GrammarSection id="traps" title={<>Common Traps</>}>
        <MistakeCard
          mistake={"\u201ctill his arrival\u201d is an adverb clause"}
          correction={"It is an adverb phrase"}
          example={"There is no subject and no finite verb inside it \u2014 compare \u201ctill he arrives\u201d."}
        />
        <MistakeCard
          mistake={"The clause \u201cas if she were tired\u201d is a phrase"}
          correction={"It is an adverb clause of manner"}
          example={"It carries its own subject (she) and verb (were)."}
        />
        <MistakeCard
          mistake={"In \u201ctake Helen away\u201d, \u201caway\u201d modifies Helen"}
          correction={"It modifies the verb \u201ctake\u201d"}
          example={"An adverb answers how, when, where or why about the action, not about the noun."}
        />
        <MistakeCard
          mistake={"\u201cabsolutely\u201d in \u201cabsolutely necessary\u201d modifies a verb"}
          correction={"It modifies the adjective \u201cnecessary\u201d"}
          example={"Adverbs modify verbs, adjectives and other adverbs."}
        />
        <MistakeCard
          mistake={"Every group of words with a verb is an adverb clause"}
          correction={"It must be a subordinate clause doing an adverb\u2019s work"}
          example={"In \u201cwhen he will arrive\u201d the clause is the object of \u201cknow\u201d, not an adverbial."}
        />
      </GrammarSection>

      <GrammarSection id="key-takeaway"><KeyPoint>
          One question &mdash; is there a subject and a finite verb <em>inside</em> the group of words? &mdash; decides phrase or clause. The adverb family itself is only ever about <strong>how</strong>, <strong>when</strong>, <strong>where</strong> or <strong>why</strong>.
        </KeyPoint>
      </GrammarSection>
    </GrammarTopicLayout>
  );
}
