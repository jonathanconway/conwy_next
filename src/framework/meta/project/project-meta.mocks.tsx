import { SocialLinkTypes } from "../social-link";

import { ProjectMeta } from "./project-meta";

export function createProjectMetaMock(): ProjectMeta {
  return {
    title: "tailwindjs",
    blurb: `Tailwind classes as Javascript functions for intellisense and type safety.`,
    date: "2024-05-02",
    slug: "tailwindjs",
    tags: ["software-development"],
    type: "project",
    subType: "library",
    socialLinks: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "http://github.com/jonathanconway/tailwindjs",
      },
    ],
  };
}
