import { render, screen } from "../../tesUtils"; // TODO: replace this with absolute import
import { HOME_MENU_TITLE, MY_POKEMON_MENU_TITLE } from "./constants";
import { Menu } from "./Menu";
import { requiredProps } from "./requiredProps";
describe("Menu", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Menu {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });
  it("has a two menu buttons", () => {
    render(<Menu {...requiredProps} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(2);
  });

  it("has a home menu button", () => {
    render(<Menu {...requiredProps} />);

    expect(screen.getByText(HOME_MENU_TITLE)).toBeInTheDocument();
  });

  it("has a my pokemon menu button", () => {
    render(<Menu {...requiredProps} />);

    expect(screen.getByText(MY_POKEMON_MENU_TITLE)).toBeInTheDocument();
  });
});
