import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.STRAPI_GRAPHQL_URL,
    // uri:"http://localhost:1337/graphql",
   
  })
});

export { client };
