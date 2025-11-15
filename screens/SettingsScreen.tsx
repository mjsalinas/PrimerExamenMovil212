import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const theme = {
    bg: darkMode ? "#11121A" : "#f2f2f2",
    card: darkMode ? "#1e1f29" : "white",
    text: darkMode ? "white" : "black",
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

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  label: { fontSize: 16, marginBottom: 5, fontWeight: "bold" },
  greenBtn: {
    backgroundColor: "#28a745",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  greenBtnText: { color: "white", fontWeight: "bold", textAlign: "center" },
});
