import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { ButtonIcon } from "./ButtonIcon";
import { requiredProps } from "./requiredProps";
describe("ButtonIcon", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<ButtonIcon {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete button icon test case later
});
