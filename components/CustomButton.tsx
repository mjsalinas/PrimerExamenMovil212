import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

type CustomButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: "blue", padding: 10 }}
    >
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
