import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function SpeechContent() {
  return (
    <>
      <Callout type="note">
        Speech writing appears in the Kerala Board exam as a 5-mark question. A speech is spoken aloud — it must sound natural when read, use rhetorical devices, and have a clear structure with a compelling opening and closing.
      </Callout>

      <h2>Structure of a Speech</h2>

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

      <h2>Vote of Thanks — Structure</h2>

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

      <TableCard
        caption="Speech vs Essay — Key Differences"
        headers={["Aspect", "Speech", "Essay"]}
        rows={[
          { cells: ["Medium", "Spoken aloud", "Written text"] },
          { cells: ["Audience", "Present — can react", "Absent — reads silently"] },
          { cells: ["Tone", "Conversational, energetic", "Formal, analytical"] },
          { cells: ["Rhetorical devices", "Repetition, questions, pauses", "Logic, evidence, structure"] },
          { cells: ["Opening", "Hook (question/quote)", "Definition/context"] },
          { cells: ["Closing", "Memorable line + thanks", "Restate thesis"] },
          { cells: ["Paragraphs", "Short — 2-3 sentences", "Longer — 4-6 sentences"] },
        ]}
      />

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

      <Example title="Speech — Save Water">
        <p>Respected Principal, teachers, and dear friends,</p>
        <p>What if I told you that the water you drank this morning took a thousand years to reach the ground? Water is not infinite — and yet we waste it as if it were.</p>
        <p>Kerala receives over 3,000 mm of rainfall annually, yet many villages face drinking water shortages. The reason? We have forgotten how to conserve. We leave taps running, we pollute rivers, and we ignore leaking pipes.</p>
        <p>The solution is simple: each of us can reduce water waste by just 10 litres a day. That is 3,650 litres per person per year. Multiply that by our school — we save millions of litres.</p>
        <p>Let us start today. Let us start now. Because every drop saved is a drop earned.</p>
        <p>Thank you.</p>
      </Example>

      <Example title="Vote of Thanks — Annual Day">
        <p>Respected Principal, teachers, and dear friends,</p>
        <p>I consider it a privilege to propose the vote of thanks on this wonderful occasion of our Annual Day celebration.</p>
        <p>First and foremost, I thank our chief guest, Dr. Suresh Kumar, for gracing the occasion with his inspiring words. I thank our Principal for the constant encouragement, and our teachers who worked tirelessly behind the scenes.</p>
        <p>Our students proved that talent and hard work go hand in hand. The performances today were truly memorable.</p>
        <p>I hereby propose a vote of thanks. Thank you.</p>
      </Example>

      <KeyPoint>
        A good speech is a conversation with an audience, not a lecture to them. Use questions, rhetorical devices, and short sentences. Start with a hook, end with a memorable line, and always keep your audience in mind.
      </KeyPoint>
    </>
  );
}
