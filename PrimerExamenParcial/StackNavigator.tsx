import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import TabsNavigator from "./TabsNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export type RootStackParamList = {
  Home: undefined;
  Tabs: { screen?: "Profile" | "Settings" } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Inicio" }}
        />
        <Stack.Screen 
          name="Tabs" 
          component={TabsNavigator} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}