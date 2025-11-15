import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type PropsButton = {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function CustomButton({ label, onPress, variant = "primary"}:PropsButton) {
  const styles = getStyles(variant);
  
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const getStyles = (variant: "primary" | "secondary") => 
  StyleSheet.create({
    button: {
  backgroundColor: variant === "primary" ? "#18aa1dff" : "#332020ff",
     
      minWidth: 95,           
      marginVertical: 10,
      alignSelf: 'flex-start',  
      borderRadius: 6,
      alignItems: "center",
      paddingVertical: 6,      
      paddingHorizontal: 6,  
     
    
    
    },
    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });