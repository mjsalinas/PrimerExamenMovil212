import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function ProfileScreen() {
  const [nombre, setNombre] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);

  const guardarPerfil = () => {
    if (nombre && edad && bio) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <Text style={{ marginTop: 20 }}>
          Tu nombre es {nombre}, tienes {edad} años.
        </Text>
      )}
    </View>
  );
}
