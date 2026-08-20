"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { CharacterComparison } from "@/components/content/CharacterComparison";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question: "Why did the boy try to fool the teacher by repeating the mistake?",
    answer: (
      <>
        The boy was being{" "}
        <Highlight color="yellow">deliberately contrary</Highlight>. He
        persistently said &ldquo;twenty-four&rdquo; instead of the correct
        answer, with a &ldquo;wicked smile&rdquo; on his lips, knowing it
        would provoke the teacher. The boy understood power dynamics and used
        the teacher&rsquo;s frustration as leverage.
      </>
    ),
  },
  {
    question: "How does the teacher react when the boy repeated the mistake several times?",
    answer: (
      <>
        The teacher felt his{" "}
        <Highlight color="pink">blood rushing to his head</Highlight> and
        delivered a wholesome slap on the boy&rsquo;s cheek. He immediately
        regretted it and begged the boy not to cry &mdash; knowing the
        consequences would be severe.
      </>
    ),
  },
  {
    question: "How does the boy compel the teacher to act as a station master?",
    answer: (
      <>
        The boy threatens to{" "}
        <Highlight color="blue">tell his mother</Highlight> about the slap.
        He touches his red cheek and says &ldquo;It is paining me here
        awfully, I must see my mother.&rdquo; The desperate teacher
        capitulates and plays station master, blowing the whistle and
        calling &ldquo;Engine Driver, stop the train.&rdquo;
      </>
    ),
  },
  {
    question: "What is the teacher's reply to the father's enquiry about the arithmetic class?",
    answer: (
      <>
        Despite being exhausted and humiliated, the teacher lies:{" "}
        <Highlight color="green">&ldquo;Only please let him mug up the 16th
        table a little more.... He is all right. He will pull
        through.&rdquo;</Highlight> He then adds that they finished early
        and he was &ldquo;just playing about with the child... something
        to keep up his spirits.&rdquo;
      </>
    ),
  },
  {
    question: "What is the irony at the end of the story?",
    answer: (
      <>
        The &ldquo;crime&rdquo; was the teacher slapping the boy. The
        &ldquo;punishment&rdquo; was the teacher being{" "}
        <Highlight color="yellow">blackmailed into playing the boy&rsquo;s
        games</Highlight> &mdash; station master, storyteller, chase
        partner. The roles are reversed: the punished becomes the punisher,
        and the teacher becomes the servant of his own pupil.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "character-sketch-teacher",
    title: "Character Sketch: The Teacher",
    content: (
      <CharacterSketch name="The Teacher">
        <p>
          The teacher is a patient but ultimately{" "}
          <Highlight color="blue">overwhelmed man</Highlight>. He teaches
          six hours at school during the day and then spends three hours each
          evening with this one child &mdash; for thirty rupees. He privately
          believes the boy needs &ldquo;an anna&rsquo;s worth of cane&rdquo;
          but must pretend to agree with the parents&rsquo; child psychology
          theories.
        </p>
        <p>
          His single moment of physical frustration &mdash; the slap &mdash;
          becomes the boy&rsquo;s weapon of blackmail. The teacher ends up
          playing station master, telling stories, and chasing the boy around
          the garden. His final lie to the parents (&ldquo;He will pull
          through&rdquo;) shows both his desperation and his strange,
          grudging affection for the boy.
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "character-sketch-boy",
    title: "Character Sketch: The Boy",
    content: (
      <CharacterSketch name="The Boy">
        <p>
          The boy is described by his parents as &ldquo;a little angel, all
          dimples, smiles, and sweetness.&rdquo; The teacher privately
          considers him a{" "}
          <Highlight color="yellow">gorilla</Highlight>. He is manipulative,
          clever, and ruthlessly strategic. He understands power dynamics
          intuitively &mdash; he knows the teacher cannot afford to lose
          his position.
        </p>
        <p>
          His genius lies in using the teacher&rsquo;s own moment of weakness
          as permanent leverage. The red cheek becomes his weapon. He
          escalates demands from station master to engine repair to stories
          to chase games &mdash; each demand more absurd than the last. Yet
          his final gesture &mdash; pleading with the teacher not to
          reveal the test to his father &mdash; shows he is still a child
          afraid of his parents.
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "character-comparison",
    title: "Character Comparison",
    content: (
      <CharacterComparison
        characters={["The Teacher", "The Boy"]}
        rows={[
          {
            label: "Power",
            values: [
              <p key="teacher-power">Nominally in charge but completely <Highlight color="pink">powerless</Highlight>. Bound by the parents&rsquo; theories and the boy&rsquo;s blackmail.</p>,
              <p key="boy-power">Seemingly powerless but actually <Highlight color="yellow">in total control</Highlight>. Uses the slap as permanent leverage.</p>,
            ],
          },
          {
            label: "Intelligence",
            values: [
              <p key="teacher-intel">Academic knowledge but no practical <Highlight color="blue">mechanical skill</Highlight>. Cannot fix the engine, cannot quieten the boy.</p>,
              <p key="boy-intel">Street-smart and strategically brilliant. Knows exactly which threats will work.</p>,
            ],
          },
          {
            label: "Emotional State",
            values: [
              <p key="teacher-emotion">Desperate, exhausted, flushed, gasping. Feels &ldquo;a darkness swelling up around him.&rdquo;</p>,
              <p key="boy-emotion">Enjoying himself immensely. Laughs &ldquo;fiendishly&rdquo; during the chase. Only shows fear when the father mentions &ldquo;test.&rdquo;</p>,
            ],
          },
          {
            label: "Moral Position",
            values: [
              <p key="teacher-moral">Committed the &ldquo;crime&rdquo; (the slap) but shows genuine remorse. Ultimately protects the boy from his father.</p>,
              <p key="boy-moral">The &ldquo;victim&rdquo; who becomes the oppressor. His final plea shows vulnerability beneath the bravado.</p>,
            ],
          },
        ]}
      />
    ),
  },
  {
    id: "themes",
    title: "Themes",
    content: (
      <>
        <h3
          id="power-reversal"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Power Reversal
        </h3>
        <p>
          The story&rsquo;s central irony is the{" "}
          <Highlight color="yellow">reversal of authority</Highlight>. The
          teacher, who should be in charge, becomes the boy&rsquo;s servant.
          The boy, who should be learning, becomes the teacher&rsquo;s
          tormentor. The title &ldquo;Crime and Punishment&rdquo; inverts
          expectations: the teacher&rsquo;s crime leads to his own punishment.
        </p>
        <h3
          id="modern-parenting"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Modern Parenting
        </h3>
        <p>
          The parents&rsquo; child psychology theories &mdash; never set up
          &ldquo;contrariness or repression&rdquo; &mdash; have produced a
          child who is{" "}
          <Highlight color="pink">utterly unrestrained</Highlight>. The
          story satirizes permissive parenting: the parents lecture the
          teacher on theory while their &ldquo;little angel&rdquo; is
          actually a tyrant.
        </p>
        <h3
          id="education-system"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Education System
        </h3>
        <p>
          The teacher teaches six hours at school and then three more with
          this one child &mdash; for thirty rupees a month. He is{" "}
          <Highlight color="blue">exhausted, underpaid, and powerless</Highlight>.
          The story exposes the gap between educational theory (the
          parents&rsquo; psychology) and classroom reality (a tyrannical
          child and a desperate teacher).
        </p>
      </>
    ),
  },
  {
    id: "key-takeaway",
    title: "Key Takeaway",
    content: (
      <KeyPoint title="Key Takeaway">
        <em>Crime and Punishment</em> is a comic masterpiece about the{" "}
        <Highlight color="yellow">reversal of power</Highlight>. The
        teacher&rsquo;s single moment of violence becomes the boy&rsquo;s
        permanent weapon. Narayan&rsquo;s genius lies in showing how the
        &ldquo;punished&rdquo; child becomes the punisher, and how love,
        guilt, and exhaustion conspire to make the teacher his own
        prisoner. The story&rsquo;s final lie &mdash; protecting the boy
        from his father &mdash; reveals an unexpected tenderness beneath
        the comedy.
      </KeyPoint>
    ),
  },
];

export default function CrimeAndPunishmentPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="R. K. Narayan" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Crime and Punishment</em> is a short story by{" "}
            <Highlight color="yellow">R. K. Narayan</Highlight> (1906-2001),
            one of India&rsquo;s most widely read English writers. Set in the
            imaginary South Indian town of Malgudi, Narayan&rsquo;s stories
            are noted for their irony, subtle humour, and freshness of themes
            from everyday life.
          </p>
          <p>
            The story&rsquo;s title is a darkly comic inversion of
            Dostoevsky&rsquo;s novel. Here, the &ldquo;crime&rdquo; is a
            teacher slapping a pupil, and the &ldquo;punishment&rdquo; is the
            teacher being{" "}
            <Highlight color="pink">blackmailed into total submission</Highlight>.
          </p>

          {/* Summary */}
          <h2
            id="summary"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Summary
          </h2>
          <SummaryLevels
            quick={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Author</strong>: R. K. Narayan &mdash; set in Malgudi,
                  known for irony and humor.
                </li>
                <li>
                  <strong>Crime</strong>: The teacher slaps the boy for
                  persistently saying &ldquo;twenty-four&rdquo; instead of
                  fifty.
                </li>
                <li>
                  <strong>Blackmail</strong>: The boy threatens to tell his
                  mother. The teacher becomes his{" "}
                  <Highlight color="yellow">servant</Highlight>.
                </li>
                <li>
                  <strong>Punishment</strong>: The teacher plays station master,
                  tells stories, chases the boy around the garden.
                </li>
                <li>
                  <strong>Resolution</strong>: The teacher lies to the parents
                  that &ldquo;he will pull through.&rdquo;
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  A teacher is tutoring a wealthy man&rsquo;s only child in
                  arithmetic. The boy persistently answers &ldquo;twenty-four&rdquo;
                  instead of the correct fifty, with a{" "}
                  <Highlight color="yellow">wicked smile</Highlight>. The
                  teacher&rsquo;s blood rushes to his head and he delivers a
                  slap.
                </li>
                <li>
                  The boy threatens to tell his mother. The teacher begs him
                  not to. The boy touches his red cheek: &ldquo;It is paining
                  me here awfully.&rdquo; The teacher is trapped.
                </li>
                <li>
                  The boy escalates demands. He makes the teacher play{" "}
                  <Highlight color="blue">station master</Highlight> &mdash;
                  blowing a whistle and calling &ldquo;Engine Driver, stop the
                  train.&rdquo; He makes him try to fix a broken engine (which
                  the teacher cannot do). He demands stories &mdash; Ali Baba,
                  Aladdin, the bison.
                </li>
                <li>
                  The teacher grows desperate. He is exhausted from six hours
                  at school. The boy chases him around the garden three times,
                  laughing &ldquo;fiendishly.&rdquo; The teacher collapses on
                  the portico step, gasping.
                </li>
                <li>
                  The parents emerge. The teacher decides to confess. But when
                  the father asks about arithmetic, the boy&rsquo;s face falls
                  and he pleads with his eyes. The teacher lies: &ldquo;He
                  will pull through.&rdquo; The boy is relieved. The teacher
                  says they were &ldquo;just playing about.&rdquo;
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>The parents&rsquo; philosophy</strong>: The boy is
                  their only child &mdash; &ldquo;a little angel, all
                  dimples, smiles, and sweetness.&rdquo; They believe in
                  never setting up &ldquo;contrariness or repression&rdquo;
                  in a child&rsquo;s mind. They lecture the teacher daily on
                  child psychology. The father wrote a thesis on infant
                  psychology for his M.A. The teacher privately considers
                  the boy a gorilla.
                </li>
                <li>
                  <strong>The crime</strong>: When the boy persists with
                  &ldquo;twenty-four,&rdquo; the teacher slaps him. He
                  immediately regrets it and begs the boy not to cry. The
                  boy&rsquo;s response &mdash; &ldquo;I will tell
                  them&rdquo; &mdash; is delivered with strategic precision.
                  He knows exactly what power this gives him.
                </li>
                <li>
                  <strong>The blackmail</strong>: The boy touches his red
                  cheek and threatens to see his mother. The teacher
                  capitulates. The boy makes him play station master
                  (&ldquo;When the train comes to your station, you must
                  blow the whistle&rdquo;). The teacher hunches in a corner
                  and obeys. The boy hands him a broken engine: &ldquo;Repair
                  it, sir.&rdquo; The teacher cannot.
                </li>
                <li>
                  <strong>Escalation</strong>: The boy demands stories &mdash;
                  the bison, Ali Baba, Aladdin. The teacher is short of
                  breath after six hours at school. The boy demands the
                  bison story again. Then he suddenly runs toward the house.
                  The teacher chases him around the garden three times. The
                  boy laughs &ldquo;fiendishly.&rdquo; The teacher collapses,
                  &ldquo;a darkness swelling up around him.&rdquo;
                </li>
                <li>
                  <strong>The resolution</strong>: The parents emerge. The
                  teacher is ready to confess. But when the father asks
                  about the arithmetic test, the boy&rsquo;s face falls.
                  He slinks behind his parents, pleading with his eyes. The
                  teacher sees his &ldquo;grateful face&rdquo; and lies:
                  &ldquo;Only please let him mug up the 16th table a little
                  more.... He will pull through.&rdquo; He adds: &ldquo;We
                  finished our lessons early, and I was just playing about
                  with the child.&rdquo;
                </li>
                <li>
                  <strong>The irony</strong>: The story&rsquo;s title inverts
                  Dostoevsky. The &ldquo;crime&rdquo; is the slap. The
                  &ldquo;punishment&rdquo; is the teacher&rsquo;s total
                  submission. But the ending reveals something deeper: the
                  teacher and boy have developed a{" "}
                  <Highlight color="green">complex bond</Highlight>. The
                  teacher protects the boy; the boy spares the teacher.
                  Neither is purely victim or villain. The real punishment is
                  the system that puts a thirty-rupee-a-month teacher against
                  a wealthy, unrestrained child.
                </li>
              </ul>
            }
          />
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in space-y-4">
          {DISCOURSES.map((section) => (
            <CollapsibleSection key={section.id} id={section.id} title={section.title}>
              {section.content}
            </CollapsibleSection>
          ))}
          <div id="read-and-respond-section" className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">Read &amp; Respond</h2>
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}
    </div>
  );
}
