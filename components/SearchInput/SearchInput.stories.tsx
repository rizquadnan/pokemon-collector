import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchInput } from "./SearchInput";
import { requiredProps } from "./requiredProps";

export default {
  title: "SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
