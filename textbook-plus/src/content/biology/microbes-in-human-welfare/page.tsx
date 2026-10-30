import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { TreeDiagram } from "@/components/content/concept/TreeDiagram";
import { MistakeCard } from "@/components/content/study/MistakeCard";

export default function MicrobesInHumanWelfareChapter() {
  return (
    <>
      <p>
        Besides macroscopic plants and animals, <strong>microbes are the major components of biological
        systems</strong> on this earth.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Everywhere</strong> — in water, air, soil, and inside the bodies of animals and plants.
        </li>
        <li>
          <strong>Even where nothing else survives</strong> — the extreme addresses below.
        </li>
      </ul>
      <Callout type="note" title="Extreme addresses">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Deep inside the geysers (thermal vents), at temperatures up to <strong>100 °C</strong>.</li>
          <li>Deep in the soil.</li>
          <li>Under layers of snow several metres thick.</li>
          <li>In highly acidic environments.</li>
        </ul>
      </Callout>

      <h3 id="h-8-diversity">How diverse are they?</h3>
      <div className="my-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[
          { title: "Bacteria" },
          { title: "Fungi" },
          { title: "Protozoa" },
          { title: "Viruses" },
          { title: "Viroids" },
          { title: "Prions", note: "proteinaceous infectious agents" },
        ].map(({ title, note }) => (
          <div key={title} className="rounded-lg border border-border bg-card px-4 py-3">
            <span className="t-micro block text-foreground">{title}</span>
            {note && <p className="mt-1 text-sm leading-relaxed text-foreground/80">{note}</p>}
          </div>
        ))}
      </div>
      <p>
        Bacteria and many fungi grow on <strong>nutritive media</strong> as colonies visible to the naked eye —
        which is what makes them studyable in the lab.
      </p>
      <TableCard
        title="The microscopic world the chapter opens with"
        headers={["Figure", "What it shows"]}
        rows={[
          {
            cells: [
              "8.1 — Bacteria",
              "Rod-shaped and spherical bacteria (1500×); a rod-shaped bacterium with flagella (50,000×).",
            ],
          },
          {
            cells: [
              "8.2 — Viruses",
              "A bacteriophage with collar, tail and plate; an adenovirus causing respiratory infections; a rod-shaped TMV (1,00,000–1,50,000×).",
            ],
          },
          {
            cells: [
              "8.3 — Colonies",
              "Bacterial and fungal colonies in petri dishes — the colonies that become visible on nutritive media.",
            ],
          },
        ]}
      />

      <h2 id="h-8-1">8.1 Microbes in Household Products</h2>

      <h3 id="h-8-1-curd">Curd from milk</h3>
      <Callout type="important" title="Lactic acid bacteria (LAB)">
        Micro-organisms such as <em>Lactobacillus</em> and others commonly called lactic acid bacteria (LAB)
        grow in milk and convert it to curd. During growth, the LAB produce acids that coagulate and partially
        digest the milk proteins.
      </Callout>
      <ProcessCard
        title="Milk to curd, step by step"
        steps={[
          {
            label: "A starter goes in",
            description:
              "A small amount of curd is added to the fresh milk as inoculum or starter — it contains millions of LAB.",
          },
          {
            label: "The LAB multiply",
            description: "At suitable temperatures the bacteria in the starter multiply in the milk.",
          },
          {
            label: "Acids act on the proteins",
            description:
              "During growth the LAB produce acids, which coagulate and partially digest the milk proteins.",
          },
          {
            label: "Curd, with better nutrition",
            description:
              "Milk is converted to curd, which also improves its nutritional quality by increasing vitamin B₁₂.",
          },
        ]}
      />
      <p>Curd is not just soured milk — it is a better food than the milk it came from.</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>More vitamin B₁₂</strong> — the nutritional quality of the milk improves.
        </li>
        <li>
          <strong>Fewer pathogens</strong> — in our stomach the same LAB check disease-causing microbes.
        </li>
      </ul>
      <h3 id="h-8-1-fermented">Other fermented foods</h3>
      <p>
        Several everyday foods are made by letting microbes ferment the raw material.
      </p>
      <TableCard
        title="Four fermented foods and their microbes"
        headers={["Food", "Microbe", "What happens"]}
        rows={[
          { cells: ["Idli, dosa", "Bacteria", "Ferment the dough; CO₂ puffs it up."] },
          {
            cells: [
              "Bread",
              <em key="yeast">Saccharomyces cerevisiae</em>,
              "Baker’s yeast ferments the dough; CO₂ raises it.",
            ],
          },
          {
            cells: [
              "Toddy",
              "Microbes in the palm sap",
              "Sap from palms ferments into a traditional drink.",
            ],
          },
          {
            cells: ["Fish, soyabean, bamboo-shoots", "Microbes", "Fermented to make foods."],
          },
        ]}
        caption="Idli and bread rise by the same gas — CO₂ from fermentation."
      />
      <Expandable title="In-text question — which metabolic pathway produces the CO₂?">
        <p>
          The bacteria break down the sugars of the dough <strong>anaerobically</strong> — fermentation.
        </p>
        <p>
          The sugar is not fully oxidised, so CO₂ escapes as a gas. The same breakdown raises bread and produces
          ethanol in fermented drinks.
        </p>
      </Expandable>
      <Expandable title="In-text question — where do the bacteria for these fermentations come from?">
        <p>
          They are not added as a pure laboratory culture. The bacteria are already present in the ingredients
          and in the surroundings, and the dough is simply left at a suitable temperature so that these
          naturally occurring microbes multiply and ferment it.
        </p>
      </Expandable>
      <h3 id="h-8-1-cheese">Cheese</h3>
      <p>
        Cheese is one of the oldest food items in which microbes were used. Its variety is decided by the
        microbe.
      </p>
      <TableCard
        title="Cheese: the microbe decides the variety"
        headers={["Cheese", "Microbe", "What the microbe does"]}
        rows={[
          {
            cells: [
              "Swiss cheese",
              <em key="swiss">Propionibacterium sharmanii</em>,
              "Produces a large amount of CO₂ — that is what makes the large holes.",
            ],
          },
          {
            cells: [
              "Roquefort cheese",
              "A specific fungus grown on the cheese",
              "Ripens the cheese and gives it a particular flavour.",
            ],
          },
        ]}
        caption="Different varieties are known by their texture, flavour and taste — and that specificity comes from the microbe used."
      />

      <h2 id="h-8-2">8.2 Microbes in Industrial Products</h2>
      <FactCard
        title="Fermentor"
        definition="Production on an industrial scale requires growing microbes in very large vessels called fermenters."
        icon="🏭"
      />
      <h3 id="h-8-2-beverages">8.2.1 Fermented Beverages</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Microorganism:</strong> Yeast — <em>Saccharomyces cerevisiae</em> (Brewer's yeast)
        </li>
        <li>
          <strong>Raw material:</strong> Malted cereals and fruit juices used to produce ethanol via fermentation.
        </li>
        <li>
          Depending on the raw material used for fermentation and the type of processing, different types of
          alcoholic drinks are obtained.
        </li>
      </ul>
      <Expandable title="In-text question — which metabolic reactions give ethanol in yeast?">
        <p>
          Yeast ferments the sugars of the malted cereal or the fruit juice <strong>anaerobically</strong>.
        </p>
        <p>
          A sugar such as glucose becomes <strong>ethanol and carbon dioxide</strong>. That is the same reaction
          that raises bread dough — only what is fermented and what is collected differ.
        </p>
      </Expandable>
      <Comparison
        columns={[
          {
            title: "Produced without distillation",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Wine</strong>
                </li>
                <li>
                  <strong>Beer</strong>
                </li>
                <li>The fermented broth itself is the drink.</li>
              </ul>
            ),
          },
          {
            title: "Produced by distillation",
            children: (
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>Whisky</strong>
                </li>
                <li>
                  <strong>Brandy</strong>
                </li>
                <li>
                  <strong>Rum</strong>
                </li>
                <li>These are produced by distillation of the fermented broth.</li>
              </ul>
            ),
          },
        ]}
      />
      <h3 id="h-8-2-antibiotics">8.2.2 Antibiotics</h3>
      <Callout type="important" title="Antibiotics">
        Antibiotics are <strong>chemical substances, which are produced by some microbes and can kill or retard
        the growth of other (disease-causing) microbes</strong>.
      </Callout>
      <Callout type="note" title="The word itself">
        <em>Anti</em> is a Greek word that means “against”, and <em>bio</em> means “life”; together they mean
        “against life” — in the context of disease-causing organisms. With reference to human beings they are{" "}
        <Highlight color="yellow">“pro life” and not against</Highlight>.
      </Callout>
      <p>Penicillin was the <strong>first antibiotic discovered</strong> — a <strong>chance discovery</strong>.</p>
      <ProcessCard
        title="The chance discovery of penicillin"
        steps={[
          {
            label: "An unwashed culture plate",
            description: "Alexander Fleming was working on Staphylococci bacteria.",
          },
          {
            label: "A mould appears",
            description: "He once observed a mould growing in one of his unwashed culture plates.",
          },
          {
            label: "A clear ring around it",
            description: "Staphylococci could not grow around the mould.",
          },
          {
            label: "The cause identified",
            description: "He found out that it was due to a chemical produced by the mould.",
          },
          {
            label: "Named Penicillin",
            description: "He named the chemical after the mould — Penicillium notatum.",
          },
          {
            label: "Full potential established",
            description:
              "Much later, Ernest Chain and Howard Florey established its full potential as an effective antibiotic.",
          },
          {
            label: "World War II",
            description: "This antibiotic was extensively used to treat American soldiers wounded in World War II.",
          },
          {
            label: "Nobel Prize, 1945",
            description: "Fleming, Chain and Florey were awarded the Nobel Prize in 1945 for this discovery.",
          },
        ]}
      />
      <p>After penicillin, other antibiotics were also purified from other microbes.</p>
      <Expandable title="In-text question — name some other antibiotics and their sources">
        <p>Penicillin was only the first.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Streptomycin</strong> — from <em>Streptomyces griseus</em>.
          </li>
          <li>
            <strong>Erythromycin</strong> — from <em>Streptomyces erythraeus</em>.
          </li>
          <li>
            <strong>Tetracyclines</strong> — from other <em>Streptomyces</em> species.
          </li>
        </ul>
        <p>
          NCERT asks you to find these out for yourself — keep adding to the list from your library.
        </p>
      </Expandable>
      <p>Antibiotics have greatly improved our capacity to treat deadly diseases such as:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Plague.</li>
        <li>
          Whooping cough (<em>kali khansi</em>).
        </li>
        <li>
          Diphtheria (<em>gal ghotu</em>).
        </li>
        <li>
          Leprosy (<em>kusht rog</em>).
        </li>
      </ul>

      <h3 id="h-8-2-chemicals">8.2.3 Chemicals, Enzymes and other Bioactive Molecules</h3>
      <TableCard
        title="Organic acids and the microbes that make them"
        headers={["Acid", "Microbe", "Kind of microbe"]}
        rows={[
          {
            cells: [
              "Citric acid",
              <em key="an">Aspergillus niger</em>,
              "A fungus",
            ],
          },
          {
            cells: [
              "Acetic acid",
              <em key="aa">Acetobacter aceti</em>,
              "A bacterium",
            ],
          },
          {
            cells: [
              "Butyric acid",
              <em key="cb">Clostridium butylicum</em>,
              "A bacterium",
            ],
          },
          {
            cells: [
              "Lactic acid",
              <em key="lb">Lactobacillus</em>,
              "A bacterium",
            ],
          },
        ]}
      />
      <TableCard
        title="Enzymes and other bioactive molecules from microbes"
        headers={["Molecule", "Microbe", "Where it is used"]}
        rows={[
          {
            cells: [
              "Lipases",
              "Microbes grown for the enzyme",
              "Detergents — removes oily stains from laundry.",
            ],
          },
          {
            cells: [
              "Pectinases and proteases",
              "Microbes grown for the enzymes",
              "Clarifies bottled juices — why bottled juice is clearer than home-made juice.",
            ],
          },
          {
            cells: [
              "Streptokinase",
              <span key="sk">
                <em>Streptococcus</em> (genetically modified)
              </span>,
              "Clot-buster — removes blood-vessel clots after a heart attack.",
            ],
          },
          {
            cells: [
              "Cyclosporin A",
              <span key="cy">
                <em>Trichoderma polysporum</em> (a fungus)
              </span>,
              "Immunosuppressive — for organ-transplant patients.",
            ],
          },
          {
            cells: [
              "Statins",
              <span key="st">
                <em>Monascus purpureus</em> (a yeast)
              </span>,
              "Blood-cholesterol-lowering — inhibits the cholesterol-synthesis enzyme.",
            ],
          },
        ]}
      />


      <h2 id="h-8-3">8.3 Microbes in Sewage Treatment</h2>
      <FactCard
        title="Sewage"
        definition="This municipal waste-water is also called sewage. It contains large amounts of organic matter and microbes, many of which are pathogenic."
        icon="🚰"
      />
      <p>
        This huge quantity of sewage cannot be discharged into natural water bodies like rivers and streams
        directly. Before disposal, therefore, sewage is treated in <strong>sewage treatment plants (STPs)</strong>{" "}
        to make it less polluting.
      </p>
      <Callout type="important" title="Who does the work">
        Treatment of waste water is done by the <strong>heterotrophic microbes naturally present in the
        sewage</strong>. This treatment is carried out in <strong>two stages</strong>.
      </Callout>

      <Comparison
        columns={[
          {
            title: "Primary treatment — physical removal",
            children: (
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>Filtration removes the floating debris.</li>
                <li>
                  Sedimentation settles the grit (soil and small pebbles) and forms the{" "}
                  <strong>primary sludge</strong>; the supernatant is the primary effluent.
                </li>
                <li>The effluent still carries most of the organic matter — a high BOD — and moves on to secondary treatment.</li>
              </ol>
            ),
          },
          {
            title: "Secondary treatment — biological treatment",
            children: (
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>
                  <strong>Aeration tank</strong> — primary effluent plus pumped air; aerobic flocs
                  of bacteria and fungal filaments consume the bulk of the organic matter, dropping the BOD.
                </li>
                <li>
                  <strong>Settling tank (clarifier)</strong> — the flocs sediment as activated sludge;
                  a small part is recycled as inoculum.
                </li>
                <li>
                  <strong>Anaerobic digester</strong> — anaerobic bacteria digest the remaining sludge,
                  producing biogas (methane, hydrogen sulphide, carbon dioxide).
                </li>
                <li>
                  <strong>Final discharge</strong> — the treated effluent is released into rivers and streams.
                </li>
              </ol>
            ),
          },
        ]}
      />

      <Callout type="important" title="BOD — biochemical oxygen demand">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>BOD reduction:</strong> microbes consume the organic matter, significantly reducing
            the BOD.
          </li>
          <li>
            <strong>BOD definition:</strong> the amount of oxygen consumed if all the organic matter in
            one litre of water were oxidised by bacteria.
          </li>
          <li>Indirect measure of organic matter; greater BOD means greater polluting potential.</li>
        </ul>
      </Callout>
      <Callout type="note" title="Ganga and Yamuna Action Plans">
        The <strong>Ministry of Environment and Forests</strong> initiated the Ganga Action Plan and the
        Yamuna Action Plan — building STPs so only treated sewage reaches these rivers.
      </Callout>

      <h2 id="h-8-4">8.4 Microbes in Production of Biogas</h2>
      <Callout type="important" title="Biogas">
        Biogas is a <strong>mixture of gases (containing predominantly methane) produced by microbial
        activity</strong> and which may be used as fuel.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Gas production:</strong> anaerobic bacteria growing on cellulosic material produce large amounts of
          methane (CH₄) along with CO₂ and H₂ — <em>Methanobacterium</em> turns cellulose into CH₄ + CO₂ + H₂S.
        </li>
        <li>
          <strong>Methanogens:</strong> bacteria producing this gas mixture are collectively called methanogens; a
          common example is <em>Methanobacterium</em>.
        </li>
        <li>
          <strong>Occurrence & role:</strong> anaerobic sludge in sewerage plants; the rumen of cattle, where they
          break down cellulose for the animal's nutrition; and flooded rice fields.
        </li>
        <li>
          <strong>Gobar gas:</strong> cattle dung (<strong>gobar</strong>) is rich in these bacteria, making dung an
          ideal feedstock for biogas; the gas produced is used for <strong>cooking and lighting</strong>.
        </li>
      </ul>
      <Expandable title="In-text question — can human beings digest the cellulose in our foods?">
        <p>
          No. Cellulose is broken down by the methanogens that live in the rumen of cattle, not by anything in
          the human gut, so the cellulosic part of our food passes through undigested.
        </p>
      </Expandable>
      <TableCard
        title="A biogas plant — what each part does"
        headers={["Part", "What it does"]}
        rows={[
          {
            cells: [
              "Concrete tank (10–15 feet deep)",
              "Bio-wastes are collected in it and a slurry of dung is fed.",
            ],
          },
          {
            cells: [
              "Floating cover",
              "Placed over the slurry; it keeps rising as the gas is produced in the tank due to microbial activity.",
            ],
          },
          {
            cells: [
              "Gas outlet",
              "Connected to a pipe that supplies biogas to nearby houses.",
            ],
          },
          {
            cells: [
              "Slurry outlet",
              "The spent slurry is removed through it and may be used as fertiliser.",
            ],
          },
        ]}
        caption="These four parts are exactly what the printed picture shows — Fig. 8.8, a typical biogas plant."
      />
      <p>
        <strong>Rural suitability:</strong> plants are mostly built in rural areas because cattle dung is abundant
        there.
      </p>
      <p>Biogas technology was developed in India mainly through the efforts of:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>IARI</strong> — Indian Agricultural Research Institute.
        </li>
        <li>
          <strong>KVIC</strong> — Khadi and Village Industries Commission.
        </li>
      </ul>

      <h2 id="h-8-5">8.5 Microbes as Biocontrol Agents</h2>
      <Callout type="important" title="Biocontrol">
        Biocontrol refers to the <strong>use of biological methods for controlling plant diseases and
        pests</strong>.
      </Callout>
      <p>Modern farming has answered pests and diseases with chemicals — and paid for it.</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Insecticides and pesticides</strong> are the usual weapon against pests and diseases.
        </li>
        <li>
          <strong>Toxic beyond the pest</strong> — they harm human beings and animals alike.
        </li>
        <li>
          <strong>They travel</strong> — into soil and ground water, and into fruits, vegetables and crop plants.
        </li>
        <li>
          <strong>Weedicides</strong> add to the same load of soil pollution.
        </li>
      </ul>

      <h3 id="h-8-5-organic">Biological control of pests and diseases</h3>
      <p>
        In agriculture there is a method of controlling pests that relies on <strong>natural
        predation</strong> rather than introduced chemicals.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>A key belief of the organic farmer is that biodiversity furthers health.</li>
        <li>The more variety a landscape has, the more sustainable it is.</li>
        <li>
          The organic farmer works to create a system where the insects sometimes called pests are{" "}
          <strong>not eradicated</strong>, but kept at manageable levels by a complex system of checks and
          balances within a living and vibrant ecosystem.
        </li>
        <li>
          Conventional farming often uses chemical methods that kill both useful and harmful life forms
          indiscriminately.
        </li>
        <li>
          Biocontrol is a holistic approach: it seeks to understand the webs of interaction between the many
          organisms that make up the field fauna and flora.
        </li>
        <li>
          Eradication of pests is not only possible but also <em>undesirable</em> — without them, the
          beneficial predatory and parasitic insects that depend on them as food or hosts could not survive.
        </li>
        <li>
          Biocontrol measures therefore greatly reduce our dependence on toxic chemicals and pesticides.
        </li>
        <li>
          An important part of biological farming is to know the life forms of the field — predators as well as
          pests — along with their life cycles, feeding patterns and preferred habitats.
        </li>
      </ul>
      <TableCard
        title="Predators that work for the farmer"
        headers={["Predator", "Pest it gets rid of"]}
        rows={[
          {
            cells: [
              "Ladybird — the familiar beetle with red and black markings",
              "Aphids",
            ],
          },
          {
            cells: ["Dragonflies", "Mosquitoes"],
          },
        ]}
      />

      <h3 id="h-8-5-microbial">Microbial biocontrol agents</h3>
      <TableCard
        title="The four microbial agents of this section"
        headers={["Agent", "Target", "How it works"]}
        rows={[
          {
            cells: [
              <span key="bt">
                <em>Bacillus thuringiensis</em> (Bt)
              </span>,
              "Butterfly caterpillars",
              "Dried spores sprayed on the crop; the larva eats them and the toxin kills it.",
            ],
          },
          {
            cells: [
              "Bt-cotton",
              "Insect pests of cotton",
              "The same toxin gene is engineered into the plant, so the plant resists the pest.",
            ],
          },
          {
            cells: [
              <span key="tri">
                <em>Trichoderma</em>
              </span>,
              "Several plant pathogens",
              "Free-living fungi common in root ecosystems; an effective biocontrol of plant disease.",
            ],
          },
          {
            cells: [
              "Baculoviruses, mostly genus Nucleopolyhedrovirus",
              "Insects and other arthropods",
              "Species-specific and narrow spectrum; harmless to plants, mammals, birds, fish and other insects.",
            ],
          },
        ]}
      />
      <p>
        <em>Bacillus thuringiensis</em> reaches the field as dried spores in a sachet. Mixed with water, it is
        sprayed on vulnerable plants — brassicas and fruit trees.
      </p>
      <p>
        Bt-cotton has the same toxin gene built in, and is already cultivated in some states of our country.
      </p>
      <Callout type="note" title="Why narrow spectrum matters">
        A narrow spectrum agent is especially desirable when beneficial insects are being conserved to aid in an
        overall <strong>integrated pest management (IPM)</strong> programme, or when an ecologically sensitive
        area is being treated.
      </Callout>
      <MistakeCard
        mistake="A Bt spray kills every insect that lands on the crop."
        correction="The Bt toxin kills the larvae that actually eat it — caterpillars. The bacterial disease leaves other insects unharmed, which is exactly why it fits an IPM programme."
        example="The same toxin gene put into the plant itself gives Bt-cotton, where the pest is stopped before it can do damage."
      />
      <KeyPoint title="Not a poison, a pathogen">
        Biocontrol replaces chemicals with natural predation and microbial pathogens. The aim is not to wipe a
        pest out, but to hold it at a manageable level while the rest of the ecosystem keeps working.
      </KeyPoint>

      <h2 id="h-8-6">8.6 Microbes as Biofertilisers</h2>
      <p>
        Chemical fertilisers met the rising demand for agricultural produce — and became a major source of
        pollution.
      </p>
      <p>
        Their overuse is now recognised as a problem, so there is a large pressure to switch to organic farming
        — the use of <strong>biofertilisers</strong>.
      </p>
      <Callout type="important" title="Biofertilisers">
        Biofertilisers are <strong>organisms that enrich the nutrient quality of the soil</strong>. The main
        sources of biofertilisers are <strong>bacteria, fungi and cyanobacteria</strong>.
      </Callout>
      <TreeDiagram
        title="Three sources of biofertilisers"
        defaultExpanded
        nodes={[
          {
            label: "Bacteria",
            children: [
              {
                label: "Rhizobium",
                detail:
                  "Forms nodules on the roots of leguminous plants in a symbiotic association; fixes atmospheric nitrogen into organic forms, which the plant uses as nutrient.",
              },
              {
                label: "Azospirillum",
                detail:
                  "Fixes atmospheric nitrogen while free-living in the soil, thus enriching the nitrogen content of the soil.",
              },
              {
                label: "Azotobacter",
                detail:
                  "Another free-living nitrogen-fixing bacterium that enriches the nitrogen content of the soil.",
              },
            ],
          },
          {
            label: "Fungi",
            children: [
              {
                label: "Glomus — mycorrhiza",
                detail:
                  "Many members of the genus Glomus form mycorrhiza, a symbiotic association with plants. The fungal symbiont absorbs phosphorus from the soil and passes it to the plant.",
              },
            ],
          },
          {
            label: "Cyanobacteria",
            children: [
              {
                label: "Anabaena, Nostoc, Oscillatoria",
                detail:
                  "Autotrophic microbes widely distributed in aquatic and terrestrial environments, many of which can fix atmospheric nitrogen. In paddy fields, cyanobacteria serve as an important biofertiliser.",
              },
            ],
          },
        ]}
      />
      <p>Plants having mycorrhizal associations show other benefits as well:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Resistance to root-borne pathogens.</li>
        <li>Tolerance to salinity and drought.</li>
        <li>An overall increase in plant growth and development.</li>
      </ul>
      <Expandable title="In-text question — what advantage does the fungus derive from mycorrhiza?">
        <p>The association is a trade, not charity.</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>The fungus gives</strong> — it absorbs phosphorus from the soil and passes it to the plant.
          </li>
          <li>
            <strong>The plant gives</strong> — sugars and other organic food, which the fungus cannot make for
            itself because it has no chlorophyll.
          </li>
        </ul>
      </Expandable>
      <Callout type="note" title="Blue green algae in the paddy field">
        Cyanobacteria — the blue green algae — also <strong>add organic matter to the soil and increase its
        fertility</strong>, on top of fixing atmospheric nitrogen.
      </Callout>
      <p>Biofertilisers are no longer a laboratory idea in India — they are on the shelf.</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>A number of them are available commercially in the market.</li>
        <li>
          Farmers use them regularly to <strong>replenish soil nutrients</strong>.
        </li>
        <li>
          They cut <strong>dependence on chemical fertilisers</strong>.
        </li>
      </ul>
      <KeyPoint title="Three sources, three jobs">
        Bacteria fix nitrogen, fungi deliver phosphorus, cyanobacteria do both — fix nitrogen and add organic
        matter. All three enrich the soil instead of polluting it.
      </KeyPoint>

      <h2 id="h-8-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "Bacteria cannot be seen with the naked eyes, but these can be seen with the help of a microscope. If you have to carry a sample from your home to your biology laboratory to demonstrate the presence of microbes with the help of a microscope, which sample would you carry and why?",
            "Give examples to prove that microbes release gases during metabolism.",
            "In which food would you find lactic acid bacteria? Mention some of their useful applications.",
            "Name some traditional Indian foods made of wheat, rice and Bengal gram (or their products) which involve use of microbes.",
            "In which way have microbes played a major role in controlling diseases caused by harmful bacteria?",
            "Name any two species of fungus, which are used in the production of the antibiotics.",
            "What is sewage? In which way can sewage be harmful to us?",
            "What is the key difference between primary and secondary sewage treatment?",
            "Do you think microbes can also be used as source of energy? If yes, how?",
            "Microbes can be used to decrease the use of chemical fertilisers and pesticides. Explain how this can be accomplished.",
            "Three water samples namely river water, untreated sewage water and secondary effluent discharged from a sewage treatment plant were subjected to BOD test. The samples were labelled A, B and C; but the laboratory attendant did not note which was which. The BOD values of the three samples A, B and C were recorded as 20mg/L, 8mg/L and 400mg/L, respectively. Which sample of the water is most polluted? Can you assign the correct label to each assuming the river water is relatively clean?",
            "Find out the name of the microbes from which Cyclosporin A (an immunosuppressive drug) and Statins (blood cholesterol lowering agents) are obtained.",
            <div key="q13">
              <p>Find out the role of microbes in the following and discuss it with your teacher.</p>
              <ul className="mt-1.5 space-y-1">
                <li>(a) Single cell protein (SCP)</li>
                <li>(b) Soil</li>
              </ul>
            </div>,
            <div key="q14">
              <p>
                Arrange the following in the decreasing order (most important first) of their importance, for
                the welfare of human society. Give reasons for your answer.
              </p>
              <p className="mt-1">Biogas, Citric acid, Penicillin and Curd</p>
            </div>,
            "How do biofertilisers enrich the fertility of the soil?",
          ]}
          answers={[
            <div key="a1">
              <p>
                Carry a small sample of <strong>curd</strong> (or buttermilk).
              </p>
              <p className="mt-1">
                Curd contains millions of lactic acid bacteria, so a single drop spread on a slide shows the
                bacteria clearly under a microscope. Pond water or a mould growing on stale bread would also
                serve the purpose.
              </p>
            </div>,
            <div key="a2">
              <ul className="space-y-1">
                <li>
                  The dough of dosa and idli puffs up because bacteria release <strong>CO₂</strong> during
                  fermentation.
                </li>
                <li>
                  The large holes in Swiss cheese are due to a large amount of <strong>CO₂</strong> released
                  by <em>Propionibacterium sharmanii</em>.
                </li>
                <li>
                  Bread dough rises because <strong>CO₂</strong> is released by baker’s yeast.
                </li>
                <li>
                  Anaerobic sludge digesters produce <strong>methane, hydrogen sulphide and carbon
                  dioxide</strong> — the gases that form biogas.
                </li>
              </ul>
            </div>,
            <div key="a3">
              <p>
                Lactic acid bacteria are found in <strong>curd</strong> and in other fermented milk foods.
              </p>
              <p className="mt-1">Useful applications:</p>
              <ul className="mt-1 space-y-1">
                <li>They convert milk into curd, coagulating and partially digesting the milk proteins.</li>
                <li>They improve the nutritional quality of curd by increasing vitamin B₁₂.</li>
                <li>In the stomach they check disease-causing microbes.</li>
                <li>
                  <em>Lactobacillus</em> is also used for the industrial production of lactic acid.
                </li>
              </ul>
            </div>,
            <div key="a4">
              <ul className="space-y-1">
                <li>
                  <strong>Idli</strong> — rice and Bengal gram (urad dal), fermented by bacteria.
                </li>
                <li>
                  <strong>Dosa</strong> — rice and Bengal gram, fermented by bacteria; the CO₂ released puffs
                  the batter up.
                </li>
                <li>
                  <strong>Bread</strong> — wheat flour fermented by baker’s yeast, <em>Saccharomyces
                  cerevisiae</em>.
                </li>
                <li>
                  <strong>Dhokla and khaman</strong> — made from Bengal gram (besan) by fermentation.
                </li>
              </ul>
            </div>,
            <div key="a5">
              <p>
                Microbes produce <strong>antibiotics</strong> — chemical substances that kill or retard the
                growth of other disease-causing microbes.
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>
                  Penicillin, discovered by Fleming from the mould <em>Penicillium notatum</em>, was the first
                  antibiotic.
                </li>
                <li>
                  Chain and Florey established its full potential, and it was used to treat wounded soldiers in
                  World War II.
                </li>
                <li>
                  Antibiotics have greatly improved our capacity to treat deadly diseases such as plague,
                  whooping cough, diphtheria and leprosy.
                </li>
              </ul>
            </div>,
            <div key="a6">
              <p>
                <em>Penicillium notatum</em> and <em>Penicillium chrysogenum</em> — both fungi, both used in
                the production of penicillin.
              </p>
              <p className="mt-1">
                (<em>Streptomyces</em> species, the source of streptomycin, are bacteria, not fungi.)
              </p>
            </div>,
            <div key="a7">
              <p>
                <strong>Sewage</strong> is municipal waste water, a major component of which is human excreta.
                It contains large amounts of organic matter and microbes, many of which are pathogenic.
              </p>
              <p className="mt-1">Sewage is harmful because:</p>
              <ul className="mt-1 space-y-1">
                <li>It cannot be discharged directly into rivers and streams without polluting them.</li>
                <li>Its high organic load gives it a high BOD, so it has a high polluting potential.</li>
                <li>
                  Untreated sewage in rivers increases water-borne diseases, and its pathogenic microbes are a
                  direct health hazard.
                </li>
              </ul>
            </div>,
            <div key="a8">
              <p>
                <strong>Primary treatment is physical; secondary treatment is biological.</strong>
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>
                  Primary treatment removes particles — floating debris by sequential filtration and grit by
                  sedimentation — forming primary sludge and an effluent.
                </li>
                <li>
                  Secondary treatment passes that effluent into aeration tanks, where aerobic microbes grow as
                  flocs, consume the organic matter and reduce the BOD.
                </li>
              </ul>
            </div>,
            <div key="a9">
              <p>Yes. Microbes are already used as a source of energy.</p>
              <ul className="mt-1.5 space-y-1">
                <li>
                  Methanogens growing anaerobically on cellulosic material produce methane along with CO₂ and
                  H₂ — the mixture called biogas.
                </li>
                <li>
                  Cattle dung (gobar) is rich in these bacteria, and dung-based biogas plants supply gobar gas
                  for cooking and lighting in rural areas.
                </li>
                <li>
                  The anaerobic sludge digesters of a sewage treatment plant also produce biogas, since it is
                  inflammable and can be used as a source of energy.
                </li>
              </ul>
            </div>,
            <div key="a10">
              <ul className="space-y-1">
                <li>
                  <strong>Biofertilisers</strong> enrich the nutrient quality of the soil — Rhizobium in
                  legume root nodules, free-living <em>Azospirillum</em> and <em>Azotobacter</em>, mycorrhizal
                  fungi such as <em>Glomus</em>, and cyanobacteria such as <em>Anabaena</em>,{" "}
                  <em>Nostoc</em> and <em>Oscillatoria</em>. They replenish soil nutrients, so less chemical
                  fertiliser is needed.
                </li>
                <li>
                  <strong>Biocontrol agents</strong> control pests without toxic chemicals — Bt for butterfly
                  caterpillars, <em>Trichoderma</em> against several plant pathogens, baculoviruses against
                  insects and other arthropods, and predators such as the ladybird and the dragonfly. This
                  reduces the use of insecticides and pesticides.
                </li>
              </ul>
            </div>,
            <div key="a11">
              <p>
                The <strong>most polluted sample is C</strong>, with a BOD of <strong>400 mg/L</strong> — the
                greater the BOD, the more is the polluting potential.
              </p>
              <p className="mt-1.5">The labels are therefore:</p>
              <ul className="mt-1 space-y-1">
                <li>
                  <strong>A — secondary effluent</strong> (20 mg/L): treated water, still carrying some organic
                  matter.
                </li>
                <li>
                  <strong>B — river water</strong> (8 mg/L): the lowest BOD, as expected for relatively clean
                  water.
                </li>
                <li>
                  <strong>C — untreated sewage</strong> (400 mg/L): the highest organic load.
                </li>
              </ul>
            </div>,
            <div key="a12">
              <ul className="space-y-1">
                <li>
                  <strong>Cyclosporin A</strong> — the fungus <em>Trichoderma polysporum</em>.
                </li>
                <li>
                  <strong>Statins</strong> — the yeast <em>Monascus purpureus</em>.
                </li>
              </ul>
            </div>,
            <div key="a13">
              <ul className="space-y-1.5">
                <li>
                  <strong>(a) Single cell protein (SCP):</strong> microbes such as the cyanobacterium{" "}
                  <em>Spirulina</em> and various yeasts are grown in large cultures on cheap substrates, and
                  their cells are harvested as a protein-rich supplement for animal feed and human food.
                </li>
                <li>
                  <strong>(b) Soil:</strong> microbes decompose dead organic matter and release nutrients back
                  into the soil, fix atmospheric nitrogen, form mycorrhizal associations that supply
                  phosphorus, and help in the formation and fertility of soil.
                </li>
              </ul>
            </div>,
            <div key="a14">
              <p>
                Decreasing order of importance: <strong>Penicillin → Curd → Biogas → Citric acid</strong>.
              </p>
              <ul className="mt-1.5 space-y-1">
                <li>
                  <strong>Penicillin</strong> — first antibiotic; it saves lives from diseases such as
                  diphtheria, whooping cough and plague, so nothing else on the list can match it.
                </li>
                <li>
                  <strong>Curd</strong> — a cheap, everyday food with improved nutritional quality (vitamin
                  B₁₂) and useful bacteria for the gut, reaching millions of households daily.
                </li>
                <li>
                  <strong>Biogas</strong> — a renewable fuel for cooking and lighting in rural areas, and the
                  spent slurry is fertiliser.
                </li>
                <li>
                  <strong>Citric acid</strong> — valuable to industry and to food processing, but a chemical
                  of narrower daily importance than the other three.
                </li>
              </ul>
              <p className="mt-1.5">
                (The order is a reasoned judgement; a different order can be defended if the reasons are
                given.)
              </p>
            </div>,
            <div key="a15">
              <ul className="space-y-1">
                <li>
                  <em>Rhizobium</em> lives symbiotically in the root nodules of leguminous plants and fixes
                  atmospheric nitrogen into organic forms the plant can use.
                </li>
                <li>
                  Free-living bacteria such as <em>Azospirillum</em> and <em>Azotobacter</em> fix atmospheric
                  nitrogen in the soil itself, enriching its nitrogen content.
                </li>
                <li>
                  Mycorrhizal fungi such as <em>Glomus</em> absorb phosphorus from the soil and pass it to the
                  plant, and also give resistance to root-borne pathogens and tolerance to salinity and
                  drought.
                </li>
                <li>
                  Cyanobacteria such as <em>Anabaena</em>, <em>Nostoc</em> and <em>Oscillatoria</em> fix
                  atmospheric nitrogen — an important biofertiliser in paddy fields — and the blue green algae
                  add organic matter to the soil and increase its fertility.
                </li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>
    </>
  );
}
