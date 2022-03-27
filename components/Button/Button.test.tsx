import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { Button } from "./Button";
import { children } from "./mockData";

describe("Button", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<Button>{children}</Button>);

    expect(baseElement).toBeTruthy();
  });
});
