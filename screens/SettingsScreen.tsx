import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  const styles = getStyles(darkMode);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Configuración</Text>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Modo Oscuro</Text>
          <Switch 
            value={darkMode} 
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#2d0f2f' }}
          />
        </View>

        <CustomButton
          title={showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
          onPress={toggleAdvanced}
          variant="secondary"
        />

        {showAdvanced && (
          <View style={styles.advancedSection}>
            <Text style={styles.advancedTitle}> Configuraciones Avanzadas</Text>
            <Text style={styles.advancedText}>+ Notificacion </Text>
            <Text style={styles.advancedText}>+ Seguridad</Text>
            <Text style={styles.advancedText}>+ Permisos</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const getStyles = (darkMode: boolean) => 
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkMode ? '#000' : '#f5f5f5',
      padding: 20,
      justifyContent: 'center'
    },
    card: {
      backgroundColor: darkMode ? '#000000ff' : '#FFFFFF',
      borderRadius: 15,
      padding: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: darkMode ? 0.1 : 0.2,
      shadowRadius: 4,
      elevation: 6,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: darkMode ? '#fff' : '#000'
    },
    settingItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      paddingVertical: 10
    },
    settingText: {
      fontSize: 18,
      color: darkMode ? '#fff' : '#000'
    },
    advancedSection: {
      marginTop: 20,
      padding: 15,
      backgroundColor: darkMode ? '#000000ff' : '#f0f0f0',
      borderRadius: 8
    },
    advancedTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: darkMode ? '#fff' : '#000'
    },
    advancedText: {
      fontSize: 16,
      marginBottom: 5,
      color: darkMode ? '#ccc' : '#000000ff'
    }
  });

export default SettingsScreen;