import { View, Text, Button,StyleSheet } from "react-native";
import CustomButton from "./components/CustomButton";
import { navigationRef } from "./navigation/NavigationService";
import { useAuth } from "./context/AuthContext";
import { useColorScheme } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import SettingScreen from "./SettingsScreen";
export default function SettingsScreen({ navigation }: any) {

    const { logout, user } = useAuth();
    const {theme, toggleTheme} =useTheme();
    const styles1= getStyles(theme);


    return (
        <View style={styles1.wrapper}>
            {/* implementacion correcta de redefinicion de navegacion desde un componente externo  */}
            <Text style= {styles1.text}>Profile</Text>
            <Text style= {styles1.text}> Configuracion</Text>
            
            <Text style={styles1.text}> Modo Oscuro Y Claro</Text>
            <CustomButton 
            title= "Modo Oscuro y Modo Claro"
            onPress={toggleTheme} />
            <SettingScreen>
              
            </SettingScreen>

        </View>)
}
const getStyles= ( theme: "dark" | "light") =>{
   return StyleSheet.create({
        wrapper: {
            flex: 1,
            backgroundColor: theme=== 'dark'? '#000': '#fff',
            padding: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',

        },
        text: {
            color: theme=== 'dark'?'#fff': '#000',
            fontWeight: 'bold',
            fontSize: 18,
        },
       


    });
}
