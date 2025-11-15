import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import TabsNavigator from './TabsNavigator';

export type RootStackParamList = {
    Home: undefined; 
    Tabs: {
        screen: 'Profile' | 'Settings';
        params?: { fromHome?: boolean }; 
    };
}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
    );
}