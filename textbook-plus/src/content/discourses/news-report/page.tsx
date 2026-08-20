import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function NewsReportContent() {
  return (
    <>
      <Callout type="note">
        News report writing is a standard Kerala Board question testing factual, objective writing. A news report answers the 5 Ws (Who, What, When, Where, Why) and follows the inverted pyramid structure.
      </Callout>

      <h2>Inverted Pyramid Structure</h2>

      <ProcessCard
        title="How to Write a News Report"
        steps={[
          { label: "Headline", description: "Short, factual, present tense. Answers: what happened? E.g. \"Fire Destroys Three Shops in Fort Kochi\"" },
          { label: "Byline", description: "Reporter name + location. E.g. By Staff Reporter, Kochi" },
          { label: "Lead (1st paragraph)", description: "All 5 Ws in 1-2 sentences. Who did what, when, where, why. Most important information first." },
          { label: "Body (2-3 paragraphs)", description: "Details in descending order of importance. Quotes from eyewitnesses or officials. Background context." },
          { label: "Closing", description: "Additional details — casualties, investigation status, official response. Can end with a forward-looking statement." },
        ]}
      />

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

      <h2>Language Features</h2>

      <ProcessCard
        title="News Report Language Rules"
        steps={[
          { label: "Use simple, direct sentences", description: "\"The fire started at 2 am\" not \"It is reported that the fire is believed to have originated...\"" },
          { label: "Use active voice", description: "\"Police arrested the suspect\" not \"The suspect was arrested\"" },
          { label: "Present tense for headlines", description: "\"Three injured in road accident\" — headlines use present tense" },
          { label: "Past tense for body", description: "\"The accident occurred at 5 pm near the highway junction\"" },
          { label: "Avoid opinions", description: "Stick to facts. No \"It is sad that...\" or \"Fortunately...\"" },
          { label: "Use attributions", description: "\"According to the police...\" or \"Witnesses said...\"" },
        ]}
      />

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Headline: maximum 8-10 words, no full stop" },
          { label: "Lead paragraph: answer all 5 Ws — nothing should be missing" },
          { label: "Inverted pyramid: most important info first, least important last" },
          { label: "Quotes from officials add credibility — include at least one" },
          { label: "Use specific numbers: \"₹5 lakh\" not \"a large amount\"" },
          { label: "Keep the report under 200 words" },
          { label: "No editorialising — facts only, no personal opinion" },
        ]}
      />

      <Highlight color="orange">
        Do not begin a news report with the date. Begin with the headline, then the lead paragraph (which includes the date).
      </Highlight>

      <h2>Sample</h2>

      <Example title="News Report — School Science Exhibition">
        <p><strong>Students Showcase 40 Projects at District Science Exhibition</strong></p>
        <p>By Staff Reporter, Thiruvananthapuram</p>
        <p>Over 400 students from 25 schools displayed more than 40 innovative projects at the District Science Exhibition held at Government Model Higher Secondary School on Saturday.</p>
        <p>The two-day exhibition was inaugurated by Dr. K. Suresh, Professor of Physics at the University of Kerala. Projects ranged from a solar-powered water purifier to a working model of a earthquake-resistant building.</p>
        <p>&quot;These students give us hope for the future,&quot; said Dr. Suresh in his inaugural address. &quot;Their creativity and scientific thinking are remarkable.&quot;</p>
        <p>Best Project Award went to Meera Rajesh and team from St. Teresa&apos;s School for their low-cost air quality monitor. The exhibition was organised by the District Education Office as part of the Kerala Science Congress.</p>
      </Example>

      <KeyPoint>
        A news report is factual, concise, and structured in inverted pyramid order. Lead with the 5 Ws, support with quotes and details, and keep opinions out. Master this format and any event can become a publishable report.
      </KeyPoint>
    </>
  );
}
