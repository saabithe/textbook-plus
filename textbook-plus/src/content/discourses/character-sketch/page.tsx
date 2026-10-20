import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";

/** A fill-in field inside a character sketch or profile template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const TRAITS = [
  <Slot key="t1">[Trait 1 — e.g., courageous]</Slot>,
  <Slot key="t2">[Trait 2 — e.g., compassionate]</Slot>,
  <Slot key="t3">[Trait 3 — e.g., intelligent]</Slot>,
  <Slot key="t4">[Trait 4 — e.g., determined]</Slot>,
  <Slot key="t5">
    [Trait 5 — e.g., selfish / arrogant / insecure, if relevant]
  </Slot>,
  <Slot key="t6">
    [Trait 6 — e.g., undergoes significant character development, if
    applicable]
  </Slot>,
];

const CHARACTER_MIND_MAP = [
  {
    part: "I. Introduction",
    flow: "Name → Title & author → Role / background",
  },
  {
    part: "II. Personality",
    flow: "Trait list → For each trait: incident + explanation",
  },
  {
    part: "III. Development",
    flow: "Key incidents → Relationships → Flaws → Change",
  },
  {
    part: "IV. Conclusion",
    flow: "Assessment → Insight → Why memorable",
  },
];

function MindMapGrid({ items }: { items: { part: string; flow: string }[] }) {
  return (
    <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.part}
          className="rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm"
        >
          <p className="text-sm font-bold tracking-tight text-foreground">
            {item.part}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
            {item.flow}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function CharacterSketchContent() {
  return (
    <>
      <Callout type="note">
        These are the two look-alike person-tasks. A{" "}
        <strong>character sketch</strong> describes a character from a text —
        who they are, which traits the text reveals, and how they grow or stay
        the same. A <strong>profile</strong> presents a real person&rsquo;s life
        and achievements from the hints supplied in the question. Read the
        question to see which one is being asked.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="Sketch or profile?"
        headers={["Task", "Where the details come from", "The rule"]}
        rows={[
          {
            cells: [
              "Character Sketch",
              "The text — the character's words, actions, decisions, and relationships",
              "Every trait must be proved with an incident or statement from the text. Never invent a trait the text does not show.",
            ],
          },
          {
            cells: [
              "Profile",
              "The hints given in the question — dates, places, education, career, awards",
              "Turn each hint into a complete sentence, in a short connected paragraph. Never invent a fact the question did not supply.",
            ],
          },
        ]}
      />

      <h2>1. Character Sketch — From a Text</h2>
      <p>
        Use this frame for any character — fill in every <Slot>[...]</Slot>{" "}
        field with your own words.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[CHARACTER&apos;S NAME]</Slot>
          </h3>
          <p>
            Character Sketch of <Slot>[Character&apos;s Name]</Slot> from{" "}
            <Slot>[Title of the Text]</Slot> by <Slot>[Author&apos;s Name]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Characteristic Features
          </h4>
          <ul>
            {TRAITS.map((trait, i) => (
              <li key={i}>{trait}</li>
            ))}
          </ul>
          <div className="mt-1 text-sm italic text-muted-foreground">
            List only the traits that are relevant to the character and
            supported by the text.
          </div>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Introduction — Identity and Background
          </h4>
          <p>
            <Slot>[Character&apos;s Name]</Slot> is an important character in{" "}
            <Slot>[Title of the Text]</Slot>, written by{" "}
            <Slot>[Author&apos;s Name]</Slot>.{" "}
            <Slot>[He/She/They]</Slot> is{" "}
            <Slot>[briefly introduce the character&apos;s role, background, occupation, relationship to other characters, or position in the story]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Personality and Characteristic Features
          </h4>
          <p>
            <Slot>[Character&apos;s Name]</Slot> possesses several distinctive
            qualities that make <Slot>[him/her/them]</Slot> a memorable
            character. <Slot>[He/She/They]</Slot> is <Slot>[Trait 1]</Slot>,{" "}
            <Slot>[Trait 2]</Slot>, and <Slot>[Trait 3]</Slot>, as revealed
            through <Slot>[his/her/their]</Slot> words, actions, decisions, and
            relationships.
          </p>
          <p>
            One of the most striking qualities of{" "}
            <Slot>[Character&apos;s Name]</Slot> is <Slot>[Trait 1]</Slot>. This
            is evident when{" "}
            <Slot>[describe a relevant incident, action, decision, or statement from the text]</Slot>.
            This incident reveals{" "}
            <Slot>[explain how it demonstrates the trait]</Slot>.
          </p>
          <p>
            Another important characteristic is <Slot>[Trait 2]</Slot>.{" "}
            <Slot>[Explain how the character demonstrates this quality through a specific incident, action, or statement]</Slot>.
            This shows that{" "}
            <Slot>[interpret what the evidence reveals about the character]</Slot>.
          </p>
          <p>
            Furthermore, <Slot>[Character&apos;s Name]</Slot> displays{" "}
            <Slot>[Trait 3]</Slot> when{" "}
            <Slot>[describe relevant evidence from the text]</Slot>. This
            highlights <Slot>[explain the significance of the trait]</Slot>.
          </p>
          <div className="mt-1 text-sm italic text-muted-foreground">
            [If relevant, continue with additional traits from the bullet-point
            list. Expand each one with evidence and explanation rather than
            simply repeating the adjective.]
          </div>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Important Incidents, Relationships, and Character Development
          </h4>
          <p>
            An important incident that reveals{" "}
            <Slot>[Character&apos;s Name]</Slot>&apos;s personality occurs when{" "}
            <Slot>[describe a significant event from the story]</Slot>.{" "}
            <Slot>[Explain the character&apos;s response, decision, or behaviour and what it reveals about [his/her/their] personality, values, or beliefs]</Slot>.
          </p>
          <p>
            The character&apos;s relationship with{" "}
            <Slot>[another character / family / society]</Slot> also reveals{" "}
            <Slot>[his/her/their]</Slot>{" "}
            <Slot>[relevant quality, belief, weakness, or attitude]</Slot>.{" "}
            <Slot>[Explain how this relationship influences the character or the events of the story]</Slot>.
          </p>
          <p>
            Despite <Slot>[his/her/their]</Slot> positive qualities,{" "}
            <Slot>[Character&apos;s Name]</Slot> may also display{" "}
            <Slot>[weakness, limitation, contradiction, or flaw, if relevant]</Slot>.
            This makes the character{" "}
            <Slot>[more realistic / complex / significant in the story]</Slot>.
          </p>
          <p>
            As the story progresses,{" "}
            <Slot>[describe how the character changes, learns a lesson, faces a challenge, or remains consistent in personality, as applicable]</Slot>.{" "}
            <Slot>[His/Her/Their]</Slot> actions influence{" "}
            <Slot>[other characters / the central conflict / the outcome of the story]</Slot>{" "}
            by <Slot>[explain the impact]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Conclusion — Overall Assessment
          </h4>
          <p>
            In conclusion, <Slot>[Character&apos;s Name]</Slot> can be described
            as <Slot>[summarise the most important characteristics]</Slot>.
            Through <Slot>[his/her/their]</Slot> words, actions, and decisions,
            the author presents{" "}
            <Slot>[a relevant insight into human nature, society, or the central theme of the text]</Slot>.
            The character is important to the story because{" "}
            <Slot>[explain the character&apos;s contribution to the plot, central theme, or development of other characters]</Slot>.
            Thus, <Slot>[Character&apos;s Name]</Slot> remains a memorable
            character because <Slot>[state the main reason]</Slot>.
          </p>
        </div>
      </div>

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={CHARACTER_MIND_MAP} />

      <h2>2. Profile — From the Given Hints</h2>
      <p>
        A profile presents a person&rsquo;s life and achievements in a short,
        connected paragraph. Use only the sentences and details relevant to the
        information supplied — do not invent missing facts.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[PERSON&rsquo;S NAME]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Profile Paragraph
          </h4>
          <p>
            <Slot>[Person&rsquo;s Name]</Slot> was born on{" "}
            <Slot>[date]</Slot> in <Slot>[place]</Slot>.{" "}
            <Slot>[He/She/They]</Slot> belongs to{" "}
            <Slot>[family/background, if provided]</Slot> and received{" "}
            <Slot>[his/her/their]</Slot> early education at{" "}
            <Slot>[institution]</Slot>. Later, <Slot>[he/she/they]</Slot>{" "}
            pursued <Slot>[higher education or training]</Slot> in{" "}
            <Slot>[subject/field]</Slot> at <Slot>[institution]</Slot>.
          </p>
          <p>
            After completing <Slot>[his/her/their]</Slot> education,{" "}
            <Slot>[Person&rsquo;s Name]</Slot> began{" "}
            <Slot>[his/her/their]</Slot> career as a <Slot>[profession]</Slot>{" "}
            in <Slot>[year / place / organisation, if provided]</Slot>.{" "}
            <Slot>[He/She/They]</Slot> became well known for{" "}
            <Slot>[important achievement, work, or contribution]</Slot>. In
            addition, <Slot>[he/she/they]</Slot> made significant contributions
            to <Slot>[field / society / organisation]</Slot> through{" "}
            <Slot>[specific work or achievement]</Slot>.
          </p>
          <p>
            Furthermore, <Slot>[Person&rsquo;s Name]</Slot> received{" "}
            <Slot>[award / honour]</Slot> for <Slot>[reason]</Slot> in{" "}
            <Slot>[year]</Slot>. Among <Slot>[his/her/their]</Slot> notable
            achievements are <Slot>[achievement 1]</Slot> and{" "}
            <Slot>[achievement 2]</Slot>. Through{" "}
            <Slot>[his/her/their]</Slot> dedication to{" "}
            <Slot>[field or cause]</Slot>, <Slot>[he/she/they]</Slot> made a
            lasting impact on{" "}
            <Slot>[people / society / the relevant field]</Slot>.
          </p>
          <p>
            Thus, <Slot>[Person&rsquo;s Name]</Slot> is remembered for{" "}
            <Slot>[main achievement, contribution, or legacy]</Slot>.
          </p>
        </div>
      </div>

      <h3>Expanding Hints into Complete Sentences</h3>

      <TableCard
        headers={["Given hint", "Expanded sentence"]}
        rows={[
          {
            cells: [
              "Born — 15 May 1980 — Kochi",
              "She was born on 15 May 1980 in Kochi.",
            ],
          },
          {
            cells: [
              "Education — University of Kerala",
              "She received her education at the University of Kerala.",
            ],
          },
          {
            cells: ["Profession — scientist", "She worked as a scientist."],
          },
          {
            cells: [
              "Famous — scientific discoveries",
              "She became famous for her scientific discoveries.",
            ],
          },
          {
            cells: [
              "Award — contributions to science",
              "She received the award for her contributions to science.",
            ],
          },
          {
            cells: [
              "Founded — organisation — 2010",
              "She founded the organisation in 2010.",
            ],
          },
        ]}
        caption="These are illustrative examples, not facts about a particular person."
      />

      <h3>Essential Prepositions</h3>

      <TableCard
        headers={["Use", "Correct examples"]}
        rows={[
          { cells: ["Born on", "on 15 May 1980"] },
          { cells: ["Born in", "in India, in Kochi, in 1980"] },
          { cells: ["Educated at", "at a school or university"] },
          { cells: ["Degree in", "a degree in Physics"] },
          { cells: ["Worked as", "worked as a teacher"] },
          { cells: ["Worked for", "worked for an organisation"] },
          { cells: ["Famous for", "famous for scientific discoveries"] },
          { cells: ["Contributed to", "contributed to literature"] },
          { cells: ["Received an award for", "received an award for bravery"] },
          { cells: ["Dedicated to", "dedicated to public service"] },
          { cells: ["Impact on", "had an impact on society"] },
          {
            cells: [
              "Married to",
              "married to [name], if relevant and provided",
            ],
          },
        ]}
        caption="Born on a date, born in a place — the verb decides the preposition."
      />

      <h3>Useful Linking Phrases</h3>
      <ul>
        <li>
          <strong>For adding information:</strong> In addition, Furthermore,
          Moreover
        </li>
        <li>
          <strong>For sequence:</strong> Later, Subsequently, After completing
          [education]
        </li>
        <li>
          <strong>For achievements:</strong> As a result, Consequently, Through
          these efforts
        </li>
        <li>
          <strong>For significance:</strong> In recognition of [contribution],
          For this achievement
        </li>
        <li>
          <strong>For conclusion:</strong> Thus, Therefore, As a result of
          [his/her/their] contributions
        </li>
      </ul>

      <KeyPoint>
        Both tasks are built on evidence, never invention. A character sketch
        names a trait and proves it with an incident from the text; a profile
        turns each supplied hint into a complete sentence, joins the sentences
        with the right preposition and linking phrase, and leaves out everything
        the question did not give.
      </KeyPoint>
    </>
  );
}
