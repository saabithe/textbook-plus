"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Expandable } from "@/components/content/Expandable";
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

const MORE_QA_ITEMS = [
  {
    question: "Do you think the boy made the mistake purposefully? Why?",
    answer: (
      <>
        <p>
          Yes, the mistake was deliberate. The teacher had corrected the error
          repeatedly, yet the boy obstinately repeated &ldquo;twenty-four&rdquo;
          for sixteen multiplied by three, and he said it with a{" "}
          <Highlight color="yellow">wicked smile</Highlight> on his lips. A child
          who had genuinely forgotten the answer would look puzzled or ashamed;
          this child looked pleased with himself.
        </p>
        <p>
          The repetition was therefore a game with a purpose: he wanted to see
          the tired man&rsquo;s blood rush to his head, and he enjoyed the power
          of refusing the one thing the teacher was paid to obtain from him.
        </p>
      </>
    ),
  },
  {
    question:
      "How do the parents try to bring up their child as a healthy citizen?",
    answer: (
      <>
        <p>
          They bring him up by theory rather than by discipline. Both of them
          have studied infant psychology &mdash; the father even wrote a thesis
          on it for his M.A. &mdash; and they lecture the teacher daily on the
          need to avoid any sort of &ldquo;contrariness or repression&rdquo; in
          the child&rsquo;s mind, believing that correction would
          &ldquo;damage him for life.&rdquo;
        </p>
        <p>
          In practice their method is to give him everything and deny him
          nothing: a nursery of his own at a distance from the main house,
          expensive toys, miniature furniture, a pedal motor car for the garden
          and a cupboard stocked with sweets and biscuits, which he is trusted to
          eat &ldquo;moderately.&rdquo; They are convinced that this indulgence
          is what will make him a <strong>healthy citizen</strong>.
        </p>
      </>
    ),
  },
  {
    question: "How does the boy blackmail the teacher throughout the story?",
    answer: (
      <>
        <p>
          He uses the slap as a permanent lever. Whenever the teacher refuses a
          demand, the boy gently touches his cheek &mdash; still red from the
          blow &mdash; murmurs &ldquo;It is paining me here awfully, I must see
          my mother,&rdquo; and moves towards the door. The threat is never
          spoken outright and never needs to be: both of them know exactly what
          he will say when he gets there.
        </p>
        <p>
          With that single weapon he makes the teacher close the arithmetic
          lesson, hunch in a corner as the <strong>station master</strong> of a
          toy train, attempt repairs on a broken engine he does not understand,
          tell story after story of a bison, Ali Baba and Aladdin, and finally
          chase him three times round the garden until the exhausted man sinks
          down on the portico step.
        </p>
      </>
    ),
  },
  {
    question: "Why does the teacher support the boy at the end of the story?",
    answer: (
      <>
        <p>
          He had already decided to confess everything and take the
          consequences, because the blackmail had become harder to bear than any
          scolding. But just as he begins, the father asks how the boy is
          preparing for his arithmetic test, and the word &ldquo;test&rdquo;
          destroys the child&rsquo;s bravado. His face falls, he slinks behind
          his parents and appeals to the teacher with looks and gestures not to
          betray him.
        </p>
        <p>
          He looks so <Highlight color="pink">pathetic and desperate</Highlight>{" "}
          that pity wins. The teacher answers that the boy is &ldquo;all
          right,&rdquo; that he will &ldquo;pull through&rdquo; if he mugs up the
          sixteenth table a little more, and that they had merely been playing to
          keep up his spirits.
        </p>
      </>
    ),
  },
  {
    question: "Do you think the story is a satire on over-parenting?",
    answer: (
      <>
        <p>
          Yes. The story pokes fun at parents who have read about child
          psychology but have never watched their own child. They call the boy
          &ldquo;a little angel, all dimples, smiles, and sweetness,&rdquo; while
          the teacher, who actually has to manage him, privately calls him a{" "}
          <strong>little gorilla</strong>. The gap between the theory and the
          reality is the joke.
        </p>
        <p>
          The satire has a serious edge as well: by refusing to set any limit at
          all, the parents produce a spoiled, tyrannical child who blackmails an
          adult within minutes of being crossed.
        </p>
      </>
    ),
  },
  {
    question:
      "Do you think the mischievous nature of the child is the result of his loneliness? Why?",
    answer: (
      <>
        <p>
          Yes, loneliness is at the root of much of it. The boy is an only
          child in a large house, surrounded by toys, sweets and comforts rather
          than by companions of his own age. Nobody in the story plays with him
          for the pleasure of it; even the games have to be forced out of a
          tired tutor.
        </p>
        <p>
          Seen that way, his demands for a station master, a repaired engine, one
          more story and a chase round the garden are not simply naughtiness
          &mdash; they are the requests of a child who wants someone to stay and
          play with him. Indulgence has given him everything except{" "}
          <Highlight color="blue">company</Highlight>.
        </p>
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
    id: "aptness-of-title",
    title: "Aptness of the Title",
    content: (
      <>
        <p>
          <strong>Task</strong>: show how far the title of the story is apt.
          Narayan borrows his title from a novel of darkness and guilt, and the
          borrowing is itself the first clue to what kind of story this is.
        </p>

        <h3
          id="title-allusion"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Literary Allusion and Irony
        </h3>
        <p>
          Narayan playfully borrows the title of Dostoevsky&rsquo;s famous dark
          novel <em>Crime and Punishment</em> and turns a heavy theme into a
          light-hearted domestic comedy. In the Russian novel a crime is weighed
          against conscience, law and suffering; here the same grand words are
          fitted to an evening of arithmetic and a slap. The{" "}
          <Highlight color="yellow">allusion</Highlight> is ironic, and the irony
          begins before the first sentence of the story.
        </p>

        <h3
          id="title-the-crime"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Crime
        </h3>
        <p>
          The central crime is simply a single, impulsive slap delivered by an
          exhausted private tutor to his pampered student&rsquo;s cheek, after
          the boy obstinately repeats a maths mistake. He has already taught six
          hours at school that day and has been lectured for half an hour on
          infant psychology before the lesson even begins. Nothing is plotted and
          nothing is premeditated: the teacher&rsquo;s blood rushes to his head,
          his finger feels as if it were releasing a trigger, and the blow is
          over before he can think.
        </p>

        <h3
          id="title-the-punishment"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Punishment
        </h3>
        <p>
          The punishment that follows is not legal or moral retributive justice
          but the comical ordeal and physical exhaustion the teacher endures
          while dancing to the boy&rsquo;s tune. To keep the child from telling
          his parents, he acts as station master for a toy train, narrates story
          after story until he is short of breath, and is chased round the garden
          three times until he collapses on the portico step. The &ldquo;penalty&rdquo;
          is therefore not pain but <strong>humiliation and fatigue</strong>,
          which is exactly where the comedy lies.
        </p>

        <h3
          id="title-role-reversal"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Role Reversal
        </h3>
        <p>
          The title also highlights the situational irony of a complete swap of
          roles. The spoiled young student becomes the tyrannical punisher, and
          the adult teacher becomes the helpless, submissive offender trapped by
          his own mistake. In a story with any other title the slap would be a
          simple act of cruelty; here the words &ldquo;crime&rdquo; and
          &ldquo;punishment&rdquo; are handed to precisely the wrong people,
          which is why the title is not merely clever but{" "}
          <Highlight color="blue">exactly right</Highlight>.
        </p>
      </>
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

        <h3
          id="essay-spare-the-rod"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Essay: Spare the Rod and Spoil the Child
        </h3>
        <p>
          &ldquo;Spare the rod and spoil the child&rdquo; was a dictum prevalent
          in the past, repeated in homes and classrooms as though it were a law
          of nature rather than an opinion. It survives because it contains a
          half-truth: a child who is never corrected does grow up careless, and
          no school can run without some discipline. The question the proverb
          settles too quickly is what form that correction should take, and
          Narayan&rsquo;s story sets the two answers side by side without
          pretending that either is complete.
        </p>
        <p>
          Those who defend punishment begin with the proverb itself: it has
          lasted, they say, because a little fear corrects a child quickly, and
          quick correction saves years of bad habit. Small punishments, on this
          view, check small faults at once, before they harden; without any
          penalty at all, students ignore their studies and the whole class
          loses its order. Discipline of this kind is also credited with making
          students punctual, respectful, obedient and hardworking, and with
          supplying what every system needs &mdash; a penalty for those who break
          the rules, just as the law itself punishes those who break it. The
          argument is <Highlight color="yellow">orderly and reasonable</Highlight>,
          and it is not made by fools.
        </p>
        <p>
          Those who oppose punishment answer each of these points in turn. The
          rod can spoil the child as thoroughly as indulgence can: a slap given
          in anger leaves a mark, and &mdash; as happens in this story &mdash;
          the teacher loses his authority the moment he loses his temper. What
          punishment really teaches is not to give up the fault but to hide it
          from the punisher, so the fault survives and the honesty does not.
          Interest in the lesson keeps a class studying, whereas fear only keeps
          it quiet; respect born of fear lasts only while the punisher is in the
          room. And a penalty, they insist, is the last resort rather than the
          first: praise, responsibility and interesting work build discipline
          without injury.
        </p>
        <p>
          In a learning environment the case against physical punishment is
          stronger still. Fear crowds out curiosity; humiliation in front of
          classmates teaches a child to shrink rather than to try; a blow can
          cause real injury; and the relationship that all teaching depends on
          is damaged, sometimes beyond repair. Narayan gives us the evidence in
          miniature. The teacher&rsquo;s slap leaves the boy&rsquo;s cheek red,
          and that redness becomes a weapon. Within minutes the boy is touching
          his cheek and murmuring that it is paining him awfully and that he must
          see his mother, and from that moment the tutor is at his command
          &mdash; a station master in a corner, a storyteller running out of
          breath, an ageing man chasing a child round the garden. The boy
          blackmails him for the rest of the afternoon and, by the look on his
          grateful face at the end, knows that he can do so again.
        </p>
        <p>
          What should replace the rod is not nothing. A classroom needs rules
          that are clear, few and consistently enforced, so that the child knows
          the boundary before he crosses it and meets the same response every
          time. It needs praise for effort and small responsibilities that make
          a student feel trusted, and lessons interesting enough that attention is
          won rather than demanded. Misbehaviour is best dealt with in a private
          conversation rather than a public scene, and parents must be partners
          in the same method instead of a refuge from it &mdash; as the parents
          in this story are, always ready to believe the child and lecture the
          teacher. Consequences should be proportionate and non-physical: extra
          work, loss of a privilege, a task done again properly. Where a child is
          persistently disruptive or distressed, the answer is counselling and
          support, not a harder hand.
        </p>
        <p>
          The balanced verdict, then, is this. Discipline is necessary &mdash; the
          teacher is right that the boy needs it, and wrong only in how he
          supplies it. But{" "}
          <Highlight color="pink">
            discipline is necessary, and physical punishment is not
          </Highlight>
          . The rod spoils the child it claims to save, and the story&rsquo;s
          final irony is that the man who used it spends an entire evening
          proving the point.
        </p>
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
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">
              Read &amp; Respond
            </h2>

            <Expandable title="Read and Respond — 5 questions">
              <ReadRespond title="Textbook questions" items={QA_ITEMS} collapsible={false} />
            </Expandable>

            <Expandable title="More Textual Questions — 6 questions">
              <ReadRespond title="More textual questions" items={MORE_QA_ITEMS} collapsible={false} />
            </Expandable>
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
