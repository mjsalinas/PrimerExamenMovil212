import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabsNavigator from './TabsNavigator';

export type RootStackParamList = {  
    Inicio: undefined,
    Perfil: undefined,
    Tabs: {email:string},
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Inicio' 
                            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Inicio" component={HomeScreen} />
            <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
    );
}