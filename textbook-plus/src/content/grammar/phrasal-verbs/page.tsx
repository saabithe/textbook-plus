"use client";

import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarSection } from "@/components/grammar/GrammarSection";
import { GrammarTopicLayout } from "@/components/grammar/GrammarTopicLayout";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "pv1", type: "mcq",
    question: "\"The meeting was ________ because of the strike.\" (postponed)",
    options: ["put off", "put on", "put out", "put up"],
    answer: 0,
    explanation: "\u201cPut off\u201d means to postpone.",
  },
  {
    id: "pv2", type: "mcq",
    question: "\"I look forward to ________ you.\"",
    options: ["see", "seeing", "saw", "seen"],
    answer: 1,
    explanation: "In \u201clook forward to\u201d, \u201cto\u201d is a preposition, so it is followed by the -ing form.",
  },
  {
    id: "pv3", type: "mcq",
    question: "Choose the correct sentence (separable phrasal verb with a pronoun).",
    options: [
      "Please turn off it.",
      "Please turn it off.",
      "Please turn off.",
      "Please it turn off.",
    ],
    answer: 1,
    explanation: "With a separable phrasal verb, a pronoun object must go between the verb and the particle.",
  },
  {
    id: "pv4", type: "mcq",
    question: "\"She ________ her little brother while her mother was at work.\"",
    options: [
      "looks after",
      "looks after for",
      "looks her brother after",
      "looks for after",
    ],
    answer: 0,
    explanation: "\u201cLook after\u201d (= take care of) is inseparable: the object follows the particle.",
  },
  {
    id: "pv5", type: "fill-blank",
    question: "Replace the words in brackets with a phrasal verb: \"He ______ smoking last year. (stopped)\"",
    answer: "gave up",
    explanation: "\u201cGive up\u201d means to stop doing something (past tense: \u201cgave up\u201d).",
  },
  {
    id: "pv6", type: "mcq",
    question: "\"The flight will ________ in 5 minutes.\"",
    options: ["take off", "take for", "give up", "speak up"],
    answer: 0,
    explanation: "\u201cTake off\u201d = rise into the air (of an aircraft).",
  },
  {
    id: "pv7", type: "mcq",
    question: "\"They offered him the job, but he ________ it.\"",
    options: ["turned down", "turned off", "turned up", "turned on"],
    answer: 0,
    explanation: "\u201cTurn down\u201d = reject or refuse an offer. \u201cTurn off\u201d and \u201cturn on\u201d are used for devices, and \u201cturn up\u201d means to arrive.",
  },
  {
    id: "pv8", type: "mcq",
    question: "\"She always tries to ________ the needs of her team members during discussions.\"",
    options: ["speak up", "take after", "stand up for", "look after"],
    answer: 2,
    explanation: "\u201cStand up for\u201d = defend or support \u2014 she advocates for her team's needs.",
  },
  {
    id: "pv9", type: "mcq",
    question: "Choose the correct sentence (separable phrasal verb with a pronoun).",
    options: [
      "Can you pick up me at six?",
      "Can you pick me up at six?",
      "Can you pick up at six me?",
      "Can you me pick up at six?",
    ],
    answer: 1,
    explanation: "\u201cPick up\u201d is separable, so a pronoun object must sit between the verb and the particle: \u201cpick me up\u201d.",
  },
  {
    id: "pv10", type: "fill-blank",
    question: "Replace the italicised phrase with a phrasal verb: \"After the argument, they finally agreed and became friends again.\" \u2192 They finally ________.",
    answer: "made up",
    accepted: ["made it up", "made up again"],
    explanation: "\u201cMake up\u201d means to reconcile after a quarrel (past form: \u201cmade up\u201d).",
  },
  {
    id: "pv11", type: "mcq",
    question: "\"The fire brigade arrived quickly and ________ the fire.\"",
    options: ["put out", "put off", "put up", "put on"],
    answer: 0,
    explanation: "\u201cPut out\u201d = extinguish (a fire or light).",
  },
  {
    id: "pv12", type: "mcq",
    question: "\"Our old car finally ________ on the highway.\" (stopped working)",
    options: ["gave in", "gave off", "gave out", "gave up"],
    answer: 2,
    explanation: "\u201cGive out\u201d = stop working or run out. (\u201cGive up\u201d means to quit; \u201cgive off\u201d means to emit; \u201cgive in\u201d means to concede.)",
  },
  {
    id: "pv13", type: "mcq",
    question: "Which sentence uses its phrasal verb correctly?",
    options: [
      "I ran into my teacher at the market yesterday.",
      "I ran my teacher into at the market yesterday.",
      "I ran into at the market my teacher yesterday.",
      "I into ran my teacher at the market yesterday.",
    ],
    answer: 0,
    explanation: "\u201cRun into\u201d (= meet by chance) is inseparable \u2014 the object must follow the particle, so only the first sentence is correct.",
  },
  {
    id: "pv14", type: "mcq",
    question: "Cloze: \u201cI can\u2019t ________ your rudeness any longer, so I refuse to ________ my decision again.\u201d",
    options: [
      "put up with / put off",
      "put off / put up with",
      "put up / put off",
      "put across / put down",
    ],
    answer: 0,
    explanation: "\u201cPut up with\u201d = tolerate; \u201cput off\u201d = postpone. Option 3 drops the particle \u201cwith\u201d, and options 2 and 4 do not fit the meanings required.",
  },
  {
    id: "pv15", type: "mcq",
    question: "\"She ________ swimming to stay fit after work.\"",
    options: ["took up", "took off", "took over", "took in"],
    answer: 0,
    explanation: "\u201cTake up\u201d = begin a hobby or activity.",
  },
  {
    id: "pv16", type: "mcq",
    question: "\"The new manager will ________ the project next month.\"",
    options: ["take over", "take after", "take in", "take back"],
    answer: 0,
    explanation: "\u201cTake over\u201d = assume control of something.",
  },
  {
    id: "pv17", type: "mcq",
    question: "\"Can you ________ what this old letter says? The handwriting is hard to read.\"",
    options: ["make out", "make up", "make for", "make off"],
    answer: 0,
    explanation: "\u201cMake out\u201d = distinguish or decipher (something hard to read or see).",
  },
  {
    id: "pv18", type: "mcq",
    question: "Which sentence contains a phrasal-verb error?",
    options: [
      "He turned down the job offer.",
      "He turned the job offer down.",
      "He turned it down.",
      "He turned down it.",
    ],
    answer: 3,
    explanation: "\u201cTurn down\u201d is separable, so a pronoun must go in the middle: \u201cHe turned it down\u201d \u2014 never \u201cturned down it\u201d.",
  },
];

