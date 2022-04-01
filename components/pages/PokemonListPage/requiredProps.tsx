import { SearchInput } from "../..";
import { PokemonListPageProps } from "./PokemonListPage";
import { pokemonList } from "./mockData";

export const requiredProps: PokemonListPageProps = {
  pokemonList: pokemonList,
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
  variant: "home-page",
};
