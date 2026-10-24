import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";

export default function ReproductiveHealthChapter() {
  return (
    <>
      <p>
        Chapter 2 described the organs of the human reproductive system and how they
        function. This chapter is about keeping that system — and the people who live
        with it — healthy. Reproductive health is a social goal as much as a medical one,
        and India was among the first countries to treat it that way.
      </p>

      <h2 id="h-3-1">3.1 Reproductive Health – Problems and Strategies</h2>
      <Callout type="important" title="Reproductive Health — WHO">
        Reproductive health means a{" "}
        <Highlight color="yellow">total well-being in all aspects of reproduction</Highlight>,
        i.e., physical, emotional, behavioural and social.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>In the narrow sense, the term refers to healthy reproductive organs with normal functions.</li>
        <li>The broader perspective includes the emotional and social aspects of reproduction too.</li>
        <li>
          A society whose people have physically and functionally normal reproductive organs,
          and normal emotional and behavioural interactions among them in all sex-related
          aspects, is called <strong>reproductively healthy</strong>.
        </li>
      </ul>
      <p>
        India was amongst the first countries in the world to initiate action plans and
        programmes at a national level to attain total reproductive health as a social goal.
        These programmes, called <strong>family planning</strong>, were initiated in{" "}
        <Highlight color="blue">1951</Highlight> and were periodically assessed over the past
        decades.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Improved programmes covering wider reproduction-related areas are currently in
          operation under the popular name{" "}
          <strong>Reproductive and Child Health Care (RCH) programmes</strong>.
        </li>
        <li>
          Creating awareness among people about various reproduction-related aspects is one
          major task under these programmes.
        </li>
        <li>
          Providing facilities and support for building up a reproductively healthy society is
          the other.
        </li>
      </ul>

      <ConceptCard title="Creating awareness — who does it, and about what" icon="📣">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Media:</strong> governmental and non-governmental agencies use audio-visual
            and print media to spread information about reproduction-related aspects.
          </li>
          <li>
            <strong>People:</strong> parents, other close relatives, teachers and friends have a
            major role in disseminating the information.
          </li>
          <li>
            <strong>Schools:</strong> introduction of sex education should be encouraged to
            provide the right information to the young, so that children are discouraged from
            believing in myths and having misconceptions about sex-related aspects.
          </li>
          <li>
            <strong>What must be taught:</strong> reproductive organs, adolescence and related
            changes, safe and hygienic sexual practices, sexually transmitted diseases (STD),
            AIDS.
          </li>
          <li>
            <strong>Fertile couples and the marriageable age group:</strong> available birth
            control options, care of pregnant mothers, post-natal care of the mother and child,
            importance of breast feeding, equal opportunities for the male and the female child.
          </li>
          <li>
            <strong>Social awareness:</strong> problems due to uncontrolled population growth and
            social evils like sex-abuse and sex-related crimes, so that people think and take up
            necessary steps to prevent them.
          </li>
        </ul>
      </ConceptCard>

      <Callout type="note" title="What implementation actually needs">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Strong infrastructural facilities</strong>, <strong>professional expertise</strong>{" "}
            and <strong>material support</strong> are essential to provide medical assistance and
            care to people in reproduction-related problems.
          </li>
          <li>
            The problems include pregnancy, delivery, STDs, abortions, contraception, menstrual
            problems and infertility.
          </li>
          <li>
            Implementation of better techniques and new strategies from time to time is also
            required to provide more efficient care and assistance to people.
          </li>
          <li>
            Research on various reproduction-related areas is encouraged and supported by
            governmental and non-governmental agencies, to find out new methods and/or to improve
            upon the existing ones.
          </li>
        </ul>
      </Callout>

      <h3>Amniocentesis and the ban on its misuse</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          In <strong>amniocentesis</strong>, some of the amniotic fluid of the developing foetus
          is taken to analyse the foetal cells and dissolved substances.
        </li>
        <li>
          The procedure is used to test for the presence of certain genetic disorders such as
          Down syndrome, haemophilia, sickle-cell anaemia, and to determine the survivability of
          the foetus.
        </li>
        <li>
          A <strong>statutory ban</strong> on amniocentesis for sex-determination exists to
          legally check the increasing menace of <strong>female foeticides</strong>.
        </li>
        <li>Massive child immunisation is another programme that merits mention in this connection.</li>
      </ul>

      <Callout type="didyouknow" title="Developed in India">
        ‘Saheli’ — a new oral contraceptive for females — was developed by scientists at the
        <strong> Central Drug Research Institute (CDRI), Lucknow</strong>.
      </Callout>

      <KeyPoint title="Signs that a society has improved">
        <ul className="list-disc pl-5 space-y-1">
          <li>Better awareness about sex-related matters.</li>
          <li>Increased number of medically assisted deliveries.</li>
          <li>Better post-natal care, leading to decreased maternal and infant mortality rates.</li>
          <li>Increased number of couples with small families.</li>
          <li>Better detection and cure of STDs.</li>
          <li>Overall increased medical facilities for all sex-related problems.</li>
        </ul>
      </KeyPoint>

      <h2 id="h-3-2">3.2 Population Stabilisation and Birth Control</h2>
      <p>
        In the last century, all-round development in various fields significantly improved the
        quality of life of the people. However, increased health facilities along with better
        living conditions had an explosive impact on the growth of population.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>div]:my-0">
        <MetricCard label="World, 1900" value="2 billion" unit="(2000 million)" description="Starting point of the population climb." />
        <MetricCard label="World, 2000" value="about 6 billion" description="Health facilities and better living conditions at work." />
        <MetricCard label="World, 2011" value="7.2 billion" description="Growth continues at an alarming rate." />
        <MetricCard label="India, 1947" value="350 million" unit="approximately" description="Population at the time of independence." />
        <MetricCard label="India, 2000" value="close to 1 billion" description="Reached close to the billion mark by 2000." />
        <MetricCard label="India, May 2011" value="1.2 billion" description="Crossed the 1.2 billion mark." />
      </div>
      <MetricCard
        label="Population growth rate — 2011 census"
        value="20/1000/year"
        unit="less than 2 per cent"
        trend="down"
        description="Brought down only marginally through the RCH programme — still a rate at which the population could increase rapidly."
      />
      <p>The probable reasons for this explosive growth are:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>A rapid decline in death rate.</li>
        <li>A rapid decline in maternal mortality rate (MMR).</li>
        <li>A rapid decline in infant mortality rate (IMR).</li>
        <li>An increase in the number of people in reproducible age.</li>
      </ul>
      <Callout type="important" title="Why the government had to act">
        Such an alarming growth rate could lead to an{" "}
        <Highlight color="yellow">absolute scarcity of even the basic requirements</Highlight>{" "}
        — food, shelter and clothing — in spite of significant progress made in those areas.
        Therefore, the government was forced to take up serious measures to check this
        population growth rate.
      </Callout>

      <h3>Measures to motivate smaller families</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>The most important step</strong> is to motivate smaller families by using
          various contraceptive methods.
        </li>
        <li>
          Media advertisements and posters/bills show a happy couple with two children under the
          slogan <strong>Hum Do Hamare Do</strong> (we two, our two).
        </li>
        <li>
          Many couples — mostly the young, urban, working ones — have even adopted a{" "}
          <strong>one child norm</strong>.
        </li>
        <li>
          Statutory raising of the marriageable age of the female to <strong>18 years</strong> and
          of the male to <strong>21 years</strong>.
        </li>
        <li>Incentives are given to couples with small families.</li>
      </ul>

      <Callout type="important" title="An ideal contraceptive should be …">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>User-friendly, easily available, effective and reversible.</li>
          <li>Free of side-effects, or with the least possible side-effects.</li>
          <li>
            In no way interfering with the sexual drive, desire and/or the sexual act of the user.
          </li>
        </ul>
      </Callout>
      <p>
        A wide range of contraceptive methods is presently available, broadly grouped into
        <strong> natural/traditional, barrier, IUDs, oral contraceptives, injectables, implants</strong>{" "}
        and <strong>surgical</strong> methods.
      </p>

      <h3>Natural / traditional methods</h3>
      <p>These work on the principle of avoiding the chances of the ovum and the sperms meeting.</p>
      <TableCard
        title="Natural and traditional methods"
        headers={["Method", "How it is practised", "Key limitation"]}
        rows={[
          {
            cells: [
              "Periodic abstinence",
              "Couples abstain from coitus from day 10 to 17 of the menstrual cycle, when ovulation could be expected.",
              "Day 10–17 is the fertile period — chances of fertilisation are very high then.",
            ],
          },
          {
            cells: [
              "Withdrawal (coitus interruptus)",
              "The male partner withdraws his penis from the vagina just before ejaculation.",
              "Depends entirely on the male partner avoiding insemination.",
            ],
          },
          {
            cells: [
              "Lactational amenorrhea (absence of menstruation)",
              "Based on the fact that ovulation, and therefore the cycle, does not occur during the period of intense lactation following parturition; as long as the mother breast-feeds fully, chances of conception are almost nil.",
              "Effective only up to a maximum period of six months following parturition.",
            ],
          },
        ]}
        caption="No medicines or devices are used in these methods, so side effects are almost nil — but the chances of failure of these methods are also high."
      />

      <h3>Barrier methods</h3>
      <p>
        In barrier methods, the ovum and the sperms are prevented from physically meeting with
        the help of barriers. Such methods are available for both males and females.
      </p>
      <TableCard
        title="Barrier methods"
        headers={["Barrier", "What it covers", "Reuse", "Added benefit / practice"]}
        rows={[
          {
            cells: [
              "Condom — male",
              "Thin rubber/latex sheath worn over the penis just before coitus, so that the ejaculated semen does not enter the female reproductive tract.",
              "Disposable; can be self-inserted, which gives privacy to the user.",
              "‘Nirodh’ is a popular brand. Also protects the user from contracting STIs and AIDS, which is why condom use has increased in recent years.",
            ],
          },
          {
            cells: [
              "Condom — female",
              "Sheath that covers the vagina and cervix.",
              "Disposable; self-inserted.",
              "Prevents semen from entering the female reproductive tract.",
            ],
          },
          {
            cells: [
              "Diaphragm, cervical cap, vault",
              "Rubber barriers inserted into the female reproductive tract to cover the cervix during coitus.",
              "Reusable.",
              "Prevent conception by blocking the entry of sperms through the cervix; spermicidal creams, jellies and foams are used along with them to increase contraceptive efficiency.",
            ],
          },
        ]}
      />

      <h3>Intra Uterine Devices (IUDs)</h3>
      <p>
        IUDs are inserted by doctors or expert nurses in the uterus through the vagina.
      </p>
      <TableCard
        title="IUDs presently available"
        headers={["Type", "Examples", "Mode of action"]}
        rows={[
          {
            cells: [
              "Non-medicated IUDs",
              "Lippes loop",
              "Increase phagocytosis of sperms within the uterus.",
            ],
          },
          {
            cells: [
              "Copper-releasing IUDs",
              "CuT, Cu7, Multiload 375",
              "The Cu ions released suppress sperm motility and the fertilising capacity of sperms.",
            ],
          },
          {
            cells: [
              "Hormone-releasing IUDs",
              "Progestasert, LNG-20",
              "In addition to increasing phagocytosis of sperms, they make the uterus unsuitable for implantation and the cervix hostile to the sperms.",
            ],
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          IUDs are <Highlight color="green">ideal contraceptives for females who want to delay pregnancy and/or space children</Highlight>.
        </li>
        <li>It is one of the most widely accepted methods of contraception in India.</li>
      </ul>

      <h3>Oral contraceptives — the pills</h3>
      <p>
        Oral administration of small doses of either progestogens or progestogen–estrogen
        combinations is another contraceptive method used by females. They are taken as tablets
        and hence are popularly called the <strong>pills</strong>.
      </p>
      <Stepper
        steps={[
          {
            label: "Start within the first five days",
            description: "Pills are taken daily for a period of 21 days, starting preferably within the first five days of the menstrual cycle.",
          },
          {
            label: "Gap of 7 days",
            description: "Pills are stopped for 7 days, during which menstruation occurs.",
          },
          {
            label: "Repeat the same pattern",
            description: "The 21 + 7 day cycle is repeated in the same pattern till the female desires to prevent conception.",
          },
          {
            label: "How they act",
            description: "They inhibit ovulation and implantation, and alter the quality of cervical mucus to prevent or retard the entry of sperms.",
          },
        ]}
      />
      <p>Pills are very effective, have lesser side effects and are well accepted by females.</p>
      <FactCard
        title="Saheli — the once-a-week pill"
        icon="💊"
        definition="The new oral contraceptive for females contains a non-steroidal preparation. It is a ‘once a week’ pill with very few side effects and high contraceptive value."
      />

      <h3>Injectables, implants and emergency contraception</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Progestogens alone, or in combination with estrogen, can also be used by females as{" "}
          <strong>injections</strong> or <strong>implants under the skin</strong>.
        </li>
        <li>Their mode of action is similar to that of pills.</li>
        <li>Their effective periods are much longer.</li>
      </ul>
      <Callout type="warning" title="Emergency contraception — within 72 hours">
        Administration of progestogens or progestogen-estrogen combinations or IUDs within{" "}
        <Highlight color="orange">72 hours of coitus</Highlight> is very effective as emergency
        contraception. It is used to avoid possible pregnancy due to rape or casual unprotected
        intercourse.
      </Callout>

      <h3>Surgical methods — sterilisation</h3>
      <p>
        Surgical methods, also called <strong>sterilisation</strong>, are generally advised for
        the male or female partner as a <strong>terminal method</strong> to prevent any more
        pregnancies. Surgical intervention blocks gamete transport and thereby prevents
        conception.
      </p>
      <Comparison
        columns={[
          {
            title: "Vasectomy (male)",
            children: (
              <ul>
                <li>A small part of the <strong>vas deferens</strong> is removed or tied up.</li>
                <li>Reached through a small incision on the <strong>scrotum</strong>.</li>
              </ul>
            ),
          },
          {
            title: "Tubectomy (female)",
            children: (
              <ul>
                <li>A small part of the <strong>fallopian tube</strong> is removed or tied up.</li>
                <li>Reached through a small incision in the <strong>abdomen or through the vagina</strong>.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        These techniques are highly effective, but their{" "}
        <Highlight color="yellow">reversibility is very poor</Highlight>.
      </p>
      <MistakeCard
        mistake="Surgical methods of contraception prevent gamete formation."
        correction="They prevent gamete transport. Gametes are still formed — the vas deferens or the fallopian tube is blocked, so the sperm and the ovum cannot meet."
      />

      <Callout type="warning" title="Before choosing any method">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Selection of a suitable contraceptive method and its use should always be undertaken
            in <strong>consultation with qualified medical professionals</strong>.
          </li>
          <li>
            Contraceptives are <strong>not regular requirements</strong> for the maintenance of
            reproductive health — they are practised against a natural reproductive event, i.e.,
            conception/pregnancy.
          </li>
          <li>
            One is forced to use these methods either to prevent pregnancy or to delay or space
            pregnancy due to personal reasons.
          </li>
          <li>
            Possible ill-effects — nausea, abdominal pain, breakthrough bleeding, irregular
            menstrual bleeding or even breast cancer — are not very significant but should not be
            totally ignored.
          </li>
        </ul>
      </Callout>

      <h2 id="h-3-3">3.3 Medical Termination of Pregnancy (MTP)</h2>
      <FactCard
        title="Medical termination of pregnancy"
        definition="Intentional or voluntary termination of pregnancy before full term is called medical termination of pregnancy (MTP) or induced abortion."
      />
      <MetricCard
        label="MTPs performed worldwide"
        value="45–50 million"
        unit="a year"
        description="This accounts for about 1/5th of the total number of conceived pregnancies in a year."
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Whether to accept or legalise MTP is debated in many countries because of the
          emotional, ethical, religious and social issues involved in it.
        </li>
        <li>
          The Government of India legalised MTP in <Highlight color="blue">1971</Highlight> with
          some strict conditions, to avoid its misuse.
        </li>
        <li>
          Such restrictions are all the more important to check indiscriminate and illegal female
          foeticides, which are reported to be high in India.
        </li>
      </ul>

      <h3>Why MTP?</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>To get rid of unwanted pregnancies due to casual unprotected intercourse.</li>
        <li>To get rid of a pregnancy that resulted from failure of the contraceptive used during coitus.</li>
        <li>Pregnancy resulting from rape.</li>
        <li>
          Where continuation of the pregnancy could be harmful or even fatal — to the mother, to
          the foetus, or to both.
        </li>
      </ul>
      <p>
        MTPs are considered relatively safe during the <strong>first trimester</strong>, i.e., up
        to 12 weeks of pregnancy. <strong>Second trimester</strong> abortions are much more
        riskier.
      </p>
      <Callout type="warning" title="Two dangerous trends">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            A majority of the MTPs are performed illegally by <strong>unqualified quacks</strong>{" "}
            — not only unsafe but possibly fatal.
          </li>
          <li>
            Misuse of <strong>amniocentesis</strong> to determine the sex of the unborn child:
            frequently, if the foetus is found to be female, it is followed by MTP — totally
            against what is legal.
          </li>
        </ul>
      </Callout>

      <ConceptCard title="The Medical Termination of Pregnancy (Amendment) Act, 2017" icon="⚖️">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Enacted by the Government of India with the intention of reducing the incidence of
            illegal abortion and the consequent maternal mortality and morbidity.
          </li>
          <li>
            <strong>Within the first 12 weeks</strong> — a pregnancy may be terminated on certain
            considered grounds on the opinion of <strong>one registered medical practitioner</strong>.
          </li>
          <li>
            <strong>More than 12 weeks but fewer than 24 weeks</strong> —{" "}
            <strong>two registered medical practitioners</strong> must be of the opinion, formed
            in good faith, that the required ground exists.
          </li>
          <li>
            <strong>Ground (i):</strong> the continuation of the pregnancy would involve a risk to
            the life of the pregnant woman or of grave injury to physical or mental health.
          </li>
          <li>
            <strong>Ground (ii):</strong> there is a substantial risk that if the child were born,
            it would suffer from such physical or mental abnormalities as to be seriously
            handicapped.
          </li>
        </ul>
      </ConceptCard>
      <p>
        Such practices should be avoided because they are dangerous both for the young mother and
        the foetus. Effective counselling on the need to avoid unprotected coitus and on the risk
        factors involved in illegal abortions, as well as providing more health care facilities,
        could reverse this unhealthy trend.
      </p>

      <h2 id="h-3-4">3.4 Sexually Transmitted Infections (STIs)</h2>
      <FactCard
        title="Sexually transmitted infections"
        definition="Infections or diseases which are transmitted through sexual intercourse are collectively called sexually transmitted infections (STI) or venereal diseases (VD) or reproductive tract infections (RTI)."
      />
      <p>
        Gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis,
        hepatitis-B and, of course, the most discussed infection in recent years, HIV leading to
        AIDS, are some of the common STIs. Among these, <strong>HIV infection is the most
        dangerous</strong> and is discussed in detail in Chapter 7.
      </p>
      <TableCard
        title="Which STIs can be cured?"
        headers={["STI", "Completely curable if detected early and treated properly?"]}
        rows={[
          { cells: ["Gonorrhoea", "Yes"] },
          { cells: ["Syphilis", "Yes"] },
          { cells: ["Chlamydiasis", "Yes"] },
          { cells: ["Genital warts", "Yes"] },
          { cells: ["Trichomoniasis", "Yes"] },
          { cells: ["Hepatitis-B", "No"] },
          { cells: ["Genital herpes", "No"] },
          { cells: ["HIV leading to AIDS", "No"] },
        ]}
        caption="Except for hepatitis-B, genital herpes and HIV infections, the other diseases are completely curable if detected early and treated properly."
      />
      <p>
        Hepatitis-B and HIV can also be transmitted by routes other than sexual intercourse:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Sharing of injection needles or surgical instruments with infected persons.</li>
        <li>Transfusion of blood.</li>
        <li>From an infected mother to the foetus.</li>
      </ul>

      <h3>Symptoms and complications</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Early symptoms of most STIs are <strong>minor</strong> — itching, fluid discharge,
          slight pain, swellings, etc., in the genital region.
        </li>
        <li>
          Infected females may often be <strong>asymptomatic</strong> and hence may remain
          undetected for long.
        </li>
        <li>
          Absence or less significant symptoms in the early stages, and the{" "}
          <strong>social stigma</strong> attached to STIs, deter infected persons from going for
          timely detection and proper treatment.
        </li>
      </ul>
      <Callout type="warning" title="What delay leads to">
        Complications include <strong>pelvic inflammatory diseases (PID)</strong>, abortions,
        still births, ectopic pregnancies, infertility or even <strong>cancer of the reproductive
        tract</strong>.
      </Callout>
      <p>
        STIs are a major threat to a healthy society. Therefore, prevention, or early detection and
        cure, is given prime consideration under the reproductive health-care programmes. Though
        all persons are vulnerable, incidences are reported to be very high among persons in the
        age group of <strong>15–24 years</strong>.
      </p>
      <KeyPoint title="Three principles that keep STIs away">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Avoid sex with unknown partners/multiple partners.</li>
          <li>Always try to use condoms during coitus.</li>
          <li>
            In case of doubt, go to a qualified doctor for early detection, and get complete
            treatment if diagnosed with an infection.
          </li>
        </ol>
      </KeyPoint>
      <MistakeCard
        mistake="All sexually transmitted diseases are completely curable."
        correction="Hepatitis-B, genital herpes and HIV infection are not completely curable. The remaining STIs are curable only if detected early and treated properly."
      />

      <h2 id="h-3-5">3.5 Infertility</h2>
      <FactCard
        title="Infertility"
        definition="A couple is infertile when it is unable to produce children in spite of unprotected sexual co-habitation; that is, when it is unable to conceive even after 2 years of unprotected sexual cohabitation."
      />
      <p>The reasons for infertility could be many:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Physical.</li>
        <li>Congenital.</li>
        <li>Diseases.</li>
        <li>Drugs.</li>
        <li>Immunological.</li>
        <li>Psychological.</li>
      </ul>
      <p>
        In India, often the female is blamed for the couple being childless, but more often than
        not, the problem lies in the <strong>male partner</strong>. Specialised health care units
        (infertility clinics, etc.) could help in diagnosis and corrective treatment of some of
        these disorders and enable these couples to have children. Where such corrections are not
        possible, couples could be assisted to have children through certain special techniques
        commonly known as <strong>assisted reproductive technologies (ART)</strong>.
      </p>

      <h3>In vitro fertilisation and embryo transfer</h3>
      <p>
        <strong>In vitro fertilisation (IVF)</strong> means fertilisation outside the body, in
        almost similar conditions as those in the body. It is followed by{" "}
        <strong>embryo transfer (ET)</strong>, and is popularly known as the{" "}
        <Highlight color="yellow">test tube baby programme</Highlight>.
      </p>
      <ProcessCard
        title="IVF followed by embryo transfer"
        steps={[
          {
            label: "Collect the gametes",
            description: "Ova from the wife/donor (female) and sperms from the husband/donor (male) are collected.",
          },
          {
            label: "Form the zygote in the laboratory",
            description: "The gametes are induced to form a zygote under simulated conditions in the laboratory — this is in vitro fertilisation.",
          },
          {
            label: "Up to 8 blastomeres → fallopian tube",
            description: "The zygote or early embryos with up to 8 blastomeres are transferred into the fallopian tube — ZIFT, zygote intra fallopian transfer.",
          },
          {
            label: "More than 8 blastomeres → uterus",
            description: "Embryos with more than 8 blastomeres are transferred into the uterus — IUT, intra uterine transfer — to complete further development.",
          },
          {
            label: "Embryos from in-vivo fertilisation can also be used",
            description: "Embryos formed by in-vivo fertilisation (fusion of gametes within the female) could also be used for such transfer, to assist females who cannot conceive.",
          },
        ]}
      />
      <Comparison
        columns={[
          {
            title: "ZIFT — zygote intra fallopian transfer",
            children: (
              <ul>
                <li>Transfers the <strong>zygote or early embryo</strong>.</li>
                <li>Stage: <strong>up to 8 blastomeres</strong>.</li>
                <li>Site: the <strong>fallopian tube</strong>.</li>
              </ul>
            ),
          },
          {
            title: "IUT — intra uterine transfer",
            children: (
              <ul>
                <li>Transfers the <strong>embryo</strong>.</li>
                <li>Stage: <strong>more than 8 blastomeres</strong>.</li>
                <li>Site: the <strong>uterus</strong>.</li>
              </ul>
            ),
          },
        ]}
      />

      <h3>GIFT, ICSI and artificial insemination</h3>
      <TableCard
        title="Other assisted reproductive techniques"
        headers={["Technique", "What is transferred or done", "Where it is placed"]}
        rows={[
          {
            cells: [
              "GIFT — gamete intra fallopian transfer",
              "An ovum collected from a donor is transferred to another female who cannot produce one but can provide a suitable environment for fertilisation and further development.",
              "Fallopian tube",
            ],
          },
          {
            cells: [
              "ICSI — intra cytoplasmic sperm injection",
              "A specialised procedure to form an embryo in the laboratory: a sperm is directly injected into the ovum.",
              "In the laboratory (embryo then transferred)",
            ],
          },
          {
            cells: [
              "AI — artificial insemination",
              "Semen collected either from the husband or a healthy donor is artificially introduced into the female.",
              "Vagina, or uterus (IUI — intra-uterine insemination)",
            ],
          },
        ]}
        caption="AI is used where the male partner is unable to inseminate the female, or where the sperm counts in the ejaculates are very low."
      />
      <MistakeCard
        mistake="IUI and IUT are the same procedure."
        correction="IUI (intra-uterine insemination) places semen in the uterus. IUT (intra uterine transfer) places an embryo in the uterus."
      />

      <h3>Limits, and the option of adoption</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          All these techniques require <strong>extremely high precision handling</strong> by
          specialised professionals and <strong>expensive instrumentation</strong>.
        </li>
        <li>
          Therefore, these facilities are presently available only in very few centres in the
          country, and their benefits are affordable to only a limited number of people.
        </li>
        <li>Emotional, religious and social factors are also deterrents in the adoption of these methods.</li>
        <li>
          Since the ultimate aim of all these procedures is to have children, and India has many
          orphaned and destitute children who would probably not survive till maturity unless
          taken care of, <strong>our laws permit legal adoption</strong>.
        </li>
      </ul>
      <KeyPoint title="Adoption">
        Legal adoption is, as yet, one of the best methods for couples looking for parenthood.
      </KeyPoint>

      <h2 id="h-3-exercises">Exercises</h2>
      <Expandable title="Exercises 3.1 – 3.12 — NCERT end-of-chapter questions" variant="exercise">
        <ExerciseQa
          questions={[
            "What do you think is the significance of reproductive health in a society?",
            "Suggest the aspects of reproductive health which need to be given special attention in the present scenario.",
            "Is sex education necessary in schools? Why?",
            "Do you think that reproductive health in our country has improved in the past 50 years? If yes, mention some such areas of improvement.",
            "What are the suggested reasons for population explosion?",
            "Is the use of contraceptives justified? Give reasons.",
            "Removal of gonads cannot be considered as a contraceptive option. Why?",
            "Amniocentesis for sex determination is banned in our country. Is this ban necessary? Comment.",
            "Suggest some methods to assist infertile couples to have children.",
            "What are the measures one has to take to prevent from contracting STDs?",
            <>
              State True/False with explanation:
              <br />
              (a) Abortions could happen spontaneously too. (True/False)
              <br />
              (b) Infertility is defined as the inability to produce a viable offspring and is
              always due to abnormalities/defects in the female partner. (True/False)
              <br />
              (c) Complete lactation could help as a natural method of contraception. (True/False)
              <br />
              (d) Creating awareness about sex related aspects is an effective method to improve
              reproductive health of the people. (True/False)
            </>,
            <>
              Correct the following statements:
              <br />
              (a) Surgical methods of contraception prevent gamete formation.
              <br />
              (b) All sexually transmitted diseases are completely curable.
              <br />
              (c) Oral pills are very popular contraceptives among the rural women.
              <br />
              (d) In E.T. techniques, embryos are always transferred into the uterus.
            </>,
          ]}
          answers={[
            <>
              A reproductively healthy society has people with physically and functionally normal
              reproductive organs, and normal emotional and behavioural interactions in all
              sex-related aspects. Such a society can bring up socially conscious, healthy families
              of the desired size, check uncontrolled population growth, prevent STIs, and reduce
              maternal and infant mortality.
            </>,
            <>
              Awareness about reproductive organs, adolescence and related changes, safe and hygienic
              sexual practices and STIs; counselling on birth control options for fertile couples;
              care of pregnant mothers and post-natal care of mother and child; safe MTP facilities;
              early detection and cure of STIs; help for infertile couples; and checking the misuse
              of amniocentesis for sex determination.
            </>,
            <>
              Yes. Sex education provides the right information to the young and discourages children
              from believing in myths and having misconceptions about sex-related aspects. Proper
              information about reproductive organs, adolescence and related changes, safe and
              hygienic sexual practices, STDs and AIDS helps adolescents lead a reproductively
              healthy life.
            </>,
            <>
              Yes. The signs are better awareness about sex-related matters, an increased number of
              medically assisted deliveries, better post-natal care leading to decreased maternal and
              infant mortality rates, an increased number of couples with small families, and better
              detection and cure of STDs.
            </>,
            <>
              Improved health facilities and better living conditions, a rapid decline in death rate,
              in maternal mortality rate (MMR) and in infant mortality rate (IMR), and an increase in
              the number of people in reproducible age.
            </>,
            <>
              Yes, within limits. Contraceptives are needed to prevent unwanted pregnancy and to delay
              or space pregnancy, and their widespread use checks uncontrolled population growth.
              However, they are not regular requirements for reproductive health, a suitable method
              must be chosen in consultation with a qualified medical professional, and their possible
              ill-effects should not be ignored.
            </>,
            <>
              Removal of gonads makes a person permanently sterile and is irreversible; it also
              disturbs the hormonal balance of the body. An ideal contraceptive should be reversible,
              should have no or the least side-effects, and should not interfere with the sexual drive,
              desire or the sexual act. Contraceptive methods act by preventing gametes from meeting or
              by blocking gamete transport, not by removing the gamete-producing organs.
            </>,
            <>
              Yes. Amniocentesis is meant for analysing foetal cells to detect genetic disorders such
              as Down syndrome, haemophilia and sickle-cell anaemia, and to determine the survivability
              of the foetus. Its misuse for sex determination leads to female foeticide, so the
              statutory ban is necessary to check this menace.
            </>,
            <>
              In vitro fertilisation followed by embryo transfer (ZIFT when the zygote or an early
              embryo of up to 8 blastomeres is placed in the fallopian tube, IUT when an embryo of more
              than 8 blastomeres is placed in the uterus), GIFT (transfer of a donor ovum into the
              fallopian tube), ICSI (a sperm injected directly into the ovum), artificial insemination
              including IUI, and legal adoption.
            </>,
            <>
              Avoid sex with unknown partners or multiple partners; always try to use condoms during
              coitus; and in case of doubt, go to a qualified doctor for early detection and complete
              treatment. Not sharing injection needles and avoiding transfusion of infected blood also
              help.
            </>,
            <>
              (a) <strong>True</strong> — spontaneous abortions (miscarriages) do occur naturally.
              <br />
              (b) <strong>False</strong> — infertility may be due to problems in the male partner as
              well; more often than not, the problem lies in the male partner.
              <br />
              (c) <strong>True</strong> — lactational amenorrhea prevents ovulation during intense
              lactation, though it is effective only up to about six months after parturition.
              <br />
              (d) <strong>True</strong> — awareness about reproductive organs, adolescence, safe sexual
              practices and STIs is the primary step towards reproductive health.
            </>,
            <>
              (a) Surgical methods prevent gamete <em>transport</em>, not gamete formation.
              <br />
              (b) Not all STDs are completely curable — hepatitis-B, genital herpes and HIV infection
              are not.
              <br />
              (c) Oral pills are popular contraceptives among females, not specifically among rural
              women.
              <br />
              (d) In embryo transfer techniques, embryos are not always transferred to the uterus:
              those with up to 8 blastomeres go into the fallopian tube (ZIFT), and only those with
              more than 8 blastomeres into the uterus (IUT).
            </>,
          ]}
        />
      </Expandable>
    </>
  );
}
