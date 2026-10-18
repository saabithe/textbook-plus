import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { Checklist } from "@/components/content/data/Checklist";

/** A fill-in field inside the speech template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const MIND_MAP = [
  { part: "I. Opening", flow: "Salutation → Hook → Introduction" },
  { part: "II. Main Body", flow: "Problem → Evidence / Effects → Solutions" },
  { part: "III. Conclusion", flow: "Main message → Desired outcome" },
  { part: "IV. Closing", flow: "Appeal → Final words → Thanks" },
];

export default function SpeechContent() {
  return (
    <>
      <Callout type="note">
        Speech writing appears in the Kerala Board exam as a 5-mark question. A
        speech is spoken aloud — it must sound natural when read, use rhetorical
        devices, and have a clear structure with a compelling opening and
        closing.
      </Callout>

      <h2>Speech Template</h2>
      <p>
        Use this frame for any speech topic — fill in every <Slot>[...]</Slot>{" "}
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
            Speech on <Slot>[Topic]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Greeting and Opening
          </h4>
          <p>Respected Principal, teachers and my dear friends,</p>
          <p>Good morning to one and all.</p>
          <p>
            It gives me great pleasure to stand before you today to express my
            views on the topic &ldquo;<Slot>[Topic]</Slot>.&rdquo; I sincerely
            thank the organisers for providing me with this valuable
            opportunity to speak on this important subject.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Introduction — Meaning and Importance
          </h4>
          <p>
            First of all, let me ask you a simple question:{" "}
            <Slot>[A relevant, thought-provoking question about the topic]</Slot>
          </p>
          <p>
            <Slot>[Topic]</Slot> is one of the most important issues in
            today&apos;s world. It refers to{" "}
            <Slot>[brief explanation or definition of the topic]</Slot>. In the
            present situation, it has become increasingly important because{" "}
            <Slot>[reason or background]</Slot>. It affects{" "}
            <Slot>[individuals, society, the environment or the nation]</Slot>{" "}
            in several ways, making it necessary for us to understand its
            significance.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Main Body — Ideas, Examples, Problems and Solutions
          </h4>
          <p>
            To begin with, <Slot>[first major point]</Slot>. This is important
            because <Slot>[explanation or supporting reason]</Slot>. Moreover,{" "}
            <Slot>[second major point]</Slot>, which further highlights the
            significance of this topic. Another important aspect is{" "}
            <Slot>[third major point, if relevant]</Slot>.
          </p>
          <p>
            For instance,{" "}
            <Slot>[a suitable real-life example, fact or situation]</Slot>{" "}
            clearly illustrates how{" "}
            <Slot>[connect the example to the topic]</Slot>. These points help
            us understand the wider impact of <Slot>[topic]</Slot> on our lives
            and society.
          </p>
          <p>
            However, we cannot ignore the challenges associated with{" "}
            <Slot>[topic, if applicable]</Slot>.{" "}
            <Slot>[Briefly explain a problem, its causes or consequences]</Slot>
            . If we fail to address these issues, they may lead to{" "}
            <Slot>[possible consequences]</Slot>.
          </p>
          <p>
            So, what can we do? First,{" "}
            <Slot>[first practical solution or action]</Slot>. Second,{" "}
            <Slot>[another suggestion or measure]</Slot>. Finally, we must
            create awareness and encourage everyone to contribute towards a
            positive change. Every individual has a role to play in making this
            possible.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Conclusion — Message, Appeal and Thanks
          </h4>
          <p>
            Before I conclude, I would like to remind you that{" "}
            <Slot>[restate the central message of the speech]</Slot>. The
            importance of <Slot>[topic]</Slot> cannot be overlooked. Let us
            join hands and work together to{" "}
            <Slot>[desired outcome or positive change]</Slot>. Remember, the
            change we wish to see in the world must begin with us.
          </p>
          <p>
            With these words, I conclude my speech. Thank you all for your
            valuable time and patient listening.
          </p>
        </div>
      </div>

      <h2>Final Mind Map</h2>

      <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MIND_MAP.map((item) => (
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

      <h2>Guidelines</h2>

      <Checklist
        items={[
          { label: "Address the audience" },
          {
            label:
              "Open with expressions like \u201cLadies and Gentlemen,\u201d \u201cRespected teacher and my dear friends,\u201d or \u201cRespected dignitaries on the dais and my dear friends,\u201d etc.",
          },
          {
            label:
              "The first paragraph of the speech should give a clear idea of its content",
          },
          { label: "Mention the important points you would like to highlight" },
          {
            label:
              "Begin with quotations, a few lines of a poem, rhetorical questions etc.",
          },
          {
            label:
              "Take the important points separately and discuss each one elaborately in the next paragraph — cite data, give anecdotes and examples, and use as many rhetorical expressions as possible",
          },
          {
            label:
              "In the concluding paragraph, summarise the main points",
          },
          {
            label:
              "Express your gratitude for being given a chance to speak",
          },
          { label: "Thank your audience for listening at the end" },
        ]}
      />

      <h2>Structures at a Glance</h2>

      <div className="my-6 grid items-start gap-4 lg:grid-cols-2">
        <ProcessCard
          title="Speech Framework"
          steps={[
            { label: "Salutation", description: "Address the audience: Respected Principal, teachers, and dear friends" },
            { label: "Hook (Opening)", description: "A question, quotation, or startling fact. Must capture attention in the first 10 seconds." },
            { label: "Context", description: "State the occasion — why you are speaking. E.g. \"On the occasion of Environment Day...\"" },
            { label: "Body (3 points)", description: "Three clear sub-points, each with an example or anecdote. Use rhetorical questions." },
            { label: "Call to Action", description: "Tell the audience what to do. Be specific: \"Let us each plant one tree this week.\"" },
            { label: "Closing", description: "End with a memorable line — a quote, a wish, or a powerful statement. Thank the audience." },
          ]}
        />

        <ProcessCard
          title="Vote of Thanks Framework"
          steps={[
            { label: "Salutation", description: "Respected Principal, teachers, and dear friends" },
            { label: "Acknowledge", description: "Thank the chief guest, organisers, and participants by name if possible." },
            { label: "Summarise", description: "Briefly mention the key highlights of the event." },
            { label: "Express Gratitude", description: "Thank the audience for their presence and cooperation." },
            { label: "Close", description: "\"I hereby propose a vote of thanks. Thank you.\"" },
          ]}
        />
      </div>

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Write as you would speak — short, punchy sentences" },
          { label: "Use rhetorical questions: \"Have you ever wondered why...?\"" },
          { label: "Repetition is powerful in speeches: \"We must act. We must act now.\"" },
          { label: "Include at least one quotation from a known figure" },
          { label: "Avoid long words — speeches are heard, not read" },
          { label: "Address the audience directly: \"You and I both know...\"" },
          { label: "Keep the speech under 200 words in the exam" },
          { label: "Vote of thanks must be under 100 words" },
        ]}
      />

      <Highlight color="orange">
        Do not start a speech with &quot;I am going to talk about...&quot; — start with the hook. The audience should be engaged from the first sentence.
      </Highlight>

      <h2>Samples</h2>

      <Expandable title="Sample 1 — Speech: Save Water" variant="example">
        <p>Respected Principal, teachers, and dear friends,</p>
        <p>What if I told you that the water you drank this morning took a thousand years to reach the ground? Water is not infinite — and yet we waste it as if it were.</p>
        <p>Kerala receives over 3,000 mm of rainfall annually, yet many villages face drinking water shortages. The reason? We have forgotten how to conserve. We leave taps running, we pollute rivers, and we ignore leaking pipes.</p>
        <p>The solution is simple: each of us can reduce water waste by just 10 litres a day. That is 3,650 litres per person per year. Multiply that by our school — we save millions of litres.</p>
        <p>Let us start today. Let us start now. Because every drop saved is a drop earned.</p>
        <p>Thank you.</p>
      </Expandable>

      <Expandable title="Sample 2 — Vote of Thanks: Annual Day" variant="example">
        <p>Respected Principal, teachers, and dear friends,</p>
        <p>I consider it a privilege to propose the vote of thanks on this wonderful occasion of our Annual Day celebration.</p>
        <p>First and foremost, I thank our chief guest, Dr. Suresh Kumar, for gracing the occasion with his inspiring words. I thank our Principal for the constant encouragement, and our teachers who worked tirelessly behind the scenes.</p>
        <p>Our students proved that talent and hard work go hand in hand. The performances today were truly memorable.</p>
        <p>I hereby propose a vote of thanks. Thank you.</p>
      </Expandable>

      <KeyPoint>
        A good speech is a conversation with an audience, not a lecture to them. Use questions, rhetorical devices, and short sentences. Start with a hook, end with a memorable line, and always keep your audience in mind.
      </KeyPoint>
    </>
  );
}
