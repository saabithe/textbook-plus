"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Comparison } from "@/components/content/Comparison";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { Badge } from "@/components/ui/badge";
import { GrammarTabs, type GrammarTab } from "@/components/grammar/GrammarTabs";
import { GrammarQuiz, type GrammarQuestion } from "@/components/grammar/GrammarQuiz";

const QUESTIONS: GrammarQuestion[] = [
  {
    id: "rs1", type: "mcq",
    question: "Direct: He said, \u201cI am tired.\u201d \u2014 Reported: He said that he ______ tired.",
    options: ["is", "was", "has been", "will be"],
    answer: 1,
    explanation: "\u201cam / is\u201d changes to \u201cwas\u201d (present \u2192 past) in reported speech.",
  },
  {
    id: "rs2", type: "mcq",
    question: "Direct: She said, \u201cI saw him yesterday.\u201d \u2014 Reported: She said that she ______ him the previous day.",
    options: ["saw", "had seen", "has seen", "was seeing"],
    answer: 1,
    explanation: "Simple past (V2) becomes past perfect (had + V3).",
  },
  {
    id: "rs3", type: "fill-blank",
    question: "Direct: He said, \u201cI will help you.\u201d \u2014 Reported: He said that he ______ help me.",
    answer: "would",
    explanation: "\u201cwill\u201d changes to \u201cwould\u201d (future \u2192 conditional).",
  },
  {
    id: "rs4", type: "mcq",
    question: "Direct: \u201cWhere do you live?\u201d \u2014 Reported: He asked me where I ______.",
    options: ["do live", "live", "lived", "did live"],
    answer: 2,
    explanation: "In a reported wh-question, the verb back-shifts and the word order becomes statement order.",
  },
  {
    id: "rs5", type: "mcq",
    question: "Direct: \u201cAre you coming?\u201d \u2014 Reported: She asked me ______ I was coming.",
    options: ["that", "if", "to", "which"],
    answer: 1,
    explanation: "A yes/no question is reported with \u201cif\u201d or \u201cwhether\u201d.",
  },
  {
    id: "rs6", type: "mcq",
    question: "Direct: \u201cWill you help me?\u201d \u2014 Reported: She asked if I ______ help her.",
    options: ["will", "would", "would have", "had"],
    answer: 1,
    explanation: "\u201cwill\u201d back-shifts to \u201cwould\u201d even inside a reported question.",
  },
  {
    id: "rs7", type: "mcq",
    question: "Direct: \u201cClose the door.\u201d \u2014 Reported: She ______ me to close the door.",
    options: ["said", "told", "spoke", "replied"],
    answer: 1,
    explanation: "Commands use \u201ctold / ordered / asked + object + to + verb\u201d. \u201cSaid\u201d cannot take an object here.",
  },
  {
    id: "rs8", type: "mcq",
    question: "Direct: She said, \u201cI will meet you tomorrow.\u201d \u2014 Reported: She said that she would meet me ______.",
    options: ["tomorrow", "the next day", "the previous day", "that day"],
    answer: 1,
    explanation: "The time word must change too: \u201ctomorrow\u201d \u2192 \u201cthe next day\u201d.",
  },
  {
    id: "rs9", type: "mcq",
    question: "Direct: Guard: \u201cDon\u2019t touch the electric fence!\u201d \u2014 Reported: The guard ______ the children not to touch the electric fence.",
    options: ["said", "warned", "replied", "spoke"],
    answer: 1,
    explanation: "A prohibition is reported with \u201cwarned + object + not to + verb\u201d.",
  },
  {
    id: "rs10", type: "mcq",
    question: "Direct: \u201cI am busy.\u201d \u2014 Reported: He ______ me that he was busy.",
    options: ["said", "told", "spoke", "replied"],
    answer: 1,
    explanation: "\u201cTold\u201d takes a direct object (me); \u201csaid\u201d cannot be followed by an object here.",
  },
  {
    id: "rs11", type: "mcq",
    question: "Direct: \u201cI will come.\u201d \u2014 Reported: She ______ to him that she would come.",
    options: ["said", "told", "asked", "spoke"],
    answer: 0,
    explanation: "With \u201cto + person\u201d, use \u201csaid\u201d \u2014 \u201ctold\u201d never takes \u201cto\u201d.",
  },
  {
    id: "rs12", type: "mcq",
    question: "Direct: Doctor: \u201cDon\u2019t smoke.\u201d \u2014 Reported: The doctor ______ him not to smoke.",
    options: ["said", "advised", "spoke", "replied"],
    answer: 1,
    explanation: "Advice is reported with \u201cadvised + object + (not) to + verb\u201d.",
  },
  {
    id: "rs13", type: "mcq",
    question: "Direct: Witness: \u201cI saw the theft.\u201d \u2014 Reported: The witness ______ the theft to the police.",
    options: ["reported", "said", "told", "asked"],
    answer: 0,
    explanation: "\u201cReport\u201d is an advanced reporting verb used for official statements.",
  },
  {
    id: "rs14", type: "mcq",
    question: "Direct: \u201cWhat a beautiful flower!\u201d \u2014 Reported: He ______ that it was a very beautiful flower.",
    options: ["said", "exclaimed", "told", "asked"],
    answer: 1,
    explanation: "Exclamations are reported with \u201cexclaimed\u201d (or \u201ccried out\u201d) + that + statement \u2014 never bare \u201csaid\u201d.",
  },
  {
    id: "rs15", type: "mcq",
    question: "Direct: \u201cHurrah! We have won the match.\u201d \u2014 Reported: He exclaimed ______ that they had won the match.",
    options: ["with joy", "with sorrow", "with regret", "with surprise"],
    answer: 0,
    explanation: "\u201cHurrah!\u201d signals joy, so it is reported as \u201cexclaimed with joy\u201d.",
  },
  {
    id: "rs16", type: "mcq",
    question: "Direct: \u201cAlas! I have lost my purse.\u201d \u2014 Reported: She exclaimed with ______ that she had lost her purse.",
    options: ["joy", "sorrow", "surprise", "admiration"],
    answer: 1,
    explanation: "\u201cAlas!\u201d signals sorrow (or regret), so it becomes \u201cexclaimed with sorrow\u201d.",
  },
  {
    id: "rs17", type: "mcq",
    question: "Direct: \u201cMay you live long!\u201d \u2014 Reported: He ______ that I might live long.",
    options: ["said", "told", "wished", "asked"],
    answer: 2,
    explanation: "Sentences expressing a wish are reported with \u201cwished\u201d + that-clause.",
  },
  {
    id: "rs18", type: "mcq",
    question: "Direct: \u201cI will finish it tonight.\u201d \u2014 Reported: He said that he would finish it ______.",
    options: ["tonight", "that night", "this night", "the last night"],
    answer: 1,
    explanation: "\u201ctonight\u201d changes to \u201cthat night\u201d in reported speech.",
  },
  {
    id: "rs19", type: "mcq",
    question: "He ______ me of stealing the money.",
    options: ["accused", "blamed", "charged", "told"],
    answer: 0,
    explanation: "The pattern is \u201caccused someone of + -ing\u201d. (Blamed takes \u201cfor\u201d; charged takes \u201cwith\u201d.)",
  },
  {
    id: "rs20", type: "mcq",
    question: "She ______ for being late to the meeting.",
    options: ["apologized", "excused", "regretted", "sorry"],
    answer: 0,
    explanation: "The pattern is \u201capologized for + -ing\u201d (or \u201capologized to someone\u201d).",
  },
  {
    id: "rs21", type: "mcq",
    question: "They ______ him on winning the prize.",
    options: ["congratulated", "celebrated", "thanked", "praised"],
    answer: 0,
    explanation: "The pattern is \u201ccongratulated someone on + noun / -ing\u201d.",
  },
  {
    id: "rs22", type: "mcq",
    question: "Direct: \u201cThe Earth is round.\u201d \u2014 Reported: He said that the Earth ______ round.",
    options: ["was", "is", "had been", "would be"],
    answer: 1,
    explanation: "A universal truth keeps the present tense \u2014 no back-shift.",
  },
  {
    id: "rs23", type: "mcq",
    question: "The heavy rain prevented us ______ playing the match.",
    options: ["to", "from", "of", "for"],
    answer: 1,
    explanation: "The pattern is \u201cprevented someone from + -ing\u201d.",
  },
  {
    id: "rs24", type: "mcq",
    question: "He warned me ______ smoking.",
    options: ["to", "against", "from", "of"],
    answer: 1,
    explanation: "The pattern is \u201cwarned someone against + -ing\u201d (or \u201cwarned someone not to do something\u201d).",
  },
  {
    id: "rs25", type: "mcq",
    question: "Direct: \u201cI am reading a book,\u201d he said. \u2014 Reported: He said that he ______ a book.",
    options: ["is reading", "was reading", "has read", "would read"],
    answer: 1,
    explanation: "Present continuous back-shifts to past continuous (am reading \u2192 was reading).",
  },
  {
    id: "rs26", type: "mcq",
    question: "Direct: \u201cWe have finished the work,\u201d they said. \u2014 Reported: They said that they ______ the work.",
    options: ["have finished", "had finished", "finish", "were finishing"],
    answer: 1,
    explanation: "Present perfect back-shifts to past perfect (have finished \u2192 had finished).",
  },
  {
    id: "rs27", type: "mcq",
    question: "Direct: \u201cCan you swim?\u201d he asked. \u2014 Reported: He asked ______ I could swim.",
    options: ["that", "if", "to", "which"],
    answer: 1,
    explanation: "A yes/no question becomes a reported clause with \u201cif\u201d or \u201cwhether\u201d; \u201ccan\u201d back-shifts to \u201ccould\u201d.",
  },
  {
    id: "rs28", type: "mcq",
    question: "Direct: \u201cPlease help me,\u201d she said. \u2014 Reported: She ______ me to help her.",
    options: ["said", "requested", "told", "replied"],
    answer: 1,
    explanation: "A polite request is reported with \u201crequested / asked + object + to + verb\u201d.",
  },
  {
    id: "rs29", type: "mcq",
    question: "Direct: \u201cHow clever you are!\u201d he said. \u2014 Reported: He exclaimed that I ______ very clever.",
    options: ["am", "was", "has been", "will be"],
    answer: 1,
    explanation: "Exclamations are turned into a that-clause, and the verb back-shifts (are \u2192 was).",
  },
  {
    id: "rs30", type: "fill-blank",
    question: "Direct: \u201cI will call you tomorrow,\u201d he said. \u2014 Reported: He said that he would call me ______.",
    answer: "the next day",
    explanation: "\u201ctomorrow\u201d changes to \u201cthe next day\u201d (or \u201cthe following day\u201d).",
  },
  {
    id: "rs31", type: "fill-blank",
    question: "Direct: \u201cI am busy now,\u201d she said. \u2014 Reported: She said that she was busy ______.",
    answer: "then",
    explanation: "\u201cnow\u201d changes to \u201cthen\u201d (or \u201cat that time\u201d).",
  },
  {
    id: "rs32", type: "mcq",
    question: "Direct: \u201cDid you finish the work?\u201d \u2014 Reported: He asked ______ I had finished the work.",
    options: ["that", "if", "to", "what"],
    answer: 1,
    explanation: "A yes/no question is reported with \u201cif\u201d or \u201cwhether\u201d.",
  },
];

