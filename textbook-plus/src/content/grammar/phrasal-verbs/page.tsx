"use client";

import { useState } from "react";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";

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
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          A <Highlight color="yellow">phrasal verb</Highlight> is a verb combined with a particle such as <em>up</em>, <em>off</em> or <em>out</em>, whose meaning cannot be guessed from the two words alone.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Phrasal Verbs</h2>
        <TableCard
          headers={["Phrasal verb", "Meaning", "Example"]}
          rows={PHRASAL_TABLE}
          caption="Learn phrasal verbs as whole units, in a sentence — never word by word."
        />
      </section>

      <section id="separable" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Separable or Inseparable?</h2>
        <TableCard
          headers={["Type", "Rule", "Example"]}
          rows={SEPARABLE_TABLE}
          caption="When in doubt, keep the verb and particle together — that order is almost always safe."
        />
      </section>

      <section id="families" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Phrasal Verbs by Family</h2>
        <TableCard title="Go" headers={["Phrasal verb", "Meaning"]} rows={GO_TABLE} />
        <TableCard title="Come" headers={["Phrasal verb", "Meaning"]} rows={COME_TABLE} />
        <TableCard title="Put" headers={["Phrasal verb", "Meaning"]} rows={PUT_TABLE} />
        <TableCard title="Take" headers={["Phrasal verb", "Meaning"]} rows={TAKE_TABLE} />
        <TableCard title="Give" headers={["Phrasal verb", "Meaning"]} rows={GIVE_TABLE} />
        <TableCard title="Make" headers={["Phrasal verb", "Meaning"]} rows={MAKE_TABLE} />
      </section>

      <section id="choose-right" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Choose the Right Phrasal Verb</h2>
        <ExerciseQa
          questions={[
            <span key="q1">Complete with a phrasal verb from the brackets (speak up, take for, give up, speak for, take off): a) The flight will &hellip; in 5 minutes. b) Work hard. Don&rsquo;t &hellip; your bold steps.</span>,
          ]}
          answers={[
            <span key="a1"><strong>a) take off, b) give up.</strong> The flight will <em>take off</em> in 5 minutes. Work hard &mdash; don&rsquo;t <em>give up</em> your bold steps.</span>,
          ]}
        />
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
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
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          Learn phrasal verbs as fixed units with their meaning. Check whether the verb is <em>separable</em> (object can sit in the middle) or <em>inseparable</em> (object must follow) &mdash; and remember that a pronoun in a separable verb always goes in the middle.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
