import { render, screen } from "../../../tesUtils"; // TODO: replace this with absolute import
import { Title } from "./Title";
import { requiredProps } from "./requiredProps";
describe("Title", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Title {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  it("renders an element specified on the as prop", () => {
    const htmlTagInput = requiredProps.as;
    render(<Title {...requiredProps} as={htmlTagInput} />);

    const element = screen.getByRole("heading");
    const htmlTag = element.nodeName.toLowerCase();

    expect(htmlTagInput).toBe(htmlTag);
  });
});
