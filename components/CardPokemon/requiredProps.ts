import { CardPokemonProps } from "./CardPokemon";

export const requiredProps: CardPokemonProps = {
  image: {
    alt: "Charmander",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  title: "Charmander",
  onClickDetail: () => console.log("Click detail!"),
  onClickRelease: undefined,
  variant: "detail-only",
};
