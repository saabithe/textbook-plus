"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const THEMES = [
  {
    id: "truth-vs-loyalty",
    title: "Truth vs. Loyalty",
    content: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>The central conflict pits Robert&apos;s duty to tell the truth against his loyalty to a lifelong friend.</li>
        <li>Gresham was Robert&apos;s employer for 35 years, making the betrayal feel personal.</li>
        <li>The family argues loyalty should override legal duty, but Robert sees truth as non-negotiable.</li>
        <li>The title refers to the moment when truth is tested against personal relationships.</li>
      </ul>
    ),
  },
  {
    id: "price-of-integrity",
    title: "The Price of Integrity",
    content: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>Robert&apos;s integrity costs him $100,000 and potentially his friendship with Gresham.</li>
        <li>The family sees integrity as impractical, arguing nobody loses money if Gresham goes free.</li>
        <li>Robert&apos;s line about going to his grave clean shows he values his conscience over wealth.</li>
        <li>Gresham&apos;s confession proves that integrity has its own reward — respect from others.</li>
      </ul>
    ),
  },
  {
    id: "family-pressure",
    title: "Family Pressure and Moral Weakness",
    content: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>Martha, John, and Evie all pressure Robert to accept the bribe, each for different reasons.</li>
        <li>John is pragmatic, thinking about money and career prospects.</li>
        <li>Martha appeals to sentiment and family honour, using their son&apos;s name as leverage.</li>
        <li>Evie uses tears and emotional manipulation to sway Robert.</li>
        <li>Robert&apos;s accusation that they&apos;re all liars exposes the moral bankruptcy of the family.</li>
      </ul>
    ),
  },
  {
    id: "nature-of-justice",
    title: "The Nature of Justice",
    content: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>John argues that since nobody lost money, punishing Gresham is just a technicality.</li>
        <li>Robert insists that misappropriating funds is a crime regardless of whether anyone loses.</li>
        <li>The play questions whether justice should be based on outcomes or on principles.</li>
        <li>Gresham&apos;s confession suggests that true justice comes from within, not from the courts.</li>
      </ul>
    ),
  },
];

const CHARACTER_SKETCHES = [
  {
    id: "robert-baldwin",
    name: "Robert Baldwin",
    role: "Protagonist",
    traits: ["Principled", "Honourable", "Resolute", "Morally upright"],
    description: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>Robert Baldwin is the moral centre of the play, a man who has worked faithfully for 35 years as John Gresham&apos;s secretary.</li>
        <li>He discovered Gresham&apos;s fraud only a day before the bank collapsed and forced Gresham to close the bank.</li>
        <li>Despite being offered $100,000 to lie on the stand, he refuses, saying those three words would choke him.</li>
        <li>He values his conscience above money, saying he&apos;ll live his remaining years as he&apos;s lived the rest.</li>
        <li>His confrontation with his family exposes their moral weakness, but he still loves them.</li>
        <li>He represents the idea that integrity is worth any price, even when everyone around you compromises.</li>
      </ul>
    ),
  },
  {
    id: "john-baldwin",
    name: "John Baldwin",
    role: "Robert&apos;s Son",
    traits: ["Pragmatic", "Self-interested", "Cynical", "Eventually honest"],
    description: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>John is Robert&apos;s 27-year-old son, named after John Gresham, which adds personal significance to the case.</li>
        <li>He initially seems indifferent, smoking his pipe while the family worries, but reveals strong opinions when Robert arrives.</li>
        <li>He argues that since nobody lost money, punishing Gresham is just a technicality.</li>
        <li>He sees the $100,000 as practical — it would help the family since Robert is unemployed.</li>
        <li>He admits he was afraid of what the family would say if Robert refused, showing his moral weakness.</li>
        <li>His eventual honesty when facing Robert&apos;s eyes suggests he can still be reached by integrity.</li>
      </ul>
    ),
  },
  {
    id: "martha-baldwin",
    name: "Martha Baldwin",
    role: "Robert&apos;s Wife",
    traits: ["Emotional", "Manipulative", "Sentimental", "Practical"],
    description: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>Martha is Robert&apos;s wife, who tries to compose herself with knitting but makes little progress.</li>
        <li>She admits she withdrew her money from the bank against Robert&apos;s wishes when she suspected trouble.</li>
        <li>She uses sentiment to pressure Robert, reminding him that Gresham was their son&apos;s godfather.</li>
        <li>She appeals to family honour, saying it would be sad if the name came to grief through Robert.</li>
        <li>She adds practical concerns, noting that $100,000 would mean a great deal since Robert is out of work.</li>
        <li>Her final plea to Marshall — &ldquo;Can&apos;t you see he&apos;s crying?&rdquo; — shows she does love Robert despite pressuring him.</li>
      </ul>
    ),
  },
  {
    id: "evie-baldwin",
    name: "Evie Baldwin",
    role: "Robert&apos;s Daughter",
    traits: ["Nervous", "Emotional", "Suggestible", "Young"],
    description: (
      <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
        <li>Evie is Robert&apos;s daughter, who takes no pains to conceal her nervousness.</li>
        <li>She is the first to suggest that Robert could let Gresham off since he&apos;s the only witness.</li>
        <li>She cries when the pressure on Robert intensifies, using emotion to sway him.</li>
        <li>She argues that Gresham hasn&apos;t done anything really wrong, echoing John&apos;s pragmatism.</li>
        <li>She represents the younger generation&apos;s willingness to compromise principles for convenience.</li>
        <li>Her character is less developed than the others, serving as a voice of the family&apos;s collective pressure.</li>
      </ul>
    ),
  },
];

