import { ReactNode } from "react";

import { Article as ArticleModel } from "@/framework";

import { ArticleBody } from "./article-body";
import { ArticleHeader } from "./article-header";

export interface ArticleProps {
  readonly article: ArticleModel;
}

export function Article({ article }: ArticleProps) {
  return (
    <>
      <ArticleHeader article={article} />

      <ArticleBody article={article} />
    </>
  );
}
