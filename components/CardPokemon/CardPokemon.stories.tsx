import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CardPokemon } from "./CardPokemon";
import { requiredProps } from "./requiredProps";

export default {
  title: "CardPokemon",
  component: CardPokemon,
} as ComponentMeta<typeof CardPokemon>;

const Template: ComponentStory<typeof CardPokemon> = (args) => (
  <CardPokemon {...args} />
);

export const Default = Template.bind({});
Default.args = requiredProps;

export const WithClickRelease = Template.bind({});
WithClickRelease.args = {
  ...requiredProps,
  variant: "with-release",
  onClickRelease: () => console.log("Click release!"),
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  ...requiredProps,
  isLoading: true,
};
