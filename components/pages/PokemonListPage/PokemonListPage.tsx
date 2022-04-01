import styled from "@emotion/styled";
import { Headline, Spinner } from "@sumup/circuit-ui";
import { ReactNode } from "react";
import { useTheme } from "@emotion/react";

import { Title, Button, CustomLink, CardPokemon } from "../..";
import { Layout } from "../shared";
import { colors, mediaQueries } from "../../../shared";
import { CardPokemonItem } from "../../../modules";

type PokemonListPageProps = {
  pokemonList: CardPokemonItem[];
  myPokemonListCount: number;
  renderSearchInput?: () => ReactNode;
  renderPagination?: () => ReactNode;
  isLoading?: boolean;
  onClickRelease?: (itemId: number) => void;
  onClickDetail: (itemId: number) => void;
  variant: "home-page" | "my-pokemon-page";
};

const Hero = styled.section(
  {
    minHeight: "500px",
  },
  (props) => ({ padding: `${props.theme.spacings.giga} 0` })
);

const PokemonItemContainer = styled.section({
  "& > *:not(:last-child)": {
    marginBottom: "16px",
  },
  "@media (min-width: 400px)": {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px , 1fr))",
    gap: "16px",
  },
});

const LoadingContainer = styled.section({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PokemonListPage = (props: PokemonListPageProps) => {
  const theme = useTheme();

  const resolvedOnClickRelease = props.onClickRelease ?? ((_) => null);

  return (
    <Layout>
      {props.variant === "my-pokemon-page" && (
        <CustomLink href="/">
          <Button css={{ marginTop: theme.spacings.giga }}>
            Go to home page
          </Button>
        </CustomLink>
      )}
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
              color: colors.secondary,
            }}
          >
            Collect your favourite pokemon!
          </Title>

          <Headline as="h2" css={{ color: theme.colors.bodyBg }}>
            My owned pokemon: {props.myPokemonListCount}
          </Headline>
          <CustomLink href="/my-pokemon">
            <Button css={{ marginTop: theme.spacings.giga }}>
              See my pokemon
            </Button>
          </CustomLink>
        </Hero>
      )}

      {props.variant === "my-pokemon-page" && (
        <Headline
          css={{ marginTop: theme.spacings.giga, color: colors.secondary }}
          as="h2"
        >
          My owned pokemon: {props.myPokemonListCount}
        </Headline>
      )}

      {props.isLoading ? (
        <LoadingContainer>
          <Spinner css={{ color: theme.colors.white }} />
        </LoadingContainer>
      ) : (
        <>
          {props.renderSearchInput && (
            <div
              css={{
                marginTop:
                  props.variant === "my-pokemon-page" ? theme.spacings.giga : 0,
                marginBottom: theme.spacings.giga,
                position: "sticky",
                top: "80px",
                zIndex: 601,
              }}
            >
              {props.renderSearchInput()}
            </div>
          )}

          <PokemonItemContainer css={{ marginBottom: theme.spacings.giga }}>
            {props.pokemonList.map((item, index) => (
              <CardPokemon
                key={`${index}-${item.id}`}
                {...item}
                variant={
                  props.variant === "my-pokemon-page"
                    ? "with-release"
                    : "detail-only"
                }
                onClickRelease={() => resolvedOnClickRelease(item.id)}
                onClickDetail={() => props.onClickDetail(item.id)}
              />
            ))}
          </PokemonItemContainer>

          {props.variant === "home-page" &&
            props.renderPagination &&
            props.renderPagination()}
        </>
      )}
    </Layout>
  );
};

export type { PokemonListPageProps };
export { PokemonListPage };
