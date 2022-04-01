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

const GET_POKEMON_DETAIL = gql`
  query samplePokeAPIquery($pokemonId: Int!) {
    pokemon_v2_pokemon_by_pk(id: $pokemonId) {
      name
      id
      pokemon_v2_pokemontypes(distinct_on: type_id) {
        pokemon_v2_type {
          name
        }
        id
      }
      pokemon_v2_pokemonmoves(distinct_on: move_id) {
        pokemon_v2_move {
          name
        }
        move_id
      }
    }
  }
`;

export { GET_POKEMON_LIST, GET_POKEMON_DETAIL };
