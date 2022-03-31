import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { Tag } from "./Tag";
import { requiredProps } from "./requiredProps";
describe("Tag", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Tag {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete tag test case later
});
