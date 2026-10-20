import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { TopicSwitch } from "@/components/content/TopicSwitch";
import NewsReportPane from "./panes/news-report";
import EventSeminarPane from "./panes/event-seminar-report";
import LiveTvPane from "./panes/live-tv-reporting";

export default function ReportsContent() {
  return (
    <>
      <Callout type="note">
        One word, three tasks. A <strong>news report</strong> is filed after the
        event for readers who were not there; an{" "}
        <strong>event or seminar report</strong> records what happened at a
        programme; a <strong>live TV report</strong> is spoken at the scene while
        it is still happening. The cue in the question — a newspaper, a school
        magazine, a television channel — decides which one to write.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="Three reports, three shapes"
        headers={["Report", "What it does", "The shape of the answer"]}
        rows={[
          {
            cells: [
              "News Report",
              "Reports an event to readers who were not there — written after it is over, most important fact first",
              "Headline & byline → Lead paragraph (the 5 Ws) → Body: details, evidence and development → Outcome and follow-up",
            ],
          },
          {
            cells: [
              "Event / Seminar Report",
              "Records a programme — what was held, when and where, who took part, what was said, and how it ended",
              "Event details → Programme and activities → Key ideas and highlights → Outcome and significance → Closing session and acknowledgements",
            ],
          },
          {
            cells: [
              "Live TV Reporting",
              "Reports from the scene, as it happens — the reporter speaks in the present tense, then hands over to an eye-witness",
              "Introducing the scene → Describing live developments → Transitions between details → Reporting reactions → Ending the report",
            ],
          },
        ]}
      />

      <TopicSwitch
        label="Report formats"
        panes={[
          {
            id: "news-report",
            label: "News Report",
            content: <NewsReportPane />,
          },
          {
            id: "event-seminar-report",
            label: "Event / Seminar Report",
            content: <EventSeminarPane />,
          },
          {
            id: "live-tv-reporting",
            label: "Live TV Reporting",
            content: <LiveTvPane />,
          },
        ]}
      />

      <KeyPoint>
        Only the live report is spoken, in the present tense, with the reporter
        at the scene. The other two are written in the past tense, and only the
        news report runs its facts in decreasing order of importance.
      </KeyPoint>
    </>
  );
}
