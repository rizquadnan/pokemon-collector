import { render } from "../../tesUtils"; // TODO: replace this with absolute import
import { CardPokemon } from "./CardPokemon";
import { requiredProps } from "./requiredProps";
describe("CardPokemon", () => {
  it("renders successfully", () => {
    const { baseElement } = render(<CardPokemon {...requiredProps} />);

    expect(baseElement).toBeTruthy();
  });

  // TODO: add complete card pokemon test case later
});
