import { CardPokemonProps } from "../components";

type GetPokemonListRequest = {
  limit: number;
  offset: number;
  searchValue?: string;
};

type PokemonListItem = {
  id: number;
  name: string;
};

type GetPokemonListResponse = {
  pokemon_v2_pokemon: PokemonListItem[];
  pokemon_v2_pokemon_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

type WithId = {
  id: number;
};

type CardPokemonItem = Omit<CardPokemonProps, "onClickDetail"> & WithId;

type GetPokemonDetailRequest = {
  pokemonId: number;
};

type PokemonType = {
  pokemon_v2_type: {
    name: string;
  };
  id: number;
};

type PokemonMove = {
  pokemon_v2_move: {
    name: string;
  };
  move_id: number;
};

type GetPokemonDetailResponse = {
  pokemon_v2_pokemon_by_pk: {
    name: string;
    id: number;
    pokemon_v2_pokemontypes: PokemonType[];
    pokemon_v2_pokemonmoves: PokemonMove[];
  };
};

export type {
  GetPokemonListRequest,
  GetPokemonListResponse,
  CardPokemonItem,
  GetPokemonDetailRequest,
  GetPokemonDetailResponse,
};
