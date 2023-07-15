import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `api.${process.env.DOMAIN_NAME}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
