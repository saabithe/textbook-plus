"use client";

import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarSection } from "@/components/grammar/GrammarSection";
import { GrammarTopicLayout } from "@/components/grammar/GrammarTopicLayout";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "cd1", type: "mcq",
    question: "Which sentence uses its cohesive device illogically?",
    options: [
      "Although she was exhausted, she finished the report.",
      "Because of the heavy rain, the match was cancelled.",
      "She was exhausted; therefore, she finished the report.",
      "In short, the experiment was a success.",
    ],
    answer: 2,
    explanation: "\u201cTherefore\u201d asserts a result, but being exhausted cannot cause finishing a report \u2014 the ideas clash. A concession linker such as \u201cnevertheless\u201d is needed here.",
  },
  {
    id: "cd2", type: "mcq",
    question: "Choose the correctly punctuated sentence.",
    options: [
      "It was late, however we continued.",
      "It was late; however, we continued.",
      "It was late however, we continued.",
      "It was late; however we continued.",
    ],
    answer: 1,
    explanation: "A conjunctive adverb such as \u201chowever\u201d needs a semicolon before it and a comma after it.",
  },
  {
    id: "cd3", type: "mcq",
    question: "\"________ he was very tired, he finished the work.\"",
    options: ["Although", "Because", "So", "Moreover"],
    answer: 0,
    explanation: "\u201cAlthough\u201d introduces a contrast, or concession.",
  },
  {
    id: "cd4", type: "mcq",
    question: "Choose the correct sentence.",
    options: [
      "Although he was tired, but he continued.",
      "Although he was tired, he continued.",
      "He was tired, although but he continued.",
      "Although he was tired, so he continued.",
    ],
    answer: 1,
    explanation: "Do not use \u201calthough\u201d together with \u201cbut\u201d \u2014 one connector is enough.",
  },
  {
    id: "cd5", type: "fill-blank",
    question: "Fill in (two words): \"She spoke slowly ________ everyone could hear her.\"",
    answer: "so that",
    explanation: "\u201cSo that\u201d introduces a clause of purpose.",
  },
  {
    id: "cd6", type: "mcq",
    question: "\"He studied hard, ________ he passed the exam.\"",
    options: ["and", "but", "so", "or"],
    answer: 2,
    explanation: "\u201cSo\u201d signals a result \u2014 studying hard led to passing.",
  },
  {
    id: "cd7", type: "mcq",
    question: "\"________ the heavy rain, the match was cancelled.\"",
    options: ["Because", "Because of", "Although", "So"],
    answer: 1,
    explanation: "\u201cBecause of\u201d is followed by a noun phrase (the heavy rain); \u201cbecause\u201d needs a full clause.",
  },
  {
    id: "cd8", type: "mcq",
    question: "\"She was tired; ________, she kept working.\"",
    options: ["nevertheless", "so", "because", "and"],
    answer: 0,
    explanation: "\u201cNevertheless\u201d shows contrast, or concession \u2014 she worked in spite of being tired.",
  },
  {
    id: "cd9", type: "mcq",
    question: "\"He is wealthy, ________ he is not content.\"",
    options: ["so", "because", "yet", "or"],
    answer: 2,
    explanation: "\u201cYet\u201d is a contrast linker, like \u201cbut\u201d.",
  },
  {
    id: "cd10", type: "mcq",
    question: "\"________ it was raining, we went out.\"",
    options: ["Although", "Because", "So", "Therefore"],
    answer: 0,
    explanation: "\u201cAlthough\u201d concedes a fact that did not stop the action.",
  },
  {
    id: "cd11", type: "mcq",
    question: "Combine these two ideas correctly: \u201cThe plan is cheap. It is quick to build.\u201d",
    options: [
      "The plan is cheap; moreover, it is quick to build.",
      "The plan is cheap; whereas it is quick to build.",
      "The plan is cheap; unless it is quick to build.",
      "The plan is cheap; similarly, it is quick to build.",
    ],
    answer: 0,
    explanation: "Both clauses praise the plan, so a linker that adds a further point in the same direction (\u201cmoreover\u201d) is correct. \u201cWhereas\u201d and \u201cunless\u201d impose a contrast or condition the ideas do not have, and \u201csimilarly\u201d would need two separate things to compare.",
  },
  {
    id: "cd12", type: "mcq",
    question: "\"She expected the film to be dull; ________, it was thrilling.\"",
    options: ["on the contrary", "therefore", "for instance", "after that"],
    answer: 0,
    explanation: "\u201cOn the contrary\u201d introduces the opposite of what was expected.",
  },
  {
    id: "cd13", type: "mcq",
    question: "\"He missed the bus; ________, he was late for work.\"",
    options: ["as a result", "although", "unless", "in case"],
    answer: 0,
    explanation: "\u201cAs a result\u201d signals the consequence of the first clause.",
  },
  {
    id: "cd14", type: "fill-blank",
    question: "Fill in (one word): \"First we went shopping; ________ we had lunch.\"",
    answer: "then", accepted: ["next", "afterwards"],
    explanation: "\u201cThen\u201d marks the next step in a sequence.",
  },
  {
    id: "cd15", type: "mcq",
    question: "\"Many fruits, ________ mangoes and oranges, are rich in vitamin C.\"",
    options: ["such as", "although", "unless", "therefore"],
    answer: 0,
    explanation: "\u201cSuch as\u201d introduces examples.",
  },
  {
    id: "cd16", type: "mcq",
    question: "Cloze: \u201cMeera practises the violin every evening. ________, she can now play three sonatas. ________, she still finds the fast passages difficult.\u201d",
    options: [
      "As a result / Nevertheless",
      "In short / Nevertheless",
      "For example / Similarly",
      "On the contrary / Therefore",
    ],
    answer: 0,
    explanation: "Daily practice causes her progress, so the first blank takes a result linker (\u201cas a result\u201d). The second clause admits a weakness despite that progress, so a concession linker is needed (\u201cnevertheless\u201d). \u201cIn short\u201d can only open a sentence that sums up a whole passage.",
  },
  {
    id: "cd17", type: "mcq",
    question: "\"She woke up early ________ catch the first train.\"",
    options: ["in order to", "although", "because", "unless"],
    answer: 0,
    explanation: "\u201cIn order to + base verb\u201d expresses purpose.",
  },
  {
    id: "cd18", type: "mcq",
    question: "\"________ his hard work, he failed the exam.\"",
    options: ["Despite", "Because", "So that", "Moreover"],
    answer: 0,
    explanation: "\u201cDespite\u201d is followed by a noun phrase and shows contrast/concession.",
  },
  {
    id: "cd19", type: "fill-blank",
    question: "Fill in (one word): \"He is rich; ________, he is not happy.\"",
    answer: "however", accepted: ["nevertheless"],
    explanation: "\u201cHowever\u201d introduces a contrast \u2014 note the semicolon before and comma after it.",
  },
  {
    id: "cd20", type: "mcq",
    question: "Which sentence uses its cohesive device correctly?",
    options: [
      "The car is inexpensive; whereas it is fuel-efficient.",
      "The car is inexpensive; for example, it is fuel-efficient.",
      "The car is inexpensive; nevertheless, it is fuel-efficient.",
      "The car is inexpensive; otherwise, it is fuel-efficient.",
    ],
    answer: 2,
    explanation: "A cheap car is usually <em>not</em> expected to be efficient, so the second point concedes the opposite of expectation \u2014 \u201cnevertheless\u201d. \u201cWhereas\u201d and \u201cotherwise\u201d express a contrast or condition the ideas do not carry, and \u201cfor example\u201d would need the second clause to illustrate the first.",
  },
  {
    id: "cd21", type: "mcq",
    question: "\"She enjoys reading; ________, her brother loves books.\"",
    options: ["similarly", "unless", "therefore", "although"],
    answer: 0,
    explanation: "\u201cSimilarly\u201d links two like ideas.",
  },
  {
    id: "cd22", type: "mcq",
    question: "\"You must hurry; ________ you will miss the train.\"",
    options: ["otherwise", "although", "because", "similarly"],
    answer: 0,
    explanation: "\u201cOtherwise\u201d means \u201cif not\u201d / \u201cor else\u201d.",
  },
];

