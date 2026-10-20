import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { TopicSwitch } from "@/components/content/TopicSwitch";
import PrecisPane from "./panes/precis-writing";
import ReviewPane from "./panes/review";
import BlurbPane from "./panes/book-play-blurb";

export default function PrecisReviewBlurbContent() {
  return (
    <>
      <Callout type="note">
        Three tasks that work on somebody else&rsquo;s writing. A{" "}
        <strong>precis</strong> shortens a passage without losing an idea, a{" "}
        <strong>review</strong> judges a book or a film, and a <strong>blurb</strong>{" "}
        sells one from the back cover. The first must stay inside the writer&rsquo;s
        meaning; the other two are allowed an opinion.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="Compress, judge, sell"
        headers={["Format", "What it does", "The shape of the answer"]}
        rows={[
          {
            cells: [
              "Precis",
              "Compresses a passage to about one-third of its length, in your own words, keeping every important idea",
              "Read and understand → identify the main points → draft the precis → give a suitable title → check and refine",
            ],
          },
          {
            cells: [
              "Review",
              "Judges a book or a film — what it is about, what works, what does not, and whether to read or watch it",
              "Title + author (or director) → introduction → plot summary without spoilers → evaluation → rating and recommendation",
            ],
          },
          {
            cells: [
              "Book / Play Blurb",
              "Sells a book or a play from the back cover — the taste of the story that makes a reader buy it",
              "Hook and main idea → characters, plot and conflict → what makes it interesting → recommendation → publisher, price and other details",
            ],
          },
        ]}
      />

      <TopicSwitch
        label="Text-based formats"
        panes={[
          { id: "precis-writing", label: "Precis", content: <PrecisPane /> },
          { id: "review", label: "Review", content: <ReviewPane /> },
          {
            id: "book-play-blurb",
            label: "Book / Play Blurb",
            content: <BlurbPane />,
          },
        ]}
      />

      <KeyPoint>
        A precis may not add an idea of its own and may not borrow the
        author&rsquo;s sentences. A review and a blurb may judge and persuade as
        much as they like — but neither of them spoils the ending.
      </KeyPoint>
    </>
  );
}
