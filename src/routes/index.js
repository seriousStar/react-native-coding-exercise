import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LauchnesPast from "../screens/LaunchesPast";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="LauchPastList" component={LauchnesPast} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
