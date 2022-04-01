import { useTheme } from "@emotion/react";
import { Hamburger, Header } from "@sumup/circuit-ui";
import { colors } from "../../shared";
import { DEFAULT_TITLE, MENU_BUTTON_ROLE_NAME } from "./constants";

interface NavbarProps {
  onClickMenu: () => void;
  title?: string;
}

const Navbar = ({ title = DEFAULT_TITLE, ...props }: NavbarProps) => {
  const theme = useTheme();

  return (
    <Header
      title={title}
      css={{
        backgroundColor: colors.secondary,
        "& h1": {
          color: theme.colors.black,
        },
      }}
    >
      <Hamburger
        activeLabel={MENU_BUTTON_ROLE_NAME.active}
        inactiveLabel={MENU_BUTTON_ROLE_NAME.inactive}
        size="kilo"
        onClick={props.onClickMenu}
      />
    </Header>
  );
};

export { Navbar };
