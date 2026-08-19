"use client";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "pr1", type: "mcq",
    question: "Choose the correct preposition: \"The meeting is ______ 3 o'clock.\"",
    options: ["in", "on", "at", "by"],
    answer: 2, explanation: "Use 'at' with specific times: at 3 o'clock, at noon, at midnight.",
  },
  {
    id: "pr2", type: "mcq",
    question: "Choose the correct preposition: \"She was born ______ January.\"",
    options: ["in", "on", "at", "for"],
    answer: 0, explanation: "Use 'in' with months, years and longer periods: in January, in 2020, in summer.",
  },
  {
    id: "pr3", type: "fill-blank",
    question: "Fill in: \"He is interested ______ learning French.\"",
    answer: "in", explanation: "\"Interested in\" is the correct preposition搭配 — memorise it as a fixed phrase.",
  },
  {
    id: "pr4", type: "mcq",
    question: "Choose the correct preposition: \"The book is ______ the table.\"",
    options: ["in", "at", "on", "by"],
    answer: 2, explanation: "Use 'on' for surfaces: on the table, on the floor, on the wall.",
  },
  {
    id: "pr5", type: "mcq",
    question: "Which sentence uses a preposition correctly?",
    options: [
      "She arrived to the airport.",
      "She arrived at the airport.",
      "She arrived on the airport.",
      "She arrived in the airport.",
    ],
    answer: 1, explanation: "'Arrive at' is used for specific places (the airport, the station). 'Arrive in' is used for cities/countries.",
  },
];

export default function PrepositionsPage() {
  return (
    <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Prepositions</Highlight> show the relationship between a noun (or pronoun) and other words in a sentence — time, place, direction, or manner. They are small words (in, on, at, by, with) but choosing the right one is crucial.
        </Callout>
      </section>

      <section id="time-prepositions" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Prepositions of Time</h2>
        <TableCard
          headers={["Preposition", "Use", "Examples"]}
          rows={[
            { cells: ["At", "Specific time, festivals", "at 3 pm, at noon, at Christmas, at night"] },
            { cells: ["On", "Days, dates, specific days", "on Monday, on 15th March, on my birthday"] },
            { cells: ["In", "Months, years, seasons, longer periods", "in January, in 2025, in summer, in the morning"] },
            { cells: ["For", "Duration of time", "for two hours, for three years"] },
            { cells: ["Since", "Starting point in time", "since 2015, since Monday"] },
            { cells: ["By", "Before a deadline", "by tomorrow, by next Friday"] },
          ]}
          caption="The three big ones: at (time), on (day), in (period)"
        />
      </section>

      <section id="place-prepositions" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Prepositions of Place</h2>
        <TableCard
          headers={["Preposition", "Use", "Examples"]}
          rows={[
            { cells: ["At", "Specific point", "at the door, at the bus stop, at school"] },
            { cells: ["On", "Surface, or on a line", "on the table, on the wall, on page 10"] },
            { cells: ["In", "Enclosed space, or in an area", "in the room, in the garden, in Mumbai"] },
            { cells: ["Between", "Two things", "between A and B"] },
            { cells: ["Among", "Three or more things", "among the students"] },
          ]}
        />
      </section>

      <section id="common-prepositions" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Fixed Prepositions (Learn These!)</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><Highlight color="yellow">Interested in</Highlight> &bull; <Highlight color="blue">Good at</Highlight> &bull; <Highlight color="green">Afraid of</Highlight></p>
          <p><Highlight color="yellow">Fond of</Highlight> &bull; <Highlight color="blue">Depend on</Highlight> &bull; <Highlight color="green">Look after</Highlight></p>
          <p><Highlight color="yellow">Listen to</Highlight> &bull; <Highlight color="blue">Belong to</Highlight> &bull; <Highlight color="green">Agree with</Highlight></p>
          <p><Highlight color="yellow">Apologise for</Highlight> &bull; <Highlight color="blue">Wait for</Highlight> &bull; <Highlight color="green">Consist of</Highlight></p>
          <p className="mt-3 text-sm text-muted-foreground">These must be memorised — no shortcut rule. Each verb/adjective pairs with a specific preposition.</p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="She arrived to school late."
          correction="She arrived at school late."
          example="'Arrive' takes 'at' (specific places) or 'in' (cities/countries), never 'to'."
        />
        <MistakeCard
          mistake="I am waiting from two hours."
          correction="I have been waiting for two hours."
          example="Use 'for' with duration, not 'from'. 'Since' is used with a starting point."
        />
        <MistakeCard
          mistake="The movie is different from the book."
          correction="The movie is different from the book."
          example="'Different from' is correct in most formal writing. 'Different to' (British) and 'different than' (American) exist but 'from' is safest."
        />
      </section>

      <section id="practice" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Practice</h2>
        <GrammarQuiz questions={QUESTIONS} />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Prepositions of time: <strong>at</strong> (specific time), <strong>on</strong> (days), <strong>in</strong> (periods). Prepositions of place: <strong>at</strong> (point), <strong>on</strong> (surface), <strong>in</strong> (enclosed space). Fixed phrases (interested in, good at, depend on) must be memorised individually.
        </KeyPoint>
      </section>
    </>
  );
}