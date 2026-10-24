import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { Highlight } from "@/components/content/Highlight";
import { Formula, FormulaBlock } from "@/components/content/Formula";
import { Stepper } from "@/components/content/Stepper";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { RevealAnswer } from "@/components/content/process/RevealAnswer";

export default function PrinciplesOfInheritanceAndVariationChapter() {
  return (
    <>
      <p>
        Why does an elephant always give birth only to a baby elephant and not to some other animal? Why
        does a mango seed form only a mango plant? And given that offspring resemble their parents, why
        are siblings sometimes so similar to each other and sometimes so different?
      </p>
      <p>
        These questions are dealt with, scientifically, in a branch of biology known as{" "}
        <strong>Genetics</strong> — the study of inheritance as well as the variation of characters from
        parents to offspring.
      </p>
      <Comparison
        columns={[
          {
            title: "Inheritance",
            children: (
              <p>
                The process by which characters are passed on from parent to progeny; it is the{" "}
                <Highlight color="yellow">basis of heredity</Highlight>.
              </p>
            ),
          },
          {
            title: "Variation",
            children: (
              <p>
                The <Highlight color="green">degree by which progeny differ</Highlight> from their
                parents.
              </p>
            ),
          },
        ]}
      />
      <p>
        Humans knew from as early as 8000&ndash;1000 B.C. that one of the causes of variation was hidden
        in sexual reproduction. They exploited the variations naturally present in wild populations to
        selectively breed organisms with desirable characters &mdash; through artificial selection and
        domestication from ancestral wild cows we have well-known Indian breeds such as Sahiwal cows in
        Punjab. Our ancestors knew about inheritance and variation, but had very little idea about the
        scientific basis of these phenomena.
      </p>

      <h2 id="h-4-1">4.1 Mendel&apos;s Laws of Inheritance</h2>
      <p>
        Headway was made in the mid-nineteenth century. <strong>Gregor Mendel</strong> conducted
        hybridisation experiments on garden peas for seven years (1856&ndash;1863) and proposed the laws
        of inheritance in living organisms.
      </p>
      <ConceptCard title="Why Mendel&apos;s work carried conviction" icon="🧪">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            It was the <strong>first time statistical analysis and mathematical logic</strong> were
            applied to problems in biology.
          </li>
          <li>
            His experiments had a <strong>large sampling size</strong>, which gave greater credibility to
            the data collected.
          </li>
          <li>
            His inferences were confirmed from experiments on{" "}
            <strong>successive generations</strong> of his test plants &mdash; so the results pointed to
            general rules of inheritance, not unsubstantiated ideas.
          </li>
          <li>
            He studied characters that were manifested as <strong>two opposing traits</strong> (tall or
            dwarf, yellow or green seeds) &mdash; a basic framework later scientists could expand.
          </li>
        </ul>
      </ConceptCard>
      <Callout type="important" title="True-breeding line">
        A true-breeding line is one that, having undergone continuous self-pollination, shows the
        stable trait inheritance and expression for several generations.
      </Callout>
      <p>
        Mendel conducted artificial pollination/cross pollination experiments using several
        true-breeding pea lines. He selected <strong>14 true-breeding pea plant varieties</strong>, as
        pairs which were similar except for one character with contrasting traits. Some of the
        contrasting traits selected were smooth or wrinkled seeds, yellow or green seeds, inflated
        (full) or constricted green or yellow pods and tall or dwarf plants.
      </p>
      <TableCard
        title="Table 4.1 — Contrasting traits studied by Mendel in pea"
        headers={["S.No.", "Characters", "Contrasting traits"]}
        rows={[
          { cells: ["1.", "Stem height", "Tall / dwarf"] },
          { cells: ["2.", "Flower colour", "Violet / white"] },
          { cells: ["3.", "Flower position", "Axial / terminal"] },
          { cells: ["4.", "Pod shape", "Inflated / constricted"] },
          { cells: ["5.", "Pod colour", "Green / yellow"] },
          { cells: ["6.", "Seed shape", "Round / wrinkled"] },
          { cells: ["7.", "Seed colour", "Yellow / green"] },
        ]}
        caption="Figure 4.1 shows these seven pairs of contrasting traits as pairs of plants, flowers, pods and seeds. Seven such pairs, each chosen for a single contrasting character, formed the 14 true-breeding varieties."
      />

      <h2 id="h-4-2">4.2 Inheritance of One Gene</h2>
      <p>
        Take the hybridisation experiment in which Mendel crossed tall and dwarf pea plants to study the
        inheritance of one gene. He collected the seeds produced as a result of this cross and grew them
        to generate plants of the first hybrid generation &mdash; the Filial<sub>1</sub> progeny, or the F
        <sub>1</sub>.
      </p>
      <ProcessCard
        title="Mendel&apos;s monohybrid experiment"
        steps={[
          {
            label: "Cross the two true-breeding parents",
            description: "Tall (TT) × dwarf (tt). Pollen from one parent is transferred to the stigma of the other (Figure 4.2).",
          },
          {
            label: "Collect the seeds, grow the F₁",
            description: "All F₁ progeny plants were tall, like one of the parents; none were dwarf (Figure 4.3).",
          },
          {
            label: "Self-pollinate the F₁",
            description: "The tall F₁ plants were allowed to self-pollinate and the Filial₂ (F₂) generation was raised.",
          },
          {
            label: "Count the F₂",
            description: "Some F₂ offspring were dwarf — the character not seen in F₁ was expressed again. 1/4 of F₂ were dwarf, 3/4 were tall.",
          },
        ]}
      />
      <p>
        The tall and dwarf traits were identical to their parental type and did not show any blending:
        all the offspring were either tall or dwarf, none were of in-between height. Similar results were
        obtained with the other traits &mdash; only one parental trait was expressed in F<sub>1</sub>,
        while at F<sub>2</sub> both were expressed in the proportion <strong>3 : 1</strong>. The
        contrasting traits did not show blending at either stage.
      </p>

      <h3 id="h-4-2-vocabulary">Genes, alleles, genotype and phenotype</h3>
      <p>
        Based on these observations, Mendel proposed that something was being stably passed down,
        unchanged, from parent to offspring through the gametes, over successive generations. He called
        these things <strong>&lsquo;factors&rsquo;</strong>. We now call them <strong>genes</strong>.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 [&>div]:my-3">
        <FactCard
          title="Gene"
          definition="The unit of inheritance. It contains the information required to express a particular trait in an organism."
          icon="🧬"
        />
        <FactCard
          title="Allele"
          definition="Genes which code for a pair of contrasting traits — slightly different forms of the same gene."
          icon="🔀"
        />
        <FactCard
          title="Genotype"
          definition="The allelic pair of a plant, e.g. TT or tt — what the genes are."
          icon="🔤"
        />
        <FactCard
          title="Phenotype"
          definition="The descriptive term for the visible trait, e.g. tall or dwarf — what the plant looks like."
          icon="🌱"
        />
      </div>
      <p>
        If we use alphabetical symbols for each gene, the <strong>capital letter</strong> is used for the
        trait expressed at the F<sub>1</sub> stage and the <strong>small letter</strong> for the other
        trait. For height, T is used for the tall trait and t for dwarf, and T and t are alleles of each
        other &mdash; so the pair of alleles for height can be TT, Tt or tt.
      </p>
      <Callout type="tip" title="Why T and t, not T and d">
        Use the capital and lower case of the <em>same</em> alphabetical symbol. If you write T for tall
        and d for dwarf, you will find it difficult to remember whether T and d are alleles of the same
        gene or not.
      </Callout>
      <p>
        In a true breeding tall or dwarf variety the allelic pair for height is identical &mdash;{" "}
        <strong>homozygous</strong> (TT and tt respectively). Alleles can be similar, as in homozygotes,
        or dissimilar, as in the heterozygote <strong>Tt</strong>. Since the Tt plant is heterozygous for
        the genes controlling one character (height), it is a <strong>monohybrid</strong>, and the cross
        between TT and tt is a <strong>monohybrid cross</strong>.
      </p>
      <p>
        Mendel found the phenotype of the F<sub>1</sub> heterozygote Tt to be exactly like the TT parent.
        He proposed that in a pair of dissimilar factors, one dominates the other and is called the{" "}
        <strong>dominant</strong> factor, while the other is <strong>recessive</strong>. Here T (tallness)
        is dominant over t (dwarfness). He observed identical behaviour for all the other trait-pairs he
        studied.
      </p>

      <h3 id="h-4-2-punnett">The Punnett square</h3>
      <p>
        The production of gametes by the parents, the formation of the zygotes, and the F<sub>1</sub> and
        F<sub>2</sub> plants can all be understood from a diagram called the <strong>Punnett square</strong>,
        developed by the British geneticist <strong>Reginald C. Punnett</strong>. It is a graphical
        representation to calculate the probability of all possible genotypes of offspring in a genetic
        cross. The possible gametes are written on two sides, usually the top row and left column; all
        possible combinations are represented in the boxes, which generates a square output form.
      </p>
      <TableCard
        title="Punnett square 1 — the cross TT × tt"
        headers={["", "T (♂)", "T (♂)"]}
        rows={[
          { cells: ["t (♀)", "Tt", "Tt"] },
          { cells: ["t (♀)", "Tt", "Tt"] },
        ]}
        caption="Gametes of the tall TT parent carry T; gametes of the dwarf tt parent carry t. Every zygote is Tt — the F₁ is uniformly tall, although it carries both alleles."
      />
      <p>
        The F<sub>1</sub> plant of genotype Tt, when self-pollinated, produces gametes of genotype T and t
        in equal proportion. Pollen grains of genotype T have a 50 per cent chance of pollinating eggs of
        genotype T as well as of genotype t; pollen of genotype t likewise has a 50 per cent chance with
        either kind of egg. Fertilisation is at random, so the zygotes can be TT, Tt or tt.
      </p>
      <TableCard
        title="Punnett square 2 — self-pollination of the F₁ (Tt × Tt)"
        headers={["♀ / ♂", "T", "t"]}
        rows={[
          { cells: ["T", "TT", "Tt"] },
          { cells: ["t", "Tt", "tt"] },
        ]}
        caption="1/4 of the random fertilisations give TT, 1/2 give Tt and 1/4 give tt. Externally TT and Tt are both tall, so the phenotype ratio is 3 tall : 1 dwarf while the genotype ratio is 1 : 2 : 1."
      />
      <Comparison
        columns={[
          {
            title: "F₂ genotype ratio",
            children: (
              <ul className="space-y-1">
                <li>1 TT (homozygous tall)</li>
                <li>2 Tt (heterozygous tall)</li>
                <li>1 tt (homozygous dwarf)</li>
                <li className="pt-1 font-semibold">1 : 2 : 1</li>
              </ul>
            ),
          },
          {
            title: "F₂ phenotype ratio",
            children: (
              <ul className="space-y-1">
                <li>3 tall (1 TT + 2 Tt)</li>
                <li>1 dwarf (tt)</li>
                <li className="pt-1 font-semibold">3 : 1</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        The 1/4 : 1/2 : 1/4 ratio of TT : Tt : tt is mathematically condensable to the form of the
        binomial expression, with the gametes bearing T or t in equal frequency of ½:
      </p>
      <FormulaBlock
        latex={String.raw`\left(\tfrac{1}{2}T + \tfrac{1}{2}t\right)^{2} = \tfrac{1}{4}TT + \tfrac{1}{2}Tt + \tfrac{1}{4}tt`}
        important
        label="Genotypes of the F₂ as a binomial expansion"
      />
      <p>
        Mendel self-pollinated the F<sub>2</sub> plants and found that dwarf F<sub>2</sub> plants
        continued to generate dwarf plants in the F<sub>3</sub> and F<sub>4</sub> generations. He
        concluded that the genotype of the dwarfs was homozygous &mdash; tt.
      </p>
      <Expandable title="What would Mendel have got if he had self-pollinated a tall F₂ plant?">
        <p>
          A tall F<sub>2</sub> plant is either TT or Tt &mdash; externally the two cannot be
          distinguished. On self-pollination:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong>If TT:</strong> all the offspring are tall (TT × TT → all TT).
          </li>
          <li>
            <strong>If Tt:</strong> the offspring segregate 3 tall : 1 dwarf (Tt × Tt → 1 TT : 2 Tt : 1
            tt).
          </li>
        </ul>
        <p className="mt-2">
          So among the tall F<sub>2</sub> plants, one-third (the TT ones) breed true for tallness, while
          two-thirds (the Tt ones) again throw dwarfs. This is the ratio 1 TT : 2 Tt among the tall
          plants, i.e. 1 : 2.
        </p>
      </Expandable>

      <h3 id="h-4-2-testcross">The test cross</h3>
      <p>
        Genotypic ratios can be calculated using mathematical probability, but by simply looking at the
        phenotype of a dominant trait it is not possible to know the genotypic composition. Whether a
        tall plant from F<sub>1</sub> or F<sub>2</sub> is TT or Tt cannot be predicted by looking at it.
        To determine the genotype of a tall plant at F<sub>2</sub>, Mendel crossed it with a dwarf plant
        &mdash; a <strong>test cross</strong>.
      </p>
      <Callout type="important" title="Test cross — definition">
        In a typical test cross an organism (pea plants here) showing a dominant phenotype (and whose
        genotype is to be determined) is crossed with the recessive parent instead of self-crossing. The
        progenies of such a cross can easily be analysed to predict the genotype of the test organism.
      </Callout>
      <p>
        Figure 4.5 shows a typical test cross where violet colour flower (V) is dominant over white
        colour flower (v). A violet-flowered plant of unknown genotype (VV or Vv) is crossed with a
        white-flowered plant (vv), and the progeny decides the answer.
      </p>
      <Comparison
        columns={[
          {
            title: "If the violet parent is VV",
            children: (
              <ul className="space-y-1">
                <li>Gametes: all V.</li>
                <li>White parent gives only v.</li>
                <li>All progeny Vv &mdash; violet.</li>
                <li className="pt-1 font-semibold">100% violet, no white</li>
              </ul>
            ),
          },
          {
            title: "If the violet parent is Vv",
            children: (
              <ul className="space-y-1">
                <li>Gametes: 50% V, 50% v.</li>
                <li>White parent gives only v.</li>
                <li>Progeny Vv and vv in equal numbers.</li>
                <li className="pt-1 font-semibold">1 violet : 1 white</li>
              </ul>
            ),
          },
        ]}
      />
      <Expandable title="Worked example — test cross of a tall F₂ pea plant" variant="example">
        <p>
          <strong>Problem:</strong> A tall F<sub>2</sub> pea plant of unknown genotype is crossed with a
          dwarf plant (tt). Predict the progeny in the two possible cases and state how the genotype is
          decided.
        </p>
        <p className="mt-2">
          <strong>Case 1 — the tall plant is TT.</strong>
        </p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Gametes of TT: all T.</li>
          <li>Gametes of tt: all t.</li>
          <li>Zygotes: all Tt.</li>
          <li>Phenotypes: <Formula>{String.raw`100\%`}</Formula> tall, no dwarf.</li>
        </ul>
        <p className="mt-2">
          <strong>Case 2 — the tall plant is Tt.</strong>
        </p>
        <ul className="mt-1 list-disc pl-5 space-y-1">
          <li>Gametes of Tt: 50% T and 50% t.</li>
          <li>Gametes of tt: all t.</li>
          <li>Zygotes: 1 Tt : 1 tt.</li>
          <li>Phenotypes: 1 tall : 1 dwarf.</li>
        </ul>
        <p className="mt-2">
          <strong>Conclusion:</strong> the appearance of any dwarf progeny proves the tested tall plant
          was heterozygous (Tt); an all-tall progeny indicates it was homozygous (TT). This is why the
          recessive parent is used &mdash; it contributes only recessive alleles and so cannot mask
          anything.
        </p>
      </Expandable>

      <h3 id="h-4-2-1">4.2.1 Law of Dominance</h3>
      <Callout type="important" title="Law of Dominance">
        <p className="font-medium">The law has three parts:</p>
        <ol className="mt-2 list-decimal pl-5 space-y-1.5">
          <li>Characters are controlled by discrete units called factors.</li>
          <li>Factors occur in pairs.</li>
          <li>
            In a dissimilar pair of factors one member of the pair dominates (dominant) the other
            (recessive).
          </li>
        </ol>
      </Callout>
      <p>
        The law of dominance is used to explain the expression of only one of the parental characters in
        a monohybrid cross in the F<sub>1</sub>, and the expression of both in the F<sub>2</sub>. It also
        explains the proportion of 3 : 1 obtained at the F<sub>2</sub>.
      </p>

      <h3 id="h-4-2-2">4.2.2 Law of Segregation</h3>
      <Callout type="important" title="Law of Segregation">
        This law is based on the fact that the alleles do not show any blending and that both the
        characters are recovered as such in the F<sub>2</sub> generation though one of these is not seen
        at the F<sub>1</sub> stage. Though the parents contain two alleles during gamete formation, the
        factors or alleles of a pair segregate from each other such that a gamete receives only one of
        the two factors.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          A <strong>homozygous parent</strong> produces all gametes that are similar.
        </li>
        <li>
          A <strong>heterozygous parent</strong> produces two kinds of gametes, each having one allele,
          in equal proportion.
        </li>
        <li>
          The segregation happens during <strong>meiosis</strong>, and it is a random process &mdash; so
          there is a 50 per cent chance of a gamete containing either allele.
        </li>
      </ul>
      <KeyPoint title="Why segregation explains the reappearance of dwarfness">
        The recessive allele is never lost in the F<sub>1</sub> &mdash; it is only hidden. When the
        heterozygote forms gametes, T and t separate cleanly, so the F<sub>2</sub> can again bring two t
        alleles together and rebuild the dwarf phenotype.
      </KeyPoint>

      <h3 id="h-4-2-2-1">4.2.2.1 Incomplete Dominance</h3>
      <p>
        When experiments on peas were repeated using other traits in other plants, it was found that
        sometimes the F<sub>1</sub> had a phenotype that did not resemble either of the two parents and
        was <em>in between</em> the two. The inheritance of flower colour in the dog flower (snapdragon
        or <em>Antirrhinum</em> sp.) is a good example.
      </p>
      <ProcessCard
        title="Incomplete dominance in snapdragon"
        steps={[
          {
            label: "Parents: RR (red) × rr (white)",
            description: "Both true-breeding for flower colour.",
          },
          {
            label: "F₁: Rr is pink",
            description: "The heterozygote is neither red nor white — the phenotype is in between.",
          },
          {
            label: "F₂ from selfing the F₁",
            description: "1 (RR) red : 2 (Rr) pink : 1 (rr) white.",
          },
          {
            label: "What changed?",
            description: "The genotype ratio is exactly the mendelian 1 : 2 : 1, but the phenotype ratio is no longer 3 : 1. R is not completely dominant over r, so Rr can be distinguished as pink from RR (red) and rr (white).",
          },
        ]}
      />
      <TableCard
        title="Incomplete dominance — F₂ of snapdragon"
        headers={["F₂ class", "Genotype", "Phenotype"]}
        rows={[
          { cells: ["1 part", "RR", "Red"] },
          { cells: ["2 parts", "Rr", "Pink (intermediate)"] },
          { cells: ["1 part", "rr", "White"] },
        ]}
        caption="Genotypic ratio 1 : 2 : 1 and phenotypic ratio 1 : 2 : 1 — the two ratios coincide because each genotype has its own visible phenotype."
      />
      <Callout type="note" title="Explanation of the concept of dominance">
        <p>
          What exactly is dominance? Why are some alleles dominant and some recessive? To answer this we
          must understand what a gene does. Every gene contains the information to express a particular
          trait. In a diploid organism there are two copies of each gene, i.e. a pair of alleles; these
          need not be identical in a heterozygote. One of them may have undergone some change that
          modifies the information it contains.
        </p>
      </Callout>
      <p>
        Take a gene that contains the information for producing an enzyme. The normal allele produces the
        normal enzyme needed for the transformation of a substrate S. Theoretically, the modified allele
        could be responsible for production of:
      </p>
      <Stepper
        steps={[
          {
            label: "(i) The normal / less efficient enzyme",
            description:
              "The modified allele is equivalent to the unmodified allele — it produces the same phenotype/trait, i.e. it still transforms substrate S. Such equivalent allele pairs are very common.",
          },
          {
            label: "(ii) A non-functional enzyme",
            description:
              "The phenotype may be affected. The trait now depends only on the functioning of the unmodified allele.",
          },
          {
            label: "(iii) No enzyme at all",
            description:
              "The same outcome as (ii): the recessive trait is seen because no enzyme is produced.",
          },
        ]}
      />
      <p>
        The unmodified (functioning) allele, which represents the original phenotype, is the{" "}
        <strong>dominant allele</strong>, and the modified allele is generally the{" "}
        <strong>recessive allele</strong>. Hence the recessive trait is seen due to a non-functional
        enzyme or because no enzyme is produced.
      </p>

      <h3 id="h-4-2-2-2">4.2.2.2 Co-dominance</h3>
      <p>
        In dominance the F<sub>1</sub> resembles either of the two parents; in incomplete dominance it is
        in-between. But in <strong>co-dominance</strong> the F<sub>1</sub> generation resembles{" "}
        <em>both</em> parents. A good example is the different types of red blood cells that determine
        ABO blood grouping in human beings.
      </p>
      <ConceptCard title="ABO blood groups — the gene I" icon="🩸">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Blood groups are controlled by the gene <strong>I</strong>.
          </li>
          <li>
            The plasma membrane of red blood cells has <strong>sugar polymers</strong> protruding from its
            surface; the kind of sugar is controlled by the gene.
          </li>
          <li>
            The gene I has <strong>three alleles</strong>: I<sup>A</sup>, I<sup>B</sup> and i.
          </li>
          <li>
            I<sup>A</sup> and I<sup>B</sup> produce a slightly different form of the sugar; allele i
            produces <strong>no sugar</strong>.
          </li>
          <li>
            Humans are diploid, so each person possesses any two of the three alleles.
          </li>
          <li>
            I<sup>A</sup> and I<sup>B</sup> are completely dominant over i &mdash; when I<sup>A</sup> and i
            are present only I<sup>A</sup> expresses, and when I<sup>B</sup> and i are present I
            <sup>B</sup> expresses.
          </li>
          <li>
            But when I<sup>A</sup> and I<sup>B</sup> are present together they <em>both</em> express their
            own types of sugars &mdash; this is co-dominance. Hence red blood cells have both A and B
            types of sugars.
          </li>
        </ul>
      </ConceptCard>
      <TableCard
        title="Table 4.2 — Genetic basis of blood groups in the human population"
        headers={["Allele from parent 1", "Allele from parent 2", "Genotype of offspring", "Blood type of offspring"]}
        rows={[
          {
            cells: [
              <>I<sup>A</sup></>,
              <>I<sup>A</sup></>,
              <>I<sup>A</sup>I<sup>A</sup></>,
              "A",
            ],
          },
          {
            cells: [
              <>I<sup>A</sup></>,
              <>I<sup>B</sup></>,
              <>I<sup>A</sup>I<sup>B</sup></>,
              "AB",
            ],
          },
          {
            cells: [
              <>I<sup>A</sup></>,
              "i",
              <>I<sup>A</sup>i</>,
              "A",
            ],
          },
          {
            cells: [
              <>I<sup>B</sup></>,
              <>I<sup>A</sup></>,
              <>I<sup>A</sup>I<sup>B</sup></>,
              "AB",
            ],
          },
          {
            cells: [
              <>I<sup>B</sup></>,
              <>I<sup>B</sup></>,
              <>I<sup>B</sup>I<sup>B</sup></>,
              "B",
            ],
          },
          {
            cells: [
              <>I<sup>B</sup></>,
              "i",
              <>I<sup>B</sup>i</>,
              "B",
            ],
          },
          { cells: ["i", "i", "ii", "O"] },
        ]}
        caption="Three alleles give six genotypes (because the two alleles can be any two of the three) but only four phenotypes: A, B, AB and O."
      />
      <RevealAnswer
        title="Quick check"
        question="There are six genotypes of the ABO blood group. How many phenotypes are possible?"
        answer={
          <>
            Four — A (I<sup>A</sup>I<sup>A</sup> or I<sup>A</sup>i), B (I<sup>B</sup>I<sup>B</sup> or I
            <sup>B</sup>i), AB (I<sup>A</sup>I<sup>B</sup>) and O (ii). AB is the co-dominant phenotype;
            A and B each cover two genotypes because i is recessive to both.
          </>
        }
      />
      <Callout type="note" title="Multiple alleles">
        The ABO example also shows <strong>multiple alleles</strong>: more than two &mdash; here three
        &mdash; alleles govern the same character. Since an individual can carry only two alleles,
        multiple alleles can be found only when population studies are made.
      </Callout>
      <p>
        Occasionally a single gene product may produce more than one effect. Starch synthesis in pea
        seeds is controlled by one gene with two alleles (B and b). Starch is synthesised effectively by
        BB homozygotes, so large starch grains are produced; bb homozygotes are less efficient and
        produce smaller starch grains. After maturation, BB seeds are round and bb seeds are wrinkled.
        Heterozygotes produce round seeds, so B seems dominant. But the starch grains produced are of{" "}
        <strong>intermediate size</strong> in Bb seeds &mdash; so if starch grain size is taken as the
        phenotype, the alleles show incomplete dominance.
      </p>
      <KeyPoint title="Dominance is not a property of the gene alone">
        Dominance is not an autonomous feature of a gene or of the product it codes for. It depends as
        much on the gene product and on the production of a particular phenotype from that product, as on{" "}
        <Highlight color="yellow">which phenotype we choose to examine</Highlight> when more than one
        phenotype is influenced by the same gene.
      </KeyPoint>
      <Comparison
        columns={[
          {
            title: "Incomplete dominance",
            children: (
              <ul className="space-y-1">
                <li>F₁ is in-between the two parents.</li>
                <li>Phenotype: red × white → pink.</li>
                <li>F₂ = 1 red : 2 pink : 1 white.</li>
                <li>Phenotypic ratio equals genotypic ratio.</li>
                <li>Neither allele produces a functional enough product to hide the other.</li>
              </ul>
            ),
          },
          {
            title: "Co-dominance",
            children: (
              <ul className="space-y-1">
                <li>F₁ resembles both parents at once.</li>
                <li>Phenotype: A × B → AB.</li>
                <li>Both alleles express their own product.</li>
                <li>Each allele has its own detectable effect.</li>
                <li>Example: I<sup>A</sup>I<sup>B</sup> red cells carry both A and B sugars.</li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Calling incomplete dominance and co-dominance the same thing because in both cases the F₁ is not like either parent."
        correction="In incomplete dominance the F₁ is a blend (pink); in co-dominance the F₁ shows both parental phenotypes side by side (AB). Pink is a new, intermediate phenotype; AB is two phenotypes present together."
        example="Snapdragon Rr = pink (incomplete dominance); human blood group AB = two sugars together (co-dominance)."
      />

      <h2 id="h-4-3">4.3 Inheritance of Two Genes</h2>
      <p>
        Mendel also worked with and crossed pea plants that differed in two characters &mdash; a pea
        plant with yellow, round seeds and one with green, wrinkled seeds. The seeds resulting from the
        cross had <strong>yellow coloured and round shaped</strong> seeds, so yellow was dominant over
        green and round shape dominant over wrinkled. These results were identical to those he got from
        the separate monohybrid crosses between yellow and green seeded plants, and between round and
        wrinkled seeded plants.
      </p>
      <p>
        Using Y for dominant yellow seed colour and y for recessive green, R for round seeds and r for
        wrinkled seed shape, the parents are <strong>RRYY</strong> and <strong>rryy</strong>. The gametes
        RY and ry unite on fertilisation to produce the F<sub>1</sub> hybrid <strong>RrYy</strong>. When
        Mendel self hybridised the F<sub>1</sub> plants he found that 3/4 of F<sub>2</sub> plants had
        yellow seeds and 1/4 had green &mdash; colour segregated in a 3 : 1 ratio. Round and wrinkled
        seed shape also segregated in a 3 : 1 ratio, just like in a monohybrid cross.
      </p>
      <TableCard
        title="Punnett square — dihybrid F₂ (RrYy × RrYy)"
        headers={["♀ / ♂", "RY", "Ry", "rY", "ry"]}
        rows={[
          { cells: ["RY", "RRYY", "RRYy", "RrYY", "RrYy"] },
          { cells: ["Ry", "RRYy", "RRyy", "RrYy", "Rryy"] },
          { cells: ["rY", "RrYY", "RrYy", "rrYY", "rrYy"] },
          { cells: ["ry", "RrYy", "Rryy", "rrYy", "rryy"] },
        ]}
        caption="Each parent forms four kinds of gametes (RY, Ry, rY, ry), so 4 × 4 = 16 boxes. Grouping the 16 boxes by seed appearance gives 9 round yellow : 3 wrinkled yellow : 3 round green : 1 wrinkled green."
      />
      <TableCard
        title="F₂ phenotypes of the dihybrid cross"
        headers={["Phenotype", "Genotypes", "Proportion"]}
        rows={[
          { cells: ["Round yellow", "RRYY, RRYy, RrYY, RrYy", "9"] },
          { cells: ["Wrinkled yellow", "rrYY, rrYy", "3"] },
          { cells: ["Round green", "RRyy, Rryy", "3"] },
          { cells: ["Wrinkled green", "rryy", "1"] },
        ]}
        caption="Two new combinations (wrinkled yellow, round green) appear which were not present in either parent — proof that the two characters assort independently."
      />

      <h3 id="h-4-3-1">4.3.1 Law of Independent Assortment</h3>
      <p>
        In the dihybrid cross the four phenotypes appeared in the ratio 9 : 3 : 3 : 1, and such a ratio
        was observed for several pairs of characters that Mendel studied. It can be derived as a
        combination series of 3 yellow : 1 green with 3 round : 1 wrinkled:
      </p>
      <FormulaBlock
        latex={String.raw`(3\,\text{round} : 1\,\text{wrinkled}) \times (3\,\text{yellow} : 1\,\text{green}) = 9:3:3:1`}
        important
        label="Dihybrid ratio as a product of two monohybrid ratios"
      />
      <Callout type="important" title="Law of Independent Assortment">
        &lsquo;When two pairs of traits are combined in a hybrid, segregation of one pair of characters is
        independent of the other pair of characters.&rsquo;
      </Callout>
      <p>
        The Punnett square shows how the two pairs of genes segregate independently during meiosis in the
        F<sub>1</sub> RrYy plant. Consider the pair R and r: 50 per cent of the gametes have R and 50 per
        cent have r. Besides carrying R or r, each gamete must also carry Y or y &mdash; and the
        segregation of R/r is independent of the segregation of Y/y.
      </p>
      <Stepper
        steps={[
          {
            label: "50 per cent of the r-bearing gametes carry Y, and 50 per cent carry y",
            description: "The two loci are assorted independently, so each allele of one pair is free to combine with either allele of the other pair.",
          },
          {
            label: "50 per cent of the R-bearing gametes carry Y, and 50 per cent carry y",
            description: "The same independent behaviour applied to the other class of gametes.",
          },
          {
            label: "Four genotypes of gametes result",
            description: "RY, Ry, rY and ry — four types of pollen and four types of eggs.",
          },
          {
            label: "Each type has a frequency of 25 per cent (1/4 of the total)",
            description: "This is why the 4 × 4 Punnett square is needed for the F₂.",
          },
        ]}
      />
      <Formula block>{String.raw`P(RY) = P(R)\times P(Y) = \tfrac{1}{2}\times\tfrac{1}{2} = \tfrac{1}{4}`}</Formula>
      <p>
        When the four types of eggs and pollen are written on the two sides of a Punnett square it is
        easy to derive the composition of the zygotes that give rise to the F<sub>2</sub> plants.
      </p>
      <Expandable title="Work out the F₂ genotypic ratio of the dihybrid cross" variant="example">
        <p>
          <strong>Question:</strong> although there are 16 squares, how many different genotypes and
          phenotypes are formed? Is the genotypic ratio also 9 : 3 : 3 : 1?
        </p>
        <p className="mt-2">
          <strong>Answer:</strong> no &mdash; there are <strong>9 genotypes</strong> but only{" "}
          <strong>4 phenotypes</strong>. Counting the 16 boxes of the Punnett square:
        </p>
        <TableCard
          headers={["Genotype", "Number of boxes", "Phenotype"]}
          rows={[
            { cells: ["RRYY", "1", "Round yellow"] },
            { cells: ["RRYy", "2", "Round yellow"] },
            { cells: ["RrYY", "2", "Round yellow"] },
            { cells: ["RrYy", "4", "Round yellow"] },
            { cells: ["RRyy", "1", "Round green"] },
            { cells: ["Rryy", "2", "Round green"] },
            { cells: ["rrYY", "1", "Wrinkled yellow"] },
            { cells: ["rrYy", "2", "Wrinkled yellow"] },
            { cells: ["rryy", "1", "Wrinkled green"] },
          ]}
        />
        <p className="mt-2">
          The genotypic ratio is therefore <strong>1 : 2 : 2 : 4 : 1 : 2 : 1 : 2 : 1</strong>, not
          9 : 3 : 3 : 1. Adding the phenotypes gives 9 + 3 + 3 + 1 = 16, which is the phenotypic ratio.
        </p>
      </Expandable>

      <h3 id="h-4-3-2">4.3.2 Chromosomal Theory of Inheritance</h3>
      <p>
        Mendel published his work on the inheritance of characters in 1865, but for several reasons it
        remained unrecognised till 1900.
      </p>
      <TableCard
        title="Why Mendel&apos;s work was ignored till 1900"
        headers={["Reason", "Explanation"]}
        rows={[
          { cells: ["Communication", "Communication was not easy in those days and his work could not be widely publicised."] },
          { cells: ["Concept of discrete factors", "Stable, discrete units that did not blend were not accepted by his contemporaries as an explanation for the apparently continuous variation seen in nature."] },
          { cells: ["Mathematics in biology", "Using mathematics to explain biological phenomena was totally new and unacceptable to many biologists of his time."] },
          { cells: ["No physical proof", "Though his work suggested that factors (genes) were discrete units, he could not provide any physical proof for their existence or say what they were made of."] },
        ]}
      />
      <p>
        In <strong>1900</strong>, three scientists &mdash; <strong>de Vries, Correns and von
        Tschermak</strong> &mdash; independently rediscovered Mendel&apos;s results. By this time
        advances in microscopy allowed scientists to observe cell division carefully. This led to the
        discovery of structures in the nucleus that appeared to double and divide just before each cell
        division: the <strong>chromosomes</strong> (coloured bodies, as they were visualised by
        staining). By 1902 the chromosome movement during meiosis had been worked out.
      </p>
      <p>
        <strong>Walter Sutton</strong> and <strong>Theodore Boveri</strong> noted that the behaviour of
        chromosomes was parallel to the behaviour of genes and used chromosome movement to explain
        Mendel&apos;s laws. Chromosomes as well as genes occur in pairs, and the two alleles of a gene
        pair are located on <Highlight color="blue">homologous sites on homologous chromosomes</Highlight>.
      </p>
      <TableCard
        title="Table 4.3 — Comparison between the behaviour of chromosomes and genes"
        headers={["Behaviour", "A", "B"]}
        rows={[
          { cells: ["Occurrence", "Occur in pairs", "Occur in pairs"] },
          {
            cells: [
              "Segregation",
              "Segregate at the time of gamete formation such that only one of each pair is transmitted to a gamete",
              "Segregate at gamete formation and only one of each pair is transmitted to a gamete",
            ],
          },
          {
            cells: [
              "Independence",
              "Independent pairs segregate independently of each other",
              "One pair segregates independently of another pair",
            ],
          },
        ]}
        caption="Column A describes chromosomes and column B the genes they carry — the two behaviours run in parallel, which is exactly Sutton and Boveri's argument. You decide by the wording: chromosome pairs themselves separate at anaphase I, while the genes are the factors they carry."
      />
      <p>
        During anaphase of meiosis I, the two chromosome pairs can align at the metaphase plate
        independently of each other. With four chromosomes (two long, two short, in two colours), two
        equally likely alignments are possible:
      </p>
      <Comparison
        columns={[
          {
            title: "Possibility I",
            children: (
              <p>
                One long orange and short green chromosome at the same pole; long yellow and short red at
                the other pole.
              </p>
            ),
          },
          {
            title: "Possibility II",
            children: (
              <p>
                One long orange and short red chromosome at the same pole; long yellow and short green at
                the other pole.
              </p>
            ),
          },
        ]}
      />
      <p>
        In the first alignment orange and green segregate together; in the second, orange segregates with
        red. This is independent assortment of chromosomes, and it is what produces new gene combinations.
      </p>
      <Callout type="important" title="Chromosomal theory of inheritance">
        Sutton and Boveri argued that the pairing and separation of a pair of chromosomes would lead to
        the segregation of a pair of factors they carried. Sutton united the knowledge of chromosomal
        segregation with Mendelian principles and called it the{" "}
        <Highlight color="yellow">chromosomal theory of inheritance</Highlight>.
      </Callout>
      <p>
        Experimental verification of the chromosomal theory by <strong>Thomas Hunt Morgan</strong> and his
        colleagues led to discovering the basis for the variation that sexual reproduction produced.
        Morgan worked with the tiny fruit fly, <em>Drosophila melanogaster</em>, which proved very
        suitable for such studies:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>They could be grown on a simple synthetic medium in the laboratory.</li>
        <li>They complete their life cycle in about <strong>two weeks</strong>.</li>
        <li>A single mating could produce a large number of progeny flies.</li>
        <li>There was a clear differentiation of the sexes &mdash; males and females are easily distinguishable.</li>
        <li>They have many types of hereditary variations that can be seen with low power microscopes.</li>
      </ul>

      <h3 id="h-4-3-3">4.3.3 Linkage and Recombination</h3>
      <p>
        Morgan carried out several dihybrid crosses in <em>Drosophila</em> to study genes that were
        sex-linked. The crosses were similar to Mendel&apos;s dihybrid crosses in peas. For example, he
        hybridised <strong>yellow-bodied, white-eyed females</strong> to{" "}
        <strong>brown-bodied, red-eyed males</strong> and intercrossed their F<sub>1</sub> progeny. He
        observed that the two genes did not segregate independently, and the F<sub>2</sub> ratio deviated
        very significantly from the 9 : 3 : 3 : 1 ratio expected when the two genes are independent.
      </p>
      <p>
        Morgan and his group knew that the genes were located on the X chromosome and saw quickly that
        when the two genes in a dihybrid cross were situated on the <em>same</em> chromosome, the
        proportion of parental gene combinations was much higher than the non-parental type.
      </p>
      <Comparison
        columns={[
          {
            title: "Linkage",
            children: (
              <ul className="space-y-1">
                <li>Physical association of two genes on the same chromosome.</li>
                <li>Keeps parental combinations together.</li>
                <li>Lowers the proportion of non-parental types.</li>
              </ul>
            ),
          },
          {
            title: "Recombination",
            children: (
              <ul className="space-y-1">
                <li>Generation of non-parental gene combinations.</li>
                <li>Its frequency measures the distance between genes.</li>
                <li>Higher frequency = genes farther apart / looser linkage.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        Morgan also found that even when genes were grouped on the same chromosome, some were{" "}
        <strong>very tightly linked</strong> (very low recombination, Cross A in Figure 4.11) while others
        were <strong>loosely linked</strong> (higher recombination, Cross B).
      </p>
      <div className="grid gap-3 sm:grid-cols-2 [&>div]:my-3">
        <MetricCard
          label="white and yellow"
          value="1.3%"
          unit="recombination"
          description="Very tightly linked — the two genes lie close together on the X chromosome, so they are almost always inherited together."
        />
        <MetricCard
          label="white and miniature wing"
          value="37.2%"
          unit="recombination"
          trend="up"
          description="Loosely linked — farther apart, so crossing over separates them far more often."
        />
      </div>
      <p>
        His student <strong>Alfred Sturtevant</strong> used the frequency of recombination between gene
        pairs on the same chromosome as a measure of the distance between genes and &lsquo;mapped&rsquo;
        their position on the chromosome. Today genetic maps are extensively used as a starting point in
        the sequencing of whole genomes, as was done in the Human Genome Sequencing Project.
      </p>
      <Callout type="note" title="Figure 4.11 in words">
        Cross A follows the genes y (yellow body) and w (white eye) on the X chromosome; Cross B follows
        w and m (miniature wing). In both crosses the parental combinations far outnumber the
        recombinants, but the recombinant class is much larger in cross B. Dominant wild type alleles are
        written with a (+) sign in superscript, e.g. w<sup>+</sup>. The strength of linkage between y and
        w is higher than between w and m.
      </Callout>
      <MistakeCard
        mistake="Assuming linked genes always stay together, so a dihybrid cross of linked genes must give only the two parental types."
        correction="Linkage raises the proportion of parental combinations; it does not abolish recombination. Crossing over between the linked genes still produces non-parental types, in proportion to the distance between them."
        example="y and w recombine in only 1.3 per cent of gametes; w and m in 37.2 per cent."
      />

      <h2 id="h-4-4">4.4 Polygenic Inheritance</h2>
      <p>
        Mendel&apos;s studies mainly described traits that have distinct alternate forms &mdash; flower
        colour is either purple or white. But many traits are not so distinct; they are spread across a{" "}
        <strong>gradient</strong>. In humans we do not have just tall or short people as two distinct
        alternatives, but a whole range of possible heights. Such traits are generally controlled by
        three or more genes and are called <strong>polygenic traits</strong>.
      </p>
      <p>
        Besides the involvement of multiple genes, polygenic inheritance also takes into account the
        influence of the <strong>environment</strong>. Human skin colour is another classic example. In a
        polygenic trait the phenotype reflects the contribution of each allele &mdash; the effect of each
        allele is <strong>additive</strong>.
      </p>
      <ConceptCard title="Skin colour — a three-gene model" icon="🎨">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Assume three genes A, B and C control skin colour in humans.</li>
          <li>
            The dominant forms A, B and C are responsible for <strong>dark</strong> skin colour.
          </li>
          <li>
            The recessive forms a, b and c give <strong>light</strong> skin colour.
          </li>
          <li>
            AABBCC &mdash; all six dominant alleles &mdash; gives the <strong>darkest</strong> skin.
          </li>
          <li>
            aabbcc &mdash; all six recessive alleles &mdash; gives the <strong>lightest</strong> skin.
          </li>
          <li>Three dominant and three recessive alleles give an intermediate skin colour.</li>
        </ul>
      </ConceptCard>
      <TableCard
        title="Skin shade from the number of dominant alleles"
        headers={["Dominant alleles", "Example genotype", "Skin colour"]}
        rows={[
          { cells: ["6", "AABBCC", "Darkest"] },
          { cells: ["5", "AABBCc", "Very dark"] },
          { cells: ["4", "AABbCc", "Dark intermediate"] },
          { cells: ["3", "AaBbCc", "Intermediate"] },
          { cells: ["2", "AabbCc", "Light intermediate"] },
          { cells: ["1", "Aabbcc", "Very light"] },
          { cells: ["0", "aabbcc", "Lightest"] },
        ]}
        caption="The number of each type of allele in the genotype determines the darkness or lightness of the skin in an individual — a continuous series of phenotypes, not two classes."
      />
      <KeyPoint title="Polygenic vs mendelian traits">
        Mendelian traits give <strong>discrete classes</strong> with fixed ratios (3 : 1, 9 : 3 : 3 : 1).
        Polygenic traits give a <strong>continuous range</strong> because the alleles of several genes add
        up, and the environment shifts the expression further.
      </KeyPoint>

      <h2 id="h-4-5">4.5 Pleiotropy</h2>
      <p>
        We have so far seen the effect of a gene on a single phenotype or trait. There are however
        instances where a <em>single gene</em> can exhibit multiple phenotypic expression. Such a gene is
        called a <strong>pleiotropic gene</strong>.
      </p>
      <Callout type="important" title="Pleiotropy — mechanism">
        The underlying mechanism of pleiotropy in most cases is the effect of a gene on{" "}
        <Highlight color="yellow">metabolic pathways</Highlight> which contribute towards different
        phenotypes.
      </Callout>
      <FactCard
        title="Example — phenylketonuria"
        definition="Caused by mutation in the gene that codes for the enzyme phenylalanine hydroxylase (a single gene mutation). It manifests through mental retardation and a reduction in hair and skin pigmentation."
        icon="🧠"
      />
      <Comparison
        columns={[
          {
            title: "Pleiotropy",
            children: (
              <ul className="space-y-1">
                <li>One gene → many phenotypes.</li>
                <li>Example: phenylketonuria.</li>
                <li>Mechanism: one metabolic step affects several tissues.</li>
              </ul>
            ),
          },
          {
            title: "Polygenic inheritance",
            children: (
              <ul className="space-y-1">
                <li>Many genes → one phenotype.</li>
                <li>Example: human skin colour, height.</li>
                <li>Effect of each allele is additive.</li>
              </ul>
            ),
          },
        ]}
      />
      <MistakeCard
        mistake="Confusing pleiotropy with polygenic inheritance because both involve the number one and many."
        correction="Pleiotropy is one gene with many effects. Polygenic inheritance is many genes producing one continuously varying trait. The direction of the relationship is opposite."
        example="Phenylketonuria — one gene, several symptoms; skin colour — three or more genes, one gradient of shades."
      />

      <h2 id="h-4-6">4.6 Sex Determination</h2>
      <p>
        The mechanism of sex determination has always been a puzzle before geneticists. The initial clue
        came from experiments on insects, and cytological observations in a number of insects led to the
        concept of the genetic/chromosomal basis of sex determination.
      </p>
      <p>
        <strong>Henking (1891)</strong> could trace a specific nuclear structure all through
        spermatogenesis in a few insects, and observed that <strong>50 per cent of the sperm</strong>{" "}
        received this structure after spermatogenesis, whereas the other 50 per cent did not. He named it
        the <strong>X body</strong> but could not explain its significance. Further investigations led to
        the conclusion that the X body was in fact a chromosome &mdash; hence the name{" "}
        <strong>X-chromosome</strong>.
      </p>
      <h3 id="h-4-6-xo">The XO type</h3>
      <p>
        In a large number of insects the mechanism of sex determination is of the <strong>XO type</strong>
        : all eggs bear an additional X-chromosome besides the other chromosomes (autosomes), while some
        sperms bear the X-chromosome and some do not. Eggs fertilised by sperm having an X-chromosome
        become females; those fertilised by sperm without an X-chromosome become males.
      </p>
      <Expandable title="Are the numbers of chromosomes in male and female equal?">
        <p>
          <strong>No, not in the XO type.</strong> The female has a pair of X-chromosomes besides the
          autosomes, while the male has only one X-chromosome and no second sex chromosome. So the male
          carries one chromosome fewer than the female.
        </p>
        <p className="mt-2">
          <strong>Yes, in the XY type.</strong> Both sexes have the same total number of chromosomes; the
          male simply has one X and one (smaller) Y, while the female has two X chromosomes.
        </p>
      </Expandable>
      <p>
        Because the X-chromosome is involved in determining sex, it was designated the{" "}
        <strong>sex chromosome</strong>, and the rest of the chromosomes were named{" "}
        <strong>autosomes</strong>. The <strong>grasshopper</strong> is an example of the XO type: males
        have only one X-chromosome besides the autosomes, whereas females have a pair of X-chromosomes.
      </p>
      <h3 id="h-4-6-xy">The XY type</h3>
      <p>
        In a number of other insects and mammals including man, the <strong>XY type</strong> is seen,
        where both male and female have the same number of chromosomes. Among the males an X-chromosome
        is present but its counterpart is distinctly smaller and called the <strong>Y-chromosome</strong>;
        females have a pair of X-chromosomes. Both males and females bear the same number of autosomes.
        Hence males have autosomes plus XY, while females have autosomes plus XX &mdash; as in human
        beings and in <em>Drosophila</em>.
      </p>
      <p>
        In both the XO and XY types, males produce two different types of gametes &mdash; either with or
        without the X-chromosome, or some gametes with X and some with Y. Such a mechanism is called{" "}
        <strong>male heterogamety</strong>.
      </p>
      <h3 id="h-4-6-zw">Female heterogamety — birds</h3>
      <p>
        In some other organisms, e.g. birds, a different mechanism is observed. The total number of
        chromosomes is the same in both males and females, but <em>females</em> produce two different
        types of gametes in terms of the sex chromosomes &mdash; <strong>female heterogamety</strong>. The
        two sex chromosomes of a female bird are designated <strong>Z</strong> and <strong>W</strong>.
        Females have one Z and one W chromosome, whereas males have a pair of Z-chromosomes besides the
        autosomes.
      </p>
      <TreeDiagram
        title="Sex determination mechanisms in the animal kingdom"
        nodes={[
          {
            label: "Heterogamety — two kinds of gametes in one sex",
            children: [
              {
                label: "Male heterogamety",
                detail: "The male produces two types of gametes; the female produces one.",
                children: [
                  { label: "XO type", detail: "Grasshopper — male XO, female XX; male has one chromosome fewer." },
                  { label: "XY type", detail: "Humans and Drosophila — male XY, female XX; equal chromosome number." },
                ],
              },
              {
                label: "Female heterogamety",
                detail: "The female produces two types of gametes; the male produces one.",
                children: [
                  { label: "ZW type", detail: "Birds — female ZW, male ZZ; equal chromosome number." },
                ],
              },
            ],
          },
        ]}
      />
      <TableCard
        title="Chromosomal sex determination at a glance"
        headers={["System", "Female", "Male", "Example"]}
        rows={[
          { cells: ["XO", "XX", "XO", "Grasshopper"] },
          { cells: ["XY", "XX", "XY", "Humans, Drosophila"] },
          { cells: ["ZW", "ZW", "ZZ", "Birds"] },
        ]}
      />

      <h3 id="h-4-6-1">4.6.1 Sex Determination in Humans</h3>
      <p>
        The sex determining mechanism in humans is the <strong>XY type</strong>. Out of 23 pairs of
        chromosomes, <strong>22 pairs are exactly the same</strong> in both males and females &mdash;
        these are the autosomes. A pair of X-chromosomes is present in the female, whereas the presence
        of an X and a Y chromosome determines the male characteristic.
      </p>
      <p>
        During spermatogenesis, males produce two types of gametes: 50 per cent of the total sperm
        produced carry the X-chromosome and the rest 50 per cent carry the Y-chromosome besides the
        autosomes. Females produce only one type of ovum, with an X-chromosome.
      </p>
      <TableCard
        title="Punnett square — sex of the child"
        headers={["", "X (ovum)", "X (ovum)"]}
        rows={[
          { cells: ["X (sperm)", "XX — girl", "XX — girl"] },
          { cells: ["Y (sperm)", "XY — boy", "XY — boy"] },
        ]}
        caption="All ova carry X; half the sperms carry X and half carry Y. There is an equal probability of fertilisation of the ovum with either kind of sperm, so each pregnancy carries a 50 per cent probability of a male or a female child."
      />
      <KeyPoint title="Who determines the sex of the child?">
        It is the <Highlight color="yellow">genetic makeup of the sperm</Highlight> &mdash; whether it
        carries X or Y &mdash; that determines the sex of the child. The mother contributes only an X, so
        she cannot decide the sex of the child.
      </KeyPoint>
      <Callout type="note" title="A false notion to reject">
        It is unfortunate that in our society women are blamed for giving birth to female children and
        have been ostracised and ill-treated because of this false notion. Genetically, the sex of the
        child is decided by the father&apos;s sperm.
      </Callout>

      <h3 id="h-4-6-2">4.6.2 Sex Determination in Honey Bee</h3>
      <p>
        The sex determination in the honey bee is based on the <strong>number of sets of chromosomes</strong>{" "}
        an individual receives. An offspring formed from the union of a sperm and an egg develops as a
        female (queen or worker), and an unfertilised egg develops as a male (drone) by means of{" "}
        <strong>parthenogenesis</strong>. Males therefore have half the number of chromosomes of a female.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 [&>div]:my-3">
        <MetricCard
          label="Female (queen / worker)"
          value="32"
          unit="chromosomes"
          description="Diploid — develops from a fertilised egg."
        />
        <MetricCard
          label="Male (drone)"
          value="16"
          unit="chromosomes"
          description="Haploid — develops from an unfertilised egg by parthenogenesis."
        />
      </div>
      <p>
        This is called the <strong>haplodiploid sex-determination system</strong> and has special
        characteristic features:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Males produce sperms by <strong>mitosis</strong>.</li>
        <li>They do not have a father and thus cannot have sons.</li>
        <li>They do have a grandfather and can have grandsons.</li>
      </ul>
      <Expandable title="Why a drone has a grandfather but no father" variant="example">
        <p>
          <strong>Step 1 — a drone comes from an unfertilised egg.</strong> The egg is formed by the
          queen and develops without fertilisation, so the drone has 16 chromosomes, all from the queen.
        </p>
        <p className="mt-1.5">
          <strong>Step 2 — so the drone has a mother but no father.</strong> No paternal chromosome set
          ever entered its formation.
        </p>
        <p className="mt-1.5">
          <strong>Step 3 — the queen herself had a father.</strong> The queen developed from a fertilised
          egg, so her father (a drone of the previous generation) is the drone&apos;s grandfather.
        </p>
        <p className="mt-1.5">
          <strong>Step 4 — a drone produces sperms by mitosis.</strong> All his sperms carry the same
          chromosome set. If one of them fertilises an egg, the offspring is a diploid female &mdash;
          which is why a drone can have daughters but never sons (a son would have to come from a
          fertilised egg carrying his chromosomes, and that offspring is female).
        </p>
      </Expandable>
      <Expandable title="How is sex determination in birds different? Is the sperm or the egg responsible for the sex of the chick?">
        <p>
          In birds the <strong>female is heterogametic</strong> (ZW) and the male is{" "}
          <strong>homogametic</strong> (ZZ). All sperms carry Z, while eggs are of two kinds &mdash; Z and
          W.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Z egg + Z sperm → ZZ → male chick.</li>
          <li>W egg + Z sperm → ZW → female chick.</li>
        </ul>
        <p className="mt-2">
          So in birds it is the <strong>egg</strong> (the mother) that decides the sex of the chick &mdash;
          the exact opposite of the human XY system, where the sperm decides.
        </p>
      </Expandable>

      <h2 id="h-4-7">4.7 Mutation</h2>
      <Callout type="important" title="Mutation — definition">
        Mutation is a phenomenon which results in alteration of DNA sequences and consequently results in
        changes in the <Highlight color="yellow">genotype and the phenotype</Highlight> of an organism. In
        addition to recombination, mutation is another phenomenon that leads to variation in DNA.
      </Callout>
      <p>
        One DNA helix runs continuously from one end to the other in each chromatid, in a highly
        supercoiled form. Therefore <strong>loss (deletion)</strong> or{" "}
        <strong>gain (insertion/duplication)</strong> of a segment of DNA results in alteration in
        chromosomes. Since genes are located on chromosomes, alteration in chromosomes results in
        abnormalities or aberrations. Such <strong>chromosomal aberrations</strong> are commonly observed
        in cancer cells.
      </p>
      <p>
        Mutation also arises due to a change in a <strong>single base pair</strong> of DNA. This is known
        as <strong>point mutation</strong>. A classical example is sickle cell anemia. Deletions and
        insertions of base pairs of DNA cause <strong>frame-shift mutations</strong>.
      </p>
      <TableCard
        title="Levels at which mutation acts"
        headers={["Type", "What changes", "Example / note"]}
        rows={[
          { cells: ["Chromosomal aberration", "Loss (deletion) or gain (insertion/duplication) of a segment of DNA", "Commonly observed in cancer cells"] },
          { cells: ["Point mutation", "A single base pair of DNA", "Sickle cell anemia"] },
          { cells: ["Frame-shift mutation", "Deletion or insertion of base pairs that shifts the reading frame", "Detailed mechanism in Chapter 5"] },
        ]}
      />
      <p>
        The mechanism of mutation is beyond the scope of this discussion at this level. However, there
        are many chemical and physical factors that induce mutations; these are referred to as{" "}
        <strong>mutagens</strong>. <strong>UV radiations</strong> can cause mutations in organisms &mdash;
        UV radiation is a mutagen.
      </p>
      <MistakeCard
        mistake="Thinking every mutation is harmful and always visible."
        correction="Mutation is simply an alteration of DNA sequence. Many changes are silent or occur in non-coding regions, and only some alter the phenotype; chromosomal aberrations and point mutations in key genes are the ones that produce disorders."
        example="A single base change (GAG → GUG) in the beta globin gene changes Glu to Val and produces sickle-cell anaemia — one base, a whole disease."
      />

      <h2 id="h-4-8">4.8 Genetic Disorders</h2>
      <p>
        Broadly, genetic disorders may be grouped into two categories &mdash;{" "}
        <strong>Mendelian disorders</strong> and <strong>chromosomal disorders</strong>.
      </p>

      <h3 id="h-4-8-1">4.8.1 Pedigree Analysis</h3>
      <p>
        The idea that disorders are inherited has prevailed in human society since long, based on the
        heritability of certain characteristic features in families. After the rediscovery of
        Mendel&apos;s work the practice of analysing inheritance patterns of traits in human beings began.
        Control crosses, which can be performed in pea plants or other organisms, are not possible in
        human beings &mdash; so study of the family history about the inheritance of a particular trait
        provides an alternative.
      </p>
      <Callout type="important" title="Pedigree analysis — definition">
        Such an analysis of traits in several generations of a family is called the{" "}
        <Highlight color="yellow">pedigree analysis</Highlight>. In the pedigree analysis the inheritance
        of a particular trait is represented in the family tree over generations.
      </Callout>
      <p>
        In human genetics, pedigree study provides a strong tool, which is utilised to trace the
        inheritance of a specific trait, abnormality or disease.
      </p>
      <TableCard
        title="Standard symbols used in human pedigree analysis"
        headers={["Symbol", "Meaning"]}
        rows={[
          { cells: ["Square", "Male"] },
          { cells: ["Circle", "Female"] },
          { cells: ["Filled (shaded) symbol", "Affected individual — expresses the trait"] },
          { cells: ["Open symbol", "Unaffected individual"] },
          { cells: ["Horizontal line joining two symbols", "Mating"] },
          { cells: ["Double horizontal line", "Consanguineous (close-relative) mating"] },
          { cells: ["Vertical line below a mating", "Descent — parents to offspring"] },
          { cells: ["Horizontal line joining siblings", "Sibship — brothers and sisters of one sibship"] },
        ]}
      />
      <p>
        Each and every feature in any organism is controlled by one or the other gene located on the DNA
        present in the chromosome. DNA is the carrier of genetic information and is hence transmitted
        from one generation to the other without any change or alteration. However, changes or
        alterations do take place occasionally; such an alteration in the genetic material is referred to
        as mutation. A number of disorders in human beings have been found to be associated with the
        inheritance of changed or altered genes or chromosomes.
      </p>
      <Comparison
        columns={[
          {
            title: "Autosomal dominant trait",
            children: (
              <ul className="space-y-1">
                <li>Example in Figure 4.14a: myotonic dystrophy.</li>
                <li>The trait appears in every generation.</li>
                <li>An affected child has at least one affected parent.</li>
                <li>Males and females are affected alike.</li>
              </ul>
            ),
          },
          {
            title: "Autosomal recessive trait",
            children: (
              <ul className="space-y-1">
                <li>Example in Figure 4.14b: sickle-cell anaemia.</li>
                <li>The trait can skip generations.</li>
                <li>An affected child can be born to unaffected (carrier) parents.</li>
                <li>More likely when close relatives marry.</li>
              </ul>
            ),
          },
        ]}
      />

      <h3 id="h-4-8-2">4.8.2 Mendelian Disorders</h3>
      <p>
        Mendelian disorders are mainly determined by alteration or mutation in a <strong>single gene</strong>.
        These disorders are transmitted to the offspring on the same lines as the principles of
        inheritance, and their pattern of inheritance can be traced in a family by pedigree analysis. The
        most common and prevalent Mendelian disorders are haemophilia, cystic fibrosis, sickle-cell
        anaemia, colour blindness, phenylketonuria and thalassemia.
      </p>
      <Callout type="note" title="Dominant, recessive, or sex-linked?">
        Mendelian disorders may be <strong>dominant or recessive</strong>; by pedigree analysis one can
        easily understand whether the trait in question is dominant or recessive. The trait may also be
        linked to the sex chromosome, as in haemophilia &mdash; this X-linked recessive trait shows
        transmission from carrier female to male progeny.
      </Callout>
      <TableCard
        title="Mendelian disorders at a glance"
        headers={["Disorder", "Inheritance", "Defect", "Key feature"]}
        rows={[
          { cells: ["Colour blindness", "X-linked recessive", "Defect in red or green cone of the eye", "8% of males, 0.4% of females"] },
          { cells: ["Haemophilia", "X-linked recessive", "One protein of the blood clotting cascade is affected", "A simple cut causes non-stop bleeding"] },
          { cells: ["Sickle-cell anaemia", "Autosomal recessive", "Glu → Val at position 6 of the β globin chain", "RBC becomes sickle-shaped under low O₂"] },
          { cells: ["Phenylketonuria", "Autosomal recessive", "Enzyme converting phenylalanine to tyrosine is lacking", "Phenylalanine accumulates → mental retardation"] },
          { cells: ["Thalassemia", "Autosomal recessive", "Reduced synthesis of α or β globin chains", "Anaemia — a quantitative defect"] },
        ]}
      />
      <h4 className="text-[15px] font-semibold mt-6 mb-2">Colour blindness</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          A sex-linked recessive disorder due to a defect in either the red or the green cone of the eye,
          resulting in failure to discriminate between red and green colour.
        </li>
        <li>The defect is due to mutation in certain genes present in the X chromosome.</li>
        <li>
          It occurs in about <strong>8 per cent of males</strong> and only about{" "}
          <strong>0.4 per cent of females</strong>.
        </li>
        <li>
          This is because the genes that lead to red-green colour blindness are on the X chromosome;
          males have only one X chromosome and females have two.
        </li>
        <li>
          The son of a woman who carries the gene has a 50 per cent chance of being colour blind. The
          mother is not herself colour blind because the gene is recessive &mdash; its effect is
          suppressed by her matching dominant normal gene.
        </li>
        <li>
          A daughter will not normally be colour blind, unless her mother is a carrier <em>and</em> her
          father is colour blind.
        </li>
      </ul>
      <h4 className="text-[15px] font-semibold mt-6 mb-2">Haemophilia</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          A sex-linked recessive disease showing transmission from an unaffected carrier female to some
          of the male progeny.
        </li>
        <li>
          A single protein that is part of the cascade of proteins involved in the clotting of blood is
          affected.
        </li>
        <li>In an affected individual a simple cut results in non-stop bleeding.</li>
        <li>The heterozygous female (carrier) for haemophilia may transmit the disease to sons.</li>
        <li>
          The possibility of a female becoming haemophilic is extremely rare, because the mother of such
          a female has to be at least a carrier and the father should be haemophilic (unviable in the
          later stage of life).
        </li>
        <li>
          The family pedigree of <strong>Queen Victoria</strong> shows a number of haemophilic
          descendants, as she was a carrier of the disease.
        </li>
      </ul>
      <h4 className="text-[15px] font-semibold mt-6 mb-2">Sickle-cell anaemia</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          An autosome-linked recessive trait that can be transmitted from parents to offspring when both
          partners are carriers for the gene (heterozygous).
        </li>
        <li>
          Controlled by a single pair of alleles, <strong>Hb<sup>A</sup></strong> and{" "}
          <strong>Hb<sup>S</sup></strong>.
        </li>
        <li>
          Of the three possible genotypes, only homozygous individuals for Hb<sup>S</sup> (Hb
          <sup>S</sup>Hb<sup>S</sup>) show the <strong>diseased phenotype</strong>.
        </li>
        <li>
          Heterozygous (Hb<sup>A</sup>Hb<sup>S</sup>) individuals appear apparently unaffected but are
          carriers, as there is a 50 per cent probability of transmission of the mutant gene to the
          progeny &mdash; this is the <strong>sickle-cell trait</strong>.
        </li>
        <li>
          The defect is caused by substitution of <strong>glutamic acid (Glu) by valine (Val)</strong> at
          the sixth position of the beta globin chain of the haemoglobin molecule.
        </li>
        <li>
          This substitution results from a single base substitution at the sixth codon of the beta globin
          gene, from <strong>GAG to GUG</strong>.
        </li>
        <li>
          The mutant haemoglobin molecule undergoes polymerisation under low oxygen tension, causing the
          change in shape of the RBC from biconcave disc to elongated sickle-like structure.
        </li>
      </ul>
      <h4 className="text-[15px] font-semibold mt-6 mb-2">Phenylketonuria</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>An inborn error of metabolism, inherited as an autosomal recessive trait.</li>
        <li>
          The affected individual lacks an enzyme that converts the amino acid phenylalanine into
          tyrosine.
        </li>
        <li>
          As a result, phenylalanine accumulates and is converted into phenylpyruvic acid and other
          derivatives.
        </li>
        <li>Accumulation of these in the brain results in mental retardation.</li>
        <li>
          They are also excreted through urine because of poor absorption by the kidney.
        </li>
      </ul>
      <h4 className="text-[15px] font-semibold mt-6 mb-2">Thalassemia</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          An autosome-linked recessive blood disease, transmitted when both partners are unaffected
          carriers of the gene (heterozygous).
        </li>
        <li>
          The defect could be due to either mutation or deletion, which results in a reduced rate of
          synthesis of one of the globin chains (α and β) that make up haemoglobin.
        </li>
        <li>
          This causes the formation of abnormal haemoglobin molecules, resulting in anaemia which is
          characteristic of the disease.
        </li>
        <li>
          <strong>α Thalassemia:</strong> production of the α globin chain is affected. Controlled by two
          closely linked genes <strong>HBA1</strong> and <strong>HBA2</strong> on chromosome 16 of each
          parent; observed due to mutation or deletion of one or more of the four genes. The more genes
          affected, the less alpha globin produced.
        </li>
        <li>
          <strong>β Thalassemia:</strong> production of the β globin chain is affected. Controlled by a
          single gene <strong>HBB</strong> on chromosome 11 of each parent; occurs due to mutation of one
          or both the genes.
        </li>
      </ul>
      <Comparison
        columns={[
          {
            title: "Thalassemia",
            children: (
              <ul className="space-y-1">
                <li><strong>Quantitative</strong> problem.</li>
                <li>Too few globin molecules are synthesised.</li>
                <li>Anaemia from reduced chain production.</li>
                <li>α form: HBA1 + HBA2, chromosome 16; β form: HBB, chromosome 11.</li>
              </ul>
            ),
          },
          {
            title: "Sickle-cell anaemia",
            children: (
              <ul className="space-y-1">
                <li><strong>Qualitative</strong> problem.</li>
                <li>An incorrectly functioning globin is synthesised.</li>
                <li>RBC sickles under low oxygen tension.</li>
                <li>One base change: GAG → GUG, Glu → Val at position 6.</li>
              </ul>
            ),
          },
        ]}
      />
      <Expandable title="Worked example — will the child be a carrier, affected, or normal?" variant="example">
        <p>
          <strong>Problem:</strong> Both parents are carriers of sickle-cell anaemia (Hb<sup>A</sup>Hb
          <sup>S</sup>). Work out the possible genotypes and phenotypes of their children.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Each parent forms two kinds of gametes: Hb<sup>A</sup> and Hb<sup>S</sup>, in equal numbers.</li>
          <li>
            Punnett square: Hb<sup>A</sup>Hb<sup>A</sup> (1/4), Hb<sup>A</sup>Hb<sup>S</sup> (2/4), Hb
            <sup>S</sup>Hb<sup>S</sup> (1/4).
          </li>
          <li>
            <strong>Hb<sup>A</sup>Hb<sup>A</sup> (25%):</strong> normal, not a carrier.
          </li>
          <li>
            <strong>Hb<sup>A</sup>Hb<sup>S</sup> (50%):</strong> unaffected carrier — sickle-cell trait.
          </li>
          <li>
            <strong>Hb<sup>S</sup>Hb<sup>S</sup> (25%):</strong> diseased — sickle-cell anaemia.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Answer:</strong> 1 normal : 2 carriers : 1 affected, i.e. a 25 per cent chance of a
          diseased child in every pregnancy.
        </p>
      </Expandable>
      <Expandable title="Worked example — colour blindness in the sons of a carrier" variant="example">
        <p>
          <strong>Problem:</strong> A woman who carries the colour blindness gene (X<sup>C</sup>X) marries
          a man with normal vision (XY). What is the chance that a son is colour blind?
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>The mother forms two kinds of eggs: X<sup>C</sup> and X.</li>
          <li>The father forms X-bearing and Y-bearing sperms.</li>
          <li>
            Daughters: X<sup>C</sup>X (carrier) or XX (normal) &mdash; none colour blind, since the
            normal X from the father suppresses the recessive gene.
          </li>
          <li>
            Sons: X<sup>C</sup>Y (colour blind) or XY (normal) &mdash; in equal numbers.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Answer:</strong> 50 per cent of the sons are colour blind. Note that the <em>overall</em>{" "}
          probability for any child is 25 per cent, because only half the children are sons.
        </p>
      </Expandable>

      <h3 id="h-4-8-3">4.8.3 Chromosomal Disorders</h3>
      <p>
        Chromosomal disorders are caused due to <strong>absence or excess or abnormal arrangement</strong>{" "}
        of one or more chromosomes. Failure of segregation of chromatids during the cell division cycle
        results in the gain or loss of a chromosome, called <strong>aneuploidy</strong> &mdash; for
        example, Down&apos;s syndrome results from the gain of an extra copy of chromosome 21, and
        Turner&apos;s syndrome results from the loss of an X chromosome in human females. Failure of
        cytokinesis after the telophase stage of cell division results in an increase in a whole set of
        chromosomes, and this phenomenon is known as <strong>polyploidy</strong> &mdash; often seen in
        plants.
      </p>
      <FactCard
        title="The normal human karyotype"
        definition="The total number of chromosomes in a normal human cell is 46 (23 pairs): 22 pairs of autosomes and one pair of sex chromosomes. Rarely, an individual may carry an additional copy of a chromosome (trisomy) or lack one of a pair (monosomy) — both lead to very serious consequences."
        icon="🧫"
      />
      <TableCard
        title="Common chromosomal disorders"
        headers={["Disorder", "Karyotype", "Cause", "Features"]}
        rows={[
          {
            cells: [
              "Down's syndrome",
              "47, trisomy 21",
              "Additional copy of chromosome 21; first described by Langdon Down (1866)",
              "Short stature, small round head, furrowed tongue, partially open mouth, broad palm with characteristic palm crease, retarded physical, psychomotor and mental development",
            ],
          },
          {
            cells: [
              "Klinefelter's syndrome",
              "47, XXY",
              "An additional copy of the X chromosome",
              "Overall masculine development with feminine development (gynaecomastia); sterile",
            ],
          },
          {
            cells: [
              "Turner's syndrome",
              "45, X0",
              "Absence of one X chromosome",
              "Sterile; ovaries rudimentary; lack of other secondary sexual characters",
            ],
          },
        ]}
        caption="Down's syndrome is an aneuploidy of an autosome; Klinefelter's and Turner's syndromes are aneuploidies of the sex chromosomes. All three are easily studied by analysis of karyotypes."
      />
      <Callout type="note" title="Reading a karyotype">
        A karyotype is the arranged profile of all the chromosomes of a cell, ordered by size and shape
        and photographed at metaphase. Count the chromosome 21 group for Down&apos;s syndrome, and count
        the X chromosomes for Klinefelter&apos;s (two X plus one Y) and Turner&apos;s (a single X).
      </Callout>

      <h2 id="h-4-exercises">Exercises</h2>
      <Expandable title="Exercises — all 16 questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "Mention the advantages of selecting pea plant for experiment by Mendel.",
            <div key="q2">
              <p>Differentiate between the following &mdash;</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Dominance and Recessive</li>
                <li>(b) Homozygous and Heterozygous</li>
                <li>(c) Monohybrid and Dihybrid.</li>
              </ul>
            </div>,
            "A diploid organism is heterozygous for 4 loci, how many types of gametes can be produced?",
            "Explain the Law of Dominance using a monohybrid cross.",
            "Define and design a test-cross.",
            "Using a Punnett Square, workout the distribution of phenotypic features in the first filial generation after a cross between a homozygous female and a heterozygous male for a single locus.",
            <div key="q7">
              <p>
                When a cross is made between tall plant with yellow seeds (TtYy) and tall plant with
                green seed (Ttyy), what proportions of phenotype in the offspring could be expected to be
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) tall and green.</li>
                <li>(b) dwarf and green.</li>
              </ul>
            </div>,
            "Two heterozygous parents are crossed. If the two loci are linked what would be the distribution of phenotypic features in F1 generation for a dihybrid cross?",
            "Briefly mention the contribution of T.H. Morgan in genetics.",
            "What is pedigree analysis? Suggest how such an analysis, can be useful.",
            "How is sex determined in human beings?",
            "A child has blood group O. If the father has blood group A and mother blood group B, work out the genotypes of the parents and the possible genotypes of the other offsprings.",
            <div key="q13">
              <p>Explain the following terms with example</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Co-dominance</li>
                <li>(b) Incomplete dominance</li>
              </ul>
            </div>,
            "What is point mutation? Give one example.",
            "Who had proposed the chromosomal theory of the inheritance?",
            "Mention any two autosomal genetic disorders with their symptoms.",
          ]}
          answers={[
            <ul key="a1" className="space-y-1">
              <li>Pea plants are self-pollinating, so true-breeding lines with stable traits can be maintained easily.</li>
              <li>They can also be cross-pollinated artificially, so controlled crosses are possible.</li>
              <li>They have a short life cycle, so many generations can be raised in a few years — Mendel worked for seven years (1856&ndash;1863).</li>
              <li>They show a number of clearly contrasting pairs of traits (tall/dwarf, yellow/green seeds), which can be scored without ambiguity.</li>
              <li>Large numbers of offspring are produced from each cross, giving a large sampling size for statistical analysis.</li>
            </ul>,
            <ul key="a2" className="space-y-1.5">
              <li>
                <strong>(a) Dominance vs recessive:</strong> a dominant allele expresses itself in the
                heterozygous condition (T in Tt gives tall); a recessive allele expresses only in the
                homozygous condition (t gives dwarf only as tt).
              </li>
              <li>
                <strong>(b) Homozygous vs heterozygous:</strong> homozygous = both alleles identical (TT
                or tt), breeds true; heterozygous = the two alleles are different (Tt), produces two
                kinds of gametes and does not breed true.
              </li>
              <li>
                <strong>(c) Monohybrid vs dihybrid:</strong> a monohybrid cross follows one pair of
                contrasting characters (TT × tt), giving an F₂ ratio of 3 : 1; a dihybrid cross follows
                two pairs (RRYY × rryy), giving 9 : 3 : 3 : 1.
              </li>
            </ul>,
            <>
              A heterozygous diploid at 4 loci produces 2<sup>4</sup> = 16 types of gametes, since each
              heterozygous locus contributes two equally likely alternatives.
            </>,
            <div key="a4">
              <p>
                Cross a true-breeding tall (TT) with a true-breeding dwarf (tt). All the F₁ plants are
                Tt and, because T dominates t, all are tall &mdash; the dwarf trait is not seen.
              </p>
              <p className="mt-1.5">
                On selfing the F₁, the gametes T and t unite at random to give 1 TT : 2 Tt : 1 tt, so 3/4
                of the F₂ are tall and 1/4 dwarf. This 3 : 1 ratio in the F₂, with both parental traits
                recovered unchanged and no blending, is what the Law of Dominance explains: in a
                dissimilar pair of factors one member dominates the other.
              </p>
            </div>,
            <div key="a5">
              <p>
                <strong>Definition:</strong> a test cross is a cross of an organism showing a dominant
                phenotype (whose genotype is to be determined) with the recessive parent, instead of
                self-crossing.
              </p>
              <p className="mt-1.5">
                <strong>Design:</strong> cross a tall pea plant of unknown genotype with a dwarf plant
                (tt). If all the progeny are tall, the tested plant was TT; if tall and dwarf appear in
                equal numbers (1 : 1), it was Tt.
              </p>
            </div>,
            <div key="a6">
              <p>
                <strong>Homozygous female (TT) × heterozygous male (Tt):</strong> the female gives only T
                eggs; the male gives T and t sperms in equal numbers.
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>Punnett square: T × T → TT; T × t → Tt.</li>
                <li>Genotypes: 1 TT : 1 Tt.</li>
                <li>Phenotypes: all tall &mdash; 100 per cent tall, no dwarf.</li>
              </ul>
              <p className="mt-1.5">
                <strong>If instead the female is homozygous recessive (tt) × heterozygous male (Tt):</strong>{" "}
                the progeny are 1 Tt : 1 tt, i.e. 50 per cent tall and 50 per cent dwarf.
              </p>
            </div>,
            <div key="a7">
              <p>
                <strong>Cross:</strong> TtYy × Ttyy. Treat the two loci separately, then multiply.
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>Height: Tt × Tt → 3/4 tall : 1/4 dwarf.</li>
                <li>Seed colour: Yy × yy → 1/2 yellow : 1/2 green.</li>
                <li>
                  <strong>(a) Tall and green</strong> = 3/4 × 1/2 = <strong>3/8</strong>.
                </li>
                <li>
                  <strong>(b) Dwarf and green</strong> = 1/4 × 1/2 = <strong>1/8</strong>.
                </li>
              </ul>
              <p className="mt-1.5">
                The full set of phenotypes is 3/8 tall yellow : 3/8 tall green : 1/8 dwarf yellow : 1/8
                dwarf green.
              </p>
            </div>,
            <div key="a8">
              <p>
                If the two loci are linked, the two genes tend to stay together on the same chromosome,
                so the parental combinations of alleles are far more frequent than the new combinations.
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>The F₁ heterozygote forms mostly the two parental types of gametes.</li>
                <li>Recombinant gametes are produced only by crossing over, so they are few.</li>
                <li>
                  The F₁ phenotypic ratio therefore deviates from 9 : 3 : 3 : 1 &mdash; the parental
                  phenotypes predominate and the recombinant phenotypes are in a small minority.
                </li>
                <li>Complete linkage (no crossing over) gives only the parental phenotypes.</li>
              </ul>
            </div>,
            <div key="a9">
              <ul className="space-y-1">
                <li>He experimentally verified the chromosomal theory of inheritance using <em>Drosophila melanogaster</em>.</li>
                <li>He showed that genes are located on chromosomes, and identified sex-linked genes on the X chromosome.</li>
                <li>He coined the terms linkage (physical association of genes on a chromosome) and recombination (generation of non-parental combinations).</li>
                <li>He showed that tightly linked genes recombine rarely (white and yellow, 1.3%) while loosely linked genes recombine often (white and miniature wing, 37.2%).</li>
                <li>His work, extended by Sturtevant, led to genetic maps based on recombination frequency.</li>
              </ul>
            </div>,
            <div key="a10">
              <p>
                Pedigree analysis is the study of the inheritance of a particular trait in several
                generations of a family, represented as a family tree using standard symbols.
              </p>
              <p className="mt-1.5">It is useful because:</p>
              <ul className="mt-1 space-y-1">
                <li>Controlled crosses cannot be made in human beings, so family history is the alternative.</li>
                <li>It shows whether a trait is dominant or recessive.</li>
                <li>It shows whether the gene is autosomal or sex-linked.</li>
                <li>It traces the transmission of a specific abnormality or disease and helps predict risk in later generations.</li>
              </ul>
            </div>,
            <div key="a11">
              <ul className="space-y-1">
                <li>Humans have 23 pairs of chromosomes: 22 pairs of autosomes and one pair of sex chromosomes.</li>
                <li>A female has XX; a male has XY.</li>
                <li>Females produce only X-bearing ova; males produce 50 per cent X-bearing and 50 per cent Y-bearing sperms.</li>
                <li>An ovum fertilised by an X-bearing sperm gives XX (female); by a Y-bearing sperm, XY (male).</li>
                <li>Each pregnancy therefore has a 50 per cent probability of either sex, and it is the sperm that decides the sex of the child.</li>
              </ul>
            </div>,
            <div key="a12">
              <p>
                A child of blood group O must be <strong>ii</strong>, receiving an i allele from each
                parent. So the father with blood group A must be <strong>I<sup>A</sup>i</strong> and the
                mother with blood group B must be <strong>I<sup>B</sup>i</strong> &mdash; both
                heterozygous.
              </p>
              <p className="mt-1.5">Their children can be:</p>
              <ul className="mt-1 space-y-1">
                <li>I<sup>A</sup>i → blood group A (1/4)</li>
                <li>I<sup>B</sup>i → blood group B (1/4)</li>
                <li>I<sup>A</sup>I<sup>B</sup> → blood group AB (1/4)</li>
                <li>ii → blood group O (1/4)</li>
              </ul>
            </div>,
            <div key="a13">
              <ul className="space-y-1.5">
                <li>
                  <strong>(a) Co-dominance:</strong> the F₁ resembles both parents at once because both
                  alleles express their own product. Example: ABO blood groups — I<sup>A</sup>I<sup>B</sup>{" "}
                  individuals have both A and B sugars on their red blood cells (blood group AB).
                </li>
                <li>
                  <strong>(b) Incomplete dominance:</strong> the F₁ has a phenotype in between the two
                  parents. Example: snapdragon flower colour — RR red × rr white gives Rr pink, and the F₂
                  is 1 red : 2 pink : 1 white.
                </li>
              </ul>
            </div>,
            "A point mutation is a change in a single base pair of DNA. Example: sickle-cell anaemia, where the sixth codon of the beta globin gene changes from GAG to GUG, replacing glutamic acid with valine.",
            "The chromosomal theory of inheritance was proposed by Walter Sutton and Theodore Boveri, who noted that the behaviour of chromosomes parallels the behaviour of genes.",
            <ul key="a16" className="space-y-1.5">
              <li>
                <strong>Sickle-cell anaemia (autosomal recessive):</strong> Glu is replaced by Val at
                position 6 of the β globin chain; under low oxygen tension the mutant haemoglobin
                polymerises and the RBC becomes sickle-shaped, causing anaemia.
              </li>
              <li>
                <strong>Phenylketonuria (autosomal recessive):</strong> the enzyme converting
                phenylalanine into tyrosine is lacking, so phenylalanine accumulates as phenylpyruvic acid
                and other derivatives, causing mental retardation; these are excreted in urine.
              </li>
              <li>
                <strong>Thalassemia (autosomal recessive):</strong> reduced synthesis of α or β globin
                chains produces abnormal haemoglobin and anaemia.
              </li>
            </ul>,
          ]}
        />
      </Expandable>
    </>
  );
}
