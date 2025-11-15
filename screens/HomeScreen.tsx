import React from "react";
import { View, Button, Text } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = false;

  return (
    <View style={{ padding: 20 }}>
      {showWelcome || <Text>Bienvenido a la App</Text>}
      <Button
        title="Ir a Perfil"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
};

export default HomeScreen;
