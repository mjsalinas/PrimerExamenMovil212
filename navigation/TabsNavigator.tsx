import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type TabsParamList = {
    Home: undefined;
    Profile: undefined;
    Setting: undefined;
}
const Tab = createBottomTabNavigator<TabsParamList>();
export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Perfil'}}/>
            <Tab.Screen name="Setting" component={SettingsScreen} options={{title: 'Ajustes'}}/>
        </Tab.Navigator>
    );
}