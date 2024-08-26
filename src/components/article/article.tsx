import { Article as Article_ } from "@/framework";

import { ArticleBody } from "./article-body";
import { ArticleHeader } from "./article-header";
import { ArticleSummary } from "./article-summary";

export interface ArticleProps {
  readonly article: Article_;
}

export function Article({ article }: ArticleProps) {
  return (
    <>
      <ArticleHeader article={article} />

      <ArticleSummary article={article} />

      <ArticleBody article={article} />
    </>
  );
}
