import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "./Menu";
import { requiredProps } from "./requiredProps";

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = requiredProps;
