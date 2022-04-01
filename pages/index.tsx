import type { NextPage } from "next";
import Head from "next/head";
import { useAllPokemon } from "../modules";
import {
  PokemonListPage,
  Pagination,
  pokemonList,
  SearchInput,
} from "../components";
import { useState } from "react";

const Home: NextPage = () => {
  const allPokemon = useAllPokemon();
  console.log("allPokemon", allPokemon);

  const [searchValue, setSearchValue] = useState("");

  const renderSearchInput = () => {
    return (
      <SearchInput
        value={searchValue}
        label="Search pokemon"
        placeholder="Search pokemon here"
        clearLabel="Clear"
        onChange={(e) => setSearchValue(e.target.value)}
        onClear={() => setSearchValue("")}
        onSearch={() => console.log("Search!")}
      />
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        totalPages={10}
        onChange={(pageNum) => console.log(pageNum)}
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
        pokemonList={pokemonList}
        renderSearchInput={renderSearchInput}
        renderPagination={renderPagination}
        variant="home-page"
      />
    </>
  );
};

export default Home;
