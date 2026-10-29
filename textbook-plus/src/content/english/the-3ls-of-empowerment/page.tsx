"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { Expandable } from "@/components/content/Expandable";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";
import { TableCard } from "@/components/content/data/TableCard";

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
          id="emancipation"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          What Emancipation Means Here
        </h3>
        <p>
          Emancipation is the act of setting someone free from legal, social,
          political or economic restrictions, bondage or control, so that they
          gain independence and equal rights.
        </p>
        <p>
          In this speech it means breaking the{" "}
          <Highlight color="pink">shackles of social exclusion</Highlight>{" "}
          through the three Ls: <strong>Learning</strong> (education),{" "}
          <strong>Labour</strong> (equal employment and fair wages) and{" "}
          <strong>Leadership</strong> (a share in the decisions that shape her
          life).
        </p>

        <h3
          id="learning"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Learning
        </h3>
        <p>
          Education is the{" "}
          <Highlight color="blue">foundation</Highlight> upon which all
          socio-economic change is built. Learning lets women help themselves
          and break free of exclusion and social taboo.
        </p>
        <p>
          The African adage captures the reach of that change:{" "}
          <em>&ldquo;If you educate a boy, you train a man. If you educate a
          girl, you train a village.&rdquo;</em>
        </p>
        <p>
          The benefit is wider than the individual. An educated woman uplifts
          her whole family and community, so one classroom frees far more than
          one life.
        </p>

        <h3
          id="labour"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Labour
        </h3>
        <p>
          Labour lets women flourish, earn for themselves and reach their true
          potential. At present they stay confined to{" "}
          <strong>low-paying, low-status, low-security</strong> jobs, and
          globally they earn only{" "}
          <Highlight color="pink">three-quarters</Highlight> of what men earn in
          the same occupation with the same education.
        </p>
        <p>
          The remedy is{" "}
          <strong>&ldquo;equal pay for equal work&rdquo;</strong> plus legal and
          policy reform: property and inheritance laws that do not
          discriminate, support for health care and education, and greater
          access to credit so women can reach financial independence. Closing
          the gap also lifts a nation&rsquo;s per capita income.
        </p>

        <h4 className="!mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
          How Can We Promote More Opportunities for Women in the Workplace?
        </h4>
        <ul className="list-disc space-y-1.5 ps-5">
          <li>
            <strong>Enforce &ldquo;equal pay for equal work&rdquo;</strong>{" "}
            &mdash; set the basic norm that the same job pays the same wage.
          </li>
          <li>
            <strong>Reform discriminatory laws</strong> &mdash; property and
            inheritance rules must not favour men.
          </li>
          <li>
            <strong>Expand access to credit</strong> &mdash; loans that let a
            woman start, own and grow her own work.
          </li>
          <li>
            <strong>Support health and education policies</strong> &mdash;
            services that keep women well enough and skilled enough to work.
          </li>
          <li>
            <strong>Prevent exploitative labour</strong> &mdash; use education
            and training to move women out of low-paying, low-status,
            low-security jobs.
          </li>
        </ul>

        <h3
          id="leadership"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Leadership
        </h3>
        <p>
          Leadership lets women rise and use their inborn abilities. In office
          they decide through{" "}
          <Highlight color="green">consensus-building, inclusion, compassion</Highlight>{" "}
          and a focus on long-term sustainability.
        </p>
        <p>
          What holds them back is confidence, not competence: women often lack
          the confidence to match what they can do. Lagarde asks them to reset
          the narrative in their favour and to{" "}
          <strong>&ldquo;dare the difference&rdquo;</strong> &mdash; take risks
          and step outside their comfort zones.
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
    id: "education-key-to-women-empowerment",
    title: "Education is the Key to Women Empowerment",
    content: (
      <>
        <p>
          A write-up for the question that asks you to argue that education is
          the key to women&rsquo;s empowerment. Every claim is backed from
          Lagarde&rsquo;s speech, so the three Ls do the arguing.
        </p>

        <div className="mt-6 space-y-4 border-l-2 border-border/70 pl-5">
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Empowering women is an urgent need of the hour in every modern
            society. Across the world, social reformers and leaders strive to
            dismantle long-standing gender disparities, yet women often remain
            blocked from contributing their true potential.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Although women constitute half the global population, they
            contribute far less than 50 per cent of economic activity, causing
            per capita income in several nations to lag significantly.
            Overcoming these socio-cultural barriers requires opening the doors
            of opportunity, and education is the primary key to that liberation.
          </p>

          <h4 className="!mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            1. Education as the Foundation of Change
          </h4>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            As Christine Lagarde emphasises in &ldquo;The 3Ls of
            Empowerment&rdquo;, learning is the indispensable foundation upon
            which any meaningful change is built. It enables women to help
            themselves and break free from the shackles of social exclusion and
            socio-cultural taboos.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            The transformative power of educating women extends far beyond the
            individual.
          </p>
          <blockquote className="my-4 rounded-r-xl border-l-2 border-border bg-muted/20 py-2 pl-4 pr-4">
            <p className="italic text-foreground/80">
              &ldquo;If you educate a boy, you train a man. If you educate a
              girl, you train a village.&rdquo;
            </p>
          </blockquote>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            When a woman is educated, her knowledge uplifts her entire family
            and community.
          </p>

          <h4 className="!mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            2. Facilitating Workplace Equality and Economic Independence
          </h4>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Education is the gateway to labour and economic participation. At
            present, even educated women in the workforce face systemic
            inequities: globally, women earn only{" "}
            <Highlight color="pink">three-quarters</Highlight> of what men earn
            for the same level of education and occupation.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Education gives women the awareness and the bargaining power to
            demand <strong>&ldquo;equal pay for equal work&rdquo;</strong>, so
            that the same job pays the same wage and the gap becomes a rule to
            enforce rather than a grievance to endure.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            It also gives them the standing to challenge the laws that keep them
            poor. Property and inheritance rules that pass land and wealth to
            men can be rewritten, and access to credit can turn a dependent
            woman into an employer.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Health care and education policies matter just as much, because a
            woman who is unwell or unschooled cannot compete for skilled work.
            Training completes the work, moving her out of low-paying,
            low-status, low-security jobs and into work that matches her
            ability.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Eliminating these gaps in economic participation directly boosts a
            nation&rsquo;s per capita income.
          </p>

          <h4 className="!mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            3. Unlocking Leadership and Confidence
          </h4>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Beyond literacy, education fosters leadership, enabling women to
            rise and fulfil their innate talents. Educated women leaders
            prioritise decisions grounded in consensus-building, inclusion,
            compassion and long-term sustainability.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Confidence is the hinge, because Lagarde observes that women
            sometimes{" "}
            <Highlight color="yellow">lack the confidence to match their
            competence</Highlight>. That is a comment on the world, not on women
            &mdash; the ability is already there, and only the belief in it is
            missing.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            So how is that belief built? Education builds it by giving a woman
            proof of her own competence, and by placing before her the example
            of women who have already led.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            The rest is practice: reset the narrative in her favour, encourage
            her to step outside her comfort zone, and let her take the risk her
            ability has already earned &mdash; to &ldquo;dare the
            difference&rdquo;.
          </p>

          <h4 className="!mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            4. Educated Women Build a Strong Nation
          </h4>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            The argument does not stop at the individual woman, because an
            educated and empowered woman builds a strong nation. When half the
            population is schooled, employed and heard, a country gains a
            workforce, a tax base and a pool of leaders it would otherwise have
            lost.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Her influence reaches past her own household as well. Educated
            mothers raise healthier, better-schooled children, so one
            generation&rsquo;s learning becomes the next generation&rsquo;s
            head start.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Her way of leading strengthens institutions too, because a nation
            that plans for the long term and includes everyone in the decision
            is a nation that lasts. This is what Lagarde means when she says the
            world will reap the benefits.
          </p>

          <h4 className="!mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
            Conclusion
          </h4>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            Creating a world where every woman can realise her full potential
            without impediment or prejudice requires an unwavering commitment
            to female education.
          </p>
          <p className="text-foreground/90 text-[1.0625rem] leading-[1.75]">
            By treating education not as a luxury but as a fundamental right,
            society ensures that women break through historical barriers and
            lead the world toward sustainable progress.
          </p>
        </div>

        <Expandable title="Turning the Write-up into a Speech" variant="example">
          <p>
            If the question asks for a speech, the argument does not change
            &mdash; only the voice does. A write-up reports; a speech speaks to
            someone in the room.
          </p>

          <TableCard
            title="Seven moves from page to stage"
            headers={["Move", "What changes", "Example"]}
            rows={[
              {
                cells: [
                  "Salutation",
                  "Greet the room before any argument",
                  "\u201cRespected Principal, teachers and my dear friends, good morning\u201d",
                ],
              },
              {
                cells: [
                  "Hook",
                  "Open with the statistic, not the definition",
                  "\u201cHalf the world is women; less than half the world\u2019s paid work is theirs\u201d",
                ],
              },
              {
                cells: [
                  "Thesis",
                  "One sentence naming the key, stated as your stand",
                  "\u201cI stand here to say that education is that key\u201d",
                ],
              },
              {
                cells: [
                  "Signposts",
                  "Number the four points aloud so the audience can follow",
                  "\u201cFirst, the foundation; second, equality; third, leaders; fourth, a strong nation\u201d",
                ],
              },
              {
                cells: [
                  "Evidence aloud",
                  "Slow down on numbers and put them in human terms",
                  "\u201cThree-quarters means 75 paise for every rupee a man earns\u201d",
                ],
              },
              {
                cells: [
                  "&ldquo;We&rdquo;, not &ldquo;women&rdquo;",
                  "Bring the audience inside the argument",
                  "\u201cWhen we educate our daughters, we train a village\u201d",
                ],
              },
              {
                cells: [
                  "Call and close",
                  "Give one task, then thank the audience",
                  "\u201cKeep one girl in school. If we dare the difference, the difference will deliver.\u201d",
                ],
              },
            ]}
          />

          <p>
            <strong>Opening, spoken:</strong> Respected Principal, teachers and
            my dear friends, good morning.
          </p>
          <p>
            Half the people in this world are women, yet they do less than half
            of the world&rsquo;s paid work.
          </p>
          <p>
            I stand before you today to say that the key to that locked door is
            education.
          </p>
          <p>
            <strong>Closing, spoken:</strong> So I ask you one thing &mdash;
            keep one girl in school.
          </p>
          <p>
            When we educate our daughters, we train a village, and if we dare
            the difference, the difference will deliver.
          </p>
          <p>Thank you.</p>

          <KeyPoint title="Keep the register spoken">
            Short sentences, one idea each, and a pause after every statistic.
            Read the write-up aloud once before the exam &mdash; anything you
            cannot say in one breath is written, not spoken.
          </KeyPoint>
        </Expandable>
      </>
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
            <ChapterIntro author="Christine Lagarde" role="Speaker" genre="Speech" />
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
            <strong>International Monetary Fund (IMF)</strong>. The speech
            outlines three essential pillars for empowering women in the{" "}
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
                  <strong>Speaker</strong>: Christine Lagarde &mdash; first woman
                  Finance Minister of a G8 economy, former head of the IMF.
                </li>
                <li>
                  <strong>Problem</strong>: women are half the world&rsquo;s
                  population but contribute far less than half of economic
                  activity, so per capita income lags.
                </li>
                <li>
                  <strong>3 Ls</strong>:{" "}
                  <Highlight color="yellow">Learning</Highlight> (education),{" "}
                  <Highlight color="blue">Labour</Highlight> (equal pay for equal
                  work), <Highlight color="green">Leadership</Highlight>{" "}
                  (decision-making roles).
                </li>
                <li>
                  <strong>Key quote</strong>: &ldquo;If you educate a girl, you train a
                  village.&rdquo; (African adage used in the speech)
                </li>
                <li>
                  <strong>Key statistic</strong>: Women earn only{" "}
                  <Highlight color="pink">three-quarters</Highlight> of what men earn for
                  the same education and occupation.
                </li>
                <li>
                  <strong>Theme</strong>: Gender equality is not charity &mdash; it is an{" "}
                  <Highlight color="yellow">economic imperative</Highlight> that benefits
                  the entire world.
                </li>
                <li>
                  <strong>Call to action</strong>: &ldquo;If we dare the difference,
                  the difference will deliver.&rdquo;
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Lagarde opens in the 21st century, where women are half the
                  population but contribute far less than half of economic
                  activity, so per capita income lags wherever equal opportunity
                  is denied. She asks for a{" "}
                  <strong>concerted effort</strong> to open doors through the 3
                  Ls.
                </li>
                <li>
                  <strong>Learning</strong>: education is the foundation of all
                  change. It helps women help themselves and break the{" "}
                  <Highlight color="blue">shackles of social exclusion</Highlight>
                  , and the African adage &mdash; &ldquo;educate a girl, train a
                  village&rdquo; &mdash; says the benefit reaches her family and
                  her community.
                </li>
                <li>
                  <strong>Labour</strong>: work lets women flourish, but they stay
                  trapped in low-paying, low-status, low-security jobs and earn
                  only three-quarters of what men earn for the same work.
                  Lagarde demands{" "}
                  <Highlight color="green">equal pay for equal work</Highlight>{" "}
                  and reforms in property and inheritance law, health care and
                  education policy, and access to credit.
                </li>
                <li>
                  <strong>Leadership</strong>: women lead through consensus,
                  inclusion, compassion and long-term sustainability. The paradox
                  is that confidence lags behind{" "}
                  <Highlight color="pink">competence</Highlight> &mdash; women
                  perform as well as men yet hesitate to claim it, so the gap is
                  systemic, not personal.
                </li>
                <li>
                  She closes with a world where every woman reaches her potential
                  without impediment or prejudice, and with the refrain
                  &ldquo;dare the difference&rdquo; &mdash; take the risk, and
                  the difference will deliver.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Speaker authority</strong>: Christine Lagarde was the first
                  woman Finance Minister of a G8 economy (France) and the first woman
                  to head the International Monetary Fund. Her personal experience in
                  global economic policy lends{" "}
                  <Highlight color="yellow">credibility</Highlight> to every claim in the
                  speech. She speaks not as an activist but as someone who has seen the
                  economic cost of excluding women firsthand.
                </li>
                <li>
                  <strong>The problem she names</strong>: Women are half the
                  world&rsquo;s population but contribute far less than 50 per cent of
                  economic activity, so per capita income{" "}
                  <Highlight color="pink">lags</Highlight> in nations that deny them
                  equal opportunity. This is an economic argument before it is a moral
                  one &mdash; the world is leaving wealth on the table. The remedy is a{" "}
                  <strong>concerted global effort</strong> built on the 3 Ls.
                </li>
                <li>
                  <strong>Learning &mdash; the foundation</strong>: Education is the
                  primary ground on which all other change is built. It lets women help
                  themselves and break the{" "}
                  <Highlight color="blue">shackles of social exclusion</Highlight>, a
                  metaphor that frames exclusion as imprisonment. The African adage
                  &mdash; &ldquo;If you educate a boy, you train a man. If you educate a
                  girl, you train a village&rdquo; &mdash; widens the claim: her
                  learning lifts her family and her community, not only herself.
                </li>
                <li>
                  <strong>Labour &mdash; the workplace</strong>: Work lets women
                  flourish and reach their true potential, yet they are trapped in{" "}
                  <strong>low-paying, low-status, low-security</strong> jobs. Globally
                  they earn only{" "}
                  <Highlight color="pink">three-quarters</Highlight> of what men earn
                  even with the same education in the same occupation. Lagarde demands{" "}
                  <strong>&ldquo;equal pay for equal work&rdquo;</strong> and names the
                  structures to reform: discriminatory property and inheritance laws,
                  health care and education policies, and greater access to credit.
                  Closing the gender gap would itself raise per capita income.
                </li>
                <li>
                  <strong>Leadership &mdash; rising to talent</strong>: Leadership lets
                  women rise and use their inborn abilities. In office they decide
                  through{" "}
                  <Highlight color="green">consensus-building, inclusion, compassion</Highlight>{" "}
                  and a focus on long-term sustainability &mdash; a distinct
                  contribution, not a softer version of male leadership.
                </li>
                <li>
                  <strong>Confidence against competence</strong>: Women often perform
                  as well as or better than men, yet lack the confidence to claim it, so
                  the shortfall is{" "}
                  <Highlight color="yellow">systemic, not personal</Highlight>. The
                  answer is to reset the narrative in women&rsquo;s favour, not to fix
                  women.
                </li>
                <li>
                  <strong>&ldquo;Dare the difference&rdquo;</strong>: The closing
                  imperative asks women to take risks and step outside their comfort
                  zones. Its full form &mdash; &ldquo;If we dare the difference, the
                  difference will deliver&rdquo; &mdash; turns the slogan into a{" "}
                  <Highlight color="green">promise</Highlight>: after law and education,
                  courage is the last barrier.
                </li>
                <li>
                  <strong>Vision and architecture</strong>: The speech ends with a world
                  where every woman meets her potential &ldquo;without impediment or
                  prejudice&rdquo;, and society reaps the benefit. The 3 Ls form a
                  progression &mdash; education creates opportunity, equal work creates
                  wealth, leadership creates change &mdash; and the call is addressed to
                  governments, institutions and individuals at once.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
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
              <strong>low-paying, low-status, low-security jobs</strong>.
            </p>
            <p>
              Lagarde frames this not as a women&rsquo;s issue alone but as an
              economic crisis: per capita income suffers when half the population
              is denied equal opportunity.
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
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Women&rsquo;s empowerment rests on{" "}
              <Highlight color="yellow">Learning, Labour, and Leadership</Highlight>{" "}
              &mdash; the 3 Ls. Education is the foundation, economic participation
              is the pathway, and leadership is the goal. Creating a world where
              all women meet their potential without impediment or prejudice is
              not just a moral imperative &mdash;{" "}
              <strong>the world will reap the benefits</strong>.
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
