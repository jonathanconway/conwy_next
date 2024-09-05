import { lstatSync, readdirSync, writeFileSync } from "fs";

import { ArticleMeta, sortArticleMetas } from "@/framework";
import { packageInfo } from "@/package-info";

function getArticleFolders() {
  const articlesPath = `${__dirname}/../../content/articles`;
  const articleDir = readdirSync(articlesPath);
  const articleFolders = articleDir.filter((articleDirItem) =>
    lstatSync(`${articlesPath}/${articleDirItem}`).isDirectory(),
  );
  return articleFolders;
}

async function getArticleMetas(
  articleFolders: readonly string[],
): Promise<readonly ArticleMeta[]> {
  return await Promise.all(
    articleFolders.map(
      async (articleFolder) =>
        (await import(`@/content/articles/${articleFolder}/meta`)).meta,
    ),
  );
}

export async function buildRssFeed() {
  const articleMetas = sortArticleMetas(
    await getArticleMetas(getArticleFolders()),
  );

  const filename = "feed.xml";

  const rss = `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${packageInfo.name}</title>
      <link>${packageInfo.homepage}</link>
      <description>${packageInfo.description}</description>
      <language>en</language>
      <lastBuildDate>${new Date(articleMetas[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://conwy.co/${filename}" rel="self" type="application/rss+xml"/>
      ${articleMetas
        .map(
          (articleMeta) =>
            `
        <item>
          <guid>${articleMeta.slug}</guid>
          <title>${articleMeta.title}</title>
          <link>https://conwy.co/articles/${articleMeta.slug}</link>
          <description>${articleMeta.blurb}</description>
          <pubDate>${new Date(articleMeta.date).toUTCString()}</pubDate>
        </item>
        `,
        )
        .join("")}
    </channel>
  </rss>`;

  writeFileSync(`${__dirname}/../../../public/feed.xml`, rss);
}
