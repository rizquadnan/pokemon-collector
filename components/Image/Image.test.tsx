/* eslint-disable jsx-a11y/alt-text */
import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { Image } from "./Image";
import { requiredProps } from "./requiredProps";
describe("Image", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Image {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });
});
