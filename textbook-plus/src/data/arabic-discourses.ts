import { MessageSquareQuote } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ArabicDiscourseTopic {
  id: string;
  slug: string;
  /** English title. */
  title: string;
  /** Title in Arabic script. */
  titleArabic: string;
  tagline: string;
  icon: LucideIcon;
}

/**
 * Arabic discourses — the Arabic counterpart of the English Discourses
 * section. Each page teaches one writing frame the exam can ask for.
 * The hub lists them as a plain card grid, in priority order.
 */
export const arabicDiscourseTopics: ArabicDiscourseTopic[] = [
  {
    id: "central-message",
    slug: "central-message",
    title: "The Central Message (Modular Template)",
    titleArabic: "الرِّسَالَةُ الْمَرْكَزِيَّةُ",
    tagline:
      "A universal template for the central message of a verse, with three modular endings for poems of every kind",
    icon: MessageSquareQuote,
  },
];

export function getArabicDiscourseTopicBySlug(slug: string): ArabicDiscourseTopic | undefined {
  return arabicDiscourseTopics.find((t) => t.slug === slug);
}
