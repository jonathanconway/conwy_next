import { orderBy } from "lodash";

import { Article } from "./article";
import { ArticleMeta } from "./article-meta";

export function sortArticleMetas(articles: readonly ArticleMeta[]) {
  return orderBy(articles, "date", "desc");
}

export function sortArticles(articles: readonly Article[]) {
  return orderBy(articles, "meta.date", "desc");
}

export function getArticleMetas(articles: Record<string, Article>) {
  return sortArticleMetas(
    Object.values(articles).map((article) => article.meta),
  );
}

export function getArticles(articles: Record<string, Article>) {
  return sortArticles(Object.values(articles));
}
