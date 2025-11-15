import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type TabsParamList = {
  Home: undefined;
  Profile: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" options={{ title: 'Perfil' }}>
        {(props) => (
          <ProfileScreen
            {...props}
            darkMode={darkMode}
          />
        )}
      </Tab.Screen>
      
      <Tab.Screen name="Setting" options={{ title: 'Ajustes' }}>
        {(props) => (
          <SettingsScreen
            {...props}
            darkMode={darkMode}
            setdarkMode={setDarkMode}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}