import { useQuery } from "@apollo/client";
import { GetPokemonListRequest, GetPokemonListResponse } from "./pokemonEntity";

import { GET_POKEMON_LIST } from "./pokemonQuery";

const usePokemonList = (params: GetPokemonListRequest) => {
  return useQuery<GetPokemonListResponse>(GET_POKEMON_LIST, {
    variables: { limit: params.limit, offset: params.offset },
  });
};

export { GET_POKEMON_LIST, usePokemonList };
