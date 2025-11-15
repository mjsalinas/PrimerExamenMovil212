import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';

export type RootStackParamList = {
    Home : undefined;
    Profile : undefined;


}
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            
        </Stack.Navigator>
    );
}