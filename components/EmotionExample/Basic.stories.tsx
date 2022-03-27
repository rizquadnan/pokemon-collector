import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Basic } from "./Basic";

export default {
  title: "Basic",
  component: Basic,
} as ComponentMeta<typeof Basic>;

const Template: ComponentStory<typeof Basic> = () => <Basic />;

export const Default = Template.bind({});
