"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { TableCard } from "@/components/content/data/TableCard";
import { ExerciseQa } from "@/components/content/ExerciseQa";

const QA_ITEMS = [
  {
    question: "Why do people believe in drugs?",
    answer: (
      <>
        Excitement over what drugs can do has led people to believe that any
        ailment, infective or psychic, can be relieved by taking a pill. At the
        first sign of nervousness they try{" "}
        <Highlight color="yellow">pep pills</Highlight>, and the habit spreads
        because journals advertise such drugs and doctors prescribe them.
      </>
    ),
  },
  {
    question: "What is the danger of over-dependence on drugs?",
    answer: (
      <>
        A person who depends on drugs to solve his problems loses the capacity to
        deal with life through{" "}
        <Highlight color="pink">perseverance, self-discipline and mental
        effort</Highlight>. Working at a problem then looks naive beside the easy
        way out.
      </>
    ),
  },
  {
    question: "What is Hippocrates' chief contribution?",
    answer: (
      <>
        Hippocrates saw that a remedy must account for the symptoms of the
        disease and also for the{" "}
        <Highlight color="blue">constitution and habits of the patient</Highlight>.
        From this came the rule that a medicine must suit the disease and the
        patient, and that a healthy person gains nothing from a drug.
      </>
    ),
  },
  {
    question: "What is the distinction between medicines and sensual drugs?",
    answer: (
      <>
        Medicines treat a specific disorder and restore health. Sensual drugs are
        substances the body has no need for, taken for the strong sense of{" "}
        <Highlight color="yellow">pleasure</Highlight> they give.
      </>
    ),
  },
  {
    question: "How do sensual drugs act on the human body?",
    answer: (
      <>
        They activate the brain&rsquo;s{" "}
        <Highlight color="blue">pleasure centres</Highlight>, either directly or
        through chemical mimicry. The brain governs sensations, moods, thoughts
        and actions through chemically regulated controls, and these controls are
        easily upset.
      </>
    ),
  },
  {
    question: "What is the danger of severe addiction?",
    answer: (
      <>
        In severe addiction the pleasure mechanisms stop responding to the drug.
        What remains is{" "}
        <Highlight color="pink">relative relief from misery</Highlight> and a
        temporary suspension of withdrawal.
      </>
    ),
  },
  {
    question: "Why does the craving for sensual drugs persist in an addict?",
    answer: (
      <>
        The senses still send information, but the brain can no longer read it as
        pleasure. The addict keeps seeking drug-induced sensation because the
        ordinary kind has gone.
      </>
    ),
  },
  {
    question: "Name some drug-related health disorders.",
    answer: (
      <>
        Dirty needles cause abscesses and liver disease. Sniffing damages the
        nose, smoking damages the lungs, and heavy use damages the liver. Babies
        of addicted women are born addicted, and an overdose can cause{" "}
        <Highlight color="pink">respiratory or cardiac failure</Highlight>.
      </>
    ),
  },
];

const AIDER = (
  <>
    <p className="mt-4 text-[0.95rem] text-muted-foreground">
      Use this when a question asks for causes, effects or remedies.
    </p>

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      What drug abuse is
    </h3>
    <ul className="space-y-1.5 text-[0.95rem] leading-[1.7]">
      <li>
        <strong>Definition.</strong> Using drugs in a way that harms the body.
      </li>
      <li>
        <strong>Addiction.</strong> Repeated use, until the body and the mind
        depend on the drug.
      </li>
      <li>
        <strong>Effect on the mind.</strong> Drugs alter the state of mind, and
        the user loses the sense of reality.
      </li>
      <li>
        <strong>Who is targeted.</strong> The young. Drug abuse is common among
        the youth these days, and the drug mafia sells to school and college
        students.
      </li>
    </ul>

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Two kinds of drugs
    </h3>
    <TableCard
      headers={["Type", "What it does", "Example"]}
      rows={[
        {
          cells: [
            "Medical drugs",
            "Cure a disorder in the body",
            "A prescribed antibiotic",
          ],
        },
        {
          cells: [
            "Sensual drugs",
            "Give pleasure and act as stimulants",
            "Alcohol, cocaine, marijuana",
          ],
        },
      ]}
      caption="Only the first kind treats a disorder. The second is taken for the feeling it gives."
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Effects on health and society
    </h3>
    <TableCard
      headers={["Area", "What happens"]}
      rows={[
        {
          cells: [
            "Mental and neurological",
            "Depression, personality change, paranoia, damage to brain and nose tissue",
          ],
        },
        {
          cells: [
            "Physical",
            "Damaged liver, malnutrition, weight loss, loss of appetite, death",
          ],
        },
        {
          cells: [
            "Society",
            "Higher crime, lost productivity, broken families, ruined relationships",
          ],
        },
      ]}
    />

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      How to overcome
    </h3>
    <ul className="space-y-1.5 text-[0.95rem] leading-[1.7]">
      <li>
        <strong>Expert help.</strong> Consult a doctor or a counsellor instead of
        trying to stop alone.
      </li>
      <li>
        <strong>Healthy routine.</strong> Sleep, food, exercise and work leave
        less room for the drug.
      </li>
      <li>
        <strong>Distance.</strong> Stay away from the friends, places and
        practices that lead back to it.
      </li>
    </ul>

    <h3 className="text-base font-bold mt-6 mb-2 scroll-mt-24 text-foreground">
      Conclusion
    </h3>
    <p>
      Drug abuse ruins a life and leaves grief and misery behind. We must fight
      it, and the fight begins with a refusal repeated every day:{" "}
      <Highlight color="green">say no to drugs, and yes to life</Highlight>.
    </p>
  </>
);

