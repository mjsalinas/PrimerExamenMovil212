import { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const theme = darkMode ? dark : light;

  return (
    <View style={[styles.container, { backgroundColor: theme.bg }]}>
      <Text style={[styles.title, { color: theme.text }]}>Configuración</Text>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.label, { color: theme.text }]}>Modo Oscuro</Text>
        <Switch
          value={darkMode}
          onValueChange={() => setDarkMode(!darkMode)}
        />
      </View>

      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={() => setShowAdvanced(!showAdvanced)}
      >
        <Text style={styles.toggleBtnText}>
          {showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
        </Text>
      </TouchableOpacity>

      {showAdvanced && (
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Configuraciones Avanzadas
          </Text>
          <Text style={{ color: theme.text }}>- Notificaciones</Text>
          <Text style={{ color: theme.text }}>- Seguridad</Text>
          <Text style={{ color: theme.text }}>- Permisos</Text>
        </View>
      )}
    </View>
  );
}

const light = {
  bg: "#F5F5F5",
  card: "#FFFFFF",
  text: "#000000"
};

const dark = {
  bg: "#0D0F18",
  card: "#1E2230",
  text: "#FFFFFF"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold"
  },
  card: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  toggleBtn: {
    backgroundColor: "#4CAF50",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20
  },
  toggleBtnText: {
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold"
  }
});
