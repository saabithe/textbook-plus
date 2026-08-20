"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question: "Why do people believe in drugs?",
    answer: (
      <>
        Excitement over what drugs can do has led people to believe that any
        ailment, infective or psychic, can be relieved by taking a pill. At the
        first sign of nervousness, they try{" "}
        <Highlight color="yellow">pep pills</Highlight>. Medical journals
        advertise tranquilizers and amphetamines, and doctors prescribe them,
        creating an atmosphere where drug abuse spreads.
      </>
    ),
  },
  {
    question: "What is the danger of over-dependence on drugs?",
    answer: (
      <>
        When people become dependent on drugs to solve their problems, they
        lose the capacity to deal with life&rsquo;s situations through{" "}
        <Highlight color="pink">perseverance, self-discipline, and mental
        effort</Highlight>. It becomes &ldquo;naive&rdquo; to expend energy
        on solving a problem when there is an easy way out.
      </>
    ),
  },
  {
    question: "What is Hippocrates' chief contribution?",
    answer: (
      <>
        Hippocrates recognized that a remedy must account for not only the
        disease symptoms but also the{" "}
        <Highlight color="blue">constitution and habits of the patient</Highlight>.
        His principle: the medicine must specifically suit both disease and
        patient, and a healthy person cannot benefit from taking drugs.
      </>
    ),
  },
  {
    question: "What is the distinction between medicines and sensual drugs?",
    answer: (
      <>
        Medicines treat specific disorders and have restorative effects.
        Sensual drugs are those the body has no need for but that give the user
        a strong sense of{" "}
        <Highlight color="yellow">pleasure</Highlight>. They activate the
        brain&rsquo;s pleasure centres through direct stimulation or chemical
        mimicry.
      </>
    ),
  },
  {
    question: "How do sensual drugs act on the human body?",
    answer: (
      <>
        Sensual drugs activate the brain&rsquo;s{" "}
        <Highlight color="blue">pleasure centres</Highlight>. The brain
        governs sensations, moods, thoughts, and actions through incredibly
        complex chemically regulated controls. These are easily upset by
        sensual drugs, weakening the pleasure reflexes through artificial
        stimulation.
      </>
    ),
  },
  {
    question: "What is the danger of severe addiction?",
    answer: (
      <>
        In severe addiction, the pleasure mechanisms fail to respond to drug
        stimulation. The drug then imparts only{" "}
        <Highlight color="pink">relative relief from misery</Highlight> and
        suspends the illness of withdrawal. The brain can no longer evaluate
        sensory information and interpret it as pleasurable.
      </>
    ),
  },
  {
    question: "Why does the craving for sensual drugs persist in an addict?",
    answer: (
      <>
        The craving for lost sensations explains the addict&rsquo;s need to
        continue seeking drug-induced sensations. Sensory deprivation manifests
        as physical discomfort and personality changes &mdash; the addict feels
        <Highlight color="yellow"> &ldquo;dead inside&rdquo;</Highlight> and
        presses fingers into arms or legs to reassure himself of his own
        reality.
      </>
    ),
  },
  {
    question: "Name some drug-related health disorders.",
    answer: (
      <>
        Dirty needles cause abscesses, liver disease, venereal disease, and
        kidney/brain infections. Sniffing damages nose tissue. Smoking causes
        lung diseases. Heavy use damages livers. Babies of addicted women are
        likely born addicted. Cocaine causes{" "}
        <Highlight color="pink">hair loss</Highlight>. Overdose leads to
        respiratory or cardiac failure and death.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "medicines-vs-sensual-drugs",
    title: "Medicines vs. Sensual Drugs",
    content: (
      <>
        <Callout type="important">
          <p>
            Jones draws a sharp line between{" "}
            <Highlight color="blue">medicines</Highlight> (which treat specific
            disorders with restorative effects) and{" "}
            <Highlight color="pink">sensual drugs</Highlight> (which the body
            has no need for but which give pleasure). The distinction rests on
            Hippocrates&rsquo; principle: a healthy person cannot benefit from
            taking drugs.
          </p>
        </Callout>
        <p>
          Sensual drugs activate the brain&rsquo;s pleasure centres through
          direct stimulation or chemical mimicry. But each exposure weakens the
          pleasure reflexes. The brain&rsquo;s chemically regulated controls
          &mdash; governing sensations, moods, thoughts, and actions &mdash;
          are easily upset. Over time, the addict feels less and less
          satisfaction, and the drug provides only{" "}
          <Highlight color="yellow">relative relief from withdrawal</Highlight>.
        </p>
      </>
    ),
  },
  {
    id: "effects-on-the-brain",
    title: "Effects on the Brain",
    content: (
      <>
        <p>
          The brain governs all mental functions through an{" "}
          <Highlight color="blue">incredibly complex series of chemically
          regulated controls</Highlight>. Sensual drugs disrupt these controls.
          Cell function depends on thousands of enzymes; each exposure to
          psychoactive drugs alters cell chemistry and can damage cell tissue.
        </p>
        <Expandable title="The Addict's Sensory Deprivation">
          <ul className="space-y-2 text-foreground/90 text-[0.95rem] leading-[1.75]">
            <li>
              The addict feels <strong>depressed</strong> and fails to respond
              to his environment or other people.
            </li>
            <li>
              His mental disturbance resembles{" "}
              <Highlight color="yellow">paranoia</Highlight> &mdash; he
              suspects everything external and draws further into himself.
            </li>
            <li>
              He can lose his sense of being alive, feeling &ldquo;dead
              inside.&rdquo;
            </li>
            <li>
              One rehabilitated addict described it: &ldquo;The sun is shining,
              the flowers are in bloom, I know these are signs of a good day,
              but I don&rsquo;t feel it in here.&rdquo;
            </li>
            <li>
              Addicts habitually press their fingers deep into their arms or
              legs to reassure themselves of their own reality.
            </li>
          </ul>
        </Expandable>
      </>
    ),
  },
  {
    id: "health-consequences",
    title: "Health Consequences",
    content: (
      <>
        <p>
          Drug-related health disorders are many and varied. Dirty needles cause{" "}
          <Highlight color="pink">abscesses, liver disease, venereal disease,
          and kidney/brain infections</Highlight>. Sniffing cocaine damages
          nose tissue. Marijuana and tobacco smoking cause lung diseases.
          Heavy users of alcohol or solvents may suffer permanent liver
          damage.
        </p>
        <p>
          Babies born to addicted mothers are likely born addicted and suffer
          withdrawal symptoms. Cocaine and amphetamines cause hair loss.
          Recent research indicates marijuana can damage cells. A drug
          user&rsquo;s lifestyle makes him more susceptible to pneumonia,
          tuberculosis, malnutrition, and weight loss. Overdose of any sensual
          drug can lead to{" "}
          <Highlight color="yellow">respiratory or cardiac failure and
          death</Highlight>.
        </p>
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
            <AuthorCard name="Hardin Blair Jones" />
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
            <Highlight color="yellow">Hardin Blair Jones</Highlight> (1914-1978),
            a professor of medical physics and physiology at the University of
            California, Berkeley. The article is a timely warning to modern
            society about the consequences of drug abuse.
          </p>
          <p>
            Jones draws on medical history, neuroscience, and clinical
            observation to distinguish between{" "}
            <Highlight color="blue">legitimate medicine</Highlight> and{" "}
            <Highlight color="pink">sensual drugs</Highlight>, arguing that
            the greatest danger of drug abuse lies in its subtle, often
            unrecognized damage to the brain.
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
                  <strong>Author</strong>: Hardin Blair Jones &mdash; professor
                  of medical physics, UC Berkeley.
                </li>
                <li>
                  <strong>Core distinction</strong>: Medicines treat disorders;
                  sensual drugs give{" "}
                  <Highlight color="yellow">pleasure the body doesn&rsquo;t
                  need</Highlight>.
                </li>
                <li>
                  <strong>Hippocrates&rsquo; principle</strong>: Medicine must
                  suit disease and patient; healthy people cannot benefit from
                  drugs.
                </li>
                <li>
                  <strong>Brain damage</strong>: Drugs disrupt chemically
                  regulated controls; pleasure reflexes weaken over time.
                </li>
                <li>
                  <strong>Consequences</strong>: Sensory deprivation,
                  paranoia, personality changes, organ damage, death.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Jones opens by noting that excitement over drugs has created
                  a culture where people believe any ailment can be cured by a
                  pill. This atmosphere has spread{" "}
                  <Highlight color="yellow">drug abuse</Highlight>. When people
                  depend on drugs, they lose the capacity for perseverance,
                  self-discipline, and mental effort.
                </li>
                <li>
                  He traces medical drug use back 23 centuries to{" "}
                  <strong>Hippocrates</strong>, who established that medicine
                  must suit both disease and patient, and that healthy people
                  cannot benefit from drugs. The distinction between medicine
                  and sensual drugs is simple: sensual drugs give pleasure the
                  body has no need for.
                </li>
                <li>
                  Sensual drugs activate the brain&rsquo;s pleasure centres
                  through direct stimulation or chemical mimicry. The brain&rsquo;s
                  complex chemically regulated controls are easily upset.
                  Pleasure reflexes weaken with each exposure. In severe
                  addiction, the drug provides only{" "}
                  <Highlight color="pink">relief from withdrawal</Highlight>.
                </li>
                <li>
                  The addict experiences sensory deprivation: depression,
                  paranoia, loss of feeling alive. One rehabilitated addict
                  described looking at sunshine and flowers: &ldquo;I know these
                  are signs of a good day, but I don&rsquo;t feel it in
                  here.&rdquo;
                </li>
                <li>
                  Health consequences range from abscesses and liver damage to
                  respiratory failure and death. Brain damage is the{" "}
                  <Highlight color="blue">most subtle and least
                  understood</Highlight> consequence &mdash; harm often goes
                  unrecognized until warning symptoms appear.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>The culture of drug dependence</strong>: Jones opens
                  with a critique of modern society&rsquo;s relationship with
                  drugs. Medical journals advertise tranquilizers and
                  amphetamines; the public expects miracles. It is
                  &ldquo;naive&rdquo; to expend energy on solving problems
                  when there is an easy way out. This creates a{" "}
                  <Highlight color="yellow">slippery slope</Highlight> from
                  &ldquo;look what drugs do for me when I feel depressed&rdquo;
                  to &ldquo;imagine what drugs can do when I feel good
                  already.&rdquo;
                </li>
                <li>
                  <strong>Hippocrates&rsquo; framework</strong>: Jones grounds
                  his argument in 23 centuries of medical tradition.
                  Hippocrates established that a remedy must account for
                  disease symptoms and the patient&rsquo;s constitution. The
                  correlative principle: a healthy person cannot benefit from
                  drugs. This framework is the article&rsquo;s{" "}
                  <Highlight color="blue">intellectual foundation</Highlight>.
                </li>
                <li>
                  <strong>How drugs hijack the brain</strong>: Sensual drugs
                  activate pleasure centres through direct stimulation or
                  chemical mimicry. The brain&rsquo;s complex chemically
                  regulated controls &mdash; governing sensations, moods,
                  thoughts, and actions &mdash; are easily upset. Each
                  exposure alters cell chemistry and can damage cell tissue.
                  The pleasure reflexes weaken; satisfaction diminishes.
                </li>
                <li>
                  <strong>Sensory deprivation</strong>: The addict feels
                  depressed, fails to respond to environment or people, and
                  develops paranoia-like symptoms. He suspects everything
                  external. One addict described the horror: &ldquo;The sun
                  is shining, the flowers are in bloom...but I don&rsquo;t
                  feel it in here.&rdquo; Addicts press fingers into their
                  arms to reassure themselves of their own reality &mdash; a
                  desperate attempt to feel something.
                </li>
                <li>
                  <strong>Health consequences</strong>: Dirty needles cause
                  abscesses, liver disease, venereal disease, kidney/brain
                  infections. Sniffing damages nose tissue. Smoking causes
                  lung diseases. Heavy users suffer permanent liver damage.
                  Babies of addicted women are born addicted. Overdose leads
                  to <Highlight color="pink">respiratory or cardiac failure
                  and death</Highlight>.
                </li>
                <li>
                  <strong>The invisible damage thesis</strong>: Jones&rsquo;
                  core argument: brain damage from drugs is the most subtle,
                  most often unrecognized, and least understood consequence.
                  Harmful side effects are not immediately apparent. The user
                  may do great harm before warning symptoms occur. This is
                  the article&rsquo;s most urgent warning.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="artificial-vs-natural"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Artificial vs. Natural Pleasure
            </h3>
            <p>
              Jones contrasts drug-induced pleasure with naturally attained
              pleasures, which &ldquo;enlarge the sense of satisfaction and can be
              repeated indefinitely.&rdquo; Drugs offer diminishing returns &mdash;
              each dose requires more for less satisfaction. Natural pleasures{" "}
              <Highlight color="green">grow stronger</Highlight> with repetition.
            </p>
            <h3
              id="loss-of-agency"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Loss of Agency
            </h3>
            <p>
              The addict loses the capacity to deal with life through{" "}
              <Highlight color="yellow">perseverance and self-discipline</Highlight>.
              The article argues that over-dependence on drugs makes people
              incapable of facing challenges without chemical assistance &mdash;
              a fundamental loss of human agency.
            </p>
            <h3
              id="invisible-damage"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Invisible Damage
            </h3>
            <p>
              Jones emphasizes that brain damage from drugs is{" "}
              <Highlight color="pink">the most subtle, most often unrecognized,
              and least understood</Highlight> consequence. Harmful side effects
              are not immediately apparent, meaning users may do themselves great
              harm before warning symptoms occur.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Drug abuse attacks the brain&rsquo;s{" "}
              <Highlight color="yellow">chemically regulated controls</Highlight>{" "}
              for sensations, moods, and thoughts. The result is diminishing
              pleasure, sensory deprivation, personality changes, and ultimately
              death. Jones&rsquo; article warns that the greatest danger is the{" "}
              <strong>invisible, cumulative damage</strong> &mdash; harm that is
              often unrecognized until it is too late.
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
