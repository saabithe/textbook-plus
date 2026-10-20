import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";

/** A fill-in field inside an interview template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const QA_PAIRS: { n: number; q: ReactNode; a: ReactNode }[] = [
  {
    n: 1,
    q: (
      <>
        What inspired you to{" "}
        <Slot>[take up this work / achieve this goal / make this decision]</Slot>?
      </>
    ),
    a: (
      <>
        I was inspired by{" "}
        <Slot>[person / incident / experience / personal interest]</Slot>. It
        motivated me to <Slot>[explain the effect]</Slot>.
      </>
    ),
  },
  {
    n: 2,
    q: (
      <>
        What was the greatest challenge you faced while <Slot>[....]</Slot>?
      </>
    ),
    a: (
      <>
        The greatest challenge was <Slot>[challenge]</Slot>. I dealt with it by{" "}
        <Slot>[action or approach]</Slot>.
      </>
    ),
  },
  {
    n: 3,
    q: (
      <>
        How did you feel when{" "}
        <Slot>[an important event or achievement]</Slot> happened?
      </>
    ),
    a: (
      <>
        I felt <Slot>[emotion]</Slot> because{" "}
        <Slot>[reason or significance]</Slot>.
      </>
    ),
  },
  {
    n: 4,
    q: <>What do you consider your greatest achievement?</>,
    a: (
      <>
        I consider <Slot>[achievement or experience]</Slot> my greatest
        achievement because <Slot>[explanation]</Slot>.
      </>
    ),
  },
  {
    n: 5,
    q: (
      <>
        What is your opinion about{" "}
        <Slot>[relevant issue, event, or social problem]</Slot>?
      </>
    ),
    a: (
      <>
        In my opinion, <Slot>[viewpoint]</Slot>. I believe this because{" "}
        <Slot>[reason or supporting explanation]</Slot>.
      </>
    ),
  },
  {
    n: 6,
    q: (
      <>
        What role did <Slot>[a person / event / experience]</Slot> play in your
        life?
      </>
    ),
    a: (
      <>
        <Slot>[Person / event / experience]</Slot> had a significant influence on
        me by <Slot>[explain the influence]</Slot>.
      </>
    ),
  },
  {
    n: 7,
    q: <>Is there anything you regret or would like to change?</>,
    a: (
      <>
        <Slot>
          [Describe a relevant regret, lesson, or decision, if appropriate to the
          character]
        </Slot>
        .
      </>
    ),
  },
  {
    n: 8,
    q: (
      <>
        What message would you like to give our readers / young people /
        aspiring individuals?
      </>
    ),
    a: (
      <>
        I would like to encourage them to <Slot>[advice or message]</Slot>{" "}
        because <Slot>[reason]</Slot>.
      </>
    ),
  },
];

const INTERVIEW_MIND_MAP = [
  { part: "I. Header", flow: "Interview with the interviewee" },
  { part: "II. Journey", flow: "Inspiration → Challenge → Feelings" },
  {
    part: "III. Reflection",
    flow: "Achievement → Opinion → Influence → Regret",
  },
  { part: "IV. Closing", flow: "Message to readers" },
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

export default function InterviewContent() {
  return (
    <>
      <Callout type="note">
        Interview is a formal meeting or one to one conversation between an
        interviewer and interviewee. In the exam you are asked to write a set of
        interview questions (with answers) on a given person or topic.
      </Callout>

      <h2>Interview Template</h2>
      <p>
        Use this frame for any interview — fill in every <Slot>[...]</Slot>{" "}
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
            Interview with <Slot>[Interviewee&apos;s Name]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Possible Interview Questions and Answers
          </h4>
          {QA_PAIRS.map(({ n, q, a }) => (
            <p key={n}>
              <strong>{n}. Interviewer:</strong> {q}
              <br />
              <strong>Interviewee:</strong> {a}
            </p>
          ))}
        </div>
      </div>

      <h3>Mind Map — for memorisation</h3>
      <MindMapGrid items={INTERVIEW_MIND_MAP} />

      <h2>Guidelines</h2>
      <ul>
        <li>Questions should be relevant to the topic / person.</li>
        <li>It should be clear and unbiased.</li>
        <li>Questions should be open-ended.</li>
        <li>
          Questions with interrogative pronouns — what / when / who / where /
          which / how — are preferred.
        </li>
        <li>Yes/no type questions should be avoided.</li>
      </ul>

      <h2>Sample</h2>

      <Expandable
        title="Interview Questions — Suraj Venjaramoodu"
        variant="example"
      >
        <p>
          Suraj Venjaramoodu, the cine actor bagged the State award for the best
          actor in 2020 for his role in the movie, Android Kunjappan. You get
          the chance to interview him. Prepare 6 questions for the interview.
        </p>
        <p>
          <strong>1.</strong> Good morning sir. I know that you are one of the
          most sought after actors in Kerala. How and when did you come to the
          cine screen?
        </p>
        <p>
          <strong>2.</strong> Your character in the film Android Kunjappan is an
          ever appealing one to the Keralites. How do you evaluate your
          performance in the film?
        </p>
        <p>
          <strong>3.</strong> That character is both humorous and serious. So it
          is life-like. Wasn&apos;t it difficult for you to do this contrasting
          features?
        </p>
        <p>
          <strong>4.</strong> Did you feel any difficulty in acting with an
          electronic gadget, a robot?
        </p>
        <p>
          <strong>5.</strong> You are the one and only actor to bag both the
          Best Actor national award and the Best Comedian state award in the
          same year. Isn&apos;t it ironic?
        </p>
        <p>
          <strong>6.</strong> If I say you have bridged the chasm created by the
          withdrawal of Jagathy Sreekumar from the Malayalam film industry. Do
          you agree with me sir?
        </p>
      </Expandable>

      <KeyPoint>
        An interview write-up pairs every Interviewer question with an
        Interviewee answer. Ask open-ended questions that cover the person&apos;s
        journey, achievement and opinion, and close with a message for the
        readers.
      </KeyPoint>
    </>
  );
}
