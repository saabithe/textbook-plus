import {
  Clock,
  MessageSquare,
  ArrowLeftRight,
  ToggleRight,
  Link,
  Scale,
  GitBranch,
  SpellCheck,
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
  group: "core" | "more";
}

export const grammarTopics: GrammarTopic[] = [
  // ── Core topics (highest priority) ───────────────────────────────
  {
    id: "reported-speech",
    slug: "reported-speech",
    title: "Reported Speech",
    tagline: "Transforming direct speech to indirect speech — tense shifts, pronoun changes & reporting verbs",
    icon: MessageSquare,
    group: "core",
  },
  {
    id: "editing",
    slug: "editing",
    title: "Editing",
    tagline: "Spot and correct errors — tense, agreement, articles, prepositions, spelling & punctuation",
    icon: SpellCheck,
    group: "core",
  },
  {
    id: "if-clause",
    slug: "if-clause",
    title: "If Clauses",
    tagline: "Zero, first, second, third & mixed conditionals — form, meaning & advice",
    icon: GitBranch,
    group: "core",
  },
  {
    id: "passive-voice",
    slug: "passive-voice",
    title: "Active & Passive Voice",
    tagline: "Active ↔ passive transformation across all tenses — when to use & when to avoid",
    icon: ArrowLeftRight,
    group: "core",
  },
  {
    id: "cohesive-devices",
    slug: "cohesive-devices",
    title: "Cohesive Devices",
    tagline: "Linkers & connectives for addition, contrast, cause, sequence, purpose & summary",
    icon: Link2,
    group: "core",
  },
  {
    id: "concord",
    slug: "concord",
    title: "Concord",
    tagline: "Subject-verb agreement — singular/plural subjects & tricky cases",
    icon: Scale,
    group: "core",
  },

  // ── More topics ──────────────────────────────────────────────────
  {
    id: "suggestions-advice",
    slug: "suggestions-advice",
    title: "Suggestions & Advice",
    tagline: "Let's, shall we, you should, had better — making suggestions & giving advice",
    icon: Lightbulb,
    group: "more",
  },
  {
    id: "phrasal-verbs",
    slug: "phrasal-verbs",
    title: "Phrasal Verbs",
    tagline: "Verb + particle combinations — separable, inseparable & their idiomatic meanings",
    icon: Puzzle,
    group: "more",
  },
  {
    id: "tenses",
    slug: "tenses",
    title: "Tenses",
    tagline: "Present, past & future forms — simple, continuous, perfect & perfect continuous",
    icon: Clock,
    group: "more",
  },
  {
    id: "prepositions",
    slug: "prepositions",
    title: "Prepositions",
    tagline: "In, on, at, by, with & more — time, place, direction & common confusions",
    icon: Link,
    group: "more",
  },
  {
    id: "articles",
    slug: "articles",
    title: "Articles",
    tagline: "a, an, the & the zero article — countable/uncountable, unique nouns & fixed phrases",
    icon: Type,
    group: "more",
  },
  {
    id: "modal-auxiliaries",
    slug: "modal-auxiliaries",
    title: "Modal Auxiliaries",
    tagline: "Can, could, would, should, may, might, must — ability, permission, obligation & possibility",
    icon: ToggleRight,
    group: "more",
  },
];

export const coreGrammarTopics = grammarTopics.filter((t) => t.group === "core");
export const moreGrammarTopics = grammarTopics.filter((t) => t.group === "more");

export function getGrammarTopicBySlug(slug: string): GrammarTopic | undefined {
  return grammarTopics.find((t) => t.slug === slug);
}
