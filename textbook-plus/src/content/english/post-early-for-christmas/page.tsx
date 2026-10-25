"use client";

import { useState } from "react";
import { KeyPoint } from "@/components/content/KeyPoint";
import { ChapterIntro } from "@/components/content/ChapterIntro";
import { SummaryLevels } from "@/components/content/SummaryLevels";
import { ContentTabs } from "@/components/content/ContentTabs";
import { ReadRespond } from "@/components/content/ReadRespond";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { CharacterSketch } from "@/components/content/CharacterSketch";
import { CollapsibleSection } from "@/components/content/CollapsibleSection";

const QA_ITEMS = [
  {
    question:
      "What was the Assistant's experience at the post office the other day? Why does she consider people funny?",
    answer: (
      <>
        She had an extremely busy day without a minute&rsquo;s rest because of
        the Christmas rush. She considers people funny because someone once
        asked her where to buy a stamp inside a post office, and a man with poor
        eyesight put his glasses on the counter and asked her for a pint of
        beer.
      </>
    ),
  },
  {
    question: "Why does Mrs Smith dislike snow for Christmas?",
    answer: (
      <>
        Snow aggravates her rheumatism. The previous Christmas it troubled her so
        badly that she could not enjoy herself at all.
      </>
    ),
  },
  {
    question: "Why does the Assistant insist on people posting early for Christmas?",
    answer: (
      <>
        So that parcels are handled properly and reach their destinations in
        time, instead of being damaged or delayed in the chaotic last-minute
        rush.
      </>
    ),
  },
  {
    question: "What is the purpose of the old Gentleman's visit to the post office?",
    answer: <>He comes to collect his old age pension.</>,
  },
  {
    question: "Why does the Old Gentleman get angry with the Assistant?",
    answer: (
      <>
        He is hard of hearing. He mistakes her request for his pension{" "}
        <em>book</em> as a request for a <em>cook</em>, thinks she is playing a
        joke on him, and calls her impudent.
      </>
    ),
  },
  {
    question: "What is the problem with the Old Lady's cat?",
    answer: (
      <>
        Her cat Tiddles is sick — its ear is injured and needs attention. She has
        walked into the post office thinking it is a veterinary clinic.
      </>
    ),
  },
  {
    question: "Why does the old lady decide to buy something from the post office?",
    answer: (
      <>
        She is sorry for having troubled the Assistant over nothing, so she buys
        a two-and-a-half-penny stamp — &ldquo;a very pretty one&rdquo; — to make
        amends before leaving.
      </>
    ),
  },
  {
    question: "Why did the farmer humorously enquire about bombs?",
    answer: (
      <>
        He had just read a morning newspaper report about a time-bomb disguised
        as a Christmas parcel in a London post office, so he teases the Assistant
        by asking what one should do if a parcel started ticking.
      </>
    ),
  },
  {
    question: "What was the newspaper report on?",
    answer: (
      <>
        A warning issued by{" "}
        <Highlight color="yellow">Scotland Yard</Highlight> after a time-bomb
        disguised as a Christmas parcel was discovered in a London post office.
        Any suspicious-looking parcel was to be reported to the local police
        station at once.
      </>
    ),
  },
  {
    question: "How can a time-bomb be detected?",
    answer: (
      <>
        According to the farmer, a time-bomb gives itself away by{" "}
        <strong>ticking</strong> before it explodes.
      </>
    ),
  },
  {
    question:
      "Why does the Assistant tell the tourist that the parcel was in time?",
    answer: (
      <>
        The tourist regrets that he could not &ldquo;post early for
        Christmas&rdquo;. She reassures him that his parcel is still in time — it
        will be collected at midday and sent for sorting.
      </>
    ),
  },
  {
    question: "Why is the tourist very anxious about his parcel?",
    answer: (
      <>
        It contains a delicate and valuable{" "}
        <Highlight color="green">Swiss clock</Highlight> brought all the way from
        Switzerland as a special gift. He asks that it be handled carefully, kept
        unopened and protected from theft.
      </>
    ),
  },
  {
    question: "Why does everyone in the post office become anxious about the Tourist's parcel?",
    answer: (
      <>
        Young Bertie hears a distinct ticking coming from inside the package.
        Coming straight after the newspaper report and the farmer&rsquo;s remark
        about ticking time-bombs, it convinces everybody that the parcel is about
        to explode.
      </>
    ),
  },
  {
    question: "Why do the people in the post office try to hide themselves?",
    answer: (
      <>
        They are afraid that the ticking parcel is a time-bomb about to detonate,
        so they dive under the counter to take cover.
      </>
    ),
  },
  {
    question: "Why does the Assistant bring a bucket of water?",
    answer: (
      <>
        The Policeman decides that the parcel must be dealt with at once. She
        fetches water so that he can submerge and neutralize the suspected
        time-bomb.
      </>
    ),
  },
  {
    question: "Why does the tourist return to the post office?",
    answer: (
      <>
        He comes back to collect his gloves, which he had accidentally left on
        the counter.
      </>
    ),
  },
  {
    question: "How does the play end?",
    answer: (
      <>
        The tourist pulls his parcel out of the water and finds his valuable Swiss
        clock completely ruined. He furiously threatens to sue them and report the
        post office to the Postmaster General, then storms out. Disgusted by so
        much human silliness, the Assistant puts on her coat and quits on the spot
        — she is going to work at the local{" "}
        <strong>animal dispensary</strong>, because &ldquo;animals don&rsquo;t do
        such silly things.&rdquo;
      </>
    ),
  },
];

