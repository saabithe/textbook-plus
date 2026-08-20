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
    id: "awakening",
    title: "Awakening to Inequity",
    content: (
      <>
        <Callout type="important">
          <p>
            Shaheen Mistri&rsquo;s journey begins with{" "}
            <Highlight color="yellow">childhood curiosity</Highlight> that
            gradually transforms into social consciousness. Growing up across
            five countries, her summers in India exposed her to stark contrasts
            &mdash; family lunches versus children begging on the streets,
            wasted food at parties versus women portioning meager dal and rice
            for their families.
          </p>
        </Callout>
        <p>
          The turning point came in the summer of 1989, when three children
          ran up to her taxi at a Mumbai traffic signal. In that{" "}
          <Highlight color="blue">flash of introspection</Highlight>, she
          realized her life would have more meaning if she stayed in India.
          India was answering the search for purpose she had felt since
          childhood.
        </p>
      </>
    ),
  },
  {
    id: "the-beginning",
    title: "From Xavier&rsquo;s to the Slums",
    content: (
      <>
        <p>
          Shaheen walked into St. Xavier&rsquo;s through a side door and told
          Father D&rsquo;Cruz:{" "}
          <em>&ldquo;Father, my life is in your hands. I want to do something
          for the children of India. I don&rsquo;t know how, only that I
          must.&rdquo;</em> He granted her admission.
        </p>
        <p>
          She began visiting a low-income community &mdash; a maze of tiny
          alleyways where 10,000 people lived with no running water and six
          shared toilets. There she met{" "}
          <Highlight color="green">Sandhya</Highlight>, an eighteen-year-old
          who didn&rsquo;t speak English, and whose home was smaller than
          Shaheen&rsquo;s bathroom. Children gradually formed the first
          class Shaheen would teach. They called her{" "}
          <strong>&ldquo;Didi, Didi&rdquo;</strong> &mdash; and Akanksha
          was born.
        </p>
      </>
    ),
  },
  {
    id: "building-akanksha",
    title: "Building Akanksha",
    content: (
      <>
        <p>
          The idea was simple: India had people who could teach, spaces for
          classrooms, and funds to educate children. Everything existed &mdash;
          it just needed bringing together. But finding a physical space was
          the hardest part.
        </p>
        <p>
          Shaheen approached{" "}
          <Highlight color="yellow">twenty schools</Highlight> requesting one
          classroom for three hours each evening. All refused. Some claimed
          teaching underprivileged children was too &ldquo;revolutionary.&rdquo;
          Others worried about disease. One principal said the glass bangles of
          fishermen&rsquo;s daughters would scratch her desks. Finally, the
          principal of Holy Name High School in Colaba agreed. That became the
          first Akanksha centre.
        </p>
        <p>
          From a single class with 15 children, Akanksha grew to{" "}
          <strong>58 centres and 6 schools</strong> with over 3,500 children.
          The program developed organically &mdash; basic English and Math, mixed
          with values, self-esteem, and confidence.
        </p>
      </>
    ),
  },
  {
    id: "themes",
    title: "Themes",
    content: (
      <>
        <h3
          id="purpose-and-identity"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Purpose and Identity
        </h3>
        <p>
          Shaheen&rsquo;s story is fundamentally about finding{" "}
          <Highlight color="yellow">purpose</Highlight>. From watching ants
          as a child to the traffic-signal moment with three beggars, she
          constantly sought meaning. India gave her that purpose &mdash; not
          through wealth or comfort, but through the children who needed
          her.
        </p>
        <h3
          id="seeing-inequity"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Seeing Inequity
        </h3>
        <p>
          Growing up in privilege across multiple countries gave Shaheen a
          unique lens. She could see{" "}
          <Highlight color="pink">disparity</Highlight> clearly because she
          moved between worlds. The slums of Mumbai became &ldquo;the fabric
          of the city&rdquo; &mdash; suddenly everywhere once she learned to
          look.
        </p>
        <h3
          id="small-beginnings"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Small Beginnings, Big Impact
        </h3>
        <p>
          Akanksha began with{" "}
          <Highlight color="green">15 children</Highlight> in a borrowed
          room. Shaheen didn&rsquo;t have a grand plan &mdash; she just
          wanted children to &ldquo;feel safe and leave the difficulties of
          their lives behind.&rdquo; The program grew because it addressed a
          real need, not because of a business strategy.
        </p>
      </>
    ),
  },
  {
    id: "key-takeaway",
    title: "Key Takeaway",
    content: (
      <KeyPoint title="Key Takeaway">
        Finding purpose often begins with{" "}
        <Highlight color="yellow">seeing what others overlook</Highlight>.
        Shaheen Mistri&rsquo;s journey from a privileged childhood to
        founding Akanksha shows that social change doesn&rsquo;t require
        extraordinary resources &mdash; it requires the{" "}
        <strong>courage to act on what you see</strong>. From 15 children in
        a borrowed room, Akanksha grew to serve thousands, proving that
        small, determined efforts can transform communities.
      </KeyPoint>
    ),
  },
];

