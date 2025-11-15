import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = true;

  const handleGoToProfile = () => {
    navigation.navigate("Tabs", { screen: "Profile" });
  };

  const handleGoToSettings = () => {
    navigation.navigate("Tabs", { screen: "Settings" });
  };

  return (
    <View style={styles.container}>
      {showWelcome && <Text style={styles.welcomeText}> Bienvenido a la App</Text>}

      <CustomButton 
        title="Ir a Perfil" 
        onPress={handleGoToProfile}
        variant="primary"
      />
      
      <CustomButton 
        title="Ir a Configuracion" 
        onPress={handleGoToSettings}
        variant="secondary"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;