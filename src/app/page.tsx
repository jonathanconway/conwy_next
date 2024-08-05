import { ArticlesList, FragmentsAboutMe, PageLayout } from "@/components";
import * as articles from "@/content/articles";
import * as micros from "@/content/micros";
import { sliceAllTopListItems } from "@/framework";

export default function Home() {
  const items = sliceAllTopListItems({
    itemSets: [articles, micros],
    limit: 10,
  });

  return (
    <PageLayout
      main={
        <>
          <ArticlesList items={items} />
          <FragmentsAboutMe />
        </>
      }
    />
  );
}
