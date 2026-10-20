import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { TopicSwitch } from "@/components/content/TopicSwitch";
import EmailPane from "./panes/email";
import JobApplicationPane from "./panes/job-application";

/** A fill-in field inside a letter template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const FORMAL_MIND_MAP = [
  { part: "I. Format", flow: "From → Date → To → Subject → Salutation" },
  { part: "II. Introduction", flow: "Purpose → Context → Importance" },
  { part: "III. Main Body", flow: "Details → Reasons → Evidence → Request / Solution" },
  { part: "IV. Conclusion", flow: "Expected action → Thanks → Sign-off" },
];

const INFORMAL_MIND_MAP = [
  { part: "I. Format", flow: "Place → Date → Dear + Name" },
  { part: "II. Opening", flow: "Greeting → Well-being → Purpose" },
  { part: "III. Main Body", flow: "Details → Experiences → Feelings → Topic-specific content" },
  { part: "IV. Closing", flow: "Final thoughts → Write back → Affectionate sign-off" },
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

function FormalLetterPane() {
  return (
    <>
      <h2>Formal Letter Template</h2>
      <p>
        Use this frame for any formal letter — fill in every <Slot>[...]</Slot>{" "}
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
            Formal Letter on <Slot>[Purpose / Subject]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Letter Format — Sender, Date and Receiver
          </h4>
          <p>
            From:
            <br />
            <Slot>[Sender&apos;s Name / Designation]</Slot>
            <br />
            <Slot>[Institution / House Name]</Slot>
            <br />
            <Slot>[Place, PIN Code]</Slot>
          </p>
          <p>
            Date: <Slot>[Day Month Year]</Slot>
          </p>
          <p>
            To:
            <br />
            <Slot>[Receiver&apos;s Designation]</Slot>
            <br />
            <Slot>[Organisation / Institution / Newspaper Name]</Slot>
            <br />
            <Slot>[Place]</Slot>
          </p>
          <p>
            Subject: <Slot>[State the purpose of the letter briefly]</Slot>
          </p>
          <p>Sir/Madam,</p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Introduction — Purpose of Writing
          </h4>
          <p>
            I am writing this letter to bring to your kind attention{" "}
            <Slot>
              [state the issue, request, complaint, enquiry or purpose clearly]
            </Slot>
            . As <Slot>[your role or reason for writing, if relevant]</Slot>, I
            consider it important to address this matter because{" "}
            <Slot>[briefly explain its significance]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Main Body — Details, Explanation and Supporting Points
          </h4>
          <p>
            To begin with, <Slot>[explain the main issue or situation in detail]</Slot>.
            It is particularly important to note that{" "}
            <Slot>[first relevant point or supporting detail]</Slot>. Moreover,{" "}
            <Slot>[add another reason, fact, example or explanation]</Slot>. This
            situation has resulted in / may lead to / highlights{" "}
            <Slot>[relevant effects, consequences or benefits]</Slot>.
          </p>
          <p>
            In view of these circumstances, I would like to{" "}
            <Slot>[state your request, suggestion, proposed solution or expected action]</Slot>.
            I believe that{" "}
            <Slot>[explain why the proposed action would be helpful]</Slot>. Your
            attention and timely intervention would make a significant
            difference in addressing this matter.
          </p>
          <p>
            <Slot>
              [Adapt or expand this section according to the specific purpose of
              the letter. Include only relevant details.]
            </Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Conclusion — Expected Action and Formal Closing
          </h4>
          <p>
            I sincerely hope that you will consider this matter and take the
            necessary steps at the earliest. I look forward to a favourable
            response and appropriate action.
          </p>
          <p>Thank you for your time and consideration.</p>
          <p>
            Yours faithfully,
            <br />
            <Slot>[Signature, if required]</Slot>
            <br />
            <Slot>[Full Name]</Slot>
            <br />
            <Slot>[Designation / Class / Organisation, if relevant]</Slot>
          </p>
        </div>
      </div>

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={FORMAL_MIND_MAP} />

<ProcessCard
          title="Structure of a Formal Letter"
          steps={[
            { label: "Sender's Address", description: "Top-left corner. House number, street, city, pincode. No name." },
            { label: "Date", description: "Below address. Format: 15 August 2026 (no commas)." },
            { label: "Recipient's Designation & Address", description: "The designation first, then the organisation and address." },
            { label: "Subject Line", description: "Short, clear. Prefixed with \"Subject:\" — e.g. Subject: Complaint Regarding Water Supply." },
            { label: "Salutation", description: "Sir/Madam (formal). Always followed by a comma." },
            { label: "Body", description: "3 paragraphs — purpose, details, expected action. Polite, concise, factual." },
            { label: "Closing", description: "Yours faithfully (if Sir/Madam), Yours sincerely (if named). Comma after." },
            { label: "Sender's Name & Signature", description: "Full name below closing. Signature above name." },
          ]}
        />

<Highlight color="orange">
        Never use first name in the salutation of a formal letter. Always use Sir/Madam.
      </Highlight>

<Expandable title="Sample 1 — Formal Letter: Complaint" variant="example">
        <p>12, Green Avenue<br />Kochi 682011<br />15 August 2026</p>
        <p>The Electricity Board Officer<br />Ernakulam Division<br />Kochi 682018</p>
        <p><strong>Subject:</strong> Complaint Regarding Frequent Power Cuts</p>
        <p>Sir/Madam,</p>
        <p>I wish to bring to your notice the frequent power cuts in our area for the past two weeks. The supply is interrupted almost daily between 6 pm and 10 pm, causing severe inconvenience to residents and students preparing for examinations.</p>
        <p>I request you to look into this matter and take necessary corrective action at the earliest.</p>
        <p>Yours faithfully,<br />Rajesh Menon</p>
      </Expandable>
    </>
  );
}

function InformalLetterPane() {
  return (
    <>
      <h2>Informal Letter Template</h2>
      <p>
        Use this frame for a letter to a friend or family member — fill in every{" "}
        <Slot>[...]</Slot> field with your own words.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            Informal Letter to <Slot>[Friend&apos;s Name]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Address, Date and Salutation
          </h4>
          <p>
            <Slot>[Your Place]</Slot>
            <br />
            <Slot>[Date]</Slot>
          </p>
          <p>
            Dear <Slot>[Friend&apos;s Name]</Slot>,
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Opening — Greeting and Purpose
          </h4>
          <p>
            How are you? I hope you are doing well. It has been quite some time
            since we last communicated, and I was very happy to receive your
            letter / hear from you.
          </p>
          <p>
            I am writing this letter to{" "}
            <Slot>
              [state the purpose: share news, give advice, congratulate,
              invite, describe an experience, etc.]
            </Slot>
            . I thought I should share this with you because{" "}
            <Slot>[reason for writing]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Main Body — Details, Experiences and Feelings
          </h4>
          <p>
            To begin with, <Slot>[introduce the main subject or event]</Slot>.
            It was <Slot>[describe your experience, feelings or situation]</Slot>.
            Moreover,{" "}
            <Slot>
              [add important details, explanations, examples or personal
              experiences]
            </Slot>
            .
          </p>
          <p>
            You would be interested to know that{" "}
            <Slot>
              [share further news or information relevant to the topic]
            </Slot>
            . I felt <Slot>[express your emotions or opinion]</Slot> because{" "}
            <Slot>[reason]</Slot>.
          </p>
          <p>
            <Slot>
              [Adapt the remaining paragraphs to the purpose of the letter:
              describe an event, narrate an experience, offer advice, explain a
              problem, share good news, invite your friend or discuss plans.]
            </Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Conclusion — Final Thoughts and Closing
          </h4>
          <p>
            That is all for now. Do write back to me and let me know{" "}
            <Slot>[ask a relevant question or invite a response]</Slot>. Give my
            regards to your family and convey my best wishes to everyone at
            home.
          </p>
          <p>
            Take care of yourself. Looking forward to hearing from you soon.
          </p>
          <p>
            With love,
            <br />
            <Slot>[Your Name]</Slot>
          </p>
        </div>
      </div>

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={INFORMAL_MIND_MAP} />

<ProcessCard
          title="Structure of an Informal Letter"
          steps={[
            { label: "Sender's Address (optional)", description: "City and date are sufficient. Full address not required." },
            { label: "Salutation", description: "Dear [Name], — use a comma. First name is fine." },
            { label: "Body", description: "3-4 short paragraphs. Conversational tone. Use contractions." },
            { label: "Closing", description: "With love, / Take care, / Yours affectionately, — comma after." },
            { label: "Signature", description: "First name only. No designation." },
          ]}
        />

<Expandable title="Sample 2 — Informal Letter: To a Friend" variant="example">
        <p>Kozhikode<br />12 September 2026</p>
        <p>Dear Meera,</p>
        <p>I hope you are doing well. I am writing to tell you about the science exhibition held at our school last week. It was a wonderful event with over 30 models on display.</p>
        <p>My group presented a working model of a rainwater harvesting system. We won the second prize! I wish you could have been there.</p>
        <p>Do write back soon. I miss our long walks after school.</p>
        <p>With love,<br />Anjali</p>
      </Expandable>
    </>
  );
}

export default function LetterWritingContent() {
  return (
    <>
      <Callout type="note">
        Letter writing appears regularly in the Kerala Board English exam (typically 5 marks). Know both formal and informal formats — the board expects precise structure and appropriate tone.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="The four letter-shaped tasks"
        headers={["Format", "What it does", "Key parts"]}
        rows={[
          {
            cells: [
              "Formal Letter",
              "Writes to an officer, an institution or a newspaper — a complaint, a request, an enquiry, a suggestion or an opinion",
              "Sender's address → Date → Designation & address → Subject → Sir / Madam → three-part body → Yours faithfully",
            ],
          },
          {
            cells: [
              "Informal Letter",
              "Writes to a friend or a relative — news to share, advice, an invitation, an experience",
              "Place & date → Dear [Name], → conversational body → With love / Take care",
            ],
          },
          {
            cells: [
              "Email",
              "Sends the same message electronically — formal in tone, read on a screen, often copied to several readers",
              "To / Cc / Bcc → Subject → Dear …, → three-part body → Best regards",
            ],
          },
          {
            cells: [
              "Job Application + Résumé",
              "Applies for a post — a covering letter in the formal letter format, plus a résumé that sets out the facts",
              "Letter: the formal frame, stating the post applied for and the applicant's suitability → Résumé: personal details, qualifications, experience, skills, referees",
            ],
          },
        ]}
      />

      <h2>Formal vs Informal Letters</h2>

      <TableCard
        caption="Formal letters are structured and impersonal; informal letters are conversational and personal."
        headers={["Aspect", "Formal Letter", "Informal Letter"]}
        rows={[
          { cells: ["To", "Official / authority", "Friend / family"] },
          { cells: ["Tone", "Polite, factual, impersonal", "Warm, conversational, personal"] },
          { cells: ["Subject line", "Required", "Not needed"] },
          { cells: ["Salutation", "Sir / Madam", "Dear Ramya, / Hi Aman,"] },
          { cells: ["Closing", "Yours faithfully", "With love, / Take care,"] },
          { cells: ["Address", "Full sender address on top", "Optional — city/date enough"] },
        ]}
      />

      <TopicSwitch
        label="Letter formats"
        panes={[
            { id: "formal-letter", label: "Formal Letter", content: <FormalLetterPane /> },
            { id: "informal-letter", label: "Informal Letter", content: <InformalLetterPane /> },
            { id: "email", label: "Email", content: <EmailPane /> },
            { id: "job-application", label: "Job Application + Résumé", content: <JobApplicationPane /> },
        ]}
      />

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Keep formal letters under 150 words" },
          { label: "Use passive voice in formal letters: \"You are requested to...\"" },
          { label: "Avoid contractions in formal letters (do not, not don't)" },
          { label: "In informal letters, contractions are natural and expected" },
          { label: "Subject line is mandatory for formal letters — skip for informal" },
          { label: "Always mention the specific action you expect in formal letters" },
          {
            label:
              "In a letter to a newspaper: \u201cI read your daily. It is a great newspaper. Your report everything very truthfully. and I request you to publish this to bring the issue to the light.\u201d",
          },
        ]}
      />

<KeyPoint>
        The key difference between formal and informal letters is tone and structure — formal letters are structured and impersonal; informal letters are conversational and personal. Master both formats and you will handle any letter-writing question confidently.
      </KeyPoint>
    </>
  );
}
