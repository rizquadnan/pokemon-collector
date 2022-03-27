import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta", // TODO: refactor this to next.config
  cache: new InMemoryCache(),
});

export { apolloClient };
