import { render, screen } from "../../../tesUtils"; // TODO: replace this with absolute import
import { Subheading } from "./Subheading";
import { requiredProps } from "./requiredProps";
describe("Subheading", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Subheading {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  it("renders an element specified on the as prop", () => {
    const htmlTagInput = requiredProps.as;
    render(<Subheading {...requiredProps} as={htmlTagInput} />);

    const element = screen.getByRole("heading");
    const htmlTag = element.nodeName.toLowerCase();

    expect(htmlTagInput).toBe(htmlTag);
  });
});
