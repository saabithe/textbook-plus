import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Stepper } from "@/components/content/Stepper";

/** A fill-in field inside the precis frame. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/**
 * Renders text, turning every [placeholder] into a fill-in slot and every
 * **bold** segment into bold text.
 */
function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("[") && part.endsWith("]")) {
          return <Slot key={index}>{part}</Slot>;
        }
        if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/** The shared "fill-in frame" card shell. */
function FrameCard({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
        <span className="text-sm font-bold tracking-tight text-foreground">
          Fill-in frame — copy this structure
        </span>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

/** A section heading inside a frame card. */
function SubHead({ children }: { children: ReactNode }) {
  return (
    <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
      {children}
    </h4>
  );
}

function FillList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Fill text={item} />
        </li>
      ))}
    </ul>
  );
}

/** The shape of the whole task, as a numbered card grid. */
const MIND_MAP = [
  "Read the passage",
  "Identify the central idea",
  "Select essential points",
  "Remove unnecessary details",
  "Rewrite concisely in your own words",
  "Add a suitable title",
  "Check length, accuracy, and grammar",
];

const SAMPLE = {
  prompt:
    "Read the passage given below and write the précis of it.",
  passage: [
    "Trees give shade for the benefit of others, and while they themselves stand in the sun and endure the scorching heat, they produce the fruit of which others profit. The character of good men is like that of trees. What is the use of this perishable body if no use is made of it for the benefit of mankind? Sandalwood, the more it is rubbed, the more scent does it yield. Sugarcane, the more it is peeled and cut up into pieces, the more juice does it produce. The men who are noble at heart do not lose their qualities even in losing their lives. What matters whether men praise them or not? What difference does it make whether they die at this moment or whether lives are prolonged? Happen what may, those who tread in the right path will not set foot in any other. Life itself is unprofitable to a man who does not live for others. To live for the mere sake of living one's life is to live the life of dog and crows. Those who lay down their lives for the sake of others will assuredly dwell forever in a world of bliss.",
  ],
  title: "Good men live for others",
  precis:
    "The character of good men is like that of trees. They live for others and do not lose their qualities even in losing their lives. They always follow the right path. Praise is immaterial to them. To live for one's own sake is to lead the life of beasts. Only those who lay down their lives for others will live for ever in a world of bliss.",
};

const GUIDELINES = [
  "Read the comprehension carefully and note down only the important points.",
  "Make a rough draft of the précis.",
  "Make use of simple and precise language, as much as possible.",
  "**Use an appropriate title:** The précis needs to have a title, so the candidates must ensure that the title is in sync with the comprehension.",
  "**Details in the précis must match the details in the passage:** No other information apart from the one given in the passage must be included in the précis, and all the important information mentioned in the passage must certainly be included.",
  "The length of the précis must be shorter than the length of the passage.",
  "Do not add any unnecessary information in the précis.",
  "Avoid using abbreviations.",
  "Do not enter statements in the question format.",
  "Try to avoid using the same words as used in the original piece.",
  "The answer should be written in one paragraph only.",
];

const EXAM_GUIDELINES = [
  "**Preserve the original meaning:** Do not distort the author's ideas or message.",
  "**Be concise:** Include only the essential information; avoid unnecessary explanation.",
  "**Use your own words:** Avoid copying whole sentences from the passage unless a technical term or key expression must be retained.",
  "**Maintain logical order:** Present the ideas clearly and coherently.",
  "**Use connected prose:** Write a unified paragraph unless the question specifies another format.",
  "**Avoid personal opinions:** Do not add your own arguments, interpretations, or criticisms.",
  "**Avoid direct speech:** Convert dialogue or quotations into indirect statements when appropriate.",
  "**Choose an appropriate title:** It should reflect the passage's central theme.",
  "**Follow the prescribed word limit:** If a target length or reduction ratio is specified, follow it. Otherwise, use the instructions and marking scheme provided.",
  "**Check language and grammar:** Use clear sentences, correct tense, suitable linking words, and accurate punctuation.",
  "**Do not omit the central conclusion:** Preserve the passage's essential message, even when removing supporting details.",
  "**Do not add outside information:** Base the précis on the original passage alone.",
];

const METHOD = [
  {
    label: "Step 1: Read and Understand",
    description:
      "Read the passage carefully at least twice. Identify its central idea, purpose, and important supporting points.",
  },
  {
    label: "Step 2: Identify the Main Points",
    description:
      "Separate essential ideas from examples, repetitions, illustrations, unnecessary details, and minor explanations.",
  },
  {
    label: "Step 3: Draft the Precis",
    description:
      "Express the central idea and essential supporting points in your own words. Follow the original passage's logical order.",
  },
  {
    label: "Step 4: Give a Suitable Title",
    description:
      "Choose a brief title that represents the overall meaning of the passage.",
  },
  {
    label: "Step 5: Check and Refine",
    description:
      "Ensure that the précis is clear, coherent, accurate, grammatically correct, and considerably shorter than the original.",
  },
];

export default function PrecisWritingContent() {
  return (
    <>
      <Callout type="note">
        Précis writing is making an <strong>intelligent summary</strong> of a
        long passage — the passage cut down to its essential ideas, written in
        your own words, in one paragraph, under a title of your own. Nothing is
        added, and nothing important is left out.
      </Callout>

      <h2>Precis — Final Master Template</h2>
      <p>
        Use this frame for any passage — fill in every <Slot>[...]</Slot> field
        with your own words.
      </p>

      <FrameCard>
        <h3 className="!mt-0">Precis</h3>

        <SubHead>I. Title</SubHead>
        <p>
          <Slot>
            [Write a short, relevant title that captures the central idea of the
            passage.]
          </Slot>
        </p>

        <SubHead>II. Precis</SubHead>
        <p>
          <Fill text="[Begin with the central idea of the original passage in your own words.]" />
        </p>
        <p>
          <Fill text="[Summarise the most important supporting points, arguments, explanations, or events in a logical order.]" />
        </p>
        <p>
          <Fill text="[Include the main conclusion or message of the passage, if relevant.]" />
        </p>
      </FrameCard>

      <h2>Method — How to Write a Precis</h2>
      <Stepper
        steps={METHOD.map((step) => ({
          label: step.label,
          description: step.description,
        }))}
      />

      <h2>Mind Map</h2>
      <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MIND_MAP.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm"
          >
            <p className="text-sm font-bold tracking-tight text-foreground">
              {index + 1}. {step}
            </p>
          </div>
        ))}
      </div>

      <h2>Guidelines</h2>
      <FillList items={GUIDELINES} />

      <h2>Exam Guidelines</h2>
      <ol>
        {EXAM_GUIDELINES.map((item) => (
          <li key={item}>
            <Fill text={item} />
          </li>
        ))}
      </ol>

      <h2>Sample</h2>
      <p>
        <em>{SAMPLE.prompt}</em>
      </p>

      <Expandable title="Precis — Trees and Good Men" variant="example">
        <p>
          <strong>Passage</strong>
        </p>
        {SAMPLE.passage.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <strong>Model précis</strong>
        </p>
        <p>
          <strong>{SAMPLE.title}</strong>
        </p>
        <p>{SAMPLE.precis}</p>
      </Expandable>

      <KeyPoint>
        A précis is the passage in miniature: the same meaning, the author&rsquo;s
        own ideas only, your own words, a single paragraph, and a title that
        names the central idea — always shorter than the original.
      </KeyPoint>
    </>
  );
}
