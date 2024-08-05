import { Article, ArticleLayout, ArticleSidebar } from "@/components";
import * as articles from "@/content/articles";
import { Article as ArticleModel } from "@/framework";

interface PageProps {
  readonly params: { readonly slug: string };
}

export default async function Page({ params: { slug } }: PageProps) {
  const articleModule = await import(`@/content/articles/${slug}`);
  const article = Object.values(articleModule)[0] as ArticleModel;

  return (
    <ArticleLayout
      main={<Article article={article} />}
      aside={<ArticleSidebar article={article} />}
    />
  );
}

export async function generateStaticParams() {
  const allArticleMetas = Object.values(articles).map((item) => item.meta);
  return allArticleMetas;
}
