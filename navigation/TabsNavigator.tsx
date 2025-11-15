import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type TabsParamList = {
  Profile: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();
export default function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }}/>
    </Tab.Navigator>
  );
}