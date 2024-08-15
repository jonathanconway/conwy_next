import { MDXContent } from "mdx/types";

import { ArticleMeta } from "./article";

export async function getArticleContent(
  article: ArticleMeta,
): Promise<MDXContent> {
  return (await import(`@/content/articles/${article.meta.slug}/content.mdx`))
    .default;
}
