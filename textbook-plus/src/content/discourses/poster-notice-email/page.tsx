import { Callout } from "@/components/content/Callout";
import { Example } from "@/components/content/Example";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function PosterNoticeEmailContent() {
  return (
    <>
      <Callout type="note">
        Posters, notices, and emails are three compact writing formats tested in the Kerala Board exam. Each has strict layout rules and word limits. Getting the format right is half the marks — content comes after.
      </Callout>

      <h2>Poster</h2>

      <ProcessCard
        title="Poster Format"
        steps={[
          { label: "Headline", description: "Bold, large text at the top. The main message. E.g. \"BLOOD DONATION CAMP\"" },
          { label: "Details", description: "Date, time, venue, organiser. Use bullet points or short lines." },
          { label: "Body", description: "Why should people attend? 2-3 persuasive lines. Use slogans or catchy phrases." },
          { label: "Visual Appeal", description: "Borders, capital letters, underlining. Make it eye-catching." },
          { label: "Contact Info", description: "Phone number, email, or website for queries." },
        ]}
      />

      <Example title="Poster — Book Fair">
        <div className="border-2 border-foreground/20 rounded-xl p-5 text-center">
          <p className="text-lg font-bold uppercase tracking-wide">BOOK FAIR 2026</p>
          <p className="mt-2 text-sm">Organised by: Kerala Library Association</p>
          <p className="text-sm">Date: 15-17 September 2026</p>
          <p className="text-sm">Venue: Exhibition Centre, Marine Drive, Kochi</p>
          <p className="mt-3 text-sm font-semibold">Over 500 stalls | 10,000+ titles | Special discounts</p>
          <p className="mt-2 text-sm">Entry Free | Open 10 AM – 8 PM</p>
          <p className="mt-3 text-xs italic">Books are the quietest and most constant of friends.</p>
          <p className="mt-2 text-xs">For details: 9876543210 | keralalibrary@gmail.com</p>
        </div>
      </Example>

      <h2>Notice</h2>

      <ProcessCard
        title="Notice Format"
        steps={[
          { label: "Issuing Organisation", description: "Name at the top centre. E.g. \"GOVERNMENT MODEL HIGHER SECONDARY SCHOOL\"" },
          { label: "Notice (heading)", description: "\"NOTICE\" in capital letters, centred, below the organisation name." },
          { label: "Date", description: "Top-right corner. Format: 15 August 2026." },
          { label: "Subject Line", description: "Clear, concise. What is the notice about?" },
          { label: "Body", description: "Who, what, when, where. Formal tone. 50-80 words." },
          { label: "Signature + Designation", description: "Name and designation of the issuing authority at the bottom-right." },
        ]}
      />

      <Example title="Notice — Cultural Fest">
        <div className="border border-foreground/20 rounded-xl p-5">
          <p className="text-center font-bold">GOVERNMENT MODEL HIGHER SECONDARY SCHOOL</p>
          <p className="text-center font-bold mt-1">NOTICE</p>
          <p className="text-right text-sm mt-2">12 September 2026</p>
          <p className="font-semibold mt-3">Annual Cultural Fest — &quot;Kalotsavam 2026&quot;</p>
          <p className="mt-2 text-sm">All students are informed that the Annual Cultural Fest will be held on 25 September 2026 in the school auditorium from 9:00 AM to 4:00 PM. Events include dance, music, drama, and art competitions. Interested students may register with their class teachers before 20 September 2026.</p>
          <p className="mt-3 text-right text-sm">Suresh K.<br />Cultural Secretary</p>
        </div>
      </Example>

      <h2>Email</h2>

      <ProcessCard
        title="Email Format"
        steps={[
          { label: "To", description: "Recipient email address. E.g. principal@school.ac.in" },
          { label: "Subject", description: "Clear, specific. E.g. Request for Leave of Absence" },
          { label: "Salutation", description: "Dear Sir/Madam, (formal) or Hi [Name], (informal)" },
          { label: "Body", description: "3 short paragraphs — purpose, details, requested action. Clear and concise." },
          { label: "Closing", description: "Thanking you, / With regards, — followed by name and class." },
        ]}
      />

      <Example title="Email — Leave Application">
        <div className="border border-foreground/20 rounded-xl p-5 text-sm">
          <p><strong>To:</strong> principal@gmhs.ac.in</p>
          <p><strong>Subject:</strong> Leave of Absence — 18 September 2026</p>
          <p className="mt-3">Dear Sir/Madam,</p>
          <p className="mt-2">I am writing to request a day of leave on 18 September 2026 due to a medical appointment. I have informed my class teacher and will complete any missed assignments.</p>
          <p className="mt-2">Kindly grant me leave for the day.</p>
          <p className="mt-3">Thanking you,<br />Priya Menon<br />Class XII, Section A<br />Roll No: 15</p>
        </div>
      </Example>

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Poster: visual appeal matters — use borders, capitalisation, slogans" },
          { label: "Notice: always include date, subject, and signature with designation" },
          { label: "Notice: keep it under 80 words — factual and formal" },
          { label: "Email: subject line must be specific, not vague (\"Leave Application\" not \"Important\")" },
          { label: "Email: formal emails use Dear Sir/Madam; informal use first name" },
          { label: "All three: word limits are strict — do not exceed them" },
          { label: "All three: format marks are separate from content marks — get the layout right first" },
        ]}
      />

      <Highlight color="orange">
        A notice without a date and signature loses marks. Always include both — even if the question does not explicitly ask for them.
      </Highlight>

      <KeyPoint>
        Posters persuade, notices inform, and emails communicate. Each has a fixed format that examiners check first. Master the layout, then fill in the content. A well-formatted answer with average content scores higher than brilliant content in the wrong format.
      </KeyPoint>
    </>
  );
}
