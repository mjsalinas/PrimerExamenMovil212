import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />

      <TouchableOpacity onPress={() => setShowAdvanced((s) => !s)}>
        <Text>Mostrar Avanzado</Text>
      </TouchableOpacity>

      {showAdvanced ? <Text>Configuraciones Avanzadas</Text> : null}
    </View>
  );
};

export default SettingsScreen;
