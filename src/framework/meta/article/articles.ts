import { orderBy } from "lodash";

import { ArticleMeta } from "./article-meta";

export function sortArticles(articles: readonly ArticleMeta[]) {
  return orderBy(articles, "date", "desc");
}
