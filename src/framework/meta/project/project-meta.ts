import { PostMetaBase } from "../post/post-meta-base";

export interface ProjectMeta extends PostMetaBase {
  readonly title: string;
  readonly type: "project";
  readonly redirectUrl?: string;
  readonly subType: "library" | "standard" | "tool";
  readonly techs: readonly ProjectTech[];
  readonly platforms: readonly ProjectPlatform[];
}

export interface ProjectTech {
  readonly categoryName: string;
  readonly items: readonly {
    readonly itemName: string;
  }[];
}

export type ProjectPlatform = string;
