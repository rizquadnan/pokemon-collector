import { render } from "../../../tesUtils"; // TODO: replace this with absolute import
import { PokemonListPage } from "./PokemonListPage";
import { requiredProps } from "./requiredProps";
describe("PokemonListPage", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<PokemonListPage {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete button test case later
});
