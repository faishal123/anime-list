import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        merge: true,
      },
    },
  }),
});

export default client;
