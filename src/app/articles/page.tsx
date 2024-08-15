import { ArticlesList, PageLayout, TagFilters } from "@/components";
import { site } from "@/content";
import * as articles from "@/content/articles";
import * as micros from "@/content/micros";
import { Post, pickAndCombineListItems } from "@/framework";

export default function Page() {
  const items = pickAndCombineListItems<Post>([articles, micros]);

  return (
    <PageLayout
      selectedNavPath="/articles"
      main={
        <>
          <TagFilters items={items} />
          <ArticlesList items={items} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - articles`,
};
