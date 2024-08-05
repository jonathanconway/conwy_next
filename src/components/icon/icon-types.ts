import { TypeOfConst } from "@/framework";

export const IconTypes = {
  Dev: "dev",
  Github: "github",
  LinkedIn: "linkedin",
  Mastodon: "mastodon",
  Medium: "medium",
  Quote: "quote",
  Substack: "substack",
  Twitter: "twitter",
  X: "x",
} as const;

export type IconType = TypeOfConst<typeof IconTypes>;
