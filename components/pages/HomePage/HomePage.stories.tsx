import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "../../Pagination";
import { HomePage } from "./HomePage";
import { requiredProps } from "./requiredProps";

export default {
  title: "Pages / HomePage",
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...requiredProps,
  renderPagination: () => (
    <Pagination totalPages={10} onChange={(pageNum) => console.log(pageNum)} />
  ),
};

export const MyPokemonPage = Template.bind({});
MyPokemonPage.args = {
  ...requiredProps,
  variant: "my-pokemon-page",
};
