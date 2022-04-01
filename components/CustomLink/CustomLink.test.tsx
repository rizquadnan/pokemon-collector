import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { CustomLink } from "./CustomLink";
import { requiredProps } from "./requiredProps";
describe("CustomLink", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<CustomLink {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete custom link test case later
});
