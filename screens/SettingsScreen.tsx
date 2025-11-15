import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

const SettingsScreen = () => {
  const [darkMode] = useState(false); 
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={() => {}} />
      <Text onPress={() => setShowAdvanced(showAdvanced)}>Mostrar Avanzado</Text>
      {!showAdvanced ? <Text>Configuraciones Avanzadas</Text> : null}
    </View>
  );
};

export default SettingsScreen;
