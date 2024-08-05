import { Article } from "@/framework";

import { getArticleHeadings } from "../article-headings";

import { ArticleSidebarHeadings } from "./article-sidebar-headings";
import { ArticleSidebarImage } from "./article-sidebar-image";
import * as styles from "./article-sidebar.styles";

export interface ArticleSidebarProps {
  readonly article: Article;
}

export async function ArticleSidebar({ article }: ArticleSidebarProps) {
  const articleHeadings = getArticleHeadings(article);

  return (
    <div className={styles.container()}>
      <ArticleSidebarHeadings articleHeadings={articleHeadings} />

      <ArticleSidebarImage meta={article.meta} />
    </div>
  );
}
