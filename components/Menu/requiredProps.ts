import { MenuProps } from "./Menu";

export const requiredProps: MenuProps = {
  onClickHome: () => console.log("Clicked home!"),
  onClickMyPokemon: () => console.log("Clicked my pokemon!"),
};
