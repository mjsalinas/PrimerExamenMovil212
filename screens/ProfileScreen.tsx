import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
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
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <View style={{ marginTop: 20 }}>
          <Text>Guardado!</Text>
          <Text>
            Tu nombre es: {nombre}, tienes {edad} años
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
  },
});

export default ProfileScreen;
