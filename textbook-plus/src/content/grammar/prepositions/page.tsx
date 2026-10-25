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
    id: "pr1", type: "mcq",
    question: "Choose the correct preposition: \"The meeting is ______ 3 o'clock.\"",
    options: ["in", "on", "at", "by"],
    answer: 2, explanation: "Use 'at' with specific times: at 3 o'clock, at noon, at midnight. 'On' is for a day or date, 'in' for a month, year or season.",
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
    answer: "in", explanation: "\"Interested in\" is a fixed phrase; memorise it as one unit.",
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
  {
    id: "pr6", type: "fill-blank",
    question: "Fill in: \"The final result will depend ______ how carefully the samples are prepared.\"",
    answer: "on", accepted: ["upon"],
    explanation: "\"Depend on\" is the fixed pattern; \"depend upon\" is a formal variant of it. \"Depend of\" and \"depend from\" are always wrong.",
  },
  {
    id: "pr7", type: "mcq",
    question: "Choose the correct preposition: \"She is very good ______ solving puzzles.\"",
    options: ["in", "at", "on", "with"],
    answer: 1, explanation: "'Good at' is the fixed phrase for a skill or activity. 'Good in' belongs to a place or a field (the best doctor in the hospital), not to the skill itself.",
  },
  {
    id: "pr8", type: "mcq",
    question: "Choose the correct preposition: \"She has been married ______ a doctor for five years.\"",
    options: ["to", "with", "by", "for"],
    answer: 0, explanation: "'Married to' is fixed: be married to someone, get married to someone. 'Married with' is one of the commonest preposition errors in Indian English.",
  },
  {
    id: "pr9", type: "mcq",
    question: "Choose the correct preposition: \"The teacher was angry ______ the boy for coming late.\"",
    options: ["at", "on", "with", "to"],
    answer: 2, explanation: "Be angry with a person, but angry at (or about) a thing: angry with the boy, angry at the delay.",
  },
  {
    id: "pr10", type: "mcq",
    question: "Choose the correct preposition: \"I prefer coffee ______ tea.\"",
    options: ["than", "over", "from", "to"],
    answer: 3, explanation: "'Prefer' pairs with 'to': prefer coffee to tea. 'Than' follows a comparative adjective (better than), never the verb prefer.",
  },
  {
    id: "pr11", type: "mcq",
    question: "Choose the correct preposition: \"The child is afraid ______ the dark.\"",
    options: ["from", "of", "with", "about"],
    answer: 1, explanation: "'Afraid of' is fixed: afraid of the dark, afraid of heights. 'Afraid from' is a direct translation error.",
  },
  {
    id: "pr12", type: "mcq",
    question: "Choose the correct preposition: \"The cat jumped ______ the box and settled inside it.\"",
    options: ["onto", "in", "into", "on"],
    answer: 2, explanation: "Movement towards the inside of something takes 'into' (jumped into the box). 'Onto' is movement towards a surface, while 'in' and 'on' report position, not movement.",
  },
  {
    id: "pr13", type: "mcq",
    question: "Which word completes the sentence? \"______ the bicycle, he also owns a motorcycle.\"",
    options: ["Beside", "Besides of", "Beside of", "Besides"],
    answer: 3, explanation: "'Besides' means 'in addition to'. 'Beside' means 'next to' and is a preposition of place: he stood beside the door.",
  },
  {
    id: "pr14", type: "mcq",
    question: "Choose the correct preposition: \"The window was broken ______ a stone.\"",
    options: ["by", "with", "from", "of"],
    answer: 1, explanation: "The tool or instrument takes 'with'; the doer takes 'by': the window was broken by the boy with a stone.",
  },
  {
    id: "pr15", type: "mcq",
    question: "Choose the correct preposition: \"The prize money was shared ______ the five winners.\"",
    options: ["among", "between", "within", "with"],
    answer: 0, explanation: "Use 'among' for three or more people or things and 'between' for two: the money was shared between the two sisters.",
  },
  {
    id: "pr16", type: "mcq",
    question: "Choose the correct preposition: \"She has been teaching at this school ______ ten years.\"",
    options: ["since", "from", "for", "during"],
    answer: 2, explanation: "Use 'for' with a length of time (for ten years) and 'since' with the starting point (since 2016).",
  },
  {
    id: "pr17", type: "mcq",
    question: "Choose the correct preposition: \"Wait here ______ I come back.\"",
    options: ["by", "until", "during", "within"],
    answer: 1, explanation: "'Until' means the waiting continues up to that moment. 'By' would mean not later than a deadline, and 'within' means before the end of a stated period.",
  },
  {
    id: "pr18", type: "fill-blank",
    question: "Fill in: \"The museum stays closed ______ the monsoon.\"",
    answer: "during",
    explanation: "Use 'during' before a named period or event (during the monsoon, during the interval). 'For' would need a measured length of time, such as 'for three months'.",
  },
  {
    id: "pr19", type: "mcq",
    question: "Which sentence is correct?",
    options: [
      "They discussed about the matter.",
      "They discussed the matter.",
      "They discussed on the matter.",
      "They discussed the matter about.",
    ],
    answer: 1, explanation: "'Discuss' takes its object directly, with no preposition: discuss the matter. The same is true of 'enter the room' and 'resemble her mother'.",
  },
  {
    id: "pr20", type: "mcq",
    question: "Which sentence is correct?",
    options: [
      "Please explain me the rule.",
      "Please explain the rule for me.",
      "Please explain me about the rule.",
      "Please explain the rule to me.",
    ],
    answer: 3, explanation: "'Explain' does not take two objects the way 'give' does. Put the thing first and the person after 'to': explain the rule to me.",
  },
  {
    id: "pr21", type: "fill-blank",
    question: "Fill in: \"The accident happened ______ Monday morning.\"",
    answer: "on",
    explanation: "A day keeps 'on' even when a part of the day is added: on Monday morning, on Sunday evening. Use 'in' only when the part of the day stands alone: in the morning.",
  },
];

