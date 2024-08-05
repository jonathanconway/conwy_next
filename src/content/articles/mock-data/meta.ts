import { ArticleMeta, SocialLinkTypes } from "@/framework";

import content from "./content.mdx";

export const meta: ArticleMeta = {
  title: "Uses of mock data",
  blurb:
    "Recent experiments with mock data reveal a surprisingly versatile tool that can boost developer productivity and enjoyment",
  date: "2021-09-28",
  slug: "mock-data",
  type: "article",
  tags: ["software-development"],
  socialLinks: [
    {
      type: SocialLinkTypes.Dev,
      url: "https://dev.to/conw_y/the-many-uses-of-mock-data-4fi2",
    },
  ],
};
