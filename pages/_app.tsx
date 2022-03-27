import type { AppProps } from "next/app";
import Head from "next/head";

import { GraphqlProvider, ThemeProvider } from "../shared"; // TODO: refactor using absolute import

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <GraphqlProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </GraphqlProvider>
    </>
  );
}

export default MyApp;
