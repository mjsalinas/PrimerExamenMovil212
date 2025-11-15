import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={{ padding: 20, backgroundColor: darkMode ? "#222" : "#fff", flex: 1 }}>
      <Text style={{ color: darkMode ? "#fff" : "#000" }}>Modo Oscuro</Text>

      <Switch
        value={darkMode}
        onValueChange={() => setDarkMode(!darkMode)}
      />

      <Text
        style={{ marginTop: 20, color: darkMode ? "#fff" : "#000" }}
        onPress={() => setShowAdvanced(!showAdvanced)}
      >
        {showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
      </Text>

      {showAdvanced && (
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: darkMode ? "#fff" : "#000" }}>
            Configuraciones avanzadas...
          </Text>
        </View>
      )}
    </View>
  );
}
