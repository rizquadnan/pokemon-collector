import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Navbar } from "./Navbar";
import { requiredProps } from "./requiredProps";

export default {
  title: "Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = requiredProps;
