import { Mail, Newspaper, Mic, Globe, Star, UserRound, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DiscourseTopic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  sectionCount: number;
}

export const discourseTopics: DiscourseTopic[] = [
  {
    id: "letter-writing",
    slug: "letter-writing",
    title: "Letter Writing",
    tagline: "Formal & informal letter structures — complaints, requests, enquiries & personal letters",
    icon: Mail,
    sectionCount: 4,
  },
  {
    id: "article-essay",
    slug: "article-essay",
    title: "Article & Essay",
    tagline: "Title/byline/hook/body/conclusion — how essays differ from articles, with samples",
    icon: Newspaper,
    sectionCount: 4,
  },
  {
    id: "speech",
    slug: "speech",
    title: "Speech",
    tagline: "Salutation → hook → 3-point body → call to action — plus vote of thanks",
    icon: Mic,
    sectionCount: 4,
  },
  {
    id: "news-report",
    slug: "news-report",
    title: "News Report",
    tagline: "Headline, lead (5 Ws), inverted pyramid — write clear, factual reports",
    icon: Globe,
    sectionCount: 4,
  },
  {
    id: "review",
    slug: "review",
    title: "Review",
    tagline: "Book & film review criteria — rating systems, balanced criticism, samples",
    icon: Star,
    sectionCount: 4,
  },
  {
    id: "profile-bio-sketch",
    slug: "profile-bio-sketch",
    title: "Profile & Bio-Sketch",
    tagline: "Bio-sketch template — chronological + thematic structure with worked samples",
    icon: UserRound,
    sectionCount: 4,
  },
  {
    id: "poster-notice-email",
    slug: "poster-notice-email",
    title: "Poster, Notice & Email",
    tagline: "3 mini-formats — layout rules, word limits, 3 worked samples",
    icon: Megaphone,
    sectionCount: 4,
  },
];

export function getDiscourseTopicBySlug(slug: string): DiscourseTopic | undefined {
  return discourseTopics.find((t) => t.slug === slug);
}
