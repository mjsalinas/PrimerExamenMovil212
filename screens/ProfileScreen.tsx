import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert, StyleSheet } from "react-native";

export default function ProfileScreen ({navigation}: any) { 
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(""); 
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const guardarPerfil = () => {
    setErrorMessage(""); 
    if (!nombre.trim() || !edad.trim() || !bio.trim()) {
      setErrorMessage("Por favor, completa todos los campos.");
      setSaved(false);
      return;
    }

    const ageNumber = parseInt(edad.trim(), 10);
    if (isNaN(ageNumber) || ageNumber <= 0) {
      setErrorMessage("La edad debe ser un número válido y mayor que cero.");
      setSaved(false);
      return;
    }
    setSaved(true);
    Alert.alert("Success!", "Datos guardados correctamente."); 
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric" 
        value={edad}
        onChangeText={setEdad}
      />
      <TextInput
        style={styles.input}
        placeholder="Biografía"
        multiline
        numberOfLines={4}
        value={bio}
        onChangeText={setBio}
      />

      <Button title="Guardar" onPress={guardarPerfil} />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      {saved && !errorMessage ? (
        <View style={styles.savedInfoContainer}>
          <Text style={styles.savedInfoText}>Tu nombre es: {nombre}, tienes {edad} años</Text>
          <Text style={styles.savedInfoText}>Biografía: {bio}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10, 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  savedInfoContainer: {
    marginTop: 20,
    backgroundColor: '#e0ffe0',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c0ffc0',
  },
  savedInfoText: {
    fontSize: 16,
    color: '#333',
  }
});
