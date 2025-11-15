import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = false;

  return (
    <View style={{ padding: 20, marginTop: 30, }}>
      {showWelcome || <Text>Bienvenido a la App</Text>}

      
      <CustomButton label={"Ir a Perfil"} onPress={()=>{navigation.navigate("Tabs", {screen: 'Profile'})}}></CustomButton>
      <CustomButton label={"Ir a Configuracion"} onPress={()=>{navigation.navigate("Tabs", {screen: 'Settings'})}}></CustomButton>
      
    </View>
  );
};


const styles = StyleSheet.create({
    buttons: {
        margin: 10,
    }
})
export default HomeScreen;