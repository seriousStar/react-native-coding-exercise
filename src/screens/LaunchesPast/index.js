import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";

const GET_LAUNCHESPAST = gql`
  query ($limit: Int) {
    launchesPast(limit: $limit) {
      id
      details
      mission_name
      rocket {
        rocket_type
        rocket_name
      }
    }
  }
`;

const LauchnesPast = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHESPAST, {
    variables: { limit: 10 },
  });
  console.info("loading", loading);
  console.info("error", error);
  console.info("data", data);
  return (
    <SafeAreaView style={{ backgroundColor: "orange", flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "steelblue" }}>
        <Text>adsf</Text>
      </View>
    </SafeAreaView>
  );
};

export default LauchnesPast;
