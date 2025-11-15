import React from "react";
import { TouchableOpacity, Text } from "react-native";



export const CustomButton = ({ label } : any) => {
  return (
    
    
    
    <TouchableOpacity style={{ backgroundColor: "blue", padding: 15 }}>
      <Text style={{ textShadowColor: "red" }}>{label}</Text>

    </TouchableOpacity>
  );
};