const FUNCTIONS_TABLE = [
  { cells: ["Reason", "because, since, as, due to, because of", "He was very strong since he used to take care of his health very well."] },
  { cells: ["Outcome / Result", "so, therefore, as a result", "She forgot her umbrella and therefore got wet in the rain."] },
  { cells: ["Purpose", "in order to, so that", "I worked hard in order to crack that exam."] },
  { cells: ["Contrast", "even though, but, however, yet, although, still, nevertheless", "He loves playing soccer; however, he doesn't enjoy watching it on TV."] },
  { cells: ["Contradicting", "on the contrary, even so", "She expected the movie to be boring, but on the contrary, it was quite entertaining."] },
  { cells: ["Adding", "moreover, and, in addition to, also, too, furthermore", "The weather was sunny; moreover, it was pleasantly warm outside."] },
  { cells: ["Comparing", "similarly, like, likewise, whereas", "She enjoys reading; similarly, her brother loves books as well."] },
  { cells: ["Sequence", "first, then, next, after that, finally", "First, mix the flour; then add water."] },
  { cells: ["Condition", "if, unless, provided that, in case", "We'll go unless it rains."] },
  { cells: ["Example", "for example, for instance, such as", "Citrus fruits, such as oranges, are rich in vitamin C."] },
  { cells: ["Summary", "in short, to sum up, in conclusion, overall", "In short, the plan is worth trying."] },
];

