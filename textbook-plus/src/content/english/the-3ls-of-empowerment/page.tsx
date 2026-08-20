"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question: "What are the three essential factors for empowerment?",
    answer: (
      <>
        The three essential factors, which Lagarde calls the{" "}
        <Highlight color="yellow">3 Ls</Highlight>, are{" "}
        <strong>Learning</strong> (education),{" "}
        <strong>Labour</strong> (economic participation), and{" "}
        <strong>Leadership</strong> (decision-making power). Together they open
        the door to opportunity for women worldwide.
      </>
    ),
  },
  {
    question: "What is the role of learning in empowering women?",
    answer: (
      <>
        Education is the{" "}
        <Highlight color="blue">foundation</Highlight> upon which all change is
        built. Learning helps women to help themselves and{" "}
        <Highlight color="pink">break the shackles of exclusion</Highlight>. As
        the African adage puts it: &ldquo;If you educate a boy, you train a man.
        If you educate a girl, you train a village.&rdquo;
      </>
    ),
  },
  {
    question: "How can we promote more opportunities for women in the workplace?",
    answer: (
      <>
        By <Highlight color="green">changing laws</Highlight> &mdash; ensuring
        property and inheritance laws do not discriminate against women, policies
        that encourage education and health care, and{" "}
        <strong>greater access to credit</strong> so women can achieve economic
        independence. &ldquo;Equal pay for equal work&rdquo; must become the
        norm.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "the-three-ls",
    title: (
      <>
        The <Highlight color="yellow">3 Ls</Highlight> of Empowerment
      </>
    ),
    content: (
      <>
        <Callout type="important">
          <p>
            Lagarde&rsquo;s central argument: women&rsquo;s economic empowerment
            rests on three pillars &mdash;{" "}
            <Highlight color="blue">Learning</Highlight>,{" "}
            <Highlight color="green">Labour</Highlight>, and{" "}
            <Highlight color="yellow">Leadership</Highlight>. Together, they
            open the door to a world where all women meet their potential
            without impediment or prejudice.
          </p>
        </Callout>

        <h3
          id="learning"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Learning
        </h3>
        <p>
          Education is the{" "}
          <Highlight color="blue">foundation</Highlight> upon which any change
          is built. Learning helps women to help themselves and break the
          shackles of exclusion. An African adage captures the idea:{" "}
          <em>&ldquo;If you educate a boy, you train a man. If you educate a
          girl, you train a village.&rdquo;</em>
        </p>

        <h3
          id="labour"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Labour
        </h3>
        <p>
          Labour facilitates women to flourish and achieve their true potential.
          But women earn only{" "}
          <Highlight color="pink">three-quarters</Highlight> as much as men,
          even with the same education in the same occupation. Lagarde calls
          for &ldquo;equal pay for equal work&rdquo; and outlines practical
          steps: change property and inheritance laws, provide greater access
          to credit, and ensure policies that encourage education and health
          care.
        </p>

        <h3
          id="leadership"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Leadership
        </h3>
        <p>
          Women lead through{" "}
          <Highlight color="green">consensus-building, inclusion, compassion</Highlight>,
          and a focus on long-term sustainability. Yet they sometimes lack the
          confidence to match their competence. Lagarde urges women to{" "}
          <strong>&ldquo;dare the difference&rdquo;</strong> &mdash; step
          outside comfort zones, take risks, and reset the narrative in their
          favour.
        </p>

        <Expandable title="Key Statistics">
          <ul className="space-y-2 text-foreground/90 text-[0.95rem] leading-[1.75]">
            <li>
              Women represent <strong>half the world&rsquo;s population</strong>{" "}
              but contribute far less than 50 per cent of economic activity.
            </li>
            <li>
              Globally, women earn only{" "}
              <Highlight color="yellow">three-quarters</Highlight> as much as
              men with the same education and in the same occupation.
            </li>
            <li>
              Eliminating gender gaps in economic participation can bring an{" "}
              <strong>increase in per capita income</strong>.
            </li>
          </ul>
        </Expandable>
      </>
    ),
  },
  {
    id: "themes",
    title: "Themes",
    content: (
      <>
        <h3
          id="economic-inequality"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Economic Inequality
        </h3>
        <p>
          The speech exposes the{" "}
          <Highlight color="pink">persistent gap</Highlight> between men and
          women in the workplace. Despite equal education, women are trapped in{" "}
          <strong>low-paying, low-status, low-security jobs</strong>. Lagarde
          frames this not as a women&rsquo;s issue alone but as an economic
          crisis: per capita income suffers when half the population is denied
          equal opportunity.
        </p>

        <h3
          id="confidence-gap"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Confidence Gap
        </h3>
        <p>
          Lagarde acknowledges that women sometimes{" "}
          <Highlight color="yellow">lack the confidence</Highlight> to match
          their competence. The solution is twofold: women must &ldquo;dare the
          difference&rdquo; and step outside comfort zones, while society must
          remove the{" "}
          <Highlight color="blue">barriers</Highlight> &mdash; whether
          providing primary education in villages or executive positions in
          business.
        </p>

        <h3
          id="dare-the-difference"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Dare the Difference
        </h3>
        <p>
          The speech&rsquo;s closing call to action:{" "}
          <strong>&ldquo;If we dare the difference, the difference will
          deliver.&rdquo;</strong> Empowerment requires both individual courage
          &mdash; taking risks, stepping outside comfort zones &mdash; and
          systemic change &mdash; laws, policies, and cultural shifts.
        </p>
      </>
    ),
  },
  {
    id: "key-takeaway",
    title: "Key Takeaway",
    content: (
      <KeyPoint title="Key Takeaway">
        Women&rsquo;s empowerment rests on{" "}
        <Highlight color="yellow">Learning, Labour, and Leadership</Highlight>{" "}
        &mdash; the 3 Ls. Education is the foundation, economic participation
        is the pathway, and leadership is the goal. Creating a world where
        all women meet their potential without impediment or prejudice is
        not just a moral imperative &mdash;{" "}
        <strong>the world will reap the benefits</strong>.
      </KeyPoint>
    ),
  },
];

