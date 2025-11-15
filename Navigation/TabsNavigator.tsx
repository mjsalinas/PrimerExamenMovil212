import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type TabsParamList = {
    Home: undefined; 
    Profile: undefined;
    Settings: { fromHome?: boolean } | undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Inicio'}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{title: 'Perfil'}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{title: 'Configuración'}}/> 
        </Tab.Navigator>
    );
}