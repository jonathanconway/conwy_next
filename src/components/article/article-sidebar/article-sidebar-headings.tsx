"use client";

import { ArticleHeading } from "../article-headings";

import { useArticleSidebarHeadingsHighlighter } from "./article-sidebar-headings-highlighter.hook";
import * as styles from "./article-sidebar-headings.styles";

export interface ArticleSidebarProps {
  readonly articleHeadings: readonly ArticleHeading[];
}

export function ArticleSidebarHeadings({
  articleHeadings,
}: ArticleSidebarProps) {
  const { selectedHeadingId } =
    useArticleSidebarHeadingsHighlighter(articleHeadings);

  if (articleHeadings.length <= 1) {
    return null;
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>Contents</label>

      <ul className={styles.list}>
        {articleHeadings.map(({ id, title, shortTitle }) => (
          <li key={id} className={styles.listItem}>
            <a
              id={`${id}-article-link`}
              href={`#${id}`}
              className={styles.link(selectedHeadingId === id)}
              title={title}
            >
              {shortTitle ?? title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
