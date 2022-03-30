import { render, screen } from "../../tesUtils"; // TODO: replace this with absolute import
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
});
