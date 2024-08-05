import { ArticleMeta } from "..";

export type ArticleListItem = Pick<
  ArticleMeta,
  | "title"
  | "date"
  | "slug"
  | "tags"
  | "socialLinks"
  | "type"
  | "blurb"
  | "shortBlurb"
>;
