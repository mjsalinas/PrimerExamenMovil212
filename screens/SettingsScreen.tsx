import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

type Props = {
  darkMode: boolean;
  setdarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsScreen = ({ darkMode, setdarkMode }: Props) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const containerStyle = {
    flex: 1,
    padding: 20,
    backgroundColor: darkMode ? "#121212" : "#F5F5F5",
  };

  const textStyle = {
    color: darkMode ? "#FFFFFF" : "#000000",
    fontSize: 16,
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#333333" : "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    elevation: darkMode ? 1 : 3,
  };

  const buttonAvanzado = {
    backgroundColor: darkMode ? '#333333' : '#007AFF',
    marginTop: 15,
    borderWidth: darkMode ? 1 : 0,
    borderColor: darkMode ? '#555' : 'transparent',
  };

  return (
    <View style={containerStyle}>
      <View style={[cardStyle, styles.settingRow]}>
        <Text style={textStyle}>Modo Oscuro</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
          value={darkMode}
          onValueChange={setdarkMode}
        />
      </View>

      <CustomButton
        label={showAdvanced ? "Ocultar Avanzado" : "Mostrar Avanzado"}
        onPress={() => setShowAdvanced(!showAdvanced)}
        style={buttonAvanzado}
      />

      {showAdvanced && (
        <View style={cardStyle}>
          <Text style={[textStyle, { fontWeight: 'bold' }]}>Configuraciones Avanzadas</Text>
          <Text style={{ ...textStyle, color: darkMode ? '#AAA' : '#555', marginTop: 10 }}>
            - Notificaciones
          </Text>
          <Text style={{ ...textStyle, color: darkMode ? '#AAA' : '#555', marginTop: 10 }}>
            - Seguridad
          </Text>
          <Text style={{ ...textStyle, color: darkMode ? '#AAA' : '#555', marginTop: 10 }}>
            - Permisos
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SettingsScreen;