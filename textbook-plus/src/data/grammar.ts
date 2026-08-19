import { Clock, MessageSquare, ArrowLeftRight, ToggleRight, Link, Scale } from "lucide-react";
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
    id: "tenses",
    slug: "tenses",
    title: "Tenses",
    tagline: "Present, past & future forms — simple, continuous, perfect & perfect continuous",
    icon: Clock,
    sectionCount: 5,
  },
  {
    id: "reported-speech",
    slug: "reported-speech",
    title: "Reported Speech",
    tagline: "Transforming direct speech to indirect speech — tense shifts, pronoun changes & reporting verbs",
    icon: MessageSquare,
    sectionCount: 5,
  },
  {
    id: "passive-voice",
    slug: "passive-voice",
    title: "Passive Voice",
    tagline: "Active ↔ passive transformation across all tenses — when to use & when to avoid",
    icon: ArrowLeftRight,
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
    id: "prepositions",
    slug: "prepositions",
    title: "Prepositions",
    tagline: "In, on, at, by, with & more — time, place, direction & common confusions",
    icon: Link,
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
