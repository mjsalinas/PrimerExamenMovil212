// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TabsNavigator from "./navigation/TabsNavigator";

export type RootStackParamList = {
  Home: undefined;
  Tabs: { screen?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
