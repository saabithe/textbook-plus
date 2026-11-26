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
        He was <Highlight color="yellow">being contrary on purpose</Highlight>.
        The teacher had corrected the error repeatedly, yet the boy went on
        saying &ldquo;twenty-four&rdquo; with a wicked smile.
      </>
    ),
  },
  {
    question: "Why did the parents give the boy intensive coaching in Mathematics?",
    answer: (
      <>
        His parents fondly hoped he would obtain fifty in the class test.
        They wanted him to go up by{" "}
        <Highlight color="blue">double-promotion to the first form</Highlight>.
      </>
    ),
  },
  {
    question:
      "How does the teacher react when the boy repeated the mistake several times?",
    answer: (
      <ul className="space-y-1.5">
        <li>
          <strong>First response:</strong> His blood rushed to his head, but he
          controlled himself and asked, &ldquo;How much?&rdquo; as a last chance.
        </li>
        <li>
          <strong>Final response:</strong> When the boy obstinately repeated the
          answer, he felt as if his finger were releasing a trigger and
          delivered a wholesome slap on the cheek.
        </li>
      </ul>
    ),
  },
  {
    question: "What is the boy’s response when the teacher slapped him on his cheek?",
    answer: (
      <>
        He gazed at the teacher for a moment and burst into tears. &ldquo;I will
        tell them,&rdquo; he sobbed, before saying he would tell his mother.
      </>
    ),
  },
  {
    question:
      "Why does the teacher ask the boy not to tell the incident to his mother?",
    answer: (
      <>
        He was <Highlight color="pink">appalled by his own action</Highlight>{" "}
        and begged frantically when the boy said he would tell his mother. He
        looked about cautiously.
      </>
    ),
  },
  {
    question: "How do the parents consider the boy?",
    answer: (
      <ul className="space-y-1.5">
        <li>
          <strong>Their view:</strong> He is &ldquo;a little angel, all dimples,
          smiles, and sweetness &mdash; only wings lacking.&rdquo;
        </li>
        <li>
          <strong>Their instruction:</strong> The teacher must deal with him
          &ldquo;as if he were made of thin glass.&rdquo;
        </li>
      </ul>
    ),
  },
  {
    question: "What facilities do the parents provide to the boy?",
    answer: (
      <ul className="space-y-1.5">
        <li>
          <strong>Room and toys:</strong> They built a nursery, bought expensive
          toys and fitted up miniature furniture sets.
        </li>
        <li>
          <strong>Car:</strong> They gave him a small pedal motor car to go about
          in all over the garden.
        </li>
        <li>
          <strong>Sweets:</strong> They filled his cupboard with all kinds of
          sweets and biscuits and left him to devour them moderately.
        </li>
      </ul>
    ),
  },
  {
    question:
      "Why do the parents give half an hour’s class on child psychology to the teacher every day?",
    answer: (
      <>
        They believed their theories would shape a &ldquo;healthy citizen.&rdquo;
        They warned that any &ldquo;contrariness or repression&rdquo; would
        damage the boy for life, so they lectured the teacher daily on their
        method.
      </>
    ),
  },
  {
    question: "Why does the teacher consider the boy a gorilla?",
    answer: (
      <>
        The boy behaved nothing like the parents&rsquo; &ldquo;little
        angel.&rdquo; He was obstinate over the sum and issued commands instead
        of obeying, so the teacher privately called him a{" "}
        <Highlight color="yellow">little gorilla</Highlight>.
      </>
    ),
  },
  {
    question:
      "How does the boy compel the teacher to act as a station master? And what duty does he assign to the teacher?",
    answer: (
      <ul className="space-y-1.5">
        <li>
          <strong>Compulsion:</strong> He threatened to tell his mother, moved
          towards the door and gently touched his still-red cheek.
        </li>
        <li>
          <strong>Pressure:</strong> He murmured, &ldquo;It is paining me here
          awfully, I must see my mother.&rdquo;
        </li>
        <li>
          <strong>Duty:</strong> The teacher had to blow the whistle and cry,
          &ldquo;Engine Driver, stop the train. There are a lot of people today
          who have bought tickets.&rdquo;
        </li>
      </ul>
    ),
  },
  {
    question: "When is the teacher relieved of the role of the station master?",
    answer: (
      <>
        He grew tired of the position and the game in thirty minutes and got up,
        to his student&rsquo;s displeasure. Luckily for him, the engine also
        suddenly refused to move.
      </>
    ),
  },
  {
    question: "Why does the teacher become desperate?",
    answer: (
      <ul className="space-y-1.5">
        <li>
          <strong>After the slap:</strong> He did not know how to quieten the
          boy, who kept sobbing.
        </li>
        <li>
          <strong>At the engine:</strong> The boy ordered a repair, but the
          teacher was absolutely non-mechanical and could not turn the simplest
          screw.
        </li>
      </ul>
    ),
  },
  {
    question: "How does the teacher become tired?",
    answer: (
      <>
        He had already done six hours of teaching at school during the day.
        Story after story left him short of breath, and the chase round the
        garden left him flushed, gasping as he sank onto the portico step.
      </>
    ),
  },
  {
    question: "Why does the teacher decide to reveal the matter to the parents?",
    answer: (
      <>
        He would rather confess and take the consequence than go on bearing the
        boy&rsquo;s blackmail. Throwing himself on the mercy of the elders
        seemed less forbidding.
      </>
    ),
  },
  {
    question: "Why does the boy become so annoyed and slink behind his parents?",
    answer: (
      <>
        At the word &ldquo;test&rdquo; his face fell. He slunk behind his parents
        and appealed by look and gesture to the teacher not to betray him.
      </>
    ),
  },
  {
    question:
      "What is the teacher’s reply to the father’s enquiry about the arithmetic class?",
    answer: (
      <ul className="space-y-1.5">
        <li>
          <strong>About the test:</strong> &ldquo;Only please let him mug up the
          16th table a little more.... He is all right. He will pull
          through.&rdquo;
        </li>
        <li>
          <strong>About the evening:</strong> &ldquo;We finished our lessons
          early, and I was just playing about with the child... something to
          keep up his spirits, you know.&rdquo;
        </li>
      </ul>
    ),
  },
];

