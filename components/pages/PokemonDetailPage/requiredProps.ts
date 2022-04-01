import { PokemonDetailPageProps, pokemonMoves } from "../..";
import { heroImageSrc, pokemonName, pokemonTypes } from "./mockData";

export const requiredProps: PokemonDetailPageProps = {
  heroImageAlt: pokemonName,
  heroImageSrc,
  pokemonMovesList: pokemonMoves,
  pokemonTypeList: pokemonTypes,
  onCatchPokemon: () => console.log("catch"),
};
