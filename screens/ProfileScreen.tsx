import React, { useState } from "react";
import { View, TextInput, Text, Alert, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import { TabsParamList } from "../navigation/TabsNavigator";

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type ProfileScreenProps = BottomTabScreenProps<TabsParamList, 'Profile'>;

const ProfileScreen = () => {
  const [nombre, setNombre] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [saved, setSaved] = useState<{ nombre: string; edad: string; bio: string } | null>(null);

  const guardarPerfil = () => {

    setSaved({ nombre, edad, bio });
    Alert.alert("Éxito", "Datos guardados correctamente.");
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
      />

      <CustomButton title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <View>
          <Text>Tu nombre es: {saved.nombre}</Text>
          <Text>Tienes: {saved.edad} años</Text>
          <Text>Biografía: {saved.bio}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;