import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import CustomButton from "../components/CustomButton";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);

  const guardarPerfil = () => {
    if (nombre.trim() !== "" && edad.trim() !== "") {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />
      <TextInput placeholder="Biografía" value={bio} onChangeText={setBio} />

      <CustomButton label="Guardar" onPress={guardarPerfil} />
      {saved ? <Text>Guardado!</Text> : null}
      {saved && (
        <View>
          <Text>
            Tu nombre es: {nombre}, tienes {edad} años
          </Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
