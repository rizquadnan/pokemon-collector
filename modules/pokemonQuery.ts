import { gql } from "@apollo/client";

const GET_POKEMON_LIST = gql`
  query samplePokeAPIquery($limit: Int!, $offset: Int!, $searchValue: String) {
    pokemon_v2_pokemon(
      distinct_on: name
      limit: $limit
      offset: $offset
      order_by: { name: asc }
      where: { name: { _iregex: $searchValue } }
    ) {
      id
      name
    }
    pokemon_v2_pokemon_aggregate(distinct_on: name) {
      aggregate {
        count
      }
    }
  }
`;

export { GET_POKEMON_LIST };
