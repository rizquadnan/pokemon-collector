import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import { GlobalStyles, apolloClient } from "../shared"; // TODO: refactor using absolute import

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
