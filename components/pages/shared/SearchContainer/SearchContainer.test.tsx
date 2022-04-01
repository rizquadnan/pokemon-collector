import { render } from "../../../../tesUtils"; // TODO: replace this with absolute import
import { requiredProps } from "./requiredProps";
import { SearchContainer } from "./SearchContainer";
describe("SearchContainer", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<SearchContainer {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete search container test case later
});
