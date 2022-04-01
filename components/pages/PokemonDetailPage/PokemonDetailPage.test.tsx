import { render } from "../../../tesUtils"; // TODO: replace this with absolute import
import { PokemonDetailPage } from "./PokemonDetailPage";
import { requiredProps } from "./requiredProps";
describe("PokemonDetailPage", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<PokemonDetailPage {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete pokemon detail page test case later
});