const MORE_QA_ITEMS = [
  {
    question: "Do you think the boy made the mistake purposefully? Why?",
    answer: (
      <>
        <p>Yes, the mistake was deliberate.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>Repeated error:</strong> The teacher had corrected the error
            repeatedly, yet the boy obstinately repeated &ldquo;twenty-four&rdquo;
            for sixteen multiplied by three, and he said it with a{" "}
            <Highlight color="yellow">wicked smile</Highlight> on his lips.
          </li>
          <li>
            <strong>Telling contrast:</strong> A child who had genuinely
            forgotten the answer would look puzzled or ashamed; this child looked
            pleased with himself.
          </li>
          <li>
            <strong>Purpose of the game:</strong> The repetition was therefore a
            game with a purpose: he wanted to see the tired man&rsquo;s blood
            rush to his head, and he enjoyed the power of refusing the one thing
            the teacher was paid to obtain from him.
          </li>
        </ul>
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
        <p>In practice their method is to give him everything and deny him nothing.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>His own space:</strong> a nursery of his own at a distance
            from the main house.
          </li>
          <li>
            <strong>Playthings:</strong> expensive toys, miniature furniture, a
            pedal motor car for the garden.
          </li>
          <li>
            <strong>Sweets:</strong> a cupboard stocked with sweets and biscuits,
            which he is trusted to eat &ldquo;moderately.&rdquo;
          </li>
          <li>
            <strong>Their belief:</strong> They are convinced that this
            indulgence is what will make him a <strong>healthy citizen</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How does the boy blackmail the teacher throughout the story?",
    answer: (
      <>
        <p>He uses the slap as a permanent lever.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The tactic:</strong> Whenever the teacher refuses a demand,
            the boy gently touches his cheek &mdash; still red from the blow
            &mdash; murmurs &ldquo;It is paining me here awfully, I must see my
            mother,&rdquo; and moves towards the door.
          </li>
          <li>
            <strong>The unspoken threat:</strong> The threat is never spoken
            outright and never needs to be: both of them know exactly what he
            will say when he gets there.
          </li>
        </ul>
        <p>With that single weapon he makes the teacher:</p>
        <ul className="space-y-1.5">
          <li>
            <strong>Lesson:</strong> close the arithmetic lesson.
          </li>
          <li>
            <strong>Role:</strong> hunch in a corner as the{" "}
            <strong>station master</strong> of a toy train.
          </li>
          <li>
            <strong>Repairs:</strong> attempt repairs on a broken engine he does
            not understand.
          </li>
          <li>
            <strong>Stories:</strong> tell story after story of a bison, Ali Baba
            and Aladdin.
          </li>
          <li>
            <strong>Chase:</strong> finally chase him three times round the
            garden until the exhausted man sinks down on the portico step.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Why does the teacher support the boy at the end of the story?",
    answer: (
      <>
        <ul className="space-y-1.5">
          <li>
            <strong>His decision:</strong> He had already decided to confess
            everything and take the consequences, because the blackmail had
            become harder to bear than any scolding.
          </li>
          <li>
            <strong>The interruption:</strong> But just as he begins, the father
            asks how the boy is preparing for his arithmetic test, and the word
            &ldquo;test&rdquo; destroys the child&rsquo;s bravado.
          </li>
          <li>
            <strong>The boy&rsquo;s fear:</strong> His face falls, he slinks
            behind his parents and appeals to the teacher with looks and gestures
            not to betray him.
          </li>
        </ul>
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
        <p>Yes.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The target:</strong> The story pokes fun at parents who have
            read about child psychology but have never watched their own child.
          </li>
          <li>
            <strong>The contrast:</strong> They call the boy &ldquo;a little
            angel, all dimples, smiles, and sweetness,&rdquo; while the teacher,
            who actually has to manage him, privately calls him a{" "}
            <strong>little gorilla</strong>.
          </li>
          <li>
            <strong>The joke:</strong> The gap between the theory and the reality
            is the joke.
          </li>
        </ul>
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
        <p>Yes, loneliness is at the root of much of it.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>His surroundings:</strong> The boy is an only child in a
            large house, surrounded by toys, sweets and comforts rather than by
            companions of his own age.
          </li>
          <li>
            <strong>His play:</strong> Nobody in the story plays with him for the
            pleasure of it; even the games have to be forced out of a tired tutor.
          </li>
        </ul>
        <p>Seen that way, his demands are not simply naughtiness.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The demands:</strong> a station master, a repaired engine,
            one more story and a chase round the garden.
          </li>
          <li>
            <strong>The meaning:</strong> they are the requests of a child who
            wants someone to stay and play with him.
          </li>
          <li>
            <strong>The gap:</strong> Indulgence has given him everything except{" "}
            <Highlight color="blue">company</Highlight>.
          </li>
        </ul>
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
          <Highlight color="blue">thirty rupees a month</Highlight>.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>The parents&rsquo; half-hour:</strong> The first half-hour of
            those three hours is not his &mdash; it belongs to the parents, who
            lecture him on their theories of infant psychology and expect him to
            treat their son as though he were &ldquo;made of thin glass.&rdquo;
          </li>
          <li>
            <strong>His private view:</strong> He privately believes the boy needs
            firm discipline, but he must smile and agree.
          </li>
        </ul>
        <p>
          <strong>Human frailty.</strong> Pushed beyond endurance, he does what a
          mentor should never do.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>The slap:</strong> When the boy repeats &ldquo;twenty-four&rdquo;
            with a mischievous smile, the teacher loses control and slaps his
            cheek.
          </li>
          <li>
            <strong>Immediate remorse:</strong> He is appalled at once and begs
            the boy not to cry &mdash; he feels, the story says, as if his finger
            were releasing a trigger.
          </li>
          <li>
            <strong>The consequence:</strong> In that one instant he commits the
            &ldquo;crime&rdquo; and hands his student a weapon.
          </li>
        </ul>
        <p>
          <strong>Patience and vulnerability.</strong> From that moment the boy
          holds him hostage.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>Station master:</strong> To keep the slap from reaching his
            mother&rsquo;s ears, the teacher hunches in a corner as a station
            master.
          </li>
          <li>
            <strong>Repairs and stories:</strong> He tries to repair a broken toy
            engine, tells story after story.
          </li>
          <li>
            <strong>The chase:</strong> He runs round the garden until he
            collapses, breathless, on the portico steps.
          </li>
          <li>
            <strong>Growing desperation:</strong> He fails to manage the boy the
            way he wanted to; at every demand that he cannot meet, he only grows
            more desperate.
          </li>
        </ul>
        <p>
          <strong>Compassion and real mentorship.</strong> The turning point comes
          when the parents appear.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>His intention:</strong> He has decided to reveal everything
            &mdash; to confess and take the consequences &mdash; rather than endure
            the blackmail any longer.
          </li>
          <li>
            <strong>The father&rsquo;s question:</strong> But the father asks about
            the test, and the boy slinks behind him, silently pleading.
          </li>
          <li>
            <strong>Mercy:</strong> Seeing that frightened face, the teacher chooses
            mercy: the boy is &ldquo;all right,&rdquo; he will &ldquo;pull
            through,&rdquo; and they were only playing &ldquo;to keep up his
            spirits.&rdquo;
          </li>
          <li>
            <strong>His confidence:</strong> He felt sure by then that the boy
            would not give him up.
          </li>
        </ul>
        <p>He is not a flawless man, but he is a teacher to the end.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>What the story idealises:</strong> His trust, his care and his
            willingness to protect the boy when it mattered most are what the
            story idealises.
          </li>
          <li>
            <strong>What he believes:</strong> Whatever the boy&rsquo;s attitude,
            he hopes for the best and believes the child will change &mdash;
            because a teacher, above all, aims at his student&rsquo;s success.
          </li>
        </ul>
      </CharacterSketch>
    ),
  },
  {
    id: "character-sketch-boy",
    title: "Character Sketch: The Boy",
    content: (
      <CharacterSketch name="The Boy">
        <ul className="space-y-1.5">
          <li>
            <strong>The parents&rsquo; view:</strong> The boy is described by his
            parents as &ldquo;a little angel, all dimples, smiles, and
            sweetness.&rdquo;
          </li>
          <li>
            <strong>The teacher&rsquo;s view:</strong> The teacher privately
            considers him a <Highlight color="yellow">gorilla</Highlight>.
          </li>
          <li>
            <strong>His character:</strong> He is manipulative, clever, and
            ruthlessly strategic.
          </li>
          <li>
            <strong>His instinct:</strong> He understands power dynamics
            intuitively &mdash; he knows the teacher cannot afford to lose his
            position.
          </li>
          <li>
            <strong>His method:</strong> His genius lies in using the
            teacher&rsquo;s own moment of weakness as permanent leverage.
          </li>
          <li>
            <strong>The weapon:</strong> The red cheek becomes his weapon.
          </li>
          <li>
            <strong>Escalation:</strong> He escalates demands from station master
            to engine repair to stories to chase games &mdash; each demand more
            absurd than the last.
          </li>
          <li>
            <strong>Still a child:</strong> Yet his final gesture &mdash;
            pleading with the teacher not to reveal the test to his father
            &mdash; shows he is still a child afraid of his parents.
          </li>
        </ul>
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
        <ul className="space-y-1.5">
          <li>
            <strong>The borrowing:</strong> Narayan playfully borrows the title
            of Dostoevsky&rsquo;s famous dark novel <em>Crime and Punishment</em>
            and turns a heavy theme into a light-hearted domestic comedy.
          </li>
          <li>
            <strong>The contrast:</strong> In the Russian novel a crime is weighed
            against conscience, law and suffering; here the same grand words are
            fitted to an evening of arithmetic and a slap.
          </li>
          <li>
            <strong>The effect:</strong> The{" "}
            <Highlight color="yellow">allusion</Highlight> is ironic, and the
            irony begins before the first sentence of the story.
          </li>
        </ul>

        <h3
          id="title-the-crime"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Crime
        </h3>
        <ul className="space-y-1.5">
          <li>
            <strong>The act:</strong> The central crime is simply a single,
            impulsive slap delivered by an exhausted private tutor to his
            pampered student&rsquo;s cheek, after the boy obstinately repeats a
            maths mistake.
          </li>
          <li>
            <strong>The build-up:</strong> He has already taught six hours at
            school that day and has been lectured for half an hour on infant
            psychology before the lesson even begins.
          </li>
          <li>
            <strong>No premeditation:</strong> Nothing is plotted and nothing is
            premeditated: the teacher&rsquo;s blood rushes to his head, his finger
            feels as if it were releasing a trigger, and the blow is over before
            he can think.
          </li>
        </ul>

        <h3
          id="title-the-punishment"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Punishment
        </h3>
        <ul className="space-y-1.5">
          <li>
            <strong>Not retribution:</strong> The punishment that follows is not
            legal or moral retributive justice but the comical ordeal and physical
            exhaustion the teacher endures while dancing to the boy&rsquo;s tune.
          </li>
          <li>
            <strong>The ordeal:</strong> To keep the child from telling his
            parents, he acts as station master for a toy train, narrates story
            after story until he is short of breath, and is chased round the
            garden three times until he collapses on the portico step.
          </li>
          <li>
            <strong>The real penalty:</strong> The &ldquo;penalty&rdquo; is
            therefore not pain but <strong>humiliation and fatigue</strong>, which
            is exactly where the comedy lies.
          </li>
        </ul>

        <h3
          id="title-role-reversal"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Role Reversal
        </h3>
        <p>The title also highlights the situational irony of a complete swap of roles.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The swap:</strong> The spoiled young student becomes the
            tyrannical punisher, and the adult teacher becomes the helpless,
            submissive offender trapped by his own mistake.
          </li>
          <li>
            <strong>Why the title matters:</strong> In a story with any other
            title the slap would be a simple act of cruelty; here the words
            &ldquo;crime&rdquo; and &ldquo;punishment&rdquo; are handed to
            precisely the wrong people, which is why the title is not merely
            clever but <Highlight color="blue">exactly right</Highlight>.
          </li>
        </ul>
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
        <p>The central irony rests on a swap of roles.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The <Highlight color="yellow">crime</Highlight>:</strong> a
            single, impulsive slap delivered by an exhausted private tutor.
          </li>
          <li>
            <strong>The <Highlight color="yellow">punishment</Highlight>:</strong>{" "}
            the comical ordeal of the tutor dancing to the boy&rsquo;s tune to
            escape the parents&rsquo; wrath.
          </li>
          <li>
            <strong>The joke:</strong> The punisher and the punished change
            places, and the whole story grows out of that joke.
          </li>
        </ul>

        <h3
          id="humour-parenting"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Satire on Over-Parenting
        </h3>
        <p>Narayan begins by poking fun at modern over-parenting.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The parents:</strong> The wealthy parents dedicate half an
            hour every evening to their theories of child psychology and demand
            that the tutor treat the boy as if he were &ldquo;made of thin
            glass&rdquo;.
          </li>
          <li>
            <strong>The tutor:</strong> He privately considers him a &ldquo;little
            gorilla&rdquo; in need of firm discipline.
          </li>
          <li>
            <strong>The comic work:</strong> The gap between what the parents say
            and what the child actually is does the comic work.
          </li>
        </ul>

        <h3
          id="humour-lesson"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Ordinary Lesson That Turns into Farce
        </h3>
        <ul className="space-y-1.5">
          <li>
            <strong>The wrong answer:</strong> The classroom becomes comedy the
            moment the boy answers &ldquo;twenty-four&rdquo; to the question
            &ldquo;what is sixteen and three multiplied?&rdquo;
          </li>
          <li>
            <strong>The slap:</strong> Provoked by the mischievous smile that
            accompanies the answer, the tutor loses his self-control and slaps his
            cheek &mdash; only to be instantly appalled by his own action,
            terrified of what the boy&rsquo;s mother will say.
          </li>
          <li>
            <strong>The trigger:</strong> The story notes that his finger felt as
            if it were releasing a trigger.
          </li>
        </ul>

        <h3
          id="humour-blackmail"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Blackmail as Comic Escalation
        </h3>
        <p>
          Realising the tutor&rsquo;s panic, the boy turns the situation into
          relentless blackmail. He forces the tutor to:
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>Station master:</strong> hunch in a corner as a station master
            (&ldquo;If your father comes in, tell him it is an engine lesson&rdquo;).
          </li>
          <li>
            <strong>Repairs:</strong> attempt mechanical repairs on a toy train.
          </li>
          <li>
            <strong>Stories:</strong> recount stories of a bison and a tiger.
          </li>
          <li>
            <strong>Chase:</strong> chase him round the garden three times until
            the tutor collapses on the portico step from sheer breathlessness.
          </li>
        </ul>
        <p>Each demand is more absurd than the last, and the absurdity itself is the humour.</p>

        <h3
          id="humour-twist"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Final Twist
        </h3>
        <p>
          The story concludes on a warm, humorous note when the father enters to
          ask about the upcoming arithmetic test.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>The panic:</strong> Hearing the word &ldquo;test&rdquo;, the
            boy panics and pathetically gestures to the tutor for mercy.
          </li>
          <li>
            <strong>The forgiveness:</strong> The tutor chooses forgiveness over
            exposure and covers for him, advising that he merely needs to
            &ldquo;mug up the 16th table a little more&rdquo;.
          </li>
          <li>
            <strong>The irony:</strong> Turning the &ldquo;convict&rdquo; into the
            boy&rsquo;s saviour is the ultimate irony, and it makes the humour
            warm rather than cruel: through shared vulnerability, a tense
            conflict becomes a secret, light-hearted alliance between student
            and teacher.
          </li>
        </ul>
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
                "The rod can spoil the child: a slap in anger leaves a mark, as here, and the teacher loses authority over the boy.",
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
          of nature rather than an opinion.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>Its half-truth:</strong> It survives because it contains a
            half-truth: a child who is never corrected does grow up careless, and
            no school can run without some discipline.
          </li>
          <li>
            <strong>The real question:</strong> The question the proverb settles
            too quickly is what form that correction should take, and
            Narayan&rsquo;s story sets the two answers side by side without
            pretending that either is complete.
          </li>
        </ul>
        <p>Those who defend punishment begin with the proverb itself.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>Fear corrects quickly:</strong> It has lasted, they say,
            because a little fear corrects a child quickly, and quick correction
            saves years of bad habit.
          </li>
          <li>
            <strong>Small faults:</strong> Small punishments, on this view, check
            small faults at once, before they harden.
          </li>
          <li>
            <strong>Order in class:</strong> Without any penalty at all, students
            ignore their studies and the whole class loses its order.
          </li>
          <li>
            <strong>Character:</strong> Discipline of this kind is also credited
            with making students punctual, respectful, obedient and hardworking.
          </li>
          <li>
            <strong>A necessary penalty:</strong> It is credited with supplying
            what every system needs &mdash; a penalty for those who break the
            rules, just as the law itself punishes those who break it.
          </li>
          <li>
            <strong>The argument&rsquo;s strength:</strong> The argument is{" "}
            <Highlight color="yellow">orderly and reasonable</Highlight>, and it
            is not made by fools.
          </li>
        </ul>
        <p>Those who oppose punishment answer each of these points in turn.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>The rod spoils:</strong> The rod can spoil the child as
            thoroughly as indulgence can: a slap given in anger leaves a mark,
            and &mdash; as happens in this story &mdash; the teacher loses his
            authority the moment he loses his temper.
          </li>
          <li>
            <strong>Hidden faults:</strong> What punishment really teaches is not
            to give up the fault but to hide it from the punisher, so the fault
            survives and the honesty does not.
          </li>
          <li>
            <strong>Interest versus fear:</strong> Interest in the lesson keeps a
            class studying, whereas fear only keeps it quiet.
          </li>
          <li>
            <strong>Respect:</strong> Respect born of fear lasts only while the
            punisher is in the room.
          </li>
          <li>
            <strong>The last resort:</strong> And a penalty, they insist, is the
            last resort rather than the first: praise, responsibility and
            interesting work build discipline without injury.
          </li>
        </ul>
        <p>
          In a learning environment the case against physical punishment is
          stronger still.
        </p>
        <ul className="space-y-1.5">
          <li>
            <strong>Fear:</strong> Fear crowds out curiosity.
          </li>
          <li>
            <strong>Humiliation:</strong> Humiliation in front of classmates
            teaches a child to shrink rather than to try.
          </li>
          <li>
            <strong>Injury:</strong> A blow can cause real injury.
          </li>
          <li>
            <strong>The relationship:</strong> The relationship that all teaching
            depends on is damaged, sometimes beyond repair.
          </li>
          <li>
            <strong>Narayan&rsquo;s evidence:</strong> Narayan gives us the
            evidence in miniature.
          </li>
          <li>
            <strong>The red cheek:</strong> The teacher&rsquo;s slap leaves the
            boy&rsquo;s cheek red, and that redness becomes a weapon.
          </li>
          <li>
            <strong>The blackmail:</strong> Within minutes the boy is touching his
            cheek and murmuring that it is paining him awfully and that he must
            see his mother, and from that moment the tutor is at his command
            &mdash; a station master in a corner, a storyteller running out of
            breath, an ageing man chasing a child round the garden.
          </li>
          <li>
            <strong>What he learns:</strong> The boy blackmails him for the rest
            of the afternoon and, by the look on his grateful face at the end,
            knows that he can do so again.
          </li>
        </ul>
        <p>What should replace the rod is not nothing.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>Clear rules:</strong> A classroom needs rules that are clear,
            few and consistently enforced, so that the child knows the boundary
            before he crosses it and meets the same response every time.
          </li>
          <li>
            <strong>Trust and interest:</strong> It needs praise for effort and
            small responsibilities that make a student feel trusted, and lessons
            interesting enough that attention is won rather than demanded.
          </li>
          <li>
            <strong>Private correction:</strong> Misbehaviour is best dealt with
            in a private conversation rather than a public scene.
          </li>
          <li>
            <strong>Parents as partners:</strong> Parents must be partners in the
            same method instead of a refuge from it &mdash; as the parents in this
            story are, always ready to believe the child and lecture the teacher.
          </li>
          <li>
            <strong>Proportionate consequences:</strong> Consequences should be
            proportionate and non-physical: extra work, loss of a privilege, a
            task done again properly.
          </li>
          <li>
            <strong>Support:</strong> Where a child is persistently disruptive or
            distressed, the answer is counselling and support, not a harder hand.
          </li>
        </ul>
        <p>The balanced verdict, then, is this.</p>
        <ul className="space-y-1.5">
          <li>
            <strong>Discipline:</strong> Discipline is necessary &mdash; the
            teacher is right that the boy needs it, and wrong only in how he
            supplies it.
          </li>
          <li>
            <strong>The limit:</strong> But{" "}
            <Highlight color="pink">
              discipline is necessary, and physical punishment is not
            </Highlight>
            .
          </li>
          <li>
            <strong>The final irony:</strong> The rod spoils the child it claims
            to save, and the story&rsquo;s final irony is that the man who used it
            spends an entire evening proving the point.
          </li>
        </ul>
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
          <ul className="space-y-1.5">
            <li>
              <strong>The story:</strong> <em>Crime and Punishment</em> is a
              humorous short story by{" "}
              <Highlight color="yellow">R. K. Narayan</Highlight>.
            </li>
            <li>
              <strong>The episode:</strong> It narrates a comical episode between
              a frustrated teacher and his naughty student, and it is a fine
              picture of today&rsquo;s troubled teacher&ndash;student
              relationship.
            </li>
          </ul>
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

          <h2
            id="central-theme"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Central Theme
          </h2>
          <p>
            The story&rsquo;s central irony is a reversal of power: a
            teacher&rsquo;s single slap gives his pampered student a weapon of
            blackmail, and the &ldquo;crime&rdquo; brings its own comic
            punishment.
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
            <ul className="space-y-1.5">
              <li>
                <strong>The irony:</strong> The story&rsquo;s central irony is the{" "}
                <Highlight color="yellow">reversal of authority</Highlight>.
              </li>
              <li>
                <strong>The teacher:</strong> The teacher, who should be in
                charge, becomes the boy&rsquo;s servant.
              </li>
              <li>
                <strong>The boy:</strong> The boy, who should be learning,
                becomes the teacher&rsquo;s tormentor.
              </li>
              <li>
                <strong>The title:</strong> The title &ldquo;Crime and
                Punishment&rdquo; inverts expectations: the teacher&rsquo;s crime
                leads to his own punishment.
              </li>
            </ul>
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
            <ul className="space-y-1.5">
              <li>
                <strong>His hours:</strong> The teacher teaches six hours at
                school and then three more with this one child &mdash; for thirty
                rupees a month.
              </li>
              <li>
                <strong>His condition:</strong> He is{" "}
                <Highlight color="blue">exhausted, underpaid, and powerless</Highlight>.
              </li>
              <li>
                <strong>The gap:</strong> The story exposes the gap between
                educational theory (the parents&rsquo; psychology) and classroom
                reality (a tyrannical child and a desperate teacher).
              </li>
            </ul>
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

            <Expandable title="Read and Respond — 16 questions">
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
