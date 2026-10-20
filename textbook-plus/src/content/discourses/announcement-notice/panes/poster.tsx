import { KeyPoint } from "@/components/content/KeyPoint";
import { Expandable } from "@/components/content/Expandable";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { Checklist } from "@/components/content/data/Checklist";

export default function PosterPane() {
  return (
    <>
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

      <Expandable title="Poster — Book Fair" variant="example">
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
      </Expandable>

      <h2>Tips</h2>

      <Checklist
        items={[
          { label: "Poster: visual appeal matters — use borders, capitalisation, slogans" },
          { label: "Both: word limits are strict — do not exceed them" },
          { label: "Both: format marks are separate from content marks — get the layout right first" },
        ]}
      />

      <KeyPoint>
        Posters persuade and emails communicate. Each has a fixed format that examiners check first. Master the layout, then fill in the content. A well-formatted answer with average content scores higher than brilliant content in the wrong format.
      </KeyPoint>
    </>
  );
}
