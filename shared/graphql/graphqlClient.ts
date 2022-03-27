import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

const graphqlClient = new ApolloClient({
  link: new HttpLink({
    uri:
      // TODO: refactor this to next.config
      "https://beta.pokeapi.co/graphql/v1beta",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export { graphqlClient };
