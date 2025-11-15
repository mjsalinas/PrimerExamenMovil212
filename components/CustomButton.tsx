import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

type CustomButtonProps = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={{ backgroundColor: "blue", padding: 10, borderRadius: 6 }}
    >
      <Text style={{ color: "white", textAlign: 'center' }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