const DISCUSSION_ITEMS = [
  {
    question: "Do you think Mrs Jones is rude in her behaviour? Why?",
    answer: (
      <>
        Yes. She speaks angrily to the Assistant, resents being reminded to post
        early, and answers curtly that when she posts is &ldquo;her own
        affair&rdquo;. She refuses advice instead of taking it politely, although
        the Assistant has only asked her to handle the bundles carefully.
      </>
    ),
  },
  {
    question:
      "What is the context of Bertie saying \u201cShe's at home Ma, watching the television\u201d?",
    answer: (
      <>
        His mother keeps correcting his grammar and finally asks where his
        grammar is. Bertie takes <em>grammar</em> to be a person, so he answers
        that &ldquo;she&rdquo; is at home watching television. The reply shows his
        cheeky, innocent nature — and the running joke about his grammar.
      </>
    ),
  },
  {
    question: "How does the Farmer frighten the people?",
    answer: (
      <>
        He reads out the newspaper report about a time-bomb hidden as a Christmas
        parcel and adds that such bombs begin to tick before they go off. When
        Bertie reports a ticking parcel a little later, the farmer shouts to take
        cover and the whole office panics.
      </>
    ),
  },
  {
    question: "What makes the tourist decide to see the Postmaster General?",
    answer: (
      <>
        The Policeman throws his parcel into a bucket of water, ruining the Swiss
        clock inside. Furious at the loss, the tourist threatens to sue them all
        and to report the post office to the Postmaster General before he storms
        out.
      </>
    ),
  },
  {
    question: "Why does the Assistant leave the post office for ever?",
    answer: (
      <>
        After a day of deaf customers, mistaken clinics, quarrelling mothers and
        a bomb scare over a clock, she is completely fed up. She is convinced that
        humans behave more foolishly than animals, so she quits to work at the
        animal dispensary.
      </>
    ),
  },
  {
    question: "Bring out the humour in the play.",
    answer: (
      <>
        The humour grows out of misunderstandings and exaggeration: the Old
        Gentleman who hears &ldquo;cook&rdquo; for &ldquo;book&rdquo;; the Fussy
        Old Lady who takes the post office for an animal clinic; Bertie&rsquo;s
        grammar and his mother&rsquo;s despair; the customer who asks for a stamp
        inside a post office; and finally a harmless clock mistaken for a bomb and
        drowned in a bucket. Nobody is wicked — everybody is merely sure of the
        wrong thing, which keeps the comedy gentle.
      </>
    ),
  },
  {
    question: "Comment on the role of the farmer.",
    answer: (
      <>
        Farmer Brown is the play&rsquo;s catalyst. He brings in the newspaper
        report, explains how a time-bomb ticks, and shouts the warning that turns
        a noisy parcel into a crisis. Without him the panic could not begin, so
        he both supplies the comedy and pushes the action towards its climax.
      </>
    ),
  },
  {
    question: "Justify the aptness of the title of the play.",
    answer: (
      <>
        The posters in the post office repeat &ldquo;Post Early for
        Christmas&rdquo;, and Mrs Smith — the sensible customer — proves the
        advice right by posting everything in good time. The title also carries
        the play&rsquo;s irony: the one man who did not post early, the tourist,
        loses his parcel to the panic. The whole action happens in the Christmas
        rush that the posters warn against.
      </>
    ),
  },
  {
    question: "Sketch the character of the Old Gentleman and the Assistant.",
    answer: (
      <>
        <strong>The Old Gentleman</strong> is very deaf, innocent and easily
        offended. He confuses &ldquo;book&rdquo; with &ldquo;cook&rdquo;, calls
        the Assistant impudent, and leaves muttering that <em>she</em> is the deaf
        one — comic because he never knows what he has said.
        <br />
        <strong>The Assistant</strong> is hard-working, patient and polite. She
        serves a stream of difficult customers without losing her temper, tries to
        act sensibly during the bomb scare, and only walks out at the end, when
        human foolishness has exhausted her patience.
      </>
    ),
  },
  {
    question: "Narrate the events that lead to the climax of the play.",
    answer: (
      <>
        The tourist posts a heavy parcel and leaves his gloves behind. Farmer
        Brown reads out the newspaper report about a time-bomb, and says bombs
        tick before they explode. Bertie then hears a ticking from the parcel.
        The farmer shouts a warning, everyone dives under the counter, and the
        Policeman is fetched. The Assistant brings a bucket of water, and the
        Policeman drops the parcel into it — the moment the tourist returns, sees
        his parcel drowned, and cries that he is ruined. The parcel is opened to
        reveal a clock, not a bomb: that reversal is the climax, and the play ends
        on the Assistant&rsquo;s resignation.
      </>
    ),
  },
];

