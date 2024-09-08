import { Article as Article_ } from "@/framework/client";

import { Fragment } from "../../fragments";
import { ARTICLE_HEADING_INTRO } from "../article-heading-intro";

import * as styles from "./article-body.styles";

export interface ArticleBodyProps {
  readonly article: Article_;
}

export function ArticleBody({
  article: { content: Content },
}: ArticleBodyProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.topHeading} id={ARTICLE_HEADING_INTRO.id}>
        {ARTICLE_HEADING_INTRO.title}
      </h2>

      <Fragment>
        <Content />
      </Fragment>
    </div>
  );
}
