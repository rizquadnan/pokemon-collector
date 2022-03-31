import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonIcon } from "./ButtonIcon";
import { requiredProps } from "./requiredProps";

export default {
  title: "ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const Template: ComponentStory<typeof ButtonIcon> = (args) => (
  <ButtonIcon {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
