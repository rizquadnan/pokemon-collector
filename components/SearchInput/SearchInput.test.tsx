import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { SearchInput } from "./SearchInput";
import { requiredProps } from "./requiredProps";
describe("SearchInput", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<SearchInput {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });
});
