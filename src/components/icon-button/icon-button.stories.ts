import type { Meta, StoryObj } from "@storybook/react";

import { IconTypes } from "../icon/icon-types";

import { IconButton } from "./icon-button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/IconButton",
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    icon: IconTypes.Dev,
  },
};
