import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ label }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: "blue", padding: 10 }}>
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
