import { PostMetaBase } from "../post/post-meta-base";

export interface ArticleMeta extends PostMetaBase {
  readonly title: string;
  readonly type: "article";
}
