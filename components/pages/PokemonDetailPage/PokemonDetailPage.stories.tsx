import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PokemonDetailPage } from "./PokemonDetailPage";
import { requiredProps } from "./requiredProps";

export default {
  title: "Pages / PokemonDetailPage",
  component: PokemonDetailPage,
} as ComponentMeta<typeof PokemonDetailPage>;

const Template: ComponentStory<typeof PokemonDetailPage> = (args) => (
  <PokemonDetailPage {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;
