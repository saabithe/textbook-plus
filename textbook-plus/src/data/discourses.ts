import { Mail, Newspaper, Mic, Globe, Star, UserRound, Megaphone, Sparkles, MessagesSquare, Volume2, BookOpen, Swords, IdCard, ClipboardList, Briefcase, MessageCircle, Radio } from "lucide-react";
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
    tagline: "Poem appreciation — the 4-part format, comparative appreciation & the poetic devices",
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
    id: "job-application-resume",
    slug: "job-application-resume",
    title: "Job Application & Resume",
    tagline: "Covering letter plus resume/CV in full — fill-in frames & page rules",
    icon: Briefcase,
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
    id: "event-seminar-report",
    slug: "event-seminar-report",
    title: "Event / Seminar Report",
    tagline: "Report on a programme — details, activities, key ideas, outcome & close",
    icon: ClipboardList,
  },
  {
    id: "live-tv-reporting",
    slug: "live-tv-reporting",
    title: "Live TV Reporting",
    tagline: "Reporter's script for the scene — live phrases, mind map & 8 exam rules",
    icon: Radio,
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
    id: "profile-writing",
    slug: "profile-writing",
    title: "Profile Writing",
    tagline: "A person's life from the hints — sentence frames, prepositions & linking phrases",
    icon: IdCard,
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
    id: "debate",
    slug: "debate",
    title: "Debate",
    tagline: "For & against the motion — four arguments each side, strongest first, plus a conclusion",
    icon: Swords,
  },
  {
    id: "conversation",
    slug: "conversation",
    title: "Conversation",
    tagline: "Phrase banks for every move — open, ask, respond, agree, suggest, decide, close",
    icon: MessageCircle,
  },
];

export function getDiscourseTopicBySlug(slug: string): DiscourseTopic | undefined {
  return discourseTopics.find((t) => t.slug === slug);
}