const OVERVIEW = [
  { cells: ["Statement", "said / told / replied", "that", "reporting verb + (that) + subject + verb", "He said that he was tired."] },
  { cells: ["Question", "asked / enquired / wondered", "if / whether, or the wh-word", "asked + (object) + if / whether / wh-word + subject + verb", "She asked if I was ready."] },
  { cells: ["Command, request, advice or warning", "ordered / requested / advised / warned", "to / not to", "reporting verb + object + to / not to + V1", "He ordered me to stop."] },
  { cells: ["Exclamation", "exclaimed / cried out / wished", "that", "exclaimed + (with + emotion) + that + statement", "He exclaimed that it was a beautiful flower."] },
];

const SHORTCUTS = [
  { cells: ["\u201cAre you ready?\u201d", "asked if I was ready"] },
  { cells: ["\u201cWhere do you live?\u201d", "asked where I lived"] },
  { cells: ["\u201cOpen the door.\u201d", "told me to open the door"] },
  { cells: ["\u201cDon\u2019t run.\u201d", "told me not to run"] },
  { cells: ["\u201cPlease help me.\u201d", "asked me to help him / her"] },
  { cells: ["\u201cWhat a beautiful flower!\u201d", "exclaimed that it was a very beautiful flower"] },
];

const PRONOUNS = [
  { cells: ["I", "he / she"] },
  { cells: ["me", "him / her"] },
  { cells: ["my", "his / her"] },
  { cells: ["you", "he / she (the person addressed)"] },
  { cells: ["your", "his / her"] },
  { cells: ["we", "they"] },
  { cells: ["our", "their"] },
];

