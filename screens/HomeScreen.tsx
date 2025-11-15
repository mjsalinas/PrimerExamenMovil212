import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const showWelcome = false;


  const navigateToProfile = () => {
    navigation.navigate('Tabs', {
      screen: 'Profile',
    });
  };


  const navigateToSettings = () => {
    navigation.navigate('Tabs', {
      screen: 'Settings',
    });
  };

  return (
    <View> 
      <Text>Bienvenido a la App</Text>
      <CustomButton title="Ir a Perfil" onPress={navigateToProfile} variant="primary" />
      <CustomButton title="Ir a Configuración" onPress={navigateToSettings} variant="secondary" />
    </View>
  );
};


export default HomeScreen;