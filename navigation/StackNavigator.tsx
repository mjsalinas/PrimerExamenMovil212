import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreens";
import TabsNavigator from "./TabsNavigator";

export type RootStackParamList ={
    Home: undefined,
    Profile: undefined,
    Settings: undefined,
    Tabs: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    )
}