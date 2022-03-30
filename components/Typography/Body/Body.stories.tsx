import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Body } from "./Body";
import { requiredProps } from "./requiredProps";

export default {
  title: "Body",
  component: Body,
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = requiredProps;
