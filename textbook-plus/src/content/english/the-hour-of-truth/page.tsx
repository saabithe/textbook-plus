"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
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
    question: "Why was Mr. Gresham arrested?",
    answer: (
      <ul className="space-y-2 text-foreground/90 leading-[1.7]">
        <li><strong>Charge:</strong> He was arrested for misappropriating the bank&apos;s funds.</li>
        <li><strong>Timing:</strong> The trial was due to begin the next day, and Baldwin was the only witness against him.</li>
        <li><strong>No loss:</strong> Baldwin tells the family that the depositors will not lose a cent.</li>
      </ul>
    ),
  },
  {
    question: "Why didn’t Baldwin explain his position to the papers?",
    answer: (
      <ul className="space-y-2 text-foreground/90 leading-[1.7]">
        <li><strong>No compulsion:</strong> &ldquo;Nothing forced me to answer, John.&rdquo; The papers had asked him often enough.</li>
        <li><strong>Left to Gresham:</strong> He left the truth about the depositors for Gresham. It would come out the next day.</li>
        <li><strong>Cleared in court:</strong> He let his name rest under a cloud because it would be cleared tomorrow.</li>
      </ul>
    ),
  },
  {
    question: "What was the change in the attitude of the members of the family when they came to know the amount of the bribe?",
    answer: (
      <ul className="space-y-2 text-foreground/90 leading-[1.7]">
        <li><strong>Before the offer:</strong> John says his father will tell the truth and would never lie.</li>
        <li><strong>Evie&apos;s awe:</strong> She repeats the sum as if hypnotised.</li>
        <li><strong>John&apos;s calculation:</strong> He points to a partnership and Gresham&apos;s debt of gratitude.</li>
        <li><strong>Martha&apos;s worry:</strong> She says the money would mean a great deal while Robert is out of work.</li>
        <li><strong>No answer:</strong> Asked to say &ldquo;Yes&rdquo; or &ldquo;No&rdquo;, the family stays silent.</li>
      </ul>
    ),
  },
  {
    question: "How did Baldwin react to the opinion of his family?",
    answer: (
      <ul className="space-y-2 text-foreground/90 leading-[1.7]">
        <li><strong>Refusal to profit:</strong> He could not go into partnership with Gresham because people would not trust him.</li>
        <li><strong>Moral challenge:</strong> He says that taking the money would be a dishonourable thing and that they all know it.</li>
        <li><strong>Blame:</strong> He calls them &ldquo;Shams! Liars! Hypocrites! Thieves!&rdquo; and includes himself in the blame.</li>
        <li><strong>Self-knowledge:</strong> He admits to John that he refused partly because he was afraid of what his family would say.</li>
        <li><strong>Right and wrong:</strong> He insists &ldquo;It&apos;s not right&rdquo; when Martha says it is not wrong.</li>
      </ul>
    ),
  },
  {
    question: "Was Baldwin disloyal to Mr. Gresham? Quote the relevant sentences to support your answer.",
    answer: (
      <>
        <p><strong>No.</strong> He refused the bribe, yet his words show friendship and pity, not betrayal.</p>
        <ul className="mt-2 space-y-2 text-foreground/90 leading-[1.7]">
          <li><strong>Old friendship:</strong> &ldquo;He&apos;s too old a friend of mine for that.&rdquo;</li>
          <li><strong>Understanding:</strong> &ldquo;He is desperate — he doesn&apos;t know what he is doing — or he wouldn&apos;t have offered me money.&rdquo;</li>
          <li><strong>Trust:</strong> &ldquo;He never lied to me, John.&rdquo; Marshall calls the confession &ldquo;the supreme compliment&rdquo;.</li>
          <li><strong>Sympathy:</strong> &ldquo;I think that I&apos;m sorry for John Gresham — terribly sorry.&rdquo;</li>
          <li><strong>Loyalty in silence:</strong> &ldquo;I left that for Gresham. It will come out tomorrow.&rdquo;</li>
        </ul>
      </>
    ),
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
            <ChapterIntro author="Percival Wilde" role="Playwright" genre="One-act play" characters={["Robert Baldwin", "Martha", "John Gresham", "John Jr.", "Evie", "Mr. Marshall"]}>
              American playwright (1887–1953) known for his plays and detective stories. Famous works include Brothers, Little Shot, and First is Last. The Hour of Truth is from <em>A Question of Morality and Other Plays</em> — a striking psychological study on the corrupting influence of money.
            </ChapterIntro>
          </div>

          <h2 id="introduction" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
            Introduction
          </h2>
          <div className="space-y-3 text-[0.95rem] text-foreground/85 leading-relaxed">
            <p><Highlight color="blue">The Hour of Truth</Highlight> is a one-act play by Percival Wilde that explores the conflict between truth and loyalty, integrity and self-interest.</p>
            <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
              <li><strong>Setting:</strong> A hot Sunday afternoon.</li>
              <li><strong>Conflict:</strong> Robert Baldwin must choose between testifying truthfully against his lifelong friend and employer John Gresham.</li>
              <li><strong>Temptation:</strong> Gresham offers him a $100,000 bribe to lie on the stand.</li>
            </ul>
            <p>The play examines how the prospect of easy money can corrupt even the closest family bonds, and how true integrity reveals itself when tested.</p>
          </div>

          <h2
            id="central-theme"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Central Theme
          </h2>
          <p>
            The play tests Robert Baldwin&apos;s duty to tell the truth against loyalty to his old friend Gresham and pressure from his family. He refuses a hundred thousand dollars to lie on the stand and chooses to go to his grave clean rather than live a lie.
          </p>

          <h2 id="summary" className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground">
            Summary
          </h2>
          <SummaryLevels
            quick={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Author</strong>: Percival Wilde. Genre: One-act play. Setting:
                  Baldwin cottage, hot Sunday afternoon.
                </li>
                <li>
                  <strong>Characters</strong>: Robert Baldwin (witness), John Gresham
                  (old friend/employer, arrested for bank fraud), Martha (wife), John Jr.
                  (son), Evie (daughter), Mr. Marshall (banker).
                </li>
                <li>
                  <strong>Conflict</strong>: Gresham offers Baldwin{" "}
                  <Highlight color="yellow">$100,000</Highlight> to say &ldquo;I
                  don&rsquo;t remember&rdquo; on the stand &mdash; Baldwin refuses.
                </li>
                <li>
                  <strong>Family pressure</strong>: Son (logic: nobody lost money), wife
                  (emotional: godfather bond), daughter (guilt: you&rsquo;re the only
                  one). All three want Baldwin to take the money.
                </li>
                <li>
                  <strong>Resolution</strong>: Gresham confesses rather than face
                  Baldwin&rsquo;s testimony. Baldwin receives a job offer from Mr. Marshall
                  &mdash; reward for{" "}
                  <Highlight color="green">integrity</Highlight>.
                </li>
                <li>
                  <strong>Theme</strong>: Integrity is revealed when it costs you
                  everything. A{" "}
                  <Highlight color="blue">clean conscience</Highlight> is worth more than
                  any amount of money.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>The wait</strong>: The play opens on a hot Sunday afternoon. The
                  Baldwin family anxiously awaits Robert&rsquo;s return from meeting John
                  Gresham, his lifelong friend and employer who has been arrested for bank
                  fraud. The family knows Robert is the only witness who can convict
                  Gresham.
                </li>
                <li>
                  <strong>Robert&rsquo;s return</strong>: Robert arrives and explains:
                  Gresham asked him to forget key details on the stand &mdash; just say{" "}
                  <Highlight color="yellow">&ldquo;I don&rsquo;t remember.&rdquo;</Highlight>{" "}
                  &mdash; which would let Gresham escape punishment. Robert refused. He
                  tells the family he turned down{" "}
                  <Highlight color="blue">$100,000</Highlight>, saying those three words
                  would choke him.
                </li>
                <li>
                  <strong>John Jr.&rsquo;s argument (logic)</strong>: His son argues nobody
                  lost money &mdash; it&rsquo;s just a technicality. Gresham
                  shouldn&rsquo;t be jailed for something that harmed no one. The argument
                  is rational but morally empty.
                </li>
                <li>
                  <strong>Martha&rsquo;s argument (emotion)</strong>: Martha reminds Robert
                  that Gresham was their son&rsquo;s{" "}
                  <Highlight color="green">godfather</Highlight> &mdash; it would be sad
                  if the name came to grief through him. She appeals to loyalty, history,
                  and family bonds.
                </li>
                <li>
                  <strong>Evie&rsquo;s argument (guilt)</strong>: Evie cries: Robert would
                  be the only one wanting to punish Gresham. She tries to make him feel
                  isolated &mdash; as if his integrity is selfishness.
                </li>
                <li>
                  <strong>Robert&rsquo;s explosion</strong>: Robert calls his family{" "}
                  <Highlight color="pink">liars and hypocrites</Highlight>, saying
                  they&rsquo;ve seen their souls naked and they stink to heaven. The
                  moment is devastating &mdash; the family&rsquo;s true characters are
                  revealed, and Robert has seen them.
                </li>
                <li>
                  <strong>Mr. Marshall&rsquo;s arrival</strong>: Mr. Marshall arrives with
                  news: Gresham confessed rather than face Baldwin&rsquo;s testimony. He
                  offers Robert a bank position &mdash; the reward for integrity is not
                  money but{" "}
                  <Highlight color="yellow">trust and position</Highlight>.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Structure</strong>: One-act play, single setting (the Baldwin
                  cottage). The{" "}
                  <Highlight color="yellow">entire conflict unfolds in real time</Highlight>
                  &mdash; no scene breaks, no time jumps. The single setting creates
                  claustrophobia: there is nowhere to hide. Every character is trapped in
                  the same room, under the same heat, facing the same moral question. The
                  one-act form forces confrontation &mdash; there is no intermission for
                  escape.
                </li>
                <li>
                  <strong>Moral pressure</strong>: Each family member pressures Robert
                  differently:{" "}
                  <Highlight color="blue">John Jr.</Highlight> (logic: nobody lost money,
                  it&rsquo;s a technicality),{" "}
                  <strong>Martha</strong> (emotional: the godfather bond, family loyalty),{" "}
                  <strong>Evie</strong> (guilt: you&rsquo;re the only one who wants to
                  punish him). They represent three forms of moral compromise &mdash;
                  rationalisation, sentiment, and emotional manipulation. Together they
                  form a wall of pressure that Robert must break through alone.
                </li>
                <li>
                  <strong>The bribe</strong>: $100,000 is not abstract. Robert has been
                  out of work. The money is{" "}
                  <Highlight color="green">real, immediate, life-changing</Highlight>. The
                  temptation is not greed &mdash; it&rsquo;s survival. Wilde makes the
                  bribe large enough to be genuinely tempting, which makes
                  Robert&rsquo;s refusal genuinely courageous. If the bribe were small,
                  the choice would be easy. At $100,000, it&rsquo;s a sacrifice.
                </li>
                <li>
                  <strong>&ldquo;I don&rsquo;t remember&rdquo;</strong>: The three words
                  Gresham wants are not a lie &mdash; they&rsquo;re the absence of truth.
                  Robert sees this as{" "}
                  <Highlight color="pink">worse than lying</Highlight>: it&rsquo;s
                  erasure. A lie at least acknowledges the truth exists. &ldquo;I
                  don&rsquo;t remember&rdquo; pretends the truth never happened. Robert
                  understands that moral corruption often hides behind technically true
                  statements.
                </li>
                <li>
                  <strong>Robert&rsquo;s speech</strong>: &ldquo;You&rsquo;ve all seen
                  your souls naked, and they stink to heaven.&rdquo; The family has
                  revealed their true characters &mdash; and Robert has seen them. The
                  speech is the play&rsquo;s turning point. Before it, the family
                  pressures Robert. After it, Robert stands alone, morally clear but
                  personally devastated. He has lost not just Gresham but his
                  family&rsquo;s respect.
                </li>
                <li>
                  <strong>Gresham&rsquo;s confession</strong>: Gresham confessed not out of
                  guilt but because he knew Baldwin would never lie. Robert&rsquo;s
                  integrity{" "}
                  <Highlight color="yellow">changed the outcome</Highlight> without him
                  testifying. The confession is the play&rsquo;s ironic twist: Robert
                  never had to choose between friendship and truth &mdash; Gresham made
                  the choice for him. But the moral test was real, and Robert passed it.
                </li>
                <li>
                  <strong>Ending</strong>: Robert receives a job offer from Mr. Marshall
                  &mdash; the reward for integrity is not money but{" "}
                  <Highlight color="blue">trust and position</Highlight>. The ending is
                  not sentimental: Robert has won, but at great cost. His family
                  exposed their own moral weakness, and his friendship with Gresham is
                  destroyed. The job offer is not a consolation prize &mdash; it&rsquo;s
                  the world recognising someone worth trusting.
                </li>
                <li>
                  <strong>Overall theme</strong>: Integrity is revealed not in comfort but
                  when it costs you everything. Robert Baldwin&rsquo;s refusal to
                  compromise proves that a{" "}
                  <Highlight color="green">clean conscience</Highlight> is worth more
                  than any amount of money. The play argues that moral courage is
                  expensive &mdash; it costs you relationships, money, and comfort &mdash;
                  but the alternative costs you yourself. Wilde does not moralise; he
                  lets the situation speak. The audience judges the family, not Robert.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="themes">
            <div className="space-y-8">
              {THEMES.map((theme) => (
                <div key={theme.id} id={theme.id}>
                  <h3 className="text-lg font-bold mb-3">{theme.title}</h3>
                  {theme.content}
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint>
              True integrity is revealed not in comfort, but when it costs you everything &mdash; Robert Baldwin&apos;s refusal to compromise proves that a clean conscience is worth more than any amount of money.
            </KeyPoint>
          </div>

          <div id="read-and-respond-section" className="mt-14">
            <ReadRespond items={READ_RESPOND} />
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