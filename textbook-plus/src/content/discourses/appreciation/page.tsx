import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { Expandable } from "@/components/content/Expandable";

export default function AppreciationContent() {
  return (
    <>
      <Callout type="note">
        <strong>Appreciation</strong> is the art of explaining what makes a poem
        work — what it says <em>and</em> how it says it. The &ldquo;how&rdquo; is
        built from <strong>poetic devices</strong>: the deliberate choices of
        sound, comparison, contrast and form a poet makes to create meaning and
        feeling. Use the reference below whenever you read a poem.
      </Callout>

      <h2>Poetic Devices</h2>

      <p>
        You do not need to name every device in a poem. What earns marks is
        spotting the devices that matter and explaining the{" "}
        <em>effect</em> each one creates. Follow one habit for every device you
        mention:
      </p>

      <Callout type="important" title="The golden rule">
        Name the device &rarr; quote the exact words &rarr; explain the effect. A
        device that is named but not explained earns very little credit.
      </Callout>

      <h3>Sound &amp; Rhythm</h3>
      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Alliteration", "Repetition of the same consonant sound at the start of nearby words", "\u201cThe fair breeze blew, the white foam flew\u201d (Coleridge)"] },
          { cells: ["Assonance", "Repetition of vowel sounds within nearby words", "\u201cHear the mellow wedding bells\u201d (Poe)"] },
          { cells: ["Consonance", "Repetition of consonant sounds, often inside or at the ends of words", "\u201cstruts and frets\u201d (Shakespeare)"] },
          { cells: ["Onomatopoeia", "A word that imitates the sound it names", "\u201cbuzz\u201d, \u201chiss\u201d, \u201ccrash\u201d, \u201csizzle\u201d"] },
          { cells: ["Repetition", "Deliberately repeating a word or phrase for emphasis", "\u201cWater, water, everywhere\u201d (Coleridge)"] },
          { cells: ["Anaphora", "Repetition of a word or phrase at the start of successive lines", "\u201cI have a dream\u2026\u201d (Martin Luther King Jr.)"] },
          { cells: ["Rhyme", "Words ending in the same sound, usually at line ends", "\u201cstar / are\u201d, \u201cwall / call\u201d"] },
          { cells: ["Refrain", "A line repeated at intervals, often ending each stanza", "\u201cGood fences make good neighbours\u201d (Frost)"] },
        ]}
        caption="Sound devices work on the ear \u2014 read the lines aloud to hear them."
      />

      <h3>Figures of Speech</h3>
      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Simile", "A comparison using \u201clike\u201d or \u201cas\u201d", "\u201cMy love is like a red, red rose\u201d (Burns)"] },
          { cells: ["Metaphor", "A direct comparison without \u201clike\u201d or \u201cas\u201d", "\u201cAll the world\u2019s a stage\u201d (Shakespeare)"] },
          { cells: ["Personification", "Giving human qualities to a non-human thing", "\u201cThe wind whispered through the trees\u201d"] },
          { cells: ["Hyperbole", "Deliberate exaggeration for effect", "\u201cI\u2019ve told you a million times\u201d"] },
          { cells: ["Apostrophe", "Addressing an absent person, object or idea as if present", "\u201cO Death, where is thy sting?\u201d"] },
          { cells: ["Imagery", "Language that appeals to the senses and paints a picture", "\u201cthe frozen-ground-swell under it\u201d (Frost)"] },
          { cells: ["Symbolism", "An object or image standing for a larger idea", "The stone wall in \u201cMending Wall\u201d = human barriers"] },
          { cells: ["Allusion", "A reference to a well-known person, text, place or event", "\u201cThou whom a woman laid in a manger\u201d (Tynan)"] },
        ]}
        caption="Figures of speech work on the mind \u2014 they build pictures and ideas."
      />

      <h3>Contrast &amp; Word-play</h3>
      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Oxymoron", "Two opposite words placed side by side", "\u201csweet sorrow\u201d, \u201cdeafening silence\u201d"] },
          { cells: ["Paradox", "A seemingly contradictory statement that reveals a truth", "\u201cThe child is father of the man\u201d (Wordsworth)"] },
          { cells: ["Irony", "Saying the opposite of what is meant, or a gap between expectation and reality", "\u201cWater, water, everywhere, / Nor any drop to drink\u201d (Coleridge)"] },
          { cells: ["Antithesis", "Two contrasting ideas set against each other in balanced phrases", "\u201cIt was the best of times, it was the worst of times\u201d (Dickens)"] },
          { cells: ["Pun", "A play on a word that has two meanings", "\u201cyou shall find me a grave man\u201d (Shakespeare)"] },
          { cells: ["Transferred epithet", "An adjective moved from the noun it belongs to onto a neighbouring noun", "\u201ca sleepless night\u201d, \u201chis weary way\u201d"] },
        ]}
        caption="Contrast devices sharpen a point by setting opposites together."
      />

      <h3>Form &amp; Versification</h3>
      <TableCard
        headers={["Device", "What it is", "Example"]}
        rows={[
          { cells: ["Metre", "The measured rhythm of stressed and unstressed beats", "Iambic pentameter: \u201cShall I compare thee to a summer\u2019s day?\u201d"] },
          { cells: ["Rhyme scheme", "The pattern of end rhymes, labelled with letters", "abab (alternate), abcb (ballad), aabb (couplet)"] },
          { cells: ["Blank verse", "Unrhymed iambic pentameter", "\u201cMending Wall\u201d by Robert Frost"] },
          { cells: ["Free verse", "Poetry with no fixed metre or rhyme", "Most modern poetry"] },
          { cells: ["Enjambment", "A sentence or idea running past the end of a line into the next", "\u201cSomething there is that doesn\u2019t love a wall, / That sends the frozen-ground-swell under it\u201d (Frost)"] },
          { cells: ["Caesura", "A pause within a line, usually marked by punctuation", "\u201cTo be, or not to be: that is the question\u201d"] },
        ]}
        caption="Form devices work on structure \u2014 how the poem is built on the page."
      />

      <h3>Putting It Together</h3>

      <p>
        A strong appreciation does not list devices — it uses them to support a
        point about the poem. Notice how each example below names the device,
        quotes the words, and then explains the effect.
      </p>

      <Expandable title="Worked Example — Personification in 'Any Woman'">
        <p>
          In Katharine Tynan&rsquo;s &ldquo;Any Woman&rdquo;, the mother is
          described as &ldquo;the pillars of the house&rdquo;, &ldquo;the fire
          upon the hearth&rdquo; and &ldquo;the wall against the wind&rdquo;.{" "}
          <strong>Personifying</strong> her as pillars, fire and walls turns an
          ordinary mother into the very structure of the home. The effect is
          that her absence feels like a collapse — the poem argues that without
          her, the family cannot stand.
        </p>
      </Expandable>

      <Expandable title="Worked Example — Blank Verse & Refrain in 'Mending Wall'">
        <p>
          Robert Frost writes &ldquo;Mending Wall&rdquo; in{" "}
          <strong>blank verse</strong> — unrhymed iambic pentameter. The steady,
          conversational beat matches the walking rhythm of two neighbours
          repairing a wall, and the absence of rhyme makes the poem sound like
          ordinary speech. The line &ldquo;Good fences make good
          neighbours&rdquo; returns as a <strong>refrain</strong>; its flat,
          proverbial certainty contrasts with the speaker&rsquo;s questioning
          tone, making the neighbour&rsquo;s blind tradition feel mechanical.
        </p>
      </Expandable>

      <h3>How to Find and Write About Devices</h3>

      <Checklist
        items={[
          { label: "Read the poem aloud once — listen for repeated sounds and words" },
          { label: "Mark comparisons: is there \"like\"/\"as\" (simile) or a direct equation (metaphor)?" },
          { label: "Look for human qualities given to non-human things — personification" },
          { label: "Note the line ends — do the rhymes follow a pattern (rhyme scheme)?" },
          { label: "Check where sentences run past the line break — enjambment" },
          { label: "Underline any word or line that repeats — repetition, anaphora, refrain" },
          { label: "For every device you name, quote the exact words and state the effect" },
          { label: "Do not just list devices — connect them to the poem's meaning and tone" },
        ]}
      />

      <KeyPoint>
        Appreciation is <strong>explanation, not identification</strong>. Devices
        are only the evidence — the marks come from showing how each one shapes
        the poem&rsquo;s meaning, mood and message. Name it, quote it, and always
        explain the effect.
      </KeyPoint>
    </>
  );
}