const TIME_PLACE = [
  { cells: ["today", "that day"] },
  { cells: ["tonight", "that night"] },
  { cells: ["tomorrow", "the next day"] },
  { cells: ["yesterday", "the previous day"] },
  { cells: ["now", "then"] },
  { cells: ["this", "that"] },
  { cells: ["these", "those"] },
  { cells: ["here", "there"] },
  { cells: ["ago", "before"] },
];

const TENSE_BACKSHIFT = [
  { cells: ["Present simple (V1)", "Simple past (V2)", "\u201cI work here.\u201d \u2192 He said he worked there."] },
  { cells: ["Present continuous (am / is / are + V-ing)", "Past continuous (was / were + V-ing)", "\u201cI am working.\u201d \u2192 He said he was working."] },
  { cells: ["Present perfect (has / have + V3)", "Past perfect (had + V3)", "\u201cI have finished.\u201d \u2192 He said he had finished."] },
  { cells: ["Present perfect continuous (has / have been + V-ing)", "Past perfect continuous (had been + V-ing)", "\u201cI have been waiting.\u201d \u2192 He said he had been waiting."] },
  { cells: ["Past simple (V2)", "Past perfect (had + V3)", "\u201cI saw her.\u201d \u2192 He said he had seen her."] },
  { cells: ["Past continuous (was / were + V-ing)", "Past perfect continuous (had been + V-ing)", "\u201cI was reading.\u201d \u2192 He said he had been reading."] },
  { cells: ["Past perfect (had + V3)", "Past perfect \u2014 no further shift", "\u201cI had finished.\u201d \u2192 He said he had finished."] },
  { cells: ["Past perfect continuous (had been + V-ing)", "Past perfect continuous \u2014 no further shift", "\u201cI had been waiting.\u201d \u2192 He said he had been waiting."] },
];

const MODALS = [
  { cells: ["will", "would", "\u201cI will come.\u201d \u2192 He said he would come."] },
  { cells: ["shall", "would / should, depending on meaning", "\u201cShall I open it?\u201d \u2192 He asked if he should open it."] },
  { cells: ["can", "could", "\u201cI can swim.\u201d \u2192 He said he could swim."] },
  { cells: ["may", "might", "\u201cIt may rain.\u201d \u2192 He said it might rain."] },
  { cells: ["must", "had to, for obligation where appropriate", "\u201cI must go.\u201d \u2192 He said he had to go."] },
  { cells: ["could / would / should / might / ought to", "usually no change", "\u201cYou should rest.\u201d \u2192 He said I should rest."] },
];

const BACKSHIFT_EXCEPTIONS = [
  { cells: ["Universal truths generally keep the present tense.", "\u201cThe sun rises in the east.\u201d \u2192 He said that the sun rises in the east."] },
  { cells: ["Scientific facts keep the present tense when still valid.", "\u201cWater boils at 100\u00b0C.\u201d \u2192 She said that water boils at 100\u00b0C."] },
  { cells: ["Habits or situations that remain true may keep the original tense.", "\u201cI go to the gym every day.\u201d \u2192 He said that he goes to the gym every day."] },
  { cells: ["A present reporting verb usually does not trigger the back-shift.", "\u201cI am busy.\u201d \u2192 He says that he is busy."] },
  { cells: ["A past reporting verb does not force a back-shift in every context.", "\u201cI am on my way.\u201d \u2192 He said that he is on his way (still true)."] },
  { cells: ["Preserve the original tense when the context and meaning justify it.", "\u201cI want to see you.\u201d \u2192 She said that she wants to see me."] },
  { cells: ["Distinguish a completed past event from a continuing situation.", "Completed: \u201cI lived in Delhi.\u201d \u2192 He said he had lived in Delhi. Continuing: \u201cI live in Delhi.\u201d \u2192 He said he lives in Delhi."] },
];

