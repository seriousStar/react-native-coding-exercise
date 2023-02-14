import React from "react";
import { StatusBar } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Router from "./src/routes";

const client = new ApolloClient({
  uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar hidden />
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};
export default App;
