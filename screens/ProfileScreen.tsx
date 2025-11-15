import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState<string>("");
  const [edad, setEdad] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [saved, setSaved] = useState<boolean>(false);

  const guardarPerfil = () => {
    const edadNum = parseInt(edad, 10);
    if (nombre.trim() !== "" && edad.trim() !== "" && bio.trim() !== "" && !isNaN(edadNum) && edadNum > 0) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={{borderWidth:1,borderColor:'#ccc',padding:8,marginBottom:8}} />
      <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} keyboardType="numeric" style={{borderWidth:1,borderColor:'#ccc',padding:8,marginBottom:8}} />
      <TextInput placeholder="Biografía" value={bio} onChangeText={setBio} multiline style={{borderWidth:1,borderColor:'#ccc',padding:8,marginBottom:8}} />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved ? <Text style={{marginTop:10}}>Datos guardados correctamente</Text> : null}

      {saved && (
        <View style={{marginTop:10}}>
          <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;