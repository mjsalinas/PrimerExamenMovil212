import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = false;

  return (
    <View style={{ padding: 20 }}>
      {showWelcome || <Text>Bienvenido a la App</Text>}

      <CustomButton
        label="Ir a Perfil"
        onPress={() => {
          navigation.navigate("MainTabs", { screen: "Perfil" });
        }}
      />

      <CustomButton
        label="Ir a Configuración"
        onPress={() => {
          navigation.navigate("MainTabs", { screen: "Configuracion" });
        }}
      />
    </View>
  );
};

export default HomeScreen;
