import { Text, View, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const SettingsScreen = ({ route }: { route: any }) => {
  const { flag } = route.params;
  const [showAdvanced, setShowAdvanced] = useState(flag ?? false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const toggleAdvanced = () => setShowAdvanced((prev: any) => !prev);

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: isDarkMode ? '#ffffff' : '#000000',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      color: isDarkMode ? '#ffffff' : '#000000',
      marginBottom: 10,
    },
    advancedBox: {
      marginTop: 15,
      padding: 10,
      backgroundColor: isDarkMode ? '#2e2e2e' : '#f0f0f0',
      borderRadius: 8,
    },
  });

  return (
    <View style={dynamicStyles.container}>
      <Text style={dynamicStyles.title}>Configuración</Text>

      <Text style={dynamicStyles.subtitle}>Modo Oscuro</Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />

      <TouchableOpacity onPress={toggleAdvanced}>
        <Text style={dynamicStyles.subtitle}>
          {showAdvanced ? 'Ocultar Avanzado' : 'Mostrar Avanzado'}
        </Text>
      </TouchableOpacity>

      {showAdvanced && (
        <View style={dynamicStyles.advancedBox}>
          <Text style={dynamicStyles.subtitle}>- Notificaciones</Text>
          <Text style={dynamicStyles.subtitle}>- Seguridad</Text>
          <Text style={dynamicStyles.subtitle}>- Permisos</Text>
        </View>
      )}
    </View>
  );
};

export default SettingsScreen;