"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "ed1", type: "mcq",
    question: "Choose the corrected sentence: \"The number of students are increasing.\"",
    options: [
      "The number of students are increasing.",
      "The number of students is increasing.",
      "A number of students is increasing.",
      "The numbers of students is increasing.",
    ],
    answer: 1,
    explanation: "\u201cThe number of\u201d takes a singular verb (is); \u201ca number of\u201d takes a plural verb.",
  },
  {
    id: "ed2", type: "mcq",
    question: "Find the error: \"She is married with a doctor.\"",
    options: [
      "She is married with a doctor.",
      "She is married to a doctor.",
      "She is married for a doctor.",
      "She is married by a doctor.",
    ],
    answer: 1,
    explanation: "\u201cMarried to\u201d is the fixed collocation.",
  },
  {
    id: "ed3", type: "mcq",
    question: "Choose the correct form: \"He plays the guitar very ________.\"",
    options: ["good", "well", "goodly", "better"],
    answer: 1,
    explanation: "An adverb (well) modifies the verb \u201cplays\u201d; \u201cgood\u201d is an adjective.",
  },
  {
    id: "ed4", type: "fill-blank",
    question: "Correct the spelling \u2014 type the right word: \"He will definately come.\"",
    answer: "definitely",
    explanation: "The correct spelling is \u201cdefinitely\u201d (from \u201cdefinite\u201d + \u201c-ly\u201d).",
  },
  {
    id: "ed5", type: "mcq",
    question: "Choose the corrected sentence: \"I have been living here since ten years.\"",
    options: [
      "I have been living here since ten years.",
      "I have been living here for ten years.",
      "I live here since ten years.",
      "I am living here since ten years.",
    ],
    answer: 1,
    explanation: "Use \u201cfor\u201d with a period of time (ten years) and \u201csince\u201d with a point in time (2015).",
  },
  {
    id: "ed6", type: "mcq",
    question: "Fill in the blank: One of the sheep _________ (has / have) a bell on its neck.",
    options: ["has", "have"],
    answer: 0,
    explanation: "With \u201cOne of...\u201d + plural noun, the true subject is the singular \u201cOne\u201d \u2014 always a singular verb.",
  },
  {
    id: "ed7", type: "mcq",
    question: "Fill in the blank: The teacher together with the students _________ (has / have) come.",
    options: ["has", "have"],
    answer: 0,
    explanation: "Phrases like \u201ctogether with / as well as / along with\u201d do not change the subject \u2014 the verb agrees with the first (singular) subject.",
  },
  {
    id: "ed8", type: "mcq",
    question: "Fill in the blank: Neither the teacher nor the students _________ (has / have) gone for a walk.",
    options: ["has", "have"],
    answer: 1,
    explanation: "With \u201cneither... nor / either... or\u201d, the verb follows proximity \u2014 it agrees with the closest subject (students).",
  },
  {
    id: "ed9", type: "mcq",
    question: "Correct the tense: \"Last year, I _________ him a visit.\"",
    options: ["pay", "paid", "pays", "paying"],
    answer: 1,
    explanation: "\u201cLast year\u201d fixes the event in the past \u2014 the base verb shifts to the simple past (paid).",
  },
  {
    id: "ed10", type: "mcq",
    question: "Choose the right preposition: \"He wants to specialize _________ physics.\"",
    options: ["on", "in", "at", "for"],
    answer: 1,
    explanation: "\u201cSpecialize\u201d collocates strictly with \u201cin\u201d for a field or subject.",
  },
  {
    id: "ed11", type: "mcq",
    question: "Choose the right idiom: \"The students were selected _________ random.\"",
    options: ["on", "at", "in", "by"],
    answer: 1,
    explanation: "The fixed idiom is \u201cat random\u201d \u2014 never \u201con random\u201d.",
  },
];

