import styled from "@emotion/styled";
import { Button } from "@sumup/circuit-ui";
import Link from "next/link";
import { ReactNode } from "react";
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

type CustomLinkProps = {
  href: string;
  children: ReactNode;
};

const CustomLink = (props: CustomLinkProps) => {
  return (
    <Link href={props.href} passHref>
      <a css={{ textDecoration: "none" }}>{props.children}</a>
    </Link>
  );
};
const Menu = ({ onClickHome, onClickMyPokemon }: MenuProps) => {
  return (
    <MenuWrapper>
      <CustomLink href="/">
        <Button variant="tertiary" onClick={onClickHome}>
          {HOME_MENU_TITLE}
        </Button>
      </CustomLink>
      <CustomLink href="/my-pokemon">
        <Button variant="tertiary" onClick={onClickMyPokemon}>
          {MY_POKEMON_MENU_TITLE}
        </Button>
      </CustomLink>
    </MenuWrapper>
  );
};

export type { MenuProps };
export { Menu };
