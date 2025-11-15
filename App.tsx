import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator, { TabsParamList } from "./navigation/TabsNavigator";
import { NavigatorScreenParams } from "@react-navigation/native";
import HomeScreen  from "./screens/HomeScreen";

export type RootStackParamList = {
    Home: undefined;
    Tabs: NavigatorScreenParams<TabsParamList>;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Tabs' component={TabsNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}