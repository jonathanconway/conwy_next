import { pipeline } from "@xenova/transformers";
import { lstatSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { JSDOM } from "jsdom";
import { chain } from "lodash";
import { marked } from "marked";

const articlesPath = `${__dirname}/../../content/articles`;

export async function buildArticleSummaries() {
  const articlesPathContents = readdirSync(articlesPath).slice(0, 3);
  const articlesPathFolders = articlesPathContents.filter((filename) =>
    lstatSync(`${articlesPath}/${filename}`).isDirectory(),
  );

  articlesPathFolders.forEach(buildArticleSummary);
}

function getMdIntro(md: string) {
  const root = marked.lexer(md);
  return chain(root)
    .takeWhile((token) => token.type !== "heading")
    .map((token) => token.raw)
    .join("\n")
    .value();
}

function convertMdxToMd(mdx: string) {
  mdx = mdx
    .split("\n")
    .filter((line) => !line.trim().startsWith("import "))
    .join("\n");

  mdx =
    new JSDOM(
      `<!DOCTYPE html>${mdx}`,
    ).window.document.body.textContent?.toString() ?? "";

  mdx = mdx.replace(new RegExp(/{(.*?)}/, "gs"), "");

  return mdx;
}

async function buildArticleSummary(articleFolderName: string) {
  const articlePath = `${articlesPath}/${articleFolderName}`;

  const md = convertMdxToMd(
    readFileSync(`${articlePath}/content.mdx`).toString(),
  );

  const mdIntro = getMdIntro(md);

  const summaryText = await summarizeArticleText(mdIntro);

  writeFileSync(`${articlePath}/summary.mdx`, summaryText);
}

async function summarizeArticleText(articleText: string) {
  const summarizationPipe = await pipeline(
    "summarization",
    "Xenova/bart-large-cnn",
  );

  const output = await summarizationPipe(articleText);

  const summaryText = (output[0] as any).summary_text as string;

  return summaryText;
}
