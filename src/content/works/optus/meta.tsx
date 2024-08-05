import { WorkMeta } from "@/framework";

import blurbShort from "./blurb-short.mdx";

export const optus: WorkMeta = {
  client: "Optus",
  blurbShort,
  startDate: "22/03/2024",
  endDate: "20/09/2023",
  jobTitle: "Senior Backend Engineer",
  feedbacks: [
    {
      quote:
        "Positive feedback from Lead and Senior Developers on my\n full-stack work and problem-solving at late hours.",
    },
  ],
  slug: "optus",
  tags: [],
  type: "work",
  techs: [
    {
      categoryName: "react",
      items: [
        {
          itemName: "swr",
        },
        {
          itemName: "jotai",
        },
        {
          itemName: "tailwind",
        },
      ],
    },
    {
      categoryName: "aws",
      items: [
        {
          itemName: "lambda",
        },
        {
          itemName: "cognito",
        },
        {
          itemName: "dynamo-db",
        },
        {
          itemName: "sns",
        },
      ],
    },
    {
      categoryName: "nextjs",
      items: [],
    },
  ],
};
