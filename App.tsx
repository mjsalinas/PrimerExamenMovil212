import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator"
import { navigationRef } from "./navigation/NavigationService"
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
const Stack = createNativeStackNavigator();


  export default function App() {
  return (
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>

  );
}