export default function The3LsOfEmpowermentPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="Christine Lagarde" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>The 3Ls of Empowerment</em> is a speech by{" "}
            <Highlight color="yellow">Christine Lagarde</Highlight>, the first
            woman Finance Minister of a G8 economy and head of the{" "}
            <strong>International Monetary Fund (IMF)</strong>. Delivered at the
            National Democratic Institute, Washington DC, on 19 May 2014, the
            speech outlines three essential pillars for empowering women in the{" "}
            <Highlight color="blue">economic field</Highlight>.
          </p>
          <p>
            Lagarde argues that women remain{" "}
            <Highlight color="pink">blocked from contributing their true
            potential</Highlight>, and that this has a huge cost &mdash; per capita
            income lags in countries that deny women equal opportunity. She calls
            for a <strong>concerted effort</strong> to open doors through the{" "}
            <strong>3 Ls</strong>.
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
                  <strong>Speaker</strong>: Christine Lagarde &mdash; first woman Finance
                  Minister of a G8 economy, former head of the IMF.
                </li>
                <li>
                  <strong>3 Ls</strong>:{" "}
                  <Highlight color="yellow">Learning</Highlight> (education),{" "}
                  <Highlight color="blue">Labour</Highlight> (equal pay/work),{" "}
                  <Highlight color="green">Leadership</Highlight> (decision-making roles).
                </li>
                <li>
                  <strong>Key quote</strong>: &ldquo;If you educate a girl, you train a
                  village.&rdquo; (African adage used in the speech)
                </li>
                <li>
                  <strong>Key statistic</strong>: Women earn only{" "}
                  <Highlight color="pink">three-quarters</Highlight> of what men earn for
                  the same work.
                </li>
                <li>
                  <strong>Theme</strong>: Gender equality is not charity &mdash; it is an{" "}
                  <Highlight color="yellow">economic imperative</Highlight> that benefits
                  the entire world.
                </li>
                <li>
                  <strong>Call to action</strong>: &ldquo;Dare the difference.&rdquo;
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Lagarde opens by noting the 21st century requires{" "}
                  <Highlight color="yellow">new thinking</Highlight> on women&rsquo;s
                  economic role &mdash; they are half the population but contribute far less
                  than half of economic activity. Per capita income lags in countries that
                  deny equal opportunity.
                </li>
                <li>
                  <strong>Learning</strong>: Education is the foundation. The African adage
                  &ldquo;If you educate a girl, you train a village&rdquo; captures the
                  ripple effect. Learning helps women break free from{" "}
                  <Highlight color="blue">systemic exclusion</Highlight> &mdash; Lagarde
                  uses the metaphor &ldquo;break the shackles of exclusion&rdquo; to frame
                  lack of education as imprisonment.
                </li>
                <li>
                  <strong>Labour</strong>: Women earn only three-quarters of what men earn
                  for the same work. Lagarde demands{" "}
                  <Highlight color="green">equal pay</Highlight> and calls for specific
                  reforms: property law, inheritance law, credit access, and health care
                  laws. The pay gap is not abstract &mdash; it is a concrete, verifiable
                  fact.
                </li>
                <li>
                  <strong>Leadership</strong>: Women make decisions through consensus,
                  inclusion, and compassion. But Lagarde identifies a key paradox &mdash;
                  confidence often lags behind{" "}
                  <Highlight color="pink">competence</Highlight>. Women perform as well as
                  or better than men, yet lack the confidence to claim it. This reframes
                  the problem as systemic, not personal.
                </li>
                <li>
                  Lagarde closes with a rallying cry: create a world where every woman
                  reaches her full potential, and the world will reap the benefits. The
                  refrain &ldquo;Dare the difference&rdquo; functions as both a{" "}
                  <Highlight color="yellow">challenge and a promise</Highlight>.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Speaker authority</strong>: Christine Lagarde was the first woman
                  Finance Minister of a G8 economy (France) and the first woman to head the
                  International Monetary Fund. Her personal experience in global economic
                  policy lends{" "}
                  <Highlight color="yellow">credibility</Highlight> to every claim in the
                  speech. She speaks not as an activist but as someone who has seen the
                  economic cost of excluding women firsthand.
                </li>
                <li>
                  <strong>Economic framing</strong>: The speech opens with a striking
                  statistic &mdash; women are half the world&rsquo;s population but
                  contribute far less than 50% of economic output. Lagarde argues that per
                  capita income{" "}
                  <Highlight color="pink">lags</Highlight> in countries that deny equal
                  opportunity. This is not a moral argument &mdash; it is an economic one.
                  The world is leaving money on the table by not educating and employing
                  women fully.
                </li>
                <li>
                  <strong>Learning &mdash; the African adage</strong>: Lagarde quotes a
                  well-known African proverb: &ldquo;If you educate a boy, you train a
                  man. If you educate a girl, you train a village.&rdquo; The{" "}
                  <Highlight color="blue">parallel structure</Highlight> grounds the
                  argument in universal wisdom, not just Western policy. She uses the
                  metaphor &ldquo;break the shackles of exclusion&rdquo; &mdash; education
                  as liberation from chains, framing lack of education as a form of{" "}
                  <Highlight color="green">imprisonment</Highlight>.
                </li>
                <li>
                  <strong>Labour &mdash; statistical evidence</strong>: The three-quarters
                  pay gap is a concrete, verifiable fact that anchors the emotional
                  argument. Lagarde pairs it with{" "}
                  <Highlight color="yellow">specific reforms</Highlight>: property law,
                  inheritance law, credit access, and health care. She does not just
                  identify the problem &mdash; she names the legal structures that perpetuate
                  it. The metaphor of &ldquo;shackles&rdquo; extends from education to
                  economic dependence.
                </li>
                <li>
                  <strong>Leadership &mdash; confidence vs competence</strong>: Lagarde
                  identifies a key paradox &mdash; women often perform as well as or better
                  than men, yet lack the confidence to claim it. This reframes the problem
                  as{" "}
                  <Highlight color="yellow">systemic, not personal</Highlight>. Women are
                  not less capable; they are less encouraged. The solution is not to fix
                  women but to fix the structures that suppress their confidence.
                </li>
                <li>
                  <strong>Refrain &mdash; &ldquo;Dare the difference&rdquo;</strong>:
                  Repeated at the close, it functions as both a challenge and a promise.
                  The imperative mood makes it a{" "}
                  <Highlight color="green">call to action</Highlight>, not just an
                  observation. &ldquo;Dare&rdquo; implies risk &mdash; Lagarde acknowledges
                  that empowering women requires courage, not just policy changes.
                </li>
                <li>
                  <strong>Overall theme</strong>: Gender equality is not charity &mdash; it
                  is an economic imperative. The speech reframes empowerment as self-interest
                  for the world, not just justice for women. The 3 Ls &mdash; Learning,
                  Labour, Leadership &mdash; form a progression: education creates
                  opportunity, equal work creates wealth, and leadership creates change. The
                  speech is a{" "}
                  <Highlight color="blue">call to governments, institutions, and
                  individuals</Highlight> to dismantle the barriers that prevent women from
                  reaching their full potential.
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
