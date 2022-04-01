// TODO: find way to enable emotion css props in storybook
// without jsx pragma below
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

import styled from "@emotion/styled";
import { Headline, useModal } from "@sumup/circuit-ui";
import { useTheme } from "@emotion/react";

import { Image, Tag, Title } from "../..";
import { Layout } from "../shared";
import { mediaQueries } from "../../../shared";
import { Button } from "../../Button";

type PokemonMove = {
  id: number | string;
  name: string;
};

type PokemonType = {
  id: number | string;
  name: string;
};

type PokemonDetailPageProps = {
  heroImageSrc: string;
  heroImageAlt: string;
  pokemonTypeList: PokemonType[];
  pokemonMovesList: PokemonMove[];
  onCatchPokemon: () => void;
};

const Hero = styled.section(
  {
    textAlign: "center",
  },
  (props) => ({ paddingTop: props.theme.spacings.giga })
);

const PokemonInfoListContainer = styled.ul(
  {
    display: "inline-flex",
    flexWrap: "wrap",
  },
  (props) => ({
    "& > *:not(:last-child)": {
      marginRight: props.theme.spacings.byte,
    },
  })
);

const CatchButtonContainer = styled.section((props) => ({
  position: "fixed",
  zIndex: "2",
  bottom: props.theme.spacings.giga,
  left: props.theme.spacings.mega,
  right: props.theme.spacings.mega,
}));

const PokemonDetailPage = (props: PokemonDetailPageProps) => {
  const theme = useTheme();

  return (
    <Layout>
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
          Charmander
        </Title>
        <Image
          src={props.heroImageSrc}
          alt={props.heroImageAlt}
          width="300px"
          height="300px"
        />
      </Hero>

      <section css={{ marginBottom: theme.spacings.giga }}>
        <Headline as="h2">Pokemon Type</Headline>
        <PokemonInfoListContainer>
          {props.pokemonTypeList.map((type, index) => (
            <Tag key={`${index}=${type.id}`}>{type.name}</Tag>
          ))}
        </PokemonInfoListContainer>
      </section>

      <section css={{ paddingBottom: theme.spacings.exa }}>
        <Headline as="h2">MoveList</Headline>
        <PokemonInfoListContainer>
          {props.pokemonMovesList.map((move, index) => (
            <Tag key={`${index}=${move.id}`}>{move.name}</Tag>
          ))}
        </PokemonInfoListContainer>
      </section>

      <CatchButtonContainer>
        <Button css={{ width: "100%" }} onClick={props.onCatchPokemon}>
          Catch this Pokemon
        </Button>
      </CatchButtonContainer>
    </Layout>
  );
};

export type { PokemonDetailPageProps, PokemonMove, PokemonType };
export { PokemonDetailPage };
