import { useState } from "react";
import React = require("react");
import { Text, View, Button } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({navigation, initialRouteName}: any) {
const [ items, setItems] = useState<String[]> ([]);
  const showWelcome = false;
  const handleRegisterService = () =>{
    navigation.navigate('Profile')
  }
  return (
    <View style={{ padding: 20 }}>
      {showWelcome || <Text>Bienvenido a la App</Text>}

      <CustomButton title="Ir a Perfil"
        onPress={handleRegisterService}/>
    </View>
  );
};