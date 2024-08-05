import { TypeOfConst } from "../utils";

export const SocialLinkTypes = {
  Dev: "dev",
  Github: "github",
  LinkedIn: "linkedin",
  Mastodon: "mastodon",
  Medium: "medium",
  Substack: "substack",
  Twitter: "twitter",
  X: "x",
} as const;

export type SocialLinkType = TypeOfConst<typeof SocialLinkTypes>;

export interface SocialLink {
  readonly type: SocialLinkType;
  readonly url: string;
}
