import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomLink } from "./CustomLink";
import { requiredProps } from "./requiredProps";

export default {
  title: "CustomLink",
  component: CustomLink,
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
