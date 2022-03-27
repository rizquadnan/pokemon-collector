import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";

import { apolloClient, ThemeProvider } from "../shared"; // TODO: refactor using absolute import

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
