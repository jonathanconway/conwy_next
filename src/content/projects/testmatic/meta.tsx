import { ProjectMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ProjectMeta = {
  title: "testmatic",
  blurb: "Rapid-entry test case management system.",
  date: "2024-05-01",
  slug: "testmatic",
  tags: ["software-development"],
  type: "project",
  subType: "tool",
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://testmatic-docs.surge.sh/",
    },
    {
      type: SocialLinkTypes.Twitter,
      url: "http://twitter.com/testmaticapp",
    },
    {
      type: SocialLinkTypes.Github,
      url: "http://github.com/jonathanconway/testmatic",
    },
  ],
  mainImage: "main.svg",
  redirectUrl: "testmatic",
  techs: [
    {
      categoryName: "typescript",
      items: [],
    },
    {
      categoryName: "nodejs",
      items: [],
    },
    {
      categoryName: "react",
      items: [],
    },
  ],
  platforms: ["Web", "CLI"],
  images: [],
};
