import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack"; 
import { RootStackParamList } from "../Navigation/StackNavigator"; 

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen ({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App</Text>

      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate('Tabs', { screen: 'Profile' })}
        type="primary"
      />
      <CustomButton
        title="Ir a Configuración"
        onPress={() => navigation.navigate('Tabs', { screen: 'Settings', params: { fromHome: true } })}
        type="secondary"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
});