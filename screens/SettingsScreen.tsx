import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const textColor = darkMode ? "#fff" : "#000";
  const bgColor = darkMode ? "#1a1a1a" : "#fff";
  const cardBg = darkMode ? "#2a2a2a" : "#f5f5f5";

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.centered}>
        <Text style={[styles.title, { color: textColor }]}>Configuración</Text>

        {/* Modo Oscuro Card */}
        <View style={[styles.card, { backgroundColor: cardBg }]}>
          <View style={styles.setting}>
            <Text style={[styles.label, { color: textColor }]}>Modo Oscuro</Text>
            <Switch
              value={darkMode}
              onValueChange={() => setDarkMode((v) => !v)}
              trackColor={{ false: "#ccc", true: "#2b6cf6" }}
              thumbColor={darkMode ? "#2b6cf6" : "#f4f3f4"}
            />
          </View>
        </View>

        {/* Botón Mostrar/Ocultar Avanzado */}
        <TouchableOpacity
          onPress={() => setShowAdvanced((s) => !s)}
          style={[styles.buttonAdvanced, { backgroundColor: "#43A047" }]}
        >
          <Text style={styles.buttonText}>
            {showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
          </Text>
        </TouchableOpacity>

        {/* Configuraciones Avanzadas */}
        {showAdvanced && (
          <View style={[styles.advancedContainer, { backgroundColor: cardBg }]}>
            <Text style={[styles.advancedTitle, { color: textColor }]}>
              Configuraciones Avanzadas
            </Text>
            <Text style={[styles.advancedItem, { color: textColor }]}>
              • Notificaciones
            </Text>
            <Text style={[styles.advancedItem, { color: textColor }]}>
              • Seguridad
            </Text>
            <Text style={[styles.advancedItem, { color: textColor }]}>
              • Permisos
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  buttonAdvanced: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  advancedContainer: {
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
  },
  advancedTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  advancedItem: {
    fontSize: 14,
    marginVertical: 6,
    lineHeight: 20,
  },
});