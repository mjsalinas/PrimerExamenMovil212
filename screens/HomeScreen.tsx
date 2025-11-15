// screens/HomeScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Bienvenido a la App</Text>

      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate("Tabs", { screen: "Profile" })}
        variant="primary"
      />

      <CustomButton
        title="Ir a Configuración"
        onPress={() => navigation.navigate("Tabs", { screen: "Settings" })}
        variant="secondary"
      />
    </View>
  );
};

export default HomeScreen;
