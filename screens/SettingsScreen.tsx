import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const theme = {
    bg: darkMode ? "Black" : "White",
    card: darkMode ? "Gray" : "White",
    text: darkMode ? "White" : "Black",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.title, { color: theme.text }]}>Configuración</Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.label, { color: theme.text }]}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <TouchableOpacity
        style={styles.greenBtn}
        onPress={() => setShowAdvanced(!showAdvanced)}
      >
        <Text style={styles.greenBtnText}>
          {showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
        </Text>
      </TouchableOpacity>

      {showAdvanced && (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.label, { color: theme.text }]}>
            Configuraciones Avanzadas
          </Text>

          {darkMode ? (
            <>
              <Text style={{ color: theme.text }}>- Notificaciones</Text>
              <Text style={{ color: theme.text }}>- Seguridad</Text>
              <Text style={{ color: theme.text }}>- Permisos</Text>
            </>
          ) : (
            <>
              <Text style={{ color: theme.text }}>- Opción 1</Text>
              <Text style={{ color: theme.text }}>- Opción 2</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
}

export default SettingsScreen;