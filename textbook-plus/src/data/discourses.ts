import { Mail, Newspaper, Mic, Globe, Sparkles, UserRound, Megaphone, Scissors, Map, Clapperboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DiscourseTopic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  /** The writing formats this page teaches (its toggle tabs). */
  formats: string[];
}

/**
 * Hub order = priority order: highest-frequency, highest-format-benefit
 * discourses first, then the narrower format tasks, then the occasional and
 * reference-heavy pages last. Look-alike formats that a question paper can ask
 * for in the same sitting share one page, switched with `TopicSwitch` inside
 * the page. The hub itself is a plain card grid — no section headings.
 */
export const discourseTopics: DiscourseTopic[] = [
  {
    id: "letter-writing",
    slug: "letter-writing",
    title: "Letter Writing & Applications",
    tagline:
      "Formal & informal letters, email and the job application with its résumé — frames, rules & samples",
    icon: Mail,
    formats: ["Formal letter", "Informal letter", "Email", "Job application + résumé"],
  },
  {
    id: "essay-article-paragraph",
    slug: "essay-article-paragraph",
    title: "Essay, Article, Paragraph & Write-up",
    tagline:
      "The look-alike prose forms compared — cues, structures, samples & the Idea Elaboration frame",
    icon: Newspaper,
    formats: ["Idea elaboration", "Essay", "Article", "Paragraph", "Write-up"],
  },
  {
    id: "precis-review-blurb",
    slug: "precis-review-blurb",
    title: "Precis, Review & Blurb",
    tagline:
      "Compress a passage, judge a book or a film, or sell one from the back cover",
    icon: Scissors,
    formats: ["Precis", "Book / film review", "Book / play blurb"],
  },
  {
    id: "reports",
    slug: "reports",
    title: "News, Event & Live TV Reports",
    tagline:
      "Report an event after it is over, record a programme, or speak from the scene as it happens",
    icon: Globe,
    formats: ["News report", "Event / seminar report", "Live TV reporting"],
  },
  {
    id: "spoken-english",
    slug: "spoken-english",
    title: "Speech, Interview, Debate & Conversation",
    tagline:
      "Four spoken forms — one voice, two voices, or two sides of a motion",
    icon: Mic,
    formats: ["Speech", "Interview", "Debate", "Conversation"],
  },
  {
    id: "character-sketch",
    slug: "character-sketch",
    title: "Character Sketch & Profile",
    tagline:
      "Sketch a character from the text or build a profile from the hints — frames, evidence rules & sentence bank",
    icon: UserRound,
    formats: ["Character sketch", "Profile"],
  },
  {
    id: "appreciation",
    slug: "appreciation",
    title: "Appreciation",
    tagline:
      "Poem appreciation — the 4-part format, comparative appreciation & the poetic devices",
    icon: Sparkles,
    formats: ["Poem appreciation"],
  },
  {
    id: "announcement-notice",
    slug: "announcement-notice",
    title: "Announcement, Notice & Poster",
    tagline:
      "The short formats — a spoken announcement, a boxed notice and a wall poster",
    icon: Megaphone,
    formats: ["Announcement", "Notice", "Poster"],
  },
  {
    id: "script-writing",
    slug: "script-writing",
    title: "Script Writing",
    tagline:
      "A stage script on the page — scene heading, action, character cues, dialogue, parentheticals & extensions",
    icon: Clapperboard,
    formats: ["Script writing"],
  },
  {
    id: "travel-writing",
    slug: "travel-writing",
    title: "Travelogue, Brochure & Travel Info",
    tagline:
      "Narrate, promote or inform — the three travel forms with frames, guidelines & samples",
    icon: Map,
    formats: ["Travel essay / travelogue", "Travel brochure", "Travel information"],
  },
];

export function getDiscourseTopicBySlug(slug: string): DiscourseTopic | undefined {
  return discourseTopics.find((t) => t.slug === slug);
}
