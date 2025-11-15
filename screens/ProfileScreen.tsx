import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import CustomButton from "../components/CustomButton";

type Props = {
  darkMode: boolean;
};

const ProfileScreen = ({ darkMode }: Props) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
  };

  const containerStyle = {
    flex: 1,
    padding: 20,
    backgroundColor: darkMode ? "#121212" : "#F5F5F5",
  };

  const textStyle = {
    color: darkMode ? "#FFFFFF" : "#000000",
    fontSize: 16,
    marginTop: 5,
  };

  const inputStyle = {
    backgroundColor: darkMode ? "#333333" : "#FFFFFF",
    color: darkMode ? "#FFFFFF" : "#000000",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: darkMode ? "#555" : "#CCC",
  };

  const placeholderTextColor = darkMode ? "#888" : "#999";

  const buttonDynamicStyle = {
    backgroundColor: darkMode ? '#333333' : '#007AFF',
    marginTop: 15,
    borderWidth: darkMode ? 1 : 0,
    borderColor: darkMode ? '#555' : 'transparent',
  };

  return (
    <View style={containerStyle}>
      <TextInput
        style={inputStyle}
        placeholder="Nombre"
        placeholderTextColor={placeholderTextColor}
        value={nombre}
        onChangeText={(text) => {
          setNombre(text);
          setSaved(false);
        }}
      />
      <TextInput
        style={inputStyle}
        placeholder="Edad"
        placeholderTextColor={placeholderTextColor}
        keyboardType="numeric"
        value={edad}
        onChangeText={(text) => {
          const numericRegex = /^[0-9]*$/;
          if (numericRegex.test(text) || text === "") {
            setEdad(text);
            setSaved(false);
          }
        }}
      />
      <TextInput
        style={inputStyle}
        placeholder="Biografía"
        placeholderTextColor={placeholderTextColor}
        multiline
        value={bio}
        onChangeText={(text) => {
          setBio(text);
          setSaved(false);
        }}
      />

      <CustomButton
        label="Guardar"
        onPress={guardarPerfil}
        style={buttonDynamicStyle}
      />

      <View style={{ marginTop: 20 }}>
        <Text style={textStyle}>
          Tu nombre es: {nombre}, tienes {edad} años.
        </Text>

        {saved && (
          <Text style={{ ...textStyle, color: "green", fontWeight: "bold", marginTop: 10 }}>
            Datos guardados correctamente
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;