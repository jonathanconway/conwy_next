import { WorkMeta } from "@/framework";

export const meta: WorkMeta = {
  client: "Optus",
  blurbShort:
    "Built SubHub Agent frontend and parts of SubHub and Credit Offer backend.",
  startDate: "2023-09-20",
  endDate: "2024-03-22",
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
  images: [
    { imageUrl: "subhub-promo.png", notes: [] },
    { imageUrl: "agent-subhub-2.png", notes: [] },
    { imageUrl: "agent-subhub-1.svg", notes: [] },
    { imageUrl: "drawings.png", notes: [] },
  ],
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
