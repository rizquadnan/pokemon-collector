import type { NextPage } from "next";
import Head from "next/head";
import { PokemonListPage, pokemonList } from "../components";
import { CardPokemonItem, MY_POKEMON_LIST_STORAGE_KEY } from "../modules";
import { useLocalStorage } from "../shared";

const Home: NextPage = () => {
  const { value: myPokemonList } = useLocalStorage<CardPokemonItem[]>(
    MY_POKEMON_LIST_STORAGE_KEY,
    []
  );

  return (
    <>
      <Head>
        <title>My Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PokemonListPage
        pokemonList={myPokemonList}
        myPokemonListCount={myPokemonList.length}
        variant="my-pokemon-page"
        onClickDetail={(itemId) => console.log(itemId)}
      />
    </>
  );
};

export default Home;
