// TODO: find way to enable emotion css props in storybook
// without jsx pragma below
/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useState } from "react";

import { Body } from "../../..";
import { Button } from "../../../Button";
import { Input } from "../../../Input";

type PokemonDetailModalContentProps = {
  onSubmit: (pokemonName: string) => void;
};

const PokemonDetailModalContent = (props: PokemonDetailModalContentProps) => {
  const [name, setName] = useState("");

  const isButtonDisabled = !name;

  return (
    <>
      <Body>Sucess give it a name!</Body>
      <Input
        value={name}
        label="Pokemon name"
        placeholder="Pokemon name"
        hideLabel
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        disabled={isButtonDisabled}
        css={{ width: "100%" }}
        onClick={() => props.onSubmit(name)}
      >
        Submit
      </Button>
    </>
  );
};

export type { PokemonDetailModalContentProps };
export { PokemonDetailModalContent };
