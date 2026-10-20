import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside the live report frame. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/** Renders a line, turning every [placeholder] into a fill-in slot. */
function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("[") && part.endsWith("]") ? (
          <Slot key={index}>{part}</Slot>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

function FillList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Fill text={item} />
        </li>
      ))}
    </ul>
  );
}

const MIND_MAP = [
  "Greeting + Channel",
  "Location + Event",
  "Live Scene Description",
  "Background + Facts",
  "Interview / Reactions",
  "Latest Developments + Impact",
  "Summary + Sign-off",
];

const PHRASE_BANK: { label: string; items: string[] }[] = [
  {
    label: "Introducing the Scene",
    items: [
      "We are reporting live from…",
      "We are currently at the scene of…",
      "The event is taking place here at…",
      "This location has become the centre of attention because…",
    ],
  },
  {
    label: "Describing Live Developments",
    items: [
      "As you can see behind me…",
      "At this very moment…",
      "The latest information suggests that…",
      "The situation continues to develop…",
      "One of the most significant developments is…",
    ],
  },
  {
    label: "Transitioning Between Details",
    items: [
      "Moving on to the latest developments…",
      "Meanwhile, another important aspect is…",
      "Let us now turn our attention to…",
      "To understand the situation better, let us look at its background.",
    ],
  },
  {
    label: "Reporting Reactions",
    items: [
      "People here have expressed…",
      "According to the information available…",
      "We have also received reports that…",
      "Officials have stated that…",
      "Let us hear directly from…",
    ],
  },
  {
    label: "Ending the Report",
    items: [
      "To sum up, the key development is…",
      "We will bring you further updates as they become available.",
      "This is [Name], reporting live from [Location].",
      "Back to the studio.",
    ],
  },
];

