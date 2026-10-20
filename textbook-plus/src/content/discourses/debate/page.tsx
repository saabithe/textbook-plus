import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside the debate template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/** A numbered argument: the fill-in point plus the cue line under it. */
function Argument({ point, cue }: { point: string; cue: string }) {
  return (
    <li>
      <Slot>{point}</Slot>
      <div className="mt-1 text-sm italic text-muted-foreground">{cue}</div>
    </li>
  );
}

export default function DebateContent() {
  return (
    <>
      <Callout type="note">
        A debate is an argument or a formal discussion on a particular topic.
        The question gives you a motion; you take a side — or both sides — and
        argue it out point by point.
      </Callout>

      <h2>Debate — Master Template</h2>
      <p>
        Use this frame for any motion — fill in every <Slot>[...]</Slot> field
        with your own words.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[TOPIC / MOTION]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            A. Points for the Motion
          </h4>
          <ol>
            <Argument
              point="[First Supporting Argument]"
              cue="Explain why the statement is true or beneficial. Give a relevant reason or example."
            />
            <Argument
              point="[Second Supporting Argument]"
              cue="Present another strong, distinct reason or example that supports the motion."
            />
            <Argument
              point="[Third Supporting Argument]"
              cue="Explain another important benefit, positive effect, or advantage."
            />
            <Argument
              point="[Fourth Supporting Argument]"
              cue="Present a final relevant argument that further strengthens the supporting side."
            />
          </ol>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            B. Points against the Motion
          </h4>
          <ol>
            <Argument
              point="[First Opposing Argument]"
              cue="Explain why the statement may be incorrect, limited, or not entirely true."
            />
            <Argument
              point="[Second Opposing Argument]"
              cue="Present another distinct argument or relevant example that challenges the motion."
            />
            <Argument
              point="[Third Opposing Argument]"
              cue="Explain an important disadvantage, problem, negative effect, or limitation."
            />
            <Argument
              point="[Fourth Opposing Argument]"
              cue="Present a final relevant argument that strengthens the opposing side."
            />
          </ol>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            C. Conclusion — If Required
          </h4>
          <p>
            Therefore, I strongly believe that{" "}
            <Slot>
              [state your final position clearly, based on the question and the
              arguments presented]
            </Slot>
            .
          </p>
        </div>
      </div>

      <h2>Guidelines</h2>
      <ul>
        <li>
          Read the statement given and make clear whether you have to write
          points supporting or against the topic or both.
        </li>
        <li>Make sure that you are clear with your thoughts on the motion.</li>
        <li>Communicate your ideas effectively.</li>
        <li>Write the best points first.</li>
        <li>
          Your points should stick on to the side of your topic.
        </li>
      </ul>

      <KeyPoint>
        A debate is the motion plus two banks of arguments — strongest point
        first, each point distinct, and a conclusion. Take the side the question
        asks for, and never let a point drift to the other side.
      </KeyPoint>
    </>
  );
}
