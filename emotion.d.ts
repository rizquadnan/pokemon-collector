import "@emotion/react";

// You are also able to use a 3rd party theme this way:
import "@emotion/react";
import { Theme as LibTheme } from "@sumup/design-tokens";

declare module "@emotion/react" {
  export interface Theme extends LibTheme {}
}
