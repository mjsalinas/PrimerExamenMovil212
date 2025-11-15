import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";


const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false); 
  const [showAdvanced, setShowAdvanced] = useState(false);
  const styles = getStyles(darkMode)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const handleShowAdvanced = ()=>{
    setShowAdvanced(!showAdvanced)
  }

  return (
    <View style={styles.Container}>
        <Text style={styles.title}>Configuración</Text>
      <View style={styles.switchContainer}>  
        <Text style={styles.text}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={handleDarkMode} />
      </View>
      <CustomButton label={!showAdvanced?"Mostrar Avanzado":"Ocultar Avanzado"} onPress={handleShowAdvanced}></CustomButton>

      {showAdvanced ? 
        <View style={styles.advancedContainer}>
            <Text style={styles.textSetting}>Configuraciones Avanzadas</Text>
            <Text style={styles.text}>- Notificaciones</Text>
            <Text style={styles.text}>- Seguridad</Text>
            <Text style={styles.text}>- Permisos</Text>
        </View> 
      : null}
    </View>
  );
};

export default SettingsScreen;

const getStyles = (darkMode: true | false) => 
    StyleSheet.create({
        Container:{
            flex:1,
            flexDirection: 'column',
            alignItems:'flex-start',
            
            height: '100%',
            width:'100%',
            padding: 20,
            backgroundColor: darkMode === true ? '#1e1e2c' : '#f5f5f5'

        },
        switchContainer:{
            flexDirection: 'row',
            backgroundColor: darkMode === true ? '#2c2c3a' : 'white',
            borderRadius: 10,
            width: '98%',
            height: '10%',
            justifyContent: 'space-between',
            alignItems:'center',
            paddingHorizontal: 15,
        },
        text:{
            color: darkMode === true ? 'white':'black',
            fontSize: 14,
            
        },
        textSetting:{
            color: darkMode === true ? 'white':'black',
            fontSize: 18,
            marginBottom: 10,
            fontWeight:'bold',
        },
        advancedContainer:{
            height: '20%',
            width:'98%',
            backgroundColor: darkMode === true ? '#2c2c3a' : 'white',
            padding: 20,
            borderRadius:10,
            justifyContent:'center'
        },
        title:{
            color: darkMode === true ? 'white':'black',
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 10,
        }
    })