import { TypeOfConst } from "@/framework";

export const IconTypes = {
  ArrowChevronLeft: "arrow-chevron-left",
  ArrowChevronRight: "arrow-chevron-right",
  ArrowTriangleLeft: "arrow-triangle-left",
  ArrowTriangleRight: "arrow-triangle-right",
  Close: "close",
  Dev: "dev",
  Email: "email",
  Github: "github",
  LinkedIn: "linkedin",
  Mastodon: "mastodon",
  Medium: "medium",
  Quote: "quote",
  Substack: "substack",
  Telegram: "telegram",
  Twitter: "twitter",
  X: "x",
} as const;

export type IconType = TypeOfConst<typeof IconTypes>;
