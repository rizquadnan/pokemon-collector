import { render } from "../../../../tesUtils"; // TODO: replace this with absolute import
import { Layout } from "./Layout";
import { requiredProps } from "./requiredProps";
describe("Layout", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Layout {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete navbar container test case later
});
