import { useState } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre.trim() && edad.trim() && bio.trim()) {
      setSaved(true);
      Alert.alert("Exito", "Datos guardados correctamente");
    } else {
      Alert.alert("Error", "Completa todos los campos");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        style={{ marginBottom: 10, borderWidth: 1, padding: 8, height: 80 }}
      />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <View style={{ marginTop: 20 }}>
          <Text>Guardado!</Text>
          <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
          <Text>Biografía: {bio}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;