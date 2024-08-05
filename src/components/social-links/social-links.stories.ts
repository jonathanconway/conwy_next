import type { Meta, StoryObj } from "@storybook/react";

import { SocialLinks } from "./social-links";
import { createSocialLinksPropsMock } from "./social-links.mocks";

const meta = {
  title: "Components/Articles/ArticleListItem/SocialLinks",
  component: SocialLinks,
  argTypes: {},
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createSocialLinksPropsMock(),
};
