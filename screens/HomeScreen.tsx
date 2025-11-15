import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Bienvenido
      </Text>

      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate("Tabs", { screen: "Perfil" })}
      />

      <CustomButton
        title="Ir a Configuración"
        variant="secondary"
        onPress={() => navigation.navigate("Tabs", { screen: "Configuración" })}
      />
    </View>
  );
}
