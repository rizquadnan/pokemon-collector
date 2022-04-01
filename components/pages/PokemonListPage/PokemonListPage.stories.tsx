import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination } from "../../Pagination";
import { PokemonListPage } from "./PokemonListPage";
import { requiredProps } from "./requiredProps";

export default {
  title: "Pages / PokemonListPage",
  component: PokemonListPage,
} as ComponentMeta<typeof PokemonListPage>;

const Template: ComponentStory<typeof PokemonListPage> = (args) => (
  <PokemonListPage {...args} />
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
