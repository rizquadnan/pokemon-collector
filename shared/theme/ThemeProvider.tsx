import { css, ThemeProvider as ThemeProvider_ } from "@emotion/react";
import { light } from "@sumup/design-tokens";
import { BaseStyles, ModalProvider } from "@sumup/circuit-ui";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const safePaddingStyles = css`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
`;

const Layout = styled.div`
  ${safePaddingStyles}
`;

type ThemeProviderProps = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <ThemeProvider_ theme={light}>
      <BaseStyles />
      <ModalProvider>
        <Layout>{children}</Layout>
      </ModalProvider>
    </ThemeProvider_>
  );
};

export { ThemeProvider };
