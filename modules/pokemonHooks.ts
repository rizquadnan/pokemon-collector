import { useQuery } from "@apollo/client";
import {
  GetPokemonDetailRequest,
  GetPokemonDetailResponse,
  GetPokemonListRequest,
  GetPokemonListResponse,
} from "./pokemonEntity";

import { GET_POKEMON_DETAIL, GET_POKEMON_LIST } from "./pokemonQuery";

const usePokemonList = (params: GetPokemonListRequest) => {
  return useQuery<GetPokemonListResponse>(GET_POKEMON_LIST, {
    variables: {
      limit: params.limit,
      offset: params.offset,
      searchValue: params.searchValue ?? "",
    },
  });
};

const usePokemonDetail = (params: GetPokemonDetailRequest) => {
  return useQuery<GetPokemonDetailResponse>(GET_POKEMON_DETAIL, {
    variables: {
      pokemonId: params.pokemonId,
    },
  });
};

export { GET_POKEMON_LIST, usePokemonList, usePokemonDetail };
