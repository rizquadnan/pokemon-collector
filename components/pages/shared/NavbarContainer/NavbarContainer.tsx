// TODO: find way to enable emotion css props in storybook
// without jsx pragma below
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

import { css } from "@emotion/react";
import { useModal } from "@sumup/circuit-ui";
import { Theme } from "@sumup/design-tokens";
import { Menu, Navbar } from "../../..";

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

export { NavbarContainer };