const PHRASAL_TABLE = [
  { cells: ["give up", "stop doing something", "He gave up smoking."] },
  { cells: ["put off", "postpone", "They put off the meeting."] },
  { cells: ["look after", "take care of", "She looks after her sister."] },
  { cells: ["run into", "meet by chance", "I ran into an old friend."] },
  { cells: ["turn down", "reject / reduce", "He turned down the offer."] },
  { cells: ["carry out", "perform, complete", "They carried out the plan."] },
  { cells: ["bring about", "cause to happen", "The reform brought about change."] },
  { cells: ["call off", "cancel", "They called off the match."] },
  { cells: ["get along (with)", "have a good relationship", "I get along with my cousins."] },
  { cells: ["look forward to", "await eagerly", "I look forward to seeing you."] },
];

const SEPARABLE_TABLE = [
  { cells: ["Separable", "The object may go between the verb and the particle", "turn off the light / turn the light off"] },
  { cells: ["Inseparable", "The object must follow the particle", "look after the baby (not \u201clook the baby after\u201d)"] },
  { cells: ["Separable + pronoun", "A pronoun object must go in the middle", "turn it off (not \u201cturn off it\u201d)"] },
];

const GO_TABLE = [
  { cells: ["Go on", "to continue"] },
  { cells: ["Go off", "to explode or make a noise"] },
  { cells: ["Go up", "to increase in price, level, or intensity"] },
  { cells: ["Go out", "to leave or socialise"] },
  { cells: ["Go through", "to experience or examine in detail"] },
];

const COME_TABLE = [
  { cells: ["Come in", "to enter"] },
  { cells: ["Come across", "to find or meet unexpectedly"] },
  { cells: ["Come up with", "to think of an idea or solution"] },
  { cells: ["Come back", "to return"] },
  { cells: ["Come down with", "to become ill with something"] },
];

const PUT_TABLE = [
  { cells: ["Put off", "to postpone"] },
  { cells: ["Put up with", "to tolerate"] },
  { cells: ["Put out", "to extinguish (a fire or light)"] },
  { cells: ["Put down", "to place on the ground or criticise"] },
  { cells: ["Put across", "to express or communicate effectively"] },
];

