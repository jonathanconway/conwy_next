import { cn } from "@jonathanconway/tailwindjs";

import { Article as Article_ } from "@/framework";

import { ARTICLE_HEADING_INTRO } from "../article-heading-intro";

import moduleStyles from "./article-body.module.css";
import * as styles from "./article-body.styles";

export interface ArticleBodyProps {
  readonly article: Article_;
}

export function ArticleBody({
  article: { content: Content },
}: ArticleBodyProps) {
  return (
    <div className={cn(styles.container, moduleStyles.articleBody)}>
      <h2 className={styles.topHeading} id={ARTICLE_HEADING_INTRO.id}>
        {ARTICLE_HEADING_INTRO.title}
      </h2>

      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
}
