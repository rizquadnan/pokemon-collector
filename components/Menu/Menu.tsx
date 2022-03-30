import styled from "@emotion/styled";
import { Button } from "@sumup/circuit-ui";
import { HOME_MENU_TITLE, MY_POKEMON_MENU_TITLE } from "./constants";

const MenuWrapper = styled.div({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

type MenuProps = {
  onClickHome: () => void;
  onClickMyPokemon: () => void;
};

const Menu = ({ onClickHome, onClickMyPokemon }: MenuProps) => {
  return (
    <MenuWrapper>
      <Button variant="tertiary" onClick={onClickHome}>
        {HOME_MENU_TITLE}
      </Button>
      <Button variant="tertiary" onClick={onClickMyPokemon}>
        {MY_POKEMON_MENU_TITLE}
      </Button>
    </MenuWrapper>
  );
};

export type { MenuProps };
export { Menu };
