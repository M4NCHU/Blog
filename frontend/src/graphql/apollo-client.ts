import { ApolloClient, InMemoryCache,HttpLink, ApolloProvider, gql } from '@apollo/client';


const httpLink = new HttpLink({
    // Miejsce wysyłania zapytań
    uri: "http://localhost:4000/graphql",
    credentials: "include",
})

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});