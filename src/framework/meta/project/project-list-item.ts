import { ProjectMeta } from "..";

export type ProjectListItem = Pick<
  ProjectMeta,
  | "title"
  | "date"
  | "slug"
  | "tags"
  | "socialLinks"
  | "type"
  | "subType"
  | "blurb"
  | "mainImage"
>;
