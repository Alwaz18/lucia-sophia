import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:"https://rocky-ocean-85600.herokuapp.com/graphql" || STRAPI_GRAPHQL_URL,
   
  })
});

export { client };