const EXCLAMATIONS = [
  { cells: ["Joy", "\u201cHurrah! We have won the match.\u201d", "He exclaimed with joy that they had won the match."] },
  { cells: ["Sorrow", "\u201cAlas! I have lost my purse.\u201d", "She exclaimed with sorrow that she had lost her purse."] },
  { cells: ["Surprise", "\u201cWhat a strange sight!\u201d", "He exclaimed with surprise that it was a very strange sight."] },
  { cells: ["Admiration", "\u201cHow beautiful the flower is!\u201d", "She exclaimed with admiration that the flower was very beautiful."] },
  { cells: ["Regret", "\u201cAlas! I could have done better.\u201d", "He exclaimed with regret that he could have done better."] },
  { cells: ["Wish", "\u201cMay you live long!\u201d", "He wished that I might live long."] },
  { cells: ["Wish", "\u201cWould that I were a bird!\u201d", "He wished that he were a bird."] },
];

const EXCLAMATION_CHECKLIST = [
  { label: "Identify the emotion \u2014 joy, sorrow, surprise, admiration or regret." },
  { label: "Use an appropriate reporting verb or expression (exclaimed, cried out, wished)." },
  { label: "Convert \u201cWhat a\u2026!\u201d / \u201cHow\u2026!\u201d into a suitable statement." },
  { label: "Report interjections such as Hurrah! and Alas! by their meaning." },
  { label: "Report wishes using wished / expressed a wish, as appropriate." },
  { label: "Remove the exclamation mark when converting to an ordinary indirect statement." },
  { label: "Preserve the emotional meaning of the original sentence." },
];

const VERB_PATTERNS = [
  { cells: ["explained + clause / explained something to someone", "He explained that he was late. / He explained the delay to the class."] },
  { cells: ["suggested + -ing or that-clause", "He suggested going for a walk. / He suggested that we should go for a walk."] },
  { cells: ["admitted / denied + -ing or that-clause", "He admitted taking the money. / He denied that he had taken the money."] },
  { cells: ["apologized for + -ing / apologized to someone", "She apologized for being late. / She apologized to the teacher for being late."] },
  { cells: ["accused someone of + -ing", "They accused him of cheating."] },
  { cells: ["congratulated someone on + noun / -ing", "We congratulated her on her success. / We congratulated her on winning the prize."] },
  { cells: ["thanked someone for + noun / -ing", "He thanked me for my help. / He thanked me for helping him."] },
  { cells: ["prevented someone from + -ing", "The rain prevented us from playing."] },
  { cells: ["warned someone against + -ing / warned someone not to do something", "He warned me against smoking. / He warned me not to smoke."] },
];

const ADVANCED_VERBS = [
  "add", "admit", "advise", "offer", "announce", "answer", "ask", "agree",
  "claim", "protest", "state", "order", "proclaim", "point out", "comment",
  "wonder", "promise", "continue", "explain", "interrupt", "complain",
  "cry (shout)", "hint", "confess", "confirm", "demand", "inform", "enquire",
  "insist", "respond", "repeat", "report", "shout", "reply",
  "persuade", "maintain", "note", "observe", "suggest", "threaten", "warn",
];

const WH_QUESTIONS = [
  { cells: ["\u201cWhere do you live?\u201d", "He asked me where I lived."] },
  { cells: ["\u201cWhat are you doing?\u201d", "She asked what I was doing."] },
  { cells: ["\u201cWhy did you leave early?\u201d", "He asked why I had left early."] },
  { cells: ["\u201cWhich book do you want?\u201d", "He asked which book I wanted."] },
  { cells: ["\u201cWho is at the door?\u201d", "She asked who was at the door."] },
  { cells: ["\u201cWhen will you return?\u201d", "He asked when I would return."] },
  { cells: ["\u201cHow much does it cost?\u201d", "She asked how much it cost."] },
  { cells: ["\u201cHow many students were absent?\u201d", "He asked how many students had been absent."] },
  { cells: ["\u201cHow old are you?\u201d", "She asked how old I was."] },
];

const YESNO_QUESTIONS = [
  { cells: ["\u201cDo you like coffee?\u201d", "She asked if I liked coffee."] },
  { cells: ["\u201cHave you finished?\u201d", "He asked whether I had finished."] },
  { cells: ["\u201cWill you help me?\u201d", "She asked if I would help her."] },
  { cells: ["\u201cCan you drive?\u201d", "He asked whether I could drive."] },
  { cells: ["\u201cAre you a student?\u201d", "She asked if I was a student."] },
  { cells: ["\u201cDid you call him?\u201d", "He asked whether I had called him."] },
  { cells: ["\u201cMust I wait here?\u201d", "She asked if she had to wait there."] },
];

