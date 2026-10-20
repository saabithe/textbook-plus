import { Mail, Newspaper, Mic, Globe, Star, UserRound, Megaphone, Sparkles, MessagesSquare, Volume2, BookOpen, Swords, ClipboardList, Briefcase, MessageCircle, Radio, Map, Scissors } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface DiscourseTopic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
}

/**
 * Hub order = priority order: highest-frequency, highest-format-benefit
 * discourses first, then the narrower format tasks, then the occasional and
 * reference-heavy pages last.
 */
export const discourseTopics: DiscourseTopic[] = [
  {
    id: "letter-writing",
    slug: "letter-writing",
    title: "Letter Writing",
    tagline: "Formal & informal letter structures — complaints, requests, enquiries & personal letters",
    icon: Mail,
  },
  {
    id: "essay-article-paragraph",
    slug: "essay-article-paragraph",
    title: "Essay, Article, Paragraph & Write-up",
    tagline: "The look-alike prose forms compared — cues, structures, samples & the Idea Elaboration frame",
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
    id: "precis-writing",
    slug: "precis-writing",
    title: "Precis Writing",
    tagline: "The intelligent summary — master template, 5-step method, mind map, rules & a model precis",
    icon: Scissors,
  },
  {
    id: "character-sketch",
    slug: "character-sketch",
    title: "Character Sketch & Profile",
    tagline: "Sketch a character from the text or build a profile from the hints — frames, evidence rules & sentence bank",
    icon: UserRound,
  },
  {
    id: "review",
    slug: "review",
    title: "Review",
    tagline: "Book & film review criteria — rating systems, balanced criticism, samples",
    icon: Star,
  },
  {
    id: "event-seminar-report",
    slug: "event-seminar-report",
    title: "Event / Seminar Report",
    tagline: "Report on a programme — details, activities, key ideas, outcome & close",
    icon: ClipboardList,
  },
  {
    id: "job-application-resume",
    slug: "job-application-resume",
    title: "Job Application & Resume",
    tagline: "Covering letter plus resume/CV in full — fill-in frames & page rules",
    icon: Briefcase,
  },
  {
    id: "interview",
    slug: "interview",
    title: "Interview",
    tagline: "Question–answer format — open-ended questions, master template & a worked sample",
    icon: MessagesSquare,
  },
  {
    id: "appreciation",
    slug: "appreciation",
    title: "Appreciation",
    tagline: "Poem appreciation — the 4-part format, comparative appreciation & the poetic devices",
    icon: Sparkles,
  },
  {
    id: "announcement-notice",
    slug: "announcement-notice",
    title: "Announcement & Notice",
    tagline: "Announcement script + boxed notice — shared event details, 50-word rules & guidelines",
    icon: Volume2,
  },
  {
    id: "poster-notice-email",
    slug: "poster-notice-email",
    title: "Poster & Email",
    tagline: "2 mini-formats — layout rules, word limits, 2 worked samples",
    icon: Megaphone,
  },
  {
    id: "debate",
    slug: "debate",
    title: "Debate",
    tagline: "For & against the motion — four arguments each side, strongest first, plus a conclusion",
    icon: Swords,
  },
  {
    id: "book-play-blurb",
    slug: "book-play-blurb",
    title: "Book / Play Blurb",
    tagline: "Hook → plot without spoilers → appeal → recommendation — plus publisher & price block",
    icon: BookOpen,
  },
  {
    id: "conversation",
    slug: "conversation",
    title: "Conversation",
    tagline: "Phrase banks for every move — open, ask, respond, agree, suggest, decide, close",
    icon: MessageCircle,
  },
  {
    id: "live-tv-reporting",
    slug: "live-tv-reporting",
    title: "Live TV Reporting",
    tagline: "Reporter's script for the scene — live phrases, mind map & 8 exam rules",
    icon: Radio,
  },
  {
    id: "travel-writing",
    slug: "travel-writing",
    title: "Travelogue, Brochure & Travel Info",
    tagline: "Narrate, promote or inform — the three travel forms with frames, guidelines & samples",
    icon: Map,
  },
];

export function getDiscourseTopicBySlug(slug: string): DiscourseTopic | undefined {
  return discourseTopics.find((t) => t.slug === slug);
}
