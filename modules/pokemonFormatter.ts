import { CardPokemonProps, PokemonMove, PokemonType } from "../components";
import { capitalizeFirstLetterOfEachWord } from "../shared";
import {
  GetPokemonListResponse,
  CardPokemonItem,
  GetPokemonDetailResponse,
} from "./pokemonEntity";

const getPokemonImageSrc = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const pokemonListToCardPokemonList = (
  res: GetPokemonListResponse
): CardPokemonItem[] => {
  return res.pokemon_v2_pokemon.map((item) => {
    const name = capitalizeFirstLetterOfEachWord(item.name);

    return {
      id: item.id,
      title: name,
      image: {
        src: getPokemonImageSrc(item.id),
        alt: name,
      },
    };
  });
};

const pokemonMoveListToTagPokemonMoveList = (
  res: GetPokemonDetailResponse
): PokemonMove[] => {
  return res.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemonmoves.map((move) => ({
    id: move.move_id,
    name: move.pokemon_v2_move.name,
  }));
};

const pokemonTypeListToTagPokemonTypeList = (
  res: GetPokemonDetailResponse
): PokemonType[] => {
  return res.pokemon_v2_pokemon_by_pk.pokemon_v2_pokemontypes.map((type) => ({
    id: type.id,
    name: type.pokemon_v2_type.name,
  }));
};

export {
  getPokemonImageSrc,
  pokemonListToCardPokemonList,
  pokemonMoveListToTagPokemonMoveList,
  pokemonTypeListToTagPokemonTypeList,
};
