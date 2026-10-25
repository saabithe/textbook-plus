import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

/** A fill-in field inside the script frame. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/** One line of the sample script. Indent is in rem. */
function ScriptLine({
  children,
  indent = 0,
  tone = "body",
}: {
  children: ReactNode;
  indent?: number;
  tone?: "body" | "name" | "cue";
}) {
  return (
    <div
      className={
        tone === "name"
          ? "font-bold tracking-wide"
          : tone === "cue"
            ? "italic text-foreground/70"
            : ""
      }
      style={{ paddingInlineStart: `${indent}rem` }}
    >
      {children}
    </div>
  );
}

const SCRIPT_PARTS = [
  {
    cells: [
      "Title of the Play",
      "The name of the play, set at the top of the first page before any scene begins.",
      "In capital letters, centred, on a line of its own — the reader must know what the play is before reading the scene.",
    ],
  },
  {
    cells: [
      "Scene heading",
      "A one-line description of the location and the time of the day.",
      "One line only, in square brackets: where and when. Never spread it over two or three lines.",
    ],
  },
  {
    cells: [
      "Character's first appearance",
      "A description of the character, given the first time he or she walks in.",
      "The name in capital letters, followed by a short note on age, dress or manner. Given once, not repeated in every scene.",
    ],
  },
  {
    cells: [
      "Action",
      "The narrative description of the events of a scene.",
      "Present tense, and only what the audience can see or hear — entrances, exits, objects, gestures, sounds.",
    ],
  },
  {
    cells: [
      "Character",
      "A character's name always appears above his or her dialogue.",
      "Capital letters, no colon, on a line of its own, directly above the words spoken.",
    ],
  },
  {
    cells: [
      "Dialogue",
      "The lines of speech for each character.",
      "No quotation marks and no speech tags — the name line above already shows who is speaking.",
    ],
  },
  {
    cells: [
      "Parenthetical",
      "An action or attitude direction for a character.",
      "One short bracket under the name, only where the line could genuinely be read the wrong way. Rare.",
    ],
  },
  {
    cells: [
      "Extension",
      "A note placed after the character's name to indicate how the voice will be heard.",
      "Directly after the name and before the dialogue: (in a low voice), (V.O.) for voice-over, (O.S.) for off screen.",
    ],
  },
  {
    cells: [
      "More and Continued",
      "[MORE] and [CONT...] are used between pages to indicate that the same character is still speaking.",
      "[MORE] at the foot of the page where the speech breaks; [CONT...] beside the repeated name at the top of the next page.",
    ],
  },
  {
    cells: [
      "Page no.",
      "The page number of the script.",
      "Top right of every page, and it carries on through the [MORE] / [CONT...] break.",
    ],
  },
];

