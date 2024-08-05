import { createArticleMetaMock } from "@/framework";

import { ArticleSidebarProps } from "./article-sidebar";

export function createArticleSidebarPropsMock(): ArticleSidebarProps {
  return {
    article: {
      content: () => <></>,
      meta: createArticleMetaMock(),
    },
  };
}