const ERROR_TYPES = [
  { cells: ["Subject\u2013verb agreement", "Does the verb match the subject?", "The list of items are long \u2192 is long"] },
  { cells: ["Tense", "Is the time frame consistent?", "She go yesterday \u2192 She went yesterday"] },
  { cells: ["Article", "Does the noun need a / an / the?", "He is best student \u2192 He is the best student"] },
  { cells: ["Preposition", "Check fixed collocations", "married with \u2192 married to"] },
  { cells: ["Word form", "Adjective or adverb? Noun or verb?", "He runs quick \u2192 He runs quickly"] },
  { cells: ["Spelling", "Common confusions", "definately \u2192 definitely"] },
  { cells: ["Punctuation", "Commas, apostrophes, capitals", "its raining \u2192 it's raining"] },
  { cells: ["Redundancy", "Unnecessary repetition", "return back \u2192 return"] },
];

const SVA_RULES = [
  { cells: ["Singular subjects \u2192 singular verb (V1 + s)", "He, She, It, that, singular nouns"] },
  { cells: ["Indefinite pronouns \u2014 always singular (\u224895%)", "Everyone, everybody, everything, anyone, anybody, anything, someone, something, somebody, nobody, no one, nothing"] },
  { cells: ["Plural subjects \u2192 base verb (V1)", "I, You, They, We, plural nouns"] },
  { cells: ["Singular auxiliaries", "Is, Was, Does, Has"] },
  { cells: ["Plural auxiliaries", "Are, Were, Do, Have"] },
  { cells: ["Past \u2014 same for all subjects", "Did"] },
];

const PREPOSITIONS = [
  { cells: ["In", "Inside or within something", "in the bag"] },
  { cells: ["On", "Physically in contact with or supported by", "on the table"] },
  { cells: ["At", "Specific point or location in time / space", "at the park"] },
  { cells: ["For", "Purpose, duration, or benefit", "for you"] },
  { cells: ["With", "Accompanied by or having something", "with her friend"] },
  { cells: ["To", "Direction or movement toward a place / person", "to the store"] },
  { cells: ["From", "Starting point of an action / movement", "from vacation"] },
  { cells: ["By", "Method or means", "by train"] },
  { cells: ["Of", "Possession or association", "pages of the book"] },
  { cells: ["Into", "Movement toward the inside", "into the pool"] },
];

