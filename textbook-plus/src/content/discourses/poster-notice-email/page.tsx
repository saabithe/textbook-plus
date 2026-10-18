import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { Checklist } from "@/components/content/data/Checklist";

/** A fill-in field inside the email template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const EMAIL_MIND_MAP = [
  { part: "I. Header", flow: "To → Cc → Bcc → Subject" },
  { part: "II. Opening", flow: "Salutation → Purpose" },
  { part: "III. Main Body", flow: "Details → Explanation → Request" },
  { part: "IV. Closing", flow: "Expected response → Sign-off → Name" },
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

export default function PosterNoticeEmailContent() {
  return (
    <>
      <Callout type="note">
        Posters and emails are compact writing formats tested in the Kerala Board exam. Each has strict layout rules and word limits. Getting the format right is half the marks — content comes after.
      </Callout>

      <h2>Poster</h2>

      <ProcessCard
        title="Poster Format"
        steps={[
          { label: "Headline", description: "Bold, large text at the top. The main message. E.g. \"BLOOD DONATION CAMP\"" },
          { label: "Details", description: "Date, time, venue, organiser. Use bullet points or short lines." },
          { label: "Body", description: "Why should people attend? 2-3 persuasive lines. Use slogans or catchy phrases." },
          { label: "Visual Appeal", description: "Borders, capital letters, underlining. Make it eye-catching." },
          { label: "Contact Info", description: "Phone number, email, or website for queries." },
        ]}
      />

      <Expandable title="Poster — Book Fair" variant="example">
        <div className="border-2 border-foreground/20 rounded-xl p-5 text-center">
          <p className="text-lg font-bold uppercase tracking-wide">BOOK FAIR 2026</p>
          <p className="mt-2 text-sm">Organised by: Kerala Library Association</p>
          <p className="text-sm">Date: 15-17 September 2026</p>
          <p className="text-sm">Venue: Exhibition Centre, Marine Drive, Kochi</p>
          <p className="mt-3 text-sm font-semibold">Over 500 stalls | 10,000+ titles | Special discounts</p>
          <p className="mt-2 text-sm">Entry Free | Open 10 AM – 8 PM</p>
          <p className="mt-3 text-xs italic">Books are the quietest and most constant of friends.</p>
          <p className="mt-2 text-xs">For details: 9876543210 | keralalibrary@gmail.com</p>
        </div>
      </Expandable>

      <h2>Email</h2>
      <p>
        Use this frame for any exam email — fill in every <Slot>[...]</Slot>{" "}
        field with your own words.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <p>
            To: <Slot>[Recipient&apos;s Email Address]</Slot>
          </p>
          <p>
            Cc:{" "}
            <Slot>
              [Additional Recipient&apos;s Email Address, if applicable]
            </Slot>
          </p>
          <p>
            Bcc:{" "}
            <Slot>
              [Hidden Recipient&apos;s Email Address, if applicable]
            </Slot>
          </p>
          <p>
            Subject: <Slot>[Clear and Concise Subject]</Slot>
          </p>
          <p className="mb-6">
            Dear <Slot>[Recipient&apos;s Name / Sir / Madam]</Slot>,
          </p>

          <h4 className="!mt-0 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Opening — Purpose
          </h4>
          <p>
            I am writing this email to <Slot>[state the purpose clearly]</Slot>.
            I would like to{" "}
            <Slot>
              [briefly introduce the matter, request, enquiry or information]
            </Slot>
            .
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Main Body — Details and Explanation
          </h4>
          <p>
            To begin with, <Slot>[explain the main point or situation]</Slot>.
            Furthermore,{" "}
            <Slot>
              [add relevant details, reasons, examples, questions or supporting
              information]
            </Slot>
            .
          </p>
          <p>
            In view of this,{" "}
            <Slot>
              [state your request, suggestion, proposed action or other
              relevant information]
            </Slot>
            .{" "}
            <Slot>
              [Include any additional details required by the question.]
            </Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Conclusion — Expected Response
          </h4>
          <p>
            I hope you will{" "}
            <Slot>
              [state the expected action or response, if applicable]
            </Slot>
            . I look forward to hearing from you.
          </p>

          <p className="mt-6">
            Best regards,
            <br />
            <Slot>[Your Full Name]</Slot>
            <br />
            <Slot>[Class / Designation, if relevant]</Slot>
          </p>
        </div>
      </div>

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={EMAIL_MIND_MAP} />

      <Expandable title="Sample — Email: Leave Application" variant="example">
        <div className="border border-foreground/20 rounded-xl p-5 text-sm">
          <p><strong>To:</strong> principal@gmhs.ac.in</p>
          <p><strong>Cc:</strong> class.teacher@gmhs.ac.in</p>
          <p><strong>Subject:</strong> Leave of Absence — 18 September 2026</p>
          <p className="mt-3">Dear Sir/Madam,</p>
          <p className="mt-2">I am writing this email to request a day of leave on 18 September 2026 due to a medical appointment. I would like to add that my class teacher has already been informed and I will complete any missed assignments.</p>
          <p className="mt-2">To begin with, the appointment is at the district hospital and cannot be rescheduled. In view of this, I kindly request you to grant me leave for the day.</p>
          <p className="mt-2">I hope you will approve my request. I look forward to hearing from you.</p>
          <p className="mt-3">Best regards,<br />Priya Menon<br />Class XII, Section A · Roll No: 15</p>
        </div>
      </Expandable>

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Poster: visual appeal matters — use borders, capitalisation, slogans" },
          { label: "Email: subject line must be specific, not vague (\"Leave Application\" not \"Important\")" },
          { label: "Email: formal emails use Dear Sir/Madam; informal use first name" },
          { label: "Both: word limits are strict — do not exceed them" },
          { label: "Both: format marks are separate from content marks — get the layout right first" },
        ]}
      />

      <KeyPoint>
        Posters persuade and emails communicate. Each has a fixed format that examiners check first. Master the layout, then fill in the content. A well-formatted answer with average content scores higher than brilliant content in the wrong format.
      </KeyPoint>
    </>
  );
}
