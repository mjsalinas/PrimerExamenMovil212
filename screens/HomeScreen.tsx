import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Bienvenido a la App</Text>

      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate("Tabs", { screen: "Profile" })}
      />

      <CustomButton
        title="Ir a Configuración"
        variant="secondary"
        onPress={() => navigation.navigate("Tabs", { screen: "Settings" })}
      />
    </View>
  );
}
