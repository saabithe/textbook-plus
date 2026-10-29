"use client";

import { useState } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { SummaryLevels } from "@/components/content/SummaryLevels";

import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Highlight } from "@/components/content/Highlight";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const READ_RESPOND = [
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

const DISCOURSES = [
  {
    id: "character-sketch-nomita",
    title: (
      <>
        Character Sketch:{" "}
        <Highlight color="blue">Nomita</Highlight>
      </>
    ),
    content: (
      <CharacterSketch name="Nomita">
        <p>
          <Highlight color="blue">Nomita</Highlight> is a young wife in a
          wealthy Bengali joint family. To the outside world she is{" "}
          <strong>&ldquo;a queen&rdquo;</strong> &mdash; married into a
          high-minded, large-hearted household.
        </p>
        <p>
          Behind closed doors, her reality is very different.
        </p>
        <p>
          She is trapped in a{" "}
          <Highlight color="pink">three-storey joint family</Highlight>{" "}
          where every action is observed. The sisters-in-law pinch her
          with sharp words.
        </p>
        <p>
          Her husband Ajit <strong>censors her letters</strong>, mocks her
          mother, and insults her origins. Yet she must smile through it
          all: <em>&ldquo;Her voice must not tremble.&rdquo;</em>
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
          Yet she is not reckless. She immediately calms down and returns
          to the family.
        </p>
        <p>
          She lies about the burnt anchol and sits peeling potatoes,
          secretly planning to send her mother money.
        </p>
        <p>
          She embodies the matchbox metaphor:{" "}
          <strong>enough gunpowder to set a hundred Lankas aflame, but she
          never flares up</strong>.
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "character-sketch-ajit",
    title: (
      <>
        Character Sketch:{" "}
        <Highlight color="green">Ajit</Highlight>
      </>
    ),
    content: (
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
          joint family.
        </p>
        <p>
          When confronted, he first tries to <strong>laugh it away</strong>,
          then <strong>scolds her</strong>. He doesn&rsquo;t fear her anger
          &mdash; he fears a <strong>row</strong>.
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
          doesn&rsquo;t have the courage to put out.
        </p>
        <p>
          He tries to speak normally, pouring water on the situation:
          &ldquo;You lose all common sense when you get angry, don&rsquo;t
          you?&rdquo; His &ldquo;high-mindedness&rdquo; is a{" "}
          <Highlight color="blue">mask</Highlight> &mdash; and the narrator
          implies he knows it.
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "character-sketch-mother",
    title: (
      <>
        Character Sketch:{" "}
        <Highlight color="yellow">Nomita&rsquo;s Mother</Highlight>
      </>
    ),
    content: (
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
          Her complaints are genuine &mdash; she is truly poor &mdash; but
          the way she delivers them (the sarcasm about &ldquo;queen&rdquo;
          and &ldquo;high-mindedness&rdquo;) shows she knows how to extract
          money through guilt.
        </p>
        <p>Nomita simultaneously loves and resents her.</p>
      </CharacterSketch>
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
            <ChapterIntro author="Ashapurna Debi" genre="Short story" characters={["Nomita", "Ajit", "Nomita's mother"]} />
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
            <Highlight color="yellow">Ashapurna Debi</Highlight>, a Bengali
            writer. Its title names an ordinary object, and that object carries
            the whole argument of the story.
          </p>
          <p>
            A matchbox holds enough gunpowder to set a hundred Lankas aflame,
            yet it sits meek and innocent in a pocket. The story asks what
            happens when a woman who has lived like that finally strikes a
            match.
          </p>
          <p>
            It follows one Sunday in a three-storey joint family house, where
            Nomita discovers that her husband opens her letters before she reads
            them. Her answer is small, domestic and frightening &mdash; she
            picks up his matchbox.
          </p>
          <p>
            <Highlight color="yellow">
              <strong>Central theme:</strong> privacy is power &mdash; whoever
              controls a woman&rsquo;s letters controls her world, and the
              quietest rebellion can still burn.
            </Highlight>
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
                  <strong>Author</strong>: Ashapurna Debi. Characters:{" "}
                  <Highlight color="yellow">Nomita</Highlight> (young wife),{" "}
                  <Highlight color="blue">Ajit</Highlight> (husband), mother (indigent
                  widow).
                </li>
                <li>
                  <strong>Plot</strong>: Ajit intercepts his mother-in-law&rsquo;s letter,
                  mocks her poverty, and insults her. Nomita grabs his matchbox and{" "}
                  <Highlight color="green">lights her sari on fire</Highlight> in protest.
                </li>
                <li>
                  <strong>Symbol</strong>: The matchbox &mdash; Ajit&rsquo;s own possession
                  turned against him. Women have the gunpowder but{" "}
                  <Highlight color="pink">never flare up</Highlight>.
                </li>
                <li>
                  <strong>Key quotes</strong>: &ldquo;Dung-picker&rsquo;s daughter&rdquo;
                  (Ajit&rsquo;s insult) and &ldquo;Women have the gunpowder but never flare
                  up&rdquo; (narrator).
                </li>
                <li>
                  <strong>Theme</strong>:{" "}
                  <Highlight color="yellow">Quiet oppression</Highlight> works through small
                  cruelties, control of information, and social shame &mdash; women absorb
                  it rather than destroy the system.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Discovery</strong>: a Sunday morning in an enormous{" "}
                  <Highlight color="blue">three-storey joint family house</Highlight>.
                  Nomita is sorting Ajit&rsquo;s dirty clothes for the washerman when
                  she finds a crumpled, twisted envelope addressed to her. The postmark
                  is three days old &mdash; he opened it, read it, and dropped it back
                  into his pocket.
                </li>
                <li>
                  <strong>The &ldquo;ugly habit&rdquo;</strong>: Ajit keeps the
                  letter-box key and reads her mail first. When confronted in the past,
                  he laughed it off, scolded her, or hinted that he was checking for
                  secret love letters. This time the letter is from her impoverished
                  mother, asking for money to mend a{" "}
                  <Highlight color="yellow">leaking roof</Highlight>.
                </li>
                <li>
                  <strong>The mockery</strong>: Ajit&rsquo;s answer is a derisive smile
                  and an offer to &ldquo;fill out a money-order form&rdquo;. The joke is
                  aimed at a woman who has no money of her own, and Nomita is humiliated
                  by it.
                </li>
                <li>
                  <strong>Confrontation</strong>: Ajit comes in from his bath and Nomita
                  confronts him indignantly. He calls it a lapse of memory; she calls him
                  a <strong>liar</strong> and a{" "}
                  <strong>common, vulgar man</strong>. He answers with the{" "}
                  <Highlight color="pink">poisoned knife</Highlight>: &ldquo;A
                  dung-picker&rsquo;s daughter becomes a queen.&rdquo;
                </li>
                <li>
                  <strong>The fire</strong>: Nomita picks up his matchbox from the table,
                  strikes a match, and touches it to the fine anchol of her expensive
                  sari. Ajit jumps up, smothers the flame with his hands, and looks at her
                  blazing red face in fear.
                </li>
                <li>
                  <strong>The mask of calm</strong>: her niece comes in to ask about the
                  washerman. Nomita&rsquo;s voice is steady, and she goes downstairs,
                  where a sister-in-law teases her about spending time with her husband
                  and asks about the burnt anchol. She says she caught it on a hot pot
                  lifted off the stove.
                </li>
                <li>
                  <strong>Aftermath</strong>: she sits down to peel potatoes, outwardly
                  calm and secretly working out how to send her mother money.{" "}
                  <Highlight color="green">Nothing has changed outside</Highlight>, but
                  inside she has decided.
                </li>
                <li>
                  <strong>Narrator&rsquo;s closing</strong>: Women have the gunpowder but
                  never flare up and burn away the mask of men&rsquo;s high-mindedness. Men
                  know this &mdash; that&rsquo;s why they leave matchboxes scattered
                  carelessly in pockets.
                </li>
              </ul>
            }
            detailed={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  <strong>Setting as power</strong>: The joint family house with its
                  &ldquo;fifty-two hands&rdquo; is a{" "}
                  <Highlight color="yellow">microcosm of patriarchal control</Highlight>.
                  Every space is shared, every action observed. Ajit holds the letter-box
                  key &mdash; a small, ordinary object that gives him power over what Nomita
                  reads and hears from her own family. The setting is not just backdrop; it
                  is the mechanism of oppression.
                </li>
                <li>
                  <strong>Privacy violation</strong>: Ajit&rsquo;s interception of the
                  letter is the story&rsquo;s central injustice. Reading a wife&rsquo;s
                  mail before she does denies her{" "}
                  <Highlight color="pink">individuality, dignity and autonomy</Highlight>{" "}
                  &mdash; the ordinary rights a patriarchal marriage quietly withholds.
                  Nomita is not allowed a private word with her own mother.
                </li>
                <li>
                  <strong>Mother&rsquo;s letter</strong>: The mother is an indigent widow who
                  traded her daughter&rsquo;s looks for security. Her complaints &mdash;
                  cracked ceiling, rain falling through &mdash; are{" "}
                  <Highlight color="blue">real, not abstract</Highlight>. Poverty is
                  physical: water dripping on the floor, a roof that cannot keep out the
                  monsoon. The letter is a cry for help that Ajit intercepts and dismisses:
                  her mother is asking for money to repair the leaking roof.
                </li>
                <li>
                  <strong>Ajit&rsquo;s cruelty</strong>: He doesn&rsquo;t physically hit her.
                  His weapon is{" "}
                  <Highlight color="green">words</Highlight>: &ldquo;Why bother to read
                  that?&rdquo; and &ldquo;dung-picker&rsquo;s daughter.&rdquo; The insult
                  targets her origin, her mother, her identity. Ajit&rsquo;s cruelty is
                  quiet, casual, routine &mdash; which makes it more devastating than
                  violence. He doesn&rsquo;t need to raise his hand; the social structure
                  does the work for him.
                </li>
                <li>
                  <strong>The matchbox as symbol</strong>: Ajit&rsquo;s matchbox is his
                  possession &mdash; she takes{" "}
                  <Highlight color="pink">his own tool of control</Highlight> and turns it
                  into her weapon. The irony is deliberate: the instrument of his casual
                  power (he lights cigarettes, candles, stove) becomes the instrument of her
                  defiance. The matchbox represents both his carelessness and her buried
                  rage.
                </li>
                <li>
                  <strong>Nomita&rsquo;s fire</strong>: Setting her sari on fire is not
                  suicide &mdash; it is protest. She burns what is precious (her anchol, her
                  appearance, her social value) to show she has{" "}
                  <strong>nothing left to lose</strong>. The fire is visible, undeniable,
                  dangerous &mdash; everything that Nomita is not allowed to be. Ajit
                  &ldquo;slaps it out&rdquo; because he is terrified not of her death, but
                  of her anger made visible.
                </li>
                <li>
                  <strong>Aftermath</strong>: Her niece comes in to ask about the
                  washerman, and Nomita answers in a completely calm voice before going
                  downstairs. A sister-in-law teases her about spending time with her
                  husband and asks about the burnt anchol; Nomita invents a story about
                  lifting a hot pot off the stove. She lies about the burn, peels
                  potatoes, and the domestic routine continues &mdash;{" "}
                  <Highlight color="yellow">outwardly nothing has changed</Highlight>, but
                  inside she has made a decision. The sharp words (Mejo-wife teases about
                  love-talk, Boro-wife scolds about laziness) show that the oppression is
                  not just from Ajit but from the entire structure. Nomita must smile
                  through it all: &ldquo;Her voice must not tremble.&rdquo;
                </li>
                <li>
                  <strong>The &ldquo;poisoned knife&rdquo;</strong>: Ajit&rsquo;s worst
                  weapon is not the matchbox but his words. He calls her mother a
                  &ldquo;dung-picker&rsquo;s daughter&rdquo; &mdash; a class insult that
                  strikes at Nomita&rsquo;s identity. The narrator calls this a
                  &ldquo;poisoned knife&rdquo; because it wounds silently and permanently.
                  Words cannot be taken back; the scar remains.
                </li>
                <li>
                  <strong>Narrator&rsquo;s closing</strong>: Women have the gunpowder but
                  never flare up. They don&rsquo;t burn their own colourful shells. Men
                  know this &mdash; that&rsquo;s why they leave matchboxes scattered
                  carelessly in pockets. The closing is both observation and indictment: the
                  system persists because women choose endurance over destruction, and men
                  rely on that choice.
                </li>
                <li>
                  <strong>Overall theme</strong>: The story exposes how{" "}
                  <Highlight color="blue">quiet oppression</Highlight> works &mdash;
                  through small cruelties, control of information, and social shame &mdash;
                  and how women absorb and endure it rather than destroy the system that
                  oppresses them. The matchbox is the perfect symbol: full of potential
                  fire, kept meek and innocent, scattered carelessly because the men know
                  it will never be used.
                </li>
              </ul>
            }
          />

          {/* Themes */}
          <div id="symbolism-themes">
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
              It holds gunpowder, fire and rebellion, yet is kept &ldquo;meek and
              innocent&rdquo; in kitchens, pantries and bedrooms.
            </p>
            <p>
              Nomita grabs it and strikes a match, but the fire is{" "}
              <strong>quickly extinguished</strong>. Men know women won&rsquo;t
              burn their own shells &mdash; that is why they leave the boxes
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
              Ajit opens, reads and sometimes discards Nomita&rsquo;s
              correspondence.
            </p>
            <p>
              The letter-box key is his tool of surveillance. Her private world
              &mdash; her relationship with her mother &mdash; is under his
              control.
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
              looks around and sees the hurly-burly on either side.
            </p>
            <p>
              There is <strong>no privacy</strong> and no space for genuine
              emotion. Every smile is a performance, and her voice must not
              tremble.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
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
          </div>

          {/* Read & Respond */}
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
