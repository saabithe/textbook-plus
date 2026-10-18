import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside an idea elaboration template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const ELABORATION_MIND_MAP = [
  {
    part: "I. Introduction",
    flow: "Given idea → Meaning in simple words",
  },
  {
    part: "II. Explanation",
    flow: "Detail → Reasoning → Implication",
  },
  {
    part: "III. Example",
    flow: "Real-life example + connection to the idea",
  },
  {
    part: "IV. Wider Meaning",
    flow: "Application to life / society",
  },
  {
    part: "V. Conclusion",
    flow: "Central message → Final thought",
  },
];

function MindMapGrid({ items }: { items: { part: string; flow: string }[] }) {
  return (
    <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
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

export default function IdeaElaborationContent() {
  return (
    <>
      <Callout type="note">
        Idea elaboration (paragraph writing) expands a given quotation, proverb
        or idea into one unified paragraph. The exam gives you the idea; you
        develop it step by step — meaning, explanation, example, application,
        message.
      </Callout>

      <h2>Idea Elaboration Template</h2>
      <p>
        Use this frame for any given idea — fill in every <Slot>[...]</Slot>{" "}
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
            <Slot>[TITLE / GIVEN IDEA]</Slot>
          </h3>
          <p>
            Given idea: &ldquo;
            <Slot>[Write the given quotation, proverb, saying, or idea.]</Slot>
            &rdquo;
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Introduction — Meaning of the Idea
          </h4>
          <p>
            The idea &ldquo;<Slot>[given idea]</Slot>&rdquo; conveys the message
            that <Slot>[explain its meaning in simple words]</Slot>. In other
            words, it suggests that <Slot>[restate the idea in your own words]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Explanation — Developing the Idea
          </h4>
          <p>
            This idea highlights the importance of{" "}
            <Slot>[central concept or value]</Slot>. It means that{" "}
            <Slot>[explain the idea in greater detail]</Slot>. The reason behind
            this is that <Slot>[give a logical explanation or supporting argument]</Slot>.
          </p>
          <p>
            Moreover, <Slot>[develop another relevant aspect of the idea]</Slot>.
            Therefore, the idea encourages us to understand that{" "}
            <Slot>[important implication or lesson]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Example — Supporting the Idea
          </h4>
          <p>
            A suitable example of this idea can be seen in{" "}
            <Slot>[a real-life situation / a historical event / a familiar experience]</Slot>.{" "}
            <Slot>[Briefly describe the example and explain how it demonstrates the given idea.]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Wider Meaning — Application to Life and Society
          </h4>
          <p>
            This idea is relevant not only to individuals but also to society as
            a whole. In our daily lives, it reminds us to{" "}
            <Slot>[practical lesson or action]</Slot>. It also highlights the
            importance of <Slot>[relevant value, behaviour, or social principle]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            V. Conclusion — Final Message
          </h4>
          <p>
            In conclusion, &ldquo;<Slot>[given idea]</Slot>&rdquo; teaches us
            that <Slot>[restate the central message]</Slot>. By understanding
            and applying this principle in our lives, we can{" "}
            <Slot>[positive outcome or lesson]</Slot>. Ultimately,{" "}
            <Slot>[finish with a meaningful final thought related to the idea]</Slot>.
          </p>
        </div>
      </div>

      <h2>Mind Map — for memorisation</h2>
      <MindMapGrid items={ELABORATION_MIND_MAP} />

      <h2>Exam Rules</h2>
      <ul>
        <li>
          <strong>Understand first:</strong> Explain what the quotation actually
          means before elaborating on it.
        </li>
        <li>
          <strong>Develop logically:</strong> Explain the idea rather than
          merely repeating it in different words.
        </li>
        <li>
          <strong>Use a relevant example:</strong> A short, accurate example
          with a clear connection is better than an unrelated story.
        </li>
        <li>
          <strong>Adapt the wider meaning:</strong> Some ideas focus on
          personal character; others concern education, relationships, society,
          success, or life.
        </li>
        <li>
          <strong>Keep it unified:</strong> Every sentence should support the
          given idea. Avoid unrelated arguments and unnecessary repetition.
        </li>
        <li>
          <strong>Flexible structure:</strong> The example and wider
          application can be combined if the answer needs to be shorter. Use a
          title when appropriate or when the question requires one.
        </li>
      </ul>

      <KeyPoint>
        Elaboration is development, not repetition — mean the idea first,
        explain it with reasons, prove it with one connected example, apply it
        to life and society, and close with the central message.
      </KeyPoint>
    </>
  );
}
