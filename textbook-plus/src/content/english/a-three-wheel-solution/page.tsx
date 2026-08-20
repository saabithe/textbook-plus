"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const DISCOURSES = [
  {
    id: "early-entrepreneurship",
    title: "Early Entrepreneurship",
    content: (
      <>
        <Callout type="important">
          <p>
            Irfan Alam showed entrepreneurial instinct from a remarkably young
            age. At <Highlight color="yellow">13</Highlight>, he started a
            portfolio management firm after advising his father&rsquo;s friends
            through the 1992 stock market scam. His thirst for water in a
            rickshaw at age 17 sparked the idea that became SammaaN &mdash; the
            very first day he earned <strong>eight rupees</strong> in profit.
          </p>
        </Callout>
        <p>
          The interview reveals how a seemingly trivial moment &mdash; a thirsty
          teenager in a rickshaw &mdash; can become the seed of a transformative
          enterprise. Irfan&rsquo;s early experience taught him to{" "}
          <Highlight color="blue">see opportunity where others saw nothing</Highlight>.
          His parents wanted him to focus on studies, but his interest in the
          rickshaw sector never waned. He kept researching throughout his college
          years in Pondicherry.
        </p>
      </>
    ),
  },
  {
    id: "sammaan-model",
    title: "The SammaaN Model",
    content: (
      <>
        <h3
          id="operation-model"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Operation Model
        </h3>
        <p>
          SammaaN&rsquo;s model is built on{" "}
          <Highlight color="green">dignity and empowerment</Highlight>. When a
          rickshaw puller joins, he receives verification, training on etiquette
          and traffic rules, bank loans for a new rickshaw, accident and health
          insurance, an ID card, and a uniform. SammaaN acts as guarantor,
          opening credit access for people the banks previously refused.
        </p>
        <h3
          id="revenue-model"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Revenue Model
        </h3>
        <p>
          SammaaN rickshaws display advertisements; revenue is split 50-50
          between the company and the puller. Pullers can also sell water, juice,
          prepaid cards, and newspapers to passengers. Passenger fares belong
          entirely to the puller. Revenues increased{" "}
          <Highlight color="yellow">30 to 40%</Highlight> for operators. Children
          and spouses attend free evening classes called SammaaN Gyaan.
        </p>
      </>
    ),
  },
  {
    id: "social-entrepreneurship",
    title: "Social Entrepreneurship",
    content: (
      <>
        <p>
          Irfan initially refused the TV show&rsquo;s seed capital because the
          organizers did not agree to his not-for-profit model. He wanted to
          provide insurance, ID cards, and uniforms &mdash; not for social
          reasons at first, but because he believed it was the{" "}
          <Highlight color="blue">best way to sustain the business</Highlight>.
          Only later, as he understood the plight of rickshaw pullers, did it
          become a social cause.
        </p>
        <p>
          There are about <strong>ten million rickshaws</strong> in India. Most
          pullers do not own their vehicles but rent them at 30 to 40 rupees per
          day &mdash; barely enough to sustain their families. Irfan drew on{" "}
          <strong>C.K. Prahalad&rsquo;s</strong> idea that businesses can succeed
          by targeting the bottom of the pyramid. SammaaN was founded in 2007
          with seed money from family and friends.
        </p>
      </>
    ),
  },
];

