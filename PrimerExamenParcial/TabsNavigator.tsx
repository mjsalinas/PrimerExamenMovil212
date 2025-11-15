import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



//import ProfileScreen from '../Screens/';

export type TabsParamList = {
    Home: undefined;
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>


            

        </Tab.Navigator>
    );
}
