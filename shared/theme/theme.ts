import { light, Theme } from "@sumup/design-tokens";
import { colors } from "./colors";

const theme: Theme = {
  ...light,
  fontStack: {
    ...light.fontStack,
    default: '"Kanit", sans-serif',
  },
  colors: {
    ...light.colors,
    bodyBg: colors.white,
    bodyColor: colors.black,
    shadow: colors.grey,
    p100: colors.primaryTints[100],
    p200: colors.primaryTints[200],
    p300: colors.primaryTints[300],
    p400: colors.primaryTints[400],
    p500: colors.primaryTints[500],
    p700: colors.primaryTints[700],
    p900: colors.primaryTints[900],
  },
};

export { theme };