export default function AThreeWheelSolutionPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="Irfan Alam" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>A Three-Wheel Solution</em> is an interview with{" "}
            <Highlight color="yellow">Irfan Alam</Highlight>, the founder of the
            SammaaN Foundation, an Indian company that organizes the rickshaw
            pulling sector. The interview was given to Sujatha Ramprasad for{" "}
            <em>India Currents</em> in May 2010, after Irfan participated in the
            Entrepreneurship Summit in Washington DC.
          </p>
          <p>
            Irfan shares how a simple observation &mdash; a rickshaw puller
            unable to carry water bottles &mdash; led him to create an
            enterprise that has empowered over{" "}
            <strong>100,000 rickshaw operators</strong> across nine states in
            India. He also reveals how a reality TV show, a Nobel Laureate, and
            President Obama all played a role in his journey.
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
                  <strong>Interviewee</strong>: Irfan Alam, founder of SammaaN
                  Foundation.
                </li>
                <li>
                  <strong>Core idea</strong>: Organizing India&rsquo;s rickshaw
                  sector to{" "}
                  <Highlight color="yellow">empower pullers</Highlight> through
                  loans, insurance, and advertising revenue.
                </li>
                <li>
                  <strong>Scale</strong>: 100,000+ operators across nine states.
                </li>
                <li>
                  <strong>Revenue</strong>: 30-40% income increase for pullers;
                  SammaaN itself profitable.
                </li>
                <li>
                  <strong>Key quote</strong>: &ldquo;If we aspire to live in a
                  happier world, we must empower those living on the margins of
                  society.&rdquo;
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Irfan Alam conceived the idea at{" "}
                  <Highlight color="yellow">17</Highlight> when a rickshaw
                  puller told him he couldn&rsquo;t carry water because he had
                  no money to buy bottles. The next day, Irfan gave five
                  pullers eight bottles each and earned eight rupees in profit.
                </li>
                <li>
                  His entrepreneurial instinct showed early &mdash; at 13, he
                  started a portfolio management firm after advising his
                  father&rsquo;s friends through the 1992 stock market scam.
                </li>
                <li>
                  In 2006, Irfan won{" "}
                  <Highlight color="blue">Business Baazigar</Highlight>, a TV
                  entrepreneur hunt, with his rickshaw reorganization proposal.
                  He was offered 150 lakhs in seed money but refused when the
                  organizers rejected his not-for-profit model.
                </li>
                <li>
                  SammaaN was founded in 2007 with family and friends&rsquo;
                  money. The model: verify pullers, train them, help them get
                  bank loans, provide insurance and uniforms, and split
                  advertising revenue 50-50.
                </li>
                <li>
                  Puller revenues increased{" "}
                  <Highlight color="green">30-40%</Highlight>. Children attend
                  free SammaaN Gyaan classes. The organization itself turned
                  profitable with a net profit of eight lakh rupees.
                </li>
                <li>
                  Irfan met Nobel Laureate{" "}
                  <Highlight color="yellow">Muhammed Yunus</Highlight> at the
                  Presidential Entrepreneurship Summit and was told by President
                  Obama: &ldquo;You are doing a tougher job than me.&rdquo;
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Origin story</strong>: The interview opens with a
                  deceptively simple moment &mdash; a thirsty 17-year-old in a
                  rickshaw. The puller couldn&rsquo;t carry water because he had
                  no money to stock bottles. Irfan immediately saw a{" "}
                  <Highlight color="yellow">market opportunity</Highlight> and
                  acted the next day. This pattern of observation → action
                  defines his entire approach.
                </li>
                <li>
                  <strong>Early instinct</strong>: At 13, during the 1992 stock
                  market scam, Irfan researched companies and advised his
                  father&rsquo;s friends to recover their losses. He started a
                  portfolio management firm. When his parents discovered his
                  rickshaw involvement, they asked him to stop &mdash; but his
                  interest never waned.
                </li>
                <li>
                  <strong>Business Baazigar and the refused seed capital</strong>:
                  In 2006, Irfan won the TV show with a proposal to redesign
                  rickshaws for advertising and sell products to passengers. He
                  was offered{" "}
                  <Highlight color="blue">150 lakhs</Highlight> in seed money.
                  But he realized the entry barrier was low and the only way to
                  sustain was to earn puller loyalty through insurance, ID cards,
                  and uniforms. The organizers disagreed. Irfan refused the
                  capital.
                </li>
                <li>
                  <strong>Social mission</strong>: There are about ten million
                  rickshaws in India. Most pullers rent at 30-40 rupees per day
                  &mdash; barely enough to feed their families. Irfan drew on{" "}
                  <strong>C.K. Prahalad&rsquo;s</strong> bottom-of-pyramid
                  theory. SammaaN, founded in 2007, acts as guarantor so
                  pullers can access bank loans and eventually own their
                  vehicles.
                </li>
                <li>
                  <strong>Revenue and impact</strong>: Advertising revenue is
                  split 50-50. Pullers sell water, juice, and prepaid cards.
                  Passenger fares belong entirely to the puller. Revenue
                  increased{" "}
                  <Highlight color="green">30-40%</Highlight>. SammaaN itself
                  made a net profit of eight lakh rupees on 50 lakh revenue.
                  Free SammaaN Gyaan classes serve children and spouses.
                </li>
                <li>
                  <strong>Global recognition</strong>: At the Presidential
                  Entrepreneurship Summit in Washington DC, Irfan met Nobel
                  Laureate Muhammed Yunus, who invited him to set up a similar
                  organization in Bangladesh. President Obama told him:{" "}
                  <Highlight color="yellow">&ldquo;You are doing a tougher job
                  than me.&rdquo;</Highlight>
                </li>
                <li>
                  <strong>Advice to students</strong>: Irfan urges youth to
                  consider entrepreneurship as a career &mdash; it is an
                  important tool to tackle unemployment. He stresses that
                  dreaming is important, but so is taking{" "}
                  <Highlight color="blue">calculated risks</Highlight>.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="youth-empowerment"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Youth as Change-Makers
            </h3>
            <p>
              The interview demonstrates that age is not a barrier to impact. Irfan
              started his first firm at 13 and conceived SammaaN at 17. His advice to
              students: entrepreneurship is an important tool to tackle{" "}
              <Highlight color="yellow">unemployment</Highlight> and young people
              should think of it as a career.
            </p>
            <h3
              id="dignity-of-labour"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Dignity of Labour
            </h3>
            <p>
              SammaaN brought dignity and inclusion to people previously considered{" "}
              <Highlight color="pink">menial labourers</Highlight>. By providing
              uniforms, ID cards, insurance, and education, the organization
              transformed how rickshaw pullers see themselves and how society sees
              them.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              Social entrepreneurship turns{" "}
              <Highlight color="yellow">observation into action</Highlight>. Irfan
              Alam&rsquo;s journey from a thirsty teenager in a rickshaw to the founder
              of SammaaN shows that identifying a problem at the grassroots &mdash;
              and building a sustainable model around it &mdash; can{" "}
              <strong>empower millions</strong> while remaining profitable. As he
              says: &ldquo;If we aspire to live in a happier world, we must empower
              those living on the margins of society.&rdquo;
            </KeyPoint>
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
