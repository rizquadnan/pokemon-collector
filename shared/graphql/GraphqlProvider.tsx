import { ApolloProvider } from "@apollo/client";
import { FC } from "react";
import { graphqlClient } from "./graphqlClient";

const GraphqlProvider: FC = ({ children }) => {
  return <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>;
};

export { GraphqlProvider };
