import React from "react";
import { CustomButton } from "../components/CustomButton";
import { View, Button , Text,  TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 

export default function HomeScreen ({ navigation }: any)  {
  const showWelcome = false;


  

  return (
    <SafeAreaView style={{ padding: 10 }}>
      {showWelcome || <Text>Bienvenido a la App</Text>}


      <CustomButton title="Ir al Perfil" onPress={navigation.navigate('Profile')}/>

    </SafeAreaView>
  );
};

