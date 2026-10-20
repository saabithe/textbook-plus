import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
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
        contrast and form) shape meaning and feeling.
      </Callout>

      <h2>Appreciation Template</h2>
      <p>
        Use this frame for any poem — fill in every <Slot>[...]</Slot> field with
        your own words.
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
            and inspiring poem. Through this poem, the poet presents a{" "}
            <strong>deep insight</strong> into{" "}
            <Slot>[central theme or idea]</Slot>. The poem explores{" "}
            <Slot>[main subject or concern]</Slot> and expresses the
            poet&apos;s thoughts and feelings about it. The{" "}
            <strong>title</strong> itself serves as a gateway to the
            poet&apos;s central idea and reflects the significance of the poem.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            II. Summary and Central Idea
          </h4>
          <p>
            The poem revolves around{" "}
            <Slot>[briefly explain the main idea of the poem]</Slot>. The poet
            beautifully portrays{" "}
            <Slot>[important events, images, emotions or experiences]</Slot> to
            convey the message that <Slot>[central message]</Slot>. Through
            these ideas, the poet encourages readers to think about{" "}
            <Slot>[relevant issue, human experience or value]</Slot>. The
            poem&apos;s <strong>central idea</strong> is meaningful because it
            connects with our lives and helps us understand{" "}
            <Slot>[insight gained from the poem]</Slot>.
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            III. Poetic Devices, Language, Tone and Style
          </h4>
          <p>
            The poet uses various <strong>literary devices</strong> to make the
            poem more engaging and effective. Vivid <strong>imagery</strong>{" "}
            helps readers create clear mental pictures of{" "}
            <Slot>[describe the image or scene]</Slot>.{" "}
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
            <Slot>[idea or emotion]</Slot> and may contribute to the
            poem&apos;s rhythm. Other devices, such as{" "}
            <Slot>[symbolism / irony / contrast / onomatopoeia, as applicable]</Slot>
            , further strengthen the <strong>central theme</strong>.
          </p>
          <p>
            The <strong>language</strong> of the poem is{" "}
            <Slot>[simple / descriptive / figurative / emotional]</Slot> yet
            expressive. The <strong>tone</strong> is{" "}
            <Slot>[hopeful / sad / reflective / critical / humorous, as applicable]</Slot>
            , which suits the subject of the poem. The use of{" "}
            <Slot>[rhyme / rhythm / free verse / repetition, as applicable]</Slot>
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
            memorable poem that leaves a lasting impression on the
            reader&apos;s mind. Its message that <Slot>[central message]</Slot>{" "}
            is timeless and thought-provoking. The poem encourages readers to
            reflect on their own lives and gain a deeper understanding of{" "}
            <Slot>[theme or value]</Slot>. My <strong>favourite lines</strong>{" "}
            are &ldquo;<Slot>[favourite line or phrase]</Slot>&rdquo; because
            they beautifully express{" "}
            <Slot>[reason for choosing the lines]</Slot>. Overall, the poem is
            an inspiring and worthwhile piece of literature that deserves
            appreciation.
          </p>
        </div>
      </div>

      <Callout type="important" title="Remember">
        Appreciation is <strong>explanation, not identification</strong>.
        Devices are only the evidence — the marks come from showing how each
        one shapes the poem&apos;s meaning, mood and message.
      </Callout>

      <h2>Comparative Poetry Appreciation</h2>
      <p>
        When the question gives you <strong>two poems</strong>, appreciate them
        together — the shared theme first, then what the poems share and where
        they differ, then the devices, the style and an overall comparison.
      </p>

      <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
        <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
          <span className="text-sm font-bold tracking-tight text-foreground">
            Fill-in frame — copy this structure
          </span>
        </div>

        <div className="px-5 py-4">
          <h3 className="!mt-0">Comparative Poetry Appreciation</h3>

          <p>
            <strong>Poems:</strong>
            <br />
            &ldquo;<Slot>[Poem 1]</Slot>&rdquo; — <Slot>[Poet]</Slot>
            <br />
            &ldquo;<Slot>[Poem 2]</Slot>&rdquo; — <Slot>[Poet]</Slot>
          </p>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Theme
          </h4>
          <Cue>Explain the common theme in both poems.</Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Similarities
          </h4>
          <ul className="text-sm italic text-muted-foreground">
            <li>Explain how both poems deal with the same idea.</li>
            <li>Compare their message and feelings.</li>
            <li>Mention similar images/ideas if important.</li>
          </ul>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Differences
          </h4>
          <ul className="text-sm italic text-muted-foreground">
            <li>Explain how the poems present the theme differently.</li>
            <li>Compare the tone, images or approach.</li>
            <li>Mention important differences in the poets&apos; ideas.</li>
          </ul>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Poetic Devices
          </h4>
          <Cue>
            Mention important metaphors, imagery, rhyme, symbols or other
            devices.
          </Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Language and Style
          </h4>
          <Cue>Briefly compare the language and style of both poems.</Cue>

          <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Conclusion
          </h4>
          <Cue>
            Explain what makes both poems meaningful and give an overall
            comparison.
          </Cue>
        </div>
      </div>

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
        appreciation — they support your reading, they do not replace it. Name
        the device, quote the words, explain the effect.
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
