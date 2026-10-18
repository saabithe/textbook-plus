import { Mail, Newspaper, Mic, Globe, Star, UserRound, Megaphone, Sparkles, MessagesSquare, Volume2, BookOpen, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DiscourseTopic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
}

export const discourseTopics: DiscourseTopic[] = [
  {
    id: "appreciation",
    slug: "appreciation",
    title: "Appreciation",
    tagline: "Poem appreciation — the 4-part format & the poetic devices that build meaning and effect",
    icon: Sparkles,
  },
  {
    id: "letter-writing",
    slug: "letter-writing",
    title: "Letter Writing",
    tagline: "Formal & informal letter structures — complaints, requests, enquiries & personal letters",
    icon: Mail,
  },
  {
    id: "article-essay",
    slug: "article-essay",
    title: "Article & Essay",
    tagline: "Title/byline/hook/body/conclusion — how essays differ from articles, with samples",
    icon: Newspaper,
  },
  {
    id: "speech",
    slug: "speech",
    title: "Speech",
    tagline: "Salutation → hook → 3-point body → call to action — plus vote of thanks",
    icon: Mic,
  },
  {
    id: "news-report",
    slug: "news-report",
    title: "News Report",
    tagline: "Headline, lead (5 Ws), inverted pyramid — write clear, factual reports",
    icon: Globe,
  },
  {
    id: "review",
    slug: "review",
    title: "Review",
    tagline: "Book & film review criteria — rating systems, balanced criticism, samples",
    icon: Star,
  },
  {
    id: "character-sketch",
    slug: "character-sketch",
    title: "Character Sketch",
    tagline: "Traits with evidence — introduction, incidents, development & overall assessment",
    icon: UserRound,
  },
  {
    id: "poster-notice-email",
    slug: "poster-notice-email",
    title: "Poster & Email",
    tagline: "2 mini-formats — layout rules, word limits, 2 worked samples",
    icon: Megaphone,
  },
  {
    id: "interview",
    slug: "interview",
    title: "Interview",
    tagline: "Question–answer format — open-ended questions, master template & a worked sample",
    icon: MessagesSquare,
  },
  {
    id: "announcement-notice",
    slug: "announcement-notice",
    title: "Announcement & Notice",
    tagline: "Announcement script + boxed notice — shared event details, 50-word rules & guidelines",
    icon: Volume2,
  },
  {
    id: "book-play-blurb",
    slug: "book-play-blurb",
    title: "Book / Play Blurb",
    tagline: "Hook → plot without spoilers → appeal → recommendation — plus publisher & price block",
    icon: BookOpen,
  },
  {
    id: "idea-elaboration",
    slug: "idea-elaboration",
    title: "Idea Elaboration",
    tagline: "Paragraph on a given idea — meaning → explanation → example → application → message",
    icon: Lightbulb,
  },
];

export function getDiscourseTopicBySlug(slug: string): DiscourseTopic | undefined {
  return discourseTopics.find((t) => t.slug === slug);
}
