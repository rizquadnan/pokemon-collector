import type { NextPage } from "next";
import Head from "next/head";
import { pokemonListToCardPokemonList, usePokemonList } from "../modules";
import {
  PokemonListPage,
  Pagination,
  ITEM_PER_PAGE,
  SearchContainer,
} from "../components";
import { useState } from "react";
import { getPageOffset, getTotalPages } from "../shared";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const pokemonListQuery = usePokemonList({
    limit: ITEM_PER_PAGE,
    offset: getPageOffset(currentPage, ITEM_PER_PAGE),
    searchValue,
  });
  const pokemonList = pokemonListQuery.data?.pokemon_v2_pokemon
    ? pokemonListToCardPokemonList(pokemonListQuery.data)
    : [];
  const isLoading = pokemonListQuery.loading;
  const totalItems =
    pokemonListQuery.data?.pokemon_v2_pokemon_aggregate.aggregate.count ?? 0;

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  const handleClickDetail = (itemId: number) => {
    router.push(`/pokemon/${itemId}`);
  };

  const renderSearchInput = () => {
    return <SearchContainer onSearch={handleSearch} />;
  };

  const renderPagination = () => {
    return (
      <Pagination
        currentPage={currentPage}
        totalPages={getTotalPages(totalItems, ITEM_PER_PAGE)}
        onChange={(pageNum) => setCurrentPage(pageNum)}
      />
    );
  };

  return (
    <>
      <Head>
        <title>Pokemon Collector</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PokemonListPage
        myPokemonListCount={0}
        isLoading={isLoading}
        pokemonList={pokemonList}
        renderSearchInput={renderSearchInput}
        renderPagination={renderPagination}
        variant="home-page"
        onClickDetail={handleClickDetail}
      />
    </>
  );
};

export default Home;