export default function ScriptWritingContent() {
  return (
    <>
      <Callout type="note">
        A script is a play written to be performed, not a story meant to be read
        silently. The page therefore carries two things at once: the words the
        actors speak, and every direction the actors, the director and the crew
        need in order to stage those words. A reader who has never seen the
        production must be able to hear and see the scene from the page alone.
      </Callout>

      <h2>Script Format — the Ten Parts</h2>

      <p>
        A stage script is laid out in a fixed order. Learn the ten parts as a
        sequence, from the title at the top down to the page number in the
        corner, and the layout of any scene follows almost by itself.
      </p>

      <TableCard
        title="The ten parts of a script"
        headers={["Part", "What it is", "Rule"]}
        rows={SCRIPT_PARTS}
        caption="Parts 1–4 set the page up before a single word is spoken; parts 5–8 control how the speaking is heard; parts 9–10 keep a long scene readable across pages."
      />

      <p>
        Two of the ten decide most of the marks: the character name standing on
        its own line above the dialogue, and the <Highlight>scene heading kept
        to a single line</Highlight>. Everything else is detail around them.
      </p>

      <h2>Fill-in Frame</h2>

      <p>
        Copy this skeleton and fill the slots. The shape of the page matters as
        much as the words — an examiner should be able to tell, at a glance,
        where the action ends and the dialogue begins.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <p className="mb-2 text-right text-xs text-muted-foreground">
            Page <Slot>[1]</Slot>
          </p>

          <p className="mb-1 text-center font-bold tracking-wide">
            <Slot>[TITLE OF THE PLAY]</Slot>
          </p>

          <p>
            <Slot>[SCENE 1 — THE LOCATION, THE TIME OF THE DAY]</Slot>
          </p>

          <p>
            <Slot>[Action: the narrative description of what happens in the scene, in the present tense. This paragraph carries the events; the dialogue below carries the words.]</Slot>
          </p>

          <p>
            <Slot>[FIRST APPEARANCE — name in capitals, then one line describing the character: age, dress, manner.]</Slot>
          </p>

          <p className="mt-4">
            <strong>
              <Slot>[CHARACTER NAME]</Slot>
            </strong>
          </p>
          <p>
            <Slot>[The dialogue of that character, written plain, without quotation marks or speech tags.]</Slot>
          </p>

          <p className="mt-4">
            <strong>
              <Slot>[SECOND CHARACTER]</Slot>
            </strong>{" "}
            <Slot>[(in a low voice)]</Slot>
          </p>
          <p>
            <Slot>[(a parenthetical — the action or attitude for this line, used only where the reading is unclear)]</Slot>
          </p>
          <p>
            <Slot>[The dialogue that follows the direction.]</Slot>
          </p>

          <p className="mt-4">
            <Slot>[MORE]</Slot>
            <span className="ms-3 text-xs text-muted-foreground">
              — the same character is still speaking
            </span>
          </p>

          <p className="mb-2 text-right text-xs text-muted-foreground">
            Page <Slot>[2]</Slot>
          </p>

          <p>
            <strong>
              <Slot>[SECOND CHARACTER]</Slot>
            </strong>{" "}
            <Slot>[(CONT...)]</Slot>
          </p>
          <p>
            <Slot>[The rest of the speech, picked up exactly where the previous page broke off.]</Slot>
          </p>
        </div>
      </div>

      <h2>Sample Script</h2>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Sample scene — all ten parts on two pages
          </span>
        </div>

        <div className="overflow-x-auto px-5 py-4">
          <div className="min-w-[32rem] space-y-1.5 font-mono text-[0.82rem] leading-relaxed text-foreground/90">
            <ScriptLine>
              <span className="block text-center font-bold tracking-wide">
                THE LAST PLATE OF SAMOSAS
              </span>
            </ScriptLine>
            <ScriptLine>
              <span className="block text-right text-xs text-muted-foreground">
                Page 1
              </span>
            </ScriptLine>

            <ScriptLine>
              [SCENE 1 — THE COLLEGE CANTEEN, LATE AFTERNOON.]
            </ScriptLine>

            <ScriptLine>
              [The canteen is almost empty. Chairs are stacked against the wall
              and one ceiling fan is still turning. A radio plays under the
              counter]
            </ScriptLine>

            <ScriptLine>
              [ANJALI, a second-year physics student in a half-buttoned lab
              coat, a record book under one arm, walks up to the counter and
              reads the menu board twice.]
            </ScriptLine>

            <ScriptLine tone="name">ANJALI</ScriptLine>
            <ScriptLine indent={1.5}>
              One plate of samosas, please.
            </ScriptLine>

            <ScriptLine tone="name">MRS IYER</ScriptLine>
            <ScriptLine indent={1.5} tone="cue">
              (without looking up from the register)
            </ScriptLine>
            <ScriptLine indent={1.5}>
              The samosas finished at four o&rsquo;clock.
            </ScriptLine>

            <ScriptLine tone="name">ANJALI</ScriptLine>
            <ScriptLine indent={1.5}>Then what is left?</ScriptLine>

            <ScriptLine tone="name">MRS IYER (in a low voice)</ScriptLine>
            <ScriptLine indent={1.5}>
              For you? One plate. I kept it aside.
            </ScriptLine>

            <ScriptLine tone="name">ANJALI</ScriptLine>
            <ScriptLine indent={1.5}>
              Why would you keep a plate for me?
            </ScriptLine>

            <ScriptLine tone="name">MRS IYER</ScriptLine>
            <ScriptLine indent={1.5}>
              Because you are the only student who says thank you. Sit. The fan
              is free.
            </ScriptLine>

            <ScriptLine tone="name">MRS IYER</ScriptLine>
            <ScriptLine indent={1.5}>And before you go —</ScriptLine>

            <ScriptLine>
              <span className="text-xs font-bold">[MORE]</span>
            </ScriptLine>

            <ScriptLine>
              <span className="block text-right text-xs text-muted-foreground">
                Page 2
              </span>
            </ScriptLine>

            <ScriptLine tone="name">MRS IYER [CONT...]</ScriptLine>
            <ScriptLine indent={1.5}>
              — hold the plate flat. The floor was mopped an hour ago.
            </ScriptLine>
          </div>
        </div>
      </div>

      <div className="-mt-4 text-sm italic text-muted-foreground">
        The scene runs over the [MORE] break between the two pages: the name is
        repeated at the top of page 2 with [CONT...] so that the actor, holding
        a printed script, knows the speech was not finished.
      </div>

      <h2>Common Mistakes</h2>

      <Checklist
        items={[
          {
            label:
              "Putting the character name after the dialogue, or on the same line as it, instead of on its own line above.",
          },
          {
            label:
              "Writing the scene heading over two or three lines, so that the location and the time of day are split apart.",
          },
          {
            label:
              "Using a parenthetical in every line — a stage direction in front of every speech tells the actor nothing and slows the reading.",
          },
          {
            label:
              "Forgetting the capitalised, colon-free name line, which is the single clearest signal on the page that a new speaker has begun.",
          },
          {
            label:
              "Mixing screen and stage conventions — camera angles and shots belong to film, entrances and exits to the stage.",
          },
          {
            label:
              "Leaving out the page numbers and the [MORE] / [CONT...] markers in an exam answer.",
          },
          {
            label:
              "Adding quotation marks around dialogue, which a script does not use at all.",
          },
        ]}
      />

      <KeyPoint>
        A script is read by four people at once — the actor looking for the
        words, the director looking for the movement, the designer looking for
        the place, and the examiner looking for the format. So the layout
        carries as much meaning as the words: the name above the line, the
        heading on one line, and the page numbered to the end.
      </KeyPoint>
    </>
  );
}
