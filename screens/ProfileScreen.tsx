import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

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

      <Button title="Guardar" onPress={() => {}} />
      {saved ? <Text>Guardado!</Text> : ""}
      {saved && <View> 
        <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>}
    </View>
  );
};

export default ProfileScreen;