export default function LiveTvReportingContent() {
  return (
    <>
      <Callout type="note">
        A live TV report is spoken as it happens — the reporter names the channel
        and the location, describes the scene, fills in the background, takes
        reactions if the question allows, brings the latest, and signs off back
        to the studio.
      </Callout>

      <h2>Live Report — Master Template</h2>
      <p>
        Use this frame for any live report — fill in every <Slot>[...]</Slot>{" "}
        field with the details given in the question.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">Live TV Report</h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Opening — Greeting and Introduction
          </h4>
          <p>
            Good <Slot>[morning / afternoon / evening]</Slot>. This is{" "}
            <Slot>[Reporter&rsquo;s Name]</Slot>, reporting live from{" "}
            <Slot>[Location]</Slot> for <Slot>[Channel Name]</Slot>.
          </p>
          <p>
            We are here at <Slot>[Location]</Slot>, where{" "}
            <Slot>[briefly introduce the event / incident / situation]</Slot>.
            The situation has attracted attention because{" "}
            <Slot>[reason / significance]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Present Situation — What Is Happening Now?
          </h4>
          <p>
            As you can see,{" "}
            <Slot>[describe what is visibly happening at the scene]</Slot>.
          </p>
          <p>
            At the moment,{" "}
            <Slot>
              [explain the current situation using the available information]
            </Slot>
            .{" "}
            <Slot>
              [Mention the people involved, the activities taking place, or the
              immediate developments, as relevant]
            </Slot>
            .
          </p>
          <p>
            The atmosphere here is{" "}
            <Slot>[describe the atmosphere, if observable]</Slot>, and{" "}
            <Slot>[mention another relevant detail about the scene]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Background — What Happened?
          </h4>
          <p>
            For those just joining us,{" "}
            <Slot>[briefly explain the background of the event / incident]</Slot>
            .
          </p>
          <p>
            According to{" "}
            <Slot>[officials / witnesses / the information provided]</Slot>,{" "}
            <Slot>[state the relevant facts]</Slot>. The incident / event began
            when{" "}
            <Slot>[explain the cause or sequence of events, if known]</Slot>.
          </p>
          <p>
            This is significant because{" "}
            <Slot>[explain the impact or importance of the situation]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Interviews and Reactions — If Applicable
          </h4>
          <p>
            We are joined by <Slot>[Name / Designation]</Slot>, who can provide
            more information about the situation.
          </p>
          <p>
            <strong>Reporter:</strong> Could you tell us more about{" "}
            <Slot>[the event / incident / current situation]</Slot>?
          </p>
          <p>
            <strong>Interviewee:</strong>{" "}
            <Slot>[Relevant response based on the given information.]</Slot>
          </p>
          <p>
            <strong>Reporter:</strong> What impact has this had on{" "}
            <Slot>
              [the people / community / participants concerned]
            </Slot>
            ?
          </p>
          <p>
            <strong>Interviewee:</strong> <Slot>[Relevant response.]</Slot>
          </p>
          <p>Thank you for sharing that information with us.</p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            V. Latest Developments — Updates and Impact
          </h4>
          <p>
            Moving on to the latest developments,{" "}
            <Slot>
              [describe any new information, official announcements, actions
              taken, or changes in the situation]
            </Slot>
            .
          </p>
          <p>
            As a result,{" "}
            <Slot>
              [explain the effects on people, the community, the event, or the
              surroundings, as relevant]
            </Slot>
            .
          </p>
          <p>
            Authorities / organisers / concerned individuals have{" "}
            <Slot>[describe the response or action taken, if known]</Slot>.
          </p>
          <p>
            However,{" "}
            <Slot>
              [mention any remaining concern, uncertainty, or unresolved issue,
              if relevant]
            </Slot>
            .
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            VI. Closing — Summary and Sign-off
          </h4>
          <p>
            To sum up,{" "}
            <Slot>
              [briefly summarise the most important facts and the current
              situation]
            </Slot>
            .
          </p>
          <p>
            We will continue to follow the developments and bring you further
            updates as information becomes available.
          </p>
          <p>
            This is <Slot>[Reporter&rsquo;s Name]</Slot>, reporting live from{" "}
            <Slot>[Location]</Slot> for <Slot>[Channel Name]</Slot>.
          </p>
          <p>Back to the studio.</p>
        </div>
      </div>

      <h2>Mind Map</h2>
      <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {MIND_MAP.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm"
          >
            <p className="text-sm font-bold tracking-tight text-foreground">
              {index + 1}. {step}
            </p>
          </div>
        ))}
      </div>

      <h2>Universal Phrase Bank</h2>
      {PHRASE_BANK.map((group) => (
        <div key={group.label}>
          <h3>{group.label}</h3>
          <FillList items={group.items} />
        </div>
      ))}

      <h2>Exam Guidelines</h2>
      <ol>
        <li>
          <strong>Use the present tense</strong> to describe what is happening
          now; use the past tense for completed events.
        </li>
        <li>
          <strong>Sound like a reporter:</strong> Be clear, factual, direct, and
          professional.
        </li>
        <li>
          <strong>Prioritise the five Ws and one H:</strong> Who, what, when,
          where, why, and how.
        </li>
        <li>
          <strong>Use live-reporting phrases</strong> such as &ldquo;As you can
          see behind me&rdquo; and &ldquo;At this very moment&rdquo; only when
          appropriate.
        </li>
        <li>
          <strong>Adapt to the event:</strong> A festival, accident, sports
          event, natural disaster, protest, or public function requires
          different details.
        </li>
        <li>
          <strong>Include interviews only if relevant or requested.</strong>
        </li>
        <li>
          <strong>
            Never invent facts, eyewitness statements, quotations, or live
            updates.
          </strong>{" "}
          Use only the information supplied in the question.
        </li>
        <li>
          <strong>Follow the required format and word limit.</strong> The full
          six-part structure is a reference, not a requirement to include every
          section in every answer.
        </li>
      </ol>

      <KeyPoint>
        Spoken live, so present tense for the scene and past tense for what is
        over — greet with the channel, place the scene, give the background
        facts, take reactions only if asked for, bring the latest, and hand back
        to the studio. Nothing enters the report that the question did not
        supply.
      </KeyPoint>
    </>
  );
}
