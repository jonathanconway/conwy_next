import { pipeline } from "@xenova/transformers";
import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";

function convertMdxToText(mdx: string) {
  mdx = mdx
    .split("\n")
    .filter((line) => !line.trim().startsWith("import "))
    .join("\n");

  mdx =
    new JSDOM(
      `<!DOCTYPE html>${mdx}`,
    ).window.document.body.textContent?.toString() ?? "";

  mdx = mdx.replace(/{(.*?)}/gs, "");

  return mdx;
}

async function summarizeArticleText(articleText: string) {
  const summarizationPipe = await pipeline("summarization");

  const output = await summarizationPipe(articleText);

  const summaryText = (output[0] as any).summary_text as string;

  return summaryText;
}

const articlesPath = `${__dirname}/../../content/articles`;

export async function buildArticleSummaries() {
  const articlesPathContents = readdirSync(articlesPath);
  const articlesPathFolders = articlesPathContents.filter((filename) =>
    lstatSync(`${articlesPath}/${filename}`).isDirectory(),
  );

  articlesPathFolders.forEach(buildArticleSummary);
}

async function buildArticleSummary(articleFolderName: string) {
  const articlePath = `${articlesPath}/${articleFolderName}`;

  // const { meta } = await import(`${articlePath}/meta.ts`);
  const mdx = convertMdxToText(
    readFileSync(`${articlePath}/content.mdx`).toString(),
  );

  const summaryText = await summarizeArticleText(mdx);

  writeFileSync(`${articlePath}/summary.mdx`, summaryText);
}

buildArticleSummaries();
