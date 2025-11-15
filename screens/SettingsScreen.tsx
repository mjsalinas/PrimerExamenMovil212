import React, { useEffect, useState } from "react";
import { View, Text, Switch,StyleSheet, TouchableOpacity } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setdarkMode] = useState(false); 
  const [showAdvanced, setShowAdvanced] = useState(false);



  return (
    <View style={[{padding:20} , darkMode&&styles.oscuro]}>
      <Text style={[styles.text1, darkMode&&{color: '#fff'}]}>Configuracion</Text>
      <TouchableOpacity style={[styles.boton1, darkMode&&{backgroundColor: '#1a1e2aff'}]}>
      <Text style={styles.text2}>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={(darkMode) => {
        setdarkMode(darkMode);
      }} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton2}>
      <Text style={styles.text3} onPress={() => setShowAdvanced(!showAdvanced)}>Mostrar Avanzado</Text>
      </TouchableOpacity>

      {
        showAdvanced ? (
          <TouchableOpacity style={[styles.avanzadas, darkMode&&{backgroundColor: '#1a1e2aff'}]}>
            <Text style={[styles.text4, darkMode&&{color: '#fff'}]}>Configuraciones Avanzadas</Text>
            <Text style={styles.opciones}>-Notificaciones</Text>
            <Text style={styles.opciones}>-Seguridad</Text>
            <Text style={styles.opciones}>-Permisos</Text>            
          </TouchableOpacity>
        ) : null
      }


    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize:30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  boton1:{
    borderRadius:10,
    backgroundColor: '#fff',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop:25,
    paddingLeft:15,
    paddingRight:15
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
    backgroundColor:'#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 4

  },
  text4:{
    fontSize:20,
    fontWeight: 'bold',
    paddingBottom:10
  },
  oscuro:{
    backgroundColor: '#03000fff',
    flex:1
  },
  opciones:{
    color: '#646464ff'
  }
});


export default SettingsScreen;