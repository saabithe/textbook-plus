"use client";

import dynamic from "next/dynamic";

const grammarComponents: Record<string, React.ComponentType> = {
  "tenses": dynamic(() => import("@/content/grammar/tenses/page")) as React.ComponentType,
  "reported-speech": dynamic(() => import("@/content/grammar/reported-speech/page")) as React.ComponentType,
  "passive-voice": dynamic(() => import("@/content/grammar/passive-voice/page")) as React.ComponentType,
  "modal-auxiliaries": dynamic(() => import("@/content/grammar/modal-auxiliaries/page")) as React.ComponentType,
  "prepositions": dynamic(() => import("@/content/grammar/prepositions/page")) as React.ComponentType,
  "concord": dynamic(() => import("@/content/grammar/concord/page")) as React.ComponentType,
  "if-clause": dynamic(() => import("@/content/grammar/if-clause/page")) as React.ComponentType,
  "editing": dynamic(() => import("@/content/grammar/editing/page")) as React.ComponentType,
  "suggestions-advice": dynamic(() => import("@/content/grammar/suggestions-advice/page")) as React.ComponentType,
  "phrasal-verbs": dynamic(() => import("@/content/grammar/phrasal-verbs/page")) as React.ComponentType,
  "cohesive-devices": dynamic(() => import("@/content/grammar/cohesive-devices/page")) as React.ComponentType,
  "articles": dynamic(() => import("@/content/grammar/articles/page")) as React.ComponentType,
};

export function GrammarContent({ slug }: { slug: string }) {
  const Component = grammarComponents[slug];
  if (!Component) return <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>;
  return (
    <div className="prose-custom">
      <Component />
    </div>
  );
}
