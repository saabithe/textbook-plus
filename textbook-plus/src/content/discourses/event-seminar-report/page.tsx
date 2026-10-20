import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside the event / seminar report template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

export default function EventSeminarReportContent() {
  return (
    <>
      <Callout type="note">
        An event or seminar report records a programme after it is over — the
        details at the top, then the programme in the order it unfolded, the key
        ideas, the outcome and the closing courtesies.
      </Callout>

      <h2>Report — Master Template</h2>
      <p>
        Use this frame for any event — fill in every <Slot>[...]</Slot> field
        with the details given in the question.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            REPORT ON <Slot>[NAME OF THE EVENT / SEMINAR]</Slot>
          </h3>

          <p>
            <strong>Prepared by:</strong>{" "}
            <Slot>[Name and Designation]</Slot>
            <br />
            <strong>Date:</strong> <Slot>[Date]</Slot>
            <br />
            <strong>Time:</strong> <Slot>[Time, if relevant or provided]</Slot>
            <br />
            <strong>Venue:</strong> <Slot>[Venue]</Slot>
            <br />
            <strong>Organised by:</strong>{" "}
            <Slot>[Club / School / Department / Organisation]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Introduction — Event Details
          </h4>
          <p>
            <Slot>[Name of the institution / organisation]</Slot> organised a{" "}
            <Slot>[name of the event / seminar]</Slot> on <Slot>[date]</Slot> at{" "}
            <Slot>[venue]</Slot>. The programme was organised by{" "}
            <Slot>[club / department / authority]</Slot> with the aim of{" "}
            <Slot>[purpose or objective of the event]</Slot>.
          </p>
          <p>
            The event was attended by{" "}
            <Slot>
              [chief guest / speakers / participants / students / teachers, as
              applicable]
            </Slot>
            .
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Programme Details — Opening and Activities
          </h4>
          <p>
            The programme began with{" "}
            <Slot>[prayer / welcome address / introductory remarks, if applicable]</Slot>.{" "}
            <Slot>[Name and designation of the person]</Slot> inaugurated the
            event and delivered a speech on{" "}
            <Slot>[topic or message]</Slot>.
          </p>
          <p>
            The main session featured{" "}
            <Slot>
              [key activities / presentations / speeches / demonstrations /
              competitions / discussions]
            </Slot>
            . <Slot>[Name of the speaker / resource person]</Slot>,{" "}
            <Slot>[designation, if provided]</Slot>, spoke about{" "}
            <Slot>[topic]</Slot> and highlighted{" "}
            <Slot>[important points]</Slot>.
          </p>
          <p>
            Furthermore,{" "}
            <Slot>
              [describe other significant activities, performances, discussions,
              sessions, or programme highlights]
            </Slot>
            . Participants actively engaged in{" "}
            <Slot>
              [questions / group activities / discussions / competitions, if
              applicable]
            </Slot>
            .
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Main Content — Key Ideas and Highlights
          </h4>
          <p>
            The central focus of the programme was{" "}
            <Slot>[main theme or subject]</Slot>. During the session,{" "}
            <Slot>
              [explain the important ideas discussed, knowledge shared,
              demonstrations conducted, or issues addressed]
            </Slot>
            .
          </p>
          <p>
            Another important highlight was{" "}
            <Slot>
              [describe a significant activity, presentation, decision, or
              contribution]
            </Slot>
            .{" "}
            <Slot>
              [Include relevant recommendations, achievements, or noteworthy
              observations, if provided.]
            </Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Outcome — Benefits and Significance
          </h4>
          <p>
            The programme helped participants{" "}
            <Slot>
              [explain the knowledge gained, awareness created, skills developed,
              or objectives achieved]
            </Slot>
            . It also highlighted the importance of{" "}
            <Slot>[relevant theme or issue]</Slot>.
          </p>
          <p>
            <Slot>
              [Include notable achievements, decisions, recommendations, or
              resolutions, if provided.]
            </Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            V. Conclusion — Closing Session and Acknowledgements
          </h4>
          <p>
            The programme concluded with{" "}
            <Slot>
              [vote of thanks / closing remarks / prize distribution / final
              session, as applicable]
            </Slot>
            . <Slot>[Name and designation]</Slot> proposed the vote of thanks,
            expressing gratitude to{" "}
            <Slot>
              [organisers, chief guest, speakers, participants, and others, as
              relevant]
            </Slot>
            .
          </p>
          <p>
            Overall, the event was{" "}
            <Slot>
              [successful / informative / meaningful, if supported by the given
              details]
            </Slot>{" "}
            and contributed to <Slot>[final outcome or significance]</Slot>.
          </p>
        </div>
      </div>

      <KeyPoint>
        An event report keeps the order of the day: details and organisers
        first, then the programme as it happened — inauguration, sessions,
        activities — then the key ideas, the outcome, and the vote of thanks
        that closes it.
      </KeyPoint>
    </>
  );
}
