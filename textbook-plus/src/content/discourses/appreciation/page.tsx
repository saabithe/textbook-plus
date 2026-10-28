import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { Stepper } from "@/components/content/Stepper";
import { TableCard } from "@/components/content/data/TableCard";
import { Highlight } from "@/components/content/Highlight";

/** A fill-in field inside the appreciation template. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/** A guidance line inside a format frame. */
function Cue({ children }: { children: ReactNode }) {
  return (
    <div className="mt-1 text-sm italic text-muted-foreground">{children}</div>
  );
}

export default function AppreciationContent() {
  return (
    <>
      <Callout type="note">
        Appreciation explains what a poem means and how the poet says it — the{" "}
        <Highlight color="yellow">poetic devices</Highlight> (sound, comparison,
        contrast and form) shape meaning and feeling. The exam question usually
        hands you <strong>two poems</strong>, one from the textbook and one you
        have never seen, and asks you to compare them.
      </Callout>

      <TableCard
        headers={["The paper gives you", "What you write", "Where to go"]}
        rows={[
          {
            cells: [
              "Two poems — one from the textbook, one unseen",
              "A comparison: both poems in every paragraph, on the same axes",
              "Comparative appreciation, below",
            ],
          },
          {
            cells: [
              "One poem",
              "An appreciation of that poem: theme, devices, tone, message",
              "Appreciation of a Single Poem",
            ],
          },
        ]}
        caption="The comparison carries the heavier score, so it comes first here."
      />

      <h2>Comparative Poetry Appreciation</h2>
      <p>
        Two appreciations stapled together do not make a comparison. The marks
        come from the relationship — every paragraph names both poems, and every
        point is a similarity or a difference with a line from each.
      </p>

      <Highlight color="orange">
        Name both poems in every paragraph. The moment a paragraph could belong
        to a single-poem appreciation, it has stopped comparing.
      </Highlight>

      <h3>Step 1 — Read the Unseen Poem First</h3>
      <p>
        You meet the second poem in the exam hall, so the comparison is really a
        test of how fast you can read. Four moves, five minutes.
      </p>

      <Stepper
        steps={[
          {
            label: "Title and first line",
            description:
              "A title is a promise. Ask what the poem is about before the first full stop, then check whether the poem keeps that promise.",
          },
          {
            label: "Who is speaking",
            description:
              "An \u201cI\u201d alone, an \u201cI\u201d addressing someone, or a voice describing a scene. The speaker is not always the poet, so write \u201cthe speaker\u201d.",
          },
          {
            label: "Where it turns",
            description:
              "Find the \u201cbut\u201d, \u201cyet\u201d or \u201cstill\u201d, or the line that changes direction. That turn usually carries the poem\u2019s idea.",
          },
          {
            label: "The feeling line",
            description:
              "One line that holds the emotion. That is the line you will quote, so copy it exactly and spell it as the poem does.",
          },
        ]}
      />

      <KeyPoint>
        Five minutes with the unseen poem: read once for the story, then read
        again with a pencil, marking one image, one device and one line you will
        quote.
      </KeyPoint>

      <h3>Step 2 — The Comparison Spine</h3>
      <p>
        Compare on the same axis in both poems, one axis per paragraph. The table
        gives the question to ask of each poem and the sentence shape that
        answers it.
      </p>

      <TableCard
        headers={["Axis", "Ask of both poems", "How the comparison sounds"]}
        rows={[
          {
            cells: [
              "Theme",
              "What human situation is each poem really about?",
              "Both poems are about \u2026 ; the first sees it as \u2026, the second as \u2026",
            ],
          },
          {
            cells: [
              "Speaker and situation",
              "Who speaks, and what is happening in front of them?",
              "One speaker walks a wall with a neighbour; the other mends a wall alone.",
            ],
          },
          {
            cells: [
              "Tone",
              "What does the speaker feel about the subject?",
              "The first is wry and questioning, the second firm and tender.",
            ],
          },
          {
            cells: [
              "Form",
              "Rhymed or free? Long lines or short? How many stanzas?",
              "Loose blank verse that sounds like speech against four neat rhymed quatrains.",
            ],
          },
          {
            cells: [
              "Imagery",
              "Which picture carries the meaning in each poem?",
              "The same wall, read once as a puzzle and once as a shelter.",
            ],
          },
          {
            cells: [
              "Devices",
              "Which device does the real work in each poem?",
              "Irony and repetition in the first, metaphor and contrast in the second.",
            ],
          },
          {
            cells: [
              "Message",
              "What does each poem want the reader to think or do?",
              "One leaves the question open, the other answers it.",
            ],
          },
        ]}
        caption="One axis per paragraph keeps the answer moving between the poems."
      />

      <h3>Step 3 — The Comparative Frame</h3>
      <p>
        A comparison is still an appreciation: the same moves — introduction,
        summary, devices and style, conclusion — with both poems inside every
        move. Only the similarities and differences are new.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h4 className="!mt-0 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Introduction — Poets, Titles and Shared Theme
          </h4>
          <p>
            The poem <Slot>[Poem 1]</Slot>, written by <Slot>[Poet 1]</Slot>, and
            the poem <Slot>[Poem 2]</Slot>, written by <Slot>[Poet 2]</Slot>, are
            both beautiful, thought-provoking and inspiring poems.
          </p>
          <p>
            Through them the poets present a <strong>deep insight</strong> into{" "}
            <Slot>[shared theme]</Slot>: the first approaches it through{" "}
            <Slot>[approach of poem 1]</Slot>, the second through{" "}
            <Slot>[approach of poem 2]</Slot>.
          </p>
          <p>
            The two <strong>titles</strong> are gateways to that shared idea —{" "}
            &ldquo;<Slot>[title 1]</Slot>&rdquo; points to{" "}
            <Slot>[what the title suggests]</Slot>, while{" "}
            &ldquo;<Slot>[title 2]</Slot>&rdquo; points to{" "}
            <Slot>[what the title suggests]</Slot>.
          </p>
          <Cue>
            e.g. Both poems are about a wall; the first questions it, the second
            defends it.
          </Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Summary and Central Idea — Both Poems
          </h4>
          <p>
            The first poem revolves around{" "}
            <Slot>[brief summary of poem 1]</Slot>, and its poet portrays{" "}
            <Slot>[images, events or emotions]</Slot> to convey the message that{" "}
            <Slot>[message of poem 1]</Slot>.
          </p>
          <p>
            The second poem revolves around{" "}
            <Slot>[brief summary of poem 2]</Slot>, and its speaker{" "}
            <Slot>[what happens in poem 2]</Slot> to show that{" "}
            <Slot>[message of poem 2]</Slot>.
          </p>
          <p>
            The two <strong>central ideas</strong> meet at{" "}
            <Slot>[the ground both poems share]</Slot>, which is what makes them
            worth comparing.
          </p>
          <Cue>
            e.g. One speaker questions why the wall is needed; the other mends it
            because it shelters what he loves.
          </Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Similarities — What the Poems Share
          </h4>
          <p>
            Both poems <Slot>[shared idea or feeling]</Slot>, and both use{" "}
            <Slot>[shared image or device]</Slot> to carry it.
          </p>
          <p>
            In the first, &ldquo;<Slot>[quoted words from poem 1]</Slot>&rdquo;
            does this by <Slot>[effect]</Slot>; in the second,{" "}
            &ldquo;<Slot>[quoted words from poem 2]</Slot>&rdquo; achieves the same
            effect through <Slot>[effect]</Slot>.
          </p>
          <p>
            Both also rely on{" "}
            <Slot>
              [a repeated saying / a first-person speaker / a return to the
              opening image]
            </Slot>
            , so the two poems seem to answer each other.
          </p>
          <Cue>
            e.g. Both speakers mend a wall by hand, and both poems make the wall
            the central image.
          </Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Differences — Where the Poems Part
          </h4>
          <p>
            Where the first <Slot>[stance of poem 1]</Slot>, the second{" "}
            <Slot>[stance of poem 2]</Slot>.
          </p>
          <p>
            The difference is clearest in <Slot>[moment, line or image]</Slot>,
            where the first <Slot>[effect]</Slot> while the second{" "}
            <Slot>[effect]</Slot>.
          </p>
          <p>
            Their <strong>tones</strong> pull in different directions too: the
            first is <Slot>[tone of poem 1]</Slot>, the second{" "}
            <Slot>[tone of poem 2]</Slot>, and that difference shapes the way each
            poem ends.
          </p>
          <Cue>
            e.g. Frost&apos;s speaker doubts the wall; the second speaker calls it
            a shelter.
          </Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            V. Poetic Devices, Language, Tone and Style — Compared
          </h4>
          <p>
            The first poem relies on <strong>[device 1]</strong> — for instance{" "}
            &ldquo;<Slot>[quoted words]</Slot>&rdquo; — while the second works
            through <strong>[device 2]</strong> in{" "}
            &ldquo;<Slot>[quoted words]</Slot>&rdquo;.
          </p>
          <p>
            Each device strengthens its own poem&apos;s{" "}
            <strong>central idea</strong>: <Slot>[effect in poem 1]</Slot> against{" "}
            <Slot>[effect in poem 2]</Slot>.
          </p>
          <p>
            The <strong>language</strong> of the first is{" "}
            <Slot>[simple / descriptive / figurative / emotional]</Slot>, and of
            the second <Slot>[adjective]</Slot>, so the two poems sound{" "}
            <Slot>[how they differ on the ear]</Slot>.
          </p>
          <p>
            Their <strong>forms</strong> differ as well: the first is written in{" "}
            <Slot>[form of poem 1]</Slot>, the second in{" "}
            <Slot>[form of poem 2]</Slot>, and the{" "}
            <Slot>[rhyme scheme / line length / stanza pattern]</Slot> of each
            contributes to its overall effect.
          </p>
          <Cue>
            e.g. Irony and repetition in loose blank verse against metaphor and
            contrast in four rhymed quatrains.
          </Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            VI. Conclusion — Message, Personal Response and Favourite Lines
          </h4>
          <p>
            Read together, the two poems{" "}
            <Slot>[what the comparison reveals]</Slot>.
          </p>
          <p>
            The first leaves the reader <Slot>[feeling or question]</Slot>, while
            the second <Slot>[feeling or answer]</Slot>, and that difference is
            the comparison&apos;s point.
          </p>
          <p>
            My <strong>favourite lines</strong> are{" "}
            &ldquo;<Slot>[line from poem 1]</Slot>&rdquo; from the first and{" "}
            &ldquo;<Slot>[line from poem 2]</Slot>&rdquo; from the second, because
            together they express <Slot>[reason]</Slot>.
          </p>
          <p>
            Both poems are inspiring and worthwhile pieces of literature that
            deserve appreciation.
          </p>
          <Cue>
            e.g. Two verdicts on the same wall — one open question, one firm
            answer.
          </Cue>
        </div>
      </div>

      <h3>Step 4 — Worked Sample</h3>
      <p>
        The unseen poem below is a specimen written for this page; in the exam
        you will meet a poem like it for the first time. Read it once, then read
        the comparison that follows.
      </p>

      <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
        <p className="mb-2 font-semibold not-italic text-foreground">
          The Boundary
        </p>
        <p className="italic text-foreground/80">
          My father built it stone by stone,
          <br />
          a waist-high wall, worn and grey.
          <br />
          He said a wall is not a cage
          <br />
          if what it holds is worth the stay.
        </p>
        <p className="mt-3 italic text-foreground/80">
          Inside it, beans and marigolds;
          <br />
          outside, the wind and passing feet.
          <br />
          Each monsoon takes a stone away;
          <br />
          I set it back and call it complete.
        </p>
      </blockquote>

      <Expandable
        title="Sample — &ldquo;Mending Wall&rdquo; and &ldquo;The Boundary&rdquo; Compared"
        variant="example"
      >
        <p>
          The poem &ldquo;Mending Wall&rdquo;, written by Robert Frost, and the
          unseen poem &ldquo;The Boundary&rdquo; are both thought-provoking poems
          about a wall. Both poets present a deep insight into the boundaries
          people build between themselves — Frost through a speaker who questions
          the wall, the second through a speaker who mends it.
        </p>
        <p>
          Frost&apos;s speaker and his neighbour walk their wall each spring and
          repair the gaps, and the poem&apos;s message is that walls are hard to
          justify between people who own nothing that needs fencing.
        </p>
        <p>
          In &ldquo;The Boundary&rdquo; the speaker repairs a wall his father
          built because it shelters a garden, and its message is that a boundary
          can protect what is worth keeping.
        </p>
        <p>
          Both central ideas meet at the same question: whether a wall divides
          people or defends what they love.
        </p>
        <p>
          Both poems make the wall the central image, and both meet it through the
          ordinary work of mending — Frost&apos;s pair &ldquo;walk the line&rdquo;
          each spring, while the second speaker &ldquo;mends the gap each monsoon
          takes&rdquo;. Both also inherit a saying about walls and repeat it as
          the poem&apos;s hinge.
        </p>
        <p>
          Where Frost&apos;s speaker doubts the wall, the second speaker defends
          it. Frost is sceptical — &ldquo;Something there is that doesn&apos;t love
          a wall&rdquo; — and the irony falls on the neighbour who &ldquo;will not
          go behind his father&apos;s saying&rdquo;, while the second speaker
          repeats his father&apos;s &ldquo;a wall is not a cage&rdquo; and holds
          to it.
        </p>
        <p>
          Their tones pull in different directions too: Frost is wry and
          questioning, the second speaker firm and tender. That difference shapes
          the way each poem ends — one with a shrug, the other with a promise.
        </p>
        <p>
          Frost works through irony and repetition in loose blank verse that
          sounds like conversation. The unseen poem works through contrast and
          metaphor in four neat abcb quatrains, so its defence of the wall sounds
          settled rather than argued.
        </p>
        <p>
          Read together, the two poems ask the same question from opposite sides:
          whether a boundary protects or divides. Frost leaves the answer open and
          slightly mocking, while &ldquo;The Boundary&rdquo; answers in the
          wall&apos;s favour, and that difference is what makes each poem sharper.
        </p>
        <p>
          My favourite lines are &ldquo;Good fences make good neighbours&rdquo;
          from the first and &ldquo;a wall is not a cage / if what it holds is
          worth the stay&rdquo; from the second, because together they hold the
          argument of both poems in a single line.
        </p>
        <p>
          Both poems are worthwhile pieces of literature that deserve
          appreciation.
        </p>
      </Expandable>

      <h3>What Loses Marks</h3>

      <TableCard
        headers={["Weak answer", "Why it loses marks", "Write this instead"]}
        rows={[
          {
            cells: [
              "Two summaries, poem after poem",
              "The examiner never sees a comparison",
              "One axis per paragraph, both poems named in each",
            ],
          },
          {
            cells: [
              "A list of devices",
              "Naming a device is not appreciating it",
              "Device, quoted words, effect on meaning",
            ],
          },
          {
            cells: [
              "Only the textbook poem is quoted",
              "The unseen poem looks unread",
              "Quote one short phrase from each poem",
            ],
          },
          {
            cells: [
              "Inventing an author for the unseen poem",
              "No poet is given, so none can be known",
              "Write \u201cthe second poem\u201d, or quote its first line",
            ],
          },
          {
            cells: [
              "\u201cBoth are beautiful poems\u201d",
              "A claim with no evidence behind it",
              "A claim you can prove with a line",
            ],
          },
          {
            cells: [
              "No word on form",
              "Rhyme and line length carry meaning",
              "Compare the form in one sentence",
            ],
          },
        ]}
        caption="Every row here is a real habit — check your answer against it before you stop."
      />

      <h2>Appreciation of a Single Poem</h2>
      <p>
        When the question gives you one poem, use this frame. It also supplies the
        vocabulary — theme, tone, device, effect — that the comparison borrows.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">
            Appreciation of the Poem <Slot>[Name of the Poem]</Slot>
          </h3>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            I. Introduction — Poet, Title, Mood and Theme
          </h4>
          <p>
            The poem <Slot>[Name of the Poem]</Slot>, written by{" "}
            <Slot>[Name of the Poet]</Slot>, is a beautiful, thought-provoking
            and inspiring poem.
          </p>
          <p>
            Through this poem, the poet presents a <strong>deep insight</strong>{" "}
            into <Slot>[central theme or idea]</Slot>.
          </p>
          <p>
            The poem explores <Slot>[main subject or concern]</Slot> and expresses
            the poet&apos;s thoughts and feelings about it.
          </p>
          <p>
            The <strong>title</strong> itself serves as a gateway to the
            poet&apos;s central idea and reflects the significance of the poem.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Summary and Central Idea
          </h4>
          <p>
            The poem revolves around{" "}
            <Slot>[briefly explain the main idea of the poem]</Slot>.
          </p>
          <p>
            The poet beautifully portrays{" "}
            <Slot>[important events, images, emotions or experiences]</Slot> to
            convey the message that <Slot>[central message]</Slot>.
          </p>
          <p>
            Through these ideas, the poet encourages readers to think about{" "}
            <Slot>[relevant issue, human experience or value]</Slot>.
          </p>
          <p>
            The poem&apos;s <strong>central idea</strong> is meaningful because it
            connects with our lives and helps us understand{" "}
            <Slot>[insight gained from the poem]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Poetic Devices, Language, Tone and Style
          </h4>
          <p>
            The poet uses various <strong>literary devices</strong> to make the
            poem more engaging and effective. Vivid <strong>imagery</strong> helps
            readers create clear mental pictures of{" "}
            <Slot>[describe the image or scene]</Slot>.
          </p>
          <p>
            <strong>Personification</strong> is used to give human qualities to{" "}
            <Slot>[object, animal or natural element]</Slot>, making the
            description more lively. The poet also employs{" "}
            <Slot>[metaphor / simile]</Slot> in the expression{" "}
            &ldquo;<Slot>[relevant word or line]</Slot>&rdquo; to highlight{" "}
            <Slot>[meaning or effect]</Slot>.
          </p>
          <p>
            The use of <strong>alliteration</strong> in{" "}
            &ldquo;<Slot>[example]</Slot>&rdquo; adds a musical quality to the
            poem. <strong>Repetition</strong> of{" "}
            &ldquo;<Slot>[word or line]</Slot>&rdquo; emphasises{" "}
            <Slot>[idea or emotion]</Slot> and may contribute to the poem&apos;s
            rhythm.
          </p>
          <p>
            Other devices, such as{" "}
            <Slot>[symbolism / irony / contrast / onomatopoeia, as applicable]</Slot>
            , further strengthen the <strong>central theme</strong>.
          </p>
          <p>
            The <strong>language</strong> of the poem is{" "}
            <Slot>[simple / descriptive / figurative / emotional]</Slot> yet
            expressive. The <strong>tone</strong> is{" "}
            <Slot>[hopeful / sad / reflective / critical / humorous, as applicable]</Slot>
            , which suits the subject of the poem.
          </p>
          <p>
            The use of{" "}
            <Slot>[rhyme / rhythm / free verse / repetition, as applicable]</Slot>{" "}
            contributes to its overall effect. The poem is organised into{" "}
            <Slot>[number of stanzas, if relevant]</Slot> stanzas, and its{" "}
            <strong>structure</strong> supports the development of the central
            idea.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            IV. Conclusion — Message, Personal Response and Favourite Lines
          </h4>
          <p>
            In conclusion, <Slot>[Name of the Poem]</Slot> is a meaningful and
            memorable poem that leaves a lasting impression on the reader&apos;s
            mind. Its message that <Slot>[central message]</Slot> is timeless and
            thought-provoking.
          </p>
          <p>
            The poem encourages readers to reflect on their own lives and gain a
            deeper understanding of <Slot>[theme or value]</Slot>.
          </p>
          <p>
            My <strong>favourite lines</strong> are{" "}
            &ldquo;<Slot>[favourite line or phrase]</Slot>&rdquo; because they
            beautifully express <Slot>[reason for choosing the lines]</Slot>.
          </p>
          <p>
            Overall, the poem is an inspiring and worthwhile piece of literature
            that deserves appreciation.
          </p>
        </div>
      </div>

      <Callout type="important" title="Remember">
        Appreciation is <strong>explanation, not identification</strong>. Devices
        are only the evidence — the marks come from showing how each one shapes
        the poem&apos;s meaning, mood and message.
      </Callout>

      <h2>Appreciation vs Review</h2>
      <TableCard
        headers={["Feature", "Poem Appreciation", "Poem Review"]}
        rows={[
          {
            cells: [
              "Focus",
              "Literary beauty — theme, poetic devices and their effects",
              "Overall evaluation — strengths, impact and personal opinion",
            ],
          },
          {
            cells: [
              "Approach",
              "Appreciates how the poet expresses ideas",
              "Evaluates how effectively the poem works",
            ],
          },
        ]}
        caption="Appreciation explains literary beauty; review judges overall effectiveness."
      />

      <h2>Core Poetic Devices</h2>
      <p>
        Poetic devices are <Highlight color="blue">only one part</Highlight> of
        appreciation — they support your reading, they do not replace it. Name the
        device, quote the words, explain the effect.
      </p>

      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Alliteration", "Same consonant sound at the start of nearby words", "\u201cThe fair breeze blew\u201d (Coleridge)"] },
          { cells: ["Assonance", "Repeated vowel sounds within nearby words", "\u201cHear the mellow wedding bells\u201d (Poe)"] },
          { cells: ["Consonance", "Repeated consonant sounds inside or at the ends of words", "\u201cstruts and frets\u201d (Shakespeare)"] },
          { cells: ["Onomatopoeia", "A word that imitates the sound it names", "\u201cbuzz\u201d, \u201chiss\u201d, \u201ccrash\u201d"] },
          { cells: ["Repetition", "Deliberately repeating a word or phrase for emphasis", "\u201cWater, water, everywhere\u201d (Coleridge)"] },
          { cells: ["Rhyme", "Words ending in the same sound, usually at line ends", "\u201cstar / are\u201d, \u201cwall / call\u201d"] },
          { cells: ["Anaphora", "A word or phrase repeated at the start of successive lines", "\u201cI have a dream\u2026\u201d (Martin Luther King Jr.)"] },
          { cells: ["Refrain", "A line repeated at intervals, often ending each stanza", "\u201cGood fences make good neighbours\u201d (Frost)"] },
        ]}
        caption="Sound devices work on the ear &mdash; read the lines aloud to hear them."
      />

      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Rhyming scheme", "The pattern of end rhymes, labelled with letters", "abab (alternate), abcb (ballad), aabb (couplet)"] },
          { cells: ["Simile", "A comparison using \u201clike\u201d or \u201cas\u201d", "\u201cMy love is like a red, red rose\u201d (Burns)"] },
          { cells: ["Metaphor", "A direct comparison without \u201clike\u201d or \u201cas\u201d", "\u201cAll the world\u2019s a stage\u201d (Shakespeare)"] },
          { cells: ["Personification", "Giving human qualities to a non-human thing", "\u201cThe wind whispered through the trees\u201d"] },
          { cells: ["Hyperbole", "Deliberate exaggeration for effect", "\u201cI\u2019ve told you a million times\u201d"] },
          { cells: ["Metonymy", "Substituting something closely related for the thing itself", "\u201cThe crown declared war\u201d (crown = monarch)"] },
          { cells: ["Oxymoron", "Two opposite words placed side by side", "\u201csweet sorrow\u201d, \u201cdeafening silence\u201d"] },
          { cells: ["Symbolism", "An object or image standing for a larger idea", "The stone wall in \u201cMending Wall\u201d = human barriers"] },
          { cells: ["Irony", "Saying the opposite of what is meant, or a gap between expectation and reality", "\u201cWater, water, everywhere, / Nor any drop to drink\u201d (Coleridge)"] },
        ]}
        caption="Figures of speech and form work on meaning &mdash; they build pictures and ideas."
      />

      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Imagery", "Language that appeals to the five senses &mdash; sight (visual), sound (auditory), smell (olfactory), taste (gustatory), touch (tactile)", "\u201cthe frozen-ground-swell\u201d (sight), \u201cthe hum of bees\u201d (sound)"] },
        ]}
        caption="Imagery creates clear mental pictures through the senses."
      />
    </>
  );
}
