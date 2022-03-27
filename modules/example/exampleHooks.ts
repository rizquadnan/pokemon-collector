import { useQuery } from "@apollo/client";

import { GET_ALL_POKEMON_QUERY } from "./exampleQuery";

const useAllPokemon = () => {
  return useQuery(GET_ALL_POKEMON_QUERY);
};

export { GET_ALL_POKEMON_QUERY, useAllPokemon };
