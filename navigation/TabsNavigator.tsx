import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreens";

export type TabsParamList = {
    Profile: undefined,
    Settings: undefined,
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator(){

    return(
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={ProfileScreen} options={{title: 'Profile'}}></Tab.Screen>
            <Tab.Screen name='Settings' component={SettingsScreen} options={{title: 'Settings'}}></Tab.Screen>
        </Tab.Navigator>
    )
}