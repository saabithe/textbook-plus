"use client";

import dynamic from "next/dynamic";
import { ArabicChapterCard } from "@/components/content/ArabicChapterCard";
import { getChapterBySlugFromAll } from "@/data/chapters";

const chapterComponents: Record<string, React.ComponentType> = {
  "relations-and-functions": dynamic(() => import("@/content/mathematics/relations-and-functions/page")) as React.ComponentType,
  "inverse-trigonometric-functions": dynamic(() => import("@/content/mathematics/inverse-trigonometric-functions/page")) as React.ComponentType,
  "matrices": dynamic(() => import("@/content/mathematics/matrices/page")) as React.ComponentType,
  "determinants": dynamic(() => import("@/content/mathematics/determinants/page")) as React.ComponentType,
  "sexual-reproduction-in-flowering-plants": dynamic(() => import("@/content/biology/sexual-reproduction-in-flowering-plants/page")) as React.ComponentType,
  "human-reproduction": dynamic(() => import("@/content/biology/human-reproduction/page")) as React.ComponentType,
  "reproductive-health": dynamic(() => import("@/content/biology/reproductive-health/page")) as React.ComponentType,
  "molecular-basis-of-inheritance": dynamic(() => import("@/content/biology/molecular-basis-of-inheritance/page")) as React.ComponentType,
  "solutions": dynamic(() => import("@/content/chemistry/solutions/page")) as React.ComponentType,
  "electrochemistry": dynamic(() => import("@/content/chemistry/electrochemistry/page")) as React.ComponentType,
  "chemical-kinetics": dynamic(() => import("@/content/chemistry/chemical-kinetics/page")) as React.ComponentType,
  "d-and-f-block-elements": dynamic(() => import("@/content/chemistry/d-and-f-block-elements/page")) as React.ComponentType,
  "coordination-compounds": dynamic(() => import("@/content/chemistry/coordination-compounds/page")) as React.ComponentType,
  "haloalkanes-and-haloarenes": dynamic(() => import("@/content/chemistry/haloalkanes-and-haloarenes/page")) as React.ComponentType,
  "alcohols-phenols-and-ethers": dynamic(() => import("@/content/chemistry/alcohols-phenols-and-ethers/page")) as React.ComponentType,
  "amines": dynamic(() => import("@/content/chemistry/amines/page")) as React.ComponentType,
  "aldehydes-ketones-and-carboxylic-acids": dynamic(() => import("@/content/chemistry/aldehydes-ketones-and-carboxylic-acids/page")) as React.ComponentType,
  "biomolecules": dynamic(() => import("@/content/chemistry/biomolecules/page")) as React.ComponentType,
  // Remaining chemistry chapters will be added in future batches
  "magnetism-and-matter": dynamic(() => import("@/content/physics/magnetism-and-matter/page")) as React.ComponentType,
  "electric-charges-and-fields": dynamic(() => import("@/content/physics/electric-charges-and-fields/page")) as React.ComponentType,
  "electrostatic-potential-and-capacitance": dynamic(() => import("@/content/physics/electrostatic-potential-and-capacitance/page")) as React.ComponentType,
  "current-electricity": dynamic(() => import("@/content/physics/current-electricity/page")) as React.ComponentType,
  "moving-charges-and-magnetism": dynamic(() => import("@/content/physics/moving-charges-and-magnetism/page")) as React.ComponentType,
  "electromagnetic-induction": dynamic(() => import("@/content/physics/electromagnetic-induction/page")) as React.ComponentType,
  "alternating-current": dynamic(() => import("@/content/physics/alternating-current/page")) as React.ComponentType,
  "electromagnetic-waves": dynamic(() => import("@/content/physics/electromagnetic-waves/page")) as React.ComponentType,
  "ray-optics-and-optical-instruments": dynamic(() => import("@/content/physics/ray-optics-and-optical-instruments/page")) as React.ComponentType,
  "wave-optics": dynamic(() => import("@/content/physics/wave-optics/page")) as React.ComponentType,
  "dual-nature-of-radiation-and-matter": dynamic(() => import("@/content/physics/dual-nature-of-radiation-and-matter/page")) as React.ComponentType,
  "atoms": dynamic(() => import("@/content/physics/atoms/page")) as React.ComponentType,
  "nuclei": dynamic(() => import("@/content/physics/nuclei/page")) as React.ComponentType,
  "semiconductor-electronics": dynamic(() => import("@/content/physics/semiconductor-electronics/page")) as React.ComponentType,
  "horegallu": dynamic(() => import("@/content/english/horegallu/page")) as React.ComponentType,
  "mending-wall": dynamic(() => import("@/content/english/mending-wall/page")) as React.ComponentType,
  "amigo-brothers": dynamic(() => import("@/content/english/amigo-brothers/page")) as React.ComponentType,
  "the-3ls-of-empowerment": dynamic(() => import("@/content/english/the-3ls-of-empowerment/page")) as React.ComponentType,
  "any-woman": dynamic(() => import("@/content/english/any-woman/page")) as React.ComponentType,
  "matchbox": dynamic(() => import("@/content/english/matchbox/page")) as React.ComponentType,
  "the-hour-of-truth": dynamic(() => import("@/content/english/the-hour-of-truth/page")) as React.ComponentType,
  "a-three-wheel-solution": dynamic(() => import("@/content/english/a-three-wheel-solution/page")) as React.ComponentType,
  "dhyan-chand": dynamic(() => import("@/content/english/dhyan-chand/page")) as React.ComponentType,
  "stammer": dynamic(() => import("@/content/english/stammer/page")) as React.ComponentType,
  "when-a-sapling-is-planted": dynamic(() => import("@/content/english/when-a-sapling-is-planted/page")) as React.ComponentType,
  "rice": dynamic(() => import("@/content/english/rice/page")) as React.ComponentType,
  "dangers-of-drug-abuse": dynamic(() => import("@/content/english/dangers-of-drug-abuse/page")) as React.ComponentType,
  "post-early-for-christmas": dynamic(() => import("@/content/english/post-early-for-christmas/page")) as React.ComponentType,
  "this-is-going-to-hurt": dynamic(() => import("@/content/english/this-is-going-to-hurt/page")) as React.ComponentType,
  "crime-and-punishment": dynamic(() => import("@/content/english/crime-and-punishment/page")) as React.ComponentType,
  "khairullah": dynamic(() => import("@/content/arabic/khairullah/page")) as React.ComponentType,
};

export function ChapterContent({ slug }: { slug: string }) {
  const Component = chapterComponents[slug];
  const chapter = getChapterBySlugFromAll(slug);
  const isArabic = chapter?.subjectSlug === "arabic";

  return (
    <div
      className={isArabic ? "prose-custom prose-ar" : "prose-custom"}
      dir={isArabic ? "rtl" : undefined}
    >
      {/* Every Arabic chapter opens with its author / genre card. */}
      {isArabic && chapter && <ArabicChapterCard chapter={chapter} />}
      {Component ? (
        <Component />
      ) : (
        <div className="text-muted-foreground py-12 text-center">Content coming soon...</div>
      )}
    </div>
  );
}
