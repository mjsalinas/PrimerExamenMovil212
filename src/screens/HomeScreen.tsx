import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "./components/CustomButton";



export default function HomeScreen({ navigation }: any) {
  const showWelcome = false;

  return (
    <View style={styles.container}>
      {showWelcome ? <Text style={styles.text}>Bienvenido a la App</Text> : null}
      
      <CustomButton
        label="Ir a Perfil"
        onPress={() => navigation.navigate("Profile")}
        variant= "secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
});