const DISCOURSES = [
  {
    id: "themes",
    title: "Themes",
    content: (
      <>
        <p>
          Jones builds the essay on three ideas. Each one explains a different
          part of the damage.
        </p>

        <h3
          id="theme-misconceptions"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          1. Misconceptions and Over-Dependence on Drugs
        </h3>
        <p>
          Medicine prevents and cures physical disease. It can also reverse some
          mental disturbance.
        </p>
        <p>
          Excitement over that success has led people to believe that any ailment,
          infective or psychic, can be relieved by a pill.
        </p>
        <p>
          At the first sign of nervousness they try pep pills. Medical journals
          advertise tranquilizers and amphetamines, doctors prescribe them, and
          the public expects miracles.
        </p>
        <p>
          In such an atmosphere it is not surprising that drug abuse has spread.
          The belief is not that drugs are pleasant but that they are the quick
          answer.
        </p>
        <p>
          Dependence costs the user the capacity to deal with life through
          perseverance, self-discipline and mental effort. Solving a problem by
          hand begins to look naive.
        </p>
        <p>
          The step from &ldquo;look what drugs do for me when I feel
          depressed&rdquo; to &ldquo;imagine what drug can do for me when I feel
          good already&rdquo; is a short one.
        </p>
        <p>
          The user is left with no way of facing a difficulty except the drug.
          That loss of effort is the first damage the essay describes.
        </p>

        <h3
          id="theme-medicines"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          2. Medicines and Sensual Drugs
        </h3>
        <p>
          The distinction does not mean disdaining what science has achieved.
          Medicines remain one of its real advances.
        </p>
        <p>
          The medical use of drugs goes back twenty-three centuries to{" "}
          <Highlight color="blue">Hippocrates</Highlight>, the Greek physician
          called the father of medicine. He was the first to recognize that a
          remedy must consider the symptoms of the disease and also the
          constitution and habits of the patient.
        </p>
        <TableCard
          title="Hippocrates’ rules"
          headers={["Rule", "What it means"]}
          rows={[
            {
              cells: [
                "Suit the disease and the patient",
                "Only a drug that specifically mitigates the disorder should be used",
              ],
            },
            {
              cells: [
                "Have restorative effects",
                "A drug that does not restore health unbalances the brain and body",
              ],
            },
            {
              cells: [
                "Never for the healthy",
                <p key="healthy-quote" className="italic">
                  &ldquo;Persons in good health quickly lose their strength by
                  taking purgative medicines.&rdquo;
                </p>,
              ],
            },
          ]}
        />
        <p>
          <Highlight color="pink">Sensual drugs</Highlight> are the opposite
          case. The body has no need for them, and they are taken for a strong
          sense of pleasure.
        </p>
        <p>
          They activate the brain&rsquo;s pleasure centres, either directly or
          through chemical mimicry. Jones calls both possibilities stimulation.
        </p>
        <p>
          The brain governs sensations, moods, thoughts and actions through a
          complex series of chemically regulated controls. Sensual drugs upset
          those controls easily.
        </p>
        <p>
          Craving continues while satisfaction falls. The pleasure reflexes seem
          weakened by artificial stimulation.
        </p>
        <p>
          In severe addiction the pleasure mechanisms fail to respond at all. The
          drug then gives only relative relief from misery and suspends the
          illness of withdrawal.
        </p>
        <p>
          <Highlight color="yellow">
            Naturally attained pleasures enlarge the sense of satisfaction and can
            be repeated indefinitely.
          </Highlight>
        </p>
        <p>
          Sensory information still reaches the brain, but the brain cannot
          evaluate it and read it as pleasure. The drug gives less each time,
          while natural pleasure gives more.
        </p>

        <h3
          id="theme-damage"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          3. Damage to Body and Mind
        </h3>
        <p>
          Drugs act directly on the brain and make mental mechanisms respond
          abnormally. The harm begins in the chemistry of the brain cells.
        </p>
        <p>
          Cell function is carried out by thousands of enzymes acting inside each
          cell. Each exposure to a psychoactive drug alters that chemistry.
        </p>
        <p>
          Toxic chemicals upset the delicate chemical balance of the brain&rsquo;s
          communication system, and they may damage cell tissue. The damage may be
          transitory or permanent.
        </p>
        <p>
          The first sign is <Highlight color="yellow">sensory deprivation</Highlight>.
          The addict feels depressed and fails to respond to his environment or to
          other people.
        </p>
        <p>
          His disturbance can resemble paranoia. He cannot find the source of the
          problem in himself, so anything external becomes suspect.
        </p>
        <p>
          He may lose the sense of being alive and feel &ldquo;dead inside&rdquo;.
          One rehabilitated addict looked at the sun and the flowers, then pressed
          his chest and said he did not feel it there.
        </p>
        <p>
          Addicts habitually press their fingers deep into their arms or legs. The
          gesture is an attempt to reassure themselves of their own reality.
        </p>
        <p>
          Physical damage is easier to see, and it arrives later than the user
          expects. Dirty needles cause abscesses and liver disease.
        </p>
        <p>
          They also spread venereal disease and infection of the kidneys and
          brain. Sniffing cocaine damages the tissue of the nose.
        </p>
        <p>
          Marijuana and tobacco smoking cause lung disease. Heavy use of alcohol,
          solvents, amphetamines or marijuana can leave the liver permanently
          damaged.
        </p>
        <p>
          Babies of women addicted to opiates are likely to be born addicted and
          to suffer withdrawal. Cocaine and amphetamines can cause hair to fall
          out.
        </p>
        <p>
          The addict&rsquo;s way of life invites pneumonia, tuberculosis,
          malnutrition and weight loss. An overdose of any sensual drug can lead
          to respiratory or cardiac failure and death.
        </p>
        <Callout type="important">
          <p>
            Damage to other organs can be more debilitating, but brain damage is
            the <Highlight color="pink">most subtle, most often unrecognized and
            least understood</Highlight> consequence of drug abuse.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "pyq",
    title: "PYQ — Previous Year Questions",
    content: (
      <>
        <p>
          Question papers return to a few passages and a few task types. The
          questions below are grouped by the task they ask for.
        </p>

        <h3
          id="pyq-passage"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Passage Questions
        </h3>
        <p>
          The passage is the addict&rsquo;s own account of looking out of a
          window.
        </p>
        <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
          <p className="text-lg font-medium italic text-foreground">
            &ldquo;The sun is shining, the flowers are in bloom, I know these are
            signs of a good day, but&rdquo; &mdash; pressing his chest &mdash;
            &ldquo;I don&rsquo;t feel it in here.&rdquo;
          </p>
        </blockquote>
        <Expandable title="Questions and answers" variant="exercise">
          <ExerciseQa
            questions={[
              <>Who says &ldquo;I don&rsquo;t feel it in here&rdquo;?</>,
              <>Why does he not feel it?</>,
              <>Why do addicts press their fingers deep into their arms or legs?</>,
            ]}
            answers={[
              <>
                A <strong>rehabilitated heroin addict</strong>, describing his
                sensory deprivation to Jones.
              </>,
              <>
                He has lost the sensations of ordinary life. Information still
                reaches the brain, but it no longer reads as pleasure, so he keeps
                seeking drug-induced sensation.
              </>,
              <>
                To reassure themselves of their own reality. The craving for lost
                sensation explains why they return to the drug.
              </>,
            ]}
          />
        </Expandable>

        <h3
          id="pyq-2017"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Model 2017 &mdash; Suggestions for a Drug-Free Campus
        </h3>
        <p>
          The school authorities were collecting suggestions from students for a
          drug-free campus. The answer has to use the wording the question gives.
        </p>
        <p>
          Begin sentences with &ldquo;The authorities should&rdquo;, &ldquo;It
          would be better&rdquo; and &ldquo;We could&rdquo;.
        </p>
        <Expandable title="Question and answer — three suggestions" variant="exercise">
          <ExerciseQa
            questions={[
              <>
                Suggest three ways to make your campus free of drugs. (3 marks)
              </>,
            ]}
            answers={[
              <ul key="suggestions" className="space-y-1.5">
                <li>
                  <strong>Supply control.</strong> The authorities should make
                  sure that sensual drugs are not easily available to students or
                  to other young people.
                </li>
                <li>
                  <strong>Parental monitoring.</strong> It would be better if
                  parents watched their children closely enough to notice the
                  first signs of drug use.
                </li>
                <li>
                  <strong>Awareness.</strong> We could conduct awareness
                  programmes that tell the public, and especially the young, what
                  drug abuse does.
                </li>
              </ul>,
            ]}
          />
        </Expandable>

        <h3
          id="pyq-2018"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Say / Improvement 2018 &mdash; Personality Change
        </h3>
        <p>
          The question asks how addiction leads to personality change, according
          to Jones.
        </p>
        <Expandable title="Question and answer — personality change" variant="exercise">
          <ExerciseQa
            questions={[
              <>
                How does drug addiction lead to personality changes, according to
                Dr. Hardin B. Jones? (4 marks)
              </>,
            ]}
            answers={[
              <ul key="personality" className="space-y-1.5">
                <li>
                  <strong>Cause.</strong> Sensual drugs and alcohol produce
                  sensory deprivation, and the first result is a change of
                  personality.
                </li>
                <li>
                  <strong>Mental.</strong> Frequent depression, no response to
                  people or surroundings, and paranoia. The addict knows the
                  problem and cannot solve it.
                </li>
                <li>
                  <strong>Physical.</strong> Hair fall, pneumonia, tuberculosis,
                  malnutrition and weight loss.
                </li>
                <li>
                  <strong>Fatal.</strong> An overdose can cause respiratory or
                  cardiac failure and death.
                </li>
              </ul>,
            ]}
          />
        </Expandable>

        <h3
          id="pyq-asked"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Asked and Expected
        </h3>
        <blockquote className="my-6 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
          <p className="text-lg font-medium italic text-foreground">
            &ldquo;Excitement over what drugs can do has led people to believe
            that any ailment, infective or psychic, can be relieved by taking a
            pill. At the first sign of nervousness, they try pep pills.&rdquo;
          </p>
        </blockquote>
        <Callout type="note" title="Pep pill">
          <p>
            A medicine taken for energy. The phrase appears in the opening
            paragraph of the essay, in the sentence about nervousness.
          </p>
        </Callout>
        <TableCard
          title="What each year asked for"
          headers={["Year and task", "Marks", "What to write"]}
          rows={[
            {
              cells: [
                "Say / Improvement 2016",
                "3",
                "An opinion on whether drug abuse is a social problem, in about thirty words. Link addiction to health, medical expense and prevention.",
              ],
            },
            {
              cells: [
                "March 2016",
                "8",
                "An essay on the consequences of drug addiction, using Jones on sensual drugs and the body.",
              ],
            },
            {
              cells: [
                "Model March 2021",
                "5",
                "An essay on the harmful effects of sensual drugs on the human body.",
              ],
            },
            {
              cells: [
                "Say / Improvement 2017",
                "4",
                "A paragraph for an NSS anti-drug campaign in a local slum, advising against drug use.",
              ],
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "write-up-blog",
    title: "Write-Up and Blog",
    content: (
      <>
        <p>
          Two longer tasks appear in recent papers: a write-up on the
          consequences and a blog post on sensory deprivation. Both run to about
          two hundred words.
        </p>

        <h3
          id="write-up"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Write-Up &mdash; Physical Consequences and Social Impact
        </h3>
        <p className="t-micro">Model February 2018 · 6 marks · about 200 words</p>
        <Expandable title="Model write-up — the silent destroyer" variant="example">
          <p>
            <strong>Introduction:</strong> Drug addiction has become a social and
            medical problem in modern society. Many people turn to mood-altering
            sensual drugs for temporary pleasure or for an easy escape from
            pressure.
          </p>
          <p>
            <strong>Physical consequences:</strong> Continuous abuse damages the
            body in ways that do not reverse. Psychoactive chemicals alter
            brain-cell chemistry and disrupt the neural communication system.
          </p>
          <p>
            Dirty needles spread infection. They cause liver disease, kidney damage
            and abscesses in the veins.
          </p>
          <p>
            Chronic use brings malnutrition, weight loss and hair loss.
          </p>
          <p>
            It also damages nasal tissue and raises the risk of pneumonia and
            tuberculosis. In extreme cases an overdose causes cardiac or
            respiratory failure, and death follows directly from the drug.
          </p>
          <p>
            <strong>Social impact:</strong> Drug abuse also damages a person&rsquo;s
            place among other people. The addict loses the capacity to deal with
            daily problems through self-discipline, perseverance and mental
            effort.
          </p>
          <p>
            As sensory deprivation sets in, paranoia and suspicion replace
            ordinary contact. Addicts isolate themselves and lose their sense of
            identity.
          </p>
          <p>
            They stop responding to family, friends and society. The cost falls on
            the family first: financial ruin, domestic strain and emotional trauma.
          </p>
          <p>
            It then falls on the wider society, through crime and the loss of the
            productive energy of the young.
          </p>
          <p>
            <strong>Conclusion:</strong> The remedy is education and a culture of
            healthy coping. Young people need to know what the drug does before
            they are offered it.
          </p>
        </Expandable>

        <h3
          id="blog-post"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Blog Post &mdash; &ldquo;Dead Inside&rdquo;
        </h3>
        <p className="t-micro">Model February 2020 · 6 marks · about 200 words</p>
        <Expandable title="Model blog post — Dead Inside" variant="example">
          <p className="t-micro">
            Blog post · Ananya · Class XII English Forum · November 2026
          </p>
          <p className="text-base font-bold tracking-tight text-foreground">
            Dead Inside: The Tragic Reality of Drug Addiction
          </p>
          <blockquote className="my-5 rounded-r-xl border-l-2 border-border bg-muted/20 py-3 pl-4 pr-4">
            <p className="italic">
              &ldquo;The sun is shining, the flowers are in bloom, I know these
              are signs of a good day, but I don&rsquo;t feel it in here.&rdquo;
            </p>
          </blockquote>
          <p>
            These words come from Jones&rsquo;s essay, and they stay with the
            reader. They describe the most overlooked consequence of addiction:
            sensory deprivation.
          </p>
          <p>
            When a person surrenders to sensual drugs, the brain&rsquo;s natural
            pleasure mechanisms are artificially overstimulated until they burn
            out. The user then loses the ability to enjoy ordinary happiness.
          </p>
          <p>
            Even after rehabilitation the mind can remain numb to the world around
            it. Nature may bloom, and the addict feels &ldquo;dead inside&rdquo;,
            pressing his fingers into his body to be sure he exists.
          </p>
          <p>
            This is the lie behind the claim that drugs offer harmless pleasure.
            Addiction takes the emotions, the identity and the human connection,
            and it does not give them back easily.
          </p>
          <p>
            <strong>My reflection:</strong> Real joy cannot be bought in a pill or
            a powder. It comes from earned moments, from other people and from
            problems faced with one&rsquo;s own strength.
          </p>
          <p>
            Let us raise awareness among our peers and say no to drugs before they
            take away our ability to feel alive.
          </p>
          <p className="t-micro mt-6">Comments</p>
          <ul className="space-y-1.5 text-[0.95rem]">
            <li>
              <em>Rahul:</em> &ldquo;The quote shows how dangerous sensory
              deprivation really is.&rdquo;
            </li>
            <li>
              <em>Meera:</em> &ldquo;A strong reminder for our generation to stay
              away from chemical escapes.&rdquo;
            </li>
          </ul>
        </Expandable>
      </>
    ),
  },
  {
    id: "speech-seminar",
    title: "Speech and Seminar Report",
    content: (
      <>
        <p>
          Two tasks remain: the speech and the seminar report. Both are occasion
          writing, so both need a salutation, a clear structure and a close.
        </p>

        <h3
          id="speech"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Speech &mdash; Anti-Narcotics Day
        </h3>
        <p className="t-micro">Model March 2018 / Say 2019 · 6 marks</p>
        <p>
          The school is observing Anti-Narcotics Day. You are asked to speak on
          the topic &ldquo;Drug abuse destroys the individual, the society and the
          nation&rdquo;.
        </p>
        <Expandable title="Model speech" variant="example">
          <p>Respected judges, teachers and my dear friends,</p>
          <p>A very good morning to one and all.</p>
          <p>
            I stand before you to speak on a subject that reaches every home in
            this country. Drug abuse destroys the individual, the society and the
            nation.
          </p>
          <p>
            Modern science has given us medicines that save lives. The same
            chemistry, misused, has trapped millions in a habit they cannot leave.
          </p>
          <p>
            <strong>The individual:</strong> Jones shows that sensual drugs
            overstimulate the brain&rsquo;s pleasure centres until natural
            pleasure fails. The addict loses the capacity to face difficulty
            through perseverance, self-discipline and mental effort.
          </p>
          <p>
            He feels &ldquo;dead inside&rdquo;, and paranoia takes the place of
            ordinary trust. Dirty needles and toxic chemicals cause organ damage,
            brain-cell depletion and fatal overdose.
          </p>
          <p>
            <strong>The society:</strong> An addict becomes suspicious,
            emotionally distant and unable to respond to loved ones. Families face
            financial ruin, domestic strain and severe emotional trauma.
          </p>
          <p>
            <strong>The nation:</strong> The young are the country&rsquo;s greatest
            strength and its economic future. When they succumb, the nation loses
            its workforce, its creative potential and its moral foundation.
          </p>
          <p>
            Crime rates rise, and healthcare systems are overburdened.
            Adolescence is a vital stage of physical, intellectual and emotional
            growth.
          </p>
          <p>
            Stress and discomfort are met with a pill, and that belief leads many
            teenagers into the trap of drug abuse.
          </p>
          <p>
            To safeguard our future we must say a firm no to chemical escapes. We
            must choose a life built on healthy resilience, self-discipline and
            positive living.
          </p>
          <p>Thank you.</p>
        </Expandable>

        <h3
          id="seminar-report"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Seminar Report
        </h3>
        <p>
          The Anti-Narcotic Club of your school conducted a seminar on
          &ldquo;Dangers of Drug Abuse&rdquo;. Prepare a report using the
          programme details below.
        </p>
        <TableCard
          title="Programme — 20 February 2019"
          headers={["Item", "Detail"]}
          rows={[
            { cells: ["Venue", "School Auditorium"] },
            { cells: ["Time", "10 a.m."] },
            { cells: ["Prayer", "School Choir"] },
            { cells: ["Welcome speech", "Mr. Venugopalan M.G., Principal"] },
            {
              cells: [
                "Presidential address",
                "Dr. Kumaresh, Director, Anti Narcotic Cell",
              ],
            },
            { cells: ["Inauguration", "Dr. Satheesh Chandran, IAS"] },
            { cells: ["Felicitation", "Smt. Sathi, Ward Councillor"] },
            { cells: ["Vote of thanks", "Krishna, School Leader"] },
            { cells: ["Closing", "National Anthem"] },
          ]}
        />
        <TableCard
          title="Paper presentations"
          headers={["Topic", "Presented by"]}
          rows={[
            { cells: ["Sensual Drugs and Medicines", "Adithya"] },
            { cells: ["Drug Addiction and Personality Disorders", "Vennila"] },
            { cells: ["Physical Impacts of Drug Abuse", "Varsha"] },
            { cells: ["Mental Impacts of Drug Abuse", "Vichithra"] },
            { cells: ["Social Impacts of Drug Abuse", "Sangeetha"] },
          ]}
        />
        <Expandable title="Model report" variant="example">
          <h4 className="!mt-0 text-base font-bold tracking-tight text-foreground">
            Seminar Report: Dangers of Drug Abuse
          </h4>
          <p className="t-micro mt-1">
            Anti-Narcotic Club · School Auditorium · 20 February 2019 · 10 a.m.
          </p>
          <p>
            A one-day seminar on &ldquo;Dangers of Drug Abuse&rdquo; was conducted
            by the Anti-Narcotic Club on 20 February 2019 at 10 a.m. in the School
            Auditorium. The aim was to create awareness among students about the
            physical, psychological and social hazards of substance abuse.
          </p>

          <h4 className="mt-6 text-base font-bold tracking-tight text-foreground">
            Inaugural Session
          </h4>
          <p>
            The programme began with a prayer song by the School Choir. Mr.
            Venugopalan M.G., Principal, delivered the welcome address on the
            importance of anti-narcotic education in schools.
          </p>
          <p>
            Dr. Kumaresh, Director of the Anti-Narcotic Cell, gave the presidential
            address. He asked students to take an active part in removing drug
            culture from campuses.
          </p>
          <p>
            Dr. Satheesh Chandran, IAS, inaugurated the seminar. He urged the young
            to hold on to strong values and to resist peer pressure.
          </p>
          <p>
            Smt. Sathi, Ward Councillor, offered felicitations and praised the
            school&rsquo;s initiative.
          </p>

          <h4 className="mt-6 text-base font-bold tracking-tight text-foreground">
            Paper Presentations
          </h4>
          <p>
            Five papers followed the inaugural session. Adithya distinguished
            Hippocratic medicine from sensual drugs, and Vennila described the
            paranoia, sensory deprivation and isolation that follow long use.
          </p>
          <p>
            Varsha covered organ damage, brain-cell depletion, needle infections
            and overdose. Vichithra spoke on the destruction of brain chemistry.
          </p>
          <p>
            She also described memory loss and the loss of emotional response.
          </p>
          <p>
            Sangeetha closed the session with the social cost: family breakdown,
            lost productivity, rising crime and the burden on the nation.
          </p>

          <h4 className="mt-6 text-base font-bold tracking-tight text-foreground">
            Valedictory Session
          </h4>
          <p>
            An interactive question-and-answer session followed the papers.
            Krishna, the School Leader, proposed the vote of thanks.
          </p>
          <p>
            He thanked the guests and the speakers. He also thanked the teachers
            and the organisers.
          </p>
          <p>
            The seminar ended at 1.30 p.m. with the National Anthem.
          </p>
        </Expandable>
      </>
    ),
  },
];

export default function DangersOfDrugAbusePage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <ChapterIntro author="Hardin Blair Jones" genre="Expository essay" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Dangers of Drug Abuse</em> is a scientific article by{" "}
            <Highlight color="yellow">Hardin Blair Jones</Highlight>. It is a
            warning to modern society about what drugs do to the people who take
            them.
          </p>
          <p>
            Jones sets <Highlight color="blue">medicine</Highlight> against what
            he calls <Highlight color="pink">sensual drugs</Highlight>. He then
            follows the second kind into the brain, where the damage is hardest to
            see.
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
                  <strong>False faith in quick fixes.</strong> Excitement over
                  modern drugs has taught people to expect a pill for every
                  discomfort. The habit weakens perseverance, self-discipline and
                  mental effort.
                </li>
                <li>
                  <strong>Medicines and sensual drugs.</strong> Hippocrates held
                  that a drug must suit the disorder and restore health. Sensual
                  drugs are chemicals the body has no need for, taken only for
                  pleasure.
                </li>
                <li>
                  <strong>Collapse of natural pleasure.</strong> Sensual drugs
                  overstimulate the brain&rsquo;s pleasure centres. The user feels
                  less satisfaction and loses the ability to enjoy natural
                  pleasures.
                </li>
                <li>
                  <strong>Sensory deprivation.</strong> Long addiction brings
                  emotional numbness and depression. The addict withdraws from
                  people and suspects everything outside the self.
                </li>
                <li>
                  <strong>Physical and brain damage.</strong> Continued use causes
                  infections, organ damage and overdose. It also alters brain-cell
                  chemistry, and the damage may be permanent.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Purpose.</strong> A timely warning against the modern
                  culture of drug dependency.
                </li>
                <li>
                  <strong>Why abuse spreads.</strong> Medicine has real successes,
                  and the public now expects miracles from it. Journals advertise
                  tranquilizers and amphetamines, and a nervous person reaches for
                  a pep pill.
                </li>
                <li>
                  <strong>Loss of resilience.</strong> Dependence costs the user
                  the capacity to face life through perseverance, self-discipline
                  and mental effort. Effort begins to look naive when a pill is
                  easier.
                </li>
                <li>
                  <strong>Hippocrates&rsquo; rules.</strong> A remedy must suit the
                  disease and the patient&rsquo;s constitution and habits. It must
                  restore health, and it must never be given to a person who is
                  well.
                </li>
                <li>
                  <strong>Sensual drugs.</strong> These are substances the body has
                  no need for, taken for a strong sense of pleasure. They activate
                  the brain&rsquo;s pleasure centres directly or through chemical
                  mimicry.
                </li>
                <li>
                  <strong>The addiction trap.</strong> Craving continues while
                  satisfaction falls. In severe addiction the drug gives only
                  relief from withdrawal, not pleasure.
                </li>
                <li>
                  <strong>Sensory deprivation.</strong> The addict feels depressed
                  and stops responding to people and surroundings. He suspects
                  everything external and may feel &ldquo;dead inside&rdquo;.
                </li>
                <li>
                  <strong>Hidden harm.</strong> Side effects are not visible at
                  once, so the user does great damage before any warning appears.
                  The results run from delirious effects to overdose and death.
                </li>
                <li>
                  <strong>Physical disorders.</strong> Dirty needles spread
                  infection, sniffing damages the nose, and heavy use damages the
                  liver. Babies of addicted mothers are born addicted.
                </li>
                <li>
                  <strong>Brain damage.</strong> Each exposure alters the chemistry
                  of brain cells and can damage tissue. This is the most subtle and
                  least understood consequence of abuse.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Misplaced faith.</strong> Drugs prevent and cure physical
                  disease, and they can reverse some mental disturbance. Excitement
                  over those results has convinced people that any ailment,
                  infective or psychic, can be relieved by a pill.
                </li>
                <li>
                  <strong>Everyday triggers.</strong> At the first sign of
                  nervousness people try pep pills. Medical journals advertise
                  tranquilizers, amphetamines and other mood-altering drugs, and
                  doctors prescribe them.
                </li>
                <li>
                  <strong>Erosion of effort.</strong> Dependence destroys the
                  capacity to deal with life through perseverance, self-discipline
                  and mental effort. Solving a problem by hand begins to look
                  naive.
                </li>
                <li>
                  <strong>The short step.</strong> The user moves from &ldquo;look
                  what drugs do for me when I feel depressed&rdquo; to
                  &ldquo;imagine what drug can do for me when I feel good
                  already&rdquo;. The distance between the two sentences is small.
                </li>
                <li>
                  <strong>Respect for medicine.</strong> The distinction between
                  medicines and sensual drugs is not a rejection of science. Real
                  advances in medicine remain real advances.
                </li>
                <li>
                  <strong>Hippocrates.</strong> The medical use of drugs goes back
                  twenty-three centuries to Hippocrates, the Greek physician called
                  the father of medicine. He was the first to see that a remedy
                  must consider the patient&rsquo;s constitution and habits as well
                  as the symptoms.
                </li>
                <li>
                  <strong>Two rules.</strong> The medicine must specifically suit
                  the disease and the patient. It must also have restorative
                  effects, or it will unbalance healthy functions of the brain and
                  body.
                </li>
                <li>
                  <strong>The healthy gain nothing.</strong> Hippocrates said that
                  persons in good health quickly lose their strength by taking
                  purgative medicines. A drug is for a disorder, not for a well
                  body.
                </li>
                <li>
                  <strong>Definition.</strong> Sensual drugs are those the body has
                  no need for but which give a strong sense of pleasure. They work
                  by stimulating the brain&rsquo;s pleasure centres, directly or
                  through chemical mimicry.
                </li>
                <li>
                  <strong>Chemical controls.</strong> The brain governs sensations,
                  moods, thoughts and actions through a complex series of
                  chemically regulated controls. Sensual drugs upset these controls
                  easily.
                </li>
                <li>
                  <strong>Weakening reflexes.</strong> Craving continues while
                  satisfaction falls. The brain&rsquo;s pleasure reflexes seem
                  weakened by artificial stimulation.
                </li>
                <li>
                  <strong>Severe addiction.</strong> The pleasure mechanisms stop
                  responding to the drug. What remains is relative relief from
                  misery and a temporary suspension of withdrawal.
                </li>
                <li>
                  <strong>Natural pleasure.</strong> Sensory information still
                  reaches the brain, but the brain cannot read it as pleasure.
                  Naturally attained pleasures, by contrast, enlarge satisfaction
                  and <Highlight color="green">can be repeated indefinitely</Highlight>.
                </li>
                <li>
                  <strong>Personality change.</strong> Sensory deprivation shows
                  first as physical discomfort and a change of personality. The
                  addict feels depressed and fails to respond to his environment or
                  to other people.
                </li>
                <li>
                  <strong>Paranoia.</strong> He cannot find the source of his
                  trouble in himself, so he looks for it outside. Anything external
                  is suspect, and he draws further into himself.
                </li>
                <li>
                  <strong>&ldquo;Dead inside&rdquo;.</strong> One rehabilitated
                  heroin addict looked at the sun and the flowers and said he did
                  not feel it inside. Addicts press their fingers deep into their
                  arms or legs to reassure themselves of their own reality.
                </li>
                <li>
                  <strong>The myth of safety.</strong> The claim that drugs are safe
                  is false. Because the side effects are not immediately apparent,
                  the user often does great harm before the warning symptoms
                  appear.
                </li>
                <li>
                  <strong>Injection and inhalation.</strong> Dirty needles and
                  unsterile solutions cause abscesses in the arms and veins. They
                  also cause liver disease, venereal disease and infection of the
                  kidneys and brain.
                </li>
                <li>
                  <strong>Nose, lungs and cells.</strong> Sniffing cocaine and
                  amphetamines damages the nose and can cause hair loss. Smoking
                  marijuana and tobacco causes lung disease, and research shows
                  that marijuana damages cells.
                </li>
                <li>
                  <strong>Organs and lifestyle.</strong> Heavy use of alcohol,
                  solvents, amphetamines or marijuana can leave the liver
                  permanently damaged. The addict&rsquo;s way of life invites
                  pneumonia, tuberculosis, malnutrition and weight loss.
                </li>
                <li>
                  <strong>Women and newborns.</strong> Babies born to women addicted
                  to opiates are likely to be born addicted and to suffer
                  withdrawal.
                </li>
                <li>
                  <strong>Overdose.</strong> An overdose of any sensual drug can
                  lead to respiratory or cardiac failure and death. The results
                  range from incidental delirious effects to general health
                  degeneration and the depletion of brain function.
                </li>
                <li>
                  <strong>Brain chemistry.</strong> Cell function depends on
                  thousands of enzymes working inside each cell. Each exposure to a
                  psychoactive drug reinforces or shifts the dominance of cell
                  pathways and hookups.
                </li>
                <li>
                  <strong>Toxic damage.</strong> Toxic chemicals upset the delicate
                  chemical balance of the brain&rsquo;s communication system. The
                  effect may be transitory or permanent, depending on the damage to
                  the cells.
                </li>
                <li>
                  <strong>The least understood harm.</strong> Damage to other
                  organs can be more debilitating, but brain damage is the{" "}
                  <Highlight color="pink">most subtle</Highlight>. It is also the
                  most often unrecognized and the least understood.
                </li>
              </ul>
            }
          />

          {/* Aider */}
          <div className="my-10 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex items-baseline justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
              <span className="text-sm font-extrabold tracking-tight text-foreground">
                Aider
              </span>
              <span className="t-micro">Answer kit</span>
            </div>
            <div className="px-4 pb-5 sm:px-5">{AIDER}</div>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Drug abuse attacks the brain&rsquo;s{" "}
              <Highlight color="yellow">chemically regulated controls</Highlight>{" "}
              for sensations, moods and thoughts. The result is diminishing
              pleasure, sensory deprivation, personality change, organ damage and
              death. The greatest danger is the{" "}
              <strong>damage that goes unrecognized</strong> until the warning
              symptoms arrive.
            </KeyPoint>
          </div>

          <div id="read-and-respond-section" className="mt-14">
            <ReadRespond items={QA_ITEMS} />
          </div>
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
        </div>
      )}
    </div>
  );
}
