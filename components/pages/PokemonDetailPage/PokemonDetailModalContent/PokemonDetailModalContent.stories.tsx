import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PokemonDetailModalContent } from "./PokemonDetailModalContent";
import { requiredProps } from "./requiredProps";

export default {
  title: "Pages / PokemonDetailPage / Components / PokemonDetailModalContent",
  component: PokemonDetailModalContent,
} as ComponentMeta<typeof PokemonDetailModalContent>;

const Template: ComponentStory<typeof PokemonDetailModalContent> = (args) => (
  <PokemonDetailModalContent {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
