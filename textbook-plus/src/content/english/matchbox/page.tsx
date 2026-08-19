"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { AuthorCard } from "@/components/content/AuthorCard";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { SummaryLevels } from "@/components/content/SummaryLevels";

import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";

const QA_ITEMS = [
  {
    question: "Why are women compared to matchboxes?",
    answer: (
      <>
        Because matchboxes have enough{" "}
        <Highlight color="yellow">gunpowder to set a hundred Lankas
        aflame</Highlight>, yet sit around meek and innocent. Women, too,
        have the power to rebel but{" "}
        <strong>never flare up</strong> &mdash; they absorb, endure, and
        protect the mask of men&rsquo;s high-mindedness.
      </>
    ),
  },
  {
    question: "What makes Nomita furious?",
    answer: (
      <>
        Ajit has <Highlight color="pink">opened and read her letter</Highlight>,
        crumpled it, and left it in his pocket without telling her. The
        letter is from her mother. This is not a casual oversight &mdash;
        it is <strong>deliberate</strong> censorship of her private
        correspondence.
      </>
    ),
  },
  {
    question: "What is the suspicion in Nomita's mind?",
    answer: (
      <>
        Nomita suspects that Ajit{" "}
        <Highlight color="blue">sometimes doesn&rsquo;t give her letters at
        all</Highlight>. The suspicion has taken deep root &mdash; that he
        opens, reads, and discards letters he deems she shouldn&rsquo;t
        see.
      </>
    ),
  },
  {
    question: 'What is called an "ugly habit"? Why?',
    answer: (
      <>
        Ajit&rsquo;s habit of{" "}
        <Highlight color="pink">opening and reading Nomita&rsquo;s
        letters</Highlight> before giving them to her. It is ugly because
        it is a <strong>violation of privacy</strong> and a display of
        possessive control.
      </>
    ),
  },
  {
    question:
      'How does Ajit react when Nomita mentions about his "ugly habit"?',
    answer: (
      <>
        First he tries to <Highlight color="yellow">laugh it away</Highlight>.
        If that doesn&rsquo;t work, he <strong>scolds her</strong>. He
        doesn&rsquo;t fear her anger &mdash; he fears a row. He smiles
        an affected smile and deflects.
      </>
    ),
  },
  {
    question: "What are the expectations of Nomita's mother?",
    answer: (
      <>
        Her mother is an{" "}
        <Highlight color="green">indigent widow</Highlight> who expects
        financial support. Her letters describe hardships &mdash; cracked
        ceiling, rain water falling through &mdash; and she takes credit
        for marrying Nomita into a wealthy family.
      </>
    ),
  },
  {
    question:
      "Comment on Ajit's attitude towards his mother-in-law.",
    answer: (
      <>
        Ajit is{" "}
        <Highlight color="pink">derisive and contemptuous</Highlight>.
        Whenever he sees a letter from her mother, he says: &ldquo;Why
        bother to read that? I&rsquo;ll go and fill out a money-order
        form.&rdquo; He reduced her to a{" "}
        <strong>beggar in his mind</strong>.
      </>
    ),
  },
  {
    question:
      'What makes Nomita call Ajit a "liar"? Is her action justifiable?',
    answer: (
      <>
        Ajit claims he &ldquo;forgot&rdquo; to give her the letter, but
        Nomita knows he{" "}
        <Highlight color="yellow">deliberately withheld it</Highlight>.
        Her accusation is justifiable &mdash; the evidence (crumpled
        envelope, postmark date) proves his lie.
      </>
    ),
  },
  {
    question: 'Comment on the simile "Nomita hisses like a snake."',
    answer: (
      <>
        The simile compares Nomita to a{" "}
        <Highlight color="pink">snake</Highlight> &mdash; cold, controlled,
        and dangerous. It shows her anger is not explosive but{" "}
        <strong>suppressed and lethal</strong>. She has been tolerating
        this for too long.
      </>
    ),
  },
  {
    question:
      "How do you think Ajit would react if Nomita reads the letters addressed to him?",
    answer: (
      <>
        He would likely{" "}
        <Highlight color="yellow">explode with rage</Highlight>. Ajit
        cannot tolerate being challenged. His double standard &mdash;
        opening her letters while guarding his own &mdash; reveals his{" "}
        <strong>hypocrisy and patriarchal control</strong>.
      </>
    ),
  },
  {
    question: 'What is the "poisoned knife"?',
    answer: (
      <>
        Ajit&rsquo;s{" "}
        <Highlight color="pink">verbal cruelty</Highlight>: &ldquo;Those
        who whine day and night and hold out their palms to their
        son-in-law, they&rsquo;re the high-class people! A dung-picker&rsquo;s
        daughter becomes a queen.&rdquo; It is a class insult aimed at
        Nomita&rsquo;s mother.
      </>
    ),
  },
  {
    question: "How does Nomita frighten Ajit?",
    answer: (
      <>
        She grabs his matchbox, lights a matchstick, and{" "}
        <Highlight color="yellow">touches it to her sari</Highlight>.
        The fine anchol flares up instantly. Ajit is terrified &mdash; he
        sees a fire burning in her face that he doesn&rsquo;t have the
        courage to put out.
      </>
    ),
  },
  {
    question: "What is the plight of Nomita in the family?",
    answer: (
      <>
        Nomita is{" "}
        <Highlight color="blue">isolated and mocked</Highlight>. The
        sisters-in-law pinch her with sharp words &mdash; Mejo-wife
        teases about love-talk, Boro-wife scolds about laziness. She must
        smile through it all:{" "}
        <strong>&ldquo;Her voice must not tremble.&rdquo;</strong>
      </>
    ),
  },
  {
    question:
      "Comment on the expression 'forest of people'. What does it tell us about the structure of Indian joint families?",
    answer: (
      <>
        <Highlight color="green">&ldquo;Forest of people&rdquo;</Highlight>{" "}
        suggests a dense, overwhelming crowd with no privacy. In a joint
        family, every action is <strong>observed and judged</strong>.
        Nomita looks around, sees the hurly-burly, and knows she must
        perform composure.
      </>
    ),
  },
];

