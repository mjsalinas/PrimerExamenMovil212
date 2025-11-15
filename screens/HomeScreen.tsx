import React, { useState } from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import CustomButton from "../components/CustomButton";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [showWelcome, setShowWelcome] = useState<boolean>(true);

  const goProfile = () => navigation.navigate("Profile");
  const toggleWelcome = () => setShowWelcome((v) => !v);

  return (
    <View style={{ padding: 20 }}>
      {showWelcome && <Text>Bienvenido a la App</Text>}

      <CustomButton label="Ir a Perfil" onPress={goProfile} />
      <CustomButton
        label={showWelcome ? "Ocultar saludo" : "Mostrar saludo"}
        onPress={toggleWelcome}
      />
    </View>
  );
};

export default HomeScreen;
