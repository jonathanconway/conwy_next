import { Article as Article_ } from "@/framework";

import { ArticleBody } from "./article-body";
import { ArticleHeader } from "./article-header";

export interface ArticleProps {
  readonly article: Article_;
}

export function Article({ article }: ArticleProps) {
  return (
    <>
      <ArticleHeader article={article} />

      <ArticleBody article={article} />
    </>
  );
}
