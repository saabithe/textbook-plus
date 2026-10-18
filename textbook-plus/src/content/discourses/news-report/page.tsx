import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { TableCard } from "@/components/content/data/TableCard";

/** A fill-in field inside a news report template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const REPORT_MIND_MAP = [
  {
    part: "I. Headline",
    flow: "Title (short, present tense) → Byline (reporter & place)",
  },
  {
    part: "II. Lead",
    flow: "Place + Date → Who? What? When? Where? Why/How? — all in 1–2 sentences",
  },
  {
    part: "III. Details",
    flow: "Descending importance → Sequence → Facts → Evidence → Quotes → Effects",
  },
  {
    part: "IV. Outcome",
    flow: "Response → Action → Further developments",
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

export default function NewsReportContent() {
  return (
    <>
      <Callout type="note">
        News report writing is a standard Kerala Board question testing factual, objective writing. A news report answers the 5 Ws (Who, What, When, Where, Why) and follows the inverted pyramid structure.
      </Callout>

      <h2>News Report Template</h2>
      <p>
        Use this frame for any event — fill in every <Slot>[...]</Slot>{" "}
        field with your own words.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h4 className="!mt-0 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Headline &amp; Byline
          </h4>
          <p>
            <Slot>[HEADLINE: A short, catchy title about the event]</Slot>
          </p>
          <p>
            By <Slot>[Reporter / Staff Correspondent]</Slot>
          </p>
          <div className="mt-1 text-sm italic text-muted-foreground">
            e.g. Fire Destroys Three Shops in Fort Kochi · By Staff Reporter,
            Kochi
          </div>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Opening — The Lead Paragraph
          </h4>
          <p>
            <Slot>[PLACE]</Slot>, <Slot>[DATE]</Slot>:{" "}
            <Slot>[State the main event clearly, including who was involved, what happened, when and where it happened, and why or how it happened, if known.]</Slot>
          </p>
          <p>
            The incident / event took place at <Slot>[location]</Slot> on{" "}
            <Slot>[date/time]</Slot>. It involved{" "}
            <Slot>[people or organisations concerned]</Slot> and resulted in{" "}
            <Slot>[main outcome or immediate impact]</Slot>.
          </p>
          <div className="mt-1 text-sm italic text-muted-foreground">
            e.g. FORT KOCHI, 14 October: A fire broke out in three shops near the
            Clock Tower at around 2:30 am on Monday, destroying goods worth ₹5
            lakh. The cause is suspected to be a short circuit.
          </div>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Main Body — Details, Evidence and Development
          </h4>
          <p>
            According to{" "}
            <Slot>[reliable source / eyewitnesses / officials, if provided]</Slot>,{" "}
            <Slot>[explain the important details of the event]</Slot>. Furthermore,{" "}
            <Slot>[describe the sequence of events, causes, supporting facts, statements or other relevant information]</Slot>.
          </p>
          <p>
            The incident / event led to{" "}
            <Slot>[effects, consequences, achievements, damage or benefits, as applicable]</Slot>.{" "}
            <Slot>[Include relevant figures, responses from authorities, eyewitness accounts or other important details, if provided in the question.]</Slot>
          </p>
          <p>
            Optional quotation: &ldquo;
            <Slot>[Insert a short, relevant statement from an important person or eyewitness, if provided or appropriate.]</Slot>
            &rdquo;
          </p>
          <div className="mt-1 text-sm italic text-muted-foreground">
            e.g. According to eyewitnesses, flames spread within minutes as the
            shops had wooden shutters. Fire tenders from three stations brought
            the blaze under control by 5 am.
          </div>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Conclusion — Outcome and Follow-up
          </h4>
          <p>
            Following the incident / event,{" "}
            <Slot>[describe the action taken, investigation, response, relief measures, future plans or final outcome, where relevant]</Slot>.{" "}
            <Slot>[Mention any further developments or expected action, if known.]</Slot>
          </p>
          <p>
            The event / incident has highlighted{" "}
            <Slot>[relevant significance or implication, if appropriate]</Slot>.
          </p>
          <div className="mt-1 text-sm italic text-muted-foreground">
            e.g. Police have registered a case and an investigation is under way.
            The incident has highlighted the need for fire safety checks in old
            markets.
          </div>
        </div>
      </div>

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={REPORT_MIND_MAP} />

      <h2>The 5 Ws</h2>
      <TableCard
        caption="5 Ws — The Reporter's Checklist"
        headers={["Question", "What to Answer", "Example"]}
        rows={[
          { cells: ["Who", "People involved", "A fire broke out in three shops"] },
          { cells: ["What", "What happened", "Goods worth ₹5 lakh were destroyed"] },
          { cells: ["When", "Date and time", "At around 2:30 am on Monday"] },
          { cells: ["Where", "Exact location", "Near the Clock Tower, Fort Kochi"] },
          { cells: ["Why", "Cause (if known)", "Suspected short circuit in the electrical wiring"] },
        ]}
      />

      <h2>Tips</h2>
      <ul>
        <li>
          <strong>Use simple, direct sentences</strong> — &ldquo;The fire started
          at 2 am&rdquo; not &ldquo;It is reported that the fire is believed to
          have originated...&rdquo;
        </li>
        <li>
          <strong>Use active voice</strong> — &ldquo;Police arrested the
          suspect&rdquo; not &ldquo;The suspect was arrested&rdquo;
        </li>
        <li>
          <strong>Present tense for headlines</strong> — &ldquo;Three injured in
          road accident&rdquo;
        </li>
        <li>
          <strong>Past tense for the body</strong> — &ldquo;The accident occurred
          at 5 pm near the highway junction&rdquo;
        </li>
        <li>
          <strong>Avoid opinions</strong> — stick to facts. No &ldquo;It is sad
          that...&rdquo; or &ldquo;Fortunately...&rdquo;
        </li>
        <li>
          <strong>Use attributions</strong> — &ldquo;According to the
          police...&rdquo; or &ldquo;Witnesses said...&rdquo;
        </li>
      </ul>

      <Highlight color="orange">
        Do not begin a news report with the date. Begin with the headline, then the lead paragraph (which includes the date).
      </Highlight>

      <h2>Sample</h2>

      <Expandable
        title="News Report — School Science Exhibition"
        variant="example"
      >
        <p><strong>Students Showcase 40 Projects at District Science Exhibition</strong></p>
        <p>By Staff Reporter, Thiruvananthapuram</p>
        <p>Over 400 students from 25 schools displayed more than 40 innovative projects at the District Science Exhibition held at Government Model Higher Secondary School on Saturday.</p>
        <p>The two-day exhibition was inaugurated by Dr. K. Suresh, Professor of Physics at the University of Kerala. Projects ranged from a solar-powered water purifier to a working model of a earthquake-resistant building.</p>
        <p>&quot;These students give us hope for the future,&quot; said Dr. Suresh in his inaugural address. &quot;Their creativity and scientific thinking are remarkable.&quot;</p>
        <p>Best Project Award went to Meera Rajesh and team from St. Teresa&apos;s School for their low-cost air quality monitor. The exhibition was organised by the District Education Office as part of the Kerala Science Congress.</p>
      </Expandable>

      <KeyPoint>
        A news report is factual, concise, and structured in inverted pyramid order. Lead with the 5 Ws, support with quotes and details, and keep opinions out. Master this format and any event can become a publishable report.
      </KeyPoint>
    </>
  );
}
