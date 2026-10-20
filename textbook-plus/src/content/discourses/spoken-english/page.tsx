import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { TableCard } from "@/components/content/data/TableCard";
import { TopicSwitch } from "@/components/content/TopicSwitch";
import SpeechPane from "./panes/speech";
import InterviewPane from "./panes/interview";
import DebatePane from "./panes/debate";
import ConversationPane from "./panes/conversation";

export default function SpokenEnglishContent() {
  return (
    <>
      <Callout type="note">
        Four tasks in which the words are meant to be <em>heard</em>. A{" "}
        <strong>speech</strong> is one voice with a point to make; an{" "}
        <strong>interview</strong> is a prepared question-and-answer script; a{" "}
        <strong>debate</strong> argues one side of a motion; a{" "}
        <strong>conversation</strong> is what two people say when nothing has
        been prepared. What changes from one to the next is how many speakers
        hold the floor.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="Four spoken forms"
        headers={["Form", "Who speaks", "The shape of the answer"]}
        rows={[
          {
            cells: [
              "Speech",
              "One speaker, addressing an audience",
              "Salutation → hook → context → body (three points) → call to action → closing",
            ],
          },
          {
            cells: [
              "Interview",
              "Two speakers — a script of questions with the answers written out",
              "Interview with [name] → mind map of the guest's background → questions with the interviewee's answers → thanks and close",
            ],
          },
          {
            cells: [
              "Debate",
              "Two sides, one motion",
              "[Topic / motion] → A. Points for the motion → B. Points against the motion → C. Conclusion (if asked)",
            ],
          },
          {
            cells: [
              "Conversation",
              "Two or three people, nothing prepared",
              "Opening → topic → questions and answers → opinions and reasons → suggestions and reactions → decision or understanding → closing",
            ],
          },
        ]}
      />

      <TopicSwitch
        label="Spoken formats"
        panes={[
          { id: "speech", label: "Speech", content: <SpeechPane /> },
          { id: "interview", label: "Interview", content: <InterviewPane /> },
          { id: "debate", label: "Debate", content: <DebatePane /> },
          {
            id: "conversation",
            label: "Conversation",
            content: <ConversationPane />,
          },
        ]}
      />

      <KeyPoint>
        The speech and the interview are written in advance; the debate keeps
        both sides in view; the conversation is written the way people speak —
        short lines, phrases ready for every stage, and no paragraph long enough
        to sound like an essay.
      </KeyPoint>
    </>
  );
}
