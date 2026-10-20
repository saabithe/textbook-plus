import type { ReactNode } from "react";
import { Callout } from "@/components/content/Callout";
import { KeyPoint } from "@/components/content/KeyPoint";
import { Highlight } from "@/components/content/Highlight";
import { Expandable } from "@/components/content/Expandable";
import { TableCard } from "@/components/content/data/TableCard";

/** A fill-in field inside a travel frame. */
function Slot({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium italic text-slate-700 underline decoration-dotted decoration-slate-400 underline-offset-4 dark:bg-slate-800/70 dark:text-slate-200 dark:decoration-slate-500">
      {children}
    </span>
  );
}

/**
 * Renders text, turning every [placeholder] into a fill-in slot and every
 * **bold** segment into bold text.
 */
function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("[") && part.endsWith("]")) {
          return <Slot key={index}>{part}</Slot>;
        }
        if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/** The shared "fill-in frame" card shell. */
function FrameCard({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
      <div className="border-b border-border/50 bg-muted/40 px-5 py-3">
        <span className="text-sm font-bold tracking-tight text-foreground">
          Fill-in frame — copy this structure
        </span>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

/** A section heading inside a frame card. */
function SubHead({ children }: { children: ReactNode }) {
  return (
    <h4 className="mt-8 mb-2 text-base font-bold tracking-tight text-foreground">
      {children}
    </h4>
  );
}

function FillList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <Fill text={item} />
        </li>
      ))}
    </ul>
  );
}

