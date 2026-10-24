import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { CycleDiagram } from "@/components/content/process/CycleDiagram";
import { Timeline } from "@/components/content/process/Timeline";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { Checklist } from "@/components/content/data/Checklist";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";

export default function HumanReproductionChapter() {
  return (
    <>
      <FactCard
        title="Humans are sexually reproducing and viviparous"
        definition="The reproductive events occur after puberty, and the young one develops inside the mother's body before birth."
        icon="👶"
      />
      <ProcessCard
        title="The reproductive events in humans"
        steps={[
          {
            label: "Gametogenesis",
            description: "Formation of gametes — sperms in males and ovum in females.",
          },
          {
            label: "Insemination",
            description: "Transfer of sperms into the female genital tract.",
          },
          {
            label: "Fertilisation",
            description: "Fusion of male and female gametes, leading to formation of a zygote.",
          },
          {
            label: "Implantation",
            description: "Formation and development of the blastocyst, and its attachment to the uterine wall.",
          },
          {
            label: "Gestation",
            description: "Embryonic development inside the uterus.",
          },
          {
            label: "Parturition",
            description: "Delivery of the baby.",
          },
        ]}
      />
      <Callout type="note" title="Male and female do not run on the same clock">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Sperm formation</strong> continues <Highlight color="yellow">even in old men</Highlight>.
          </li>
          <li>
            <strong>Formation of ovum</strong> ceases in women around the age of <strong>fifty years</strong>.
          </li>
        </ul>
      </Callout>

      <h2 id="h-2-1">2.1 The Male Reproductive System</h2>
      <p>
        The male reproductive system is located in the <strong>pelvis region</strong>. It includes a pair of
        testes alongwith accessory ducts, glands and the external genitalia.
      </p>
      <TableCard
        title="Four blocks of the male reproductive system"
        headers={["Block", "Parts", "Job"]}
        rows={[
          {
            cells: [
              "Testes",
              "A pair, lying outside the abdominal cavity in the scrotum",
              "Produce sperms and the male sex hormones",
            ],
          },
          {
            cells: [
              "Accessory ducts",
              "Rete testis, vasa efferentia, epididymis, vas deferens, ejaculatory duct, urethra",
              "Store and transport sperms from the testis to the outside",
            ],
          },
          {
            cells: [
              "Accessory glands",
              "Paired seminal vesicles, a prostate, paired bulbourethral glands",
              "Secrete the seminal plasma that carries the sperms",
            ],
          },
          {
            cells: ["External genitalia", "The penis", "Delivers semen into the female tract (insemination)"],
          },
        ]}
      />

      <h3 id="h-2-1-testes">The testes and the scrotum</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The testes are situated <strong>outside the abdominal cavity</strong>, within a pouch called the{" "}
          <strong>scrotum</strong>.
        </li>
        <li>
          Each testis is <strong>oval</strong> in shape.
        </li>
        <li>
          Length is about <strong>4 to 5 cm</strong>; width is about <strong>2 to 3 cm</strong>.
        </li>
        <li>
          The testis is covered by a <strong>dense covering</strong>.
        </li>
        <li>
          Each testis has about <strong>250 compartments</strong> called <strong>testicular lobules</strong>.
        </li>
        <li>
          Each lobule contains <strong>one to three</strong> highly coiled <strong>seminiferous tubules</strong>, in
          which sperms are produced.
        </li>
      </ul>
      <Callout type="important" title="Why the testes sit outside the body">
        The scrotum helps in maintaining the low temperature of the testes — about{" "}
        <Highlight color="yellow">2–2.5 °C lower than the normal internal body temperature</Highlight> — which is
        necessary for <strong>spermatogenesis</strong>. A temperature this close to core temperature is what the
        process cannot tolerate.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>div]:my-0">
        <MetricCard label="Scrotal cooling" value="2–2.5 °C" description="Below normal internal body temperature — needed for spermatogenesis." />
        <MetricCard label="Testicular lobules" value="250" unit="per testis" description="Compartments of a single testis." />
        <MetricCard label="Tubules per lobule" value="1–3" unit="seminiferous tubules" description="Highly coiled; the sites of sperm production." />
        <MetricCard label="Testis size (adult)" value="4–5 × 2–3" unit="cm" description="Oval testis, length × width." />
      </div>

      <h3 id="h-2-1-tubule">Inside a seminiferous tubule</h3>
      <p>
        Each seminiferous tubule is lined on its inside by two types of cells —{" "}
        <strong>male germ cells (spermatogonia)</strong> and <strong>Sertoli cells</strong>.
      </p>
      <Comparison
        columns={[
          {
            title: "Male germ cells (spermatogonia)",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Lie on the inside wall of the tubule.</li>
                <li>Undergo <strong>meiotic divisions</strong>.</li>
                <li>Finally lead to <strong>sperm formation</strong>.</li>
              </ul>
            ),
          },
          {
            title: "Sertoli cells",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Also line the inside of the tubule.</li>
                <li>Provide <strong>nutrition</strong> to the germ cells.</li>
                <li>Later nurse the developing sperms — sperm heads become embedded in them.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        The regions <strong>outside</strong> the seminiferous tubules are called{" "}
        <strong>interstitial spaces</strong>. They contain:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Small blood vessels.</li>
        <li>
          Interstitial cells, or <strong>Leydig cells</strong>.
        </li>
        <li>Other immunologically competent cells.</li>
      </ul>
      <Callout type="important" title="Leydig cells">
        Leydig cells <Highlight color="yellow">synthesise and secrete testicular hormones called androgens</Highlight>.
        They sit in the interstitial spaces, <em>not</em> inside the seminiferous tubule.
      </Callout>
      <MistakeCard
        mistake="Androgens are produced by Sertoli cells."
        correction="Androgens are produced by the Leydig cells lying in the interstitial spaces, outside the seminiferous tubules. Sertoli cells provide nutrition to the germ cells."
        example="Exercise 16(a) asks exactly this, and the statement is false."
      />

      <h3 id="h-2-1-ducts">The male sex accessory ducts</h3>
      <p>
        The ducts store and transport the sperms from the testis to the outside through the urethra.
      </p>
      <ProcessCard
        title="Route taken by a sperm"
        steps={[
          {
            label: "Seminiferous tubules → rete testis",
            description: "The seminiferous tubules of the testis open into the vasa efferentia through the rete testis.",
          },
          {
            label: "Vasa efferentia",
            description: "They leave the testis and open into the epididymis.",
          },
          {
            label: "Epididymis",
            description: "Located along the posterior surface of each testis.",
          },
          {
            label: "Vas deferens",
            description: "Ascends to the abdomen and loops over the urinary bladder.",
          },
          {
            label: "Ejaculatory duct",
            description: "The vas deferens receives a duct from the seminal vesicle and opens into the urethra as the ejaculatory duct.",
          },
          {
            label: "Urethra → urethral meatus",
            description: "The urethra originates from the urinary bladder and extends through the penis to its external opening, the urethral meatus.",
          },
        ]}
      />

      <h3 id="h-2-1-penis">The penis</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>The penis is the <strong>male external genitalia</strong>.</li>
        <li>
          It is made of <strong>special tissue</strong> that helps in <strong>erection</strong> of the penis, which
          facilitates insemination.
        </li>
        <li>
          The enlarged end is called the <strong>glans penis</strong>.
        </li>
        <li>
          The glans penis is covered by a loose fold of skin called the <strong>foreskin</strong>.
        </li>
      </ul>

      <h3 id="h-2-1-glands">The male accessory glands</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Paired <strong>seminal vesicles</strong>.</li>
        <li>A <strong>prostate</strong>.</li>
        <li>Paired <strong>bulbourethral glands</strong>.</li>
      </ul>
      <FactCard
        title="Seminal plasma"
        definition="Secretions of these glands constitute the seminal plasma, which is rich in fructose, calcium and certain enzymes."
        icon="🧪"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The seminal plasma supplies <strong>fructose</strong> — the sugar the sperms use — along with{" "}
          <strong>calcium</strong> and certain <strong>enzymes</strong>.
        </li>
        <li>
          The secretions of the bulbourethral glands also help in the <strong>lubrication of the penis</strong>.
        </li>
      </ul>
      <KeyPoint title="One line to remember">
        Testis makes the sperms <em>and</em> the androgens; the ducts carry them; the glands make the seminal plasma
        that keeps them alive and motile.
      </KeyPoint>

      <h2 id="h-2-2">2.2 The Female Reproductive System</h2>
      <p>
        The female reproductive system consists of a pair of <strong>ovaries</strong> alongwith a pair of{" "}
        <strong>oviducts</strong>, <strong>uterus</strong>, <strong>cervix</strong>, <strong>vagina</strong> and the{" "}
        <strong>external genitalia</strong>, all located in the pelvic region.
      </p>
      <TreeDiagram
        title="Organisation of the female reproductive system"
        defaultExpanded
        nodes={[
          {
            label: "Female reproductive system",
            children: [
              {
                label: "Ovaries (paired)",
                detail: "Primary sex organs — produce the ovum and ovarian steroid hormones.",
              },
              {
                label: "Accessory ducts",
                children: [
                  { label: "Oviducts (fallopian tubes), paired", detail: "Infundibulum with fimbriae → ampulla → isthmus." },
                  { label: "Uterus", detail: "Single, inverted pear shape; opens into the vagina through the cervix." },
                  { label: "Vagina", detail: "With the cervical canal it forms the birth canal." },
                ],
              },
              {
                label: "External genitalia",
                detail: "Mons pubis, labia majora, labia minora, hymen and clitoris.",
              },
              {
                label: "Mammary glands (paired)",
                detail: "Integrated structurally and functionally to support ovulation, fertilisation, pregnancy, birth and child care.",
              },
            ],
          },
        ]}
      />
      <KeyPoint title="Integrated, not separate">
        These parts, alongwith the pair of mammary glands, are integrated structurally and functionally to support{" "}
        <strong>ovulation, fertilisation, pregnancy, birth and child care</strong>.
      </KeyPoint>

      <h3 id="h-2-2-ovary">The ovaries</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Ovaries are the <strong>primary female sex organs</strong>.
        </li>
        <li>
          They produce the female gamete (<strong>ovum</strong>) and several <strong>steroid hormones</strong> (
          <strong>ovarian hormones</strong>).
        </li>
        <li>
          The ovaries are located <strong>one on each side of the lower abdomen</strong>.
        </li>
        <li>
          Each ovary is about <strong>2 to 4 cm</strong> in length.
        </li>
        <li>
          Each ovary is connected to the <strong>pelvic wall</strong> and the <strong>uterus</strong> by{" "}
          <strong>ligaments</strong>.
        </li>
        <li>
          Each ovary is covered by a <strong>thin epithelium</strong> which encloses the <strong>ovarian stroma</strong>.
        </li>
        <li>
          The stroma is divided into two zones — a peripheral <strong>cortex</strong> and an inner{" "}
          <strong>medulla</strong>.
        </li>
      </ul>

      <h3 id="h-2-2-oviduct">The oviducts</h3>
      <p>
        The oviducts (fallopian tubes), uterus and vagina constitute the <strong>female accessory ducts</strong>. Each
        fallopian tube is about <strong>10–12 cm</strong> long and extends from the periphery of each ovary to the
        uterus.
      </p>
      <ProcessCard
        title="From ovary to uterus, in order"
        steps={[
          {
            label: "Infundibulum",
            description: "The funnel-shaped part closer to the ovary.",
          },
          {
            label: "Fimbriae",
            description: "Finger-like projections on the edges of the infundibulum; they help in collection of the ovum after ovulation.",
          },
          {
            label: "Ampulla",
            description: "The wider part of the oviduct that the infundibulum leads to.",
          },
          {
            label: "Isthmus",
            description: "The last part; it has a narrow lumen and joins the uterus.",
          },
        ]}
      />
      <Callout type="note" title="The meeting point">
        The <strong>ampullary region</strong> of the fallopian tube is where the ovum and the sperms meet — and
        therefore where <strong>fertilisation</strong> takes place. Section 2.5 returns here.
      </Callout>

      <h3 id="h-2-2-uterus">The uterus</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The uterus is <strong>single</strong> and is also called the <strong>womb</strong>.
        </li>
        <li>
          Its shape is like an <strong>inverted pear</strong>.
        </li>
        <li>
          It is supported by <strong>ligaments</strong> attached to the pelvic wall.
        </li>
        <li>
          The uterus opens into the vagina through a narrow <strong>cervix</strong>.
        </li>
        <li>
          The cavity of the cervix is called the <strong>cervical canal</strong>; alongwith the vagina it forms the{" "}
          <strong>birth canal</strong>.
        </li>
      </ul>
      <TableCard
        title="Three layers of the uterine wall"
        headers={["Layer", "Position and tissue", "Behaviour"]}
        rows={[
          {
            cells: [
              "Perimetrium",
              "External, thin, membranous",
              "The outermost covering",
            ],
          },
          {
            cells: [
              "Myometrium",
              "Middle, thick layer of smooth muscle",
              "Exhibits strong contraction during delivery of the baby",
            ],
          },
          {
            cells: [
              "Endometrium",
              "Inner glandular layer that lines the uterine cavity",
              "Undergoes cyclical changes during the menstrual cycle",
            ],
          },
        ]}
      />
      <Callout type="note" title="Two layers, two different jobs">
        The <Highlight color="blue">endometrium</Highlight> is rebuilt and shed every cycle; the{" "}
        <Highlight color="orange">myometrium</Highlight> is the muscle that pushes the baby out at birth. Do not swap
        them.
      </Callout>

      <h3 id="h-2-2-external">The female external genitalia</h3>
      <TableCard
        title="Female external genitalia"
        headers={["Structure", "What it is"]}
        rows={[
          {
            cells: [
              "Mons pubis",
              "A cushion of fatty tissue covered by skin and pubic hair",
            ],
          },
          {
            cells: [
              "Labia majora",
              "Fleshy folds of tissue which extend down from the mons pubis and surround the vaginal opening",
            ],
          },
          {
            cells: ["Labia minora", "Paired folds of tissue under the labia majora"],
          },
          {
            cells: ["Hymen", "A membrane that often covers the opening of the vagina partially"],
          },
          {
            cells: [
              "Clitoris",
              "A tiny finger-like structure which lies at the upper junction of the two labia minora, above the urethral opening",
            ],
          },
        ]}
      />
      <Callout type="important" title="The hymen is not a test of virginity">
        <p>
          The hymen is often torn during the first coitus (intercourse). However, it can also be broken by a sudden
          fall or jolt, insertion of a vaginal tampon, or active participation in some sports like horseback riding,
          cycling, etc. In some women the hymen persists even after coitus.
        </p>
        <p className="mt-2">
          In fact, the presence or absence of hymen is{" "}
          <Highlight color="yellow">not a reliable indicator of virginity or sexual experience</Highlight>.
        </p>
      </Callout>

      <h3 id="h-2-2-mammary">The mammary glands</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          A functional mammary gland is <strong>characteristic of all female mammals</strong>.
        </li>
        <li>
          The mammary glands are <strong>paired structures</strong> (breasts) that contain{" "}
          <strong>glandular tissue</strong> and a variable amount of <strong>fat</strong>.
        </li>
        <li>
          The glandular tissue of each breast is divided into <strong>15–20 mammary lobes</strong>.
        </li>
        <li>
          Each lobe contains clusters of cells called <strong>alveoli</strong>.
        </li>
        <li>
          The cells of the alveoli <strong>secrete milk</strong>, which is stored in the cavities (lumens) of the
          alveoli.
        </li>
      </ul>
      <ProcessCard
        title="Route of milk through the breast"
        steps={[
          { label: "Alveoli", description: "Clusters of secretory cells inside a mammary lobe; milk is stored in their lumens." },
          { label: "Mammary tubules", description: "The alveoli open into these tubules." },
          { label: "Mammary duct", description: "The tubules of each lobe join to form one mammary duct." },
          { label: "Mammary ampulla", description: "Several mammary ducts join to form a wider mammary ampulla." },
          { label: "Lactiferous duct → nipple", description: "The ampulla is connected to the lactiferous duct, which opens at the nipple — from where milk is expressed during breastfeeding." },
        ]}
      />

      <h2 id="h-2-3">2.3 Gametogenesis</h2>
      <Callout type="important" title="Gametogenesis">
        The primary sex organs — the testis in the males and the ovaries in the females — produce gametes, i.e., sperms
        and ovum, respectively, by the process called <strong>gametogenesis</strong>.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Spermatogenesis",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Occurs in the <strong>testis</strong>.</li>
                <li>Immature male germ cells (spermatogonia) produce sperms.</li>
                <li>Begins at <strong>puberty</strong>.</li>
              </ul>
            ),
          },
          {
            title: "Oogenesis",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Occurs in the <strong>ovary</strong>.</li>
                <li>Produces the mature female gamete (ovum).</li>
                <li>Initiated during <strong>embryonic development</strong>.</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-2-3-spermatogenesis">Spermatogenesis</h3>
      <p>
        In the testis, the immature male germ cells (<strong>spermatogonia</strong>) produce sperms by spermatogenesis,
        which begins at puberty.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The spermatogonia (sing. spermatogonium) present on the <strong>inside wall of the seminiferous tubules</strong>{" "}
          multiply by <strong>mitotic division</strong> and increase in numbers.
        </li>
        <li>
          Each spermatogonium is <strong>diploid</strong> and contains <strong>46 chromosomes</strong>.
        </li>
        <li>
          Some of the spermatogonia, called <strong>primary spermatocytes</strong>, periodically undergo meiosis.
        </li>
      </ul>
      <Stepper
        steps={[
          {
            label: "Spermatogonium — 2n = 46",
            description: "Diploid germ cell on the inside wall of the seminiferous tubule; multiplies by mitosis.",
          },
          {
            label: "Primary spermatocyte — 2n = 46",
            description: "Formed from a spermatogonium; completes the first meiotic division (reduction division).",
          },
          {
            label: "Secondary spermatocytes — n = 23 each",
            description: "Two equal, haploid cells produced by meiosis I. They undergo the second meiotic division.",
          },
          {
            label: "Spermatids — n = 23 each, four in number",
            description: "Four equal, haploid spermatids produced by meiosis II.",
          },
          {
            label: "Spermatozoa (sperms)",
            description: "The spermatids are transformed into spermatozoa by spermiogenesis, then released by spermiation.",
          },
        ]}
      />
      <TableCard
        title="Spermiogenesis and spermiation — the two names at the end"
        headers={["Term", "What happens"]}
        rows={[
          {
            cells: [
              "Spermiogenesis",
              "The spermatids are transformed into spermatozoa (sperms).",
            ],
          },
          {
            cells: [
              "Spermiation",
              "After spermiogenesis, sperm heads become embedded in the Sertoli cells, and are finally released from the seminiferous tubules.",
            ],
          },
        ]}
      />
      <Expandable title="In-text question — number of chromosomes in the spermatids">
        <p>
          A spermatogonium is diploid with <strong>46 chromosomes</strong>. Meiosis I halves the number and meiosis II
          keeps it unchanged, so every spermatid carries <strong>23 chromosomes</strong>.
        </p>
        <p className="mt-2">
          There are <strong>four</strong> spermatids from one primary spermatocyte, and each of them is haploid.
        </p>
      </Expandable>
      <KeyPoint title="Why so many divisions for so few chromosomes">
        Mitosis multiplies the stock of spermatogonia; meiosis halves the chromosome number and shuffles the
        chromosomes; spermiogenesis merely remodels a round cell into a swimming one.
      </KeyPoint>

      <h3 id="h-2-3-hormones">Hormonal control of spermatogenesis</h3>
      <p>
        Spermatogenesis starts at the age of puberty due to a significant increase in the secretion of{" "}
        <strong>gonadotropin releasing hormone (GnRH)</strong> — a hypothalamic hormone.
      </p>
      <ProcessCard
        title="The hypothalamo–pituitary–testis axis"
        steps={[
          {
            label: "Hypothalamus → GnRH",
            description: "Increased levels of GnRH are secreted at puberty.",
          },
          {
            label: "Anterior pituitary → LH and FSH",
            description: "GnRH acts at the anterior pituitary gland and stimulates secretion of two gonadotropins — luteinising hormone (LH) and follicle stimulating hormone (FSH).",
          },
          {
            label: "LH → Leydig cells → androgens",
            description: "LH acts at the Leydig cells and stimulates synthesis and secretion of androgens.",
          },
          {
            label: "Androgens → spermatogenesis",
            description: "Androgens, in turn, stimulate the process of spermatogenesis.",
          },
          {
            label: "FSH → Sertoli cells → factors for spermiogenesis",
            description: "FSH acts on the Sertoli cells and stimulates secretion of some factors which help in the process of spermiogenesis.",
          },
        ]}
      />
      <MistakeCard
        mistake="LH and FSH do the same job in the testis."
        correction="LH acts on the Leydig cells (androgens → spermatogenesis); FSH acts on the Sertoli cells (factors → spermiogenesis)."
        example="Same two hormones as in the female cycle, but different targets in the male."
      />

      <h3 id="h-2-3-sperm">Structure of a sperm</h3>
      <p>
        A sperm is a microscopic structure composed of a <strong>head</strong>, <strong>neck</strong>, a{" "}
        <strong>middle piece</strong> and a <strong>tail</strong>. A <strong>plasma membrane</strong> envelops the whole
        body of the sperm.
      </p>
      <TableCard
        title="Parts of a human sperm"
        headers={["Part", "Structure", "Function"]}
        rows={[
          {
            cells: [
              "Head",
              "Contains an elongated haploid nucleus. Its anterior portion is covered by a cap-like structure, the acrosome.",
              "Carries the genetic material; the acrosome is filled with enzymes that help fertilisation of the ovum.",
            ],
          },
          {
            cells: ["Neck", "Narrow region between head and middle piece", "Connects the head to the middle piece"],
          },
          {
            cells: [
              "Middle piece",
              "Possesses numerous mitochondria",
              "Produces energy for the movement of the tail",
            ],
          },
          {
            cells: [
              "Tail",
              "The motile part of the sperm",
              "Its movement gives sperm motility, which is essential for fertilisation",
            ],
          },
        ]}
      />
      <div className="grid gap-4 sm:grid-cols-3 [&>div]:my-0">
        <MetricCard label="Sperms per coitus" value="200–300" unit="million" description="The number a human male ejaculates." />
        <MetricCard label="Normal shape and size" value="60%" unit="minimum" description="Required for normal fertility." />
        <MetricCard label="Vigorous motility" value="40%" unit="minimum" description="Required for normal fertility." />
      </div>
      <Callout type="note" title="Semen is not the same as seminal plasma">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Sperms released from the seminiferous tubules are transported by the accessory ducts.</li>
          <li>
            Secretions of the <strong>epididymis</strong>, <strong>vas deferens</strong>,{" "}
            <strong>seminal vesicle</strong> and <strong>prostate</strong> are essential for maturation and motility of
            sperms.
          </li>
          <li>
            The <strong>seminal plasma</strong> along with the sperms constitute the <strong>semen</strong>.
          </li>
          <li>
            The functions of the male sex accessory ducts and glands are maintained by the testicular hormones (
            <strong>androgens</strong>).
          </li>
        </ul>
      </Callout>

      <h3 id="h-2-3-oogenesis">Oogenesis</h3>
      <Callout type="important" title="Oogenesis">
        The process of formation of a mature female gamete is called <strong>oogenesis</strong>, which is markedly
        different from spermatogenesis.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Oogenesis is initiated during the <strong>embryonic development stage</strong>.
        </li>
        <li>
          A couple of million gamete mother cells (<strong>oogonia</strong>) are formed within each <strong>fetal ovary</strong>.
        </li>
        <li>
          <Highlight color="yellow">No more oogonia are formed and added after birth.</Highlight>
        </li>
        <li>
          These cells start division and enter <strong>prophase-I</strong> of the meiotic division.
        </li>
        <li>
          They get <strong>temporarily arrested</strong> at that stage and are then called <strong>primary oocytes</strong>.
        </li>
        <li>
          A large number of these follicles degenerate between birth and puberty.
        </li>
        <li>
          Therefore, at puberty only <strong>60,000–80,000 primary follicles</strong> are left in each ovary.
        </li>
      </ul>
      <ProcessCard
        title="Growth of an ovarian follicle"
        steps={[
          {
            label: "Primary follicle",
            description: "Each primary oocyte gets surrounded by a layer of granulosa cells.",
          },
          {
            label: "Secondary follicle",
            description: "The primary follicles get surrounded by more layers of granulosa cells and a new theca.",
          },
          {
            label: "Tertiary follicle",
            description: "Characterised by a fluid-filled cavity called the antrum. The theca layer is organised into an inner theca interna and an outer theca externa.",
          },
          {
            label: "Completion of meiosis I",
            description: "At this stage the primary oocyte within the tertiary follicle grows in size and completes its first meiotic division — an unequal division producing a large haploid secondary oocyte and a tiny first polar body.",
          },
          {
            label: "Graafian (mature) follicle",
            description: "The tertiary follicle changes into the mature follicle. The secondary oocyte forms a new membrane called zona pellucida around itself.",
          },
          {
            label: "Ovulation",
            description: "The Graafian follicle ruptures and releases the secondary oocyte (ovum) from the ovary.",
          },
        ]}
      />
      <Callout type="note" title="Why the division is unequal">
        The secondary oocyte retains bulk of the nutrient-rich cytoplasm of the primary oocyte. That store is the only
        provision the early embryo has before implantation, so the cell that is going to be fertilised keeps almost all
        of it; the first polar body gets very little.
      </Callout>
      <Expandable title="In-text question — does the first polar body divide further or degenerate?">
        <p>
          The first polar body is born out of the first meiotic division, which is unequal — it receives barely any
          cytoplasm.
        </p>
        <p className="mt-2">
          NCERT states plainly: at present we are not very certain about this. It may divide further or it may
          degenerate. What is certain is that it does not become a gamete.
        </p>
      </Expandable>

      <h3 id="h-2-3-compare">Spermatogenesis vs oogenesis</h3>
      <Comparison
        columns={[
          {
            title: "Spermatogenesis",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Site: seminiferous tubules of the testis.</li>
                <li>Starts at puberty and continues through life.</li>
                <li>Both meiotic divisions are <strong>equal</strong>.</li>
                <li>One primary spermatocyte gives <strong>four sperms</strong>.</li>
                <li>No reserve is built before birth; new cells are made all the time.</li>
                <li>Millions of gametes are released in one ejaculation.</li>
              </ul>
            ),
          },
          {
            title: "Oogenesis",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Site: ovary.</li>
                <li>Initiated in the <strong>fetal</strong> ovary; no new oogonia after birth.</li>
                <li>Both meiotic divisions are <strong>unequal</strong> — polar bodies are set aside.</li>
                <li>One primary oocyte gives <strong>one ovum</strong> (plus polar bodies).</li>
                <li>Meiosis II is completed only after the sperm enters.</li>
                <li><strong>One ovum</strong> is released per menstrual cycle.</li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Oogenesis goes on throughout a woman's life, just like spermatogenesis."
        correction="All oogonia are formed in the fetal ovary. No more oogonia are added after birth — only the follicles already present grow and mature later."
        example="This is why the number of oocytes falls from a couple of million at birth to 60,000–80,000 primary follicles at puberty."
      />

      <h2 id="h-2-4">2.4 Menstrual Cycle</h2>
      <Callout type="important" title="Menstrual cycle">
        The reproductive cycle in the female primates (e.g. monkeys, apes and human beings) is called the{" "}
        <strong>menstrual cycle</strong>. The first menstruation begins at puberty and is called <strong>menarche</strong>.
        In human females, menstruation is repeated at an average interval of about <strong>28/29 days</strong>, and the
        cycle of events starting from one menstruation till the next one is called the menstrual cycle.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [&>div]:my-0">
        <MetricCard label="Cycle length" value="28/29" unit="days" description="Average interval between one menstruation and the next." />
        <MetricCard label="Menstrual flow" value="3–5" unit="days" description="Duration of the menstrual phase." />
        <MetricCard label="Ovulation" value="Day 14" unit="mid-cycle" description="One ovum is released during the middle of each cycle." />
        <MetricCard label="Menopause" value="~50" unit="years of age" description="Age at which menstrual cycles cease." />
      </div>
      <CycleDiagram
        title="The four phases of one menstrual cycle"
        steps={[
          {
            label: "Menstrual phase",
            detail: "Days 1–5. Menstrual flow occurs; it lasts for 3–5 days.",
          },
          {
            label: "Follicular phase",
            detail: "Primary follicles grow into a fully mature Graafian follicle; the endometrium regenerates through proliferation.",
          },
          {
            label: "Ovulatory phase",
            detail: "The LH surge ruptures the Graafian follicle and the ovum is released — around day 14.",
          },
          {
            label: "Luteal phase",
            detail: "The remains of the Graafian follicle become the corpus luteum, which secretes progesterone.",
          },
        ]}
      />
      <p>
        The cycle starts with the <strong>menstrual phase</strong>, when menstrual flow occurs. The menstrual flow
        results due to breakdown of the endometrial lining of the uterus and its blood vessels, which forms a liquid
        that comes out through the vagina.
      </p>
      <Callout type="warning" title="Bleeding is a consequence, not a cause">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Menstruation only occurs if the released ovum is not fertilised.</strong>
          </li>
          <li>Lack of menstruation may be indicative of pregnancy.</li>
          <li>
            During pregnancy all events of the menstrual cycle stop and there is no menstruation.
          </li>
          <li>
            However, it may also be caused due to some other underlying causes like <strong>stress</strong>,{" "}
            <strong>poor health</strong>, etc.
          </li>
        </ul>
      </Callout>
      <TableCard
        title="What the ovary and the uterus are doing, phase by phase"
        headers={["Phase", "Ovary", "Uterus"]}
        rows={[
          {
            cells: [
              "Menstrual (3–5 days)",
              "The previous cycle's corpus luteum has degenerated",
              "Endometrial lining and its blood vessels break down; the liquid comes out through the vagina",
            ],
          },
          {
            cells: [
              "Follicular",
              "Primary follicles grow to become a fully mature Graafian follicle",
              "Endometrium regenerates through proliferation",
            ],
          },
          {
            cells: [
              "Ovulatory",
              "LH surge ruptures the Graafian follicle; the ovum is released",
              "—",
            ],
          },
          {
            cells: [
              "Luteal",
              "Remaining parts of the Graafian follicle transform as the corpus luteum, which secretes large amounts of progesterone",
              "Endometrium is maintained — necessary for implantation of the fertilised ovum and other events of pregnancy",
            ],
          },
        ]}
      />

      <h3 id="h-2-4-hormones">Hormonal control of the cycle</h3>
      <ProcessCard
        title="One cycle, hormone by hormone"
        steps={[
          {
            label: "Gonadotropins rise",
            description: "The secretion of gonadotropins (LH and FSH) increases gradually during the follicular phase.",
          },
          {
            label: "Follicles grow and secrete estrogens",
            description: "The rising gonadotropins stimulate follicular development as well as secretion of estrogens by the growing follicles.",
          },
          {
            label: "Mid-cycle peak",
            description: "Both LH and FSH attain a peak level in the middle of the cycle, about the 14th day.",
          },
          {
            label: "LH surge → ovulation",
            description: "Rapid secretion of LH, leading to its maximum level during mid-cycle (the LH surge), induces rupture of the Graafian follicle and thereby the release of the ovum.",
          },
          {
            label: "Corpus luteum → progesterone",
            description: "The luteal phase follows: the remaining parts of the Graafian follicle transform as the corpus luteum, which secretes large amounts of progesterone, essential for maintenance of the endometrium.",
          },
          {
            label: "No fertilisation → a new cycle",
            description: "The corpus luteum degenerates, the endometrium disintegrates, menstruation follows and a new cycle begins.",
          },
        ]}
      />
      <KeyPoint title="The one-word trigger for ovulation">
        <strong>LH surge</strong> — the rapid mid-cycle rise of luteinising hormone — ruptures the Graafian follicle. If a
        question asks which hormone induces ovulation, the answer is LH.
      </KeyPoint>
      <Callout type="note" title="The two ends of the reproductive phase">
        Cyclic menstruation is an indicator of a normal reproductive phase, and it extends between{" "}
        <strong>menarche</strong> and <strong>menopause</strong>. In human beings, menstrual cycles cease around 50 years
        of age; that is termed <strong>menopause</strong>.
      </Callout>

      <h3 id="h-2-4-hygiene">Menstrual hygiene</h3>
      <p>Maintenance of hygiene and sanitation during menstruation is very important.</p>
      <Checklist
        title="A daily hygiene checklist"
        items={[
          { label: "Take bath and clean yourself regularly." },
          { label: "Use sanitary napkins or clean homemade pads." },
          { label: "Change the napkin or pad after every 4–5 hrs, as per requirement." },
          { label: "Dispose of the used napkin properly, wrapping it in a used paper." },
          { label: "Never throw used napkins into the drainpipe of toilets or in the open area." },
          { label: "Wash hands with soap after handling the napkin." },
        ]}
      />

      <h2 id="h-2-5">2.5 Fertilisation and Implantation</h2>
      <p>
        During copulation (coitus) semen is released by the penis into the vagina (<strong>insemination</strong>). The
        motile sperms swim rapidly, pass through the cervix, enter into the uterus and finally reach the{" "}
        <strong>ampullary region</strong> of the fallopian tube. The ovum released by the ovary is also transported to
        the ampullary region, where fertilisation takes place.
      </p>
      <Callout type="important" title="Why not every copulation leads to pregnancy">
        Fertilisation can only occur if the ovum and sperms are transported{" "}
        <Highlight color="yellow">simultaneously</Highlight> to the ampullary region. This is the reason why not all
        copulations lead to fertilisation and pregnancy.
      </Callout>
      <Callout type="important" title="Fertilisation">
        The process of fusion of a sperm with an ovum is called <strong>fertilisation</strong>.
      </Callout>
      <ProcessCard
        title="Fertilisation, step by step"
        steps={[
          {
            label: "Sperm contacts the zona pellucida",
            description: "During fertilisation, a sperm comes in contact with the zona pellucida layer of the ovum.",
          },
          {
            label: "Entry of other sperms is blocked",
            description: "The contact induces changes in the membrane that block the entry of additional sperms. Thus it ensures that only one sperm can fertilise an ovum.",
          },
          {
            label: "Acrosomal secretions open the way",
            description: "The secretions of the acrosome help the sperm enter into the cytoplasm of the ovum through the zona pellucida and the plasma membrane.",
          },
          {
            label: "Meiosis II is completed",
            description: "This induces the completion of the meiotic division of the secondary oocyte. The second meiotic division is also unequal and results in the formation of a second polar body and a haploid ovum (ootid).",
          },
          {
            label: "Nuclei fuse → zygote",
            description: "Soon the haploid nucleus of the sperm and that of the ovum fuse together to form a diploid zygote.",
          },
        ]}
      />
      <Expandable title="In-text question — how many chromosomes will there be in the zygote?">
        <p>
          Each gamete is haploid with <strong>23 chromosomes</strong>. Fusion restores the diploid number, so the zygote
          has <strong>46 chromosomes</strong> — 23 from the sperm and 23 from the ovum.
        </p>
      </Expandable>

      <h3 id="h-2-5-sex">Sex of the baby is decided at fertilisation</h3>
      <p>
        The chromosome pattern in the human female is <strong>XX</strong> and that in the male is <strong>XY</strong>.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          All the haploid gametes (ova) produced by the female have the sex chromosome <strong>X</strong>.
        </li>
        <li>
          In the male gametes (sperms) the sex chromosome could be either <strong>X</strong> or <strong>Y</strong>.
        </li>
        <li>
          Hence <strong>50 per cent of sperms carry the X chromosome</strong> while the other{" "}
          <strong>50 per cent carry the Y</strong>.
        </li>
        <li>
          After fusion, the zygote would carry either <strong>XX</strong> or <strong>XY</strong>, depending on whether
          the sperm carrying X or Y fertilised the ovum.
        </li>
        <li>
          The zygote carrying <strong>XX</strong> would develop into a <strong>female baby</strong> and{" "}
          <strong>XY</strong> would form a <strong>male</strong>.
        </li>
      </ul>
      <TableCard
        title="Who contributes which sex chromosome"
        headers={["Parent", "Sex chromosomes", "Gametes produced", "Zygote formed"]}
        rows={[
          { cells: ["Mother", "XX", "All ova carry X", "XX — female baby"] },
          { cells: ["Father", "XY", "50% sperms carry X", "XX — female baby"] },
          { cells: ["Father", "XY", "50% sperms carry Y", "XY — male baby"] },
        ]}
      />
      <KeyPoint title="Exam line, stated by NCERT">
        Scientifically it is correct to say that the{" "}
        <Highlight color="yellow">sex of the baby is determined by the father</Highlight> and not by the mother.
      </KeyPoint>

      <h3 id="h-2-5-cleavage">Cleavage, morula, blastocyst and implantation</h3>
      <Stepper
        steps={[
          {
            label: "Cleavage in the isthmus",
            description: "Mitotic division starts as the zygote moves through the isthmus of the oviduct towards the uterus, forming 2, 4, 8, 16 daughter cells called blastomeres.",
          },
          {
            label: "Morula — 8 to 16 blastomeres",
            description: "The embryo with 8 to 16 blastomeres is called a morula.",
          },
          {
            label: "Blastocyst",
            description: "The morula continues to divide and transforms into a blastocyst as it moves further into the uterus. The blastomeres are arranged into an outer layer called trophoblast and an inner group of cells attached to the trophoblast called the inner cell mass.",
          },
          {
            label: "Attachment",
            description: "The trophoblast layer gets attached to the endometrium and the inner cell mass gets differentiated as the embryo.",
          },
          {
            label: "Implantation",
            description: "After attachment, the uterine cells divide rapidly and cover the blastocyst. The blastocyst becomes embedded in the endometrium of the uterus. This is implantation, and it leads to pregnancy.",
          },
        ]}
      />
      <Callout type="important" title="Two layers of the blastocyst, two destinies">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Trophoblast</strong> — the outer layer; it attaches to the endometrium and later forms the chorionic
            villi.
          </li>
          <li>
            <strong>Inner cell mass</strong> — the group of cells attached to the trophoblast; it differentiates as the
            embryo.
          </li>
        </ul>
      </Callout>

      <h2 id="h-2-6">2.6 Pregnancy and Embryonic Development</h2>
      <p>
        After implantation, finger-like projections appear on the trophoblast called <strong>chorionic villi</strong>,
        which are surrounded by the uterine tissue and maternal blood.
      </p>
      <Callout type="important" title="Placenta">
        The chorionic villi and uterine tissue become interdigitated with each other and jointly form a structural and
        functional unit between the developing embryo (foetus) and the maternal body, called the{" "}
        <strong>placenta</strong>.
      </Callout>
      <ConceptCard title="What the placenta does" icon="🫀">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Facilitates the <strong>supply of oxygen and nutrients</strong> to the embryo.
          </li>
          <li>
            Also the <strong>removal of carbon dioxide</strong> and excretory/waste materials produced by the embryo.
          </li>
          <li>
            Is connected to the embryo through an <strong>umbilical cord</strong>, which helps in the transport of
            substances to and from the embryo.
          </li>
          <li>
            Acts as an <strong>endocrine tissue</strong> and produces several hormones.
          </li>
        </ul>
      </ConceptCard>
      <TableCard
        title="Hormones of pregnancy"
        headers={["Hormone", "Produced by", "What to remember"]}
        rows={[
          {
            cells: [
              "hCG — human chorionic gonadotropin",
              "Placenta",
              "Produced in women only during pregnancy",
            ],
          },
          {
            cells: [
              "hPL — human placental lactogen",
              "Placenta",
              "Produced in women only during pregnancy",
            ],
          },
          {
            cells: ["Estrogens", "Placenta", "Levels increase several-fold in the maternal blood"],
          },
          { cells: ["Progestogens", "Placenta", "Levels increase several-fold in the maternal blood"] },
          {
            cells: [
              "Relaxin",
              "Ovary, in the later phase of pregnancy",
              "Produced in women only during pregnancy",
            ],
          },
          {
            cells: [
              "Cortisol, prolactin, thyroxine",
              "Maternal body",
              "Levels increased several-folds in the maternal blood",
            ],
          },
        ]}
      />
      <KeyPoint title="Why the hormone levels climb">
        Increased production of these hormones is essential for supporting <strong>fetal growth</strong>,{" "}
        <strong>metabolic changes in the mother</strong> and <strong>maintenance of pregnancy</strong>.
      </KeyPoint>

      <h3 id="h-2-6-germlayers">The three germ layers</h3>
      <p>Immediately after implantation, the inner cell mass (embryo) differentiates:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          An outer layer called <strong>ectoderm</strong>.
        </li>
        <li>
          An inner layer called <strong>endoderm</strong>.
        </li>
        <li>
          A <strong>mesoderm</strong> soon appears between the ectoderm and the endoderm.
        </li>
      </ul>
      <Callout type="note" title="Three layers, all the organs">
        These three layers give rise to <Highlight color="green">all tissues (organs) in adults</Highlight>. The inner
        cell mass also contains certain cells called <strong>stem cells</strong>, which have the potency to give rise to
        all the tissues and organs.
      </Callout>

      <h3 id="h-2-6-months">Month by month</h3>
      <p>The human pregnancy lasts 9 months. Here is what is visible at each stage.</p>
      <Timeline
        title="Features of embryonic development during pregnancy"
        orientation="vertical"
        rtl={false}
        events={[
          {
            date: "1 month",
            label: "Heart is formed",
            detail: "The first sign of a growing foetus may be noticed by listening to the heart sound carefully through the stethoscope.",
          },
          {
            date: "End of 2nd month",
            label: "Limbs and digits develop",
            detail: "The foetus develops limbs and digits.",
          },
          {
            date: "12 weeks (first trimester)",
            label: "Major organ systems formed",
            detail: "Most of the major organ systems are formed — for example, the limbs and external genital organs are well-developed.",
          },
          {
            date: "5th month",
            label: "First movements and head hair",
            detail: "The first movements of the foetus and appearance of hair on the head are usually observed during the fifth month.",
          },
          {
            date: "24 weeks (second trimester)",
            label: "Fine hair, eyelids, eyelashes",
            detail: "The body is covered with fine hair, eye-lids separate, and eyelashes are formed.",
          },
          {
            date: "9 months",
            label: "Fully developed",
            detail: "The foetus is fully developed and is ready for delivery.",
          },
        ]}
      />

      <h2 id="h-2-7">2.7 Parturition and Lactation</h2>
      <Callout type="important" title="Gestation period">
        The average duration of human pregnancy is about <strong>9 months</strong>, which is called the{" "}
        <strong>gestation period</strong>.
      </Callout>
      <Callout type="important" title="Parturition">
        Vigorous contraction of the uterus at the end of pregnancy causes expulsion/delivery of the foetus. This process
        of delivery of the foetus (childbirth) is called <strong>parturition</strong>.
      </Callout>
      <p>Parturition is induced by a complex neuroendocrine mechanism.</p>
      <CycleDiagram
        title="The oxytocin positive-feedback loop of parturition"
        steps={[
          {
            label: "Signals from foetus and placenta",
            detail: "The signals for parturition originate from the fully developed foetus and the placenta.",
          },
          {
            label: "Foetal ejection reflex",
            detail: "These signals induce mild uterine contractions, called the foetal ejection reflex.",
          },
          {
            label: "Oxytocin from maternal pituitary",
            detail: "The reflex triggers release of oxytocin from the maternal pituitary.",
          },
          {
            label: "Stronger contractions",
            detail: "Oxytocin acts on the uterine muscle and causes stronger uterine contractions, which in turn stimulate further secretion of oxytocin.",
          },
        ]}
      />
      <KeyPoint title="Why the contractions get stronger and stronger">
        The stimulatory reflex between the uterine contraction and oxytocin secretion continues, resulting in stronger
        and stronger contractions. This leads to expulsion of the baby out of the uterus through the{" "}
        <strong>birth canal</strong> — parturition. Soon after the infant is delivered, the <strong>placenta</strong> is
        also expelled out of the uterus.
      </KeyPoint>
      <Expandable title="In-text question — what do doctors inject to induce delivery?">
        <p>
          Oxytocin. Since oxytocin is the hormone that drives the contraction–secretion feedback loop, an injection of
          oxytocin starts the same loop and brings on labour.
        </p>
      </Expandable>

      <h3 id="h-2-7-lactation">Lactation</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The mammary glands of the female undergo <strong>differentiation during pregnancy</strong>.
        </li>
        <li>
          They start producing milk towards the <strong>end of pregnancy</strong> by the process called{" "}
          <strong>lactation</strong>.
        </li>
        <li>This helps the mother in feeding the new-born.</li>
      </ul>
      <FactCard
        title="Colostrum"
        definition="The milk produced during the initial few days of lactation is called colostrum, which contains several antibodies absolutely essential to develop resistance for the new-born babies."
        icon="🍼"
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Breast-feeding during the initial period of infant growth is recommended by doctors for bringing up a healthy
          baby.
        </li>
      </ul>
      <MistakeCard
        mistake="Colostrum is just the first milk and has no special value."
        correction="Colostrum contains several antibodies that are absolutely essential for developing resistance in the new-born."
        example="This is why doctors recommend breast-feeding during the initial period of infant growth."
      />

      <h2 id="h-2-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            <div key="q1">
              <p>Fill in the blanks:</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Humans reproduce _____________ (asexually/sexually)</li>
                <li>(b) Humans are _____________ (oviparous, viviparous, ovoviviparous)</li>
                <li>(c) Fertilisation is _____________ in humans (external/internal)</li>
                <li>(d) Male and female gametes are _____________ (diploid/haploid)</li>
                <li>(e) Zygote is _____________ (diploid/haploid)</li>
                <li>(f) The process of release of ovum from a mature follicle is called _____________</li>
                <li>(g) Ovulation is induced by a hormone called _____________</li>
                <li>(h) The fusion of male and female gametes is called _____________</li>
                <li>(i) Fertilisation takes place in _____________</li>
                <li>(j) Zygote divides to form _____________ which is implanted in uterus.</li>
                <li>(k) The structure which provides vascular connection between foetus and uterus is called _____________</li>
              </ul>
            </div>,
            "Draw a labelled diagram of male reproductive system.",
            "Draw a labelled diagram of female reproductive system.",
            "Write two major functions each of testis and ovary.",
            "Describe the structure of a seminiferous tubule.",
            "What is spermatogenesis? Briefly describe the process of spermatogenesis.",
            "Name the hormones involved in regulation of spermatogenesis.",
            "Define spermiogenesis and spermiation.",
            "Draw a labelled diagram of sperm.",
            "What are the major components of seminal plasma?",
            "What are the major functions of male accessory ducts and glands?",
            "What is oogenesis? Give a brief account of oogenesis.",
            "Draw a labelled diagram of a section through ovary.",
            "Draw a labelled diagram of a Graafian follicle?",
            <div key="q15">
              <p>Name the functions of the following:</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Corpus luteum</li>
                <li>(b) Endometrium</li>
                <li>(c) Acrosome</li>
                <li>(d) Sperm tail</li>
                <li>(e) Fimbriae</li>
              </ul>
            </div>,
            <div key="q16">
              <p>Identify True/False statements. Correct each false statement to make it true.</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Androgens are produced by Sertoli cells. (True/False)</li>
                <li>(b) Spermatozoa get nutrition from Sertoli cells. (True/False)</li>
                <li>(c) Leydig cells are found in ovary. (True/False)</li>
                <li>(d) Leydig cells synthesise androgens. (True/False)</li>
                <li>(e) Oogenesis takes place in corpus luteum. (True/False)</li>
                <li>(f) Menstrual cycle ceases during pregnancy. (True/False)</li>
                <li>(g) Presence or absence of hymen is not a reliable indicator of virginity or sexual experience. (True/False)</li>
              </ul>
            </div>,
            "What is menstrual cycle? Which hormones regulate menstrual cycle?",
            "What is parturition? Which hormones are involved in induction of parturition?",
            "In our society the women are often blamed for giving birth to daughters. Can you explain why this is not correct?",
            "How many eggs are released by a human ovary in a month? How many eggs do you think would have been released if the mother gave birth to identical twins? Would your answer change if the twins born were fraternal?",
            "How many eggs do you think were released by the ovary of a female dog which gave birth to 6 puppies?",
          ]}
          answers={[
            <ul key="a1" className="space-y-1">
              <li>(a) sexually</li>
              <li>(b) viviparous</li>
              <li>(c) internal</li>
              <li>(d) haploid</li>
              <li>(e) diploid</li>
              <li>(f) ovulation</li>
              <li>(g) luteinising hormone (LH)</li>
              <li>(h) fertilisation</li>
              <li>(i) the ampullary region of the fallopian tube</li>
              <li>(j) blastocyst</li>
              <li>(k) placenta</li>
            </ul>,
            <div key="a2">
              <p>Label the following on your drawing:</p>
              <p className="mt-1">
                Testis, scrotum, rete testis, vasa efferentia, epididymis, vas deferens, seminal vesicle, ejaculatory
                duct, prostate, bulbourethral gland, urethra, glans penis, foreskin.
              </p>
            </div>,
            <div key="a3">
              <p>Label the following on your drawing:</p>
              <p className="mt-1">
                Ovary, infundibulum, fimbriae, ampulla, isthmus, uterus (perimetrium, myometrium, endometrium), cervix,
                cervical canal, vagina, mons pubis, labia majora, labia minora, hymen, clitoris, mammary gland.
              </p>
            </div>,
            <div key="a4">
              <p><strong>Testis:</strong></p>
              <ul className="mt-1 space-y-1">
                <li>Produces sperms (male gametes).</li>
                <li>Secretes the testicular hormones called androgens.</li>
              </ul>
              <p className="mt-2"><strong>Ovary:</strong></p>
              <ul className="mt-1 space-y-1">
                <li>Produces the female gamete (ovum).</li>
                <li>Secretes several steroid hormones (ovarian hormones).</li>
              </ul>
            </div>,
            <div key="a5">
              <ul className="space-y-1">
                <li>Each testis has about 250 compartments called testicular lobules.</li>
                <li>Each lobule contains one to three highly coiled seminiferous tubules.</li>
                <li>Each tubule is lined on its inside by male germ cells (spermatogonia) and Sertoli cells.</li>
                <li>The germ cells undergo meiotic divisions and finally form sperms.</li>
                <li>The Sertoli cells provide nutrition to the germ cells.</li>
                <li>Outside the tubules, the interstitial spaces contain blood vessels and Leydig cells, which secrete androgens.</li>
              </ul>
            </div>,
            <div key="a6">
              <p>
                Spermatogenesis is the process by which the immature male germ cells (spermatogonia) produce sperms in
                the testis; it begins at puberty.
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>Spermatogonia multiply by mitotic division; each is diploid with 46 chromosomes.</li>
                <li>Some become primary spermatocytes, which undergo meiosis.</li>
                <li>Meiosis I gives two equal, haploid secondary spermatocytes with 23 chromosomes each.</li>
                <li>Meiosis II gives four equal, haploid spermatids.</li>
                <li>Spermatids are transformed into spermatozoa by spermiogenesis.</li>
                <li>Sperms are released from the seminiferous tubules by spermiation.</li>
              </ul>
            </div>,
            <div key="a7">
              <ul className="space-y-1">
                <li>GnRH — gonadotropin releasing hormone, from the hypothalamus.</li>
                <li>LH — luteinising hormone, from the anterior pituitary; acts on Leydig cells.</li>
                <li>FSH — follicle stimulating hormone, from the anterior pituitary; acts on Sertoli cells.</li>
                <li>Androgens — secreted by Leydig cells; stimulate spermatogenesis.</li>
              </ul>
            </div>,
            <div key="a8">
              <p>
                <strong>Spermiogenesis:</strong> the transformation of spermatids into spermatozoa (sperms).
              </p>
              <p className="mt-1">
                <strong>Spermiation:</strong> the release of sperms from the seminiferous tubules, after their heads
                become embedded in the Sertoli cells.
              </p>
            </div>,
            <div key="a9">
              <p>Label the following on your drawing:</p>
              <p className="mt-1">
                Plasma membrane, head (elongated haploid nucleus, acrosome), neck, middle piece (mitochondria), tail.
              </p>
            </div>,
            <div key="a10">
              <p>
                Seminal plasma is the secretion of the seminal vesicles, the prostate and the bulbourethral glands. It is
                rich in fructose, calcium and certain enzymes.
              </p>
            </div>,
            <div key="a11">
              <ul className="space-y-1">
                <li>The accessory ducts store and transport the sperms from the testis to the outside through the urethra.</li>
                <li>The secretions of the accessory glands constitute the seminal plasma, which is essential for maturation and motility of sperms.</li>
                <li>The secretions of the bulbourethral glands also help in lubrication of the penis.</li>
                <li>The functions of these ducts and glands are maintained by the testicular hormones (androgens).</li>
              </ul>
            </div>,
            <div key="a12">
              <p>Oogenesis is the process of formation of a mature female gamete (ovum) in the ovary.</p>
              <ul className="mt-1.5 space-y-1">
                <li>It is initiated during embryonic development, when a couple of million oogonia are formed in each fetal ovary; no more are added after birth.</li>
                <li>The oogonia enter prophase-I and are temporarily arrested as primary oocytes.</li>
                <li>A primary oocyte with a layer of granulosa cells is a primary follicle; more granulosa layers and a new theca make it a secondary follicle.</li>
                <li>The tertiary follicle has a fluid-filled antrum and an inner theca interna and outer theca externa.</li>
                <li>The primary oocyte completes meiosis I unequally, giving a large haploid secondary oocyte and a tiny first polar body.</li>
                <li>The tertiary follicle becomes the Graafian follicle; the secondary oocyte forms the zona pellucida around itself.</li>
                <li>The Graafian follicle ruptures and releases the ovum — ovulation.</li>
              </ul>
            </div>,
            <div key="a13">
              <p>Label the following on your drawing:</p>
              <p className="mt-1">
                Germinal epithelium, ovarian stroma (peripheral cortex, inner medulla), primary follicle, secondary
                follicle, tertiary follicle with antrum, Graafian follicle, secondary oocyte, corpus luteum.
              </p>
            </div>,
            <div key="a14">
              <p>Label the following on your drawing:</p>
              <p className="mt-1">
                Secondary oocyte, zona pellucida, antrum (fluid-filled cavity), theca interna, theca externa, granulosa
                cells.
              </p>
            </div>,
            <div key="a15">
              <ul className="space-y-1">
                <li><strong>(a) Corpus luteum:</strong> secretes large amounts of progesterone, essential for maintenance of the endometrium.</li>
                <li><strong>(b) Endometrium:</strong> lines the uterine cavity, undergoes cyclical changes during the menstrual cycle, and is the site where the blastocyst is implanted.</li>
                <li><strong>(c) Acrosome:</strong> filled with enzymes that help the sperm penetrate the zona pellucida and fertilise the ovum.</li>
                <li><strong>(d) Sperm tail:</strong> its movement provides sperm motility, essential for fertilisation.</li>
                <li><strong>(e) Fimbriae:</strong> help in collection of the ovum after ovulation.</li>
              </ul>
            </div>,
            <div key="a16">
              <ul className="space-y-1.5">
                <li><strong>(a) False.</strong> Androgens are produced by Leydig cells (not Sertoli cells).</li>
                <li><strong>(b) True.</strong></li>
                <li><strong>(c) False.</strong> Leydig cells are found in the interstitial spaces of the testis (not in the ovary).</li>
                <li><strong>(d) True.</strong></li>
                <li><strong>(e) False.</strong> Oogenesis takes place in the ovary (not in the corpus luteum).</li>
                <li><strong>(f) True.</strong></li>
                <li><strong>(g) True.</strong></li>
              </ul>
            </div>,
            <div key="a17">
              <p>
                The reproductive cycle in female primates is called the menstrual cycle: the cycle of events starting
                from one menstruation till the next one, repeated at an average interval of about 28/29 days.
              </p>
              <p className="mt-1.5">It is regulated by:</p>
              <ul className="mt-1 space-y-1">
                <li>FSH and LH — the pituitary gonadotropins.</li>
                <li>Estrogens — secreted by the growing follicles.</li>
                <li>Progesterone — secreted by the corpus luteum.</li>
              </ul>
            </div>,
            <div key="a18">
              <p>
                Parturition is the process of delivery of the foetus (childbirth), caused by vigorous contraction of the
                uterus at the end of pregnancy.
              </p>
              <p className="mt-1.5">
                It is induced by a complex neuroendocrine mechanism involving <strong>oxytocin</strong> from the maternal
                pituitary, along with cortisol and estrogens.
              </p>
            </div>,
            <div key="a19">
              <ul className="space-y-1">
                <li>The mother is XX, so every ovum she produces carries an X chromosome.</li>
                <li>The father is XY, so 50 per cent of his sperms carry X and 50 per cent carry Y.</li>
                <li>A daughter is formed when an X-bearing sperm fertilises the ovum; a son when a Y-bearing sperm does.</li>
                <li>Therefore the sex of the baby is determined by the father, not by the mother, and blaming the woman is scientifically wrong.</li>
              </ul>
            </div>,
            <div key="a20">
              <ul className="space-y-1">
                <li>A human ovary releases <strong>one egg</strong> in a month.</li>
                <li>Identical twins develop from a single fertilised egg that later splits, so only <strong>one egg</strong> was released.</li>
                <li>Fraternal twins develop from two separate eggs fertilised by two sperms, so the answer changes to <strong>two eggs</strong>.</li>
              </ul>
            </div>,
            <div key="a21">
              <p>
                Six puppies means six separate fertilised eggs — each puppy develops from its own egg. So the ovary (both
                ovaries together) released <strong>six eggs</strong>. The eggs may not all have come from one ovary.
              </p>
            </div>,
          ]}
        />
      </Expandable>
    </>
  );
}
