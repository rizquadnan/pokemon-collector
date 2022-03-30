import { render, screen } from "../../../tesUtils"; // TODO: replace this with absolute import
import { Body } from "./Body";
import { requiredProps } from "./requiredProps";
describe("Body", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Body {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  it("renders an element specified on the as prop", () => {
    const htmlTagInput = requiredProps.as;
    render(<Body {...requiredProps} as={htmlTagInput} />);

    const element = screen.getByText(requiredProps.children);
    const htmlTag = element.nodeName.toLowerCase();

    expect(htmlTagInput).toBe(htmlTag);
  });
});
