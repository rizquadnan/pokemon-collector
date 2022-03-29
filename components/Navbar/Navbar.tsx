import { Hamburger, Header } from "@sumup/circuit-ui";
import { DEFAULT_TITLE, MENU_BUTTON_ROLE_NAME } from "./constants";

interface NavbarProps {
  onClickMenu: () => void;
  title?: string;
}

const Navbar = ({ title = DEFAULT_TITLE, ...props }: NavbarProps) => {
  return (
    <Header title={title}>
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
