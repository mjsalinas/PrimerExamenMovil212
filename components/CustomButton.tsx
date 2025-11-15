import React from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
};

export default function CustomButton({ title, onPress, variant = "primary" }: Props) {
  const background = variant === "primary" ? "#1E88E5" : "#43A047";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: background,
        padding: 12,
        borderRadius: 6,
        marginVertical: 6,
      }}
    >
      <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
