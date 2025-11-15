import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const guardarPerfil = () => {
    if (!nombre || !edad || !bio) {
      setError("Todos los campos son obligatorios");
      setSaved(false);
      return;
    }
    setError("");
    setSaved(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.title}>Mi Perfil</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Tu nombre"
        />

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          keyboardType="numeric"
          placeholder="Tu edad"
        />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={bio}
          onChangeText={setBio}
          multiline
          placeholder="Cuéntanos sobre ti"
        />

        <Button title="Guardar" onPress={guardarPerfil} />

        {error ? <Text style={styles.error}>{error}</Text> : null}
        {saved ? (
          <Text style={styles.result}>
            ✓ Guardado: {nombre} • {edad} años
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  centered: {
    width: "100%",
    maxWidth: 320,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  error: {
    color: "red",
    marginTop: 12,
    textAlign: "center",
  },
  result: {
    marginTop: 12,
    fontSize: 16,
    color: "green",
    textAlign: "center",
    fontWeight: "600",
  },
});