import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre.trim() && edad.trim() && bio.trim()) {
      setSaved(true);
      Alert.alert("Exito", "guardado correctamente");
    } else {
      Alert.alert("Error", "completa todos los campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <CustomInput
        value={nombre} placeholder="Nombre" onChange={setNombre} type="text"
      />

      <CustomInput
        value={edad} placeholder="Edad" onChange={setEdad} type="number"
      />

      <CustomInput
        value={bio} placeholder="Biografia" onChange={setBio} type="text" multiline={true}
      />

      <CustomButton  title="Guardar" onPress={guardarPerfil} variant="primary"
      />

      {saved && (
        <View style={styles.savedInfo}>
          <Text style={styles.savedText}>¡Perfil guardado!</Text>
          <Text>Nombre: {nombre}</Text>
          <Text>Edad: {edad} años</Text>
          <Text>Biografía: {bio}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  savedInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8
  },
  savedText: {
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10
  }
});

export default ProfileScreen;