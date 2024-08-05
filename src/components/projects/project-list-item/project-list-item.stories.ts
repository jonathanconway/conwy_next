import type { Meta, StoryObj } from "@storybook/react";

import { ProjectListItem } from "./project-list-item";
import { createProjectListItemPropsMock } from "./project-list-item.mocks";

const meta = {
  title: "components/projects/ProjectListItem",
  component: ProjectListItem,
  argTypes: {},
} satisfies Meta<typeof ProjectListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: createProjectListItemPropsMock(),
};
