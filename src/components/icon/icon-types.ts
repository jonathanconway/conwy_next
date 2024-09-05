import { TypeOfConst } from "@/framework";

export const IconTypes = {
  ArrowChevronLeft: "arrow-chevron-left",
  ArrowChevronRight: "arrow-chevron-right",
  ArrowTriangleLeft: "arrow-triangle-left",
  ArrowTriangleRight: "arrow-triangle-right",
  Close: "close",
  CheckBox: "check-box",
  Dev: "dev",
  Email: "email",
  Github: "github",
  LinkedIn: "linkedin",
  Mastodon: "mastodon",
  Medium: "medium",
  OpenInNew: "open-in-new",
  ProductHunt: "product-hunt",
  Quote: "quote",
  Substack: "substack",
  Telegram: "telegram",
  Twitter: "twitter",
  Website: "website",
  X: "x",
} as const;

export type IconType = TypeOfConst<typeof IconTypes>;
