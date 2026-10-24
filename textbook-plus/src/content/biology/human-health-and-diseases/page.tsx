import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { Stepper } from "@/components/content/Stepper";
import { ProcessCard } from "@/components/content/process/ProcessCard";
import { MetricCard } from "@/components/content/study/MetricCard";
import { MistakeCard } from "@/components/content/study/MistakeCard";
import { TableCard } from "@/components/content/data/TableCard";
import { FactCard } from "@/components/content/concept/FactCard";
import { ConceptCard } from "@/components/content/concept/ConceptCard";

export default function HumanHealthAndDiseasesChapter() {
  return (
    <>
      <FactCard
        title="What health actually is"
        definition="Health does not simply mean ‘absence of disease’ or ‘physical fitness’. It could be defined as a state of complete physical, mental and social well-being."
        icon="🫀"
      />
      <Callout type="note" title="From ‘good humours’ to the immune system">
        <p>
          Health was once explained as a balance of certain ‘humors’ — the view of early Greeks like Hippocrates and of
          the Indian Ayurveda system of medicine. Persons with ‘blackbile’ were thought to have a hot personality and to
          get fevers. That idea came from pure reflective thought, not experiment.
        </p>
        <p className="mt-2">
          It was overturned by experiment: William Harvey discovered blood circulation, and a thermometer showed that
          persons with blackbile had normal body temperature. Later biology showed that the mind influences the immune
          system through the <strong>neural system</strong> and the <strong>endocrine system</strong>, and the immune
          system maintains our health.
        </p>
      </Callout>
      <TableCard
        title="What health is affected by"
        headers={["Factor", "What it covers"]}
        rows={[
          {
            cells: [
              "Genetic disorders",
              "Deficiencies with which a child is born, and deficiencies/defects which the child inherits from parents from birth",
            ],
          },
          { cells: ["Infections", "Disease-causing organisms gaining entry into the body"] },
          {
            cells: [
              "Life style",
              "Food and water we take, rest and exercise we give to our bodies, habits that we have or lack",
            ],
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Healthy people are more efficient at work — this increases productivity and brings economic prosperity.</li>
        <li>Health increases longevity of people and reduces infant and maternal mortality.</li>
        <li>
          <strong>Balanced diet, personal hygiene and regular exercise</strong> are very important to maintain good
          health.
        </li>
        <li>Yoga has been practised since time immemorial to achieve physical and mental health.</li>
        <li>
          Awareness about diseases, vaccination (immunisation) against infectious diseases, proper disposal of wastes,
          control of vectors and hygiene in food and water resources are necessary for good health.
        </li>
      </ul>
      <Callout type="important" title="What a disease is">
        When the functioning of one or more organs or systems of the body is adversely affected, characterised by
        appearance of various signs and symptoms, we say that we are not healthy, i.e., we have a{" "}
        <strong>disease</strong>.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Infectious diseases",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Easily transmitted from one person to another.</li>
                <li>Very common — everyone suffers from them at sometime or other.</li>
                <li>Some, like AIDS, are fatal.</li>
              </ul>
            ),
          },
          {
            title: "Non-infectious diseases",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Not transmitted from person to person.</li>
                <li>Cancer is the major cause of death among them.</li>
                <li>Drug and alcohol abuse also affect our health adversely.</li>
              </ul>
            ),
          },
        ]}
      />

      <h2 id="h-7-1">7.1 Common Diseases in Humans</h2>
      <Callout type="important" title="Pathogen">
        A wide range of organisms belonging to bacteria, viruses, fungi, protozoans, helminths, etc., could cause
        diseases in man. Such disease-causing organisms are called <strong>pathogens</strong>.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Most parasites are therefore pathogens — they cause harm to the host by living in (or on) them.</li>
        <li>
          Pathogens enter the body by various means, multiply, and interfere with normal vital activities — resulting in{" "}
          <strong>morphological and functional damage</strong>.
        </li>
        <li>
          A pathogen must adapt to life inside the host. Pathogens that enter the gut must survive the{" "}
          <strong>low pH of the stomach</strong> and resist the various digestive enzymes.
        </li>
      </ul>
      <TableCard
        title="Common human diseases — agent, group and symptoms"
        headers={["Disease", "Causative agent", "Group", "Main symptoms"]}
        rows={[
          {
            cells: [
              "Typhoid",
              "Salmonella typhi",
              "Bacterium",
              "Sustained high fever (39°–40 °C), weakness, stomach pain, constipation, headache, loss of appetite",
            ],
          },
          {
            cells: [
              "Pneumonia",
              "Streptococcus pneumoniae, Haemophilus influenzae",
              "Bacterium",
              "Fever, chills, cough, headache; in severe cases lips and finger nails turn gray to bluish",
            ],
          },
          {
            cells: [
              "Common cold",
              "Rhino viruses",
              "Virus",
              "Nasal congestion and discharge, sore throat, hoarseness, cough, headache, tiredness",
            ],
          },
          {
            cells: [
              "Malaria",
              "Plasmodium vivax, P. malaria, P. falciparum",
              "Protozoan",
              "Chill and high fever recurring every three to four days",
            ],
          },
          {
            cells: [
              "Amoebiasis (amoebic dysentery)",
              "Entamoeba histolytica",
              "Protozoan",
              "Constipation, abdominal pain and cramps, stools with excess mucous and blood clots",
            ],
          },
          {
            cells: [
              "Ascariasis",
              "Ascaris (common round worm)",
              "Helminth",
              "Internal bleeding, muscular pain, fever, anemia, blockage of the intestinal passage",
            ],
          },
          {
            cells: [
              "Filariasis (elephantiasis)",
              "Wuchereria bancrofti, W. malayi",
              "Helminth",
              "Chronic inflammation of the lymphatic vessels of the lower limbs; genital organs often affected, causing gross deformities",
            ],
          },
          {
            cells: [
              "Ringworms",
              "Microsporum, Trichophyton, Epidermophyton",
              "Fungus",
              "Dry, scaly lesions on skin, nails and scalp, accompanied by intense itching",
            ],
          },
        ]}
      />

      <h3 id="h-7-1-typhoid">Typhoid</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <em>Salmonella typhi</em> is a pathogenic bacterium which causes typhoid fever in human beings.
        </li>
        <li>
          The pathogens generally enter the <strong>small intestine</strong> through food and water contaminated with
          them, and migrate to other organs <strong>through blood</strong>.
        </li>
        <li>
          In severe cases, <strong>intestinal perforation</strong> and death may occur.
        </li>
        <li>
          Typhoid fever could be confirmed by the <Highlight color="yellow">Widal test</Highlight>.
        </li>
      </ul>
      <Callout type="didyouknow" title="Typhoid Mary — a classic case in medicine">
        Mary Mallon, nicknamed <strong>Typhoid Mary</strong>, was a cook by profession and was a <strong>typhoid carrier</strong>{" "}
        who continued to spread typhoid for several years through the food she prepared.
      </Callout>

      <h3 id="h-7-1-pneumonia">Pneumonia</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <em>Streptococcus pneumoniae</em> and <em>Haemophilus influenzae</em> cause pneumonia in humans, infecting the{" "}
          <strong>alveoli</strong> (air filled sacs) of the lungs.
        </li>
        <li>As a result of the infection, the alveoli get filled with fluid, leading to severe problems in respiration.</li>
        <li>
          A healthy person acquires the infection by <strong>inhaling the droplets/aerosols</strong> released by an
          infected person, or even by <strong>sharing glasses and utensils</strong> with an infected person.
        </li>
        <li>Dysentery, plague, diphtheria, etc., are some of the other bacterial diseases in man.</li>
      </ul>

      <h3 id="h-7-1-cold">Common cold</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Rhino viruses cause one of the most infectious human ailments — the common cold.</li>
        <li>
          They infect the <strong>nose and respiratory passage but not the lungs</strong>.
        </li>
        <li>
          Symptoms usually last for <strong>3–7 days</strong>.
        </li>
        <li>
          Droplets from cough or sneezes of an infected person are either inhaled directly or transmitted through
          contaminated objects — pens, books, cups, doorknobs, computer keyboard or mouse, etc.
        </li>
      </ul>

      <h3 id="h-7-1-malaria">Malaria</h3>
      <p>
        <em>Plasmodium</em>, a tiny protozoan, is responsible for malaria. Different species cause different types of
        malaria; <strong>malignant malaria</strong> caused by <em>Plasmodium falciparum</em> is the most serious one and
        can even be fatal.
      </p>
      <Stepper
        steps={[
          {
            label: "Sporozoites enter the human",
            description:
              "Plasmodium enters the human body as sporozoites (the infectious form) through the bite of an infected female Anopheles mosquito.",
          },
          {
            label: "Multiplication in liver cells",
            description: "The parasites initially multiply within the liver cells.",
          },
          {
            label: "Attack on red blood cells",
            description: "The parasites then attack the red blood cells (RBCs), resulting in their rupture.",
          },
          {
            label: "Haemozoin → chill and fever",
            description:
              "Rupture of RBCs releases a toxic substance, haemozoin, which is responsible for the chill and high fever recurring every three to four days.",
          },
          {
            label: "Parasites enter the mosquito",
            description:
              "When a female Anopheles mosquito bites an infected person, these parasites enter the mosquito’s body and undergo further development.",
          },
          {
            label: "Sporozoites stored in salivary glands",
            description:
              "The parasites multiply within the mosquito to form sporozoites, which are stored in its salivary glands. The next bite introduces them into a human, starting the cycle again.",
          },
        ]}
      />
      <KeyPoint title="Two hosts, one vector">
        The malarial parasite requires <strong>two hosts — human and mosquitoes</strong> — to complete its life cycle,
        and the female <em>Anopheles</em> mosquito is the <strong>vector</strong> (transmitting agent) too.
      </KeyPoint>

      <h3 id="h-7-1-amoebiasis">Amoebiasis (amoebic dysentery)</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <em>Entamoeba histolytica</em> is a protozoan parasite in the <strong>large intestine</strong> of human which
          causes amoebiasis.
        </li>
        <li>
          <strong>Houseflies act as mechanical carriers</strong> — they transmit the parasite from the faeces of an
          infected person to food and food products, thereby contaminating them.
        </li>
        <li>Drinking water and food contaminated by faecal matter are the main source of infection.</li>
      </ul>

      <h3 id="h-7-1-ascariasis">Ascariasis</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <em>Ascaris</em>, the common round worm, is an intestinal parasite that causes ascariasis.
        </li>
        <li>
          The eggs of the parasite are excreted along with the faeces of infected persons, which contaminate soil, water,
          plants, etc.
        </li>
        <li>A healthy person acquires this infection through contaminated water, vegetables, fruits, etc.</li>
      </ul>

      <h3 id="h-7-1-filariasis">Filariasis (elephantiasis)</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <em>Wuchereria</em> (<em>W. bancrofti</em> and <em>W. malayi</em>), the filarial worms, live for many years in
          the organ they infect, causing a slowly developing <strong>chronic inflammation</strong>.
        </li>
        <li>The disease is called elephantiasis or filariasis.</li>
        <li>The pathogens are transmitted to a healthy person through the bite of female mosquito vectors.</li>
      </ul>

      <h3 id="h-7-1-ringworm">Ringworms</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Ringworms are one of the most common infectious diseases in man.</li>
        <li>
          <Highlight color="blue">Heat and moisture help these fungi to grow</Highlight>, which makes them thrive in skin
          folds such as those in the groin or between the toes.
        </li>
        <li>Ringworms are generally acquired from soil or by using towels, clothes or even the comb of infected individuals.</li>
      </ul>

      <h3 id="h-7-1-prevention">Prevention and control of infectious diseases</h3>
      <p>
        Maintenance of personal and public hygiene is very important for prevention and control of many infectious
        diseases.
      </p>
      <TableCard
        title="Measures and what they cover"
        headers={["Measure", "What it involves", "Diseases targeted"]}
        rows={[
          {
            cells: [
              "Personal hygiene",
              "Keeping the body clean; consumption of clean drinking water, food, vegetables, fruits, etc.",
              "Typhoid, amoebiasis, ascariasis",
            ],
          },
          {
            cells: [
              "Public hygiene",
              "Proper disposal of waste and excreta; periodic cleaning and disinfection of water reservoirs, pools, cesspools and tanks; standard practices of hygiene in public catering",
              "Typhoid, amoebiasis, ascariasis",
            ],
          },
          {
            cells: [
              "Air-borne precautions",
              "All of the above, plus avoiding close contact with infected persons or their belongings",
              "Pneumonia, common cold",
            ],
          },
          {
            cells: [
              "Vector control",
              "Avoiding stagnation of water in and around residential areas, regular cleaning of household coolers, mosquito nets, introducing fishes like Gambusia that feed on mosquito larvae, spraying insecticides in ditches, drainage areas and swamps, wire mesh on doors and windows",
              "Malaria, filariasis",
            ],
          },
        ]}
        caption="Vector control is the most important measure for diseases transmitted through insect vectors."
      />
      <Callout type="warning" title="Why vector control matters more than ever">
        Recent widespread incidences of vector-borne (<em>Aedes</em> mosquitoes) diseases like{" "}
        <strong>dengue and chikungunya</strong> in many parts of India have made these precautions more important.
      </Callout>

      <h3 id="h-7-1-vaccines">Vaccines, immunisation and antibiotics</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          The use of vaccines and immunisation programmes has enabled us to{" "}
          <Highlight color="green">completely eradicate a deadly disease like smallpox</Highlight>.
        </li>
        <li>Polio, diphtheria, pneumonia and tetanus have been controlled to a large extent by the use of vaccines.</li>
        <li>Biotechnology is at the verge of making available newer and safer vaccines.</li>
        <li>Discovery of antibiotics and various other drugs has enabled us to effectively treat infectious diseases.</li>
      </ul>

      <h2 id="h-7-2">7.2 Immunity</h2>
      <p>
        Everyday we are exposed to a large number of infectious agents, yet only a few of these exposures result in
        disease. The body is able to defend itself from most of these foreign agents.
      </p>
      <Callout type="important" title="Immunity — definition">
        This overall ability of the host to fight the disease-causing organisms, conferred by the immune system is
        called <strong>immunity</strong>.
      </Callout>
      <p>Immunity is of two types:</p>
      <ol className="list-decimal pl-5 space-y-1">
        <li>Innate immunity</li>
        <li>Acquired immunity</li>
      </ol>

      <h3 id="h-7-2-1">7.2.1 Innate Immunity</h3>
      <Callout type="important" title="Innate immunity">
        Innate immunity is <strong>non-specific</strong> type of defence, that is{" "}
        <Highlight color="yellow">present at the time of birth</Highlight>. This is accomplished by providing different
        types of barriers to the entry of the foreign agents into our body. Innate immunity consist of four types of
        barriers.
      </Callout>
      <TableCard
        title="The four barriers of innate immunity"
        headers={["Barrier", "What provides it", "How it works"]}
        rows={[
          {
            cells: [
              "Physical",
              "Skin; mucus coating of the epithelium lining the respiratory, gastrointestinal and urogenital tracts",
              "Skin is the main barrier that prevents entry of micro-organisms; mucus traps microbes entering the body",
            ],
          },
          {
            cells: [
              "Physiological",
              "Acid in the stomach, saliva in the mouth, tears from eyes",
              "All prevent microbial growth",
            ],
          },
          {
            cells: [
              "Cellular",
              "Polymorpho-nuclear leukocytes (PMNL-neutrophils), monocytes, natural killer cells (a type of lymphocyte) in the blood, and macrophages in tissues",
              "Phagocytose and destroy microbes",
            ],
          },
          {
            cells: [
              "Cytokine",
              "Proteins called interferons, secreted by virus-infected cells",
              "Protect non-infected cells from further viral infection",
            ],
          },
        ]}
      />

      <h3 id="h-7-2-2">7.2.2 Acquired Immunity</h3>
      <p>
        Acquired immunity, on the other hand, is <strong>pathogen specific</strong>. It is characterised by{" "}
        <strong>memory</strong>.
      </p>
      <Comparison
        columns={[
          {
            title: "Primary response",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Produced on the first encounter with a pathogen.</li>
                <li>Of low intensity.</li>
              </ul>
            ),
          },
          {
            title: "Secondary (anamnestic) response",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Produced on a subsequent encounter with the same pathogen.</li>
                <li>Highly intensified — the body appears to have memory of the first encounter.</li>
              </ul>
            ),
          },
        ]}
      />
      <p>
        Both responses are carried out with the help of two special types of lymphocytes present in our blood —{" "}
        <strong>B-lymphocytes</strong> and <strong>T-lymphocytes</strong>.
      </p>
      <ConceptCard title="B-lymphocytes and T-lymphocytes" icon="🧫">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>B-lymphocytes</strong> produce an army of proteins in response to pathogens into our blood to fight
            with them. These proteins are called <strong>antibodies</strong>.
          </li>
          <li>
            <strong>T-cells</strong> themselves do not secrete antibodies but help B cells to produce them.
          </li>
        </ul>
      </ConceptCard>
      <ConceptCard title="The antibody molecule" icon="🧬">
        <p>
          Each antibody molecule has <strong>four peptide chains</strong> — two small called <strong>light chains</strong>{" "}
          and two longer called <strong>heavy chains</strong>. Hence, an antibody is represented as{" "}
          <Highlight color="yellow">H₂L₂</Highlight>.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Different types of antibodies are produced in our body.</li>
          <li>IgA, IgM, IgE and IgG are some of them.</li>
        </ul>
      </ConceptCard>
      <Comparison
        columns={[
          {
            title: "Humoral immune response",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Also called antibody mediated response.</li>
                <li>Carried out by antibodies produced by B-lymphocytes.</li>
                <li>Antibodies circulate in the blood.</li>
              </ul>
            ),
          },
          {
            title: "Cell-mediated immune response (CMI)",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Mediated by T-lymphocytes.</li>
                <li>Responsible for graft rejection.</li>
                <li>Lets the body differentiate ‘self’ and ‘nonself’.</li>
              </ul>
            ),
          },
        ]}
      />
      <h4 className="mt-6 mb-2 text-[15px] font-semibold">Why transplanted organs are rejected</h4>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>When organs like heart, eye, liver or kidney fail, transplantation is the only remedy.</li>
        <li>
          Grafts from just any source — an animal, another primate, or any human being — cannot be made, since the
          grafts would be rejected sooner or later.
        </li>
        <li>
          <strong>Tissue matching</strong> and <strong>blood group matching</strong> are essential before any
          graft/transplant.
        </li>
        <li>
          Even after this, the patient has to take <strong>immuno-suppressants</strong> all his/her life.
        </li>
      </ul>

      <h3 id="h-7-2-3">7.2.3 Active and Passive Immunity</h3>
      <Comparison
        columns={[
          {
            title: "Active immunity",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>The host is exposed to antigens — living or dead microbes, or other proteins — and antibodies are produced in the host body.</li>
                <li>Slow, and takes time to give its full effective response.</li>
                <li>Induced by injecting microbes during immunisation, or by infectious organisms gaining access during natural infection.</li>
              </ul>
            ),
          },
          {
            title: "Passive immunity",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Ready-made antibodies are directly given to protect the body against foreign agents.</li>
                <li>Example: the foetus receives some antibodies from the mother through the placenta during pregnancy.</li>
                <li>Ready-made preparations — antitoxin, antivenom — are covered under passive immunisation.</li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Why colostrum matters">
        The yellowish fluid <strong>colostrum</strong>, secreted by the mother during the initial days of lactation, has
        abundant <Highlight color="yellow">antibodies (IgA)</Highlight> to protect the infant. The infant has not made them
        itself — this borrowed protection is passive immunity.
      </KeyPoint>

      <h3 id="h-7-2-4">7.2.4 Vaccination and Immunisation</h3>
      <p>
        The principle of immunisation or vaccination is based on the property of <strong>‘memory’</strong> of the immune
        system.
      </p>
      <Stepper
        steps={[
          {
            label: "A vaccine is introduced",
            description:
              "A preparation of antigenic proteins of pathogen, or inactivated/weakened pathogen, is introduced into the body.",
          },
          {
            label: "Antibodies are raised",
            description:
              "Antibodies produced in the body against these antigens would neutralise the pathogenic agents during actual infection.",
          },
          {
            label: "Memory cells are created",
            description:
              "The vaccines also generate memory B and T-cells that recognise the pathogen quickly on subsequent exposure.",
          },
          {
            label: "The invaders are overwhelmed",
            description: "On re-exposure, these cells overwhelm the invaders with a massive production of antibodies.",
          },
        ]}
      />
      <Callout type="note" title="When there is no time to wait — passive immunisation">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            For deadly microbes needing a quick immune response — as in <strong>tetanus</strong> — preformed antibodies,
            or <strong>antitoxin</strong> (a preparation containing antibodies to the toxin), are injected directly.
          </li>
          <li>
            In cases of <strong>snakebites</strong>, the injection given to the patient contains preformed antibodies
            against the snake venom.
          </li>
          <li>This type of immunisation is called passive immunisation.</li>
        </ul>
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Recombinant DNA technology has allowed the production of antigenic polypeptides of pathogen in bacteria or
          yeast.
        </li>
        <li>Vaccines produced this way allow large scale production and hence greater availability for immunisation.</li>
        <li>
          Example: the <Highlight color="green">hepatitis B vaccine produced from yeast</Highlight>.
        </li>
      </ul>

      <h3 id="h-7-2-5">7.2.5 Allergies</h3>
      <Callout type="important" title="Allergy and allergens">
        The exaggerated response of the immune system to certain antigens present in the environment is called{" "}
        <strong>allergy</strong>. The substances to which such an immune response is produced are called{" "}
        <strong>allergens</strong>. The antibodies produced to these are of <strong>IgE</strong> type.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Common allergens: mites in dust, pollens, animal dander, etc.</li>
        <li>Symptoms: sneezing, watery eyes, running nose and difficulty in breathing.</li>
        <li>Allergy is due to the release of chemicals like <strong>histamine and serotonin</strong> from the mast cells.</li>
        <li>
          For determining the cause, the patient is exposed to or injected with very small doses of possible allergens,
          and the reactions are studied.
        </li>
        <li>Drugs like anti-histamine, adrenalin and steroids quickly reduce the symptoms of allergy.</li>
        <li>
          Modern-day life style has resulted in lowering of immunity and more sensitivity to allergens — more and more
          children in metro cities of India suffer from allergies and asthma. This could be because of the protected
          environment provided early in life.
        </li>
      </ul>

      <h3 id="h-7-2-6">7.2.6 Auto Immunity</h3>
      <p>
        Memory-based acquired immunity evolved in higher vertebrates based on the ability to differentiate foreign
        organisms (e.g., pathogens) from self-cells. Two corollaries follow:
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Higher vertebrates can distinguish foreign molecules as well as foreign organisms — most experimental immunology deals with this aspect.</li>
        <li>
          Sometimes, due to genetic and other unknown reasons, the body attacks self-cells. This results in damage to the
          body and is called <strong>auto-immune disease</strong>.
        </li>
      </ul>
      <FactCard
        title="Auto-immune disease — the textbook example"
        definition="Rheumatoid arthritis, which affects many people in our society, is an auto-immune disease."
        icon="🦴"
      />

      <h3 id="h-7-2-7">7.2.7 Immune System in the Body</h3>
      <p>
        The human immune system consists of <strong>lymphoid organs, tissues, cells and soluble molecules like
        antibodies</strong>. It recognises foreign antigens, responds to these and remembers them. It also plays an
        important role in allergic reactions, auto-immune diseases and organ transplantation.
      </p>
      <Callout type="note" title="Lymphoid organs">
        These are the organs where <strong>origin and/or maturation and proliferation of lymphocytes</strong> occur.
      </Callout>
      <TableCard
        title="Primary and secondary lymphoid organs"
        headers={["Type", "Organs", "What happens there"]}
        rows={[
          {
            cells: [
              "Primary",
              "Bone marrow, thymus",
              "Immature lymphocytes differentiate into antigen-sensitive lymphocytes",
            ],
          },
          {
            cells: [
              "Secondary",
              "Spleen, lymph nodes, tonsils, Peyer’s patches of small intestine, appendix",
              "Sites for interaction of lymphocytes with the antigen, which then proliferate to become effector cells",
            ],
          },
        ]}
      />
      <TableCard
        title="Organ by organ"
        headers={["Organ", "Key facts"]}
        rows={[
          {
            cells: [
              "Bone marrow",
              "The main lymphoid organ where all blood cells including lymphocytes are produced",
            ],
          },
          {
            cells: [
              "Thymus",
              "A lobed organ located near the heart and beneath the breastbone; quite large at birth, keeps reducing in size with age, and is very small by puberty",
            ],
          },
          {
            cells: [
              "Spleen",
              "A large bean-shaped organ containing mainly lymphocytes and phagocytes; filters the blood by trapping blood-borne micro-organisms; has a large reservoir of erythrocytes",
            ],
          },
          {
            cells: [
              "Lymph nodes",
              "Small solid structures located at different points along the lymphatic system; trap micro-organisms or other antigens that get into the lymph and tissue fluid, activating the lymphocytes present there",
            ],
          },
          {
            cells: [
              "MALT",
              "Mucosa-associated lymphoid tissue, located within the lining of the major tracts (respiratory, digestive and urogenital); constitutes about 50 per cent of the lymphoid tissue in the human body",
            ],
          },
        ]}
        caption="Both bone marrow and thymus provide micro-environments for the development and maturation of T-lymphocytes."
      />

      <h2 id="h-7-3">7.3 AIDS</h2>
      <Callout type="important" title="What the word AIDS means">
        The word AIDS stands for <strong>Acquired Immuno Deficiency Syndrome</strong>. This means deficiency of immune
        system, <strong>acquired during the lifetime</strong> of an individual, indicating that it is not a congenital
        disease. ‘Syndrome’ means a group of symptoms.
      </Callout>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [&>div]:my-0">
        <MetricCard
          label="First reported"
          value="1981"
          description="AIDS has since spread all over the world."
        />
        <MetricCard
          label="Deaths worldwide"
          value="25 million+"
          description="Killed in the last twenty-five years or so."
        />
        <MetricCard
          label="Time-lag"
          value="5–10"
          unit="years"
          description="Usual gap between infection and appearance of AIDS symptoms."
        />
      </div>
      <p>
        AIDS is caused by the <strong>Human Immuno deficiency Virus (HIV)</strong>, a member of a group of viruses called{" "}
        <strong>retrovirus</strong>, which have an envelope enclosing the RNA genome.
      </p>
      <TableCard
        title="How HIV is transmitted"
        headers={["Route", "Detail"]}
        rows={[
          { cells: ["Sexual contact", "With an infected person"] },
          { cells: ["Transfusion", "Of contaminated blood and blood products"] },
          { cells: ["Shared needles", "As in the case of intravenous drug abusers"] },
          { cells: ["Mother to child", "From an infected mother to her child through the placenta"] },
        ]}
      />
      <p>People at high risk of getting this infection include:</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Individuals who have multiple sexual partners.</li>
        <li>Drug addicts who take drugs intravenously.</li>
        <li>Individuals who require repeated blood transfusions.</li>
        <li>Children born to an HIV infected mother.</li>
      </ul>
      <Callout type="warning" title="How HIV does not spread">
        HIV/AIDS is <Highlight color="yellow">not spread by mere touch or physical contact</Highlight>; it spreads only
        through <strong>body fluids</strong>. It is, hence, imperative, for the physical and psychological well-being of
        the infected, that HIV/AIDS infected persons are not isolated from family and society.
      </Callout>
      <Expandable title="Do you know? — When do people need repeated blood transfusions?">
        <p>The chapter asks you to find out and make a list. Conditions in which repeated transfusion is needed include:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Thalassaemia and other inherited haemoglobin disorders.</li>
          <li>Haemophilia and other severe bleeding disorders.</li>
          <li>Severe anaemia, including that caused by chronic kidney disease.</li>
          <li>Major surgery, trauma and severe blood loss.</li>
          <li>Cancer chemotherapy and bone-marrow disorders, where blood cells are not produced adequately.</li>
        </ul>
      </Expandable>

      <h3 id="h-7-3-mechanism">How HIV disables the immune system</h3>
      <ProcessCard
        title="From infection to immuno-deficiency"
        steps={[
          {
            label: "Entry into macrophages",
            description:
              "After getting into the body, the virus enters macrophages, where the RNA genome of the virus replicates to form viral DNA with the help of the enzyme reverse transcriptase.",
          },
          {
            label: "Viral DNA joins the host DNA",
            description:
              "This viral DNA gets incorporated into the host cell’s DNA and directs the infected cells to produce virus particles.",
          },
          {
            label: "The macrophage becomes an HIV factory",
            description: "Macrophages continue to produce virus and in this way act like a HIV factory.",
          },
          {
            label: "Helper T-lymphocytes are infected",
            description: (
              <>
                Simultaneously, HIV enters helper T-lymphocytes (T<sub>H</sub>), replicates and produces progeny viruses.
              </>
            ),
          },
          {
            label: "Progressive loss of helper T-cells",
            description:
              "Progeny viruses released in the blood attack other helper T-lymphocytes. This is repeated, leading to a progressive decrease in the number of helper T-lymphocytes.",
          },
          {
            label: "Opportunistic infections take over",
            description:
              "The person suffers from bouts of fever, diarrhoea and weight loss, then from infections that could otherwise be overcome — bacteria especially Mycobacterium, viruses, fungi and even parasites like Toxoplasma.",
          },
        ]}
      />
      <Callout type="note" title="Diagnosis and treatment">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            A widely used diagnostic test for AIDS is <strong>enzyme linked immuno-sorbent assay (ELISA)</strong>.
          </li>
          <li>Treatment with anti-retroviral drugs is only partially effective.</li>
          <li>These drugs can only prolong the life of the patient but cannot prevent death, which is inevitable.</li>
        </ul>
      </Callout>

      <h3 id="h-7-3-prevention">Prevention of AIDS</h3>
      <p>
        As AIDS has no cure, <strong>prevention is the best option</strong>. HIV infection, more often, spreads due to
        conscious behaviour patterns and is not something that happens inadvertently, like pneumonia or typhoid.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Making blood (from blood banks) safe from HIV.</li>
        <li>Ensuring the use of only disposable needles and syringes in public and private hospitals and clinics.</li>
        <li>Free distribution of condoms.</li>
        <li>Controlling drug abuse.</li>
        <li>Advocating safe sex.</li>
        <li>Promoting regular check-ups for HIV in susceptible populations.</li>
      </ul>
      <p>
        In our country the <strong>National AIDS Control Organisation (NACO)</strong> and other non-governmental
        organisations (NGOs) are doing a lot to educate people about AIDS. <strong>WHO</strong> has started a number of
        programmes to prevent the spreading of HIV infection.
      </p>
      <KeyPoint title="The only excuse may be ignorance">
        “Don’t die of ignorance.” Infection with HIV or having AIDS is something that should not be hidden — since then
        the infection may spread to many more people. HIV/AIDS-infected people need help and sympathy instead of being
        shunned by society. It is a malady that can only be tackled by the society and medical fraternity acting
        together.
      </KeyPoint>

      <h2 id="h-7-4">7.4 Cancer</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Cancer is one of the most dreaded diseases of human beings and a major cause of death all over the globe.</li>
        <li>More than a million Indians suffer from cancer and a large number of them die from it annually.</li>
        <li>
          The mechanisms that underlie development of cancer, or oncogenic transformation of cells, its treatment and
          control have been some of the most intense areas of research in biology and medicine.
        </li>
      </ul>
      <p>
        In our body, cell growth and differentiation is highly controlled and regulated. In cancer cells, there is
        breakdown of these regulatory mechanisms.
      </p>
      <Callout type="important" title="Contact inhibition">
        Normal cells show a property called <strong>contact inhibition</strong>, by virtue of which contact with other
        cells inhibits their uncontrolled growth. Cancer cells appear to have lost this property. As a result, cancerous
        cells just continue to divide, giving rise to masses of cells called <strong>tumors</strong>.
      </Callout>
      <Comparison
        columns={[
          {
            title: "Benign tumors",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Normally remain confined to their original location.</li>
                <li>Do not spread to other parts of the body.</li>
                <li>Cause little damage.</li>
              </ul>
            ),
          },
          {
            title: "Malignant tumors",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>A mass of proliferating cells called neoplastic or tumor cells.</li>
                <li>Grow very rapidly, invading and damaging the surrounding normal tissues.</li>
                <li>Starve normal cells by competing for vital nutrients.</li>
                <li>Cells sloughed from them travel through blood and start new tumors elsewhere.</li>
              </ul>
            ),
          },
        ]}
      />
      <KeyPoint title="Metastasis — the most feared property">
        Cells sloughed from malignant tumors reach distant sites through blood, and wherever they get lodged in the body,
        they start a new tumor there. This property called <Highlight color="pink">metastasis</Highlight> is the most
        feared property of malignant tumors.
      </KeyPoint>

      <h3 id="h-7-4-causes">Causes of cancer</h3>
      <p>
        Transformation of normal cells into cancerous neoplastic cells may be induced by physical, chemical or biological
        agents. These agents are called <strong>carcinogens</strong>.
      </p>
      <TableCard
        title="Carcinogens and how they act"
        headers={["Type", "Examples", "Effect"]}
        rows={[
          {
            cells: [
              "Physical",
              "Ionising radiations like X-rays and gamma rays; non-ionizing radiations like UV",
              "Cause DNA damage leading to neoplastic transformation",
            ],
          },
          {
            cells: ["Chemical", "Chemical carcinogens present in tobacco smoke", "Identified as a major cause of lung cancer"],
          },
          {
            cells: [
              "Biological",
              "Cancer causing viruses, called oncogenic viruses, which have genes called viral oncogenes",
              "Lead to oncogenic transformation of cells",
            ],
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          Several genes called <strong>cellular oncogenes (c-onc)</strong> or <strong>proto oncogenes</strong> have been
          identified in normal cells.
        </li>
        <li>When activated under certain conditions, these could lead to oncogenic transformation of the cells.</li>
      </ul>

      <h3 id="h-7-4-detection">Cancer detection and diagnosis</h3>
      <p>Early detection of cancers is essential as it allows the disease to be treated successfully in many cases.</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>
          <strong>Biopsy and histopathological studies</strong> of the tissue: a piece of the suspected tissue is cut into
          thin sections, stained and examined under the microscope by a pathologist.
        </li>
        <li>
          <strong>Blood and bone marrow tests</strong> for increased cell counts, in the case of leukemias.
        </li>
      </ul>
      <TableCard
        title="Imaging techniques"
        headers={["Technique", "What it uses", "What it gives"]}
        rows={[
          { cells: ["Radiography", "X-rays", "Useful to detect cancers of the internal organs"] },
          {
            cells: ["CT (computed tomography)", "X-rays", "A three-dimensional image of the internals of an object"],
          },
          {
            cells: [
              "MRI (magnetic resonance imaging)",
              "Strong magnetic fields and non-ionising radiations",
              "Accurately detects pathological and physiological changes in the living tissue",
            ],
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Antibodies against cancer-specific antigens are also used for detection of certain cancers.</li>
        <li>
          Techniques of molecular biology can detect genes in individuals with inherited susceptibility to certain
          cancers.
        </li>
        <li>
          Identifying such genes is very helpful in prevention — such individuals may be advised to avoid exposure to
          particular carcinogens (e.g., tobacco smoke in case of lung cancer).
        </li>
      </ul>

      <h3 id="h-7-4-treatment">Treatment of cancer</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>The common approaches are <strong>surgery, radiation therapy and immunotherapy</strong>.</li>
        <li>
          In radiotherapy, tumor cells are irradiated lethally, taking proper care of the normal tissues surrounding the
          tumor mass.
        </li>
        <li>
          Several <strong>chemotherapeutic drugs</strong> are used to kill cancerous cells; some are specific for
          particular tumors.
        </li>
        <li>Majority of drugs have side effects like hair loss, anemia, etc.</li>
        <li>Most cancers are treated by a combination of surgery, radiotherapy and chemotherapy.</li>
        <li>
          Tumor cells avoid detection and destruction by the immune system, so patients are given{" "}
          <strong>biological response modifiers</strong> such as <Highlight color="green">α-interferon</Highlight>, which
          activates the immune system and helps in destroying the tumor.
        </li>
      </ul>
      <MistakeCard
        mistake="A benign tumor is just an early stage of cancer."
        correction="Benign tumors remain confined to their original location, do not spread, and cause little damage. Only malignant tumors invade tissues and metastasise."
        example="A benign tumor has not acquired the properties that make a malignant tumor dangerous."
      />

      <h2 id="h-7-5">7.5 Drugs and Alcohol Abuse</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Surveys and statistics show that use of drugs and alcohol has been on the rise, especially among the youth.</li>
        <li>Proper education and guidance would enable youth to safeguard themselves against these behaviour patterns.</li>
        <li>
          The drugs commonly abused are <strong>opioids, cannabinoids and coca alkaloids</strong>.
        </li>
        <li>Majority of these are obtained from flowering plants; some are obtained from fungi.</li>
      </ul>
      <TableCard
        title="The three commonly abused drug groups"
        headers={["Group", "Common forms", "Obtained from"]}
        rows={[
          {
            cells: [
              "Opioids",
              "Heroin (smack), chemically diacetylmorphine",
              "Latex of the poppy plant Papaver somniferum",
            ],
          },
          {
            cells: [
              "Cannabinoids",
              "Marijuana, hashish, charas, ganja — from flower tops, leaves and the resin",
              "Inflorescences of the plant Cannabis sativa",
            ],
          },
          {
            cells: [
              "Coca alkaloids",
              "Cocaine (coke, crack)",
              "Coca plant Erythroxylum coca, native to South America",
            ],
          },
        ]}
      />

      <h3 id="h-7-5-opioids">Opioids and heroin</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Opioids bind to specific opioid receptors present in our central nervous system and gastrointestinal tract.</li>
        <li>
          <strong>Heroin</strong> is a white, odourless, bitter crystalline compound.
        </li>
        <li>It is obtained by <strong>acetylation of morphine</strong>.</li>
        <li>Generally taken by snorting and injection, heroin is a <strong>depressant</strong> and slows down body functions.</li>
      </ul>

      <h3 id="h-7-5-cannabinoids">Cannabinoids</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Cannabinoids interact with cannabinoid receptors present principally in the brain.</li>
        <li>Generally taken by inhalation and oral ingestion, these are known for their effects on the cardiovascular system.</li>
      </ul>

      <h3 id="h-7-5-cocaine">Coca alkaloid (cocaine)</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>It interferes with the transport of the neurotransmitter <strong>dopamine</strong>.</li>
        <li>
          Cocaine is usually snorted. It has a potent stimulating action on the central nervous system, producing a sense of
          euphoria and increased energy.
        </li>
        <li>Excessive dosage of cocaine causes hallucinations.</li>
        <li>
          Other well-known plants with hallucinogenic properties are <em>Atropa belladona</em> and <em>Datura</em>.
        </li>
        <li>These days cannabinoids are also being abused by some sportspersons.</li>
      </ul>

      <h3 id="h-7-5-other">Other drugs, and what drug abuse means</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Barbiturates, amphetamines, benzodiazepines and similar drugs are normally used as medicines to help patients cope with mental illnesses like depression and insomnia — but are often abused.</li>
        <li>Morphine is a very effective sedative and painkiller, and is very useful in patients who have undergone surgery.</li>
        <li>Several plants, fruits and seeds with hallucinogenic properties have been used for hundreds of years in folk-medicine, religious ceremonies and rituals all over the globe.</li>
      </ul>
      <Callout type="important" title="Drug abuse — definition">
        When these are taken <strong>for a purpose other than medicinal use</strong>, or in{" "}
        <strong>amounts/frequency that impairs one’s physical, physiological or psychological functions</strong>, it
        constitutes <strong>drug abuse</strong>.
      </Callout>

      <h3 id="h-7-5-tobacco">Tobacco</h3>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Smoking also paves the way to hard drugs.</li>
        <li>Tobacco has been used by human beings for more than 400 years; it is smoked, chewed or used as a snuff.</li>
        <li>
          Tobacco contains a large number of chemical substances including <strong>nicotine</strong>, an alkaloid.
        </li>
        <li>
          Nicotine stimulates the adrenal gland to release <strong>adrenaline and nor-adrenaline</strong> into blood
          circulation, both of which raise blood pressure and increase heart rate.
        </li>
        <li>
          Smoking is associated with increased incidence of cancers of lung, urinary bladder and throat, bronchitis,
          emphysema, coronary heart disease, gastric ulcer, etc.
        </li>
        <li>Tobacco chewing is associated with increased risk of cancer of the oral cavity.</li>
        <li>
          Smoking increases carbon monoxide (CO) content in blood and reduces the concentration of haem-bound oxygen —
          this causes oxygen deficiency in the body.
        </li>
      </ul>
      <Callout type="warning" title="The warning on the packet">
        The statutory warning on cigarette packets warns against smoking and says how it is injurious to health, yet
        smoking is very prevalent in society, both among young and old. Any addict requires counselling and medical help
        to get rid of the habit.
      </Callout>

      <h3 id="h-7-5-1">7.5.1 Adolescence and Drug/Alcohol Abuse</h3>
      <p>
        Adolescence means both ‘a period’ and ‘a process’ during which a child becomes mature in terms of his/her
        attitudes and beliefs for effective participation in society. The period between <strong>12–18 years</strong> of
        age may be thought of as adolescence. In other words, adolescence is a <strong>bridge linking childhood and
        adulthood</strong> — a very vulnerable phase of mental and psychological development.
      </p>
      <TableCard
        title="What pushes a youngster towards drugs or alcohol"
        headers={["Cause", "Detail"]}
        rows={[
          {
            cells: [
              "Curiosity, adventure and experimentation",
              "A child’s natural curiosity motivates him/her to experiment; this is complicated further by effects that might be perceived as benefits",
              ],
          },
          {
            cells: [
              "Escape from problems",
              "The first use may be out of curiosity, but later the child starts using these to escape facing problems",
            ],
          },
          {
            cells: [
              "Academic and examination stress",
              "Pressure to excel in academics or examinations persuades youngsters to try alcohol and drugs",
            ],
          },
          {
            cells: [
              "The ‘cool’ perception",
              "The belief that it is ‘cool’ or progressive to smoke, use drugs or alcohol; television, movies, newspapers and internet help promote this perception",
            ],
          },
          {
            cells: [
              "Family and peers",
              "Unstable or unsupportive family structures and peer pressure",
            ],
          },
        ]}
      />

      <h3 id="h-7-5-2">7.5.2 Addiction and Dependence</h3>
      <Callout type="important" title="Addiction">
        Addiction is a <strong>psychological attachment</strong> to certain effects — such as euphoria and a temporary
        feeling of well-being — associated with drugs and alcohol. These drive people to take them even when these are not
        needed, or even when their use becomes self-destructive.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>With repeated use, the <strong>tolerance level</strong> of the receptors present in our body increases.</li>
        <li>Consequently the receptors respond only to higher doses, leading to greater intake and addiction.</li>
        <li>
          Use of these drugs <Highlight color="pink">even once</Highlight> can be a fore-runner to addiction.
        </li>
        <li>The addictive potential pulls the user into a vicious circle of regular use (abuse) from which he/she may not be able to get out.</li>
        <li>In the absence of any guidance or counselling, the person gets addicted and becomes dependent.</li>
      </ul>
      <Callout type="important" title="Dependence">
        Dependence is the tendency of the body to manifest a characteristic and unpleasant{" "}
        <strong>withdrawal syndrome</strong> if the regular dose of drugs/alcohol is abruptly discontinued. This is
        characterised by anxiety, shakiness, nausea and sweating, which may be relieved when use is resumed again.
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>In some cases, withdrawal symptoms can be severe and even life threatening — the person may need medical supervision.</li>
        <li>Dependence leads the patient to ignore all social norms in order to get sufficient funds to satiate his/her needs.</li>
        <li>These result in many social adjustment problems.</li>
      </ul>

      <h3 id="h-7-5-3">7.5.3 Effects of Drug/Alcohol Abuse</h3>
      <p>The immediate adverse effects are manifested in the form of reckless behaviour, vandalism and violence.</p>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Excessive doses of drugs may lead to coma and death due to respiratory failure, heart failure or cerebral hemorrhage.</li>
        <li>A combination of drugs, or their intake along with alcohol, generally results in overdosing and even deaths.</li>
      </ul>
      <Callout type="warning" title="Warning signs of drug and alcohol abuse among youth">
        <ul className="list-disc pl-5 space-y-1">
          <li>Drop in academic performance.</li>
          <li>Unexplained absence from school/college.</li>
          <li>Lack of interest in personal hygiene.</li>
          <li>Withdrawal, isolation, depression, fatigue.</li>
          <li>Aggressive and rebellious behaviour.</li>
          <li>Deteriorating relationships with family and friends.</li>
          <li>Loss of interest in hobbies.</li>
          <li>Change in sleeping and eating habits; fluctuations in weight, appetite, etc.</li>
        </ul>
      </Callout>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>If an abuser is unable to get money to buy drugs/alcohol, he/she may turn to stealing.</li>
        <li>A drug/alcohol addict often becomes the cause of mental and financial distress to his/her entire family and friends.</li>
        <li>
          Those who take drugs intravenously (direct injection into the vein using a needle and syringe) are much more
          likely to acquire serious infections like <strong>AIDS and Hepatitis B</strong>.
        </li>
        <li>
          The viruses responsible are transferred from one person to another by sharing infected needles and syringes.
          Both are chronic infections and ultimately fatal, and both can be transmitted through sexual contact or infected
          blood.
        </li>
        <li>The use of alcohol during adolescence may lead to heavy drinking in adulthood.</li>
        <li>The chronic use of drugs and alcohol damages the nervous system and liver (<strong>cirrhosis</strong>).</li>
        <li>The use of drugs and alcohol during pregnancy is known to adversely affect the foetus.</li>
      </ul>
      <h4 className="mt-6 mb-2 text-[15px] font-semibold">Drug misuse by sportspersons</h4>
      <p>
        Certain sportspersons misuse <strong>narcotic analgesics, anabolic steroids, diuretics and certain hormones</strong>{" "}
        to increase muscle strength and bulk, to promote aggressiveness, and as a result increase athletic performance.
      </p>
      <Comparison
        columns={[
          {
            title: "Anabolic steroids — side effects in females",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Masculinisation (features like males).</li>
                <li>Increased aggressiveness, mood swings, depression.</li>
                <li>Abnormal menstrual cycles.</li>
                <li>Excessive hair growth on the face and body.</li>
                <li>Enlargement of clitoris, deepening of voice.</li>
              </ul>
            ),
          },
          {
            title: "Anabolic steroids — side effects in males",
            children: (
              <ul className="list-disc pl-4 space-y-1">
                <li>Acne, increased aggressiveness, mood swings, depression.</li>
                <li>Reduction of size of the testicles, decreased sperm production.</li>
                <li>Potential for kidney and liver dysfunction.</li>
                <li>Breast enlargement, premature baldness.</li>
                <li>Enlargement of the prostate gland.</li>
              </ul>
            ),
          },
        ]}
      />
      <ul className="list-disc pl-5 space-y-1.5">
        <li>These effects may be permanent with prolonged use.</li>
        <li>
          In the adolescent male or female, severe facial and body acne and premature closure of the growth centres of the
          long bones may result in <strong>stunted growth</strong>.
        </li>
      </ul>

      <h3 id="h-7-5-4">7.5.4 Prevention and Control</h3>
      <p>
        The age-old adage of ‘prevention is better than cure’ holds true here also. Habits such as smoking, taking drugs or
        alcohol are more likely to be taken up at a young age, more during adolescence — so it is best to identify the
        situations that may push an adolescent towards use of drugs or alcohol, and to take remedial measures well in
        time.
      </p>
      <p>
        In this regard, <strong>parents and teachers have a special responsibility</strong>. Parenting that combines high
        levels of nurturance with consistent discipline has been associated with lowered risk of substance
        (alcohol/drugs/tobacco) abuse.
      </p>
      <TableCard
        title="Measures for prevention and control among adolescents"
        headers={["Measure", "In practice"]}
        rows={[
          {
            cells: [
              "Avoid undue peer pressure",
              "Every child has his/her own choice and personality, which should be respected and nurtured. A child should not be pushed unduly to perform beyond his/her threshold limits — be it studies, sports or other activities.",
            ],
          },
          {
            cells: [
              "Education and counselling",
              "Educating and counselling him/her to face problems and stresses, and to accept disappointments and failures as a part of life. Channelise the child’s energy into healthy pursuits like sports, reading, music, yoga and other extracurricular activities.",
            ],
          },
          {
            cells: [
              "Seeking help from parents and peers",
              "Help should be sought immediately so that they can guide appropriately; help may even be sought from close and trusted friends. Besides getting proper advice, this helps the young to vent feelings of anxiety and guilt.",
            ],
          },
          {
            cells: [
              "Looking for danger signs",
              "Alert parents and teachers need to look for and identify the danger signs. Even friends, if they find someone using drugs or alcohol, should not hesitate to bring this to the notice of parents or teacher in the best interests of the person concerned.",
            ],
          },
          {
            cells: [
              "Seeking professional and medical help",
              "Highly qualified psychologists, psychiatrists, and de-addiction and rehabilitation programmes are available. With such help, and sufficient efforts and will power, the affected individual can get rid of the problem completely.",
            ],
          },
        ]}
      />
      <KeyPoint title="Identify early, act early">
        Because these habits are most often picked up during adolescence, the critical move is to{" "}
        <strong>identify the situations</strong> that may push an adolescent towards drugs or alcohol and take remedial
        measures well in time.
      </KeyPoint>

      <h2 id="h-7-exercises">Exercises</h2>
      <Expandable title="Exercises — all questions with answers" variant="exercise">
        <ExerciseQa
          questions={[
            "What are the various public health measures, which you would suggest as safeguard against infectious diseases?",
            "In which way has the study of biology helped us to control infectious diseases?",
            <div key="q3">
              <p>How does the transmission of each of the following diseases take place?</p>
              <p className="mt-1.5">(a) Amoebiasis (b) Malaria (c) Ascariasis (d) Pneumonia</p>
            </div>,
            "What measure would you take to prevent water-borne diseases?",
            "Discuss with your teacher what does ‘a suitable gene’ means, in the context of DNA vaccines.",
            "Name the primary and secondary lymphoid organs.",
            <div key="q7">
              <p>
                The following are some well-known abbreviations, which have been used in this chapter. Expand each one to
                its full form:
              </p>
              <p className="mt-1.5">(a) MALT (b) CMI (c) AIDS (d) NACO (e) HIV</p>
            </div>,
            <div key="q8">
              <p>Differentiate the following and give examples of each:</p>
              <p className="mt-1.5">(a) Innate and acquired immunity (b) Active and passive immunity</p>
            </div>,
            "Draw a well-labelled diagram of an antibody molecule.",
            "What are the various routes by which transmission of human immuno-deficiency virus takes place?",
            "What is the mechanism by which the AIDS virus causes deficiency of immune system of the infected person?",
            "How is a cancerous cell different from a normal cell?",
            "Explain what is meant by metastasis.",
            "List the harmful effects caused by alcohol/drug abuse.",
            "Do you think that friends can influence one to take alcohol/drugs? If yes, how may one protect himself/herself from such an influence?",
            "Why is that once a person starts taking alcohol or drugs, it is difficult to get rid of this habit? Discuss it with your teacher.",
            "In your view what motivates youngsters to take to alcohol or drugs and how can this be avoided?",
          ]}
          answers={[
            <div key="a1">
              <ul className="space-y-1">
                <li>Proper disposal of waste and excreta.</li>
                <li>Periodic cleaning and disinfection of water reservoirs, pools, cesspools and tanks.</li>
                <li>Observing standard practices of hygiene in public catering.</li>
                <li>Consumption of clean drinking water, food, vegetables and fruits.</li>
                <li>Avoiding close contact with infected persons or their belongings in air-borne diseases.</li>
                <li>Avoiding stagnation of water in and around residential areas and regular cleaning of household coolers.</li>
                <li>Use of mosquito nets, wire mesh on doors and windows, and fishes like Gambusia in ponds.</li>
                <li>Spraying insecticides in ditches, drainage areas and swamps.</li>
                <li>Vaccination (immunisation) against infectious diseases.</li>
              </ul>
            </div>,
            <div key="a2">
              <ul className="space-y-1">
                <li>Vaccines and immunisation programmes have completely eradicated smallpox.</li>
                <li>Polio, diphtheria, pneumonia and tetanus have been controlled to a large extent by vaccines.</li>
                <li>Discovery of antibiotics and other drugs has enabled effective treatment of infectious diseases.</li>
                <li>Biotechnology is making available newer and safer vaccines, e.g., hepatitis B vaccine from yeast.</li>
                <li>Biology gave the diagnostic tests (Widal test, ELISA) and the knowledge of vectors needed to control them.</li>
              </ul>
            </div>,
            <div key="a3">
              <ul className="space-y-1">
                <li>(a) Amoebiasis — drinking water and food contaminated by faecal matter; houseflies act as mechanical carriers from the faeces of an infected person to food.</li>
                <li>(b) Malaria — the bite of an infected female Anopheles mosquito, which introduces sporozoites into the body.</li>
                <li>(c) Ascariasis — contaminated water, vegetables and fruits, on which eggs from faeces-contaminated soil are present.</li>
                <li>(d) Pneumonia — inhaling droplets/aerosols released by an infected person, or sharing glasses and utensils with an infected person.</li>
              </ul>
            </div>,
            <div key="a4">
              <ul className="space-y-1">
                <li>Drink only clean, safe drinking water; boil or filter it when in doubt.</li>
                <li>Proper disposal of waste and excreta; keep sources of drinking water covered and uncontaminated.</li>
                <li>Periodic cleaning and disinfection of water reservoirs, pools, cesspools and tanks.</li>
                <li>Wash vegetables and fruits and consume fresh, clean food.</li>
                <li>Maintain hygiene in public catering.</li>
                <li>Control houseflies, which mechanically carry the parasite from faeces to food.</li>
              </ul>
            </div>,
            <div key="a5">
              <p>
                In DNA vaccines, ‘a suitable gene’ is the gene that codes for an <strong>antigenic polypeptide</strong> of
                the pathogen. When that gene is introduced into the body, the host cells express the antigen, and the
                immune system raises antibodies and memory cells against it. A suitable gene therefore means one whose
                product is strongly antigenic and can provoke a protective immune response.
              </p>
            </div>,
            <div key="a6">
              <ul className="space-y-1">
                <li>Primary lymphoid organs: bone marrow and thymus.</li>
                <li>Secondary lymphoid organs: spleen, lymph nodes, tonsils, Peyer’s patches of the small intestine and appendix.</li>
              </ul>
            </div>,
            <div key="a7">
              <ul className="space-y-1">
                <li>(a) MALT — mucosa-associated lymphoid tissue</li>
                <li>(b) CMI — cell-mediated immunity</li>
                <li>(c) AIDS — Acquired Immuno Deficiency Syndrome</li>
                <li>(d) NACO — National AIDS Control Organisation</li>
                <li>(e) HIV — Human Immuno deficiency Virus</li>
              </ul>
            </div>,
            <div key="a8">
              <p>(a) Innate vs acquired immunity</p>
              <ul className="mt-1 space-y-1">
                <li>Innate immunity is non-specific and is present at the time of birth; acquired immunity is pathogen specific and characterised by memory.</li>
                <li>Innate immunity works through four barriers — physical (skin, mucus), physiological (stomach acid, saliva, tears), cellular (PMNL, monocytes, natural killer cells, macrophages) and cytokine (interferons).</li>
                <li>Acquired immunity works through B-lymphocytes (antibody mediated, humoral) and T-lymphocytes (cell mediated). Example of innate: skin stopping microbes. Example of acquired: antibodies produced after a typhoid infection or vaccination.</li>
              </ul>
              <p className="mt-2">(b) Active vs passive immunity</p>
              <ul className="mt-1 space-y-1">
                <li>In active immunity the host produces its own antibodies after exposure to antigens; in passive immunity ready-made antibodies are given directly.</li>
                <li>Active immunity is slow and takes time to give its full effective response; passive immunity acts at once.</li>
                <li>Examples of active: natural infection, or vaccination with a weakened/inactivated pathogen. Examples of passive: colostrum (IgA) for the infant, antibodies crossing the placenta, and injection of antitoxin for tetanus or preformed antibodies after a snakebite.</li>
              </ul>
            </div>,
            <div key="a9">
              <p>
                An antibody molecule is represented as <strong>H₂L₂</strong> — two heavy chains and two light chains. In
                your drawing, label:
              </p>
              <p className="mt-1">
                The two heavy chains, the two light chains, the antigen-binding sites at the tips of the two arms, and the
                constant and variable regions of the chains.
              </p>
            </div>,
            <div key="a10">
              <ul className="space-y-1">
                <li>Sexual contact with an infected person.</li>
                <li>Transfusion of contaminated blood and blood products.</li>
                <li>Sharing infected needles, as in the case of intravenous drug abusers.</li>
                <li>From an infected mother to her child through the placenta.</li>
              </ul>
            </div>,
            <div key="a11">
              <ul className="space-y-1">
                <li>The virus enters macrophages, where its RNA genome replicates to form viral DNA with the help of reverse transcriptase.</li>
                <li>The viral DNA is incorporated into the host cell’s DNA and directs the cell to produce virus particles, so the macrophage acts like a HIV factory.</li>
                <li>
                  HIV then enters helper T-lymphocytes (T<sub>H</sub>), replicates and produces progeny viruses, which
                  attack other helper T-lymphocytes.
                </li>
                <li>This repeats, causing a progressive decrease in the number of helper T-lymphocytes.</li>
                <li>With few helper T-cells, the person becomes immuno-deficient and suffers from infections by bacteria (especially Mycobacterium), viruses, fungi and parasites like Toxoplasma.</li>
              </ul>
            </div>,
            <div key="a12">
              <ul className="space-y-1">
                <li>Normal cells show contact inhibition — contact with other cells inhibits their uncontrolled growth. Cancer cells have lost this property.</li>
                <li>Normal cell growth and differentiation is highly controlled and regulated; in cancer cells there is a breakdown of these regulatory mechanisms.</li>
                <li>Cancer cells continue to divide, giving rise to tumors, and malignant cells invade and damage surrounding tissues.</li>
                <li>Malignant cells starve normal cells by competing for vital nutrients, and metastasise to distant sites.</li>
              </ul>
            </div>,
            <div key="a13">
              <p>
                Metastasis is the property of malignant tumors in which cells sloughed from the tumor reach distant sites
                through blood, and wherever they get lodged in the body, they start a new tumor there. It is the most
                feared property of malignant tumors.
              </p>
            </div>,
            <div key="a14">
              <ul className="space-y-1">
                <li>Reckless behaviour, vandalism and violence.</li>
                <li>Coma and death from respiratory failure, heart failure or cerebral hemorrhage in excessive doses.</li>
                <li>Overdosing and death when drugs are combined, or taken with alcohol.</li>
                <li>Drop in academic performance, isolation, depression, aggressive behaviour, deteriorating relationships.</li>
                <li>Stealing and financial distress to the family, when money for the drug is unavailable.</li>
                <li>AIDS and Hepatitis B from sharing infected needles and syringes by intravenous users.</li>
                <li>Damage to the nervous system and liver (cirrhosis); adverse effects on the foetus during pregnancy.</li>
                <li>Side effects of anabolic steroids — masculinisation and menstrual abnormalities in females; reduced testicle size, decreased sperm production and baldness in males; stunted growth in adolescents.</li>
              </ul>
            </div>,
            <div key="a15">
              <p>
                Yes. Peer pressure is one of the factors associated with drug and alcohol abuse among adolescents, and the
                perception that it is ‘cool’ to use them spreads easily within a group.
              </p>
              <p className="mt-2">One may protect oneself by:</p>
              <ul className="mt-1 space-y-1">
                <li>Refusing to be pushed unduly, and respecting one’s own choice and personality.</li>
                <li>Seeking help from parents, teachers and close, trusted friends.</li>
                <li>Channelising energy into healthy pursuits like sports, reading, music and yoga.</li>
                <li>Informing parents or teachers if a friend is using drugs or alcohol, in that person’s best interest.</li>
              </ul>
            </div>,
            <div key="a16">
              <ul className="space-y-1">
                <li>Alcohol and drugs are inherently addictive, and one fails to realise this.</li>
                <li>Addiction is a psychological attachment to effects such as euphoria and a temporary feeling of well-being.</li>
                <li>With repeated use, the tolerance level of the receptors increases, so only higher doses work — leading to greater intake.</li>
                <li>Stopping abruptly produces an unpleasant withdrawal syndrome of anxiety, shakiness, nausea and sweating, which is relieved only when use is resumed.</li>
                <li>The user is pulled into a vicious circle of regular use from which he/she may not be able to get out without guidance or counselling.</li>
              </ul>
            </div>,
            <div key="a17">
              <p>Youngsters are motivated by:</p>
              <ul className="mt-1 space-y-1">
                <li>Curiosity, need for adventure and excitement, and experimentation.</li>
                <li>Effects that are perceived as benefits of alcohol or drug use.</li>
                <li>Using them to escape facing problems.</li>
                <li>Stress from pressures to excel in academics or examinations.</li>
                <li>The perception that smoking, drugs or alcohol are ‘cool’ or progressive, promoted by television, movies, newspapers and internet.</li>
                <li>Unstable or unsupportive family structures and peer pressure.</li>
              </ul>
              <p className="mt-2">This can be avoided by:</p>
              <ul className="mt-1 space-y-1">
                <li>Parenting that combines high nurturance with consistent discipline — associated with lowered risk of substance abuse.</li>
                <li>Education and counselling to face problems and stresses, and to accept disappointments and failures.</li>
                <li>Channelising the child’s energy into sports, reading, music, yoga and other extracurricular activities.</li>
                <li>Seeking help from parents and peers, and looking out for danger signs.</li>
                <li>Seeking professional and medical help — psychologists, psychiatrists, and de-addiction and rehabilitation programmes.</li>
              </ul>
            </div>,
          ]}
        />
      </Expandable>
    </>
  );
}
