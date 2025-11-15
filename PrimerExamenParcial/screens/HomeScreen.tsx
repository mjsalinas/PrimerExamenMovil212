import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{ padding: 10 }}>

      <Text>Bienvenido a la App</Text>
      <CustomButton
        title="Ir a Perfil" onPress={() => navigation.navigate("Tabs", { screen: "Profile" })}
      />
      <CustomButton
        title="Ir a configuracion" onPress={() => navigation.navigate("Tabs", { screen: "Settings" })}
      />
    </SafeAreaView>
  );
}

// quise utilizar safe areview para siempre mantener los margnesne correctos de arriba 