export default function DhyanChandPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="Shaheen Mistri" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Didi</em> is an extract from{" "}
            <em>Redrawing India</em> by{" "}
            <Highlight color="yellow">Shaheen Mistri</Highlight>, the founder
            of the Akanksha Foundation and CEO of Teach For India. It is a
            life writing &mdash; a first-person account of how a privileged
            girl who grew up across five countries came to devote her life to
            educating underprivileged children in Mumbai.
          </p>
          <p>
            The title &ldquo;Didi&rdquo; (elder sister) is what the children
            in the community called her &mdash; a name that carried more
            warmth and belonging than any formal title. The extract traces
            her journey from childhood awareness of inequity to the founding
            of Akanksha in 1991.
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
                  <strong>Author</strong>: Shaheen Mistri &mdash; founder of
                  Akanksha Foundation and CEO of Teach For India.
                </li>
                <li>
                  <strong>Origin</strong>: Visited an orphanage in Jakarta at
                  age 12; summers in Mumbai exposed her to{" "}
                  <Highlight color="yellow">inequity</Highlight>.
                </li>
                <li>
                  <strong>Turning point</strong>: Three children at a Mumbai
                  traffic signal in 1989 &mdash; she decided to stay in India.
                </li>
                <li>
                  <strong>Akanksha</strong>: Founded 1991. 15 children → 58
                  centres, 6 schools, 3,500+ children.
                </li>
                <li>
                  <strong>Title</strong>: &ldquo;Didi&rdquo; means elder sister
                  &mdash; the name children called her.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Shaheen grew up across five countries with a banker father.
                  Her summers in India &mdash; visiting orphanages and the Happy
                  Home and School for the Blind &mdash; exposed her to{" "}
                  <Highlight color="yellow">inequity</Highlight> that her
                  comfortable life hid.
                </li>
                <li>
                  In summer 1989, three children ran up to her taxi at a Mumbai
                  traffic signal. In a{" "}
                  <Highlight color="blue">flash of introspection</Highlight>, she
                  knew her life would have more meaning in India. She called her
                  parents and, despite their caution, persisted until they agreed.
                </li>
                <li>
                  She walked into St. Xavier&rsquo;s through a side door and
                  told the principal: &ldquo;Father, my life is in your hands.
                  I want to do something for the children of India.&rdquo; He
                  granted her admission.
                </li>
                <li>
                  She began visiting a low-income community where she met{" "}
                  <strong>Sandhya</strong>, an eighteen-year-old whose home was
                  smaller than Shaheen&rsquo;s bathroom. Children gathered and
                  formed the first class. They called her &ldquo;Didi.&rdquo;
                </li>
                <li>
                  Finding a classroom was the hardest obstacle. Twenty schools
                  refused. One principal complained that glass bangles would
                  scratch desks. Finally, Holy Name High School in Colaba
                  agreed.
                </li>
                <li>
                  Akanksha formally began in 1991. From 15 children it grew to{" "}
                  <Highlight color="green">58 centres and 6 schools</Highlight>{" "}
                  with over 3,500 children. The program blended English, Math,
                  values, self-esteem, and confidence.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Childhood awareness</strong>: Shaheen describes sitting
                  on the verandah of her Indonesian home at 12, watching ants
                  carry large loads and wondering about her own destiny. She
                  visited an orphanage in Jakarta and returned every weekend.
                  Her summers were split between the orphanage and the Happy
                  Home and School for the Blind in Mumbai &mdash; where she
                  learned to &ldquo;look beyond what you can see.&rdquo;
                </li>
                <li>
                  <strong>Seeing disparity</strong>: Moving between family
                  lunches and the blind school&rsquo;s dining hall, between
                  air-conditioned cars and children begging in the streets,
                  Shaheen began to see{" "}
                  <Highlight color="pink">inequity everywhere</Highlight>. The
                  slums of Mumbai became &ldquo;the fabric of the city&rdquo;
                  &mdash; suddenly visible once she learned to look.
                </li>
                <li>
                  <strong>The traffic signal moment</strong>: In summer 1989,
                  three children ran up to her taxi at a Mumbai signal, smiling
                  and begging. &ldquo;Nothing too unusual had happened,&rdquo;
                  she writes, but in that{" "}
                  <Highlight color="yellow">flash of introspection</Highlight>,
                  she knew India was answering her search for purpose. She
                  called her parents from Boston; they agreed on two conditions
                  &mdash; college admission and later a graduate degree abroad.
                </li>
                <li>
                  <strong>St. Xavier&rsquo;s</strong>: She walked into the
                  crowded office and was told admissions had closed three months
                  earlier. A student whispered about a side door. She went
                  straight through and told Father D&rsquo;Cruz:{" "}
                  <em>&ldquo;Father, my life is in your hands. I want to do
                  something for the children of India. I don&rsquo;t know how,
                  only that I must.&rdquo;</em> He granted her admission.
                </li>
                <li>
                  <strong>Sandhya and the first class</strong>: Walking through
                  a low-income community of 10,000 people with no running
                  water, Shaheen met{" "}
                  <Highlight color="green">Sandhya</Highlight>, an
                  eighteen-year-old who spoke no English. Sandhya welcomed her
                  into her home &mdash; smaller than Shaheen&rsquo;s bathroom.
                  Children poked their heads in, were welcomed, and eventually
                  formed the first class. They called her &ldquo;Didi.&rdquo;
                </li>
                <li>
                  <strong>The search for space</strong>: Shaheen approached
                  twenty schools requesting one classroom for three hours each
                  evening. All refused. Administrators called the idea too
                  &ldquo;revolutionary.&rdquo; Others worried about disease.
                  One principal said fishermen&rsquo;s daughters&rsquo; glass
                  bangles would scratch desks. Holy Name High School in Colaba
                  finally agreed.
                </li>
                <li>
                  <strong>Akanksha&rsquo;s growth</strong>: Formally founded in
                  1991, Akanksha grew from a single class with 15 children to
                  58 centres and 6 schools with over 3,500 children. Shaheen
                  describes it as developing &ldquo;organically, like a soup
                  made special by chefs tossing in what&rsquo;s needed.&rdquo;
                  The stock ingredients were basic English and Math &mdash; with
                  a dash of values, self-esteem, and confidence.
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
        </div>
      )}
    </div>
  );
}