const TAKE_TABLE = [
  { cells: ["Take off", "to ascend (in an aircraft) or become successful"] },
  { cells: ["Take up", "to begin a hobby or activity"] },
  { cells: ["Take over", "to assume control"] },
  { cells: ["Take in", "to absorb or understand information"] },
  { cells: ["Take back", "to return something or withdraw a statement"] },
];

const GIVE_TABLE = [
  { cells: ["Give up", "to quit or surrender"] },
  { cells: ["Give in", "to yield or concede"] },
  { cells: ["Give out", "to distribute or run out"] },
  { cells: ["Give off", "to emit or release (a smell, heat, etc.)"] },
  { cells: ["Give away", "to donate or reveal something"] },
];

const MAKE_TABLE = [
  { cells: ["Make up", "to invent or reconcile after an argument"] },
  { cells: ["Make out", "to distinguish or decipher"] },
  { cells: ["Make for", "to move towards or result in"] },
  { cells: ["Make off", "to escape or run away"] },
  { cells: ["Make do", "to manage with what is available"] },
];

export default function PhrasalVerbsPage() {
  return (
    <GrammarTopicLayout
      questions={QUESTIONS}
      intro={<>A <Highlight color="yellow">phrasal verb</Highlight> is a verb combined with a particle such as <em>up</em>, <em>off</em> or <em>out</em>, whose meaning cannot be guessed from the two words alone.</>}
    >

      <GrammarSection id="rules" title={<>Common Phrasal Verbs</>}>
        <TableCard
          headers={["Phrasal verb", "Meaning", "Example"]}
          rows={PHRASAL_TABLE}
          caption="Learn phrasal verbs as whole units, in a sentence — never word by word."
        />
      </GrammarSection>

      <GrammarSection id="separable" title={<>Separable or Inseparable?</>}>
        <TableCard
          headers={["Type", "Rule", "Example"]}
          rows={SEPARABLE_TABLE}
          caption="When in doubt, keep the verb and particle together — that order is almost always safe."
        />
      </GrammarSection>

      <GrammarSection id="families" title={<>Phrasal Verbs by Family</>}>
        <TableCard title="Go" headers={["Phrasal verb", "Meaning"]} rows={GO_TABLE} />
        <TableCard title="Come" headers={["Phrasal verb", "Meaning"]} rows={COME_TABLE} />
        <TableCard title="Put" headers={["Phrasal verb", "Meaning"]} rows={PUT_TABLE} />
        <TableCard title="Take" headers={["Phrasal verb", "Meaning"]} rows={TAKE_TABLE} />
        <TableCard title="Give" headers={["Phrasal verb", "Meaning"]} rows={GIVE_TABLE} />
        <TableCard title="Make" headers={["Phrasal verb", "Meaning"]} rows={MAKE_TABLE} />
      </GrammarSection>

      <GrammarSection id="choose-right" title={<>Choose the Right Phrasal Verb</>}>
        <ExerciseQa
          questions={[
            <span key="q1">Complete with a phrasal verb from the brackets (speak up, take for, give up, speak for, take off): a) The flight will &hellip; in 5 minutes. b) Work hard. Don&rsquo;t &hellip; your bold steps.</span>,
          ]}
          answers={[
            <span key="a1"><strong>a) take off, b) give up.</strong> The flight will <em>take off</em> in 5 minutes. Work hard &mdash; don&rsquo;t <em>give up</em> your bold steps.</span>,
          ]}
        />
      </GrammarSection>

      <GrammarSection id="common-mistakes" title={<>Common Mistakes</>}>
        <MistakeCard
          mistake="I look forward to see you."
          correction="I look forward to seeing you."
          example="In 'look forward to', 'to' is a preposition, so it is followed by the -ing form."
        />
        <MistakeCard
          mistake="Please turn off it."
          correction="Please turn it off."
          example="With a separable phrasal verb, a pronoun object goes between the verb and the particle."
        />
        <MistakeCard
          mistake="She looks the baby after."
          correction="She looks after the baby."
          example="'Look after' is inseparable — the object comes after the particle."
        />
      </GrammarSection>

      <GrammarSection id="key-takeaway"><KeyPoint>
          Learn phrasal verbs as fixed units with their meaning. Check whether the verb is <em>separable</em> (object can sit in the middle) or <em>inseparable</em> (object must follow) &mdash; and remember that a pronoun in a separable verb always goes in the middle.
        </KeyPoint>
      </GrammarSection>
    </GrammarTopicLayout>
  );
}
