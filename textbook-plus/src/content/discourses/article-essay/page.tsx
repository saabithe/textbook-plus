import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function ArticleEssayContent() {
  return (
    <>
      <Callout type="note">
        Articles and essays are among the most frequently tested discourses in the Kerala Board exam. An article appears in a publication (newspaper, magazine); an essay is an independent academic piece. Know the structural differences.
      </Callout>

      <h2>Article — Structure</h2>

      <ProcessCard
        title="How to Write an Article"
        steps={[
          { label: "Headline", description: "Catchy, specific. Answers: what is this about? Example: \"Why Our Libraries Need a Revival\"" },
          { label: "Byline", description: "Your name and designation. E.g. By Anjali Raj, Class XII Student" },
          { label: "Opening Hook", description: "A question, startling fact, or vivid scene. Must grab attention in 1-2 sentences." },
          { label: "Body (2-3 paragraphs)", description: "Each paragraph = one sub-point. Use examples, statistics, quotations. Move from general to specific." },
          { label: "Conclusion", description: "Summarise your argument. End with a call to action, a question, or a thought-provoking statement." },
        ]}
      />

      <h2>Essay — Structure</h2>

      <ProcessCard
        title="How to Write an Essay"
        steps={[
          { label: "Introduction", description: "Define the topic. Give context. State your thesis (main argument) clearly." },
          { label: "Body Paragraphs (3-4)", description: "Each paragraph: topic sentence → evidence → analysis. Use transitions (however, moreover, furthermore)." },
          { label: "Counter-argument (optional)", description: "Acknowledge the opposing view, then refute it. Shows depth of thinking." },
          { label: "Conclusion", description: "Restate thesis in new words. Connect back to introduction. No new information." },
        ]}
      />

      <TableCard
        caption="Article vs Essay"
        headers={["Aspect", "Article", "Essay"]}
        rows={[
          { cells: ["Published in", "Newspaper, magazine, website", "Academic journal, exam paper"] },
          { cells: ["Has headline?", "Yes — catchy, specific", "No — topic title only"] },
          { cells: ["Has byline?", "Yes — author name + designation", "No"] },
          { cells: ["Tone", "Engaging, journalistic", "Formal, analytical"] },
          { cells: ["Opening", "Hook (question, fact, anecdote)", "Definition + context"] },
          { cells: ["Audience", "General public", "Academic / examiner"] },
          { cells: ["Word limit", "150-200 words", "250-400 words"] },
        ]}
      />

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Article: start with a hook, not a definition" },
          { label: "Essay: define the topic in the first sentence" },
          { label: "Use statistics and examples to support arguments" },
          { label: "Each paragraph must have ONE central idea" },
          { label: "Avoid first person (I think) in articles — use \"one\" or \"we\"" },
          { label: "Use transition words: however, moreover, furthermore, in conclusion" },
          { label: "Article: end with a call to action or rhetorical question" },
          { label: "Essay: end by linking back to the introduction" },
        ]}
      />

      <Highlight color="orange">
        Do not confuse articles and essays in the exam. Articles have a headline and byline; essays do not. Mixing formats loses marks.
      </Highlight>

      <h2>Samples</h2>

      <Example title="Article — Environmental Awareness">
        <p><strong>Why Our Schools Need Rainwater Harvesting</strong></p>
        <p>By Priya Menon, Class XII Student</p>
        <p>Did you know that a single school building can collect over 50,000 litres of rainwater during the monsoon? Yet most schools in Kerala let this precious resource flow straight into storm drains.</p>
        <p>Rainwater harvesting is not just an environmental necessity — it is an economic opportunity. Schools that have installed basic harvesting systems report a 40% reduction in their water bills. More importantly, students learn sustainability by seeing it in practice.</p>
        <p>The government has already made harvesting mandatory for buildings above 100 sq metres. It is time our schools led by example. A small investment today ensures water security for tomorrow.</p>
      </Example>

      <Example title="Essay — The Value of Reading">
        <p>Reading is the foundation of all learning. It expands our vocabulary, sharpens our thinking, and connects us to ideas beyond our immediate experience. In an age dominated by screens, the habit of reading books has become more important — and more endangered — than ever.</p>
        <p>Studies consistently show that students who read regularly perform better across all subjects. Reading improves concentration, builds empathy through exposure to different perspectives, and strengthens analytical thinking. A student who reads for 30 minutes a day processes information 25% faster than one who does not.</p>
        <p>However, the rise of social media has fragmented attention spans. Many students now prefer short videos to long-form text. This shift has consequences: shallow reading leads to shallow thinking.</p>
        <p>In conclusion, reading is not merely a hobby — it is a discipline that shapes the mind. Schools must create reading-friendly environments, and students must make reading a daily habit. The rewards, both academic and personal, are immeasurable.</p>
      </Example>

      <KeyPoint>
        Articles hook the reader with a headline and engaging opening; essays establish credibility with definitions and structured arguments. Know which format the question demands, and follow its structure precisely.
      </KeyPoint>
    </>
  );
}
