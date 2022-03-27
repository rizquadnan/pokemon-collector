import type { NextPage } from "next";
import Head from "next/head";
import { useAllPokemon } from "../modules";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Body, Headline } from "@sumup/circuit-ui";
import { Button } from "../components/Button/Button";

const Price = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.headline.one};
    font-weight: bold;
  `
);

const Home: NextPage = () => {
  const allPokemon = useAllPokemon();

  console.log("allPokemon", allPokemon);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Headline as="h1" size="four">
          My product
        </Headline>
        <Price>9,99 €</Price>
        <Body>A description of my product.</Body>
        <Button>Click me</Button>
      </section>
    </div>
  );
};

export default Home;
