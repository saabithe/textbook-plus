import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function LetterWritingContent() {
  return (
    <>
      <Callout type="note">
        Letter writing appears regularly in the Kerala Board English exam (typically 5 marks). Know both formal and informal formats — the board expects precise structure and appropriate tone.
      </Callout>

      <h2>Format — Formal Letter</h2>

      <ProcessCard
        title="Structure of a Formal Letter"
        steps={[
          { label: "Sender's Address", description: "Top-left corner. House number, street, city, pincode. No name." },
          { label: "Date", description: "Below address. Format: 15 August 2026 (no commas)." },
          { label: "Recipient's Designation & Address", description: "The designation first, then the organisation and address." },
          { label: "Subject Line", description: "Short, clear. Prefixed with \"Subject:\" — e.g. Subject: Complaint Regarding Water Supply." },
          { label: "Salutation", description: "Sir/Madam (formal). Always followed by a comma." },
          { label: "Body", description: "3 paragraphs — purpose, details, expected action. Polite, concise, factual." },
          { label: "Closing", description: "Yours faithfully (if Sir/Madam), Yours sincerely (if named). Comma after." },
          { label: "Sender's Name & Signature", description: "Full name below closing. Signature above name." },
        ]}
      />

      <TableCard
        caption="Formal vs Informal Letters"
        headers={["Aspect", "Formal Letter", "Informal Letter"]}
        rows={[
          { cells: ["To", "Official / authority", "Friend / family"] },
          { cells: ["Tone", "Polite, factual, impersonal", "Warm, conversational, personal"] },
          { cells: ["Subject line", "Required", "Not needed"] },
          { cells: ["Salutation", "Sir / Madam", "Dear Ramya, / Hi Aman,"] },
          { cells: ["Closing", "Yours faithfully", "With love, / Take care,"] },
          { cells: ["Address", "Full sender address on top", "Optional — city/date enough"] },
        ]}
      />

      <h2>Format — Informal Letter</h2>

      <ProcessCard
        title="Structure of an Informal Letter"
        steps={[
          { label: "Sender's Address (optional)", description: "City and date are sufficient. Full address not required." },
          { label: "Salutation", description: "Dear [Name], — use a comma. First name is fine." },
          { label: "Body", description: "3-4 short paragraphs. Conversational tone. Use contractions." },
          { label: "Closing", description: "With love, / Take care, / Yours affectionately, — comma after." },
          { label: "Signature", description: "First name only. No designation." },
        ]}
      />

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Keep formal letters under 150 words" },
          { label: "Use passive voice in formal letters: \"You are requested to...\"" },
          { label: "Avoid contractions in formal letters (do not, not don't)" },
          { label: "In informal letters, contractions are natural and expected" },
          { label: "Subject line is mandatory for formal letters — skip for informal" },
          { label: "Always mention the specific action you expect in formal letters" },
        ]}
      />

      <Highlight color="orange">
        Never use first name in the salutation of a formal letter. Always use Sir/Madam.
      </Highlight>

      <h2>Samples</h2>

      <Example title="Formal Letter — Complaint">
        <p>12, Green Avenue<br />Kochi 682011<br />15 August 2026</p>
        <p>The Electricity Board Officer<br />Ernakulam Division<br />Kochi 682018</p>
        <p><strong>Subject:</strong> Complaint Regarding Frequent Power Cuts</p>
        <p>Sir/Madam,</p>
        <p>I wish to bring to your notice the frequent power cuts in our area for the past two weeks. The supply is interrupted almost daily between 6 pm and 10 pm, causing severe inconvenience to residents and students preparing for examinations.</p>
        <p>I request you to look into this matter and take necessary corrective action at the earliest.</p>
        <p>Yours faithfully,<br />Rajesh Menon</p>
      </Example>

      <Example title="Informal Letter — To a Friend">
        <p>Kozhikode<br />12 September 2026</p>
        <p>Dear Meera,</p>
        <p>I hope you are doing well. I am writing to tell you about the science exhibition held at our school last week. It was a wonderful event with over 30 models on display.</p>
        <p>My group presented a working model of a rainwater harvesting system. We won the second prize! I wish you could have been there.</p>
        <p>Do write back soon. I miss our long walks after school.</p>
        <p>With love,<br />Anjali</p>
      </Example>

      <KeyPoint>
        The key difference between formal and informal letters is tone and structure — formal letters are structured and impersonal; informal letters are conversational and personal. Master both formats and you will handle any letter-writing question confidently.
      </KeyPoint>
    </>
  );
}
