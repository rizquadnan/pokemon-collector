import { render } from "../../../../tesUtils"; // TODO: replace this with absolute import
import { NavbarContainer } from "./NavbarContainer";
describe("NavbarContainer", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<NavbarContainer />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete navbar container test case later
});
