import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";

/** A fill-in field inside a blurb template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

const BLURB_MIND_MAP = [
  {
    part: "I. Introduction",
    flow: "Title + Author → Hook (What if...?) → Main idea",
  },
  { part: "II. Main Content", flow: "Characters → Plot → Conflict" },
  { part: "III. Appeal", flow: "What readers learn, feel or enjoy" },
  {
    part: "IV. Recommendation",
    flow: "Strengths → Suitable audience → Catchy closing",
  },
  { part: "V. Additional Details", flow: "Publisher → Price → Other details" },
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

export default function BookPlayBlurbContent() {
  return (
    <>
      <Callout type="note">
        A blurb is the short description that introduces a book or play and
        makes people want to read or watch it. In the exam you are given a work
        and asked to write its blurb.
      </Callout>

      <h2>Book / Play Blurb Template</h2>
      <p>
        Use this frame for any book or play — fill in every <Slot>[...]</Slot>{" "}
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
            <Slot>[TITLE OF THE BOOK / PLAY]</Slot>
          </h3>
          <p>
            By: <Slot>[Author&apos;s Name]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Introduction — Hook and Main Idea
          </h4>
          <p>
            What if{" "}
            <Slot>[an intriguing question or situation related to the story]</Slot>?
          </p>
          <p>
            <Slot>[Title of the Book / Play]</Slot> by{" "}
            <Slot>[Author&apos;s Name]</Slot> is a <Slot>[genre]</Slot> that
            explores <Slot>[main idea or theme]</Slot>. Set in{" "}
            <Slot>[setting, if relevant]</Slot>, it introduces readers or
            audiences to <Slot>[brief introduction to the story]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Main Content — Characters, Plot and Conflict
          </h4>
          <p>
            The story revolves around <Slot>[main character(s)]</Slot>, who{" "}
            <Slot>[briefly describe their situation, goal, or challenge]</Slot>.
            As the story unfolds,{" "}
            <Slot>[give a concise outline of the plot and central conflict without revealing the ending]</Slot>.
          </p>
          <p>
            The work explores themes such as <Slot>[theme 1]</Slot> and{" "}
            <Slot>[theme 2]</Slot>. Through{" "}
            <Slot>[character development, dialogue, suspense, humour, emotional scenes, or dramatic conflicts]</Slot>,
            the author presents <Slot>[important idea or issue]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Appeal — What Makes It Interesting?
          </h4>
          <p>
            One of the most appealing aspects of this work is its{" "}
            <Slot>[compelling characters / engaging plot / powerful dialogue / suspense / humour / emotional depth]</Slot>.
            It allows readers or audiences to{" "}
            <Slot>[learn something / experience particular emotions / reflect on an important issue / enjoy an entertaining story]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Recommendation — Final Impression
          </h4>
          <p>
            With its <Slot>[distinctive strengths or memorable qualities]</Slot>,{" "}
            <Slot>[Title of the Book / Play]</Slot> offers a{" "}
            <Slot>[thought-provoking / entertaining / moving / exciting]</Slot>{" "}
            experience. It is especially suitable for{" "}
            <Slot>[target audience, if relevant]</Slot>.
          </p>
          <p>
            If you enjoy <Slot>[genre or theme]</Slot>, this book is worth
            reading / this play is worth watching.{" "}
            <strong>
              <Slot>[Optional catchy closing line.]</Slot>
            </strong>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            V. Additional Details — If Required
          </h4>
          <ul>
            <li>
              <strong>Publisher:</strong> <Slot>[Publisher&apos;s Name]</Slot>
            </li>
            <li>
              <strong>Price:</strong> <Slot>[Price]</Slot>
            </li>
            <li>
              <strong>Other details:</strong>{" "}
              <Slot>[Edition, publication year, or relevant information]</Slot>
            </li>
          </ul>
        </div>
      </div>

      <h2>Mind Map — for memorisation</h2>
      <MindMapGrid items={BLURB_MIND_MAP} />

      <KeyPoint>
        A blurb sells the work without spoiling it — hook the reader with a
        question, sketch the characters and conflict, name the appeal, and end
        with a recommendation. Never reveal the ending.
      </KeyPoint>
    </>
  );
}
