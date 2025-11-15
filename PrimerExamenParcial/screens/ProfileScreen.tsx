import React, { useState } from "react";
import { View, TextInput, Button, Text , StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen (){


  const [nombre, setNombre] = useState();
  const [edad, setEdad] = useState("");
  const [bio] = useState(""); 
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
    setSaved(false);
  };

  return (
    <SafeAreaView style={StyleSheet.campos}>
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Edad" />
      <TextInput placeholder="Biografía" />

      <Button title="Guardar" onPress={() => {}} />
      {saved ? <Text>Guardado!</Text> : ""}
      {saved && <View> 
        <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  campos : {
  }
});

