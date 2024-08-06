import { ProjectMeta, SocialLinkTypes } from "@/framework";

export const testmatic: ProjectMeta = {
  title: "testmatic",
  blurb: "Rapid-entry test case management system.",
  date: "2024-05-01",
  slug: "testmatic",
  tags: ["software-development"],
  type: "project",
  subType: "tool",
  socialLinks: [
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
};
