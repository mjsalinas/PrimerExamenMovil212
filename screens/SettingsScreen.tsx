import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const bgColor = darkMode ? '#121212' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#111111';
  const cardBg = darkMode ? '#1e1e1e' : '#f7f7f7';

  return (
    <View style={[styles.container, { backgroundColor: bgColor }] }>
      <View style={[styles.card, { backgroundColor: cardBg }] }>
        <Text style={[styles.label, { color: textColor }]}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <TouchableOpacity onPress={() => setShowAdvanced(prev => !prev)} style={{marginTop:12}}>
        <Text style={[styles.advancedToggle, { color: darkMode ? '#8ab4ff' : 'blue' }]}>{showAdvanced ? 'Ocultar Avanzado' : 'Mostrar Avanzado'}</Text>
      </TouchableOpacity>

      {showAdvanced && (
        <View style={[styles.card, { backgroundColor: cardBg, marginTop: 12, flexDirection: 'column' }] }>
          <Text style={{ color: textColor, fontSize: 16, fontWeight: '600' }}>Configuraciones Avanzadas</Text>
          <Text style={{ color: textColor, marginTop: 12 }}>Otras opciones y detalles aquí.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  card: {
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16
  },
  advancedToggle: {
    fontSize: 15
  }
});

export default SettingsScreen;