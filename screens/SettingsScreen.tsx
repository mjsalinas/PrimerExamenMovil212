import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
      <Text onPress={() => setShowAdvanced(!showAdvanced)}>
        Mostrar Avanzado
      </Text>
      {showAdvanced && <Text>Configuraciones Avanzadas</Text>}
    </View>
  );
};

export default SettingsScreen;
