import { render } from "../../../../tesUtils"; // TODO: replace this with absolute import
import { PokemonDetailModalContent } from "./PokemonDetailModalContent";
import { requiredProps } from "./requiredProps";
describe("PokemonDetailModalContent", () => {
  it("renders successfully", () => {
    const { baseElement } = render(
      <PokemonDetailModalContent {...requiredProps} />
    );

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete pokemon detail modal content test case later
});
