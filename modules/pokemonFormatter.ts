import { CardPokemonProps } from "../components";
import { capitalizeFirstLetterOfEachWord } from "../shared";
import { GetPokemonListResponse, CardPokemonItem } from "./pokemonEntity";

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

export { pokemonListToCardPokemonList };
