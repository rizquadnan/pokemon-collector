import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pagination, SearchInput } from "../..";
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
  renderSearchInput: () => (
    <SearchInput
      label="Search pokemon"
      placeholder="Search pokemon here"
      clearLabel="Clear"
      onChange={(e) => console.log(e.target.value)}
      onClear={() => console.log("")}
      onSearch={() => console.log("Search!")}
    />
  ),
};

export const MyPokemonPage = Template.bind({});
MyPokemonPage.args = {
  ...requiredProps,
  variant: "my-pokemon-page",
};