const STATEMENT_VARIETIES = [
  { cells: ["A \u2014 Simple statement", "Young Seagull: \u201cI don\u2019t think I can fly.\u201d", "Young Seagull said that he didn\u2019t think he could fly."] },
  { cells: ["B \u2014 Past tense \u2192 past perfect", "Greta: \u201cI thought you could make real peaches.\u201d", "Greta told her father that she had thought he could make real peaches."] },
  { cells: ["C \u2014 Replying \u201cNo\u201d / \u201cYes\u201d and adding a clause", "Father: \u201cNo. You have to go to the store for those.\u201d", "Father said that he couldn\u2019t and added that she had to go to the store for those."] },
  { cells: ["D \u2014 \u201ctold\u201d + a direct object", "Gupta: \u201cMaggie, I will use this shilling to buy flowers.\u201d", "Gupta told Maggie that he would use that shilling to buy flowers."] },
];

const POLITENESS = [
  { cells: ["Maggie: \u201cExcuse me, are you a vegetarian?\u201d", "Maggie asked him to excuse her and asked if he was a vegetarian."] },
];

const COMMANDS_MERGED = [
  { cells: ["Order", "ordered + object + to + V1", "Officer: \u201cHalt and show your ID.\u201d", "The officer ordered him to halt and show his ID."] },
  { cells: ["Order", "ordered + object + to + V1", "Mother: \u201cClean your room right now!\u201d", "The mother ordered her son to clean his room right then."] },
  { cells: ["Request", "requested + object + to + V1", "Passenger: \u201cCould you please help me with this suitcase?\u201d", "The passenger requested the stranger to help him with that suitcase."] },
  { cells: ["Request", "requested + object + to + V1", "Librarian: \u201cPlease maintain silence in the hall.\u201d", "The librarian requested the students to maintain silence in the hall."] },
  { cells: ["Advice", "advised + object + to / not to + V1", "Doctor: \u201cTake this medicine twice a day.\u201d", "The doctor advised the patient to take that medicine twice a day."] },
  { cells: ["Advice", "advised + object + to / not to + V1", "Friend: \u201cDon\u2019t rush into decisions without thinking.\u201d", "The friend advised him not to rush into decisions without thinking."] },
  { cells: ["Warning", "warned + object + not to + V1", "Guard: \u201cDon\u2019t touch the electric fence!\u201d", "The guard warned the children not to touch the electric fence."] },
];

