import { PokemonListPageProps } from "./PokemonListPage";
import { pokemonList } from "./mockData";

export const requiredProps: PokemonListPageProps = {
  pokemonList: pokemonList,
  myPokemonListCount: 0,
  variant: "home-page",
  onClickDetail: (itemId) => console.log(itemId),
};
