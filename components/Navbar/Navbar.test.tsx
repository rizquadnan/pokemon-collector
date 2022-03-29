import { fireEvent } from "@testing-library/react";
import { render, screen } from "../../tesUtils"; // TODO: replace this with absolute import
import { DEFAULT_TITLE, MENU_BUTTON_ROLE_NAME } from "./constants";
import { Navbar } from "./Navbar";
import { requiredProps } from "./requiredProps";
describe("Navbar", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Navbar {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  it("has correct heading", () => {
    render(<Navbar {...requiredProps} />);

    screen.getByText(DEFAULT_TITLE);
  });

  it("has a functional menu button", () => {
    render(<Navbar {...requiredProps} />);

    const button = screen.getByRole("button", {
      name: MENU_BUTTON_ROLE_NAME.inactive,
    });

    fireEvent.click(button);
  });
});