export default function MatchboxPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author */}
          <div id="author">
            <AuthorCard name="Ashapurna Debi" />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Matchbox</em> is a short story by{" "}
            <Highlight color="yellow">Ashapurna Debi</Highlight> (1909&ndash;1995),
            a prominent Bengali novelist and poet. Translated from Bengali by{" "}
            <strong>Prasenjit Gupta</strong>, the story explores the{" "}
            <Highlight color="pink">inner fire</Highlight> of a young woman
            trapped in a patriarchal joint family &mdash; and the matchbox that
            becomes her weapon.
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
                  <em>Matchbox</em> by{" "}
                  <Highlight color="yellow">Ashapurna Debi</Highlight> is a story
                  about a young wife, Nomita, whose husband Ajit{" "}
                  <strong>opens and reads her letters</strong>.
                </li>
                <li>
                  When she confronts him, he insults her mother. Nomita grabs
                  his matchbox and{" "}
                  <Highlight color="pink">sets her sari on fire</Highlight>.
                </li>
                <li>
                  The story ends with the narrator comparing women to matchboxes
                  &mdash; they have the gunpowder but{" "}
                  <strong>never flare up</strong>.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <em>Matchbox</em> by{" "}
                  <Highlight color="yellow">Ashapurna Debi</Highlight> is set in
                  a three-storey joint family house on a Sunday morning.
                </li>
                <li>
                  <Highlight color="blue">Nomita</Highlight> discovers a
                  crumpled letter from her mother in Ajit&rsquo;s pocket &mdash;
                  he opened and read it three days ago without telling her.
                </li>
                <li>
                  Ajit has the key to the letter-box and{" "}
                  <Highlight color="pink">censors her correspondence</Highlight>.
                  When she complains, he laughs it away, then scolds her.
                </li>
                <li>
                  The letter reveals her mother&rsquo;s hardships &mdash; cracked
                  ceiling, rain falling through. Ajit mocks: &ldquo;I&rsquo;ll
                  go and fill out a money-order form.&rdquo;
                </li>
                <li>
                  Nomita confronts Ajit. He calls her mother a{" "}
                  <strong>&ldquo;dung-picker&rsquo;s daughter&rdquo;</strong>.
                  Nomita grabs his matchbox and{" "}
                  <Highlight color="yellow">sets her sari on fire</Highlight>.
                </li>
                <li>
                  Ajit puts it out, terrified. Nomita returns to the family,
                  smiling through the sisters-in-law&rsquo;s sharp words.
                  She peels potatoes, secretly planning to send her mother
                  money.
                </li>
                <li>
                  The narrator concludes: women have the gunpowder to set
                  off many fires, but they{" "}
                  <strong>never flare up and burn away the mask</strong> of
                  men&rsquo;s high-mindedness.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <em>Matchbox</em> by{" "}
                  <Highlight color="yellow">Ashapurna Debi</Highlight>, translated
                  by Prasenjit Gupta, is a story about a young wife named{" "}
                  <Highlight color="blue">Nomita</Highlight> in a wealthy
                  Bengali joint family.
                </li>
                <li>
                  On a Sunday morning, while giving clothes to the washerman,
                  Nomita discovers a crumpled envelope in Ajit&rsquo;s pocket.
                  It is a letter from her mother, arrived three days ago. Ajit
                  opened it, read it, and never told her.
                </li>
                <li>
                  Ajit has gained possession of the letter-box key through the
                  gaps among the &ldquo;fifty-two hands&rdquo; of the joint
                  family. He opens Nomita&rsquo;s letters first. The suspicion
                  that he sometimes doesn&rsquo;t give them to her at all has
                  taken deep root.
                </li>
                <li>
                  The letter is from Nomita&rsquo;s mother &mdash; an indigent
                  widow who consigned her daughter to a wealthy family on the
                  strength of looks alone. She complains of a cracked ceiling,
                  rain water falling through, and takes credit for her match-making
                  skill.
                </li>
                <li>
                  Whenever Ajit sees a letter from her mother, he smiles
                  derisively: &ldquo;Why bother to read that? I&rsquo;ll go and
                  fill out a money-order form.&rdquo; Nomita&rsquo;s head hangs
                  low with shame. Previously, out of anger, she forbade her
                  mother from writing postcards.
                </li>
                <li>
                  Ajit enters after his Sunday bath. Nomita roars: &ldquo;When
                  did this letter arrive?&rdquo; Ajit pretends to forget, then
                  deflects. Nomita hisses like a snake: &ldquo;Liar!&rdquo; He
                  smiles an affected smile, then picks up the{" "}
                  <Highlight color="pink">poisoned knife</Highlight>: &ldquo;A
                  dung-picker&rsquo;s daughter becomes a queen.&rdquo;
                </li>
                <li>
                  Nomita grabs Ajit&rsquo;s matchbox, lights a matchstick, and
                  touches it to her sari. The fine anchol flares up. Ajit
                  slaps it out, terrified. He sees a fire burning in her face
                  &mdash; bright, blazing red &mdash; that he doesn&rsquo;t
                  have the courage to put out.
                </li>
                <li>
                  Her niece Rini interrupts. Nomita calms, sorts clothes,
                  returns to the family. Mejo-wife teases her about love-talk.
                  Boro-wife notices the burnt anchol. Nomita lies: &ldquo;I used
                  my anchol to lift a hot pot of water.&rdquo; Her voice must
                  not tremble.
                </li>
                <li>
                  She sits to peel potatoes, thinking how to secretly send her
                  mother a few rupees. She can&rsquo;t write &ldquo;I can&rsquo;t
                  do any more&rdquo; &mdash; because the whole village knows
                  Nomita is a queen, her husband high-minded, large-hearted.
                </li>
                <li>
                  The narrator concludes: women have the materials to set off
                  many raging fires, but they{" "}
                  <strong>never flare up and burn away the mask</strong> of
                  men&rsquo;s high-mindedness. They don&rsquo;t burn their own
                  colourful shells. The men know this too &mdash; that&rsquo;s
                  why they leave them scattered carelessly, without fear, in
                  pockets.
                </li>
              </ul>
            }
          />
        </div>
      )}

      {/* ======================== CREATIONS TAB ======================== */}
      {activeTab === "creations" && (
        <div className="animate-fade-in">
          {/* Character Sketch: Nomita */}
          <h2
            id="character-sketch-nomita"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="blue">Nomita</Highlight>
          </h2>
          <CharacterSketch name="Nomita">
            <p>
              <Highlight color="blue">Nomita</Highlight> is a young wife in a
              wealthy Bengali joint family. To the outside world she is{" "}
              <strong>&ldquo;a queen&rdquo;</strong> &mdash; married into a
              high-minded, large-hearted household. But behind closed doors,
              her reality is very different.
            </p>
            <p>
              She is trapped in a{" "}
              <Highlight color="pink">three-storey joint family</Highlight>{" "}
              where every action is observed. The sisters-in-law pinch her
              with sharp words. Her husband Ajit{" "}
              <strong>censors her letters</strong>, mocks her mother, and
              insults her origins. Yet she must smile through it all:{" "}
              <em>&ldquo;Her voice must not tremble.&rdquo;</em>
            </p>
            <p>
              Nomita&rsquo;s inner fire is{" "}
              <Highlight color="yellow">volcanic</Highlight>. When pushed to
              the limit, she grabs Ajit&rsquo;s matchbox and sets her own
              sari ablaze &mdash; a momentary, terrifying act of rebellion
              that frightens Ajit and reveals the depth of her suppressed
              rage.
            </p>
            <p>
              Yet she is not reckless. She immediately calms down, returns to
              the family, lies about the burnt anchol, and sits peeling
              potatoes while secretly planning to send her mother money.
              She embodies the matchbox metaphor:{" "}
              <strong>enough gunpowder to set a hundred Lankas aflame,
              but she never flares up</strong>.
            </p>
          </CharacterSketch>

          {/* Character Sketch: Ajit */}
          <h2
            id="character-sketch-ajit"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="green">Ajit</Highlight>
          </h2>
          <CharacterSketch name="Ajit">
            <p>
              <Highlight color="green">Ajit</Highlight> is Nomita&rsquo;s
              husband. He is the embodiment of{" "}
              <Highlight color="pink">patriarchal control</Highlight> &mdash;
              possessive, dismissive, and deeply insecure.
            </p>
            <p>
              His defining habit is opening and reading Nomita&rsquo;s
              letters. He gained the letter-box key through the gaps of the
              joint family. When confronted, he first tries to{" "}
              <strong>laugh it away</strong>, then <strong>scolds her</strong>.
              He doesn&rsquo;t fear her anger &mdash; he fears a{" "}
              <strong>row</strong>.
            </p>
            <p>
              Ajit&rsquo;s contempt for Nomita&rsquo;s mother is open and
              cruel: &ldquo;Why bother to read that? I&rsquo;ll go and fill
              out a money-order form.&rdquo; When pushed further, he picks
              up the{" "}
              <Highlight color="yellow">poisoned knife</Highlight>: &ldquo;A
              dung-picker&rsquo;s daughter becomes a queen.&rdquo;
            </p>
            <p>
              Yet when Nomita sets her sari on fire, Ajit is{" "}
              <strong>terrified</strong>. He sees a fire in her face he
              doesn&rsquo;t have the courage to put out. He tries to speak
              normally, pouring water on the situation: &ldquo;You lose all
              common sense when you get angry, don&rsquo;t you?&rdquo; His
              &ldquo;high-mindedness&rdquo; is a{" "}
              <Highlight color="blue">mask</Highlight> &mdash; and the
              narrator implies he knows it.
            </p>
          </CharacterSketch>

          {/* Character Sketch: Mother */}
          <h2
            id="character-sketch-mother"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Character Sketch:{" "}
            <Highlight color="yellow">Nomita&rsquo;s Mother</Highlight>
          </h2>
          <CharacterSketch name="Nomita's Mother">
            <p>
              Nomita&rsquo;s mother is an{" "}
              <Highlight color="green">indigent widow</Highlight> without
              husband or son. She consigned her daughter to a wealthy
              family&rsquo;s house &ldquo;on the strength of looks
              alone&rdquo; &mdash; and has never stopped taking credit for it.
            </p>
            <p>
              Her letters are a{" "}
              <Highlight color="yellow">standard litany of complaints</Highlight>:
              the ceiling is cracked, rain water falls through in ceaseless
              streams, misfortune upon misfortune. She calls Nomita{" "}
              <strong>&ldquo;a queen&rdquo;</strong> and Ajit{" "}
              <strong>&ldquo;high-minded, large-hearted&rdquo;</strong> &mdash;
              knowing these words will wound.
            </p>
            <p>
              She is both{" "}
              <Highlight color="pink">dependent and manipulative</Highlight>.
              Her complaints are genuine &mdash; she is truly poor &mdash;
              but the way she delivers them (the sarcasm about
              &ldquo;queen&rdquo; and &ldquo;high-mindedness&rdquo;) shows
              she knows how to extract money through guilt. Nomita
              simultaneously loves and resents her.
            </p>
          </CharacterSketch>

          {/* Symbolism & Themes */}
          <h2
            id="symbolism-themes"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Symbolism &amp; Themes
          </h2>

          <Callout type="important">
            <p>
              The <Highlight color="yellow">matchbox</Highlight> is the
              story&rsquo;s central symbol: women have enough{" "}
              <strong>gunpowder</strong> to set a hundred Lankas aflame,
              yet they sit meek and innocent. The story asks: what happens
              when the match is finally struck?
            </p>
          </Callout>

          <h3
            id="matchbox-symbol"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            The Matchbox
          </h3>
          <p>
            The matchbox represents{" "}
            <Highlight color="yellow">women&rsquo;s suppressed power</Highlight>.
            It contains the potential for destruction &mdash; gunpowder,
            fire, rebellion &mdash; but is kept &ldquo;meek and
            innocent&rdquo; in kitchens, pantries, and bedrooms. Nomita
            grabs the matchbox and strikes the match, but the fire is{" "}
            <strong>quickly extinguished</strong>. The men know women won&rsquo;t
            burn their own shells &mdash; that&rsquo;s why they leave them
            scattered carelessly.
          </p>

          <h3
            id="the-letter"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            The Letter
          </h3>
          <p>
            The letter is a symbol of{" "}
            <Highlight color="pink">male control over communication</Highlight>.
            Ajit opens, reads, and sometimes discards Nomita&rsquo;s
            correspondence. The letter-box key is his tool of surveillance.
            Nomita&rsquo;s private world &mdash; her relationship with her
            mother &mdash; is under his control.
          </p>

          <h3
            id="forest-of-people"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            Forest of People
          </h3>
          <p>
            The expression{" "}
            <Highlight color="green">&ldquo;forest of people&rdquo;</Highlight>{" "}
            captures the overwhelming density of the joint family. Nomita
            looks around and sees the hurly-burly on either side. There is{" "}
            <strong>no privacy</strong>, no space for genuine emotion. Every
            smile is a performance. Her voice must not tremble.
          </p>

          <h3
            id="burning-sari"
            className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
          >
            The Burning Sari
          </h3>
          <p>
            When Nomita{" "}
            <Highlight color="yellow">sets her sari on fire</Highlight>, it is
            the matchbox&rsquo;s gunpowder finally ignited. But the fire is{" "}
            <strong>momentary</strong> &mdash; Ajit puts it out, and Nomita
            returns to peeling potatoes. The act reveals the depth of her
            suppressed rage, but also its{" "}
            <strong>futility</strong>: the system absorbs even the most
            dramatic rebellion.
          </p>

          {/* Key Takeaway */}
          <KeyPoint title="Key Takeaway">
            <em>Matchbox</em> reveals the{" "}
            <Highlight color="yellow">quiet fury</Highlight> of women who
            endure patriarchal control with composure. They have the
            gunpowder to burn everything down, but they{" "}
            <strong>never flare up and burn away the mask</strong> of
            men&rsquo;s high-mindedness. The men know this &mdash; and that
            is why they leave matchboxes scattered carelessly, without
            fear, in their pockets.
          </KeyPoint>

          {/* Read & Respond */}
          <div id="read-and-respond-section" className="mt-10">
            <ReadRespond items={QA_ITEMS} />
          </div>
        </div>
      )}
    </div>
  );
}
