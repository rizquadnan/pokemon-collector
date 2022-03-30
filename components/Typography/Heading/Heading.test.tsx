import { render, screen } from "../../../tesUtils"; // TODO: replace this with absolute import
import { Heading } from "./Heading";
import { requiredProps } from "./requiredProps";
describe("Heading", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Heading {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  it("renders an element specified on the as prop", () => {
    const htmlTagInput = requiredProps.as;
    render(<Heading {...requiredProps} as={htmlTagInput} />);

    const element = screen.getByRole("heading");
    const htmlTag = element.nodeName.toLowerCase();

    expect(htmlTagInput).toBe(htmlTag);
  });
});