const CHARACTER_COMPARISON = [
  { aspect: "Core Value", robert: "Truth and integrity", john: "Practical advantage", martha: "Family harmony", evie: "Emotional comfort" },
  { aspect: "View of Gresham", robert: "Old friend who committed a crime", john: "Named after, owes him gratitude", martha: "Son&apos;s godfather, family friend", evie: "Hasn&apos;t done anything really wrong" },
  { aspect: "Reaction to Bribe", robert: "Outright refusal", john: "Sees practical benefits", martha: "Tempted by the money", evie: "Suggests it&apos;s not so bad" },
  { aspect: "Moral Courage", robert: "High — faces family opposition", john: "Low — swayed by money", martha: "Low — uses sentiment over principle", evie: "Low — cries to manipulate" },
  { aspect: "Honesty", robert: "Completely honest with family", john: "Admits he was afraid", martha: "Avoids direct questions", evie: "Follows the family line" },
  { aspect: "Final Position", robert: "Maintains integrity, offered new job", john: "Admits weakness, still loves father", martha: "Rushed to defend Robert at end", evie: "Sides with family pressure" },
];

const READ_RESPOND = [
  {
    question: "Why does Robert Baldwin refuse the $100,000 bribe?",
    answer: "Robert refuses because his conscience won’t allow him to lie. He says those three words — “I don’t remember” — would choke him. His entire identity is built on being honourable, and accepting the bribe would mean everything he’s believed about himself was a lie. He’d rather go to his grave clean than live with the knowledge that he’d been bought.",
  },
  {
    question: "How does John justify his father accepting the bribe?",
    answer: "John argues that nobody lost any money, so it’s just a technicality. He says Gresham hasn’t done anything really wrong and that punishing him would be unfair. He also points out practical benefits: Gresham would start business again, offer Robert a partnership, and the $100,000 would help the family since Robert is unemployed.",
  },
  {
    question: "What role does the family’s son being named after Gresham play?",
    answer: "Martha uses the name as emotional leverage, reminding Robert that Gresham was their son’s godfather. She says it would be sad if the name “John Gresham” came to grief through Robert’s testimony. This adds personal significance to the legal case, making it about family honour as well as money.",
  },
  {
    question: "Why does Robert call his family liars and hypocrites?",
    answer: "Robert sees through their self-serving arguments. They all know taking the money is wrong, but they avoid saying so directly. When Robert asks them directly whether they want him to take it, they remain silent. He calls them shams and hypocrites because they’re pretending to have reasons when really they just want the money.",
  },
  {
    question: "What is the significance of Gresham’s confession?",
    answer: "Gresham confesses rather than face Robert’s testimony, which proves two things: that Robert’s integrity was real and not just stubbornness, and that even Gresham recognised the power of truth. Marshall says Gresham paid Robert the supreme compliment by confessing, and the Third National Bank offers Robert a position because of his demonstrated character.",
  },
  {
    question: "How does the play explore the corrupting influence of money?",
    answer: "Every character except Robert is influenced by the $100,000. John sees it as practical, Martha sees it as necessary for the family, and Evie sees it as harmless. The play shows how money can make people rationalise dishonesty, turning a clear moral issue into a grey area. Only Robert’s lifelong habit of integrity resists the temptation.",
  },
  {
    question: "What is the irony of Robert’s final position?",
    answer: "Robert is offered a position at the Third National Bank because of his integrity, which is exactly what the money could have bought him through Gresham. The irony is that by refusing the dishonest path, Robert gets a better outcome than if he’d accepted — he gets both the job and his self-respect, while the family who pressured him ends up ashamed.",
  },
];

