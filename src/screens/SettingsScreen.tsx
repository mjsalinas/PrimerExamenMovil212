import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "./context/ThemeContext";
// utilizar ctrl tabs o shift control p para ordenar codigo
export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const styles = getStyles(theme);

  return (
    <View style={styles.section}>
               <Text style={styles.titlesection}>Configuraciones Avanzadas</Text>
           
               <Text style={styles.settingstext}>• Opción 1</Text>
               <Text style={styles.settingstext}>• Opción 2</Text>
               {showAdvanced && (
               <View style={styles.settingsadvancetext}>
               
                   <Text style={styles.settingstext}>• Notificaciones</Text>
                   <Text style={styles.settingstext}>• Seguridad</Text>
                   <Text style={styles.settingstext}>• Permisos</Text>
               </View>
               )}
           </View>
    );
       }
    
   
       const getStyles = (theme: "light" | "dark") => 
       StyleSheet.create({
           container: {
           flex: 1,
           padding: 20,
           //uso de los if ternarios  o sea ===
           backgroundColor: theme === "dark" ? "#030303ff" : "#f5f5f5",
           },
           title: {
           fontSize: 24,
           fontWeight: "bold",
           textAlign: "left",
           marginBottom: 30,
           //uso de los if ternarios  o sea ===
           color: theme === "dark" ? "#fff" : "#000",
           },
           section: {
               //uso de los if ternarios  o sea ===
           backgroundColor: theme === "dark" ? "#2d2d2d" : "#fff",
           padding: 20,
           borderRadius: 12,
           marginBottom: 20,
           },
           section2: {
           //uso de los if ternarios  o sea ===
           backgroundColor: theme === "dark" ? "#2d2d2d" : "#fff",
           padding: 10,
           borderRadius: 12,
           marginBottom: 10,
           shadowColor: "#000",
           //uso de los if ternarios  o sea ===
           shadowRadius: 4,
           
           },
           titlesection: {
           fontSize: 18,
           fontWeight: "bold",
           marginBottom: 15,
           alignContent: 'center',
           justifyContent: 'center',
           alignItems: 'center',
           //uso de los if ternarios  o sea ===
           color: theme === "dark" ? "#fff" : "#000",
           },
           ModernButtonor: {
           justifyContent: "space-between",
           alignItems: 'flex-end'
           },
           label: {
           fontSize: 16,
           color: theme === "dark" ? "#fff" : "#000",
           },
           settingsadvancetext: {
       //uso de los if ternarios  o sea ===
           backgroundColor: theme === "dark" ? "#302e2eff" : "#f8f8f8",
           borderRadius: 10,
           
           },
           settingstext: {
           fontSize: 16,
           marginBottom: 8,
           //uso de los if ternarios  o sea ===
           color: theme === "dark" ? "#fff" : "#000",
           },
       });