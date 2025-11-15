import React, { Profiler } from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';
import SettingsScreen from '../SettingsScreen';



export type RootStackParamList = {
    Home: undefined,
    Profile: undefined,
    Setting: undefined,


};
const Stack = createNativeStackNavigator<RootStackParamList >();

export default function StackNavigator() {
    return(
        <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={{headerShown: false}}
            children={
                <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Setting" component={SettingsScreen} />
                    </>
            }
        />
    );
}