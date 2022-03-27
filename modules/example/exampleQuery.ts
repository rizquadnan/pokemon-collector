import { gql } from "@apollo/client";

const GET_ALL_POKEMON_QUERY = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemon {
      name
      id
    }
  }
`;

export { GET_ALL_POKEMON_QUERY };
