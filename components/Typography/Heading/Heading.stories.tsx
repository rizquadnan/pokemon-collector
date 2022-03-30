import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";
import { requiredProps } from "./requiredProps";

export default {
  title: "Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
