import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function ReviewContent() {
  return (
    <>
      <Callout type="note">
        Reviews test your ability to form and express a balanced critical opinion. Kerala Board questions may ask for a book review or film review. Know both structures and the difference between a review and a simple opinion.
      </Callout>

      <h2>Book Review — Structure</h2>

      <ProcessCard
        title="How to Write a Book Review"
        steps={[
          { label: "Title + Author", description: "Name the book and author. E.g. \"The Guide by R.K. Narayan\"" },
          { label: "Introduction", description: "Brief summary — what is the book about? Genre, setting, main characters. 2-3 sentences." },
          { label: "Plot Summary (no spoilers)", description: "Outline the main events without revealing the ending. Give enough context for the reader to understand your evaluation." },
          { label: "Evaluation", description: "What worked? What didn't? Discuss characters, writing style, themes, pacing. Use specific examples." },
          { label: "Rating + Recommendation", description: "Give a clear verdict. Who should read this book? Why?" },
        ]}
      />

      <h2>Film Review — Structure</h2>

      <ProcessCard
        title="How to Write a Film Review"
        steps={[
          { label: "Title + Director", description: "Film name, director, year. E.g. \"Drishyam (2013), dir. Jeethu Joseph\"" },
          { label: "Genre + Premise", description: "What kind of film is it? What is the basic setup? 1-2 sentences." },
          { label: "Performance & Direction", description: "How are the actors? Is the direction effective? Specific scenes that stood out." },
          { label: "Technical Aspects", description: "Cinematography, music, editing, screenplay. Which enhanced the experience?" },
          { label: "Verdict", description: "Balanced recommendation. Who will enjoy this film? What is its lasting impact?" },
        ]}
      />

      <TableCard
        caption="Review Criteria Checklist"
        headers={["Aspect", "What to Evaluate", "Key Questions"]}
        rows={[
          { cells: ["Plot/Story", "Is it engaging? Original?", "Does it hold your attention? Is the pacing right?"] },
          { cells: ["Characters", "Are they believable? Memorable?", "Do you care about them? Are their actions consistent?"] },
          { cells: ["Writing/Dialogue", "Is it vivid? Natural?", "Do the words paint a picture? Does dialogue sound real?"] },
          { cells: ["Themes", "What ideas does it explore?", "Are they handled thoughtfully? Any new perspectives?"] },
          { cells: ["Impact", "How did it make you feel?", "Will you remember it? Did it change how you think?"] },
        ]}
      />

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "A review is not a summary — balance summary with evaluation" },
          { label: "Be specific: \"The dialogue in Chapter 3 felt forced\" not \"Some parts were bad\"" },
          { label: "A balanced review acknowledges both strengths and weaknesses" },
          { label: "Use evaluative language: compelling, underwhelming, masterful, predictable" },
          { label: "Avoid spoilers — especially the ending" },
          { label: "A 4-star or 5-star review should justify why it deserves that rating" },
          { label: "Keep reviews under 200 words for the exam" },
          { label: "Mention the target audience: \"A must-read for fans of mystery fiction\"" },
        ]}
      />

      <Highlight color="orange">
        Never write a review that is entirely positive or entirely negative. Examiners expect balanced, nuanced criticism — not a fan letter or a rant.
      </Highlight>

      <h2>Samples</h2>

      <Example title="Book Review — The Old Man and the Sea">
        <p><strong>The Old Man and the Sea</strong> by Ernest Hemingway is a slim, powerful novella about Santiago, an aging Cuban fisherman who hooks the biggest marlin of his life — and loses it to sharks on the journey home.</p>
        <p>Hemingway&apos;s prose is deceptively simple. Every sentence carries weight. Santiago&apos;s battle with the marlin is both physical and philosophical — a meditation on perseverance, dignity, and the meaning of defeat.</p>
        <p>The characters are few but memorable. Santiago is one of literature&apos;s great underdogs — beaten but never broken. His quiet determination is deeply moving.</p>
        <p><strong>Rating:</strong> 4.5/5. A masterpiece of minimalist storytelling. Essential reading for anyone who believes that less is more.</p>
      </Example>

      <Example title="Film Review — Drishyam">
        <p><strong>Drishyam (2013)</strong>, directed by Jeethu Joseph, is a masterclass in suspense. Mohanlal delivers one of his finest performances as Georgekutty, a man who will do anything to protect his family.</p>
        <p>The screenplay is razor-sharp. Every scene has a purpose, every conversation hides a clue. Joseph builds tension slowly, letting the audience&apos;s imagination do the work. The climax is both shocking and deeply satisfying.</p>
        <p>The technical aspects — cinematography by Sujith Vaassudev, music by Anil Johnson — complement the narrative perfectly without overshadowing it.</p>
        <p><strong>Verdict:</strong> A must-watch for fans of intelligent thrillers. Drishyam proves that great cinema needs no special effects — just a brilliant story told with precision.</p>
      </Example>

      <KeyPoint>
        A good review is balanced, specific, and well-reasoned. It summarises enough to provide context, evaluates with evidence, and recommends with clarity. Practice writing reviews of books and films you know well — it sharpens critical thinking.
      </KeyPoint>
    </>
  );
}
