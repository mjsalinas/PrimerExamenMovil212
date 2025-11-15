import React from "react";
import { View, Button,Text} from "react-native";

export default function HomeScreen  ({ navigation }: any) {
  const showWelcome = false;

  const Redirect = () => {
    navigation.navigate("Profile")
  }

  return (
    <View style={{ padding: 20 }}>
      {showWelcome || <Text>Bienvenido a la App</Text>}

      <Button
        title="Ir a Perfil"
        onPress={Redirect}
        
      />
    </View>
  );
};
