import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
        <Text style={styles.title}>Inicio</Text>

        <CustomButton
          title="Ir a Perfil"
          onPress={() => navigation.navigate("Tabs")}
        />

        <CustomButton
          title="Ir a Configuración"
          variant="secondary"
          onPress={() => navigation.navigate("Tabs", { screen: "Settings" })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
});