import { Article } from "@/framework";

import { ARTICLE_HEADING_INTRO } from "../article-heading-intro";

import * as styles from "./article-body.styles";

export interface ArticleBodyProps {
  readonly article: Article;
}

export function ArticleBody({
  article: { content: Content },
}: ArticleBodyProps) {
  return (
    <div>
      <h2 className={styles.topHeading} id={ARTICLE_HEADING_INTRO.id}>
        {ARTICLE_HEADING_INTRO.title}
      </h2>

      <Content />
    </div>
  );
}
