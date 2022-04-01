import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Spinner } from "@sumup/circuit-ui";
import { Image, Body, Button } from "..";

type CardPokemonProps = {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  onClickDetail: () => void;
  variant?: "detail-only" | "with-release";
  onClickRelease?: () => void;
  isLoading?: boolean;
};

type ContainerProps = {
  isLoading?: boolean;
};

const Container = styled.article<ContainerProps>((props) => ({
  display: "flex",
  justifyContent: props.isLoading ? "center" : "flex-start",
  alignItems: "center",
  padding: "0 20px",
  height: "140px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  borderRadius: "24px",
  "& > *:first-child": {
    marginRight: "auto",
  },
}));

const VerticalContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "165px",
});

const ButtonContainer = styled.footer({
  display: "flex",
  justifyContent: "space-between",
  "& > *:first-of-type": {
    marginRight: "16px",
  },
});

const titleStyles = css({
  fontWeight: "bolder",
  fontSize: "20px",
});

const Content = ({
  variant = "detail-only",
  ...props
}: Omit<CardPokemonProps, "isLoading">) => {
  const hasReleaseButton = variant === "with-release" && props.onClickRelease;

  return (
    <>
      <div>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          width={120}
          height={120}
        />
      </div>
      <VerticalContainer>
        <Body css={titleStyles}>{props.title}</Body>
        <ButtonContainer>
          {hasReleaseButton && (
            <Button onClick={props.onClickRelease} variant="secondary">
              Release
            </Button>
          )}
          <Button onClick={props.onClickDetail}>Detail</Button>
        </ButtonContainer>
      </VerticalContainer>
    </>
  );
};

const CardPokemon = ({ isLoading = false, ...props }: CardPokemonProps) => {
  return (
    <Container isLoading={isLoading}>
      {/* TODO: create wrapper for spinner */}
      {isLoading ? <Spinner /> : <Content {...props} />}
    </Container>
  );
};

export type { CardPokemonProps };
export { CardPokemon };
