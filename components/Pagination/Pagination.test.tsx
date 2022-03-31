import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { Pagination } from "./Pagination";
import { requiredProps } from "./requiredProps";
describe("Pagination", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Pagination {...requiredProps} />);

    expect(baseElement).toBeTruthy();

    // TODO: add complete pagination test case later
  });
});
