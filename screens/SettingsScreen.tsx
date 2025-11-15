import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />

      <TouchableOpacity onPress={() => setShowAdvanced(prev => !prev)}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Mostrar Avanzado</Text>
      </TouchableOpacity>

      {showAdvanced ? <Text style={{marginTop:10}}>Configuraciones Avanzadas</Text> : null}
    </View>
  );
};

export default SettingsScreen;