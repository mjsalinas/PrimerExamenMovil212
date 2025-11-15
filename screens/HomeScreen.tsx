import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = true;

  return (
    <View style={{ padding: 20 }}>
      {showWelcome ? <Text style={{fontSize:18,marginBottom:12}}>Bienvenido a la App</Text> : null}

      <CustomButton
        title="Ir a Perfil"
        variant="primary"
        onPress={() => navigation.navigate('Tabs', { screen: 'Profile' })}
        style={{ marginBottom: 12 }}
      />

      <CustomButton
        title="Ir a Configuración"
        variant="secondary"
        onPress={() => navigation.navigate('Tabs', { screen: 'Settings' })}
      />
    </View>
  );
};

export default HomeScreen;