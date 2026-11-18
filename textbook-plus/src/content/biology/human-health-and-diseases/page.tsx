import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { TableCard } from "@/components/content/data/TableCard";
import {
  DiseaseDefinitionCard,
  DiseaseTypesComparison,
  HealthDeterminantsRadial,
  HealthEvolutionTimeline,
  HealthFactorsTrio,
  HealthImportanceAndMeasures,
  MindImmunityCard,
  WhoHealthDefinition,
} from "@/components/content/biology/HealthConcept";
import {
  AlveoliComparison,
  BacterialDiseaseIndex,
  HostAdaptationCallout,
  PathogenDefinitionCard,
  PathogenesisFlow,
  PneumoniaCard,
  TyphoidCard,
  TyphoidMaryCard,
} from "@/components/content/biology/Pathogens";
import { CommonColdCard } from "@/components/content/biology/ViralDiseases";
import {
  AidsDefinitionCard,
  HivCasualContactCallout,
  HivDiagnosisCard,
  HivExposureGroups,
  HivNonIsolationCallout,
  HivPreventionBlock,
  HivReplicationCycle,
  HivTimeLag,
  HivTransmissionRoutes,
  HivTreatmentCard,
  HivTreatmentCorrection,
} from "@/components/content/biology/Aids";
import {
  AmoebiasisCard,
  HaemozoinFlow,
  MalariaLifeCycle,
  MalariaProfileCard,
} from "@/components/content/biology/ProtozoanDiseases";
import { AscariasisCard, FilariasisCard } from "@/components/content/biology/HelminthicDiseases";
import { RingwormCard } from "@/components/content/biology/FungalDiseases";
import { EduportMcqNote } from "@/components/content/biology/PreventionOfDiseases";
import {
  HygieneCards,
  VaccinationImpactCard,
  VectorControlMeasures,
} from "@/components/content/biology/PublicHealthMeasures";
import {
  ImmunityOverview,
  InnateBarrierCards,
  InnateQuickRevision,
} from "@/components/content/biology/ImmunityCore";
import {
  AcquiredImmunityIntro,
  AntibodyStructure,
  HumoralVsCmi,
  LymphocyteRoles,
  PrimarySecondaryResponse,
} from "@/components/content/biology/ImmunityAcquired";
import {
  ActivePassiveImmunity,
  FinalRevisionSheet,
  VaccinationProcess,
} from "@/components/content/biology/ImmunityApplied";
import { AllergySection } from "@/components/content/biology/Allergies";
import { AutoimmunitySection } from "@/components/content/biology/Autoimmunity";
import {
  ImmuneSystemOverview,
  LymphoidOrgansBranch,
  PrimaryLymphoidOrgans,
} from "@/components/content/biology/ImmuneSystem";
import { MaltCard, SecondaryLymphoidOrgans } from "@/components/content/biology/LymphoidOrgans";
import { QuickRevisionSheet } from "@/components/content/biology/ImmunityRevision";
import { ContactInhibitionSection, TumourTypesSection } from "@/components/content/biology/CancerOverview";
import { CarcinogensSection } from "@/components/content/biology/Carcinogens";
import { DiagnosisDashboard } from "@/components/content/biology/CancerDiagnosis";
import { TreatmentCards } from "@/components/content/biology/CancerTreatment";
import { CancerQuickRevisionSheet } from "@/components/content/biology/CancerRevision";
import {
  CannabinoidsSection,
  CommonlyAbusedDrugs,
  OpioidsSection,
} from "@/components/content/biology/DrugSources";
import { CocaineProfile, HallucinogensPrescription } from "@/components/content/biology/CocaineHallucinogens";
import { TobaccoSmokingSection } from "@/components/content/biology/TobaccoSmoking";
import { AddictionDependence, AdolescenceVulnerability } from "@/components/content/biology/AdolescenceAddiction";
import { SteroidMisuse, SystemicEffects } from "@/components/content/biology/HarmfulEffects";
import { PreventionPathway } from "@/components/content/biology/PreventionControl";
import { DrugsFinalRevisionSheet } from "@/components/content/biology/DrugsRevision";