export default function EditingPage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
          <section id="introduction" className="scroll-mt-24">
            <Callout type="note">
              <Highlight color="yellow">Editing</Highlight> means finding and correcting the errors in a given passage. You are usually asked to edit <em>one</em> error per line or to rewrite a short passage correctly. The errors almost always come from a small, predictable set of grammar points.
            </Callout>
          </section>

          <section id="rules" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Common Error Types</h2>
            <TableCard
              headers={["Error type", "What to check", "Wrong \u2192 Right"]}
              rows={ERROR_TYPES}
              caption="Scan the passage for these eight categories — most editing tasks test nothing else."
            />
          </section>

          <section id="subject-verb-agreement" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Subject&ndash;Verb Agreement</h2>
            <TableCard
              title="Agreement rules"
              headers={["Rule", "Examples"]}
              rows={SVA_RULES}
              caption="A singular subject takes a singular verb (V1 + s); a plural subject takes the base verb (V1)."
            />
            <Callout type="important" title="Exam traps &mdash; the three most-tested patterns">
              <Highlight color="yellow">One of...</Highlight> + plural noun still takes a <em>singular</em> verb (the subject is <em>One</em>). Phrases like <Highlight color="blue">together with / as well as / along with</Highlight> never change the subject &mdash; agree with the first noun. With <Highlight color="green">neither... nor / either... or</Highlight>, the verb follows <em>proximity</em> and agrees with the closest subject.
            </Callout>
            <ExerciseQa
              questions={[
                <span key="q1">Fill in the blank: One of the sheep _________ (has / have) a bell on its neck.</span>,
                <span key="q2">Fill in the blank: The teacher together with the students _________ (has / have) come.</span>,
                <span key="q3">Fill in the blank: Neither the teacher nor the students _________ (has / have) gone for a walk.</span>,
              ]}
              answers={[
                <span key="a1"><strong>has</strong> &mdash; When a sentence begins with &ldquo;One of...&rdquo; followed by a plural noun, the true subject is the singular word &ldquo;One.&rdquo; Therefore, it always takes a singular verb.</span>,
                <span key="a2"><strong>has</strong> &mdash; When a singular subject is connected to other nouns using parenthetical phrases like &ldquo;together with,&rdquo; &ldquo;as well as,&rdquo; or &ldquo;along with,&rdquo; these additions do not alter the number of the subject. The verb must strictly agree with the first singular subject.</span>,
                <span key="a3"><strong>have</strong> &mdash; When two subjects are connected using the correlative conjunction &ldquo;neither... nor&rdquo; (or either... or), the verb follows the rule of proximity. This means the verb must agree with the closest subject noun to the blank (in this case, the plural noun &ldquo;students&rdquo;).</span>,
              ]}
            />
          </section>

          <section id="prepositions-core" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Prepositions &mdash; Core Meanings</h2>
            <TableCard
              headers={["Preposition", "Core meaning", "Example"]}
              rows={PREPOSITIONS}
              caption="Most preposition errors are wrong choices between these core meanings &mdash; especially in / on / at and to / into."
            />
          </section>

          <section id="tenses-infinitives" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Tenses &amp; Infinitives</h2>
            <TableCard
              headers={["Point", "Rule", "Example"]}
              rows={[
                { cells: ["Simple past", "Used for past events at a specific point in time", "He bought a car last month"] },
                { cells: ["Infinitives", "Use to + base verb", "to watching \u2192 to watch"] },
              ]}
            />
            <ExerciseQa
              questions={[
                <span key="q1">The police came only after the thief __________________ (escape).</span>,
                <span key="q2">Last year, I __________________ (walk) back home every evening.</span>,
                <span key="q3">He usually wears pants, but now he __________________ (wear) a dhothi.</span>,
                <span key="q4">Look, the snow __________________ (fall)!</span>,
              ]}
              answers={[
                <span key="a1"><strong>had escaped</strong> &mdash; When two actions happened in the past, the earlier action takes the Past Perfect tense (had + V3) and the later action takes the Simple Past tense. The thief ran away before the police arrived, so &ldquo;had escaped&rdquo; is correct.</span>,
                <span key="a2"><strong>walked</strong> &mdash; The phrase &ldquo;Last year&rdquo; establishes a past timeframe. A past habit or regular routine that happened in the past is expressed using the Simple Past tense (V2).</span>,
                <span key="a3"><strong>is wearing</strong> &mdash; While &ldquo;usually&rdquo; marks a permanent routine, the word &ldquo;now&rdquo; shifts the action to a temporary event happening at the exact moment of speaking. This requires the Present Continuous tense (is/am/are + verb-ing).</span>,
                <span key="a4"><strong>is falling</strong> &mdash; Imperative attention-grabbers like &ldquo;Look!&rdquo; or &ldquo;Listen!&rdquo; mean the action is actively unfolding right before your eyes. Any live action happening right now requires the Present Continuous tense.</span>,
              ]}
            />
          </section>

          <section id="worked-passages" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Passages</h2>

            <Expandable title="Passage 1 &mdash; Hands raised to ask questions" variant="exercise">
              <p><strong>Original passage:</strong></p>
              <p>&ldquo;After my address, hundreds of hands was raised to asking questions. Due to the limited availability time, I selected twelve students on random to ask questions.&rdquo;</p>
              <p className="mt-3"><strong>Errors &amp; corrections:</strong></p>
              <ul>
                <li><strong>was raised &rarr; were raised.</strong> Subject-verb agreement. The subject &ldquo;hundreds of hands&rdquo; is plural, so it requires the plural verb were instead of the singular was.</li>
                <li><strong>to asking &rarr; to ask.</strong> Infinitives. Use to + base verb (to ask) rather than a gerund after &ldquo;to&rdquo; in this structure.</li>
                <li><strong>availability time &rarr; availability of time (or time availability).</strong> Prepositions / Association. Insert the preposition of to correctly link the nouns.</li>
                <li><strong>on random &rarr; at random.</strong> Fixed prepositions / Idiomatic usage. The correct idiom is &ldquo;at random&rdquo; (not on).</li>
              </ul>
              <p className="mt-3"><strong>Fully corrected passage:</strong></p>
              <p>&ldquo;After my address, hundreds of hands were raised to ask questions. Due to the limited availability of time, I selected twelve students at random to ask questions.&rdquo;</p>
            </Expandable>

            <Expandable title="Passage 2 &mdash; Greta and the blackberries" variant="exercise">
              <ExerciseQa
                questions={[
                  <span key="q1">&ldquo;His wife (a) (was/were) cutting blackberries in the garden, and Greta was already (b) (slide/sliding) from the chair to help her. Greta would never (c) (has/have) a house of her own. She would live (d) (on/in) a group house with other people like her.&rdquo;</span>,
                ]}
                answers={[
                  <span key="a1"><strong>(a) was, (b) sliding, (c) have, (d) in.</strong> Always use the base form of a verb (V1) after modal auxiliary verbs like would, could, or should &mdash; hence &ldquo;would have&rdquo;, not &ldquo;would has&rdquo;.</span>,
                ]}
              />
            </Expandable>

            <Expandable title="Passage 3 &mdash; Hawking at the borderline" variant="exercise">
              <ExerciseQa
                questions={[
                  <span key="q1">&ldquo;Hawking was confident that he (a) (can/could) get through successfully. But he ended up disastrously (b) (on/in) the borderline between a first and a second.&rdquo;</span>,
                ]}
                answers={[
                  <span key="a1"><strong>(a) could, (b) on.</strong> Use the preposition &ldquo;on&rdquo; when referring to a position on a dividing line, scale, or borderline (e.g., on the borderline).</span>,
                ]}
              />
            </Expandable>

            <Expandable title="Passage 4 &mdash; Hawking goes to Oxford" variant="exercise">
              <p><strong>Original passage:</strong></p>
              <p>&ldquo;On 1959, in the age of seventeen, Hawking went to Oxford to study natural science and to specialize on physics. He joined University College in Oxford and took his degree.&rdquo;</p>
              <p className="mt-3"><strong>Error breakdown &amp; analysis (4 marks):</strong></p>
              <ul>
                <li><strong>On 1959 &rarr; In 1959.</strong> Preposition of time (year). For specific calendar years, centuries, and months, the preposition &ldquo;in&rdquo; must be used. &ldquo;On&rdquo; is reserved strictly for specific dates and days (e.g., on Monday, on 8 January).</li>
                <li><strong>in the age of &rarr; at the age of.</strong> Idiomatic prepositional phrase. The standard, grammatically fixed English idiom used to denote a specific point in someone&rsquo;s life timeline is strictly &ldquo;at the age of [number]&rdquo;.</li>
                <li><strong>specialize on &rarr; specialize in.</strong> Preposition paired with verb (collocation). The verb specialize is a dependent verb that collocates strictly with the preposition &ldquo;in&rdquo; when referencing an academic field, subject, or professional domain.</li>
                <li><strong>University College in Oxford &rarr; University College at Oxford.</strong> Preposition of place (institutions). While you live in a city, when referring to an individual&rsquo;s academic attendance at a specific university or campus hub as an institution, the preposition &ldquo;at&rdquo; is used (e.g., at Oxford, at Harvard).</li>
              </ul>
            </Expandable>

            <Expandable title="Passage 5 &mdash; The young seagull" variant="exercise">
              <p><strong>Original passage:</strong></p>
              <p>&ldquo;The young Seagull was not confident to flying. It is his mother who helped him atleast. After make his first flight, he realised his strength.&rdquo;</p>
              <p className="mt-3"><strong>Error breakdown &amp; analysis (4 marks):</strong></p>
              <ul>
                <li><strong>confident to flying &rarr; confident of flying.</strong> Preposition after an adjective. The adjective confident is a dependent adjective that always collocates with the preposition &ldquo;of&rdquo; followed by a gerund (verb-ing). Alternatively, if an infinitive is used, it must be followed by a base verb (e.g., confident to fly).</li>
                <li><strong>It is &rarr; It was.</strong> Past tense consistency. The entire narrative is set in the past tense, as established by the first verb (was not confident). Therefore, the present tense verb is must be changed to the past tense &ldquo;was&rdquo; to maintain structural consistency.</li>
                <li><strong>atleast &rarr; at last.</strong> Incorrect word choice (spelling/meaning). At least (written as two words) means &ldquo;not less than&rdquo;. The context of the story requires the adverbial phrase &ldquo;at last&rdquo; (also two separate words), which means &ldquo;finally&rdquo; or &ldquo;in the end&rdquo; after a long period of struggle.</li>
                <li><strong>After make &rarr; After making.</strong> Verb form after a preposition. In English grammar, when a verb immediately follows a preposition like after, before, or by, it must be written in its gerund form (verb-ing).</li>
              </ul>
            </Expandable>

            <Expandable title="Passage 6 &mdash; Pay him a visit" variant="exercise">
              <p><strong>Original passage:</strong></p>
              <p>&ldquo;Last year, I pay him a visit. I thought I&rsquo;d go and see how things was with him. On his letters, my brother called his estate Tchimbarshov corner, or Himalayskoe. I arrived at Himalayskoe in afternoon.&rdquo;</p>
              <p className="mt-3"><strong>Error breakdown &amp; analysis:</strong></p>
              <ul>
                <li><strong>pay &rarr; paid.</strong> Verb tense. The time frame indicator &ldquo;Last year&rdquo; places the event in the past. Therefore, the base verb must shift to the Simple Past tense (paid).</li>
                <li><strong>things was &rarr; things were.</strong> Subject-verb agreement. The subject &ldquo;things&rdquo; is a plural noun. A plural subject must always be paired with a plural verb (&ldquo;were&rdquo; instead of the singular &ldquo;was&rdquo;).</li>
                <li><strong>On his letters &rarr; In his letters.</strong> Preposition usage. Written correspondence takes the preposition &ldquo;in&rdquo; to denote that the information is contained inside the body of the text (e.g., in a letter, in a book).</li>
                <li><strong>in afternoon &rarr; in the afternoon.</strong> Article omission. Specific periods of the day preceded by the preposition &ldquo;in&rdquo; strictly require the definite article &ldquo;the&rdquo; (in the morning, in the afternoon, in the evening).</li>
              </ul>
            </Expandable>

            <Expandable title="Passage 7 &mdash; The legend of the turtles" variant="exercise">
              <p><strong>Original passage:</strong></p>
              <p>&ldquo;You may doubts the truth of the legend, but you cannot doubt the fact that the chanting of this strange song do, In fact, lure the giant turtles into the surface of the blue waters of the bay, near Namuana village, in the island of Kadavu.&rdquo;</p>
              <p className="mt-3"><strong>Error breakdown &amp; analysis:</strong></p>
              <ul>
                <li><strong>may doubts &rarr; may doubt.</strong> Verb form after a modal auxiliary. Modal verbs like may, can, should, and will must always be followed by the base form of the verb (infinitive without &lsquo;to&rsquo;). Adding an &lsquo;s&rsquo; to make it &ldquo;doubts&rdquo; is grammatically incorrect.</li>
                <li><strong>chanting... do &rarr; chanting... does.</strong> Subject-verb agreement. The true subject of the clause is the gerund &ldquo;chanting&rdquo;, which is singular. Therefore, it requires the singular verb &ldquo;does&rdquo; instead of the plural &ldquo;do&rdquo;.</li>
                <li><strong>into the surface &rarr; to the surface.</strong> Preposition of direction/movement. &ldquo;Into&rdquo; implies moving inside something enclosed. Since the turtles are rising from under the water up to the top layer, the correct prepositional phrase is &ldquo;to the surface&rdquo;.</li>
                <li><strong>in the island &rarr; on the island.</strong> Preposition of place (islands). When referring to a specific island, the preposition &ldquo;on&rdquo; must be used because an island is viewed as a surface platform rather than an enclosed boundary (e.g., on the island of Kadavu, on an island).</li>
              </ul>
            </Expandable>

            <Expandable title="Passage 8 &mdash; Manipur" variant="exercise">
              <p><strong>Original passage:</strong></p>
              <p>&ldquo;Manipur is a land of several possibility, especially for adventurous activities. The topography of Manipur offer opportunities for caving, rafting paragliding, rock climbing and wind surfing. Shirui Hills is one of the most famous treks in Manipur, and nature lovers throngs the roads leading in the range during the Shirui Lily festival.&rdquo;</p>
              <p className="mt-3"><strong>Error breakdown &amp; analysis:</strong></p>
              <ul>
                <li><strong>several possibility &rarr; several possibilities.</strong> Noun number (singular/plural). The quantifier several indicates more than two items, so it must always be followed by a plural countable noun.</li>
                <li><strong>topography of Manipur offer &rarr; topography of Manipur offers.</strong> Subject-verb agreement (singular subject). The true subject of the sentence is &ldquo;topography&rdquo;, which is a singular abstract noun. A singular subject requires a singular verb ending in &lsquo;s&rsquo; (&ldquo;offers&rdquo; instead of the plural &ldquo;offer&rdquo;).</li>
                <li><strong>nature lovers throngs &rarr; nature lovers throng.</strong> Subject-verb agreement (plural subject). The subject &ldquo;nature lovers&rdquo; is a plural noun phrase. Therefore, it requires the base plural form of the verb (&ldquo;throng&rdquo; without the &lsquo;s&rsquo;).</li>
                <li><strong>leading in the range &rarr; leading to the range (or into).</strong> Preposition of direction. The word leading implies movement or direction toward a destination, requiring the preposition &ldquo;to&rdquo; or &ldquo;into&rdquo; rather than the static preposition of location &ldquo;in.&rdquo;</li>
              </ul>
            </Expandable>
          </section>

          <section id="editing-steps" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Editing Checklist</h2>
            <Checklist
              items={[
                { label: "Read the whole passage once for meaning before changing anything" },
                { label: "Check every verb against its subject (agreement)" },
                { label: "Keep the tense and time frame consistent" },
                { label: "Look at every noun: does it need a / an / the?" },
                { label: "Check prepositions in fixed phrases (depend on, married to)" },
                { label: "Watch word forms: adjective vs adverb" },
                { label: "Read aloud to catch spelling and punctuation slips" },
              ]}
            />
          </section>

          <section id="common-mistakes" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
            <MistakeCard
              mistake="The number of students are increasing."
              correction="The number of students is increasing."
              example="'The number of' takes a singular verb; 'a number of' takes a plural verb."
            />
            <MistakeCard
              mistake="He did not went to school."
              correction="He did not go to school."
              example="After 'did not', use the base form of the verb — never the past tense."
            />
            <MistakeCard
              mistake="One of my friend is a teacher."
              correction="One of my friends is a teacher."
              example="'One of' is always followed by a plural noun, but the verb stays singular."
            />
            <MistakeCard
              mistake="You may doubts the truth of the legend."
              correction="You may doubt the truth of the legend."
              example="Modal verbs (may, can, should, will) always take the base verb — never add 's'."
            />
            <MistakeCard
              mistake="He wants to specialize on physics."
              correction="He wants to specialize in physics."
              example="'Specialize' collocates with 'in' for a field or subject — never 'on'."
            />
            <MistakeCard
              mistake="The students were selected on random."
              correction="The students were selected at random."
              example="The fixed idiom is 'at random' — never 'on random'."
            />
          </section>

          <section id="key-takeaway" className="scroll-mt-24 mt-14">
            <KeyPoint>
              Editing is a <em>search</em>, not a rewrite. Work through a fixed checklist &mdash; agreement, tense, articles, prepositions, word form, spelling and punctuation &mdash; and change only what is wrong.
            </KeyPoint>
          </section>
        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
