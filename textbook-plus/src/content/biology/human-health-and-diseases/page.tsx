import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Comparison } from "@/components/content/Comparison";
import { Expandable } from "@/components/content/Expandable";
import { ExerciseQa } from "@/components/content/ExerciseQa";
import { Highlight } from "@/components/content/Highlight";
import { MistakeCard } from "@/components/content/study/MistakeCard";
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
      <EduportMcqNote />
    </>
  );
}
