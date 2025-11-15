import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const ProfileScreen = ({navigation}: any) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState(""); 
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <CustomInput multiline={false} value={nombre} placeholder={"Nombre"} onChange={setNombre}></CustomInput>
      
      <CustomInput multiline={false} value={edad} placeholder="Edad" onChange={setEdad}></CustomInput>
      
      <CustomInput placeholder="Biografia" multiline={true} value={bio} onChange={setBio}></CustomInput>
      <CustomButton label={"Guardar"} onPress={guardarPerfil}></CustomButton>
      {saved ? <Text>Guardado!</Text> : ""}
      {saved && <View> 
        <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>}
    </View>
  );
};

export default ProfileScreen;