import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

export default function ProfileScreen() {
  const [nombre, setNombre] = useState("");

  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    const edadNum = Number(edad);

    if (!nombre.trim() || !edad.trim() || !bio.trim()) {
      alert("Error: llena   los campos");
      return;
    }if (Number.isNaN(edadNum) || edadNum <= 0) {
      alert("Error: Ingresa una edad ");
      return;
    }

    setSaved(true);
  };

  return (
    <SafeAreaView style={styles.campos}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        style={styles.input}
      />
      <TextInput
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        style={styles.input}
      />

      <CustomButton title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <View style={{ marginTop: 20 }}>
          <Text>Guardado!</Text><Text>Tu nombre : {nombre}, tienes {edad} años</Text><Text>Bio: {bio}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  campos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  input: {
    width: "80%",
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});