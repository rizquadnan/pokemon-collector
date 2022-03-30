import styled from "@emotion/styled";
import { Button } from "@sumup/circuit-ui";

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
        Home
      </Button>
      <Button variant="tertiary" onClick={onClickMyPokemon}>
        My Pokemon
      </Button>
    </MenuWrapper>
  );
};

export type { MenuProps };
export { Menu };
