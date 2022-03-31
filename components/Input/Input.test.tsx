import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { Input } from "./Input";
import { requiredProps } from "./requiredProps";
describe("Input", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Input {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete button test case later
});
