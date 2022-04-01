import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useModal } from "@sumup/circuit-ui";
import { Theme } from "@sumup/design-tokens";
import { ReactNode } from "react";
import { APPLICATION_MAX_WIDTH, NAVBAR_HEIGHT } from "../../shared";
import { Menu } from "../Menu";
import { Navbar } from "../Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Container = styled.main({
  maxWidth: APPLICATION_MAX_WIDTH,
  margin: "0 auto",
  padding: `${NAVBAR_HEIGHT} 20px 40px 20px`,
});

const NavbarContainer = () => {
  const { setModal } = useModal();
  const handleClick = () => {
    setModal({
      children: (
        <Menu
          onClickHome={() => console.log("home")}
          onClickMyPokemon={() => console.log("pokemon")}
        />
      ),
      variant: "immersive",
      closeButtonLabel: "Close modal",
      css: (_: Theme) =>
        css({
          height: "100vh",
          width: "100vw",
          maxWidth: "100vw !important",
          maxHeight: "100vh !important",
        }),
    });
  };

  return (
    <div css={{ position: "fixed", top: "0", left: "0", width: "100%" }}>
      <Navbar onClickMenu={handleClick} />
    </div>
  );
};

const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <NavbarContainer />
      {props.children}
    </Container>
  );
};

export { Layout };