const DISCOURSES = [
  {
    id: "character-sketch-assistant",
    title: "Character Sketch: The Young Lady Assistant",
    content: (
      <CharacterSketch name="The Young Lady Assistant">
        <p>
          The Assistant is the play&rsquo;s{" "}
          <Highlight color="blue">central figure</Highlight> &mdash; patient,
          professional, and increasingly exasperated. She deals with an absurd
          parade of customers with remarkable composure, from the confused Deaf
          Gentleman to the Fussy Old Lady who mistakes the post office for an
          animal clinic.
        </p>
        <p>
          Her patience is tested to its limits. She calmly explains, corrects, and
          serves &mdash; only to face escalating chaos. When the bomb scare erupts,
          she tries to take sensible action (fetching water) but is overruled by
          the Farmer and the Policeman. Her final decision to quit for the animal
          dispensary is the play&rsquo;s comic climax.
        </p>
      </CharacterSketch>
    ),
  },
  {
    id: "the-comedy-of-errors",
    title: "The Comedy of Errors",
    content: (
      <>
        <h3
          id="deaf-gentleman"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Deaf Old Gentleman
        </h3>
        <p>
          His deafness creates a chain of{" "}
          <Highlight color="yellow">comic misunderstandings</Highlight>.
          &ldquo;Book&rdquo; becomes &ldquo;cook,&rdquo; &ldquo;did you bring
          your book&rdquo; becomes &ldquo;you want me to cook.&rdquo; He accuses
          the Assistant of being impudent, then says <em>she</em> is deaf. The
          reversal is the scene&rsquo;s sharpest comic moment.
        </p>
        <h3
          id="fussy-old-lady"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          The Fussy Old Lady
        </h3>
        <p>
          She mistakes the post office for a{" "}
          <Highlight color="green">veterinary clinic</Highlight>, seeking
          antiseptic for her cat Tiddles. When corrected, she insists on buying
          something &ldquo;to not have troubled you for nothing.&rdquo; Her
          purchase of a two-and-a-half-penny stamp is a masterclass in comic
          politeness.
        </p>
        <h3
          id="bertie"
          className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
        >
          Bertie and His Mother
        </h3>
        <p>
          Bertie&rsquo;s ungrammatical exclamations (&ldquo;I seed em,&rdquo;
          &ldquo;I sawed em&rdquo;) and his obsession with an engine next door
          provide running comedy. His mother&rsquo;s constant corrections and the
          running gag about grammar create a{" "}
          <Highlight color="blue">comic subplot</Highlight>.
        </p>
      </>
    ),
  },
];

