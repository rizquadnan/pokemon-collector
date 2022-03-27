import { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider, GraphqlProvider } from "./shared";

const AllTheProviders: FC = ({ children }) => {
  return (
    <GraphqlProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </GraphqlProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
