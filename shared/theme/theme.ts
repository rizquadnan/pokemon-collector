import { light, Theme } from "@sumup/design-tokens";

const theme: Theme = {
  ...light,
  fontStack: {
    ...light.fontStack,
    default: '"Kanit", sans-serif',
  },
};

export { theme };
