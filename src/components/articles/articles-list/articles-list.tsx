"use client";

import { Post, getAreSomeSame, getItemsTags } from "@/framework/client";

import { ArticleListItem, ArticleListItemProps } from "../article-list-item";
import { MicroListItem } from "../micro-list-item";
import { ALL } from "../tag-filters";
import { useTagFiltersSwitch } from "../tag-filters/use-tag-filters-switch.hook";

import * as styles from "./articles-list.styles";

export interface ArticlesListProps {
  readonly items: readonly Post[];
}

export function ArticlesList({ items }: ArticlesListProps) {
  const allTags = getItemsTags(items);

  const { selectedTags } = useTagFiltersSwitch(allTags);

  const filteredItems = selectedTags.includes(ALL)
    ? items
    : items.filter((item) => getAreSomeSame(item.meta.tags, selectedTags));

  return (
    <div className={styles.container()}>
      {filteredItems
        .map((item) => {
          switch (item.meta.type) {
            case "article":
              return (
                <ArticleListItem
                  key={item.meta.slug}
                  {...(item.meta as ArticleListItemProps)}
                />
              );
            case "micro":
              return <MicroListItem key={item.meta.slug} {...item.meta} />;
            default:
              null;
          }
        })
        .filter(Boolean)}
    </div>
  );
}
