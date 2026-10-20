import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";

/** A fill-in field inside the profile template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

export default function ProfileWritingContent() {
  return (
    <>
      <Callout type="note">
        A profile presents a person&rsquo;s life and achievements in a short,
        connected paragraph. Use only the sentences and details relevant to the
        information supplied. Do not invent missing facts.
      </Callout>

      <h2>Profile — Master Template</h2>
      <p>
        Use this frame for any person — fill in every <Slot>[...]</Slot> field
        with the facts given in the hints.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            <Slot>[PERSON&rsquo;S NAME]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Profile Paragraph
          </h4>
          <p>
            <Slot>[Person&rsquo;s Name]</Slot> was born on{" "}
            <Slot>[date]</Slot> in <Slot>[place]</Slot>.{" "}
            <Slot>[He/She/They]</Slot> belongs to{" "}
            <Slot>[family/background, if provided]</Slot> and received{" "}
            <Slot>[his/her/their]</Slot> early education at{" "}
            <Slot>[institution]</Slot>. Later, <Slot>[he/she/they]</Slot>{" "}
            pursued <Slot>[higher education or training]</Slot> in{" "}
            <Slot>[subject/field]</Slot> at <Slot>[institution]</Slot>.
          </p>
          <p>
            After completing <Slot>[his/her/their]</Slot> education,{" "}
            <Slot>[Person&rsquo;s Name]</Slot> began{" "}
            <Slot>[his/her/their]</Slot> career as a <Slot>[profession]</Slot>{" "}
            in <Slot>[year / place / organisation, if provided]</Slot>.{" "}
            <Slot>[He/She/They]</Slot> became well known for{" "}
            <Slot>[important achievement, work, or contribution]</Slot>. In
            addition, <Slot>[he/she/they]</Slot> made significant contributions
            to <Slot>[field / society / organisation]</Slot> through{" "}
            <Slot>[specific work or achievement]</Slot>.
          </p>
          <p>
            Furthermore, <Slot>[Person&rsquo;s Name]</Slot> received{" "}
            <Slot>[award / honour]</Slot> for <Slot>[reason]</Slot> in{" "}
            <Slot>[year]</Slot>. Among <Slot>[his/her/their]</Slot> notable
            achievements are <Slot>[achievement 1]</Slot> and{" "}
            <Slot>[achievement 2]</Slot>. Through{" "}
            <Slot>[his/her/their]</Slot> dedication to{" "}
            <Slot>[field or cause]</Slot>, <Slot>[he/she/they]</Slot> made a
            lasting impact on{" "}
            <Slot>[people / society / the relevant field]</Slot>.
          </p>
          <p>
            Thus, <Slot>[Person&rsquo;s Name]</Slot> is remembered for{" "}
            <Slot>[main achievement, contribution, or legacy]</Slot>.
          </p>
        </div>
      </div>

      <h2>1. Expanding Hints into Complete Sentences</h2>

      <TableCard
        headers={["Given hint", "Expanded sentence"]}
        rows={[
          {
            cells: [
              "Born — 15 May 1980 — Kochi",
              "She was born on 15 May 1980 in Kochi.",
            ],
          },
          {
            cells: [
              "Education — University of Kerala",
              "She received her education at the University of Kerala.",
            ],
          },
          {
            cells: ["Profession — scientist", "She worked as a scientist."],
          },
          {
            cells: [
              "Famous — scientific discoveries",
              "She became famous for her scientific discoveries.",
            ],
          },
          {
            cells: [
              "Award — contributions to science",
              "She received the award for her contributions to science.",
            ],
          },
          {
            cells: [
              "Founded — organisation — 2010",
              "She founded the organisation in 2010.",
            ],
          },
        ]}
        caption="These are illustrative examples, not facts about a particular person."
      />

      <h2>2. Essential Prepositions</h2>

      <TableCard
        headers={["Use", "Correct examples"]}
        rows={[
          { cells: ["Born on", "on 15 May 1980"] },
          { cells: ["Born in", "in India, in Kochi, in 1980"] },
          { cells: ["Educated at", "at a school or university"] },
          { cells: ["Degree in", "a degree in Physics"] },
          { cells: ["Worked as", "worked as a teacher"] },
          { cells: ["Worked for", "worked for an organisation"] },
          { cells: ["Famous for", "famous for scientific discoveries"] },
          { cells: ["Contributed to", "contributed to literature"] },
          { cells: ["Received an award for", "received an award for bravery"] },
          { cells: ["Dedicated to", "dedicated to public service"] },
          { cells: ["Impact on", "had an impact on society"] },
          {
            cells: [
              "Married to",
              "married to [name], if relevant and provided",
            ],
          },
        ]}
        caption="Born on a date, born in a place — the verb decides the preposition."
      />

      <h2>3. Useful Linking Phrases</h2>
      <ul>
        <li>
          <strong>For adding information:</strong> In addition, Furthermore,
          Moreover
        </li>
        <li>
          <strong>For sequence:</strong> Later, Subsequently, After completing
          [education]
        </li>
        <li>
          <strong>For achievements:</strong> As a result, Consequently, Through
          these efforts
        </li>
        <li>
          <strong>For significance:</strong> In recognition of [contribution],
          For this achievement
        </li>
        <li>
          <strong>For conclusion:</strong> Thus, Therefore, As a result of
          [his/her/their] contributions
        </li>
      </ul>

      <KeyPoint>
        A profile is only as good as its facts — turn each hint into a complete
        sentence, join the sentences with the right preposition and linking
        phrase, and leave out everything the question did not supply.
      </KeyPoint>
    </>
  );
}
