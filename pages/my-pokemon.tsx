import type { NextPage } from "next";
import Head from "next/head";
import { useAllPokemon } from "../modules";
import { HomePage, Pagination, pokemonList, SearchInput } from "../components";
import { useState } from "react";

const Home: NextPage = () => {
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

  return (
    <>
      <Head>
        <title>My Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage
        pokemonList={pokemonList}
        renderSearchInput={renderSearchInput}
        variant="my-pokemon-page"
      />
    </>
  );
};

export default Home;
