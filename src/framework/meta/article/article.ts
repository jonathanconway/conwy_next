import { MDXContent } from "mdx/types";

import { Post } from "../post";

import { ArticleMeta } from "./article-meta";

export interface Article extends Post<ArticleMeta> {
  readonly content: MDXContent;
}