const DISCOURSES = [
  ...CHARACTER_SKETCHES.map((cs) => ({
    id: `character-sketch-${cs.id}`,
    title: <>Character Sketch: {cs.name}</>,
    content: (
      <>
        <p className="text-sm text-muted-foreground mb-4">{cs.role}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {cs.traits.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{t}</span>
          ))}
        </div>
        {cs.description}
      </>
    ),
  })),
  {
    id: "character-comparison",
    title: "Character Comparison",
    content: (
      <div className="space-y-4">
        {CHARACTER_COMPARISON.map((row) => (
          <div key={row.aspect} className="border border-border/60 rounded-xl p-4">
            <h3 className="font-semibold text-sm mb-3 text-primary">{row.aspect}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[0.95rem] text-foreground/85">
              <div><span className="font-medium text-foreground">Robert:</span> {row.robert}</div>
              <div><span className="font-medium text-foreground">John:</span> {row.john}</div>
              <div><span className="font-medium text-foreground">Martha:</span> {row.martha}</div>
              <div><span className="font-medium text-foreground">Evie:</span> {row.evie}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "themes",
    title: "Themes",
    content: (
      <div className="space-y-8">
        {THEMES.map((theme) => (
          <div key={theme.id} id={theme.id}>
            <h3 className="text-lg font-bold mb-3">{theme.title}</h3>
            {theme.content}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "key-takeaway",
    title: "Key Takeaway",
    content: (
      <KeyPoint>
        True integrity is revealed not in comfort, but when it costs you everything &mdash; Robert Baldwin&apos;s refusal to compromise proves that a clean conscience is worth more than any amount of money.
      </KeyPoint>
    ),
  },
];

export default function TheHourOfTruthPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          <div id="author">
            <AuthorCard name="Percival Wilde">
              American playwright (1887–1953) known for his plays and detective stories. Famous works include Brothers, Little Shot, and First is Last. The Hour of Truth is from <em>A Question of Morality and Other Plays</em> — a striking psychological study on the corrupting influence of money.
            </AuthorCard>
          </div>

          <h2 id="introduction" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
            Introduction
          </h2>
          <div className="space-y-3 text-[0.95rem] text-foreground/85 leading-relaxed">
            <p><Highlight color="blue">The Hour of Truth</Highlight> is a one-act play by Percival Wilde that explores the conflict between truth and loyalty, integrity and self-interest.</p>
            <p>Set on a hot Sunday afternoon, the play centres on Robert Baldwin, who must decide whether to testify truthfully against his lifelong friend and employer John Gresham, or accept a $100,000 bribe to lie on the stand.</p>
            <p>The play examines how the prospect of easy money can corrupt even the closest family bonds, and how true integrity reveals itself when tested.</p>
          </div>

          <h2 id="summary" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
            Summary
          </h2>
          <SummaryLevels
            quick={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  Percival Wilde&rsquo;s one-act play about{" "}
                  <Highlight color="yellow">Robert Baldwin</Highlight>, the only
                  witness against his old friend John Gresham, who committed bank
                  fraud.
                </li>
                <li>
                  Gresham offers Baldwin{" "}
                  <Highlight color="blue">$100,000</Highlight> to lie on the stand
                  and say &ldquo;I don&rsquo;t remember.&rdquo;
                </li>
                <li>
                  Baldwin&rsquo;s family &mdash; wife, son, and daughter &mdash; all
                  pressure him to accept the money.
                </li>
                <li>
                  Gresham confesses rather than face Baldwin&rsquo;s testimony,
                  proving the power of{" "}
                  <Highlight color="green">integrity</Highlight>.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  The play opens on a hot Sunday afternoon. The Baldwin family
                  anxiously awaits Robert&rsquo;s return from meeting John Gresham,
                  his lifelong friend and employer who has been arrested for bank
                  fraud.
                </li>
                <li>
                  Robert arrives and explains: Gresham asked him to forget key details
                  on the stand &mdash; just say{" "}
                  <Highlight color="yellow">&ldquo;I don&rsquo;t remember.&rdquo;</Highlight>{" "}
                  &mdash; which would let Gresham escape punishment.
                </li>
                <li>
                  Robert refused. He tells the family he turned down{" "}
                  <Highlight color="blue">$100,000</Highlight>, saying those three
                  words would choke him.
                </li>
                <li>
                  His son John argues nobody lost money &mdash; it&rsquo;s just a
                  technicality. Gresham shouldn&rsquo;t be jailed.
                </li>
                <li>
                  Martha reminds Robert that Gresham was their son&rsquo;s{" "}
                  <Highlight color="green">godfather</Highlight> &mdash; it would be
                  sad if the name came to grief through him.
                </li>
                <li>
                  Evie cries: Robert would be the only one wanting to punish Gresham.
                </li>
                <li>
                  Robert calls his family{" "}
                  <Highlight color="pink">liars and hypocrites</Highlight>, saying
                  they&rsquo;ve seen their souls naked and they stink to heaven.
                </li>
                <li>
                  Mr. Marshall arrives: Gresham confessed rather than face
                  Baldwin&rsquo;s testimony. He offers Robert a bank position.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Structure</strong>: One-act play, single setting (the
                  Baldwin cottage). The{" "}
                  <Highlight color="yellow">entire conflict unfolds in real
                  time</Highlight> &mdash; no scene breaks, no time jumps.
                </li>
                <li>
                  <strong>Moral pressure</strong>: Each family member pressures
                  Robert differently:{" "}
                  <Highlight color="blue">John</Highlight> (logic: nobody lost money),
                  <strong> Martha</strong> (emotional: the godfather bond),{" "}
                  <strong>Evie</strong> (guilt: you&rsquo;re the only one). They
                  represent three forms of moral compromise.
                </li>
                <li>
                  <strong>The bribe</strong>: $100,000 is not abstract. Robert has
                  been out of work. The money is{" "}
                  <Highlight color="green">real, immediate, life-changing</Highlight>.
                  The temptation is not greed &mdash; it&rsquo;s survival.
                </li>
                <li>
                  <strong>&ldquo;I don&rsquo;t remember&rdquo;</strong>: The three
                  words Gresham wants are not a lie &mdash; they&rsquo;re the
                  absence of truth. Robert sees this as{" "}
                  <Highlight color="pink">worse than lying</Highlight>: it&rsquo;s
                  erasure.
                </li>
                <li>
                  <strong>Robert&rsquo;s speech</strong>: &ldquo;You&rsquo;ve all seen
                  your souls naked, and they stink to heaven.&rdquo; The family has
                  revealed their true characters &mdash; and Robert has seen them.
                </li>
                <li>
                  <strong>Gresham&rsquo;s confession</strong>: Gresham confessed not
                  out of guilt but because he knew Baldwin would never lie. Robert&rsquo;s
                  integrity <Highlight color="yellow">changed the outcome</Highlight>{" "}
                  without him testifying.
                </li>
                <li>
                  <strong>Ending</strong>: Robert receives a job offer from Mr.
                  Marshall &mdash; the reward for integrity is not money but{" "}
                  <Highlight color="blue">trust and position</Highlight>.
                </li>
                <li>
                  <strong>Overall theme</strong>: Integrity is revealed not in
                  comfort but when it costs you everything. Robert Baldwin&rsquo;s
                  refusal to compromise proves that a{" "}
                  <Highlight color="green">clean conscience</Highlight> is worth
                  more than any amount of money.
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
            <ReadRespond items={READ_RESPOND} />
          </div>
        </div>
      )}
    </div>
  );
}