function PairList({
  items,
}: {
  items: { label: string; text?: string }[];
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <strong>
            <Fill text={item.label} />
          </strong>
          {item.text ? (
            <>
              : <Fill text={item.text} />
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------- samples */

const MUNNAR = {
  prompt:
    "You visited a hill station during your Summer holidays. Write a travel essay to be published in your school magazine about the place you visited.",
  hints:
    "Description of the place, journey there and back, climate, historical importance, special attractions etc.",
  title: "MUNNAR — A MESMERIZING BEAUTY SPOT",
  paragraphs: [
    "Kerala is known as God's own country and Munnar is one among them. The place is full of rolling hills, stunning tea plantations, spice plantations, and much more. It is an ideal holiday destination to unwind all your stress. Every year, we used to visit famous destinations in our country. This year, we planned a long trip to the mind-blowing haven of peace of God's Own Country, Kerala. We wanted to explore the place and enjoy its unfolded splendour as a part of our family recreation. We planned a trip with family so that we can enjoy ourselves together.",
    "It was a hot day when we began from our hometown, but as we moved forward we felt very pleasant and cool. On our way, we enjoyed the flora and fauna, valleys, hills, and waterfalls. The best thing about it is the green velvet tea gardens everywhere. We loved walking along with this and have taken a lot of photos there. The endless waterfalls amused us with the scenery over there. Eravikulam National Park is another wonderful experience. In this National Park, we saw an animal that is about to go extinct — the Nilgiri Tahr. The Eco Point was a thrilling experience where we had fun shouting our names loudly and hearing it back the same way. We also went to the Blossom International Park, which is a garden with admirable flowers and mind-blowing surroundings.",
    "Our summer vacation to Munnar was fascinating. Munnar is an unforgettable experience in our life. The natural scenery, waterfalls, rivers, and much more that we found there kept us so attached to the place. We did not feel like leaving the place. We would all love to visit Munnar again to find out the unexplored spots.",
  ],
};

const WAYANAD = {
  title: "WAYANAD — THE GREEN PARADISE",
  paragraphs: [
    "Wayanad, which is also known as the 'green paradise', lies in between the mountains of the Western Ghats. Wayanad district is located on the southern tip of the Deccan plateau and in the north-eastern part of Kerala, and is the most popular tourist location in Kerala. It is often called the spice garden of the south, the land of paddy fields, and the home of the monsoon.",
    "Wayanad is unique as it is an elevated picturesque mountainous plateau. The vast stretches of mist-capped mountains, green meadows of valleys, white water springs, blue water lakes and wild forests express the splendid natural beauty of Wayanad.",
  ],
  places: [
    {
      name: "Pookode Lake",
      text: "The natural fresh water lake surrounded by evergreen forests and rolling hills, with hypnotizing beauty, providing boating facilities for its tourists. A fresh water aquarium adds to the beauty with a large variety of fish. There is a children's park and a shopping centre for handicrafts and spices.",
    },
    {
      name: "Banasura Sagar Dam",
      text: "Largest earth dam in India and the second largest in Asia, the Banasura Sagar dam is located at Padinjarethara near Kalpetta in Wayanad. An ideal place for boating and trekking, the place also has a garden. It is among the most popular picnic locations in the district along with its multitude of boating options.",
    },
    {
      name: "Thirunelli Temple",
      text: "On the side of the Brahmagiri hills in Wayanad lies an ancient temple, dedicated to Lord Maha Vishnu, the Thirunelli temple. The temple, surrounded by beautiful hills and forests, is located 32 km away from Mananthavady. The temple is also known as Sahyamala Kshetram and Kashi of the South. The temple is often nicknamed 'Thekkan Kasi'. It is believed that a bath in the holy water of 'Papanasini' will wipe off all the sins.",
    },
    {
      name: "Kuruva Island",
      text: "Kuruvadweep or Kuruva Island comprises a cluster of islets over the middle of the Kabini River in Wayanad that is popular for the boat rides it offers on specially crafted bamboo rafts. Spread over 950 acres of land, Kuruva Island is popular for its diverse flora and fauna. These islands contain two small fresh water lakes. They are also a known safe haven for migratory birds along with hornbills, parrots and many butterfly species.",
    },
    {
      name: "Meenmutty Waterfalls",
      text: "Meenmutty Falls is located 29 km from Kalpetta in Wayanad district in the state of Kerala, India. It is a three-tiered waterfall with a height of 300 metres. Meenmutty is a combination of the Malayalam words Meen (fish) and Mutty (blocked). Meenmutty Falls can be accessed from the Mananthavady–Kuttiady road.",
    },
    {
      name: "Soochippara Waterfalls",
      text: "Soochipara Falls (Sentinel Rock Waterfalls) is perhaps the most picturesque spot located in the periphery of Wayanad. It is a treat for the eyes to see the milky white stream of water making its way to the rivers, passing through the rocky cliffs and clinging trees. The waterfall at the end joins the Chaliyar River. Tourists will have to trek for around 30 minutes to reach the main pool.",
    },
    {
      name: "Muthanga Wildlife Sanctuary",
      text: "The second largest wildlife sanctuary in Kerala, Muthanga consists of tropical moist dry deciduous and evergreen forests, bamboo thickets and plantations, and is home to many varieties of birds and animals.",
    },
    {
      name: "Karlad Lake",
      text: "A quiet retreat, Karlad Lake is a natural freshwater lake located around 8 kms from Vythiri and 3 kms away from Banasura Sagar Dam in Wayanad. The Wayanad Adventure Camp here offers a wide range of activities for the adventure enthusiasts out there.",
    },
  ],
};

const MALAMPUZHA = {
  prompt:
    "The tourist club of your school has decided to prepare a travel info highlighting the attractions of the tourist spot in your locality. Draft the travel info including facilities like accommodation, food etc.",
  title: "MALAMPUZHA DAM",
  lines: [
    "One of the largest dams and reservoirs in Kerala, located near Palakkad.",
    "Built in 1955",
    "The dam is 6066 feet high and crosses the Malampuzha river, a tributary of Bharathapuzha.",
    "August to April are the best months to visit.",
    "Contact number: 0471 232 1132",
  ],
  groups: [
    {
      label: "Getting there",
      items: [
        "By road: Buses and taxis will take you to Malampuzha from Palakkad.",
        "By rail: The nearest railway station is Palakkad Junction.",
        "By air: The Coimbatore airport is the nearest.",
      ],
    },
    {
      label: "Don't miss out",
      items: ["The dam", "The snake park", "Malampuzha Garden", "Ropeway"],
    },
    { label: "The cuisine", items: ["Fried fishes — freshly caught."] },
    {
      label: "Accommodation",
      items: ["KTDC garden house", "Malampuzha dam resort"],
    },
  ],
  closing: "Enjoy your trip.",
};

/* ------------------------------------------------------------ travelogue */

const TRAVELOGUE_GUIDELINES = [
  "**Adapt to the question:** If asked to describe a journey, focus on the experience; if asked to write a travel essay on a destination, give more attention to its features and significance.",
  "**Use chronological order** for a travelogue, from departure to return.",
  "**Use descriptive language:** Include relevant sights, sounds, colours, atmosphere, and emotions.",
  "**Include personal experiences** when the question calls for a first-person account.",
  "**Add reflection:** Explain what made the journey meaningful, memorable, or educational.",
  "**Avoid unnecessary details:** Focus on the most important places, events, and experiences.",
  "**Use suitable tenses:** Past tense for a completed journey; present tense for general facts about a destination.",
  "**Never invent required factual details:** Use the information provided in the question and add reasonable descriptive details only when appropriate.",
];

const TRAVELOGUE_NOTES = [
  "A travelogue should inform as well as entertain, so the introduction should be attractive.",
  "It should be told in the past tense and the first person.",
  "Give a catchy title.",
  "Give details and a clear description of the place.",
  "There should be a subjective and emotional insight.",
  "Formal statements should be avoided.",
  "A conversational tone can be used.",
  "Highlight the various attractions of the place.",
];

const BROCHURE_GUIDELINES = [
  "**Promote rather than narrate:** Persuade the reader to visit the destination.",
  "**Use catchy headings and concise descriptions.**",
  "**Highlight benefits and unique attractions.**",
  "**Use persuasive phrases:** \u201cDiscover,\u201d \u201cExplore,\u201d \u201cExperience,\u201d \u201cDon't miss,\u201d and \u201cPlan your visit.\u201d",
  "**Organise information into sections or bullet points** for easy reading.",
  "**Include practical information only when relevant and available.**",
  "**Do not invent prices, contact details, transport services, or other factual information.**",
  "**Follow the format required by the question:** A short brochure may need only a heading, attractions, and a brief promotional paragraph.",
];

const BROCHURE_NOTES = [
  "Give a catchy title.",
  "Open with a catchy sentence.",
  "Highlight the main features.",
  "Describe scenic beauty.",
  "Point out the scope for adventures.",
  "If possible, include descriptions of local culture and traditions.",
  "Should be appealing to the five senses.",
];

const INFO_GUIDELINES = [
  "**Inform rather than persuade:** Prioritise useful, accurate facts.",
  "**Use headings, bullet points, and short descriptions** to make details easy to find.",
  "**Prioritise practical questions:** Where is it? What can I visit? How do I get there? Where can I stay? What should I know?",
  "**Be precise:** Include distances, timings, prices, and contact details only when provided or verified.",
  "**Separate general facts from recommendations.**",
  "**Adapt the categories to the question:** Not every travel information task needs all six sections.",
  "**Keep information current where necessary:** Transport, opening hours, fees, and entry rules can change.",
];

const INFO_NOTES = [
  "First write about the location and how to reach there.",
  "Then add what to see, where to stay, etc.",
  "Best time to visit, main attractions and contact details can be added.",
  "Major cuisine and other peculiarities should be highlighted.",
  "A complete sentence pattern is not expected here.",
];

export default function TravelWritingContent() {
  return (
    <>
      <Callout type="note">
        Three travel forms share one subject — a place — but do different jobs. A
        <strong> travelogue</strong> (travel essay) narrates a journey, a
        <strong> travel brochure</strong> advertises a destination, and
        <strong> travel information</strong> sets out the practical facts a
        traveller needs. Read the purpose before you choose the form.
      </Callout>

      <h2>Difference at a Glance</h2>

      <TableCard
        title="The three travel forms"
        headers={["Form", "What it does", "Structure"]}
        rows={[
          {
            cells: [
              "Travel Essay / Travelogue",
              "Inform as well as entertain — a personal account of a journey",
              "Title → Introduction (destination + purpose) → Journey (route + scenery) → Exploration (places + activities + memorable incident) → Reflection (feelings + discoveries) → Conclusion (overall impression + lesson)",
            ],
          },
          {
            cells: [
              "Travel Brochure",
              "Promote a destination and persuade the reader to visit",
              "Catchy title + tagline → Welcome + destination overview → Attractions → Activities → Travel facilities + visitor information → Reasons to visit → Call to action",
            ],
          },
          {
            cells: [
              "Travel Information",
              "Inform travellers with accurate, practical facts",
              "Destination + location → Overview → Attractions → Transport → Accommodation + facilities → Practical tips → Summary",
            ],
          },
        ]}
      />

      <h2>How to Tell Them Apart</h2>
      <ul>
        <li>
          <strong>The job decides the form.</strong> The travelogue{" "}
          <em>narrates</em> a journey you made; the brochure <em>promotes</em> a
          destination; travel information <em>informs</em> with facts.
        </li>
        <li>
          <strong>Who is speaking.</strong> Only the travelogue is in the first
          person (I, we) and the past tense; the brochure and the travel
          information speak to the reader about the place.
        </li>
        <li>
          <strong>The opening element.</strong> A title over a story →
          travelogue. A catchy title with a tagline and &ldquo;Discover…&rdquo;
          → brochure. A destination name followed by basic facts in bullet
          points → travel information.
        </li>
        <li>
          <strong>The language.</strong> Descriptive and emotional
          (travelogue) · persuasive, appealing to the five senses, ending in a
          call to action (brochure) · plain and factual, in headings and bullets
          (travel information).
        </li>
        <li>
          <strong>The facts rule.</strong> None of the three may invent details:
          the brochure and the travel information must not invent prices,
          contact numbers, transport services or timings either.
        </li>
      </ul>

      <Highlight>
        Travelogue narrates · brochure promotes · travel information informs.
      </Highlight>

      <h2>1. Travel Essay / Travelogue</h2>

      <FrameCard>
        <h3 className="!mt-0">
          <Slot>[TITLE OF THE JOURNEY / TRAVEL EXPERIENCE]</Slot>
        </h3>

        <SubHead>I. Introduction — Destination and Purpose</SubHead>
        <p>
          <Fill text="[Introduce the journey, destination, or travel experience.] I had the opportunity to visit [destination] with [companions, if relevant] during [time / occasion]. The journey was planned for [purpose or reason for travelling]." />
        </p>
        <p>
          <Fill text="I was particularly excited about [expectation, attraction, or reason for interest]." />
        </p>

        <SubHead>II. The Journey — Beginning the Experience</SubHead>
        <p>
          <Fill text="We began our journey from [starting point] at [time / date, if relevant]. Along the way, we passed through [places, landscapes, or notable sights]. The journey was [describe the experience: pleasant, exciting, tiring, adventurous, etc.]." />
        </p>
        <p>
          <Fill text="As we approached [destination / location], I was fascinated by [describe the scenery, atmosphere, or first impression]." />
        </p>

        <SubHead>
          III. Exploring the Destination — Experiences and Attractions
        </SubHead>
        <p>
          <Fill text="Upon reaching [destination], we visited [important places / attractions]. The most remarkable feature of the place was [describe its natural beauty, architecture, historical importance, culture, or other distinctive features]." />
        </p>
        <p>
          <Fill text="We also experienced [local traditions / food / activities / interactions with people, if relevant]. One particularly memorable moment was when [describe an important incident or experience]." />
        </p>
        <p>
          <Fill text="The place impressed me because [explain its uniqueness, beauty, cultural significance, or personal impact]." />
        </p>

        <SubHead>IV. Personal Reflections — Feelings and Discoveries</SubHead>
        <p>
          <Fill text="Throughout the journey, I felt [emotions] as I experienced [specific event, sight, or activity]. The trip helped me understand [lesson, cultural insight, historical fact, or personal discovery]." />
        </p>
        <p>
          <Fill text="What made the journey truly special was [most meaningful aspect]. It also made me realise that [reflection on travel, nature, culture, people, or life, as appropriate]." />
        </p>

        <SubHead>V. Conclusion — Lasting Impression</SubHead>
        <p>
          <Fill text="Eventually, our journey came to an end, and we returned to [place of return, if relevant] with wonderful memories." />
        </p>
        <p>
          <Fill text="Overall, the journey to [destination] was [final assessment]. It gave me an opportunity to [main benefit or learning experience] and left me with [lasting impression or lesson]. It will remain one of my most memorable travel experiences." />
        </p>
      </FrameCard>

      <h3>Guidelines</h3>
      <ol>
        {TRAVELOGUE_GUIDELINES.map((item) => (
          <li key={item}>
            <Fill text={item} />
          </li>
        ))}
      </ol>

      <h3>Writing the Travelogue</h3>
      <FillList items={TRAVELOGUE_NOTES} />

      <h3>Sample</h3>
      <Expandable
        title="Travelogue — Munnar, A Mesmerizing Beauty Spot"
        variant="example"
      >
        <p>
          <em>{MUNNAR.prompt}</em>
        </p>
        <p className="text-sm">
          <strong>Hints:</strong> {MUNNAR.hints}
        </p>
        <p>
          <strong>{MUNNAR.title}</strong>
        </p>
        {MUNNAR.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Expandable>

      <h2>2. Travel Brochure</h2>
      <p>
        A travel brochure is a pamphlet advertising holidays, trips etc. and
        describing the features and amenities of destinations and resorts.
      </p>

      <FrameCard>
        <h3 className="!mt-0">
          <Slot>[CATCHY TITLE / DESTINATION NAME]</Slot>
        </h3>
        <p>
          <strong>
            Discover <Slot>[Destination]</Slot> —{" "}
            <Slot>[Short Promotional Tagline]</Slot>
          </strong>
        </p>

        <SubHead>I. Introduction — Welcome to the Destination</SubHead>
        <p>
          <Fill text="Welcome to [destination], a [beautiful / historic / exciting / peaceful] destination located in [region / state / country]. Famous for its [major attractions or distinctive features], [destination] offers visitors an unforgettable experience." />
        </p>
        <p>
          <Fill text="Whether you are looking for [interest 1], [interest 2], or [interest 3], this destination has something special to offer." />
        </p>

        <SubHead>II. Major Attractions — Places You Must Visit</SubHead>
        <PairList
          items={[
            {
              label: "[Attraction 1]",
              text: "[Brief description of its beauty, history, uniqueness, or significance.]",
            },
            {
              label: "[Attraction 2]",
              text: "[Describe what makes this place worth visiting.]",
            },
            {
              label: "[Attraction 3]",
              text: "[Highlight its main attraction or visitor experience.]",
            },
          ]}
        />

        <SubHead>III. Activities and Experiences — Things to Do</SubHead>
        <p>
          <Fill text="Visitors can enjoy a variety of activities, including [activity 1], [activity 2], and [activity 3]." />
        </p>
        <p>
          <Fill text="Experience [local culture / traditional festivals / cuisine / adventure activities / nature experiences, as relevant] and discover what makes [destination] unique." />
        </p>

        <SubHead>
          IV. Best Time and Travel Facilities — Plan Your Visit
        </SubHead>
        <PairList
          items={[
            {
              label: "Best time to visit",
              text: "[Season / months and relevant reason, if known.]",
            },
            {
              label: "How to reach",
              text: "[Available transport options and important access points.]",
            },
            {
              label: "Accommodation",
              text: "[Types of accommodation available, if known.]",
            },
            {
              label: "Local cuisine",
              text: "[Famous dishes or food experiences, if relevant.]",
            },
            {
              label: "Additional facilities",
              text: "[Guides, local transport, accessibility, or other useful facilities, if known.]",
            },
          ]}
        />

        <SubHead>V. Why Choose This Destination? — The Appeal</SubHead>
        <p>
          <Fill text="What makes [destination] special is its [distinctive features]. It offers the perfect opportunity to [relax / explore history / experience nature / enjoy adventure / discover local culture, as appropriate]." />
        </p>
        <p>
          <Fill text="With its [key attractions or experiences], [destination] promises visitors a memorable and rewarding holiday." />
        </p>

        <SubHead>VI. Closing — Call to Action</SubHead>
        <p>
          <strong>
            Don&rsquo;t miss the opportunity to explore{" "}
            <Slot>[destination]</Slot>!
          </strong>
        </p>
        <p>
          <Fill text="Plan your visit today and experience [main attraction / distinctive experience] for yourself." />
        </p>
        <p>
          <strong>
            <Slot>[Optional Contact / Booking Information]</Slot>
          </strong>
        </p>
        <p>
          <Slot>[Tourism Office / Organisation]</Slot>
          <br />
          <Slot>[Contact Details / Website, if provided]</Slot>
        </p>
      </FrameCard>

      <h3>Guidelines</h3>
      <ol>
        {BROCHURE_GUIDELINES.map((item) => (
          <li key={item}>
            <Fill text={item} />
          </li>
        ))}
      </ol>

      <h3>Writing the Brochure</h3>
      <FillList items={BROCHURE_NOTES} />

      <h3>Sample</h3>
      <Expandable title="Travel Brochure — Wayanad" variant="example">
        <p>
          <strong>{WAYANAD.title}</strong>
        </p>
        {WAYANAD.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          <strong>Places of tourist interest</strong>
        </p>
        {WAYANAD.places.map((place) => (
          <p key={place.name}>
            <strong>{place.name}</strong>
            <br />
            {place.text}
          </p>
        ))}
      </Expandable>

      <h2>3. Travel Information</h2>
      <p>
        Travel info is meant to entice travellers to visit an area and to inform
        them about the destination.
      </p>

      <FrameCard>
        <h3 className="!mt-0">
          <Slot>[TRAVEL GUIDE / DESTINATION NAME]</Slot>
        </h3>
        <p>
          <strong>
            Essential Travel Information for <Slot>[Destination]</Slot>
          </strong>
        </p>

        <SubHead>I. Destination Overview — Basic Information</SubHead>
        <PairList
          items={[
            { label: "Name", text: "[Destination Name]" },
            { label: "Location", text: "[Town / District / State / Country]" },
            {
              label: "Known for",
              text: "[Main attractions, cultural significance, natural features, or other distinctive qualities]",
            },
            {
              label: "Best time to visit",
              text: "[Season / months, if known]",
            },
            {
              label: "Recommended duration",
              text: "[Suggested length of stay, if relevant and known]",
            },
          ]}
        />

        <SubHead>II. Major Attractions — Places to Explore</SubHead>
        <p>
          <strong>
            <Fill text="1. [Attraction Name]" />
          </strong>
        </p>
        <p>
          <Fill text="[Describe its location, importance, distinctive features, and what visitors can see or experience.]" />
        </p>
        <p>
          <strong>
            <Fill text="2. [Attraction Name]" />
          </strong>
        </p>
        <p>
          <Fill text="[Provide the essential information and explain why it is worth visiting.]" />
        </p>
        <p>
          <strong>
            <Fill text="3. [Attraction Name]" />
          </strong>
        </p>
        <p>
          <Fill text="[Include relevant details about its significance, activities, or visitor experience.]" />
        </p>

        <SubHead>
          III. Transportation — How to Reach and Travel Around
        </SubHead>
        <PairList
          items={[
            {
              label: "By road",
              text: "[Relevant roads, bus services, or access routes, if known.]",
            },
            {
              label: "By rail",
              text: "[Nearest railway station and relevant connections, if known.]",
            },
            {
              label: "By air",
              text: "[Nearest airport and relevant connections, if known.]",
            },
            {
              label: "Local transport",
              text: "[Available options such as buses, taxis, or other local services, if known.]",
            },
          ]}
        />

        <SubHead>IV. Accommodation and Facilities — Where to Stay</SubHead>
        <PairList
          items={[
            {
              label: "Accommodation",
              text: "[Available accommodation types or verified options, if relevant.]",
            },
            {
              label: "Food",
              text: "[Local cuisine, restaurants, or food facilities, if known.]",
            },
            {
              label: "Essential facilities",
              text: "[Medical facilities, visitor centres, restrooms, accessibility, or other relevant services, if known.]",
            },
          ]}
        />

        <SubHead>
          V. Practical Travel Tips — Important Things to Know
        </SubHead>
        <PairList
          items={[
            {
              label: "Weather and clothing",
              text: "[Relevant climate information and suitable clothing.]",
            },
            {
              label: "Entry requirements",
              text: "[Tickets, permits, opening hours, or restrictions, if applicable and known.]",
            },
            {
              label: "Safety",
              text: "[Relevant safety precautions.]",
            },
            {
              label: "Local customs",
              text: "[Cultural practices or etiquette visitors should respect.]",
            },
            {
              label: "Other advice",
              text: "[Useful tips related to transport, expenses, environment, or planning.]",
            },
          ]}
        />

        <SubHead>VI. Summary — Essential Advice for Visitors</SubHead>
        <p>
          <Fill text="[Summarise the destination's main attractions and the most important information visitors should know before travelling.]" />
        </p>
        <p>
          <Fill text="For the best experience, visitors should [relevant planning advice] and ensure that they check [current timings / transport schedules / weather / entry rules, as appropriate] before departure." />
        </p>
      </FrameCard>

      <h3>Guidelines</h3>
      <ol>
        {INFO_GUIDELINES.map((item) => (
          <li key={item}>
            <Fill text={item} />
          </li>
        ))}
      </ol>

      <h3>Writing the Travel Info</h3>
      <FillList items={INFO_NOTES} />

      <h3>Sample</h3>
      <Expandable title="Travel Info — Malampuzha Dam" variant="example">
        <p>
          <em>{MALAMPUZHA.prompt}</em>
        </p>
        <p>
          <strong>Travel Info</strong>
        </p>
        <p>
          <strong>{MALAMPUZHA.title}</strong>
        </p>
        {MALAMPUZHA.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        {MALAMPUZHA.groups.map((group) => (
          <div key={group.label}>
            <p>
              <strong>{group.label}</strong>
            </p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <p>{MALAMPUZHA.closing}</p>
      </Expandable>

      <KeyPoint>
        Same destination, three jobs — the travelogue tells the story of your
        journey in the first person and the past tense, the brochure sells the
        place with catchy headings and a call to action, and the travel
        information answers the traveller&rsquo;s practical questions in plain
        facts. None of the three may invent a detail the question did not give.
      </KeyPoint>
    </>
  );
}