export default function PrepositionsPage() {
  return (
    <GrammarTopicLayout
      questions={QUESTIONS}
      intro={<><Highlight color="yellow">Prepositions</Highlight> show the relationship between a noun and the words around it &mdash; time, place, direction or manner.</>}
    >

      <GrammarSection id="time-prepositions" title={<>Prepositions of Time</>}>
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
      </GrammarSection>

      <GrammarSection id="place-prepositions" title={<>Prepositions of Place</>}>
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
      </GrammarSection>

      <GrammarSection id="place-direction" title={<>Place and Direction</>}>
        <TableCard
          headers={["Preposition", "Use", "Examples"]}
          rows={[
            { cells: ["Into", "Movement towards the inside of something", "walked into the room, poured the milk into the cup"] },
            { cells: ["Onto", "Movement towards a surface", "climbed onto the roof, jumped onto the table"] },
            { cells: ["Through", "From one end of a space to the other, passing inside it", "walked through the tunnel, drove through the town"] },
            { cells: ["Across", "From one side to the other, over a surface or a line", "swam across the river, walked across the road"] },
            { cells: ["Along", "Following the length of something", "walked along the beach, the shops along the road"] },
            { cells: ["Beside", "Next to something", "She sat beside me. The cycle stands beside the gate."] },
            { cells: ["Besides", "In addition to (not a place word at all)", "Besides cricket, he plays hockey."] },
          ]}
          caption="Into and onto carry movement; in and on only report position."
        />
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          <p><strong>Position or movement?</strong> <em>In</em>, <em>on</em> and <em>at</em> answer &ldquo;where?&rdquo;; <em>into</em> and <em>onto</em> answer &ldquo;where to?&rdquo; That is why <em>He is in the room</em> and <em>He walked into the room</em> are both correct, but never interchangeable.</p>
          <p><Highlight color="yellow">Beside</Highlight> is a place word; <Highlight color="blue">besides</Highlight> means &ldquo;as well as&rdquo;. One extra <em>s</em> moves the word out of the place group altogether.</p>
        </div>
      </GrammarSection>

      <GrammarSection id="common-prepositions" title={<>Prepositions after Verbs and Adjectives</>}>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><Highlight color="yellow">Interested in</Highlight> &bull; <Highlight color="blue">Good at</Highlight> &bull; <Highlight color="green">Afraid of</Highlight></p>
          <p><Highlight color="yellow">Fond of</Highlight> &bull; <Highlight color="blue">Depend on</Highlight> &bull; <Highlight color="green">Look after</Highlight></p>
          <p><Highlight color="yellow">Listen to</Highlight> &bull; <Highlight color="blue">Belong to</Highlight> &bull; <Highlight color="green">Agree with</Highlight></p>
          <p><Highlight color="yellow">Apologise for</Highlight> &bull; <Highlight color="blue">Wait for</Highlight> &bull; <Highlight color="green">Consist of</Highlight></p>
          <p className="mt-3 text-sm text-muted-foreground">These must be memorised &mdash; no shortcut rule. Each verb/adjective pairs with a specific preposition.</p>
        </div>
        <TableCard
          headers={["Pattern", "Preposition", "Example"]}
          rows={[
            { cells: ["Married ______ someone", "to", "She is married to a doctor. (never 'married with')"] },
            { cells: ["Angry ______ a person", "with", "The teacher was angry with the boy."] },
            { cells: ["Angry ______ a thing or a situation", "at / about", "She was angry at the delay."] },
            { cells: ["Congratulate someone ______ something", "on", "We congratulated her on her success."] },
            { cells: ["Insist ______ something", "on", "He insisted on paying the bill."] },
            { cells: ["Prefer one thing ______ another", "to", "I prefer coffee to tea."] },
            { cells: ["Suffer ______ an illness", "from", "He suffers from asthma."] },
            { cells: ["Proud ______ something", "of", "They are proud of their son."] },
            { cells: ["Explain something ______ someone", "to", "Explain the rule to me."] },
            { cells: ["Different ______ something", "from", "This copy is different from that one."] },
            { cells: ["Apologise ______ someone ______ something", "to ... for", "She apologised to the teacher for the delay."] },
          ]}
          caption="The preposition is decided by the word before it, not by the noun after it."
        />
        <KeyPoint>
          Learn prepositions <strong>inside phrases</strong>, never as single words. A preposition has almost no meaning on its own &mdash; the verb or adjective in front of it chooses it. So memorise <em>depend on</em>, <em>proud of</em> and <em>married to</em> as one unit, and never translate the preposition from your first language.
        </KeyPoint>
      </GrammarSection>

      <GrammarSection id="pairs" title={<>By, With, Since, For, During</>}>
        <TableCard
          headers={["Pair", "The difference", "In sentences"]}
          rows={[
            { cells: ["by / with", "By names the doer (the agent); with names the tool or instrument", "The window was broken by the boy with a stone."] },
            { cells: ["since / for", "Since marks the point where something started; for measures how long it has lasted", "She has taught here since 2016. She has taught here for ten years."] },
            { cells: ["during / for", "During sits inside a named period or event; for measures a length of time", "The roads flood during the monsoon. It rained for three days."] },
            { cells: ["until / by", "Until means the action carries on up to that moment; by means not later than that moment", "Wait until six o'clock. Submit the form by six o'clock."] },
            { cells: ["within / by", "Within means before the end of a stated period; by points to one deadline", "Reply within a week. Reply by Friday."] },
          ]}
          caption="Each row is a pair that learners swap by mistake: one word of the pair changes the whole meaning."
        />
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75] mt-4">
          <p><strong>Agent or instrument?</strong> If the subject of the active sentence did the action, the passive takes <em>by</em>; if the subject was only the tool, it takes <em>with</em>. <em>The letter was written by Ravi with a fountain pen.</em></p>
          <p><strong>Point or length?</strong> Ask &ldquo;when did it start?&rdquo; for <em>since</em> and &ldquo;how long?&rdquo; for <em>for</em>. <em>Until</em> and <em>by</em> both look forward to a moment: <em>until</em> for an action that continues, <em>by</em> for a deadline.</p>
        </div>
      </GrammarSection>

      <GrammarSection id="common-mistakes" title={<>Common Mistakes</>}>
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
          mistake="The movie is different than the book."
          correction="The movie is different from the book."
          example="In formal British English, use 'different from'. 'Different than' is American, and 'different to' is informal British."
        />
        <MistakeCard
          mistake="They discussed about the matter."
          correction="They discussed the matter."
          example="'Discuss' takes its object directly, with no preposition. The same applies to 'enter the room' and 'resemble her mother'."
        />
        <MistakeCard
          mistake="She is married with an engineer."
          correction="She is married to an engineer."
          example="'Married' always pairs with 'to' &mdash; be married to, get married to. 'Married with' is never correct for a spouse."
        />
        <MistakeCard
          mistake="Please explain me the rule."
          correction="Please explain the rule to me."
          example="'Explain' cannot take two objects the way 'give' does. Name the thing first, then add 'to' before the person: explain the rule to me."
        />
        <MistakeCard
          mistake="The accident happened in the morning of Monday."
          correction="The accident happened on Monday morning."
          example="A day takes 'on', and it keeps 'on' even when a part of the day is added. Use 'in' only when the part of the day stands alone: in the morning."
        />
        <MistakeCard
          mistake="He is angry on his brother."
          correction="He is angry with his brother."
          example="Angry with a person, angry at or about a thing: angry with his brother, angry at the noise."
        />
        <MistakeCard
          mistake="I prefer tea than coffee."
          correction="I prefer tea to coffee."
          example="'Prefer' pairs with 'to', never with 'than'. 'Than' belongs after a comparative: tea is better than coffee."
        />
      </GrammarSection>

      <GrammarSection id="key-takeaway"><KeyPoint>
          Prepositions of time: <strong>at</strong> (specific time), <strong>on</strong> (days), <strong>in</strong> (periods). Prepositions of place: <strong>at</strong> (point), <strong>on</strong> (surface), <strong>in</strong> (enclosed space). Fixed phrases (interested in, good at, depend on) must be memorised individually.
        </KeyPoint>
      </GrammarSection>
    </GrammarTopicLayout>
  );
}