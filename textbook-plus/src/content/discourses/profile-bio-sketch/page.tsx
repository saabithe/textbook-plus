import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function ProfileBioSketchContent() {
  return (
    <>
      <Callout type="note">
        Bio-sketch and profile writing test your ability to present factual information about a person in a structured, engaging way. Kerala Board questions may ask for a bio-sketch of a famous personality or a profile of an institution or place.
      </Callout>

      <h2>Bio-Sketch — Structure</h2>

      <ProcessCard
        title="How to Write a Bio-Sketch"
        steps={[
          { label: "Opening (Who)", description: "Full name, dates, identity. E.g. \"Marie Curie (1867-1934) was a Polish-born physicist and chemist.\"" },
          { label: "Early Life", description: "Birth, family, education. What shaped the person? Key influences." },
          { label: "Career & Achievements", description: "Major contributions, awards, milestones. Use specific facts and dates." },
          { label: "Character & Legacy", description: "Personal qualities, impact on society, lasting influence. Why does this person matter?" },
          { label: "Closing", description: "A memorable statement — a quote by or about the person. Or their lasting contribution." },
        ]}
      />

      <h2>Profile — Structure</h2>

      <ProcessCard
        title="How to Write a Profile"
        steps={[
          { label: "Opening", description: "Name of institution/place, location, purpose. What is it known for?" },
          { label: "History", description: "When was it founded? By whom? How has it evolved?" },
          { label: "Key Features", description: "What makes it special? 3-4 distinctive aspects with specific details." },
          { label: "Impact", description: "How has it affected people? Any notable achievements or recognition?" },
          { label: "Closing", description: "Future outlook or a summarising statement about its significance." },
        ]}
      />

      <TableCard
        caption="Bio-Sketch vs Profile"
        headers={["Aspect", "Bio-Sketch", "Profile"]}
        rows={[
          { cells: ["Subject", "A person", "An institution, place, or organisation"] },
          { cells: ["Focus", "Life, achievements, character", "Features, history, purpose"] },
          { cells: ["Tone", "Respectful, admiring", "Informative, descriptive"] },
          { cells: ["Structure", "Chronological (birth → legacy)", "Thematic (history → features → impact)"] },
          { cells: ["Length", "150-200 words", "150-200 words"] },
        ]}
      />

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Use specific facts — dates, numbers, names — not vague statements" },
          { label: "Chronological order works best for bio-sketches" },
          { label: "Use transition words: born in, educated at, known for, contributed to" },
          { label: "For profiles, focus on what makes the subject UNIQUE" },
          { label: "Include at least one direct quote if available" },
          { label: "Avoid listing achievements — weave them into sentences" },
          { label: "End with a statement about lasting impact or legacy" },
          { label: "Keep the language formal but engaging — this is not a textbook" },
        ]}
      />

      <Highlight color="orange">
        Do not confuse a bio-sketch with a biography. A bio-sketch is a brief (150-200 word) overview, not a detailed life story.
      </Highlight>

      <h2>Samples</h2>

      <Example title="Bio-Sketch — APJ Abdul Kalam">
        <p>Dr. Avul Pakir Jainulabdeen Abdul Kalam (1931-2015) was an Indian aerospace scientist and the 11th President of India, popularly known as the &quot;Missile Man of India.&quot;</p>
        <p>Born in Rameswaram, Tamil Nadu, Kalam studied physics at St. Joseph&apos;s College, Tiruchirappalli, and aerospace engineering at the Madras Institute of Technology. He joined the Defence Research and Development Organisation (DRDO) and later the Indian Space Research Organisation (ISRO).</p>
        <p>Kalam played a pivotal role in India&apos;s Pokhran-II nuclear tests in 1998 and the development of the Agni and Prithvi missiles. He was awarded the Bharat Ratna in 1997.</p>
        <p>As President (2002-2007), he was known as the &quot;People&apos;s President&quot; for his outreach to students and youth. His books, including Wings of Fire and Ignited Minds, continue to inspire millions. He passed away on 27 July 2015 while delivering a lecture at IIM Shillong.</p>
      </Example>

      <Example title="Profile — Kerala Sahitya Akademi">
        <p>The Kerala Sahitya Akademi, established in 1956, is the apex body for the promotion of Malayalam literature and culture. Headquartered in Thrissur, it operates under the Department of Cultural Affairs, Government of Kerala.</p>
        <p>The Akademi was founded with the vision of nurturing Malayalam literary talent and preserving Kerala&apos;s rich literary heritage. It publishes a literary magazine, organises book fairs, and conducts literary festivals across the state.</p>
        <p>Its most prestigious honour, the Kerala Sahitya Akademi Award, has been given annually since 1958 to outstanding works in Malayalam across categories including poetry, fiction, drama, and criticism.</p>
        <p>Over the decades, the Akademi has become a cornerstone of Kerala&apos;s cultural identity, supporting thousands of writers and translators and making Malayalam literature accessible to a wider audience.</p>
      </Example>

      <KeyPoint>
        A bio-sketch tells a life in miniature; a profile tells a story of place or institution. Both require specific facts, clear structure, and a memorable closing. Know the difference, and handle any question on either with confidence.
      </KeyPoint>
    </>
  );
}
