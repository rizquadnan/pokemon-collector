import { css, ThemeProvider as ThemeProvider_ } from "@emotion/react";
import { BaseStyles, ModalProvider, ToastProvider } from "@sumup/circuit-ui";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { theme } from "./theme";

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
    <ThemeProvider_ theme={theme}>
      <BaseStyles />
      <ModalProvider>
        <ToastProvider>
          <Layout>{children}</Layout>
        </ToastProvider>
      </ModalProvider>
    </ThemeProvider_>
  );
};

export { ThemeProvider };
