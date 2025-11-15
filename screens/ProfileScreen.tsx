import { useState } from "react";
import React = require("react");
import { View, TextInput, Button, Text } from "react-native";
import CustomButton from "../components/CustomButton";

 export default function ProfileScreen({ navigation }: any) { 

  const handleLogout = () => {
    if (navigation.isReady()) {
            logout();
            navigation.reset({
              index: 0,
              routes: [{name: 'Profile'}]
  })

const ProfileScreen = () => {
  const [nombre, setNombre] = useState();
  const [edad, setEdad] = useState("");
  const [bio] = useState(""); 
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Edad" />
      <TextInput placeholder="Biografía" />

      <CustomButton title="Guardar" 
      onPress={handleLogout} />
      {saved ? <Text>Guardado!</Text> : ""}
      {saved && <View> 
        <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>}
    </View>
  );
};

export default ProfileScreen;
      function logout(): void {
        throw new Error("Function not implemented.");
      }

