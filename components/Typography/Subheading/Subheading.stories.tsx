import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Subheading } from "./Subheading";
import { requiredProps } from "./requiredProps";

export default {
  title: "Subheading",
  component: Subheading,
} as ComponentMeta<typeof Subheading>;

const Template: ComponentStory<typeof Subheading> = (args) => (
  <Subheading {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
