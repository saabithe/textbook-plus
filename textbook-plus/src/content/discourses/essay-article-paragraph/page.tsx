import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { TopicSwitch } from "@/components/content/TopicSwitch";

/** A fill-in field inside the idea elaboration frame. */
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

function IdeaElaborationPane() {
  return (
    <>
      <h2>Idea Elaboration — Master Frame</h2>
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

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={ELABORATION_MIND_MAP} />

      <h3>Exam Rules for Idea Elaboration</h3>
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
    </>
  );
}

function EssayPane() {
  return (
    <>
<ProcessCard
        title="How to Write an Essay"
        steps={[
          { label: "Introduction", description: "Define the topic. Give context. State your thesis (main argument) clearly." },
          { label: "Body Paragraphs (3-4)", description: "Each paragraph: topic sentence → evidence → analysis. Use transitions (however, moreover, furthermore)." },
          { label: "Counter-argument (optional)", description: "Acknowledge the opposing view, then refute it. Shows depth of thinking." },
          { label: "Conclusion", description: "Restate thesis in new words. Connect back to introduction. No new information." },
        ]}
      />

<Expandable title="Essay — The Value of Reading" variant="example">
        <p>Reading is the foundation of all learning. It expands our vocabulary, sharpens our thinking, and connects us to ideas beyond our immediate experience. In an age dominated by screens, the habit of reading books has become more important — and more endangered — than ever.</p>
        <p>Studies consistently show that students who read regularly perform better across all subjects. Reading improves concentration, builds empathy through exposure to different perspectives, and strengthens analytical thinking. A student who reads for 30 minutes a day processes information 25% faster than one who does not.</p>
        <p>However, the rise of social media has fragmented attention spans. Many students now prefer short videos to long-form text. This shift has consequences: shallow reading leads to shallow thinking.</p>
        <p>In conclusion, reading is not merely a hobby — it is a discipline that shapes the mind. Schools must create reading-friendly environments, and students must make reading a daily habit. The rewards, both academic and personal, are immeasurable.</p>
      </Expandable>
    </>
  );
}

function ArticlePane() {
  return (
    <>
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

<Expandable title="Article — Environmental Awareness" variant="example">
        <p><strong>Why Our Schools Need Rainwater Harvesting</strong></p>
        <p>By Priya Menon, Class XII Student</p>
        <p>Did you know that a single school building can collect over 50,000 litres of rainwater during the monsoon? Yet most schools in Kerala let this precious resource flow straight into storm drains.</p>
        <p>Rainwater harvesting is not just an environmental necessity — it is an economic opportunity. Schools that have installed basic harvesting systems report a 40% reduction in their water bills. More importantly, students learn sustainability by seeing it in practice.</p>
        <p>The government has already made harvesting mandatory for buildings above 100 sq metres. It is time our schools led by example. A small investment today ensures water security for tomorrow.</p>
      </Expandable>
    </>
  );
}

export default function EssayArticleParagraphContent() {
  return (
    <>
      <Callout type="note">
        Idea elaboration, write-up, essay, paragraph writing and article writing
        all look like the same question — a block of prose to produce. They are
        not. Each form has its own purpose, its own structure and its own
        give-away cue. Read the columns below before you start writing.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="The look-alike prose forms"
        headers={["Discourse", "What it does", "Structure"]}
        rows={[
          {
            cells: [
              "Idea Elaboration",
              "Interpret and develop a given quotation, proverb, or idea",
              "Meaning → Explanation → Example → Wider application → Message",
            ],
          },
          {
            cells: [
              "Write-up",
              "Present information about a person, event, programme, issue, or experience",
              "Title → Introduction → Details → Significance → Conclusion",
            ],
          },
          {
            cells: [
              "Essay",
              "Explore a topic through explanation, arguments, and supporting examples",
              "Title → Introduction → Body paragraphs → Conclusion",
            ],
          },
          {
            cells: [
              "Paragraph Writing",
              "Explain one central idea concisely and coherently",
              "Topic sentence → Supporting details → Example → Closing sentence",
            ],
          },
          {
            cells: [
              "Article Writing",
              "Inform, explain, discuss, or persuade a defined readership",
              "Headline → Introduction → Main body → Conclusion",
            ],
          },
        ]}
      />

      <h2>How to Tell Them Apart</h2>
      <ul>
        <li>
          <strong>The opening element gives it away.</strong> A{" "}
          <strong>headline</strong> means an article; a <strong>title</strong>{" "}
          means an essay or a write-up; a <strong>topic sentence</strong> means
          paragraph writing; and when the question itself hands you the{" "}
          <strong>idea</strong> — a quotation, proverb or saying — it is idea
          elaboration.
        </li>
        <li>
          <strong>One idea or several.</strong> Paragraph writing and idea
          elaboration carry one central idea; the write-up, the essay and the
          article are developed across several paragraphs.
        </li>
        <li>
          <strong>What you do with the topic.</strong> Interpret a given idea
          (idea elaboration) · present information (write-up) · explore the topic
          with arguments and examples (essay) · explain one idea concisely
          (paragraph writing) · inform or persuade a defined readership
          (article).
        </li>
        <li>
          <strong>Where it ends.</strong> On the message (idea elaboration) · on
          the significance (write-up) · on a closing sentence (paragraph writing)
          · on the conclusion after the body paragraphs (essay) · on the
          conclusion after the main body (article).
        </li>
        <li>
          <strong>Who it is written for.</strong> Only the article names a
          defined readership — newspaper or magazine readers. The other four are
          written for the examiner in front of you.
        </li>
      </ul>

      <Highlight>
        Headline → article. Title → essay or write-up. Topic sentence →
        paragraph writing. Given idea → idea elaboration.
      </Highlight>

      <h2>Essay &amp; Article — Step by Step</h2>
      <p>
        The write-up and paragraph writing follow the chains shown in the table
        above. Article and essay carry a few extra format rules, so they are
        spelled out here.
      </p>

      <h2>Samples — Spot the Difference</h2>
      <p>
        Compare the openings. The article announces itself with a headline and a
        byline; the essay walks straight into its topic.
      </p>

      <TopicSwitch
        label="Prose forms"
        panes={[
            { id: "idea-elaboration", label: "Idea Elaboration", content: <IdeaElaborationPane /> },
            { id: "essay", label: "Essay", content: <EssayPane /> },
            { id: "article", label: "Article", content: <ArticlePane /> },
        ]}
      />

      <h2>Exam Tips — Essay &amp; Article</h2>
      <ul>
        <li>
          <strong>Article:</strong> start with a hook, not a definition.
        </li>
        <li>
          <strong>Essay:</strong> define the topic in the first sentence.
        </li>
        <li>Use statistics and examples to support arguments.</li>
        <li>Each paragraph must have ONE central idea.</li>
        <li>
          Avoid first person (&ldquo;I think&rdquo;) in articles — use
          &ldquo;one&rdquo; or &ldquo;we&rdquo;.
        </li>
        <li>
          Use transition words: however, moreover, furthermore, in conclusion.
        </li>
        <li>
          <strong>Article:</strong> end with a call to action or a rhetorical
          question.
        </li>
        <li>
          <strong>Essay:</strong> end by linking back to the introduction.
        </li>
      </ul>

<KeyPoint>
        Same family, different jobs — the paragraph explains one idea, idea
        elaboration interprets a given saying, the write-up reports information,
        the essay argues a topic, and the article addresses a readership. Let
        the opening element tell you which one is wanted, then follow that
        form&rsquo;s chain.
      </KeyPoint>
    </>
  );
}
