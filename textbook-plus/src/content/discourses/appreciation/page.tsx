import { Callout } from "@/components/content/Callout";
import { TableCard } from "@/components/content/data/TableCard";
import { Highlight } from "@/components/content/Highlight";

export default function AppreciationContent() {
  return (
    <>
      <Callout type="note">
        Appreciation explains what a poem means and how the poet says it — the
        {" "}
        <Highlight color="yellow">poetic devices</Highlight> (sound, comparison,
        contrast and form) shape meaning and feeling.
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

      <h2>Appreciation Template</h2>
      <p>
        Use this frame for any poem — replace the <em>*[...]*</em> placeholders
        with your own words.
      </p>

      <h3># Appreciation of the Poem *[Name of the Poem]*</h3>

      <h4>I. Introduction — Poet, Title, Mood and Theme</h4>
      <p>
        The poem *[Name of the Poem]*, written by *[Name of the Poet]*, is a
        beautiful, thought-provoking and inspiring poem. Through this poem, the
        poet presents a deep insight into *[central theme or idea]*. The poem
        explores *[main subject or concern]* and expresses the poet&rsquo;s thoughts
        and feelings about it. The title itself serves as a gateway to the
        poet&rsquo;s central idea and reflects the significance of the poem.
      </p>

      <h4>II. Summary and Central Idea</h4>
      <p>
        The poem revolves around *[briefly explain the main idea of the poem]*.
        The poet beautifully portrays *[important events, images, emotions or
        experiences]* to convey the message that *[central message]*. Through
        these ideas, the poet encourages readers to think about *[relevant
        issue, human experience or value]*. The poem&rsquo;s central idea is
        meaningful because it connects with our lives and helps us understand
        *[insight gained from the poem]*.
      </p>

      <h4>III. Poetic Devices, Language, Tone and Style</h4>
      <p>
        The poet uses various literary devices to make the poem more engaging
        and effective. Vivid imagery helps readers create clear mental pictures
        of *[describe the image or scene]*. Personification is used to give
        human qualities to *[object, animal or natural element]*, making the
        description more lively. The poet also employs *[metaphor/simile]* in
        the expression &ldquo;[relevant word or line]&rdquo; to highlight *[meaning or
        effect]*.
      </p>
      <p>
        The use of alliteration in &ldquo;[example]&rdquo; adds a musical quality to the
        poem. Repetition of &ldquo;[word or line]&rdquo; emphasises *[idea or emotion]*
        and may contribute to the poem&rsquo;s rhythm. Other devices, such as
        *[symbolism/irony/contrast/onomatopoeia, as applicable]*, further
        strengthen the central theme.
      </p>
      <p>
        The language of the poem is *[simple/descriptive/figurative/emotional]*
        yet expressive. The tone is *[hopeful/sad/reflective/critical/humorous,
        as applicable]*, which suits the subject of the poem. The use of
        *[rhyme/rhythm/free verse/repetition, as applicable]* contributes to
        its overall effect. The poem is organised into *[number of stanzas, if
        relevant]* stanzas, and its structure supports the development of the
        central idea.
      </p>

      <h4>IV. Conclusion — Message, Personal Response and Favourite Lines</h4>
      <p>
        In conclusion, *[Name of the Poem]* is a meaningful and memorable poem
        that leaves a lasting impression on the reader&rsquo;s mind. Its message that
        *[central message]* is timeless and thought-provoking. The poem
        encourages readers to reflect on their own lives and gain a deeper
        understanding of *[theme or value]*. My favourite lines are
        &ldquo;[favourite line or phrase]&rdquo; because they beautifully express
        *[reason for choosing the lines]*. Overall, the poem is an inspiring
        and worthwhile piece of literature that deserves appreciation.
      </p>

      <p>
        <Highlight color="yellow">Remember:</Highlight> appreciation is
        <strong>explanation, not identification</strong>. Devices are only the
        evidence &mdash; the marks come from showing how each one shapes the
        poem&rsquo;s meaning, mood and message.
      </p>
    </>
  );
}