const PUNCTUATION_TABLE = [
  { cells: ["Coordinating conjunction", "and, but, or, so, for, nor, yet", "Comma before it (joining two clauses)", "It was late, but we continued."] },
  { cells: ["Conjunctive adverb", "however, therefore, moreover, nevertheless, thus", "Semicolon before, comma after", "It was late; however, we continued."] },
  { cells: ["Subordinating conjunction", "although, because, since, while, unless", "No semicolon; comma only if it starts the sentence", "Although it was late, we continued."] },
];

export default function CohesiveDevicesPage() {
  return (
    <GrammarTopicLayout
      questions={QUESTIONS}
      intro={<><Highlight color="yellow">Cohesive devices</Highlight> are the words that link the parts of a sentence and hold a text together.</>}
    >

      <GrammarSection id="rules" title={<>Linkers by Function</>}>
        <TableCard
          headers={["Function", "Linkers", "Example"]}
          rows={FUNCTIONS_TABLE}
          caption="Identify the relationship you want first, then pick a linker from that row."
        />
      </GrammarSection>

      <GrammarSection id="punctuation" title={<>Punctuation &amp; Position</>}>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>Coordinating conjunctions</strong> (<em>and, but, or, so, for, nor, yet</em>) join two clauses with just a comma: <em>It was late, but we continued.</em></p>
          <p><strong>Conjunctive adverbs</strong> (<em>however, therefore, moreover, nevertheless, thus</em>) need a semicolon before and a comma after: <em>It was late; however, we continued.</em></p>
          <p><strong>Subordinating conjunctions</strong> (<em>although, because, since, while</em>) attach a dependent clause and take no semicolon: <em>Although it was late, we continued.</em></p>
        </div>
        <TableCard
          headers={["Type", "Examples", "Punctuation", "Model"]}
          rows={PUNCTUATION_TABLE}
          caption="Getting the punctuation right is half the marks in linking exercises."
        />
      </GrammarSection>

      <GrammarSection id="worked-examples" title={<>Worked Examples</>}>
        <Expandable title="Worked example — punctuating 'however'">
          <p><strong>Wrong:</strong> <em>It was late, however we continued.</em></p>
          <p className="mt-3"><strong>Right:</strong> <em>It was late<strong>;</strong> however<strong>,</strong> we continued.</em></p>
          <p className="mt-3"><strong>Why:</strong> <em>however</em> is a conjunctive adverb, not a conjunction. It cannot join two clauses with only a comma. Use a semicolon before it and a comma after it (or start a new sentence: <em>It was late. However, we continued.</em>).</p>
        </Expandable>
        <Expandable title="Worked example — one connector per sentence">
          <p><strong>Wrong:</strong> <em>Because he was late, so he apologised.</em></p>
          <p className="mt-3"><strong>Right:</strong> <em>Because he was late, he apologised.</em> / <em>He was late, so he apologised.</em></p>
          <p className="mt-3"><strong>Why:</strong> <em>because</em> and <em>so</em> both mark the same cause&ndash;result relationship. Using two connectors for one link is a common error &mdash; keep just one.</p>
        </Expandable>
        <Expandable title="Worked example — cause vs result">
          <p><strong>Task:</strong> link the ideas with the correct relationship.</p>
          <p className="mt-3"><em>He trained every day. He won the race.</em></p>
          <p className="mt-3"><strong>As cause &rarr; result:</strong> <em>He trained every day, <strong>so</strong> he won the race.</em></p>
          <p><strong>As result &rarr; cause:</strong> <em>He won the race <strong>because</strong> he trained every day.</em></p>
          <p className="mt-3"><strong>Why:</strong> the same two facts can be joined either way &mdash; but the linker must match the direction you choose.</p>
        </Expandable>
        <Expandable title="Worked example — front vs mid position">
          <p><strong>Front position (with a comma):</strong> <em><strong>Although</strong> it was raining, we went out.</em></p>
          <p className="mt-3"><strong>Mid position (no comma needed):</strong> <em>We went out <strong>although</strong> it was raining.</em></p>
          <p className="mt-3"><strong>Why:</strong> subordinating conjunctions can move, but when they start the sentence the dependent clause is followed by a comma. Conjunctive adverbs such as <em>however</em> can also move (<em>We, however, went out</em>), but they still need their commas.</p>
        </Expandable>
      </GrammarSection>

      <GrammarSection id="try-these" title={<>Try These</>}>
        <ExerciseQa
          questions={[
            <span key="q1">Join with &ldquo;so&rdquo;: &ldquo;It was very hot. We stayed inside.&rdquo;</span>,
            <span key="q2">Correct the error: &ldquo;Because he was late, so he apologised.&rdquo;</span>,
            <span key="q3">Fill in (contrast): &ldquo;________ she was tired, she finished the work.&rdquo;</span>,
            <span key="q4">Fill in (purpose): &ldquo;He worked hard ________ win the prize.&rdquo;</span>,
            <span key="q5">Fill in (adding): &ldquo;The plan is cheap; ________, it is effective.&rdquo;</span>,
          ]}
          answers={[
            <span key="a1"><strong>It was very hot, so we stayed inside.</strong> (&ldquo;so&rdquo; is a coordinating conjunction &mdash; just a comma before it.)</span>,
            <span key="a2"><strong>Because he was late, he apologised.</strong> (&ldquo;because&rdquo; and &ldquo;so&rdquo; mark the same link &mdash; keep only one.)</span>,
            <span key="a3"><strong>Although</strong> (or <em>Though</em>) &mdash; it introduces a concession.</span>,
            <span key="a4"><strong>in order to</strong> (or <em>to</em>) &mdash; purpose before a base verb.</span>,
            <span key="a5"><strong>moreover</strong> (or <em>furthermore</em>) &mdash; it adds a further point.</span>,
          ]}
        />
      </GrammarSection>

      <GrammarSection id="common-mistakes" title={<>Common Mistakes</>}>
        <MistakeCard
          mistake="It was late, however we continued."
          correction="It was late; however, we continued."
          example="A conjunctive adverb joins clauses with a semicolon (or a full stop), not a comma."
        />
        <MistakeCard
          mistake="Because it rained, so we stayed in."
          correction="Because it rained, we stayed in."
          example="Do not use 'because' and 'so' in the same sentence — one connector is enough."
        />
        <MistakeCard
          mistake="Although he was sick, but he came."
          correction="Although he was sick, he came."
          example="Nowhere in English do 'although' and 'but' appear together in the same clause pair."
        />
        <MistakeCard
          mistake="Because of it was raining, we stayed in."
          correction="Because of the rain, we stayed in."
          example="'Because of' takes a noun phrase; use 'because' before a full clause."
        />
      </GrammarSection>

      <GrammarSection id="key-takeaway"><KeyPoint>
          Choose a linker by the <em>relationship</em> you want to show (addition, contrast, cause, result&hellip;). Then punctuate it correctly: coordinating conjunctions take a comma, but conjunctive adverbs such as <em>however</em> and <em>therefore</em> take a semicolon before and a comma after.
        </KeyPoint>
      </GrammarSection>
    </GrammarTopicLayout>
  );
}
