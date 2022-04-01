import styled from "@emotion/styled";
import { Headline } from "@sumup/circuit-ui";
import { ReactNode } from "react";
import { useTheme } from "@emotion/react";

import { Title } from "../..";
import { CardPokemon, CardPokemonProps } from "../../CardPokemon";
import { Layout } from "../shared";
import { mediaQueries } from "../../../shared";

type PokemonListPageProps = {
  pokemonList: CardPokemonProps[];
  renderSearchInput: () => ReactNode;
  renderPagination?: () => ReactNode;
  variant: "home-page" | "my-pokemon-page";
};

const Hero = styled.section(
  {
    height: "30vh",
    [mediaQueries[0]]: {
      height: "40vh",
    },
  },
  (props) => ({ paddingTop: props.theme.spacings.giga })
);

const PokemonItemContainer = styled.section({
  "@media (min-width: 400px)": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px , 1fr))",
    gap: "16px",
  },
});

const PokemonListPage = (props: PokemonListPageProps) => {
  const theme = useTheme();

  return (
    <Layout>
      {props.variant === "home-page" && (
        <Hero>
          <Title
            as="h1"
            css={{
              fontSize: "64px",
              lineHeight: "64px",
              [mediaQueries[0]]: {
                fontSize: "92px",
                lineHeight: "92px",
              },
              [mediaQueries[1]]: {
                fontSize: "110px",
                lineHeight: "110px",
              },
              marginBottom: theme.spacings.giga,
            }}
          >
            Collect your favourite pokemon!
          </Title>

          <Headline as="h2">My owned pokemon: 0</Headline>
        </Hero>
      )}

      {props.variant === "my-pokemon-page" && (
        <Headline css={{ marginTop: theme.spacings.giga }} as="h2">
          My owned pokemon: 0
        </Headline>
      )}
      <div
        css={{
          marginTop:
            props.variant === "my-pokemon-page" ? theme.spacings.giga : 0,
          marginBottom: theme.spacings.giga,
        }}
      >
        {props.renderSearchInput()}
      </div>

      <PokemonItemContainer css={{ marginBottom: theme.spacings.giga }}>
        {props.pokemonList.map((item, index) => (
          <CardPokemon
            key={`${index}-${item.title}`}
            {...item}
            variant={
              props.variant === "my-pokemon-page"
                ? "with-release"
                : "detail-only"
            }
            onClickRelease={() => null}
          />
        ))}
      </PokemonItemContainer>

      {props.variant === "home-page" &&
        props.renderPagination &&
        props.renderPagination()}
    </Layout>
  );
};

export type { PokemonListPageProps };
export { PokemonListPage };
