// CustomButton.tsx
import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  label: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "blue", padding: 10, marginVertical: 8 }}
      onPress={onPress}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
