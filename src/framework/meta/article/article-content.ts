import { MDXContent } from "mdx/types";

import { Article } from "./article";

export async function getArticleContent(article: Article): Promise<MDXContent> {
  return (await import(`@/content/articles/${article.meta.slug}/content.mdx`))
    .default;
}
