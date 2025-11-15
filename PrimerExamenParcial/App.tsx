import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { navigationRef } from "../PrimerExamenParcial/NavigationService"
import StackNavigator from "../PrimerExamenParcial/StackNavigator"





  export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
        <StackNavigator />
    </NavigationContainer>
  );
}
