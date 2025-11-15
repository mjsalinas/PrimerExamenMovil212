import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />

      <Text 
        style={styles.advancedText} 
        onPress={() => setShowAdvanced(!showAdvanced)}
      >
        Mostrar Avanzado
      </Text>

      {showAdvanced && <Text>Configuraciones Avanzadas</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  advancedText: {
    marginTop: 20,
    color: "red",
  },
});