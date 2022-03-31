/* eslint-disable jsx-a11y/alt-text */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image } from "./Image";
import { requiredProps } from "./requiredProps";

export default {
  title: "Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = requiredProps;

export const BrokenImage = Template.bind({});
BrokenImage.args = {
  ...requiredProps,
  src: "Invalid link",
};
