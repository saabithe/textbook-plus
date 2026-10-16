"use client";

import { useState } from "react";

import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "ar1", type: "mcq",
    question: "\"He is ________ honest man.\"",
    options: ["a", "an", "the", "(no article)"],
    answer: 1,
    explanation: "\u201cHonest\u201d begins with a vowel sound (the h is silent), so we use \u201can\u201d.",
  },
  {
    id: "ar2", type: "mcq",
    question: "\"She is ________ best student in the class.\"",
    options: ["a", "an", "the", "(no article)"],
    answer: 2,
    explanation: "Superlatives always take \u201cthe\u201d.",
  },
  {
    id: "ar3", type: "mcq",
    question: "Choose the correct sentence.",
    options: [
      "She plays the cricket every evening.",
      "She plays cricket every evening.",
      "She plays a cricket every evening.",
      "She plays an cricket every evening.",
    ],
    answer: 1,
    explanation: "Names of games and sports take no article.",
  },
  {
    id: "ar4", type: "fill-blank",
    question: "Fill in (one word): \"I saw a dog. ________ dog was very friendly.\"",
    answer: "The",
    explanation: "Use \u201cthe\u201d for a noun that has already been mentioned.",
  },
  {
    id: "ar5", type: "mcq",
    question: "Choose the correct phrase.",
    options: ["a university", "an university", "an European", "the university of arts"],
    answer: 0,
    explanation: "\u201cUniversity\u201d begins with the consonant sound /ju\u02d0/, so we use \u201ca\u201d; \u201cEuropean\u201d also takes \u201ca\u201d.",
  },
];

const RULES_TABLE = [
  { cells: ["First mention \u2192 a / an; later mention \u2192 the", "I saw a dog. The dog was friendly."] },
  { cells: ["A singular countable noun needs an article", "She has a cat. (not \u201cShe has cat.\u201d)"] },
  { cells: ["Unique or specific things \u2192 the", "the sun, the Earth, the President"] },
  { cells: ["Superlatives and ordinals \u2192 the", "the best, the first time"] },
  { cells: ["General plurals / uncountables \u2192 no article", "Dogs are loyal. Water is life."] },
  { cells: ["Jobs, rates and frequency \u2192 a / an", "She is a doctor. / twice a week"] },
  { cells: ["Fixed phrases", "in the morning, at night, go to bed"] },
];

export default function ArticlesPage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
      <section id="introduction" className="scroll-mt-24">
        <Callout type="note">
          <Highlight color="yellow">Articles</Highlight> are the little words <em>a</em>, <em>an</em> and <em>the</em>. They tell the reader whether a noun is being mentioned for the first time (<em>a / an</em>) or is already known and specific (<em>the</em>) &mdash; and sometimes no article is needed at all.
        </Callout>
      </section>

      <section id="rules" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Rules at a Glance</h2>
        <TableCard
          headers={["Rule", "Example"]}
          rows={RULES_TABLE}
          caption="Ask two questions: is the noun countable? and is it specific? The answers decide the article."
        />
      </section>

      <section id="a-vs-an" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">a or an?</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p>The choice depends on the <strong>sound</strong>, not the letter.</p>
          <p><strong>a</strong> before a consonant sound: <em>a university</em>, <em>a European</em>, <em>a one-way street</em>.</p>
          <p><strong>an</strong> before a vowel sound: <em>an hour</em>, <em>an MBA</em>, <em>an honest man</em>.</p>
        </div>
      </section>

      <section id="zero-article" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">When to Use No Article</h2>
        <div className="space-y-2.5 text-foreground/90 text-[1.0625rem] leading-[1.75]">
          <p><strong>General plurals and uncountables:</strong> <em>Books are expensive. Water is precious.</em></p>
          <p><strong>Most proper nouns:</strong> <em>India, Chennai, Mount Everest</em> (but <em>the Himalayas, the Ganges</em>).</p>
          <p><strong>Meals, languages and games:</strong> <em>have breakfast, speak English, play cricket</em>.</p>
          <p><strong>Means of transport:</strong> <em>by bus, by train</em> (but <em>on the bus, in the car</em>).</p>
        </div>
      </section>

      <section id="common-mistakes" className="scroll-mt-24 mt-14">
        <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
        <MistakeCard
          mistake="He is a honest man."
          correction="He is an honest man."
          example="The 'h' in 'honest' is silent, so the word begins with a vowel sound and takes 'an'."
        />
        <MistakeCard
          mistake="I have an European friend."
          correction="I have a European friend."
          example="'European' begins with the consonant sound /j/, so it takes 'a'."
        />
        <MistakeCard
          mistake="The both sisters are doctors."
          correction="Both sisters are doctors."
          example="'Both' already makes the noun specific — do not add 'the' before it."
        />
      </section>

      <section id="key-takeaway" className="scroll-mt-24 mt-14">
        <KeyPoint>
          <em>a / an</em> for a first, non-specific mention (chosen by <em>sound</em>: a university, an hour); <em>the</em> for something specific or unique; and <em>no article</em> for general plurals, uncountables, most proper nouns, meals, languages and games.
        </KeyPoint>
      </section>

        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
