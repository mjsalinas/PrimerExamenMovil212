import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

export default function ProfileScreen() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (!nombre || !edad || !bio) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    setSaved(true);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Edad"
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
      />

      <TextInput
        placeholder="Biografía"
        multiline
        value={bio}
        onChangeText={setBio}
      />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <Text style={{ marginTop: 20 }}>
          Datos guardados correctamente
        </Text>
      )}
    </View>
  );
}

