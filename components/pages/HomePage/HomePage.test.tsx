import { render } from "../../../tesUtils"; // TODO: replace this with absolute import
import { HomePage } from "./HomePage";
import { requiredProps } from "./requiredProps";
describe("HomePage", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<HomePage {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete button test case later
});
