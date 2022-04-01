import { CardPokemonItem } from "../../../modules";
import { CardPokemonProps } from "../../CardPokemon";
import { ITEM_PER_PAGE } from "./constants";

const pokemonList: CardPokemonItem[] = Array(ITEM_PER_PAGE).fill({
  image: {
    alt: "Charmander",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  title: "Charmander",
  id: 0,
  onClickRelease: undefined,
  variant: "detail-only",
});

export { pokemonList };
