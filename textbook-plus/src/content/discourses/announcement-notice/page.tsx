import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { ProcessCard } from "@/components/content/process/ProcessCard";

/** A fill-in field inside an announcement / notice template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const MIND_MAP = [
  {
    part: "Common information",
    flow: "Institution → Heading → Date → Event title",
  },
  { part: "Event details", flow: "What? Who? When? Where? Why?" },
  {
    part: "Action",
    flow: "Eligibility → Instructions → Registration → Deadline → Contact",
  },
  { part: "Announcement", flow: "Attention, please! → Participation appeal → Sign-off" },
  { part: "Notice", flow: "Direct information → Formal sign-off" },
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

export default function AnnouncementNoticeContent() {
  return (
    <>
      <Callout type="note">
        A notice is written in order to inform people or pupils (in a school)
        about an event or an activity. A notice is a formal means of
        communication. It can be to issue certain instructions or to make an
        announcement of any event / activity such as a competition, an
        exhibition, an inauguration, an excursion, a meeting or a show.
      </Callout>

      <h2>Announcement Script Template</h2>
      <p>
        Use this frame for any announcement — read it out over the PA system or
        at the start of a function.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[NAME OF THE INSTITUTION / ORGANISATION]</Slot>
          </h3>
          <p>
            <strong>ANNOUNCEMENT</strong>
          </p>
          <p>
            Date: <Slot>[Date of Announcement]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            <Slot>[TITLE / NAME OF THE EVENT]</Slot>
          </h4>
          <p>
            <strong>Attention, please!</strong>
          </p>
          <p>
            This is to inform all{" "}
            <Slot>[students / teachers / members / concerned persons]</Slot> that{" "}
            <Slot>[name of the institution / organisation]</Slot> is organising{" "}
            <Slot>[name or type of event]</Slot> on <Slot>[date]</Slot> at{" "}
            <Slot>[time]</Slot> at <Slot>[venue]</Slot>.
          </p>
          <p>
            The programme will include{" "}
            <Slot>[important activities / competitions / performances / discussions, if relevant]</Slot>.{" "}
            <Slot>[Mention the purpose, chief guest, eligibility, or other important details, if applicable.]</Slot>
          </p>
          <p>
            All interested <Slot>[participants / students / members]</Slot> are
            requested to{" "}
            <Slot>[register / attend / participate / report at the venue]</Slot>{" "}
            on or before <Slot>[deadline, if applicable]</Slot>. For further
            details, please contact <Slot>[name / office / contact person]</Slot>.
          </p>
          <p>
            Everyone is requested to participate enthusiastically and make the
            programme a success.
          </p>
          <p className="text-right">
            <Slot>[Name of the Issuing Authority]</Slot>
            <br />
            <Slot>[Designation]</Slot>
            <br />
            <Slot>[Institution / Organisation]</Slot>
          </p>
        </div>
      </div>

      <h2>Notice Template</h2>
      <p>
        Use this frame for any notice — keep it inside a box, within the word
        limit.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[NAME OF THE INSTITUTION / ORGANISATION]</Slot>
          </h3>
          <p>
            <strong>NOTICE</strong>
          </p>
          <p>
            Date: <Slot>[Date of Notice]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            <Slot>[TITLE / NAME OF THE EVENT]</Slot>
          </h4>
          <p>
            This is to inform all{" "}
            <Slot>[students / teachers / members / concerned persons]</Slot> that{" "}
            <Slot>[name of the institution / organisation]</Slot> is organising{" "}
            <Slot>[name or type of event]</Slot> on <Slot>[date]</Slot> at{" "}
            <Slot>[time]</Slot> at <Slot>[venue]</Slot>.
          </p>
          <p>
            The programme will include{" "}
            <Slot>[important activities / competitions / performances / discussions, if relevant]</Slot>.{" "}
            <Slot>[Mention the purpose, eligibility, and other important details, if applicable.]</Slot>
          </p>
          <p>
            Interested <Slot>[participants / students / members]</Slot> are
            requested to <Slot>[register / attend / participate]</Slot> on or
            before <Slot>[deadline, if applicable]</Slot>. For further details,
            contact <Slot>[name / office / contact person]</Slot>.
          </p>
          <p className="text-right">
            <Slot>[Name of the Issuing Authority]</Slot>
            <br />
            <Slot>[Designation]</Slot>
          </p>
        </div>
      </div>

      <h2>Notice Format at a Glance</h2>

      <ProcessCard
        title="Notice Format"
        steps={[
          { label: "Issuing Organisation", description: "Name at the top centre. E.g. \"GOVERNMENT MODEL HIGHER SECONDARY SCHOOL\"" },
          { label: "Notice (heading)", description: "\"NOTICE\" in capital letters, centred, below the organisation name." },
          { label: "Date", description: "Top-right corner. Format: 15 August 2026." },
          { label: "Subject Line", description: "Clear, concise. What is the notice about?" },
          { label: "Body", description: "Who, what, when, where. Formal tone. 50-80 words." },
          { label: "Signature + Designation", description: "Name and designation of the issuing authority at the bottom-right." },
        ]}
      />

      <h2>Mind Map — for memorisation</h2>
      <MindMapGrid items={MIND_MAP} />

      <h2>Guidelines</h2>
      <ul>
        <li>Write the word NOTICE at the top.</li>
        <li>
          Mention the name and place of the issuing agency (school, organisation
          or office).
        </li>
        <li>Below it give a heading to the information.</li>
        <li>
          A good notice is always brief and to the point and leaves no scope for
          further enquiries.
        </li>
        <li>Adhere to the specified word limit of 50 words.</li>
        <li>Language should be simple and formal.</li>
        <li>Mention all the relevant details (date, time and venue).</li>
        <li>
          Below the body of the notice, put signature and write name in the
          right bottom.
        </li>
        <li>Write at the left hand side top / bottom, the date.</li>
        <li>It is better to put the whole thing in a box.</li>
      </ul>

      <Highlight color="orange">
        A notice without a date and signature loses marks. Always include both — even if the question does not explicitly ask for them.
      </Highlight>

      <h2>Sample</h2>

      <Expandable title="Notice — Cultural Fest" variant="example">
        <div className="border border-foreground/20 rounded-xl p-5">
          <p className="text-center font-bold">GOVERNMENT MODEL HIGHER SECONDARY SCHOOL</p>
          <p className="text-center font-bold mt-1">NOTICE</p>
          <p className="text-right text-sm mt-2">12 September 2026</p>
          <p className="font-semibold mt-3">Annual Cultural Fest — &quot;Kalotsavam 2026&quot;</p>
          <p className="mt-2 text-sm">All students are informed that the Annual Cultural Fest will be held on 25 September 2026 in the school auditorium from 9:00 AM to 4:00 PM. Events include dance, music, drama, and art competitions. Interested students may register with their class teachers before 20 September 2026.</p>
          <p className="mt-3 text-right text-sm">Suresh K.<br />Cultural Secretary</p>
        </div>
      </Expandable>

      <KeyPoint>
        A notice and an announcement carry the same core — institution, event,
        date, time, venue, and a call to action with a deadline and contact.
        The announcement adds an attention call and a participation appeal; the
        notice stays brief, boxed, dated at the top-left and signed at the
        bottom-right.
      </KeyPoint>
    </>
  );
}