export default function HumanHealthAndDiseasesChapter() {
  return (
    <>
      <h2 id="h-7-intro">Introduction</h2>

      <h3 id="h-7-health-evolution">1. Evolution of the Concept of Health</h3>
      <HealthEvolutionTimeline />
      <MindImmunityCard />

      <h3 id="h-7-health-factors">2. Factors Influencing Health</h3>
      <HealthFactorsTrio />
      <HealthDeterminantsRadial />

      <h3 id="h-7-health-definition">3. Definition and Importance of Health</h3>
      <WhoHealthDefinition />
      <HealthImportanceAndMeasures />

      <h3 id="h-7-disease-concept">4. Concept and Classification of Diseases</h3>
      <DiseaseDefinitionCard />
      <DiseaseTypesComparison />

      <h2 id="h-7-1">7.1 Common Diseases in Humans</h2>
      <h3 id="h-7-1-pathogens">1. Concept of Pathogens</h3>
      <PathogenDefinitionCard />
      <PathogenesisFlow />
      <HostAdaptationCallout />

      <h3 id="h-7-1-bacterial">2. Bacterial Diseases</h3>
      <BacterialDiseaseIndex />

      <h4 id="h-7-1-typhoid">A. Typhoid Fever</h4>
      <TyphoidCard />
      <TyphoidMaryCard />

      <h4 id="h-7-1-pneumonia">B. Pneumonia</h4>
      <PneumoniaCard />
      <AlveoliComparison />

      <h3 id="h-7-1-viral">3. Viral Diseases</h3>

      <h4 id="h-7-1-cold">C. Common Cold</h4>
      <CommonColdCard />

      <h4 id="h-7-1-aids">D. AIDS — Acquired Immunodeficiency Syndrome</h4>

      <h5 id="h-7-1-aids-definition">1. Definition and Causative Agent</h5>
      <AidsDefinitionCard />

      <h5 id="h-7-1-aids-transmission">2. Modes of Transmission and Risk Categories</h5>
      <HivTransmissionRoutes />
      <HivExposureGroups />
      <HivCasualContactCallout />
      <HivNonIsolationCallout />
      <HivTimeLag />

      <h5 id="h-7-1-aids-replication">3. Replication Cycle and Mechanism of HIV</h5>
      <HivReplicationCycle />

      <h5 id="h-7-1-aids-treatment">4. Diagnosis, Treatment and Prevention</h5>
      <HivDiagnosisCard />
      <HivTreatmentCard />
      <HivTreatmentCorrection />
      <HivPreventionBlock />

      <h3 id="h-7-1-protozoan">4. Protozoan Diseases</h3>

      <h4 id="h-7-1-malaria">E. Malaria</h4>
      <MalariaProfileCard />

      <h5 id="h-7-1-malaria-lifecycle">
        1. Life Cycle of <em>Plasmodium</em>
      </h5>
      <MalariaLifeCycle />

      <h5 id="h-7-1-malaria-symptoms">2. Haemozoin and Malaria Symptoms</h5>
      <HaemozoinFlow />

      <h4 id="h-7-1-amoebiasis">F. Amoebiasis (Amoebic Dysentery)</h4>
      <AmoebiasisCard />

      <TableCard
        title="Malaria vs amoebiasis"
        headers={["Feature", "Malaria", "Amoebiasis"]}
        rows={[
          {
            cells: [
              "Pathogen",
              <em key="m">Plasmodium</em>,
              <em key="a">Entamoeba histolytica</em>,
            ],
          },
          { cells: ["Disease-causing group", "Protozoan", "Protozoan"] },
          {
            cells: [
              "Transmission",
              <>
                Bite of an infected female <em>Anopheles</em> mosquito
              </>,
              "Contaminated food and water",
            ],
          },
          {
            cells: [
              "Vector / carrier",
              <>
                Female <em>Anopheles</em> mosquito
              </>,
              "Housefly — mechanical carrier",
            ],
          },
          { cells: ["Main affected site", "Liver and RBCs", "Large intestine"] },
          {
            cells: [
              "Major symptoms",
              "Chills and recurring fever",
              "Constipation, abdominal pain and cramps, mucus and blood in stools",
            ],
          },
        ]}
      />

      <h3 id="h-7-1-helminthic">5. Helminthic Diseases</h3>

      <h4 id="h-7-1-ascariasis">G. Ascariasis</h4>
      <AscariasisCard />

      <h4 id="h-7-1-filariasis">H. Filariasis — Elephantiasis</h4>
      <FilariasisCard />

      <TableCard
        title="Ascariasis vs filariasis"
        headers={["Feature", "Ascariasis", "Filariasis / Elephantiasis"]}
        rows={[
          { cells: ["Pathogen", <em key="p">Ascaris</em>, <><em>W. bancrofti</em>, <em>W. malayi</em></>] },
          { cells: ["Disease-causing organism", "Roundworm", "Filarial worms"] },
          {
            cells: [
              "Transmission",
              "Contaminated food and water",
              <>
                Bite of an infected female <em>Culex</em> mosquito
              </>,
            ],
          },
          { cells: ["Main affected part", "Intestine", "Lymphatic vessels"] },
          {
            cells: [
              "Major effects",
              "Internal bleeding, anaemia, muscular pain, intestinal blockage",
              "Chronic inflammation, lymphatic blockage, gross deformities",
            ],
          },
        ]}
      />

      <h3 id="h-7-1-fungal">6. Fungal Diseases</h3>

      <h4 id="h-7-1-ringworm">I. Ringworm</h4>
      <RingwormCard />

      <h3 id="h-7-1-hygiene">7. Hygiene Practices</h3>
      <HygieneCards />

      <h3 id="h-7-1-vector-control">8. Vector Control Measures</h3>
      <VectorControlMeasures />

      <h3 id="h-7-1-vaccination">9. Vaccination and Scientific Advances</h3>
      <VaccinationImpactCard />


      <h2 id="h-7-2">7.2 Immunity</h2>

      <h3 id="h-7-2-general">1. General Concept of Immunity</h3>
      <ImmunityOverview />

      <h3 id="h-7-2-1">7.2.1 Innate Immunity — Non-Specific Defence</h3>
      <InnateBarrierCards />
      <InnateQuickRevision />

      <h3 id="h-7-2-2">7.2.2 Acquired Immunity</h3>
      <AcquiredImmunityIntro />
      <PrimarySecondaryResponse />
      <LymphocyteRoles />
      <AntibodyStructure />
      <HumoralVsCmi />

      <h3 id="h-7-2-3">7.2.3 Active and Passive Immunity</h3>
      <ActivePassiveImmunity />

      <h3 id="h-7-2-4">7.2.4 Vaccination and Immunisation</h3>
      <VaccinationProcess />

      <FinalRevisionSheet />
      <h3 id="h-7-2-5">7.2.5 Allergies</h3>
      <AllergySection />

      <h3 id="h-7-2-6">7.2.6 Autoimmunity</h3>
      <AutoimmunitySection />

      <h3 id="h-7-2-7">7.2.7 Immune System</h3>
      <ImmuneSystemOverview />

      <h4 id="h-7-2-7-organs">3. Lymphoid Organs</h4>
      <LymphoidOrgansBranch />
      <PrimaryLymphoidOrgans />
      <SecondaryLymphoidOrgans />
      <MaltCard />

      <QuickRevisionSheet />

      <h2 id="h-7-4">7.4 Cancer</h2>

      <h3 id="h-7-4-overview">1. Overview and Development of Cancer</h3>
      <ContactInhibitionSection />

      <h3 id="h-7-4-types">2. Types of Tumours</h3>
      <TumourTypesSection />

      <h3 id="h-7-4-carcinogens">3. Causes of Cancer — Carcinogens</h3>
      <CarcinogensSection />

      <h3 id="h-7-4-diagnosis">4. Cancer Detection and Diagnosis</h3>
      <DiagnosisDashboard />

      <h3 id="h-7-4-treatment">5. Treatment of Cancer</h3>
      <TreatmentCards />

      <CancerQuickRevisionSheet />

      <h2 id="h-7-5">7.5 Drugs and Alcohol Abuse</h2>

      <h3 id="h-7-5-sources">1. Commonly Abused Drugs and Their Sources</h3>
      <CommonlyAbusedDrugs />
      <OpioidsSection />
      <CannabinoidsSection />
      <CocaineProfile />
      <HallucinogensPrescription />

      <h3 id="h-7-5-tobacco">2. Tobacco and Smoking</h3>
      <TobaccoSmokingSection />

      <h3 id="h-7-5-adolescence">3. Adolescence, Addiction and Dependence</h3>
      <AdolescenceVulnerability />
      <AddictionDependence />

      <h3 id="h-7-5-effects">4. Harmful Effects of Drug and Alcohol Abuse</h3>
      <SystemicEffects />
      <SteroidMisuse />

      <h3 id="h-7-5-prevention">5. Prevention and Control Strategies</h3>
      <PreventionPathway />

      <DrugsFinalRevisionSheet />

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
      <EduportMcqNote />
    </>
  );
}
