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

export type { GetPokemonListRequest, GetPokemonListResponse, CardPokemonItem };
