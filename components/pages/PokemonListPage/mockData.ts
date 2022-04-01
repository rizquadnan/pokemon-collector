import { CardPokemonProps } from "../../CardPokemon";
import { ITEM_PER_PAGE } from "./constants";

const pokemonList: CardPokemonProps[] = Array(ITEM_PER_PAGE).fill({
  image: {
    alt: "Charmander",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  title: "Charmander",
  onClickDetail: () => console.log("Click detail!"),
  onClickRelease: undefined,
  variant: "detail-only",
});

export { pokemonList };
