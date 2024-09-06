import { ProjectMeta } from "@/framework";

export const meta: ProjectMeta = {
  title: "braggart",
  blurb: "Track your work metrics effortlessly",
  date: "2024-03-01",
  slug: "braggart",
  tags: [],
  type: "project",
  subType: "tool",
  socialLinks: [
    {
      type: "github",
      url: "https://github.com/jonathanconway/braggart",
    },
  ],
  mainImage: "main.svg",
  redirectUrl: "braggart",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "chakra-ui",
        },
        {
          itemName: "react-hook-form",
        },
        {
          itemName: "vite",
        },
      ],
    },
  ],
  platforms: ["Web"],
  images: [
    {
      imageUrl: "braggart-1.png",
      notes: [],
    },
    {
      imageUrl: "braggart-2.png",
      notes: [],
    },
  ],
};
