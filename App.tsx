import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./navigation/StackNavigator";
import { navigationRef } from "./navigation/NavigationService";

  export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>

  );
}
