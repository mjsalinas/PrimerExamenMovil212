import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import TabsNavigator from '../navigation/TabsNavigator';
import ServiceRegistryScreen from '../screens/services/ServiceRegistryScreen';

export type RootStackParamList = {
    Profile: undefined,
    Tabs: {email:string},
    ServiceRegistry: undefined,
    Settings: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Profile' 
                            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Tabs" component={TabsNavigator} />
            <Stack.Screen name="ServiceRegistry" component={ServiceRegistryScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    );
}