import { View, Text, Button,StyleSheet } from "react-native";
import CustomButton from "./components/CustomButton";
import { navigationRef } from "./navigation/NavigationService";
import { useAuth } from "./context/AuthContext";
import { useColorScheme } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
export default function SettingsScreen({ navigation }: any) {

  

    return (
        <View style={styles.wrapper}>
            {/* implementacion correcta de redefinicion de navegacion desde un componente externo  */}
            <Text style= {styles.text}>Configutaciones Avanzadas</Text>
            <Text style= {styles.text}> Opcion 1: </Text>
            <Text style= {styles.text}> Opcion 2: </Text>

        </View>)
}
const styles= StyleSheet.create({


        wrapper: {
            flex: 1,
            backgroundColor:'#fff',
            padding: 12,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',

        },
        text: {
            color: '#000',
            fontWeight: 'bold',
            fontSize: 18,
        },
       


    });
