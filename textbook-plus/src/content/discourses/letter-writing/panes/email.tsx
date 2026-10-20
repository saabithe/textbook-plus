import type { ReactNode } from "react";
import { Expandable } from "@/components/content/Expandable";
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

export default function EmailPane() {
  return (
    <>
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
          { label: "Email: subject line must be specific, not vague (\"Leave Application\" not \"Important\")" },
          { label: "Email: formal emails use Dear Sir/Madam; informal use first name" },
        ]}
      />
    </>
  );
}
