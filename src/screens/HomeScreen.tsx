import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton"; 

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = false;

  return (
    <View style={{ padding: 20 }}>
      {showWelcome && <Text style={{ fontSize: 18, marginBottom: 20 }}>Bienvenido a la App</Text>}

      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate("Tabs", { screen: "Profile" })}
        variant="primary"
      />

      <CustomButton
        title="Ir a Configuración"
        onPress={() => navigation.navigate("Tabs", { screen: "Settings", params: { flag: false } })}
        variant="secondary"
      />
    </View>
  );
};

export default HomeScreen;