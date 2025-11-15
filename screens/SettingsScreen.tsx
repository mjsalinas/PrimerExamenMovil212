import React, { useEffect, useState } from "react";
import { View, Text, Switch,StyleSheet, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setdarkMode] = useState(false); 
  const [showAdvanced, setShowAdvanced] = useState(false);



  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.text1}>Configuracion</Text>
      <TouchableOpacity style={styles.boton1}>
      <Text style={styles.text2}>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={(darkMode) => {
        setdarkMode(darkMode);
      }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton2}>
      <Text style={styles.text3} onPress={() => setShowAdvanced(!showAdvanced)}>Mostrar Avanzado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.avanzadas}>
      {showAdvanced ? <Text>Configuraciones Avanzadas</Text> : null}
      {showAdvanced ? <Text>-opcion 1</Text> : null}
      {showAdvanced ? <Text>-opcion 2</Text> : null}           
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize:30,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  boton1:{
    borderRadius:10,
    backgroundColor: '#fff',
    shadowColor: '#000000ff',
    shadowRadius:10,
    shadowOpacity:10,
    padding:10,
  },
    text2: {
    fontSize:20,
    color:'#6e6e6eff'
  },
  boton2:{
    backgroundColor:'#44962dff',
    width:200,
    borderRadius: 10,
    marginTop:20,
    marginBottom:20,
        justifyContent:'center'
  },
  text3:{
    color:'#fff',
    fontSize:20,
    padding:10,
    justifyContent:'center'
  },
  avanzadas:{
    backgroundColor:'#fff'
  }
});


export default SettingsScreen;