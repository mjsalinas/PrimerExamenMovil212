import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeContext"; 

export default function SettingsScreen () {
  const { theme, toggleTheme } = useTheme(); 
  const [showAdvanced, setShowAdvanced] = useState(false);

  const screenStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0', 
    },
    card: {
      backgroundColor: theme === 'dark' ? '#555' : '#fff', 
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    text: {
      fontSize: 18,
      color: theme === 'dark' ? '#fff' : '#333', 
      marginBottom: 10,
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    advancedToggleText: {
      fontSize: 16,
      color: '#007bff',
      textDecorationLine: 'underline',
      marginBottom: 15,
    },
    advancedContent: {
      backgroundColor: theme === 'dark' ? '#666' : '#e0e0e0',
      borderRadius: 8,
      padding: 15,
      marginTop: 10,
    },
    advancedText: {
      fontSize: 14,
      color: theme === 'dark' ? '#eee' : '#555',
    }
  });

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.card}>
        <View style={screenStyles.switchContainer}>
          <Text style={screenStyles.text}>Modo Oscuro</Text>
          <Switch
            value={theme === 'dark'} 
            onValueChange={toggleTheme}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={theme === 'dark' ? "#f4f3f4" : "#f4f3f4"}
          />
        </View>

        <TouchableOpacity onPress={() => setShowAdvanced(!showAdvanced)}>
          <Text style={screenStyles.advancedToggleText}>
            {showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
          </Text>
        </TouchableOpacity>

        {showAdvanced && ( 
          <View style={screenStyles.advancedContent}>
            <Text style={screenStyles.advancedText}>
              Configuraciones Avanzadas: Aquí puedes ajustar opciones de desarrollador, notificaciones, etc.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};