import { ArticleMeta, SocialLinkTypes } from "@/framework/client";

export const meta: ArticleMeta = {
  title: "What I learned studying Calculus",
  blurb: "Reflections on studying a subject outside my comfort zone.",
  shortBlurb: "Reflections on studying a subject outside my comfort zone.",
  date: "2024-07-02",
  slug: "studying-calculus",
  type: "article",
  tags: ["learning"],
  socialLinks: [
    {
      type: SocialLinkTypes.Website,
      url: "https://www.coursera.org/learn/introduction-to-calculus",
      title: "Link to course on Coursera",
    },
  ],
};
