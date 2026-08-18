type MDXModule = {
  default: React.ComponentType<Record<string, unknown>>;
  frontmatter?: Record<string, unknown>;
};

/**
 * Attempt to load MDX content for a given chapter slug.
 * Returns the module if found, null otherwise.
 */
export async function loadChapterMDX(slug: string): Promise<MDXModule | null> {
  try {
    const mod = (await import(
      /* webpackExclude: true */
      `@/content/${slug}/page.mdx`
    )) as MDXModule;
    return mod;
  } catch {
    return null;
  }
}
