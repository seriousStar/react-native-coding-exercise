import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import LauchnesPastScreen from "./src/screens/LaunchesPast";

const client = new ApolloClient({
  uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <LauchnesPastScreen />
    </ApolloProvider>
  );
};
export default App;