export default function ReportedSpeechPage() {
  const [tab, setTab] = useState<GrammarTab>("concept");

  return (
    <>
      <GrammarTabs tab={tab} onTabChange={setTab} />

      {tab === "concept" ? (
        <>
          <section id="introduction" className="scroll-mt-24">
            <Callout type="note">
              <Highlight color="yellow">Reported speech</Highlight> (indirect speech) reports what someone said without using their exact words, in one of <strong>four types</strong>: statements, questions, commands and exclamations.
            </Callout>
            <TableCard
              title="The four types at a glance"
              headers={["Type", "Reporting verbs", "Linkers", "Structure", "Example"]}
              rows={OVERVIEW}
            />
            <TableCard
              title="Sentence structure shortcuts"
              headers={["Direct speech", "Reported speech"]}
              rows={SHORTCUTS}
              caption="The quickest way to recognise the type &mdash; and what it turns into."
            />
            <Callout type="important" title="Exam focus &mdash; the most-used linkers">
              Almost every question runs on three linkers: <Highlight color="yellow">that</Highlight> (statements and exclamations), <Highlight color="blue">if / whether</Highlight> (yes/no questions) and <Highlight color="green">to / not to</Highlight> (commands). Master these three and the reporting verbs <em>said, told</em> and <em>asked</em> before touching anything else.
            </Callout>
          </section>

          <section id="framework" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Step-by-Step Framework</h2>
            <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mb-2">
              Whatever the sentence, convert it the same way every time. Work through these steps in order.
            </p>
            <ProcessCard
              title="How to build reported speech"
              steps={[
                { label: "Identify the type of sentence", description: "Is it a statement, a question, a command / request / advice / warning, or an exclamation? The type decides everything that follows." },
                { label: "Remove the quotation marks and the comma", description: "Drop the inverted commas and the comma after the reporting verb." },
                { label: "Choose the reporting verb", description: "said (statements), asked / enquired (questions), ordered / requested / advised / warned (commands and requests), exclaimed / wished (exclamations)." },
                { label: "Add the linker", description: "that (statements and exclamations); if / whether or the wh-word (questions); to / not to (commands)." },
                { label: "Back-shift the tense", description: "V1 \u2192 V2, and V2 \u2192 had + V3. Keep the tense unchanged only for universal truths and still-true facts." },
                { label: "Identify the speaker and the listener", description: "Before changing any pronoun, be clear about who is speaking and who is being addressed. Pronouns change to match the reporter\u2019s point of view, so settle the speaker and the listener first." },
                { label: "Change the pronouns, time and place words", description: "I \u2192 he / she, we \u2192 they; today \u2192 that day, tonight \u2192 that night, here \u2192 there." },
                { label: "Check the finished sentence", description: "Use statement word order, remove the question or exclamation mark, and end with a full stop." },
              ]}
            />
          </section>

          <section id="said-told" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Said vs. Told &mdash; Quick Rule</h2>
            <Comparison
              columns={[
                {
                  title: "Told + object (listener) + that",
                  children: (
                    <>
                      <p><strong>Rule:</strong> a direct object is mandatory immediately after <em>told</em>.</p>
                      <p className="mt-2">Example: Gupta <Highlight color="yellow">told Maggie</Highlight> that he would use that shilling to buy flowers.</p>
                    </>
                  ),
                },
                {
                  title: "Said + (to + object) + that",
                  children: (
                    <>
                      <p><strong>Rule:</strong> no direct object immediately after <em>said</em> (a person can follow only with <em>to</em>).</p>
                      <p className="mt-2">Example: Young Seagull <Highlight color="blue">said</Highlight> that he didn&rsquo;t think he could fly. / He <Highlight color="blue">said to me</Highlight> that he would come.</p>
                    </>
                  ),
                },
              ]}
            />
          </section>

          <section id="word-changes" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">What Changes</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <TableCard
                title="Pronouns"
                headers={["Direct", "Reported"]}
                rows={PRONOUNS}
                caption="Pronouns change to match the reporter, not the original speaker."
              />
              <TableCard
                title="Time & place words"
                headers={["Direct", "Reported"]}
                rows={TIME_PLACE}
                caption="Words pointing to &ldquo;here and now&rdquo; shift to &ldquo;there and then&rdquo;."
              />
            </div>
            <TableCard
              title="Tense back-shift &mdash; with examples"
              headers={["Direct tense", "Reported tense", "Example"]}
              rows={TENSE_BACKSHIFT}
              caption="Every tense moves one step into the past. The last two have no further shift."
            />
            <TableCard
              title="Modals &mdash; with examples"
              headers={["Direct", "Reported", "Example"]}
              rows={MODALS}
              caption="&#9733; The most common exam shifts are will &rarr; would and must &rarr; had to."
            />
            <div className="mt-6 space-y-4">
              <Callout type="important" title="The back-shift chain">
                V1 &rarr; V2 &nbsp;(<em>go &rarr; went</em>); &nbsp;V2 &rarr; had + V3 &nbsp;(<em>went &rarr; had gone</em>); &nbsp;did + V1 &rarr; had + V3 &nbsp;(<em>did become &rarr; had become</em>).
              </Callout>
            </div>
          </section>

          <section id="exceptions" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Exceptions to the Back-shift</h2>
            <Callout type="note">
              The back-shift is the <em>default</em>, not a law. When the original words are still true, or the reporter is speaking in the present, the tense often stays put &mdash; shifting it would actually change the meaning.
            </Callout>
            <TableCard
              title="When the tense does not shift"
              headers={["Exception", "Example"]}
              rows={BACKSHIFT_EXCEPTIONS}
            />
          </section>

          <section id="statements" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Type 1 &mdash; Statements</h2>
            <Callout type="important" title="Core formula">
              <strong>Speaker + said / told / replied + (that) + Subject + Converted Verb</strong> &mdash; use <em>that</em> to join the clauses, back-shift the tense, and change the pronouns and time/place words.
            </Callout>
            <TableCard
              title="Varieties of statements"
              headers={["Variety", "Direct Speech", "Reported Speech"]}
              rows={STATEMENT_VARIETIES}
              caption="The formula never changes &mdash; only the reporting verb and the details of the sentence do."
            />
          </section>

          <section id="questions" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Type 2 &mdash; Questions</h2>
            <Callout type="note">
              Questions are reported in two ways. <Highlight color="yellow">Wh-questions</Highlight> keep the question word; <Highlight color="blue">Yes/No questions</Highlight> take <em>if</em> or <em>whether</em>. In both cases the word order becomes <strong>statement order</strong> (subject + verb) and there is <strong>no question mark</strong>.
            </Callout>

            <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-6 mb-1">
              <strong>Wh-questions</strong> begin with a question word &mdash; <em>where, what, why, which, who, when, how much, how many, how old</em> &mdash; and the question word is kept.
            </p>
            <TableCard headers={["Direct Speech", "Reported Speech"]} rows={WH_QUESTIONS} />

            <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-8 mb-1">
              <strong>Yes/No questions</strong> begin with an auxiliary &mdash; <em>am, is, are, was, were, do, does, did, has, have, had, will, would, shall, should, can, could, may, might, must, need, dare, ought to, used to</em> &mdash; and are linked with <em>if</em> or <em>whether</em>.
            </p>
            <TableCard headers={["Direct Speech", "Reported Speech"]} rows={YESNO_QUESTIONS} />

            <p className="text-foreground/90 text-[1.0625rem] leading-[1.75] mt-8 mb-1">
              <strong>Special case &mdash; politeness words.</strong> A phrase like <em>Excuse me</em> is not part of the question. It is a polite request, so it becomes its own clause (<em>asked &hellip; to excuse</em>) joined to the reported question by <em>and</em>.
            </p>
            <TableCard headers={["Direct Speech", "Reported Speech"]} rows={POLITENESS} />
          </section>

          <section id="imperatives" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Type 3 &mdash; Commands, Requests, Advice &amp; Warnings</h2>
            <Callout type="note">
              Commands and requests are reported with the <Highlight color="green">to-infinitive</Highlight>, and negative ones with <Highlight color="pink">not to</Highlight>. The reporting verb (<em>ordered, requested, advised, warned</em>) tells the reader what kind of instruction it was.
            </Callout>
            <TableCard
              title="Pattern + examples in one table"
              headers={["Type", "Pattern", "Direct Speech", "Reported Speech"]}
              rows={COMMANDS_MERGED}
              caption="Every example follows the same shape: reporting verb + object + to / not to + verb."
            />
          </section>

          <section id="exclamations" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Type 4 &mdash; Exclamations</h2>
            <Callout type="note">
              An exclamation expresses strong feeling. To report it, <Highlight color="yellow">name the emotion</Highlight> and turn the exclamation into an ordinary statement joined with <em>that</em> &mdash; the exclamation mark disappears.
            </Callout>
            <Checklist title="Reporting an exclamation — checklist" items={EXCLAMATION_CHECKLIST} />
            <Callout type="important" title="Core formula">
              <strong>Subject + exclaimed / cried out / wished + (with + emotion) + that + statement.</strong> Also note: <em>What a&hellip;!</em> and <em>How&hellip;!</em> become <em>&hellip;that it was a very + adjective + noun</em> (e.g. <em>What a beautiful flower!</em> &rarr; <em>exclaimed that it was a very beautiful flower</em>).
            </Callout>
            <TableCard
              title="Emotion &rarr; reported speech"
              headers={["Feeling", "Direct Speech", "Reported Speech"]}
              rows={EXCLAMATIONS}
              caption="Interjections (Hurrah!, Alas!) are reported by their meaning, not their sound."
            />
          </section>

          <section id="worked-examples" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Worked Examples &mdash; One Per Type</h2>
            <Expandable title="Worked example — a statement" variant="exercise">
              <p><strong>Direct:</strong> Ravi said, <em>&ldquo;I am going to the market now.&rdquo;</em></p>
              <p className="mt-3"><strong>Step 1 &mdash; Reporting verb:</strong> a statement takes <em>said</em> (or <em>told + person</em>). Keep <em>that</em>.</p>
              <p><strong>Step 2 &mdash; Pronoun:</strong> the speaker <em>I</em> &rarr; <em>he</em> (because the reporter is talking about Ravi).</p>
              <p><strong>Step 3 &mdash; Tense:</strong> <em>am going</em> &rarr; <em>was going</em> (present continuous &rarr; past continuous).</p>
              <p><strong>Step 4 &mdash; Time word:</strong> <em>now</em> &rarr; <em>then</em>.</p>
              <p className="mt-3"><strong>Reported:</strong> <em>Ravi said that he <strong>was going</strong> to the market <strong>then</strong>.</em></p>
            </Expandable>
            <Expandable title="Worked example — a question" variant="exercise">
              <p><strong>Direct:</strong> She asked, <em>&ldquo;Where have you kept my keys?&rdquo;</em></p>
              <p className="mt-3"><strong>Step 1 &mdash; Reporting verb:</strong> a wh-question keeps <em>asked</em> and the question word <em>where</em>.</p>
              <p><strong>Step 2 &mdash; Word order:</strong> a reported question returns to statement order (no auxiliary inversion).</p>
              <p><strong>Step 3 &mdash; Pronouns:</strong> <em>you</em> (the listener) &rarr; <em>I</em>; <em>my</em> &rarr; <em>her</em>.</p>
              <p><strong>Step 4 &mdash; Tense:</strong> <em>have kept</em> &rarr; <em>had kept</em>.</p>
              <p className="mt-3"><strong>Reported:</strong> <em>She asked where I <strong>had kept</strong> her keys.</em></p>
            </Expandable>
            <Expandable title="Worked example — a command / request" variant="exercise">
              <p><strong>Direct:</strong> The teacher said to the boys, <em>&ldquo;Please stand up.&rdquo;</em></p>
              <p className="mt-3"><strong>Step 1 &mdash; Reporting verb:</strong> <em>Please</em> marks a request, so <em>said</em> becomes <em>requested</em> (or <em>asked</em>).</p>
              <p><strong>Step 2 &mdash; Object:</strong> name the listener &mdash; <em>the boys</em>.</p>
              <p><strong>Step 3 &mdash; Verb form:</strong> use the to-infinitive &mdash; <em>to stand up</em> (a negative would be <em>not to stand up</em>).</p>
              <p className="mt-3"><strong>Reported:</strong> <em>The teacher requested the boys <strong>to stand up</strong>.</em></p>
            </Expandable>
            <Expandable title="Worked example — an exclamation" variant="exercise">
              <p><strong>Direct:</strong> <em>&ldquo;What a wonderful performance!&rdquo;</em> said the audience.</p>
              <p className="mt-3"><strong>Step 1 &mdash; Reporting verb:</strong> an exclamation takes <em>exclaimed</em> (never bare <em>said</em>).</p>
              <p><strong>Step 2 &mdash; Emotion:</strong> the feeling here is admiration &rarr; <em>with admiration</em>.</p>
              <p><strong>Step 3 &mdash; Become a statement:</strong> <em>What a&hellip;!</em> is rewritten as <em>that it was a very + adjective + noun</em> &mdash; <em>that it was a wonderful performance</em>.</p>
              <p className="mt-3"><strong>Reported:</strong> <em>The audience exclaimed <strong>with admiration</strong> that it was a wonderful performance.</em></p>
            </Expandable>
          </section>

          <section id="try-these" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Try These</h2>
            <ExerciseQa
              questions={[
                <span key="q1">Direct: He said, &ldquo;I have finished my homework.&rdquo;</span>,
                <span key="q2">Direct: &ldquo;Do you like coffee?&rdquo; she asked.</span>,
                <span key="q3">Direct: The officer said to them, &ldquo;Leave the room at once.&rdquo;</span>,
                <span key="q4">Direct: &ldquo;Alas! I am ruined,&rdquo; he said.</span>,
                <span key="q5">Direct: Mother said, &ldquo;Don&rsquo;t waste your time.&rdquo;</span>,
                <span key="q6">Direct: &ldquo;Where is the station?&rdquo; the stranger asked.</span>,
              ]}
              answers={[
                <span key="a1"><strong>He said that he had finished his homework.</strong> (Present perfect &rarr; past perfect; pronoun I &rarr; he.)</span>,
                <span key="a2"><strong>She asked if I liked coffee.</strong> (Yes/no question &rarr; if + statement order; present &rarr; past.)</span>,
                <span key="a3"><strong>The officer ordered them to leave the room at once.</strong> (Command &rarr; ordered + object + to-infinitive.)</span>,
                <span key="a4"><strong>He exclaimed with sorrow that he was ruined.</strong> (&ldquo;Alas!&rdquo; signals sorrow; the exclamation becomes a that-clause.)</span>,
                <span key="a5"><strong>Mother advised me not to waste my time.</strong> (A negative instruction &rarr; advised + object + not to + verb.)</span>,
                <span key="a6"><strong>The stranger asked where the station was.</strong> (Wh-question &rarr; statement order; the verb back-shifts.)</span>,
              ]}
            />
          </section>

          <section id="verb-patterns" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Reporting Verb Patterns</h2>
            <Callout type="note">
              Examiners reward the <em>precise</em> verb. Each pattern below fixes which preposition or form the verb takes &mdash; get the pattern right and the sentence writes itself.
            </Callout>
            <TableCard
              title="Verb + pattern + example"
              headers={["Pattern", "Example"]}
              rows={VERB_PATTERNS}
            />
          </section>

          <section id="advanced-verbs" className="scroll-mt-24 mt-14">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-2xl font-bold tracking-tight">Advanced Reporting Verbs</h2>
              <Badge variant="secondary" className="rounded-full font-bold">Advanced</Badge>
            </div>
            <Callout type="note">
              Beyond <em>said, told</em> and <em>asked</em>, examiners expect precise reporting verbs. Learn these as vocabulary &mdash; each one already carries the sentence type (statement, question or command) inside it.
            </Callout>
            <div className="flex flex-wrap gap-2 mt-4">
              {ADVANCED_VERBS.map((verb) => (
                <Badge key={verb} variant="outline" className="rounded-full px-3 py-1 text-sm font-semibold">
                  {verb}
                </Badge>
              ))}
            </div>
          </section>

          <section id="common-mistakes" className="scroll-mt-24 mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5">Common Mistakes</h2>
            <MistakeCard
              mistake="He said me that he was busy."
              correction="He told me that he was busy."
              example="'Said' is not followed by an indirect object. Use 'told + object' or 'said + to + object'."
            />
            <MistakeCard
              mistake="He told that he was busy."
              correction="He said that he was busy. / He told me that he was busy."
              example="'Told' always needs a listener. Without one, switch back to 'said'."
            />
            <MistakeCard
              mistake="He told to me that he would come."
              correction="He said to me that he would come."
              example="'Told' never takes 'to' — only 'said' pairs with 'to + person'."
            />
            <MistakeCard
              mistake="They said us to leave the room."
              correction="They told us to leave the room."
              example="With an object + to-infinitive (orders, requests), the verb must be 'told / asked / ordered' — never bare 'said'."
            />
            <MistakeCard
              mistake="The guard warned not to touch the fence."
              correction="The guard warned the children not to touch the fence."
              example="'Warned / ordered / advised' all need the person warned — never drop the object."
            />
            <MistakeCard
              mistake="She asked where do I live."
              correction="She asked where I lived."
              example="Reported questions do not use question word order — use statement order after wh-words."
            />
            <MistakeCard
              mistake="He asked to me where I lived."
              correction="He asked me where I lived."
              example="'Asked' takes the person directly — no 'to' between the verb and the listener."
            />
            <MistakeCard
              mistake="He said that he will come tomorrow."
              correction="He said that he would come the next day."
              example="Both the verb and the time expression must shift: will → would, tomorrow → the next day."
            />
            <MistakeCard
              mistake="The doctor advised him take the medicine."
              correction="The doctor advised him to take the medicine."
              example="Reported commands and advice always take 'to' before the verb."
            />
            <MistakeCard
              mistake="She asked me that whether I was ready."
              correction="She asked me whether I was ready."
              example="Do not use 'that' together with 'if / whether' — one linker is enough."
            />
            <MistakeCard
              mistake="He said, what a beautiful flower!"
              correction="He exclaimed that it was a very beautiful flower."
              example="An exclamation is reported with 'exclaimed ... that' — never bare 'said', and the exclamation mark disappears."
            />
            <MistakeCard
              mistake="He wished me that I might live long."
              correction="He wished that I might live long."
              example="'Wished' takes a that-clause directly — it does not take an indirect object the way 'told' does."
            />
          </section>

          <section id="key-takeaway" className="scroll-mt-24 mt-14">
            <KeyPoint>
              First decide the <em>type</em>: statements and exclamations join with <em>that</em>, questions with <em>if / whether</em> or the wh-word, and commands with <em>to / not to</em>. Then back-shift the tense, change the pronouns, and change the time and place words &mdash; unless the statement is still true. Reported questions always use statement word order &mdash; and no question mark.
            </KeyPoint>
          </section>
        </>
      ) : (
        <GrammarQuiz questions={QUESTIONS} />
      )}
    </>
  );
}
