import { PostMetaBase } from "../post/post-meta-base";

export interface ProjectMeta extends PostMetaBase {
  readonly title: string;
  readonly type: "project";
  readonly redirectUrl?: string;
  readonly subType: "library" | "standard" | "tool";
}
