import { render } from "../../../tesUtils"; // TODO: replace this with absolute import
import { HomePage } from "./HomePage";
describe("HomePage", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<HomePage />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete button test case later
});
