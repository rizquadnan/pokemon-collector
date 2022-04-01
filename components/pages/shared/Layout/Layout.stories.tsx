import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { requiredProps } from "./requiredProps";

export default {
  title: "Pages / Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = requiredProps;
