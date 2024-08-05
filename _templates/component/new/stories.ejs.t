---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { create<%= h.changeCase.pascalCase(name) %>PropsMock } from './<%= name %>.mocks';
import { <%= h.changeCase.pascalCase(name) %> } from "./<%= name %>";

export default {
  title: "Components/<%= h.changeCase.pascalCase(name) %>",
  component: <%= h.changeCase.pascalCase(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args) => (
  <<%= h.changeCase.pascalCase(name) %> {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...create<%= h.changeCase.pascalCase(name) %>PropsMock(),
};
