"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { CharacterComparison } from "@/components/content/CharacterComparison";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { TableCard } from "@/components/content/data/TableCard";

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
        and the teacher becomes the servant of his own student.
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
          The teacher is the story&rsquo;s central figure: a modest, overworked
          man who teaches six hours at school and then spends three hours every
          evening with one child for{" "}
          <Highlight color="blue">thirty rupees a month</Highlight>. The first
          half-hour of those three hours is not his &mdash; it belongs to the
          parents, who lecture him on their theories of infant psychology and
          expect him to treat their son as though he were &ldquo;made of thin
          glass.&rdquo; He privately believes the boy needs firm discipline, but
          he must smile and agree.
        </p>
        <p>
          <strong>Human frailty.</strong> Pushed beyond endurance, he does what a
          mentor should never do. When the boy repeats &ldquo;twenty-four&rdquo;
          with a mischievous smile, the teacher loses control and slaps his
          cheek. He is appalled at once and begs the boy not to cry &mdash; he
          feels, the story says, as if his finger were releasing a trigger. In
          that one instant he commits the &ldquo;crime&rdquo; and hands his
          student a weapon.
        </p>
        <p>
          <strong>Patience and vulnerability.</strong> From that moment the boy
          holds him hostage. To keep the slap from reaching his mother&rsquo;s
          ears, the teacher hunches in a corner as a station master, tries to
          repair a broken toy engine, tells story after story, and runs round the
          garden until he collapses, breathless, on the portico steps. He fails
          to manage the boy the way he wanted to; at every demand that he cannot
          meet, he only grows more desperate.
        </p>
        <p>
          <strong>Compassion and real mentorship.</strong> The turning point
          comes when the parents appear. He has decided to reveal everything
          &mdash; to confess and take the consequences &mdash; rather than endure
          the blackmail any longer. But the father asks about the test, and the
          boy slinks behind him, silently pleading. Seeing that frightened face,
          the teacher chooses mercy: the boy is &ldquo;all right,&rdquo; he will
          &ldquo;pull through,&rdquo; and they were only playing &ldquo;to keep
          up his spirits.&rdquo; He felt sure by then that the boy would not give
          him up.
        </p>
        <p>
          He is not a flawless man, but he is a teacher to the end. His trust,
          his care and his willingness to protect the boy when it mattered most
          are what the story idealises. Whatever the boy&rsquo;s attitude, he
          hopes for the best and believes the child will change &mdash; because a
          teacher, above all, aims at his student&rsquo;s success.
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
    id: "writeup-humour",
    title: "Write-up: The Humour in the Story",
    content: (
      <>
        <p>
          <strong>Task</strong>: prepare a write-up on the effective use of
          humour in depicting ordinary situations in{" "}
          <em>Crime and Punishment</em>.
        </p>
        <p>
          In <em>Crime and Punishment</em> humour is not an ornament added to the
          story; it is the way Narayan looks at an ordinary domestic evening. A
          tired tutor, a pampered child and two anxious parents are enough
          material for a comedy that reduces the tedium of a tension-ridden
          existence.
        </p>

        <h3
          id="humour-inversion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          A Playful Inversion of Roles
        </h3>
        <p>
          The central irony rests on a swap of roles. The{" "}
          <Highlight color="yellow">crime</Highlight> is a single, impulsive slap
          delivered by an exhausted private tutor; the{" "}
          <Highlight color="yellow">punishment</Highlight> is the comical ordeal
          of the tutor dancing to the boy&rsquo;s tune to escape the
          parents&rsquo; wrath. The punisher and the punished change places, and
          the whole story grows out of that joke.
        </p>

        <h3
          id="humour-parenting"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Satire on Over-Parenting
        </h3>
        <p>
          Narayan begins by poking fun at modern over-parenting. The wealthy
          parents dedicate half an hour every evening to their theories of child
          psychology and demand that the tutor treat the boy as if he were
          &ldquo;made of thin glass&rdquo;, while the tutor privately considers
          him a &ldquo;little gorilla&rdquo; in need of firm discipline. The gap
          between what the parents say and what the child actually is does the
          comic work.
        </p>

        <h3
          id="humour-lesson"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Ordinary Lesson That Turns into Farce
        </h3>
        <p>
          The classroom becomes comedy the moment the boy answers
          &ldquo;twenty-four&rdquo; to the question &ldquo;what is sixteen and
          three multiplied?&rdquo; Provoked by the mischievous smile that
          accompanies the answer, the tutor loses his self-control and slaps his
          cheek &mdash; only to be instantly appalled by his own action, terrified
          of what the boy&rsquo;s mother will say. The story notes that his
          finger felt as if it were releasing a trigger.
        </p>

        <h3
          id="humour-blackmail"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Blackmail as Comic Escalation
        </h3>
        <p>
          Realising the tutor&rsquo;s panic, the boy turns the situation into
          relentless blackmail. He forces the tutor to hunch in a corner as a
          station master (&ldquo;If your father comes in, tell him it is an
          engine lesson&rdquo;), to attempt mechanical repairs on a toy train, to
          recount stories of a bison and a tiger, and to chase him round the
          garden three times until the tutor collapses on the portico step from
          sheer breathlessness. Each demand is more absurd than the last, and the
          absurdity itself is the humour.
        </p>

        <h3
          id="humour-twist"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Final Twist
        </h3>
        <p>
          The story concludes on a warm, humorous note when the father enters to
          ask about the upcoming arithmetic test. Hearing the word
          &ldquo;test&rdquo;, the boy panics and pathetically gestures to the
          tutor for mercy. The tutor chooses forgiveness over exposure and covers
          for him, advising that he merely needs to &ldquo;mug up the 16th table
          a little more&rdquo;. Turning the &ldquo;convict&rdquo; into the
          boy&rsquo;s saviour is the ultimate irony, and it makes the humour warm
          rather than cruel: through shared vulnerability, a tense conflict
          becomes a secret, light-hearted alliance between student and teacher.
        </p>
      </>
    ),
  },
  {
    id: "debate-punishments",
    title: "Debate: Punishments in Schools",
    content: (
      <>
        <p>
          <strong>Topic</strong>: &ldquo;Punishments are essential for student
          discipline&rdquo; (March 2019). The two sides, kept apart:
        </p>
        <TableCard
          headers={["Arguments FOR", "Arguments AGAINST"]}
          rows={[
            {
              cells: [
                "&ldquo;Spare the rod, spoil the child&rdquo; &mdash; the proverb has lasted because a little fear corrects a child quickly.",
                "The rod can spoil the child as well: a slap in anger leaves a mark, as it does here, and the teacher loses his authority over the boy.",
              ],
            },
            {
              cells: [
                "Small punishments check small faults at once, before they harden into habits.",
                "Punishment teaches a child to hide the fault from the punisher, not to give it up.",
              ],
            },
            {
              cells: [
                "Without any punishment, students ignore their studies and the whole class loses its order.",
                "Interest in the lesson keeps a class studying; fear only keeps it quiet.",
              ],
            },
            {
              cells: [
                "Punishment forces students to be punctual, respectful, obedient and hardworking.",
                "Respect born of fear lasts only while the punisher is in the room.",
              ],
            },
            {
              cells: [
                "Every system needs a penalty; the law itself punishes those who break it.",
                "A penalty is the last resort, not the first. Praise, responsibility and interesting work build discipline without injury.",
              ],
            },
          ]}
          caption="The story argues both sides at once: the boy badly needed discipline, but the slap handed him the power to blackmail his teacher."
        />
      </>
    ),
  },
  {
    id: "teacher-suggestions",
    title: "The Teacher: What He Could Have Done",
    content: (
      <>
        <p>
          <strong>Context</strong>: the teacher in <em>Crime and Punishment</em>{" "}
          is a pathetic figure at the mercy of a student who blackmails him.
          Here is his practice in the story set against what he should have
          done (2010):
        </p>
        <TableCard
          headers={["What he does in the story", "What he should do instead"]}
          rows={[
            {
              cells: [
                "Works for the extra thirty rupees a month and resents every hour of it.",
                "Change his attitude to the job: teach because the child needs teaching, not merely for the fee.",
              ],
            },
            {
              cells: [
                "Silently rejects the parents&rsquo; theories, then pretends to agree and coaxes the boy.",
                "Use more positive methods to make the child listen &mdash; praise, a small responsibility, work first and play afterwards.",
              ],
            },
            {
              cells: [
                "Repeats the same table until both of them are bored, tired and angry.",
                "Make the lesson interesting so that the boy is properly motivated: games, objects, short tasks, a story as the reward.",
              ],
            },
            {
              cells: [
                "Loses control and slaps the boy hard on the cheek, leaving a scar and a threat.",
                "Never resort to corporal punishment &mdash; the slap on the cheek is the beginning of all his troubles.",
              ],
            },
          ]}
          caption="He has the knowledge and the patience; what he lacks is a method. Authority is kept by teaching well, not by fear."
        />
      </>
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
            <ChapterIntro author="R. K. Narayan" genre="Short story" characters={["The Teacher", "The Boy"]} />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Crime and Punishment</em> is a humorous short story by{" "}
            <Highlight color="yellow">R. K. Narayan</Highlight>. It narrates a
            comical episode between a frustrated teacher and his naughty
            student, and it is a fine picture of today&rsquo;s troubled
            teacher&ndash;student relationship.
          </p>
          <p>
            The title is used with heavy sarcasm. The{" "}
            <Highlight color="pink">&ldquo;crime&rdquo;</Highlight> lies in the
            teacher hitting the boy on his cheek; the &ldquo;punishment&rdquo;
            is the teacher having to dance to the boy&rsquo;s tune just to avoid
            the parents&rsquo; wrath.
          </p>
          <p>
            In doing so, the story satirises over-concerned parenting, which
            tends to spoil children to a great extent. It ends with a smile on
            the reader&rsquo;s face, as the boy who has been blackmailing the
            teacher finally falls at the teacher&rsquo;s mercy.
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
                <li>A humorous short story by R. K. Narayan.</li>
                <li>
                  A satire on over-parenting in nuclear families, and on
                  today&rsquo;s troubled teacher&ndash;student relationship.
                </li>
                <li>
                  A teacher gives tuition to a clever, naughty child of rich and
                  educated parents.
                </li>
                <li>
                  He has already taught six hours at school, and spends three
                  more hours here for thirty rupees a month.
                </li>
                <li>
                  The first half-hour goes in listening to the parents&rsquo;
                  theories of child psychology.
                </li>
                <li>
                  They call the boy a little angel; the teacher privately thinks
                  he is a gorilla.
                </li>
                <li>
                  The lesson is arithmetic, and the boy is in no mood to study.
                </li>
                <li>
                  He deliberately answers &ldquo;twenty-four&rdquo; to &ldquo;what
                  is sixteen and three multiplied?&rdquo;
                </li>
                <li>
                  He repeats it with a wicked smile and makes the teacher angry.
                </li>
                <li>
                  The teacher&rsquo;s blood rushes to his head and he slaps the
                  boy on the cheek.
                </li>
                <li>He regrets it at once and begs the boy not to cry.</li>
                <li>
                  The boy sees his chance and blackmails the teacher: he will
                  tell his mother.
                </li>
                <li>
                  The teacher consoles him in every way, but the boy demands that
                  the day&rsquo;s lesson stop and the play begin.
                </li>
                <li>The boy makes him station master for the toy train.</li>
                <li>
                  The teacher refuses at first, and the boy threatens to tell his
                  mother about the slap.
                </li>
                <li>
                  At last the teacher obeys and takes the duty the boy gives him.
                </li>
                <li>
                  The teacher tires of the game in half an hour; luckily, the
                  engine also gets damaged.
                </li>
                <li>
                  He is asked to repair it and refuses, so the boy demands a
                  story.
                </li>
                <li>
                  The teacher is worn out after repeating story after story.
                </li>
                <li>
                  When he stops, unable to go on, the boy runs for his mother.
                </li>
                <li>The teacher runs after him but fails to catch him.</li>
                <li>He collapses on the portico steps.</li>
                <li>Just then the parents come out.</li>
                <li>The teacher decides to confess everything.</li>
                <li>
                  The father interrupts, asking about the arithmetic test.
                </li>
                <li>
                  The boy is annoyed and slinks behind his parents, looking
                  desperately at the teacher for help.
                </li>
                <li>
                  The teacher feels sympathy and replies that the boy is all
                  right for the test.
                </li>
                <li>The boy is relieved and grateful.</li>
                <li>
                  The teacher adds that they were only playing, to keep up his
                  spirits.
                </li>
                <li>
                  The story ends with a smile, as the blackmailing boy finally
                  falls at the teacher&rsquo;s mercy.
                </li>
                <li>
                  The slap was the crime, and the long afternoon that follows is
                  the due punishment.
                </li>
                <li>
                  The title also plays on Dostoevsky&rsquo;s novel, turned here
                  into comedy.
                </li>
                <li>
                  The story finally highlights the role of parents in shaping a
                  child.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
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
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
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
          </div>

          <div id="read-and-respond-section" className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">Read &amp; Respond</h2>
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in space-y-4">
          {(() => {
            const characters = DISCOURSES.filter((s) => s.id.startsWith("character-"));
            const others = DISCOURSES.filter((s) => !s.id.startsWith("character-"));
            return (
              <>
                {characters.length >= 2 && (
                  <div className="rounded-xl border border-border/50 bg-card/30 p-4 mt-2 mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Characters
                    </p>
                    {characters.map((section) => (
                      <CollapsibleSection key={section.id} id={section.id} title={section.title}>
                        {section.content}
                      </CollapsibleSection>
                    ))}
                  </div>
                )}
                {characters.length < 2 && characters.map((section) => (
                  <CollapsibleSection key={section.id} id={section.id} title={section.title}>
                    {section.content}
                  </CollapsibleSection>
                ))}
                {others.map((section) => (
                  <CollapsibleSection key={section.id} id={section.id} title={section.title}>
                    {section.content}
                  </CollapsibleSection>
                ))}
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
