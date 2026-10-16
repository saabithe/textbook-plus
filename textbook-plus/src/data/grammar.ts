import {
  Clock,
  MessageSquare,
  ArrowLeftRight,
  ToggleRight,
  Link,
  Scale,
  GitBranch,
  SpellCheck,
  ShieldAlert,
  Lightbulb,
  Puzzle,
  Link2,
  Type,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface GrammarTopic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  sectionCount: number;
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: "reported-speech",
    slug: "reported-speech",
    title: "Reported Speech",
    tagline: "Transforming direct speech to indirect speech — tense shifts, pronoun changes & reporting verbs",
    icon: MessageSquare,
    sectionCount: 5,
  },
  {
    id: "if-clause",
    slug: "if-clause",
    title: "If Clauses",
    tagline: "Zero, first, second & third conditionals — if, unless, in case & the mixed type",
    icon: GitBranch,
    sectionCount: 5,
  },
  {
    id: "editing",
    slug: "editing",
    title: "Editing",
    tagline: "Spot and correct errors — tense, agreement, articles, prepositions, spelling & punctuation",
    icon: SpellCheck,
    sectionCount: 5,
  },
  {
    id: "passive-voice",
    slug: "passive-voice",
    title: "Active & Passive Voice",
    tagline: "Active ↔ passive transformation across all tenses — when to use & when to avoid",
    icon: ArrowLeftRight,
    sectionCount: 5,
  },
  {
    id: "had-better",
    slug: "had-better",
    title: "Had Better",
    tagline: "Strong advice & warning — form, meaning & how it differs from should and would rather",
    icon: ShieldAlert,
    sectionCount: 5,
  },
  {
    id: "suggestions-advice",
    slug: "suggestions-advice",
    title: "Suggestions & Advice",
    tagline: "Let's, shall we, why don't we, you should — making suggestions & giving advice",
    icon: Lightbulb,
    sectionCount: 5,
  },
  {
    id: "phrasal-verbs",
    slug: "phrasal-verbs",
    title: "Phrasal Verbs",
    tagline: "Verb + particle combinations — separable, inseparable & their idiomatic meanings",
    icon: Puzzle,
    sectionCount: 5,
  },
  {
    id: "cohesive-devices",
    slug: "cohesive-devices",
    title: "Cohesive Devices",
    tagline: "Linkers & connectives for addition, contrast, cause, sequence, purpose & summary",
    icon: Link2,
    sectionCount: 5,
  },
  {
    id: "tenses",
    slug: "tenses",
    title: "Tenses",
    tagline: "Present, past & future forms — simple, continuous, perfect & perfect continuous",
    icon: Clock,
    sectionCount: 5,
  },
  {
    id: "prepositions",
    slug: "prepositions",
    title: "Prepositions",
    tagline: "In, on, at, by, with & more — time, place, direction & common confusions",
    icon: Link,
    sectionCount: 5,
  },
  {
    id: "articles",
    slug: "articles",
    title: "Articles",
    tagline: "a, an, the & the zero article — countable/uncountable, unique nouns & fixed phrases",
    icon: Type,
    sectionCount: 5,
  },
  {
    id: "modal-auxiliaries",
    slug: "modal-auxiliaries",
    title: "Modal Auxiliaries",
    tagline: "Can, could, would, should, may, might, must — ability, permission, obligation & possibility",
    icon: ToggleRight,
    sectionCount: 5,
  },
  {
    id: "concord",
    slug: "concord",
    title: "Concord",
    tagline: "Subject-verb agreement — singular/plural subjects & tricky cases",
    icon: Scale,
    sectionCount: 5,
  },
];

export function getGrammarTopicBySlug(slug: string): GrammarTopic | undefined {
  return grammarTopics.find((t) => t.slug === slug);
}