export default function PostEarlyForChristmasPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="prose-custom max-w-none">
      <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* ======================== SUMMARY TAB ======================== */}
      {activeTab === "summary" && (
        <div className="animate-fade-in">
          {/* Author, genre, cast */}
          <div id="author">
            <ChapterIntro
              author="R. H. Wood"
              role="Playwright"
              genre="One-act play · Comedy"
              characters={[
                "A Young Lady Assistant",
                "Mrs Smith",
                "Mrs Jones",
                "A Deaf Old Gentleman",
                "A Farmer",
                "A Fussy Old Lady",
                "Mrs Higgins",
                "Bertie, her son",
                "A Foreign Tourist",
                "A Policeman",
              ]}
            />
          </div>

          {/* Introduction */}
          <h2
            id="introduction"
            className="text-2xl font-bold tracking-tight mt-14 mb-5 scroll-mt-24 text-foreground"
          >
            Introduction
          </h2>
          <p>
            <em>Post Early for Christmas</em> is a one-act play by{" "}
            <Highlight color="yellow">R. H. Wood</Highlight>, a British
            dramatist known for his simplicity of language, dramatic settings,
            and subtle presentation of stock characters. The action takes place
            inside a small post office in an English village during the
            Christmas rush.
          </p>
          <p>
            A cast of ten comic figures converges on a single post office
            counter. What begins as a busy December day escalates into a{" "}
            <Highlight color="pink">bomb scare</Highlight> when a ticking parcel,
            a newspaper report, and a chain of misunderstandings collide.
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
                  <strong>Setting</strong>: a village post office on a busy
                  December day. The posters read &ldquo;Post Early for
                  Christmas.&rdquo;
                </li>
                <li>
                  <strong>Central incident</strong>: a foreign tourist posts a
                  heavy parcel, and Bertie hears it ticking.
                </li>
                <li>
                  <strong>Panic</strong>: Farmer Brown&rsquo;s newspaper report
                  about a time-bomb convinces everyone that the parcel will
                  explode, and they hide under the counter.
                </li>
                <li>
                  <strong>Climax</strong>: the Policeman throws the parcel into a
                  bucket of water — it was a Swiss clock, now ruined.
                </li>
                <li>
                  <strong>Ending</strong>: the tourist threatens to sue, and the
                  Assistant quits for the animal dispensary.
                </li>
              </ul>
            }
            standard={
              <ul className="space-y-2 text-foreground/90 text-[1.0625rem] leading-[1.75]">
                <li>
                  The Assistant opens the play by describing her busy day and the
                  funny customers she has met. Mrs Smith arrives, having posted
                  everything early, and complains that snow worsens her
                  rheumatism. Mrs Jones arrives with heavy parcels and answers
                  every piece of advice with &ldquo;when I post is my own
                  affair.&rdquo;
                </li>
                <li>
                  The Deaf Old Gentleman, Sam, comes for his old age pension. He
                  hears &ldquo;book&rdquo; as &ldquo;cook&rdquo;, thinks the
                  Assistant is mocking him, and leaves saying that{" "}
                  <em>she</em> must be deaf.
                </li>
                <li>
                  The Fussy Old Lady mistakes the post office for an animal
                  clinic and asks for something for her sick cat, then buys a
                  stamp out of politeness. Farmer Brown comes to weigh a parcel
                  and reads out a newspaper report:{" "}
                  <Highlight color="yellow">Scotland Yard</Highlight> has warned
                  about a time-bomb disguised as a Christmas parcel. Time-bombs,
                  he says, tick before they explode.
                </li>
                <li>
                  Mrs Higgins arrives with Bertie, who keeps begging for a toy
                  engine or ice cream. A foreign tourist — dark, sinister, in
                  black — posts a heavy parcel to a friend, pays five shillings,
                  and asks that it be handled carefully, kept unopened and
                  protected from theft. He leaves his gloves behind.
                </li>
                <li>
                  Bertie inspects the parcel and hears ticking. The farmer shouts
                  for everyone to take cover and the whole office dives under the
                  counter. Bertie fetches a Policeman; the Assistant fetches a
                  bucket of water; the Policeman throws the parcel in.
                </li>
                <li>
                  The tourist returns for his gloves and pulls a ruined{" "}
                  <Highlight color="green">Swiss clock</Highlight> out of the
                  water. He threatens to sue them and report the office to the
                  Postmaster General, then storms out. The Assistant puts on her
                  coat and quits — she is going to the animal dispensary, because
                  &ldquo;animals don&rsquo;t do such silly things.&rdquo;
                </li>
              </ul>
            }
            detailed={
              <div className="space-y-3 text-[0.98rem] text-foreground/85">
                <h3>Opening Chaos at the Post Office</h3>
                <p>
                  The play opens with the Assistant reflecting on her busy days
                  dealing with eccentric customers during the Christmas rush. Mrs
                  Smith arrives to buy a postal order and stamps, remarking on the
                  wisdom of posting early. Shortly after, Mrs Jones enters with
                  heavy parcels and demands careful handling, curtly telling the
                  Assistant that when she posts is her own affair.
                </p>
                <p>
                  The humour continues when the Deaf Old Gentleman (Sam) enters to
                  collect his old age pension. Mishearing the Assistant&rsquo;s
                  request for his pension &ldquo;book&rdquo; as
                  &ldquo;cook,&rdquo; he gets irritated before leaving, ironically
                  muttering that the Assistant must be deaf.
                </p>

                <h3>The Bomb Warning</h3>
                <p>
                  Farmer Brown enters to weigh a parcel and brings up a morning
                  newspaper article. He reads aloud that Scotland Yard issued a
                  warning after a time-bomb disguised as a Christmas parcel was
                  discovered in a London post office. When asked how to identify
                  one, the farmer notes that time-bombs usually start ticking
                  before exploding. Meanwhile, Mrs Higgins arrives with her young
                  son Bertie, who continually interrupts her by begging for a toy
                  engine or ice cream.
                </p>

                <h3>The Suspicious Tourist and the Ticking Parcel</h3>
                <p>
                  A Foreign Tourist — described as dark, sinister, and wearing
                  black — enters carrying a heavy package. He pays five shillings
                  to post it to a friend, anxiously asking if the package will be
                  handled carefully, kept unopened, and protected from theft.
                  After receiving assurances, he leaves, accidentally forgetting
                  his gloves on the counter.
                </p>
                <p>
                  Curious, young Bertie wanders over to inspect the Tourist&rsquo;s
                  heavy parcel and notices a distinct ticking noise coming from
                  inside. As the ticking grows louder, Farmer Brown shouts for
                  everyone to take cover, causing the customers and the Assistant
                  to dive and hide under the counter in panic.
                </p>

                <h3>The Climax and Comic Resolution</h3>
                <p>
                  Bertie fetches a Policeman, who arrives to inspect the
                  situation. Convinced that an infernal machine is about to
                  detonate, the Assistant fetches a bucket of water. To neutralize
                  the threat, the Policeman promptly throws the ticking parcel
                  straight into the bucket.
                </p>
                <p>
                  At that exact moment, the Foreign Tourist returns to collect his
                  forgotten gloves. Horrified, he watches the Policeman submerge
                  his package. Reaching into the water, the Tourist pulls out a
                  valuable Swiss clock, now completely ruined. Furious, he screams
                  at them for destroying a clock he brought all the way from
                  Switzerland, threatening to sue them and report the post office
                  to the Postmaster General before storming out.
                </p>
                <p>
                  Realizing the absurdity of the situation, the Assistant puts on
                  her coat and quits her job on the spot. She announces she is
                  going to work at the local animal dispensary because
                  &ldquo;animals don&rsquo;t do such silly things,&rdquo; leaving
                  the post office for ever.
                </p>
              </div>
            }
          />

          {/* Themes */}
          <div id="themes">
            <h3
              id="miscommunication"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Miscommunication
            </h3>
            <p>
              The play is built on a chain of{" "}
              <Highlight color="yellow">misunderstandings</Highlight>. The Deaf
              Gentleman mishears, the Old Lady mistakes the post office, the
              Farmer&rsquo;s bomb joke triggers panic, and the Tourist&rsquo;s
              heavy parcel says nothing at all — only its ticking does. Every
              character exists in their own linguistic bubble.
            </p>
            <h3
              id="panic-and-crowd"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Panic and Crowd Psychology
            </h3>
            <p>
              The bomb scare demonstrates how quickly{" "}
              <Highlight color="pink">collective fear</Highlight> escalates. One
              person hears a tick, others agree, and suddenly everyone is hiding
              under counters. The Policeman arrives to find them all cowering
              &mdash; a satire on how easily rational people are swept into panic.
            </p>
            <h3
              id="everyday-absurdity"
              className="text-lg font-semibold mt-10 mb-3 scroll-mt-24 text-foreground"
            >
              Everyday Absurdity
            </h3>
            <p>
              The post office becomes a microcosm of human folly. Each character
              arrives with a mundane purpose &mdash; stamps, parcels, a pension
              &mdash; and the accumulated small absurdities build to a
              catastrophic misunderstanding. The play suggests that ordinary life
              is already absurd; we just need the right trigger to notice.
            </p>
          </div>

          {/* Key Takeaway */}
          <div id="key-takeaway">
            <KeyPoint title="Key Takeaway">
              <em>Post Early for Christmas</em> is a comedy of escalating
              misunderstandings. Through a deaf old gentleman, a confused old lady,
              a mischievous child, and a ticking Swiss clock, R. H. Wood shows how{" "}
              <Highlight color="yellow">ordinary people</Highlight> can be swept
              into collective panic by the smallest trigger. The play&rsquo;s
              gentle satire on miscommunication and crowd psychology remains as
              relevant today as when it was written.
            </KeyPoint>
          </div>

          <div id="read-and-respond-section" className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight mb-5 text-foreground">
              Read &amp; Respond
            </h2>

            <Expandable title="Read and Respond — 17 textbook questions">
              <ReadRespond
                title="Textbook questions"
                items={QA_ITEMS}
              />
            </Expandable>

            <Expandable title="Discussion & Analysis — 10 questions">
              <ReadRespond
                title="Discussion and analysis"
                items={DISCUSSION_ITEMS}
              />
            </Expandable>
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
