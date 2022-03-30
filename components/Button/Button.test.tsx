import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { Button } from "./Button";
import { requiredProps } from "./requiredProp";
describe("Button", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Button {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete button test case later
});
